/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var jh="160";var Eg=0,bd=1,Tg=2;var hp=1,Ag=2,Oi=3,zn=0,hn=1,Fn=2;var os=0,Pr=1,Md=2,Sd=3,wd=4,Cg=5,Fs=100,Rg=101,Lg=102,Ed=103,Td=104,Pg=200,Ig=201,Ng=202,Dg=203,mh=204,gh=205,Ug=206,Og=207,Fg=208,Bg=209,kg=210,zg=211,Hg=212,Vg=213,Gg=214,Wg=0,Xg=1,qg=2,jo=3,$g=4,Yg=5,jg=6,Zg=7,Il=0,Jg=1,Kg=2,ls=0,Qg=1,e0=2,t0=3,n0=4,i0=5,s0=6,Ad="attached",r0="detached",up=300,Dr=301,Ur=302,yh=303,_h=304,Nl=306,hs=1e3,An=1001,xh=1002,fn=1003,Cd=1004;var Dc=1005;var Un=1006,a0=1007;var us=1008;var cs=1009,o0=1010,l0=1011,Zh=1012,dp=1013,as=1014,Bi=1015,Ta=1016,fp=1017,pp=1018,zs=1020,c0=1021,Kn=1023,h0=1024,u0=1025,Hs=1026,Or=1027,d0=1028,mp=1029,f0=1030,gp=1031,yp=1033,Uc=33776,Oc=33777,Fc=33778,Bc=33779,Rd=35840,Ld=35841,Pd=35842,Id=35843,_p=36196,Nd=37492,Dd=37496,Ud=37808,Od=37809,Fd=37810,Bd=37811,kd=37812,zd=37813,Hd=37814,Vd=37815,Gd=37816,Wd=37817,Xd=37818,qd=37819,$d=37820,Yd=37821,kc=36492,jd=36494,Zd=36495,p0=36283,Jd=36284,Kd=36285,Qd=36286;var Zo=2300,Jo=2301,zc=2302,ef=2400,tf=2401,nf=2402,m0=2500;var xp=3e3,Vs=3001,g0=3200,y0=3201,Jh=0,_0=1,Qn="",Gt="srgb",zi="srgb-linear",Kh="display-p3",Dl="display-p3-linear",Ko="linear",Ot="srgb",Qo="rec709",el="p3";var cr=7680;var sf=519,x0=512,v0=513,b0=514,vp=515,M0=516,S0=517,w0=518,E0=519,vh=35044;var rf="300 es",bh=1035,ki=2e3,tl=2001,ds=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=1234567,Ma=Math.PI/180,Fr=180/Math.PI;function li(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Tn(n,e,t){return Math.max(e,Math.min(t,n))}function Qh(n,e){return(n%e+e)%e}function T0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function A0(n,e,t){return n!==e?(t-n)/(e-n):0}function Sa(n,e,t){return(1-t)*n+t*e}function C0(n,e,t,i){return Sa(n,e,1-Math.exp(-t*i))}function R0(n,e=1){return e-Math.abs(Qh(n,e*2)-e)}function L0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function P0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function I0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function N0(n,e){return n+Math.random()*(e-n)}function D0(n){return n*(.5-Math.random())}function U0(n){n!==void 0&&(af=n);let e=af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function O0(n){return n*Ma}function F0(n){return n*Fr}function Mh(n){return(n&n-1)===0&&n!==0}function B0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k0(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ms={DEG2RAD:Ma,RAD2DEG:Fr,generateUUID:li,clamp:Tn,euclideanModulo:Qh,mapLinear:T0,inverseLerp:A0,lerp:Sa,damp:C0,pingpong:R0,smoothstep:L0,smootherstep:P0,randInt:I0,randFloat:N0,randFloatSpread:D0,seededRandom:U0,degToRad:O0,radToDeg:F0,isPowerOfTwo:Mh,ceilPowerOfTwo:B0,floorPowerOfTwo:nl,setQuaternionFromProperEuler:k0,normalize:Ct,denormalize:mi},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],x=s[0],p=s[3],d=s[6],T=s[1],v=s[4],R=s[7],P=s[2],I=s[5],D=s[8];return r[0]=a*x+o*T+l*P,r[3]=a*p+o*v+l*I,r[6]=a*d+o*R+l*D,r[1]=c*x+h*T+u*P,r[4]=c*p+h*v+u*I,r[7]=c*d+h*R+u*D,r[2]=f*x+m*T+g*P,r[5]=f*p+m*v+g*I,r[8]=f*d+m*R+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hc=new pt;function bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function z0(){let n=Aa("canvas");return n.style.display="block",n}var of={};function wa(n){n in of||(of[n]=!0,console.warn(n))}var lf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[zi]:{transfer:Ko,primaries:Qo,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:Ot,primaries:Qo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Dl]:{transfer:Ko,primaries:el,toReference:n=>n.applyMatrix3(cf),fromReference:n=>n.applyMatrix3(lf)},[Kh]:{transfer:Ot,primaries:el,toReference:n=>n.convertSRGBToLinear().applyMatrix3(cf),fromReference:n=>n.applyMatrix3(lf).convertLinearToSRGB()}},H0=new Set([zi,Dl]),Rt={enabled:!0,_workingColorSpace:zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!H0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=vo[e].toReference,s=vo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return vo[n].primaries},getTransfer:function(n){return n===Qn?Ko:vo[n].transfer}};function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,il=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Aa("canvas")),hr.width=e.width,hr.height=e.height;let i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ir(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ir(t[i]/255)*255):t[i]=Ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V0=0,sl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?il.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G0=0,Hn=class n extends ds{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=An,s=An,r=Un,a=us,o=Kn,l=cs,c=n.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=li(),this.name="",this.source=new sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vs?Gt:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?Vs:xp}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vs?Gt:Qn}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=up;Hn.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,R=(m+1)/2,P=(d+1)/2,I=(h+f)/4,D=(u+x)/4,V=(g+p)/4;return v>R&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=I/i,r=D/i):R>P?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=I/s,r=V/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=D/r,s=V/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sh=class extends ds{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vs?Gt:Qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends Sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},rl=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wh=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-o,d=l*f+c*m+h*g+u*x,T=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let P=Math.sqrt(v),I=Math.atan2(P,d*T);p=Math.sin(p*I)/P,o=Math.sin(o*I)/P}let R=o*T;if(l=l*p+f*R,c=c*p+m*R,h=h*p+g*R,u=u*p+x*R,p===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new U,hf=new gi,pn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),Mo.subVectors(this.max,pa),ur.subVectors(e.a,pa),dr.subVectors(e.b,pa),fr.subVectors(e.c,pa),ts.subVectors(dr,ur),ns.subVectors(fr,dr),Is.subVectors(ur,fr);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Is.z,Is.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Is.z,0,-Is.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Is.y,Is.x,0];return!Xc(t,ur,dr,fr,Mo)||(t=[1,0,0,0,1,0,0,0,1],!Xc(t,ur,dr,fr,Mo))?!1:(So.crossVectors(ts,ns),t=[So.x,So.y,So.z],Xc(t,ur,dr,fr,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Li=[new U,new U,new U,new U,new U,new U,new U,new U],ri=new U,bo=new pn,ur=new U,dr=new U,fr=new U,ts=new U,ns=new U,Is=new U,pa=new U,Mo=new U,So=new U,Ns=new U;function Xc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ns.fromArray(n,r);let o=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=e.dot(Ns),c=t.dot(Ns),h=i.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var W0=new pn,ma=new U,qc=new U,ei=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):W0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);let t=ma.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ma,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(qc)),this.expandByPoint(ma.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pi=new U,$c=new U,wo=new U,is=new U,Yc=new U,Eo=new U,jc=new U,Br=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$c.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),is.copy(this.origin).sub($c);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=is.dot(this.direction),l=-is.dot(wo),c=is.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($c).addScaledVector(wo,f),m}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);let i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,s,r){Yc.subVectors(t,e),Eo.subVectors(i,e),jc.crossVectors(Yc,Eo);let a=this.direction.dot(jc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;is.subVectors(this.origin,e);let l=o*this.direction.dot(Eo.crossVectors(is,Eo));if(l<0)return null;let c=o*this.direction.dot(Yc.cross(is));if(c<0||l+c>a)return null;let h=-o*is.dot(jc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p)}set(e,t,i,s,r,a,o,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),a=1/pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,m=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X0,e,q0)}lookAt(e,t,i){let s=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ss.crossVectors(i,Wn),ss.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ss.crossVectors(i,Wn)),ss.normalize(),To.crossVectors(Wn,ss),s[0]=ss.x,s[4]=To.x,s[8]=Wn.x,s[1]=ss.y,s[5]=To.y,s[9]=Wn.y,s[2]=ss.z,s[6]=To.z,s[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],T=i[3],v=i[7],R=i[11],P=i[15],I=s[0],D=s[4],V=s[8],M=s[12],C=s[1],G=s[5],ae=s[9],fe=s[13],F=s[2],W=s[6],B=s[10],ne=s[14],Q=s[3],X=s[7],ee=s[11],q=s[15];return r[0]=a*I+o*C+l*F+c*Q,r[4]=a*D+o*G+l*W+c*X,r[8]=a*V+o*ae+l*B+c*ee,r[12]=a*M+o*fe+l*ne+c*q,r[1]=h*I+u*C+f*F+m*Q,r[5]=h*D+u*G+f*W+m*X,r[9]=h*V+u*ae+f*B+m*ee,r[13]=h*M+u*fe+f*ne+m*q,r[2]=g*I+x*C+p*F+d*Q,r[6]=g*D+x*G+p*W+d*X,r[10]=g*V+x*ae+p*B+d*ee,r[14]=g*M+x*fe+p*ne+d*q,r[3]=T*I+v*C+R*F+P*Q,r[7]=T*D+v*G+R*W+P*X,r[11]=T*V+v*ae+R*B+P*ee,r[15]=T*M+v*fe+R*ne+P*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*m-i*l*m)+x*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],T=u*p*c-x*f*c+x*l*m-o*p*m-u*l*d+o*f*d,v=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,R=h*x*c-g*u*c+g*o*m-a*x*m-h*o*d+a*u*d,P=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,I=t*T+i*v+s*R+r*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=T*D,e[1]=(x*f*r-u*p*r-x*s*m+i*p*m+u*s*d-i*f*d)*D,e[2]=(o*p*r-x*l*r+x*s*c-i*p*c-o*s*d+i*l*d)*D,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*m-i*l*m)*D,e[4]=v*D,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*D,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*d-t*l*d)*D,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*m+t*l*m)*D,e[8]=R*D,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*d-t*u*d)*D,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*d+t*o*d)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*m-t*o*m)*D,e[12]=P*D,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*D,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*p-t*o*p)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,x=a*h,p=a*u,d=o*u,T=l*c,v=l*h,R=l*u,P=i.x,I=i.y,D=i.z;return s[0]=(1-(x+d))*P,s[1]=(m+R)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-R)*I,s[5]=(1-(f+d))*I,s[6]=(p+T)*I,s[7]=0,s[8]=(g+v)*D,s[9]=(p-T)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=pr.set(s[0],s[1],s[2]).length(),a=pr.set(s[4],s[5],s[6]).length(),o=pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);let c=1/r,h=1/a,u=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ki){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(o===ki)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===tl)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ki){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,m=(i+s)*h,g,x;if(o===ki)g=(a+r)*u,x=-2*u;else if(o===tl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},pr=new U,ai=new lt,X0=new U(0,0,0),q0=new U(1,1,1),ss=new U,To=new U,Wn=new U,uf=new lt,df=new gi,al=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return df.setFromEuler(this),this.setFromQuaternion(df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};al.DEFAULT_ORDER="XYZ";var Ca=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$0=0,ff=new U,mr=new gi,Ii=new lt,Ao=new U,ga=new U,Y0=new U,j0=new gi,pf=new U(1,0,0),mf=new U(0,1,0),gf=new U(0,0,1),Z0={type:"added"},J0={type:"removed"},Wt=class n extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new al,i=new gi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new pt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.multiply(mr),this}rotateOnWorldAxis(e,t){return mr.setFromAxisAngle(e,t),this.quaternion.premultiply(mr),this}rotateX(e){return this.rotateOnAxis(pf,e)}rotateY(e){return this.rotateOnAxis(mf,e)}rotateZ(e){return this.rotateOnAxis(gf,e)}translateOnAxis(e,t){return ff.copy(e).applyQuaternion(this.quaternion),this.position.add(ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pf,e)}translateY(e){return this.translateOnAxis(mf,e)}translateZ(e){return this.translateOnAxis(gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(ga,Ao,this.up):Ii.lookAt(Ao,ga,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(Ii),this.quaternion.premultiply(mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Z0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new U(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new U,Ni=new U,Zc=new U,Di=new U,gr=new U,yr=new U,yf=new U,Jc=new U,Kc=new U,Qc=new U,Co=!1,ks=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Ni.subVectors(i,t),Zc.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Ni),l=oi.dot(Zc),c=Ni.dot(Ni),h=Ni.dot(Zc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,t,i,s,r,a,o,l){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Ni.subVectors(e,t),oi.cross(Ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;gr.subVectors(s,i),yr.subVectors(r,i),Jc.subVectors(e,i);let l=gr.dot(Jc),c=yr.dot(Jc);if(l<=0&&c<=0)return t.copy(i);Kc.subVectors(e,s);let h=gr.dot(Kc),u=yr.dot(Kc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gr,a);Qc.subVectors(e,r);let m=gr.dot(Qc),g=yr.dot(Qc);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(yr,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return yf.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(yf,o);let d=1/(p+x+f);return a=x*d,o=f*d,t.copy(i).addScaledVector(gr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=Qh(e,1),t=Tn(t,0,1),i=Tn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eh(a,r,e+1/3),this.g=eh(a,r,e),this.b=eh(a,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Mp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Vc(e.r),this.g=Vc(e.g),this.b=Vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Rt.fromWorkingColorSpace(En.copy(this),e),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(En.copy(this),t);let i=En.r,s=En.g,r=En.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Gt){Rt.fromWorkingColorSpace(En.copy(this),e);let t=En.r,i=En.g,s=En.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(Ro);let i=Sa(rs.h,Ro.h,t),s=Sa(rs.s,Ro.s,t),r=Sa(rs.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new ot;ot.NAMES=Mp;var K0=0,yi=class extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Pr,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qt=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new U,Lo=new et,qn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}};var ol=class extends qn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ll=class extends qn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends qn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Q0=0,Jn=new lt,th=new Wt,_r=new U,Xn=new pn,ya=new pn,cn=new U,Vn=class n extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bp(e)?ll:ol)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Xn.min,ya.min),Xn.expandByPoint(cn),cn.addVectors(Xn.max,ya.max),Xn.expandByPoint(cn)):(Xn.expandByPoint(ya.min),Xn.expandByPoint(ya.max))}Xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),cn.add(_r)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new U,h[C]=new U;let u=new U,f=new U,m=new U,g=new et,x=new et,p=new et,d=new U,T=new U;function v(C,G,ae){u.fromArray(s,C*3),f.fromArray(s,G*3),m.fromArray(s,ae*3),g.fromArray(a,C*2),x.fromArray(a,G*2),p.fromArray(a,ae*2),f.sub(u),m.sub(u),x.sub(g),p.sub(g);let fe=1/(x.x*p.y-p.x*x.y);isFinite(fe)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(fe),T.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(fe),c[C].add(d),c[G].add(d),c[ae].add(d),h[C].add(T),h[G].add(T),h[ae].add(T))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let C=0,G=R.length;C<G;++C){let ae=R[C],fe=ae.start,F=ae.count;for(let W=fe,B=fe+F;W<B;W+=3)v(i[W+0],i[W+1],i[W+2])}let P=new U,I=new U,D=new U,V=new U;function M(C){D.fromArray(r,C*3),V.copy(D);let G=c[C];P.copy(G),P.sub(D.multiplyScalar(D.dot(G))).normalize(),I.crossVectors(V,G);let fe=I.dot(h[C])<0?-1:1;l[C*4]=P.x,l[C*4+1]=P.y,l[C*4+2]=P.z,l[C*4+3]=fe}for(let C=0,G=R.length;C<G;++C){let ae=R[C],fe=ae.start,F=ae.count;for(let W=fe,B=fe+F;W<B;W+=3)M(i[W+0]),M(i[W+1]),M(i[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new qn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_f=new lt,Ds=new Br,Po=new ei,xf=new U,xr=new U,vr=new U,br=new U,nh=new U,Io=new U,No=new et,Do=new et,Uo=new et,vf=new U,bf=new U,Mf=new U,Oo=new U,Fo=new U,Ft=class extends Wt{constructor(e=new Vn,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(nh.fromBufferAttribute(u,e),a?Io.addScaledVector(nh,h):Io.addScaledVector(nh.sub(t),h))}t.add(Io)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Po.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Po,xf)===null||Ds.origin.distanceToSquared(xf)>(e.far-e.near)**2))&&(_f.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let R=T,P=v;R<P;R+=3){let I=o.getX(R),D=o.getX(R+1),V=o.getX(R+2);s=Bo(this,d,e,i,c,h,u,I,D,V),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let T=o.getX(p),v=o.getX(p+1),R=o.getX(p+2);s=Bo(this,a,e,i,c,h,u,T,v,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=T,P=v;R<P;R+=3){let I=R,D=R+1,V=R+2;s=Bo(this,d,e,i,c,h,u,I,D,V),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let T=p,v=p+1,R=p+2;s=Bo(this,a,e,i,c,h,u,T,v,R),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ey(n,e,t,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===zn,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:n}}function Bo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,xr),n.getVertexPosition(l,vr),n.getVertexPosition(c,br);let h=ey(n,e,t,i,xr,vr,br,Oo);if(h){s&&(No.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Uo.fromBufferAttribute(s,c),h.uv=ks.getInterpolation(Oo,xr,vr,br,No,Do,Uo,new et)),r&&(No.fromBufferAttribute(r,o),Do.fromBufferAttribute(r,l),Uo.fromBufferAttribute(r,c),h.uv1=ks.getInterpolation(Oo,xr,vr,br,No,Do,Uo,new et),h.uv2=h.uv1),a&&(vf.fromBufferAttribute(a,o),bf.fromBufferAttribute(a,l),Mf.fromBufferAttribute(a,c),h.normal=ks.getInterpolation(Oo,xr,vr,br,vf,bf,Mf,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};ks.getNormal(xr,vr,br,u.normal),h.face=u}return h}var Ra=class n extends Vn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(x,p,d,T,v,R,P,I,D,V,M){let C=R/D,G=P/V,ae=R/2,fe=P/2,F=I/2,W=D+1,B=V+1,ne=0,Q=0,X=new U;for(let ee=0;ee<B;ee++){let q=ee*G-fe;for(let he=0;he<W;he++){let z=he*C-ae;X[x]=z*T,X[p]=q*v,X[d]=F,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[d]=I>0?1:-1,h.push(X.x,X.y,X.z),u.push(he/D),u.push(1-ee/V),ne+=1}}for(let ee=0;ee<V;ee++)for(let q=0;q<D;q++){let he=f+q+W*ee,z=f+q+W*(ee+1),j=f+(q+1)+W*(ee+1),se=f+(q+1)+W*ee;l.push(he,z,se),l.push(z,j,se),Q+=6}o.addGroup(m,Q,M),m+=Q,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function kr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=kr(n[t]);for(let s in i)e[s]=i[s]}return e}function ty(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sp(n){return n.getRenderTarget()===null?n.outputColorSpace:Rt.workingColorSpace}var Ul={clone:kr,merge:Dn},ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=ty(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},cl=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kt=class extends cl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mr=-90,Sr=1,Eh=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Mr,Sr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Mr,Sr,e,t);r.layers=this.layers,this.add(r);let a=new Kt(Mr,Sr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Mr,Sr,e,t);o.layers=this.layers,this.add(o);let l=new Kt(Mr,Sr,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Mr,Sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},hl=class extends Hn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Th=class extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vs?Gt:Qn),this.texture=new hl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ra(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:os});r.uniforms.tEquirect.value=t;let a=new Ft(s,r),o=t.minFilter;return t.minFilter===us&&(t.minFilter=Un),new Eh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},ih=new U,sy=new U,ry=new pt,Fi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ih.subVectors(i,t).cross(sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ih),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ry.getNormalMatrix(e),s=this.coplanarPoint(ih).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new ei,ko=new U,La=class{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],T=s[13],v=s[14],R=s[15];if(i[0].setComponents(l-r,f-c,p-m,R-d).normalize(),i[1].setComponents(l+r,f+c,p+m,R+d).normalize(),i[2].setComponents(l+a,f+h,p+g,R+T).normalize(),i[3].setComponents(l-a,f-h,p-g,R-T).normalize(),i[4].setComponents(l-o,f-u,p-x,R-v).normalize(),t===ki)i[5].setComponents(l+o,f+u,p+x,R+v).normalize();else if(t===tl)i[5].setComponents(o,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ay(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let d=g[x];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Vi=class n extends Vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let T=d*f-a;for(let v=0;v<c;v++){let R=v*u-r;g.push(R,-T,0),x.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){let v=T+c*d,R=T+c*(d+1),P=T+1+c*(d+1),I=T+1+c*d;m.push(v,R,I),m.push(R,P,I)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
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
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
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
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
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
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,by=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ly=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`
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
}`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,a_=`struct PhysicalMaterial {
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
}`,o_=`
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
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
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ox=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,fx=`#if DEPTH_PACKING == 3200
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
}`,px=`#define DISTANCE
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
}`,mx=`#define DISTANCE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define MATCAP
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,Ax=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Rx=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Ix=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Fx=`uniform vec3 color;
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
}`,Bx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:oy,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:hy,alphatest_fragment:uy,alphatest_pars_fragment:dy,aomap_fragment:fy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:gy,begin_vertex:yy,beginnormal_vertex:_y,bsdfs:xy,iridescence_fragment:vy,bumpmap_pars_fragment:by,clipping_planes_fragment:My,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Ey,color_fragment:Ty,color_pars_fragment:Ay,color_pars_vertex:Cy,color_vertex:Ry,common:Ly,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Oy,colorspace_fragment:Fy,colorspace_pars_fragment:By,envmap_fragment:ky,envmap_common_pars_fragment:zy,envmap_pars_fragment:Hy,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:e_,envmap_vertex:Gy,fog_vertex:Wy,fog_pars_vertex:Xy,fog_fragment:qy,fog_pars_fragment:$y,gradientmap_pars_fragment:Yy,lightmap_fragment:jy,lightmap_pars_fragment:Zy,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Qy,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:a_,lights_fragment_begin:o_,lights_fragment_maps:l_,lights_fragment_end:c_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:f_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:y_,metalnessmap_fragment:__,metalnessmap_pars_fragment:x_,morphcolor_vertex:v_,morphnormal_vertex:b_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:w_,normal_fragment_maps:E_,normal_pars_fragment:T_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:I_,iridescence_pars_fragment:N_,opaque_fragment:D_,packing:U_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:V_,shadowmap_pars_vertex:G_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:$_,skinning_vertex:Y_,skinnormal_vertex:j_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:K_,tonemapping_pars_fragment:Q_,transmission_fragment:ex,transmission_pars_fragment:tx,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:rx,background_vert:ax,background_frag:ox,backgroundCube_vert:lx,backgroundCube_frag:cx,cube_vert:hx,cube_frag:ux,depth_vert:dx,depth_frag:fx,distanceRGBA_vert:px,distanceRGBA_frag:mx,equirect_vert:gx,equirect_frag:yx,linedashed_vert:_x,linedashed_frag:xx,meshbasic_vert:vx,meshbasic_frag:bx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:wx,meshmatcap_frag:Ex,meshnormal_vert:Tx,meshnormal_frag:Ax,meshphong_vert:Cx,meshphong_frag:Rx,meshphysical_vert:Lx,meshphysical_frag:Px,meshtoon_vert:Ix,meshtoon_frag:Nx,points_vert:Dx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Fx,sprite_vert:Bx,sprite_frag:kx},ge={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},On={basic:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Dn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Dn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Dn([ge.points,ge.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Dn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Dn([ge.common,ge.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Dn([ge.sprite,ge.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Dn([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Dn([ge.lights,ge.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};On.physical={uniforms:Dn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var zo={r:0,b:0,g:0};function zx(n,e,t,i,s,r,a){let o=new ot(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let T=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),T=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Nl)?(h===void 0&&(h=new Ft(new Ra(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:kr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,(u!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new Vi(2,2),new ci({name:"BackgroundMaterial",uniforms:kr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,d){p.getRGB(zo,Sp(n)),i.buffers.color.setClear(zo.r,zo.g,zo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function Hx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(F,W,B,ne,Q){let X=!1;if(a){let ee=x(ne,B,W);c!==ee&&(c=ee,m(c.object)),X=d(F,ne,B,Q),X&&T(F,ne,B,Q)}else{let ee=W.wireframe===!0;(c.geometry!==ne.id||c.program!==B.id||c.wireframe!==ee)&&(c.geometry=ne.id,c.program=B.id,c.wireframe=ee,X=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,V(F,W,B,ne),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,W,B){let ne=B.wireframe===!0,Q=o[F.id];Q===void 0&&(Q={},o[F.id]=Q);let X=Q[W.id];X===void 0&&(X={},Q[W.id]=X);let ee=X[ne];return ee===void 0&&(ee=p(f()),X[ne]=ee),ee}function p(F){let W=[],B=[],ne=[];for(let Q=0;Q<s;Q++)W[Q]=0,B[Q]=0,ne[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:B,attributeDivisors:ne,object:F,attributes:{},index:null}}function d(F,W,B,ne){let Q=c.attributes,X=W.attributes,ee=0,q=B.getAttributes();for(let he in q)if(q[he].location>=0){let j=Q[he],se=X[he];if(se===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ne}function T(F,W,B,ne){let Q={},X=W.attributes,ee=0,q=B.getAttributes();for(let he in q)if(q[he].location>=0){let j=X[he];j===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let se={};se.attribute=j,j&&j.data&&(se.data=j.data),Q[he]=se,ee++}c.attributes=Q,c.attributesNum=ee,c.index=ne}function v(){let F=c.newAttributes;for(let W=0,B=F.length;W<B;W++)F[W]=0}function R(F){P(F,0)}function P(F,W){let B=c.newAttributes,ne=c.enabledAttributes,Q=c.attributeDivisors;B[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),Q[F]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,W),Q[F]=W)}function I(){let F=c.newAttributes,W=c.enabledAttributes;for(let B=0,ne=W.length;B<ne;B++)W[B]!==F[B]&&(n.disableVertexAttribArray(B),W[B]=0)}function D(F,W,B,ne,Q,X,ee){ee===!0?n.vertexAttribIPointer(F,W,B,Q,X):n.vertexAttribPointer(F,W,B,ne,Q,X)}function V(F,W,B,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Q=ne.attributes,X=B.getAttributes(),ee=W.defaultAttributeValues;for(let q in X){let he=X[q];if(he.location>=0){let z=Q[q];if(z===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){let j=z.normalized,se=z.itemSize,re=t.get(z);if(re===void 0)continue;let le=re.buffer,Ce=re.type,He=re.bytesPerElement,Ve=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||z.gpuType===dp);if(z.isInterleavedBufferAttribute){let gt=z.data,$=gt.stride,un=z.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<he.locationSize;Xe++)P(he.location+Xe,gt.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<he.locationSize;Xe++)R(he.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<he.locationSize;Xe++)D(he.location+Xe,se/he.locationSize,Ce,j,$*He,(un+se/he.locationSize*Xe)*He,Ve)}else{if(z.isInstancedBufferAttribute){for(let gt=0;gt<he.locationSize;gt++)P(he.location+gt,z.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let gt=0;gt<he.locationSize;gt++)R(he.location+gt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let gt=0;gt<he.locationSize;gt++)D(he.location+gt,se/he.locationSize,Ce,j,se*He,se/he.locationSize*gt*He,Ve)}}else if(ee!==void 0){let j=ee[q];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(he.location,j);break;case 3:n.vertexAttrib3fv(he.location,j);break;case 4:n.vertexAttrib4fv(he.location,j);break;default:n.vertexAttrib1fv(he.location,j)}}}}I()}function M(){ae();for(let F in o){let W=o[F];for(let B in W){let ne=W[B];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete W[B]}delete o[F]}}function C(F){if(o[F.id]===void 0)return;let W=o[F.id];for(let B in W){let ne=W[B];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete W[B]}delete o[F.id]}function G(F){for(let W in o){let B=o[W];if(B[F.id]===void 0)continue;let ne=B[F.id];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete B[F.id]}}function ae(){fe(),h=!0,c!==l&&(c=l,m(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ae,resetDefaultState:fe,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:R,disableUnusedAttributes:I}}function Vx(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Gx(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,R=a||e.has("OES_texture_float"),P=v&&R,I=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:v,floatFragmentTextures:R,floatVertexTextures:P,maxSamples:I}}function Wx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Fi,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,v=T*4,R=d.clippingState||null;l.value=R,R=h(g,f,v,m);for(let P=0;P!==v;++P)R[P]=t[P];d.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,R=m;v!==x;++v,R+=4)a.copy(u[v]).applyMatrix4(T,o),a.normal.toArray(p,R),p[R+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Xx(n){let e=new WeakMap;function t(a,o){return o===yh?a.mapping=Dr:o===_h&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===yh||o===_h)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Th(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var zr=class extends cl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rr=4,Sf=[.125,.215,.35,.446,.526,.582],Bs=20,sh=new zr,wf=new ot,rh=null,ah=0,oh=0,Os=(1+Math.sqrt(5))/2,wr=1/Os,Ef=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Os,wr),new U(0,Os,-wr),new U(wr,0,Os),new U(-wr,0,Os),new U(Os,wr,0),new U(-Os,wr,0)],ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,ah,oh),e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ta,format:Kn,colorSpace:zi,depthBuffer:!1},s=Tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=$x(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,i,s){let o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(wf),h.toneMapping=ls,h.autoClear=!1;let m=new Qt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Ft(new Ra,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(wf),x=!0);for(let d=0;d<6;d++){let T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let v=this._cubeSize;Ho(s,T*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Dr||e.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ho(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ef[(s-1)%Ef.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Bs;p>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bs}`);let d=[],T=0;for(let D=0;D<Bs;++D){let V=D/x,M=Math.exp(-V*V/2);d.push(M),D===0?T+=M:D<p&&(T+=2*M)}for(let D=0;D<d.length;D++)d[D]=d[D]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let R=this._sizeLods[s],P=3*R*(s>v-Rr?s-v+Rr:0),I=4*(this._cubeSize-R);Ho(t,P,I,3*R,2*R),l.setRenderTarget(t),l.render(u,sh)}};function qx(n){let e=[],t=[],i=[],s=n,r=n-Rr+1+Sf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Rr?l=Sf[a-n+Rr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,T=new Float32Array(x*g*m),v=new Float32Array(p*g*m),R=new Float32Array(d*g*m);for(let I=0;I<m;I++){let D=I%3*2/3-1,V=I>2?0:-1,M=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];T.set(M,x*g*I),v.set(f,p*g*I);let C=[I,I,I,I,I,I];R.set(C,d*g*I)}let P=new Vn;P.setAttribute("position",new qn(T,x)),P.setAttribute("uv",new qn(v,p)),P.setAttribute("faceIndex",new qn(R,d)),e.push(P),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tf(n,e,t){let i=new Hi(n,e,t);return i.texture.mapping=Nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ho(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $x(n,e,t){let i=new Float32Array(Bs),s=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Af(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:os,depthTest:!1,depthWrite:!1})}function Cf(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function Yx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===yh||l===_h,h=l===Dr||l===Ur;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ul(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ul(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zx(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let T=m.array;x=m.version;for(let v=0,R=T.length;v<R;v+=3){let P=T[v+0],I=T[v+1],D=T[v+2];f.push(P,I,I,D,D,P)}}else if(g!==void 0){let T=g.array;x=g.version;for(let v=0,R=T.length/3-1;v<R;v+=3){let P=v+0,I=v+1,D=v+2;f.push(P,I,I,D,D,P)}}else return;let p=new(bp(f)?ll:ol)(f,1);p.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Jx(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*l,x),t.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let d=0;for(let T=0;T<x;T++)d+=g[T];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Kx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qx(n,e){return n[0]-e[0]}function ev(n,e){return Math.abs(e[1])-Math.abs(n[1])}function tv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let F=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();let T=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],V=0;T===!0&&(V=1),v===!0&&(V=2),R===!0&&(V=3);let M=h.attributes.position.count*V,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let G=new Float32Array(M*C*4*g),ae=new rl(G,M,C,g);ae.type=Bi,ae.needsUpdate=!0;let fe=V*4;for(let W=0;W<g;W++){let B=P[W],ne=I[W],Q=D[W],X=M*C*4*W;for(let ee=0;ee<B.count;ee++){let q=ee*fe;T===!0&&(a.fromBufferAttribute(B,ee),G[X+q+0]=a.x,G[X+q+1]=a.y,G[X+q+2]=a.z,G[X+q+3]=0),v===!0&&(a.fromBufferAttribute(ne,ee),G[X+q+4]=a.x,G[X+q+5]=a.y,G[X+q+6]=a.z,G[X+q+7]=0),R===!0&&(a.fromBufferAttribute(Q,ee),G[X+q+8]=a.x,G[X+q+9]=a.y,G[X+q+10]=a.z,G[X+q+11]=Q.itemSize===4?a.w:1)}}x={count:g,texture:ae,size:new et(M,C)},r.set(h,x),h.addEventListener("dispose",F)}let p=0;for(let T=0;T<f.length;T++)p+=f[T];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let R=g[v];R[0]=v,R[1]=f[v]}g.sort(ev);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Qx);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let R=o[v],P=R[0],I=R[1];P!==Number.MAX_SAFE_INTEGER&&I?(x&&h.getAttribute("morphTarget"+v)!==x[P]&&h.setAttribute("morphTarget"+v,x[P]),p&&h.getAttribute("morphNormal"+v)!==p[P]&&h.setAttribute("morphNormal"+v,p[P]),s[v]=I,d+=I):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let T=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",T),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function nv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var dl=class extends Hn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Hs,h!==Hs&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=as),i===void 0&&h===Or&&(i=zs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ep=new Hn,Tp=new dl(1,1);Tp.compareFunction=vp;var Ap=new rl,Cp=new wh,Rp=new hl,Rf=[],Lf=[],Pf=new Float32Array(16),If=new Float32Array(9),Nf=new Float32Array(4);function $r(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Rf[s];if(r===void 0&&(r=new Float32Array(s),Rf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ol(n,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function ov(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Nf.set(i),n.uniformMatrix2fv(this.addr,!1,Nf),rn(t,i)}}function lv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;If.set(i),n.uniformMatrix3fv(this.addr,!1,If),rn(t,i)}}function cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),rn(t,i)}}function hv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function _v(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Tp:Ep;t.setTexture2D(e||r,s)}function xv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function vv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rp,s)}function bv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ap,s)}function Mv(n){switch(n){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return av;case 35674:return ov;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return vv;case 36289:case 36303:case 36311:case 36292:return bv}}function Sv(n,e){n.uniform1fv(this.addr,e)}function wv(n,e){let t=$r(e,this.size,2);n.uniform2fv(this.addr,t)}function Ev(n,e){let t=$r(e,this.size,3);n.uniform3fv(this.addr,t)}function Tv(n,e){let t=$r(e,this.size,4);n.uniform4fv(this.addr,t)}function Av(n,e){let t=$r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cv(n,e){let t=$r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rv(n,e){let t=$r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lv(n,e){n.uniform1iv(this.addr,e)}function Pv(n,e){n.uniform2iv(this.addr,e)}function Iv(n,e){n.uniform3iv(this.addr,e)}function Nv(n,e){n.uniform4iv(this.addr,e)}function Dv(n,e){n.uniform1uiv(this.addr,e)}function Uv(n,e){n.uniform2uiv(this.addr,e)}function Ov(n,e){n.uniform3uiv(this.addr,e)}function Fv(n,e){n.uniform4uiv(this.addr,e)}function Bv(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Ep,r[a])}function kv(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Cp,r[a])}function zv(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Rp,r[a])}function Hv(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ap,r[a])}function Vv(n){switch(n){case 5126:return Sv;case 35664:return wv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return Cv;case 35676:return Rv;case 5124:case 35670:return Lv;case 35667:case 35671:return Pv;case 35668:case 35672:return Iv;case 35669:case 35673:return Nv;case 5125:return Dv;case 36294:return Uv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}var Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},Ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vv(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},lh=/(\w+)(\])?(\[|\.)?/g;function Df(n,e){n.seq.push(e),n.map[e.id]=e}function Gv(n,e,t){let i=n.name,s=i.length;for(lh.lastIndex=0;;){let r=lh.exec(i),a=lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Df(t,c===void 0?new Ah(o,n,e):new Ch(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Rh(o),Df(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Gv(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Wv=37297,Xv=0;function qv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function $v(n){let e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(n),i;switch(e===t?i="":e===el&&t===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&t===el&&(i="LinearSRGBToLinearDisplayP3"),n){case zi:case Dl:return[i,"LinearTransferOETF"];case Gt:case Kh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Of(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+qv(n.getShaderSource(e),a)}else return s}function Yv(n,e){let t=$v(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jv(n,e){let t;switch(e){case Qg:t="Linear";break;case e0:t="Reinhard";break;case t0:t="OptimizedCineon";break;case n0:t="ACESFilmic";break;case s0:t="AgX";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Lr).join(`
`)}function Kv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function Ff(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(n){return n.replace(eb,nb)}var tb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nb(n,e){let t=dt[e];if(t===void 0){let i=tb.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lh(t)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(n){return n.replace(ib,sb)}function sb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function ab(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function lb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case Jg:e="ENVMAP_BLENDING_MIX";break;case Kg:e="ENVMAP_BLENDING_ADD";break}return e}function cb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rb(t),c=ab(t),h=ob(t),u=lb(t),f=cb(t),m=t.isWebGL2?"":Zv(t),g=Jv(t),x=Kv(r),p=s.createProgram(),d,T,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),d.length>0&&(d+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Lr).join(`
`),T.length>0&&(T+=`
`)):(d=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),T=[m,zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?dt.tonemapping_pars_fragment:"",t.toneMapping!==ls?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Lh(a),a=Ff(a,t),a=Bf(a,t),o=Lh(o),o=Ff(o,t),o=Bf(o,t),a=kf(a),o=kf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let R=v+d+a,P=v+T+o,I=Uf(s,s.VERTEX_SHADER,R),D=Uf(s,s.FRAGMENT_SHADER,P);s.attachShader(p,I),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function V(ae){if(n.debug.checkShaderErrors){let fe=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(D).trim(),B=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,I,D);else{let Q=Of(s,I,"vertex"),X=Of(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+fe+`
`+Q+`
`+X)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(F===""||W==="")&&(ne=!1);ne&&(ae.diagnostics={runnable:B,programLog:fe,vertexShader:{log:F,prefix:d},fragmentShader:{log:W,prefix:T}})}s.deleteShader(I),s.deleteShader(D),M=new Nr(s,p),C=Qv(s,p)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let C;this.getAttributes=function(){return C===void 0&&V(this),C};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(p,Wv)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=D,this}var ub=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ih(e),t.set(e,i)),i}},Ih=class{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}};function db(n,e,t,i,s,r,a){let o=new Ca,l=new Ph,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function p(M,C,G,ae,fe){let F=ae.fog,W=fe.geometry,B=M.isMeshStandardMaterial?ae.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),Q=ne&&ne.mapping===Nl?ne.image.height:null,X=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,q=ee!==void 0?ee.length:0,he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let z,j,se,re;if(X){let on=On[X];z=on.vertexShader,j=on.fragmentShader}else z=M.vertexShader,j=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);let le=n.getRenderTarget(),Ce=fe.isInstancedMesh===!0,He=fe.isBatchedMesh===!0,Ve=!!M.map,gt=!!M.matcap,$=!!ne,un=!!M.aoMap,Xe=!!M.lightMap,nt=!!M.bumpMap,Ue=!!M.normalMap,Lt=!!M.displacementMap,ct=!!M.emissiveMap,L=!!M.metalnessMap,w=!!M.roughnessMap,Z=M.anisotropy>0,pe=M.clearcoat>0,ue=M.iridescence>0,me=M.sheen>0,Be=M.transmission>0,Se=Z&&!!M.anisotropyMap,Pe=pe&&!!M.clearcoatMap,$e=pe&&!!M.clearcoatNormalMap,ht=pe&&!!M.clearcoatRoughnessMap,de=ue&&!!M.iridescenceMap,Mt=ue&&!!M.iridescenceThicknessMap,ft=me&&!!M.sheenColorMap,Qe=me&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,Ie=!!M.specularColorMap,rt=!!M.specularIntensityMap,bt=Be&&!!M.transmissionMap,Dt=Be&&!!M.thicknessMap,ut=!!M.gradientMap,_e=!!M.alphaMap,O=M.alphaTest>0,ve=!!M.alphaHash,be=!!M.extensions,Ze=!!W.attributes.uv1,qe=!!W.attributes.uv2,wt=!!W.attributes.uv3,Tt=ls;return M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:j,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:He,instancing:Ce,instancingColor:Ce&&fe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zi,map:Ve,matcap:gt,envMap:$,envMapMode:$&&ne.mapping,envMapCubeUVHeight:Q,aoMap:un,lightMap:Xe,bumpMap:nt,normalMap:Ue,displacementMap:f&&Lt,emissiveMap:ct,normalMapObjectSpace:Ue&&M.normalMapType===_0,normalMapTangentSpace:Ue&&M.normalMapType===Jh,metalnessMap:L,roughnessMap:w,anisotropy:Z,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Pe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ht,iridescence:ue,iridescenceMap:de,iridescenceThicknessMap:Mt,sheen:me,sheenColorMap:ft,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:rt,transmission:Be,transmissionMap:bt,thicknessMap:Dt,gradientMap:ut,opaque:M.transparent===!1&&M.blending===Pr,alphaMap:_e,alphaTest:O,alphaHash:ve,combine:M.combine,mapUv:Ve&&x(M.map.channel),aoMapUv:un&&x(M.aoMap.channel),lightMapUv:Xe&&x(M.lightMap.channel),bumpMapUv:nt&&x(M.bumpMap.channel),normalMapUv:Ue&&x(M.normalMap.channel),displacementMapUv:Lt&&x(M.displacementMap.channel),emissiveMapUv:ct&&x(M.emissiveMap.channel),metalnessMapUv:L&&x(M.metalnessMap.channel),roughnessMapUv:w&&x(M.roughnessMap.channel),anisotropyMapUv:Se&&x(M.anisotropyMap.channel),clearcoatMapUv:Pe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ge&&x(M.specularMap.channel),specularColorMapUv:Ie&&x(M.specularColorMap.channel),specularIntensityMapUv:rt&&x(M.specularIntensityMap.channel),transmissionMapUv:bt&&x(M.transmissionMap.channel),thicknessMapUv:Dt&&x(M.thicknessMap.channel),alphaMapUv:_e&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ue||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:wt,pointsUvs:fe.isPoints===!0&&!!W.attributes.uv&&(Ve||_e),fog:!!F,useFog:M.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:fe.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&Rt.getTransfer(M.map.colorSpace)===Ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fn,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:be&&M.extensions.derivatives===!0,extensionFragDepth:be&&M.extensions.fragDepth===!0,extensionDrawBuffers:be&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(let G in M.defines)C.push(G),C.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(T(C,M),v(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function T(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function v(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),M.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function R(M){let C=g[M.type],G;if(C){let ae=On[C];G=Ul.clone(ae.uniforms)}else G=M.uniforms;return G}function P(M,C){let G;for(let ae=0,fe=c.length;ae<fe;ae++){let F=c[ae];if(F.cacheKey===C){G=F,++G.usedTimes;break}}return G===void 0&&(G=new hb(n,C,M,r),c.push(G)),G}function I(M){if(--M.usedTimes===0){let C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function D(M){l.remove(M)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:R,acquireProgram:P,releaseProgram:I,releaseShaderCache:D,programs:c,dispose:V}}function fb(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function pb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,m,g,x,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function o(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||pb),i.length>1&&i.sort(f||Hf),s.length>1&&s.sort(f||Hf)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function mb(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Vf,n.set(i,[a])):s>=r.length?(a=new Vf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function yb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var _b=0;function xb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vb(n,e){let t=new gb,i=yb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new lt,o=new lt;function l(h,u){let f=0,m=0,g=0;for(let ae=0;ae<9;ae++)s.probe[ae].set(0,0,0);let x=0,p=0,d=0,T=0,v=0,R=0,P=0,I=0,D=0,V=0,M=0;h.sort(xb);let C=u===!0?Math.PI:1;for(let ae=0,fe=h.length;ae<fe;ae++){let F=h[ae],W=F.color,B=F.intensity,ne=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=W.r*B*C,m+=W.g*B*C,g+=W.b*B*C;else if(F.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(F.sh.coefficients[X],B);M++}else if(F.isDirectionalLight){let X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){let ee=F.shadow,q=i.get(F);q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,s.directionalShadow[x]=q,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=F.shadow.matrix,R++}s.directional[x]=X,x++}else if(F.isSpotLight){let X=t.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(W).multiplyScalar(B*C),X.distance=ne,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,s.spot[d]=X;let ee=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,ee.updateMatrices(F),F.castShadow&&V++),s.spotLightMatrix[d]=ee.matrix,F.castShadow){let q=i.get(F);q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,s.spotShadow[d]=q,s.spotShadowMap[d]=Q,I++}d++}else if(F.isRectAreaLight){let X=t.get(F);X.color.copy(W).multiplyScalar(B),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),s.rectArea[T]=X,T++}else if(F.isPointLight){let X=t.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity*C),X.distance=F.distance,X.decay=F.decay,F.castShadow){let ee=F.shadow,q=i.get(F);q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,s.pointShadow[p]=q,s.pointShadowMap[p]=Q,s.pointShadowMatrix[p]=F.shadow.matrix,P++}s.point[p]=X,p++}else if(F.isHemisphereLight){let X=t.get(F);X.skyColor.copy(F.color).multiplyScalar(B*C),X.groundColor.copy(F.groundColor).multiplyScalar(B*C),s.hemi[v]=X,v++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let G=s.hash;(G.directionalLength!==x||G.pointLength!==p||G.spotLength!==d||G.rectAreaLength!==T||G.hemiLength!==v||G.numDirectionalShadows!==R||G.numPointShadows!==P||G.numSpotShadows!==I||G.numSpotMaps!==D||G.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=T,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=I+D-V,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=M,G.directionalLength=x,G.pointLength=p,G.spotLength=d,G.rectAreaLength=T,G.hemiLength=v,G.numDirectionalShadows=R,G.numPointShadows=P,G.numSpotShadows=I,G.numSpotMaps=D,G.numLightProbes=M,s.version=_b++)}function c(h,u){let f=0,m=0,g=0,x=0,p=0,d=u.matrixWorldInverse;for(let T=0,v=h.length;T<v;T++){let R=h[T];if(R.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),f++}else if(R.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(d),g++}else if(R.isRectAreaLight){let P=s.rectArea[x];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(R.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(R.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(d),m++}else if(R.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Gf(n,e){let t=new vb(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function bb(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Gf(n,e),t.set(r,[l])):a>=o.length?(l=new Gf(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Nh=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dh=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
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
}`;function wb(n,e,t){let i=new La,s=new et,r=new et,a=new vt,o=new Nh({depthPacking:y0}),l=new Dh,c={},h=t.maxTextureSize,u={[zn]:hn,[hn]:zn,[Fn]:Fn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Mb,fragmentShader:Sb}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vn;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ft(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let d=this.type;this.render=function(I,D,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let M=n.getRenderTarget(),C=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),ae=n.state;ae.setBlending(os),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);let fe=d!==Oi&&this.type===Oi,F=d===Oi&&this.type!==Oi;for(let W=0,B=I.length;W<B;W++){let ne=I[W],Q=ne.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let X=Q.getFrameExtents();if(s.multiply(X),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Q.mapSize.y=r.y)),Q.map===null||fe===!0||F===!0){let q=this.type!==Oi?{minFilter:fn,magFilter:fn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Hi(s.x,s.y,q),Q.map.texture.name=ne.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let ee=Q.getViewportCount();for(let q=0;q<ee;q++){let he=Q.getViewport(q);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),ae.viewport(a),Q.updateMatrices(ne,q),i=Q.getFrustum(),R(D,V,Q.camera,ne,this.type)}Q.isPointLightShadow!==!0&&this.type===Oi&&T(Q,V),Q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(M,C,G)};function T(I,D){let V=e.update(x);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Hi(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,V,f,x,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,V,m,x,null)}function v(I,D,V,M){let C=null,G=V.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=V.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ae=C.uuid,fe=D.uuid,F=c[ae];F===void 0&&(F={},c[ae]=F);let W=F[fe];W===void 0&&(W=C.clone(),F[fe]=W,D.addEventListener("dispose",P)),C=W}if(C.visible=D.visible,C.wireframe=D.wireframe,M===Oi?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let ae=n.properties.get(C);ae.light=V}return C}function R(I,D,V,M,C){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Oi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,I.matrixWorld);let fe=e.update(I),F=I.material;if(Array.isArray(F)){let W=fe.groups;for(let B=0,ne=W.length;B<ne;B++){let Q=W[B],X=F[Q.materialIndex];if(X&&X.visible){let ee=v(I,X,M,C);I.onBeforeShadow(n,I,D,V,fe,ee,Q),n.renderBufferDirect(V,null,fe,ee,I,Q),I.onAfterShadow(n,I,D,V,fe,ee,Q)}}}else if(F.visible){let W=v(I,F,M,C);I.onBeforeShadow(n,I,D,V,fe,W,null),n.renderBufferDirect(V,null,fe,W,I,null),I.onAfterShadow(n,I,D,V,fe,W,null)}}let ae=I.children;for(let fe=0,F=ae.length;fe<F;fe++)R(ae[fe],D,V,M,C)}function P(I){I.target.removeEventListener("dispose",P);for(let V in c){let M=c[V],C=I.target.uuid;C in M&&(M[C].dispose(),delete M[C])}}}function Eb(n,e,t){let i=t.isWebGL2;function s(){let O=!1,ve=new vt,be=null,Ze=new vt(0,0,0,0);return{setMask:function(qe){be!==qe&&!O&&(n.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){O=qe},setClear:function(qe,wt,Tt,St,on){on===!0&&(qe*=St,wt*=St,Tt*=St),ve.set(qe,wt,Tt,St),Ze.equals(ve)===!1&&(n.clearColor(qe,wt,Tt,St),Ze.copy(ve))},reset:function(){O=!1,be=null,Ze.set(-1,0,0,0)}}}function r(){let O=!1,ve=null,be=null,Ze=null;return{setTest:function(qe){qe?He(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(qe){ve!==qe&&!O&&(n.depthMask(qe),ve=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case Wg:n.depthFunc(n.NEVER);break;case Xg:n.depthFunc(n.ALWAYS);break;case qg:n.depthFunc(n.LESS);break;case jo:n.depthFunc(n.LEQUAL);break;case $g:n.depthFunc(n.EQUAL);break;case Yg:n.depthFunc(n.GEQUAL);break;case jg:n.depthFunc(n.GREATER);break;case Zg:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=qe}},setLocked:function(qe){O=qe},setClear:function(qe){Ze!==qe&&(n.clearDepth(qe),Ze=qe)},reset:function(){O=!1,ve=null,be=null,Ze=null}}}function a(){let O=!1,ve=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,on=null;return{setTest:function(At){O||(At?He(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(At){ve!==At&&!O&&(n.stencilMask(At),ve=At)},setFunc:function(At,dn,jn){(be!==At||Ze!==dn||qe!==jn)&&(n.stencilFunc(At,dn,jn),be=At,Ze=dn,qe=jn)},setOp:function(At,dn,jn){(wt!==At||Tt!==dn||St!==jn)&&(n.stencilOp(At,dn,jn),wt=At,Tt=dn,St=jn)},setLocked:function(At){O=At},setClear:function(At){on!==At&&(n.clearStencil(At),on=At)},reset:function(){O=!1,ve=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,on=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,d=!1,T=null,v=null,R=null,P=null,I=null,D=null,V=null,M=new ot(0,0,0),C=0,G=!1,ae=null,fe=null,F=null,W=null,B=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,X=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=X>=1):ee.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=X>=2);let q=null,he={},z=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),se=new vt().fromArray(z),re=new vt().fromArray(j);function le(O,ve,be,Ze){let qe=new Uint8Array(4),wt=n.createTexture();n.bindTexture(O,wt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<be;Tt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Ze,0,n.RGBA,n.UNSIGNED_BYTE,qe):n.texImage2D(ve+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qe);return wt}let Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(jo),ct(!1),L(bd),He(n.CULL_FACE),Ue(os);function He(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Ve(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function gt(O,ve){return m[O]!==ve?(n.bindFramebuffer(O,ve),m[O]=ve,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function $(O,ve){let be=x,Ze=!1;if(O)if(be=g.get(ve),be===void 0&&(be=[],g.set(ve,be)),O.isWebGLMultipleRenderTargets){let qe=O.texture;if(be.length!==qe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Tt=qe.length;wt<Tt;wt++)be[wt]=n.COLOR_ATTACHMENT0+wt;be.length=qe.length,Ze=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,Ze=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,Ze=!0);Ze&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function un(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Xe={[Fs]:n.FUNC_ADD,[Rg]:n.FUNC_SUBTRACT,[Lg]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[Ed]=n.MIN,Xe[Td]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[Ed]=O.MIN_EXT,Xe[Td]=O.MAX_EXT)}let nt={[Pg]:n.ZERO,[Ig]:n.ONE,[Ng]:n.SRC_COLOR,[mh]:n.SRC_ALPHA,[kg]:n.SRC_ALPHA_SATURATE,[Fg]:n.DST_COLOR,[Ug]:n.DST_ALPHA,[Dg]:n.ONE_MINUS_SRC_COLOR,[gh]:n.ONE_MINUS_SRC_ALPHA,[Bg]:n.ONE_MINUS_DST_COLOR,[Og]:n.ONE_MINUS_DST_ALPHA,[zg]:n.CONSTANT_COLOR,[Hg]:n.ONE_MINUS_CONSTANT_COLOR,[Vg]:n.CONSTANT_ALPHA,[Gg]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(O,ve,be,Ze,qe,wt,Tt,St,on,At){if(O===os){d===!0&&(Ve(n.BLEND),d=!1);return}if(d===!1&&(He(n.BLEND),d=!0),O!==Cg){if(O!==T||At!==G){if((v!==Fs||I!==Fs)&&(n.blendEquation(n.FUNC_ADD),v=Fs,I=Fs),At)switch(O){case Pr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFunc(n.ONE,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Pr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}R=null,P=null,D=null,V=null,M.set(0,0,0),C=0,T=O,G=At}return}qe=qe||ve,wt=wt||be,Tt=Tt||Ze,(ve!==v||qe!==I)&&(n.blendEquationSeparate(Xe[ve],Xe[qe]),v=ve,I=qe),(be!==R||Ze!==P||wt!==D||Tt!==V)&&(n.blendFuncSeparate(nt[be],nt[Ze],nt[wt],nt[Tt]),R=be,P=Ze,D=wt,V=Tt),(St.equals(M)===!1||on!==C)&&(n.blendColor(St.r,St.g,St.b,on),M.copy(St),C=on),T=O,G=!1}function Lt(O,ve){O.side===Fn?Ve(n.CULL_FACE):He(n.CULL_FACE);let be=O.side===hn;ve&&(be=!be),ct(be),O.blending===Pr&&O.transparent===!1?Ue(os):Ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let Ze=O.stencilWrite;c.setTest(Ze),Ze&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){ae!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ae=O)}function L(O){O!==Eg?(He(n.CULL_FACE),O!==fe&&(O===bd?n.cullFace(n.BACK):O===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),fe=O}function w(O){O!==F&&(Q&&n.lineWidth(O),F=O)}function Z(O,ve,be){O?(He(n.POLYGON_OFFSET_FILL),(W!==ve||B!==be)&&(n.polygonOffset(ve,be),W=ve,B=be)):Ve(n.POLYGON_OFFSET_FILL)}function pe(O){O?He(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function ue(O){O===void 0&&(O=n.TEXTURE0+ne-1),q!==O&&(n.activeTexture(O),q=O)}function me(O,ve,be){be===void 0&&(q===null?be=n.TEXTURE0+ne-1:be=q);let Ze=he[be];Ze===void 0&&(Ze={type:void 0,texture:void 0},he[be]=Ze),(Ze.type!==O||Ze.texture!==ve)&&(q!==be&&(n.activeTexture(be),q=be),n.bindTexture(O,ve||Ce[O]),Ze.type=O,Ze.texture=ve)}function Be(){let O=he[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function bt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Dt(O,ve){let be=u.get(ve);be===void 0&&(be=new WeakMap,u.set(ve,be));let Ze=be.get(O);Ze===void 0&&(Ze=n.getUniformBlockIndex(ve,O.name),be.set(O,Ze))}function ut(O,ve){let Ze=u.get(ve).get(O);h.get(ve)!==Ze&&(n.uniformBlockBinding(ve,Ze,O.__bindingPointIndex),h.set(ve,Ze))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},q=null,he={},m={},g=new WeakMap,x=[],p=null,d=!1,T=null,v=null,R=null,P=null,I=null,D=null,V=null,M=new ot(0,0,0),C=0,G=!1,ae=null,fe=null,F=null,W=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:He,disable:Ve,bindFramebuffer:gt,drawBuffers:$,useProgram:un,setBlending:Ue,setMaterial:Lt,setFlipSided:ct,setCullFace:L,setLineWidth:w,setPolygonOffset:Z,setScissorTest:pe,activeTexture:ue,bindTexture:me,unbindTexture:Be,compressedTexImage2D:Se,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:Qe,texSubImage2D:$e,texSubImage3D:ht,compressedTexSubImage2D:de,compressedTexSubImage3D:Mt,scissor:rt,viewport:bt,reset:_e}}function Tb(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return m?new OffscreenCanvas(L,w):Aa("canvas")}function x(L,w,Z,pe){let ue=1;if((L.width>pe||L.height>pe)&&(ue=pe/Math.max(L.width,L.height)),ue<1||w===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let me=w?nl:Math.floor,Be=me(ue*L.width),Se=me(ue*L.height);u===void 0&&(u=g(Be,Se));let Pe=Z?g(Be,Se):u;return Pe.width=Be,Pe.height=Se,Pe.getContext("2d").drawImage(L,0,0,Be,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Be+"x"+Se+")."),Pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function p(L){return Mh(L.width)&&Mh(L.height)}function d(L){return o?!1:L.wrapS!==An||L.wrapT!==An||L.minFilter!==fn&&L.minFilter!==Un}function T(L,w){return L.generateMipmaps&&w&&L.minFilter!==fn&&L.minFilter!==Un}function v(L){n.generateMipmap(L)}function R(L,w,Z,pe,ue=!1){if(o===!1)return w;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=w;if(w===n.RED&&(Z===n.FLOAT&&(me=n.R32F),Z===n.HALF_FLOAT&&(me=n.R16F),Z===n.UNSIGNED_BYTE&&(me=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(me=n.R8UI),Z===n.UNSIGNED_SHORT&&(me=n.R16UI),Z===n.UNSIGNED_INT&&(me=n.R32UI),Z===n.BYTE&&(me=n.R8I),Z===n.SHORT&&(me=n.R16I),Z===n.INT&&(me=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(me=n.RG32F),Z===n.HALF_FLOAT&&(me=n.RG16F),Z===n.UNSIGNED_BYTE&&(me=n.RG8)),w===n.RGBA){let Be=ue?Ko:Rt.getTransfer(pe);Z===n.FLOAT&&(me=n.RGBA32F),Z===n.HALF_FLOAT&&(me=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(me=Be===Ot?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(L,w,Z){return T(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==Un?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){return L===fn||L===Cd||L===Dc?n.NEAREST:n.LINEAR}function D(L){let w=L.target;w.removeEventListener("dispose",D),M(w),w.isVideoTexture&&h.delete(w)}function V(L){let w=L.target;w.removeEventListener("dispose",V),G(w)}function M(L){let w=i.get(L);if(w.__webglInit===void 0)return;let Z=L.source,pe=f.get(Z);if(pe){let ue=pe[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&C(L),Object.keys(pe).length===0&&f.delete(Z)}i.remove(L)}function C(L){let w=i.get(L);n.deleteTexture(w.__webglTexture);let Z=L.source,pe=f.get(Z);delete pe[w.__cacheKey],a.memory.textures--}function G(L){let w=L.texture,Z=i.get(L),pe=i.get(w);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Z.__webglFramebuffer[ue]))for(let me=0;me<Z.__webglFramebuffer[ue].length;me++)n.deleteFramebuffer(Z.__webglFramebuffer[ue][me]);else n.deleteFramebuffer(Z.__webglFramebuffer[ue]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[ue])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ue=0;ue<Z.__webglFramebuffer.length;ue++)n.deleteFramebuffer(Z.__webglFramebuffer[ue]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ue=0;ue<Z.__webglColorRenderbuffer.length;ue++)Z.__webglColorRenderbuffer[ue]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[ue]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ue=0,me=w.length;ue<me;ue++){let Be=i.get(w[ue]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),a.memory.textures--),i.remove(w[ue])}i.remove(w),i.remove(L)}let ae=0;function fe(){ae=0}function F(){let L=ae;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),ae+=1,L}function W(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function B(L,w){let Z=i.get(L);if(L.isVideoTexture&&Lt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){let pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,L,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function ne(L,w){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){se(Z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function Q(L,w){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){se(Z,L,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function X(L,w){let Z=i.get(L);if(L.version>0&&Z.__version!==L.version){re(Z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}let ee={[hs]:n.REPEAT,[An]:n.CLAMP_TO_EDGE,[xh]:n.MIRRORED_REPEAT},q={[fn]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Dc]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[a0]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},he={[x0]:n.NEVER,[E0]:n.ALWAYS,[v0]:n.LESS,[vp]:n.LEQUAL,[b0]:n.EQUAL,[w0]:n.GEQUAL,[M0]:n.GREATER,[S0]:n.NOTEQUAL};function z(L,w,Z){if(Z?(n.texParameteri(L,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ee[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,q[w.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==An||w.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,I(w.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,I(w.minFilter)),w.minFilter!==fn&&w.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===fn||w.minFilter!==Dc&&w.minFilter!==us||w.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ta&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(L,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function j(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",D));let pe=w.source,ue=f.get(pe);ue===void 0&&(ue={},f.set(pe,ue));let me=W(w);if(me!==L.__cacheKey){ue[me]===void 0&&(ue[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ue[me].usedTimes++;let Be=ue[L.__cacheKey];Be!==void 0&&(ue[L.__cacheKey].usedTimes--,Be.usedTimes===0&&C(w)),L.__cacheKey=me,L.__webglTexture=ue[me].texture}return Z}function se(L,w,Z){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);let ue=j(L,w),me=w.source;t.bindTexture(pe,L.__webglTexture,n.TEXTURE0+Z);let Be=i.get(me);if(me.version!==Be.__version||ue===!0){t.activeTexture(n.TEXTURE0+Z);let Se=Rt.getPrimaries(Rt.workingColorSpace),Pe=w.colorSpace===Qn?null:Rt.getPrimaries(w.colorSpace),$e=w.colorSpace===Qn||Se===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ht=d(w)&&p(w.image)===!1,de=x(w.image,ht,!1,s.maxTextureSize);de=ct(w,de);let Mt=p(de)||o,ft=r.convert(w.format,w.colorSpace),Qe=r.convert(w.type),Ge=R(w.internalFormat,ft,Qe,w.colorSpace,w.isVideoTexture);z(pe,w,Mt);let Ie,rt=w.mipmaps,bt=o&&w.isVideoTexture!==!0&&Ge!==_p,Dt=Be.__version===void 0||ue===!0,ut=P(w,de,Mt);if(w.isDepthTexture)Ge=n.DEPTH_COMPONENT,o?w.type===Bi?Ge=n.DEPTH_COMPONENT32F:w.type===as?Ge=n.DEPTH_COMPONENT24:w.type===zs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:w.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Hs&&Ge===n.DEPTH_COMPONENT&&w.type!==Zh&&w.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=as,Qe=r.convert(w.type)),w.format===Or&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,w.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zs,Qe=r.convert(w.type))),Dt&&(bt?t.texStorage2D(n.TEXTURE_2D,1,Ge,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ge,de.width,de.height,0,ft,Qe,null));else if(w.isDataTexture)if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data);w.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,ft,Qe,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,de.width,de.height,0,ft,Qe,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){bt&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,rt[0].width,rt[0].height,de.depth);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],w.format!==Kn?ft!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,de.depth,ft,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,de.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,de.depth,ft,Qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,de.depth,0,ft,Qe,Ie.data)}else{bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],w.format!==Kn?ft!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data)}else if(w.isDataArrayTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ft,Qe,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,ft,Qe,de.data);else if(w.isData3DTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_3D,ut,Ge,de.width,de.height,de.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ft,Qe,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,ft,Qe,de.data);else if(w.isFramebufferTexture){if(Dt)if(bt)t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height);else{let _e=de.width,O=de.height;for(let ve=0;ve<ut;ve++)t.texImage2D(n.TEXTURE_2D,ve,Ge,_e,O,0,ft,Qe,null),_e>>=1,O>>=1}}else if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ft,Qe,Ie):t.texImage2D(n.TEXTURE_2D,_e,Ge,ft,Qe,Ie);w.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,de.width,de.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Qe,de)):t.texImage2D(n.TEXTURE_2D,0,Ge,ft,Qe,de);T(w,Mt)&&v(pe),Be.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function re(L,w,Z){if(w.image.length!==6)return;let pe=j(L,w),ue=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);let me=i.get(ue);if(ue.version!==me.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let Be=Rt.getPrimaries(Rt.workingColorSpace),Se=w.colorSpace===Qn?null:Rt.getPrimaries(w.colorSpace),Pe=w.colorSpace===Qn||Be===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let $e=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,de=[];for(let _e=0;_e<6;_e++)!$e&&!ht?de[_e]=x(w.image[_e],!1,!0,s.maxCubemapSize):de[_e]=ht?w.image[_e].image:w.image[_e],de[_e]=ct(w,de[_e]);let Mt=de[0],ft=p(Mt)||o,Qe=r.convert(w.format,w.colorSpace),Ge=r.convert(w.type),Ie=R(w.internalFormat,Qe,Ge,w.colorSpace),rt=o&&w.isVideoTexture!==!0,bt=me.__version===void 0||pe===!0,Dt=P(w,Mt,ft);z(n.TEXTURE_CUBE_MAP,w,ft);let ut;if($e){rt&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,Mt.width,Mt.height);for(let _e=0;_e<6;_e++){ut=de[_e].mipmaps;for(let O=0;O<ut.length;O++){let ve=ut[O];w.format!==Kn?Qe!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Qe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Qe,Ge,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,ve.width,ve.height,0,Qe,Ge,ve.data)}}}else{ut=w.mipmaps,rt&&bt&&(ut.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,de[0].width,de[0].height));for(let _e=0;_e<6;_e++)if(ht){rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de[_e].width,de[_e].height,Qe,Ge,de[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,de[_e].width,de[_e].height,0,Qe,Ge,de[_e].data);for(let O=0;O<ut.length;O++){let be=ut[O].image[_e].image;rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,be.width,be.height,Qe,Ge,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,be.width,be.height,0,Qe,Ge,be.data)}}else{rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Ge,de[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,Qe,Ge,de[_e]);for(let O=0;O<ut.length;O++){let ve=ut[O];rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Qe,Ge,ve.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,Qe,Ge,ve.image[_e])}}}T(w,ft)&&v(n.TEXTURE_CUBE_MAP),me.__version=ue.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function le(L,w,Z,pe,ue,me){let Be=r.convert(Z.format,Z.colorSpace),Se=r.convert(Z.type),Pe=R(Z.internalFormat,Be,Se,Z.colorSpace);if(!i.get(w).__hasExternalTextures){let ht=Math.max(1,w.width>>me),de=Math.max(1,w.height>>me);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,me,Pe,ht,de,w.depth,0,Be,Se,null):t.texImage2D(ue,me,Pe,ht,de,0,Be,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ue(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ue,i.get(Z).__webglTexture,0,nt(w)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ue,i.get(Z).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(L,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer&&!w.stencilBuffer){let pe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Ue(w)){let ue=w.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Bi?pe=n.DEPTH_COMPONENT32F:ue.type===as&&(pe=n.DEPTH_COMPONENT24));let me=nt(w);Ue(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(w.depthBuffer&&w.stencilBuffer){let pe=nt(w);Z&&Ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,w.width,w.height):Ue(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{let pe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0;ue<pe.length;ue++){let me=pe[ue],Be=r.convert(me.format,me.colorSpace),Se=r.convert(me.type),Pe=R(me.internalFormat,Be,Se,me.colorSpace),$e=nt(w);Z&&Ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,w.width,w.height):Ue(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);let pe=i.get(w.depthTexture).__webglTexture,ue=nt(w);if(w.depthTexture.format===Hs)Ue(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Or)Ue(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ve(L){let w=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");He(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ce(w.__webglDepthbuffer[pe],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ce(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(L,w,Z){let pe=i.get(L);w!==void 0&&le(pe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ve(L)}function $(L){let w=L.texture,Z=i.get(L),pe=i.get(w);L.addEventListener("dispose",V),L.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,a.memory.textures++);let ue=L.isWebGLCubeRenderTarget===!0,me=L.isWebGLMultipleRenderTargets===!0,Be=p(L)||o;if(ue){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(o&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)Z.__webglFramebuffer[Se][Pe]=n.createFramebuffer()}else Z.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(me)if(s.drawBuffers){let Se=L.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=i.get(Se[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ue(L)===!1){let Se=me?w:[w];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){let $e=Se[Pe];Z.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);let ht=r.convert($e.format,$e.colorSpace),de=r.convert($e.type),Mt=R($e.internalFormat,ht,de,$e.colorSpace,L.isXRRenderTarget===!0),ft=nt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Mt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),z(n.TEXTURE_CUBE_MAP,w,Be);for(let Se=0;Se<6;Se++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Se][Pe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else le(Z.__webglFramebuffer[Se],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);T(w,Be)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){let Se=L.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=Se[Pe],de=i.get(ht);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),z(n.TEXTURE_2D,ht,Be),le(Z.__webglFramebuffer,L,ht,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),T(ht,Be)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Se=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),z(Se,w,Be),o&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Pe],L,w,n.COLOR_ATTACHMENT0,Se,Pe);else le(Z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Se,0);T(w,Be)&&v(Se),t.unbindTexture()}L.depthBuffer&&Ve(L)}function un(L){let w=p(L)||o,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let pe=0,ue=Z.length;pe<ue;pe++){let me=Z[pe];if(T(me,w)){let Be=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(me).__webglTexture;t.bindTexture(Be,Se),v(Be),t.unbindTexture()}}}function Xe(L){if(o&&L.samples>0&&Ue(L)===!1){let w=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,pe=L.height,ue=n.COLOR_BUFFER_BIT,me=[],Be=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(L),Pe=L.isWebGLMultipleRenderTargets===!0;if(Pe)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){me.push(n.COLOR_ATTACHMENT0+$e),L.depthBuffer&&me.push(Be);let ht=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ht===!1&&(L.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]),ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Pe){let de=i.get(w[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,ue,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]);let ht=i.get(w[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,ht,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function nt(L){return Math.min(s.maxSamples,L.samples)}function Ue(L){let w=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(L){let w=a.render.frame;h.get(L)!==w&&(h.set(L,w),L.update())}function ct(L,w){let Z=L.colorSpace,pe=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===bh||Z!==zi&&Z!==Qn&&(Rt.getTransfer(Z)===Ot?o===!1?e.has("EXT_sRGB")===!0&&pe===Kn?(L.format=bh,L.minFilter=Un,L.generateMipmaps=!1):w=il.sRGBToLinear(w):(pe!==Kn||ue!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}this.allocateTextureUnit=F,this.resetTextureUnits=fe,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=gt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=un,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue}function Ab(n,e,t){let i=t.isWebGL2;function s(r,a=Qn){let o,l=Rt.getTransfer(a);if(r===cs)return n.UNSIGNED_BYTE;if(r===fp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===pp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===o0)return n.BYTE;if(r===l0)return n.SHORT;if(r===Zh)return n.UNSIGNED_SHORT;if(r===dp)return n.INT;if(r===as)return n.UNSIGNED_INT;if(r===Bi)return n.FLOAT;if(r===Ta)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===c0)return n.ALPHA;if(r===Kn)return n.RGBA;if(r===h0)return n.LUMINANCE;if(r===u0)return n.LUMINANCE_ALPHA;if(r===Hs)return n.DEPTH_COMPONENT;if(r===Or)return n.DEPTH_STENCIL;if(r===bh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===d0)return n.RED;if(r===mp)return n.RED_INTEGER;if(r===f0)return n.RG;if(r===gp)return n.RG_INTEGER;if(r===yp)return n.RGBA_INTEGER;if(r===Uc||r===Oc||r===Fc||r===Bc)if(l===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Ld||r===Pd||r===Id)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Rd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ld)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_p)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nd||r===Dd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nd)return l===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Dd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ud||r===Od||r===Fd||r===Bd||r===kd||r===zd||r===Hd||r===Vd||r===Gd||r===Wd||r===Xd||r===qd||r===$d||r===Yd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ud)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kc||r===jd||r===Zd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===kc)return l===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===jd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===p0||r===Jd||r===Kd||r===Qd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===kc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Jd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Uh=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Cn=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},Ea=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Oh=class extends ds{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=t.getContextAttributes(),p=null,d=null,T=[],v=[],R=new et,P=null,I=new Kt;I.layers.enable(1),I.viewport=new vt;let D=new Kt;D.layers.enable(2),D.viewport=new vt;let V=[I,D],M=new Uh;M.layers.enable(1),M.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=T[z];return j===void 0&&(j=new Ea,T[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=T[z];return j===void 0&&(j=new Ea,T[z]=j),j.getGripSpace()},this.getHand=function(z){let j=T[z];return j===void 0&&(j=new Ea,T[z]=j),j.getHandSpace()};function ae(z){let j=v.indexOf(z.inputSource);if(j===-1)return;let se=T[j];se!==void 0&&(se.update(z.inputSource,z.frame,c||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function fe(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",F);for(let z=0;z<T.length;z++){let j=v[z];j!==null&&(v[z]=null,T[z].disconnect(j))}C=null,G=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Hi(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:cs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,se=null,re=null;x.depth&&(re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=x.stencil?Or:Hs,se=x.stencil?zs:as);let le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Hi(f.textureWidth,f.textureHeight,{format:Kn,type:cs,depthTexture:new dl(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Ce=e.properties.get(d);Ce.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(z){for(let j=0;j<z.removed.length;j++){let se=z.removed[j],re=v.indexOf(se);re>=0&&(v[re]=null,T[re].disconnect(se))}for(let j=0;j<z.added.length;j++){let se=z.added[j],re=v.indexOf(se);if(re===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=v.length){v.push(se),re=Ce;break}else if(v[Ce]===null){v[Ce]=se,re=Ce;break}if(re===-1)break}let le=T[re];le&&le.connect(se)}}let W=new U,B=new U;function ne(z,j,se){W.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);let re=W.distanceTo(B),le=j.projectionMatrix.elements,Ce=se.projectionMatrix.elements,He=le[14]/(le[10]-1),Ve=le[14]/(le[10]+1),gt=(le[9]+1)/le[5],$=(le[9]-1)/le[5],un=(le[8]-1)/le[0],Xe=(Ce[8]+1)/Ce[0],nt=He*un,Ue=He*Xe,Lt=re/(-un+Xe),ct=Lt*-un;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ct),z.translateZ(Lt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let L=He+Lt,w=Ve+Lt,Z=nt-ct,pe=Ue+(re-ct),ue=gt*Ve/w*L,me=$*Ve/w*L;z.projectionMatrix.makePerspective(Z,pe,ue,me,L,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Q(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;M.near=D.near=I.near=z.near,M.far=D.far=I.far=z.far,(C!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far);let j=z.parent,se=M.cameras;Q(M,j);for(let re=0;re<se.length;re++)Q(se[re],j);se.length===2?ne(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),X(z,M,j)};function X(z,j,se){se===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Fr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let ee=null;function q(z,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let re=!1;se.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let le=0;le<se.length;le++){let Ce=se[le],He=null;if(m!==null)He=m.getViewport(Ce);else{let gt=u.getViewSubImage(f,Ce);He=gt.viewport,le===0&&(e.setRenderTargetTextures(d,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(d))}let Ve=V[le];Ve===void 0&&(Ve=new Kt,Ve.layers.enable(le),Ve.viewport=new vt,V[le]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),le===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ve)}}for(let se=0;se<T.length;se++){let re=v[se],le=T[se];re!==null&&le!==void 0&&le.update(re,j,c||a)}ee&&ee(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let he=new wp;he.setAnimationLoop(q),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}};function Rb(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Sp(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,T,v,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,R)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let T=e.get(d).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lb(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,v){let R=v.program;i.uniformBlockBinding(T,R)}function c(T,v){let R=s[T.id];R===void 0&&(g(T),R=h(T),s[T.id]=R,T.addEventListener("dispose",p));let P=v.program;i.updateUBOMapping(T,P);let I=e.render.frame;r[T.id]!==I&&(f(T),r[T.id]=I)}function h(T){let v=u();T.__bindingPointIndex=v;let R=n.createBuffer(),P=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,P,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,R),R}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){let v=s[T.id],R=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let I=0,D=R.length;I<D;I++){let V=Array.isArray(R[I])?R[I]:[R[I]];for(let M=0,C=V.length;M<C;M++){let G=V[M];if(m(G,I,M,P)===!0){let ae=G.__offset,fe=Array.isArray(G.value)?G.value:[G.value],F=0;for(let W=0;W<fe.length;W++){let B=fe[W],ne=x(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,ae+F,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ae,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,v,R,P){let I=T.value,D=v+"_"+R;if(P[D]===void 0)return typeof I=="number"||typeof I=="boolean"?P[D]=I:P[D]=I.clone(),!0;{let V=P[D];if(typeof I=="number"||typeof I=="boolean"){if(V!==I)return P[D]=I,!0}else if(V.equals(I)===!1)return V.copy(I),!0}return!1}function g(T){let v=T.uniforms,R=0,P=16;for(let D=0,V=v.length;D<V;D++){let M=Array.isArray(v[D])?v[D]:[v[D]];for(let C=0,G=M.length;C<G;C++){let ae=M[C],fe=Array.isArray(ae.value)?ae.value:[ae.value];for(let F=0,W=fe.length;F<W;F++){let B=fe[F],ne=x(B),Q=R%P;Q!==0&&P-Q<ne.boundary&&(R+=P-Q),ae.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=ne.storage}}}let I=R%P;return I>0&&(R+=P-I),T.__size=R,T.__cache={},this}function x(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function p(T){let v=T.target;v.removeEventListener("dispose",p);let R=a.indexOf(v.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Pa=class{constructor(e={}){let{canvas:t=z0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=ls,this.toneMappingExposure=1;let v=this,R=!1,P=0,I=0,D=null,V=-1,M=null,C=new vt,G=new vt,ae=null,fe=new ot(0),F=0,W=t.width,B=t.height,ne=1,Q=null,X=null,ee=new vt(0,0,W,B),q=new vt(0,0,W,B),he=!1,z=new La,j=!1,se=!1,re=null,le=new lt,Ce=new et,He=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?ne:1}let $=i;function un(A,H){for(let J=0;J<A.length;J++){let te=A[J],Y=t.getContext(te,H);if(Y!==null)return Y}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ve,!1),$===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),$=un(H,A),$===null)throw un(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xe,nt,Ue,Lt,ct,L,w,Z,pe,ue,me,Be,Se,Pe,$e,ht,de,Mt,ft,Qe,Ge,Ie,rt,bt;function Dt(){Xe=new jx($),nt=new Gx($,Xe,e),Xe.init(nt),Ie=new Ab($,Xe,nt),Ue=new Eb($,Xe,nt),Lt=new Kx($),ct=new fb,L=new Tb($,Xe,Ue,ct,nt,Ie,Lt),w=new Xx(v),Z=new Yx(v),pe=new ay($,nt),rt=new Hx($,Xe,pe,nt),ue=new Zx($,pe,Lt,rt),me=new nv($,ue,pe,Lt),ft=new tv($,nt,L),ht=new Wx(ct),Be=new db(v,w,Z,Xe,nt,rt,ht),Se=new Rb(v,ct),Pe=new mb,$e=new bb(Xe,nt),Mt=new zx(v,w,Z,Ue,me,f,l),de=new wb(v,me,nt),bt=new Lb($,Lt,nt,Ue),Qe=new Vx($,Xe,Lt,nt),Ge=new Jx($,Xe,Lt,nt),Lt.programs=Be.programs,v.capabilities=nt,v.extensions=Xe,v.properties=ct,v.renderLists=Pe,v.shadowMap=de,v.state=Ue,v.info=Lt}Dt();let ut=new Oh(v,$);this.xr=ut,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let A=Xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(W,B,!1))},this.getSize=function(A){return A.set(W,B)},this.setSize=function(A,H,J=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,B=H,t.width=Math.floor(A*ne),t.height=Math.floor(H*ne),J===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(W*ne,B*ne).floor()},this.setDrawingBufferSize=function(A,H,J){W=A,B=H,ne=J,t.width=Math.floor(A*J),t.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,H,J,te){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,H,J,te),Ue.viewport(C.copy(ee).multiplyScalar(ne).floor())},this.getScissor=function(A){return A.copy(q)},this.setScissor=function(A,H,J,te){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,H,J,te),Ue.scissor(G.copy(q).multiplyScalar(ne).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){Ue.setScissorTest(he=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(A=!0,H=!0,J=!0){let te=0;if(A){let Y=!1;if(D!==null){let Te=D.texture.format;Y=Te===yp||Te===gp||Te===mp}if(Y){let Te=D.texture.type,Ae=Te===cs||Te===as||Te===Zh||Te===zs||Te===fp||Te===pp,ke=Mt.getClearColor(),Ye=Mt.getClearAlpha(),at=ke.r,it=ke.g,st=ke.b;Ae?(m[0]=at,m[1]=it,m[2]=st,m[3]=Ye,$.clearBufferuiv($.COLOR,0,m)):(g[0]=at,g[1]=it,g[2]=st,g[3]=Ye,$.clearBufferiv($.COLOR,0,g))}else te|=$.COLOR_BUFFER_BIT}H&&(te|=$.DEPTH_BUFFER_BIT),J&&(te|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Pe.dispose(),$e.dispose(),ct.dispose(),w.dispose(),Z.dispose(),me.dispose(),rt.dispose(),bt.dispose(),Be.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",on),ut.removeEventListener("sessionend",At),re&&(re.dispose(),re=null),dn.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let A=Lt.autoReset,H=de.enabled,J=de.autoUpdate,te=de.needsUpdate,Y=de.type;Dt(),Lt.autoReset=A,de.enabled=H,de.autoUpdate=J,de.needsUpdate=te,de.type=Y}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){let H=A.target;H.removeEventListener("dispose",be),Ze(H)}function Ze(A){qe(A),ct.remove(A)}function qe(A){let H=ct.get(A).programs;H!==void 0&&(H.forEach(function(J){Be.releaseProgram(J)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,te,Y,Te){H===null&&(H=Ve);let Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,ke=Lc(A,H,J,te,Y);Ue.setMaterial(te,Ae);let Ye=J.index,at=1;if(te.wireframe===!0){if(Ye=ue.getWireframeAttribute(J),Ye===void 0)return;at=2}let it=J.drawRange,st=J.attributes.position,zt=it.start*at,In=(it.start+it.count)*at;Te!==null&&(zt=Math.max(zt,Te.start*at),In=Math.min(In,(Te.start+Te.count)*at)),Ye!==null?(zt=Math.max(zt,0),In=Math.min(In,Ye.count)):st!=null&&(zt=Math.max(zt,0),In=Math.min(In,st.count));let Zt=In-zt;if(Zt<0||Zt===1/0)return;rt.setup(Y,te,ke,J,Ye);let Zn,Pt=Qe;if(Ye!==null&&(Zn=pe.get(Ye),Pt=Ge,Pt.setIndex(Zn)),Y.isMesh)te.wireframe===!0?(Ue.setLineWidth(te.wireframeLinewidth*gt()),Pt.setMode($.LINES)):Pt.setMode($.TRIANGLES);else if(Y.isLine){let tt=te.linewidth;tt===void 0&&(tt=1),Ue.setLineWidth(tt*gt()),Y.isLineSegments?Pt.setMode($.LINES):Y.isLineLoop?Pt.setMode($.LINE_LOOP):Pt.setMode($.LINE_STRIP)}else Y.isPoints?Pt.setMode($.POINTS):Y.isSprite&&Pt.setMode($.TRIANGLES);if(Y.isBatchedMesh)Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Pt.renderInstances(zt,Zt,Y.count);else if(J.isInstancedBufferGeometry){let tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ca=Math.min(J.instanceCount,tt);Pt.renderInstances(zt,Zt,ca)}else Pt.render(zt,Zt)};function wt(A,H,J){A.transparent===!0&&A.side===Fn&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,or(A,H,J),A.side=zn,A.needsUpdate=!0,or(A,H,J),A.side=Fn):or(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),p=$e.get(J),p.init(),T.push(p),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);let te=new Set;return A.traverse(function(Y){let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){let ke=Te[Ae];wt(ke,J,Y),te.add(ke)}else wt(Te,J,Y),te.add(Te)}),T.pop(),p=null,te},this.compileAsync=function(A,H,J=null){let te=this.compile(A,H,J);return new Promise(Y=>{function Te(){if(te.forEach(function(Ae){ct.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){Y(A);return}setTimeout(Te,10)}Xe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function St(A){Tt&&Tt(A)}function on(){dn.stop()}function At(){dn.start()}let dn=new wp;dn.setAnimationLoop(St),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(A){Tt=A,ut.setAnimationLoop(A),A===null?dn.stop():dn.start()},ut.addEventListener("sessionstart",on),ut.addEventListener("sessionend",At),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(H),H=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,D),p=$e.get(A,T.length),p.init(),T.push(p),le.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),z.setFromProjectionMatrix(le),se=this.localClippingEnabled,j=ht.init(this.clippingPlanes,se),x=Pe.get(A,d.length),x.init(),d.push(x),jn(A,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Q,X),this.info.render.frame++,j===!0&&ht.beginShadows();let J=p.state.shadowsArray;if(de.render(J,A,H),j===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(x,A),p.setupLights(v._useLegacyLights),H.isArrayCamera){let te=H.cameras;for(let Y=0,Te=te.length;Y<Te;Y++){let Ae=te[Y];po(x,A,Ae,Ae.viewport)}}else po(x,A,H);D!==null&&(L.updateMultisampleRenderTarget(D),L.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(v,A,H),rt.resetDefaultState(),V=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function jn(A,H,J,te){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){te&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let Ae=me.update(A),ke=A.material;ke.visible&&x.push(A,Ae,ke,J,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){let Ae=me.update(A),ke=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(ke)){let Ye=Ae.groups;for(let at=0,it=Ye.length;at<it;at++){let st=Ye[at],zt=ke[st.materialIndex];zt&&zt.visible&&x.push(A,Ae,zt,J,He.z,st)}}else ke.visible&&x.push(A,Ae,ke,J,He.z,null)}}let Te=A.children;for(let Ae=0,ke=Te.length;Ae<ke;Ae++)jn(Te[Ae],H,J,te)}function po(A,H,J,te){let Y=A.opaque,Te=A.transmissive,Ae=A.transparent;p.setupLightsView(J),j===!0&&ht.setGlobalState(v.clippingPlanes,J),Te.length>0&&Rc(Y,Te,H,J),te&&Ue.viewport(C.copy(te)),Y.length>0&&ar(Y,H,J),Te.length>0&&ar(Te,H,J),Ae.length>0&&ar(Ae,H,J),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Rc(A,H,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Te=nt.isWebGL2;re===null&&(re=new Hi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Ta:cs,minFilter:us,samples:Te?4:0})),v.getDrawingBufferSize(Ce),Te?re.setSize(Ce.x,Ce.y):re.setSize(nl(Ce.x),nl(Ce.y));let Ae=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(fe),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let ke=v.toneMapping;v.toneMapping=ls,ar(A,J,te),L.updateMultisampleRenderTarget(re),L.updateRenderTargetMipmap(re);let Ye=!1;for(let at=0,it=H.length;at<it;at++){let st=H[at],zt=st.object,In=st.geometry,Zt=st.material,Zn=st.group;if(Zt.side===Fn&&zt.layers.test(te.layers)){let Pt=Zt.side;Zt.side=hn,Zt.needsUpdate=!0,oa(zt,J,te,In,Zt,Zn),Zt.side=Pt,Zt.needsUpdate=!0,Ye=!0}}Ye===!0&&(L.updateMultisampleRenderTarget(re),L.updateRenderTargetMipmap(re)),v.setRenderTarget(Ae),v.setClearColor(fe,F),v.toneMapping=ke}function ar(A,H,J){let te=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Te=A.length;Y<Te;Y++){let Ae=A[Y],ke=Ae.object,Ye=Ae.geometry,at=te===null?Ae.material:te,it=Ae.group;ke.layers.test(J.layers)&&oa(ke,H,J,Ye,at,it)}}function oa(A,H,J,te,Y,Te){A.onBeforeRender(v,H,J,te,Y,Te),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(v,H,J,te,A,Te),Y.transparent===!0&&Y.side===Fn&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,v.renderBufferDirect(J,H,te,Y,A,Te),Y.side=zn,Y.needsUpdate=!0,v.renderBufferDirect(J,H,te,Y,A,Te),Y.side=Fn):v.renderBufferDirect(J,H,te,Y,A,Te),A.onAfterRender(v,H,J,te,Y,Te)}function or(A,H,J){H.isScene!==!0&&(H=Ve);let te=ct.get(A),Y=p.state.lights,Te=p.state.shadowsArray,Ae=Y.state.version,ke=Be.getParameters(A,Y.state,Te,H,J),Ye=Be.getProgramCacheKey(ke),at=te.programs;te.environment=A.isMeshStandardMaterial?H.environment:null,te.fog=H.fog,te.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||te.environment),at===void 0&&(A.addEventListener("dispose",be),at=new Map,te.programs=at);let it=at.get(Ye);if(it!==void 0){if(te.currentProgram===it&&te.lightsStateVersion===Ae)return mo(A,ke),it}else ke.uniforms=Be.getUniforms(A),A.onBuild(J,ke,v),A.onBeforeCompile(ke,v),it=Be.acquireProgram(ke,Ye),at.set(Ye,it),te.uniforms=ke.uniforms;let st=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=ht.uniform),mo(A,ke),te.needsLights=Ic(A),te.lightsStateVersion=Ae,te.needsLights&&(st.ambientLightColor.value=Y.state.ambient,st.lightProbe.value=Y.state.probe,st.directionalLights.value=Y.state.directional,st.directionalLightShadows.value=Y.state.directionalShadow,st.spotLights.value=Y.state.spot,st.spotLightShadows.value=Y.state.spotShadow,st.rectAreaLights.value=Y.state.rectArea,st.ltc_1.value=Y.state.rectAreaLTC1,st.ltc_2.value=Y.state.rectAreaLTC2,st.pointLights.value=Y.state.point,st.pointLightShadows.value=Y.state.pointShadow,st.hemisphereLights.value=Y.state.hemi,st.directionalShadowMap.value=Y.state.directionalShadowMap,st.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,st.spotShadowMap.value=Y.state.spotShadowMap,st.spotLightMatrix.value=Y.state.spotLightMatrix,st.spotLightMap.value=Y.state.spotLightMap,st.pointShadowMap.value=Y.state.pointShadowMap,st.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=it,te.uniformsList=null,it}function la(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=Nr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function mo(A,H){let J=ct.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Lc(A,H,J,te,Y){H.isScene!==!0&&(H=Ve),L.resetTextureUnits();let Te=H.fog,Ae=te.isMeshStandardMaterial?H.environment:null,ke=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zi,Ye=(te.isMeshStandardMaterial?Z:w).get(te.envMap||Ae),at=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),st=!!J.morphAttributes.position,zt=!!J.morphAttributes.normal,In=!!J.morphAttributes.color,Zt=ls;te.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Zt=v.toneMapping);let Zn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=Zn!==void 0?Zn.length:0,tt=ct.get(te),ca=p.state.lights;if(j===!0&&(se===!0||A!==M)){let Sn=A===M&&te.id===V;ht.setState(te,A,Sn)}let Ut=!1;te.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ca.state.version||tt.outputColorSpace!==ke||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||tt.envMap!==Ye||te.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ht.numPlanes||tt.numIntersection!==ht.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==it||tt.morphTargets!==st||tt.morphNormals!==zt||tt.morphColors!==In||tt.toneMapping!==Zt||nt.isWebGL2===!0&&tt.morphTargetsCount!==Pt)&&(Ut=!0):(Ut=!0,tt.__version=te.version);let Ci=tt.currentProgram;Ut===!0&&(Ci=or(te,H,Y));let ha=!1,Ps=!1,ua=!1,ln=Ci.getUniforms(),pi=tt.uniforms;if(Ue.useProgram(Ci.program)&&(ha=!0,Ps=!0,ua=!0),te.id!==V&&(V=te.id,Ps=!0),ha||M!==A){ln.setValue($,"projectionMatrix",A.projectionMatrix),ln.setValue($,"viewMatrix",A.matrixWorldInverse);let Sn=ln.map.cameraPosition;Sn!==void 0&&Sn.setValue($,He.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&ln.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ln.setValue($,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Ps=!0,ua=!0)}if(Y.isSkinnedMesh){ln.setOptional($,Y,"bindMatrix"),ln.setOptional($,Y,"bindMatrixInverse");let Sn=Y.skeleton;Sn&&(nt.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),ln.setValue($,"boneTexture",Sn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ln.setOptional($,Y,"batchingTexture"),ln.setValue($,"batchingTexture",Y._matricesTexture,L));let Ht=J.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0&&nt.isWebGL2===!0)&&ft.update(Y,J,Ci),(Ps||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,ln.setValue($,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(pi.envMap.value=Ye,pi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Ps&&(ln.setValue($,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&Pc(pi,ua),Te&&te.fog===!0&&Se.refreshFogUniforms(pi,Te),Se.refreshMaterialUniforms(pi,te,ne,B,re),Nr.upload($,la(tt),pi,L)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Nr.upload($,la(tt),pi,L),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ln.setValue($,"center",Y.center),ln.setValue($,"modelViewMatrix",Y.modelViewMatrix),ln.setValue($,"normalMatrix",Y.normalMatrix),ln.setValue($,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Sn=te.uniformsGroups;for(let da=0,go=Sn.length;da<go;da++)if(nt.isWebGL2){let fa=Sn[da];bt.update(fa,Ci),bt.bind(fa,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Pc(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,H,J){ct.get(A.texture).__webglTexture=H,ct.get(A.depthTexture).__webglTexture=J;let te=ct.get(A);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,H){let J=ct.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){D=A,P=H,I=J;let te=!0,Y=null,Te=!1,Ae=!1;if(A){let Ye=ct.get(A);Ye.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer($.FRAMEBUFFER,null),te=!1):Ye.__webglFramebuffer===void 0?L.setupRenderTarget(A):Ye.__hasExternalTextures&&L.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);let at=A.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);let it=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[H])?Y=it[H][J]:Y=it[H],Te=!0):nt.isWebGL2&&A.samples>0&&L.useMultisampledRTT(A)===!1?Y=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[J]:Y=it,C.copy(A.viewport),G.copy(A.scissor),ae=A.scissorTest}else C.copy(ee).multiplyScalar(ne).floor(),G.copy(q).multiplyScalar(ne).floor(),ae=he;if(Ue.bindFramebuffer($.FRAMEBUFFER,Y)&&nt.drawBuffers&&te&&Ue.drawBuffers(A,Y),Ue.viewport(C),Ue.scissor(G),Ue.setScissorTest(ae),Te){let Ye=ct.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ye.__webglTexture,J)}else if(Ae){let Ye=ct.get(A.texture),at=H||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,at)}V=-1},this.readRenderTargetPixels=function(A,H,J,te,Y,Te,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(ke=ke[Ae]),ke){Ue.bindFramebuffer($.FRAMEBUFFER,ke);try{let Ye=A.texture,at=Ye.format,it=Ye.type;if(at!==Kn&&Ie.convert(at)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=it===Ta&&(Xe.has("EXT_color_buffer_half_float")||nt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(it!==cs&&Ie.convert(it)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Bi&&(nt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-te&&J>=0&&J<=A.height-Y&&$.readPixels(H,J,te,Y,Ie.convert(at),Ie.convert(it),Te)}finally{let Ye=D!==null?ct.get(D).__webglFramebuffer:null;Ue.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(A,H,J=0){let te=Math.pow(2,-J),Y=Math.floor(H.image.width*te),Te=Math.floor(H.image.height*te);L.setTexture2D(H,0),$.copyTexSubImage2D($.TEXTURE_2D,J,0,0,A.x,A.y,Y,Te),Ue.unbindTexture()},this.copyTextureToTexture=function(A,H,J,te=0){let Y=H.image.width,Te=H.image.height,Ae=Ie.convert(J.format),ke=Ie.convert(J.type);L.setTexture2D(J,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment),H.isDataTexture?$.texSubImage2D($.TEXTURE_2D,te,A.x,A.y,Y,Te,Ae,ke,H.image.data):H.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,te,A.x,A.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,te,A.x,A.y,Ae,ke,H.image),te===0&&J.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J,te,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Ye=Ie.convert(te.format),at=Ie.convert(te.type),it;if(te.isData3DTexture)L.setTexture3D(te,0),it=$.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)L.setTexture2DArray(te,0),it=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,te.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,te.unpackAlignment);let st=$.getParameter($.UNPACK_ROW_LENGTH),zt=$.getParameter($.UNPACK_IMAGE_HEIGHT),In=$.getParameter($.UNPACK_SKIP_PIXELS),Zt=$.getParameter($.UNPACK_SKIP_ROWS),Zn=$.getParameter($.UNPACK_SKIP_IMAGES),Pt=J.isCompressedTexture?J.mipmaps[Y]:J.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Pt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Pt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,A.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,A.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?$.texSubImage3D(it,Y,H.x,H.y,H.z,Te,Ae,ke,Ye,at,Pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(it,Y,H.x,H.y,H.z,Te,Ae,ke,Ye,Pt.data)):$.texSubImage3D(it,Y,H.x,H.y,H.z,Te,Ae,ke,Ye,at,Pt),$.pixelStorei($.UNPACK_ROW_LENGTH,st),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,zt),$.pixelStorei($.UNPACK_SKIP_PIXELS,In),$.pixelStorei($.UNPACK_SKIP_ROWS,Zt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Zn),Y===0&&te.generateMipmaps&&$.generateMipmap(it),Ue.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ue.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,Ue.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Kh?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Dl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?Vs:xp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vs?Gt:zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Fh=class extends Pa{};Fh.prototype.isWebGL1Renderer=!0;var Gs=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},fl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new U,ti=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hr=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Er,_a=new U,Tr=new U,Ar=new U,Cr=new et,xa=new et,Lp=new lt,Vo=new U,va=new U,Go=new U,Wf=new et,ch=new et,Xf=new et,Ia=class extends Wt{constructor(e=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new Vn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fl(t,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new ti(i,3,0,!1)),Er.setAttribute("uv",new ti(i,2,3,!1))}this.geometry=Er,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),Lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Ar.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Wo(Vo.set(-.5,-.5,0),Ar,a,Tr,s,r),Wo(va.set(.5,-.5,0),Ar,a,Tr,s,r),Wo(Go.set(.5,.5,0),Ar,a,Tr,s,r),Wf.set(0,0),ch.set(1,0),Xf.set(1,1);let o=e.ray.intersectTriangle(Vo,va,Go,!1,_a);if(o===null&&(Wo(va.set(-.5,.5,0),Ar,a,Tr,s,r),ch.set(0,1),o=e.ray.intersectTriangle(Vo,Go,va,!1,_a),o===null))return;let l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:ks.getInterpolation(_a,Vo,va,Go,Wf,ch,Xf,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Wo(n,e,t,i,s,r){Cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(xa.x=r*Cr.x-s*Cr.y,xa.y=s*Cr.x+r*Cr.y):xa.copy(Cr),n.copy(e),n.x+=xa.x,n.y+=xa.y,n.applyMatrix4(Lp)}var qf=new U,$f=new vt,Yf=new vt,Pb=new U,jf=new lt,Xo=new U,hh=new ei,Zf=new lt,uh=new Br,pl=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ad,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingBox.expandByPoint(Xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Xo),this.boundingSphere.expandByPoint(Xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hh.copy(this.boundingSphere),hh.applyMatrix4(s),e.ray.intersectsSphere(hh)!==!1&&(Zf.copy(s).invert(),uh.copy(e.ray).applyMatrix4(Zf),!(this.boundingBox!==null&&uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ad?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===r0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Yf.fromBufferAttribute(s.attributes.skinWeight,e),qf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Yf.getComponent(r);if(a!==0){let o=$f.getComponent(r);jf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Pb.copy(qf).applyMatrix4(jf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Na=class extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ml=class extends Hn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=fn,h=fn,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jf=new lt,Ib=new lt,gl=class n{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ib;Jf.multiplyMatrices(o,t[r]),Jf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ml(t,e,e,Kn,Bi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Na),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var Vr=class extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kf=new U,Qf=new U,ep=new lt,dh=new Br,qo=new ei,Da=class extends Wt{constructor(e=new Vn,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Kf.fromBufferAttribute(t,s-1),Qf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Kf.distanceTo(Qf);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(s),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;ep.copy(s).invert(),dh.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let d=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let v=d,R=T-1;v<R;v+=m){let P=g.getX(v),I=g.getX(v+1);if(c.fromBufferAttribute(p,P),h.fromBufferAttribute(p,I),dh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||t.push({distance:V,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let v=d,R=T-1;v<R;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),dh.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},tp=new U,np=new U,yl=class extends Da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tp.fromBufferAttribute(t,s),np.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tp.distanceTo(np);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Gr=class extends Hn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _l=class n extends Vn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,f=new U,m=[],g=[],x=[],p=[];for(let d=0;d<=i;d++){let T=[],v=d/i,R=0;d===0&&a===0?R=.5/t:d===i&&l===Math.PI&&(R=-.5/t);for(let P=0;P<=t;P++){let I=P/t;u.x=-e*Math.cos(s+I*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(s+I*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(I+R,1-v),T.push(c++)}h.push(T)}for(let d=0;d<i;d++)for(let T=0;T<t;T++){let v=h[d][T+1],R=h[d][T],P=h[d+1][T],I=h[d+1][T+1];(d!==0||a>0)&&m.push(v,R,I),(d!==i-1||l<Math.PI)&&m.push(R,P,I)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xl=class extends Vn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,m=u.count;for(let g=f,x=f+m;g<x;g+=3)for(let p=0;p<3;p++){let d=o.getX(g+p),T=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,T),ip(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ip(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ip(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Ua=class extends yi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ws=class extends yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $o(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Nb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Db(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function sp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Pp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Wr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bh=class extends Wr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ef,endingEnd:ef}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case tf:r=e,o=2*t-i;break;case nf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tf:a=e,l=2*i-t;break;case nf:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,T=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,R=m*p-m*x;for(let P=0;P!==o;++P)r[P]=d*a[h+P]+T*a[c+P]+v*a[l+P]+R*a[u+P];return r}},kh=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},zh=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new zh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Nb(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Jo;var fs=class extends ni{};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Zo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends ni{};vl.prototype.ValueTypeName="color";var Xr=class extends ni{};Xr.prototype.ValueTypeName="number";var Hh=class extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gi=class extends ni{InterpolantFactoryMethodLinear(e){return new Hh(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=Jo;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends ni{};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Zo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends ni{};Wi.prototype.ValueTypeName="vector";var Oa=class{constructor(e,t=-1,i,s=m0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Ob(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(ni.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Db(l);l=sp(l,1,h),c=sp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,m,g,x){if(m.length!==0){let p=[],d=[];Pp(m,p,d,g),p.length!==0&&x.push(new u(f,p,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)m[f[g].morphTargets[x]]=-1;for(let x in m){let p=[],d=[];for(let T=0;T!==f[g].morphTargets.length;++T){let v=f[g];p.push(v.time),d.push(v.morphTarget===x?1:0)}s.push(new Xr(".morphTargetInfluence["+x+"]",p,d))}l=m.length*a}else{let m=".bones["+t[u].name+"]";i(Wi,m+".position",f,"pos",s),i(Gi,m+".quaternion",f,"rot",s),i(Wi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ub(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return vl;case"quaternion":return Gi;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Ob(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ub(n.type);if(n.times===void 0){let t=[],i=[];Pp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var bl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Fa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Fb=new Fa,_i=class{constructor(e){this.manager=e!==void 0?e:Fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},Ba=class extends _i{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ui[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0,x=0,p=new ReadableStream({start(d){T();function T(){u.read().then(({done:v,value:R})=>{if(v)d.close();else{x+=R.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let I=0,D=h.length;I<D;I++){let V=h[I];V.onProgress&&V.onProgress(P)}d.enqueue(R),T()}})}}});return new Response(p)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{bl.add(e,c);let h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Gh=class extends _i{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Aa("img");function l(){h(),bl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ml=class extends _i{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new ml,o=new Ba(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:An,a.wrapT=c.wrapT!==void 0?c.wrapT:An,a.magFilter=c.magFilter!==void 0?c.magFilter:Un,a.minFilter=c.minFilter!==void 0?c.minFilter:Un,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=us),c.mipmapCount===1&&(a.minFilter=Un),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},Sl=class extends _i{constructor(e){super(e)}load(e,t,i,s){let r=new Hn,a=new Gh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Xs=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},wl=class extends Xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fh=new lt,rp=new U,ap=new U,ka=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wh=class extends ka{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},El=class extends Xs{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},op=new lt,ba=new U,ph=new U,Xh=class extends ka{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),i.position.copy(ba),ph.copy(i.position),ph.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ph),i.updateMatrixWorld(),s.makeTranslation(-ba.x,-ba.y,-ba.z),op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op)}},Tl=class extends Xs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},qh=class extends ka{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new qh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Al=class extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Rl=class extends Vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var tu="\\[\\]\\.:\\/",Bb=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",kb="[^"+tu.replace("\\.","")+"]",zb=/((?:WC+[\/:])*)/.source.replace("WC",nu),Hb=/(WCOD+)?/.source.replace("WCOD",kb),Vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),Wb=new RegExp("^"+zb+Hb+Vb+Gb+"$"),Xb=["material","materials","bones","map"],$h=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(e){let t=Wb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Xb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=$h;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E1=new Float32Array(1);var qs=class extends fl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Ll=class{constructor(e,t,i=0,s=1/0){this.ray=new Br(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ca,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Yh(e,this,i,t),i.sort(lp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Yh(e[s],this,i,t);return i.sort(lp),i}};function lp(n,e){return n.distance-e.distance}function Yh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Yh(s[r],e,t,!0)}}var cp=new U,Yo=new U,Pl=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){cp.subVectors(e,this.start),Yo.subVectors(this.end,this.start);let i=Yo.dot(Yo),r=Yo.dot(cp)/i;return t&&(r=Tn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);var za=class extends Ml{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case f:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case d:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ne,Q,X,ee){let q,he,z=Q.pixel_size>>3,j=Q.width*Q.height*z;if(ne&&(he=ee.subarray(X,X+=Q.colormap_length*(Q.colormap_size>>3))),B){q=new Uint8Array(j);let se,re,le,Ce=0,He=new Uint8Array(z);for(;Ce<j;)if(se=ee[X++],re=(se&127)+1,se&128){for(le=0;le<z;++le)He[le]=ee[X++];for(le=0;le<re;++le)q.set(He,Ce+le*z);Ce+=z*re}else{for(re*=z,le=0;le<re;++le)q[Ce+le]=ee[X++];Ce+=re}}else q=ee.subarray(X,X+=ne?Q.width*Q.height:j);return{pixel_data:q,palettes:he}}function s(B,ne,Q,X,ee,q,he,z,j){let se=j,re,le=0,Ce,He,Ve=C.width;for(He=ne;He!==X;He+=Q)for(Ce=ee;Ce!==he;Ce+=q,le++)re=z[le],B[(Ce+Ve*He)*4+3]=255,B[(Ce+Ve*He)*4+2]=se[re*3+0],B[(Ce+Ve*He)*4+1]=se[re*3+1],B[(Ce+Ve*He)*4+0]=se[re*3+2];return B}function r(B,ne,Q,X,ee,q,he,z){let j,se=0,re,le,Ce=C.width;for(le=ne;le!==X;le+=Q)for(re=ee;re!==he;re+=q,se+=2)j=z[se+0]+(z[se+1]<<8),B[(re+Ce*le)*4+0]=(j&31744)>>7,B[(re+Ce*le)*4+1]=(j&992)>>2,B[(re+Ce*le)*4+2]=(j&31)<<3,B[(re+Ce*le)*4+3]=j&32768?0:255;return B}function a(B,ne,Q,X,ee,q,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==X;re+=Q)for(se=ee;se!==he;se+=q,j+=3)B[(se+le*re)*4+3]=255,B[(se+le*re)*4+2]=z[j+0],B[(se+le*re)*4+1]=z[j+1],B[(se+le*re)*4+0]=z[j+2];return B}function o(B,ne,Q,X,ee,q,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==X;re+=Q)for(se=ee;se!==he;se+=q,j+=4)B[(se+le*re)*4+2]=z[j+0],B[(se+le*re)*4+1]=z[j+1],B[(se+le*re)*4+0]=z[j+2],B[(se+le*re)*4+3]=z[j+3];return B}function l(B,ne,Q,X,ee,q,he,z){let j,se=0,re,le,Ce=C.width;for(le=ne;le!==X;le+=Q)for(re=ee;re!==he;re+=q,se++)j=z[se],B[(re+Ce*le)*4+0]=j,B[(re+Ce*le)*4+1]=j,B[(re+Ce*le)*4+2]=j,B[(re+Ce*le)*4+3]=255;return B}function c(B,ne,Q,X,ee,q,he,z){let j=0,se,re,le=C.width;for(re=ne;re!==X;re+=Q)for(se=ee;se!==he;se+=q,j+=2)B[(se+le*re)*4+0]=z[j+0],B[(se+le*re)*4+1]=z[j+0],B[(se+le*re)*4+2]=z[j+0],B[(se+le*re)*4+3]=z[j+1];return B}function h(B,ne,Q,X,ee){let q,he,z,j,se,re;switch((C.flags&T)>>v){default:case I:q=0,z=1,se=ne,he=0,j=1,re=Q;break;case R:q=0,z=1,se=ne,he=Q-1,j=-1,re=-1;break;case D:q=ne-1,z=-1,se=-1,he=0,j=1,re=Q;break;case P:q=ne-1,z=-1,se=-1,he=Q-1,j=-1,re=-1;break}if(fe)switch(C.pixel_size){case 8:l(B,he,j,re,q,z,se,X);break;case 16:c(B,he,j,re,q,z,se,X);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(C.pixel_size){case 8:s(B,he,j,re,q,z,se,X,ee);break;case 16:r(B,he,j,re,q,z,se,X);break;case 24:a(B,he,j,re,q,z,se,X);break;case 32:o(B,he,j,re,q,z,se,X);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let u=0,f=1,m=2,g=3,x=9,p=10,d=11,T=48,v=4,R=0,P=1,I=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let V=0,M=new Uint8Array(e),C={id_length:M[V++],colormap_type:M[V++],image_type:M[V++],colormap_index:M[V++]|M[V++]<<8,colormap_length:M[V++]|M[V++]<<8,colormap_size:M[V++],origin:[M[V++]|M[V++]<<8,M[V++]|M[V++]<<8],width:M[V++]|M[V++]<<8,height:M[V++]|M[V++]<<8,pixel_size:M[V++],flags:M[V++]};if(t(C),C.id_length+V>e.length)throw new Error("THREE.TGALoader: No data.");V+=C.id_length;let G=!1,ae=!1,fe=!1;switch(C.image_type){case x:G=!0,ae=!0;break;case f:ae=!0;break;case p:G=!0;break;case m:break;case d:G=!0,fe=!0;break;case g:fe=!0;break}let F=new Uint8Array(C.width*C.height*4),W=i(G,ae,C,V,M);return h(F,C.width,C.height,W.pixel_data,W.palettes),{data:F,width:C.width,height:C.height,flipY:!0,generateMipmaps:!0,minFilter:us}}};var Fl=class extends _i{load(e,t,i,s){let r=this,a=r.path===""?Cl.extractUrlBase(e):r.path,o=new Ba(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,y){let S=[],b=_.childNodes;for(let E=0,K=b.length;E<K;E++){let ie=b[E];ie.nodeName===y&&S.push(ie)}return S}function s(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=y[b];return S}function r(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=parseFloat(y[b]);return S}function a(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=parseInt(y[b]);return S}function o(_){return _.substring(1)}function l(){return"three_default_"+Sg++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:f(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function f(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,y,S,b){let E=i(_,y)[0];if(E!==void 0){let K=i(E,S);for(let ie=0;ie<K.length;ie++)b(K[ie])}}function g(_,y){for(let S in _){let b=_[S];b.build=y(_[S])}}function x(_,y){return _.build!==void 0||(_.build=y(_)),_.build}function p(_){let y={sources:{},samplers:{},channels:{}},S=!1;for(let b=0,E=_.childNodes.length;b<E;b++){let K=_.childNodes[b];if(K.nodeType!==1)continue;let ie;switch(K.nodeName){case"source":ie=K.getAttribute("id"),y.sources[ie]=O(K);break;case"sampler":ie=K.getAttribute("id"),y.samplers[ie]=d(K);break;case"channel":ie=K.getAttribute("target"),y.channels[ie]=T(K);break;case"animation":p(K),S=!0;break;default:console.log(K)}}S===!1&&(je.animations[_.getAttribute("id")||ms.generateUUID()]=y)}function d(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let K=o(E.getAttribute("source")),ie=E.getAttribute("semantic");y.inputs[ie]=K;break}}return y}function T(_){let y={},b=_.getAttribute("target").split("/"),E=b.shift(),K=b.shift(),ie=K.indexOf("(")!==-1,Le=K.indexOf(".")!==-1;if(Le)b=K.split("."),K=b.shift(),y.member=b.shift();else if(ie){let xe=K.split("(");K=xe.shift();for(let we=0;we<xe.length;we++)xe[we]=parseInt(xe[we].replace(/\)/,""));y.indices=xe}return y.id=E,y.sid=K,y.arraySyntax=ie,y.memberSyntax=Le,y.sampler=o(_.getAttribute("source")),y}function v(_){let y=[],S=_.channels,b=_.samplers,E=_.sources;for(let K in S)if(S.hasOwnProperty(K)){let ie=S[K],Le=b[ie.sampler],xe=Le.inputs.INPUT,we=Le.inputs.OUTPUT,Fe=E[xe],ce=E[we],Oe=P(ie,Fe,ce);C(Oe,y)}return y}function R(_){return x(je.animations[_],v)}function P(_,y,S){let b=je.nodes[_.id],E=tt(b.id),K=b.transforms[_.sid],ie=b.matrix.clone().transpose(),Le,xe,we,Fe,ce,Oe,Ne={};switch(K){case"matrix":for(we=0,Fe=y.array.length;we<Fe;we++)if(Le=y.array[we],xe=we*S.stride,Ne[Le]===void 0&&(Ne[Le]={}),_.arraySyntax===!0){let Vt=S.array[xe],Et=_.indices[0]+4*_.indices[1];Ne[Le][Et]=Vt}else for(ce=0,Oe=S.stride;ce<Oe;ce++)Ne[Le][ce]=S.array[xe+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let We=I(Ne,ie);return{name:E.uuid,keyframes:We}}function I(_,y){let S=[];for(let E in _)S.push({time:parseFloat(E),value:_[E]});S.sort(b);for(let E=0;E<16;E++)G(S,E,y.elements[E]);return S;function b(E,K){return E.time-K.time}}let D=new U,V=new U,M=new gi;function C(_,y){let S=_.keyframes,b=_.name,E=[],K=[],ie=[],Le=[];for(let xe=0,we=S.length;xe<we;xe++){let Fe=S[xe],ce=Fe.time,Oe=Fe.value;Ae.fromArray(Oe).transpose(),Ae.decompose(D,M,V),E.push(ce),K.push(D.x,D.y,D.z),ie.push(M.x,M.y,M.z,M.w),Le.push(V.x,V.y,V.z)}return K.length>0&&y.push(new Wi(b+".position",E,K)),ie.length>0&&y.push(new Gi(b+".quaternion",E,ie)),Le.length>0&&y.push(new Wi(b+".scale",E,Le)),y}function G(_,y,S){let b,E=!0,K,ie;for(K=0,ie=_.length;K<ie;K++)b=_[K],b.value[y]===void 0?b.value[y]=null:E=!1;if(E===!0)for(K=0,ie=_.length;K<ie;K++)b=_[K],b.value[y]=S;else ae(_,y)}function ae(_,y){let S,b;for(let E=0,K=_.length;E<K;E++){let ie=_[E];if(ie.value[y]===null){if(S=fe(_,E,y),b=F(_,E,y),S===null){ie.value[y]=b.value[y];continue}if(b===null){ie.value[y]=S.value[y];continue}W(ie,S,b,y)}}}function fe(_,y,S){for(;y>=0;){let b=_[y];if(b.value[S]!==null)return b;y--}return null}function F(_,y,S){for(;y<_.length;){let b=_[y];if(b.value[S]!==null)return b;y++}return null}function W(_,y,S,b){if(S.time-y.time===0){_.value[b]=y.value[b];return}_.value[b]=(_.time-y.time)*(S.value[b]-y.value[b])/(S.time-y.time)+y.value[b]}function B(_){let y={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"instance_animation":y.animations.push(o(E.getAttribute("url")));break}}je.clips[_.getAttribute("id")]=y}function ne(_){let y=[],S=_.name,b=_.end-_.start||-1,E=_.animations;for(let K=0,ie=E.length;K<ie;K++){let Le=R(E[K]);for(let xe=0,we=Le.length;xe<we;xe++)y.push(Le[xe])}return new Oa(S,b,y)}function Q(_){return x(je.clips[_],ne)}function X(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"skin":y.id=o(E.getAttribute("source")),y.skin=ee(E);break;case"morph":y.id=o(E.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[_.getAttribute("id")]=y}function ee(_){let y={sources:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(E.textContent);break;case"source":let K=E.getAttribute("id");y.sources[K]=O(E);break;case"joints":y.joints=q(E);break;case"vertex_weights":y.vertexWeights=he(E);break}}return y}function q(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let K=E.getAttribute("semantic"),ie=o(E.getAttribute("source"));y.inputs[K]=ie;break}}return y}function he(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let K=E.getAttribute("semantic"),ie=o(E.getAttribute("source")),Le=parseInt(E.getAttribute("offset"));y.inputs[K]={id:ie,offset:Le};break;case"vcount":y.vcount=a(E.textContent);break;case"v":y.v=a(E.textContent);break}}return y}function z(_){let y={id:_.id},S=je.geometries[y.id];return _.skin!==void 0&&(y.skin=j(_.skin),S.sources.skinIndices=y.skin.indices,S.sources.skinWeights=y.skin.weights),y}function j(_){let S={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=_.sources,E=_.vertexWeights,K=E.vcount,ie=E.v,Le=E.inputs.JOINT.offset,xe=E.inputs.WEIGHT.offset,we=_.sources[_.joints.inputs.JOINT],Fe=_.sources[_.joints.inputs.INV_BIND_MATRIX],ce=b[E.inputs.WEIGHT.id].array,Oe=0,Ne,We,ze;for(Ne=0,ze=K.length;Ne<ze;Ne++){let Et=K[Ne],_t=[];for(We=0;We<Et;We++){let xt=ie[Oe+Le],Ri=ie[Oe+xe],kn=ce[Ri];_t.push({index:xt,weight:kn}),Oe+=2}for(_t.sort(Vt),We=0;We<4;We++){let xt=_t[We];xt!==void 0?(S.indices.array.push(xt.index),S.weights.array.push(xt.weight)):(S.indices.array.push(0),S.weights.array.push(0))}}for(_.bindShapeMatrix?S.bindMatrix=new lt().fromArray(_.bindShapeMatrix).transpose():S.bindMatrix=new lt().identity(),Ne=0,ze=we.array.length;Ne<ze;Ne++){let Et=we.array[Ne],_t=new lt().fromArray(Fe.array,Ne*Fe.stride).transpose();S.joints.push({name:Et,boneInverse:_t})}return S;function Vt(Et,_t){return _t.weight-Et.weight}}function se(_){return x(je.controllers[_],z)}function re(_){let y={init_from:i(_,"init_from")[0].textContent};je.images[_.getAttribute("id")]=y}function le(_){return _.build!==void 0?_.build:_.init_from}function Ce(_){let y=je.images[_];return y!==void 0?x(y,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function He(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"profile_COMMON":y.profile=Ve(E);break}}je.effects[_.getAttribute("id")]=y}function Ve(_){let y={surfaces:{},samplers:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"newparam":gt(E,y);break;case"technique":y.technique=Xe(E);break;case"extra":y.extra=w(E);break}}return y}function gt(_,y){let S=_.getAttribute("sid");for(let b=0,E=_.childNodes.length;b<E;b++){let K=_.childNodes[b];if(K.nodeType===1)switch(K.nodeName){case"surface":y.surfaces[S]=$(K);break;case"sampler2D":y.samplers[S]=un(K);break}}}function $(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"init_from":y.init_from=E.textContent;break}}return y}function un(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"source":y.source=E.textContent;break}}return y}function Xe(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=E.nodeName,y.parameters=nt(E);break;case"extra":y.extra=w(E);break}}return y}function nt(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[E.nodeName]=Ue(E);break;case"transparent":y[E.nodeName]={opaque:E.hasAttribute("opaque")?E.getAttribute("opaque"):"A_ONE",data:Ue(E)};break}}return y}function Ue(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"color":y[E.nodeName]=r(E.textContent);break;case"float":y[E.nodeName]=parseFloat(E.textContent);break;case"texture":y[E.nodeName]={id:E.getAttribute("texture"),extra:Lt(E)};break}}return y}function Lt(_){let y={technique:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"extra":ct(E,y);break}}return y}function ct(_,y){for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique":L(E,y);break}}}function L(_,y){for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[E.nodeName]=parseFloat(E.textContent);break;case"wrapU":case"wrapV":E.textContent.toUpperCase()==="TRUE"?y.technique[E.nodeName]=1:E.textContent.toUpperCase()==="FALSE"?y.technique[E.nodeName]=0:y.technique[E.nodeName]=parseInt(E.textContent);break;case"bump":y[E.nodeName]=pe(E);break}}}function w(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique":y.technique=Z(E);break}}return y}function Z(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"double_sided":y[E.nodeName]=parseInt(E.textContent);break;case"bump":y[E.nodeName]=pe(E);break}}return y}function pe(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"texture":y[E.nodeName]={id:E.getAttribute("texture"),texcoord:E.getAttribute("texcoord"),extra:Lt(E)};break}}return y}function ue(_){return _}function me(_){return x(je.effects[_],ue)}function Be(_){let y={name:_.getAttribute("name")};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"instance_effect":y.url=o(E.getAttribute("url"));break}}je.materials[_.getAttribute("id")]=y}function Se(_){let y,S=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(S=S.toLowerCase(),S){case"tga":y=Nc;break;default:y=fa}return y}function Pe(_){let y=me(_.url),S=y.profile.technique,b;switch(S.type){case"phong":case"blinn":b=new Ua;break;case"lambert":b=new Ws;break;default:b=new Qt;break}b.name=_.name||"";function E(xe,we=null){let Fe=y.profile.samplers[xe.id],ce=null;if(Fe!==void 0){let Oe=y.profile.surfaces[Fe.source];ce=Ce(Oe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Ce(xe.id);if(ce!==null){let Oe=Se(ce);if(Oe!==void 0){let Ne=Oe.load(ce),We=xe.extra;if(We!==void 0&&We.technique!==void 0&&c(We.technique)===!1){let ze=We.technique;Ne.wrapS=ze.wrapU?hs:An,Ne.wrapT=ze.wrapV?hs:An,Ne.offset.set(ze.offsetU||0,ze.offsetV||0),Ne.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Ne.wrapS=hs,Ne.wrapT=hs;return we!==null&&(Ne.colorSpace=we),Ne}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let K=S.parameters;for(let xe in K){let we=K[xe];switch(xe){case"diffuse":we.color&&b.color.fromArray(we.color),we.texture&&(b.map=E(we.texture,Gt));break;case"specular":we.color&&b.specular&&b.specular.fromArray(we.color),we.texture&&(b.specularMap=E(we.texture));break;case"bump":we.texture&&(b.normalMap=E(we.texture));break;case"ambient":we.texture&&(b.lightMap=E(we.texture,Gt));break;case"shininess":we.float&&b.shininess&&(b.shininess=we.float);break;case"emission":we.color&&b.emissive&&b.emissive.fromArray(we.color),we.texture&&(b.emissiveMap=E(we.texture,Gt));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let ie=K.transparent,Le=K.transparency;if(Le===void 0&&ie&&(Le={float:1}),ie===void 0&&Le&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Le)if(ie.data.texture)b.transparent=!0;else{let xe=ie.data.color;switch(ie.opaque){case"A_ONE":b.opacity=xe[3]*Le.float;break;case"RGB_ZERO":b.opacity=1-xe[0]*Le.float;break;case"A_ZERO":b.opacity=1-xe[3]*Le.float;break;case"RGB_ONE":b.opacity=xe[0]*Le.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}b.opacity<1&&(b.transparent=!0)}if(S.extra!==void 0&&S.extra.technique!==void 0){let xe=S.extra.technique;for(let we in xe){let Fe=xe[we];switch(we){case"double_sided":b.side=Fe===1?Fn:zn;break;case"bump":b.normalMap=E(Fe.texture),b.normalScale=new et(1,1);break}}}return b}function $e(_){return x(je.materials[_],Pe)}function ht(_){let y={name:_.getAttribute("name")};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"optics":y.optics=de(E);break}}je.cameras[_.getAttribute("id")]=y}function de(_){for(let y=0;y<_.childNodes.length;y++){let S=_.childNodes[y];switch(S.nodeName){case"technique_common":return Mt(S)}}return{}}function Mt(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"perspective":case"orthographic":y.technique=b.nodeName,y.parameters=ft(b);break}}return y}function ft(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[b.nodeName]=parseFloat(b.textContent);break}}return y}function Qe(_){let y;switch(_.optics.technique){case"perspective":y=new Kt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let S=_.optics.parameters.ymag,b=_.optics.parameters.xmag,E=_.optics.parameters.aspect_ratio;b=b===void 0?S*E:b,S=S===void 0?b/E:S,b*=.5,S*=.5,y=new zr(-b,b,S,-S,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:y=new Kt;break}return y.name=_.name||"",y}function Ge(_){let y=je.cameras[_];return y!==void 0?x(y,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Ie(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique_common":y=rt(E);break}}je.lights[_.getAttribute("id")]=y}function rt(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=E.nodeName,y.parameters=bt(E)}}return y}function bt(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"color":let K=r(E.textContent);y.color=new ot().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(E.textContent);break;case"quadratic_attenuation":let ie=parseFloat(E.textContent);y.distance=ie?Math.sqrt(1/ie):0;break}}return y}function Dt(_){let y;switch(_.technique){case"directional":y=new qr;break;case"point":y=new Tl;break;case"spot":y=new El;break;case"ambient":y=new Al;break}return _.parameters.color&&y.color.copy(_.parameters.color),_.parameters.distance&&(y.distance=_.parameters.distance),y}function ut(_){let y=je.lights[_];return y!==void 0?x(y,Dt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function _e(_){let y={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},S=i(_,"mesh")[0];if(S!==void 0){for(let b=0;b<S.childNodes.length;b++){let E=S.childNodes[b];if(E.nodeType!==1)continue;let K=E.getAttribute("id");switch(E.nodeName){case"source":y.sources[K]=O(E);break;case"vertices":y.vertices=ve(E);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",E.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(be(E));break;default:console.log(E)}}je.geometries[_.getAttribute("id")]=y}}function O(_){let y={array:[],stride:3};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"float_array":y.array=r(b.textContent);break;case"Name_array":y.array=s(b.textContent);break;case"technique_common":let E=i(b,"accessor")[0];E!==void 0&&(y.stride=parseInt(E.getAttribute("stride")));break}}return y}function ve(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];b.nodeType===1&&(y[b.getAttribute("semantic")]=o(b.getAttribute("source")))}return y}function be(_){let y={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let K=o(E.getAttribute("source")),ie=E.getAttribute("semantic"),Le=parseInt(E.getAttribute("offset")),xe=parseInt(E.getAttribute("set")),we=xe>0?ie+xe:ie;y.inputs[we]={id:K,offset:Le},y.stride=Math.max(y.stride,Le+1),ie==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=a(E.textContent);break;case"p":y.p=a(E.textContent);break}}return y}function Ze(_){let y={};for(let S=0;S<_.length;S++){let b=_[S];y[b.type]===void 0&&(y[b.type]=[]),y[b.type].push(b)}return y}function qe(_){let y=0;for(let S=0,b=_.length;S<b;S++)_[S].hasUV===!0&&y++;y>0&&y<_.length&&(_.uvsNeedsFix=!0)}function wt(_){let y={},S=_.sources,b=_.vertices,E=_.primitives;if(E.length===0)return{};let K=Ze(E);for(let ie in K){let Le=K[ie];qe(Le),y[ie]=Tt(Le,S,b)}return y}function Tt(_,y,S){let b={},E={array:[],stride:0},K={array:[],stride:0},ie={array:[],stride:0},Le={array:[],stride:0},xe={array:[],stride:0},we={array:[],stride:4},Fe={array:[],stride:4},ce=new Vn,Oe=[],Ne=0;for(let We=0;We<_.length;We++){let ze=_[We],Vt=ze.inputs,Et=0;switch(ze.type){case"lines":case"linestrips":Et=ze.count*2;break;case"triangles":Et=ze.count*3;break;case"polylist":for(let _t=0;_t<ze.count;_t++){let xt=ze.vcount[_t];switch(xt){case 3:Et+=3;break;case 4:Et+=6;break;default:Et+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}ce.addGroup(Ne,Et,We),Ne+=Et,ze.material&&Oe.push(ze.material);for(let _t in Vt){let xt=Vt[_t];switch(_t){case"VERTEX":for(let Ri in S){let kn=S[Ri];switch(Ri){case"POSITION":let lr=E.array.length;if(St(ze,y[kn],xt.offset,E.array),E.stride=y[kn].stride,y.skinWeights&&y.skinIndices&&(St(ze,y.skinIndices,xt.offset,we.array),St(ze,y.skinWeights,xt.offset,Fe.array)),ze.hasUV===!1&&_.uvsNeedsFix===!0){let wg=(E.array.length-lr)/E.stride;for(let vd=0;vd<wg;vd++)ie.array.push(0,0)}break;case"NORMAL":St(ze,y[kn],xt.offset,K.array),K.stride=y[kn].stride;break;case"COLOR":St(ze,y[kn],xt.offset,xe.array),xe.stride=y[kn].stride;break;case"TEXCOORD":St(ze,y[kn],xt.offset,ie.array),ie.stride=y[kn].stride;break;case"TEXCOORD1":St(ze,y[kn],xt.offset,Le.array),ie.stride=y[kn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ri)}}break;case"NORMAL":St(ze,y[xt.id],xt.offset,K.array),K.stride=y[xt.id].stride;break;case"COLOR":St(ze,y[xt.id],xt.offset,xe.array,!0),xe.stride=y[xt.id].stride;break;case"TEXCOORD":St(ze,y[xt.id],xt.offset,ie.array),ie.stride=y[xt.id].stride;break;case"TEXCOORD1":St(ze,y[xt.id],xt.offset,Le.array),Le.stride=y[xt.id].stride;break}}}return E.array.length>0&&ce.setAttribute("position",new It(E.array,E.stride)),K.array.length>0&&ce.setAttribute("normal",new It(K.array,K.stride)),xe.array.length>0&&ce.setAttribute("color",new It(xe.array,xe.stride)),ie.array.length>0&&ce.setAttribute("uv",new It(ie.array,ie.stride)),Le.array.length>0&&ce.setAttribute("uv1",new It(Le.array,Le.stride)),we.array.length>0&&ce.setAttribute("skinIndex",new It(we.array,we.stride)),Fe.array.length>0&&ce.setAttribute("skinWeight",new It(Fe.array,Fe.stride)),b.data=ce,b.type=_[0].type,b.materialKeys=Oe,b}function St(_,y,S,b,E=!1){let K=_.p,ie=_.stride,Le=_.vcount;function xe(ce){let Oe=K[ce+S]*Fe,Ne=Oe+Fe;for(;Oe<Ne;Oe++)b.push(we[Oe]);if(E){let We=b.length-Fe-1;yo.setRGB(b[We+0],b[We+1],b[We+2]).convertSRGBToLinear(),b[We+0]=yo.r,b[We+1]=yo.g,b[We+2]=yo.b}}let we=y.array,Fe=y.stride;if(_.vcount!==void 0){let ce=0;for(let Oe=0,Ne=Le.length;Oe<Ne;Oe++){let We=Le[Oe];if(We===4){let ze=ce+ie*0,Vt=ce+ie*1,Et=ce+ie*2,_t=ce+ie*3;xe(ze),xe(Vt),xe(_t),xe(Vt),xe(Et),xe(_t)}else if(We===3){let ze=ce+ie*0,Vt=ce+ie*1,Et=ce+ie*2;xe(ze),xe(Vt),xe(Et)}else if(We>4)for(let ze=1,Vt=We-2;ze<=Vt;ze++){let Et=ce+ie*0,_t=ce+ie*ze,xt=ce+ie*(ze+1);xe(Et),xe(_t),xe(xt)}ce+=ie*We}}else for(let ce=0,Oe=K.length;ce<Oe;ce+=ie)xe(ce)}function on(_){return x(je.geometries[_],wt)}function At(_){let y={name:_.getAttribute("name")||"",joints:{},links:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":po(b,y);break}}je.kinematicsModels[_.getAttribute("id")]=y}function dn(_){return _.build!==void 0?_.build:_}function jn(_){return x(je.kinematicsModels[_],dn)}function po(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"joint":y.joints[b.getAttribute("sid")]=Rc(b);break;case"link":y.links.push(oa(b));break}}}function Rc(_){let y;for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":y=ar(b);break}}return y}function ar(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":let E=r(b.textContent);y.axis.fromArray(E);break;case"limits":let K=b.getElementsByTagName("max")[0],ie=b.getElementsByTagName("min")[0];y.limits.max=parseFloat(K.textContent),y.limits.min=parseFloat(ie.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function oa(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":y.attachments.push(or(b));break;case"matrix":case"translate":case"rotate":y.transforms.push(la(b));break}}return y}function or(_){let y={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"link":y.links.push(oa(b));break;case"matrix":case"translate":case"rotate":y.transforms.push(la(b));break}}return y}function la(_){let y={type:_.nodeName},S=r(_.textContent);switch(y.type){case"matrix":y.obj=new lt,y.obj.fromArray(S).transpose();break;case"translate":y.obj=new U,y.obj.fromArray(S);break;case"rotate":y.obj=new U,y.obj.fromArray(S),y.angle=ms.degToRad(S[3]);break}return y}function mo(_){let y={name:_.getAttribute("name")||"",rigidBodies:{}};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":y.rigidBodies[b.getAttribute("name")]={},Lc(b,y.rigidBodies[b.getAttribute("name")]);break}}je.physicsModels[_.getAttribute("id")]=y}function Lc(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":Pc(b,y);break}}}function Pc(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"inertia":y.inertia=r(b.textContent);break;case"mass":y.mass=r(b.textContent)[0];break}}}function Ic(_){let y={bindJointAxis:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":y.bindJointAxis.push(A(b));break}}je.kinematicsScenes[o(_.getAttribute("url"))]=y}function A(_){let y={target:_.getAttribute("target").split("/").pop()};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":let E=b.getElementsByTagName("param")[0];y.axis=E.textContent;let K=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=K.substring(0,K.length-1);break}}return y}function H(_){return _.build!==void 0?_.build:_}function J(_){return x(je.kinematicsScenes[_],H)}function te(){let _=Object.keys(je.kinematicsModels)[0],y=Object.keys(je.kinematicsScenes)[0],S=Object.keys(je.visualScenes)[0];if(_===void 0||y===void 0)return;let b=jn(_),E=J(y),K=ha(S),ie=E.bindJointAxis,Le={};for(let Fe=0,ce=ie.length;Fe<ce;Fe++){let Oe=ie[Fe],Ne=Ht.querySelector('[sid="'+Oe.target+'"]');if(Ne){let We=Ne.parentElement;xe(Oe.jointIndex,We)}}function xe(Fe,ce){let Oe=ce.getAttribute("name"),Ne=b.joints[Fe];K.traverse(function(We){We.name===Oe&&(Le[Fe]={object:We,transforms:Y(ce),joint:Ne,position:Ne.zeroPosition})})}let we=new lt;xd={joints:b&&b.joints,getJointValue:function(Fe){let ce=Le[Fe];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,ce){let Oe=Le[Fe];if(Oe){let Ne=Oe.joint;if(ce>Ne.limits.max||ce<Ne.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+ce+" outside of limits (min: "+Ne.limits.min+", max: "+Ne.limits.max+").");else if(Ne.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let We=Oe.object,ze=Ne.axis,Vt=Oe.transforms;Ae.identity();for(let Et=0;Et<Vt.length;Et++){let _t=Vt[Et];if(_t.sid&&_t.sid.indexOf(Fe)!==-1)switch(Ne.type){case"revolute":Ae.multiply(we.makeRotationAxis(ze,ms.degToRad(ce)));break;case"prismatic":Ae.multiply(we.makeTranslation(ze.x*ce,ze.y*ce,ze.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ne.type);break}else switch(_t.type){case"matrix":Ae.multiply(_t.obj);break;case"translate":Ae.multiply(we.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Ae.scale(_t.obj);break;case"rotate":Ae.multiply(we.makeRotationAxis(_t.obj,_t.angle));break}}We.matrix.copy(Ae),We.matrix.decompose(We.position,We.quaternion,We.scale),Le[Fe].position=ce}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Y(_){let y=[],S=Ht.querySelector('[id="'+_.id+'"]');for(let b=0;b<S.childNodes.length;b++){let E=S.childNodes[b];if(E.nodeType!==1)continue;let K,ie;switch(E.nodeName){case"matrix":K=r(E.textContent);let Le=new lt().fromArray(K).transpose();y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:Le});break;case"translate":case"scale":K=r(E.textContent),ie=new U().fromArray(K),y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:ie});break;case"rotate":K=r(E.textContent),ie=new U().fromArray(K);let xe=ms.degToRad(K[3]);y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:ie,angle:xe});break}}return y}function Te(_){let y=_.getElementsByTagName("node");for(let S=0;S<y.length;S++){let b=y[S];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}let Ae=new lt,ke=new U;function Ye(_){let y={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType!==1)continue;let E;switch(b.nodeName){case"node":y.nodes.push(b.getAttribute("id")),Ye(b);break;case"instance_camera":y.instanceCameras.push(o(b.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(at(b));break;case"instance_light":y.instanceLights.push(o(b.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(at(b));break;case"instance_node":y.instanceNodes.push(o(b.getAttribute("url")));break;case"matrix":E=r(b.textContent),y.matrix.multiply(Ae.fromArray(E).transpose()),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":E=r(b.textContent),ke.fromArray(E),y.matrix.multiply(Ae.makeTranslation(ke.x,ke.y,ke.z)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":E=r(b.textContent);let K=ms.degToRad(E[3]);y.matrix.multiply(Ae.makeRotationAxis(ke.fromArray(E),K)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":E=r(b.textContent),y.matrix.scale(ke.fromArray(E)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Pt(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):je.nodes[y.id]=y,y}function at(_){let y={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"bind_material":let E=b.getElementsByTagName("instance_material");for(let K=0;K<E.length;K++){let ie=E[K],Le=ie.getAttribute("symbol"),xe=ie.getAttribute("target");y.materials[Le]=o(xe)}break;case"skeleton":y.skeletons.push(o(b.textContent));break;default:break}}return y}function it(_,y){let S=[],b=[],E,K,ie;for(E=0;E<_.length;E++){let we=_[E],Fe;if(Pt(we))Fe=tt(we),st(Fe,y,S);else if(Ci(we)){let Oe=je.visualScenes[we].children;for(let Ne=0;Ne<Oe.length;Ne++){let We=Oe[Ne];if(We.type==="JOINT"){let ze=tt(We.id);st(ze,y,S)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(E=0;E<y.length;E++)for(K=0;K<S.length;K++)if(ie=S[K],ie.bone.name===y[E].name){b[E]=ie,ie.processed=!0;break}for(E=0;E<S.length;E++)ie=S[E],ie.processed===!1&&(b.push(ie),ie.processed=!0);let Le=[],xe=[];for(E=0;E<b.length;E++)ie=b[E],Le.push(ie.bone),xe.push(ie.boneInverse);return new gl(Le,xe)}function st(_,y,S){_.traverse(function(b){if(b.isBone===!0){let E;for(let K=0;K<y.length;K++){let ie=y[K];if(ie.name===b.name){E=ie.boneInverse;break}}E===void 0&&(E=new lt),S.push({bone:b,boneInverse:E,processed:!1})}})}function zt(_){let y=[],S=_.matrix,b=_.nodes,E=_.type,K=_.instanceCameras,ie=_.instanceControllers,Le=_.instanceLights,xe=_.instanceGeometries,we=_.instanceNodes;for(let ce=0,Oe=b.length;ce<Oe;ce++)y.push(tt(b[ce]));for(let ce=0,Oe=K.length;ce<Oe;ce++){let Ne=Ge(K[ce]);Ne!==null&&y.push(Ne.clone())}for(let ce=0,Oe=ie.length;ce<Oe;ce++){let Ne=ie[ce],We=se(Ne.id),ze=on(We.id),Vt=Zn(ze,Ne.materials),Et=Ne.skeletons,_t=We.skin.joints,xt=it(Et,_t);for(let Ri=0,kn=Vt.length;Ri<kn;Ri++){let lr=Vt[Ri];lr.isSkinnedMesh&&(lr.bind(xt,We.skin.bindMatrix),lr.normalizeSkinWeights()),y.push(lr)}}for(let ce=0,Oe=Le.length;ce<Oe;ce++){let Ne=ut(Le[ce]);Ne!==null&&y.push(Ne.clone())}for(let ce=0,Oe=xe.length;ce<Oe;ce++){let Ne=xe[ce],We=on(Ne.id),ze=Zn(We,Ne.materials);for(let Vt=0,Et=ze.length;Vt<Et;Vt++)y.push(ze[Vt])}for(let ce=0,Oe=we.length;ce<Oe;ce++)y.push(tt(we[ce]).clone());let Fe;if(b.length===0&&y.length===1)Fe=y[0];else{Fe=E==="JOINT"?new Na:new Cn;for(let ce=0;ce<y.length;ce++)Fe.add(y[ce])}return Fe.name=E==="JOINT"?_.sid:_.name,Fe.matrix.copy(S),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let In=new Qt({name:_i.DEFAULT_MATERIAL_NAME,color:16711935});function Zt(_,y){let S=[];for(let b=0,E=_.length;b<E;b++){let K=y[_[b]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[b]),S.push(In)):S.push($e(K))}return S}function Zn(_,y){let S=[];for(let b in _){let E=_[b],K=Zt(E.materialKeys,y);if(K.length===0&&(b==="lines"||b==="linestrips"?K.push(new Vr):K.push(new Ua)),b==="lines"||b==="linestrips")for(let we=0,Fe=K.length;we<Fe;we++){let ce=K[we];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let Oe=new Vr;Oe.color.copy(ce.color),Oe.opacity=ce.opacity,Oe.transparent=ce.transparent,K[we]=Oe}}let ie=E.data.attributes.skinIndex!==void 0,Le=K.length===1?K[0]:K,xe;switch(b){case"lines":xe=new yl(E.data,Le);break;case"linestrips":xe=new Da(E.data,Le);break;case"triangles":case"polylist":ie?xe=new pl(E.data,Le):xe=new Ft(E.data,Le);break}S.push(xe)}return S}function Pt(_){return je.nodes[_]!==void 0}function tt(_){return x(je.nodes[_],zt)}function ca(_){let y={name:_.getAttribute("name"),children:[]};Te(_);let S=i(_,"node");for(let b=0;b<S.length;b++)y.children.push(Ye(S[b]));je.visualScenes[_.getAttribute("id")]=y}function Ut(_){let y=new Cn;y.name=_.name;let S=_.children;for(let b=0;b<S.length;b++){let E=S[b];y.add(tt(E.id))}return y}function Ci(_){return je.visualScenes[_]!==void 0}function ha(_){return x(je.visualScenes[_],Ut)}function Ps(_){let y=i(_,"instance_visual_scene")[0];return ha(o(y.getAttribute("url")))}function ua(){let _=je.clips;if(c(_)===!0){if(c(je.animations)===!1){let y=[];for(let S in je.animations){let b=R(S);for(let E=0,K=b.length;E<K;E++)y.push(b[E])}_o.push(new Oa("default",-1,y))}}else for(let y in _)_o.push(Q(y))}function ln(_){let y="",S=[_];for(;S.length;){let b=S.shift();b.nodeType===Node.TEXT_NODE?y+=b.textContent:(y+=`
`,S.push.apply(S,b.childNodes))}return y.trim()}if(e.length===0)return{scene:new Gs};let pi=new DOMParser().parseFromString(e,"application/xml"),Ht=i(pi,"COLLADA")[0],Sn=pi.getElementsByTagName("parsererror")[0];if(Sn!==void 0){let _=i(Sn,"div")[0],y;return _?y=_.textContent:y=ln(Sn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let da=Ht.getAttribute("version");console.debug("THREE.ColladaLoader: File version",da);let go=h(i(Ht,"asset")[0]),fa=new Sl(this.manager);fa.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Nc;za&&(Nc=new za(this.manager),Nc.setPath(this.resourcePath||t));let yo=new ot,_o=[],xd={},Sg=0,je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Ht,"library_animations","animation",p),m(Ht,"library_animation_clips","animation_clip",B),m(Ht,"library_controllers","controller",X),m(Ht,"library_images","image",re),m(Ht,"library_effects","effect",He),m(Ht,"library_materials","material",Be),m(Ht,"library_cameras","camera",ht),m(Ht,"library_lights","light",Ie),m(Ht,"library_geometries","geometry",_e),m(Ht,"library_nodes","node",Ye),m(Ht,"library_visual_scenes","visual_scene",ca),m(Ht,"library_kinematics_models","kinematics_model",At),m(Ht,"library_physics_models","physics_model",mo),m(Ht,"scene","instance_kinematics_scene",Ic),g(je.animations,v),g(je.clips,ne),g(je.controllers,z),g(je.images,le),g(je.effects,ue),g(je.materials,Pe),g(je.cameras,Qe),g(je.lights,Dt),g(je.geometries,wt),g(je.visualScenes,Ut),ua(),te();let xo=Ps(i(Ht,"scene")[0]);return xo.animations=_o,go.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),xo.rotation.set(-Math.PI/2,0,0)),xo.scale.multiplyScalar(go.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),_o},kinematics:xd,library:je,scene:xo}}};var Ip=new pn,Bl=new U,$s=class extends Rl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new It(e,3)),this.setAttribute("uv",new It(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new qs(t,6,1);return this.setAttribute("instanceStart",new ti(i,3,0)),this.setAttribute("instanceEnd",new ti(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new qs(t,6,1);return this.setAttribute("instanceColorStart",new ti(i,3,0)),this.setAttribute("instanceColorEnd",new ti(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Ip.setFromBufferAttribute(t),this.boundingBox.union(Ip))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bl)),Bl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Bl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};On.line={uniforms:Ul.merge([ge.common,ge.fog,ge.line]),vertexShader:`
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
		`};var Xi=class extends ci{constructor(e){super({type:"LineMaterial",uniforms:Ul.clone(On.line.uniforms),vertexShader:On.line.vertexShader,fragmentShader:On.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Np=new U,Dp=new U,mn=new vt,gn=new vt,xi=new vt,iu=new U,su=new lt,yn=new Pl,Up=new U,kl=new pn,zl=new ei,vi=new vt,bi,Ys;function Op(n,e,t){return vi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),vi.multiplyScalar(1/vi.w),vi.x=Ys/t.width,vi.y=Ys/t.height,vi.applyMatrix4(n.projectionMatrixInverse),vi.multiplyScalar(1/vi.w),Math.abs(Math.max(vi.x,vi.y))}function $b(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){yn.start.fromBufferAttribute(s,o),yn.end.fromBufferAttribute(r,o),yn.applyMatrix4(t);let c=new U,h=new U;bi.distanceSqToSegment(yn.start,yn.end,h,c),h.distanceTo(c)<Ys*.5&&e.push({point:h,pointOnLine:c,distance:bi.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function Yb(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;bi.at(1,xi),xi.w=1,xi.applyMatrix4(e.matrixWorldInverse),xi.applyMatrix4(i),xi.multiplyScalar(1/xi.w),xi.x*=r.x/2,xi.y*=r.y/2,xi.z=0,iu.copy(xi),su.multiplyMatrices(e.matrixWorldInverse,a);for(let f=0,m=h;f<m;f++){if(mn.fromBufferAttribute(l,f),gn.fromBufferAttribute(c,f),mn.w=1,gn.w=1,mn.applyMatrix4(su),gn.applyMatrix4(su),mn.z>u&&gn.z>u)continue;if(mn.z>u){let v=mn.z-gn.z,R=(mn.z-u)/v;mn.lerp(gn,R)}else if(gn.z>u){let v=gn.z-mn.z,R=(gn.z-u)/v;gn.lerp(mn,R)}mn.applyMatrix4(i),gn.applyMatrix4(i),mn.multiplyScalar(1/mn.w),gn.multiplyScalar(1/gn.w),mn.x*=r.x/2,mn.y*=r.y/2,gn.x*=r.x/2,gn.y*=r.y/2,yn.start.copy(mn),yn.start.z=0,yn.end.copy(gn),yn.end.z=0;let x=yn.closestPointToPointParameter(iu,!0);yn.at(x,Up);let p=ms.lerp(mn.z,gn.z,x),d=p>=-1&&p<=1,T=iu.distanceTo(Up)<Ys*.5;if(d&&T){yn.start.fromBufferAttribute(l,f),yn.end.fromBufferAttribute(c,f),yn.start.applyMatrix4(a),yn.end.applyMatrix4(a);let v=new U,R=new U;bi.distanceSqToSegment(yn.start,yn.end,R,v),t.push({point:R,pointOnLine:v,distance:bi.origin.distanceTo(R),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Ha=class extends Ft{constructor(e=new $s,t=new Xi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Np.fromBufferAttribute(t,a),Dp.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Np.distanceTo(Dp);let r=new qs(s,2,1);return e.setAttribute("instanceDistanceStart",new ti(r,1,0)),e.setAttribute("instanceDistanceEnd",new ti(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;bi=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Ys=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),zl.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=Ys*.5;else{let u=Math.max(s.near,zl.distanceToPoint(bi.origin));c=Op(s,u,l.resolution)}if(zl.radius+=c,bi.intersectsSphere(zl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),kl.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Ys*.5;else{let u=Math.max(s.near,kl.distanceToPoint(bi.origin));h=Op(s,u,l.resolution)}kl.expandByScalar(h),bi.intersectsBox(kl)!==!1&&(i?$b(this,t):Yb(this,s,t))}};var jb="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",Va=null;function Zb(){if(Va)return Va;Va=new Map;for(let n of jb.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,a]=i.split(" ");Va.set(t?t+"/"+s:s,[+r,+a])}}return Va}var js=Math.PI/180;function Jb(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*js,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*js,a=(23.439-36e-8*i)*js,o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(a)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*js+t*js-o,u=e*js;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/js}function Kb(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=Zb().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function Fp(n=Date.now(),e=Kb()){if(e.lat==null){let r=new Date(n),a=r.getHours()+r.getMinutes()/60,o=a>=7&&a<20,l=new Date(n);return l.setHours(o?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:o,next:+l}}let t=r=>Jb(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let a=r-s,o=r;for(;o-a>3e4;){let l=(a+o)/2;t(l)===i?a=l:o=l}return{day:i,next:Math.ceil(o)}}return{day:i,next:n+24*36e5}}var hi=["en","fr","ca","es"];var Qb={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Vp(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of Qb[e]||hi)if(n[t])return n[t];return""}var Ga={en:{together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Type a slogan, then take your photo.",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Tape un slogan, puis prends ta photo.",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Escriu un esl\xF2gan i fes la teva foto.",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Escribe un eslogan y haz tu foto.",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},eM={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Wa={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function ru(){return Object.fromEntries(hi.map(n=>[n,""]))}function Zs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:hi.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||ru(),e.sub=e.sub||ru(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[];let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(hi.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(hi.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||ru(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=eM[s.layout]?s.layout:"carousel",s.card=Wa[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(hi.map(a=>[a,s[r]||""]))),hi.forEach(a=>{s[r][a]==null&&(s[r][a]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(hi.map(a=>[a,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(lu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function au(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function Gp(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function ou(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function De(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var tM=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Gl(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!tM.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Js(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var lu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function gs(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function cu(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Bp(n){try{let e=await cu();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function kp(n,e){let t=await cu();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function zp(n){try{let e=await cu();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Hl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Zs(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Zs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Vl=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Bp("demo:content:v6");if(e)return Zs(e);if(window.HC_CONTENT)return Zs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Zs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await zp("demo:file:"+i.path);continue}await kp("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await kp("demo:content:v6",e),"demo"}async reset(){await zp("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Bp("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Hp=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Wl=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],nM=["font","size","lh","weight","italic","ls","upper"],Wp=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function iM(n){let e=Hp.find(i=>i.id===n);if(e)return e.css;let t=Wp(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Hp[0].css}function qi(n,e){let t=Wl.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...nM,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=iM(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Xp(n){let e=[],t=[],i=[];for(let s of Wl){let r=n&&n.typo&&n.typo[s.id]||{},a=qi(n,s.id),o=c=>r[c]!==void 0&&r[c]!==""&&r[c]!==null&&r[c]!==s[c];if(s.vars){o("font")&&e.push(`:root { ${s.vars.map(c=>`${c}: ${a.css};`).join(" ")} }`);continue}if(!s.sel)continue;let l=[];if(o("font")&&l.push(`font-family: ${a.css}`),o("size")&&l.push(s.clamp?`font-size: clamp(${Math.round(a.size*s.clamp[0])}px, ${(a.size/s.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(o("lh")||o("size")&&!s.clamp&&!o("lh")&&s.lh)&&l.push(`line-height: ${o("lh")?a.lh:+(s.lh*a.size/s.size).toFixed(1)}px`),o("weight")&&l.push(`font-weight: ${a.weight}`),o("italic")&&l.push(`font-style: ${a.italic?"italic":"normal"}`),o("ls")&&l.push(`letter-spacing: ${a.ls}em`),o("upper")&&l.push(`text-transform: ${a.upper?"uppercase":"none"}`),l.length&&e.push(`${s.sel.join(", ")} { ${l.join("; ")} }`),s.mob&&(o("size")||o("lh"))){let c=o("lh")?a.lh:s.lh*a.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob)}px; line-height: ${Math.round(c*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(a.size*s.mob*.8)}px; line-height: ${Math.round(c*s.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function qp(n){let e=new Map;for(let t of Wl){let i=qi(n,t.id),s=Wp(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function hu(n){let e=new Set;for(let t of Wl){let i=qi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function $p(n,e,t=!1){let i=qi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let o=r.measureText(a),l=(o.actualBoundingBoxAscent||i.size*1.4)-(o.actualBoundingBoxDescent||0);if(r.fillText(a,120,120+l/2),t){let c=r.getImageData(0,0,240,240),h=c.data;for(let u=0;u<h.length;u+=4)h[u]=255-h[u],h[u+1]=255-h[u+1],h[u+2]=255-h[u+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var Yp=window.HC_BASE||"",Kl=window.HC_MODE==="demo"?new Vl(Yp):new Hl(Yp),_s=window.HC_ASSETS||null,sM=location.protocol==="file:",wm=20261102;window.HC_SITE_VERSION=wm;var kt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,an=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return kt&&kt.files&&kt.files[e]?kt.files[e]:_s&&_s[e]&&_s[e].startsWith("data:")?_s[e]:Kl.url(e)};async function rM(n){if(_s&&_s[n]&&!_s[n].startsWith("data:"))return _s[n];let e=await fetch(an(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var Ee=null,wi="en",Me=n=>Vp(n,wi),Je=n=>(Ga[wi]||Ga.en)[n],aM=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Ms={zoom:2,focus:300},oM=.08,jp={};function Em(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=jp[t]}):(e.forEach(t=>{jp[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Eu=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=au(Ee,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:Ga.en.all,fr:Ga.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Me(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},k={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Nt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Eu(this.section.def)}},Nt=[],yt={x:0,y:0,z:0,zoom:Ms.zoom},Ln={x:0,y:0,z:0},ji=0,Ei=[],lM={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function en(n,e,t,i={}){for(let r of Ei)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ji+(i.delay||0),ease:lM[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ei.push(s),s}var eo=(n,e)=>en({},n,{},{onComplete:e,ease:"linear"});function xn(n){for(let e=Ei.length-1;e>=0;e--)Ei[e].obj===n&&Ei.splice(e,1)}function na(n){return Ei.some(e=>e.obj===n&&ji>=e.start)}function Tm(n,e){if(!e&&ji<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ji-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function cM(){for(let n of Ei.slice())if(Tm(n,!1)){let e=Ei.indexOf(n);e>=0&&Ei.splice(e,1),n.onComplete&&n.onComplete()}}function Am(){Ei.splice(0).forEach(n=>Tm(n,!0))}function hM(n,e,t,i,s,r,a){xn(yt),en(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),Wu(i,s,r,a)}function Wu(n,e,t,i){xn(Ln),en(Ln,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function uM(n,e,t,i){xn(yt),en(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var ic=1,vn=n=>n<=1?1:1-Math.pow(1-1/n,ic),Ti=Math.PI/180,Tu=(n,e,t)=>new U(n,e,-t),ys=(n,e,t)=>[-n,e,t],bn=document.getElementById("stage"),As=new Pa({canvas:bn,antialias:!0});As.debug.checkShaderErrors=!1;As.setPixelRatio(Math.min(window.devicePixelRatio||1,2));As.setClearColor(16777215,1);var Ss=new Gs;Ss.add(new wl(16777215,14211288,2.2));var Cm=new qr(16777215,1.2);Cm.position.set(300,800,500);Ss.add(Cm);var ii=new Kt(60,1,1,6e4),Rm=new Xi({color:oe.lineColor,linewidth:oe.lineThickness}),Au=new Xi({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),Lm=new Xi({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),Ql=new Xi({color:oe.locatorColor,linewidth:1.3}),Pm=[Rm,Au,Lm,Ql],Im=new Fa;Im.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:an(n));var uu=new Map;function ws(n){return n?sM&&!/^(data:|blob:|https?:)/.test(an(n))?Promise.reject(new Error("local")):(uu.has(n)||uu.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(an(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=an(n)})),uu.get(n)):Promise.reject(new Error("no image"))}function Xu(n){return n.colorSpace=Gt,n.anisotropy=Math.min(8,As.capabilities.getMaxAnisotropy()),n}var dM=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=Xu(new Gr(n)),t=new Vi(1,1),i=new Gs;return[zn,hn,Fn].forEach(s=>i.add(new Ft(t,new Qt({map:e,side:s})))),i.add(new Ft(t,new Qt({color:1118481}))),i.add(new Ia(new Hr({map:e,transparent:!0}))),i})(),Yt=0,Xt=0,Gn=!1,sc=()=>Gn,nr=0,Zp=0,to=()=>Ee.settings.negative==="auto";function pc(){if(!to())return nr=0,!!Ee.settings.negative;let n=Fp();return nr=n.next,!n.day}function qu(){if(kt||Ee.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!to()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function Nm(n){n!==Gn&&(Gn=n,wc(),Re&&Re.retexture())}function $u(){if(clearTimeout(Zp),!to())return;Zp=setTimeout(()=>{if(Date.now()>=nr-1e3){let e=pc(),t=qu();Nm(t??e)}$u()},Math.min(Math.max(nr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&nr&&Date.now()>=nr){let n=pc(),e=qu();Nm(e??n),$u()}});var Dm=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},qt=()=>{let n=Ee.settings.accent||"#ffcc00";return sc()?Dm(n):n},$t='Georgia, Gelasio, "Times New Roman", serif',_n='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',Yu=1,mt=n=>Math.round(n*Yu),fM=700,ju=()=>{let n=Yt||window.innerWidth,e=Xt||window.innerHeight;return n<fM||Math.min(n,e)<500},Zi=ju;function Cs(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...Ee?hu(Ee.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Jp=0,Um=[];function pM(){clearTimeout(Jp),Jp=setTimeout(async()=>{try{await Promise.all(hu(Ee.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}Ee.settings.logo||Uu(),Re&&!Re.loading&&Re.retexture()},150)}function Om(){let n=Ee.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=Xp(n);e.textContent!==t&&(e.textContent=t);let i=qp(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",Um.push(new Promise(a=>{r.onload=()=>{a(),pM()},r.onerror=a})),document.head.appendChild(r)}}),$t=qi(n,"card").css,_n=qi(n,"cardsm").css,Yu=Math.max(.5,Math.min(2,(+qi(n,"card").scale||100)/100))}function tn(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function nn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),Xu(new Gr(s))}function Ji(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,l=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,t,i,s,r),sc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Cu=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function Fm(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function ia(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Zu=n=>Nt.some(e=>e.def.id===n.section),mM=(n,e)=>Nt.findIndex(t=>t.def.id===n.section)-Nt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),rc=n=>Ee.posts.filter(e=>e.published&&e!==n&&Zu(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(mM),Bm=n=>{let e=ou(Ee,n).filter(Zu);return e.length?e:rc(n)},du=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),gM=n=>Gp(Ee,n).filter(Zu),no=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&sd(e.src)==="image")||{}).src||"",Kp=new Map,Ru=n=>rc(n).filter(no);async function mc(n,e=Bm(n)){let t=e.filter(no);if(!t.length)return null;let i=t.find(r=>r.id===Kp.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,a)=>r[0]-a[0]).map(r=>r[1]);for(let r of s){let a=await ws(no(r)).catch(()=>null);if(a)return Kp.set(n.id,r.id),{im:a,project:r}}return null}function gc(n,e,t,i,s){Ji(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function km(n,e){let t=Me(n.title).trim(),i=Me(n.subtitle).trim();if(!t&&!i)return null;let s=Zi(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),a=s?17:Math.max(7.5,r*.74),o=Math.round(r*(s?.6:.75)),l=e-2*o,c=document.createElement("canvas").getContext("2d");c.font=`${r}px ${$t}`;let h=t?tn(c,t,l).slice(0,2):[];c.font=`${a}px ${$t}`;let u=i?tn(c,i,l).slice(0,2):[],f=Math.round(r*1.2),m=Math.round(a*1.25),g=Math.ceil(o+h.length*f+(u.length?3+u.length*m:0)+o-2);return{tex:nn(e,g,p=>{p.fillStyle="rgba(0,0,0,.62)",p.fillRect(0,0,e,g),p.textBaseline="top";let d=o;p.fillStyle="#fff",p.font=`${r}px ${$t}`,h.forEach(T=>{p.fillText(T,o,d),d+=f}),d+=3,p.fillStyle="#d6d6d6",p.font=`${a}px ${$t}`,u.forEach(T=>{p.fillText(T,o,d),d+=m})},3),bh:g,w:e}}async function yM(n,e,t){let i=n.thumb?await ws(n.thumb).catch(()=>null):null,s=n.thumbBack?await ws(n.thumbBack).catch(()=>null):null,r=i?null:await mc(n);await Cs();let a=(c,h=!1)=>{if(i){Ji(c,i,0,0,e,t);return}r?gc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=Zi(),f=u?14:16,m=u?[mt(31),mt(34),2]:[mt(24),28,3],g=u?[mt(20),mt(23),1]:[mt(13),16,2],x=u?mt(15):10,p=u?mt(13):9,d=u?26:20;c.fillStyle=qt(),c.fillRect(f,u?13:18,18,2),c.fillStyle="#fff",c.font=`${m[0]}px ${$t}`;let T=tn(c,Me(n.title),e-2*f).slice(0,m[2]),v=u?22:30;T.forEach((P,I)=>c.fillText(P,f,v+I*m[1])),c.fillStyle=r?"#d6d6d6":"#8c8c8c",c.font=`${g[0]}px ${$t}`,tn(c,Me(n.subtitle),e-2*f).slice(0,u&&T.length<2?2:g[2]).forEach((P,I)=>c.fillText(P,f,v+8+T.length*m[1]+I*g[1]));let R=r?hm(r.project,r.project.media[0]&&r.project.media[0].credit):hm(n,n.media[0]&&n.media[0].credit);if(c.fillStyle=qt(),c.font=`${x}px ${_n}`,c.fillText([n.date,Me(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),f,t-(R?d+x+6:x+12)),R){c.font=`${p}px ${_n}`;let P=R;for(;c.measureText(P).width>e-2*f&&P.length>4;)P=P.slice(0,-2)+"\u2026";c.fillStyle=r?"rgba(0,0,0,.55)":"#2a2a2a",c.fillRect(0,t-d,e,d),c.fillStyle=r?"#d0d0d0":"#9a9a9a",c.textBaseline="middle",c.fillText(P,f,t-d/2)}c.globalAlpha=1},o=nn(e,t,a,2),l=s?nn(e,t,c=>Ji(c,s,0,0,e,t),2):r?nn(e,t,ia(e,c=>a(c,!0)),2):nn(e,t,Fm(a),1.5);return[o,l,i?km(n,e):null]}async function _M(n,e,t){let i=n.thumb?await ws(n.thumb).catch(()=>null):null,s=n.thumbBack?await ws(n.thumbBack).catch(()=>null):null,r=i||du(n)?null:await mc(n,Ru(n));await Cs();let a=(l,c=!1)=>{if(du(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=Zi()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${_n}`;let x=tn(l,Me(n.title),e*(g>1?.9:.76)).slice(0,3);x.forEach((p,d)=>l.fillText(p,e/2,t/2+(d-(x.length-1)/2)*t*.16*g)),sc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),f=i.naturalWidth*u,m=i.naturalHeight*u;l.drawImage(i,(e-f)/2,(t-m)/2,f,m),sc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Ji(l,i,0,0,e,t);return}r?gc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=`${Math.round(t*.42*Yu)}px ${$t}`,l.textAlign="center",l.textBaseline="middle",l.fillText(Cu(Me(n.title)),e/2,t*.45),l.fillStyle=qt(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},o=s?nn(e,t,l=>Ji(l,s,0,0,e,t),3):r?nn(e,t,ia(e,l=>a(l,!0)),2):nn(e,t,Fm(a),2);return[nn(e,t,a,3),o,i||r||du(n)?km(n,e):null]}async function xM(n,e,t){let i=await mc(n);if(i)return vM(n,e,t,i);let s=n.thumb?await ws(n.thumb).catch(()=>null):null;await Cs();let r=Me(n.title).trim(),a=Zi(),o=mt(a?30:21),l=a?mt(32):22,c=a?2:3,h=s?72:18,u=e-h-14,f=nn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Ji(g,s,13,12.75,53,53):(g.fillStyle=qt(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=`${o}px ${$t}`,g.textBaseline="top",tn(g,r,u).slice(0,c).forEach((x,p)=>g.fillText(x,h,(s?12:20)+p*l))}),m=nn(e,t,ia(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=`${o}px ${$t}`,g.textBaseline="top",tn(g,r,u).slice(0,c).forEach((x,p)=>g.fillText(x,h,(s?9:17)+p*l))}));return[f,m]}async function vM(n,e,t,i){await Cs();let s=Me(n.title).trim(),r=e-32,a=Zi(),o=mt(a?30:21),l=a?mt(32):22,c=h=>u=>{gc(u,i,e,t,h?.2:a?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=qt(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=`${o}px ${$t}`,u.textBaseline="top",tn(u,s,r).slice(0,a?2:3).forEach((f,m)=>u.fillText(f,18,20+m*l)),u.globalAlpha=1};return[nn(e,t,c(!1),2),nn(e,t,ia(e,c(!0)),2)]}async function bM(n,e,t){let i=n.thumb?await ws(n.thumb).catch(()=>null):null;await Cs();let r=nn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),Ji(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=qt(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${mt(12)}px ${$t}`,a.textAlign="center",a.textBaseline="top",a.fillText(Me(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var MM={image:yM,portrait:_M,text:xM,place:bM};async function SM(n,e,t){let i=n.thumb?await ws(n.thumb).catch(()=>null):null,s=i?{im:i}:await mc(n);await Cs();let r=Me(n.title).trim(),a=(Me(n.subtitle).trim()||Js(Me(n.body)).join(" ")).replace(/\s+/g," ").trim(),o=t<110,l=Zi(),c=s&&!l?Math.round(o?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[f,m,g,x]=l?o?[28,31,0,1]:[36,40,0,1]:o?[15,18,9.5,12]:[17,20,10.5,13.5],p=(R,P)=>{R.globalAlpha=P,R.textBaseline="top";let I=e-h-12;R.fillStyle=qt(),R.fillRect(h,o?9:13,14,2),R.fillStyle="#fff",R.font=`${mt(f)}px ${$t}`;let D=o?16:22;tn(R,r,I).slice(0,l?3:2).forEach(V=>{R.fillText(V,h,D),D+=mt(m)}),R.globalAlpha=1},d=R=>{R.fillStyle="#111",R.fillRect(0,0,e,t),s&&(Ji(R,s.im,0,0,e,t),R.fillStyle="rgba(0,0,0,.18)",R.fillRect(0,0,e,t)),p(R,.38)},T=R=>{let P=R.createLinearGradient(0,0,0,t);P.addColorStop(0,"rgba(0,0,0,.7)"),P.addColorStop(1,"rgba(0,0,0,.3)"),R.fillStyle=P,R.fillRect(0,0,e,t),p(R,1)};return[nn(e,t,(R=>P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&l&&!R&&gc(P,s,e,t,.6),s&&!l&&Ji(P,s.im,e-c,0,c,t),P.textBaseline="top",P.fillStyle=qt(),P.fillRect(h,o?9:13,14,2),P.fillStyle="#fff",P.font=`${mt(f)}px ${$t}`;let I=tn(P,r,u).slice(0,l?3:2),D=o?16:22;I.forEach(C=>{P.fillText(C,h,D),D+=mt(m)}),D+=o?2:5,P.fillStyle=l?"#dcdcdc":"#bdbdbd",P.font=`${mt(g)}px ${$t}`;let V=l?0:Math.max(0,Math.floor((t-D-8)/mt(x))),M=tn(P,a,u);if(M.length>V&&(M=M.slice(0,V),V)){let C=M[V-1];for(;C&&P.measureText(C+"\u2026").width>u;)C=C.replace(/\s*\S+$/,"");M[V-1]=C+"\u2026"}M.forEach(C=>{P.fillText(C,h,D),D+=mt(x)}),P.globalAlpha=1})(!1),2),nn(e,t,ia(e,d),2),null,nn(e,t,ia(e,T),2)]}function Xl(n,e){return Cs().then(()=>e==="place"?nn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(44)}px ${$t}`,t.fillText(Me(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${mt(18)}px ${$t}`,tn(t,Me(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=qt(),t.font=`14px ${_n}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",Js(Me(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=qt(),t.font=`15px ${_n}`,t.fillText(Me(n.place),32,260)},1.5):Zi()?nn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(25)}px ${$t}`;let i=tn(t,Me(n.title)+".",172).slice(0,2);i.forEach((f,m)=>t.fillText(f,14,12+m*mt(27))),t.font=`${mt(13)}px ${_n}`;let s=rc(n).map(f=>Me(f.title).trim()).filter(Boolean),r=s.length?tn(t,s.join("  \xB7  "),172).slice(0,2):[],a=Me(n.place)?168:188,o=a-r.length*16-16,l=18+i.length*mt(27);t.fillStyle="#b4b4b4",t.font=`${mt(17)}px ${$t}`;let c=(r.length?o-6:a)-mt(20),h=tn(t,Me(n.subtitle),172),u=[];for(let f of h){if(l>c)break;u.push(f),l+=mt(20)}if(u.length<h.length&&u.length){let f=u[u.length-1];for(;f&&t.measureText(f+"\u2026").width>172;)f=f.replace(/\s*\S+$/,"");u[u.length-1]=f+"\u2026"}u.forEach((f,m)=>t.fillText(f,14,18+i.length*mt(27)+m*mt(20))),r.length&&(t.fillStyle=qt(),t.font=`${mt(11)}px ${_n}`,t.fillText(Je("together").toUpperCase(),14,o),t.fillStyle="#e6e6e6",t.font=`${mt(13)}px ${_n}`,r.forEach((f,m)=>t.fillText(f,14,o+16+m*16))),Me(n.place)&&(t.fillStyle=qt(),t.font=`${mt(13)}px ${_n}`,t.fillText(Me(n.place).toUpperCase(),14,176))},2.5):nn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(20)}px ${$t}`;let i=tn(t,Me(n.title)+".",166).slice(0,2);i.forEach((u,f)=>t.fillText(u,18,14+f*22));let s=20+i.length*22;t.font=`10px ${_n}`;let r=rc(n).map(u=>Me(u.title).trim()).filter(Boolean),a=r.length?tn(t,r.join("  \xB7  "),166).slice(0,3):[],o=(Me(n.place)?174:188)-a.length*13-13;t.fillStyle="#8c8c8c",t.font=`${mt(15)}px ${$t}`;let l=(a.length?o-4:168)-18,c=[];Me(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>tn(t,u,166).forEach(f=>c.push(f)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,f)=>t.fillText(u,19,20+i.length*22+f*18)),t.fillStyle="#bbb",t.font=`11px ${_n}`,Js(Me(n.body)).join(" ").split(/\s+/).length>1&&tn(t,Js(Me(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((a.length?o-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),a.length&&(t.fillStyle=qt(),t.font=`8px ${_n}`,t.fillText(Je("together").toUpperCase(),19,o),t.fillStyle="#e6e6e6",t.font=`10px ${_n}`,a.forEach((u,f)=>t.fillText(u,19,o+13+f*13))),Me(n.place)&&(t.fillStyle=qt(),t.font=`11px ${_n}`,t.fillText(Me(n.place).toUpperCase(),19,180))}))}function wM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${_n}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${_n}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let l=new Ia(new Hr({map:Xu(new Gr(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*a/o,c,1),l.renderOrder=2,l}var Mi=document.createElement("div");Mi.id="net-tip";Mi.className="ui";Mi.hidden=!0;document.body.appendChild(Mi);function zm(n,e,t){Mi.innerHTML=`<b>${De(n.city||"")}</b>${n.titles.map(s=>`<span>${De(s)}</span>`).join("")}`,Mi.hidden=!1;let i=Mi.getBoundingClientRect();Mi.style.left=Math.min(e+14,Yt-i.width-10)+"px",Mi.style.top=Math.max(10,t-i.height-12)+"px"}function yc(){Mi.hidden=!0}var Lu=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Cn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=Ee.models.find(h=>h.id===this.def.model)||Ee.models[0];if(!t)return;let i=await rM(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new Cn;o.add(a),a.traverse(h=>{if(!h.isMesh)return;let u=f=>{let m=f.map||f.emissiveMap||null;return m?new Qt({map:m}):t.untextured==="white"?new Ws({color:15921906}):t.untextured==="black"?new Ws({color:2236962}):new Qt({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){o.updateMatrixWorld(!0);let h=new pn().setFromObject(o),u=h.getSize(new U),f=(t.height||420)/Math.max(u.y,1e-6)*l;o.scale.setScalar(f),o.updateMatrixWorld(!0);let m=new pn().setFromObject(o),g=m.getCenter(new U);o.position.set(-g.x,-m.min.y,-g.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let h=new pn().setFromObject(o);h.max.y-h.min.y>oe.object3DMaxHeight&&o.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),o.scale.multiplyScalar(l)}let c=new Cn;c.rotation.y=(t.rotationY||0)*Ti,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Tu(this.p.x,0,this.p.z))}};function Hm(n,e){let t=new $s;t.setPositions(n);let i=new Ha(t,e);return i.computeLineDistances(),i}var Pu=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Cn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Vi(this.width,this.height);if(this.setBand(i),s){let h=new Ft(r,new Qt({map:s,side:hn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let a=new Ft(r,new Qt({map:e,side:zn})),o=new Ft(r,new Qt({map:t,side:hn}));a.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=Hm([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Au),this.group.add(a,o,this.frame),this.meshes.push(a,o),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...ys(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ti,t.rotation.x=-e.rotX*Ti,t.rotation.z=e.rotZ*Ti,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&en(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=Lm,eo(.8,()=>{this.frame&&(this.frame.material=Au)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),en(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){xn(this.thumb);let i=Ki(),s={x:-i*Math.sin(k.degreeCamera),z:-i*Math.cos(k.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||1;return en(this.thumb,t,{x:s.x+a*e/l,y:r.y,z:s.z+o*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/l,z:o/l}}}moveBack(e=0){xn(this.thumb);let t=this.p2;en(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){en(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>en(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),xn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Ft(new Vi(t,s),new Qt({map:e.tex,transparent:!0,depthWrite:!1,side:zn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&en(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,a=r+t*e.bh;i.setY(0,a),i.setY(1,a),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),xn(this.thumb),this.bhi&&xn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!Pm.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function fu(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ti;i===0&&(i=2*Math.PI);let s=(i-k.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),k.selected=e,k.cameraY=t.p2.y,k.degreeCamera+=s,t.selectIt(),!0}function pu(n,e,t){k.degreeCamera%=2*Math.PI,k.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(k.selected=e,k.degreeCamera=Math.PI,i.ready&&(k.cameraY=i.p2.y,i.selectIt(),t(i)))}var mu=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||na(r.thumb))return;let o=r.thumb,l=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+l)*vn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*vn(2*i))}),ac={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ti+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>fu(n,e),move:(n,e,t,i)=>mu(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>pu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>mu(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,a=g=>{let x=n.angle*(g+1);return x-Math.cos(x)*n.angle/2},o=t,l;t+1>s?(o=2*Math.round(i/2)-t-1,l=Math.pow(-1,o)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,f=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(a(o)),y:u*Math.sin(a(h)),z:f*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{fu(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*vn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return gs(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=_c(n.def);return{x:i[0]+s[0],y:(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>pu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||na(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*vn(2*oe.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ti+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>fu(n,e),move:(n,e,t,i)=>mu(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>pu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||na(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}}},EM=["fan","arc","map"],Qp=n=>ju()&&EM.includes(n.layout),Ju=()=>Ms.zoom*Ms.focus*Math.min(1,Yt/900);function Vm(){let n=r=>{let a=document.getElementById(r);if(!a||a.hidden)return null;let o=a.getBoundingClientRect();return o.width&&o.height?o:null},t={l:12,t:12,r:Yt-12,b:Xt-12},i=["slogan","logo","reel-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Xt>=Yt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs")].filter(Boolean).forEach(r=>{r.left<Yt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Yt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Yt-12),t.b-t.t<120&&(t.t=12,t.b=Xt-12),t}function em(n){let e=Vm(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,a=n.h*n.k+oe.planeFrameDistance,o=s?1.5*r+102.5:r,l=s?Math.max(a,130):a,c=Math.round(Math.min(o,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let x=Math.ceil(u/g),p=g*o+(g-1)*c,d=x*l+(x-1)*c,T=Math.min(t/p,i/d);(!h||T>h.sc+1e-9)&&(h={cols:g,rows:x,gw:p,gh:d,sc:T})}let f=n.container.position.y-n.section.container.position.y,m=s?140:40;return{...h,sc:h.sc*.94,uw:o,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Yt/2,fy:(e.t+e.b)/2-Xt/2,zg:200,gy:m+h.gh/2-f,yOff:f,dx:s?(r/2+102.5)/2:0}}var TM=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},gu=2*Math.PI,Ku=n=>n+(((Math.PI-n)%gu+gu+Math.PI)%gu-Math.PI);function tm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>TM(e,i),focus(e,t){let i=e.postViews[t];i&&(k.selected=t,k.degreeCamera=Ku(k.degreeCamera),k.cameraY=sa(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===ac.fan?i.turnAround("x",720):n===ac.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var nm=new U,im=new U,Iu=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=ac[this.def.layout]||ac.carousel,this.card=this.def.card,this.posts=k.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?SM:MM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Wa.text.size:Wa.image.size:Wa[this.card].size,this.k=NM(this.def),this.container=new Cn,this.container.position.copy(e.container.position),Ss.add(this.container),this.postViews=this.posts.map((t,i)=>new Pu(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Qp(this.def)&&(this.grid=em(this),this.L=this.gridL=tm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Nt.map(d=>d.def.id)),t=new Map,i=(d,T,v)=>{if(!lu(d))return;let R=(+d.lat).toFixed(1)+","+(+d.lon).toFixed(1),P=t.get(R);P||t.set(R,P={loc:d,city:d.city||"",titles:[],base:!1}),T&&!P.titles.includes(T)&&P.titles.push(T),v&&(P.base=!0)};if(au(Ee,this.def.id).forEach(d=>i(d.location,Me(d.title),!0)),Ee.posts.forEach(d=>{d.published&&e.has(d.section)&&d.section!==this.def.id&&d.spots.forEach(T=>i(T,Me(d.title)))}),!t.size)return;Ql.color.set(qt());let s=50,r=new Cn,a=[...t.values()],o=a.filter(d=>d.base),l=new _l(1,14,10),c={on:new Qt({color:qt()}),base:new Qt({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ji+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},a.forEach(d=>{d.xz=gs(d.loc)}),a.forEach(d=>{d.from=d.base?null:o.length?o.map(T=>[T,Math.hypot(gs(T.loc)[0]-d.xz[0],gs(T.loc)[1]-d.xz[1])]).sort((T,v)=>T[1]-v[1])[0][0]:null,d.d=d.from?Math.hypot(gs(d.from.loc)[0]-d.xz[0],gs(d.from.loc)[1]-d.xz[1]):0}),a.sort((d,T)=>T.base-d.base||d.d-T.d);let h=70,u=null,f=-1;a.forEach(d=>{let T=a.filter(v=>Math.hypot(v.xz[0]-d.xz[0],v.xz[1]-d.xz[1])<h);T.length>f&&(f=T.length,u=T)});let m=u.reduce((d,T)=>d+T.xz[0],0)/u.length,g=u.reduce((d,T)=>d+T.xz[1],0)/u.length,x=new Wt;x.position.set(...ys(m,s,g)),r.add(x),this.net.focus=x;let p=[];a.forEach((d,T)=>{let[v,R]=d.xz,P=d.base?0:.15+T*.07,I=new Ft(l,d.base?c.base:c.on);I.scale.setScalar(d.base?7:4+Math.min(3,d.titles.length)),I.position.set(...ys(v,s,R)),r.add(I),I.userData={netNode:d},this.net.hits.push(I);let D=null,V=0;if(d.from){let[G,ae]=gs(d.from.loc),fe=s+18+d.d*.32,F=2*fe-s,W=(G+v)/2,B=(ae+R)/2;V=Math.max(12,Math.min(48,Math.round(d.d/6)));let ne=ee=>{let q=1-ee;return ys(q*q*G+2*q*ee*W+ee*ee*v,q*q*s+2*q*ee*F+ee*ee*s,q*q*ae+2*q*ee*B+ee*ee*R)},Q=[];for(let ee=0;ee<V;ee++)Q.push(...ne(ee/V),...ne((ee+1)/V));let X=new $s;X.setPositions(Q),D=new Ha(X,Ql),D.computeLineDistances(),X.instanceCount=0,r.add(D)}let M=null,C=1/0;if(d.city){for(let G of p){let ae=Math.max(Math.abs(G[0]-v)/80,Math.abs(G[1]-R)/22);ae<G[2]&&(C=Math.min(C,ae))}C>.06&&(M=wM(d.city.toUpperCase()+(d.titles.length>1&&!d.base?" \xB7 "+d.titles.length:""),d.base),M.position.set(...ys(v,s+9,R)),r.add(M),p.push([v,R,C]))}this.net.items.push({dot:I,arc:D,segs:V,label:M,thr:C,delay:P,base:d.base,ds:I.scale.x,ls:M?M.scale.clone():null,x:v,z:R})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=ji+oM;for(;ji<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,en(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:o}),en(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,en(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...ys(...i),...ys(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=Hm(r,Rm),this.container.add(a))}async openInfo(e,t,i){let s=await Xl(this.posts[t],"place");if(!this.alive)return;let r=new Ft(new Vi(165,130),new Qt({map:s,side:Fn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),en(a.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),eo(i,()=>{r.visible=!0})}async openPost3D(){let e=k.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Ft(new Vi(90,90),new Qt({side:Fn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await Xl(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),eo(oe.tween,()=>{!k.postOpen||k.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,xn(i),en(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[k.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(xn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Qp(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?em(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=tm(this.base)):this.base,r)return!0;let a=oe.tween*1.2,o=k.postOpen&&this.def.open==="focus3d"?k.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===o)return;let u=this.following.has(l);xn(l.thumb),this.following.add(l),en(l.thumb,a,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let f=this.infos[c];f&&(xn(f.p),en(f.p,a,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=ho(),r=Ju(),a=2*e.width+3,o=Math.max(90,r*Math.max(a/(i.aw*.92),e.height/(i.ah*.85))),l=Ki()+Ms.focus,c=o/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;xn(e.thumb),en(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-o,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;xn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(k.degreeCamera/Ti)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=k.selected,s=this.postViews[k.selected]&&this.postViews[k.selected].ready?t(this.postViews[k.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),k.selected=i}goNext(){return k.selected+1>=this.n?0:k.selected+1}goPrev(){return k.selected-1<=-1?this.n-1:k.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/Qi),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*vn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ji-this.net.start-s.delay)/.9)),a=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(a*s.segs));let o=s.base||r>=1;s.dot.visible=o,s.label&&(s.label.visible=o&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...ys(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ti)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),nm.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),im.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(nm).add(im)}}async retexture(){this.net&&(Ql.color.set(qt()),this.net.mats.on.color.set(qt()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(o=>o&&o.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(Zr===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(o=>o&&o.dispose()),i.bhi&&s[3]){let o=e(i.bhi.mesh,s[3]);o&&o.dispose()}else s[3]&&s[3].dispose();let a=this.infos[t];if(a){let o=await Xl(this.posts[t],"place");if(!this.alive){o.dispose();return}let l=e(a.mesh,o);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&k.postOpen){let t=await Xl(this.posts[k.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(xn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),yc(),Ss.remove(this.container)}},Ks=[],Re=null,Qs=oe.cameraEaseSpeed,Es=!1,Yn=!1,xs=0,vs=0,ec=0,tc=0,Rs=!1,Mn=!1,es=()=>Ks[k.currentSection];function AM(){let n=oe.cameraHeight;k.cameraY=k.cameraY+n/7<=3*n?k.cameraY+n/7:n*3}function CM(){let n=oe.cameraHeight;k.cameraY=k.cameraY-n/7>=n/7?k.cameraY-n/7:n/7}var RM={map:58},_c=(n=(es()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||RM[n.layout]||100)/100)),si=()=>Re&&Re.L.grid&&Re.grid&&Re.section===es()?Re:null,LM=n=>Ju()/n.sc*Math.min(1,oe.cameraDistanceProportion/Qi);function xc(n){let e=n.grid,t=LM(e),i=t/Ju();return{d:Math.max(20,t-Ms.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var Ki=()=>{let n=si();return n?xc(n).d:oe.cameraDistance*_c()},vc=()=>{let n=si();return n?xc(n).ty:oe.cameraTargetHeight*(((es()||{}).def||{}).layout==="map"?_c()*.62:1)},sm=()=>{let n=si();return n?xc(n).ty:oe.cameraHeight*(((es()||{}).def||{}).layout==="map"?_c()*1.6:1)},ql=new U;function PM(){return!sr()||si()||oe.cameraDistanceProportion>=Qi?0:Math.min(1,(1-oe.cameraDistanceProportion/Qi)*1.25)}function IM(){let n=Re&&Re.net&&Re.net.focus;return n?(n.getWorldPosition(ql),{x:ql.x,y:ql.y,z:-ql.z}):null}function co(){let n=es(),e=PM(),t=e?IM():null,i=vc(),s=si();return s?{x:n.p.x-xc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var sa=()=>{if(!sr()||si())return sm();let n=Math.min(1,oe.cameraDistanceProportion/Qi);return co().ty+(sm()-vc())*Math.pow(n,.55)},NM=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),ho=()=>{let n=co();return{d:Ki(),x:n.x,z:n.z,ty:n.ty}},$n=null;function Gm(n){if(!n||!Re||!Re.relayout())return;xn(yt),xn(Ln),$n=n,si()&&(k.degreeCamera=Ku(k.degreeCamera)),k.cameraY=sa(),Yn=!0,Qs=oe.cameraEaseSpeed;let e=k.postOpen&&k.section.def.open==="focus3d"&&Re.postViews[k.selected];e&&e.ready&&(Re.L.grid?Re.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var DM=0;function UM(){if(++DM%20||!Rs||k.postOpen||Es||!Mn)return;let n=si();if(!n)return;let e=Vm();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&Gm($n||ho())}function OM(){if(!$n)return;let n=ho(),e=vn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-$n[i];Math.abs(s)>.05?($n[i]+=s*e,t=!1):$n[i]=n[i]}na(Ln)||(Ln.x=$n.x,Ln.y=$n.ty,Ln.z=$n.z),!Es&&!Yn&&!na(yt)&&Nu(),t&&($n=null)}function Nu(){let n=$n||ho();yt.x=n.x+n.d*Math.sin(k.actualDeg),yt.z=n.z+n.d*Math.cos(k.actualDeg)}function bc(){Ks.forEach((n,e)=>{e===k.currentSection?n.container.parent||Ss.add(n.container):n.container.parent&&Ss.remove(n.container)}),Es=!1,Yn=!1,bn.classList.remove("dragging"),Zr=null,Qr=null,Ya=null,Re&&Re.destroy(),$n=null,Re=new Iu(es()),oc(k.selected),k.actualDeg=k.degreeCamera,FM()}function FM(){let n=co();k.cameraY=sa(),hM(Ki()*Math.sin(k.degreeCamera)+n.x,k.cameraY,Ki()*Math.cos(k.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function oc(n){k.selected=n,Re&&Re.focus(n)}function yu(n){!Re||!Re.n||(Yn=!0,Re.checkPostSelected(),Qs=oe.cameraKeyboardSpeed,oc(n==="NEXT"?Re.goNext():Re.goPrev()))}function Mc(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Xt<680?1e3-Xt:320)*t)}function Wm(){if(Yn=!1,Mc(),!Rs)return;let n=co();if(k.postOpen&&k.section.def.open==="focus3d"&&Re&&Re.postViews[k.selected]){let t=Re.postViews[k.selected];Re.L.grid?Re.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=sr()||si();uM(n.x+Ki()*Math.sin(k.actualDeg),e?k.cameraY:yt.y,n.z+Ki()*Math.cos(k.actualDeg),oe.cameraSpeed/2),e&&Wu(n.x,n.ty,n.z,oe.cameraSpeed/2)}function BM(){if(!Mn){Math.abs(yt.y-k.cameraY)>.007&&!na(yt)&&(yt.y-=(yt.y-k.cameraY)*vn(oe.cameraEaseSpeed));return}if(Es){Qs=oe.cameraEaseSpeed;let n=k.degreeCamera;k.degreeCamera+=(xs-ec)/150,k.actualDeg-=(k.actualDeg-n)*vn(Qs),Nu(),k.cameraY+=(vs-tc)*2;let e=oe.cameraHeight,t=sr()?co().ty+12:e/3;k.cameraY<t?k.cameraY=t:k.cameraY>e*4&&(k.cameraY=4*e),yt.y-=(yt.y-k.cameraY)*vn(Qs),oe.animationMode&&Re&&Re.movePosts((ec-xs)/Math.max(ic,.25),(tc-vs)/Math.max(ic,.25),Qs),ec=xs,tc=vs}else Yn?(Math.abs(k.actualDeg-k.degreeCamera)<=.007&&(Yn=!1),k.actualDeg-=(k.actualDeg-k.degreeCamera)*vn(oe.cameraEaseSpeed),Nu(),yt.y-=(yt.y-k.cameraY)*vn(Qs),oe.animationMode&&Re&&Re.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-k.cameraY)>.007&&(yt.y-=(yt.y-k.cameraY)*vn(oe.cameraEaseSpeed))}function kM(){yt.zoom=6;let e=Re&&Re.postViews[0]&&Re.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,Ln.y=e+100,Wu(Ln.x,vc(),Ln.z,1),Mn=!1,en(yt,1,{zoom:Ms.zoom},{ease:"expoOut"}),setTimeout(()=>{Mn=!0},1*1e3+50)}var _u=new U,xu=new U,Xa=new U,qa=1;function zM(){_u.copy(Tu(yt.x,yt.y,yt.z)),xu.copy(Tu(Ln.x,Ln.y,Ln.z)),Xa.subVectors(xu,_u),Xa.lengthSq()<1e-6&&Xa.set(0,0,-1),Xa.normalize();let n=sr()&&!si()?Math.min(1,oe.cameraDistanceProportion/Qi):1;qa+=Math.abs(n-qa)<.001?n-qa:(n-qa)*vn(oe.cameraEaseSpeed),ii.position.copy(_u).addScaledVector(Xa,-Ms.focus*qa),ii.lookAt(xu);let e=Math.min(1,Yt/900),t=2*Math.atan(Xt/2/(yt.zoom*Ms.focus*e))/Ti;Math.abs(ii.fov-t)>1e-4&&(ii.fov=t,ii.updateProjectionMatrix())}function Xm(){Yt=window.innerWidth,Xt=window.innerHeight,As.setSize(Yt,Xt,!1),ii.aspect=Yt/Xt,ii.updateProjectionMatrix(),Pm.forEach(n=>n.resolution.set(Yt,Xt))}var Bn=document.getElementById("menu"),Ts=document.getElementById("slogan"),qm=document.getElementById("langs"),Sc=[];function HM(){Bn.innerHTML="",Sc=Nt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Me(n.def.name),i.addEventListener("click",()=>{e!==k.currentSection&&Mn&&uo(e)}),t.appendChild(i),Bn.appendChild(t),i}),Bn.style.setProperty("--n",Nt.length),Qu()}function Qu(){Sc.forEach((n,e)=>n.setAttribute("aria-current",String(e===k.currentSection)))}function VM(){Sc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Bn.hidden=!1,qm.hidden=!1,setTimeout(()=>Bn.classList.add("ready"),(Nt.length+1)*200)}var GM=1.44,rm={col:362,gutter:160,side:79,top:34,bottom:20},am={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function $m(){let n=Ee&&Ee.settings&&Ee.settings.fiche||{},e={};for(let t in rm){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?rm[t]:Math.max(am[t][0],Math.min(am[t][1],Math.round(+i)))}return e}function Du(n){let e=$m(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Yt-2*oe.margin)/(Ke.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Ym(){let n=Xt<=420;document.body.classList.toggle("post-short",n&&k.postOpen);let e=Ts.offsetTop+Ts.offsetHeight+(n?1:2)*oe.margin,t=Ke.height+12,i=n?24:(Bn.offsetHeight||90)+70,s=Math.max(n?.4:.5,Math.min(GM,(Xt-e-i)/t));Ke.scale=s,jt.style.top=e+"px",jt.style.transform=s!==1?`scale(${s.toFixed(3)})`:"",jt.style.width=s!==1?Math.ceil((Yt-oe.margin)/s)+"px":"",jt.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Xt-(e+t*s)<Bn.offsetHeight+60)}function io(){if(k.postOpen||document.body.classList.remove("post-cramped","post-short"),k.postOpen&&Ke.open&&Ke.height>100){let n=Ts.offsetTop+Ts.offsetHeight+Ke.height*(Ke.scale||1)+2*oe.margin+30;n=Math.min(n,Xt-Bn.offsetHeight-52),Bn.style.left=oe.margin+"px",Bn.style.top=n+"px"}else Yt<=700||Xt<=520?(Bn.style.left=oe.margin+"px",Bn.style.top=Math.round(Xt-(Bn.offsetHeight||86)-56)+"px"):(Bn.style.left=3*oe.margin+"px",Bn.style.top=Math.round(Xt/1.4)+"px")}var om=(n,e=!1)=>$p(n,Ee.settings,e);function Uu(){let n=Ee.settings,e=n.accent||"#ffcc00",t=n.logo?an(n.logo):om(Gn?"#ffffff":e,Gn);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=t,s.classList.toggle("raw",!n.logo))}),WM(n.logo?t:Gn?om(e):t)}function WM(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var nc="",lc=document.querySelector('meta[name="description"]'),lm=lc?lc.content:"",ed=document.title;function jm(n){if(!(kt||!Ee)){document.title=n?`${Me(n.title).trim()} \xB7 ${Ee.settings.name||"Hand Coded"}`:ed,lc&&(lc.content=n&&(Js(Me(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||Me(n.subtitle))||lm);try{let e=new URL(location.href);n?e.searchParams.set("p",n.id):e.searchParams.delete("p"),e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&ra("?p="+n.id,document.title)}}function XM(){let n=String((Ee.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||kt||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{nc||ra("",ed)}),document.head.appendChild(e)}function ra(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:location.pathname.replace(/index\.html$/,"")+n,title:e,event:t})}catch{}}function wc(){let n=Ee.settings;Om(),hg(),dd(),document.documentElement.lang=wi,document.documentElement.classList.toggle("neg",Gn),k.postOpen||(document.title=ed||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[wi]||n.taglines.en)||[],t=e.length?`<b class="wm">${De(e[0])}</b>${e.slice(1).map(o=>`<span>${De(o)}</span>`).join("")}`:De(n.name);if(Ts.innerHTML=e.length?t.replace('<b class="wm">',`<b class="wm" role="link" tabindex="0" title="${De(Je("homeLink"))}">`):t,document.getElementById("home-slogan").innerHTML=t,Uu(),!n.logo&&document.fonts){let o=qi(n,"logo"),l=`${o.italic?"italic ":""}${o.weight||400} 76px ${o.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{Ee.settings.logo||Uu()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo","home-logo"].forEach(o=>{let l=document.getElementById(o);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(Gn)),l.alt=l.title=Je(Gn?"toPos":"toNeg")):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.alt="",l.removeAttribute("title")))});let s=document.getElementById("bs");s.placeholder=Me(n.home.placeholder),s.setAttribute("aria-label",Je("bsLabel")),td(),document.getElementById("bs-eg").textContent=Me(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=Je("sent"));let r=document.getElementById("offices");r.innerHTML="",(n.offices||[]).forEach(o=>{let l=document.createElement("section");l.innerHTML=`<h3>${De(Me(o.name))}</h3>${(o.lines||[]).map(c=>`<p>${De(c)}</p>`).join("")}${o.mail?`<p><a href="mailto:${De(o.mail)}">${De(o.mail)}</a></p>`:""}`,r.appendChild(l)}),(n.social||[]).forEach(o=>{if(!o.url)return;let l=document.createElement("section");l.innerHTML=`<h3>${De(o.label)}</h3><p><a href="${De(o.url)}" target="_blank" rel="noopener">${De(o.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,r.appendChild(l)}),tr.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),bs.textContent=Me(n.home.enter)||Je("enter"),t1(),ir(),document.querySelectorAll("[data-i18n]").forEach(o=>{o.textContent=Je(o.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Je("keys")),Za.setAttribute("aria-label",Je("prev")),cc.setAttribute("aria-label",Je("next"));let a=n.langs&&n.langs.length?n.langs:hi;[qm,document.getElementById("home-langs")].forEach(o=>{o.innerHTML="",!(a.length<2)&&a.forEach(l=>{let c=document.createElement("button");c.type="button",c.textContent=l.toUpperCase(),c.setAttribute("aria-pressed",String(l===wi)),c.setAttribute("aria-label",Je("lang")+" "+l.toUpperCase()),c.addEventListener("click",()=>Zm(l)),o.appendChild(c)})}),document.documentElement.style.setProperty("--accent",qt()),document.documentElement.style.setProperty("--accent-raw",Ee.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",Dm(Ee.settings.accent||"#ffcc00")),yg()}function td(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,a=s.measureText(n.placeholder).width+r*n.placeholder.length;a>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/a))+"px")}window.addEventListener("resize",()=>{Pn||td()});function Zm(n){if(n!==wi){wi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(wc(),Rs){Sc.forEach((i,s)=>{i.textContent=Me(Nt[s].def.name)}),Tc();let e=k.postOpen,t=k.selected;fi(),k.selected=t,bc(),e&&eo(.6,()=>ro(t))}}}var Ec=document.getElementById("cats"),er=document.getElementById("cat-box"),cm=document.getElementById("cat-list"),Jm=document.getElementById("cat-name"),so=document.getElementById("cat-open"),Za=document.getElementById("pg-prev"),cc=document.getElementById("pg-next");function Tc(){let n=k.data,e=n.categoryList;er.hidden=e.length<=1,cm.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${De(Me(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Ou(),$M(t.id)}),i.appendChild(s),cm.appendChild(i)}),Jm.innerHTML=`${De(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,Km(),Ou()}var $l=document.getElementById("pg-num");function Km(){let n=k.data;Za.disabled=!n.hasNewer(),cc.disabled=!n.hasOlder(),Za.hidden=cc.hidden=!n.hasNewer()&&!n.hasOlder(),$l&&($l.hidden=Za.hidden,$l.textContent=`${n.page}/${n.pages}`,$l.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function Ou(){clearTimeout(Kr),er.classList.remove("open"),so.setAttribute("aria-expanded","false")}var Kr=0,Qm=-1e9;function eg(n=.7){clearTimeout(Kr),!(er.hidden||!k.data||k.data.categoryList.length<=1)&&(Kr=setTimeout(()=>{!Pn||k.postOpen||Ec.classList.contains("hidden")||(er.classList.add("open"),so.setAttribute("aria-expanded","true"),Kr=setTimeout(()=>{er.classList.remove("open"),so.setAttribute("aria-expanded","false")},2600))},n*1e3))}er.addEventListener("pointerenter",()=>clearTimeout(Kr));so.addEventListener("click",()=>{clearTimeout(Kr);let n=er.classList.toggle("open");so.setAttribute("aria-expanded",String(n))});Za.addEventListener("click",()=>{Mn&&sg("newer")});cc.addEventListener("click",()=>{Mn&&sg("older")});var Ls=document.getElementById("kb"),nd=document.getElementById("kb-toggle"),tg=null;function Fu(){Ls.classList.add("open"),nd.setAttribute("aria-expanded","true")}function hc(){Ls.classList.remove("open"),nd.setAttribute("aria-expanded","false")}nd.addEventListener("click",()=>{clearTimeout(tg),Ls.classList.contains("open")?hc():Fu()});Ls.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>ag({code:n.dataset.k,preventDefault(){}})));function $i(n){let e=Ls.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function ng(){Ls.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var id=document.getElementById("whiteboard"),jt=document.getElementById("post2d"),Yr=document.getElementById("strip");function hm(n,e){if(!n||Ee.settings.signImages===!1)return"";let t=[Me(n.title).trim(),(n.author||Ee.settings.name||"").trim()].filter(Boolean);return e&&t.push(Je("photo")+" "+e.trim()),t.join(" \xB7 ")}var qM=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Ac=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Cc=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},sd=n=>Ac(n)?"youtube":Cc(n)?"vimeo":qM(n)?"video":"image",ui=document.createElement("div");ui.id="post-lbl";ui.hidden=!0;ui.setAttribute("aria-hidden","true");jt.appendChild(ui);var Ke={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,ui.hidden=!k.section.def.skills,ui.classList.remove("on"),this.lblOn=!1,k.section.def.skills&&(ui.innerHTML=`<span class="sec">${De(Me(k.section.def.name).trim())}</span><span class="t">${De(Me(n.title).trim())}</span>`),this.open=!0,this.height=e==="place"?300:355,jt.classList.remove("closing"),jt.hidden=!1,Ym(),this.geomKey=JSON.stringify(Du("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(k.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit,!0,s.caption)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit,!0,s.caption)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Yr.style.transform="translateX(0px)"},addRelations(n){let e=Bm(n);if(!e.length)return;let t=ou(Ee,n).length>0,i=`<h2 class="ttl">${De(Je(t?"skillProjects":"together"))}.</h2><span class="n">${e.length}</span>`,s=this.panels[this.panels.length-1];if(k.section.def.skills&&s&&s.classList.contains("txt")){let r=s.offsetWidth||parseFloat(s.style.width)||0;s.style.width=r+236+"px",s.querySelector(".in").insertAdjacentHTML("beforeend",`<div class="relh relh-in" style="left:${r}px">${i}</div>`)}else this.addPanel("relh",236,i);e.forEach(r=>{let a=no(r),o=[r.date,Me(r.place)].filter(Boolean).join(" | "),l=this.addPanel("proj",248,`<button type="button" class="go" data-go="${De(r.id)}" aria-label="${De(Me(r.title))}">`+(a?`<img src="${De(an(a))}" alt="" draggable="false">`:"")+`<span class="mono"${a?" hidden":""}>${De(Cu(Me(r.title)))}</span><span class="cap"><span class="t">${De(Me(r.title).trim())}</span>${o?`<span class="m">${De(o)}</span>`:""}</span></button>`),c=l.querySelector("img");c&&c.addEventListener("error",()=>{c.remove(),l.querySelector(".mono").hidden=!1})})},addLogos(n){let e=n.logos.length,t=e<=4?2:3,i=Math.ceil(e/t),s=68+t*118,r=this.addPanel("logos",s,`<span class="lbl">${De(Je("partners"))}</span><div class="grid" style="grid-template-columns:repeat(${t},110px)">`+n.logos.map(a=>`<span class="lg"><img src="${De(an(a))}" alt="" draggable="false"></span>`).join("")+"</div>");i>3&&(r.querySelector(".grid").style.gridAutoRows=Math.floor(230/i-6)+"px")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Je("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${De(t)}</span><a href="${De(e)}" target="_blank" rel="noopener"><span class="host">${De(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Yr.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0,s=null){let r=sd(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let a=r==="video",o=this.addPanel("media",e,""),l=document.createElement(a?"video":"img");if(l.draggable=!1,l.style.height=e+"px",a){Object.assign(l,{src:an(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Je("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),o.querySelector(".in").appendChild(u)}else l.src=an(n),l.alt="";let c=()=>{let u=Math.round(a?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(o.style.width=u+"px",this.layout())};l.addEventListener(a?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(u=>u!==o),this.layout())}),o.querySelector(".in").prepend(l);let h=s?Me(s).trim():"";if(h){let u=h.search(/[.:]\s/),f=u>0?h.slice(0,u+1):"",m=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(f?`<b>${De(f)}</b> `:"")+De(m),o.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?Ac(n):Cc(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?an(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Je("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),a.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Du(e),a=$m(),o=355-a.bottom;e==="project"&&k.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(P,I)=>r?[P===0?a.side:Math.floor(a.gutter/2),P===I-1?a.side:Math.ceil(a.gutter/2)]:[i,t-i-s],c=Me(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=Me(n.subtitle),u=k.section.def,f=n.tags.filter(P=>P!=="featured").map(P=>u.tags.find(I=>I.id===P)).filter(Boolean).map(P=>Me(P.label)),m=f.length?`${De(Je("postedIn"))} <span>${f.map(De).join(", ")}</span>`:"",g=De([n.date,Me(n.place)].filter(Boolean).join(" | ")),x=Gl(Me(n.body)),p=document.createElement("div");p.className="txt",p.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(p),p.innerHTML=`<h2 class="ttl" style="position:static">${De(c)}</h2>${h?`<p class="stl" style="position:static">${De(h)}</p>`:""}`;let d=p.firstChild.offsetHeight,T=h?p.lastChild.offsetHeight+6:0,v=e==="project"?gM(n):[],R="";if(v.length){let P=(Nt.find(I=>I.def.id===v[0].section)||{}).def;R=`${De((P?Me(P.name):Je("skills")).trim())} ${v.map((I,D)=>`<span class="it"><button type="button" class="go" data-go="${De(I.id)}">${De(Me(I.title).trim())}</button>${D<v.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let P=`<div class="fecha">${g}</div>${m?`<div class="posted">${m}</div>`:""}${R?`<div class="posted skl-tags">${R}</div>`:""}`;p.innerHTML=`<div class="meta" style="position:static">${P}</div>`;let I=p.firstChild.offsetHeight,D=o-13,V=D-I,M=a.top+d+6,C=a.top+d+T+20,G=vu(x,s,[o-C,o-a.top],p);p.innerHTML=`<div class="body" style="position:static">${G[G.length-1]}</div>`;let ae=G.length===1?C:a.top;if(G[G.length-1]&&ae+p.firstChild.offsetHeight>V-12){let fe=vu(G.pop(),s,[V-12-ae,V-12-a.top],p);G.push(...fe)}G.forEach((fe,F)=>{let W=F===G.length-1,[B,ne]=l(F,G.length);this.addPanel("txt",B+s+ne,(F===0?`<h2 class="ttl" style="left:${B}px;top:${a.top}px;width:${s}px">${De(c)}</h2>${h?`<p class="stl" style="left:${B}px;top:${M}px;width:${s}px">${De(h)}</p>`:""}`:"")+`<div class="body" style="left:${B}px;top:${F===0?C:a.top}px;width:${s}px">${fe}</div>`+(W?`<div class="meta" style="left:${B}px;top:${V}px;width:${s}px">${P}</div>`:""))})}else{let P=13+d+4,I=13+d+T+10,D=I+20,V=D+18+20;vu(x,s,[355-V-14,327],p).forEach((C,G)=>{this.addPanel("txt",t,(G===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${De(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${P}px;width:${s}px">${De(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${I}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${m}</div>`:"")+`<div class="body" style="left:${i}px;top:${G===0?V:14}px;width:${s}px">${C}</div>`)})}p.remove()},addTeam(n){let e=n.team.map(o=>Ee.posts.find(l=>l.id===o)).filter(Boolean),t=e.map(o=>Me(o.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${De(Je("who"))}</h2><div class="names">${De(Je("leftToRight"))} <span>${De(t)}.</span></div>`),s=i.querySelector(".in"),r=s.querySelector(".names"),a=Math.max(160,Math.ceil(r.offsetTop+r.offsetHeight+14));e.forEach((o,l)=>{let c=document.createElement("button");c.type="button",c.className="face",c.style.left=69+l%6*59+"px",c.style.top=a+Math.floor(l/6)*55+"px";let h=!o.thumb&&(Ru(o).find(f=>f!==n)||Ru(o)[0]),u=h?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${De(an(no(h))).replace(/'/g,"%27")}') center/cover"`:"";c.innerHTML=(o.thumb?`<img src="${De(an(o.thumb))}" alt="" draggable="false">`:`<span class="mono"${u}>${De(Cu(Me(o.title)))}</span>`)+`<span class="tab">${De(Me(o.title))}.<small>${De(Me(o.subtitle))}</small></span>`,c.setAttribute("aria-label",Me(o.title)),["pointerenter","focus"].forEach(f=>c.addEventListener(f,()=>c.classList.add("big"))),["pointerleave","blur"].forEach(f=>c.addEventListener(f,()=>c.classList.remove("big"))),s.appendChild(c)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Yt-2*oe.margin)/(this.scale||1)))),`<div class="cn">${De(Me(n.title))}.</div><div class="ac">${De(Me(n.subtitle))}</div><div class="site">${n.link?`<a href="${De(n.link)}" target="_blank" rel="noopener">${De(e)}</a>`:""}</div><div class="ad">${Gl(Me(n.body))}</div><div class="ct">${De(Me(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return jt.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Yr.querySelectorAll("video").forEach(n=>n.pause()),Yr.innerHTML="",this.panels=[],ui.hidden=!0,ui.classList.remove("on"),jt.hidden=!0,jt.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(uc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*vn(oe.easing),this.xprev=uc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*vn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);if(Yr.style.transform=`translateX(${Math.round(this.x)}px)`,!ui.hidden){let n=this.panels.find(i=>i.classList.contains("txt")),e=n?n.offsetLeft+n.offsetWidth*.55:200,t=-this.x>e;t!==this.lblOn&&(this.lblOn=t,ui.classList.toggle("on",t))}}}};function vu(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(f=>{if(f.nodeType===1&&["P","UL","OL","H3"].includes(f.nodeName)){o=null,f.textContent.trim()&&a.push(f);return}if(f.nodeType===1&&f.nodeName==="BR"){o=null;return}f.nodeType===3&&!f.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(f.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let f=s.lastElementChild,m=f&&f.nodeName==="H3"&&s.children.length>1?s.removeChild(f):null;l.push(s.innerHTML),s.innerHTML="",c++,m&&s.appendChild(m)};for(let f of a){let m=f.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),f.nodeName==="UL"||f.nodeName==="OL"||f.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(f.cloneNode(!0));continue}let g=[];(function d(T,v){T.childNodes.forEach(R=>{R.nodeType===3?R.textContent.split(/(\s+)/).forEach(P=>P&&g.push({w:P,path:v})):d(R,[...v,R])})})(f,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:d,path:T})=>{let v=x;for(let R of T){let P=v.lastChild;(!P||P.nodeType!==1||P.dataset.src!==R.outerHTML)&&(P=R.cloneNode(!1),P.dataset.src=R.outerHTML,v.appendChild(P)),v=P}v.appendChild(document.createTextNode(d))};for(let d of g)if(p(d),s.offsetHeight>h()){let T=function v(R){return R.lastChild&&R.lastChild.nodeType===1?v(R.lastChild):R}(x);T.removeChild(T.lastChild),u(),x=document.createElement("p"),s.appendChild(x),d.w.trim()&&p(d)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(f=>f.replace(/ data-src="[^"]*"/g,""))}var uc=0,Yi=null;jt.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Yi={id:n.pointerId,x:n.clientX,y:n.clientY},uc=n.clientX)});jt.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(Yi||Ke.dragging)){aa();return}if(uc=n.clientX,!Yi||n.pointerId!==Yi.id||Ke.dragging)return;let e=n.clientX-Yi.x,t=n.clientY-Yi.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Ke.dragging=!0,Ke.xprev=Yi.x,Ke.finalpos=Ke.x,Ke.vel=0;try{jt.setPointerCapture(n.pointerId)}catch{}jt.classList.add("grabbing")}});jt.addEventListener("click",n=>{Ke.justDragged&&(n.preventDefault(),n.stopPropagation(),Ke.justDragged=!1)},!0);jt.addEventListener("wheel",n=>{if(n.preventDefault(),!Ke.open||Ke.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Ke.finalpos=Math.max(Ke.end-60,Math.min(60,Ke.finalpos-e*t/(Ke.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var aa=()=>{Ke.dragging&&(Ke.justDragged=!0,setTimeout(()=>{Ke.justDragged=!1},0),Ke.finalpos+=(Ke.vel||0)*10),Ke.vel=0,Yi=null,Ke.dragging=!1,jt.classList.remove("grabbing")};jt.addEventListener("pointerup",aa);jt.addEventListener("pointercancel",aa);jt.addEventListener("lostpointercapture",n=>{n.target===jt&&aa()});window.addEventListener("pointerup",()=>{(Yi||Ke.dragging)&&aa()});id.addEventListener("pointerdown",()=>ao());function uo(n=-1,e=0){Am(),n===-1&&(n=k.currentSection||0),fi(),n!==k.currentSection&&ld(),k.currentSection=n,k.resetData(),k.selected=e,bc(),Qu(),Tc(),eg(performance.now()-Qm<1500?2.2:.7);try{history.replaceState(null,"","#"+k.section.def.id)}catch{}ra("#"+k.section.def.id,Me(k.section.def.name).trim())}function ig(){fi(),k.selected=0,bc(),Km()}function sg(n){(n==="newer"?k.data.newer():k.data.older())&&ig()}function $M(n){k.data.changeCategory(n),Jm.textContent=k.data.currentCatName,ig(),Tc()}function ro(n){fi(),k.selected=n,$a()}var um=0;function rd(n){let e=Ee.posts.find(h=>h.id===n),t=e?Nt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!Mn)return;Am(),fi();let i=t!==k.currentSection;i&&ld(),k.currentSection=t,i&&k.resetData();let s=k.data,r=!s.list.includes(e);r&&s.changeCategory("");let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.per;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!o&&Re){ro(l);return}k.selected=l,bc(),Qu(),Tc(),i&&eg();try{history.replaceState(null,"","#"+k.section.def.id)}catch{}ra("#"+k.section.def.id,Me(k.section.def.name).trim());let c=++um;eo(.5,()=>{c===um&&k.data===s&&s.posts[l]===e&&ro(l)})}Yr.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),rd(e.dataset.go))});function $a(){!Re||!k.data.posts[k.selected]||(fo(null),cd(null),fi(),k.postOpen=!0,k.section.def.open==="strip"?(id.hidden=!1,Ke.build(k.data.posts[k.selected],k.section.def.card),Ec.classList.add("hidden"),Es=!1,bn.classList.remove("dragging"),Yn=!0,oc(k.selected)):(Yn=!0,oc(k.selected),Re.openPost3D()),io(),jm(k.data.posts[k.selected]))}function ao(){k.postOpen&&(k.postOpen=!1,Ke.open?(Ke.close(),id.hidden=!0,Ec.classList.remove("hidden")):Re&&Re.closePost3D(),io(),jm(null))}function fi(){k.postOpen&&ao()}function YM(){Em(!oe.animationMode),ng(),Re&&Re.resetPostPosition(),Yn=!0}var Qi=oe.cameraDistanceProportion,sr=()=>((es()||{}).def||{}).layout==="map",jM=()=>sr()?60:oe.cameraZoomMin;function ad(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),rg())}function od(){oe.cameraDistanceProportion>jM()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),rg())}function rg(){(sr()||si())&&(k.cameraY=sa()),Wm()}function ld(){oe.cameraDistanceProportion!==Qi&&(oe.cameraDistanceProportion=Qi,Mc())}var dm=!1;function ag(n){if(!Mn)return;dm||(dm=!0,Fu(),tg=setTimeout(hc,6e3));let e=k.postOpen&&Ke.open,t=k.postOpen&&!Ke.open;switch(n.code){case"ArrowLeft":$i("ArrowLeft"),e?Ke.action("LEFT"):(fi(),yu("PREVIOUS"),t&&$a());break;case"ArrowRight":$i("ArrowRight"),e?Ke.action("RIGHT"):(fi(),yu("NEXT"),t&&$a());break;case"ArrowUp":$i("ArrowUp"),e||AM();break;case"ArrowDown":$i("ArrowDown"),e||CM();break;case"Tab":$i("Tab"),e?(ao(),yu("NEXT"),$a()):uo((k.currentSection+1)%Nt.length);break;case"KeyK":Ls.classList.contains("open")?hc():Fu();break;case"KeyA":$i("KeyA"),YM();break;case"Equal":case"NumpadAdd":$i("Equal"),e||od();break;case"Minus":case"NumpadSubtract":$i("Minus"),e||ad();break;case"Space":$i("Space"),Re&&Re.checkPostSelected(),k.postOpen?ao():$a();break;case"Escape":fi();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Pn||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||ag(n)});var fm=new Ll,pm=new et;function dc(n,e){if(!Rs||!Re)return null;pm.set(n/Yt*2-1,-(e/Xt)*2+1),fm.setFromCamera(pm,ii);let t=fm.intersectObjects([...es().blockers,...Re.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:ZM(n,e)||(t?t.object.userData:null)}var Yl=new U;function ZM(n,e){if(!Re||!Re.net)return null;let t=null,i=14;for(let s of Re.net.hits){if(!s.visible)continue;s.getWorldPosition(Yl).project(ii);let r=(Yl.x+1)/2*Yt-n,a=(1-Yl.y)/2*Xt-e,o=Math.hypot(r,a);o<i&&Yl.z<1&&(i=o,t=s.userData)}return t}var Rn=null,di=null,Bu=0,ku=0;bn.addEventListener("pointerdown",n=>{if(!Mn||Rn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Ai.size>0)return;xs=Bu=n.clientX,vs=ku=n.clientY;let e=dc(n.clientX,n.clientY);fi(),di=e&&e.post?e:null,di&&di.face==="back"&&(di.post.view.focus(di.post.id_),Yn=!0),Rn=n.pointerId,bn.setPointerCapture(n.pointerId),bn.classList.add("dragging"),ec=xs,tc=vs,Yn=!1,Es=!0});function rr(n,e=!1){if(n.pointerId===Rn){if(Rn=null,bn.classList.remove("dragging"),Es&&(Yn=!0,Es=!1,si()&&(k.degreeCamera=Ku(k.degreeCamera),k.cameraY=sa())),e){di=null;return}if(di&&di.face==="front"&&Math.hypot(n.clientX-Bu,n.clientY-ku)<6){let t=dc(n.clientX,n.clientY);t&&t.post===di.post&&ro(t.post.id_)}else if(!di&&Math.hypot(n.clientX-Bu,n.clientY-ku)<6){let t=dc(n.clientX,n.clientY);t&&t.netNode?zm(t.netNode,n.clientX,n.clientY):yc()}di=null}}bn.addEventListener("pointerup",rr);bn.addEventListener("pointercancel",n=>rr(n,!0));bn.addEventListener("lostpointercapture",n=>{n.pointerId===Rn&&rr(n,!0)});window.addEventListener("pointerup",n=>{Rn!==null&&n.pointerId===Rn&&n.target!==bn&&rr(n,!0)});window.addEventListener("blur",()=>{Rn!==null&&rr({pointerId:Rn},!0),aa()});var bu=!1,Zr=null,Qr=null,Ya=null;function cd(n){Ya!==n&&(Ya&&Ya.hoverBack(!1),Ya=n,n&&n.hoverBack(!0))}var og=()=>ju()&&Mn&&Re&&["carousel","spiral"].includes(Re.def.layout);function hd(){return k.postOpen||!Re?null:Qr&&Qr.view===Re?Qr:og()?(Re.checkPostSelected(),Re.postViews[k.selected]||null):null}var JM=0;function KM(){++JM%6===0&&og()&&fo(hd())}function fo(n){Zr!==n&&(Zr&&Zr.hover(!1),Zr=n,n&&n.hover(!0))}bn.addEventListener("pointerleave",()=>{Qr=null,fo(hd()),cd(null)});bn.addEventListener("pointermove",n=>{if(Rn!==null&&n.pointerId===Rn&&n.pointerType==="mouse"&&n.buttons===0){rr(n,!0);return}Rn!==null&&n.pointerId!==Rn||(xs=n.clientX,vs=n.clientY,Rn===null&&n.pointerType==="mouse"&&!bu&&(bu=!0,requestAnimationFrame(()=>{bu=!1;let e=dc(xs,vs);bn.classList.toggle("hover",!!(e&&e.post)),Qr=e&&e.post&&e.face==="front"&&!k.postOpen?e.post:null,fo(hd()),cd(e&&e.post&&e.face==="back"&&e.post.bhi&&!k.postOpen?e.post:null),e&&e.netNode&&!k.postOpen?zm(e.netNode,xs,vs):yc()})))});var mm=0,Ai=new Map,Jr=null,lg=()=>{let[n,e]=[...Ai.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Pn||Ke.open||!Ai.size&&n.target!==bn||(Ai.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ai.size===2&&(Rn!==null&&rr({pointerId:Rn},!0),Jr={last:lg()}))});window.addEventListener("pointermove",n=>{if(!Ai.has(n.pointerId)||(Ai.set(n.pointerId,{x:n.clientX,y:n.clientY}),!Jr||Ai.size<2||!Mn))return;let e=lg(),t=e/Jr.last;t>1.15?(od(),Jr.last=e):t<1/1.15&&(ad(),Jr.last=e)});var QM=n=>{Ai.delete(n.pointerId),Ai.size<2&&(Jr=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,QM));bn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!Mn||e-mm<220||!n.deltaY||(mm=e,n.deltaY<0?od():ad())},{passive:!1});window.addEventListener("resize",()=>{let n=Zi(),e=Rs&&Re?$n||ho():null;Xm(),Wm(),io(),Gm(e),Zi()!==n&&Re&&Re.retexture(),xg(),zu(),Ke.open&&(Ym(),clearTimeout(Ke.relayout),Ke.relayout=setTimeout(()=>{Ke.open&&Ke.post&&JSON.stringify(Du("project"))!==Ke.geomKey&&(Ke.build(Ke.post,k.section.def.card),io())},250))});function gm(){if(Ee.settings.negativeToggle!==!1){if(Gn=!Gn,to()&&pc(),!kt)try{localStorage.setItem("hc-neg",(Gn?"1":"0")+(to()?"@"+nr:""))}catch{}wc(),Re&&Re.retexture()}}["logo","home-logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",gm),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),gm())}))});var ye=null,e1=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function t1(){let n=(Ee.settings.showreel||"").trim();if(!ye){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ye={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>n1()),ye.x.addEventListener("click",jl),i.querySelector(".scrim").addEventListener("click",jl),ye.snd.addEventListener("click",()=>cg(!ye.muted)),window.addEventListener("keydown",s=>{if(ye.open){if(s.code==="Escape")s.preventDefault(),jl();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ye.player||s.source!==ye.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ye.muted&&(ye.muted=r.info.muted,oo())})}ye.btn.hidden=!n,ye.btn.setAttribute("aria-label","Showreel"),ye.x.setAttribute("aria-label",Je("close")),n!==ye.src&&(ye.open&&jl(!0),ye.src=n,ye.kind=n?sd(n):"",ye.vid.innerHTML="",ye.player=null);let e=ye.kind==="youtube"?`https://www.youtube.com/watch?v=${Ac(n)}`:ye.kind==="vimeo"?`https://vimeo.com/${Cc(n)}`:"";ye.ext.hidden=!e,e&&(ye.ext.href=e,ye.ext.textContent=(ye.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),oo()}function oo(){ye&&(ye.snd.innerHTML=e1(!ye.muted)+`<span>${Je(ye.muted?"soundOn":"soundOff")}</span>`,ye.snd.setAttribute("aria-pressed",String(!ye.muted)))}function fc(n,e=[]){let t=ye.player;if(!(!t||!t.contentWindow)){if(ye.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ye.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function cg(n){ye.muted=n,oo(),ye.kind==="video"?ye.player&&(ye.player.muted=n,n||(ye.player.volume=1)):(fc(n?"mute":"unMute"),n||fc("setVolume",[100]))}function n1(){if(!(!ye||!ye.src||ye.open)){if(ye.open=!0,ye.last=document.activeElement,ye.player)ye.kind==="video"?ye.player.play().catch(()=>{}):fc("playVideo");else{let n=ye.src,e=ye.kind;if(e==="video"){let t=document.createElement("video");t.src=an(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ye.muted&&(ye.muted=t.muted,oo())}),ye.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Ac(n):Cc(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ye.muted||cg(!1)}),ye.player=t}else{let t=document.createElement("img");t.src=an(n),t.alt="",ye.player=t}ye.muted=!0,oo(),ye.vid.appendChild(ye.player)}ye.snd.hidden=!/^(youtube|vimeo|video)$/.test(ye.kind),ye.box.hidden=!1,ye.btn.setAttribute("aria-expanded","true"),ye.box.offsetWidth,ye.box.classList.add("on"),setTimeout(()=>{ye.open&&ye.x.focus({preventScroll:!0})},60)}}function jl(n){!ye||!ye.open||(ye.open=!1,ye.btn.setAttribute("aria-expanded","false"),ye.kind==="video"?ye.player&&ye.player.pause():fc("pauseVideo"),ye.box.classList.remove("on"),clearTimeout(ye.t),ye.t=setTimeout(()=>{ye.open||(ye.box.hidden=!0)},n===!0?0:650),ye.last&&ye.last.focus&&n!==!0&&ye.last.focus({preventScroll:!0}))}var N=null,Ja=["white","grey","accent","source"],ud=8;function i1(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},Ee.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(Ja,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function s1(){if(N)return;let n=document.getElementById("home-band");if(!n)return;let e=i1(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>zu()).observe(t),N={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:Ja.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(ud,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},N.octx=N.off.getContext("2d",{willReadFrequently:!0}),N.raw=document.createElement("canvas"),N.rctx=N.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:an(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),N.video=a}else{let a=new Set;Ee.posts.filter(o=>o.published!==!1).forEach(o=>[o.thumb,...(o.media||[]).map(l=>l&&l.src)].forEach(l=>{l&&!/^(https?:|data:)/.test(l)&&/\.(jpe?g|png|webp)$/i.test(l)&&!a.has(l)&&a.size<10&&a.add(l)})),N.pics=[...a].sort(()=>Math.random()-.5).map(o=>{let l=new Image;return l.src=an(o),l})}e.controls!==!1&&o1(document.getElementById("home")),r1(e.controls!==!1);let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),zu()}var Mu={video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="10" r="4" fill="currentColor"/></svg>'};function r1(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let t=!!(N&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),i=document.createElement("div");i.id="home-dock",i.classList.toggle("alone",!n),i.innerHTML=`<span class="hv-note" role="status" hidden></span>
    <button type="button" id="story-btn" aria-expanded="false" hidden>?</button>
    <button type="button" id="hv-shot" hidden>${Mu.shot}<span></span></button>
    ${t?`<div id="hv-src" role="group"><button type="button" data-src="video" aria-pressed="true">${Mu.video}</button><button type="button" data-src="cam" data-code="KeyV" aria-pressed="false">${Mu.cam}</button></div>`:""}`,e.appendChild(i),i.querySelectorAll("#hv-src button").forEach(s=>s.addEventListener("click",()=>{s.dataset.src==="cam"&&!N.cam?l1():s.dataset.src==="video"&&N.cam&&ug()})),i.querySelector("#hv-shot").addEventListener("click",a1),i.querySelector("#story-btn").addEventListener("click",()=>fd()),hg(),dd()}function dd(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(N&&N.cam);n.querySelectorAll("#hv-src button").forEach(r=>{let a=r.dataset.src==="cam"===e;r.setAttribute("aria-pressed",String(a)),r.classList.toggle("on",a),r.setAttribute("aria-label",Je(r.dataset.src==="cam"?"hv_cam":"hv_video"))});let t=n.querySelector("#hv-src");t&&t.setAttribute("aria-label",Je("hv_src"));let i=n.querySelector("#hv-shot");i.hidden=!e,i.setAttribute("aria-label",Je("hv_shot")),i.querySelector("span").textContent=Je("photo");let s=n.querySelector("#story-btn");s.setAttribute("aria-label",Je("story")),s.title=Je("story")}var ym=0;function ea(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(ym),t.textContent=n||"",t.hidden=!n,n&&e&&(ym=setTimeout(()=>{t.hidden=!0},e)))}async function a1(){if(!N||!N.cam||N.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(N.cell,N.floor),a=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,N.W)))),o=Math.ceil(n/a),l=Math.ceil(e/a),c={ctx:N.ctx,W:N.W,H:N.H,ow:N.off.width,oh:N.off.height,lo:N.lo,hi:N.hi};try{N.ctx=i,N.W=n,N.H=e,N.off.width=N.raw.width=o,N.off.height=N.raw.height=l,dg(0),N.octx.globalAlpha=1,N.octx.drawImage(N.raw,0,0);let q=null;try{q=N.octx.getImageData(0,0,o,l).data}catch{}q?pg(q,o,l,a):fg(o,l,a)}finally{N.ctx=c.ctx,N.W=c.W,N.H=c.H,N.off.width=N.raw.width=c.ow,N.off.height=N.raw.height=c.oh,N.lo=c.lo,N.hi=c.hi,N.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let f=document.getElementById("bs"),m=f&&f.value.trim(),g=((Ee.settings.taglines||{})[wi]||(Ee.settings.taglines||{}).en||[]).join(" "),x=(m||ta[0]||g||"Hand Coded.").toUpperCase(),p=f?getComputedStyle(f).fontFamily:"sans-serif",d=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),T=getComputedStyle(d),v=q=>`${T.fontStyle==="italic"?"italic ":""}${T.fontWeight} ${q}px ${T.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${p}`),document.fonts.load(v(110))])}catch{}let R=72,P=70,I=128,D=document.getElementById("home-logo");if(D&&D.complete&&D.naturalWidth)try{i.drawImage(D,R,P,I,I)}catch{}let V=(Ee.settings.name||"Hand Coded")+".",M=R+I+34,C=120;for(i.font=v(C);i.measureText(V).width>n-M-R&&C>48;)C-=4,i.font=v(C);i.fillStyle="#fff",i.textBaseline="middle",i.fillText(V,M,P+I/2+C*.04),i.textBaseline="top";let G=n-2*R,ae=104,fe=[];for(;ae>=40&&(i.font=`bold ${ae}px ${p}`,fe=tn(i,x,G),!(fe.length<=4));ae-=4);fe=fe.slice(0,4);let F=Math.round(ae*1.05),W=e-96,B=W-44-fe.length*F;i.fillStyle=qt(),i.fillRect(R,B-38,54,7),i.fillStyle="#fff",i.font=`bold ${ae}px ${p}`,fe.forEach((q,he)=>i.fillText(q,R-ae*.04,B+he*F)),i.fillStyle="#8f8f8f",i.font=`28px ${p}`,i.fillText((location.host+location.pathname).replace(/\/(index\.html)?$/,"").replace(/^www\./,""),R,W);let ne=await new Promise(q=>t.toBlob(q,"image/jpeg",.92));if(!ne)return;ra("photo-souvenir","Photo souvenir",!0);let Q="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",X=typeof File=="function"?new File([ne],Q,{type:"image/jpeg"}):null;if(X&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[X]}))try{await navigator.share({files:[X],title:Ee.settings.name||"Hand Coded"}),ea(Je("hv_shotDone"),2500);return}catch(q){if(q&&q.name==="AbortError")return}let ee=document.createElement("a");ee.href=URL.createObjectURL(ne),ee.download=Q,document.body.appendChild(ee),ee.click(),setTimeout(()=>{URL.revokeObjectURL(ee.href),ee.remove()},2e3),ea(Je("hv_shotDone"),2500)}function hg(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(Ee.settings.home||{}).story||{},i=Me(t.title||{}).trim(),s=Gl(Me(t.body||{})),r=!!(i||Js(s).join("").trim());n.hidden=!r;let a=document.getElementById("hc-story");if(!r){a&&a.remove();return}a||(a=document.createElement("section"),a.id="hc-story",a.hidden=!0,e.appendChild(a)),a.setAttribute("aria-label",i||Je("story"));let o=(t.images||[]).filter(Boolean);a.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${De(Je("close"))}">\xD7</button><h2>${De(i||Je("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${De(t.link)}" target="_blank" rel="noopener">${De(Me(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(o.length?`<div class="shots scroll-x">${o.map(l=>`<a href="${De(an(l))}" target="_blank" rel="noopener"><img src="${De(an(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",a.querySelector(".x").addEventListener("click",()=>fd(!1))}var _m=0;function fd(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(_m),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),_m=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),fd(!1))},!0);function zu(){if(!N)return;let n=N.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);N.W=Math.max(1,Math.round(n.width)),N.H=Math.max(1,Math.round(n.height)),N.cv.width=N.W*e,N.cv.height=N.H*e,N.ctx.setTransform(e,0,0,e,0,0)}function o1(n){let e=document.createElement("div");e.id="hv",e.innerHTML=`<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">\u25C2</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">\u25B8</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">\u25BE</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">\u25B4</button></div>
      <div class="lbl" data-k="delay"></div><div class="row"><button type="button" class="key" data-a="del-" data-code="Minus">\u2212</button><button type="button" class="key" data-a="del+" data-code="Equal">+</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`,n.appendChild(e),N.box=e;let t=i=>{e.classList.toggle("open",i),e.querySelector("#hv-toggle").setAttribute("aria-expanded",String(i)),document.getElementById("home").classList.toggle("hv-open",i)};N.setOpen=t,e.querySelector("#hv-toggle").addEventListener("click",()=>t(!e.classList.contains("open"))),window.addEventListener("keydown",i=>{if(Pn||i.ctrlKey||i.metaKey||i.altKey||ye&&ye.open)return;let s=i.target&&i.target.id==="bs",r=s&&i.target.value.length>0;if(i.code==="Escape"&&s){i.target.blur();return}if(i.code==="KeyK"&&!s){i.preventDefault(),t(!e.classList.contains("open"));return}let a=e.querySelector(`[data-code="${i.code}"]`)||document.querySelector(`#home-dock [data-code="${i.code}"]`);a&&(s&&!/^Arrow/.test(i.code)||/^Arrow/.test(i.code)&&r||(i.preventDefault(),N.touched||(N.touched=!0,t(!0)),a.click()))}),e.querySelector("#hv-panel").addEventListener("click",i=>{let s=i.target.closest("button[data-a]");if(!s)return;let r=s.dataset.a;s.classList.add("down"),setTimeout(()=>s.classList.remove("down"),200),r==="grid+"?N.cell=Math.max(6,N.cell-2):r==="grid-"?N.cell=Math.min(40,N.cell+2):r==="con-"?N.gamma=Math.max(.4,+(N.gamma-.2).toFixed(2)):r==="con+"?N.gamma=Math.min(3,+(N.gamma+.2).toFixed(2)):r==="del-"?N.delay=Math.max(1,N.delay-1):r==="del+"?N.delay=Math.min(ud,N.delay+1):r==="color"?N.color=Ja[(Ja.indexOf(N.color)+1)%Ja.length]:r==="invert"?N.mode=N.mode==="light"?"dark":"light":r==="sound"&&(N.sound=!N.sound,N.video&&(N.video.muted=!N.sound,N.video.volume=1,N.video.play().catch(()=>{}))),ir()}),ir()}function ir(){if(dd(),!N||!N.box)return;N.box.querySelectorAll(".lbl[data-k]").forEach(s=>{s.textContent=Je("hv_"+s.dataset.k)}),N.box.querySelector("#hv-toggle").setAttribute("aria-label",Je("hv_tab"));let n=N.box.querySelector(".sw i");n.className="c-"+N.color;let e=(s,r,a)=>{let o=N.box.querySelector(`[data-a="${s}"]`);o.setAttribute("aria-pressed",String(r)),o.classList.toggle("on",r),a&&o.setAttribute("aria-label",a)};e("invert",N.mode==="dark",Je("hv_invert")),e("sound",N.sound,Je("hv_sound")),N.box.querySelector('[data-a="sound"]').disabled=!N.video||!!N.cam,N.box.querySelector('[data-a="color"]').setAttribute("aria-label",Je("hv_color")),["grid-","grid+","con-","con+","del-","del+"].forEach(s=>N.box.querySelector(`[data-a="${s}"]`).setAttribute("aria-label",Je(s.startsWith("grid")?"hv_grid":s.startsWith("con")?"hv_contrast":"hv_delay")+(s.endsWith("+")?" +":" \u2212")));let t=N.box.querySelector('.lbl[data-k="delay"]');t&&(t.textContent=Je("hv_delay")+" "+Hu()+(Hu()<N.delay?"*":""));let i=N.box.querySelector('[data-a="del+"]');i&&(i.disabled=N.delay>=ud)}async function l1(){ea("");try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),N.cam={stream:n,video:e},N.lo=0,N.hi=1,N.video&&N.video.pause(),ea(Je("hv_camNote"),6e3)}catch{ea(Je("hv_camDenied"),4e3)}ir()}function ug(){N&&N.cam&&(N.cam.stream.getTracks().forEach(n=>n.stop()),N.cam=null,N.video&&N.video.play().catch(()=>{}),ea("")),N&&ir()}function c1(){N&&(ug(),N.video&&N.video.pause())}function Su(n,e,t,i=1,s=0,r=0,a=!1){let o=N.rctx,l=N.raw.width,c=N.raw.height,h=Math.max(l/e,c/t)*i,u=e*h,f=t*h;a&&(o.save(),o.translate(l,0),o.scale(-1,1)),o.drawImage(n,(l-u)/2+s*l,(c-f)/2+r*c,u,f),a&&o.restore()}function dg(n){let e=N.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,N.raw.width,N.raw.height),N.cam&&N.cam.video.readyState>=2)return Su(N.cam.video,N.cam.video.videoWidth,N.cam.video.videoHeight,1,0,0,!0),!0;if(N.video)return N.video.readyState<2?!1:(Su(N.video,N.video.videoWidth,N.video.videoHeight),!0);let t=N.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,Su(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[a],o,1),o>.78&&r>1&&l(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var h1=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function u1(n){if(N.pyr&&N.pyr.cell===n&&N.pyr.fill===N.fill)return N.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-o/N.fill))*255,c=(r*n+a)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),N.pyr={cell:n,fill:N.fill,pat:N.ctx.createPattern(e,"repeat")},N.pyr.pat}function fg(n,e,t){let i=N.ctx,s=N.W,r=N.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!h1){i.globalAlpha=.45,i.drawImage(N.off,a,o,n*t,e*t),i.globalAlpha=1;return}N.tmp||(N.tmp=document.createElement("canvas"),N.tctx=N.tmp.getContext("2d"));let l=N.tmp,c=N.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${N.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+N.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(N.off,a,o,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(a,o),c.fillStyle=u1(t),c.fillRect(-a,-o,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),N.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",N.color==="source"?i.drawImage(N.off,a,o,n*t,e*t):(i.fillStyle=N.color==="grey"?"#8d8d8d":Ee.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var d1=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},xm=new Map,f1=(n,e,t)=>{let i=n>>3<<10|e>>3<<5|t>>3,s=xm.get(i);return s||(s=`rgb(${n&248},${e&248},${t&248})`,xm.set(i,s)),s},Hu=()=>N.floor||N.interval>1e3/29?1:N.delay;function p1(n){if(!N||!N.W||n-N.last<N.interval)return;N.last=n;let e=performance.now(),t=d1.matches?0:(n-N.t0)/1e3,i=N.ctx,s=N.W,r=N.H,a=Math.max(N.cell,N.floor),o=Math.ceil(s/a),l=Math.ceil(r/a);if(i.fillStyle="#0b0b0b",i.fillRect(0,0,s,r),(N.off.width!==o||N.off.height!==l)&&(N.off.width=N.raw.width=o,N.off.height=N.raw.height=l,N.fresh=!0),!dg(t))return;let c=Hu();N.octx.globalAlpha=N.fresh||c<=1?1:1/c,N.octx.drawImage(N.raw,0,0),N.octx.globalAlpha=1,N.fresh=!1;let h=null;if(!N.tainted)try{h=N.octx.getImageData(0,0,o,l).data}catch{N.tainted=!0}N.tainted?fg(o,l,a):pg(h,o,l,a);let u=performance.now()-e;N.cost=N.cost*.9+u*.1,N.cost>14&&++N.slow>15?(N.box&&setTimeout(ir,0),N.slow=0,N.interval<1e3/21?N.interval=N.interval<1e3/25?1e3/24:1e3/20:N.floor=Math.min(40,Math.max(N.floor,a)+2)):N.cost<5&&++N.fast>60&&(N.box&&setTimeout(ir,0),N.fast=0,N.floor?N.floor=Math.max(0,N.floor-2):N.interval>1e3/30&&(N.interval=N.interval>1e3/22?1e3/24:1e3/30))}function pg(n,e,t,i){let s=N.ctx,r=e*t,a=N.lum&&N.lum.length===r?N.lum:N.lum=new Float32Array(r),o=1,l=0;for(let d=0,T=0;d<r;d++,T+=4){let v=(.2126*n[T]+.7152*n[T+1]+.0722*n[T+2])/255;a[d]=v,v<o&&(o=v),v>l&&(l=v)}N.lo+=(o-N.lo)*.15,N.hi+=(Math.max(l,N.lo+.15)-N.hi)*.15;let c=N.lo,h=1/(N.hi-c),u=N.mode==="dark",f=N.gamma,m=i*N.fill,g=(N.W-e*i)/2,x=(N.H-t*i)/2,p=N.color==="source";p||(s.fillStyle=N.color==="grey"?"#8d8d8d":N.color==="accent"?Ee.settings.accent||"#ffcc00":"#f2f2f2",s.beginPath());for(let d=0,T=0;d<t;d++){let v=x+d*i+i/2;for(let R=0;R<e;R++,T++){let P=(a[T]-c)*h;P=P<0?0:P>1?1:P,u&&(P=1-P);let I=(f===1?P:Math.pow(P,f))*m;if(I<.6)continue;let D=g+R*i+(i-I)/2,V=v-I/2;if(p){let M=T*4;s.fillStyle=f1(n[M],n[M+1],n[M+2]),s.fillRect(D,V,I,I)}else s.rect(D,V,I,I)}}p||s.fill()}var tr=document.getElementById("home"),bs=document.getElementById("enter"),lo=document.getElementById("ticker"),Zl=lo.getContext("2d"),Ka=null,ja=0,Qa=1,mg="hc-bullshit-slogans",ta=[];try{let n=JSON.parse(localStorage.getItem(mg)||"[]");Array.isArray(n)&&(ta=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function gg(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;ta=[e.toUpperCase(),...ta.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(mg,JSON.stringify(ta))}catch{}return _g=null,yg(),ja=0,n.value="",document.getElementById("bs-sent").textContent=Je("sent"),m1(e),ra("slogan","Slogan tap\xE9",!0),!0}function m1(n){let e=(Ee.settings.sloganInbox||"").trim();if(!e||kt||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:wi,tag:bg("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),gg(),document.getElementById("bs").blur(),bs.click()});var vm={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},g1=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=vm[e]||vm["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function y1(n){let e=i=>i.published&&Ee.sections.some(s=>s.id===i.section&&s.visible),t=Ee.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+Ee.settings.founded||2012));case"auto:projects":return String(Ee.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(Ee.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(Ee.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(Ee.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var _1=()=>(Ee.settings.home&&Ee.settings.home.figures||[]).map(n=>({value:y1(n.value),label:Me(n.label)})).filter(n=>n.value&&n.label),x1=()=>_1().map(n=>`${n.value} ${n.label}`);function yg(){let n=[...ta,...x1(),...Ee.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[Ee.settings.name]).map(t=>String(t).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Ka=v1(e)}var _g=null;function v1(n){let e=[];for(let t of n){let i=g1(t),s=t===" "?3:5;for(let r=0;r<s;r++){let a=0;for(let o=0;o<7;o++)i[o]&1<<4-r&&(a|=1<<o);e.push(a)}e.push(0)}return{w:e.length,cols:e}}var Si={pitch:3.2,rows:7,h:30},jr=null,bm="";function Mm(n,e){let t=Qa,i=Math.ceil(Si.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,Si.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-Si.pitch*.1*t,a-Si.pitch*.1*t,Si.pitch*.12*t,0,Math.PI*2),r.fill()),s}function xg(){Qa=Math.min(window.devicePixelRatio||1,2),lo.width=Math.round(window.innerWidth*Qa),lo.height=Math.round(Si.h*Qa),jr=null}var Jl=0;function b1(n){let e=qt();(!jr||bm!==e)&&(bm=e,jr={on:Mm(e,!0),off:Mm(e,!1)}),Jl+=n*26,Jl>=1&&(ja=(ja+Math.floor(Jl))%Ka.w,Jl%=1);let t=Qa,i=Si.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(Si.h-Si.rows*i)/2;Zl.setTransform(1,0,0,1,0,0),Zl.fillStyle="#000",Zl.fillRect(0,0,lo.width,lo.height);let a=jr.on.width/2,o=_g,l=o&&o.w<=s?Math.floor((s-o.w)/2):0;for(let c=0;c<s;c++){let h=o?o.w<=s?c>=l&&c<l+o.w?o.cols[c-l]:0:o.cols[(ja+c)%o.w]:Ka.cols[(ja+c)%Ka.w],u=(c*i+i/2)*t-a;for(let f=0;f<Si.rows;f++)Zl.drawImage(h>>f&1?jr.on:jr.off,u,(r+f*i+i/2)*t-a)}}var Pn=!1,pd=!1,md=!1,gd=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),Vu=0,vg=0;function yd(){if(!Pn){if(Pn=!0,clearTimeout(Vu),Qm=performance.now(),!kt&&gd())try{history.pushState(null,"",location.pathname+location.search+"#"+(Ee.sections.find(n=>n.id===Ee.settings.startSection&&n.visible)||Nt[0].def).id)}catch{}tr.classList.add("out"),Vu=setTimeout(()=>{tr.hidden=!0,c1()},1100),S1(),kM(),Ts.classList.add("on"),setTimeout(VM,1500),Ls.hidden=!1,Ec.classList.remove("hidden"),bn.focus({preventScroll:!0})}}function _d(n=!0){if(Pn){if(fi(),hc(),Ou(),yc(),fo(null),ld(),Pn=!1,md=!1,clearTimeout(Vu),vg=performance.now()+1300,bs.textContent=Me(Ee.settings.home.enter)||Je("enter"),bs.classList.remove("wait"),tr.hidden=!1,tr.offsetWidth,tr.classList.remove("out"),N&&N.video&&N.video.play().catch(()=>{}),n&&!kt)try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}td()}}window.addEventListener("popstate",()=>{if(!kt){if(gd())_d(!1);else if(!Pn&&pd)yd();else if(Pn&&Rs){let n=Nt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==k.currentSection&&Mn&&uo(n)}}});Ts.addEventListener("click",n=>{n.target.closest(".wm")&&Pn&&_d()});Ts.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Pn&&(n.preventDefault(),_d())});bs.addEventListener("click",()=>{gg(),md=!0,pd?yd():(bs.textContent=Je("loading"),bs.classList.add("wait"))});var Gu=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function bg(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return kt&&kt.tag&&(e=kt.tag),Gu(e||n)}function M1(n,e){let t=n.tags||[],i=t.find(s=>Gu(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>Gu(r)===e));return i?i.id:""}function S1(){try{As.compile(dM,ii,Ss)}catch{}Mc();let n=kt&&kt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Nt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Nt.findIndex(a=>a.def.id===Ee.settings.startSection)));let s=bg(t||(e&&i<0?e:""));if(s){let a=Nt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Nt.keys()];for(let o of a){let l=M1(Nt[o].def,s);if(l){i=o,Nt[o].def.defaultTag=l;break}}}Qi=oe.cameraDistanceProportion,k.currentSection=i,k.resetData();let r=es();k.cameraY=sa(),yt.x=Ki()*Math.sin(k.degreeCamera)+r.p.x,yt.y=k.cameraY,yt.z=Ki()*Math.cos(k.degreeCamera)+r.p.z,Ln.x=r.p.x,Ln.y=vc(),Ln.z=r.p.z,Rs=!0,uo(i,0),(Yt<=700||Xt<=520)&&io()}var Sm=performance.now();function Mg(n){let e=Math.min(.25,Math.max(0,(n-Sm)/1e3));Sm=n,ji+=e,ic=e*aM,!Pn&&Ka&&b1(e),N&&!tr.hidden&&p1(n),Rs&&(Pn||n<vg)&&(cM(),UM(),OM(),BM(),Re&&Re.update(),KM(),Ke.step(),zM(),As.render(Ss,ii)),requestAnimationFrame(Mg)}function wu(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Je("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function w1(){kt||!/[?&]preview\b/.test(location.search)||window.parent===window||(kt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:wm},"*")}catch{}}))}(async function(){try{await w1(),kt?Ee=Zs(structuredClone(kt.content)):(Ee=await Kl.load(),Kl.prepare&&await Kl.prepare(Ee))}catch(a){wu(a);return}Gn=pc(),Om();{let a=qu();a!==null&&(Gn=a)}$u();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=Ee.settings.langs&&Ee.settings.langs.length?Ee.settings.langs:hi,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}if(wi=t.includes(s)?s:t.includes(e)?e:i||Ee.settings.defaultLang||t[0],Nt=Ee.sections.filter(a=>a.visible).map(a=>({def:a})),!Nt.length){wu(new Error("aucune section visible"));return}if(!kt)try{let a=new URLSearchParams(location.search).get("p"),o=a&&Ee.posts.find(l=>l.id===a&&l.published!==!1&&Nt.some(c=>c.def.id===l.section));o&&(nc=o.id,history.replaceState(null,"",location.pathname+location.search+"#"+o.section))}catch{}XM(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Em(!1),ng(),wc(),HM(),s1(),Xm(),Mc(),xg(),requestAnimationFrame(Mg),Ks=Nt.map((a,o)=>new Lu(a.def,o)),Nt.forEach((a,o)=>{a.object=Ks[o]}),Nt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let r=new Fl(Im);try{if((await Promise.allSettled(Ks.map(o=>o.load(r)))).forEach((o,l)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Ks[l].def.id+" \xBB :",o.reason)}),Ks.forEach((o,l)=>o.place(l)),await Promise.race([Promise.all(Um).then(Cs),new Promise(o=>setTimeout(o,3e3))]),pd=!0,(md||!gd()||kt&&kt.start)&&yd(),nc){let o=nc,l=performance.now(),c=setInterval(()=>{(Mn||performance.now()-l>8e3)&&(clearInterval(c),Mn&&rd(o))},120)}}catch(a){wu(a)}})();window.__hc={P:k,STYLE:oe,cam:yt,camera:ii,renderer:As,get hv(){return N&&{cell:N.cell,floor:N.floor,fps:Math.round(1e3/N.interval),cost:+N.cost.toFixed(1),tainted:N.tainted}},get input(){return Mn},get homeGone(){return Pn},get content(){return Ee},get postsView(){return Re},getToSectionView:uo,openThatPost:ro,closePost:ao,goToPost:rd,setLang:Zm,enter:()=>bs.click()};})();
