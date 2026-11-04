/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var tu="160";var zg=0,Nd=1,Hg=2;var Mp=1,Vg=2,Fi=3,Hn=0,un=1,kn=2;var cs=0,Ir=1,Dd=2,Ud=3,Od=4,Gg=5,zs=100,Wg=101,Xg=102,Fd=103,kd=104,qg=200,$g=201,Yg=202,jg=203,bh=204,Mh=205,Zg=206,Jg=207,Kg=208,Qg=209,e0=210,t0=211,n0=212,i0=213,s0=214,r0=0,a0=1,o0=2,Qo=3,l0=4,c0=5,h0=6,u0=7,Ol=0,d0=1,f0=2,hs=0,p0=1,m0=2,g0=3,y0=4,_0=5,v0=6,Bd="attached",x0="detached",Sp=300,Ur=301,Or=302,Sh=303,wh=304,Fl=306,ds=1e3,Cn=1001,Eh=1002,pn=1003,zd=1004;var zc=1005;var On=1006,b0=1007;var fs=1008;var us=1009,M0=1010,S0=1011,nu=1012,wp=1013,ls=1014,Bi=1015,Aa=1016,Ep=1017,Tp=1018,Gs=1020,w0=1021,ei=1023,E0=1024,T0=1025,Ws=1026,Fr=1027,A0=1028,Ap=1029,C0=1030,Cp=1031,Rp=1033,Hc=33776,Vc=33777,Gc=33778,Wc=33779,Hd=35840,Vd=35841,Gd=35842,Wd=35843,Lp=36196,Xd=37492,qd=37496,$d=37808,Yd=37809,jd=37810,Zd=37811,Jd=37812,Kd=37813,Qd=37814,ef=37815,tf=37816,nf=37817,sf=37818,rf=37819,af=37820,of=37821,Xc=36492,lf=36494,cf=36495,R0=36283,hf=36284,uf=36285,df=36286;var el=2300,tl=2301,qc=2302,ff=2400,pf=2401,mf=2402,L0=2500;var Pp=3e3,Xs=3001,P0=3200,I0=3201,iu=0,N0=1,ti="",Vt="srgb",Hi="srgb-linear",su="display-p3",kl="display-p3-linear",nl="linear",Ot="srgb",il="rec709",sl="p3";var hr=7680;var gf=519,D0=512,U0=513,O0=514,Ip=515,F0=516,k0=517,B0=518,z0=519,Th=35044;var yf="300 es",Ah=1035,zi=2e3,rl=2001,ps=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_f=1234567,Sa=Math.PI/180,kr=180/Math.PI;function hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function ru(n,e){return(n%e+e)%e}function H0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function V0(n,e,t){return n!==e?(t-n)/(e-n):0}function wa(n,e,t){return(1-t)*n+t*e}function G0(n,e,t,i){return wa(n,e,1-Math.exp(-t*i))}function W0(n,e=1){return e-Math.abs(ru(n,e*2)-e)}function X0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function q0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Y0(n,e){return n+Math.random()*(e-n)}function j0(n){return n*(.5-Math.random())}function Z0(n){n!==void 0&&(_f=n);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(n){return n*Sa}function K0(n){return n*kr}function Ch(n){return(n&n-1)===0&&n!==0}function Q0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function al(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ey(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ys={DEG2RAD:Sa,RAD2DEG:kr,generateUUID:hi,clamp:An,euclideanModulo:ru,mapLinear:H0,inverseLerp:V0,lerp:wa,damp:G0,pingpong:W0,smoothstep:X0,smootherstep:q0,randInt:$0,randFloat:Y0,randFloatSpread:j0,seededRandom:Z0,degToRad:J0,radToDeg:K0,isPowerOfTwo:Ch,ceilPowerOfTwo:Q0,floorPowerOfTwo:al,setQuaternionFromProperEuler:ey,normalize:Ct,denormalize:gi},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],f=s[6],A=s[1],b=s[4],L=s[7],I=s[2],N=s[5],D=s[8];return r[0]=o*v+a*A+l*I,r[3]=o*p+a*b+l*N,r[6]=o*f+a*L+l*D,r[1]=c*v+h*A+u*I,r[4]=c*p+h*b+u*N,r[7]=c*f+h*L+u*D,r[2]=d*v+m*A+g*I,r[5]=d*p+m*b+g*N,r[8]=d*f+m*L+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$c=new pt;function Np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ty(){let n=Ca("canvas");return n.style.display="block",n}var vf={};function Ea(n){n in vf||(vf[n]=!0,console.warn(n))}var xf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[Hi]:{transfer:nl,primaries:il,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:Ot,primaries:il,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[kl]:{transfer:nl,primaries:sl,toReference:n=>n.applyMatrix3(bf),fromReference:n=>n.applyMatrix3(xf)},[su]:{transfer:Ot,primaries:sl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(bf),fromReference:n=>n.applyMatrix3(xf).convertLinearToSRGB()}},ny=new Set([Hi,kl]),Rt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ny.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=wo[e].toReference,s=wo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wo[n].primaries},getTransfer:function(n){return n===ti?nl:wo[n].transfer}};function Nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ur,ol=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ur===void 0&&(ur=Ca("canvas")),ur.width=e.width,ur.height=e.height;let i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ca("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Nr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nr(t[i]/255)*255):t[i]=Nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},iy=0,ll=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ol.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sy=0,Vn=class n extends ps{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Cn,s=Cn,r=On,o=fs,a=ei,l=us,c=n.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=hi(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xs?Vt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Xs:Pp}set encoding(e){Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xs?Vt:ti}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Sp;Vn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,L=(m+1)/2,I=(f+1)/2,N=(h+d)/4,D=(u+v)/4,W=(g+p)/4;return b>L&&b>I?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=N/i,r=D/i):L>I?L<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),i=N/s,r=W/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=D/r,s=W/r),this.set(i,s,r,t),this}let A=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(u-v)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rh=class extends ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xs?Vt:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ll(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends Rh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},cl=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lh=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-a,f=l*d+c*m+h*g+u*v,A=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let I=Math.sqrt(b),N=Math.atan2(I,f*A);p=Math.sin(p*N)/I,a=Math.sin(a*N)/I}let L=a*A;if(l=l*p+d*L,c=c*p+m*L,h=h*p+g*L,u=u*p+v*L,p===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zc=new U,Mf=new yi,mn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(e.matrixWorld),this.union(Eo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),To.subVectors(this.max,ma),dr.subVectors(e.a,ma),fr.subVectors(e.b,ma),pr.subVectors(e.c,ma),is.subVectors(fr,dr),ss.subVectors(pr,fr),Us.subVectors(dr,pr);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Us.z,Us.y,is.z,0,-is.x,ss.z,0,-ss.x,Us.z,0,-Us.x,-is.y,is.x,0,-ss.y,ss.x,0,-Us.y,Us.x,0];return!Jc(t,dr,fr,pr,To)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,dr,fr,pr,To))?!1:(Ao.crossVectors(is,ss),t=[Ao.x,Ao.y,Ao.z],Jc(t,dr,fr,pr,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new U,new U,new U,new U,new U,new U,new U,new U],oi=new U,Eo=new mn,dr=new U,fr=new U,pr=new U,is=new U,ss=new U,Us=new U,ma=new U,To=new U,Ao=new U,Os=new U;function Jc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Os.fromArray(n,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),l=e.dot(Os),c=t.dot(Os),h=i.dot(Os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ry=new mn,ga=new U,Kc=new U,ni=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ry.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Kc)),this.expandByPoint(ga.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new U,Qc=new U,Co=new U,rs=new U,eh=new U,Ro=new U,th=new U,Br=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Qc.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),rs.copy(this.origin).sub(Qc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=rs.dot(this.direction),l=-rs.dot(Co),c=rs.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qc).addScaledVector(Co,d),m}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){eh.subVectors(t,e),Ro.subVectors(i,e),th.crossVectors(eh,Ro);let o=this.direction.dot(th),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);let l=a*this.direction.dot(Ro.crossVectors(rs,Ro));if(l<0)return null;let c=a*this.direction.dot(eh.cross(rs));if(c<0||l+c>o)return null;let h=-a*rs.dot(th);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,m,g,v,p)}set(e,t,i,s,r,o,a,l,c,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,oy)}lookAt(e,t,i){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),as.crossVectors(i,Xn),as.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),as.crossVectors(i,Xn)),as.normalize(),Lo.crossVectors(Xn,as),s[0]=as.x,s[4]=Lo.x,s[8]=Xn.x,s[1]=as.y,s[5]=Lo.y,s[9]=Xn.y,s[2]=as.z,s[6]=Lo.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],A=i[3],b=i[7],L=i[11],I=i[15],N=s[0],D=s[4],W=s[8],S=s[12],C=s[1],X=s[5],ae=s[9],ge=s[13],F=s[2],B=s[6],k=s[10],ne=s[14],q=s[3],V=s[7],Q=s[11],te=s[15];return r[0]=o*N+a*C+l*F+c*q,r[4]=o*D+a*X+l*B+c*V,r[8]=o*W+a*ae+l*k+c*Q,r[12]=o*S+a*ge+l*ne+c*te,r[1]=h*N+u*C+d*F+m*q,r[5]=h*D+u*X+d*B+m*V,r[9]=h*W+u*ae+d*k+m*Q,r[13]=h*S+u*ge+d*ne+m*te,r[2]=g*N+v*C+p*F+f*q,r[6]=g*D+v*X+p*B+f*V,r[10]=g*W+v*ae+p*k+f*Q,r[14]=g*S+v*ge+p*ne+f*te,r[3]=A*N+b*C+L*F+I*q,r[7]=A*D+b*X+L*B+I*V,r[11]=A*W+b*ae+L*k+I*Q,r[15]=A*S+b*ge+L*ne+I*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*m-i*l*m)+v*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],A=u*p*c-v*d*c+v*l*m-a*p*m-u*l*f+a*d*f,b=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,L=h*v*c-g*u*c+g*a*m-o*v*m-h*a*f+o*u*f,I=g*u*l-h*v*l-g*a*d+o*v*d+h*a*p-o*u*p,N=t*A+i*b+s*L+r*I;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/N;return e[0]=A*D,e[1]=(v*d*r-u*p*r-v*s*m+i*p*m+u*s*f-i*d*f)*D,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*f+i*l*f)*D,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*m-i*l*m)*D,e[4]=b*D,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*D,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*D,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*m+t*l*m)*D,e[8]=L*D,e[9]=(g*u*r-h*v*r-g*i*m+t*v*m+h*i*f-t*u*f)*D,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*D,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*D,e[12]=I*D,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*p+t*u*p)*D,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*p-t*a*p)*D,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,v=o*h,p=o*u,f=a*u,A=l*c,b=l*h,L=l*u,I=i.x,N=i.y,D=i.z;return s[0]=(1-(v+f))*I,s[1]=(m+L)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(m-L)*N,s[5]=(1-(d+f))*N,s[6]=(p+A)*N,s[7]=0,s[8]=(g+b)*D,s[9]=(p-A)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=mr.set(s[0],s[1],s[2]).length(),o=mr.set(s[4],s[5],s[6]).length(),a=mr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);let c=1/r,h=1/o,u=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=zi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,g;if(a===zi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rl)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,m=(i+s)*h,g,v;if(a===zi)g=(o+r)*u,v=-2*u;else if(a===rl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mr=new U,li=new lt,ay=new U(0,0,0),oy=new U(1,1,1),as=new U,Lo=new U,Xn=new U,Sf=new lt,wf=new yi,hl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hl.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ly=0,Ef=new U,gr=new yi,Ni=new lt,Po=new U,ya=new U,cy=new U,hy=new yi,Tf=new U(1,0,0),Af=new U(0,1,0),Cf=new U(0,0,1),uy={type:"added"},dy={type:"removed"},Wt=class n extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new hl,i=new yi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new pt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Po.copy(e):Po.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ya,Po,this.up):Ni.lookAt(Po,ya,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Ni),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new U(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ci=new U,Di=new U,nh=new U,Ui=new U,yr=new U,_r=new U,Rf=new U,ih=new U,sh=new U,rh=new U,Io=!1,Vs=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ci.subVectors(s,t),Di.subVectors(i,t),nh.subVectors(e,t);let o=ci.dot(ci),a=ci.dot(Di),l=ci.dot(nh),c=Di.dot(Di),h=Di.dot(nh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,t,i,s,r,o,a,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(e,t,i,s){return ci.subVectors(i,t),Di.subVectors(e,t),ci.cross(Di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ci.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;yr.subVectors(s,i),_r.subVectors(r,i),ih.subVectors(e,i);let l=yr.dot(ih),c=_r.dot(ih);if(l<=0&&c<=0)return t.copy(i);sh.subVectors(e,s);let h=yr.dot(sh),u=_r.dot(sh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(yr,o);rh.subVectors(e,r);let m=yr.dot(rh),g=_r.dot(rh);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(_r,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Rf.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Rf,a);let f=1/(p+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(yr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},No={h:0,s:0,l:0};function ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=ru(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ah(o,r,e+1/3),this.g=ah(o,r,e),this.b=ah(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Rt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(An(Tn.r*255,0,255))*65536+Math.round(An(Tn.g*255,0,255))*256+Math.round(An(Tn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Vt){Rt.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(No);let i=wa(os.h,No.h,t),s=wa(os.s,No.s,t),r=wa(os.l,No.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new ot;ot.NAMES=Dp;var fy=0,_i=class extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ir,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Mh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Mh&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new U,Do=new et,$n=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}};var ul=class extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var dl=class extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}};var py=0,Qn=new lt,oh=new Wt,vr=new U,qn=new mn,_a=new mn,hn=new U,Gn=class n extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?dl:ul)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_a.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(qn.min,_a.min),qn.expandByPoint(hn),hn.addVectors(qn.max,_a.max),qn.expandByPoint(hn)):(qn.expandByPoint(_a.min),qn.expandByPoint(_a.max))}qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)hn.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),hn.add(vr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<a;C++)c[C]=new U,h[C]=new U;let u=new U,d=new U,m=new U,g=new et,v=new et,p=new et,f=new U,A=new U;function b(C,X,ae){u.fromArray(s,C*3),d.fromArray(s,X*3),m.fromArray(s,ae*3),g.fromArray(o,C*2),v.fromArray(o,X*2),p.fromArray(o,ae*2),d.sub(u),m.sub(u),v.sub(g),p.sub(g);let ge=1/(v.x*p.y-p.x*v.y);isFinite(ge)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ge),A.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(ge),c[C].add(f),c[X].add(f),c[ae].add(f),h[C].add(A),h[X].add(A),h[ae].add(A))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let C=0,X=L.length;C<X;++C){let ae=L[C],ge=ae.start,F=ae.count;for(let B=ge,k=ge+F;B<k;B+=3)b(i[B+0],i[B+1],i[B+2])}let I=new U,N=new U,D=new U,W=new U;function S(C){D.fromArray(r,C*3),W.copy(D);let X=c[C];I.copy(X),I.sub(D.multiplyScalar(D.dot(X))).normalize(),N.crossVectors(W,X);let ge=N.dot(h[C])<0?-1:1;l[C*4]=I.x,l[C*4+1]=I.y,l[C*4+2]=I.z,l[C*4+3]=ge}for(let C=0,X=L.length;C<X;++C){let ae=L[C],ge=ae.start,F=ae.count;for(let B=ge,k=ge+F;B<k;B+=3)S(i[B+0]),S(i[B+1]),S(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new $n(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new lt,Fs=new Br,Uo=new ni,Pf=new U,xr=new U,br=new U,Mr=new U,lh=new U,Oo=new U,Fo=new et,ko=new et,Bo=new et,If=new U,Nf=new U,Df=new U,zo=new U,Ho=new U,Ft=class extends Wt{constructor(e=new Gn,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(lh.fromBufferAttribute(u,e),o?Oo.addScaledVector(lh,h):Oo.addScaledVector(lh.sub(t),h))}t.add(Oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(Uo.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Uo,Pf)===null||Fs.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(Lf.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let L=A,I=b;L<I;L+=3){let N=a.getX(L),D=a.getX(L+1),W=a.getX(L+2);s=Vo(this,f,e,i,c,h,u,N,D,W),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let A=a.getX(p),b=a.getX(p+1),L=a.getX(p+2);s=Vo(this,o,e,i,c,h,u,A,b,L),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=o[p.materialIndex],A=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let L=A,I=b;L<I;L+=3){let N=L,D=L+1,W=L+2;s=Vo(this,f,e,i,c,h,u,N,D,W),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let A=p,b=p+1,L=p+2;s=Vo(this,o,e,i,c,h,u,A,b,L),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function my(n,e,t,i,s,r,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:n}}function Vo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,xr),n.getVertexPosition(l,br),n.getVertexPosition(c,Mr);let h=my(n,e,t,i,xr,br,Mr,zo);if(h){s&&(Fo.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,l),Bo.fromBufferAttribute(s,c),h.uv=Vs.getInterpolation(zo,xr,br,Mr,Fo,ko,Bo,new et)),r&&(Fo.fromBufferAttribute(r,a),ko.fromBufferAttribute(r,l),Bo.fromBufferAttribute(r,c),h.uv1=Vs.getInterpolation(zo,xr,br,Mr,Fo,ko,Bo,new et),h.uv2=h.uv1),o&&(If.fromBufferAttribute(o,a),Nf.fromBufferAttribute(o,l),Df.fromBufferAttribute(o,c),h.normal=Vs.getInterpolation(zo,xr,br,Mr,If,Nf,Df,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Vs.getNormal(xr,br,Mr,u.normal),h.face=u}return h}var La=class n extends Gn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(v,p,f,A,b,L,I,N,D,W,S){let C=L/D,X=I/W,ae=L/2,ge=I/2,F=N/2,B=D+1,k=W+1,ne=0,q=0,V=new U;for(let Q=0;Q<k;Q++){let te=Q*X-ge;for(let he=0;he<B;he++){let z=he*C-ae;V[v]=z*A,V[p]=te*b,V[f]=F,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[f]=N>0?1:-1,h.push(V.x,V.y,V.z),u.push(he/D),u.push(1-Q/W),ne+=1}}for(let Q=0;Q<W;Q++)for(let te=0;te<D;te++){let he=d+te+B*Q,z=d+te+B*(Q+1),j=d+(te+1)+B*(Q+1),se=d+(te+1)+B*Q;l.push(he,z,se),l.push(z,j,se),q+=6}a.addGroup(m,q,S),m+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=zr(n[t]);for(let s in i)e[s]=i[s]}return e}function gy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Up(n){return n.getRenderTarget()===null?n.outputColorSpace:Rt.workingColorSpace}var Bl={clone:zr,merge:Un},yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fl=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends fl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,wr=1,Ph=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Sr,wr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Sr,wr,e,t);r.layers=this.layers,this.add(r);let o=new Jt(Sr,wr,e,t);o.layers=this.layers,this.add(o);let a=new Jt(Sr,wr,e,t);a.layers=this.layers,this.add(a);let l=new Jt(Sr,wr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Sr,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},pl=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ih=class extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xs?Vt:ti),this.texture=new pl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new La(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:cs});r.uniforms.tEquirect.value=t;let o=new Ft(s,r),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=On),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ch=new U,vy=new U,xy=new pt,ki=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ch.subVectors(i,t).cross(vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ch),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||xy.getNormalMatrix(e),s=this.coplanarPoint(ch).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ks=new ni,Go=new U,Pa=class{constructor(e=new ki,t=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],A=s[13],b=s[14],L=s[15];if(i[0].setComponents(l-r,d-c,p-m,L-f).normalize(),i[1].setComponents(l+r,d+c,p+m,L+f).normalize(),i[2].setComponents(l+o,d+h,p+g,L+A).normalize(),i[3].setComponents(l-o,d-h,p-g,L-A).normalize(),i[4].setComponents(l-a,d-u,p-v,L-b).normalize(),t===zi)i[5].setComponents(l+a,d+u,p+v,L+b).normalize();else if(t===rl)i[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){return ks.center.set(0,0,0),ks.radius=.7071067811865476,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Go.x=s.normal.x>0?e.max.x:e.min.x,Go.y=s.normal.y>0?e.max.y:e.min.y,Go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Op(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function by(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var Gi=class n extends Gn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let A=f*d-o;for(let b=0;b<c;b++){let L=b*u-r;g.push(L,-A,0),v.push(0,0,1),p.push(b/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){let b=A+c*f,L=A+c*(f+1),I=A+1+c*(f+1),N=A+1+c*f;m.push(b,L,N),m.push(L,I,N)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},My=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sy=`#ifdef USE_ALPHAHASH
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
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ty=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
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
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly=`#ifdef USE_BATCHING
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
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uy=`#ifdef USE_IRIDESCENCE
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
#endif`,Oy=`#ifdef USE_BUMPMAP
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
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xy=`#define PI 3.141592653589793
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
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$y=`vec3 transformedNormal = objectNormal;
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
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qy=`
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
}`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
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
}`,h_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
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
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,__=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,b_=`struct PhysicalMaterial {
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
}`,M_=`
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,C_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I_=`#if defined( USE_POINTS_UV )
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
#endif`,N_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
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
#endif`,F_=`#ifdef USE_MORPHTARGETS
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
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,av=`float getShadowMask() {
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
}`,ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Rv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`uniform float scale;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Bv=`#define MATCAP
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
}`,zv=`#define MATCAP
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
}`,Hv=`#define NORMAL
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
}`,Vv=`#define NORMAL
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define STANDARD
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
}`,qv=`#define STANDARD
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
}`,$v=`#define TOON
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
}`,Yv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,Kv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,ex=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:My,alphahash_pars_fragment:Sy,alphamap_fragment:wy,alphamap_pars_fragment:Ey,alphatest_fragment:Ty,alphatest_pars_fragment:Ay,aomap_fragment:Cy,aomap_pars_fragment:Ry,batching_pars_vertex:Ly,batching_vertex:Py,begin_vertex:Iy,beginnormal_vertex:Ny,bsdfs:Dy,iridescence_fragment:Uy,bumpmap_pars_fragment:Oy,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:By,clipping_planes_vertex:zy,color_fragment:Hy,color_pars_fragment:Vy,color_pars_vertex:Gy,color_vertex:Wy,common:Xy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:$y,displacementmap_pars_vertex:Yy,displacementmap_vertex:jy,emissivemap_fragment:Zy,emissivemap_pars_fragment:Jy,colorspace_fragment:Ky,colorspace_pars_fragment:Qy,envmap_fragment:e_,envmap_common_pars_fragment:t_,envmap_pars_fragment:n_,envmap_pars_vertex:i_,envmap_physical_pars_fragment:m_,envmap_vertex:s_,fog_vertex:r_,fog_pars_vertex:a_,fog_fragment:o_,fog_pars_fragment:l_,gradientmap_pars_fragment:c_,lightmap_fragment:h_,lightmap_pars_fragment:u_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:f_,lights_pars_begin:p_,lights_toon_fragment:g_,lights_toon_pars_fragment:y_,lights_phong_fragment:__,lights_phong_pars_fragment:v_,lights_physical_fragment:x_,lights_physical_pars_fragment:b_,lights_fragment_begin:M_,lights_fragment_maps:S_,lights_fragment_end:w_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:C_,map_fragment:R_,map_pars_fragment:L_,map_particle_fragment:P_,map_particle_pars_fragment:I_,metalnessmap_fragment:N_,metalnessmap_pars_fragment:D_,morphcolor_vertex:U_,morphnormal_vertex:O_,morphtarget_pars_vertex:F_,morphtarget_vertex:k_,normal_fragment_begin:B_,normal_fragment_maps:z_,normal_pars_fragment:H_,normal_pars_vertex:V_,normal_vertex:G_,normalmap_pars_fragment:W_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:q_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:Y_,opaque_fragment:j_,packing:Z_,premultiplied_alpha_fragment:J_,project_vertex:K_,dithering_fragment:Q_,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:sv,shadowmap_vertex:rv,shadowmask_pars_fragment:av,skinbase_vertex:ov,skinning_pars_vertex:lv,skinning_vertex:cv,skinnormal_vertex:hv,specularmap_fragment:uv,specularmap_pars_fragment:dv,tonemapping_fragment:fv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:yv,uv_pars_vertex:_v,uv_vertex:vv,worldpos_vertex:xv,background_vert:bv,background_frag:Mv,backgroundCube_vert:Sv,backgroundCube_frag:wv,cube_vert:Ev,cube_frag:Tv,depth_vert:Av,depth_frag:Cv,distanceRGBA_vert:Rv,distanceRGBA_frag:Lv,equirect_vert:Pv,equirect_frag:Iv,linedashed_vert:Nv,linedashed_frag:Dv,meshbasic_vert:Uv,meshbasic_frag:Ov,meshlambert_vert:Fv,meshlambert_frag:kv,meshmatcap_vert:Bv,meshmatcap_frag:zv,meshnormal_vert:Hv,meshnormal_frag:Vv,meshphong_vert:Gv,meshphong_frag:Wv,meshphysical_vert:Xv,meshphysical_frag:qv,meshtoon_vert:$v,meshtoon_frag:Yv,points_vert:jv,points_frag:Zv,shadow_vert:Jv,shadow_frag:Kv,sprite_vert:Qv,sprite_frag:ex},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Fn={basic:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Un([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Un([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Un([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Un([ye.points,ye.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Un([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Un([ye.common,ye.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Un([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Un([ye.sprite,ye.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Un([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Un([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Fn.physical={uniforms:Un([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Wo={r:0,b:0,g:0};function tx(n,e,t,i,s,r,o){let a=new ot(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let A=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),A=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Fl)?(h===void 0&&(h=new Ft(new La(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:zr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,N,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,(u!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ft(new Gi(2,2),new ui({name:"BackgroundMaterial",uniforms:zr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Wo,Up(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function nx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(F,B,k,ne,q){let V=!1;if(o){let Q=v(ne,k,B);c!==Q&&(c=Q,m(c.object)),V=f(F,ne,k,q),V&&A(F,ne,k,q)}else{let Q=B.wireframe===!0;(c.geometry!==ne.id||c.program!==k.id||c.wireframe!==Q)&&(c.geometry=ne.id,c.program=k.id,c.wireframe=Q,V=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,W(F,B,k,ne),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function v(F,B,k){let ne=k.wireframe===!0,q=a[F.id];q===void 0&&(q={},a[F.id]=q);let V=q[B.id];V===void 0&&(V={},q[B.id]=V);let Q=V[ne];return Q===void 0&&(Q=p(d()),V[ne]=Q),Q}function p(F){let B=[],k=[],ne=[];for(let q=0;q<s;q++)B[q]=0,k[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:ne,object:F,attributes:{},index:null}}function f(F,B,k,ne){let q=c.attributes,V=B.attributes,Q=0,te=k.getAttributes();for(let he in te)if(te[he].location>=0){let j=q[he],se=V[he];if(se===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ne}function A(F,B,k,ne){let q={},V=B.attributes,Q=0,te=k.getAttributes();for(let he in te)if(te[he].location>=0){let j=V[he];j===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let se={};se.attribute=j,j&&j.data&&(se.data=j.data),q[he]=se,Q++}c.attributes=q,c.attributesNum=Q,c.index=ne}function b(){let F=c.newAttributes;for(let B=0,k=F.length;B<k;B++)F[B]=0}function L(F){I(F,0)}function I(F,B){let k=c.newAttributes,ne=c.enabledAttributes,q=c.attributeDivisors;k[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),q[F]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),q[F]=B)}function N(){let F=c.newAttributes,B=c.enabledAttributes;for(let k=0,ne=B.length;k<ne;k++)B[k]!==F[k]&&(n.disableVertexAttribArray(k),B[k]=0)}function D(F,B,k,ne,q,V,Q){Q===!0?n.vertexAttribIPointer(F,B,k,q,V):n.vertexAttribPointer(F,B,k,ne,q,V)}function W(F,B,k,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=ne.attributes,V=k.getAttributes(),Q=B.defaultAttributeValues;for(let te in V){let he=V[te];if(he.location>=0){let z=q[te];if(z===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){let j=z.normalized,se=z.itemSize,re=t.get(z);if(re===void 0)continue;let le=re.buffer,Ce=re.type,He=re.bytesPerElement,Ve=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||z.gpuType===wp);if(z.isInterleavedBufferAttribute){let gt=z.data,$=gt.stride,dn=z.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<he.locationSize;Xe++)I(he.location+Xe,gt.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<he.locationSize;Xe++)L(he.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<he.locationSize;Xe++)D(he.location+Xe,se/he.locationSize,Ce,j,$*He,(dn+se/he.locationSize*Xe)*He,Ve)}else{if(z.isInstancedBufferAttribute){for(let gt=0;gt<he.locationSize;gt++)I(he.location+gt,z.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let gt=0;gt<he.locationSize;gt++)L(he.location+gt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let gt=0;gt<he.locationSize;gt++)D(he.location+gt,se/he.locationSize,Ce,j,se*He,se/he.locationSize*gt*He,Ve)}}else if(Q!==void 0){let j=Q[te];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(he.location,j);break;case 3:n.vertexAttrib3fv(he.location,j);break;case 4:n.vertexAttrib4fv(he.location,j);break;default:n.vertexAttrib1fv(he.location,j)}}}}N()}function S(){ae();for(let F in a){let B=a[F];for(let k in B){let ne=B[k];for(let q in ne)g(ne[q].object),delete ne[q];delete B[k]}delete a[F]}}function C(F){if(a[F.id]===void 0)return;let B=a[F.id];for(let k in B){let ne=B[k];for(let q in ne)g(ne[q].object),delete ne[q];delete B[k]}delete a[F.id]}function X(F){for(let B in a){let k=a[B];if(k[F.id]===void 0)continue;let ne=k[F.id];for(let q in ne)g(ne[q].object),delete ne[q];delete k[F.id]}}function ae(){ge(),h=!0,c!==l&&(c=l,m(c.object))}function ge(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ae,resetDefaultState:ge,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:b,enableAttribute:L,disableUnusedAttributes:N}}function ix(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function sx(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,L=o||e.has("OES_texture_float"),I=b&&L,N=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:L,floatVertexTextures:I,maxSamples:N}}function rx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ki,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:i,b=A*4,L=f.clippingState||null;l.value=L,L=h(g,d,b,m);for(let I=0;I!==b;++I)L[I]=t[I];f.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,L=m;b!==v;++b,L+=4)o.copy(u[b]).applyMatrix4(A,a),o.normal.toArray(p,L),p[L+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function ax(n){let e=new WeakMap;function t(o,a){return a===Sh?o.mapping=Ur:a===wh&&(o.mapping=Or),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sh||a===wh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ih(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Hr=class extends fl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lr=4,Uf=[.125,.215,.35,.446,.526,.582],Hs=20,hh=new Hr,Of=new ot,uh=null,dh=0,fh=0,Bs=(1+Math.sqrt(5))/2,Er=1/Bs,Ff=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Bs,Er),new U(0,Bs,-Er),new U(Er,0,Bs),new U(-Er,0,Bs),new U(Bs,Er,0),new U(-Bs,Er,0)],ml=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,dh,fh),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:ei,colorSpace:Hi,depthBuffer:!1},s=kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(r)),this._blurMaterial=lx(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,hh)}_sceneToCubeUV(e,t,i,s){let a=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Of),h.toneMapping=hs,h.autoClear=!1;let m=new Kt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Ft(new La,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Of),v=!0);for(let f=0;f<6;f++){let A=f%3;A===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):A===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;Xo(s,A*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ur||e.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ff[(s-1)%Ff.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Hs-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Hs;p>Hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hs}`);let f=[],A=0;for(let D=0;D<Hs;++D){let W=D/v,S=Math.exp(-W*W/2);f.push(S),D===0?A+=S:D<p&&(A+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/A;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let L=this._sizeLods[s],I=3*L*(s>b-Lr?s-b+Lr:0),N=4*(this._cubeSize-L);Xo(t,I,N,3*L,2*L),l.setRenderTarget(t),l.render(u,hh)}};function ox(n){let e=[],t=[],i=[],s=n,r=n-Lr+1+Uf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Lr?l=Uf[o-n+Lr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,A=new Float32Array(v*g*m),b=new Float32Array(p*g*m),L=new Float32Array(f*g*m);for(let N=0;N<m;N++){let D=N%3*2/3-1,W=N>2?0:-1,S=[D,W,0,D+2/3,W,0,D+2/3,W+1,0,D,W,0,D+2/3,W+1,0,D,W+1,0];A.set(S,v*g*N),b.set(d,p*g*N);let C=[N,N,N,N,N,N];L.set(C,f*g*N)}let I=new Gn;I.setAttribute("position",new $n(A,v)),I.setAttribute("uv",new $n(b,p)),I.setAttribute("faceIndex",new $n(L,f)),e.push(I),s>Lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kf(n,e,t){let i=new Vi(n,e,t);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function lx(n,e,t){let i=new Float32Array(Hs),s=new U(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Bf(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function zf(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function cx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Sh||l===wh,h=l===Ur||l===Or;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ml(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ml(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function hx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ux(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let A=m.array;v=m.version;for(let b=0,L=A.length;b<L;b+=3){let I=A[b+0],N=A[b+1],D=A[b+2];d.push(I,N,N,D,D,I)}}else if(g!==void 0){let A=g.array;v=g.version;for(let b=0,L=A.length/3-1;b<L;b+=3){let I=b+0,N=b+1,D=b+2;d.push(I,N,N,D,D,I)}}else return;let p=new(Np(d)?dl:ul)(d,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dx(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,v),t.update(g,r,v)}function d(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let f=0;for(let A=0;A<v;A++)f+=g[A];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function fx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function px(n,e){return n[0]-e[0]}function mx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function gx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let F=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();let A=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],W=0;A===!0&&(W=1),b===!0&&(W=2),L===!0&&(W=3);let S=h.attributes.position.count*W,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let X=new Float32Array(S*C*4*g),ae=new cl(X,S,C,g);ae.type=Bi,ae.needsUpdate=!0;let ge=W*4;for(let B=0;B<g;B++){let k=I[B],ne=N[B],q=D[B],V=S*C*4*B;for(let Q=0;Q<k.count;Q++){let te=Q*ge;A===!0&&(o.fromBufferAttribute(k,Q),X[V+te+0]=o.x,X[V+te+1]=o.y,X[V+te+2]=o.z,X[V+te+3]=0),b===!0&&(o.fromBufferAttribute(ne,Q),X[V+te+4]=o.x,X[V+te+5]=o.y,X[V+te+6]=o.z,X[V+te+7]=0),L===!0&&(o.fromBufferAttribute(q,Q),X[V+te+8]=o.x,X[V+te+9]=o.y,X[V+te+10]=o.z,X[V+te+11]=q.itemSize===4?o.w:1)}}v={count:g,texture:ae,size:new et(S,C)},r.set(h,v),h.addEventListener("dispose",F)}let p=0;for(let A=0;A<d.length;A++)p+=d[A];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let b=0;b<m;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<m;b++){let L=g[b];L[0]=b,L[1]=d[b]}g.sort(mx);for(let b=0;b<8;b++)b<m&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(px);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let L=a[b],I=L[0],N=L[1];I!==Number.MAX_SAFE_INTEGER&&N?(v&&h.getAttribute("morphTarget"+b)!==v[I]&&h.setAttribute("morphTarget"+b,v[I]),p&&h.getAttribute("morphNormal"+b)!==p[I]&&h.setAttribute("morphNormal"+b,p[I]),s[b]=N,f+=N):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let A=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",A),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function yx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var gl=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ws,h!==Ws&&h!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ws&&(i=ls),i===void 0&&h===Fr&&(i=Gs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fp=new Vn,kp=new gl(1,1);kp.compareFunction=Ip;var Bp=new cl,zp=new Lh,Hp=new pl,Hf=[],Vf=[],Gf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Yr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zl(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _x(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Mx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),on(t,i)}}function Sx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),on(t,i)}}function wx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;Gf.set(i),n.uniformMatrix4fv(this.addr,!1,Gf),on(t,i)}}function Ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Rx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function Px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function Nx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kp:Fp;t.setTexture2D(e||r,s)}function Dx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zp,s)}function Ux(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hp,s)}function Ox(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bp,s)}function Fx(n){switch(n){case 5126:return _x;case 35664:return vx;case 35665:return xx;case 35666:return bx;case 35674:return Mx;case 35675:return Sx;case 35676:return wx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Cx;case 5125:return Rx;case 36294:return Lx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}function kx(n,e){n.uniform1fv(this.addr,e)}function Bx(n,e){let t=Yr(e,this.size,2);n.uniform2fv(this.addr,t)}function zx(n,e){let t=Yr(e,this.size,3);n.uniform3fv(this.addr,t)}function Hx(n,e){let t=Yr(e,this.size,4);n.uniform4fv(this.addr,t)}function Vx(n,e){let t=Yr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gx(n,e){let t=Yr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wx(n,e){let t=Yr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xx(n,e){n.uniform1iv(this.addr,e)}function qx(n,e){n.uniform2iv(this.addr,e)}function $x(n,e){n.uniform3iv(this.addr,e)}function Yx(n,e){n.uniform4iv(this.addr,e)}function jx(n,e){n.uniform1uiv(this.addr,e)}function Zx(n,e){n.uniform2uiv(this.addr,e)}function Jx(n,e){n.uniform3uiv(this.addr,e)}function Kx(n,e){n.uniform4uiv(this.addr,e)}function Qx(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fp,r[o])}function eb(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zp,r[o])}function tb(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hp,r[o])}function nb(n,e,t){let i=this.cache,s=e.length,r=zl(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bp,r[o])}function ib(n){switch(n){case 5126:return kx;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Vx;case 35675:return Gx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return qx;case 35668:case 35672:return $x;case 35669:case 35673:return Yx;case 5125:return jx;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}var Nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fx(t.type)}},Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ph=/(\w+)(\])?(\[|\.)?/g;function qf(n,e){n.seq.push(e),n.map[e.id]=e}function sb(n,e,t){let i=n.name,s=i.length;for(ph.lastIndex=0;;){let r=ph.exec(i),o=ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qf(t,c===void 0?new Nh(a,n,e):new Dh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Uh(a),qf(t,u)),t=u}}}var Dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);sb(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function $f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var rb=37297,ab=0;function ob(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lb(n){let e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(n),i;switch(e===t?i="":e===sl&&t===il?i="LinearDisplayP3ToLinearSRGB":e===il&&t===sl&&(i="LinearSRGBToLinearDisplayP3"),n){case Hi:case kl:return[i,"LinearTransferOETF"];case Vt:case su:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ob(n.getShaderSource(e),o)}else return s}function cb(n,e){let t=lb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hb(n,e){let t;switch(e){case p0:t="Linear";break;case m0:t="Reinhard";break;case g0:t="OptimizedCineon";break;case y0:t="ACESFilmic";break;case v0:t="AgX";break;case _0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ub(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pr).join(`
`)}function fb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(n){return n.replace(mb,yb)}var gb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yb(n,e){let t=dt[e];if(t===void 0){let i=gb.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}var _b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(n){return n.replace(_b,vb)}function vb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function bb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ur:case Or:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function Sb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ol:e="ENVMAP_BLENDING_MULTIPLY";break;case d0:e="ENVMAP_BLENDING_MIX";break;case f0:e="ENVMAP_BLENDING_ADD";break}return e}function wb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Eb(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=xb(t),c=bb(t),h=Mb(t),u=Sb(t),d=wb(t),m=t.isWebGL2?"":ub(t),g=db(t),v=fb(r),p=s.createProgram(),f,A,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),f.length>0&&(f+=`
`),A=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),A.length>0&&(A+=`
`)):(f=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),A=[m,Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hs?"#define TONE_MAPPING":"",t.toneMapping!==hs?dt.tonemapping_pars_fragment:"",t.toneMapping!==hs?hb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Oh(o),o=jf(o,t),o=Zf(o,t),a=Oh(a),a=jf(a,t),a=Zf(a,t),o=Jf(o),a=Jf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);let L=b+f+o,I=b+A+a,N=$f(s,s.VERTEX_SHADER,L),D=$f(s,s.FRAGMENT_SHADER,I);s.attachShader(p,N),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function W(ae){if(n.debug.checkShaderErrors){let ge=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(N).trim(),B=s.getShaderInfoLog(D).trim(),k=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,N,D);else{let q=Yf(s,N,"vertex"),V=Yf(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ge+`
`+q+`
`+V)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(F===""||B==="")&&(ne=!1);ne&&(ae.diagnostics={runnable:k,programLog:ge,vertexShader:{log:F,prefix:f},fragmentShader:{log:B,prefix:A}})}s.deleteShader(N),s.deleteShader(D),S=new Dr(s,p),C=pb(s,p)}let S;this.getUniforms=function(){return S===void 0&&W(this),S};let C;this.getAttributes=function(){return C===void 0&&W(this),C};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(p,rb)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=N,this.fragmentShader=D,this}var Tb=0,Fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=Tb++,this.code=e,this.usedTimes=0}};function Ab(n,e,t,i,s,r,o){let a=new Ra,l=new Fh,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,C,X,ae,ge){let F=ae.fog,B=ge.geometry,k=S.isMeshStandardMaterial?ae.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=ne&&ne.mapping===Fl?ne.image.height:null,V=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=Q!==void 0?Q.length:0,he=0;B.morphAttributes.position!==void 0&&(he=1),B.morphAttributes.normal!==void 0&&(he=2),B.morphAttributes.color!==void 0&&(he=3);let z,j,se,re;if(V){let ln=Fn[V];z=ln.vertexShader,j=ln.fragmentShader}else z=S.vertexShader,j=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);let le=n.getRenderTarget(),Ce=ge.isInstancedMesh===!0,He=ge.isBatchedMesh===!0,Ve=!!S.map,gt=!!S.matcap,$=!!ne,dn=!!S.aoMap,Xe=!!S.lightMap,nt=!!S.bumpMap,Ue=!!S.normalMap,Lt=!!S.displacementMap,ct=!!S.emissiveMap,P=!!S.metalnessMap,E=!!S.roughnessMap,Z=S.anisotropy>0,pe=S.clearcoat>0,ue=S.iridescence>0,me=S.sheen>0,ke=S.transmission>0,Se=Z&&!!S.anisotropyMap,Pe=pe&&!!S.clearcoatMap,$e=pe&&!!S.clearcoatNormalMap,ht=pe&&!!S.clearcoatRoughnessMap,de=ue&&!!S.iridescenceMap,Mt=ue&&!!S.iridescenceThicknessMap,ft=me&&!!S.sheenColorMap,Qe=me&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ie=!!S.specularColorMap,rt=!!S.specularIntensityMap,bt=ke&&!!S.transmissionMap,Dt=ke&&!!S.thicknessMap,ut=!!S.gradientMap,_e=!!S.alphaMap,O=S.alphaTest>0,xe=!!S.alphaHash,be=!!S.extensions,Ze=!!B.attributes.uv1,qe=!!B.attributes.uv2,wt=!!B.attributes.uv3,Tt=hs;return S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:j,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:He,instancing:Ce,instancingColor:Ce&&ge.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Hi,map:Ve,matcap:gt,envMap:$,envMapMode:$&&ne.mapping,envMapCubeUVHeight:q,aoMap:dn,lightMap:Xe,bumpMap:nt,normalMap:Ue,displacementMap:d&&Lt,emissiveMap:ct,normalMapObjectSpace:Ue&&S.normalMapType===N0,normalMapTangentSpace:Ue&&S.normalMapType===iu,metalnessMap:P,roughnessMap:E,anisotropy:Z,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Pe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ht,iridescence:ue,iridescenceMap:de,iridescenceThicknessMap:Mt,sheen:me,sheenColorMap:ft,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:rt,transmission:ke,transmissionMap:bt,thicknessMap:Dt,gradientMap:ut,opaque:S.transparent===!1&&S.blending===Ir,alphaMap:_e,alphaTest:O,alphaHash:xe,combine:S.combine,mapUv:Ve&&v(S.map.channel),aoMapUv:dn&&v(S.aoMap.channel),lightMapUv:Xe&&v(S.lightMap.channel),bumpMapUv:nt&&v(S.bumpMap.channel),normalMapUv:Ue&&v(S.normalMap.channel),displacementMapUv:Lt&&v(S.displacementMap.channel),emissiveMapUv:ct&&v(S.emissiveMap.channel),metalnessMapUv:P&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Se&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ge&&v(S.specularMap.channel),specularColorMapUv:Ie&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:bt&&v(S.transmissionMap.channel),thicknessMapUv:Dt&&v(S.thicknessMap.channel),alphaMapUv:_e&&v(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ue||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:wt,pointsUvs:ge.isPoints===!0&&!!B.attributes.uv&&(Ve||_e),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ge.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Rt.getTransfer(S.map.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:be&&S.extensions.derivatives===!0,extensionFragDepth:be&&S.extensions.fragDepth===!0,extensionDrawBuffers:be&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let X in S.defines)C.push(X),C.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(A(C,S),b(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function A(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function b(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function L(S){let C=g[S.type],X;if(C){let ae=Fn[C];X=Bl.clone(ae.uniforms)}else X=S.uniforms;return X}function I(S,C){let X;for(let ae=0,ge=c.length;ae<ge;ae++){let F=c[ae];if(F.cacheKey===C){X=F,++X.usedTimes;break}}return X===void 0&&(X=new Eb(n,C,S,r),c.push(X)),X}function N(S){if(--S.usedTimes===0){let C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:L,acquireProgram:I,releaseProgram:N,releaseShaderCache:D,programs:c,dispose:W}}function Cb(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Rb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ep(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function a(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,v,p){let f=o(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Rb),i.length>1&&i.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Lb(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new ep,n.set(i,[o])):s>=r.length?(o=new ep,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ib(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Nb=0;function Db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ub(n,e){let t=new Pb,i=Ib(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new lt,a=new lt;function l(h,u){let d=0,m=0,g=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let v=0,p=0,f=0,A=0,b=0,L=0,I=0,N=0,D=0,W=0,S=0;h.sort(Db);let C=u===!0?Math.PI:1;for(let ae=0,ge=h.length;ae<ge;ae++){let F=h[ae],B=F.color,k=F.intensity,ne=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=B.r*k*C,m+=B.g*k*C,g+=B.b*k*C;else if(F.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(F.sh.coefficients[V],k);S++}else if(F.isDirectionalLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[v]=te,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=F.shadow.matrix,L++}s.directional[v]=V,v++}else if(F.isSpotLight){let V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(B).multiplyScalar(k*C),V.distance=ne,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,s.spot[f]=V;let Q=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,Q.updateMatrices(F),F.castShadow&&W++),s.spotLightMatrix[f]=Q.matrix,F.castShadow){let te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=q,N++}f++}else if(F.isRectAreaLight){let V=t.get(F);V.color.copy(B).multiplyScalar(k),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),s.rectArea[A]=V,A++}else if(F.isPointLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*C),V.distance=F.distance,V.decay=F.decay,F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=F.shadow.matrix,I++}s.point[p]=V,p++}else if(F.isHemisphereLight){let V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(k*C),V.groundColor.copy(F.groundColor).multiplyScalar(k*C),s.hemi[b]=V,b++}}A>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let X=s.hash;(X.directionalLength!==v||X.pointLength!==p||X.spotLength!==f||X.rectAreaLength!==A||X.hemiLength!==b||X.numDirectionalShadows!==L||X.numPointShadows!==I||X.numSpotShadows!==N||X.numSpotMaps!==D||X.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=A,s.point.length=p,s.hemi.length=b,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=N+D-W,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=S,X.directionalLength=v,X.pointLength=p,X.spotLength=f,X.rectAreaLength=A,X.hemiLength=b,X.numDirectionalShadows=L,X.numPointShadows=I,X.numSpotShadows=N,X.numSpotMaps=D,X.numLightProbes=S,s.version=Nb++)}function c(h,u){let d=0,m=0,g=0,v=0,p=0,f=u.matrixWorldInverse;for(let A=0,b=h.length;A<b;A++){let L=h[A];if(L.isDirectionalLight){let I=s.directional[d];I.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),d++}else if(L.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),g++}else if(L.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(L.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),v++}else if(L.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(f),m++}else if(L.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function tp(n,e){let t=new Ub(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ob(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new tp(n,e),t.set(r,[l])):o>=a.length?(l=new tp(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Bh=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zh=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
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
}`;function Bb(n,e,t){let i=new Pa,s=new et,r=new et,o=new xt,a=new Bh({depthPacking:I0}),l=new zh,c={},h=t.maxTextureSize,u={[Hn]:un,[un]:Hn,[kn]:kn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Fb,fragmentShader:kb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Gn;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let f=this.type;this.render=function(N,D,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||N.length===0)return;let S=n.getRenderTarget(),C=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(cs),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let ge=f!==Fi&&this.type===Fi,F=f===Fi&&this.type!==Fi;for(let B=0,k=N.length;B<k;B++){let ne=N[B],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let V=q.getFrameExtents();if(s.multiply(V),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,q.mapSize.y=r.y)),q.map===null||ge===!0||F===!0){let te=this.type!==Fi?{minFilter:pn,magFilter:pn}:{};q.map!==null&&q.map.dispose(),q.map=new Vi(s.x,s.y,te),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Q=q.getViewportCount();for(let te=0;te<Q;te++){let he=q.getViewport(te);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),ae.viewport(o),q.updateMatrices(ne,te),i=q.getFrustum(),L(D,W,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Fi&&A(q,W),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,C,X)};function A(N,D){let W=e.update(v);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Vi(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(D,null,W,d,v,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(D,null,W,m,v,null)}function b(N,D,W,S){let C=null,X=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(X!==void 0)C=X;else if(C=W.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ae=C.uuid,ge=D.uuid,F=c[ae];F===void 0&&(F={},c[ae]=F);let B=F[ge];B===void 0&&(B=C.clone(),F[ge]=B,D.addEventListener("dispose",I)),C=B}if(C.visible=D.visible,C.wireframe=D.wireframe,S===Fi?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let ae=n.properties.get(C);ae.light=W}return C}function L(N,D,W,S,C){if(N.visible===!1)return;if(N.layers.test(D.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Fi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);let ge=e.update(N),F=N.material;if(Array.isArray(F)){let B=ge.groups;for(let k=0,ne=B.length;k<ne;k++){let q=B[k],V=F[q.materialIndex];if(V&&V.visible){let Q=b(N,V,S,C);N.onBeforeShadow(n,N,D,W,ge,Q,q),n.renderBufferDirect(W,null,ge,Q,N,q),N.onAfterShadow(n,N,D,W,ge,Q,q)}}}else if(F.visible){let B=b(N,F,S,C);N.onBeforeShadow(n,N,D,W,ge,B,null),n.renderBufferDirect(W,null,ge,B,N,null),N.onAfterShadow(n,N,D,W,ge,B,null)}}let ae=N.children;for(let ge=0,F=ae.length;ge<F;ge++)L(ae[ge],D,W,S,C)}function I(N){N.target.removeEventListener("dispose",I);for(let W in c){let S=c[W],C=N.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function zb(n,e,t){let i=t.isWebGL2;function s(){let O=!1,xe=new xt,be=null,Ze=new xt(0,0,0,0);return{setMask:function(qe){be!==qe&&!O&&(n.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){O=qe},setClear:function(qe,wt,Tt,St,ln){ln===!0&&(qe*=St,wt*=St,Tt*=St),xe.set(qe,wt,Tt,St),Ze.equals(xe)===!1&&(n.clearColor(qe,wt,Tt,St),Ze.copy(xe))},reset:function(){O=!1,be=null,Ze.set(-1,0,0,0)}}}function r(){let O=!1,xe=null,be=null,Ze=null;return{setTest:function(qe){qe?He(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(qe){xe!==qe&&!O&&(n.depthMask(qe),xe=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case r0:n.depthFunc(n.NEVER);break;case a0:n.depthFunc(n.ALWAYS);break;case o0:n.depthFunc(n.LESS);break;case Qo:n.depthFunc(n.LEQUAL);break;case l0:n.depthFunc(n.EQUAL);break;case c0:n.depthFunc(n.GEQUAL);break;case h0:n.depthFunc(n.GREATER);break;case u0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=qe}},setLocked:function(qe){O=qe},setClear:function(qe){Ze!==qe&&(n.clearDepth(qe),Ze=qe)},reset:function(){O=!1,xe=null,be=null,Ze=null}}}function o(){let O=!1,xe=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,ln=null;return{setTest:function(At){O||(At?He(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(At){xe!==At&&!O&&(n.stencilMask(At),xe=At)},setFunc:function(At,fn,Jn){(be!==At||Ze!==fn||qe!==Jn)&&(n.stencilFunc(At,fn,Jn),be=At,Ze=fn,qe=Jn)},setOp:function(At,fn,Jn){(wt!==At||Tt!==fn||St!==Jn)&&(n.stencilOp(At,fn,Jn),wt=At,Tt=fn,St=Jn)},setLocked:function(At){O=At},setClear:function(At){ln!==At&&(n.clearStencil(At),ln=At)},reset:function(){O=!1,xe=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,ln=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,v=[],p=null,f=!1,A=null,b=null,L=null,I=null,N=null,D=null,W=null,S=new ot(0,0,0),C=0,X=!1,ae=null,ge=null,F=null,B=null,k=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,V=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=V>=2);let te=null,he={},z=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),se=new xt().fromArray(z),re=new xt().fromArray(j);function le(O,xe,be,Ze){let qe=new Uint8Array(4),wt=n.createTexture();n.bindTexture(O,wt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<be;Tt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(xe,0,n.RGBA,1,1,Ze,0,n.RGBA,n.UNSIGNED_BYTE,qe):n.texImage2D(xe+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qe);return wt}let Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(Qo),ct(!1),P(Nd),He(n.CULL_FACE),Ue(cs);function He(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ve(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function gt(O,xe){return m[O]!==xe?(n.bindFramebuffer(O,xe),m[O]=xe,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=xe),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=xe)),!0):!1}function $(O,xe){let be=v,Ze=!1;if(O)if(be=g.get(xe),be===void 0&&(be=[],g.set(xe,be)),O.isWebGLMultipleRenderTargets){let qe=O.texture;if(be.length!==qe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Tt=qe.length;wt<Tt;wt++)be[wt]=n.COLOR_ATTACHMENT0+wt;be.length=qe.length,Ze=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,Ze=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,Ze=!0);Ze&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function dn(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Xe={[zs]:n.FUNC_ADD,[Wg]:n.FUNC_SUBTRACT,[Xg]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[Fd]=n.MIN,Xe[kd]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[Fd]=O.MIN_EXT,Xe[kd]=O.MAX_EXT)}let nt={[qg]:n.ZERO,[$g]:n.ONE,[Yg]:n.SRC_COLOR,[bh]:n.SRC_ALPHA,[e0]:n.SRC_ALPHA_SATURATE,[Kg]:n.DST_COLOR,[Zg]:n.DST_ALPHA,[jg]:n.ONE_MINUS_SRC_COLOR,[Mh]:n.ONE_MINUS_SRC_ALPHA,[Qg]:n.ONE_MINUS_DST_COLOR,[Jg]:n.ONE_MINUS_DST_ALPHA,[t0]:n.CONSTANT_COLOR,[n0]:n.ONE_MINUS_CONSTANT_COLOR,[i0]:n.CONSTANT_ALPHA,[s0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(O,xe,be,Ze,qe,wt,Tt,St,ln,At){if(O===cs){f===!0&&(Ve(n.BLEND),f=!1);return}if(f===!1&&(He(n.BLEND),f=!0),O!==Gg){if(O!==A||At!==X){if((b!==zs||N!==zs)&&(n.blendEquation(n.FUNC_ADD),b=zs,N=zs),At)switch(O){case Ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dd:n.blendFunc(n.ONE,n.ONE);break;case Ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,I=null,D=null,W=null,S.set(0,0,0),C=0,A=O,X=At}return}qe=qe||xe,wt=wt||be,Tt=Tt||Ze,(xe!==b||qe!==N)&&(n.blendEquationSeparate(Xe[xe],Xe[qe]),b=xe,N=qe),(be!==L||Ze!==I||wt!==D||Tt!==W)&&(n.blendFuncSeparate(nt[be],nt[Ze],nt[wt],nt[Tt]),L=be,I=Ze,D=wt,W=Tt),(St.equals(S)===!1||ln!==C)&&(n.blendColor(St.r,St.g,St.b,ln),S.copy(St),C=ln),A=O,X=!1}function Lt(O,xe){O.side===kn?Ve(n.CULL_FACE):He(n.CULL_FACE);let be=O.side===un;xe&&(be=!be),ct(be),O.blending===Ir&&O.transparent===!1?Ue(cs):Ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ze=O.stencilWrite;c.setTest(Ze),Ze&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){ae!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ae=O)}function P(O){O!==zg?(He(n.CULL_FACE),O!==ge&&(O===Nd?n.cullFace(n.BACK):O===Hg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),ge=O}function E(O){O!==F&&(q&&n.lineWidth(O),F=O)}function Z(O,xe,be){O?(He(n.POLYGON_OFFSET_FILL),(B!==xe||k!==be)&&(n.polygonOffset(xe,be),B=xe,k=be)):Ve(n.POLYGON_OFFSET_FILL)}function pe(O){O?He(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+ne-1),te!==O&&(n.activeTexture(O),te=O)}function me(O,xe,be){be===void 0&&(te===null?be=n.TEXTURE0+ne-1:be=te);let Ze=he[be];Ze===void 0&&(Ze={type:void 0,texture:void 0},he[be]=Ze),(Ze.type!==O||Ze.texture!==xe)&&(te!==be&&(n.activeTexture(be),te=be),n.bindTexture(O,xe||Ce[O]),Ze.type=O,Ze.texture=xe)}function ke(){let O=he[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function bt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Dt(O,xe){let be=u.get(xe);be===void 0&&(be=new WeakMap,u.set(xe,be));let Ze=be.get(O);Ze===void 0&&(Ze=n.getUniformBlockIndex(xe,O.name),be.set(O,Ze))}function ut(O,xe){let Ze=u.get(xe).get(O);h.get(xe)!==Ze&&(n.uniformBlockBinding(xe,Ze,O.__bindingPointIndex),h.set(xe,Ze))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,he={},m={},g=new WeakMap,v=[],p=null,f=!1,A=null,b=null,L=null,I=null,N=null,D=null,W=null,S=new ot(0,0,0),C=0,X=!1,ae=null,ge=null,F=null,B=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:Ve,bindFramebuffer:gt,drawBuffers:$,useProgram:dn,setBlending:Ue,setMaterial:Lt,setFlipSided:ct,setCullFace:P,setLineWidth:E,setPolygonOffset:Z,setScissorTest:pe,activeTexture:ue,bindTexture:me,unbindTexture:ke,compressedTexImage2D:Se,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:Qe,texSubImage2D:$e,texSubImage3D:ht,compressedTexSubImage2D:de,compressedTexSubImage3D:Mt,scissor:rt,viewport:bt,reset:_e}}function Hb(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Ca("canvas")}function v(P,E,Z,pe){let ue=1;if((P.width>pe||P.height>pe)&&(ue=pe/Math.max(P.width,P.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let me=E?al:Math.floor,ke=me(ue*P.width),Se=me(ue*P.height);u===void 0&&(u=g(ke,Se));let Pe=Z?g(ke,Se):u;return Pe.width=ke,Pe.height=Se,Pe.getContext("2d").drawImage(P,0,0,ke,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ke+"x"+Se+")."),Pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function p(P){return Ch(P.width)&&Ch(P.height)}function f(P){return a?!1:P.wrapS!==Cn||P.wrapT!==Cn||P.minFilter!==pn&&P.minFilter!==On}function A(P,E){return P.generateMipmaps&&E&&P.minFilter!==pn&&P.minFilter!==On}function b(P){n.generateMipmap(P)}function L(P,E,Z,pe,ue=!1){if(a===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=E;if(E===n.RED&&(Z===n.FLOAT&&(me=n.R32F),Z===n.HALF_FLOAT&&(me=n.R16F),Z===n.UNSIGNED_BYTE&&(me=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(me=n.R8UI),Z===n.UNSIGNED_SHORT&&(me=n.R16UI),Z===n.UNSIGNED_INT&&(me=n.R32UI),Z===n.BYTE&&(me=n.R8I),Z===n.SHORT&&(me=n.R16I),Z===n.INT&&(me=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(me=n.RG32F),Z===n.HALF_FLOAT&&(me=n.RG16F),Z===n.UNSIGNED_BYTE&&(me=n.RG8)),E===n.RGBA){let ke=ue?nl:Rt.getTransfer(pe);Z===n.FLOAT&&(me=n.RGBA32F),Z===n.HALF_FLOAT&&(me=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(me=ke===Ot?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function I(P,E,Z){return A(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==pn&&P.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){return P===pn||P===zd||P===zc?n.NEAREST:n.LINEAR}function D(P){let E=P.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&h.delete(E)}function W(P){let E=P.target;E.removeEventListener("dispose",W),X(E)}function S(P){let E=i.get(P);if(E.__webglInit===void 0)return;let Z=P.source,pe=d.get(Z);if(pe){let ue=pe[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(P),Object.keys(pe).length===0&&d.delete(Z)}i.remove(P)}function C(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let Z=P.source,pe=d.get(Z);delete pe[E.__cacheKey],o.memory.textures--}function X(P){let E=P.texture,Z=i.get(P),pe=i.get(E);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Z.__webglFramebuffer[ue]))for(let me=0;me<Z.__webglFramebuffer[ue].length;me++)n.deleteFramebuffer(Z.__webglFramebuffer[ue][me]);else n.deleteFramebuffer(Z.__webglFramebuffer[ue]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[ue])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ue=0;ue<Z.__webglFramebuffer.length;ue++)n.deleteFramebuffer(Z.__webglFramebuffer[ue]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ue=0;ue<Z.__webglColorRenderbuffer.length;ue++)Z.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[ue]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ue=0,me=E.length;ue<me;ue++){let ke=i.get(E[ue]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(E[ue])}i.remove(E),i.remove(P)}let ae=0;function ge(){ae=0}function F(){let P=ae;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),ae+=1,P}function B(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function k(P,E){let Z=i.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){let pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,P,E);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function ne(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){se(Z,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function q(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){se(Z,P,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function V(P,E){let Z=i.get(P);if(P.version>0&&Z.__version!==P.version){re(Z,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let Q={[ds]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Eh]:n.MIRRORED_REPEAT},te={[pn]:n.NEAREST,[zd]:n.NEAREST_MIPMAP_NEAREST,[zc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[b0]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},he={[D0]:n.NEVER,[z0]:n.ALWAYS,[U0]:n.LESS,[Ip]:n.LEQUAL,[O0]:n.EQUAL,[B0]:n.GEQUAL,[F0]:n.GREATER,[k0]:n.NOTEQUAL};function z(P,E,Z){if(Z?(n.texParameteri(P,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Q[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,te[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,te[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Cn||E.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,N(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,N(E.minFilter)),E.minFilter!==pn&&E.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===pn||E.minFilter!==zc&&E.minFilter!==fs||E.type===Bi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Aa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function j(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D));let pe=E.source,ue=d.get(pe);ue===void 0&&(ue={},d.set(pe,ue));let me=B(E);if(me!==P.__cacheKey){ue[me]===void 0&&(ue[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ue[me].usedTimes++;let ke=ue[P.__cacheKey];ke!==void 0&&(ue[P.__cacheKey].usedTimes--,ke.usedTimes===0&&C(E)),P.__cacheKey=me,P.__webglTexture=ue[me].texture}return Z}function se(P,E,Z){let pe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=n.TEXTURE_3D);let ue=j(P,E),me=E.source;t.bindTexture(pe,P.__webglTexture,n.TEXTURE0+Z);let ke=i.get(me);if(me.version!==ke.__version||ue===!0){t.activeTexture(n.TEXTURE0+Z);let Se=Rt.getPrimaries(Rt.workingColorSpace),Pe=E.colorSpace===ti?null:Rt.getPrimaries(E.colorSpace),$e=E.colorSpace===ti||Se===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ht=f(E)&&p(E.image)===!1,de=v(E.image,ht,!1,s.maxTextureSize);de=ct(E,de);let Mt=p(de)||a,ft=r.convert(E.format,E.colorSpace),Qe=r.convert(E.type),Ge=L(E.internalFormat,ft,Qe,E.colorSpace,E.isVideoTexture);z(pe,E,Mt);let Ie,rt=E.mipmaps,bt=a&&E.isVideoTexture!==!0&&Ge!==Lp,Dt=ke.__version===void 0||ue===!0,ut=I(E,de,Mt);if(E.isDepthTexture)Ge=n.DEPTH_COMPONENT,a?E.type===Bi?Ge=n.DEPTH_COMPONENT32F:E.type===ls?Ge=n.DEPTH_COMPONENT24:E.type===Gs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:E.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ws&&Ge===n.DEPTH_COMPONENT&&E.type!==nu&&E.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ls,Qe=r.convert(E.type)),E.format===Fr&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,E.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gs,Qe=r.convert(E.type))),Dt&&(bt?t.texStorage2D(n.TEXTURE_2D,1,Ge,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ge,de.width,de.height,0,ft,Qe,null));else if(E.isDataTexture)if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data);E.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,ft,Qe,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,de.width,de.height,0,ft,Qe,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){bt&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,rt[0].width,rt[0].height,de.depth);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],E.format!==ei?ft!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,de.depth,ft,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,de.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,de.depth,ft,Qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,de.depth,0,ft,Qe,Ie.data)}else{bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],E.format!==ei?ft!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data)}else if(E.isDataArrayTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ft,Qe,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,ft,Qe,de.data);else if(E.isData3DTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_3D,ut,Ge,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ft,Qe,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,ft,Qe,de.data);else if(E.isFramebufferTexture){if(Dt)if(bt)t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height);else{let _e=de.width,O=de.height;for(let xe=0;xe<ut;xe++)t.texImage2D(n.TEXTURE_2D,xe,Ge,_e,O,0,ft,Qe,null),_e>>=1,O>>=1}}else if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ft,Qe,Ie):t.texImage2D(n.TEXTURE_2D,_e,Ge,ft,Qe,Ie);E.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Qe,de)):t.texImage2D(n.TEXTURE_2D,0,Ge,ft,Qe,de);A(E,Mt)&&b(pe),ke.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function re(P,E,Z){if(E.image.length!==6)return;let pe=j(P,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Z);let me=i.get(ue);if(ue.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let ke=Rt.getPrimaries(Rt.workingColorSpace),Se=E.colorSpace===ti?null:Rt.getPrimaries(E.colorSpace),Pe=E.colorSpace===ti||ke===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,de=[];for(let _e=0;_e<6;_e++)!$e&&!ht?de[_e]=v(E.image[_e],!1,!0,s.maxCubemapSize):de[_e]=ht?E.image[_e].image:E.image[_e],de[_e]=ct(E,de[_e]);let Mt=de[0],ft=p(Mt)||a,Qe=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type),Ie=L(E.internalFormat,Qe,Ge,E.colorSpace),rt=a&&E.isVideoTexture!==!0,bt=me.__version===void 0||pe===!0,Dt=I(E,Mt,ft);z(n.TEXTURE_CUBE_MAP,E,ft);let ut;if($e){rt&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,Mt.width,Mt.height);for(let _e=0;_e<6;_e++){ut=de[_e].mipmaps;for(let O=0;O<ut.length;O++){let xe=ut[O];E.format!==ei?Qe!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,xe.width,xe.height,Qe,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,xe.width,xe.height,Qe,Ge,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,xe.width,xe.height,0,Qe,Ge,xe.data)}}}else{ut=E.mipmaps,rt&&bt&&(ut.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,de[0].width,de[0].height));for(let _e=0;_e<6;_e++)if(ht){rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de[_e].width,de[_e].height,Qe,Ge,de[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,de[_e].width,de[_e].height,0,Qe,Ge,de[_e].data);for(let O=0;O<ut.length;O++){let be=ut[O].image[_e].image;rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,be.width,be.height,Qe,Ge,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,be.width,be.height,0,Qe,Ge,be.data)}}else{rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Ge,de[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,Qe,Ge,de[_e]);for(let O=0;O<ut.length;O++){let xe=ut[O];rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Qe,Ge,xe.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,Qe,Ge,xe.image[_e])}}}A(E,ft)&&b(n.TEXTURE_CUBE_MAP),me.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function le(P,E,Z,pe,ue,me){let ke=r.convert(Z.format,Z.colorSpace),Se=r.convert(Z.type),Pe=L(Z.internalFormat,ke,Se,Z.colorSpace);if(!i.get(E).__hasExternalTextures){let ht=Math.max(1,E.width>>me),de=Math.max(1,E.height>>me);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,me,Pe,ht,de,E.depth,0,ke,Se,null):t.texImage2D(ue,me,Pe,ht,de,0,ke,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ue(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ue,i.get(Z).__webglTexture,0,nt(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ue,i.get(Z).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(P,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let pe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Ue(E)){let ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Bi?pe=n.DEPTH_COMPONENT32F:ue.type===ls&&(pe=n.DEPTH_COMPONENT24));let me=nt(E);Ue(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){let pe=nt(E);Z&&Ue(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,E.width,E.height):Ue(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{let pe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<pe.length;ue++){let me=pe[ue],ke=r.convert(me.format,me.colorSpace),Se=r.convert(me.type),Pe=L(me.internalFormat,ke,Se,me.colorSpace),$e=nt(E);Z&&Ue(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,E.width,E.height):Ue(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let pe=i.get(E.depthTexture).__webglTexture,ue=nt(E);if(E.depthTexture.format===Ws)Ue(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Fr)Ue(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ve(P){let E=i.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");He(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[pe],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(P,E,Z){let pe=i.get(P);E!==void 0&&le(pe.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ve(P)}function $(P){let E=P.texture,Z=i.get(P),pe=i.get(E);P.addEventListener("dispose",W),P.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=E.version,o.memory.textures++);let ue=P.isWebGLCubeRenderTarget===!0,me=P.isWebGLMultipleRenderTargets===!0,ke=p(P)||a;if(ue){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)Z.__webglFramebuffer[Se][Pe]=n.createFramebuffer()}else Z.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(me)if(s.drawBuffers){let Se=P.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=i.get(Se[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ue(P)===!1){let Se=me?E:[E];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){let $e=Se[Pe];Z.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);let ht=r.convert($e.format,$e.colorSpace),de=r.convert($e.type),Mt=L($e.internalFormat,ht,de,$e.colorSpace,P.isXRRenderTarget===!0),ft=nt(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Mt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),z(n.TEXTURE_CUBE_MAP,E,ke);for(let Se=0;Se<6;Se++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Se][Pe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else le(Z.__webglFramebuffer[Se],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);A(E,ke)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){let Se=P.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=Se[Pe],de=i.get(ht);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),z(n.TEXTURE_2D,ht,ke),le(Z.__webglFramebuffer,P,ht,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),A(ht,ke)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?Se=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),z(Se,E,ke),a&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Pe],P,E,n.COLOR_ATTACHMENT0,Se,Pe);else le(Z.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,Se,0);A(E,ke)&&b(Se),t.unbindTexture()}P.depthBuffer&&Ve(P)}function dn(P){let E=p(P)||a,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let pe=0,ue=Z.length;pe<ue;pe++){let me=Z[pe];if(A(me,E)){let ke=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(me).__webglTexture;t.bindTexture(ke,Se),b(ke),t.unbindTexture()}}}function Xe(P){if(a&&P.samples>0&&Ue(P)===!1){let E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,pe=P.height,ue=n.COLOR_BUFFER_BIT,me=[],ke=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(P),Pe=P.isWebGLMultipleRenderTargets===!0;if(Pe)for(let $e=0;$e<E.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){me.push(n.COLOR_ATTACHMENT0+$e),P.depthBuffer&&me.push(ke);let ht=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ht===!1&&(P.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]),ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),Pe){let de=i.get(E[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ue,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let $e=0;$e<E.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]);let ht=i.get(E[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,ht,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function nt(P){return Math.min(s.maxSamples,P.samples)}function Ue(P){let E=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ct(P,E){let Z=P.colorSpace,pe=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ah||Z!==Hi&&Z!==ti&&(Rt.getTransfer(Z)===Ot?a===!1?e.has("EXT_sRGB")===!0&&pe===ei?(P.format=Ah,P.minFilter=On,P.generateMipmaps=!1):E=ol.sRGBToLinear(E):(pe!==ei||ue!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=F,this.resetTextureUnits=ge,this.setTexture2D=k,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=V,this.rebindTextures=gt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue}function Vb(n,e,t){let i=t.isWebGL2;function s(r,o=ti){let a,l=Rt.getTransfer(o);if(r===us)return n.UNSIGNED_BYTE;if(r===Ep)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return n.BYTE;if(r===S0)return n.SHORT;if(r===nu)return n.UNSIGNED_SHORT;if(r===wp)return n.INT;if(r===ls)return n.UNSIGNED_INT;if(r===Bi)return n.FLOAT;if(r===Aa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===w0)return n.ALPHA;if(r===ei)return n.RGBA;if(r===E0)return n.LUMINANCE;if(r===T0)return n.LUMINANCE_ALPHA;if(r===Ws)return n.DEPTH_COMPONENT;if(r===Fr)return n.DEPTH_STENCIL;if(r===Ah)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===A0)return n.RED;if(r===Ap)return n.RED_INTEGER;if(r===C0)return n.RG;if(r===Cp)return n.RG_INTEGER;if(r===Rp)return n.RGBA_INTEGER;if(r===Hc||r===Vc||r===Gc||r===Wc)if(l===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Vd||r===Gd||r===Wd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xd||r===qd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xd)return l===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$d||r===Yd||r===jd||r===Zd||r===Jd||r===Kd||r===Qd||r===ef||r===tf||r===nf||r===sf||r===rf||r===af||r===of)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$d)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qd)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ef)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rf)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===af)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===of)return l===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xc||r===lf||r===cf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Xc)return l===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===R0||r===hf||r===uf||r===df)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Xc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===hf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===df)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Hh=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rn=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gb={type:"move"},Ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vh=class extends ps{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,v=t.getContextAttributes(),p=null,f=null,A=[],b=[],L=new et,I=null,N=new Jt;N.layers.enable(1),N.viewport=new xt;let D=new Jt;D.layers.enable(2),D.viewport=new xt;let W=[N,D],S=new Hh;S.layers.enable(1),S.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=A[z];return j===void 0&&(j=new Ta,A[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=A[z];return j===void 0&&(j=new Ta,A[z]=j),j.getGripSpace()},this.getHand=function(z){let j=A[z];return j===void 0&&(j=new Ta,A[z]=j),j.getHandSpace()};function ae(z){let j=b.indexOf(z.inputSource);if(j===-1)return;let se=A[j];se!==void 0&&(se.update(z.inputSource,z.frame,c||o),se.dispatchEvent({type:z.type,data:z.inputSource}))}function ge(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",ge),s.removeEventListener("inputsourceschange",F);for(let z=0;z<A.length;z++){let j=b[z];j!==null&&(b[z]=null,A[z].disconnect(j))}C=null,X=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",ge),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Vi(m.framebufferWidth,m.framebufferHeight,{format:ei,type:us,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,se=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Fr:Ws,se=v.stencil?Gs:ls);let le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Vi(d.textureWidth,d.textureHeight,{format:ei,type:us,depthTexture:new gl(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(f);Ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(z){for(let j=0;j<z.removed.length;j++){let se=z.removed[j],re=b.indexOf(se);re>=0&&(b[re]=null,A[re].disconnect(se))}for(let j=0;j<z.added.length;j++){let se=z.added[j],re=b.indexOf(se);if(re===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=b.length){b.push(se),re=Ce;break}else if(b[Ce]===null){b[Ce]=se,re=Ce;break}if(re===-1)break}let le=A[re];le&&le.connect(se)}}let B=new U,k=new U;function ne(z,j,se){B.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);let re=B.distanceTo(k),le=j.projectionMatrix.elements,Ce=se.projectionMatrix.elements,He=le[14]/(le[10]-1),Ve=le[14]/(le[10]+1),gt=(le[9]+1)/le[5],$=(le[9]-1)/le[5],dn=(le[8]-1)/le[0],Xe=(Ce[8]+1)/Ce[0],nt=He*dn,Ue=He*Xe,Lt=re/(-dn+Xe),ct=Lt*-dn;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ct),z.translateZ(Lt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let P=He+Lt,E=Ve+Lt,Z=nt-ct,pe=Ue+(re-ct),ue=gt*Ve/E*P,me=$*Ve/E*P;z.projectionMatrix.makePerspective(Z,pe,ue,me,P,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function q(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;S.near=D.near=N.near=z.near,S.far=D.far=N.far=z.far,(C!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,X=S.far);let j=z.parent,se=S.cameras;q(S,j);for(let re=0;re<se.length;re++)q(se[re],j);se.length===2?ne(S,N,D):S.projectionMatrix.copy(N.projectionMatrix),V(z,S,j)};function V(z,j,se){se===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=kr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let Q=null;function te(z,j){if(h=j.getViewerPose(c||o),g=j,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let re=!1;se.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let le=0;le<se.length;le++){let Ce=se[le],He=null;if(m!==null)He=m.getViewport(Ce);else{let gt=u.getViewSubImage(d,Ce);He=gt.viewport,le===0&&(e.setRenderTargetTextures(f,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(f))}let Ve=W[le];Ve===void 0&&(Ve=new Jt,Ve.layers.enable(le),Ve.viewport=new xt,W[le]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),le===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Ve)}}for(let se=0;se<A.length;se++){let re=b[se],le=A[se];re!==null&&le!==void 0&&le.update(re,j,c||o)}Q&&Q(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let he=new Op;he.setAnimationLoop(te),this.setAnimationLoop=function(z){Q=z},this.dispose=function(){}}};function Wb(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Up(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,A,b,L){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,L)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,A,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===un&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===un&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let A=e.get(f).envMap;if(A&&(p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,A,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*A,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,A){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let A=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xb(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,b){let L=b.program;i.uniformBlockBinding(A,L)}function c(A,b){let L=s[A.id];L===void 0&&(g(A),L=h(A),s[A.id]=L,A.addEventListener("dispose",p));let I=b.program;i.updateUBOMapping(A,I);let N=e.render.frame;r[A.id]!==N&&(d(A),r[A.id]=N)}function h(A){let b=u();A.__bindingPointIndex=b;let L=n.createBuffer(),I=A.__size,N=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,I,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,L),L}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let b=s[A.id],L=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,D=L.length;N<D;N++){let W=Array.isArray(L[N])?L[N]:[L[N]];for(let S=0,C=W.length;S<C;S++){let X=W[S];if(m(X,N,S,I)===!0){let ae=X.__offset,ge=Array.isArray(X.value)?X.value:[X.value],F=0;for(let B=0;B<ge.length;B++){let k=ge[B],ne=v(k);typeof k=="number"||typeof k=="boolean"?(X.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,ae+F,X.__data)):k.isMatrix3?(X.__data[0]=k.elements[0],X.__data[1]=k.elements[1],X.__data[2]=k.elements[2],X.__data[3]=0,X.__data[4]=k.elements[3],X.__data[5]=k.elements[4],X.__data[6]=k.elements[5],X.__data[7]=0,X.__data[8]=k.elements[6],X.__data[9]=k.elements[7],X.__data[10]=k.elements[8],X.__data[11]=0):(k.toArray(X.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,X.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,b,L,I){let N=A.value,D=b+"_"+L;if(I[D]===void 0)return typeof N=="number"||typeof N=="boolean"?I[D]=N:I[D]=N.clone(),!0;{let W=I[D];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return I[D]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function g(A){let b=A.uniforms,L=0,I=16;for(let D=0,W=b.length;D<W;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let C=0,X=S.length;C<X;C++){let ae=S[C],ge=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,B=ge.length;F<B;F++){let k=ge[F],ne=v(k),q=L%I;q!==0&&I-q<ne.boundary&&(L+=I-q),ae.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=L,L+=ne.storage}}}let N=L%I;return N>0&&(L+=I-N),A.__size=L,A.__cache={},this}function v(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function p(A){let b=A.target;b.removeEventListener("dispose",p);let L=o.indexOf(b.__bindingPointIndex);o.splice(L,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ia=class{constructor(e={}){let{canvas:t=ty(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=hs,this.toneMappingExposure=1;let b=this,L=!1,I=0,N=0,D=null,W=-1,S=null,C=new xt,X=new xt,ae=null,ge=new ot(0),F=0,B=t.width,k=t.height,ne=1,q=null,V=null,Q=new xt(0,0,B,k),te=new xt(0,0,B,k),he=!1,z=new Pa,j=!1,se=!1,re=null,le=new lt,Ce=new et,He=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?ne:1}let $=i;function dn(R,G){for(let J=0;J<R.length;J++){let ee=R[J],Y=t.getContext(ee,G);if(Y!==null)return Y}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",xe,!1),$===null){let G=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&G.shift(),$=dn(G,R),$===null)throw dn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,nt,Ue,Lt,ct,P,E,Z,pe,ue,me,ke,Se,Pe,$e,ht,de,Mt,ft,Qe,Ge,Ie,rt,bt;function Dt(){Xe=new hx($),nt=new sx($,Xe,e),Xe.init(nt),Ie=new Vb($,Xe,nt),Ue=new zb($,Xe,nt),Lt=new fx($),ct=new Cb,P=new Hb($,Xe,Ue,ct,nt,Ie,Lt),E=new ax(b),Z=new cx(b),pe=new by($,nt),rt=new nx($,Xe,pe,nt),ue=new ux($,pe,Lt,rt),me=new yx($,ue,pe,Lt),ft=new gx($,nt,P),ht=new rx(ct),ke=new Ab(b,E,Z,Xe,nt,rt,ht),Se=new Wb(b,ct),Pe=new Lb,$e=new Ob(Xe,nt),Mt=new tx(b,E,Z,Ue,me,d,l),de=new Bb(b,me,nt),bt=new Xb($,Lt,nt,Ue),Qe=new ix($,Xe,Lt,nt),Ge=new dx($,Xe,Lt,nt),Lt.programs=ke.programs,b.capabilities=nt,b.extensions=Xe,b.properties=ct,b.renderLists=Pe,b.shadowMap=de,b.state=Ue,b.info=Lt}Dt();let ut=new Vh(b,$);this.xr=ut,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(B,k,!1))},this.getSize=function(R){return R.set(B,k)},this.setSize=function(R,G,J=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,k=G,t.width=Math.floor(R*ne),t.height=Math.floor(G*ne),J===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(B*ne,k*ne).floor()},this.setDrawingBufferSize=function(R,G,J){B=R,k=G,ne=J,t.width=Math.floor(R*J),t.height=Math.floor(G*J),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,G,J,ee){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,G,J,ee),Ue.viewport(C.copy(Q).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,G,J,ee){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,G,J,ee),Ue.scissor(X.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(R){Ue.setScissorTest(he=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(R=!0,G=!0,J=!0){let ee=0;if(R){let Y=!1;if(D!==null){let Te=D.texture.format;Y=Te===Rp||Te===Cp||Te===Ap}if(Y){let Te=D.texture.type,Ae=Te===us||Te===ls||Te===nu||Te===Gs||Te===Ep||Te===Tp,Be=Mt.getClearColor(),Ye=Mt.getClearAlpha(),at=Be.r,it=Be.g,st=Be.b;Ae?(m[0]=at,m[1]=it,m[2]=st,m[3]=Ye,$.clearBufferuiv($.COLOR,0,m)):(g[0]=at,g[1]=it,g[2]=st,g[3]=Ye,$.clearBufferiv($.COLOR,0,g))}else ee|=$.COLOR_BUFFER_BIT}G&&(ee|=$.DEPTH_BUFFER_BIT),J&&(ee|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Pe.dispose(),$e.dispose(),ct.dispose(),E.dispose(),Z.dispose(),me.dispose(),rt.dispose(),bt.dispose(),ke.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ln),ut.removeEventListener("sessionend",At),re&&(re.dispose(),re=null),fn.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let R=Lt.autoReset,G=de.enabled,J=de.autoUpdate,ee=de.needsUpdate,Y=de.type;Dt(),Lt.autoReset=R,de.enabled=G,de.autoUpdate=J,de.needsUpdate=ee,de.type=Y}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){let G=R.target;G.removeEventListener("dispose",be),Ze(G)}function Ze(R){qe(R),ct.remove(R)}function qe(R){let G=ct.get(R).programs;G!==void 0&&(G.forEach(function(J){ke.releaseProgram(J)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,J,ee,Y,Te){G===null&&(G=Ve);let Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=Oc(R,G,J,ee,Y);Ue.setMaterial(ee,Ae);let Ye=J.index,at=1;if(ee.wireframe===!0){if(Ye=ue.getWireframeAttribute(J),Ye===void 0)return;at=2}let it=J.drawRange,st=J.attributes.position,Bt=it.start*at,Nn=(it.start+it.count)*at;Te!==null&&(Bt=Math.max(Bt,Te.start*at),Nn=Math.min(Nn,(Te.start+Te.count)*at)),Ye!==null?(Bt=Math.max(Bt,0),Nn=Math.min(Nn,Ye.count)):st!=null&&(Bt=Math.max(Bt,0),Nn=Math.min(Nn,st.count));let jt=Nn-Bt;if(jt<0||jt===1/0)return;rt.setup(Y,ee,Be,J,Ye);let Kn,Pt=Qe;if(Ye!==null&&(Kn=pe.get(Ye),Pt=Ge,Pt.setIndex(Kn)),Y.isMesh)ee.wireframe===!0?(Ue.setLineWidth(ee.wireframeLinewidth*gt()),Pt.setMode($.LINES)):Pt.setMode($.TRIANGLES);else if(Y.isLine){let tt=ee.linewidth;tt===void 0&&(tt=1),Ue.setLineWidth(tt*gt()),Y.isLineSegments?Pt.setMode($.LINES):Y.isLineLoop?Pt.setMode($.LINE_LOOP):Pt.setMode($.LINE_STRIP)}else Y.isPoints?Pt.setMode($.POINTS):Y.isSprite&&Pt.setMode($.TRIANGLES);if(Y.isBatchedMesh)Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Pt.renderInstances(Bt,jt,Y.count);else if(J.isInstancedBufferGeometry){let tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ha=Math.min(J.instanceCount,tt);Pt.renderInstances(Bt,jt,ha)}else Pt.render(Bt,jt)};function wt(R,G,J){R.transparent===!0&&R.side===kn&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,lr(R,G,J),R.side=Hn,R.needsUpdate=!0,lr(R,G,J),R.side=kn):lr(R,G,J)}this.compile=function(R,G,J=null){J===null&&(J=R),p=$e.get(J),p.init(),A.push(p),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(b._useLegacyLights);let ee=new Set;return R.traverse(function(Y){let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){let Be=Te[Ae];wt(Be,J,Y),ee.add(Be)}else wt(Te,J,Y),ee.add(Te)}),A.pop(),p=null,ee},this.compileAsync=function(R,G,J=null){let ee=this.compile(R,G,J);return new Promise(Y=>{function Te(){if(ee.forEach(function(Ae){ct.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){Y(R);return}setTimeout(Te,10)}Xe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function St(R){Tt&&Tt(R)}function ln(){fn.stop()}function At(){fn.start()}let fn=new Op;fn.setAnimationLoop(St),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(R){Tt=R,ut.setAnimationLoop(R),R===null?fn.stop():fn.start()},ut.addEventListener("sessionstart",ln),ut.addEventListener("sessionend",At),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(G),G=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,G,D),p=$e.get(R,A.length),p.init(),A.push(p),le.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),z.setFromProjectionMatrix(le),se=this.localClippingEnabled,j=ht.init(this.clippingPlanes,se),v=Pe.get(R,f.length),v.init(),f.push(v),Jn(R,G,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(q,V),this.info.render.frame++,j===!0&&ht.beginShadows();let J=p.state.shadowsArray;if(de.render(J,R,G),j===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(v,R),p.setupLights(b._useLegacyLights),G.isArrayCamera){let ee=G.cameras;for(let Y=0,Te=ee.length;Y<Te;Y++){let Ae=ee[Y];_o(v,R,Ae,Ae.viewport)}}else _o(v,R,G);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(b,R,G),rt.resetDefaultState(),W=-1,S=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Jn(R,G,J,ee){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){ee&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);let Ae=me.update(R),Be=R.material;Be.visible&&v.push(R,Ae,Be,J,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){let Ae=me.update(R),Be=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Be)){let Ye=Ae.groups;for(let at=0,it=Ye.length;at<it;at++){let st=Ye[at],Bt=Be[st.materialIndex];Bt&&Bt.visible&&v.push(R,Ae,Bt,J,He.z,st)}}else Be.visible&&v.push(R,Ae,Be,J,He.z,null)}}let Te=R.children;for(let Ae=0,Be=Te.length;Ae<Be;Ae++)Jn(Te[Ae],G,J,ee)}function _o(R,G,J,ee){let Y=R.opaque,Te=R.transmissive,Ae=R.transparent;p.setupLightsView(J),j===!0&&ht.setGlobalState(b.clippingPlanes,J),Te.length>0&&Uc(Y,Te,G,J),ee&&Ue.viewport(C.copy(ee)),Y.length>0&&or(Y,G,J),Te.length>0&&or(Te,G,J),Ae.length>0&&or(Ae,G,J),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Uc(R,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Te=nt.isWebGL2;re===null&&(re=new Vi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Aa:us,minFilter:fs,samples:Te?4:0})),b.getDrawingBufferSize(Ce),Te?re.setSize(Ce.x,Ce.y):re.setSize(al(Ce.x),al(Ce.y));let Ae=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(ge),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear();let Be=b.toneMapping;b.toneMapping=hs,or(R,J,ee),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re);let Ye=!1;for(let at=0,it=G.length;at<it;at++){let st=G[at],Bt=st.object,Nn=st.geometry,jt=st.material,Kn=st.group;if(jt.side===kn&&Bt.layers.test(ee.layers)){let Pt=jt.side;jt.side=un,jt.needsUpdate=!0,la(Bt,J,ee,Nn,jt,Kn),jt.side=Pt,jt.needsUpdate=!0,Ye=!0}}Ye===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re)),b.setRenderTarget(Ae),b.setClearColor(ge,F),b.toneMapping=Be}function or(R,G,J){let ee=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){let Ae=R[Y],Be=Ae.object,Ye=Ae.geometry,at=ee===null?Ae.material:ee,it=Ae.group;Be.layers.test(J.layers)&&la(Be,G,J,Ye,at,it)}}function la(R,G,J,ee,Y,Te){R.onBeforeRender(b,G,J,ee,Y,Te),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(b,G,J,ee,R,Te),Y.transparent===!0&&Y.side===kn&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,b.renderBufferDirect(J,G,ee,Y,R,Te),Y.side=Hn,Y.needsUpdate=!0,b.renderBufferDirect(J,G,ee,Y,R,Te),Y.side=kn):b.renderBufferDirect(J,G,ee,Y,R,Te),R.onAfterRender(b,G,J,ee,Y,Te)}function lr(R,G,J){G.isScene!==!0&&(G=Ve);let ee=ct.get(R),Y=p.state.lights,Te=p.state.shadowsArray,Ae=Y.state.version,Be=ke.getParameters(R,Y.state,Te,G,J),Ye=ke.getProgramCacheKey(Be),at=ee.programs;ee.environment=R.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||ee.environment),at===void 0&&(R.addEventListener("dispose",be),at=new Map,ee.programs=at);let it=at.get(Ye);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Ae)return vo(R,Be),it}else Be.uniforms=ke.getUniforms(R),R.onBuild(J,Be,b),R.onBeforeCompile(Be,b),it=ke.acquireProgram(Be,Ye),at.set(Ye,it),ee.uniforms=Be.uniforms;let st=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ht.uniform),vo(R,Be),ee.needsLights=kc(R),ee.lightsStateVersion=Ae,ee.needsLights&&(st.ambientLightColor.value=Y.state.ambient,st.lightProbe.value=Y.state.probe,st.directionalLights.value=Y.state.directional,st.directionalLightShadows.value=Y.state.directionalShadow,st.spotLights.value=Y.state.spot,st.spotLightShadows.value=Y.state.spotShadow,st.rectAreaLights.value=Y.state.rectArea,st.ltc_1.value=Y.state.rectAreaLTC1,st.ltc_2.value=Y.state.rectAreaLTC2,st.pointLights.value=Y.state.point,st.pointLightShadows.value=Y.state.pointShadow,st.hemisphereLights.value=Y.state.hemi,st.directionalShadowMap.value=Y.state.directionalShadowMap,st.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,st.spotShadowMap.value=Y.state.spotShadowMap,st.spotLightMatrix.value=Y.state.spotLightMatrix,st.spotLightMap.value=Y.state.spotLightMap,st.pointShadowMap.value=Y.state.pointShadowMap,st.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function ca(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=Dr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function vo(R,G){let J=ct.get(R);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Oc(R,G,J,ee,Y){G.isScene!==!0&&(G=Ve),P.resetTextureUnits();let Te=G.fog,Ae=ee.isMeshStandardMaterial?G.environment:null,Be=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Hi,Ye=(ee.isMeshStandardMaterial?Z:E).get(ee.envMap||Ae),at=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),st=!!J.morphAttributes.position,Bt=!!J.morphAttributes.normal,Nn=!!J.morphAttributes.color,jt=hs;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(jt=b.toneMapping);let Kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=Kn!==void 0?Kn.length:0,tt=ct.get(ee),ha=p.state.lights;if(j===!0&&(se===!0||R!==S)){let wn=R===S&&ee.id===W;ht.setState(ee,R,wn)}let Ut=!1;ee.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ha.state.version||tt.outputColorSpace!==Be||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||tt.envMap!==Ye||ee.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ht.numPlanes||tt.numIntersection!==ht.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==it||tt.morphTargets!==st||tt.morphNormals!==Bt||tt.morphColors!==Nn||tt.toneMapping!==jt||nt.isWebGL2===!0&&tt.morphTargetsCount!==Pt)&&(Ut=!0):(Ut=!0,tt.__version=ee.version);let Ri=tt.currentProgram;Ut===!0&&(Ri=lr(ee,G,Y));let ua=!1,Ds=!1,da=!1,cn=Ri.getUniforms(),mi=tt.uniforms;if(Ue.useProgram(Ri.program)&&(ua=!0,Ds=!0,da=!0),ee.id!==W&&(W=ee.id,Ds=!0),ua||S!==R){cn.setValue($,"projectionMatrix",R.projectionMatrix),cn.setValue($,"viewMatrix",R.matrixWorldInverse);let wn=cn.map.cameraPosition;wn!==void 0&&wn.setValue($,He.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&cn.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&cn.setValue($,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ds=!0,da=!0)}if(Y.isSkinnedMesh){cn.setOptional($,Y,"bindMatrix"),cn.setOptional($,Y,"bindMatrixInverse");let wn=Y.skeleton;wn&&(nt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),cn.setValue($,"boneTexture",wn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(cn.setOptional($,Y,"batchingTexture"),cn.setValue($,"batchingTexture",Y._matricesTexture,P));let zt=J.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0&&nt.isWebGL2===!0)&&ft.update(Y,J,Ri),(Ds||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,cn.setValue($,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(mi.envMap.value=Ye,mi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Ds&&(cn.setValue($,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&Fc(mi,da),Te&&ee.fog===!0&&Se.refreshFogUniforms(mi,Te),Se.refreshMaterialUniforms(mi,ee,ne,k,re),Dr.upload($,ca(tt),mi,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Dr.upload($,ca(tt),mi,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&cn.setValue($,"center",Y.center),cn.setValue($,"modelViewMatrix",Y.modelViewMatrix),cn.setValue($,"normalMatrix",Y.normalMatrix),cn.setValue($,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let wn=ee.uniformsGroups;for(let fa=0,xo=wn.length;fa<xo;fa++)if(nt.isWebGL2){let pa=wn[fa];bt.update(pa,Ri),bt.bind(pa,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function Fc(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function kc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,G,J){ct.get(R.texture).__webglTexture=G,ct.get(R.depthTexture).__webglTexture=J;let ee=ct.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){let J=ct.get(R);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,J=0){D=R,I=G,N=J;let ee=!0,Y=null,Te=!1,Ae=!1;if(R){let Ye=ct.get(R);Ye.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer($.FRAMEBUFFER,null),ee=!1):Ye.__webglFramebuffer===void 0?P.setupRenderTarget(R):Ye.__hasExternalTextures&&P.rebindTextures(R,ct.get(R.texture).__webglTexture,ct.get(R.depthTexture).__webglTexture);let at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);let it=ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[G])?Y=it[G][J]:Y=it[G],Te=!0):nt.isWebGL2&&R.samples>0&&P.useMultisampledRTT(R)===!1?Y=ct.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[J]:Y=it,C.copy(R.viewport),X.copy(R.scissor),ae=R.scissorTest}else C.copy(Q).multiplyScalar(ne).floor(),X.copy(te).multiplyScalar(ne).floor(),ae=he;if(Ue.bindFramebuffer($.FRAMEBUFFER,Y)&&nt.drawBuffers&&ee&&Ue.drawBuffers(R,Y),Ue.viewport(C),Ue.scissor(X),Ue.setScissorTest(ae),Te){let Ye=ct.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ye.__webglTexture,J)}else if(Ae){let Ye=ct.get(R.texture),at=G||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,at)}W=-1},this.readRenderTargetPixels=function(R,G,J,ee,Y,Te,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){Ue.bindFramebuffer($.FRAMEBUFFER,Be);try{let Ye=R.texture,at=Ye.format,it=Ye.type;if(at!==ei&&Ie.convert(at)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=it===Aa&&(Xe.has("EXT_color_buffer_half_float")||nt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(it!==us&&Ie.convert(it)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Bi&&(nt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ee&&J>=0&&J<=R.height-Y&&$.readPixels(G,J,ee,Y,Ie.convert(at),Ie.convert(it),Te)}finally{let Ye=D!==null?ct.get(D).__webglFramebuffer:null;Ue.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,G,J=0){let ee=Math.pow(2,-J),Y=Math.floor(G.image.width*ee),Te=Math.floor(G.image.height*ee);P.setTexture2D(G,0),$.copyTexSubImage2D($.TEXTURE_2D,J,0,0,R.x,R.y,Y,Te),Ue.unbindTexture()},this.copyTextureToTexture=function(R,G,J,ee=0){let Y=G.image.width,Te=G.image.height,Ae=Ie.convert(J.format),Be=Ie.convert(J.type);P.setTexture2D(J,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ee,R.x,R.y,Y,Te,Ae,Be,G.image.data):G.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ee,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Ae,G.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,ee,R.x,R.y,Ae,Be,G.image),ee===0&&J.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(R,G,J,ee,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=R.max.x-R.min.x+1,Ae=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,Ye=Ie.convert(ee.format),at=Ie.convert(ee.type),it;if(ee.isData3DTexture)P.setTexture3D(ee,0),it=$.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)P.setTexture2DArray(ee,0),it=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ee.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ee.unpackAlignment);let st=$.getParameter($.UNPACK_ROW_LENGTH),Bt=$.getParameter($.UNPACK_IMAGE_HEIGHT),Nn=$.getParameter($.UNPACK_SKIP_PIXELS),jt=$.getParameter($.UNPACK_SKIP_ROWS),Kn=$.getParameter($.UNPACK_SKIP_IMAGES),Pt=J.isCompressedTexture?J.mipmaps[Y]:J.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Pt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Pt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,R.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,R.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?$.texSubImage3D(it,Y,G.x,G.y,G.z,Te,Ae,Be,Ye,at,Pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(it,Y,G.x,G.y,G.z,Te,Ae,Be,Ye,Pt.data)):$.texSubImage3D(it,Y,G.x,G.y,G.z,Te,Ae,Be,Ye,at,Pt),$.pixelStorei($.UNPACK_ROW_LENGTH,st),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Bt),$.pixelStorei($.UNPACK_SKIP_PIXELS,Nn),$.pixelStorei($.UNPACK_SKIP_ROWS,jt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Kn),Y===0&&ee.generateMipmaps&&$.generateMipmap(it),Ue.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){I=0,N=0,D=null,Ue.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===su?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===kl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Xs:Pp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xs?Vt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Gh=class extends Ia{};Gh.prototype.isWebGL1Renderer=!0;var qs=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},yl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new U,ii=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vr=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,va=new U,Ar=new U,Cr=new U,Rr=new et,xa=new et,Vp=new lt,qo=new U,ba=new U,$o=new U,np=new et,mh=new et,ip=new et,Na=class extends Wt{constructor(e=new Vr){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Gn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yl(t,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new ii(i,3,0,!1)),Tr.setAttribute("uv",new ii(i,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),Vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-Cr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Yo(qo.set(-.5,-.5,0),Cr,o,Ar,s,r),Yo(ba.set(.5,-.5,0),Cr,o,Ar,s,r),Yo($o.set(.5,.5,0),Cr,o,Ar,s,r),np.set(0,0),mh.set(1,0),ip.set(1,1);let a=e.ray.intersectTriangle(qo,ba,$o,!1,va);if(a===null&&(Yo(ba.set(-.5,.5,0),Cr,o,Ar,s,r),mh.set(0,1),a=e.ray.intersectTriangle(qo,$o,ba,!1,va),a===null))return;let l=e.ray.origin.distanceTo(va);l<e.near||l>e.far||t.push({distance:l,point:va.clone(),uv:Vs.getInterpolation(va,qo,ba,$o,np,mh,ip,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(n,e,t,i,s,r){Rr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(xa.x=r*Rr.x-s*Rr.y,xa.y=s*Rr.x+r*Rr.y):xa.copy(Rr),n.copy(e),n.x+=xa.x,n.y+=xa.y,n.applyMatrix4(Vp)}var sp=new U,rp=new xt,ap=new xt,qb=new U,op=new lt,jo=new U,gh=new ni,lp=new lt,yh=new Br,_l=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bd,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jo),this.boundingBox.expandByPoint(jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jo),this.boundingSphere.expandByPoint(jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(s),e.ray.intersectsSphere(gh)!==!1&&(lp.copy(s).invert(),yh.copy(e.ray).applyMatrix4(lp),!(this.boundingBox!==null&&yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===x0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;rp.fromBufferAttribute(s.attributes.skinIndex,e),ap.fromBufferAttribute(s.attributes.skinWeight,e),sp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=ap.getComponent(r);if(o!==0){let a=rp.getComponent(r);op.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(qb.copy(sp).applyMatrix4(op),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Da=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vl=class extends Vn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=pn,h=pn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cp=new lt,$b=new lt,xl=class n{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:$b;cp.multiplyMatrices(a,t[r]),cp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new vl(t,e,e,ei,Bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Da),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Gr=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hp=new U,up=new U,dp=new lt,_h=new Br,Zo=new ni,Ua=class extends Wt{constructor(e=new Gn,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)hp.fromBufferAttribute(t,s-1),up.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=hp.distanceTo(up);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;dp.copy(s).invert(),_h.copy(e.ray).applyMatrix4(dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let b=f,L=A-1;b<L;b+=m){let I=g.getX(b),N=g.getX(b+1);if(c.fromBufferAttribute(p,I),h.fromBufferAttribute(p,N),_h.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let W=e.ray.origin.distanceTo(d);W<e.near||W>e.far||t.push({distance:W,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),A=Math.min(p.count,o.start+o.count);for(let b=f,L=A-1;b<L;b+=m){if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,b+1),_h.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},fp=new U,pp=new U,bl=class extends Ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)fp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fp.distanceTo(pp);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Wr=class extends Vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ml=class n extends Gn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,m=[],g=[],v=[],p=[];for(let f=0;f<=i;f++){let A=[],b=f/i,L=0;f===0&&o===0?L=.5/t:f===i&&l===Math.PI&&(L=-.5/t);for(let I=0;I<=t;I++){let N=I/t;u.x=-e*Math.cos(s+N*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+N*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(N+L,1-b),A.push(c++)}h.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){let b=h[f][A+1],L=h[f][A],I=h[f+1][A],N=h[f+1][A+1];(f!==0||o>0)&&m.push(b,L,N),(f!==i-1||l<Math.PI)&&m.push(L,I,N)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sl=class extends Gn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,m=u.count;for(let g=d,v=d+m;g<v;g+=3)for(let p=0;p<3;p++){let f=a.getX(g+p),A=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,A),mp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),mp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Oa=class extends _i{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var $s=class extends _i{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Jo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Yb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function jb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function gp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Gp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Xr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends Xr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ff,endingEnd:ff}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pf:r=e,a=2*t-i;break;case mf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pf:o=e,l=2*i-t;break;case mf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,A=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-m)*p+(1.5+m)*v+.5*g,L=m*p-m*v;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+A*o[c+I]+b*o[l+I]+L*o[u+I];return r}},Xh=class extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},qh=class extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},si=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case el:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case qc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return el;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return qc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Yb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=tl;var ms=class extends si{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=el;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends si{};wl.prototype.ValueTypeName="color";var qr=class extends si{};qr.prototype.ValueTypeName="number";var $h=class extends Xr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)yi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wi=class extends si{InterpolantFactoryMethodLinear(e){return new $h(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=tl;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends si{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=el;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends si{};Xi.prototype.ValueTypeName="vector";var Fa=class{constructor(e,t=-1,i,s=L0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Jb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(si.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=jb(l);l=gp(l,1,h),c=gp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,m,g,v){if(m.length!==0){let p=[],f=[];Gp(m,p,f,g),p.length!==0&&v.push(new u(d,p,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)m[d[g].morphTargets[v]]=-1;for(let v in m){let p=[],f=[];for(let A=0;A!==d[g].morphTargets.length;++A){let b=d[g];p.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new qr(".morphTargetInfluence["+v+"]",p,f))}l=m.length*o}else{let m=".bones["+t[u].name+"]";i(Xi,m+".position",d,"pos",s),i(Wi,m+".quaternion",d,"rot",s),i(Xi,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Zb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qr;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return wl;case"quaternion":return Wi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Jb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zb(n.type);if(n.times===void 0){let t=[],i=[];Gp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var El={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ka=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Kb=new ka,vi=class{constructor(e){this.manager=e!==void 0?e:Kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},Yh=class extends Error{constructor(e,t){super(e),this.response=t}},Ba=class extends vi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=El.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:i,onError:s});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,v=0,p=new ReadableStream({start(f){A();function A(){u.read().then(({done:b,value:L})=>{if(b)f.close();else{v+=L.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let N=0,D=h.length;N<D;N++){let W=h[N];W.onProgress&&W.onProgress(I)}f.enqueue(L),A()}})}}});return new Response(p)}else throw new Yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{El.add(e,c);let h=Oi[e];delete Oi[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jh=class extends vi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=El.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ca("img");function l(){h(),El.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Tl=class extends vi{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new vl,a=new Ba(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Cn,o.wrapT=c.wrapT!==void 0?c.wrapT:Cn,o.magFilter=c.magFilter!==void 0?c.magFilter:On,o.minFilter=c.minFilter!==void 0?c.minFilter:On,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=fs),c.mipmapCount===1&&(o.minFilter=On),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},Al=class extends vi{constructor(e){super(e)}load(e,t,i,s){let r=new Vn,o=new jh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ys=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Cl=class extends Ys{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},vh=new lt,yp=new U,_p=new U,za=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yp.setFromMatrixPosition(e.matrixWorld),t.position.copy(yp),_p.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_p),t.updateMatrixWorld(),vh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zh=class extends za{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Rl=class extends Ys{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vp=new lt,Ma=new U,xh=new U,Jh=class extends za{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ma),xh.copy(i.position),xh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(xh),i.updateMatrixWorld(),s.makeTranslation(-Ma.x,-Ma.y,-Ma.z),vp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vp)}},Ll=class extends Ys{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Kh=class extends za{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Pl=class extends Ys{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Il=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Nl=class extends Gn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var ou="\\[\\]\\.:\\/",Qb=new RegExp("["+ou+"]","g"),lu="[^"+ou+"]",eM="[^"+ou.replace("\\.","")+"]",tM=/((?:WC+[\/:])*)/.source.replace("WC",lu),nM=/(WCOD+)?/.source.replace("WCOD",eM),iM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lu),sM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lu),rM=new RegExp("^"+tM+nM+iM+sM+"$"),aM=["material","materials","bones","map"],Qh=class{constructor(e,t,i){let s=i||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},kt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qb,"")}static parseTrackName(e){let t=rM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);aM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=Qh;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y1=new Float32Array(1);var js=class extends yl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Dl=class{constructor(e,t,i=0,s=1/0){this.ray=new Br(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return eu(e,this,i,t),i.sort(xp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,i,t);return i.sort(xp),i}};function xp(n,e){return n.distance-e.distance}function eu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)eu(s[r],e,t,!0)}}var bp=new U,Ko=new U,Ul=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bp.subVectors(e,this.start),Ko.subVectors(this.end,this.start);let i=Ko.dot(Ko),r=Ko.dot(bp)/i;return t&&(r=An(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);var Ha=class extends Tl{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case v:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case f:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function i(k,ne,q,V,Q){let te,he,z=q.pixel_size>>3,j=q.width*q.height*z;if(ne&&(he=Q.subarray(V,V+=q.colormap_length*(q.colormap_size>>3))),k){te=new Uint8Array(j);let se,re,le,Ce=0,He=new Uint8Array(z);for(;Ce<j;)if(se=Q[V++],re=(se&127)+1,se&128){for(le=0;le<z;++le)He[le]=Q[V++];for(le=0;le<re;++le)te.set(He,Ce+le*z);Ce+=z*re}else{for(re*=z,le=0;le<re;++le)te[Ce+le]=Q[V++];Ce+=re}}else te=Q.subarray(V,V+=ne?q.width*q.height:j);return{pixel_data:te,palettes:he}}function s(k,ne,q,V,Q,te,he,z,j){let se=j,re,le=0,Ce,He,Ve=C.width;for(He=ne;He!==V;He+=q)for(Ce=Q;Ce!==he;Ce+=te,le++)re=z[le],k[(Ce+Ve*He)*4+3]=255,k[(Ce+Ve*He)*4+2]=se[re*3+0],k[(Ce+Ve*He)*4+1]=se[re*3+1],k[(Ce+Ve*He)*4+0]=se[re*3+2];return k}function r(k,ne,q,V,Q,te,he,z){let j,se=0,re,le,Ce=C.width;for(le=ne;le!==V;le+=q)for(re=Q;re!==he;re+=te,se+=2)j=z[se+0]+(z[se+1]<<8),k[(re+Ce*le)*4+0]=(j&31744)>>7,k[(re+Ce*le)*4+1]=(j&992)>>2,k[(re+Ce*le)*4+2]=(j&31)<<3,k[(re+Ce*le)*4+3]=j&32768?0:255;return k}function o(k,ne,q,V,Q,te,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==V;re+=q)for(se=Q;se!==he;se+=te,j+=3)k[(se+le*re)*4+3]=255,k[(se+le*re)*4+2]=z[j+0],k[(se+le*re)*4+1]=z[j+1],k[(se+le*re)*4+0]=z[j+2];return k}function a(k,ne,q,V,Q,te,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==V;re+=q)for(se=Q;se!==he;se+=te,j+=4)k[(se+le*re)*4+2]=z[j+0],k[(se+le*re)*4+1]=z[j+1],k[(se+le*re)*4+0]=z[j+2],k[(se+le*re)*4+3]=z[j+3];return k}function l(k,ne,q,V,Q,te,he,z){let j,se=0,re,le,Ce=C.width;for(le=ne;le!==V;le+=q)for(re=Q;re!==he;re+=te,se++)j=z[se],k[(re+Ce*le)*4+0]=j,k[(re+Ce*le)*4+1]=j,k[(re+Ce*le)*4+2]=j,k[(re+Ce*le)*4+3]=255;return k}function c(k,ne,q,V,Q,te,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==V;re+=q)for(se=Q;se!==he;se+=te,j+=2)k[(se+le*re)*4+0]=z[j+0],k[(se+le*re)*4+1]=z[j+0],k[(se+le*re)*4+2]=z[j+0],k[(se+le*re)*4+3]=z[j+1];return k}function h(k,ne,q,V,Q){let te,he,z,j,se,re;switch((C.flags&A)>>b){default:case N:te=0,z=1,se=ne,he=0,j=1,re=q;break;case L:te=0,z=1,se=ne,he=q-1,j=-1,re=-1;break;case D:te=ne-1,z=-1,se=-1,he=0,j=1,re=q;break;case I:te=ne-1,z=-1,se=-1,he=q-1,j=-1,re=-1;break}if(ge)switch(C.pixel_size){case 8:l(k,he,j,re,te,z,se,V);break;case 16:c(k,he,j,re,te,z,se,V);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(C.pixel_size){case 8:s(k,he,j,re,te,z,se,V,Q);break;case 16:r(k,he,j,re,te,z,se,V);break;case 24:o(k,he,j,re,te,z,se,V);break;case 32:a(k,he,j,re,te,z,se,V);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let u=0,d=1,m=2,g=3,v=9,p=10,f=11,A=48,b=4,L=0,I=1,N=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let W=0,S=new Uint8Array(e),C={id_length:S[W++],colormap_type:S[W++],image_type:S[W++],colormap_index:S[W++]|S[W++]<<8,colormap_length:S[W++]|S[W++]<<8,colormap_size:S[W++],origin:[S[W++]|S[W++]<<8,S[W++]|S[W++]<<8],width:S[W++]|S[W++]<<8,height:S[W++]|S[W++]<<8,pixel_size:S[W++],flags:S[W++]};if(t(C),C.id_length+W>e.length)throw new Error("THREE.TGALoader: No data.");W+=C.id_length;let X=!1,ae=!1,ge=!1;switch(C.image_type){case v:X=!0,ae=!0;break;case d:ae=!0;break;case p:X=!0;break;case m:break;case f:X=!0,ge=!0;break;case g:ge=!0;break}let F=new Uint8Array(C.width*C.height*4),B=i(X,ae,C,W,S);return h(F,C.width,C.height,B.pixel_data,B.palettes),{data:F,width:C.width,height:C.height,flipY:!0,generateMipmaps:!0,minFilter:fs}}};var Hl=class extends vi{load(e,t,i,s){let r=this,o=r.path===""?Il.extractUrlBase(e):r.path,a=new Ba(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,y){let w=[],M=_.childNodes;for(let T=0,K=M.length;T<K;T++){let ie=M[T];ie.nodeName===y&&w.push(ie)}return w}function s(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=y[M];return w}function r(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=parseFloat(y[M]);return w}function o(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,T=y.length;M<T;M++)w[M]=parseInt(y[M]);return w}function a(_){return _.substring(1)}function l(){return"three_default_"+kg++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,y,w,M){let T=i(_,y)[0];if(T!==void 0){let K=i(T,w);for(let ie=0;ie<K.length;ie++)M(K[ie])}}function g(_,y){for(let w in _){let M=_[w];M.build=y(_[w])}}function v(_,y){return _.build!==void 0||(_.build=y(_)),_.build}function p(_){let y={sources:{},samplers:{},channels:{}},w=!1;for(let M=0,T=_.childNodes.length;M<T;M++){let K=_.childNodes[M];if(K.nodeType!==1)continue;let ie;switch(K.nodeName){case"source":ie=K.getAttribute("id"),y.sources[ie]=O(K);break;case"sampler":ie=K.getAttribute("id"),y.samplers[ie]=f(K);break;case"channel":ie=K.getAttribute("target"),y.channels[ie]=A(K);break;case"animation":p(K),w=!0;break;default:console.log(K)}}w===!1&&(je.animations[_.getAttribute("id")||ys.generateUUID()]=y)}function f(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let K=a(T.getAttribute("source")),ie=T.getAttribute("semantic");y.inputs[ie]=K;break}}return y}function A(_){let y={},M=_.getAttribute("target").split("/"),T=M.shift(),K=M.shift(),ie=K.indexOf("(")!==-1,Le=K.indexOf(".")!==-1;if(Le)M=K.split("."),K=M.shift(),y.member=M.shift();else if(ie){let ve=K.split("(");K=ve.shift();for(let we=0;we<ve.length;we++)ve[we]=parseInt(ve[we].replace(/\)/,""));y.indices=ve}return y.id=T,y.sid=K,y.arraySyntax=ie,y.memberSyntax=Le,y.sampler=a(_.getAttribute("source")),y}function b(_){let y=[],w=_.channels,M=_.samplers,T=_.sources;for(let K in w)if(w.hasOwnProperty(K)){let ie=w[K],Le=M[ie.sampler],ve=Le.inputs.INPUT,we=Le.inputs.OUTPUT,Fe=T[ve],ce=T[we],Oe=I(ie,Fe,ce);C(Oe,y)}return y}function L(_){return v(je.animations[_],b)}function I(_,y,w){let M=je.nodes[_.id],T=tt(M.id),K=M.transforms[_.sid],ie=M.matrix.clone().transpose(),Le,ve,we,Fe,ce,Oe,Ne={};switch(K){case"matrix":for(we=0,Fe=y.array.length;we<Fe;we++)if(Le=y.array[we],ve=we*w.stride,Ne[Le]===void 0&&(Ne[Le]={}),_.arraySyntax===!0){let Ht=w.array[ve],Et=_.indices[0]+4*_.indices[1];Ne[Le][Et]=Ht}else for(ce=0,Oe=w.stride;ce<Oe;ce++)Ne[Le][ce]=w.array[ve+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let We=N(Ne,ie);return{name:T.uuid,keyframes:We}}function N(_,y){let w=[];for(let T in _)w.push({time:parseFloat(T),value:_[T]});w.sort(M);for(let T=0;T<16;T++)X(w,T,y.elements[T]);return w;function M(T,K){return T.time-K.time}}let D=new U,W=new U,S=new yi;function C(_,y){let w=_.keyframes,M=_.name,T=[],K=[],ie=[],Le=[];for(let ve=0,we=w.length;ve<we;ve++){let Fe=w[ve],ce=Fe.time,Oe=Fe.value;Ae.fromArray(Oe).transpose(),Ae.decompose(D,S,W),T.push(ce),K.push(D.x,D.y,D.z),ie.push(S.x,S.y,S.z,S.w),Le.push(W.x,W.y,W.z)}return K.length>0&&y.push(new Xi(M+".position",T,K)),ie.length>0&&y.push(new Wi(M+".quaternion",T,ie)),Le.length>0&&y.push(new Xi(M+".scale",T,Le)),y}function X(_,y,w){let M,T=!0,K,ie;for(K=0,ie=_.length;K<ie;K++)M=_[K],M.value[y]===void 0?M.value[y]=null:T=!1;if(T===!0)for(K=0,ie=_.length;K<ie;K++)M=_[K],M.value[y]=w;else ae(_,y)}function ae(_,y){let w,M;for(let T=0,K=_.length;T<K;T++){let ie=_[T];if(ie.value[y]===null){if(w=ge(_,T,y),M=F(_,T,y),w===null){ie.value[y]=M.value[y];continue}if(M===null){ie.value[y]=w.value[y];continue}B(ie,w,M,y)}}}function ge(_,y,w){for(;y>=0;){let M=_[y];if(M.value[w]!==null)return M;y--}return null}function F(_,y,w){for(;y<_.length;){let M=_[y];if(M.value[w]!==null)return M;y++}return null}function B(_,y,w,M){if(w.time-y.time===0){_.value[M]=y.value[M];return}_.value[M]=(_.time-y.time)*(w.value[M]-y.value[M])/(w.time-y.time)+y.value[M]}function k(_){let y={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_animation":y.animations.push(a(T.getAttribute("url")));break}}je.clips[_.getAttribute("id")]=y}function ne(_){let y=[],w=_.name,M=_.end-_.start||-1,T=_.animations;for(let K=0,ie=T.length;K<ie;K++){let Le=L(T[K]);for(let ve=0,we=Le.length;ve<we;ve++)y.push(Le[ve])}return new Fa(w,M,y)}function q(_){return v(je.clips[_],ne)}function V(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"skin":y.id=a(T.getAttribute("source")),y.skin=Q(T);break;case"morph":y.id=a(T.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[_.getAttribute("id")]=y}function Q(_){let y={sources:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(T.textContent);break;case"source":let K=T.getAttribute("id");y.sources[K]=O(T);break;case"joints":y.joints=te(T);break;case"vertex_weights":y.vertexWeights=he(T);break}}return y}function te(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let K=T.getAttribute("semantic"),ie=a(T.getAttribute("source"));y.inputs[K]=ie;break}}return y}function he(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let K=T.getAttribute("semantic"),ie=a(T.getAttribute("source")),Le=parseInt(T.getAttribute("offset"));y.inputs[K]={id:ie,offset:Le};break;case"vcount":y.vcount=o(T.textContent);break;case"v":y.v=o(T.textContent);break}}return y}function z(_){let y={id:_.id},w=je.geometries[y.id];return _.skin!==void 0&&(y.skin=j(_.skin),w.sources.skinIndices=y.skin.indices,w.sources.skinWeights=y.skin.weights),y}function j(_){let w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=_.sources,T=_.vertexWeights,K=T.vcount,ie=T.v,Le=T.inputs.JOINT.offset,ve=T.inputs.WEIGHT.offset,we=_.sources[_.joints.inputs.JOINT],Fe=_.sources[_.joints.inputs.INV_BIND_MATRIX],ce=M[T.inputs.WEIGHT.id].array,Oe=0,Ne,We,ze;for(Ne=0,ze=K.length;Ne<ze;Ne++){let Et=K[Ne],_t=[];for(We=0;We<Et;We++){let vt=ie[Oe+Le],Li=ie[Oe+ve],zn=ce[Li];_t.push({index:vt,weight:zn}),Oe+=2}for(_t.sort(Ht),We=0;We<4;We++){let vt=_t[We];vt!==void 0?(w.indices.array.push(vt.index),w.weights.array.push(vt.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(_.bindShapeMatrix?w.bindMatrix=new lt().fromArray(_.bindShapeMatrix).transpose():w.bindMatrix=new lt().identity(),Ne=0,ze=we.array.length;Ne<ze;Ne++){let Et=we.array[Ne],_t=new lt().fromArray(Fe.array,Ne*Fe.stride).transpose();w.joints.push({name:Et,boneInverse:_t})}return w;function Ht(Et,_t){return _t.weight-Et.weight}}function se(_){return v(je.controllers[_],z)}function re(_){let y={init_from:i(_,"init_from")[0].textContent};je.images[_.getAttribute("id")]=y}function le(_){return _.build!==void 0?_.build:_.init_from}function Ce(_){let y=je.images[_];return y!==void 0?v(y,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function He(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"profile_COMMON":y.profile=Ve(T);break}}je.effects[_.getAttribute("id")]=y}function Ve(_){let y={surfaces:{},samplers:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"newparam":gt(T,y);break;case"technique":y.technique=Xe(T);break;case"extra":y.extra=E(T);break}}return y}function gt(_,y){let w=_.getAttribute("sid");for(let M=0,T=_.childNodes.length;M<T;M++){let K=_.childNodes[M];if(K.nodeType===1)switch(K.nodeName){case"surface":y.surfaces[w]=$(K);break;case"sampler2D":y.samplers[w]=dn(K);break}}}function $(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"init_from":y.init_from=T.textContent;break}}return y}function dn(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"source":y.source=T.textContent;break}}return y}function Xe(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=T.nodeName,y.parameters=nt(T);break;case"extra":y.extra=E(T);break}}return y}function nt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[T.nodeName]=Ue(T);break;case"transparent":y[T.nodeName]={opaque:T.hasAttribute("opaque")?T.getAttribute("opaque"):"A_ONE",data:Ue(T)};break}}return y}function Ue(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":y[T.nodeName]=r(T.textContent);break;case"float":y[T.nodeName]=parseFloat(T.textContent);break;case"texture":y[T.nodeName]={id:T.getAttribute("texture"),extra:Lt(T)};break}}return y}function Lt(_){let y={technique:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"extra":ct(T,y);break}}return y}function ct(_,y){for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":P(T,y);break}}}function P(_,y){for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[T.nodeName]=parseFloat(T.textContent);break;case"wrapU":case"wrapV":T.textContent.toUpperCase()==="TRUE"?y.technique[T.nodeName]=1:T.textContent.toUpperCase()==="FALSE"?y.technique[T.nodeName]=0:y.technique[T.nodeName]=parseInt(T.textContent);break;case"bump":y[T.nodeName]=pe(T);break}}}function E(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique":y.technique=Z(T);break}}return y}function Z(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"double_sided":y[T.nodeName]=parseInt(T.textContent);break;case"bump":y[T.nodeName]=pe(T);break}}return y}function pe(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"texture":y[T.nodeName]={id:T.getAttribute("texture"),texcoord:T.getAttribute("texcoord"),extra:Lt(T)};break}}return y}function ue(_){return _}function me(_){return v(je.effects[_],ue)}function ke(_){let y={name:_.getAttribute("name")};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"instance_effect":y.url=a(T.getAttribute("url"));break}}je.materials[_.getAttribute("id")]=y}function Se(_){let y,w=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":y=Bc;break;default:y=pa}return y}function Pe(_){let y=me(_.url),w=y.profile.technique,M;switch(w.type){case"phong":case"blinn":M=new Oa;break;case"lambert":M=new $s;break;default:M=new Kt;break}M.name=_.name||"";function T(ve,we=null){let Fe=y.profile.samplers[ve.id],ce=null;if(Fe!==void 0){let Oe=y.profile.surfaces[Fe.source];ce=Ce(Oe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Ce(ve.id);if(ce!==null){let Oe=Se(ce);if(Oe!==void 0){let Ne=Oe.load(ce),We=ve.extra;if(We!==void 0&&We.technique!==void 0&&c(We.technique)===!1){let ze=We.technique;Ne.wrapS=ze.wrapU?ds:Cn,Ne.wrapT=ze.wrapV?ds:Cn,Ne.offset.set(ze.offsetU||0,ze.offsetV||0),Ne.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Ne.wrapS=ds,Ne.wrapT=ds;return we!==null&&(Ne.colorSpace=we),Ne}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}let K=w.parameters;for(let ve in K){let we=K[ve];switch(ve){case"diffuse":we.color&&M.color.fromArray(we.color),we.texture&&(M.map=T(we.texture,Vt));break;case"specular":we.color&&M.specular&&M.specular.fromArray(we.color),we.texture&&(M.specularMap=T(we.texture));break;case"bump":we.texture&&(M.normalMap=T(we.texture));break;case"ambient":we.texture&&(M.lightMap=T(we.texture,Vt));break;case"shininess":we.float&&M.shininess&&(M.shininess=we.float);break;case"emission":we.color&&M.emissive&&M.emissive.fromArray(we.color),we.texture&&(M.emissiveMap=T(we.texture,Vt));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let ie=K.transparent,Le=K.transparency;if(Le===void 0&&ie&&(Le={float:1}),ie===void 0&&Le&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Le)if(ie.data.texture)M.transparent=!0;else{let ve=ie.data.color;switch(ie.opaque){case"A_ONE":M.opacity=ve[3]*Le.float;break;case"RGB_ZERO":M.opacity=1-ve[0]*Le.float;break;case"A_ZERO":M.opacity=1-ve[3]*Le.float;break;case"RGB_ONE":M.opacity=ve[0]*Le.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}M.opacity<1&&(M.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){let ve=w.extra.technique;for(let we in ve){let Fe=ve[we];switch(we){case"double_sided":M.side=Fe===1?kn:Hn;break;case"bump":M.normalMap=T(Fe.texture),M.normalScale=new et(1,1);break}}}return M}function $e(_){return v(je.materials[_],Pe)}function ht(_){let y={name:_.getAttribute("name")};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"optics":y.optics=de(T);break}}je.cameras[_.getAttribute("id")]=y}function de(_){for(let y=0;y<_.childNodes.length;y++){let w=_.childNodes[y];switch(w.nodeName){case"technique_common":return Mt(w)}}return{}}function Mt(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=ft(M);break}}return y}function ft(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Qe(_){let y;switch(_.optics.technique){case"perspective":y=new Jt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let w=_.optics.parameters.ymag,M=_.optics.parameters.xmag,T=_.optics.parameters.aspect_ratio;M=M===void 0?w*T:M,w=w===void 0?M/T:w,M*=.5,w*=.5,y=new Hr(-M,M,w,-w,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:y=new Jt;break}return y.name=_.name||"",y}function Ge(_){let y=je.cameras[_];return y!==void 0?v(y,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Ie(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"technique_common":y=rt(T);break}}je.lights[_.getAttribute("id")]=y}function rt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=T.nodeName,y.parameters=bt(T)}}return y}function bt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"color":let K=r(T.textContent);y.color=new ot().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(T.textContent);break;case"quadratic_attenuation":let ie=parseFloat(T.textContent);y.distance=ie?Math.sqrt(1/ie):0;break}}return y}function Dt(_){let y;switch(_.technique){case"directional":y=new $r;break;case"point":y=new Ll;break;case"spot":y=new Rl;break;case"ambient":y=new Pl;break}return _.parameters.color&&y.color.copy(_.parameters.color),_.parameters.distance&&(y.distance=_.parameters.distance),y}function ut(_){let y=je.lights[_];return y!==void 0?v(y,Dt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function _e(_){let y={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(_,"mesh")[0];if(w!==void 0){for(let M=0;M<w.childNodes.length;M++){let T=w.childNodes[M];if(T.nodeType!==1)continue;let K=T.getAttribute("id");switch(T.nodeName){case"source":y.sources[K]=O(T);break;case"vertices":y.vertices=xe(T);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",T.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(be(T));break;default:console.log(T)}}je.geometries[_.getAttribute("id")]=y}}function O(_){let y={array:[],stride:3};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let T=i(M,"accessor")[0];T!==void 0&&(y.stride=parseInt(T.getAttribute("stride")));break}}return y}function xe(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];M.nodeType===1&&(y[M.getAttribute("semantic")]=a(M.getAttribute("source")))}return y}function be(_){let y={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,M=_.childNodes.length;w<M;w++){let T=_.childNodes[w];if(T.nodeType===1)switch(T.nodeName){case"input":let K=a(T.getAttribute("source")),ie=T.getAttribute("semantic"),Le=parseInt(T.getAttribute("offset")),ve=parseInt(T.getAttribute("set")),we=ve>0?ie+ve:ie;y.inputs[we]={id:K,offset:Le},y.stride=Math.max(y.stride,Le+1),ie==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(T.textContent);break;case"p":y.p=o(T.textContent);break}}return y}function Ze(_){let y={};for(let w=0;w<_.length;w++){let M=_[w];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function qe(_){let y=0;for(let w=0,M=_.length;w<M;w++)_[w].hasUV===!0&&y++;y>0&&y<_.length&&(_.uvsNeedsFix=!0)}function wt(_){let y={},w=_.sources,M=_.vertices,T=_.primitives;if(T.length===0)return{};let K=Ze(T);for(let ie in K){let Le=K[ie];qe(Le),y[ie]=Tt(Le,w,M)}return y}function Tt(_,y,w){let M={},T={array:[],stride:0},K={array:[],stride:0},ie={array:[],stride:0},Le={array:[],stride:0},ve={array:[],stride:0},we={array:[],stride:4},Fe={array:[],stride:4},ce=new Gn,Oe=[],Ne=0;for(let We=0;We<_.length;We++){let ze=_[We],Ht=ze.inputs,Et=0;switch(ze.type){case"lines":case"linestrips":Et=ze.count*2;break;case"triangles":Et=ze.count*3;break;case"polylist":for(let _t=0;_t<ze.count;_t++){let vt=ze.vcount[_t];switch(vt){case 3:Et+=3;break;case 4:Et+=6;break;default:Et+=(vt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}ce.addGroup(Ne,Et,We),Ne+=Et,ze.material&&Oe.push(ze.material);for(let _t in Ht){let vt=Ht[_t];switch(_t){case"VERTEX":for(let Li in w){let zn=w[Li];switch(Li){case"POSITION":let cr=T.array.length;if(St(ze,y[zn],vt.offset,T.array),T.stride=y[zn].stride,y.skinWeights&&y.skinIndices&&(St(ze,y.skinIndices,vt.offset,we.array),St(ze,y.skinWeights,vt.offset,Fe.array)),ze.hasUV===!1&&_.uvsNeedsFix===!0){let Bg=(T.array.length-cr)/T.stride;for(let Id=0;Id<Bg;Id++)ie.array.push(0,0)}break;case"NORMAL":St(ze,y[zn],vt.offset,K.array),K.stride=y[zn].stride;break;case"COLOR":St(ze,y[zn],vt.offset,ve.array),ve.stride=y[zn].stride;break;case"TEXCOORD":St(ze,y[zn],vt.offset,ie.array),ie.stride=y[zn].stride;break;case"TEXCOORD1":St(ze,y[zn],vt.offset,Le.array),ie.stride=y[zn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Li)}}break;case"NORMAL":St(ze,y[vt.id],vt.offset,K.array),K.stride=y[vt.id].stride;break;case"COLOR":St(ze,y[vt.id],vt.offset,ve.array,!0),ve.stride=y[vt.id].stride;break;case"TEXCOORD":St(ze,y[vt.id],vt.offset,ie.array),ie.stride=y[vt.id].stride;break;case"TEXCOORD1":St(ze,y[vt.id],vt.offset,Le.array),Le.stride=y[vt.id].stride;break}}}return T.array.length>0&&ce.setAttribute("position",new It(T.array,T.stride)),K.array.length>0&&ce.setAttribute("normal",new It(K.array,K.stride)),ve.array.length>0&&ce.setAttribute("color",new It(ve.array,ve.stride)),ie.array.length>0&&ce.setAttribute("uv",new It(ie.array,ie.stride)),Le.array.length>0&&ce.setAttribute("uv1",new It(Le.array,Le.stride)),we.array.length>0&&ce.setAttribute("skinIndex",new It(we.array,we.stride)),Fe.array.length>0&&ce.setAttribute("skinWeight",new It(Fe.array,Fe.stride)),M.data=ce,M.type=_[0].type,M.materialKeys=Oe,M}function St(_,y,w,M,T=!1){let K=_.p,ie=_.stride,Le=_.vcount;function ve(ce){let Oe=K[ce+w]*Fe,Ne=Oe+Fe;for(;Oe<Ne;Oe++)M.push(we[Oe]);if(T){let We=M.length-Fe-1;bo.setRGB(M[We+0],M[We+1],M[We+2]).convertSRGBToLinear(),M[We+0]=bo.r,M[We+1]=bo.g,M[We+2]=bo.b}}let we=y.array,Fe=y.stride;if(_.vcount!==void 0){let ce=0;for(let Oe=0,Ne=Le.length;Oe<Ne;Oe++){let We=Le[Oe];if(We===4){let ze=ce+ie*0,Ht=ce+ie*1,Et=ce+ie*2,_t=ce+ie*3;ve(ze),ve(Ht),ve(_t),ve(Ht),ve(Et),ve(_t)}else if(We===3){let ze=ce+ie*0,Ht=ce+ie*1,Et=ce+ie*2;ve(ze),ve(Ht),ve(Et)}else if(We>4)for(let ze=1,Ht=We-2;ze<=Ht;ze++){let Et=ce+ie*0,_t=ce+ie*ze,vt=ce+ie*(ze+1);ve(Et),ve(_t),ve(vt)}ce+=ie*We}}else for(let ce=0,Oe=K.length;ce<Oe;ce+=ie)ve(ce)}function ln(_){return v(je.geometries[_],wt)}function At(_){let y={name:_.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":_o(M,y);break}}je.kinematicsModels[_.getAttribute("id")]=y}function fn(_){return _.build!==void 0?_.build:_}function Jn(_){return v(je.kinematicsModels[_],fn)}function _o(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=Uc(M);break;case"link":y.links.push(la(M));break}}}function Uc(_){let y;for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=or(M);break}}return y}function or(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let T=r(M.textContent);y.axis.fromArray(T);break;case"limits":let K=M.getElementsByTagName("max")[0],ie=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(K.textContent),y.limits.min=parseFloat(ie.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function la(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(lr(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(ca(M));break}}return y}function lr(_){let y={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(la(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(ca(M));break}}return y}function ca(_){let y={type:_.nodeName},w=r(_.textContent);switch(y.type){case"matrix":y.obj=new lt,y.obj.fromArray(w).transpose();break;case"translate":y.obj=new U,y.obj.fromArray(w);break;case"rotate":y.obj=new U,y.obj.fromArray(w),y.angle=ys.degToRad(w[3]);break}return y}function vo(_){let y={name:_.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},Oc(M,y.rigidBodies[M.getAttribute("name")]);break}}je.physicsModels[_.getAttribute("id")]=y}function Oc(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":Fc(M,y);break}}}function Fc(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function kc(_){let y={bindJointAxis:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(R(M));break}}je.kinematicsScenes[a(_.getAttribute("url"))]=y}function R(_){let y={target:_.getAttribute("target").split("/").pop()};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let T=M.getElementsByTagName("param")[0];y.axis=T.textContent;let K=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=K.substring(0,K.length-1);break}}return y}function G(_){return _.build!==void 0?_.build:_}function J(_){return v(je.kinematicsScenes[_],G)}function ee(){let _=Object.keys(je.kinematicsModels)[0],y=Object.keys(je.kinematicsScenes)[0],w=Object.keys(je.visualScenes)[0];if(_===void 0||y===void 0)return;let M=Jn(_),T=J(y),K=ua(w),ie=T.bindJointAxis,Le={};for(let Fe=0,ce=ie.length;Fe<ce;Fe++){let Oe=ie[Fe],Ne=zt.querySelector('[sid="'+Oe.target+'"]');if(Ne){let We=Ne.parentElement;ve(Oe.jointIndex,We)}}function ve(Fe,ce){let Oe=ce.getAttribute("name"),Ne=M.joints[Fe];K.traverse(function(We){We.name===Oe&&(Le[Fe]={object:We,transforms:Y(ce),joint:Ne,position:Ne.zeroPosition})})}let we=new lt;Pd={joints:M&&M.joints,getJointValue:function(Fe){let ce=Le[Fe];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,ce){let Oe=Le[Fe];if(Oe){let Ne=Oe.joint;if(ce>Ne.limits.max||ce<Ne.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+ce+" outside of limits (min: "+Ne.limits.min+", max: "+Ne.limits.max+").");else if(Ne.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let We=Oe.object,ze=Ne.axis,Ht=Oe.transforms;Ae.identity();for(let Et=0;Et<Ht.length;Et++){let _t=Ht[Et];if(_t.sid&&_t.sid.indexOf(Fe)!==-1)switch(Ne.type){case"revolute":Ae.multiply(we.makeRotationAxis(ze,ys.degToRad(ce)));break;case"prismatic":Ae.multiply(we.makeTranslation(ze.x*ce,ze.y*ce,ze.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ne.type);break}else switch(_t.type){case"matrix":Ae.multiply(_t.obj);break;case"translate":Ae.multiply(we.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Ae.scale(_t.obj);break;case"rotate":Ae.multiply(we.makeRotationAxis(_t.obj,_t.angle));break}}We.matrix.copy(Ae),We.matrix.decompose(We.position,We.quaternion,We.scale),Le[Fe].position=ce}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Y(_){let y=[],w=zt.querySelector('[id="'+_.id+'"]');for(let M=0;M<w.childNodes.length;M++){let T=w.childNodes[M];if(T.nodeType!==1)continue;let K,ie;switch(T.nodeName){case"matrix":K=r(T.textContent);let Le=new lt().fromArray(K).transpose();y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:Le});break;case"translate":case"scale":K=r(T.textContent),ie=new U().fromArray(K),y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:ie});break;case"rotate":K=r(T.textContent),ie=new U().fromArray(K);let ve=ys.degToRad(K[3]);y.push({sid:T.getAttribute("sid"),type:T.nodeName,obj:ie,angle:ve});break}}return y}function Te(_){let y=_.getElementsByTagName("node");for(let w=0;w<y.length;w++){let M=y[w];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let Ae=new lt,Be=new U;function Ye(_){let y={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType!==1)continue;let T;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),Ye(M);break;case"instance_camera":y.instanceCameras.push(a(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(at(M));break;case"instance_light":y.instanceLights.push(a(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(at(M));break;case"instance_node":y.instanceNodes.push(a(M.getAttribute("url")));break;case"matrix":T=r(M.textContent),y.matrix.multiply(Ae.fromArray(T).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":T=r(M.textContent),Be.fromArray(T),y.matrix.multiply(Ae.makeTranslation(Be.x,Be.y,Be.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":T=r(M.textContent);let K=ys.degToRad(T[3]);y.matrix.multiply(Ae.makeRotationAxis(Be.fromArray(T),K)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":T=r(M.textContent),y.matrix.scale(Be.fromArray(T)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return Pt(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):je.nodes[y.id]=y,y}function at(_){let y={id:a(_.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"bind_material":let T=M.getElementsByTagName("instance_material");for(let K=0;K<T.length;K++){let ie=T[K],Le=ie.getAttribute("symbol"),ve=ie.getAttribute("target");y.materials[Le]=a(ve)}break;case"skeleton":y.skeletons.push(a(M.textContent));break;default:break}}return y}function it(_,y){let w=[],M=[],T,K,ie;for(T=0;T<_.length;T++){let we=_[T],Fe;if(Pt(we))Fe=tt(we),st(Fe,y,w);else if(Ri(we)){let Oe=je.visualScenes[we].children;for(let Ne=0;Ne<Oe.length;Ne++){let We=Oe[Ne];if(We.type==="JOINT"){let ze=tt(We.id);st(ze,y,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(T=0;T<y.length;T++)for(K=0;K<w.length;K++)if(ie=w[K],ie.bone.name===y[T].name){M[T]=ie,ie.processed=!0;break}for(T=0;T<w.length;T++)ie=w[T],ie.processed===!1&&(M.push(ie),ie.processed=!0);let Le=[],ve=[];for(T=0;T<M.length;T++)ie=M[T],Le.push(ie.bone),ve.push(ie.boneInverse);return new xl(Le,ve)}function st(_,y,w){_.traverse(function(M){if(M.isBone===!0){let T;for(let K=0;K<y.length;K++){let ie=y[K];if(ie.name===M.name){T=ie.boneInverse;break}}T===void 0&&(T=new lt),w.push({bone:M,boneInverse:T,processed:!1})}})}function Bt(_){let y=[],w=_.matrix,M=_.nodes,T=_.type,K=_.instanceCameras,ie=_.instanceControllers,Le=_.instanceLights,ve=_.instanceGeometries,we=_.instanceNodes;for(let ce=0,Oe=M.length;ce<Oe;ce++)y.push(tt(M[ce]));for(let ce=0,Oe=K.length;ce<Oe;ce++){let Ne=Ge(K[ce]);Ne!==null&&y.push(Ne.clone())}for(let ce=0,Oe=ie.length;ce<Oe;ce++){let Ne=ie[ce],We=se(Ne.id),ze=ln(We.id),Ht=Kn(ze,Ne.materials),Et=Ne.skeletons,_t=We.skin.joints,vt=it(Et,_t);for(let Li=0,zn=Ht.length;Li<zn;Li++){let cr=Ht[Li];cr.isSkinnedMesh&&(cr.bind(vt,We.skin.bindMatrix),cr.normalizeSkinWeights()),y.push(cr)}}for(let ce=0,Oe=Le.length;ce<Oe;ce++){let Ne=ut(Le[ce]);Ne!==null&&y.push(Ne.clone())}for(let ce=0,Oe=ve.length;ce<Oe;ce++){let Ne=ve[ce],We=ln(Ne.id),ze=Kn(We,Ne.materials);for(let Ht=0,Et=ze.length;Ht<Et;Ht++)y.push(ze[Ht])}for(let ce=0,Oe=we.length;ce<Oe;ce++)y.push(tt(we[ce]).clone());let Fe;if(M.length===0&&y.length===1)Fe=y[0];else{Fe=T==="JOINT"?new Da:new Rn;for(let ce=0;ce<y.length;ce++)Fe.add(y[ce])}return Fe.name=T==="JOINT"?_.sid:_.name,Fe.matrix.copy(w),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let Nn=new Kt({name:vi.DEFAULT_MATERIAL_NAME,color:16711935});function jt(_,y){let w=[];for(let M=0,T=_.length;M<T;M++){let K=y[_[M]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[M]),w.push(Nn)):w.push($e(K))}return w}function Kn(_,y){let w=[];for(let M in _){let T=_[M],K=jt(T.materialKeys,y);if(K.length===0&&(M==="lines"||M==="linestrips"?K.push(new Gr):K.push(new Oa)),M==="lines"||M==="linestrips")for(let we=0,Fe=K.length;we<Fe;we++){let ce=K[we];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Oe=new Gr;Oe.color.copy(ce.color),Oe.opacity=ce.opacity,Oe.transparent=ce.transparent,K[we]=Oe}}let ie=T.data.attributes.skinIndex!==void 0,Le=K.length===1?K[0]:K,ve;switch(M){case"lines":ve=new bl(T.data,Le);break;case"linestrips":ve=new Ua(T.data,Le);break;case"triangles":case"polylist":ie?ve=new _l(T.data,Le):ve=new Ft(T.data,Le);break}w.push(ve)}return w}function Pt(_){return je.nodes[_]!==void 0}function tt(_){return v(je.nodes[_],Bt)}function ha(_){let y={name:_.getAttribute("name"),children:[]};Te(_);let w=i(_,"node");for(let M=0;M<w.length;M++)y.children.push(Ye(w[M]));je.visualScenes[_.getAttribute("id")]=y}function Ut(_){let y=new Rn;y.name=_.name;let w=_.children;for(let M=0;M<w.length;M++){let T=w[M];y.add(tt(T.id))}return y}function Ri(_){return je.visualScenes[_]!==void 0}function ua(_){return v(je.visualScenes[_],Ut)}function Ds(_){let y=i(_,"instance_visual_scene")[0];return ua(a(y.getAttribute("url")))}function da(){let _=je.clips;if(c(_)===!0){if(c(je.animations)===!1){let y=[];for(let w in je.animations){let M=L(w);for(let T=0,K=M.length;T<K;T++)y.push(M[T])}Mo.push(new Fa("default",-1,y))}}else for(let y in _)Mo.push(q(y))}function cn(_){let y="",w=[_];for(;w.length;){let M=w.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,w.push.apply(w,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new qs};let mi=new DOMParser().parseFromString(e,"application/xml"),zt=i(mi,"COLLADA")[0],wn=mi.getElementsByTagName("parsererror")[0];if(wn!==void 0){let _=i(wn,"div")[0],y;return _?y=_.textContent:y=cn(wn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let fa=zt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",fa);let xo=h(i(zt,"asset")[0]),pa=new Al(this.manager);pa.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Bc;Ha&&(Bc=new Ha(this.manager),Bc.setPath(this.resourcePath||t));let bo=new ot,Mo=[],Pd={},kg=0,je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(zt,"library_animations","animation",p),m(zt,"library_animation_clips","animation_clip",k),m(zt,"library_controllers","controller",V),m(zt,"library_images","image",re),m(zt,"library_effects","effect",He),m(zt,"library_materials","material",ke),m(zt,"library_cameras","camera",ht),m(zt,"library_lights","light",Ie),m(zt,"library_geometries","geometry",_e),m(zt,"library_nodes","node",Ye),m(zt,"library_visual_scenes","visual_scene",ha),m(zt,"library_kinematics_models","kinematics_model",At),m(zt,"library_physics_models","physics_model",vo),m(zt,"scene","instance_kinematics_scene",kc),g(je.animations,b),g(je.clips,ne),g(je.controllers,z),g(je.images,le),g(je.effects,ue),g(je.materials,Pe),g(je.cameras,Qe),g(je.lights,Dt),g(je.geometries,wt),g(je.visualScenes,Ut),da(),ee();let So=Ds(i(zt,"scene")[0]);return So.animations=Mo,xo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),So.rotation.set(-Math.PI/2,0,0)),So.scale.multiplyScalar(xo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Mo},kinematics:Pd,library:je,scene:So}}};var Wp=new mn,Vl=new U,Zs=class extends Nl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new It(e,3)),this.setAttribute("uv",new It(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new js(t,6,1);return this.setAttribute("instanceStart",new ii(i,3,0)),this.setAttribute("instanceEnd",new ii(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new js(t,6,1);return this.setAttribute("instanceColorStart",new ii(i,3,0)),this.setAttribute("instanceColorEnd",new ii(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Sl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Wp.setFromBufferAttribute(t),this.boundingBox.union(Wp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vl)),Vl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Vl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Fn.line={uniforms:Bl.merge([ye.common,ye.fog,ye.line]),vertexShader:`
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
		`};var qi=class extends ui{constructor(e){super({type:"LineMaterial",uniforms:Bl.clone(Fn.line.uniforms),vertexShader:Fn.line.vertexShader,fragmentShader:Fn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Xp=new U,qp=new U,gn=new xt,yn=new xt,xi=new xt,cu=new U,hu=new lt,_n=new Ul,$p=new U,Gl=new mn,Wl=new ni,bi=new xt,Mi,Js;function Yp(n,e,t){return bi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),bi.multiplyScalar(1/bi.w),bi.x=Js/t.width,bi.y=Js/t.height,bi.applyMatrix4(n.projectionMatrixInverse),bi.multiplyScalar(1/bi.w),Math.abs(Math.max(bi.x,bi.y))}function lM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){_n.start.fromBufferAttribute(s,a),_n.end.fromBufferAttribute(r,a),_n.applyMatrix4(t);let c=new U,h=new U;Mi.distanceSqToSegment(_n.start,_n.end,h,c),h.distanceTo(c)<Js*.5&&e.push({point:h,pointOnLine:c,distance:Mi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function cM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Mi.at(1,xi),xi.w=1,xi.applyMatrix4(e.matrixWorldInverse),xi.applyMatrix4(i),xi.multiplyScalar(1/xi.w),xi.x*=r.x/2,xi.y*=r.y/2,xi.z=0,cu.copy(xi),hu.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,m=h;d<m;d++){if(gn.fromBufferAttribute(l,d),yn.fromBufferAttribute(c,d),gn.w=1,yn.w=1,gn.applyMatrix4(hu),yn.applyMatrix4(hu),gn.z>u&&yn.z>u)continue;if(gn.z>u){let b=gn.z-yn.z,L=(gn.z-u)/b;gn.lerp(yn,L)}else if(yn.z>u){let b=yn.z-gn.z,L=(yn.z-u)/b;yn.lerp(gn,L)}gn.applyMatrix4(i),yn.applyMatrix4(i),gn.multiplyScalar(1/gn.w),yn.multiplyScalar(1/yn.w),gn.x*=r.x/2,gn.y*=r.y/2,yn.x*=r.x/2,yn.y*=r.y/2,_n.start.copy(gn),_n.start.z=0,_n.end.copy(yn),_n.end.z=0;let v=_n.closestPointToPointParameter(cu,!0);_n.at(v,$p);let p=ys.lerp(gn.z,yn.z,v),f=p>=-1&&p<=1,A=cu.distanceTo($p)<Js*.5;if(f&&A){_n.start.fromBufferAttribute(l,d),_n.end.fromBufferAttribute(c,d),_n.start.applyMatrix4(o),_n.end.applyMatrix4(o);let b=new U,L=new U;Mi.distanceSqToSegment(_n.start,_n.end,L,b),t.push({point:L,pointOnLine:b,distance:Mi.origin.distanceTo(L),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Va=class extends Ft{constructor(e=new Zs,t=new qi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Xp.fromBufferAttribute(t,o),qp.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Xp.distanceTo(qp);let r=new js(s,2,1);return e.setAttribute("instanceDistanceStart",new ii(r,1,0)),e.setAttribute("instanceDistanceEnd",new ii(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Mi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Js=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Wl.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=Js*.5;else{let u=Math.max(s.near,Wl.distanceToPoint(Mi.origin));c=Yp(s,u,l.resolution)}if(Wl.radius+=c,Mi.intersectsSphere(Wl)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Gl.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Js*.5;else{let u=Math.max(s.near,Gl.distanceToPoint(Mi.origin));h=Yp(s,u,l.resolution)}Gl.expandByScalar(h),Mi.intersectsBox(Gl)!==!1&&(i?lM(this,t):cM(this,s,t))}};var hM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",Ga=null;function uM(){if(Ga)return Ga;Ga=new Map;for(let n of hM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,o]=i.split(" ");Ga.set(t?t+"/"+s:s,[+r,+o])}}return Ga}var Ks=Math.PI/180;function dM(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*Ks,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*Ks,o=(23.439-36e-8*i)*Ks,a=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(o)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*Ks+t*Ks-a,u=e*Ks;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/Ks}function fM(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=uM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function jp(n=Date.now(),e=fM()){if(e.lat==null){let r=new Date(n),o=r.getHours()+r.getMinutes()/60,a=o>=7&&o<20,l=new Date(n);return l.setHours(a?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:a,next:+l}}let t=r=>dM(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let o=r-s,a=r;for(;a-o>3e4;){let l=(o+a)/2;t(l)===i?o=l:a=l}return{day:i,next:Math.ceil(a)}}return{day:i,next:n+24*36e5}}var di=["en","fr","ca","es"];var pM={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function em(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of pM[e]||di)if(n[t])return n[t];return""}var Xa={en:{together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Video settings",hv_source:"Source",hv_cell:"Squares",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"R\xE9glages vid\xE9o",hv_source:"Source",hv_cell:"Carr\xE9s",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Ajustos del v\xEDdeo",hv_source:"Font",hv_cell:"Quadrats",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Ajustes del v\xEDdeo",hv_source:"Fuente",hv_cell:"Cuadrados",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},mM={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},qa={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function uu(){return Object.fromEntries(di.map(n=>[n,""]))}function Qs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:di.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||uu(),e.sub=e.sub||uu(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[];let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(di.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(di.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||uu(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=mM[s.layout]?s.layout:"carousel",s.card=qa[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(di.map(o=>[o,s[r]||""]))),di.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(di.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(fu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function du(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function tm(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function $l(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function De(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var gM=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Yl(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!gM.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function er(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var fu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function _s(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function pu(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Zp(n){try{let e=await pu();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Jp(n,e){let t=await pu();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Kp(n){try{let e=await pu();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Xl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Qs(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Qs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var ql=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Zp("demo:content:v6");if(e)return Qs(e);if(window.HC_CONTENT)return Qs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Qs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await Kp("demo:file:"+i.path);continue}await Jp("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Jp("demo:content:v6",e),"demo"}async reset(){await Kp("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Zp("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Qp=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Wa=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],yM=["font","size","lh","weight","italic","ls","upper"],nm=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function _M(n){let e=Qp.find(i=>i.id===n);if(e)return e.css;let t=nm(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Qp[0].css}function Si(n,e){let t=Wa.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...yM,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=_M(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function im(n){let e=[],t=[],i=[],s=[];for(let r of Wa){if(r.vars||!r.sel)continue;let o=Si(n,r.id),a=r.id;s.push(`--f-${a}: ${o.css}`,`--w-${a}: ${o.weight||400}`,`--st-${a}: ${o.italic?"italic":"normal"}`,`--tt-${a}: ${o.upper?"uppercase":"none"}`,`--ls-${a}: ${o.ls||0}em`),o.size&&s.push(`--s-${a}: ${o.size}px`,`--lh-${a}: ${o.lh?o.lh:+(o.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of Wa){let o=n&&n.typo&&n.typo[r.id]||{},a=Si(n,r.id),l=h=>o[h]!==void 0&&o[h]!==""&&o[h]!==null&&o[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${a.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${a.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(a.size*r.clamp[0])}px, ${(a.size/r.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?a.lh:+(r.lh*a.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${a.weight}`),l("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${a.ls}em`),l("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?a.lh:r.lh*a.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function sm(n){let e=new Map;for(let t of Wa){let i=Si(n,t.id),s=nm(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function mu(n){let e=new Set;for(let t of Wa){let i=Si(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function rm(n,e,t=!1){let i=Si(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let a=r.measureText(o),l=(a.actualBoundingBoxAscent||i.size*1.4)-(a.actualBoundingBoxDescent||0);if(r.fillText(o,120,120+l/2),t){let c=r.getImageData(0,0,240,240),h=c.data;for(let u=0;u<h.length;u+=4)h[u]=255-h[u],h[u+1]=255-h[u+1],h[u+2]=255-h[u+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var am=window.HC_BASE||"",ic=window.HC_MODE==="demo"?new ql(am):new Xl(am),xs=window.HC_ASSETS||null,vM=location.protocol==="file:",Bm=20261102;window.HC_SITE_VERSION=Bm;var Gt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,tn=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Gt&&Gt.files&&Gt.files[e]?Gt.files[e]:xs&&xs[e]&&xs[e].startsWith("data:")?xs[e]:ic.url(e)};async function xM(n){if(xs&&xs[n]&&!xs[n].startsWith("data:"))return xs[n];let e=await fetch(tn(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var Me=null,Zi="en",Ee=n=>em(n,Zi),Je=n=>(Xa[Zi]||Xa.en)[n],bM=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},ws={zoom:2,focus:300},MM=.08,om={};function zm(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=om[t]}):(e.forEach(t=>{om[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Nu=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=du(Me,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:Xa.en.all,fr:Xa.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Ee(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Nt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Nu(this.section.def)}},Nt=[],yt={x:0,y:0,z:0,zoom:ws.zoom},Pn={x:0,y:0,z:0},ji=0,Ti=[],SM={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function Qt(n,e,t,i={}){for(let r of Ti)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ji+(i.delay||0),ease:SM[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ti.push(s),s}var to=(n,e)=>Qt({},n,{},{onComplete:e,ease:"linear"});function xn(n){for(let e=Ti.length-1;e>=0;e--)Ti[e].obj===n&&Ti.splice(e,1)}function ia(n){return Ti.some(e=>e.obj===n&&ji>=e.start)}function Hm(n,e){if(!e&&ji<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ji-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function wM(){for(let n of Ti.slice())if(Hm(n,!1)){let e=Ti.indexOf(n);e>=0&&Ti.splice(e,1),n.onComplete&&n.onComplete()}}function Vm(){Ti.splice(0).forEach(n=>Hm(n,!0))}function EM(n,e,t,i,s,r,o){xn(yt),Qt(yt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),id(i,s,r,o)}function id(n,e,t,i){xn(Pn),Qt(Pn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function TM(n,e,t,i){xn(yt),Qt(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var lc=1,bn=n=>n<=1?1:1-Math.pow(1-1/n,lc),Ai=Math.PI/180,Du=(n,e,t)=>new U(n,e,-t),vs=(n,e,t)=>[-n,e,t],Mn=document.getElementById("stage"),Ls=new Ia({canvas:Mn,antialias:!0});Ls.debug.checkShaderErrors=!1;Ls.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ls.setClearColor(16777215,1);var Es=new qs;Es.add(new Cl(16777215,14211288,2.2));var Gm=new $r(16777215,1.2);Gm.position.set(300,800,500);Es.add(Gm);var ri=new Jt(60,1,1,6e4),Wm=new qi({color:oe.lineColor,linewidth:oe.lineThickness}),Uu=new qi({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),Xm=new qi({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),sc=new qi({color:oe.locatorColor,linewidth:1.3}),qm=[Wm,Uu,Xm,sc],$m=new ka;$m.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:tn(n));var gu=new Map;function Ts(n){return n?vM&&!/^(data:|blob:|https?:)/.test(tn(n))?Promise.reject(new Error("local")):(gu.has(n)||gu.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(tn(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=tn(n)})),gu.get(n)):Promise.reject(new Error("no image"))}function sd(n){return n.colorSpace=Vt,n.anisotropy=Math.min(8,Ls.capabilities.getMaxAnisotropy()),n}var AM=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=sd(new Wr(n)),t=new Gi(1,1),i=new qs;return[Hn,un,kn].forEach(s=>i.add(new Ft(t,new Kt({map:e,side:s})))),i.add(new Ft(t,new Kt({color:1118481}))),i.add(new Na(new Vr({map:e,transparent:!0}))),i})(),Yt=0,Xt=0,Wn=!1,cc=()=>Wn,sr=0,lm=0,no=()=>Me.settings.negative==="auto";function vc(){if(!no())return sr=0,!!Me.settings.negative;let n=jp();return sr=n.next,!n.day}function rd(){if(Gt||Me.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!no()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function Ym(n){n!==Wn&&(Wn=n,Rc(),Re&&Re.retexture())}function ad(){if(clearTimeout(lm),!no())return;lm=setTimeout(()=>{if(Date.now()>=sr-1e3){let e=vc(),t=rd();Ym(t??e)}ad()},Math.min(Math.max(sr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&sr&&Date.now()>=sr){let n=vc(),e=rd();Ym(e??n),ad()}});var jm=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},nn=()=>{let n=Me.settings.accent||"#ffcc00";return cc()?jm(n):n},$t='Georgia, Gelasio, "Times New Roman", serif',vn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',od=1,mt=n=>Math.round(n*od),CM=700,ld=()=>{let n=Yt||window.innerWidth,e=Xt||window.innerHeight;return n<CM||Math.min(n,e)<500},Ji=ld;function Ps(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...Me?mu(Me.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var cm=0,Zm=[];function RM(){clearTimeout(cm),cm=setTimeout(async()=>{try{await Promise.all(mu(Me.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}Me.settings.logo||Xu(),Re&&!Re.loading&&Re.retexture()},150)}function Jm(){let n=Me.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=im(n);e.textContent!==t&&(e.textContent=t);let i=sm(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",Zm.push(new Promise(o=>{r.onload=()=>{o(),RM()},r.onerror=o})),document.head.appendChild(r)}}),$t=Si(n,"card").css,vn=Si(n,"cardsm").css,od=Math.max(.5,Math.min(2,(+Si(n,"card").scale||100)/100))}function en(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function rn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),sd(new Wr(s))}function Ki(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),cc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Ou=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function Km(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function sa(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var cd=n=>Nt.some(e=>e.def.id===n.section),LM=(n,e)=>Nt.findIndex(t=>t.def.id===n.section)-Nt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),hc=n=>Me.posts.filter(e=>e.published&&e!==n&&cd(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(LM),Fu=n=>{let e=$l(Me,n).filter(cd);return e.length?e:hc(n)},yu=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),PM=n=>tm(Me,n).filter(cd),io=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&yd(e.src)==="image")||{}).src||"",hm=new Map,ku=n=>hc(n).filter(io);async function xc(n,e=Fu(n)){let t=e.filter(io);if(!t.length)return null;let i=t.find(r=>r.id===hm.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await Ts(io(r)).catch(()=>null);if(o)return hm.set(n.id,r.id),{im:o,project:r}}return null}function bc(n,e,t,i,s){Ki(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function Qm(n,e){let t=Ee(n.title).trim(),i=Ee(n.subtitle).trim();if(!t&&!i)return null;let s=Ji(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),o=s?17:Math.max(7.5,r*.74),a=Math.round(r*(s?.6:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d");c.font=`${r}px ${$t}`;let h=t?en(c,t,l).slice(0,2):[];c.font=`${o}px ${$t}`;let u=i?en(c,i,l).slice(0,2):[],d=Math.round(r*1.2),m=Math.round(o*1.25),g=Math.ceil(a+h.length*d+(u.length?3+u.length*m:0)+a-2);return{tex:rn(e,g,p=>{p.fillStyle="rgba(0,0,0,.62)",p.fillRect(0,0,e,g),p.textBaseline="top";let f=a;p.fillStyle="#fff",p.font=`${r}px ${$t}`,h.forEach(A=>{p.fillText(A,a,f),f+=d}),f+=3,p.fillStyle="#d6d6d6",p.font=`${o}px ${$t}`,u.forEach(A=>{p.fillText(A,a,f),f+=m})},3),bh:g,w:e}}async function IM(n,e,t){let i=n.thumb?await Ts(n.thumb).catch(()=>null):null,s=n.thumbBack?await Ts(n.thumbBack).catch(()=>null):null,r=i?null:await xc(n);await Ps();let o=(c,h=!1)=>{if(i){Ki(c,i,0,0,e,t);return}r?bc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=Ji(),d=u?14:16,m=u?[mt(31),mt(34),2]:[mt(24),28,3],g=u?[mt(20),mt(23),1]:[mt(13),16,2],v=u?mt(15):10,p=u?mt(13):9,f=u?26:20;c.fillStyle=nn(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=`${m[0]}px ${$t}`;let A=en(c,Ee(n.title),e-2*d).slice(0,m[2]),b=u?22:30;A.forEach((I,N)=>c.fillText(I,d,b+N*m[1])),c.fillStyle=r?"#d6d6d6":"#8c8c8c",c.font=`${g[0]}px ${$t}`,en(c,Ee(n.subtitle),e-2*d).slice(0,u&&A.length<2?2:g[2]).forEach((I,N)=>c.fillText(I,d,b+8+A.length*m[1]+N*g[1]));let L=r?bm(r.project,r.project.media[0]&&r.project.media[0].credit):bm(n,n.media[0]&&n.media[0].credit);if(c.fillStyle=nn(),c.font=`${v}px ${vn}`,c.fillText([n.date,Ee(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(L?f+v+6:v+12)),L){c.font=`${p}px ${vn}`;let I=L;for(;c.measureText(I).width>e-2*d&&I.length>4;)I=I.slice(0,-2)+"\u2026";c.fillStyle=r?"rgba(0,0,0,.55)":"#2a2a2a",c.fillRect(0,t-f,e,f),c.fillStyle=r?"#d0d0d0":"#9a9a9a",c.textBaseline="middle",c.fillText(I,d,t-f/2)}c.globalAlpha=1},a=rn(e,t,o,2),l=s?rn(e,t,c=>Ki(c,s,0,0,e,t),2):r?rn(e,t,sa(e,c=>o(c,!0)),2):rn(e,t,Km(o),1.5);return[a,l,i?Qm(n,e):null]}async function NM(n,e,t){let i=n.thumb?await Ts(n.thumb).catch(()=>null):null,s=n.thumbBack?await Ts(n.thumbBack).catch(()=>null):null,r=i||yu(n)?null:await xc(n,ku(n));await Ps();let o=(l,c=!1)=>{if(yu(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=Ji()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${vn}`;let v=en(l,Ee(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((p,f)=>l.fillText(p,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),cc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,m=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-m)/2,d,m),cc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Ki(l,i,0,0,e,t);return}r?bc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=`${Math.round(t*.42*od)}px ${$t}`,l.textAlign="center",l.textBaseline="middle",l.fillText(Ou(Ee(n.title)),e/2,t*.45),l.fillStyle=nn(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?rn(e,t,l=>Ki(l,s,0,0,e,t),3):r?rn(e,t,sa(e,l=>o(l,!0)),2):rn(e,t,Km(o),2);return[rn(e,t,o,3),a,i||r||yu(n)?Qm(n,e):null]}async function DM(n,e,t){let i=await xc(n);if(i)return UM(n,e,t,i);let s=n.thumb?await Ts(n.thumb).catch(()=>null):null;await Ps();let r=Ee(n.title).trim(),o=Ji(),a=mt(o?30:21),l=o?mt(32):22,c=o?2:3,h=s?72:18,u=e-h-14,d=rn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Ki(g,s,13,12.75,53,53):(g.fillStyle=nn(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=`${a}px ${$t}`,g.textBaseline="top",en(g,r,u).slice(0,c).forEach((v,p)=>g.fillText(v,h,(s?12:20)+p*l))}),m=rn(e,t,sa(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=`${a}px ${$t}`,g.textBaseline="top",en(g,r,u).slice(0,c).forEach((v,p)=>g.fillText(v,h,(s?9:17)+p*l))}));return[d,m]}async function UM(n,e,t,i){await Ps();let s=Ee(n.title).trim(),r=e-32,o=Ji(),a=mt(o?30:21),l=o?mt(32):22,c=h=>u=>{bc(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=nn(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=`${a}px ${$t}`,u.textBaseline="top",en(u,s,r).slice(0,o?2:3).forEach((d,m)=>u.fillText(d,18,20+m*l)),u.globalAlpha=1};return[rn(e,t,c(!1),2),rn(e,t,sa(e,c(!0)),2)]}async function OM(n,e,t){let i=n.thumb?await Ts(n.thumb).catch(()=>null):null;await Ps();let r=rn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),Ki(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=nn(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${mt(12)}px ${$t}`,o.textAlign="center",o.textBaseline="top",o.fillText(Ee(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var FM={image:IM,portrait:NM,text:DM,place:OM};async function kM(n,e,t){let i=n.thumb?await Ts(n.thumb).catch(()=>null):null,s=i?{im:i}:await xc(n);await Ps();let r=Ee(n.title).trim(),o=(Ee(n.subtitle).trim()||er(Ee(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=Ji(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,m,g,v]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],p=(L,I)=>{L.globalAlpha=I,L.textBaseline="top";let N=e-h-12;L.fillStyle=nn(),L.fillRect(h,a?9:13,14,2),L.fillStyle="#fff",L.font=`${mt(d)}px ${$t}`;let D=a?16:22;en(L,r,N).slice(0,l?3:2).forEach(W=>{L.fillText(W,h,D),D+=mt(m)}),L.globalAlpha=1},f=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&(Ki(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.18)",L.fillRect(0,0,e,t)),p(L,.38)},A=L=>{let I=L.createLinearGradient(0,0,0,t);I.addColorStop(0,"rgba(0,0,0,.7)"),I.addColorStop(1,"rgba(0,0,0,.3)"),L.fillStyle=I,L.fillRect(0,0,e,t),p(L,1)};return[rn(e,t,(L=>I=>{I.fillStyle="#111",I.fillRect(0,0,e,t),s&&l&&!L&&bc(I,s,e,t,.6),s&&!l&&Ki(I,s.im,e-c,0,c,t),I.textBaseline="top",I.fillStyle=nn(),I.fillRect(h,a?9:13,14,2),I.fillStyle="#fff",I.font=`${mt(d)}px ${$t}`;let N=en(I,r,u).slice(0,l?3:2),D=a?16:22;N.forEach(C=>{I.fillText(C,h,D),D+=mt(m)}),D+=a?2:5,I.fillStyle=l?"#dcdcdc":"#bdbdbd",I.font=`${mt(g)}px ${$t}`;let W=l?0:Math.max(0,Math.floor((t-D-8)/mt(v))),S=en(I,o,u);if(S.length>W&&(S=S.slice(0,W),W)){let C=S[W-1];for(;C&&I.measureText(C+"\u2026").width>u;)C=C.replace(/\s*\S+$/,"");S[W-1]=C+"\u2026"}S.forEach(C=>{I.fillText(C,h,D),D+=mt(v)}),I.globalAlpha=1})(!1),2),rn(e,t,sa(e,f),2),null,rn(e,t,sa(e,A),2)]}function jl(n,e){return Ps().then(()=>e==="place"?rn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(44)}px ${$t}`,t.fillText(Ee(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${mt(18)}px ${$t}`,en(t,Ee(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=nn(),t.font=`14px ${vn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",er(Ee(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=nn(),t.font=`15px ${vn}`,t.fillText(Ee(n.place),32,260)},1.5):Ji()?rn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(25)}px ${$t}`;let i=en(t,Ee(n.title)+".",172).slice(0,2);i.forEach((d,m)=>t.fillText(d,14,12+m*mt(27))),t.font=`${mt(13)}px ${vn}`;let s=hc(n).map(d=>Ee(d.title).trim()).filter(Boolean),r=s.length?en(t,s.join("  \xB7  "),172).slice(0,2):[],o=Ee(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*mt(27);t.fillStyle="#b4b4b4",t.font=`${mt(17)}px ${$t}`;let c=(r.length?a-6:o)-mt(20),h=en(t,Ee(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=mt(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,m)=>t.fillText(d,14,18+i.length*mt(27)+m*mt(20))),r.length&&(t.fillStyle=nn(),t.font=`${mt(11)}px ${vn}`,t.fillText(Je("together").toUpperCase(),14,a),t.fillStyle="#e6e6e6",t.font=`${mt(13)}px ${vn}`,r.forEach((d,m)=>t.fillText(d,14,a+16+m*16))),Ee(n.place)&&(t.fillStyle=nn(),t.font=`${mt(13)}px ${vn}`,t.fillText(Ee(n.place).toUpperCase(),14,176))},2.5):rn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(20)}px ${$t}`;let i=en(t,Ee(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${vn}`;let r=hc(n).map(u=>Ee(u.title).trim()).filter(Boolean),o=r.length?en(t,r.join("  \xB7  "),166).slice(0,3):[],a=(Ee(n.place)?174:188)-o.length*13-13;t.fillStyle="#8c8c8c",t.font=`${mt(15)}px ${$t}`;let l=(o.length?a-4:168)-18,c=[];Ee(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>en(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.fillStyle="#bbb",t.font=`11px ${vn}`,er(Ee(n.body)).join(" ").split(/\s+/).length>1&&en(t,er(Ee(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),o.length&&(t.fillStyle=nn(),t.font=`8px ${vn}`,t.fillText(Je("together").toUpperCase(),19,a),t.fillStyle="#e6e6e6",t.font=`10px ${vn}`,o.forEach((u,d)=>t.fillText(u,19,a+13+d*13))),Ee(n.place)&&(t.fillStyle=nn(),t.font=`11px ${vn}`,t.fillText(Ee(n.place).toUpperCase(),19,180))}))}function BM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${vn}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${vn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new Na(new Vr({map:sd(new Wr(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=2,l}var wi=document.createElement("div");wi.id="net-tip";wi.className="ui";wi.hidden=!0;document.body.appendChild(wi);function eg(n,e,t){wi.innerHTML=`<b>${De(n.city||"")}</b>${n.titles.map(s=>`<span>${De(s)}</span>`).join("")}`,wi.hidden=!1;let i=wi.getBoundingClientRect();wi.style.left=Math.min(e+14,Yt-i.width-10)+"px",wi.style.top=Math.max(10,t-i.height-12)+"px"}function Mc(){wi.hidden=!0}var Bu=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Rn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=Me.models.find(h=>h.id===this.def.model)||Me.models[0];if(!t)return;let i=await xM(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Rn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=d=>{let m=d.map||d.emissiveMap||null;return m?new Kt({map:m}):t.untextured==="white"?new $s({color:15921906}):t.untextured==="black"?new $s({color:2236962}):new Kt({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new mn().setFromObject(a),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(d),a.updateMatrixWorld(!0);let m=new mn().setFromObject(a),g=m.getCenter(new U);a.position.set(-g.x,-m.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new mn().setFromObject(a);h.max.y-h.min.y>oe.object3DMaxHeight&&a.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Rn;c.rotation.y=(t.rotationY||0)*Ai,c.add(a),this.container.add(c)}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Du(this.p.x,0,this.p.z))}};function tg(n,e){let t=new Zs;t.setPositions(n);let i=new Va(t,e);return i.computeLineDistances(),i}var zu=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Rn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Gi(this.width,this.height);if(this.setBand(i),s){let h=new Ft(r,new Kt({map:s,side:un,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let o=new Ft(r,new Kt({map:e,side:Hn})),a=new Ft(r,new Kt({map:t,side:un}));o.userData={post:this,face:"front"},a.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=tg([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Uu),this.group.add(o,a,this.frame),this.meshes.push(o,a),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...vs(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ai,t.rotation.x=-e.rotX*Ai,t.rotation.z=e.rotZ*Ai,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&Qt(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=Xm,to(.8,()=>{this.frame&&(this.frame.material=Uu)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),Qt(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){xn(this.thumb);let i=Qi(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return Qt(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){xn(this.thumb);let t=this.p2;Qt(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){Qt(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>Qt(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),xn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Ft(new Gi(t,s),new Kt({map:e.tex,transparent:!0,depthWrite:!1,side:Hn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&Qt(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),xn(this.thumb),this.bhi&&xn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!qm.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function _u(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ai;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function vu(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var xu=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||ia(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*bn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*bn(2*i))}),uc={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ai+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>_u(n,e),move:(n,e,t,i)=>xu(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>vu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>xu(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,o=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,d=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{_u(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*bn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*bn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return _s(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Sc(n.def);return{x:i[0]+s[0],y:(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>vu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ia(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*bn(2*oe.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ai+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>_u(n,e),move:(n,e,t,i)=>xu(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>vu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ia(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*bn(2*oe.cameraEaseSpeed)})}}},zM=["fan","arc","map"],um=n=>ld()&&zM.includes(n.layout),hd=()=>ws.zoom*ws.focus*Math.min(1,Yt/900);function ng(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:Yt-12,b:Xt-12},i=["slogan","logo","reel-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Xt>=Yt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs")].filter(Boolean).forEach(r=>{r.left<Yt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Yt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Yt-12),t.b-t.t<120&&(t.t=12,t.b=Xt-12),t}function dm(n){let e=ng(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,o=n.h*n.k+oe.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),p=g*a+(g-1)*c,f=v*l+(v-1)*c,A=Math.min(t/p,i/f);(!h||A>h.sc+1e-9)&&(h={cols:g,rows:v,gw:p,gh:f,sc:A})}let d=n.container.position.y-n.section.container.position.y,m=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Yt/2,fy:(e.t+e.b)/2-Xt/2,zg:200,gy:m+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var HM=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},bu=2*Math.PI,ud=n=>n+(((Math.PI-n)%bu+bu+Math.PI)%bu-Math.PI);function fm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>HM(e,i),focus(e,t){let i=e.postViews[t];i&&(H.selected=t,H.degreeCamera=ud(H.degreeCamera),H.cameraY=ra(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===uc.fan?i.turnAround("x",720):n===uc.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var pm=new U,mm=new U,Hu=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=uc[this.def.layout]||uc.carousel,this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?kM:FM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?qa.text.size:qa.image.size:qa[this.card].size,this.k=YM(this.def),this.container=new Rn,this.container.position.copy(e.container.position),Es.add(this.container),this.postViews=this.posts.map((t,i)=>new zu(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),um(this.def)&&(this.grid=dm(this),this.L=this.gridL=fm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Nt.map(f=>f.def.id)),t=new Map,i=(f,A,b)=>{if(!fu(f))return;let L=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),I=t.get(L);I||t.set(L,I={loc:f,city:f.city||"",titles:[],base:!1}),A&&!I.titles.includes(A)&&I.titles.push(A),b&&(I.base=!0)};if(du(Me,this.def.id).forEach(f=>i(f.location,Ee(f.title),!0)),Me.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(A=>i(A,Ee(f.title)))}),!t.size)return;sc.color.set(nn());let s=50,r=new Rn,o=[...t.values()],a=o.filter(f=>f.base),l=new Ml(1,14,10),c={on:new Kt({color:nn()}),base:new Kt({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ji+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(f=>{f.xz=_s(f.loc)}),o.forEach(f=>{f.from=f.base?null:a.length?a.map(A=>[A,Math.hypot(_s(A.loc)[0]-f.xz[0],_s(A.loc)[1]-f.xz[1])]).sort((A,b)=>A[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(_s(f.from.loc)[0]-f.xz[0],_s(f.from.loc)[1]-f.xz[1]):0}),o.sort((f,A)=>A.base-f.base||f.d-A.d);let h=70,u=null,d=-1;o.forEach(f=>{let A=o.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);A.length>d&&(d=A.length,u=A)});let m=u.reduce((f,A)=>f+A.xz[0],0)/u.length,g=u.reduce((f,A)=>f+A.xz[1],0)/u.length,v=new Wt;v.position.set(...vs(m,s,g)),r.add(v),this.net.focus=v;let p=[];o.forEach((f,A)=>{let[b,L]=f.xz,I=f.base?0:.15+A*.07,N=new Ft(l,f.base?c.base:c.on);N.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),N.position.set(...vs(b,s,L)),r.add(N),N.userData={netNode:f},this.net.hits.push(N);let D=null,W=0;if(f.from){let[X,ae]=_s(f.from.loc),ge=s+18+f.d*.32,F=2*ge-s,B=(X+b)/2,k=(ae+L)/2;W=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=Q=>{let te=1-Q;return vs(te*te*X+2*te*Q*B+Q*Q*b,te*te*s+2*te*Q*F+Q*Q*s,te*te*ae+2*te*Q*k+Q*Q*L)},q=[];for(let Q=0;Q<W;Q++)q.push(...ne(Q/W),...ne((Q+1)/W));let V=new Zs;V.setPositions(q),D=new Va(V,sc),D.computeLineDistances(),V.instanceCount=0,r.add(D)}let S=null,C=1/0;if(f.city){for(let X of p){let ae=Math.max(Math.abs(X[0]-b)/80,Math.abs(X[1]-L)/22);ae<X[2]&&(C=Math.min(C,ae))}C>.06&&(S=BM(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),S.position.set(...vs(b,s+9,L)),r.add(S),p.push([b,L,C]))}this.net.items.push({dot:N,arc:D,segs:W,label:S,thr:C,delay:I,base:f.base,ds:N.scale.x,ls:S?S.scale.clone():null,x:b,z:L})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=ji+MM;for(;ji<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,Qt(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:a}),Qt(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,Qt(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...vs(...i),...vs(...s)],o=this.lines[t];o?o.geometry.setPositions(r):(o=this.lines[t]=tg(r,Wm),this.container.add(o))}async openInfo(e,t,i){let s=await jl(this.posts[t],"place");if(!this.alive)return;let r=new Ft(new Gi(165,130),new Kt({map:s,side:kn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),Qt(o.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),to(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Ft(new Gi(90,90),new Kt({side:kn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await jl(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),to(oe.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,xn(i),Qt(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(xn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=um(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?dm(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=fm(this.base)):this.base,r)return!0;let o=oe.tween*1.2,a=H.postOpen&&this.def.open==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);xn(l.thumb),this.following.add(l),Qt(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(xn(d.p),Qt(d.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=uo(),r=hd(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=Qi()+ws.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;xn(e.thumb),Qt(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;xn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Ai)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/es),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*bn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ji-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...vs(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ai)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),pm.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),mm.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(pm).add(mm)}}async retexture(){this.net&&(sc.color.set(nn()),this.net.mats.on.color.set(nn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(a=>a&&a.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(Jr===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose()),i.bhi&&s[3]){let a=e(i.bhi.mesh,s[3]);a&&a.dispose()}else s[3]&&s[3].dispose();let o=this.infos[t];if(o){let a=await jl(this.posts[t],"place");if(!this.alive){a.dispose();return}let l=e(o.mesh,a);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await jl(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(xn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Mc(),Es.remove(this.container)}},tr=[],Re=null,nr=oe.cameraEaseSpeed,As=!1,Zn=!1,Ms=0,Ss=0,rc=0,ac=0,Is=!1,Sn=!1,ns=()=>tr[H.currentSection];function VM(){let n=oe.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function GM(){let n=oe.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var WM={map:58},Sc=(n=(ns()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||WM[n.layout]||100)/100)),ai=()=>Re&&Re.L.grid&&Re.grid&&Re.section===ns()?Re:null,XM=n=>hd()/n.sc*Math.min(1,oe.cameraDistanceProportion/es);function wc(n){let e=n.grid,t=XM(e),i=t/hd();return{d:Math.max(20,t-ws.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var Qi=()=>{let n=ai();return n?wc(n).d:oe.cameraDistance*Sc()},Ec=()=>{let n=ai();return n?wc(n).ty:oe.cameraTargetHeight*(((ns()||{}).def||{}).layout==="map"?Sc()*.62:1)},gm=()=>{let n=ai();return n?wc(n).ty:oe.cameraHeight*(((ns()||{}).def||{}).layout==="map"?Sc()*1.6:1)},Zl=new U;function qM(){return!rr()||ai()||oe.cameraDistanceProportion>=es?0:Math.min(1,(1-oe.cameraDistanceProportion/es)*1.25)}function $M(){let n=Re&&Re.net&&Re.net.focus;return n?(n.getWorldPosition(Zl),{x:Zl.x,y:Zl.y,z:-Zl.z}):null}function ho(){let n=ns(),e=qM(),t=e?$M():null,i=Ec(),s=ai();return s?{x:n.p.x-wc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var ra=()=>{if(!rr()||ai())return gm();let n=Math.min(1,oe.cameraDistanceProportion/es);return ho().ty+(gm()-Ec())*Math.pow(n,.55)},YM=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),uo=()=>{let n=ho();return{d:Qi(),x:n.x,z:n.z,ty:n.ty}},Yn=null;function ig(n){if(!n||!Re||!Re.relayout())return;xn(yt),xn(Pn),Yn=n,ai()&&(H.degreeCamera=ud(H.degreeCamera)),H.cameraY=ra(),Zn=!0,nr=oe.cameraEaseSpeed;let e=H.postOpen&&H.section.def.open==="focus3d"&&Re.postViews[H.selected];e&&e.ready&&(Re.L.grid?Re.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var jM=0;function ZM(){if(++jM%20||!Is||H.postOpen||As||!Sn)return;let n=ai();if(!n)return;let e=ng();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&ig(Yn||uo())}function JM(){if(!Yn)return;let n=uo(),e=bn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-Yn[i];Math.abs(s)>.05?(Yn[i]+=s*e,t=!1):Yn[i]=n[i]}ia(Pn)||(Pn.x=Yn.x,Pn.y=Yn.ty,Pn.z=Yn.z),!As&&!Zn&&!ia(yt)&&Vu(),t&&(Yn=null)}function Vu(){let n=Yn||uo();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function Tc(){tr.forEach((n,e)=>{e===H.currentSection?n.container.parent||Es.add(n.container):n.container.parent&&Es.remove(n.container)}),As=!1,Zn=!1,Mn.classList.remove("dragging"),Jr=null,ta=null,Za=null,Re&&Re.destroy(),Yn=null,Re=new Hu(ns()),dc(H.selected),H.actualDeg=H.degreeCamera,KM()}function KM(){let n=ho();H.cameraY=ra(),EM(Qi()*Math.sin(H.degreeCamera)+n.x,H.cameraY,Qi()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function dc(n){H.selected=n,Re&&Re.focus(n)}function Mu(n){!Re||!Re.n||(Zn=!0,Re.checkPostSelected(),nr=oe.cameraKeyboardSpeed,dc(n==="NEXT"?Re.goNext():Re.goPrev()))}function Ac(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Xt<680?1e3-Xt:320)*t)}function sg(){if(Zn=!1,Ac(),!Is)return;let n=ho();if(H.postOpen&&H.section.def.open==="focus3d"&&Re&&Re.postViews[H.selected]){let t=Re.postViews[H.selected];Re.L.grid?Re.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=rr()||ai();TM(n.x+Qi()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+Qi()*Math.cos(H.actualDeg),oe.cameraSpeed/2),e&&id(n.x,n.ty,n.z,oe.cameraSpeed/2)}function QM(){if(!Sn){Math.abs(yt.y-H.cameraY)>.007&&!ia(yt)&&(yt.y-=(yt.y-H.cameraY)*bn(oe.cameraEaseSpeed));return}if(As){nr=oe.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Ms-rc)/150,H.actualDeg-=(H.actualDeg-n)*bn(nr),Vu(),H.cameraY+=(Ss-ac)*2;let e=oe.cameraHeight,t=rr()?ho().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*bn(nr),oe.animationMode&&Re&&Re.movePosts((rc-Ms)/Math.max(lc,.25),(ac-Ss)/Math.max(lc,.25),nr),rc=Ms,ac=Ss}else Zn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(Zn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*bn(oe.cameraEaseSpeed),Vu(),yt.y-=(yt.y-H.cameraY)*bn(nr),oe.animationMode&&Re&&Re.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*bn(oe.cameraEaseSpeed))}function e1(){yt.zoom=6;let e=Re&&Re.postViews[0]&&Re.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,Pn.y=e+100,id(Pn.x,Ec(),Pn.z,1),Sn=!1,Qt(yt,1,{zoom:ws.zoom},{ease:"expoOut"}),setTimeout(()=>{Sn=!0},1*1e3+50)}var Su=new U,wu=new U,$a=new U,Ya=1;function t1(){Su.copy(Du(yt.x,yt.y,yt.z)),wu.copy(Du(Pn.x,Pn.y,Pn.z)),$a.subVectors(wu,Su),$a.lengthSq()<1e-6&&$a.set(0,0,-1),$a.normalize();let n=rr()&&!ai()?Math.min(1,oe.cameraDistanceProportion/es):1;Ya+=Math.abs(n-Ya)<.001?n-Ya:(n-Ya)*bn(oe.cameraEaseSpeed),ri.position.copy(Su).addScaledVector($a,-ws.focus*Ya),ri.lookAt(wu);let e=Math.min(1,Yt/900),t=2*Math.atan(Xt/2/(yt.zoom*ws.focus*e))/Ai;Math.abs(ri.fov-t)>1e-4&&(ri.fov=t,ri.updateProjectionMatrix())}function rg(){Yt=window.innerWidth,Xt=window.innerHeight,Ls.setSize(Yt,Xt,!1),ri.aspect=Yt/Xt,ri.updateProjectionMatrix(),qm.forEach(n=>n.resolution.set(Yt,Xt))}var Bn=document.getElementById("menu"),Cs=document.getElementById("slogan"),ag=document.getElementById("langs"),Cc=[];function n1(){Bn.innerHTML="",Cc=Nt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Ee(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&Sn&&mo(e)}),t.appendChild(i),Bn.appendChild(t),i}),Bn.style.setProperty("--n",Nt.length),dd()}function dd(){Cc.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function i1(){Cc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Bn.hidden=!1,ag.hidden=!1,setTimeout(()=>Bn.classList.add("ready"),(Nt.length+1)*200)}var s1=1.44,ym={col:362,gutter:160,side:79,top:34,bottom:20},_m={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Gu(){let n=Me&&Me.settings&&Me.settings.fiche||{},e={};for(let t in ym){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?ym[t]:Math.max(_m[t][0],Math.min(_m[t][1],Math.round(+i)))}return e}function Wu(n){let e=Gu(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Yt-2*oe.margin)/(Ke.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function og(){let n=Xt<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=Cs.offsetTop+Cs.offsetHeight+(n?1:2)*oe.margin,t=Ke.height+12,i=n?24:(Bn.offsetHeight||90)+70,s=Math.max(n?.4:.5,Math.min(s1,(Xt-e-i)/t));Ke.scale=s,sn.style.top=e+"px",sn.style.transform=s!==1?`scale(${s.toFixed(3)})`:"",sn.style.width=s!==1?Math.ceil((Yt-oe.margin)/s)+"px":"",sn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Xt-(e+t*s)<Bn.offsetHeight+60)}function so(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Ke.open&&Ke.height>100){let n=Cs.offsetTop+Cs.offsetHeight+Ke.height*(Ke.scale||1)+2*oe.margin+30;n=Math.min(n,Xt-Bn.offsetHeight-52),Bn.style.left=oe.margin+"px",Bn.style.top=n+"px"}else Yt<=700||Xt<=520?(Bn.style.left=oe.margin+"px",Bn.style.top=Math.round(Xt-(Bn.offsetHeight||86)-56)+"px"):(Bn.style.left=3*oe.margin+"px",Bn.style.top=Math.round(Xt/1.4)+"px")}var Eu=(n,e=!1)=>rm(n,Me.settings,e);function Xu(){let n=Me.settings,e=n.accent||"#ffcc00",t=n.logo?tn(n.logo):Eu(Wn?"#ffffff":e,Wn);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=i==="home-logo"&&!n.logo?Eu(e,!1):t,s.classList.toggle("raw",!n.logo))}),r1(n.logo?t:Wn?Eu(e):t)}function r1(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var oc="",fc=document.querySelector('meta[name="description"]'),vm=fc?fc.content:"",fd=document.title;function lg(n){if(!(Gt||!Me)){document.title=n?`${Ee(n.title).trim()} \xB7 ${Me.settings.name||"Hand Coded"}`:fd,fc&&(fc.content=n&&(er(Ee(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||Ee(n.subtitle))||vm);try{let e=new URL(location.href);n?e.searchParams.set("p",n.id):e.searchParams.delete("p"),e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&aa("?p="+n.id,document.title)}}function a1(){let n=String((Me.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||Gt||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{oc||aa("",fd)}),document.head.appendChild(e)}function aa(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:location.pathname.replace(/index\.html$/,"")+n,title:e,event:t})}catch{}}function Rc(){let n=Me.settings;Jm(),wg(),Ic(),document.documentElement.lang=Zi,document.documentElement.classList.toggle("neg",Wn),H.postOpen||(document.title=fd||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[Zi]||n.taglines.en)||[],t=e.length?`<b class="wm">${De(e[0])}</b>${e.slice(1).map(o=>`<span>${De(o)}</span>`).join("")}`:De(n.name);if(Cs.innerHTML=e.length?t.replace('<b class="wm">',`<b class="wm" role="link" tabindex="0" title="${De(Je("homeLink"))}">`):t,document.getElementById("home-slogan").innerHTML=t,Xu(),!n.logo&&document.fonts){let o=Si(n,"logo"),a=`${o.italic?"italic ":""}${o.weight||400} 76px ${o.css}`;document.fonts.check(a)||document.fonts.load(a).then(()=>{Me.settings.logo||Xu()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(o=>{let a=document.getElementById(o);a&&(a.classList.toggle("toggle",i),i?(a.setAttribute("role","button"),a.tabIndex=0,a.setAttribute("aria-pressed",String(Wn)),a.alt=a.title=Je(Wn?"toPos":"toNeg")):(a.removeAttribute("role"),a.removeAttribute("tabindex"),a.removeAttribute("aria-pressed"),a.alt="",a.removeAttribute("title")))});let s=document.getElementById("offices")||document.createElement("div");s.innerHTML="",(n.offices||[]).forEach(o=>{let a=document.createElement("section");a.innerHTML=`<h3>${De(Ee(o.name))}</h3>${(o.lines||[]).map(l=>`<p>${De(l)}</p>`).join("")}${o.mail?`<p><a href="mailto:${De(o.mail)}">${De(o.mail)}</a></p>`:""}`,s.appendChild(a)}),(n.social||[]).forEach(o=>{if(!o.url)return;let a=document.createElement("section");a.innerHTML=`<h3>${De(o.label)}</h3><p><a href="${De(o.url)}" target="_blank" rel="noopener">${De(o.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,s.appendChild(a)}),In.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),Rs.classList.contains("wait")||Td(Ee(n.home.enter)||Je("enter")),m1(),jn(),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=Je(o.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Je("keys")),Ja.setAttribute("aria-label",Je("prev")),pc.setAttribute("aria-label",Je("next"));let r=n.langs&&n.langs.length?n.langs:di;[ag,document.getElementById("home-langs")].forEach(o=>{o.innerHTML="",!(r.length<2)&&r.forEach(a=>{let l=document.createElement("button");l.type="button",l.textContent=a.toUpperCase(),l.setAttribute("aria-pressed",String(a===Zi)),l.setAttribute("aria-label",Je("lang")+" "+a.toUpperCase()),l.addEventListener("click",()=>cg(a)),o.appendChild(l)})}),document.documentElement.style.setProperty("--accent",nn()),document.documentElement.style.setProperty("--accent-raw",Me.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",jm(Me.settings.accent||"#ffcc00")),B1()}function cg(n){if(n!==Zi){Zi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(Rc(),Is){Cc.forEach((i,s)=>{i.textContent=Ee(Nt[s].def.name)}),Pc();let e=H.postOpen,t=H.selected;pi(),H.selected=t,Tc(),e&&to(.6,()=>ao(t))}}}var Lc=document.getElementById("cats"),ir=document.getElementById("cat-box"),xm=document.getElementById("cat-list"),hg=document.getElementById("cat-name"),ro=document.getElementById("cat-open"),Ja=document.getElementById("pg-prev"),pc=document.getElementById("pg-next");function Pc(){let n=H.data,e=n.categoryList;ir.hidden=e.length<=1,xm.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${De(Ee(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{qu(),l1(t.id)}),i.appendChild(s),xm.appendChild(i)}),hg.innerHTML=`${De(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,ug(),qu()}var Jl=document.getElementById("pg-num");function ug(){let n=H.data;Ja.disabled=!n.hasNewer(),pc.disabled=!n.hasOlder(),Ja.hidden=pc.hidden=!n.hasNewer()&&!n.hasOlder(),Jl&&(Jl.hidden=Ja.hidden,Jl.textContent=`${n.page}/${n.pages}`,Jl.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function qu(){clearTimeout(ea),ir.classList.remove("open"),ro.setAttribute("aria-expanded","false")}var ea=0,pd=-1e9;function dg(n=.7){clearTimeout(ea),!(ir.hidden||!H.data||H.data.categoryList.length<=1)&&(ea=setTimeout(()=>{!qt||H.postOpen||Lc.classList.contains("hidden")||(ir.classList.add("open"),ro.setAttribute("aria-expanded","true"),ea=setTimeout(()=>{ir.classList.remove("open"),ro.setAttribute("aria-expanded","false")},2600))},n*1e3))}ir.addEventListener("pointerenter",()=>clearTimeout(ea));ro.addEventListener("click",()=>{clearTimeout(ea);let n=ir.classList.toggle("open");ro.setAttribute("aria-expanded",String(n))});Ja.addEventListener("click",()=>{Sn&&gg("newer")});pc.addEventListener("click",()=>{Sn&&gg("older")});var Ns=document.getElementById("kb"),md=document.getElementById("kb-toggle"),fg=null;function $u(){Ns.classList.add("open"),md.setAttribute("aria-expanded","true")}function mc(){Ns.classList.remove("open"),md.setAttribute("aria-expanded","false")}md.addEventListener("click",()=>{clearTimeout(fg),Ns.classList.contains("open")?mc():$u()});Ns.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>_g({code:n.dataset.k,preventDefault(){}})));function $i(n){let e=Ns.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function pg(){Ns.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var gd=document.getElementById("whiteboard"),sn=document.getElementById("post2d"),jr=document.getElementById("strip");function bm(n,e){if(!n||Me.settings.signImages===!1)return"";let t=[Ee(n.title).trim(),(n.author||Me.settings.name||"").trim()].filter(Boolean);return e&&t.push(Je("photo")+" "+e.trim()),t.join(" \xB7 ")}var o1=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),fo=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},po=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},yd=n=>fo(n)?"youtube":po(n)?"vimeo":o1(n)?"video":"image",Ke={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,sn.classList.remove("closing"),sn.hidden=!1,og(),this.geomKey=JSON.stringify(Wu("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit,!0,s.caption)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit,!0,s.caption)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,jr.style.transform="translateX(0px)"},addRelations(n){let e=Fu(n);if(!e.length)return;let t=$l(Me,n).length>0,i=Gu(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),o=r?Math.max(12,i.gutter-i.side):i.side,a=Math.max(200,Math.min(300,i.col))+o+i.side,l=`<h2 class="ttl" style="left:${o}px;right:${i.side}px;top:${i.top}px">${De(Je(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${o}px;bottom:${i.bottom}px">${e.length}</span>`;r||this.addPanel("relh",a,l),e.forEach(c=>{let h=io(c),u=[c.date,Ee(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${De(c.id)}" aria-label="${De(Ee(c.title))}">`+(h?`<img src="${De(tn(h))}" alt="" draggable="false">`:"")+`<span class="mono"${h?" hidden":""}>${De(Ou(Ee(c.title)))}</span><span class="cap"><span class="t">${De(Ee(c.title).trim())}</span>${u?`<span class="m">${De(u)}</span>`:""}</span></button>`),m=d.querySelector("img");m&&m.addEventListener("error",()=>{m.remove(),d.querySelector(".mono").hidden=!1})})},addLogos(n){let e=n.logos.length,t=e<=4?2:3,i=Math.ceil(e/t),s=68+t*118,r=this.addPanel("logos",s,`<span class="lbl">${De(Je("partners"))}</span><div class="grid" style="grid-template-columns:repeat(${t},110px)">`+n.logos.map(o=>`<span class="lg"><img src="${De(tn(o))}" alt="" draggable="false"></span>`).join("")+"</div>");i>3&&(r.querySelector(".grid").style.gridAutoRows=Math.floor(230/i-6)+"px")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Je("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${De(t)}</span><a href="${De(e)}" target="_blank" rel="noopener"><span class="host">${De(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,jr.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0,s=null){let r=yd(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:tn(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Je("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=tn(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?Ee(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",m=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${De(d)}</b> `:"")+De(m),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?fo(n):po(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:this.post&&this.post.thumb?tn(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Je("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${a}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Wu(e),o=Gu(),a=355-o.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(I,N)=>r?[I===0?o.side:Math.floor(o.gutter/2),I===N-1?o.side:Math.ceil(o.gutter/2)]:[i,t-i-s],c=Ee(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=Ee(n.subtitle),u=H.section.def,d=n.tags.filter(I=>I!=="featured").map(I=>u.tags.find(N=>N.id===I)).filter(Boolean).map(I=>Ee(I.label)),m=d.length?`${De(Je("postedIn"))} <span>${d.map(De).join(", ")}</span>`:"",g=De([n.date,Ee(n.place)].filter(Boolean).join(" | ")),v=Yl(Ee(n.body)),p=document.createElement("div");p.className="txt",p.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(p),p.innerHTML=`<h2 class="ttl" style="position:static">${De(c)}</h2>${h?`<p class="stl" style="position:static">${De(h)}</p>`:""}`;let f=p.firstChild.offsetHeight,A=h?p.lastChild.offsetHeight+6:0,b=e==="project"?PM(n):[],L="";if(b.length){let I=(Nt.find(N=>N.def.id===b[0].section)||{}).def;L=`${De((I?Ee(I.name):Je("skills")).trim())} ${b.map((N,D)=>`<span class="it"><button type="button" class="go" data-go="${De(N.id)}">${De(Ee(N.title).trim())}</button>${D<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let I=`<div class="fecha">${g}</div>${m?`<div class="posted">${m}</div>`:""}${L?`<div class="posted skl-tags">${L}</div>`:""}`;p.innerHTML=`<div class="meta" style="position:static">${I}</div>`;let N=p.firstChild.offsetHeight,D=a-13,W=D-N,S=H.section.def.skills?Fu(n).length:0,C="",X=0;S&&(C=`<span class="lbl">${De(Je($l(Me,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${S}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,p.innerHTML=`<div class="relp" style="position:static">${C}</div>`,X=p.firstChild.offsetHeight);let ae=X?W-X-18:W,ge=o.top+f+6,F=o.top+f+A+20,B=Tu(v,s,[a-F,a-o.top],p);p.innerHTML=`<div class="body" style="position:static">${B[B.length-1]}</div>`;let k=B.length===1?F:o.top;if(B[B.length-1]&&k+p.firstChild.offsetHeight>ae-12){let q=Tu(B.pop(),s,X?[a-k,ae-12-o.top]:[ae-12-k,ae-12-o.top],p);B.push(...q),X&&q.length===1&&B.push("")}let ne=0;if(X){k=B.length===1?F:o.top,p.innerHTML=`<div class="body" style="position:static">${B[B.length-1]||""}</div>`;let q=k+(B[B.length-1]?p.firstChild.offsetHeight:0)+18;ne=B[B.length-1]?Math.min(ae,Math.max(Math.round((o.top+a)/2)-10,q)):o.top+4}B.forEach((q,V)=>{let Q=V===B.length-1,[te,he]=l(V,B.length);this.addPanel("txt",te+s+he,(V===0?`<h2 class="ttl" style="left:${te}px;top:${o.top}px;width:${s}px">${De(c)}</h2>${h?`<p class="stl" style="left:${te}px;top:${ge}px;width:${s}px">${De(h)}</p>`:""}`:"")+`<div class="body" style="left:${te}px;top:${V===0?F:o.top}px;width:${s}px">${q}</div>`+(Q&&X?`<div class="relp" style="left:${te}px;top:${ne}px;width:${s}px">${C}</div>`:"")+(Q?`<div class="meta" style="left:${te}px;top:${W}px;width:${s}px">${I}</div>`:""))})}else{let I=13+f+4,N=13+f+A+10,D=N+20,W=D+18+20;Tu(v,s,[355-W-14,327],p).forEach((C,X)=>{this.addPanel("txt",t,(X===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${De(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${I}px;width:${s}px">${De(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${N}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${m}</div>`:"")+`<div class="body" style="left:${i}px;top:${X===0?W:14}px;width:${s}px">${C}</div>`)})}p.remove()},addTeam(n){let e=n.team.map(a=>Me.posts.find(l=>l.id===a)).filter(Boolean),t=e.map(a=>Ee(a.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${De(Je("who"))}</h2><div class="names">${De(Je("leftToRight"))} <span>${De(t)}.</span></div>`),s=i.querySelector(".in"),r=s.querySelector(".names"),o=Math.max(160,Math.ceil(r.offsetTop+r.offsetHeight+14));e.forEach((a,l)=>{let c=document.createElement("button");c.type="button",c.className="face",c.style.left=69+l%6*59+"px",c.style.top=o+Math.floor(l/6)*55+"px";let h=!a.thumb&&(ku(a).find(d=>d!==n)||ku(a)[0]),u=h?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${De(tn(io(h))).replace(/'/g,"%27")}') center/cover"`:"";c.innerHTML=(a.thumb?`<img src="${De(tn(a.thumb))}" alt="" draggable="false">`:`<span class="mono"${u}>${De(Ou(Ee(a.title)))}</span>`)+`<span class="tab">${De(Ee(a.title))}.<small>${De(Ee(a.subtitle))}</small></span>`,c.setAttribute("aria-label",Ee(a.title)),["pointerenter","focus"].forEach(d=>c.addEventListener(d,()=>c.classList.add("big"))),["pointerleave","blur"].forEach(d=>c.addEventListener(d,()=>c.classList.remove("big"))),s.appendChild(c)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Yt-2*oe.margin)/(this.scale||1)))),`<div class="cn">${De(Ee(n.title))}.</div><div class="ac">${De(Ee(n.subtitle))}</div><div class="site">${n.link?`<a href="${De(n.link)}" target="_blank" rel="noopener">${De(e)}</a>`:""}</div><div class="ad">${Yl(Ee(n.body))}</div><div class="ct">${De(Ee(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return sn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){jr.querySelectorAll("video").forEach(n=>n.pause()),jr.innerHTML="",this.panels=[],sn.hidden=!0,sn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(gc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*bn(oe.easing),this.xprev=gc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*bn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);jr.style.transform=`translateX(${Math.round(this.x)}px)`}}};function Tu(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){a=null,d.textContent.trim()&&o.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){a=null;return}d.nodeType===3&&!d.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,m=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,m&&s.appendChild(m)};for(let d of o){let m=d.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let g=[];(function f(A,b){A.childNodes.forEach(L=>{L.nodeType===3?L.textContent.split(/(\s+)/).forEach(I=>I&&g.push({w:I,path:b})):f(L,[...b,L])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let p=({w:f,path:A})=>{let b=v;for(let L of A){let I=b.lastChild;(!I||I.nodeType!==1||I.dataset.src!==L.outerHTML)&&(I=L.cloneNode(!1),I.dataset.src=L.outerHTML,b.appendChild(I)),b=I}b.appendChild(document.createTextNode(f))};for(let f of g)if(p(f),s.offsetHeight>h()){let A=function b(L){return L.lastChild&&L.lastChild.nodeType===1?b(L.lastChild):L}(v);A.removeChild(A.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&p(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var gc=0,Yi=null;sn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Yi={id:n.pointerId,x:n.clientX,y:n.clientY},gc=n.clientX)});sn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(Yi||Ke.dragging)){oa();return}if(gc=n.clientX,!Yi||n.pointerId!==Yi.id||Ke.dragging)return;let e=n.clientX-Yi.x,t=n.clientY-Yi.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Ke.dragging=!0,Ke.xprev=Yi.x,Ke.finalpos=Ke.x,Ke.vel=0;try{sn.setPointerCapture(n.pointerId)}catch{}sn.classList.add("grabbing")}});sn.addEventListener("click",n=>{Ke.justDragged&&(n.preventDefault(),n.stopPropagation(),Ke.justDragged=!1)},!0);sn.addEventListener("wheel",n=>{if(n.preventDefault(),!Ke.open||Ke.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Ke.finalpos=Math.max(Ke.end-60,Math.min(60,Ke.finalpos-e*t/(Ke.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var oa=()=>{Ke.dragging&&(Ke.justDragged=!0,setTimeout(()=>{Ke.justDragged=!1},0),Ke.finalpos+=(Ke.vel||0)*10),Ke.vel=0,Yi=null,Ke.dragging=!1,sn.classList.remove("grabbing")};sn.addEventListener("pointerup",oa);sn.addEventListener("pointercancel",oa);sn.addEventListener("lostpointercapture",n=>{n.target===sn&&oa()});window.addEventListener("pointerup",()=>{(Yi||Ke.dragging)&&oa()});gd.addEventListener("pointerdown",()=>oo());function mo(n=-1,e=0){Vm(),n===-1&&(n=H.currentSection||0),pi(),n!==H.currentSection&&bd(),H.currentSection=n,H.resetData(),H.selected=e,Tc(),dd(),Pc(),dg(performance.now()-pd<1500?2.2:.7);try{history.replaceState(null,"","#"+H.section.def.id)}catch{}aa("#"+H.section.def.id,Ee(H.section.def.name).trim())}function mg(){pi(),H.selected=0,Tc(),ug()}function gg(n){(n==="newer"?H.data.newer():H.data.older())&&mg()}function l1(n){H.data.changeCategory(n),hg.textContent=H.data.currentCatName,mg(),Pc()}function ao(n){pi(),H.selected=n,ja()}var Mm=0;function _d(n){let e=Me.posts.find(h=>h.id===n),t=e?Nt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!Sn)return;Vm(),pi();let i=t!==H.currentSection;i&&bd(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory("");let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Re){ao(l);return}H.selected=l,Tc(),dd(),Pc(),i&&dg();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}aa("#"+H.section.def.id,Ee(H.section.def.name).trim());let c=++Mm;to(.5,()=>{c===Mm&&H.data===s&&s.posts[l]===e&&ao(l)})}jr.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),_d(e.dataset.go))});function ja(){!Re||!H.data.posts[H.selected]||(go(null),Md(null),pi(),H.postOpen=!0,H.section.def.open==="strip"?(gd.hidden=!1,Ke.build(H.data.posts[H.selected],H.section.def.card),Lc.classList.add("hidden"),As=!1,Mn.classList.remove("dragging"),Zn=!0,dc(H.selected)):(Zn=!0,dc(H.selected),Re.openPost3D()),so(),lg(H.data.posts[H.selected]))}function oo(){H.postOpen&&(H.postOpen=!1,Ke.open?(Ke.close(),gd.hidden=!0,Lc.classList.remove("hidden")):Re&&Re.closePost3D(),so(),lg(null))}function pi(){H.postOpen&&oo()}function c1(){zm(!oe.animationMode),pg(),Re&&Re.resetPostPosition(),Zn=!0}var es=oe.cameraDistanceProportion,rr=()=>((ns()||{}).def||{}).layout==="map",h1=()=>rr()?60:oe.cameraZoomMin;function vd(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),yg())}function xd(){oe.cameraDistanceProportion>h1()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),yg())}function yg(){(rr()||ai())&&(H.cameraY=ra()),sg()}function bd(){oe.cameraDistanceProportion!==es&&(oe.cameraDistanceProportion=es,Ac())}var Sm=!1;function _g(n){if(!Sn)return;Sm||(Sm=!0,$u(),fg=setTimeout(mc,6e3));let e=H.postOpen&&Ke.open,t=H.postOpen&&!Ke.open;switch(n.code){case"ArrowLeft":$i("ArrowLeft"),e?Ke.action("LEFT"):(pi(),Mu("PREVIOUS"),t&&ja());break;case"ArrowRight":$i("ArrowRight"),e?Ke.action("RIGHT"):(pi(),Mu("NEXT"),t&&ja());break;case"ArrowUp":$i("ArrowUp"),e||VM();break;case"ArrowDown":$i("ArrowDown"),e||GM();break;case"Tab":$i("Tab"),e?(oo(),Mu("NEXT"),ja()):mo((H.currentSection+1)%Nt.length);break;case"KeyK":Ns.classList.contains("open")?mc():$u();break;case"KeyA":$i("KeyA"),c1();break;case"Equal":case"NumpadAdd":$i("Equal"),e||xd();break;case"Minus":case"NumpadSubtract":$i("Minus"),e||vd();break;case"Space":$i("Space"),Re&&Re.checkPostSelected(),H.postOpen?oo():ja();break;case"Escape":pi();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!qt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||_g(n)});var wm=new Dl,Em=new et;function yc(n,e){if(!Is||!Re)return null;Em.set(n/Yt*2-1,-(e/Xt)*2+1),wm.setFromCamera(Em,ri);let t=wm.intersectObjects([...ns().blockers,...Re.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:u1(n,e)||(t?t.object.userData:null)}var Kl=new U;function u1(n,e){if(!Re||!Re.net)return null;let t=null,i=14;for(let s of Re.net.hits){if(!s.visible)continue;s.getWorldPosition(Kl).project(ri);let r=(Kl.x+1)/2*Yt-n,o=(1-Kl.y)/2*Xt-e,a=Math.hypot(r,o);a<i&&Kl.z<1&&(i=a,t=s.userData)}return t}var Ln=null,fi=null,Yu=0,ju=0;Mn.addEventListener("pointerdown",n=>{if(!Sn||Ln!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Ci.size>0)return;Ms=Yu=n.clientX,Ss=ju=n.clientY;let e=yc(n.clientX,n.clientY);pi(),fi=e&&e.post?e:null,fi&&fi.face==="back"&&(fi.post.view.focus(fi.post.id_),Zn=!0),Ln=n.pointerId,Mn.setPointerCapture(n.pointerId),Mn.classList.add("dragging"),rc=Ms,ac=Ss,Zn=!1,As=!0});function ar(n,e=!1){if(n.pointerId===Ln){if(Ln=null,Mn.classList.remove("dragging"),As&&(Zn=!0,As=!1,ai()&&(H.degreeCamera=ud(H.degreeCamera),H.cameraY=ra())),e){fi=null;return}if(fi&&fi.face==="front"&&Math.hypot(n.clientX-Yu,n.clientY-ju)<6){let t=yc(n.clientX,n.clientY);t&&t.post===fi.post&&ao(t.post.id_)}else if(!fi&&Math.hypot(n.clientX-Yu,n.clientY-ju)<6){let t=yc(n.clientX,n.clientY);t&&t.netNode?eg(t.netNode,n.clientX,n.clientY):Mc()}fi=null}}Mn.addEventListener("pointerup",ar);Mn.addEventListener("pointercancel",n=>ar(n,!0));Mn.addEventListener("lostpointercapture",n=>{n.pointerId===Ln&&ar(n,!0)});window.addEventListener("pointerup",n=>{Ln!==null&&n.pointerId===Ln&&n.target!==Mn&&ar(n,!0)});window.addEventListener("blur",()=>{Ln!==null&&ar({pointerId:Ln},!0),oa()});var Au=!1,Jr=null,ta=null,Za=null;function Md(n){Za!==n&&(Za&&Za.hoverBack(!1),Za=n,n&&n.hoverBack(!0))}var vg=()=>ld()&&Sn&&Re&&["carousel","spiral"].includes(Re.def.layout);function Sd(){return H.postOpen||!Re?null:ta&&ta.view===Re?ta:vg()?(Re.checkPostSelected(),Re.postViews[H.selected]||null):null}var d1=0;function f1(){++d1%6===0&&vg()&&go(Sd())}function go(n){Jr!==n&&(Jr&&Jr.hover(!1),Jr=n,n&&n.hover(!0))}Mn.addEventListener("pointerleave",()=>{ta=null,go(Sd()),Md(null)});Mn.addEventListener("pointermove",n=>{if(Ln!==null&&n.pointerId===Ln&&n.pointerType==="mouse"&&n.buttons===0){ar(n,!0);return}Ln!==null&&n.pointerId!==Ln||(Ms=n.clientX,Ss=n.clientY,Ln===null&&n.pointerType==="mouse"&&!Au&&(Au=!0,requestAnimationFrame(()=>{Au=!1;let e=yc(Ms,Ss);Mn.classList.toggle("hover",!!(e&&e.post)),ta=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,go(Sd()),Md(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?eg(e.netNode,Ms,Ss):Mc()})))});var Tm=0,Ci=new Map,Kr=null,xg=()=>{let[n,e]=[...Ci.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!qt||Ke.open||!Ci.size&&n.target!==Mn||(Ci.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ci.size===2&&(Ln!==null&&ar({pointerId:Ln},!0),Kr={last:xg()}))});window.addEventListener("pointermove",n=>{if(!Ci.has(n.pointerId)||(Ci.set(n.pointerId,{x:n.clientX,y:n.clientY}),!Kr||Ci.size<2||!Sn))return;let e=xg(),t=e/Kr.last;t>1.15?(xd(),Kr.last=e):t<1/1.15&&(vd(),Kr.last=e)});var p1=n=>{Ci.delete(n.pointerId),Ci.size<2&&(Kr=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,p1));Mn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!Sn||e-Tm<220||!n.deltaY||e-pd<1400||(Tm=e,n.deltaY<0?xd():vd())},{passive:!1});window.addEventListener("resize",()=>{let n=Ji(),e=Is&&Re?Yn||uo():null;rg(),sg(),so(),ig(e),Ji()!==n&&Re&&Re.retexture(),Ng(),Zu(),Ke.open&&(og(),clearTimeout(Ke.relayout),Ke.relayout=setTimeout(()=>{Ke.open&&Ke.post&&JSON.stringify(Wu("project"))!==Ke.geomKey&&(Ke.build(Ke.post,H.section.def.card),so())},250))});function Am(){if(Me.settings.negativeToggle!==!1){if(Wn=!Wn,no()&&vc(),!Gt)try{localStorage.setItem("hc-neg",(Wn?"1":"0")+(no()?"@"+sr:""))}catch{}Rc(),Re&&Re.retexture()}}["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Am),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Am())}))});var fe=null,bg=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function m1(){let n=(Me.settings.showreel||"").trim();if(!fe){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),fe={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Cg()),fe.x.addEventListener("click",Ql),i.querySelector(".scrim").addEventListener("click",Ql),fe.snd.addEventListener("click",()=>Mg(!fe.muted)),window.addEventListener("keydown",s=>{if(fe.open){if(s.code==="Escape")s.preventDefault(),Ql();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!fe.player||s.source!==fe.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==fe.muted&&(fe.muted=r.info.muted,lo())})}fe.btn.hidden=!n,fe.btn.setAttribute("aria-label","Showreel"),fe.x.setAttribute("aria-label",Je("close")),n!==fe.src&&(fe.open&&Ql(!0),fe.src=n,fe.kind=n?yd(n):"",fe.vid.innerHTML="",fe.player=null);let e=fe.kind==="youtube"?`https://www.youtube.com/watch?v=${fo(n)}`:fe.kind==="vimeo"?`https://vimeo.com/${po(n)}`:"";fe.ext.hidden=!e,e&&(fe.ext.href=e,fe.ext.textContent=(fe.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),lo()}function lo(){fe&&(fe.snd.innerHTML=bg(!fe.muted)+`<span>${Je(fe.muted?"soundOn":"soundOff")}</span>`,fe.snd.setAttribute("aria-pressed",String(!fe.muted)))}function _c(n,e=[]){let t=fe.player;if(!(!t||!t.contentWindow)){if(fe.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(fe.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function Mg(n){fe.muted=n,lo(),fe.kind==="video"?fe.player&&(fe.player.muted=n,n||(fe.player.volume=1)):(_c(n?"mute":"unMute"),n||_c("setVolume",[100]))}function g1(){if(!(!fe||!fe.src||fe.open)){if(fe.open=!0,fe.last=document.activeElement,fe.player)fe.kind==="video"?fe.player.play().catch(()=>{}):_c("playVideo");else{let n=fe.src,e=fe.kind;if(e==="video"){let t=document.createElement("video");t.src=tn(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==fe.muted&&(fe.muted=t.muted,lo())}),fe.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?fo(n):po(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),fe.muted||Mg(!1)}),fe.player=t}else{let t=document.createElement("img");t.src=tn(n),t.alt="",fe.player=t}fe.muted=!0,lo(),fe.vid.appendChild(fe.player)}fe.snd.hidden=!/^(youtube|vimeo|video)$/.test(fe.kind),fe.box.hidden=!1,fe.btn.setAttribute("aria-expanded","true"),fe.box.offsetWidth,fe.box.classList.add("on"),setTimeout(()=>{fe.open&&fe.x.focus({preventScroll:!0})},60)}}function Ql(n){!fe||!fe.open||(fe.open=!1,fe.btn.setAttribute("aria-expanded","false"),fe.kind==="video"?fe.player&&fe.player.pause():_c("pauseVideo"),fe.box.classList.remove("on"),clearTimeout(fe.t),fe.t=setTimeout(()=>{fe.open||(fe.box.hidden=!0)},n===!0?0:650),fe.last&&fe.last.focus&&n!==!0&&fe.last.focus({preventScroll:!0}))}var x=null,Qr=["white","grey","accent","source"],Sg=8;function y1(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},Me.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(Qr,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function _1(){if(x)return;let n=document.getElementById("home-band");if(!n)return;let e=y1(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>Zu()).observe(t),x={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:Qr.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(Sg,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},x.octx=x.off.getContext("2d",{willReadFrequently:!0}),x.raw=document.createElement("canvas"),x.rctx=x.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let o=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(o.crossOrigin="anonymous"),Object.assign(o,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:tn(s)}),o.setAttribute("playsinline",""),o.addEventListener("loadedmetadata",()=>{isFinite(o.duration)&&o.duration>2&&(o.currentTime=Math.random()*(o.duration-1)),o.play().catch(()=>{})},{once:!0}),x.video=o}else{let o=new Set;Me.posts.filter(a=>a.published!==!1).forEach(a=>[a.thumb,...(a.media||[]).map(l=>l&&l.src)].forEach(l=>{l&&!/^(https?:|data:)/.test(l)&&/\.(jpe?g|png|webp)$/i.test(l)&&!o.has(l)&&o.size<10&&o.add(l)})),x.pics=[...o].sort(()=>Math.random()-.5).map(a=>{let l=new Image;return l.src=tn(a),l})}v1(e.controls!==!1);let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),Zu()}var Cm={video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="10" r="4" fill="currentColor"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function v1(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(x&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    <button type="button" id="hv-shot" hidden>${Cm.shot}<span></span></button>
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden>?</button>
    <button type="button" id="home-reel" aria-pressed="false" hidden><i aria-hidden="true"></i><span>Showreel</span></button>
    ${n?`<button type="button" id="hv-toggle" aria-expanded="false">${Cm.faders}</button>`:""}`,e.appendChild(s),n&&M1(e,i),A1(e),s.querySelector("#home-reel").addEventListener("click",()=>{x.reelOn?ts():Cg()}),document.querySelectorAll("#hv-src button").forEach(r=>r.addEventListener("click",()=>{r.dataset.src==="cam"&&!x.cam?Lg():r.dataset.src==="video"&&x.cam&&Nc()})),s.querySelector("#hv-shot").addEventListener("click",x1),s.querySelector("#story-btn").addEventListener("click",()=>wd()),wg(),Ic()}function Ic(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(x&&x.cam);document.querySelectorAll("#hv-src button").forEach(a=>{let l=a.dataset.src==="cam"===e;a.setAttribute("aria-pressed",String(l)),a.classList.toggle("on",l),a.textContent=Je(a.dataset.src==="cam"?"hv_cam":"hv_video")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Je("hv_src"));let i=n.querySelector("#hv-shot");i.hidden=!e,i.setAttribute("aria-label",Je("hv_shot")),i.querySelector("span").textContent=Je("photo");let s=n.querySelector("#story-btn");s.setAttribute("aria-label",Je("story")),s.title=Je("story");let r=n.querySelector("#home-reel");r.hidden=!(Me.settings.showreel||"").trim();let o=!!(x&&x.reelOn);r.setAttribute("aria-pressed",String(o)),r.classList.toggle("on",o),r.setAttribute("aria-label","Showreel")}var Rm=0;function na(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Rm),t.textContent=n||"",t.hidden=!n,n&&e&&(Rm=setTimeout(()=>{t.hidden=!0},e)))}async function x1(){if(!x||!x.cam||x.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(x.cell,x.floor),o=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,x.W)))),a=Math.ceil(n/o),l=Math.ceil(e/o),c={ctx:x.ctx,W:x.W,H:x.H,ow:x.off.width,oh:x.off.height,lo:x.lo,hi:x.hi};try{x.ctx=i,x.W=n,x.H=e,x.off.width=x.raw.width=a,x.off.height=x.raw.height=l,Pg(0),x.octx.globalAlpha=1,x.octx.drawImage(x.raw,0,0);let V=null;try{V=x.octx.getImageData(0,0,a,l).data}catch{}V?ed(V,a,l,o):Ku(a,l,o)}finally{x.ctx=c.ctx,x.W=c.W,x.H=c.H,x.off.width=x.raw.width=c.ow,x.off.height=x.raw.height=c.oh,x.lo=c.lo,x.hi=c.hi,x.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let m=(((Me.settings.taglines||{})[Zi]||(Me.settings.taglines||{}).en||[]).join(" ")||"Hand Coded.").toUpperCase(),g=getComputedStyle(document.documentElement).getPropertyValue("--grotesk").trim()||"sans-serif",v=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),p=getComputedStyle(v),f=V=>`${p.fontStyle==="italic"?"italic ":""}${p.fontWeight} ${V}px ${p.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${g}`),document.fonts.load(f(110))])}catch{}let A=72,b=70,L=128,I=document.getElementById("home-logo");if(I&&I.complete&&I.naturalWidth)try{i.drawImage(I,A,b,L,L)}catch{}let N=(Me.settings.name||"Hand Coded")+".",D=A+L+34,W=120;for(i.font=f(W);i.measureText(N).width>n-D-A&&W>48;)W-=4,i.font=f(W);i.fillStyle="#fff",i.textBaseline="middle",i.fillText(N,D,b+L/2+W*.04),i.textBaseline="top";let S=n-2*A,C=104,X=[];for(;C>=40&&(i.font=`bold ${C}px ${g}`,X=en(i,m,S),!(X.length<=4));C-=4);X=X.slice(0,4);let ae=Math.round(C*1.05),ge=e-96,F=ge-44-X.length*ae;i.fillStyle=nn(),i.fillRect(A,F-38,54,7),i.fillStyle="#fff",i.font=`bold ${C}px ${g}`,X.forEach((V,Q)=>i.fillText(V,A-C*.04,F+Q*ae)),i.fillStyle="#8f8f8f",i.font=`28px ${g}`,i.fillText((location.host+location.pathname).replace(/\/(index\.html)?$/,"").replace(/^www\./,""),A,ge);let B=await new Promise(V=>t.toBlob(V,"image/jpeg",.92));if(!B)return;aa("photo-souvenir","Photo souvenir",!0);let k="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",ne=typeof File=="function"?new File([B],k,{type:"image/jpeg"}):null;if(ne&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[ne]}))try{await navigator.share({files:[ne],title:Me.settings.name||"Hand Coded"}),na(Je("hv_shotDone"),2500);return}catch(V){if(V&&V.name==="AbortError")return}let q=document.createElement("a");q.href=URL.createObjectURL(B),q.download=k,document.body.appendChild(q),q.click(),setTimeout(()=>{URL.revokeObjectURL(q.href),q.remove()},2e3),na(Je("hv_shotDone"),2500)}function wg(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(Me.settings.home||{}).story||{},i=Ee(t.title||{}).trim(),s=Yl(Ee(t.body||{})),r=!!(i||er(s).join("").trim());n.hidden=!r;let o=document.getElementById("hc-story");if(!r){o&&o.remove();return}o||(o=document.createElement("section"),o.id="hc-story",o.hidden=!0,e.appendChild(o)),o.setAttribute("aria-label",i||Je("story"));let a=(t.images||[]).filter(Boolean);o.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${De(Je("close"))}">\xD7</button><h2>${De(i||Je("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${De(t.link)}" target="_blank" rel="noopener">${De(Ee(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(a.length?`<div class="shots scroll-x">${a.map(l=>`<a href="${De(tn(l))}" target="_blank" rel="noopener"><img src="${De(tn(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",o.querySelector(".x").addEventListener("click",()=>wd(!1))}var Lm=0;function wd(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Lm),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Lm=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),wd(!1))},!0);function Zu(){if(!x)return;let n=x.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);x.W=Math.max(1,Math.round(n.width)),x.H=Math.max(1,Math.round(n.height)),x.cv.width=x.W*e,x.cv.height=x.H*e,x.ctx.setTransform(e,0,0,e,0,0),x.reelOn&&Ed()}var Ju=[{p:"cell",min:6,max:40,step:2,get:()=>x.cell,set:n=>{x.cell=n},show:()=>Math.max(x.cell,x.floor)+"px"+(x.floor>x.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(x.fill*100),set:n=>{x.fill=n/100},show:()=>Math.round(x.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>x.gamma,set:n=>{x.gamma=n},show:()=>"\xD7"+x.gamma.toFixed(1)},{p:"delay",min:1,max:Sg,step:1,get:()=>x.delay,set:n=>{x.delay=n},show:()=>Qu()+(Qu()<x.delay?"*":"")}],b1=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function M1(n,e){let t=document.createElement("div");t.id="hv-panel",t.setAttribute("role","group"),t.hidden=!0,t.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div>`:"")+Ju.map(a=>`<label class="rw"><span class="lb" data-k="${a.p}"></span><input type="range" data-p="${a.p}" min="${a.min}" max="${a.max}" step="${a.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${Qr.map(a=>`<button type="button" data-c="${a}"><i class="c-${a}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button><button type="button" class="tgl" data-a="sound"><i aria-hidden="true"></i><span data-k="sound"></span></button></div>`,n.appendChild(t);let i=document.getElementById("hv-toggle");x.panel=t,x.toggle=i;let s=0,r=a=>{clearTimeout(s),a?(t.hidden=!1,t.offsetWidth,t.classList.add("open")):(t.classList.remove("open"),s=setTimeout(()=>{t.classList.contains("open")||(t.hidden=!0)},320)),i.setAttribute("aria-expanded",String(a)),i.classList.toggle("on",a),n.classList.toggle("hv-open",a),a&&jn()};x.setOpen=r,i.addEventListener("click",()=>r(!t.classList.contains("open"))),n.addEventListener("pointerdown",a=>{t.classList.contains("open")&&!a.target.closest("#hv-panel, #hv-toggle, #hv-src")&&r(!1)}),t.querySelectorAll("input[data-p]").forEach(a=>{let l=Ju.find(c=>c.p===a.dataset.p);a.addEventListener("input",()=>{l.set(+a.value),jn()})});let o=a=>{if(a==="color")x.color=Qr[(Qr.indexOf(x.color)+1)%Qr.length];else if(a==="invert")x.mode=x.mode==="light"?"dark":"light";else if(a==="sound"){Tg(!x.sound);return}else if(a==="cam"){if(!document.getElementById("hv-src"))return;x.cam?Nc():Lg()}jn()};t.querySelectorAll("[data-c]").forEach(a=>a.addEventListener("click",()=>{x.color=a.dataset.c,jn()})),t.querySelectorAll(".tgl").forEach(a=>a.addEventListener("click",()=>o(a.dataset.a))),window.addEventListener("keydown",a=>{if(qt||a.ctrlKey||a.metaKey||a.altKey||fe&&fe.open)return;if(a.code==="Escape"&&t.classList.contains("open")){r(!1),i.focus({preventScroll:!0});return}if(a.code==="Escape"&&x.reelOn){ts();return}let l={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyS:"sound",KeyV:"cam"}[a.code];if(l){if(a.preventDefault(),l==="panel"){r(!t.classList.contains("open"));return}x.touched||(x.touched=!0,r(!0)),o(l)}}),jn()}function jn(){if(Ic(),!x||!x.panel)return;let n=x.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Je("hv_"+t.dataset.k)}),x.toggle.setAttribute("aria-label",Je("hv_panel")),x.toggle.title=Je("hv_panel")+" (K)",Ju.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),b1(i),i.setAttribute("aria-label",Je("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===x.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Je("hv_color")+" "+Je("hv_c_"+t.dataset.c))});let e=(t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)};e("invert",x.mode==="dark"),e("sound",x.sound&&!x.cam),n.querySelector('.tgl[data-a="sound"]').disabled=!(x.reelOn||x.video)||!!x.cam,Eg()}function Eg(){let n=x&&x.panel&&x.panel.querySelector(".stat");if(!n)return;let e=Math.max(x.cell,x.floor);n.textContent=`${Math.ceil(x.W/e)}\xD7${Math.ceil(x.H/e)} \xB7 ${Math.round(1e3/x.interval)} FPS`}var S1=()=>x&&!x.reelOn?x.video:null;function Tg(n){x.sound=n,x.reelOn&&x.rp?x.rp.mute(!n):x.video&&(x.video.muted=!n,n&&(x.video.volume=1),x.video.paused&&!x.frozen&&x.video.play().catch(()=>{})),jn(),bs()}var Ag=()=>!!(fe&&fe.src&&/^(video|youtube|vimeo)$/.test(fe.kind));function Cg(){x&&Ag()?(qt&&Dc(),E1()):g1()}function w1(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let r=document.createElement("video");Object.assign(r,{muted:!0,playsInline:!0,preload:"auto",src:tn(e)}),r.setAttribute("playsinline","");let o=()=>{i.t=r.currentTime,i.d=isFinite(r.duration)?r.duration:0,i.paused=r.paused,bs()};["timeupdate","durationchange","play","pause"].forEach(a=>r.addEventListener(a,o)),r.addEventListener("loadedmetadata",()=>{r.videoWidth&&(i.ratio=r.videoWidth/r.videoHeight),Ed(),o()}),r.addEventListener("ended",()=>ts()),Object.assign(i,{el:r,play:()=>r.play().catch(()=>{}),pause:()=>r.pause(),mute:a=>{r.muted=a,a||(r.volume=1)},seek:a=>{r.currentTime=a}})}else{let r=document.createElement("iframe"),o=n==="youtube",a=o?fo(e):po(e),l=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";r.src=o?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${l}`:`https://player.vimeo.com/video/${a}?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0`,r.allow="autoplay; encrypted-media",r.tabIndex=-1,r.title="Showreel",r.referrerPolicy="strict-origin-when-cross-origin";let c=u=>{try{r.contentWindow.postMessage(JSON.stringify(u),"*")}catch{}},h=o?(u,d=[])=>c({event:"command",func:u,args:d}):(u,d)=>c(d===void 0?{method:u}:{method:u,value:d});r.addEventListener("load",()=>{o&&c({event:"listening",id:"hvreel",channel:"widget"})}),Object.assign(i,{el:r,post:c,play:()=>{i.paused=!1,h(o?"playVideo":"play"),bs()},pause:()=>{i.paused=!0,h(o?"pauseVideo":"pause"),bs()},mute:u=>{o?(h(u?"mute":"unMute"),u||h("setVolume",[100])):(h("setMuted",u),u||h("setVolume",1))},seek:u=>{o?h("seekTo",[u,!0]):h("setCurrentTime",u),i.t=u,bs()}})}let s=document.createElement("div");return s.className="grid",t.append(i.el,s),i}window.addEventListener("message",n=>{let e=x&&x.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&x.reelOn){ts();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),x.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&x.reelOn){ts();return}}bs()}});function Ed(){let n=x&&x.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=e/t>=1.2,s=n.ratio,r=e,o=e/s;(i?o<t:o>t)&&(o=t,r=t*s),Object.assign(n.el.style,{width:Math.ceil(r)+"px",height:Math.ceil(o)+"px",left:Math.round((e-r)/2)+"px",top:Math.round((t-o)/2)+"px"})}function E1(){if(!x||!Ag())return!1;if(x.reelOn)return!0;x.cam&&Nc();let n=fe.kind+"|"+fe.src;if(!x.rp||x.rp.key!==n){x.rp&&(x.rp.pause(),x.rp.box.remove()),x.rp=w1(fe.kind,fe.src),x.rp.key=n;let e=document.getElementById("home-band");e.insertBefore(x.rp.box,e.querySelector(".hv-shade")),x.sound&&fe.kind==="video"&&x.rp.mute(!1),fe.kind==="video"&&x.rp.play()}else x.rp.seek(0),x.rp.play(),x.rp.mute(!x.sound);return x.reelOn=!0,x.rp.box.hidden=!1,x.video&&x.video.pause(),In.classList.add("reel-on"),Ed(),bs(),jn(),aa("showreel","Showreel",!0),!0}function ts(){!x||!x.reelOn||(x.reelOn=!1,x.rp.pause(),x.rp.box.hidden=!0,x.fresh=!0,x.video&&!qt&&!x.frozen&&(x.video.muted=!x.sound,x.video.play().catch(()=>{})),In.classList.remove("reel-on"),bs(),jn())}var T1=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Cu=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),Rg=()=>{let n=x&&x.rp;!n||!x.reelOn||(n.paused?n.play():n.pause())};function A1(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),x.reelBar=e,e.querySelector(".pp").addEventListener("click",Rg),e.querySelector(".snd").addEventListener("click",()=>Tg(!x.sound)),e.querySelector(".x").addEventListener("click",ts);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=x.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=x.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function bs(){let n=x&&x.reelBar;if(!n||(n.hidden=!x.reelOn,Ic(),!x.reelOn))return;let e=x.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=T1(e.paused),s.setAttribute("aria-label",Je(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Cu(i)} / ${Cu(t)}`:Cu(i);let r=n.querySelector(".snd");r.innerHTML=bg(x.sound),r.setAttribute("aria-label",Je(x.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(x.sound)),n.querySelector(".x").setAttribute("aria-label",Je("close"))}async function Lg(){na("");try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),x.reelOn&&ts(),x.cam={stream:n,video:e},x.lo=0,x.hi=1,x.video&&x.video.pause(),na(Je("hv_camNote"),6e3)}catch{na(Je("hv_camDenied"),4e3)}jn()}function Nc(){if(x&&x.cam){x.cam.stream.getTracks().forEach(e=>e.stop()),x.cam=null;let n=S1();n&&!qt&&n.play().catch(()=>{}),na("")}x&&jn()}function C1(){x&&(ts(),Nc(),x.video&&x.video.pause())}function Ru(n,e,t,i=1,s=0,r=0,o=!1,a=!1){let l=x.rctx,c=x.raw.width,h=x.raw.height,u=(a?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,m=t*u;o&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-m)/2+r*h,d,m),o&&l.restore()}function Pg(n){let e=x.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,x.raw.width,x.raw.height),x.cam&&x.cam.video.readyState>=2)return Ru(x.cam.video,x.cam.video.videoWidth,x.cam.video.videoHeight,1,0,0,!0),!0;if(x.video)return x.video.readyState<2?!1:(Ru(x.video,x.video.videoWidth,x.video.videoHeight),!0);let t=x.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,o=(Math.floor(s)%r+r)%r,a=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,Ru(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[o],a,1),a>.78&&r>1&&l(t[(o+1)%r],a-1,(a-.78)/.22),e.globalAlpha=1,!0}var R1=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function L1(n){if(x.pyr&&x.pyr.cell===n&&x.pyr.fill===x.fill)return x.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-a/x.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),x.pyr={cell:n,fill:x.fill,pat:x.ctx.createPattern(e,"repeat")},x.pyr.pat}function Ku(n,e,t){let i=x.ctx,s=x.W,r=x.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!R1){i.globalAlpha=.45,i.drawImage(x.off,o,a,n*t,e*t),i.globalAlpha=1;return}x.tmp||(x.tmp=document.createElement("canvas"),x.tctx=x.tmp.getContext("2d"));let l=x.tmp,c=x.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${x.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+x.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(x.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=L1(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),x.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",x.color==="source"?i.drawImage(x.off,o,a,n*t,e*t):(i.fillStyle=x.color==="grey"?"#8d8d8d":Me.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Ig=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},Qu=()=>x.floor||x.interval>1e3/29?1:x.delay;function P1(n){if(!x||!x.W)return;let e=x.exit?n-x.exit:-1;if(e>Pm){x.cleared||(x.cleared=!0,x.ctx.fillStyle="#0b0b0b",x.ctx.fillRect(0,0,x.W,x.H));return}if(x.reelOn||n-x.last<(e>=0?1e3/60:x.interval))return;x.last=n;let t=performance.now(),i=Ig.matches?0:(n-x.t0)/1e3,s=x.ctx,r=x.W,o=x.H;if(x.panel&&x.panel.classList.contains("open")&&n-(x.statAt||0)>500&&(x.statAt=n,Eg()),s.fillStyle="#0b0b0b",s.fillRect(0,0,r,o),x.intro&&n<x.intro)return;let a=x.intro?n-x.intro:-1;if(a>I1&&(x.intro=0),x.frozen||e>=0&&x.frozenAt&&n-x.sampleAt<x.interval){let g=x.frozenAt;if(!g)return;x.tainted?e<Pm/3&&Ku(g.cols,g.rows,g.cell):ed(g.d,g.cols,g.rows,g.cell,e,-1);return}let l=Math.max(x.cell,x.floor),c=Math.ceil(r/l),h=Math.ceil(o/l);if((x.off.width!==c||x.off.height!==h)&&(x.off.width=x.raw.width=c,x.off.height=x.raw.height=h,x.fresh=!0),!Pg(i))return;let u=Qu();x.octx.globalAlpha=x.fresh||u<=1?1:1/u,x.octx.drawImage(x.raw,0,0),x.octx.globalAlpha=1,x.fresh=!1;let d=null;if(!x.tainted)try{d=x.octx.getImageData(0,0,c,h).data}catch{x.tainted=!0}if(x.frozenAt={d,cols:c,rows:h,cell:l},x.sampleAt=n,x.tainted?Ku(c,h,l):ed(d,c,h,l,e,a),e>=0)return;let m=performance.now()-t;x.cost=x.cost*.9+m*.1,x.cost>14&&++x.slow>15?(x.panel&&setTimeout(jn,0),x.slow=0,x.interval<1e3/21?x.interval=x.interval<1e3/25?1e3/24:1e3/20:x.floor=Math.min(Math.max(x.cell+6,14),Math.max(x.floor,l)+2)):x.cost<5&&++x.fast>60&&(x.panel&&setTimeout(jn,0),x.fast=0,x.floor?x.floor=Math.max(0,x.floor-2):x.interval>1e3/30&&(x.interval=x.interval>1e3/22?1e3/24:1e3/30))}var Pm=420,I1=650,Im=(n,e)=>Math.pow(1-1/n,e*.06);function ed(n,e,t,i,s=-1,r=-1){let o=x.ctx,a=e*t,l=x.lum&&x.lum.length===a?x.lum:x.lum=new Float32Array(a),c=1,h=0;for(let I=0,N=0;I<a;I++,N+=4){let D=(.2126*n[N]+.7152*n[N+1]+.0722*n[N+2])/255;l[I]=D,D<c&&(c=D),D>h&&(h=D)}x.lo+=(c-x.lo)*.15,x.hi+=(Math.max(h,x.lo+.15)-x.hi)*.15;let u=x.lo,d=1/(x.hi-u),m=x.mode==="dark",g=x.gamma,v=i*x.fill,p=(x.W-e*i)/2,f=(x.H-t*i)/2,A=x.color==="source",b=s>=0||r>=0,L=A?N1(o):o;L.fillStyle=A?"#fff":x.color==="grey"?"#8d8d8d":x.color==="accent"?Me.settings.accent||"#ffcc00":"#f2f2f2",L.beginPath();for(let I=0,N=0;I<t;I++){let D=f+I*i+i/2;for(let W=0;W<e;W++,N++){let S=(l[N]-u)*d;S=S<0?0:S>1?1:S,m&&(S=1-S);let C=(g===1?S:Math.pow(S,g))*v;if(C<.6)continue;let X=p+W*i+i/2,ae=D;if(b){let ge=C/v;if(s>=0?C*=Im(2.4+4.6*ge,s):C*=1-Im(3+4*ge,r),C<.6)continue}L.rect(X-C/2,ae-C/2,C,C)}}L.fill(),A&&(L.globalCompositeOperation="source-in",L.imageSmoothingEnabled=!1,L.drawImage(x.off,p,f,e*i,t*i),L.globalCompositeOperation="source-over",o.save(),o.setTransform(1,0,0,1,0,0),o.drawImage(L.canvas,0,0),o.restore())}function N1(n){let e=n.canvas;x.mask||(x.mask=document.createElement("canvas"),x.mctx=x.mask.getContext("2d")),(x.mask.width!==e.width||x.mask.height!==e.height)&&(x.mask.width=e.width,x.mask.height=e.height);let t=x.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var In=document.getElementById("home"),Rs=document.getElementById("enter"),D1=Rs.querySelector(".lbl"),co=document.getElementById("ticker"),ec=co.getContext("2d"),Ka=null,Lu=0,Qa=1;function Td(n){D1.textContent=n,Rs.setAttribute("aria-label",n)}var Nm={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},U1=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=Nm[e]||Nm["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function O1(n){let e=i=>i.published&&Me.sections.some(s=>s.id===i.section&&s.visible),t=Me.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+Me.settings.founded||2012));case"auto:projects":return String(Me.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(Me.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(Me.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(Me.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var F1=()=>(Me.settings.home&&Me.settings.home.figures||[]).map(n=>({value:O1(n.value),label:Ee(n.label)})).filter(n=>n.value&&n.label),k1=()=>F1().map(n=>`${n.value} ${n.label}`);function B1(){let n=Ee(Me.settings.home.sub||{}).trim(),e=n?[n]:[...k1(),...Me.settings.home.ticker||[]].filter(Boolean),t=(e.length?e:[Me.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Ka=z1(t)}function z1(n){let e=[];for(let t of n){let i=U1(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var Ei={pitch:3.2,rows:7,h:30},Zr=null,Dm="";function Um(n,e){let t=Qa,i=Math.ceil(Ei.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,Ei.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-Ei.pitch*.1*t,o-Ei.pitch*.1*t,Ei.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Ng(){Qa=Math.min(window.devicePixelRatio||1,2),co.width=Math.round(window.innerWidth*Qa),co.height=Math.round(Ei.h*Qa),Zr=null}var tc=0;function H1(n){let e=Me.settings.accent||"#ffcc00";(!Zr||Dm!==e)&&(Dm=e,Zr={on:Um(e,!0),off:Um(e,!1)}),tc+=n*26,tc>=1&&(Lu=(Lu+Math.floor(tc))%Ka.w,tc%=1);let t=Qa,i=Ei.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(Ei.h-Ei.rows*i)/2;ec.setTransform(1,0,0,1,0,0),ec.fillStyle="#000",ec.fillRect(0,0,co.width,co.height);let o=Zr.on.width/2;for(let a=0;a<s;a++){let l=Ka.cols[(Lu+a)%Ka.w],c=(a*i+i/2)*t-o;for(let h=0;h<Ei.rows;h++)ec.drawImage(l>>h&1?Zr.on:Zr.off,c,(r+h*i+i/2)*t-o)}}var qt=!1,Ad=!1,yo=!1,Cd=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),td=0,Dg=0,Pu=!1,V1=180;function Rd(n=yo){if(!(qt||Pu)){if(!(n&&x&&x.W&&!In.hidden&&!Ig.matches)){Om();return}Pu=!0,In.classList.add("leaving"),x.setOpen&&x.setOpen(!1),x.reelOn&&ts(),G1(),x.exit=performance.now(),x.cleared=!1,x.intro=0,setTimeout(()=>{Pu=!1,Om()},V1)}}function G1(){x&&(x.frozen=!0,x.video&&x.video.pause(),x.rp&&x.rp.pause(),x.cam&&(x.cam.stream.getTracks().forEach(n=>n.stop()),x.cam=null))}function Om(){if(!qt){if(qt=!0,clearTimeout(td),pd=performance.now(),!Gt&&Cd())try{history.pushState(null,"",location.pathname+location.search+"#"+(Me.sections.find(n=>n.id===Me.settings.startSection&&n.visible)||Nt[0].def).id)}catch{}q1(),e1(),requestAnimationFrame(()=>requestAnimationFrame(()=>{In.classList.add("out"),td=setTimeout(()=>{In.hidden=!0,C1()},1250)})),Cs.classList.add("on"),setTimeout(i1,1500),Ns.hidden=!1,Lc.classList.remove("hidden"),Mn.focus({preventScroll:!0})}}function Dc(n=!0){if(qt&&(pi(),mc(),qu(),Mc(),go(null),bd(),qt=!1,yo=!1,clearTimeout(td),Dg=performance.now()+1300,Rs.classList.remove("wait"),Td(Ee(Me.settings.home.enter)||Je("enter")),Ug=performance.now(),x&&(x.exit=0,x.frozen=!1,x.cleared=!1,x.fresh=!0,x.intro=performance.now()+450),In.classList.remove("leaving"),In.hidden=!1,In.offsetWidth,In.classList.remove("out"),x&&x.video&&x.video.play().catch(()=>{}),n&&!Gt))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!Gt){if(Cd())Dc(!1);else if(!qt&&Ad)Rd();else if(qt&&Is){let n=Nt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&Sn&&mo(n)}}});Cs.addEventListener("click",n=>{n.target.closest(".wm")&&qt&&Dc()});Cs.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&qt&&(n.preventDefault(),Dc())});Rs.addEventListener("click",()=>{yo=!0,Ad?Rd():(Td(Je("loading")),Rs.classList.add("wait"))});var Ug=0,nc=0,Fm=0,eo=null,Og=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function Ld(){if(qt||yo||performance.now()-Ug<900||fe&&fe.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||Rs.click()}In.addEventListener("wheel",n=>{if(qt||Og(n.target))return;let e=performance.now();e-Fm>350&&(nc=0),Fm=e,n.deltaY>0&&(nc+=n.deltaY*(n.deltaMode?30:1),nc>40&&(nc=0,Ld()))},{passive:!0});In.addEventListener("touchstart",n=>{eo=n.touches.length===1&&!Og(n.target)?n.touches[0].clientY:null},{passive:!0});In.addEventListener("touchmove",n=>{eo!==null&&n.touches.length===1&&eo-n.touches[0].clientY>46&&(eo=null,Ld())},{passive:!0});In.addEventListener("touchend",()=>{eo=null},{passive:!0});window.addEventListener("keydown",n=>{if(qt||n.ctrlKey||n.metaKey||n.altKey||fe&&fe.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&x&&x.reelOn){n.preventDefault(),Rg();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),Ld()}});var nd=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function W1(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Gt&&Gt.tag&&(e=Gt.tag),nd(e||n)}function X1(n,e){let t=n.tags||[],i=t.find(s=>nd(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>nd(r)===e));return i?i.id:""}function q1(){try{Ls.compile(AM,ri,Es)}catch{}Ac();let n=Gt&&Gt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Nt.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Nt.findIndex(o=>o.def.id===Me.settings.startSection)));let s=W1(t||(e&&i<0?e:""));if(s){let o=Nt.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Nt.keys()];for(let a of o){let l=X1(Nt[a].def,s);if(l){i=a,Nt[a].def.defaultTag=l;break}}}es=oe.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=ns();H.cameraY=ra(),yt.x=Qi()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=Qi()*Math.cos(H.degreeCamera)+r.p.z,Pn.x=r.p.x,Pn.y=Ec(),Pn.z=r.p.z,Is=!0,mo(i,0),(Yt<=700||Xt<=520)&&so()}var km=performance.now();function Fg(n){let e=Math.min(.25,Math.max(0,(n-km)/1e3));km=n,ji+=e,lc=e*bM,!qt&&Ka&&H1(e),x&&!In.hidden&&P1(n),Is&&(qt||n<Dg)&&(wM(),ZM(),JM(),QM(),Re&&Re.update(),f1(),Ke.step(),t1(),Ls.render(Es,ri)),requestAnimationFrame(Fg)}function Iu(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Je("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function $1(){Gt||!/[?&]preview\b/.test(location.search)||window.parent===window||(Gt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:Bm},"*")}catch{}}))}(async function(){try{await $1(),Gt?Me=Qs(structuredClone(Gt.content)):(Me=await ic.load(),ic.prepare&&await ic.prepare(Me))}catch(o){Iu(o);return}Wn=vc(),Jm();{let o=rd();o!==null&&(Wn=o)}ad();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=Me.settings.langs&&Me.settings.langs.length?Me.settings.langs:di,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(o=>String(o).toLowerCase().slice(0,2)).find(o=>t.includes(o)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}if(Zi=t.includes(s)?s:t.includes(e)?e:i||Me.settings.defaultLang||t[0],Nt=Me.sections.filter(o=>o.visible).map(o=>({def:o})),!Nt.length){Iu(new Error("aucune section visible"));return}if(!Gt)try{let o=new URLSearchParams(location.search).get("p"),a=o&&Me.posts.find(l=>l.id===o&&l.published!==!1&&Nt.some(c=>c.def.id===l.section));a&&(oc=a.id,history.replaceState(null,"",location.pathname+location.search+"#"+a.section))}catch{}a1(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&zm(!1),pg(),Rc(),n1(),_1(),rg(),Ac(),Ng(),requestAnimationFrame(Fg),tr=Nt.map((o,a)=>new Bu(o.def,a)),Nt.forEach((o,a)=>{o.object=tr[a]}),Nt.forEach(o=>{o.container=o.object.container,o.p=o.object.p});let r=new Hl($m);try{if((await Promise.allSettled(tr.map(a=>a.load(r)))).forEach((a,l)=>{a.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+tr[l].def.id+" \xBB :",a.reason)}),tr.forEach((a,l)=>a.place(l)),await Promise.race([Promise.all(Zm).then(Ps),new Promise(a=>setTimeout(a,3e3))]),Ad=!0,(yo||!Cd()||Gt&&Gt.start)&&Rd(),oc){let a=oc,l=performance.now(),c=setInterval(()=>{(Sn||performance.now()-l>8e3)&&(clearInterval(c),Sn&&_d(a))},120)}}catch(o){Iu(o)}})();window.__hc={P:H,STYLE:oe,cam:yt,camera:ri,renderer:Ls,get hv(){return x&&{cell:x.cell,floor:x.floor,fps:Math.round(1e3/x.interval),cost:+x.cost.toFixed(1),tainted:x.tainted}},get input(){return Sn},get homeGone(){return qt},get content(){return Me},get postsView(){return Re},getToSectionView:mo,openThatPost:ao,closePost:oo,goToPost:_d,setLang:cg,enter:()=>Rs.click()};})();
