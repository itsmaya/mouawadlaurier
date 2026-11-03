/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Oh="160";var $m=0,td=1,Ym=2;var Wf=1,jm=2,Ni=3,kn=0,dn=1,On=2;var as=0,Ar=1,nd=2,id=3,sd=4,Zm=5,Os=100,Jm=101,Km=102,rd=103,ad=104,Qm=200,eg=201,tg=202,ng=203,nh=204,ih=205,ig=206,sg=207,rg=208,ag=209,og=210,lg=211,cg=212,hg=213,ug=214,dg=0,fg=1,pg=2,Ho=3,mg=4,gg=5,yg=6,_g=7,wl=0,xg=1,vg=2,os=0,bg=1,Mg=2,Sg=3,wg=4,Eg=5,Tg=6,od="attached",Ag="detached",Xf=300,Pr=301,Lr=302,sh=303,rh=304,El=306,cs=1e3,En=1001,ah=1002,un=1003,ld=1004;var bc=1005;var Dn=1006,Cg=1007;var hs=1008;var ls=1009,Rg=1010,Pg=1011,Fh=1012,qf=1013,rs=1014,Ui=1015,_a=1016,$f=1017,Yf=1018,zs=1020,Lg=1021,Jn=1023,Ig=1024,Ng=1025,ks=1026,Ir=1027,Dg=1028,jf=1029,Ug=1030,Zf=1031,Jf=1033,Mc=33776,Sc=33777,wc=33778,Ec=33779,cd=35840,hd=35841,ud=35842,dd=35843,Kf=36196,fd=37492,pd=37496,md=37808,gd=37809,yd=37810,_d=37811,xd=37812,vd=37813,bd=37814,Md=37815,Sd=37816,wd=37817,Ed=37818,Td=37819,Ad=37820,Cd=37821,Tc=36492,Rd=36494,Pd=36495,Og=36283,Ld=36284,Id=36285,Nd=36286;var Vo=2300,Go=2301,Ac=2302,Dd=2400,Ud=2401,Od=2402,Fg=2500;var Qf=3e3,Hs=3001,Bg=3200,zg=3201,Bh=0,kg=1,Kn="",Vt="srgb",Fi="srgb-linear",zh="display-p3",Tl="display-p3-linear",Wo="linear",Ut="srgb",Xo="rec709",qo="p3";var rr=7680;var Fd=519,Hg=512,Vg=513,Gg=514,ep=515,Wg=516,Xg=517,qg=518,$g=519,oh=35044;var Bd="300 es",lh=1035,Oi=2e3,$o=2001,us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=1234567,pa=Math.PI/180,Nr=180/Math.PI;function li(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function kh(n,e){return(n%e+e)%e}function Yg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jg(n,e,t){return n!==e?(t-n)/(e-n):0}function ma(n,e,t){return(1-t)*n+t*e}function Zg(n,e,t,i){return ma(n,e,1-Math.exp(-t*i))}function Jg(n,e=1){return e-Math.abs(kh(n,e*2)-e)}function Kg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function e0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function t0(n,e){return n+Math.random()*(e-n)}function n0(n){return n*(.5-Math.random())}function i0(n){n!==void 0&&(zd=n);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(n){return n*pa}function r0(n){return n*Nr}function ch(n){return(n&n-1)===0&&n!==0}function a0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function o0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ps={DEG2RAD:pa,RAD2DEG:Nr,generateUUID:li,clamp:wn,euclideanModulo:kh,mapLinear:Yg,inverseLerp:jg,lerp:ma,damp:Zg,pingpong:Jg,smoothstep:Kg,smootherstep:Qg,randInt:e0,randFloat:t0,randFloatSpread:n0,seededRandom:i0,degToRad:s0,radToDeg:r0,isPowerOfTwo:ch,ceilPowerOfTwo:a0,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:o0,normalize:Ct,denormalize:fi},Ke=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],x=s[0],p=s[3],d=s[6],M=s[1],v=s[4],P=s[7],N=s[2],L=s[5],I=s[8];return r[0]=o*x+a*M+l*N,r[3]=o*p+a*v+l*L,r[6]=o*d+a*P+l*I,r[1]=c*x+h*M+u*N,r[4]=c*p+h*v+u*L,r[7]=c*d+h*P+u*I,r[2]=f*x+m*M+g*N,r[5]=f*p+m*v+g*L,r[8]=f*d+m*P+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new ft;function tp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l0(){let n=xa("canvas");return n.style.display="block",n}var kd={};function ga(n){n in kd||(kd[n]=!0,console.warn(n))}var Hd=new ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vd=new ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Fi]:{transfer:Wo,primaries:Xo,toReference:n=>n,fromReference:n=>n},[Vt]:{transfer:Ut,primaries:Xo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tl]:{transfer:Wo,primaries:qo,toReference:n=>n.applyMatrix3(Vd),fromReference:n=>n.applyMatrix3(Hd)},[zh]:{transfer:Ut,primaries:qo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vd),fromReference:n=>n.applyMatrix3(Hd).convertLinearToSRGB()}},c0=new Set([Fi,Tl]),Rt={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!c0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=uo[e].toReference,s=uo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return uo[n].primaries},getTransfer:function(n){return n===Kn?Wo:uo[n].transfer}};function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ar,jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=xa("canvas")),ar.width=e.width,ar.height=e.height;let i=ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,Zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pc(s[o].image)):r.push(Pc(s[o]))}else r=Pc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var u0=0,Hn=class n extends us{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=En,s=En,r=Dn,o=hs,a=Jn,l=ls,c=n.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=li(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Hs?Vt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Hs:Qf}set encoding(e){ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hs?Vt:Kn}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Xf;Hn.DEFAULT_ANISOTROPY=1;var vt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,P=(m+1)/2,N=(d+1)/2,L=(h+f)/4,I=(u+x)/4,Z=(g+p)/4;return v>P&&v>N?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=L/i,r=I/i):P>N?P<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),i=L/s,r=Z/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=I/r,s=Z/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hh=class extends us{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hs?Vt:Kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bi=class extends hh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jo=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uh=class extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*x,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let N=Math.sqrt(v),L=Math.atan2(N,d*M);p=Math.sin(p*L)/N,a=Math.sin(a*L)/N}let P=a*M;if(l=l*p+f*P,c=c*p+m*P,h=h*p+g*P,u=u*p+x*P,p===1-a){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new U,Gd=new pi,fn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),po.subVectors(this.max,aa),or.subVectors(e.a,aa),lr.subVectors(e.b,aa),cr.subVectors(e.c,aa),es.subVectors(lr,or),ts.subVectors(cr,lr),Ls.subVectors(or,cr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ls.z,Ls.y,es.z,0,-es.x,ts.z,0,-ts.x,Ls.z,0,-Ls.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ls.y,Ls.x,0];return!Ic(t,or,lr,cr,po)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,or,lr,cr,po))?!1:(mo.crossVectors(es,ts),t=[mo.x,mo.y,mo.z],Ic(t,or,lr,cr,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ai=[new U,new U,new U,new U,new U,new U,new U,new U],ri=new U,fo=new fn,or=new U,lr=new U,cr=new U,es=new U,ts=new U,Ls=new U,aa=new U,po=new U,mo=new U,Is=new U;function Ic(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Is.fromArray(n,r);let a=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),h=i.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var d0=new fn,oa=new U,Nc=new U,Qn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):d0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(oa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Nc)),this.expandByPoint(oa.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ci=new U,Dc=new U,go=new U,ns=new U,Uc=new U,yo=new U,Oc=new U,Dr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Dc.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Dc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(go),a=ns.dot(this.direction),l=-ns.dot(go),c=ns.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dc).addScaledVector(go,f),m}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let i=Ci.dot(this.direction),s=Ci.dot(Ci)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,s,r){Uc.subVectors(t,e),yo.subVectors(i,e),Oc.crossVectors(Uc,yo);let o=this.direction.dot(Oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);let l=a*this.direction.dot(yo.crossVectors(ns,yo));if(l<0)return null;let c=a*this.direction.dot(Uc.cross(ns));if(c<0||l+c>o)return null;let h=-a*ns.dot(Oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),o=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,p0)}lookAt(e,t,i){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),is.crossVectors(i,Gn),is.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),is.crossVectors(i,Gn)),is.normalize(),_o.crossVectors(Gn,is),s[0]=is.x,s[4]=_o.x,s[8]=Gn.x,s[1]=is.y,s[5]=_o.y,s[9]=Gn.y,s[2]=is.z,s[6]=_o.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],x=i[6],p=i[10],d=i[14],M=i[3],v=i[7],P=i[11],N=i[15],L=s[0],I=s[4],Z=s[8],T=s[12],R=s[1],J=s[5],oe=s[9],ye=s[13],F=s[2],X=s[6],B=s[10],ne=s[14],Q=s[3],V=s[7],ee=s[11],te=s[15];return r[0]=o*L+a*R+l*F+c*Q,r[4]=o*I+a*J+l*X+c*V,r[8]=o*Z+a*oe+l*B+c*ee,r[12]=o*T+a*ye+l*ne+c*te,r[1]=h*L+u*R+f*F+m*Q,r[5]=h*I+u*J+f*X+m*V,r[9]=h*Z+u*oe+f*B+m*ee,r[13]=h*T+u*ye+f*ne+m*te,r[2]=g*L+x*R+p*F+d*Q,r[6]=g*I+x*J+p*X+d*V,r[10]=g*Z+x*oe+p*B+d*ee,r[14]=g*T+x*ye+p*ne+d*te,r[3]=M*L+v*R+P*F+N*Q,r[7]=M*I+v*J+P*X+N*V,r[11]=M*Z+v*oe+P*B+N*ee,r[15]=M*T+v*ye+P*ne+N*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*m-i*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],M=u*p*c-x*f*c+x*l*m-a*p*m-u*l*d+a*f*d,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,P=h*x*c-g*u*c+g*a*m-o*x*m-h*a*d+o*u*d,N=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,L=t*M+i*v+s*P+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return e[0]=M*I,e[1]=(x*f*r-u*p*r-x*s*m+i*p*m+u*s*d-i*f*d)*I,e[2]=(a*p*r-x*l*r+x*s*c-i*p*c-a*s*d+i*l*d)*I,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*m-i*l*m)*I,e[4]=v*I,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*I,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*I,e[8]=P*I,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*d-t*u*d)*I,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*d+t*a*d)*I,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*I,e[12]=N*I,e[13]=(h*x*s-g*u*s+g*i*f-t*x*f-h*i*p+t*u*p)*I,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*p-t*a*p)*I,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,x=o*h,p=o*u,d=a*u,M=l*c,v=l*h,P=l*u,N=i.x,L=i.y,I=i.z;return s[0]=(1-(x+d))*N,s[1]=(m+P)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(m-P)*L,s[5]=(1-(f+d))*L,s[6]=(p+M)*L,s[7]=0,s[8]=(g+v)*I,s[9]=(p-M)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),a=hr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);let c=1/r,h=1/o,u=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Oi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(a===Oi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Oi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,m=(i+s)*h,g,x;if(a===Oi)g=(o+r)*u,x=-2*u;else if(a===$o)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},hr=new U,ai=new at,f0=new U(0,0,0),p0=new U(1,1,1),is=new U,_o=new U,Gn=new U,Wd=new at,Xd=new pi,Ko=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ko.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},m0=0,qd=new U,ur=new pi,Ri=new at,xo=new U,la=new U,g0=new U,y0=new pi,$d=new U(1,0,0),Yd=new U(0,1,0),jd=new U(0,0,1),_0={type:"added"},x0={type:"removed"},Gt=class n extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Ko,i=new pi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ft}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(la,xo,this.up):Ri.lookAt(xo,la,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Ri),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,g0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new U(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new U,Pi=new U,Fc=new U,Li=new U,dr=new U,fr=new U,Zd=new U,Bc=new U,zc=new U,kc=new U,vo=!1,Bs=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){oi.subVectors(s,t),Pi.subVectors(i,t),Fc.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Pi),l=oi.dot(Fc),c=Pi.dot(Pi),h=Pi.dot(Fc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,t,i,s,r,o,a,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Pi.subVectors(e,t),oi.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),oi.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;dr.subVectors(s,i),fr.subVectors(r,i),Bc.subVectors(e,i);let l=dr.dot(Bc),c=fr.dot(Bc);if(l<=0&&c<=0)return t.copy(i);zc.subVectors(e,s);let h=dr.dot(zc),u=fr.dot(zc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(dr,o);kc.subVectors(e,r);let m=dr.dot(kc),g=fr.dot(kc);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fr,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Zd.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Zd,a);let d=1/(p+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=kh(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Hc(o,r,e+1/3),this.g=Hc(o,r,e),this.b=Hc(o,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=np[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Rt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(wn(Sn.r*255,0,255))*65536+Math.round(wn(Sn.g*255,0,255))*256+Math.round(wn(Sn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Sn.copy(this),t);let i=Sn.r,s=Sn.g,r=Sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Vt){Rt.fromWorkingColorSpace(Sn.copy(this),e);let t=Sn.r,i=Sn.g,s=Sn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(bo);let i=ma(ss.h,bo.h,t),s=ma(ss.s,bo.s,t),r=ma(ss.l,bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new rt;rt.NAMES=np;var v0=0,mi=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ar,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==Os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new U,Mo=new Ke,Xn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}};var Qo=class extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var el=class extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var b0=0,Zn=new at,Vc=new Gt,pr=new U,Wn=new fn,ca=new fn,on=new U,Vn=class n extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?el:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ft().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,i){return Zn.makeTranslation(e,t,i),this.applyMatrix4(Zn),this}scale(e,t,i){return Zn.makeScale(e,t,i),this.applyMatrix4(Zn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Wn.min,ca.min),Wn.expandByPoint(on),on.addVectors(Wn.max,ca.max),Wn.expandByPoint(on)):(Wn.expandByPoint(ca.min),Wn.expandByPoint(ca.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),on.add(pr)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new U,h[R]=new U;let u=new U,f=new U,m=new U,g=new Ke,x=new Ke,p=new Ke,d=new U,M=new U;function v(R,J,oe){u.fromArray(s,R*3),f.fromArray(s,J*3),m.fromArray(s,oe*3),g.fromArray(o,R*2),x.fromArray(o,J*2),p.fromArray(o,oe*2),f.sub(u),m.sub(u),x.sub(g),p.sub(g);let ye=1/(x.x*p.y-p.x*x.y);isFinite(ye)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(ye),M.copy(m).multiplyScalar(x.x).addScaledVector(f,-p.x).multiplyScalar(ye),c[R].add(d),c[J].add(d),c[oe].add(d),h[R].add(M),h[J].add(M),h[oe].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let R=0,J=P.length;R<J;++R){let oe=P[R],ye=oe.start,F=oe.count;for(let X=ye,B=ye+F;X<B;X+=3)v(i[X+0],i[X+1],i[X+2])}let N=new U,L=new U,I=new U,Z=new U;function T(R){I.fromArray(r,R*3),Z.copy(I);let J=c[R];N.copy(J),N.sub(I.multiplyScalar(I.dot(J))).normalize(),L.crossVectors(Z,J);let ye=L.dot(h[R])<0?-1:1;l[R*4]=N.x,l[R*4+1]=N.y,l[R*4+2]=N.z,l[R*4+3]=ye}for(let R=0,J=P.length;R<J;++R){let oe=P[R],ye=oe.start,F=oe.count;for(let X=ye,B=ye+F;X<B;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Xn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jd=new at,Ns=new Dr,So=new Qn,Kd=new U,mr=new U,gr=new U,yr=new U,Gc=new U,wo=new U,Eo=new Ke,To=new Ke,Ao=new Ke,Qd=new U,ef=new U,tf=new U,Co=new U,Ro=new U,Bt=class extends Gt{constructor(e=new Vn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Gc.fromBufferAttribute(u,e),o?wo.addScaledVector(Gc,h):wo.addScaledVector(Gc.sub(t),h))}t.add(wo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(So.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(So,Kd)===null||Ns.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let P=M,N=v;P<N;P+=3){let L=a.getX(P),I=a.getX(P+1),Z=a.getX(P+2);s=Po(this,d,e,i,c,h,u,L,I,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=a.getX(p),v=a.getX(p+1),P=a.getX(p+2);s=Po(this,o,e,i,c,h,u,M,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let P=M,N=v;P<N;P+=3){let L=P,I=P+1,Z=P+2;s=Po(this,d,e,i,c,h,u,L,I,Z),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let M=p,v=p+1,P=p+2;s=Po(this,o,e,i,c,h,u,M,v,P),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function M0(n,e,t,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===kn,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:n}}function Po(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mr),n.getVertexPosition(l,gr),n.getVertexPosition(c,yr);let h=M0(n,e,t,i,mr,gr,yr,Co);if(h){s&&(Eo.fromBufferAttribute(s,a),To.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,c),h.uv=Bs.getInterpolation(Co,mr,gr,yr,Eo,To,Ao,new Ke)),r&&(Eo.fromBufferAttribute(r,a),To.fromBufferAttribute(r,l),Ao.fromBufferAttribute(r,c),h.uv1=Bs.getInterpolation(Co,mr,gr,yr,Eo,To,Ao,new Ke),h.uv2=h.uv1),o&&(Qd.fromBufferAttribute(o,a),ef.fromBufferAttribute(o,l),tf.fromBufferAttribute(o,c),h.normal=Bs.getInterpolation(Co,mr,gr,yr,Qd,ef,tf,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Bs.getNormal(mr,gr,yr,u.normal),h.face=u}return h}var ba=class n extends Vn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(x,p,d,M,v,P,N,L,I,Z,T){let R=P/I,J=N/Z,oe=P/2,ye=N/2,F=L/2,X=I+1,B=Z+1,ne=0,Q=0,V=new U;for(let ee=0;ee<B;ee++){let te=ee*J-ye;for(let de=0;de<X;de++){let z=de*R-oe;V[x]=z*M,V[p]=te*v,V[d]=F,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[d]=L>0?1:-1,h.push(V.x,V.y,V.z),u.push(de/I),u.push(1-ee/Z),ne+=1}}for(let ee=0;ee<Z;ee++)for(let te=0;te<I;te++){let de=f+te+X*ee,z=f+te+X*(ee+1),q=f+(te+1)+X*(ee+1),se=f+(te+1)+X*ee;l.push(de,z,se),l.push(z,q,se),Q+=6}a.addGroup(m,Q,T),m+=Q,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ur(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Ur(n[t]);for(let s in i)e[s]=i[s]}return e}function S0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){return n.getRenderTarget()===null?n.outputColorSpace:Rt.workingColorSpace}var Al={clone:Ur,merge:Nn},w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ci=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=S0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tl=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jt=class extends tl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_r=-90,xr=1,dh=class extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(_r,xr,e,t);s.layers=this.layers,this.add(s);let r=new jt(_r,xr,e,t);r.layers=this.layers,this.add(r);let o=new jt(_r,xr,e,t);o.layers=this.layers,this.add(o);let a=new jt(_r,xr,e,t);a.layers=this.layers,this.add(a);let l=new jt(_r,xr,e,t);l.layers=this.layers,this.add(l);let c=new jt(_r,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nl=class extends Hn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fh=class extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hs?Vt:Kn),this.texture=new nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ba(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:Ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:as});r.uniforms.tEquirect.value=t;let o=new Bt(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Dn),new dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Wc=new U,T0=new U,A0=new ft,Di=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wc.subVectors(i,t).cross(T0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||A0.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new Qn,Lo=new U,Ma=class{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],M=s[13],v=s[14],P=s[15];if(i[0].setComponents(l-r,f-c,p-m,P-d).normalize(),i[1].setComponents(l+r,f+c,p+m,P+d).normalize(),i[2].setComponents(l+o,f+h,p+g,P+M).normalize(),i[3].setComponents(l-o,f-h,p-g,P-M).normalize(),i[4].setComponents(l-a,f-u,p-x,P-v).normalize(),t===Oi)i[5].setComponents(l+a,f+u,p+x,P+v).normalize();else if(t===$o)i[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){return Ds.center.set(0,0,0),Ds.radius=.7071067811865476,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function C0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let d=g[x];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var zi=class n extends Vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let M=d*f-o;for(let v=0;v<c;v++){let P=v*u-r;g.push(P,-M,0),x.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let v=M+c*d,P=M+c*(d+1),N=M+1+c*(d+1),L=M+1+c*d;m.push(v,P,L),m.push(P,N,L)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P0=`#ifdef USE_ALPHAHASH
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
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V0=`#ifdef USE_IRIDESCENCE
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
#endif`,G0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,K0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`
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
}`,oy=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
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
#endif`,Cy=`struct PhysicalMaterial {
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
}`,Ry=`
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,By=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zy=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
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
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,Ky=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f_=`float getShadowMask() {
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
}`,p_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m_=`#ifdef USE_SKINNING
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
#endif`,g_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
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
#endif`,__=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
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
}`,U_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
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
}`,H_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,$_=`#define MATCAP
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
}`,Y_=`#define NORMAL
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
}`,j_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,K_=`#define STANDARD
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
}`,Q_=`#define STANDARD
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
}`,ex=`#define TOON
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
}`,tx=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ax=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:R0,alphahash_pars_fragment:P0,alphamap_fragment:L0,alphamap_pars_fragment:I0,alphatest_fragment:N0,alphatest_pars_fragment:D0,aomap_fragment:U0,aomap_pars_fragment:O0,batching_pars_vertex:F0,batching_vertex:B0,begin_vertex:z0,beginnormal_vertex:k0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:G0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:$0,color_fragment:Y0,color_pars_fragment:j0,color_pars_vertex:Z0,color_vertex:J0,common:K0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:sy,colorspace_fragment:ry,colorspace_pars_fragment:ay,envmap_fragment:oy,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:hy,envmap_physical_pars_fragment:My,envmap_vertex:uy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_fragment:yy,lightmap_pars_fragment:_y,lights_lambert_fragment:xy,lights_lambert_pars_fragment:vy,lights_pars_begin:by,lights_toon_fragment:Sy,lights_toon_pars_fragment:wy,lights_phong_fragment:Ey,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ay,lights_physical_pars_fragment:Cy,lights_fragment_begin:Ry,lights_fragment_maps:Py,lights_fragment_end:Ly,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Uy,map_fragment:Oy,map_pars_fragment:Fy,map_particle_fragment:By,map_particle_pars_fragment:zy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Hy,morphcolor_vertex:Vy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Xy,normal_fragment_begin:qy,normal_fragment_maps:$y,normal_pars_fragment:Yy,normal_pars_vertex:jy,normal_vertex:Zy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:Ky,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:e_,iridescence_pars_fragment:t_,opaque_fragment:n_,packing:i_,premultiplied_alpha_fragment:s_,project_vertex:r_,dithering_fragment:a_,dithering_pars_fragment:o_,roughnessmap_fragment:l_,roughnessmap_pars_fragment:c_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:u_,shadowmap_vertex:d_,shadowmask_pars_fragment:f_,skinbase_vertex:p_,skinning_pars_vertex:m_,skinning_vertex:g_,skinnormal_vertex:y_,specularmap_fragment:__,specularmap_pars_fragment:x_,tonemapping_fragment:v_,tonemapping_pars_fragment:b_,transmission_fragment:M_,transmission_pars_fragment:S_,uv_pars_fragment:w_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:A_,background_vert:C_,background_frag:R_,backgroundCube_vert:P_,backgroundCube_frag:L_,cube_vert:I_,cube_frag:N_,depth_vert:D_,depth_frag:U_,distanceRGBA_vert:O_,distanceRGBA_frag:F_,equirect_vert:B_,equirect_frag:z_,linedashed_vert:k_,linedashed_frag:H_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:W_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:$_,meshnormal_vert:Y_,meshnormal_frag:j_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:K_,meshphysical_frag:Q_,meshtoon_vert:ex,meshtoon_frag:tx,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ax,sprite_frag:ox},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Un={basic:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Nn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Nn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Nn([me.points,me.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Nn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Nn([me.common,me.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Nn([me.sprite,me.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Nn([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Nn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Un.physical={uniforms:Nn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Io={r:0,b:0,g:0};function lx(n,e,t,i,s,r,o){let a=new rt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let M=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,l):v&&v.isColor&&(x(v,1),M=!0);let P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===El)?(h===void 0&&(h=new Bt(new ba(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ur(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ut,(u!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Bt(new zi(2,2),new ci({name:"BackgroundMaterial",uniforms:Ur(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,d){p.getRGB(Io,ip(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:g}}function cx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(F,X,B,ne,Q){let V=!1;if(o){let ee=x(ne,B,X);c!==ee&&(c=ee,m(c.object)),V=d(F,ne,B,Q),V&&M(F,ne,B,Q)}else{let ee=X.wireframe===!0;(c.geometry!==ne.id||c.program!==B.id||c.wireframe!==ee)&&(c.geometry=ne.id,c.program=B.id,c.wireframe=ee,V=!0)}Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,Z(F,X,B,ne),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function x(F,X,B){let ne=B.wireframe===!0,Q=a[F.id];Q===void 0&&(Q={},a[F.id]=Q);let V=Q[X.id];V===void 0&&(V={},Q[X.id]=V);let ee=V[ne];return ee===void 0&&(ee=p(f()),V[ne]=ee),ee}function p(F){let X=[],B=[],ne=[];for(let Q=0;Q<s;Q++)X[Q]=0,B[Q]=0,ne[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:B,attributeDivisors:ne,object:F,attributes:{},index:null}}function d(F,X,B,ne){let Q=c.attributes,V=X.attributes,ee=0,te=B.getAttributes();for(let de in te)if(te[de].location>=0){let q=Q[de],se=V[de];if(se===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ne}function M(F,X,B,ne){let Q={},V=X.attributes,ee=0,te=B.getAttributes();for(let de in te)if(te[de].location>=0){let q=V[de];q===void 0&&(de==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),de==="instanceColor"&&F.instanceColor&&(q=F.instanceColor));let se={};se.attribute=q,q&&q.data&&(se.data=q.data),Q[de]=se,ee++}c.attributes=Q,c.attributesNum=ee,c.index=ne}function v(){let F=c.newAttributes;for(let X=0,B=F.length;X<B;X++)F[X]=0}function P(F){N(F,0)}function N(F,X){let B=c.newAttributes,ne=c.enabledAttributes,Q=c.attributeDivisors;B[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),Q[F]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),Q[F]=X)}function L(){let F=c.newAttributes,X=c.enabledAttributes;for(let B=0,ne=X.length;B<ne;B++)X[B]!==F[B]&&(n.disableVertexAttribArray(B),X[B]=0)}function I(F,X,B,ne,Q,V,ee){ee===!0?n.vertexAttribIPointer(F,X,B,Q,V):n.vertexAttribPointer(F,X,B,ne,Q,V)}function Z(F,X,B,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let Q=ne.attributes,V=B.getAttributes(),ee=X.defaultAttributeValues;for(let te in V){let de=V[te];if(de.location>=0){let z=Q[te];if(z===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){let q=z.normalized,se=z.itemSize,re=t.get(z);if(re===void 0)continue;let le=re.buffer,Te=re.type,He=re.bytesPerElement,Ve=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||z.gpuType===qf);if(z.isInterleavedBufferAttribute){let gt=z.data,G=gt.stride,cn=z.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<de.locationSize;Xe++)N(de.location+Xe,gt.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<de.locationSize;Xe++)P(de.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<de.locationSize;Xe++)I(de.location+Xe,se/de.locationSize,Te,q,G*He,(cn+se/de.locationSize*Xe)*He,Ve)}else{if(z.isInstancedBufferAttribute){for(let gt=0;gt<de.locationSize;gt++)N(de.location+gt,z.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let gt=0;gt<de.locationSize;gt++)P(de.location+gt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let gt=0;gt<de.locationSize;gt++)I(de.location+gt,se/de.locationSize,Te,q,se*He,se/de.locationSize*gt*He,Ve)}}else if(ee!==void 0){let q=ee[te];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(de.location,q);break;case 3:n.vertexAttrib3fv(de.location,q);break;case 4:n.vertexAttrib4fv(de.location,q);break;default:n.vertexAttrib1fv(de.location,q)}}}}L()}function T(){oe();for(let F in a){let X=a[F];for(let B in X){let ne=X[B];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete X[B]}delete a[F]}}function R(F){if(a[F.id]===void 0)return;let X=a[F.id];for(let B in X){let ne=X[B];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete X[B]}delete a[F.id]}function J(F){for(let X in a){let B=a[X];if(B[F.id]===void 0)continue;let ne=B[F.id];for(let Q in ne)g(ne[Q].object),delete ne[Q];delete B[F.id]}}function oe(){ye(),h=!0,c!==l&&(c=l,m(c.object))}function ye(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:ye,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:J,initAttributes:v,enableAttribute:P,disableUnusedAttributes:L}}function hx(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ux(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,P=o||e.has("OES_texture_float"),N=v&&P,L=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:P,floatVertexTextures:N,maxSamples:L}}function dx(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Di,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:i,v=M*4,P=d.clippingState||null;l.value=P,P=h(g,f,v,m);for(let N=0;N!==v;++N)P[N]=t[N];d.clippingState=P,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,P=m;v!==x;++v,P+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(p,P),p[P+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function fx(n){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=Pr:a===rh&&(o.mapping=Lr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===sh||a===rh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Or=class extends tl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Er=4,nf=[.125,.215,.35,.446,.526,.582],Fs=20,Xc=new Or,sf=new rt,qc=null,$c=0,Yc=0,Us=(1+Math.sqrt(5))/2,vr=1/Us,rf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Us,vr),new U(0,Us,-vr),new U(vr,0,Us),new U(-vr,0,Us),new U(Us,vr,0),new U(-Us,vr,0)],il=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Yc),e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:_a,format:Jn,colorSpace:Fi,depthBuffer:!1},s=af(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=af(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=px(r)),this._blurMaterial=mx(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,s){let a=new jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sf),h.toneMapping=os,h.autoClear=!1;let m=new Jt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Bt(new ba,m),x=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(sf),x=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let v=this._cubeSize;No(s,M*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Pr||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;No(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=rf[(s-1)%rf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Fs;p>Fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fs}`);let d=[],M=0;for(let I=0;I<Fs;++I){let Z=I/x,T=Math.exp(-Z*Z/2);d.push(T),I===0?M+=T:I<p&&(M+=2*T)}for(let I=0;I<d.length;I++)d[I]=d[I]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let P=this._sizeLods[s],N=3*P*(s>v-Er?s-v+Er:0),L=4*(this._cubeSize-P);No(t,N,L,3*P,2*P),l.setRenderTarget(t),l.render(u,Xc)}};function px(n){let e=[],t=[],i=[],s=n,r=n-Er+1+nf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Er?l=nf[o-n+Er-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,M=new Float32Array(x*g*m),v=new Float32Array(p*g*m),P=new Float32Array(d*g*m);for(let L=0;L<m;L++){let I=L%3*2/3-1,Z=L>2?0:-1,T=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];M.set(T,x*g*L),v.set(f,p*g*L);let R=[L,L,L,L,L,L];P.set(R,d*g*L)}let N=new Vn;N.setAttribute("position",new Xn(M,x)),N.setAttribute("uv",new Xn(v,p)),N.setAttribute("faceIndex",new Xn(P,d)),e.push(N),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function af(n,e,t){let i=new Bi(n,e,t);return i.texture.mapping=El,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function mx(n,e,t){let i=new Float32Array(Fs),s=new U(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function of(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function lf(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function gx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===sh||l===rh,h=l===Pr||l===Lr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new il(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new il(n));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function yx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _x(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let M=m.array;x=m.version;for(let v=0,P=M.length;v<P;v+=3){let N=M[v+0],L=M[v+1],I=M[v+2];f.push(N,L,L,I,I,N)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,P=M.length/3-1;v<P;v+=3){let N=v+0,L=v+1,I=v+2;f.push(N,L,L,I,I,N)}}else return;let p=new(tp(f)?el:Qo)(f,1);p.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xx(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,x),t.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let d=0;for(let M=0;M<x;M++)d+=g[M];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function vx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function bx(n,e){return n[0]-e[0]}function Mx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let F=function(){oe.dispose(),r.delete(h),h.removeEventListener("dispose",F)};x!==void 0&&x.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],Z=0;M===!0&&(Z=1),v===!0&&(Z=2),P===!0&&(Z=3);let T=h.attributes.position.count*Z,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let J=new Float32Array(T*R*4*g),oe=new Jo(J,T,R,g);oe.type=Ui,oe.needsUpdate=!0;let ye=Z*4;for(let X=0;X<g;X++){let B=N[X],ne=L[X],Q=I[X],V=T*R*4*X;for(let ee=0;ee<B.count;ee++){let te=ee*ye;M===!0&&(o.fromBufferAttribute(B,ee),J[V+te+0]=o.x,J[V+te+1]=o.y,J[V+te+2]=o.z,J[V+te+3]=0),v===!0&&(o.fromBufferAttribute(ne,ee),J[V+te+4]=o.x,J[V+te+5]=o.y,J[V+te+6]=o.z,J[V+te+7]=0),P===!0&&(o.fromBufferAttribute(Q,ee),J[V+te+8]=o.x,J[V+te+9]=o.y,J[V+te+10]=o.z,J[V+te+11]=Q.itemSize===4?o.w:1)}}x={count:g,texture:oe,size:new Ke(T,R)},r.set(h,x),h.addEventListener("dispose",F)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let P=g[v];P[0]=v,P[1]=f[v]}g.sort(Mx);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(bx);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let P=a[v],N=P[0],L=P[1];N!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+v)!==x[N]&&h.setAttribute("morphTarget"+v,x[N]),p&&h.getAttribute("morphNormal"+v)!==p[N]&&h.setAttribute("morphNormal"+v,p[N]),s[v]=L,d+=L):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function wx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sl=class extends Hn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:ks,h!==ks&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ks&&(i=rs),i===void 0&&h===Ir&&(i=zs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rp=new Hn,ap=new sl(1,1);ap.compareFunction=ep;var op=new Jo,lp=new uh,cp=new nl,cf=[],hf=[],uf=new Float32Array(16),df=new Float32Array(9),ff=new Float32Array(4);function Gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cl(n,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Rx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;ff.set(i),n.uniformMatrix2fv(this.addr,!1,ff),Qt(t,i)}}function Px(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),Qt(t,i)}}function Lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,i))return;uf.set(i),n.uniformMatrix4fv(this.addr,!1,uf),Qt(t,i)}}function Ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function Ox(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function kx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ap:rp;t.setTexture2D(e||r,s)}function Hx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lp,s)}function Vx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cp,s)}function Gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||op,s)}function Wx(n){switch(n){case 5126:return Ex;case 35664:return Tx;case 35665:return Ax;case 35666:return Cx;case 35674:return Rx;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Ix;case 35667:case 35671:return Nx;case 35668:case 35672:return Dx;case 35669:case 35673:return Ux;case 5125:return Ox;case 36294:return Fx;case 36295:return Bx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Xx(n,e){n.uniform1fv(this.addr,e)}function qx(n,e){let t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function $x(n,e){let t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Yx(n,e){let t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function jx(n,e){let t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zx(n,e){let t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Jx(n,e){let t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kx(n,e){n.uniform1iv(this.addr,e)}function Qx(n,e){n.uniform2iv(this.addr,e)}function ev(n,e){n.uniform3iv(this.addr,e)}function tv(n,e){n.uniform4iv(this.addr,e)}function nv(n,e){n.uniform1uiv(this.addr,e)}function iv(n,e){n.uniform2uiv(this.addr,e)}function sv(n,e){n.uniform3uiv(this.addr,e)}function rv(n,e){n.uniform4uiv(this.addr,e)}function av(n,e,t){let i=this.cache,s=e.length,r=Cl(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||rp,r[o])}function ov(n,e,t){let i=this.cache,s=e.length,r=Cl(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lp,r[o])}function lv(n,e,t){let i=this.cache,s=e.length,r=Cl(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cp,r[o])}function cv(n,e,t){let i=this.cache,s=e.length,r=Cl(t,s);Kt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||op,r[o])}function hv(n){switch(n){case 5126:return Xx;case 35664:return qx;case 35665:return $x;case 35666:return Yx;case 35674:return jx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Qx;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}var ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wx(t.type)}},mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hv(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},jc=/(\w+)(\])?(\[|\.)?/g;function pf(n,e){n.seq.push(e),n.map[e.id]=e}function uv(n,e,t){let i=n.name,s=i.length;for(jc.lastIndex=0;;){let r=jc.exec(i),o=jc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pf(t,c===void 0?new ph(a,n,e):new mh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new gh(a),pf(t,u)),t=u}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);uv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function mf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dv=37297,fv=0;function pv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function mv(n){let e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(n),i;switch(e===t?i="":e===qo&&t===Xo?i="LinearDisplayP3ToLinearSRGB":e===Xo&&t===qo&&(i="LinearSRGBToLinearDisplayP3"),n){case Fi:case Tl:return[i,"LinearTransferOETF"];case Vt:case zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pv(n.getShaderSource(e),o)}else return s}function gv(n,e){let t=mv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yv(n,e){let t;switch(e){case bg:t="Linear";break;case Mg:t="Reinhard";break;case Sg:t="OptimizedCineon";break;case wg:t="ACESFilmic";break;case Tg:t="AgX";break;case Eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _v(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Tr).join(`
`)}function xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Tr).join(`
`)}function vv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Tr(n){return n!==""}function yf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(n){return n.replace(Mv,wv)}var Sv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wv(n,e){let t=ut[e];if(t===void 0){let i=Sv.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(Ev,Tv)}function Tv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Av(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Pr:case Lr:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Pv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case xg:e="ENVMAP_BLENDING_MIX";break;case vg:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Iv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Av(t),c=Cv(t),h=Rv(t),u=Pv(t),f=Lv(t),m=t.isWebGL2?"":_v(t),g=xv(t),x=vv(r),p=s.createProgram(),d,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Tr).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Tr).join(`
`),M.length>0&&(M+=`
`)):(d=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),M=[m,vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?ut.tonemapping_pars_fragment:"",t.toneMapping!==os?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,gv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),o=yh(o),o=yf(o,t),o=_f(o,t),a=yh(a),a=yf(a,t),a=_f(a,t),o=xf(o),a=xf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let P=v+d+o,N=v+M+a,L=mf(s,s.VERTEX_SHADER,P),I=mf(s,s.FRAGMENT_SHADER,N);s.attachShader(p,L),s.attachShader(p,I),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Z(oe){if(n.debug.checkShaderErrors){let ye=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(I).trim(),B=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,L,I);else{let Q=gf(s,L,"vertex"),V=gf(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ye+`
`+Q+`
`+V)}else ye!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ye):(F===""||X==="")&&(ne=!1);ne&&(oe.diagnostics={runnable:B,programLog:ye,vertexShader:{log:F,prefix:d},fragmentShader:{log:X,prefix:M}})}s.deleteShader(L),s.deleteShader(I),T=new Rr(s,p),R=bv(s,p)}let T;this.getUniforms=function(){return T===void 0&&Z(this),T};let R;this.getAttributes=function(){return R===void 0&&Z(this),R};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(p,dv)),J},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=I,this}var Nv=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xh(e),t.set(e,i)),i}},xh=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};function Dv(n,e,t,i,s,r,o){let a=new va,l=new _h,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function p(T,R,J,oe,ye){let F=oe.fog,X=ye.geometry,B=T.isMeshStandardMaterial?oe.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||B),Q=ne&&ne.mapping===El?ne.image.height:null,V=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));let ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=ee!==void 0?ee.length:0,de=0;X.morphAttributes.position!==void 0&&(de=1),X.morphAttributes.normal!==void 0&&(de=2),X.morphAttributes.color!==void 0&&(de=3);let z,q,se,re;if(V){let rn=Un[V];z=rn.vertexShader,q=rn.fragmentShader}else z=T.vertexShader,q=T.fragmentShader,l.update(T),se=l.getVertexShaderID(T),re=l.getFragmentShaderID(T);let le=n.getRenderTarget(),Te=ye.isInstancedMesh===!0,He=ye.isBatchedMesh===!0,Ve=!!T.map,gt=!!T.matcap,G=!!ne,cn=!!T.aoMap,Xe=!!T.lightMap,et=!!T.bumpMap,Ne=!!T.normalMap,Pt=!!T.displacementMap,ot=!!T.emissiveMap,C=!!T.metalnessMap,w=!!T.roughnessMap,$=T.anisotropy>0,fe=T.clearcoat>0,he=T.iridescence>0,pe=T.sheen>0,Fe=T.transmission>0,Me=$&&!!T.anisotropyMap,Pe=fe&&!!T.clearcoatMap,$e=fe&&!!T.clearcoatNormalMap,lt=fe&&!!T.clearcoatRoughnessMap,ue=he&&!!T.iridescenceMap,Mt=he&&!!T.iridescenceThicknessMap,dt=pe&&!!T.sheenColorMap,Je=pe&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Le=!!T.specularColorMap,it=!!T.specularIntensityMap,bt=Fe&&!!T.transmissionMap,Nt=Fe&&!!T.thicknessMap,ht=!!T.gradientMap,_e=!!T.alphaMap,O=T.alphaTest>0,ve=!!T.alphaHash,be=!!T.extensions,Ze=!!X.attributes.uv1,qe=!!X.attributes.uv2,wt=!!X.attributes.uv3,Tt=os;return T.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:h,shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:q,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:He,instancing:Te,instancingColor:Te&&ye.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Fi,map:Ve,matcap:gt,envMap:G,envMapMode:G&&ne.mapping,envMapCubeUVHeight:Q,aoMap:cn,lightMap:Xe,bumpMap:et,normalMap:Ne,displacementMap:f&&Pt,emissiveMap:ot,normalMapObjectSpace:Ne&&T.normalMapType===kg,normalMapTangentSpace:Ne&&T.normalMapType===Bh,metalnessMap:C,roughnessMap:w,anisotropy:$,anisotropyMap:Me,clearcoat:fe,clearcoatMap:Pe,clearcoatNormalMap:$e,clearcoatRoughnessMap:lt,iridescence:he,iridescenceMap:ue,iridescenceThicknessMap:Mt,sheen:pe,sheenColorMap:dt,sheenRoughnessMap:Je,specularMap:Ge,specularColorMap:Le,specularIntensityMap:it,transmission:Fe,transmissionMap:bt,thicknessMap:Nt,gradientMap:ht,opaque:T.transparent===!1&&T.blending===Ar,alphaMap:_e,alphaTest:O,alphaHash:ve,combine:T.combine,mapUv:Ve&&x(T.map.channel),aoMapUv:cn&&x(T.aoMap.channel),lightMapUv:Xe&&x(T.lightMap.channel),bumpMapUv:et&&x(T.bumpMap.channel),normalMapUv:Ne&&x(T.normalMap.channel),displacementMapUv:Pt&&x(T.displacementMap.channel),emissiveMapUv:ot&&x(T.emissiveMap.channel),metalnessMapUv:C&&x(T.metalnessMap.channel),roughnessMapUv:w&&x(T.roughnessMap.channel),anisotropyMapUv:Me&&x(T.anisotropyMap.channel),clearcoatMapUv:Pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Je&&x(T.sheenRoughnessMap.channel),specularMapUv:Ge&&x(T.specularMap.channel),specularColorMapUv:Le&&x(T.specularColorMap.channel),specularIntensityMapUv:it&&x(T.specularIntensityMap.channel),transmissionMapUv:bt&&x(T.transmissionMap.channel),thicknessMapUv:Nt&&x(T.thicknessMap.channel),alphaMapUv:_e&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ne||$),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:Ze,vertexUv2s:qe,vertexUv3s:wt,pointsUvs:ye.isPoints===!0&&!!X.attributes.uv&&(Ve||_e),fog:!!F,useFog:T.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ye.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===On,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:be&&T.extensions.derivatives===!0,extensionFragDepth:be&&T.extensions.fragDepth===!0,extensionDrawBuffers:be&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&T.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function d(T){let R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(let J in T.defines)R.push(J),R.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(M(R,T),v(R,T),R.push(n.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function M(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function v(T,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),T.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),T.push(a.mask)}function P(T){let R=g[T.type],J;if(R){let oe=Un[R];J=Al.clone(oe.uniforms)}else J=T.uniforms;return J}function N(T,R){let J;for(let oe=0,ye=c.length;oe<ye;oe++){let F=c[oe];if(F.cacheKey===R){J=F,++J.usedTimes;break}}return J===void 0&&(J=new Iv(n,R,T,r),c.push(J)),J}function L(T){if(--T.usedTimes===0){let R=c.indexOf(T);c[R]=c[c.length-1],c.pop(),T.destroy()}}function I(T){l.remove(T)}function Z(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:P,acquireProgram:N,releaseProgram:L,releaseShaderCache:I,programs:c,dispose:Z}}function Uv(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ov(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,g,x,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),e++,d}function a(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,x,p){let d=o(u,f,m,g,x,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Ov),i.length>1&&i.sort(f||bf),s.length>1&&s.sort(f||bf)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Mf,n.set(i,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new rt};break;case"SpotLight":t={position:new U,direction:new U,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var kv=0;function Hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vv(n,e){let t=new Bv,i=zv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new at,a=new at;function l(h,u){let f=0,m=0,g=0;for(let oe=0;oe<9;oe++)s.probe[oe].set(0,0,0);let x=0,p=0,d=0,M=0,v=0,P=0,N=0,L=0,I=0,Z=0,T=0;h.sort(Hv);let R=u===!0?Math.PI:1;for(let oe=0,ye=h.length;oe<ye;oe++){let F=h[oe],X=F.color,B=F.intensity,ne=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=X.r*B*R,m+=X.g*B*R,g+=X.b*B*R;else if(F.isLightProbe){for(let V=0;V<9;V++)s.probe[V].addScaledVector(F.sh.coefficients[V],B);T++}else if(F.isDirectionalLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*R),F.castShadow){let ee=F.shadow,te=i.get(F);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,s.directionalShadow[x]=te,s.directionalShadowMap[x]=Q,s.directionalShadowMatrix[x]=F.shadow.matrix,P++}s.directional[x]=V,x++}else if(F.isSpotLight){let V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(X).multiplyScalar(B*R),V.distance=ne,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,s.spot[d]=V;let ee=F.shadow;if(F.map&&(s.spotLightMap[I]=F.map,I++,ee.updateMatrices(F),F.castShadow&&Z++),s.spotLightMatrix[d]=ee.matrix,F.castShadow){let te=i.get(F);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,s.spotShadow[d]=te,s.spotShadowMap[d]=Q,L++}d++}else if(F.isRectAreaLight){let V=t.get(F);V.color.copy(X).multiplyScalar(B),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=V,M++}else if(F.isPointLight){let V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*R),V.distance=F.distance,V.decay=F.decay,F.castShadow){let ee=F.shadow,te=i.get(F);te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=Q,s.pointShadowMatrix[p]=F.shadow.matrix,N++}s.point[p]=V,p++}else if(F.isHemisphereLight){let V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(B*R),V.groundColor.copy(F.groundColor).multiplyScalar(B*R),s.hemi[v]=V,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let J=s.hash;(J.directionalLength!==x||J.pointLength!==p||J.spotLength!==d||J.rectAreaLength!==M||J.hemiLength!==v||J.numDirectionalShadows!==P||J.numPointShadows!==N||J.numSpotShadows!==L||J.numSpotMaps!==I||J.numLightProbes!==T)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=M,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+I-Z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=T,J.directionalLength=x,J.pointLength=p,J.spotLength=d,J.rectAreaLength=M,J.hemiLength=v,J.numDirectionalShadows=P,J.numPointShadows=N,J.numSpotShadows=L,J.numSpotMaps=I,J.numLightProbes=T,s.version=kv++)}function c(h,u){let f=0,m=0,g=0,x=0,p=0,d=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let P=h[M];if(P.isDirectionalLight){let N=s.directional[f];N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),f++}else if(P.isSpotLight){let N=s.spot[g];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(d),N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(d),g++}else if(P.isRectAreaLight){let N=s.rectArea[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(d),a.identity(),o.copy(P.matrixWorld),o.premultiply(d),a.extractRotation(o),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),x++}else if(P.isPointLight){let N=s.point[m];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(d),m++}else if(P.isHemisphereLight){let N=s.hemi[p];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function Sf(n,e){let t=new Vv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gv(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Sf(n,e),t.set(r,[l])):o>=a.length?(l=new Sf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var vh=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bh=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function qv(n,e,t){let i=new Ma,s=new Ke,r=new Ke,o=new vt,a=new vh({depthPacking:zg}),l=new bh,c={},h=t.maxTextureSize,u={[kn]:dn,[dn]:kn,[On]:On},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Wv,fragmentShader:Xv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vn;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let d=this.type;this.render=function(L,I,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let T=n.getRenderTarget(),R=n.getActiveCubeFace(),J=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(as),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);let ye=d!==Ni&&this.type===Ni,F=d===Ni&&this.type!==Ni;for(let X=0,B=L.length;X<B;X++){let ne=L[X],Q=ne.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let V=Q.getFrameExtents();if(s.multiply(V),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,Q.mapSize.y=r.y)),Q.map===null||ye===!0||F===!0){let te=this.type!==Ni?{minFilter:un,magFilter:un}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Bi(s.x,s.y,te),Q.map.texture.name=ne.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();let ee=Q.getViewportCount();for(let te=0;te<ee;te++){let de=Q.getViewport(te);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),oe.viewport(o),Q.updateMatrices(ne,te),i=Q.getFrustum(),P(I,Z,Q.camera,ne,this.type)}Q.isPointLightShadow!==!0&&this.type===Ni&&M(Q,Z),Q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(T,R,J)};function M(L,I){let Z=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Bi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,Z,f,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,Z,m,x,null)}function v(L,I,Z,T){let R=null,J=Z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(J!==void 0)R=J;else if(R=Z.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let oe=R.uuid,ye=I.uuid,F=c[oe];F===void 0&&(F={},c[oe]=F);let X=F[ye];X===void 0&&(X=R.clone(),F[ye]=X,I.addEventListener("dispose",N)),R=X}if(R.visible=I.visible,R.wireframe=I.wireframe,T===Ni?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:u[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,Z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let oe=n.properties.get(R);oe.light=Z}return R}function P(L,I,Z,T,R){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ni)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld);let ye=e.update(L),F=L.material;if(Array.isArray(F)){let X=ye.groups;for(let B=0,ne=X.length;B<ne;B++){let Q=X[B],V=F[Q.materialIndex];if(V&&V.visible){let ee=v(L,V,T,R);L.onBeforeShadow(n,L,I,Z,ye,ee,Q),n.renderBufferDirect(Z,null,ye,ee,L,Q),L.onAfterShadow(n,L,I,Z,ye,ee,Q)}}}else if(F.visible){let X=v(L,F,T,R);L.onBeforeShadow(n,L,I,Z,ye,X,null),n.renderBufferDirect(Z,null,ye,X,L,null),L.onAfterShadow(n,L,I,Z,ye,X,null)}}let oe=L.children;for(let ye=0,F=oe.length;ye<F;ye++)P(oe[ye],I,Z,T,R)}function N(L){L.target.removeEventListener("dispose",N);for(let Z in c){let T=c[Z],R=L.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function $v(n,e,t){let i=t.isWebGL2;function s(){let O=!1,ve=new vt,be=null,Ze=new vt(0,0,0,0);return{setMask:function(qe){be!==qe&&!O&&(n.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){O=qe},setClear:function(qe,wt,Tt,St,rn){rn===!0&&(qe*=St,wt*=St,Tt*=St),ve.set(qe,wt,Tt,St),Ze.equals(ve)===!1&&(n.clearColor(qe,wt,Tt,St),Ze.copy(ve))},reset:function(){O=!1,be=null,Ze.set(-1,0,0,0)}}}function r(){let O=!1,ve=null,be=null,Ze=null;return{setTest:function(qe){qe?He(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(qe){ve!==qe&&!O&&(n.depthMask(qe),ve=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case dg:n.depthFunc(n.NEVER);break;case fg:n.depthFunc(n.ALWAYS);break;case pg:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case mg:n.depthFunc(n.EQUAL);break;case gg:n.depthFunc(n.GEQUAL);break;case yg:n.depthFunc(n.GREATER);break;case _g:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=qe}},setLocked:function(qe){O=qe},setClear:function(qe){Ze!==qe&&(n.clearDepth(qe),Ze=qe)},reset:function(){O=!1,ve=null,be=null,Ze=null}}}function o(){let O=!1,ve=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,rn=null;return{setTest:function(At){O||(At?He(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(At){ve!==At&&!O&&(n.stencilMask(At),ve=At)},setFunc:function(At,hn,Yn){(be!==At||Ze!==hn||qe!==Yn)&&(n.stencilFunc(At,hn,Yn),be=At,Ze=hn,qe=Yn)},setOp:function(At,hn,Yn){(wt!==At||Tt!==hn||St!==Yn)&&(n.stencilOp(At,hn,Yn),wt=At,Tt=hn,St=Yn)},setLocked:function(At){O=At},setClear:function(At){rn!==At&&(n.clearStencil(At),rn=At)},reset:function(){O=!1,ve=null,be=null,Ze=null,qe=null,wt=null,Tt=null,St=null,rn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,d=!1,M=null,v=null,P=null,N=null,L=null,I=null,Z=null,T=new rt(0,0,0),R=0,J=!1,oe=null,ye=null,F=null,X=null,B=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,V=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=V>=2);let te=null,de={},z=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),se=new vt().fromArray(z),re=new vt().fromArray(q);function le(O,ve,be,Ze){let qe=new Uint8Array(4),wt=n.createTexture();n.bindTexture(O,wt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<be;Tt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Ze,0,n.RGBA,n.UNSIGNED_BYTE,qe):n.texImage2D(ve+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qe);return wt}let Te={};Te[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(Ho),ot(!1),C(td),He(n.CULL_FACE),Ne(as);function He(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Ve(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function gt(O,ve){return m[O]!==ve?(n.bindFramebuffer(O,ve),m[O]=ve,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function G(O,ve){let be=x,Ze=!1;if(O)if(be=g.get(ve),be===void 0&&(be=[],g.set(ve,be)),O.isWebGLMultipleRenderTargets){let qe=O.texture;if(be.length!==qe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Tt=qe.length;wt<Tt;wt++)be[wt]=n.COLOR_ATTACHMENT0+wt;be.length=qe.length,Ze=!0}}else be[0]!==n.COLOR_ATTACHMENT0&&(be[0]=n.COLOR_ATTACHMENT0,Ze=!0);else be[0]!==n.BACK&&(be[0]=n.BACK,Ze=!0);Ze&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function cn(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Xe={[Os]:n.FUNC_ADD,[Jm]:n.FUNC_SUBTRACT,[Km]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[rd]=n.MIN,Xe[ad]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[rd]=O.MIN_EXT,Xe[ad]=O.MAX_EXT)}let et={[Qm]:n.ZERO,[eg]:n.ONE,[tg]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[og]:n.SRC_ALPHA_SATURATE,[rg]:n.DST_COLOR,[ig]:n.DST_ALPHA,[ng]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[ag]:n.ONE_MINUS_DST_COLOR,[sg]:n.ONE_MINUS_DST_ALPHA,[lg]:n.CONSTANT_COLOR,[cg]:n.ONE_MINUS_CONSTANT_COLOR,[hg]:n.CONSTANT_ALPHA,[ug]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(O,ve,be,Ze,qe,wt,Tt,St,rn,At){if(O===as){d===!0&&(Ve(n.BLEND),d=!1);return}if(d===!1&&(He(n.BLEND),d=!0),O!==Zm){if(O!==M||At!==J){if((v!==Os||L!==Os)&&(n.blendEquation(n.FUNC_ADD),v=Os,L=Os),At)switch(O){case Ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nd:n.blendFunc(n.ONE,n.ONE);break;case id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}P=null,N=null,I=null,Z=null,T.set(0,0,0),R=0,M=O,J=At}return}qe=qe||ve,wt=wt||be,Tt=Tt||Ze,(ve!==v||qe!==L)&&(n.blendEquationSeparate(Xe[ve],Xe[qe]),v=ve,L=qe),(be!==P||Ze!==N||wt!==I||Tt!==Z)&&(n.blendFuncSeparate(et[be],et[Ze],et[wt],et[Tt]),P=be,N=Ze,I=wt,Z=Tt),(St.equals(T)===!1||rn!==R)&&(n.blendColor(St.r,St.g,St.b,rn),T.copy(St),R=rn),M=O,J=!1}function Pt(O,ve){O.side===On?Ve(n.CULL_FACE):He(n.CULL_FACE);let be=O.side===dn;ve&&(be=!be),ot(be),O.blending===Ar&&O.transparent===!1?Ne(as):Ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ze=O.stencilWrite;c.setTest(Ze),Ze&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){oe!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),oe=O)}function C(O){O!==$m?(He(n.CULL_FACE),O!==ye&&(O===td?n.cullFace(n.BACK):O===Ym?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),ye=O}function w(O){O!==F&&(Q&&n.lineWidth(O),F=O)}function $(O,ve,be){O?(He(n.POLYGON_OFFSET_FILL),(X!==ve||B!==be)&&(n.polygonOffset(ve,be),X=ve,B=be)):Ve(n.POLYGON_OFFSET_FILL)}function fe(O){O?He(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function he(O){O===void 0&&(O=n.TEXTURE0+ne-1),te!==O&&(n.activeTexture(O),te=O)}function pe(O,ve,be){be===void 0&&(te===null?be=n.TEXTURE0+ne-1:be=te);let Ze=de[be];Ze===void 0&&(Ze={type:void 0,texture:void 0},de[be]=Ze),(Ze.type!==O||Ze.texture!==ve)&&(te!==be&&(n.activeTexture(be),te=be),n.bindTexture(O,ve||Te[O]),Ze.type=O,Ze.texture=ve)}function Fe(){let O=de[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function bt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Nt(O,ve){let be=u.get(ve);be===void 0&&(be=new WeakMap,u.set(ve,be));let Ze=be.get(O);Ze===void 0&&(Ze=n.getUniformBlockIndex(ve,O.name),be.set(O,Ze))}function ht(O,ve){let Ze=u.get(ve).get(O);h.get(ve)!==Ze&&(n.uniformBlockBinding(ve,Ze,O.__bindingPointIndex),h.set(ve,Ze))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},te=null,de={},m={},g=new WeakMap,x=[],p=null,d=!1,M=null,v=null,P=null,N=null,L=null,I=null,Z=null,T=new rt(0,0,0),R=0,J=!1,oe=null,ye=null,F=null,X=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:Ve,bindFramebuffer:gt,drawBuffers:G,useProgram:cn,setBlending:Ne,setMaterial:Pt,setFlipSided:ot,setCullFace:C,setLineWidth:w,setPolygonOffset:$,setScissorTest:fe,activeTexture:he,bindTexture:pe,unbindTexture:Fe,compressedTexImage2D:Me,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:Le,updateUBOMapping:Nt,uniformBlockBinding:ht,texStorage2D:dt,texStorage3D:Je,texSubImage2D:$e,texSubImage3D:lt,compressedTexSubImage2D:ue,compressedTexSubImage3D:Mt,scissor:it,viewport:bt,reset:_e}}function Yv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return m?new OffscreenCanvas(C,w):xa("canvas")}function x(C,w,$,fe){let he=1;if((C.width>fe||C.height>fe)&&(he=fe/Math.max(C.width,C.height)),he<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let pe=w?Yo:Math.floor,Fe=pe(he*C.width),Me=pe(he*C.height);u===void 0&&(u=g(Fe,Me));let Pe=$?g(Fe,Me):u;return Pe.width=Fe,Pe.height=Me,Pe.getContext("2d").drawImage(C,0,0,Fe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Fe+"x"+Me+")."),Pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return ch(C.width)&&ch(C.height)}function d(C){return a?!1:C.wrapS!==En||C.wrapT!==En||C.minFilter!==un&&C.minFilter!==Dn}function M(C,w){return C.generateMipmaps&&w&&C.minFilter!==un&&C.minFilter!==Dn}function v(C){n.generateMipmap(C)}function P(C,w,$,fe,he=!1){if(a===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe=w;if(w===n.RED&&($===n.FLOAT&&(pe=n.R32F),$===n.HALF_FLOAT&&(pe=n.R16F),$===n.UNSIGNED_BYTE&&(pe=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(pe=n.R8UI),$===n.UNSIGNED_SHORT&&(pe=n.R16UI),$===n.UNSIGNED_INT&&(pe=n.R32UI),$===n.BYTE&&(pe=n.R8I),$===n.SHORT&&(pe=n.R16I),$===n.INT&&(pe=n.R32I)),w===n.RG&&($===n.FLOAT&&(pe=n.RG32F),$===n.HALF_FLOAT&&(pe=n.RG16F),$===n.UNSIGNED_BYTE&&(pe=n.RG8)),w===n.RGBA){let Fe=he?Wo:Rt.getTransfer(fe);$===n.FLOAT&&(pe=n.RGBA32F),$===n.HALF_FLOAT&&(pe=n.RGBA16F),$===n.UNSIGNED_BYTE&&(pe=Fe===Ut?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(C,w,$){return M(C,$)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){return C===un||C===ld||C===bc?n.NEAREST:n.LINEAR}function I(C){let w=C.target;w.removeEventListener("dispose",I),T(w),w.isVideoTexture&&h.delete(w)}function Z(C){let w=C.target;w.removeEventListener("dispose",Z),J(w)}function T(C){let w=i.get(C);if(w.__webglInit===void 0)return;let $=C.source,fe=f.get($);if(fe){let he=fe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&R(C),Object.keys(fe).length===0&&f.delete($)}i.remove(C)}function R(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let $=C.source,fe=f.get($);delete fe[w.__cacheKey],o.memory.textures--}function J(C){let w=C.texture,$=i.get(C),fe=i.get(w);if(fe.__webglTexture!==void 0&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray($.__webglFramebuffer[he]))for(let pe=0;pe<$.__webglFramebuffer[he].length;pe++)n.deleteFramebuffer($.__webglFramebuffer[he][pe]);else n.deleteFramebuffer($.__webglFramebuffer[he]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[he])}else{if(Array.isArray($.__webglFramebuffer))for(let he=0;he<$.__webglFramebuffer.length;he++)n.deleteFramebuffer($.__webglFramebuffer[he]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let he=0;he<$.__webglColorRenderbuffer.length;he++)$.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[he]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let he=0,pe=w.length;he<pe;he++){let Fe=i.get(w[he]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(w[he])}i.remove(w),i.remove(C)}let oe=0;function ye(){oe=0}function F(){let C=oe;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),oe+=1,C}function X(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function B(C,w){let $=i.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){let fe=C.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se($,C,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function ne(C,w){let $=i.get(C);if(C.version>0&&$.__version!==C.version){se($,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function Q(C,w){let $=i.get(C);if(C.version>0&&$.__version!==C.version){se($,C,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function V(C,w){let $=i.get(C);if(C.version>0&&$.__version!==C.version){re($,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}let ee={[cs]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[ah]:n.MIRRORED_REPEAT},te={[un]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[bc]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Cg]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},de={[Hg]:n.NEVER,[$g]:n.ALWAYS,[Vg]:n.LESS,[ep]:n.LEQUAL,[Gg]:n.EQUAL,[qg]:n.GEQUAL,[Wg]:n.GREATER,[Xg]:n.NOTEQUAL};function z(C,w,$){if($?(n.texParameteri(C,n.TEXTURE_WRAP_S,ee[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ee[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ee[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,te[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,te[w.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==En||w.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,L(w.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,L(w.minFilter)),w.minFilter!==un&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===un||w.minFilter!==bc&&w.minFilter!==hs||w.type===Ui&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===_a&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function q(C,w){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",I));let fe=w.source,he=f.get(fe);he===void 0&&(he={},f.set(fe,he));let pe=X(w);if(pe!==C.__cacheKey){he[pe]===void 0&&(he[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),he[pe].usedTimes++;let Fe=he[C.__cacheKey];Fe!==void 0&&(he[C.__cacheKey].usedTimes--,Fe.usedTimes===0&&R(w)),C.__cacheKey=pe,C.__webglTexture=he[pe].texture}return $}function se(C,w,$){let fe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=n.TEXTURE_3D);let he=q(C,w),pe=w.source;t.bindTexture(fe,C.__webglTexture,n.TEXTURE0+$);let Fe=i.get(pe);if(pe.version!==Fe.__version||he===!0){t.activeTexture(n.TEXTURE0+$);let Me=Rt.getPrimaries(Rt.workingColorSpace),Pe=w.colorSpace===Kn?null:Rt.getPrimaries(w.colorSpace),$e=w.colorSpace===Kn||Me===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let lt=d(w)&&p(w.image)===!1,ue=x(w.image,lt,!1,s.maxTextureSize);ue=ot(w,ue);let Mt=p(ue)||a,dt=r.convert(w.format,w.colorSpace),Je=r.convert(w.type),Ge=P(w.internalFormat,dt,Je,w.colorSpace,w.isVideoTexture);z(fe,w,Mt);let Le,it=w.mipmaps,bt=a&&w.isVideoTexture!==!0&&Ge!==Kf,Nt=Fe.__version===void 0||he===!0,ht=N(w,ue,Mt);if(w.isDepthTexture)Ge=n.DEPTH_COMPONENT,a?w.type===Ui?Ge=n.DEPTH_COMPONENT32F:w.type===rs?Ge=n.DEPTH_COMPONENT24:w.type===zs?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:w.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ks&&Ge===n.DEPTH_COMPONENT&&w.type!==Fh&&w.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=rs,Je=r.convert(w.type)),w.format===Ir&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,w.type!==zs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zs,Je=r.convert(w.type))),Nt&&(bt?t.texStorage2D(n.TEXTURE_2D,1,Ge,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ge,ue.width,ue.height,0,dt,Je,null));else if(w.isDataTexture)if(it.length>0&&Mt){bt&&Nt&&t.texStorage2D(n.TEXTURE_2D,ht,Ge,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Le=it[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,dt,Je,Le.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Le.width,Le.height,0,dt,Je,Le.data);w.generateMipmaps=!1}else bt?(Nt&&t.texStorage2D(n.TEXTURE_2D,ht,Ge,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,dt,Je,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,ue.width,ue.height,0,dt,Je,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){bt&&Nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ge,it[0].width,it[0].height,ue.depth);for(let _e=0,O=it.length;_e<O;_e++)Le=it[_e],w.format!==Jn?dt!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ue.depth,dt,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Le.width,Le.height,ue.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,ue.depth,dt,Je,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Le.width,Le.height,ue.depth,0,dt,Je,Le.data)}else{bt&&Nt&&t.texStorage2D(n.TEXTURE_2D,ht,Ge,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Le=it[_e],w.format!==Jn?dt!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,dt,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,dt,Je,Le.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Le.width,Le.height,0,dt,Je,Le.data)}else if(w.isDataArrayTexture)bt?(Nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ht,Ge,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,dt,Je,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,ue.width,ue.height,ue.depth,0,dt,Je,ue.data);else if(w.isData3DTexture)bt?(Nt&&t.texStorage3D(n.TEXTURE_3D,ht,Ge,ue.width,ue.height,ue.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,dt,Je,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,ue.width,ue.height,ue.depth,0,dt,Je,ue.data);else if(w.isFramebufferTexture){if(Nt)if(bt)t.texStorage2D(n.TEXTURE_2D,ht,Ge,ue.width,ue.height);else{let _e=ue.width,O=ue.height;for(let ve=0;ve<ht;ve++)t.texImage2D(n.TEXTURE_2D,ve,Ge,_e,O,0,dt,Je,null),_e>>=1,O>>=1}}else if(it.length>0&&Mt){bt&&Nt&&t.texStorage2D(n.TEXTURE_2D,ht,Ge,it[0].width,it[0].height);for(let _e=0,O=it.length;_e<O;_e++)Le=it[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,dt,Je,Le):t.texImage2D(n.TEXTURE_2D,_e,Ge,dt,Je,Le);w.generateMipmaps=!1}else bt?(Nt&&t.texStorage2D(n.TEXTURE_2D,ht,Ge,ue.width,ue.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,Je,ue)):t.texImage2D(n.TEXTURE_2D,0,Ge,dt,Je,ue);M(w,Mt)&&v(fe),Fe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function re(C,w,$){if(w.image.length!==6)return;let fe=q(C,w),he=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);let pe=i.get(he);if(he.version!==pe.__version||fe===!0){t.activeTexture(n.TEXTURE0+$);let Fe=Rt.getPrimaries(Rt.workingColorSpace),Me=w.colorSpace===Kn?null:Rt.getPrimaries(w.colorSpace),Pe=w.colorSpace===Kn||Fe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let $e=w.isCompressedTexture||w.image[0].isCompressedTexture,lt=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let _e=0;_e<6;_e++)!$e&&!lt?ue[_e]=x(w.image[_e],!1,!0,s.maxCubemapSize):ue[_e]=lt?w.image[_e].image:w.image[_e],ue[_e]=ot(w,ue[_e]);let Mt=ue[0],dt=p(Mt)||a,Je=r.convert(w.format,w.colorSpace),Ge=r.convert(w.type),Le=P(w.internalFormat,Je,Ge,w.colorSpace),it=a&&w.isVideoTexture!==!0,bt=pe.__version===void 0||fe===!0,Nt=N(w,Mt,dt);z(n.TEXTURE_CUBE_MAP,w,dt);let ht;if($e){it&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,Le,Mt.width,Mt.height);for(let _e=0;_e<6;_e++){ht=ue[_e].mipmaps;for(let O=0;O<ht.length;O++){let ve=ht[O];w.format!==Jn?Je!==null?it?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Je,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,ve.width,ve.height,Je,Ge,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Le,ve.width,ve.height,0,Je,Ge,ve.data)}}}else{ht=w.mipmaps,it&&bt&&(ht.length>0&&Nt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,Le,ue[0].width,ue[0].height));for(let _e=0;_e<6;_e++)if(lt){it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ue[_e].width,ue[_e].height,Je,Ge,ue[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,ue[_e].width,ue[_e].height,0,Je,Ge,ue[_e].data);for(let O=0;O<ht.length;O++){let be=ht[O].image[_e].image;it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,be.width,be.height,Je,Ge,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Le,be.width,be.height,0,Je,Ge,be.data)}}else{it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,Ge,ue[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Le,Je,Ge,ue[_e]);for(let O=0;O<ht.length;O++){let ve=ht[O];it?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Je,Ge,ve.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Le,Je,Ge,ve.image[_e])}}}M(w,dt)&&v(n.TEXTURE_CUBE_MAP),pe.__version=he.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function le(C,w,$,fe,he,pe){let Fe=r.convert($.format,$.colorSpace),Me=r.convert($.type),Pe=P($.internalFormat,Fe,Me,$.colorSpace);if(!i.get(w).__hasExternalTextures){let lt=Math.max(1,w.width>>pe),ue=Math.max(1,w.height>>pe);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,pe,Pe,lt,ue,w.depth,0,Fe,Me,null):t.texImage2D(he,pe,Pe,lt,ue,0,Fe,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,he,i.get($).__webglTexture,0,et(w)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,he,i.get($).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let fe=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||Ne(w)){let he=w.depthTexture;he&&he.isDepthTexture&&(he.type===Ui?fe=n.DEPTH_COMPONENT32F:he.type===rs&&(fe=n.DEPTH_COMPONENT24));let pe=et(w);Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,fe,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,fe,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let fe=et(w);$&&Ne(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let fe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let he=0;he<fe.length;he++){let pe=fe[he],Fe=r.convert(pe.format,pe.colorSpace),Me=r.convert(pe.type),Pe=P(pe.internalFormat,Fe,Me,pe.colorSpace),$e=et(w);$&&Ne(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);let fe=i.get(w.depthTexture).__webglTexture,he=et(w);if(w.depthTexture.format===ks)Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,fe,0);else if(w.depthTexture.format===Ir)Ne(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ve(C){let w=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");He(w.__webglFramebuffer,C)}else if($){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]=n.createRenderbuffer(),Te(w.__webglDepthbuffer[fe],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Te(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(C,w,$){let fe=i.get(C);w!==void 0&&le(fe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ve(C)}function G(C){let w=C.texture,$=i.get(C),fe=i.get(w);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=w.version,o.memory.textures++);let he=C.isWebGLCubeRenderTarget===!0,pe=C.isWebGLMultipleRenderTargets===!0,Fe=p(C)||a;if(he){$.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Me]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)$.__webglFramebuffer[Me][Pe]=n.createFramebuffer()}else $.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)$.__webglFramebuffer[Me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let Me=C.texture;for(let Pe=0,$e=Me.length;Pe<$e;Pe++){let lt=i.get(Me[Pe]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ne(C)===!1){let Me=pe?w:[w];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Me.length;Pe++){let $e=Me[Pe];$.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Pe]);let lt=r.convert($e.format,$e.colorSpace),ue=r.convert($e.type),Mt=P($e.internalFormat,lt,ue,$e.colorSpace,C.isXRRenderTarget===!0),dt=et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,$.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),Te($.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),z(n.TEXTURE_CUBE_MAP,w,Fe);for(let Me=0;Me<6;Me++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le($.__webglFramebuffer[Me][Pe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe);else le($.__webglFramebuffer[Me],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);M(w,Fe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Me=C.texture;for(let Pe=0,$e=Me.length;Pe<$e;Pe++){let lt=Me[Pe],ue=i.get(lt);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),z(n.TEXTURE_2D,lt,Fe),le($.__webglFramebuffer,C,lt,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),M(lt,Fe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,fe.__webglTexture),z(Me,w,Fe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)le($.__webglFramebuffer[Pe],C,w,n.COLOR_ATTACHMENT0,Me,Pe);else le($.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,Me,0);M(w,Fe)&&v(Me),t.unbindTexture()}C.depthBuffer&&Ve(C)}function cn(C){let w=p(C)||a,$=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let fe=0,he=$.length;fe<he;fe++){let pe=$[fe];if(M(pe,w)){let Fe=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(pe).__webglTexture;t.bindTexture(Fe,Me),v(Fe),t.unbindTexture()}}}function Xe(C){if(a&&C.samples>0&&Ne(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],$=C.width,fe=C.height,he=n.COLOR_BUFFER_BIT,pe=[],Fe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(C),Pe=C.isWebGLMultipleRenderTargets===!0;if(Pe)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){pe.push(n.COLOR_ATTACHMENT0+$e),C.depthBuffer&&pe.push(Fe);let lt=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(lt===!1&&(C.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[$e]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),Pe){let ue=i.get(w[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,$,fe,0,0,$,fe,he,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Me.__webglColorRenderbuffer[$e]);let lt=i.get(w[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function et(C){return Math.min(s.maxSamples,C.samples)}function Ne(C){let w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function ot(C,w){let $=C.colorSpace,fe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===lh||$!==Fi&&$!==Kn&&(Rt.getTransfer($)===Ut?a===!1?e.has("EXT_sRGB")===!0&&fe===Jn?(C.format=lh,C.minFilter=Dn,C.generateMipmaps=!1):w=jo.sRGBToLinear(w):(fe!==Jn||he!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}this.allocateTextureUnit=F,this.resetTextureUnits=ye,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=gt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=cn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ne}function jv(n,e,t){let i=t.isWebGL2;function s(r,o=Kn){let a,l=Rt.getTransfer(o);if(r===ls)return n.UNSIGNED_BYTE;if(r===$f)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Rg)return n.BYTE;if(r===Pg)return n.SHORT;if(r===Fh)return n.UNSIGNED_SHORT;if(r===qf)return n.INT;if(r===rs)return n.UNSIGNED_INT;if(r===Ui)return n.FLOAT;if(r===_a)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Lg)return n.ALPHA;if(r===Jn)return n.RGBA;if(r===Ig)return n.LUMINANCE;if(r===Ng)return n.LUMINANCE_ALPHA;if(r===ks)return n.DEPTH_COMPONENT;if(r===Ir)return n.DEPTH_STENCIL;if(r===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Dg)return n.RED;if(r===jf)return n.RED_INTEGER;if(r===Ug)return n.RG;if(r===Zf)return n.RG_INTEGER;if(r===Jf)return n.RGBA_INTEGER;if(r===Mc||r===Sc||r===wc||r===Ec)if(l===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===hd||r===ud||r===dd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fd||r===pd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===fd)return l===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===md||r===gd||r===yd||r===_d||r===xd||r===vd||r===bd||r===Md||r===Sd||r===wd||r===Ed||r===Td||r===Ad||r===Cd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===md)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tc||r===Rd||r===Pd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Tc)return l===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Og||r===Ld||r===Id||r===Nd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Tc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Mh=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Tn=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zv={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Sh=class extends us{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=t.getContextAttributes(),p=null,d=null,M=[],v=[],P=new Ke,N=null,L=new jt;L.layers.enable(1),L.viewport=new vt;let I=new jt;I.layers.enable(2),I.viewport=new vt;let Z=[L,I],T=new Mh;T.layers.enable(1),T.layers.enable(2);let R=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=M[z];return q===void 0&&(q=new ya,M[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=M[z];return q===void 0&&(q=new ya,M[z]=q),q.getGripSpace()},this.getHand=function(z){let q=M[z];return q===void 0&&(q=new ya,M[z]=q),q.getHandSpace()};function oe(z){let q=v.indexOf(z.inputSource);if(q===-1)return;let se=M[q];se!==void 0&&(se.update(z.inputSource,z.frame,c||o),se.dispatchEvent({type:z.type,data:z.inputSource}))}function ye(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",ye),s.removeEventListener("inputsourceschange",F);for(let z=0;z<M.length;z++){let q=v[z];q!==null&&(v[z]=null,M[z].disconnect(q))}R=null,J=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",ye),s.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Bi(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,se=null,re=null;x.depth&&(re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=x.stencil?Ir:ks,se=x.stencil?zs:rs);let le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Bi(f.textureWidth,f.textureHeight,{format:Jn,type:ls,depthTexture:new sl(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Te=e.properties.get(d);Te.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(z){for(let q=0;q<z.removed.length;q++){let se=z.removed[q],re=v.indexOf(se);re>=0&&(v[re]=null,M[re].disconnect(se))}for(let q=0;q<z.added.length;q++){let se=z.added[q],re=v.indexOf(se);if(re===-1){for(let Te=0;Te<M.length;Te++)if(Te>=v.length){v.push(se),re=Te;break}else if(v[Te]===null){v[Te]=se,re=Te;break}if(re===-1)break}let le=M[re];le&&le.connect(se)}}let X=new U,B=new U;function ne(z,q,se){X.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(se.matrixWorld);let re=X.distanceTo(B),le=q.projectionMatrix.elements,Te=se.projectionMatrix.elements,He=le[14]/(le[10]-1),Ve=le[14]/(le[10]+1),gt=(le[9]+1)/le[5],G=(le[9]-1)/le[5],cn=(le[8]-1)/le[0],Xe=(Te[8]+1)/Te[0],et=He*cn,Ne=He*Xe,Pt=re/(-cn+Xe),ot=Pt*-cn;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(Pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();let C=He+Pt,w=Ve+Pt,$=et-ot,fe=Ne+(re-ot),he=gt*Ve/w*C,pe=G*Ve/w*C;z.projectionMatrix.makePerspective($,fe,he,pe,C,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Q(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;T.near=I.near=L.near=z.near,T.far=I.far=L.far=z.far,(R!==T.near||J!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,J=T.far);let q=z.parent,se=T.cameras;Q(T,q);for(let re=0;re<se.length;re++)Q(se[re],q);se.length===2?ne(T,L,I):T.projectionMatrix.copy(L.projectionMatrix),V(z,T,q)};function V(z,q,se){se===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Nr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let ee=null;function te(z,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let re=!1;se.length!==T.cameras.length&&(T.cameras.length=0,re=!0);for(let le=0;le<se.length;le++){let Te=se[le],He=null;if(m!==null)He=m.getViewport(Te);else{let gt=u.getViewSubImage(f,Te);He=gt.viewport,le===0&&(e.setRenderTargetTextures(d,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(d))}let Ve=Z[le];Ve===void 0&&(Ve=new jt,Ve.layers.enable(le),Ve.viewport=new vt,Z[le]=Ve),Ve.matrix.fromArray(Te.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Te.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),le===0&&(T.matrix.copy(Ve.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),re===!0&&T.cameras.push(Ve)}}for(let se=0;se<M.length;se++){let re=v[se],le=M[se];re!==null&&le!==void 0&&le.update(re,q,c||o)}ee&&ee(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}let de=new sp;de.setAnimationLoop(te),this.setAnimationLoop=function(z){ee=z},this.dispose=function(){}}};function Jv(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,ip(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,v,P){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,P)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===dn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===dn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kv(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let P=v.program;i.uniformBlockBinding(M,P)}function c(M,v){let P=s[M.id];P===void 0&&(g(M),P=h(M),s[M.id]=P,M.addEventListener("dispose",p));let N=v.program;i.updateUBOMapping(M,N);let L=e.render.frame;r[M.id]!==L&&(f(M),r[M.id]=L)}function h(M){let v=u();M.__bindingPointIndex=v;let P=n.createBuffer(),N=M.__size,L=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,N,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,P),P}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=s[M.id],P=M.uniforms,N=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let L=0,I=P.length;L<I;L++){let Z=Array.isArray(P[L])?P[L]:[P[L]];for(let T=0,R=Z.length;T<R;T++){let J=Z[T];if(m(J,L,T,N)===!0){let oe=J.__offset,ye=Array.isArray(J.value)?J.value:[J.value],F=0;for(let X=0;X<ye.length;X++){let B=ye[X],ne=x(B);typeof B=="number"||typeof B=="boolean"?(J.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,oe+F,J.__data)):B.isMatrix3?(J.__data[0]=B.elements[0],J.__data[1]=B.elements[1],J.__data[2]=B.elements[2],J.__data[3]=0,J.__data[4]=B.elements[3],J.__data[5]=B.elements[4],J.__data[6]=B.elements[5],J.__data[7]=0,J.__data[8]=B.elements[6],J.__data[9]=B.elements[7],J.__data[10]=B.elements[8],J.__data[11]=0):(B.toArray(J.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,J.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,P,N){let L=M.value,I=v+"_"+P;if(N[I]===void 0)return typeof L=="number"||typeof L=="boolean"?N[I]=L:N[I]=L.clone(),!0;{let Z=N[I];if(typeof L=="number"||typeof L=="boolean"){if(Z!==L)return N[I]=L,!0}else if(Z.equals(L)===!1)return Z.copy(L),!0}return!1}function g(M){let v=M.uniforms,P=0,N=16;for(let I=0,Z=v.length;I<Z;I++){let T=Array.isArray(v[I])?v[I]:[v[I]];for(let R=0,J=T.length;R<J;R++){let oe=T[R],ye=Array.isArray(oe.value)?oe.value:[oe.value];for(let F=0,X=ye.length;F<X;F++){let B=ye[F],ne=x(B),Q=P%N;Q!==0&&N-Q<ne.boundary&&(P+=N-Q),oe.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=P,P+=ne.storage}}}let L=P%N;return L>0&&(P+=N-L),M.__size=P,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){let v=M.target;v.removeEventListener("dispose",p);let P=o.indexOf(v.__bindingPointIndex);o.splice(P,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Sa=class{constructor(e={}){let{canvas:t=l0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=os,this.toneMappingExposure=1;let v=this,P=!1,N=0,L=0,I=null,Z=-1,T=null,R=new vt,J=new vt,oe=null,ye=new rt(0),F=0,X=t.width,B=t.height,ne=1,Q=null,V=null,ee=new vt(0,0,X,B),te=new vt(0,0,X,B),de=!1,z=new Ma,q=!1,se=!1,re=null,le=new at,Te=new Ke,He=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return I===null?ne:1}let G=i;function cn(A,k){for(let Y=0;Y<A.length;Y++){let K=A[Y],W=t.getContext(K,k);if(W!==null)return W}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ve,!1),G===null){let k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),G=cn(k,A),G===null)throw cn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Xe,et,Ne,Pt,ot,C,w,$,fe,he,pe,Fe,Me,Pe,$e,lt,ue,Mt,dt,Je,Ge,Le,it,bt;function Nt(){Xe=new yx(G),et=new ux(G,Xe,e),Xe.init(et),Le=new jv(G,Xe,et),Ne=new $v(G,Xe,et),Pt=new vx(G),ot=new Uv,C=new Yv(G,Xe,Ne,ot,et,Le,Pt),w=new fx(v),$=new gx(v),fe=new C0(G,et),it=new cx(G,Xe,fe,et),he=new _x(G,fe,Pt,it),pe=new wx(G,he,fe,Pt),dt=new Sx(G,et,C),lt=new dx(ot),Fe=new Dv(v,w,$,Xe,et,it,lt),Me=new Jv(v,ot),Pe=new Fv,$e=new Gv(Xe,et),Mt=new lx(v,w,$,Ne,pe,f,l),ue=new qv(v,pe,et),bt=new Kv(G,Pt,et,Ne),Je=new hx(G,Xe,Pt,et),Ge=new xx(G,Xe,Pt,et),Pt.programs=Fe.programs,v.capabilities=et,v.extensions=Xe,v.properties=ot,v.renderLists=Pe,v.shadowMap=ue,v.state=Ne,v.info=Pt}Nt();let ht=new Sh(v,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let A=Xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(X,B,!1))},this.getSize=function(A){return A.set(X,B)},this.setSize=function(A,k,Y=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,B=k,t.width=Math.floor(A*ne),t.height=Math.floor(k*ne),Y===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(X*ne,B*ne).floor()},this.setDrawingBufferSize=function(A,k,Y){X=A,B=k,ne=Y,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,k,Y,K){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,k,Y,K),Ne.viewport(R.copy(ee).multiplyScalar(ne).floor())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,k,Y,K){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,k,Y,K),Ne.scissor(J.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){Ne.setScissorTest(de=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(A=!0,k=!0,Y=!0){let K=0;if(A){let W=!1;if(I!==null){let we=I.texture.format;W=we===Jf||we===Zf||we===jf}if(W){let we=I.texture.type,Ee=we===ls||we===rs||we===Fh||we===zs||we===$f||we===Yf,Be=Mt.getClearColor(),Ye=Mt.getClearAlpha(),st=Be.r,tt=Be.g,nt=Be.b;Ee?(m[0]=st,m[1]=tt,m[2]=nt,m[3]=Ye,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=st,g[1]=tt,g[2]=nt,g[3]=Ye,G.clearBufferiv(G.COLOR,0,g))}else K|=G.COLOR_BUFFER_BIT}k&&(K|=G.DEPTH_BUFFER_BIT),Y&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Pe.dispose(),$e.dispose(),ot.dispose(),w.dispose(),$.dispose(),pe.dispose(),it.dispose(),bt.dispose(),Fe.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",rn),ht.removeEventListener("sessionend",At),re&&(re.dispose(),re=null),hn.stop()};function _e(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=Pt.autoReset,k=ue.enabled,Y=ue.autoUpdate,K=ue.needsUpdate,W=ue.type;Nt(),Pt.autoReset=A,ue.enabled=k,ue.autoUpdate=Y,ue.needsUpdate=K,ue.type=W}function ve(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){let k=A.target;k.removeEventListener("dispose",be),Ze(k)}function Ze(A){qe(A),ot.remove(A)}function qe(A){let k=ot.get(A).programs;k!==void 0&&(k.forEach(function(Y){Fe.releaseProgram(Y)}),A.isShaderMaterial&&Fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,K,W,we){k===null&&(k=Ve);let Ee=W.isMesh&&W.matrixWorld.determinant()<0,Be=yc(A,k,Y,K,W);Ne.setMaterial(K,Ee);let Ye=Y.index,st=1;if(K.wireframe===!0){if(Ye=he.getWireframeAttribute(Y),Ye===void 0)return;st=2}let tt=Y.drawRange,nt=Y.attributes.position,zt=tt.start*st,Ln=(tt.start+tt.count)*st;we!==null&&(zt=Math.max(zt,we.start*st),Ln=Math.min(Ln,(we.start+we.count)*st)),Ye!==null?(zt=Math.max(zt,0),Ln=Math.min(Ln,Ye.count)):nt!=null&&(zt=Math.max(zt,0),Ln=Math.min(Ln,nt.count));let $t=Ln-zt;if($t<0||$t===1/0)return;it.setup(W,K,Be,Y,Ye);let jn,Lt=Je;if(Ye!==null&&(jn=fe.get(Ye),Lt=Ge,Lt.setIndex(jn)),W.isMesh)K.wireframe===!0?(Ne.setLineWidth(K.wireframeLinewidth*gt()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(W.isLine){let Qe=K.linewidth;Qe===void 0&&(Qe=1),Ne.setLineWidth(Qe*gt()),W.isLineSegments?Lt.setMode(G.LINES):W.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else W.isPoints?Lt.setMode(G.POINTS):W.isSprite&&Lt.setMode(G.TRIANGLES);if(W.isBatchedMesh)Lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)Lt.renderInstances(zt,$t,W.count);else if(Y.isInstancedBufferGeometry){let Qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ta=Math.min(Y.instanceCount,Qe);Lt.renderInstances(zt,$t,ta)}else Lt.render(zt,$t)};function wt(A,k,Y){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,ir(A,k,Y),A.side=kn,A.needsUpdate=!0,ir(A,k,Y),A.side=On):ir(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),p=$e.get(Y),p.init(),M.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);let K=new Set;return A.traverse(function(W){let we=W.material;if(we)if(Array.isArray(we))for(let Ee=0;Ee<we.length;Ee++){let Be=we[Ee];wt(Be,Y,W),K.add(Be)}else wt(we,Y,W),K.add(we)}),M.pop(),p=null,K},this.compileAsync=function(A,k,Y=null){let K=this.compile(A,k,Y);return new Promise(W=>{function we(){if(K.forEach(function(Ee){ot.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){W(A);return}setTimeout(we,10)}Xe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Tt=null;function St(A){Tt&&Tt(A)}function rn(){hn.stop()}function At(){hn.start()}let hn=new sp;hn.setAnimationLoop(St),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(A){Tt=A,ht.setAnimationLoop(A),A===null?hn.stop():hn.start()},ht.addEventListener("sessionstart",rn),ht.addEventListener("sessionend",At),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,I),p=$e.get(A,M.length),p.init(),M.push(p),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(le),se=this.localClippingEnabled,q=lt.init(this.clippingPlanes,se),x=Pe.get(A,d.length),x.init(),d.push(x),Yn(A,k,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Q,V),this.info.render.frame++,q===!0&&lt.beginShadows();let Y=p.state.shadowsArray;if(ue.render(Y,A,k),q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(x,A),p.setupLights(v._useLegacyLights),k.isArrayCamera){let K=k.cameras;for(let W=0,we=K.length;W<we;W++){let Ee=K[W];ro(x,A,Ee,Ee.viewport)}}else ro(x,A,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,k),it.resetDefaultState(),Z=-1,T=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Yn(A,k,Y,K){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||z.intersectsSprite(A)){K&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let Ee=pe.update(A),Be=A.material;Be.visible&&x.push(A,Ee,Be,Y,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||z.intersectsObject(A))){let Ee=pe.update(A),Be=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Be)){let Ye=Ee.groups;for(let st=0,tt=Ye.length;st<tt;st++){let nt=Ye[st],zt=Be[nt.materialIndex];zt&&zt.visible&&x.push(A,Ee,zt,Y,He.z,nt)}}else Be.visible&&x.push(A,Ee,Be,Y,He.z,null)}}let we=A.children;for(let Ee=0,Be=we.length;Ee<Be;Ee++)Yn(we[Ee],k,Y,K)}function ro(A,k,Y,K){let W=A.opaque,we=A.transmissive,Ee=A.transparent;p.setupLightsView(Y),q===!0&&lt.setGlobalState(v.clippingPlanes,Y),we.length>0&&gc(W,we,k,Y),K&&Ne.viewport(R.copy(K)),W.length>0&&nr(W,k,Y),we.length>0&&nr(we,k,Y),Ee.length>0&&nr(Ee,k,Y),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function gc(A,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;let we=et.isWebGL2;re===null&&(re=new Bi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?_a:ls,minFilter:hs,samples:we?4:0})),v.getDrawingBufferSize(Te),we?re.setSize(Te.x,Te.y):re.setSize(Yo(Te.x),Yo(Te.y));let Ee=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(ye),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear();let Be=v.toneMapping;v.toneMapping=os,nr(A,Y,K),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re);let Ye=!1;for(let st=0,tt=k.length;st<tt;st++){let nt=k[st],zt=nt.object,Ln=nt.geometry,$t=nt.material,jn=nt.group;if($t.side===On&&zt.layers.test(K.layers)){let Lt=$t.side;$t.side=dn,$t.needsUpdate=!0,Qr(zt,Y,K,Ln,$t,jn),$t.side=Lt,$t.needsUpdate=!0,Ye=!0}}Ye===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re)),v.setRenderTarget(Ee),v.setClearColor(ye,F),v.toneMapping=Be}function nr(A,k,Y){let K=k.isScene===!0?k.overrideMaterial:null;for(let W=0,we=A.length;W<we;W++){let Ee=A[W],Be=Ee.object,Ye=Ee.geometry,st=K===null?Ee.material:K,tt=Ee.group;Be.layers.test(Y.layers)&&Qr(Be,k,Y,Ye,st,tt)}}function Qr(A,k,Y,K,W,we){A.onBeforeRender(v,k,Y,K,W,we),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,k,Y,K,A,we),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,v.renderBufferDirect(Y,k,K,W,A,we),W.side=kn,W.needsUpdate=!0,v.renderBufferDirect(Y,k,K,W,A,we),W.side=On):v.renderBufferDirect(Y,k,K,W,A,we),A.onAfterRender(v,k,Y,K,W,we)}function ir(A,k,Y){k.isScene!==!0&&(k=Ve);let K=ot.get(A),W=p.state.lights,we=p.state.shadowsArray,Ee=W.state.version,Be=Fe.getParameters(A,W.state,we,k,Y),Ye=Fe.getProgramCacheKey(Be),st=K.programs;K.environment=A.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||K.environment),st===void 0&&(A.addEventListener("dispose",be),st=new Map,K.programs=st);let tt=st.get(Ye);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Ee)return ao(A,Be),tt}else Be.uniforms=Fe.getUniforms(A),A.onBuild(Y,Be,v),A.onBeforeCompile(Be,v),tt=Fe.acquireProgram(Be,Ye),st.set(Ye,tt),K.uniforms=Be.uniforms;let nt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=lt.uniform),ao(A,Be),K.needsLights=xc(A),K.lightsStateVersion=Ee,K.needsLights&&(nt.ambientLightColor.value=W.state.ambient,nt.lightProbe.value=W.state.probe,nt.directionalLights.value=W.state.directional,nt.directionalLightShadows.value=W.state.directionalShadow,nt.spotLights.value=W.state.spot,nt.spotLightShadows.value=W.state.spotShadow,nt.rectAreaLights.value=W.state.rectArea,nt.ltc_1.value=W.state.rectAreaLTC1,nt.ltc_2.value=W.state.rectAreaLTC2,nt.pointLights.value=W.state.point,nt.pointLightShadows.value=W.state.pointShadow,nt.hemisphereLights.value=W.state.hemi,nt.directionalShadowMap.value=W.state.directionalShadowMap,nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,nt.spotShadowMap.value=W.state.spotShadowMap,nt.spotLightMatrix.value=W.state.spotLightMatrix,nt.spotLightMap.value=W.state.spotLightMap,nt.pointShadowMap.value=W.state.pointShadowMap,nt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function ea(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Rr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ao(A,k){let Y=ot.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function yc(A,k,Y,K,W){k.isScene!==!0&&(k=Ve),C.resetTextureUnits();let we=k.fog,Ee=K.isMeshStandardMaterial?k.environment:null,Be=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fi,Ye=(K.isMeshStandardMaterial?$:w).get(K.envMap||Ee),st=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,tt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),nt=!!Y.morphAttributes.position,zt=!!Y.morphAttributes.normal,Ln=!!Y.morphAttributes.color,$t=os;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&($t=v.toneMapping);let jn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Lt=jn!==void 0?jn.length:0,Qe=ot.get(K),ta=p.state.lights;if(q===!0&&(se===!0||A!==T)){let bn=A===T&&K.id===Z;lt.setState(K,A,bn)}let Dt=!1;K.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ta.state.version||Qe.outputColorSpace!==Be||W.isBatchedMesh&&Qe.batching===!1||!W.isBatchedMesh&&Qe.batching===!0||W.isInstancedMesh&&Qe.instancing===!1||!W.isInstancedMesh&&Qe.instancing===!0||W.isSkinnedMesh&&Qe.skinning===!1||!W.isSkinnedMesh&&Qe.skinning===!0||W.isInstancedMesh&&Qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qe.instancingColor===!1&&W.instanceColor!==null||Qe.envMap!==Ye||K.fog===!0&&Qe.fog!==we||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==lt.numPlanes||Qe.numIntersection!==lt.numIntersection)||Qe.vertexAlphas!==st||Qe.vertexTangents!==tt||Qe.morphTargets!==nt||Qe.morphNormals!==zt||Qe.morphColors!==Ln||Qe.toneMapping!==$t||et.isWebGL2===!0&&Qe.morphTargetsCount!==Lt)&&(Dt=!0):(Dt=!0,Qe.__version=K.version);let Ei=Qe.currentProgram;Dt===!0&&(Ei=ir(K,k,W));let na=!1,Ps=!1,ia=!1,an=Ei.getUniforms(),di=Qe.uniforms;if(Ne.useProgram(Ei.program)&&(na=!0,Ps=!0,ia=!0),K.id!==Z&&(Z=K.id,Ps=!0),na||T!==A){an.setValue(G,"projectionMatrix",A.projectionMatrix),an.setValue(G,"viewMatrix",A.matrixWorldInverse);let bn=an.map.cameraPosition;bn!==void 0&&bn.setValue(G,He.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&an.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&an.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Ps=!0,ia=!0)}if(W.isSkinnedMesh){an.setOptional(G,W,"bindMatrix"),an.setOptional(G,W,"bindMatrixInverse");let bn=W.skeleton;bn&&(et.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),an.setValue(G,"boneTexture",bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(an.setOptional(G,W,"batchingTexture"),an.setValue(G,"batchingTexture",W._matricesTexture,C));let kt=Y.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0&&et.isWebGL2===!0)&&dt.update(W,Y,Ei),(Ps||Qe.receiveShadow!==W.receiveShadow)&&(Qe.receiveShadow=W.receiveShadow,an.setValue(G,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(di.envMap.value=Ye,di.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),Ps&&(an.setValue(G,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&_c(di,ia),we&&K.fog===!0&&Me.refreshFogUniforms(di,we),Me.refreshMaterialUniforms(di,K,ne,B,re),Rr.upload(G,ea(Qe),di,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Rr.upload(G,ea(Qe),di,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&an.setValue(G,"center",W.center),an.setValue(G,"modelViewMatrix",W.modelViewMatrix),an.setValue(G,"normalMatrix",W.normalMatrix),an.setValue(G,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let bn=K.uniformsGroups;for(let sa=0,oo=bn.length;sa<oo;sa++)if(et.isWebGL2){let ra=bn[sa];bt.update(ra,Ei),bt.bind(ra,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function _c(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function xc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,k,Y){ot.get(A.texture).__webglTexture=k,ot.get(A.depthTexture).__webglTexture=Y;let K=ot.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){let Y=ot.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Y=0){I=A,N=k,L=Y;let K=!0,W=null,we=!1,Ee=!1;if(A){let Ye=ot.get(A);Ye.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):Ye.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ye.__hasExternalTextures&&C.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);let st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ee=!0);let tt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?W=tt[k][Y]:W=tt[k],we=!0):et.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?W=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[Y]:W=tt,R.copy(A.viewport),J.copy(A.scissor),oe=A.scissorTest}else R.copy(ee).multiplyScalar(ne).floor(),J.copy(te).multiplyScalar(ne).floor(),oe=de;if(Ne.bindFramebuffer(G.FRAMEBUFFER,W)&&et.drawBuffers&&K&&Ne.drawBuffers(A,W),Ne.viewport(R),Ne.scissor(J),Ne.setScissorTest(oe),we){let Ye=ot.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ye.__webglTexture,Y)}else if(Ee){let Ye=ot.get(A.texture),st=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ye.__webglTexture,Y||0,st)}Z=-1},this.readRenderTargetPixels=function(A,k,Y,K,W,we,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){Ne.bindFramebuffer(G.FRAMEBUFFER,Be);try{let Ye=A.texture,st=Ye.format,tt=Ye.type;if(st!==Jn&&Le.convert(st)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let nt=tt===_a&&(Xe.has("EXT_color_buffer_half_float")||et.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(tt!==ls&&Le.convert(tt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Ui&&(et.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-K&&Y>=0&&Y<=A.height-W&&G.readPixels(k,Y,K,W,Le.convert(st),Le.convert(tt),we)}finally{let Ye=I!==null?ot.get(I).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(A,k,Y=0){let K=Math.pow(2,-Y),W=Math.floor(k.image.width*K),we=Math.floor(k.image.height*K);C.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,A.x,A.y,W,we),Ne.unbindTexture()},this.copyTextureToTexture=function(A,k,Y,K=0){let W=k.image.width,we=k.image.height,Ee=Le.convert(Y.format),Be=Le.convert(Y.type);C.setTexture2D(Y,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,A.x,A.y,W,we,Ee,Be,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ee,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,A.x,A.y,Ee,Be,k.image),K===0&&Y.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Y,K,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Be=A.max.z-A.min.z+1,Ye=Le.convert(K.format),st=Le.convert(K.type),tt;if(K.isData3DTexture)C.setTexture3D(K,0),tt=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),tt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);let nt=G.getParameter(G.UNPACK_ROW_LENGTH),zt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ln=G.getParameter(G.UNPACK_SKIP_PIXELS),$t=G.getParameter(G.UNPACK_SKIP_ROWS),jn=G.getParameter(G.UNPACK_SKIP_IMAGES),Lt=Y.isCompressedTexture?Y.mipmaps[W]:Y.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Lt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?G.texSubImage3D(tt,W,k.x,k.y,k.z,we,Ee,Be,Ye,st,Lt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(tt,W,k.x,k.y,k.z,we,Ee,Be,Ye,Lt.data)):G.texSubImage3D(tt,W,k.x,k.y,k.z,we,Ee,Be,Ye,st,Lt),G.pixelStorei(G.UNPACK_ROW_LENGTH,nt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ln),G.pixelStorei(G.UNPACK_SKIP_ROWS,$t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,jn),W===0&&K.generateMipmaps&&G.generateMipmap(tt),Ne.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Ne.unbindTexture()},this.resetState=function(){N=0,L=0,I=null,Ne.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===zh?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Tl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Hs:Qf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hs?Vt:Fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},wh=class extends Sa{};wh.prototype.isWebGL1Renderer=!0;var Vs=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},rl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new U,ei=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,ha=new U,Mr=new U,Sr=new U,wr=new Ke,ua=new Ke,hp=new at,Do=new U,da=new U,Uo=new U,wf=new Ke,Zc=new Ke,Ef=new Ke,wa=class extends Gt{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Vn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rl(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new ei(i,3,0,!1)),br.setAttribute("uv",new ei(i,2,3,!1))}this.geometry=br,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mr.setFromMatrixScale(this.matrixWorld),hp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mr.multiplyScalar(-Sr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Oo(Do.set(-.5,-.5,0),Sr,o,Mr,s,r),Oo(da.set(.5,-.5,0),Sr,o,Mr,s,r),Oo(Uo.set(.5,.5,0),Sr,o,Mr,s,r),wf.set(0,0),Zc.set(1,0),Ef.set(1,1);let a=e.ray.intersectTriangle(Do,da,Uo,!1,ha);if(a===null&&(Oo(da.set(-.5,.5,0),Sr,o,Mr,s,r),Zc.set(0,1),a=e.ray.intersectTriangle(Do,Uo,da,!1,ha),a===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:Bs.getInterpolation(ha,Do,da,Uo,wf,Zc,Ef,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oo(n,e,t,i,s,r){wr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ua.x=r*wr.x-s*wr.y,ua.y=s*wr.x+r*wr.y):ua.copy(wr),n.copy(e),n.x+=ua.x,n.y+=ua.y,n.applyMatrix4(hp)}var Tf=new U,Af=new vt,Cf=new vt,Qv=new U,Rf=new at,Fo=new U,Jc=new Qn,Pf=new at,Kc=new Dr,al=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=od,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fo),this.boundingSphere.expandByPoint(Fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(s),e.ray.intersectsSphere(Jc)!==!1&&(Pf.copy(s).invert(),Kc.copy(e.ray).applyMatrix4(Pf),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ag?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Af.fromBufferAttribute(s.attributes.skinIndex,e),Cf.fromBufferAttribute(s.attributes.skinWeight,e),Tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cf.getComponent(r);if(o!==0){let a=Af.getComponent(r);Rf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Qv.copy(Tf).applyMatrix4(Rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ea=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ol=class extends Hn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=un,h=un,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=new at,eb=new at,ll=class n{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:eb;Lf.multiplyMatrices(a,t[r]),Lf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ol(t,e,e,Jn,Ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ea),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var Br=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},If=new U,Nf=new U,Df=new at,Qc=new Dr,Bo=new Qn,Ta=class extends Gt{constructor(e=new Vn,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)If.fromBufferAttribute(t,s-1),Nf.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=If.distanceTo(Nf);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Df.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,f=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let d=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=d,P=M-1;v<P;v+=m){let N=g.getX(v),L=g.getX(v+1);if(c.fromBufferAttribute(p,N),h.fromBufferAttribute(p,L),Qc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let Z=e.ray.origin.distanceTo(f);Z<e.near||Z>e.far||t.push({distance:Z,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=d,P=M-1;v<P;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Qc.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Uf=new U,Of=new U,cl=class extends Ta{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Uf.fromBufferAttribute(t,s),Of.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Uf.distanceTo(Of);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zr=class extends Hn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hl=class n extends Vn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,m=[],g=[],x=[],p=[];for(let d=0;d<=i;d++){let M=[],v=d/i,P=0;d===0&&o===0?P=.5/t:d===i&&l===Math.PI&&(P=-.5/t);for(let N=0;N<=t;N++){let L=N/t;u.x=-e*Math.cos(s+L*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+L*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(L+P,1-v),M.push(c++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let v=h[d][M+1],P=h[d][M],N=h[d+1][M],L=h[d+1][M+1];(d!==0||o>0)&&m.push(v,P,L),(d!==i-1||l<Math.PI)&&m.push(P,N,L)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ul=class extends Vn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,m=u.count;for(let g=f,x=f+m;g<x;g+=3)for(let p=0;p<3;p++){let d=a.getX(g+p),M=a.getX(g+(p+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,M),Ff(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Ff(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ff(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Aa=class extends mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Gs=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function zo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function nb(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Bf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function up(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var kr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends kr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dd,endingEnd:Dd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=e,a=2*t-i;break;case Od:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=e,l=2*i-t;break;case Od:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,M=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*x+.5*g,P=m*p-m*x;for(let N=0;N!==a;++N)r[N]=d*o[h+N]+M*o[c+N]+v*o[l+N]+P*o[u+N];return r}},Th=class extends kr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ah=class extends kr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Ac:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&tb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ac,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Go;var ds=class extends ti{};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Vo;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends ti{};dl.prototype.ValueTypeName="color";var Hr=class extends ti{};Hr.prototype.ValueTypeName="number";var Ch=class extends kr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ki=class extends ti{InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=Go;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends ti{};fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Vo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends ti{};Hi.prototype.ValueTypeName="vector";var Ca=class{constructor(e,t=-1,i,s=Fg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=li(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(sb(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(ti.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=nb(l);l=Bf(l,1,h),c=Bf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Hr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,m,g,x){if(m.length!==0){let p=[],d=[];up(m,p,d,g),p.length!==0&&x.push(new u(f,p,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)m[f[g].morphTargets[x]]=-1;for(let x in m){let p=[],d=[];for(let M=0;M!==f[g].morphTargets.length;++M){let v=f[g];p.push(v.time),d.push(v.morphTarget===x?1:0)}s.push(new Hr(".morphTargetInfluence["+x+"]",p,d))}l=m.length*o}else{let m=".bones["+t[u].name+"]";i(Hi,m+".position",f,"pos",s),i(ki,m+".quaternion",f,"rot",s),i(Hi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ib(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Hi;case"color":return dl;case"quaternion":return ki;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function sb(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ib(n.type);if(n.times===void 0){let t=[],i=[];up(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var fl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Ra=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},rb=new Ra,gi=class{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii={},Rh=class extends Error{constructor(e,t){super(e),this.response=t}},Pa=class extends gi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:s});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ii[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0,x=0,p=new ReadableStream({start(d){M();function M(){u.read().then(({done:v,value:P})=>{if(v)d.close();else{x+=P.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let L=0,I=h.length;L<I;L++){let Z=h[L];Z.onProgress&&Z.onProgress(N)}d.enqueue(P),M()}})}}});return new Response(p)}else throw new Rh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{fl.add(e,c);let h=Ii[e];delete Ii[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=Ii[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ph=class extends gi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=xa("img");function l(){h(),fl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var pl=class extends gi{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new ol,a=new Pa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:En,o.wrapT=c.wrapT!==void 0?c.wrapT:En,o.magFilter=c.magFilter!==void 0?c.magFilter:Dn,o.minFilter=c.minFilter!==void 0?c.minFilter:Dn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=hs),c.mipmapCount===1&&(o.minFilter=Dn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},ml=class extends gi{constructor(e){super(e)}load(e,t,i,s){let r=new Hn,o=new Ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ws=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},gl=class extends Ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eh=new at,zf=new U,kf=new U,La=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lh=class extends La{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},yl=class extends Ws{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hf=new at,fa=new U,th=new U,Ih=class extends La{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),i.position.copy(fa),th.copy(i.position),th.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(th),i.updateMatrixWorld(),s.makeTranslation(-fa.x,-fa.y,-fa.z),Hf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hf)}},_l=class extends Ws{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nh=class extends La{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xl=class extends Ws{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var vl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bl=class extends Vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Vh="\\[\\]\\.:\\/",ab=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",ob="[^"+Vh.replace("\\.","")+"]",lb=/((?:WC+[\/:])*)/.source.replace("WC",Gh),cb=/(WCOD+)?/.source.replace("WCOD",ob),hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),db=new RegExp("^"+lb+cb+hb+ub+"$"),fb=["material","materials","bones","map"],Dh=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){let t=db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);fb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Dh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GM=new Float32Array(1);var Xs=class extends rl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Ml=class{constructor(e,t,i=0,s=1/0){this.ray=new Dr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Uh(e,this,i,t),i.sort(Vf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Uh(e[s],this,i,t);return i.sort(Vf),i}};function Vf(n,e){return n.distance-e.distance}function Uh(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Uh(s[r],e,t,!0)}}var Gf=new U,ko=new U,Sl=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Gf.subVectors(e,this.start),ko.subVectors(this.end,this.start);let i=ko.dot(ko),r=ko.dot(Gf)/i;return t&&(r=wn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);var Ia=class extends pl{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case f:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case d:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ne,Q,V,ee){let te,de,z=Q.pixel_size>>3,q=Q.width*Q.height*z;if(ne&&(de=ee.subarray(V,V+=Q.colormap_length*(Q.colormap_size>>3))),B){te=new Uint8Array(q);let se,re,le,Te=0,He=new Uint8Array(z);for(;Te<q;)if(se=ee[V++],re=(se&127)+1,se&128){for(le=0;le<z;++le)He[le]=ee[V++];for(le=0;le<re;++le)te.set(He,Te+le*z);Te+=z*re}else{for(re*=z,le=0;le<re;++le)te[Te+le]=ee[V++];Te+=re}}else te=ee.subarray(V,V+=ne?Q.width*Q.height:q);return{pixel_data:te,palettes:de}}function s(B,ne,Q,V,ee,te,de,z,q){let se=q,re,le=0,Te,He,Ve=R.width;for(He=ne;He!==V;He+=Q)for(Te=ee;Te!==de;Te+=te,le++)re=z[le],B[(Te+Ve*He)*4+3]=255,B[(Te+Ve*He)*4+2]=se[re*3+0],B[(Te+Ve*He)*4+1]=se[re*3+1],B[(Te+Ve*He)*4+0]=se[re*3+2];return B}function r(B,ne,Q,V,ee,te,de,z){let q,se=0,re,le,Te=R.width;for(le=ne;le!==V;le+=Q)for(re=ee;re!==de;re+=te,se+=2)q=z[se+0]+(z[se+1]<<8),B[(re+Te*le)*4+0]=(q&31744)>>7,B[(re+Te*le)*4+1]=(q&992)>>2,B[(re+Te*le)*4+2]=(q&31)<<3,B[(re+Te*le)*4+3]=q&32768?0:255;return B}function o(B,ne,Q,V,ee,te,de,z){let q=0,se,re,le=R.width;for(re=ne;re!==V;re+=Q)for(se=ee;se!==de;se+=te,q+=3)B[(se+le*re)*4+3]=255,B[(se+le*re)*4+2]=z[q+0],B[(se+le*re)*4+1]=z[q+1],B[(se+le*re)*4+0]=z[q+2];return B}function a(B,ne,Q,V,ee,te,de,z){let q=0,se,re,le=R.width;for(re=ne;re!==V;re+=Q)for(se=ee;se!==de;se+=te,q+=4)B[(se+le*re)*4+2]=z[q+0],B[(se+le*re)*4+1]=z[q+1],B[(se+le*re)*4+0]=z[q+2],B[(se+le*re)*4+3]=z[q+3];return B}function l(B,ne,Q,V,ee,te,de,z){let q,se=0,re,le,Te=R.width;for(le=ne;le!==V;le+=Q)for(re=ee;re!==de;re+=te,se++)q=z[se],B[(re+Te*le)*4+0]=q,B[(re+Te*le)*4+1]=q,B[(re+Te*le)*4+2]=q,B[(re+Te*le)*4+3]=255;return B}function c(B,ne,Q,V,ee,te,de,z){let q=0,se,re,le=R.width;for(re=ne;re!==V;re+=Q)for(se=ee;se!==de;se+=te,q+=2)B[(se+le*re)*4+0]=z[q+0],B[(se+le*re)*4+1]=z[q+0],B[(se+le*re)*4+2]=z[q+0],B[(se+le*re)*4+3]=z[q+1];return B}function h(B,ne,Q,V,ee){let te,de,z,q,se,re;switch((R.flags&M)>>v){default:case L:te=0,z=1,se=ne,de=0,q=1,re=Q;break;case P:te=0,z=1,se=ne,de=Q-1,q=-1,re=-1;break;case I:te=ne-1,z=-1,se=-1,de=0,q=1,re=Q;break;case N:te=ne-1,z=-1,se=-1,de=Q-1,q=-1,re=-1;break}if(ye)switch(R.pixel_size){case 8:l(B,de,q,re,te,z,se,V);break;case 16:c(B,de,q,re,te,z,se,V);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(R.pixel_size){case 8:s(B,de,q,re,te,z,se,V,ee);break;case 16:r(B,de,q,re,te,z,se,V);break;case 24:o(B,de,q,re,te,z,se,V);break;case 32:a(B,de,q,re,te,z,se,V);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let u=0,f=1,m=2,g=3,x=9,p=10,d=11,M=48,v=4,P=0,N=1,L=2,I=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let Z=0,T=new Uint8Array(e),R={id_length:T[Z++],colormap_type:T[Z++],image_type:T[Z++],colormap_index:T[Z++]|T[Z++]<<8,colormap_length:T[Z++]|T[Z++]<<8,colormap_size:T[Z++],origin:[T[Z++]|T[Z++]<<8,T[Z++]|T[Z++]<<8],width:T[Z++]|T[Z++]<<8,height:T[Z++]|T[Z++]<<8,pixel_size:T[Z++],flags:T[Z++]};if(t(R),R.id_length+Z>e.length)throw new Error("THREE.TGALoader: No data.");Z+=R.id_length;let J=!1,oe=!1,ye=!1;switch(R.image_type){case x:J=!0,oe=!0;break;case f:oe=!0;break;case p:J=!0;break;case m:break;case d:J=!0,ye=!0;break;case g:ye=!0;break}let F=new Uint8Array(R.width*R.height*4),X=i(J,oe,R,Z,T);return h(F,R.width,R.height,X.pixel_data,X.palettes),{data:F,width:R.width,height:R.height,flipY:!0,generateMipmaps:!0,minFilter:hs}}};var Rl=class extends gi{load(e,t,i,s){let r=this,o=r.path===""?vl.extractUrlBase(e):r.path,a=new Pa(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,y){let S=[],b=_.childNodes;for(let E=0,j=b.length;E<j;E++){let ie=b[E];ie.nodeName===y&&S.push(ie)}return S}function s(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=y[b];return S}function r(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=parseFloat(y[b]);return S}function o(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),S=new Array(y.length);for(let b=0,E=y.length;b<E;b++)S[b]=parseInt(y[b]);return S}function a(_){return _.substring(1)}function l(){return"three_default_"+Xm++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:f(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function f(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,y,S,b){let E=i(_,y)[0];if(E!==void 0){let j=i(E,S);for(let ie=0;ie<j.length;ie++)b(j[ie])}}function g(_,y){for(let S in _){let b=_[S];b.build=y(_[S])}}function x(_,y){return _.build!==void 0||(_.build=y(_)),_.build}function p(_){let y={sources:{},samplers:{},channels:{}},S=!1;for(let b=0,E=_.childNodes.length;b<E;b++){let j=_.childNodes[b];if(j.nodeType!==1)continue;let ie;switch(j.nodeName){case"source":ie=j.getAttribute("id"),y.sources[ie]=O(j);break;case"sampler":ie=j.getAttribute("id"),y.samplers[ie]=d(j);break;case"channel":ie=j.getAttribute("target"),y.channels[ie]=M(j);break;case"animation":p(j),S=!0;break;default:console.log(j)}}S===!1&&(je.animations[_.getAttribute("id")||ps.generateUUID()]=y)}function d(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let j=a(E.getAttribute("source")),ie=E.getAttribute("semantic");y.inputs[ie]=j;break}}return y}function M(_){let y={},b=_.getAttribute("target").split("/"),E=b.shift(),j=b.shift(),ie=j.indexOf("(")!==-1,Ae=j.indexOf(".")!==-1;if(Ae)b=j.split("."),j=b.shift(),y.member=b.shift();else if(ie){let xe=j.split("(");j=xe.shift();for(let Se=0;Se<xe.length;Se++)xe[Se]=parseInt(xe[Se].replace(/\)/,""));y.indices=xe}return y.id=E,y.sid=j,y.arraySyntax=ie,y.memberSyntax=Ae,y.sampler=a(_.getAttribute("source")),y}function v(_){let y=[],S=_.channels,b=_.samplers,E=_.sources;for(let j in S)if(S.hasOwnProperty(j)){let ie=S[j],Ae=b[ie.sampler],xe=Ae.inputs.INPUT,Se=Ae.inputs.OUTPUT,Ue=E[xe],ce=E[Se],De=N(ie,Ue,ce);R(De,y)}return y}function P(_){return x(je.animations[_],v)}function N(_,y,S){let b=je.nodes[_.id],E=Qe(b.id),j=b.transforms[_.sid],ie=b.matrix.clone().transpose(),Ae,xe,Se,Ue,ce,De,Ie={};switch(j){case"matrix":for(Se=0,Ue=y.array.length;Se<Ue;Se++)if(Ae=y.array[Se],xe=Se*S.stride,Ie[Ae]===void 0&&(Ie[Ae]={}),_.arraySyntax===!0){let Ht=S.array[xe],Et=_.indices[0]+4*_.indices[1];Ie[Ae][Et]=Ht}else for(ce=0,De=S.stride;ce<De;ce++)Ie[Ae][ce]=S.array[xe+ce];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',j);break}let We=L(Ie,ie);return{name:E.uuid,keyframes:We}}function L(_,y){let S=[];for(let E in _)S.push({time:parseFloat(E),value:_[E]});S.sort(b);for(let E=0;E<16;E++)J(S,E,y.elements[E]);return S;function b(E,j){return E.time-j.time}}let I=new U,Z=new U,T=new pi;function R(_,y){let S=_.keyframes,b=_.name,E=[],j=[],ie=[],Ae=[];for(let xe=0,Se=S.length;xe<Se;xe++){let Ue=S[xe],ce=Ue.time,De=Ue.value;Ee.fromArray(De).transpose(),Ee.decompose(I,T,Z),E.push(ce),j.push(I.x,I.y,I.z),ie.push(T.x,T.y,T.z,T.w),Ae.push(Z.x,Z.y,Z.z)}return j.length>0&&y.push(new Hi(b+".position",E,j)),ie.length>0&&y.push(new ki(b+".quaternion",E,ie)),Ae.length>0&&y.push(new Hi(b+".scale",E,Ae)),y}function J(_,y,S){let b,E=!0,j,ie;for(j=0,ie=_.length;j<ie;j++)b=_[j],b.value[y]===void 0?b.value[y]=null:E=!1;if(E===!0)for(j=0,ie=_.length;j<ie;j++)b=_[j],b.value[y]=S;else oe(_,y)}function oe(_,y){let S,b;for(let E=0,j=_.length;E<j;E++){let ie=_[E];if(ie.value[y]===null){if(S=ye(_,E,y),b=F(_,E,y),S===null){ie.value[y]=b.value[y];continue}if(b===null){ie.value[y]=S.value[y];continue}X(ie,S,b,y)}}}function ye(_,y,S){for(;y>=0;){let b=_[y];if(b.value[S]!==null)return b;y--}return null}function F(_,y,S){for(;y<_.length;){let b=_[y];if(b.value[S]!==null)return b;y++}return null}function X(_,y,S,b){if(S.time-y.time===0){_.value[b]=y.value[b];return}_.value[b]=(_.time-y.time)*(S.value[b]-y.value[b])/(S.time-y.time)+y.value[b]}function B(_){let y={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"instance_animation":y.animations.push(a(E.getAttribute("url")));break}}je.clips[_.getAttribute("id")]=y}function ne(_){let y=[],S=_.name,b=_.end-_.start||-1,E=_.animations;for(let j=0,ie=E.length;j<ie;j++){let Ae=P(E[j]);for(let xe=0,Se=Ae.length;xe<Se;xe++)y.push(Ae[xe])}return new Ca(S,b,y)}function Q(_){return x(je.clips[_],ne)}function V(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"skin":y.id=a(E.getAttribute("source")),y.skin=ee(E);break;case"morph":y.id=a(E.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[_.getAttribute("id")]=y}function ee(_){let y={sources:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(E.textContent);break;case"source":let j=E.getAttribute("id");y.sources[j]=O(E);break;case"joints":y.joints=te(E);break;case"vertex_weights":y.vertexWeights=de(E);break}}return y}function te(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let j=E.getAttribute("semantic"),ie=a(E.getAttribute("source"));y.inputs[j]=ie;break}}return y}function de(_){let y={inputs:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let j=E.getAttribute("semantic"),ie=a(E.getAttribute("source")),Ae=parseInt(E.getAttribute("offset"));y.inputs[j]={id:ie,offset:Ae};break;case"vcount":y.vcount=o(E.textContent);break;case"v":y.v=o(E.textContent);break}}return y}function z(_){let y={id:_.id},S=je.geometries[y.id];return _.skin!==void 0&&(y.skin=q(_.skin),S.sources.skinIndices=y.skin.indices,S.sources.skinWeights=y.skin.weights),y}function q(_){let S={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},b=_.sources,E=_.vertexWeights,j=E.vcount,ie=E.v,Ae=E.inputs.JOINT.offset,xe=E.inputs.WEIGHT.offset,Se=_.sources[_.joints.inputs.JOINT],Ue=_.sources[_.joints.inputs.INV_BIND_MATRIX],ce=b[E.inputs.WEIGHT.id].array,De=0,Ie,We,ze;for(Ie=0,ze=j.length;Ie<ze;Ie++){let Et=j[Ie],_t=[];for(We=0;We<Et;We++){let xt=ie[De+Ae],Ti=ie[De+xe],zn=ce[Ti];_t.push({index:xt,weight:zn}),De+=2}for(_t.sort(Ht),We=0;We<4;We++){let xt=_t[We];xt!==void 0?(S.indices.array.push(xt.index),S.weights.array.push(xt.weight)):(S.indices.array.push(0),S.weights.array.push(0))}}for(_.bindShapeMatrix?S.bindMatrix=new at().fromArray(_.bindShapeMatrix).transpose():S.bindMatrix=new at().identity(),Ie=0,ze=Se.array.length;Ie<ze;Ie++){let Et=Se.array[Ie],_t=new at().fromArray(Ue.array,Ie*Ue.stride).transpose();S.joints.push({name:Et,boneInverse:_t})}return S;function Ht(Et,_t){return _t.weight-Et.weight}}function se(_){return x(je.controllers[_],z)}function re(_){let y={init_from:i(_,"init_from")[0].textContent};je.images[_.getAttribute("id")]=y}function le(_){return _.build!==void 0?_.build:_.init_from}function Te(_){let y=je.images[_];return y!==void 0?x(y,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function He(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"profile_COMMON":y.profile=Ve(E);break}}je.effects[_.getAttribute("id")]=y}function Ve(_){let y={surfaces:{},samplers:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"newparam":gt(E,y);break;case"technique":y.technique=Xe(E);break;case"extra":y.extra=w(E);break}}return y}function gt(_,y){let S=_.getAttribute("sid");for(let b=0,E=_.childNodes.length;b<E;b++){let j=_.childNodes[b];if(j.nodeType===1)switch(j.nodeName){case"surface":y.surfaces[S]=G(j);break;case"sampler2D":y.samplers[S]=cn(j);break}}}function G(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"init_from":y.init_from=E.textContent;break}}return y}function cn(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"source":y.source=E.textContent;break}}return y}function Xe(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=E.nodeName,y.parameters=et(E);break;case"extra":y.extra=w(E);break}}return y}function et(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[E.nodeName]=Ne(E);break;case"transparent":y[E.nodeName]={opaque:E.hasAttribute("opaque")?E.getAttribute("opaque"):"A_ONE",data:Ne(E)};break}}return y}function Ne(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"color":y[E.nodeName]=r(E.textContent);break;case"float":y[E.nodeName]=parseFloat(E.textContent);break;case"texture":y[E.nodeName]={id:E.getAttribute("texture"),extra:Pt(E)};break}}return y}function Pt(_){let y={technique:{}};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"extra":ot(E,y);break}}return y}function ot(_,y){for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique":C(E,y);break}}}function C(_,y){for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[E.nodeName]=parseFloat(E.textContent);break;case"wrapU":case"wrapV":E.textContent.toUpperCase()==="TRUE"?y.technique[E.nodeName]=1:E.textContent.toUpperCase()==="FALSE"?y.technique[E.nodeName]=0:y.technique[E.nodeName]=parseInt(E.textContent);break;case"bump":y[E.nodeName]=fe(E);break}}}function w(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique":y.technique=$(E);break}}return y}function $(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"double_sided":y[E.nodeName]=parseInt(E.textContent);break;case"bump":y[E.nodeName]=fe(E);break}}return y}function fe(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"texture":y[E.nodeName]={id:E.getAttribute("texture"),texcoord:E.getAttribute("texcoord"),extra:Pt(E)};break}}return y}function he(_){return _}function pe(_){return x(je.effects[_],he)}function Fe(_){let y={name:_.getAttribute("name")};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"instance_effect":y.url=a(E.getAttribute("url"));break}}je.materials[_.getAttribute("id")]=y}function Me(_){let y,S=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(S=S.toLowerCase(),S){case"tga":y=vc;break;default:y=ra}return y}function Pe(_){let y=pe(_.url),S=y.profile.technique,b;switch(S.type){case"phong":case"blinn":b=new Aa;break;case"lambert":b=new Gs;break;default:b=new Jt;break}b.name=_.name||"";function E(xe,Se=null){let Ue=y.profile.samplers[xe.id],ce=null;if(Ue!==void 0){let De=y.profile.surfaces[Ue.source];ce=Te(De.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ce=Te(xe.id);if(ce!==null){let De=Me(ce);if(De!==void 0){let Ie=De.load(ce),We=xe.extra;if(We!==void 0&&We.technique!==void 0&&c(We.technique)===!1){let ze=We.technique;Ie.wrapS=ze.wrapU?cs:En,Ie.wrapT=ze.wrapV?cs:En,Ie.offset.set(ze.offsetU||0,ze.offsetV||0),Ie.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Ie.wrapS=cs,Ie.wrapT=cs;return Se!==null&&(Ie.colorSpace=Se),Ie}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ce),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let j=S.parameters;for(let xe in j){let Se=j[xe];switch(xe){case"diffuse":Se.color&&b.color.fromArray(Se.color),Se.texture&&(b.map=E(Se.texture,Vt));break;case"specular":Se.color&&b.specular&&b.specular.fromArray(Se.color),Se.texture&&(b.specularMap=E(Se.texture));break;case"bump":Se.texture&&(b.normalMap=E(Se.texture));break;case"ambient":Se.texture&&(b.lightMap=E(Se.texture,Vt));break;case"shininess":Se.float&&b.shininess&&(b.shininess=Se.float);break;case"emission":Se.color&&b.emissive&&b.emissive.fromArray(Se.color),Se.texture&&(b.emissiveMap=E(Se.texture,Vt));break}}b.color.convertSRGBToLinear(),b.specular&&b.specular.convertSRGBToLinear(),b.emissive&&b.emissive.convertSRGBToLinear();let ie=j.transparent,Ae=j.transparency;if(Ae===void 0&&ie&&(Ae={float:1}),ie===void 0&&Ae&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Ae)if(ie.data.texture)b.transparent=!0;else{let xe=ie.data.color;switch(ie.opaque){case"A_ONE":b.opacity=xe[3]*Ae.float;break;case"RGB_ZERO":b.opacity=1-xe[0]*Ae.float;break;case"A_ZERO":b.opacity=1-xe[3]*Ae.float;break;case"RGB_ONE":b.opacity=xe[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}b.opacity<1&&(b.transparent=!0)}if(S.extra!==void 0&&S.extra.technique!==void 0){let xe=S.extra.technique;for(let Se in xe){let Ue=xe[Se];switch(Se){case"double_sided":b.side=Ue===1?On:kn;break;case"bump":b.normalMap=E(Ue.texture),b.normalScale=new Ke(1,1);break}}}return b}function $e(_){return x(je.materials[_],Pe)}function lt(_){let y={name:_.getAttribute("name")};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"optics":y.optics=ue(E);break}}je.cameras[_.getAttribute("id")]=y}function ue(_){for(let y=0;y<_.childNodes.length;y++){let S=_.childNodes[y];switch(S.nodeName){case"technique_common":return Mt(S)}}return{}}function Mt(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"perspective":case"orthographic":y.technique=b.nodeName,y.parameters=dt(b);break}}return y}function dt(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[b.nodeName]=parseFloat(b.textContent);break}}return y}function Je(_){let y;switch(_.optics.technique){case"perspective":y=new jt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let S=_.optics.parameters.ymag,b=_.optics.parameters.xmag,E=_.optics.parameters.aspect_ratio;b=b===void 0?S*E:b,S=S===void 0?b/E:S,b*=.5,S*=.5,y=new Or(-b,b,S,-S,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:y=new jt;break}return y.name=_.name||"",y}function Ge(_){let y=je.cameras[_];return y!==void 0?x(y,Je):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Le(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"technique_common":y=it(E);break}}je.lights[_.getAttribute("id")]=y}function it(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=E.nodeName,y.parameters=bt(E)}}return y}function bt(_){let y={};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"color":let j=r(E.textContent);y.color=new rt().fromArray(j).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(E.textContent);break;case"quadratic_attenuation":let ie=parseFloat(E.textContent);y.distance=ie?Math.sqrt(1/ie):0;break}}return y}function Nt(_){let y;switch(_.technique){case"directional":y=new Vr;break;case"point":y=new _l;break;case"spot":y=new yl;break;case"ambient":y=new xl;break}return _.parameters.color&&y.color.copy(_.parameters.color),_.parameters.distance&&(y.distance=_.parameters.distance),y}function ht(_){let y=je.lights[_];return y!==void 0?x(y,Nt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function _e(_){let y={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},S=i(_,"mesh")[0];if(S!==void 0){for(let b=0;b<S.childNodes.length;b++){let E=S.childNodes[b];if(E.nodeType!==1)continue;let j=E.getAttribute("id");switch(E.nodeName){case"source":y.sources[j]=O(E);break;case"vertices":y.vertices=ve(E);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",E.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(be(E));break;default:console.log(E)}}je.geometries[_.getAttribute("id")]=y}}function O(_){let y={array:[],stride:3};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"float_array":y.array=r(b.textContent);break;case"Name_array":y.array=s(b.textContent);break;case"technique_common":let E=i(b,"accessor")[0];E!==void 0&&(y.stride=parseInt(E.getAttribute("stride")));break}}return y}function ve(_){let y={};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];b.nodeType===1&&(y[b.getAttribute("semantic")]=a(b.getAttribute("source")))}return y}function be(_){let y={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let S=0,b=_.childNodes.length;S<b;S++){let E=_.childNodes[S];if(E.nodeType===1)switch(E.nodeName){case"input":let j=a(E.getAttribute("source")),ie=E.getAttribute("semantic"),Ae=parseInt(E.getAttribute("offset")),xe=parseInt(E.getAttribute("set")),Se=xe>0?ie+xe:ie;y.inputs[Se]={id:j,offset:Ae},y.stride=Math.max(y.stride,Ae+1),ie==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=o(E.textContent);break;case"p":y.p=o(E.textContent);break}}return y}function Ze(_){let y={};for(let S=0;S<_.length;S++){let b=_[S];y[b.type]===void 0&&(y[b.type]=[]),y[b.type].push(b)}return y}function qe(_){let y=0;for(let S=0,b=_.length;S<b;S++)_[S].hasUV===!0&&y++;y>0&&y<_.length&&(_.uvsNeedsFix=!0)}function wt(_){let y={},S=_.sources,b=_.vertices,E=_.primitives;if(E.length===0)return{};let j=Ze(E);for(let ie in j){let Ae=j[ie];qe(Ae),y[ie]=Tt(Ae,S,b)}return y}function Tt(_,y,S){let b={},E={array:[],stride:0},j={array:[],stride:0},ie={array:[],stride:0},Ae={array:[],stride:0},xe={array:[],stride:0},Se={array:[],stride:4},Ue={array:[],stride:4},ce=new Vn,De=[],Ie=0;for(let We=0;We<_.length;We++){let ze=_[We],Ht=ze.inputs,Et=0;switch(ze.type){case"lines":case"linestrips":Et=ze.count*2;break;case"triangles":Et=ze.count*3;break;case"polylist":for(let _t=0;_t<ze.count;_t++){let xt=ze.vcount[_t];switch(xt){case 3:Et+=3;break;case 4:Et+=6;break;default:Et+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}ce.addGroup(Ie,Et,We),Ie+=Et,ze.material&&De.push(ze.material);for(let _t in Ht){let xt=Ht[_t];switch(_t){case"VERTEX":for(let Ti in S){let zn=S[Ti];switch(Ti){case"POSITION":let sr=E.array.length;if(St(ze,y[zn],xt.offset,E.array),E.stride=y[zn].stride,y.skinWeights&&y.skinIndices&&(St(ze,y.skinIndices,xt.offset,Se.array),St(ze,y.skinWeights,xt.offset,Ue.array)),ze.hasUV===!1&&_.uvsNeedsFix===!0){let qm=(E.array.length-sr)/E.stride;for(let ed=0;ed<qm;ed++)ie.array.push(0,0)}break;case"NORMAL":St(ze,y[zn],xt.offset,j.array),j.stride=y[zn].stride;break;case"COLOR":St(ze,y[zn],xt.offset,xe.array),xe.stride=y[zn].stride;break;case"TEXCOORD":St(ze,y[zn],xt.offset,ie.array),ie.stride=y[zn].stride;break;case"TEXCOORD1":St(ze,y[zn],xt.offset,Ae.array),ie.stride=y[zn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ti)}}break;case"NORMAL":St(ze,y[xt.id],xt.offset,j.array),j.stride=y[xt.id].stride;break;case"COLOR":St(ze,y[xt.id],xt.offset,xe.array,!0),xe.stride=y[xt.id].stride;break;case"TEXCOORD":St(ze,y[xt.id],xt.offset,ie.array),ie.stride=y[xt.id].stride;break;case"TEXCOORD1":St(ze,y[xt.id],xt.offset,Ae.array),Ae.stride=y[xt.id].stride;break}}}return E.array.length>0&&ce.setAttribute("position",new It(E.array,E.stride)),j.array.length>0&&ce.setAttribute("normal",new It(j.array,j.stride)),xe.array.length>0&&ce.setAttribute("color",new It(xe.array,xe.stride)),ie.array.length>0&&ce.setAttribute("uv",new It(ie.array,ie.stride)),Ae.array.length>0&&ce.setAttribute("uv1",new It(Ae.array,Ae.stride)),Se.array.length>0&&ce.setAttribute("skinIndex",new It(Se.array,Se.stride)),Ue.array.length>0&&ce.setAttribute("skinWeight",new It(Ue.array,Ue.stride)),b.data=ce,b.type=_[0].type,b.materialKeys=De,b}function St(_,y,S,b,E=!1){let j=_.p,ie=_.stride,Ae=_.vcount;function xe(ce){let De=j[ce+S]*Ue,Ie=De+Ue;for(;De<Ie;De++)b.push(Se[De]);if(E){let We=b.length-Ue-1;lo.setRGB(b[We+0],b[We+1],b[We+2]).convertSRGBToLinear(),b[We+0]=lo.r,b[We+1]=lo.g,b[We+2]=lo.b}}let Se=y.array,Ue=y.stride;if(_.vcount!==void 0){let ce=0;for(let De=0,Ie=Ae.length;De<Ie;De++){let We=Ae[De];if(We===4){let ze=ce+ie*0,Ht=ce+ie*1,Et=ce+ie*2,_t=ce+ie*3;xe(ze),xe(Ht),xe(_t),xe(Ht),xe(Et),xe(_t)}else if(We===3){let ze=ce+ie*0,Ht=ce+ie*1,Et=ce+ie*2;xe(ze),xe(Ht),xe(Et)}else if(We>4)for(let ze=1,Ht=We-2;ze<=Ht;ze++){let Et=ce+ie*0,_t=ce+ie*ze,xt=ce+ie*(ze+1);xe(Et),xe(_t),xe(xt)}ce+=ie*We}}else for(let ce=0,De=j.length;ce<De;ce+=ie)xe(ce)}function rn(_){return x(je.geometries[_],wt)}function At(_){let y={name:_.getAttribute("name")||"",joints:{},links:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":ro(b,y);break}}je.kinematicsModels[_.getAttribute("id")]=y}function hn(_){return _.build!==void 0?_.build:_}function Yn(_){return x(je.kinematicsModels[_],hn)}function ro(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"joint":y.joints[b.getAttribute("sid")]=gc(b);break;case"link":y.links.push(Qr(b));break}}}function gc(_){let y;for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"prismatic":case"revolute":y=nr(b);break}}return y}function nr(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":let E=r(b.textContent);y.axis.fromArray(E);break;case"limits":let j=b.getElementsByTagName("max")[0],ie=b.getElementsByTagName("min")[0];y.limits.max=parseFloat(j.textContent),y.limits.min=parseFloat(ie.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function Qr(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"attachment_full":y.attachments.push(ir(b));break;case"matrix":case"translate":case"rotate":y.transforms.push(ea(b));break}}return y}function ir(_){let y={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"link":y.links.push(Qr(b));break;case"matrix":case"translate":case"rotate":y.transforms.push(ea(b));break}}return y}function ea(_){let y={type:_.nodeName},S=r(_.textContent);switch(y.type){case"matrix":y.obj=new at,y.obj.fromArray(S).transpose();break;case"translate":y.obj=new U,y.obj.fromArray(S);break;case"rotate":y.obj=new U,y.obj.fromArray(S),y.angle=ps.degToRad(S[3]);break}return y}function ao(_){let y={name:_.getAttribute("name")||"",rigidBodies:{}};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"rigid_body":y.rigidBodies[b.getAttribute("name")]={},yc(b,y.rigidBodies[b.getAttribute("name")]);break}}je.physicsModels[_.getAttribute("id")]=y}function yc(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"technique_common":_c(b,y);break}}}function _c(_,y){for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"inertia":y.inertia=r(b.textContent);break;case"mass":y.mass=r(b.textContent)[0];break}}}function xc(_){let y={bindJointAxis:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"bind_joint_axis":y.bindJointAxis.push(A(b));break}}je.kinematicsScenes[a(_.getAttribute("url"))]=y}function A(_){let y={target:_.getAttribute("target").split("/").pop()};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType===1)switch(b.nodeName){case"axis":let E=b.getElementsByTagName("param")[0];y.axis=E.textContent;let j=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=j.substring(0,j.length-1);break}}return y}function k(_){return _.build!==void 0?_.build:_}function Y(_){return x(je.kinematicsScenes[_],k)}function K(){let _=Object.keys(je.kinematicsModels)[0],y=Object.keys(je.kinematicsScenes)[0],S=Object.keys(je.visualScenes)[0];if(_===void 0||y===void 0)return;let b=Yn(_),E=Y(y),j=na(S),ie=E.bindJointAxis,Ae={};for(let Ue=0,ce=ie.length;Ue<ce;Ue++){let De=ie[Ue],Ie=kt.querySelector('[sid="'+De.target+'"]');if(Ie){let We=Ie.parentElement;xe(De.jointIndex,We)}}function xe(Ue,ce){let De=ce.getAttribute("name"),Ie=b.joints[Ue];j.traverse(function(We){We.name===De&&(Ae[Ue]={object:We,transforms:W(ce),joint:Ie,position:Ie.zeroPosition})})}let Se=new at;Qu={joints:b&&b.joints,getJointValue:function(Ue){let ce=Ae[Ue];if(ce)return ce.position;console.warn("THREE.ColladaLoader: Joint "+Ue+" doesn't exist.")},setJointValue:function(Ue,ce){let De=Ae[Ue];if(De){let Ie=De.joint;if(ce>Ie.limits.max||ce<Ie.limits.min)console.warn("THREE.ColladaLoader: Joint "+Ue+" value "+ce+" outside of limits (min: "+Ie.limits.min+", max: "+Ie.limits.max+").");else if(Ie.static)console.warn("THREE.ColladaLoader: Joint "+Ue+" is static.");else{let We=De.object,ze=Ie.axis,Ht=De.transforms;Ee.identity();for(let Et=0;Et<Ht.length;Et++){let _t=Ht[Et];if(_t.sid&&_t.sid.indexOf(Ue)!==-1)switch(Ie.type){case"revolute":Ee.multiply(Se.makeRotationAxis(ze,ps.degToRad(ce)));break;case"prismatic":Ee.multiply(Se.makeTranslation(ze.x*ce,ze.y*ce,ze.z*ce));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ie.type);break}else switch(_t.type){case"matrix":Ee.multiply(_t.obj);break;case"translate":Ee.multiply(Se.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Ee.scale(_t.obj);break;case"rotate":Ee.multiply(Se.makeRotationAxis(_t.obj,_t.angle));break}}We.matrix.copy(Ee),We.matrix.decompose(We.position,We.quaternion,We.scale),Ae[Ue].position=ce}}else console.log("THREE.ColladaLoader: "+Ue+" does not exist.")}}}function W(_){let y=[],S=kt.querySelector('[id="'+_.id+'"]');for(let b=0;b<S.childNodes.length;b++){let E=S.childNodes[b];if(E.nodeType!==1)continue;let j,ie;switch(E.nodeName){case"matrix":j=r(E.textContent);let Ae=new at().fromArray(j).transpose();y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:Ae});break;case"translate":case"scale":j=r(E.textContent),ie=new U().fromArray(j),y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:ie});break;case"rotate":j=r(E.textContent),ie=new U().fromArray(j);let xe=ps.degToRad(j[3]);y.push({sid:E.getAttribute("sid"),type:E.nodeName,obj:ie,angle:xe});break}}return y}function we(_){let y=_.getElementsByTagName("node");for(let S=0;S<y.length;S++){let b=y[S];b.hasAttribute("id")===!1&&b.setAttribute("id",l())}}let Ee=new at,Be=new U;function Ye(_){let y={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new at,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];if(b.nodeType!==1)continue;let E;switch(b.nodeName){case"node":y.nodes.push(b.getAttribute("id")),Ye(b);break;case"instance_camera":y.instanceCameras.push(a(b.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(st(b));break;case"instance_light":y.instanceLights.push(a(b.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(st(b));break;case"instance_node":y.instanceNodes.push(a(b.getAttribute("url")));break;case"matrix":E=r(b.textContent),y.matrix.multiply(Ee.fromArray(E).transpose()),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"translate":E=r(b.textContent),Be.fromArray(E),y.matrix.multiply(Ee.makeTranslation(Be.x,Be.y,Be.z)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"rotate":E=r(b.textContent);let j=ps.degToRad(E[3]);y.matrix.multiply(Ee.makeRotationAxis(Be.fromArray(E),j)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"scale":E=r(b.textContent),y.matrix.scale(Be.fromArray(E)),y.transforms[b.getAttribute("sid")]=b.nodeName;break;case"extra":break;default:console.log(b)}}return Lt(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):je.nodes[y.id]=y,y}function st(_){let y={id:a(_.getAttribute("url")),materials:{},skeletons:[]};for(let S=0;S<_.childNodes.length;S++){let b=_.childNodes[S];switch(b.nodeName){case"bind_material":let E=b.getElementsByTagName("instance_material");for(let j=0;j<E.length;j++){let ie=E[j],Ae=ie.getAttribute("symbol"),xe=ie.getAttribute("target");y.materials[Ae]=a(xe)}break;case"skeleton":y.skeletons.push(a(b.textContent));break;default:break}}return y}function tt(_,y){let S=[],b=[],E,j,ie;for(E=0;E<_.length;E++){let Se=_[E],Ue;if(Lt(Se))Ue=Qe(Se),nt(Ue,y,S);else if(Ei(Se)){let De=je.visualScenes[Se].children;for(let Ie=0;Ie<De.length;Ie++){let We=De[Ie];if(We.type==="JOINT"){let ze=Qe(We.id);nt(ze,y,S)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Se)}for(E=0;E<y.length;E++)for(j=0;j<S.length;j++)if(ie=S[j],ie.bone.name===y[E].name){b[E]=ie,ie.processed=!0;break}for(E=0;E<S.length;E++)ie=S[E],ie.processed===!1&&(b.push(ie),ie.processed=!0);let Ae=[],xe=[];for(E=0;E<b.length;E++)ie=b[E],Ae.push(ie.bone),xe.push(ie.boneInverse);return new ll(Ae,xe)}function nt(_,y,S){_.traverse(function(b){if(b.isBone===!0){let E;for(let j=0;j<y.length;j++){let ie=y[j];if(ie.name===b.name){E=ie.boneInverse;break}}E===void 0&&(E=new at),S.push({bone:b,boneInverse:E,processed:!1})}})}function zt(_){let y=[],S=_.matrix,b=_.nodes,E=_.type,j=_.instanceCameras,ie=_.instanceControllers,Ae=_.instanceLights,xe=_.instanceGeometries,Se=_.instanceNodes;for(let ce=0,De=b.length;ce<De;ce++)y.push(Qe(b[ce]));for(let ce=0,De=j.length;ce<De;ce++){let Ie=Ge(j[ce]);Ie!==null&&y.push(Ie.clone())}for(let ce=0,De=ie.length;ce<De;ce++){let Ie=ie[ce],We=se(Ie.id),ze=rn(We.id),Ht=jn(ze,Ie.materials),Et=Ie.skeletons,_t=We.skin.joints,xt=tt(Et,_t);for(let Ti=0,zn=Ht.length;Ti<zn;Ti++){let sr=Ht[Ti];sr.isSkinnedMesh&&(sr.bind(xt,We.skin.bindMatrix),sr.normalizeSkinWeights()),y.push(sr)}}for(let ce=0,De=Ae.length;ce<De;ce++){let Ie=ht(Ae[ce]);Ie!==null&&y.push(Ie.clone())}for(let ce=0,De=xe.length;ce<De;ce++){let Ie=xe[ce],We=rn(Ie.id),ze=jn(We,Ie.materials);for(let Ht=0,Et=ze.length;Ht<Et;Ht++)y.push(ze[Ht])}for(let ce=0,De=Se.length;ce<De;ce++)y.push(Qe(Se[ce]).clone());let Ue;if(b.length===0&&y.length===1)Ue=y[0];else{Ue=E==="JOINT"?new Ea:new Tn;for(let ce=0;ce<y.length;ce++)Ue.add(y[ce])}return Ue.name=E==="JOINT"?_.sid:_.name,Ue.matrix.copy(S),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue}let Ln=new Jt({name:gi.DEFAULT_MATERIAL_NAME,color:16711935});function $t(_,y){let S=[];for(let b=0,E=_.length;b<E;b++){let j=y[_[b]];j===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[b]),S.push(Ln)):S.push($e(j))}return S}function jn(_,y){let S=[];for(let b in _){let E=_[b],j=$t(E.materialKeys,y);if(j.length===0&&(b==="lines"||b==="linestrips"?j.push(new Br):j.push(new Aa)),b==="lines"||b==="linestrips")for(let Se=0,Ue=j.length;Se<Ue;Se++){let ce=j[Se];if(ce.isMeshPhongMaterial===!0||ce.isMeshLambertMaterial===!0){let De=new Br;De.color.copy(ce.color),De.opacity=ce.opacity,De.transparent=ce.transparent,j[Se]=De}}let ie=E.data.attributes.skinIndex!==void 0,Ae=j.length===1?j[0]:j,xe;switch(b){case"lines":xe=new cl(E.data,Ae);break;case"linestrips":xe=new Ta(E.data,Ae);break;case"triangles":case"polylist":ie?xe=new al(E.data,Ae):xe=new Bt(E.data,Ae);break}S.push(xe)}return S}function Lt(_){return je.nodes[_]!==void 0}function Qe(_){return x(je.nodes[_],zt)}function ta(_){let y={name:_.getAttribute("name"),children:[]};we(_);let S=i(_,"node");for(let b=0;b<S.length;b++)y.children.push(Ye(S[b]));je.visualScenes[_.getAttribute("id")]=y}function Dt(_){let y=new Tn;y.name=_.name;let S=_.children;for(let b=0;b<S.length;b++){let E=S[b];y.add(Qe(E.id))}return y}function Ei(_){return je.visualScenes[_]!==void 0}function na(_){return x(je.visualScenes[_],Dt)}function Ps(_){let y=i(_,"instance_visual_scene")[0];return na(a(y.getAttribute("url")))}function ia(){let _=je.clips;if(c(_)===!0){if(c(je.animations)===!1){let y=[];for(let S in je.animations){let b=P(S);for(let E=0,j=b.length;E<j;E++)y.push(b[E])}co.push(new Ca("default",-1,y))}}else for(let y in _)co.push(Q(y))}function an(_){let y="",S=[_];for(;S.length;){let b=S.shift();b.nodeType===Node.TEXT_NODE?y+=b.textContent:(y+=`
`,S.push.apply(S,b.childNodes))}return y.trim()}if(e.length===0)return{scene:new Vs};let di=new DOMParser().parseFromString(e,"application/xml"),kt=i(di,"COLLADA")[0],bn=di.getElementsByTagName("parsererror")[0];if(bn!==void 0){let _=i(bn,"div")[0],y;return _?y=_.textContent:y=an(bn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let sa=kt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",sa);let oo=h(i(kt,"asset")[0]),ra=new ml(this.manager);ra.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let vc;Ia&&(vc=new Ia(this.manager),vc.setPath(this.resourcePath||t));let lo=new rt,co=[],Qu={},Xm=0,je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(kt,"library_animations","animation",p),m(kt,"library_animation_clips","animation_clip",B),m(kt,"library_controllers","controller",V),m(kt,"library_images","image",re),m(kt,"library_effects","effect",He),m(kt,"library_materials","material",Fe),m(kt,"library_cameras","camera",lt),m(kt,"library_lights","light",Le),m(kt,"library_geometries","geometry",_e),m(kt,"library_nodes","node",Ye),m(kt,"library_visual_scenes","visual_scene",ta),m(kt,"library_kinematics_models","kinematics_model",At),m(kt,"library_physics_models","physics_model",ao),m(kt,"scene","instance_kinematics_scene",xc),g(je.animations,v),g(je.clips,ne),g(je.controllers,z),g(je.images,le),g(je.effects,he),g(je.materials,Pe),g(je.cameras,Je),g(je.lights,Nt),g(je.geometries,wt),g(je.visualScenes,Dt),ia(),K();let ho=Ps(i(kt,"scene")[0]);return ho.animations=co,oo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ho.rotation.set(-Math.PI/2,0,0)),ho.scale.multiplyScalar(oo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),co},kinematics:Qu,library:je,scene:ho}}};var dp=new fn,Pl=new U,qs=class extends bl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new It(e,3)),this.setAttribute("uv",new It(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Xs(t,6,1);return this.setAttribute("instanceStart",new ei(i,3,0)),this.setAttribute("instanceEnd",new ei(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Xs(t,6,1);return this.setAttribute("instanceColorStart",new ei(i,3,0)),this.setAttribute("instanceColorEnd",new ei(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ul(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),dp.setFromBufferAttribute(t),this.boundingBox.union(dp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pl)),Pl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ke(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Un.line={uniforms:Al.merge([me.common,me.fog,me.line]),vertexShader:`
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
		`};var Vi=class extends ci{constructor(e){super({type:"LineMaterial",uniforms:Al.clone(Un.line.uniforms),vertexShader:Un.line.vertexShader,fragmentShader:Un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var fp=new U,pp=new U,pn=new vt,mn=new vt,yi=new vt,Wh=new U,Xh=new at,gn=new Sl,mp=new U,Ll=new fn,Il=new Qn,_i=new vt,xi,$s;function gp(n,e,t){return _i.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),_i.multiplyScalar(1/_i.w),_i.x=$s/t.width,_i.y=$s/t.height,_i.applyMatrix4(n.projectionMatrixInverse),_i.multiplyScalar(1/_i.w),Math.abs(Math.max(_i.x,_i.y))}function mb(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){gn.start.fromBufferAttribute(s,a),gn.end.fromBufferAttribute(r,a),gn.applyMatrix4(t);let c=new U,h=new U;xi.distanceSqToSegment(gn.start,gn.end,h,c),h.distanceTo(c)<$s*.5&&e.push({point:h,pointOnLine:c,distance:xi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function gb(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;xi.at(1,yi),yi.w=1,yi.applyMatrix4(e.matrixWorldInverse),yi.applyMatrix4(i),yi.multiplyScalar(1/yi.w),yi.x*=r.x/2,yi.y*=r.y/2,yi.z=0,Wh.copy(yi),Xh.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,m=h;f<m;f++){if(pn.fromBufferAttribute(l,f),mn.fromBufferAttribute(c,f),pn.w=1,mn.w=1,pn.applyMatrix4(Xh),mn.applyMatrix4(Xh),pn.z>u&&mn.z>u)continue;if(pn.z>u){let v=pn.z-mn.z,P=(pn.z-u)/v;pn.lerp(mn,P)}else if(mn.z>u){let v=mn.z-pn.z,P=(mn.z-u)/v;mn.lerp(pn,P)}pn.applyMatrix4(i),mn.applyMatrix4(i),pn.multiplyScalar(1/pn.w),mn.multiplyScalar(1/mn.w),pn.x*=r.x/2,pn.y*=r.y/2,mn.x*=r.x/2,mn.y*=r.y/2,gn.start.copy(pn),gn.start.z=0,gn.end.copy(mn),gn.end.z=0;let x=gn.closestPointToPointParameter(Wh,!0);gn.at(x,mp);let p=ps.lerp(pn.z,mn.z,x),d=p>=-1&&p<=1,M=Wh.distanceTo(mp)<$s*.5;if(d&&M){gn.start.fromBufferAttribute(l,f),gn.end.fromBufferAttribute(c,f),gn.start.applyMatrix4(o),gn.end.applyMatrix4(o);let v=new U,P=new U;xi.distanceSqToSegment(gn.start,gn.end,P,v),t.push({point:P,pointOnLine:v,distance:xi.origin.distanceTo(P),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Na=class extends Bt{constructor(e=new qs,t=new Vi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)fp.fromBufferAttribute(t,o),pp.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+fp.distanceTo(pp);let r=new Xs(s,2,1);return e.setAttribute("instanceDistanceStart",new ei(r,1,0)),e.setAttribute("instanceDistanceEnd",new ei(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;xi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;$s=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Il.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$s*.5;else{let u=Math.max(s.near,Il.distanceToPoint(xi.origin));c=gp(s,u,l.resolution)}if(Il.radius+=c,xi.intersectsSphere(Il)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ll.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=$s*.5;else{let u=Math.max(s.near,Ll.distanceToPoint(xi.origin));h=gp(s,u,l.resolution)}Ll.expandByScalar(h),xi.intersectsBox(Ll)!==!1&&(i?mb(this,t):gb(this,s,t))}};var Gi=["en","fr","ca","es"];var yb={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function bp(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of yb[e]||Gi)if(n[t])return n[t];return""}var Da={en:{together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_tab:"Video",hv_grid:"Grid",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_sound:"Sound",hv_cam:"Camera",hv_camNote:"Your image stays on your screen.",hv_camDenied:"Camera unavailable.",sent:"Your slogan is now scrolling at the top.",bsLabel:"Type your bullshit slogan, then press Enter"},fr:{together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_tab:"Vid\xE9o",hv_grid:"Grille",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_sound:"Son",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran.",hv_camDenied:"Cam\xE9ra indisponible.",sent:"Ton slogan d\xE9file en haut de la page.",bsLabel:"Tape ton bullshit slogan, puis Entr\xE9e"},ca:{together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_tab:"V\xEDdeo",hv_grid:"Graella",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_sound:"So",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla.",hv_camDenied:"C\xE0mera no disponible.",sent:"El teu esl\xF2gan ja passa a dalt de la p\xE0gina.",bsLabel:"Escriu el teu bullshit slogan i prem Retorn"},es:{together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_tab:"V\xEDdeo",hv_grid:"Cuadr\xEDcula",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_sound:"Sonido",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla.",hv_camDenied:"C\xE1mara no disponible.",sent:"Tu eslogan ya pasa arriba de la p\xE1gina.",bsLabel:"Escribe tu bullshit slogan y pulsa Intro"}},_b={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Ua={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function qh(){return Object.fromEntries(Gi.map(n=>[n,""]))}function Ys(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:Gi.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",sloganInbox:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;return e.headline=e.headline||qh(),e.sub=e.sub||qh(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.placeholder=e.placeholder||{en:"type bullshit slogan here",fr:"tape ton bullshit slogan ici",ca:"escriu aqu\xED el teu bullshit slogan",es:"escribe aqu\xED tu bullshit slogan"},e.example=e.example||qh(),n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(t=>{t.tags=Array.isArray(t.tags)?t.tags:[],t.layout=_b[t.layout]?t.layout:"carousel",t.card=Ua[t.card]?t.card:"image",t.open=t.open==="focus3d"?"focus3d":"strip",t.perPage=Math.max(1,Math.min(40,+t.perPage||8)),t.visible===void 0&&(t.visible=!0),t.network=!!t.network,t.skills=t.skills===void 0?t.id==="expertise":!!t.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(t=>{["title","subtitle","place","body"].forEach(i=>{(!t[i]||typeof t[i]!="object")&&(t[i]=Object.fromEntries(Gi.map(s=>[s,t[i]||""]))),Gi.forEach(s=>{t[i][s]==null&&(t[i][s]="")})}),t.tags=Array.isArray(t.tags)?t.tags:[],t.media=Array.isArray(t.media)?t.media:[],t.team=Array.isArray(t.team)?t.team:[],t.author=typeof t.author=="string"?t.author:"",t.media.forEach(i=>{i&&typeof i.credit!="string"&&(i.credit=""),i&&typeof i.caption=="string"&&(i.caption=Object.fromEntries(Gi.map(s=>[s,i.caption])))}),t.spots=Array.isArray(t.spots)?t.spots.filter(Zh):[],t.skills=Array.isArray(t.skills)?t.skills.filter(i=>typeof i=="string"):[],t.logos=Array.isArray(t.logos)?t.logos.filter(i=>typeof i=="string"&&i):[],t.published===void 0&&(t.published=!0)}),n}function $h(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function Mp(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Yh(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function ke(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var xb=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function jh(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!xb.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function Oa(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Zh=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function ms(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function Jh(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function yp(n){try{let e=await Jh();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function _p(n,e){let t=await Jh();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function xp(n){try{let e=await Jh();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Nl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Ys(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Ys(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Dl=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await yp("demo:content:v6");if(e)return Ys(e);if(window.HC_CONTENT)return Ys(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Ys(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await xp("demo:file:"+i.path);continue}await _p("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await _p("demo:content:v6",e),"demo"}async reset(){await xp("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await yp("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},vp=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Ul=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, bouton ENTER, clavier",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl",".team .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"bs",group:"Accueil",label:"Champ du slogan",hint:"taille maximale, elle se r\xE9duit sur petit \xE9cran",font:"helvetica",size:50,weight:700,ls:-.04,only:["font","size","weight","italic","ls","upper"],sample:"type bullshit slogan here",sel:["#bs"],clamp:[.52,961]},{id:"bseg",group:"Accueil",label:"Exemple sous le champ",font:"helvetica",size:15,weight:700,ls:-.01,only:["font","size","weight","italic","ls","upper"],sample:"e.g We seamlessly leverage technology",sel:["#bs-eg"],clamp:[.8,940]},{id:"offh",group:"Accueil",label:"Bureaux, titres",font:"georgia",size:15,lh:20,weight:400,sample:"Hand Coded, Barcelona",sel:["#offices h3"]},{id:"offp",group:"Accueil",label:"Bureaux, adresses",font:"georgia",size:11,lh:16,weight:400,sample:"Carrer de la Provid\xE8ncia, 55",sel:["#offices p"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine",font:"georgia",scale:100,only:["font","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],vb=["font","size","lh","weight","italic","ls","upper"],Sp=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function bb(n){let e=vp.find(i=>i.id===n);if(e)return e.css;let t=Sp(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:vp[0].css}function Wi(n,e){let t=Ul.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...vb,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=bb(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function wp(n){let e=[],t=[],i=[];for(let s of Ul){let r=n&&n.typo&&n.typo[s.id]||{},o=Wi(n,s.id),a=c=>r[c]!==void 0&&r[c]!==""&&r[c]!==null&&r[c]!==s[c];if(s.vars){a("font")&&e.push(`:root { ${s.vars.map(c=>`${c}: ${o.css};`).join(" ")} }`);continue}if(!s.sel)continue;let l=[];if(a("font")&&l.push(`font-family: ${o.css}`),a("size")&&l.push(s.clamp?`font-size: clamp(${Math.round(o.size*s.clamp[0])}px, ${(o.size/s.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(a("lh")||a("size")&&!s.clamp&&!a("lh")&&s.lh)&&l.push(`line-height: ${a("lh")?o.lh:+(s.lh*o.size/s.size).toFixed(1)}px`),a("weight")&&l.push(`font-weight: ${o.weight}`),a("italic")&&l.push(`font-style: ${o.italic?"italic":"normal"}`),a("ls")&&l.push(`letter-spacing: ${o.ls}em`),a("upper")&&l.push(`text-transform: ${o.upper?"uppercase":"none"}`),l.length&&e.push(`${s.sel.join(", ")} { ${l.join("; ")} }`),s.mob&&(a("size")||a("lh"))){let c=a("lh")?o.lh:s.lh*o.size/s.size;t.push(`${s.sel.join(", ")} { font-size: ${Math.round(o.size*s.mob)}px; line-height: ${Math.round(c*s.mob)}px }`),i.push(`${s.sel.join(", ")} { font-size: ${Math.round(o.size*s.mob*.8)}px; line-height: ${Math.round(c*s.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function Ep(n){let e=new Map;for(let t of Ul){let i=Wi(n,t.id),s=Sp(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Kh(n){let e=new Set;for(let t of Ul){let i=Wi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Tp(n,e,t=!1){let i=Wi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let a=r.measureText(o),l=(a.actualBoundingBoxAscent||i.size*1.4)-(a.actualBoundingBoxDescent||0);if(r.fillText(o,120,120+l/2),t){let c=r.getImageData(0,0,240,240),h=c.data;for(let u=0;u<h.length;u+=4)h[u]=255-h[u],h[u+1]=255-h[u+1],h[u+2]=255-h[u+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var Ap=window.HC_BASE||"",Gl=window.HC_MODE==="demo"?new Dl(Ap):new Nl(Ap),ys=window.HC_ASSETS||null,Mb=location.protocol==="file:",Jp=20261102;window.HC_SITE_VERSION=Jp;var Xt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,_n=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Xt&&Xt.files&&Xt.files[e]?Xt.files[e]:ys&&ys[e]&&ys[e].startsWith("data:")?ys[e]:Gl.url(e)};async function Sb(n){if(ys&&ys[n]&&!ys[n].startsWith("data:"))return ys[n];let e=await fetch(_n(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var Oe=null,Yi="en",Re=n=>bp(n,Yi),pt=n=>(Da[Yi]||Da.en)[n],wb=42,ae={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},bs={zoom:2,focus:300},Eb=.08,Cp={};function Kp(n){if(ae.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{ae[t]=Cp[t]}):(e.forEach(t=>{Cp[t]=ae[t]}),Object.assign(ae,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),ae.animationMode=n}var du=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=$h(Oe,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:{en:Da.en.all,fr:Da.fr.all}},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Re(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:ae.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Ot[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new du(this.section.def)}},Ot=[],yt={x:0,y:0,z:0,zoom:bs.zoom},Rn={x:0,y:0,z:0},$i=0,Mi=[],Tb={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function en(n,e,t,i={}){for(let r of Mi)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:$i+(i.delay||0),ease:Tb[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Mi.push(s),s}var qa=(n,e)=>en({},n,{},{onComplete:e,ease:"linear"});function An(n){for(let e=Mi.length-1;e>=0;e--)Mi[e].obj===n&&Mi.splice(e,1)}function Zr(n){return Mi.some(e=>e.obj===n&&$i>=e.start)}function Qp(n,e){if(!e&&$i<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,($i-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function Ab(){for(let n of Mi.slice())if(Qp(n,!1)){let e=Mi.indexOf(n);e>=0&&Mi.splice(e,1),n.onComplete&&n.onComplete()}}function em(){Mi.splice(0).forEach(n=>Qp(n,!0))}function Cb(n,e,t,i,s,r,o){An(yt),en(yt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),Pu(i,s,r,o)}function Pu(n,e,t,i){An(Rn),en(Rn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function Rb(n,e,t,i){An(yt),en(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var $l=1,xn=n=>n<=1?1:1-Math.pow(1-1/n,$l),Si=Math.PI/180,fu=(n,e,t)=>new U(n,e,-t),gs=(n,e,t)=>[-n,e,t],vn=document.getElementById("stage"),Ts=new Sa({canvas:vn,antialias:!0});Ts.debug.checkShaderErrors=!1;Ts.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ts.setClearColor(16777215,1);var Ms=new Vs;Ms.add(new gl(16777215,14211288,2.2));var tm=new Vr(16777215,1.2);tm.position.set(300,800,500);Ms.add(tm);var ni=new jt(60,1,1,6e4),nm=new Vi({color:ae.lineColor,linewidth:ae.lineThickness}),pu=new Vi({color:ae.planeFrameColor,linewidth:ae.planeFrameThickness}),im=new Vi({color:ae.planeFrameSelectColor,linewidth:ae.planeFrameThickness}),Wl=new Vi({color:ae.locatorColor,linewidth:1.3}),sm=[nm,pu,im,Wl],rm=new Ra;rm.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:_n(n));var Qh=new Map;function Ss(n){return n?Mb&&!/^(data:|blob:|https?:)/.test(_n(n))?Promise.reject(new Error("local")):(Qh.has(n)||Qh.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(_n(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=_n(n)})),Qh.get(n)):Promise.reject(new Error("no image"))}function Lu(n){return n.colorSpace=Vt,n.anisotropy=Math.min(8,Ts.capabilities.getMaxAnisotropy()),n}var Pb=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=Lu(new zr(n)),t=new zi(1,1),i=new Vs;return[kn,dn,On].forEach(s=>i.add(new Bt(t,new Jt({map:e,side:s})))),i.add(new Bt(t,new Jt({color:1118481}))),i.add(new wa(new Fr({map:e,transparent:!0}))),i})(),qt=0,Wt=0,ii=!1,Yl=()=>ii,am=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},tn=()=>{let n=Oe.settings.accent||"#ffcc00";return Yl()?am(n):n},Zt='Georgia, Gelasio, "Times New Roman", serif',yn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',Iu=1,mt=n=>Math.round(n*Iu),Lb=700,Nu=()=>{let n=qt||window.innerWidth,e=Wt||window.innerHeight;return n<Lb||Math.min(n,e)<500},ji=Nu;function As(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...Oe?Kh(Oe.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Rp=0,om=[];function Ib(){clearTimeout(Rp),Rp=setTimeout(async()=>{try{await Promise.all(Kh(Oe.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}Oe.settings.logo||Mu(),Ce&&!Ce.loading&&Ce.retexture()},150)}function lm(){let n=Oe.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=wp(n);e.textContent!==t&&(e.textContent=t);let i=Ep(n);document.querySelectorAll("link[data-hc-font]").forEach(s=>{i.includes(s.href)||s.remove()}),i.forEach(s=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(s)}"]`)){let r=document.createElement("link");r.rel="stylesheet",r.href=s,r.dataset.hcFont="",om.push(new Promise(o=>{r.onload=()=>{o(),Ib()},r.onerror=o})),document.head.appendChild(r)}}),Zt=Wi(n,"card").css,yn=Wi(n,"cardsm").css,Iu=Math.max(.5,Math.min(2,(+Wi(n,"card").scale||100)/100))}function ln(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function sn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),Lu(new zr(s))}function Zi(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),Yl()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var mu=n=>String(n).split(/[\s&]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join("");function cm(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function eo(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Du=n=>Ot.some(e=>e.def.id===n.section),Nb=(n,e)=>Ot.findIndex(t=>t.def.id===n.section)-Ot.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),jl=n=>Oe.posts.filter(e=>e.published&&e!==n&&Du(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(Nb),hm=n=>{let e=Yh(Oe,n).filter(Du);return e.length?e:jl(n)},eu=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),Db=n=>Mp(Oe,n).filter(Du),$a=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Vu(e.src)==="image")||{}).src||"",Pp=new Map,gu=n=>jl(n).filter($a);async function ic(n,e=hm(n)){let t=e.filter($a);if(!t.length)return null;let i=t.find(r=>r.id===Pp.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await Ss($a(r)).catch(()=>null);if(o)return Pp.set(n.id,r.id),{im:o,project:r}}return null}function sc(n,e,t,i,s){Zi(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function um(n,e){let t=Re(n.title).trim(),i=Re(n.subtitle).trim();if(!t&&!i)return null;let s=ji(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),o=s?17:Math.max(7.5,r*.74),a=Math.round(r*(s?.6:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d");c.font=`${r}px ${Zt}`;let h=t?ln(c,t,l).slice(0,2):[];c.font=`${o}px ${Zt}`;let u=i?ln(c,i,l).slice(0,2):[],f=Math.round(r*1.2),m=Math.round(o*1.25),g=Math.ceil(a+h.length*f+(u.length?3+u.length*m:0)+a-2);return{tex:sn(e,g,p=>{p.fillStyle="rgba(0,0,0,.62)",p.fillRect(0,0,e,g),p.textBaseline="top";let d=a;p.fillStyle="#fff",p.font=`${r}px ${Zt}`,h.forEach(M=>{p.fillText(M,a,d),d+=f}),d+=3,p.fillStyle="#d6d6d6",p.font=`${o}px ${Zt}`,u.forEach(M=>{p.fillText(M,a,d),d+=m})},3),bh:g,w:e}}async function Ub(n,e,t){let i=n.thumb?await Ss(n.thumb).catch(()=>null):null,s=n.thumbBack?await Ss(n.thumbBack).catch(()=>null):null,r=i?null:await ic(n);await As();let o=(c,h=!1)=>{if(i){Zi(c,i,0,0,e,t);return}r?sc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ji(),f=u?14:16,m=u?[mt(31),mt(34),2]:[mt(24),28,3],g=u?[mt(20),mt(23),1]:[mt(13),16,2],x=u?mt(15):10,p=u?mt(13):9,d=u?26:20;c.fillStyle=tn(),c.fillRect(f,u?13:18,18,2),c.fillStyle="#fff",c.font=`${m[0]}px ${Zt}`;let M=ln(c,Re(n.title),e-2*f).slice(0,m[2]),v=u?22:30;M.forEach((N,L)=>c.fillText(N,f,v+L*m[1])),c.fillStyle=r?"#d6d6d6":"#8c8c8c",c.font=`${g[0]}px ${Zt}`,ln(c,Re(n.subtitle),e-2*f).slice(0,u&&M.length<2?2:g[2]).forEach((N,L)=>c.fillText(N,f,v+8+M.length*m[1]+L*g[1]));let P=r?zp(r.project,r.project.media[0]&&r.project.media[0].credit):zp(n,n.media[0]&&n.media[0].credit);if(c.fillStyle=tn(),c.font=`${x}px ${yn}`,c.fillText([n.date,Re(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),f,t-(P?d+x+6:x+12)),P){c.font=`${p}px ${yn}`;let N=P;for(;c.measureText(N).width>e-2*f&&N.length>4;)N=N.slice(0,-2)+"\u2026";c.fillStyle=r?"rgba(0,0,0,.55)":"#2a2a2a",c.fillRect(0,t-d,e,d),c.fillStyle=r?"#d0d0d0":"#9a9a9a",c.textBaseline="middle",c.fillText(N,f,t-d/2)}c.globalAlpha=1},a=sn(e,t,o,2),l=s?sn(e,t,c=>Zi(c,s,0,0,e,t),2):r?sn(e,t,eo(e,c=>o(c,!0)),2):sn(e,t,cm(o),1.5);return[a,l,i?um(n,e):null]}async function Ob(n,e,t){let i=n.thumb?await Ss(n.thumb).catch(()=>null):null,s=n.thumbBack?await Ss(n.thumbBack).catch(()=>null):null,r=i||eu(n)?null:await ic(n,gu(n));await As();let o=(l,c=!1)=>{if(eu(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ji()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${yn}`;let x=ln(l,Re(n.title),e*(g>1?.9:.76)).slice(0,3);x.forEach((p,d)=>l.fillText(p,e/2,t/2+(d-(x.length-1)/2)*t*.16*g)),Yl()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),f=i.naturalWidth*u,m=i.naturalHeight*u;l.drawImage(i,(e-f)/2,(t-m)/2,f,m),Yl()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Zi(l,i,0,0,e,t);return}r?sc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=`${Math.round(t*.42*Iu)}px ${Zt}`,l.textAlign="center",l.textBaseline="middle",l.fillText(mu(Re(n.title)),e/2,t*.45),l.fillStyle=tn(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?sn(e,t,l=>Zi(l,s,0,0,e,t),3):r?sn(e,t,eo(e,l=>o(l,!0)),2):sn(e,t,cm(o),2);return[sn(e,t,o,3),a,i||r||eu(n)?um(n,e):null]}async function Fb(n,e,t){let i=await ic(n);if(i)return Bb(n,e,t,i);let s=n.thumb?await Ss(n.thumb).catch(()=>null):null;await As();let r=Re(n.title).trim(),o=ji(),a=mt(o?30:21),l=o?mt(32):22,c=o?2:3,h=s?72:18,u=e-h-14,f=sn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Zi(g,s,13,12.75,53,53):(g.fillStyle=tn(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=`${a}px ${Zt}`,g.textBaseline="top",ln(g,r,u).slice(0,c).forEach((x,p)=>g.fillText(x,h,(s?12:20)+p*l))}),m=sn(e,t,eo(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=`${a}px ${Zt}`,g.textBaseline="top",ln(g,r,u).slice(0,c).forEach((x,p)=>g.fillText(x,h,(s?9:17)+p*l))}));return[f,m]}async function Bb(n,e,t,i){await As();let s=Re(n.title).trim(),r=e-32,o=ji(),a=mt(o?30:21),l=o?mt(32):22,c=h=>u=>{sc(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=tn(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=`${a}px ${Zt}`,u.textBaseline="top",ln(u,s,r).slice(0,o?2:3).forEach((f,m)=>u.fillText(f,18,20+m*l)),u.globalAlpha=1};return[sn(e,t,c(!1),2),sn(e,t,eo(e,c(!0)),2)]}async function zb(n,e,t){let i=n.thumb?await Ss(n.thumb).catch(()=>null):null;await As();let r=sn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),Zi(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=tn(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${mt(12)}px ${Zt}`,o.textAlign="center",o.textBaseline="top",o.fillText(Re(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var kb={image:Ub,portrait:Ob,text:Fb,place:zb};async function Hb(n,e,t){let i=n.thumb?await Ss(n.thumb).catch(()=>null):null,s=i?{im:i}:await ic(n);await As();let r=Re(n.title).trim(),o=(Re(n.subtitle).trim()||Oa(Re(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=ji(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[f,m,g,x]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],p=d=>M=>{M.fillStyle="#111",M.fillRect(0,0,e,t),s&&l&&!d&&sc(M,s,e,t,.6),s&&!l&&Zi(M,s.im,e-c,0,c,t),d&&(s&&(M.globalAlpha=.55,Zi(M,s.im,0,0,e,t)),M.globalAlpha=.3),M.textBaseline="top",M.fillStyle=tn(),M.fillRect(h,a?9:13,14,2),M.fillStyle="#fff",M.font=`${mt(f)}px ${Zt}`;let v=ln(M,r,u).slice(0,l?3:2),P=a?16:22;v.forEach(I=>{M.fillText(I,h,P),P+=mt(m)}),P+=a?2:5,M.fillStyle=l?"#dcdcdc":"#bdbdbd",M.font=`${mt(g)}px ${Zt}`;let N=l?0:Math.max(0,Math.floor((t-P-8)/mt(x))),L=ln(M,o,u);if(L.length>N&&(L=L.slice(0,N),N)){let I=L[N-1];for(;I&&M.measureText(I+"\u2026").width>u;)I=I.replace(/\s*\S+$/,"");L[N-1]=I+"\u2026"}L.forEach(I=>{M.fillText(I,h,P),P+=mt(x)}),M.globalAlpha=1};return[sn(e,t,p(!1),2),sn(e,t,eo(e,p(!0)),2),null]}function Ol(n,e){return As().then(()=>e==="place"?sn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(44)}px ${Zt}`,t.fillText(Re(n.title)+".",32,18),t.fillStyle="#979797",t.font=`${mt(18)}px ${Zt}`,ln(t,Re(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.fillStyle=tn(),t.font=`14px ${yn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",Oa(Re(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.fillStyle=tn(),t.font=`15px ${yn}`,t.fillText(Re(n.place),32,260)},1.5):ji()?sn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(25)}px ${Zt}`;let i=ln(t,Re(n.title)+".",172).slice(0,2);i.forEach((f,m)=>t.fillText(f,14,12+m*mt(27))),t.font=`${mt(13)}px ${yn}`;let s=jl(n).map(f=>Re(f.title).trim()).filter(Boolean),r=s.length?ln(t,s.join("  \xB7  "),172).slice(0,2):[],o=Re(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*mt(27);t.fillStyle="#b4b4b4",t.font=`${mt(17)}px ${Zt}`;let c=(r.length?a-6:o)-mt(20),h=ln(t,Re(n.subtitle),172),u=[];for(let f of h){if(l>c)break;u.push(f),l+=mt(20)}if(u.length<h.length&&u.length){let f=u[u.length-1];for(;f&&t.measureText(f+"\u2026").width>172;)f=f.replace(/\s*\S+$/,"");u[u.length-1]=f+"\u2026"}u.forEach((f,m)=>t.fillText(f,14,18+i.length*mt(27)+m*mt(20))),r.length&&(t.fillStyle=tn(),t.font=`${mt(11)}px ${yn}`,t.fillText(pt("together").toUpperCase(),14,a),t.fillStyle="#e6e6e6",t.font=`${mt(13)}px ${yn}`,r.forEach((f,m)=>t.fillText(f,14,a+16+m*16))),Re(n.place)&&(t.fillStyle=tn(),t.font=`${mt(13)}px ${yn}`,t.fillText(Re(n.place).toUpperCase(),14,176))},2.5):sn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=`${mt(20)}px ${Zt}`;let i=ln(t,Re(n.title)+".",166).slice(0,2);i.forEach((l,c)=>t.fillText(l,18,14+c*22));let s=20+i.length*22;t.fillStyle="#8c8c8c",t.font=`${mt(15)}px ${Zt}`,Re(n.subtitle).split(/(?<=\.)\s+/).forEach(l=>ln(t,l,166).forEach(c=>{s<150&&(t.fillText(c,19,s),s+=18)})),t.font=`10px ${yn}`;let r=jl(n).map(l=>Re(l.title).trim()).filter(Boolean),o=r.length?ln(t,r.join("  \xB7  "),166).slice(0,3):[],a=(Re(n.place)?174:188)-o.length*13-13;t.fillStyle="#bbb",t.font=`11px ${yn}`,Oa(Re(n.body)).join(" ").split(/\s+/).length>1&&ln(t,Oa(Re(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(l=>{t.fillText(l,19,s+4),s+=14}),o.length&&(t.fillStyle=tn(),t.font=`8px ${yn}`,t.fillText(pt("together").toUpperCase(),19,a),t.fillStyle="#e6e6e6",t.font=`10px ${yn}`,o.forEach((l,c)=>t.fillText(l,19,a+13+c*13))),Re(n.place)&&(t.fillStyle=tn(),t.font=`11px ${yn}`,t.fillText(Re(n.place).toUpperCase(),19,180))}))}function Vb(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${yn}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${yn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new wa(new Fr({map:Lu(new zr(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=2,l}var vi=document.createElement("div");vi.id="net-tip";vi.className="ui";vi.hidden=!0;document.body.appendChild(vi);function dm(n,e,t){vi.innerHTML=`<b>${ke(n.city||"")}</b>${n.titles.map(s=>`<span>${ke(s)}</span>`).join("")}`,vi.hidden=!1;let i=vi.getBoundingClientRect();vi.style.left=Math.min(e+14,qt-i.width-10)+"px",vi.style.top=Math.max(10,t-i.height-12)+"px"}function rc(){vi.hidden=!0}var yu=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Tn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=Oe.models.find(h=>h.id===this.def.model)||Oe.models[0];if(!t)return;let i=await Sb(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Tn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=f=>{let m=f.map||f.emissiveMap||null;return m?new Jt({map:m}):t.untextured==="white"?new Gs({color:15921906}):t.untextured==="black"?new Gs({color:2236962}):new Jt({color:ae.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new fn().setFromObject(a),u=h.getSize(new U),f=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(f),a.updateMatrixWorld(!0);let m=new fn().setFromObject(a),g=m.getCenter(new U);a.position.set(-g.x,-m.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new fn().setFromObject(a);h.max.y-h.min.y>ae.object3DMaxHeight&&a.scale.setScalar(ae.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Tn;c.rotation.y=(t.rotationY||0)*Si,c.add(a),this.container.add(c)}place(e){this.p.x=e*5*ae.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*ae.object3DDistance,this.container.position.copy(fu(this.p.x,0,this.p.z))}};function fm(n,e){let t=new qs;t.setPositions(n);let i=new Na(t,e);return i.computeLineDistances(),i}var _u=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Tn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null){let s=new zi(this.width,this.height);this.setBand(i);let r=new Bt(s,new Jt({map:e,side:kn})),o=new Bt(s,new Jt({map:t,side:dn}));r.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=ae.planeFrameDistance,this.height+=ae.planeFrameDistance;let a=this.width/2,l=this.height/2;this.frame=fm([-a,-l,0,a,-l,0,-a,-l,0,-a,l,0,a,-l,0,a,l,0,-a,l,0,a,l,0],pu),this.group.add(r,o,this.frame),this.meshes.push(r,o),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...gs(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Si,t.rotation.x=-e.rotX*Si,t.rotation.z=e.rotZ*Si,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand()}selectIt(){this.frame&&(this.frame.material=im,qa(.8,()=>{this.frame&&(this.frame.material=pu)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),en(this.thumb,ae.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){An(this.thumb);let i=Ji(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return en(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){An(this.thumb);let t=this.p2;en(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){en(this.thumb,ae.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>en(this.thumb,ae.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),An(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Bt(new zi(t,s),new Jt({map:e.tex,transparent:!0,depthWrite:!1,side:kn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&en(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),An(this.thumb),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!sm.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function tu(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Si;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function nu(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var iu=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Zr(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*xn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*xn(2*i))}),Zl={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:ae.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*ae.planeDisOrder+ae.planeDistance,z:ae.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Si+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>tu(n,e),move:(n,e,t,i)=>iu(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=ae;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>nu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>iu(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=ae,o=g=>{let x=n.angle*(g+1);return x-Math.cos(x)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,f=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:f*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{tu(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*xn(2*ae.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*xn(2*ae.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return ms(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=ac(n.def);return{x:i[0]+s[0],y:(ae.planeDistance+e.height+Math.pow(-1,t+1)*ae.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>nu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Zr(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*xn(2*ae.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=ae.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*ae.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Si+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>tu(n,e),move:(n,e,t,i)=>iu(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*ae.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>nu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Zr(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*xn(2*ae.cameraEaseSpeed)})}}},Gb=["fan","arc","map"],Lp=n=>Nu()&&Gb.includes(n.layout),Uu=()=>bs.zoom*bs.focus*Math.min(1,qt/900);function pm(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:qt-12,b:Wt-12},i=["slogan","logo","reel-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Wt>=qt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs")].filter(Boolean).forEach(r=>{r.left<qt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>qt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=qt-12),t.b-t.t<120&&(t.t=12,t.b=Wt-12),t}function Ip(n){let e=pm(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+ae.planeFrameDistance,o=n.h*n.k+ae.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let x=Math.ceil(u/g),p=g*a+(g-1)*c,d=x*l+(x-1)*c,M=Math.min(t/p,i/d);(!h||M>h.sc+1e-9)&&(h={cols:g,rows:x,gw:p,gh:d,sc:M})}let f=n.container.position.y-n.section.container.position.y,m=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-qt/2,fy:(e.t+e.b)/2-Wt/2,zg:200,gy:m+h.gh/2-f,yOff:f,dx:s?(r/2+102.5)/2:0}}var Wb=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*ae.planeDisOrder*.1,rotY:180}},su=2*Math.PI,Ou=n=>n+(((Math.PI-n)%su+su+Math.PI)%su-Math.PI);function Np(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>Wb(e,i),focus(e,t){let i=e.postViews[t];i&&(H.selected=t,H.degreeCamera=Ou(H.degreeCamera),H.cameraY=Jr(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===Zl.fan?i.turnAround("x",720):n===Zl.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var Dp=new U,Up=new U,xu=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=Zl[this.def.layout]||Zl.carousel,this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?Hb:kb[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Ua.text.size:Ua.image.size:Ua[this.card].size,this.k=Jb(this.def),this.container=new Tn,this.container.position.copy(e.container.position),Ms.add(this.container),this.postViews=this.posts.map((t,i)=>new _u(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Lp(this.def)&&(this.grid=Ip(this),this.L=this.gridL=Np(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Ot.map(d=>d.def.id)),t=new Map,i=(d,M,v)=>{if(!Zh(d))return;let P=(+d.lat).toFixed(1)+","+(+d.lon).toFixed(1),N=t.get(P);N||t.set(P,N={loc:d,city:d.city||"",titles:[],base:!1}),M&&!N.titles.includes(M)&&N.titles.push(M),v&&(N.base=!0)};if($h(Oe,this.def.id).forEach(d=>i(d.location,Re(d.title),!0)),Oe.posts.forEach(d=>{d.published&&e.has(d.section)&&d.section!==this.def.id&&d.spots.forEach(M=>i(M,Re(d.title)))}),!t.size)return;Wl.color.set(tn());let s=50,r=new Tn,o=[...t.values()],a=o.filter(d=>d.base),l=new hl(1,14,10),c={on:new Jt({color:tn()}),base:new Jt({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:$i+(ae.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(d=>{d.xz=ms(d.loc)}),o.forEach(d=>{d.from=d.base?null:a.length?a.map(M=>[M,Math.hypot(ms(M.loc)[0]-d.xz[0],ms(M.loc)[1]-d.xz[1])]).sort((M,v)=>M[1]-v[1])[0][0]:null,d.d=d.from?Math.hypot(ms(d.from.loc)[0]-d.xz[0],ms(d.from.loc)[1]-d.xz[1]):0}),o.sort((d,M)=>M.base-d.base||d.d-M.d);let h=70,u=null,f=-1;o.forEach(d=>{let M=o.filter(v=>Math.hypot(v.xz[0]-d.xz[0],v.xz[1]-d.xz[1])<h);M.length>f&&(f=M.length,u=M)});let m=u.reduce((d,M)=>d+M.xz[0],0)/u.length,g=u.reduce((d,M)=>d+M.xz[1],0)/u.length,x=new Gt;x.position.set(...gs(m,s,g)),r.add(x),this.net.focus=x;let p=[];o.forEach((d,M)=>{let[v,P]=d.xz,N=d.base?0:.15+M*.07,L=new Bt(l,d.base?c.base:c.on);L.scale.setScalar(d.base?7:4+Math.min(3,d.titles.length)),L.position.set(...gs(v,s,P)),r.add(L),L.userData={netNode:d},this.net.hits.push(L);let I=null,Z=0;if(d.from){let[J,oe]=ms(d.from.loc),ye=s+18+d.d*.32,F=2*ye-s,X=(J+v)/2,B=(oe+P)/2;Z=Math.max(12,Math.min(48,Math.round(d.d/6)));let ne=ee=>{let te=1-ee;return gs(te*te*J+2*te*ee*X+ee*ee*v,te*te*s+2*te*ee*F+ee*ee*s,te*te*oe+2*te*ee*B+ee*ee*P)},Q=[];for(let ee=0;ee<Z;ee++)Q.push(...ne(ee/Z),...ne((ee+1)/Z));let V=new qs;V.setPositions(Q),I=new Na(V,Wl),I.computeLineDistances(),V.instanceCount=0,r.add(I)}let T=null,R=1/0;if(d.city){for(let J of p){let oe=Math.max(Math.abs(J[0]-v)/80,Math.abs(J[1]-P)/22);oe<J[2]&&(R=Math.min(R,oe))}R>.06&&(T=Vb(d.city.toUpperCase()+(d.titles.length>1&&!d.base?" \xB7 "+d.titles.length:""),d.base),T.position.set(...gs(v,s+9,P)),r.add(T),p.push([v,P,R]))}this.net.items.push({dot:L,arc:I,segs:Z,label:T,thr:R,delay:N,base:d.base,ds:L.scale.x,ls:T?T.scale.clone():null,x:v,z:P})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2]),this.animeOpenPost(this.postViews[e],e),ae.planeSpeed>0){let i=$i+Eb;for(;$i<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*ae.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,en(e.thumb,r,{y:s.y,rotX:0},{delay:ae.planeSpeed/3,ease:"expoOut",onComplete:a}),en(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,en(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...gs(...i),...gs(...s)],o=this.lines[t];o?o.geometry.setPositions(r):(o=this.lines[t]=fm(r,nm),this.container.add(o))}async openInfo(e,t,i){let s=await Ol(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new zi(165,130),new Jt({map:s,side:On}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),en(o.p,ae.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),qa(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,ae.tween):t.moveToCamera(60,ae.tween),this.focusInfo||(this.focusInfo={mesh:new Bt(new zi(90,90),new Jt({side:On})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await Ol(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),qa(ae.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,An(i),en(i,ae.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(ae.tween/2),this.focusInfo&&(An(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Lp(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Ip(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Np(this.base)):this.base,r)return!0;let o=ae.tween*1.2,a=H.postOpen&&this.def.open==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);An(l.thumb),this.following.add(l),en(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let f=this.infos[c];f&&(An(f.p),en(f.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=no(),r=Uu(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=Ji()+bs.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;An(e.thumb),en(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;An(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Si)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,ae.cameraDistanceProportion/Ki),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*xn(ae.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,($i-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...gs(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Si)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Dp.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Up.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Dp).add(Up)}}async retexture(){this.net&&(Wl.color.set(tn()),this.net.mats.on.color.set(tn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex].forEach(a=>a&&a.dispose());return}let r=i.band?i.band.k:0;i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(qr===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose());let o=this.infos[t];if(o){let a=await Ol(this.posts[t],"place");if(!this.alive){a.dispose();return}let l=e(o.mesh,a);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await Ol(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(An(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),rc(),Ms.remove(this.container)}},js=[],Ce=null,Zs=ae.cameraEaseSpeed,ws=!1,$n=!1,_s=0,xs=0,Xl=0,ql=0,Cs=!1,Bn=!1,Qi=()=>js[H.currentSection];function Xb(){let n=ae.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function qb(){let n=ae.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var $b={map:58},ac=(n=(Qi()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||$b[n.layout]||100)/100)),si=()=>Ce&&Ce.L.grid&&Ce.grid&&Ce.section===Qi()?Ce:null,Yb=n=>Uu()/n.sc*Math.min(1,ae.cameraDistanceProportion/Ki);function oc(n){let e=n.grid,t=Yb(e),i=t/Uu();return{d:Math.max(20,t-bs.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var Ji=()=>{let n=si();return n?oc(n).d:ae.cameraDistance*ac()},lc=()=>{let n=si();return n?oc(n).ty:ae.cameraTargetHeight*(((Qi()||{}).def||{}).layout==="map"?ac()*.62:1)},Op=()=>{let n=si();return n?oc(n).ty:ae.cameraHeight*(((Qi()||{}).def||{}).layout==="map"?ac()*1.6:1)},Fl=new U;function jb(){return!er()||si()||ae.cameraDistanceProportion>=Ki?0:Math.min(1,(1-ae.cameraDistanceProportion/Ki)*1.25)}function Zb(){let n=Ce&&Ce.net&&Ce.net.focus;return n?(n.getWorldPosition(Fl),{x:Fl.x,y:Fl.y,z:-Fl.z}):null}function to(){let n=Qi(),e=jb(),t=e?Zb():null,i=lc(),s=si();return s?{x:n.p.x-oc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var Jr=()=>{if(!er()||si())return Op();let n=Math.min(1,ae.cameraDistanceProportion/Ki);return to().ty+(Op()-lc())*Math.pow(n,.55)},Jb=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),no=()=>{let n=to();return{d:Ji(),x:n.x,z:n.z,ty:n.ty}},qn=null;function mm(n){if(!n||!Ce||!Ce.relayout())return;An(yt),An(Rn),qn=n,si()&&(H.degreeCamera=Ou(H.degreeCamera)),H.cameraY=Jr(),$n=!0,Zs=ae.cameraEaseSpeed;let e=H.postOpen&&H.section.def.open==="focus3d"&&Ce.postViews[H.selected];e&&e.ready&&(Ce.L.grid?Ce.gridToCamera(e,ae.tween/2):e.moveToCamera(60,ae.tween/2))}var Kb=0;function Qb(){if(++Kb%20||!Cs||H.postOpen||ws||!Bn)return;let n=si();if(!n)return;let e=pm();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&mm(qn||no())}function eM(){if(!qn)return;let n=no(),e=xn(ae.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-qn[i];Math.abs(s)>.05?(qn[i]+=s*e,t=!1):qn[i]=n[i]}Zr(Rn)||(Rn.x=qn.x,Rn.y=qn.ty,Rn.z=qn.z),!ws&&!$n&&!Zr(yt)&&vu(),t&&(qn=null)}function vu(){let n=qn||no();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function cc(){js.forEach((n,e)=>{e===H.currentSection?n.container.parent||Ms.add(n.container):n.container.parent&&Ms.remove(n.container)}),ws=!1,$n=!1,vn.classList.remove("dragging"),qr=null,jr=null,Ce&&Ce.destroy(),qn=null,Ce=new xu(Qi()),Jl(H.selected),H.actualDeg=H.degreeCamera,tM()}function tM(){let n=to();H.cameraY=Jr(),Cb(Ji()*Math.sin(H.degreeCamera)+n.x,H.cameraY,Ji()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,ae.cameraSpeed)}function Jl(n){H.selected=n,Ce&&Ce.focus(n)}function ru(n){!Ce||!Ce.n||($n=!0,Ce.checkPostSelected(),Zs=ae.cameraKeyboardSpeed,Jl(n==="NEXT"?Ce.goNext():Ce.goPrev()))}function hc(){let t=ae.cameraDistanceProportion/280;ae.cameraDistance=Math.round((Wt<680?1e3-Wt:320)*t)}function gm(){if($n=!1,hc(),!Cs)return;let n=to();if(H.postOpen&&H.section.def.open==="focus3d"&&Ce&&Ce.postViews[H.selected]){let t=Ce.postViews[H.selected];Ce.L.grid?Ce.gridToCamera(t,ae.tween/2):t.moveToCamera(100,0)}let e=er()||si();Rb(n.x+Ji()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+Ji()*Math.cos(H.actualDeg),ae.cameraSpeed/2),e&&Pu(n.x,n.ty,n.z,ae.cameraSpeed/2)}function nM(){if(!Bn){Math.abs(yt.y-H.cameraY)>.007&&!Zr(yt)&&(yt.y-=(yt.y-H.cameraY)*xn(ae.cameraEaseSpeed));return}if(ws){Zs=ae.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(_s-Xl)/150,H.actualDeg-=(H.actualDeg-n)*xn(Zs),vu(),H.cameraY+=(xs-ql)*2;let e=ae.cameraHeight,t=er()?to().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*xn(Zs),ae.animationMode&&Ce&&Ce.movePosts((Xl-_s)/Math.max($l,.25),(ql-xs)/Math.max($l,.25),Zs),Xl=_s,ql=xs}else $n?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&($n=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*xn(ae.cameraEaseSpeed),vu(),yt.y-=(yt.y-H.cameraY)*xn(Zs),ae.animationMode&&Ce&&Ce.movePosts(0,0,ae.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*xn(ae.cameraEaseSpeed))}function iM(){yt.zoom=6;let e=Ce&&Ce.postViews[0]&&Ce.postViews[0].p2.y||ae.planeDistance;yt.y=e+100,Rn.y=e+100,Pu(Rn.x,lc(),Rn.z,1),Bn=!1,en(yt,1,{zoom:bs.zoom},{ease:"expoOut"}),setTimeout(()=>{Bn=!0},1*1e3+50)}var au=new U,ou=new U,Fa=new U,Ba=1;function sM(){au.copy(fu(yt.x,yt.y,yt.z)),ou.copy(fu(Rn.x,Rn.y,Rn.z)),Fa.subVectors(ou,au),Fa.lengthSq()<1e-6&&Fa.set(0,0,-1),Fa.normalize();let n=er()&&!si()?Math.min(1,ae.cameraDistanceProportion/Ki):1;Ba+=Math.abs(n-Ba)<.001?n-Ba:(n-Ba)*xn(ae.cameraEaseSpeed),ni.position.copy(au).addScaledVector(Fa,-bs.focus*Ba),ni.lookAt(ou);let e=Math.min(1,qt/900),t=2*Math.atan(Wt/2/(yt.zoom*bs.focus*e))/Si;Math.abs(ni.fov-t)>1e-4&&(ni.fov=t,ni.updateProjectionMatrix())}function ym(){qt=window.innerWidth,Wt=window.innerHeight,Ts.setSize(qt,Wt,!1),ni.aspect=qt/Wt,ni.updateProjectionMatrix(),sm.forEach(n=>n.resolution.set(qt,Wt))}var Fn=document.getElementById("menu"),Es=document.getElementById("slogan"),_m=document.getElementById("langs"),uc=[];function rM(){Fn.innerHTML="",uc=Ot.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Re(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&Bn&&io(e)}),t.appendChild(i),Fn.appendChild(t),i}),Fn.style.setProperty("--n",Ot.length),Fu()}function Fu(){uc.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function aM(){uc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Fn.hidden=!1,_m.hidden=!1,setTimeout(()=>Fn.classList.add("ready"),(Ot.length+1)*200)}var oM=1.44;function bu(n){let e=n==="project"?{width:522,x:79,colW:362}:{width:389,x:17,colW:353},t=(qt-2*ae.margin)/(ct.scale||1);if(t>=e.width)return e;let i=Math.max(240,Math.floor(t)),s=n==="project"?26:17;return{width:i,x:s,colW:i-2*s}}function xm(){let n=Wt<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=Es.offsetTop+Es.offsetHeight+(n?1:2)*ae.margin,t=ct.height+12,i=n?24:(Fn.offsetHeight||90)+70,s=Math.max(n?.4:.5,Math.min(oM,(Wt-e-i)/t));ct.scale=s,nn.style.top=e+"px",nn.style.transform=s!==1?`scale(${s.toFixed(3)})`:"",nn.style.width=s!==1?Math.ceil((qt-ae.margin)/s)+"px":"",nn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Wt-(e+t*s)<Fn.offsetHeight+60)}function Ya(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&ct.open&&ct.height>100){let n=Es.offsetTop+Es.offsetHeight+ct.height*(ct.scale||1)+2*ae.margin+30;n=Math.min(n,Wt-Fn.offsetHeight-52),Fn.style.left=ae.margin+"px",Fn.style.top=n+"px"}else qt<=700||Wt<=520?(Fn.style.left=ae.margin+"px",Fn.style.top=Math.round(Wt-(Fn.offsetHeight||86)-56)+"px"):(Fn.style.left=3*ae.margin+"px",Fn.style.top=Math.round(Wt/1.4)+"px")}var Fp=(n,e=!1)=>Tp(n,Oe.settings,e);function Mu(){let n=Oe.settings,e=n.accent||"#ffcc00",t=n.logo?_n(n.logo):Fp(ii?"#ffffff":e,ii);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=t,s.classList.toggle("raw",!n.logo))}),lM(n.logo?t:ii?Fp(e):t)}function lM(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}function Bu(){let n=Oe.settings;lm(),document.documentElement.lang=Yi,document.documentElement.classList.toggle("neg",ii),document.title=n.name||"Hand Coded";let e=n.taglines&&(n.taglines[Yi]||n.taglines.en)||[],t=e.length?`<b class="wm">${ke(e[0])}</b>${e.slice(1).map(a=>`<span>${ke(a)}</span>`).join("")}`:ke(n.name);if(Es.innerHTML=e.length?t.replace('<b class="wm">',`<b class="wm" role="link" tabindex="0" title="${ke(pt("homeLink"))}">`):t,document.getElementById("home-slogan").innerHTML=t,Mu(),!n.logo&&document.fonts){let a=Wi(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{Oe.settings.logo||Mu()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo","home-logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(ii)),l.alt=l.title=pt(ii?"toPos":"toNeg")):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.alt="",l.removeAttribute("title")))});let s=document.getElementById("bs");s.placeholder=Re(n.home.placeholder),s.setAttribute("aria-label",pt("bsLabel")),zu(),document.getElementById("bs-eg").textContent=Re(n.home.example),document.getElementById("bs-sent").textContent&&(document.getElementById("bs-sent").textContent=pt("sent"));let r=document.getElementById("offices");r.innerHTML="",(n.offices||[]).forEach(a=>{let l=document.createElement("section");l.innerHTML=`<h3>${ke(Re(a.name))}</h3>${(a.lines||[]).map(c=>`<p>${ke(c)}</p>`).join("")}${a.mail?`<p><a href="mailto:${ke(a.mail)}">${ke(a.mail)}</a></p>`:""}`,r.appendChild(l)}),(n.social||[]).forEach(a=>{if(!a.url)return;let l=document.createElement("section");l.innerHTML=`<h3>${ke(a.label)}</h3><p><a href="${ke(a.url)}" target="_blank" rel="noopener">${ke(a.url.replace(/^https?:\/\/(www\.)?/,""))}</a></p>`,r.appendChild(l)}),Ks.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),vs.textContent=Re(n.home.enter)||pt("enter"),_M(),Qs(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=pt(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",pt("keys")),Ha.setAttribute("aria-label",pt("prev")),Kl.setAttribute("aria-label",pt("next"));let o=n.langs&&n.langs.length?n.langs:Gi;[_m,document.getElementById("home-langs")].forEach(a=>{a.innerHTML="",!(o.length<2)&&o.forEach(l=>{let c=document.createElement("button");c.type="button",c.textContent=l.toUpperCase(),c.setAttribute("aria-pressed",String(l===Yi)),c.setAttribute("aria-label",pt("lang")+" "+l.toUpperCase()),c.addEventListener("click",()=>vm(l)),a.appendChild(c)})}),document.documentElement.style.setProperty("--accent",tn()),document.documentElement.style.setProperty("--accent-raw",Oe.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",am(Oe.settings.accent||"#ffcc00")),zm()}function zu(){let n=document.getElementById("bs");if(!n||!n.offsetWidth)return;n.style.fontSize="";let e=getComputedStyle(n),t=parseFloat(e.fontSize),i=n.clientWidth-parseFloat(e.paddingLeft)-parseFloat(e.paddingRight)-6,s=document.createElement("canvas").getContext("2d");s.font=`${e.fontWeight} ${t}px ${e.fontFamily}`;let r=parseFloat(e.letterSpacing)||0,o=s.measureText(n.placeholder).width+r*n.placeholder.length;o>i&&(n.style.fontSize=Math.max(16,Math.floor(t*i/o))+"px")}window.addEventListener("resize",()=>{Pn||zu()});function vm(n){if(n!==Yi){Yi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(Bu(),Cs){uc.forEach((i,s)=>{i.textContent=Re(Ot[s].def.name)}),fc();let e=H.postOpen,t=H.selected;ui(),H.selected=t,cc(),e&&qa(.6,()=>Za(t))}}}var dc=document.getElementById("cats"),Js=document.getElementById("cat-box"),Bp=document.getElementById("cat-list"),bm=document.getElementById("cat-name"),ja=document.getElementById("cat-open"),Ha=document.getElementById("pg-prev"),Kl=document.getElementById("pg-next");function fc(){let n=H.data,e=n.categoryList;Js.hidden=e.length<=1,Bp.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${ke(Re(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Su(),hM(t.id)}),i.appendChild(s),Bp.appendChild(i)}),bm.innerHTML=`${ke(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,Mm(),Su()}var Bl=document.getElementById("pg-num");function Mm(){let n=H.data;Ha.disabled=!n.hasNewer(),Kl.disabled=!n.hasOlder(),Ha.hidden=Kl.hidden=!n.hasNewer()&&!n.hasOlder(),Bl&&(Bl.hidden=Ha.hidden,Bl.textContent=`${n.page}/${n.pages}`,Bl.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function Su(){clearTimeout(Yr),Js.classList.remove("open"),ja.setAttribute("aria-expanded","false")}var Yr=0,Sm=-1e9;function wm(n=.7){clearTimeout(Yr),!(Js.hidden||!H.data||H.data.categoryList.length<=1)&&(Yr=setTimeout(()=>{!Pn||H.postOpen||dc.classList.contains("hidden")||(Js.classList.add("open"),ja.setAttribute("aria-expanded","true"),Yr=setTimeout(()=>{Js.classList.remove("open"),ja.setAttribute("aria-expanded","false")},2600))},n*1e3))}Js.addEventListener("pointerenter",()=>clearTimeout(Yr));ja.addEventListener("click",()=>{clearTimeout(Yr);let n=Js.classList.toggle("open");ja.setAttribute("aria-expanded",String(n))});Ha.addEventListener("click",()=>{Bn&&Cm("newer")});Kl.addEventListener("click",()=>{Bn&&Cm("older")});var Rs=document.getElementById("kb"),ku=document.getElementById("kb-toggle"),Em=null;function wu(){Rs.classList.add("open"),ku.setAttribute("aria-expanded","true")}function Ql(){Rs.classList.remove("open"),ku.setAttribute("aria-expanded","false")}ku.addEventListener("click",()=>{clearTimeout(Em),Rs.classList.contains("open")?Ql():wu()});Rs.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>Lm({code:n.dataset.k,preventDefault(){}})));function Xi(n){let e=Rs.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Tm(){Rs.querySelector(".key.anim").classList.toggle("off",!ae.animationMode)}var Hu=document.getElementById("whiteboard"),nn=document.getElementById("post2d"),Wr=document.getElementById("strip");function zp(n,e){if(!n||Oe.settings.signImages===!1)return"";let t=[Re(n.title).trim(),(n.author||Oe.settings.name||"").trim()].filter(Boolean);return e&&t.push(pt("photo")+" "+e.trim()),t.join(" \xB7 ")}var cM=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),pc=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},mc=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},Vu=n=>pc(n)?"youtube":mc(n)?"vimeo":cM(n)?"video":"image",ct={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,nn.classList.remove("closing"),nn.hidden=!1,xm(),this.geomKey=JSON.stringify(bu("project")),this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),t.slice(1).forEach(s=>this.addMedia(s.src,355,s.credit,!0,s.caption)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Wr.style.transform="translateX(0px)"},addRelations(n){let e=hm(n);if(!e.length)return;let t=Yh(Oe,n).length>0;this.addPanel("relh",236,`<h2 class="ttl">${ke(pt(t?"skillProjects":"together"))}.</h2><span class="n">${e.length}</span>`),e.forEach(i=>{let s=$a(i),r=[i.date,Re(i.place)].filter(Boolean).join(" | "),o=this.addPanel("proj",248,`<button type="button" class="go" data-go="${ke(i.id)}" aria-label="${ke(Re(i.title))}">`+(s?`<img src="${ke(_n(s))}" alt="" draggable="false">`:"")+`<span class="mono"${s?" hidden":""}>${ke(mu(Re(i.title)))}</span><span class="cap"><span class="t">${ke(Re(i.title).trim())}</span>${r?`<span class="m">${ke(r)}</span>`:""}</span></button>`),a=o.querySelector("img");a&&a.addEventListener("error",()=>{a.remove(),o.querySelector(".mono").hidden=!1})})},addLogos(n){let e=n.logos.length,t=e<=4?2:3,i=Math.ceil(e/t),s=68+t*118,r=this.addPanel("logos",s,`<span class="lbl">${ke(pt("partners"))}</span><div class="grid" style="grid-template-columns:repeat(${t},110px)">`+n.logos.map(o=>`<span class="lg"><img src="${ke(_n(o))}" alt="" draggable="false"></span>`).join("")+"</div>");i>3&&(r.querySelector(".grid").style.gridAutoRows=Math.floor(230/i-6)+"px")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(pt("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${ke(t)}</span><a href="${ke(e)}" target="_blank" rel="noopener"><span class="host">${ke(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Wr.appendChild(i),this.panels.push(i);let s=ae.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addMedia(n,e=355,t="",i=!0,s=null){let r=Vu(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:_n(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",pt("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=_n(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?Re(s).trim():"";if(h){let u=h.search(/[.:]\s/),f=u>0?h.slice(0,u+1):"",m=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(f?`<b>${ke(f)}</b> `:"")+ke(m),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?pc(n):mc(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:this.post&&this.post.thumb?_n(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",pt("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${a}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s}=bu(e),r=Re(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=Re(n.subtitle),a=H.section.def,l=n.tags.filter(d=>d!=="featured").map(d=>a.tags.find(M=>M.id===d)).filter(Boolean).map(d=>Re(d.label)),c=l.length?`${ke(pt("postedIn"))} <span>${l.map(ke).join(", ")}</span>`:"",h=ke([n.date,Re(n.place)].filter(Boolean).join(" | ")),u=jh(Re(n.body)),f=document.createElement("div");f.className="txt",f.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(f),f.innerHTML=`<h2 class="ttl" style="position:static">${ke(r)}</h2>${o?`<p class="stl" style="position:static">${ke(o)}</p>`:""}`;let m=f.firstChild.offsetHeight,g=o?f.lastChild.offsetHeight+6:0,x=e==="project"?Db(n):[],p="";if(x.length){let d=(Ot.find(M=>M.def.id===x[0].section)||{}).def;p=`${ke((d?Re(d.name):pt("skills")).trim())} ${x.map((M,v)=>`<span class="it"><button type="button" class="go" data-go="${ke(M.id)}">${ke(Re(M.title).trim())}</button>${v<x.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let d=`<div class="fecha">${h}</div>${c?`<div class="posted">${c}</div>`:""}${p?`<div class="posted skl-tags">${p}</div>`:""}`;f.innerHTML=`<div class="meta" style="position:static">${d}</div>`;let M=f.firstChild.offsetHeight,v=322,P=v-M,N=34+m+6,L=34+m+g+20,I=lu(u,s,[335-L,242],f);f.innerHTML=`<div class="body" style="position:static">${I[I.length-1]}</div>`;let Z=I.length===1?L:93;if(I[I.length-1]&&Z+f.firstChild.offsetHeight>P-12){let T=lu(I.pop(),s,[P-12-Z,P-12-93],f);I.push(...T)}I.forEach((T,R)=>{let J=R===I.length-1;this.addPanel("txt",t,(R===0?`<h2 class="ttl" style="left:${i}px;top:34px;width:${s}px">${ke(r)}</h2>${o?`<p class="stl" style="left:${i}px;top:${N}px;width:${s}px">${ke(o)}</p>`:""}`:"")+`<div class="body" style="left:${i}px;top:${R===0?L:93}px;width:${s}px">${T}</div>`+(J?`<div class="meta" style="left:${i}px;top:${P}px;width:${s}px">${d}</div>`:""))})}else{let d=13+m+4,M=13+m+g+10,v=M+20,P=v+18+20;lu(u,s,[355-P-14,327],f).forEach((L,I)=>{this.addPanel("txt",t,(I===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${ke(r)}</h2>${o?`<p class="stl" style="left:${i}px;top:${d}px;width:${s}px">${ke(o)}</p>`:""}<div class="fecha" style="left:${i}px;top:${M}px;width:${s}px">${h}</div><div class="posted" style="left:${i}px;top:${v}px;width:${s}px">${c}</div>`:"")+`<div class="body" style="left:${i}px;top:${I===0?P:14}px;width:${s}px">${L}</div>`)})}f.remove()},addTeam(n){let e=n.team.map(a=>Oe.posts.find(l=>l.id===a)).filter(Boolean),t=e.map(a=>Re(a.title)).concat(n.credits?[n.credits]:[]).join(", "),i=this.addPanel("team",576,`<h2 class="ttl">${ke(pt("who"))}</h2><div class="names">${ke(pt("leftToRight"))} <span>${ke(t)}.</span></div>`),s=i.querySelector(".in"),r=s.querySelector(".names"),o=Math.max(160,Math.ceil(r.offsetTop+r.offsetHeight+14));e.forEach((a,l)=>{let c=document.createElement("button");c.type="button",c.className="face",c.style.left=69+l%6*59+"px",c.style.top=o+Math.floor(l/6)*55+"px";let h=!a.thumb&&(gu(a).find(f=>f!==n)||gu(a)[0]),u=h?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${ke(_n($a(h))).replace(/'/g,"%27")}') center/cover"`:"";c.innerHTML=(a.thumb?`<img src="${ke(_n(a.thumb))}" alt="" draggable="false">`:`<span class="mono"${u}>${ke(mu(Re(a.title)))}</span>`)+`<span class="tab">${ke(Re(a.title))}.<small>${ke(Re(a.subtitle))}</small></span>`,c.setAttribute("aria-label",Re(a.title)),["pointerenter","focus"].forEach(f=>c.addEventListener(f,()=>c.classList.add("big"))),["pointerleave","blur"].forEach(f=>c.addEventListener(f,()=>c.classList.remove("big"))),s.appendChild(c)}),i.style.overflow="visible"},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((qt-2*ae.margin)/(this.scale||1)))),`<div class="cn">${ke(Re(n.title))}.</div><div class="ac">${ke(Re(n.subtitle))}</div><div class="site">${n.link?`<a href="${ke(n.link)}" target="_blank" rel="noopener">${ke(e)}</a>`:""}</div><div class="ad">${jh(Re(n.body))}</div><div class="ct">${ke(Re(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=ae.animationMode?.8:0;return nn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Wr.querySelectorAll("video").forEach(n=>n.pause()),Wr.innerHTML="",this.panels=[],nn.hidden=!0,nn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(ec-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*xn(ae.easing),this.xprev=ec}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*xn(ae.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);Wr.style.transform=`translateX(${Math.round(this.x)}px)`}}};function lu(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(f=>{if(f.nodeType===1&&["P","UL","OL","H3"].includes(f.nodeName)){a=null,f.textContent.trim()&&o.push(f);return}if(f.nodeType===1&&f.nodeName==="BR"){a=null;return}f.nodeType===3&&!f.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(f.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{l.push(s.innerHTML),s.innerHTML="",c++};for(let f of o){let m=f.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),f.nodeName==="UL"||f.nodeName==="OL"||f.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(f.cloneNode(!0));continue}let g=[];(function d(M,v){M.childNodes.forEach(P=>{P.nodeType===3?P.textContent.split(/(\s+)/).forEach(N=>N&&g.push({w:N,path:v})):d(P,[...v,P])})})(f,[]);let x=document.createElement("p");s.appendChild(x);let p=({w:d,path:M})=>{let v=x;for(let P of M){let N=v.lastChild;(!N||N.nodeType!==1||N.dataset.src!==P.outerHTML)&&(N=P.cloneNode(!1),N.dataset.src=P.outerHTML,v.appendChild(N)),v=N}v.appendChild(document.createTextNode(d))};for(let d of g)if(p(d),s.offsetHeight>h()){let M=function v(P){return P.lastChild&&P.lastChild.nodeType===1?v(P.lastChild):P}(x);M.removeChild(M.lastChild),u(),x=document.createElement("p"),s.appendChild(x),d.w.trim()&&p(d)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(f=>f.replace(/ data-src="[^"]*"/g,""))}var ec=0,qi=null;nn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(qi={id:n.pointerId,x:n.clientX,y:n.clientY},ec=n.clientX)});nn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(qi||ct.dragging)){Kr();return}if(ec=n.clientX,!qi||n.pointerId!==qi.id||ct.dragging)return;let e=n.clientX-qi.x,t=n.clientY-qi.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){ct.dragging=!0,ct.xprev=qi.x,ct.finalpos=ct.x,ct.vel=0;try{nn.setPointerCapture(n.pointerId)}catch{}nn.classList.add("grabbing")}});nn.addEventListener("click",n=>{ct.justDragged&&(n.preventDefault(),n.stopPropagation(),ct.justDragged=!1)},!0);var Kr=()=>{ct.dragging&&(ct.justDragged=!0,setTimeout(()=>{ct.justDragged=!1},0),ct.finalpos+=(ct.vel||0)*10),ct.vel=0,qi=null,ct.dragging=!1,nn.classList.remove("grabbing")};nn.addEventListener("pointerup",Kr);nn.addEventListener("pointercancel",Kr);nn.addEventListener("lostpointercapture",n=>{n.target===nn&&Kr()});window.addEventListener("pointerup",()=>{(qi||ct.dragging)&&Kr()});Hu.addEventListener("pointerdown",()=>Ja());function io(n=-1,e=0){em(),n===-1&&(n=H.currentSection||0),ui(),n!==H.currentSection&&Xu(),H.currentSection=n,H.resetData(),H.selected=e,cc(),Fu(),fc(),wm(performance.now()-Sm<1500?2.2:.7);try{history.replaceState(null,"","#"+H.section.def.id)}catch{}}function Am(){ui(),H.selected=0,cc(),Mm()}function Cm(n){(n==="newer"?H.data.newer():H.data.older())&&Am()}function hM(n){H.data.changeCategory(n),bm.textContent=H.data.currentCatName,Am(),fc()}function Za(n){ui(),H.selected=n,za()}var kp=0;function Rm(n){let e=Oe.posts.find(h=>h.id===n),t=e?Ot.findIndex(h=>h.def.id===e.section):-1;if(t<0||!Bn)return;em(),ui();let i=t!==H.currentSection;i&&Xu(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory("");let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Ce){Za(l);return}H.selected=l,cc(),Fu(),fc(),i&&wm();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}let c=++kp;qa(.5,()=>{c===kp&&H.data===s&&s.posts[l]===e&&Za(l)})}Wr.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Rm(e.dataset.go))});function za(){!Ce||!H.data.posts[H.selected]||(so(null),ui(),H.postOpen=!0,H.section.def.open==="strip"?(Hu.hidden=!1,ct.build(H.data.posts[H.selected],H.section.def.card),dc.classList.add("hidden"),ws=!1,vn.classList.remove("dragging"),$n=!0,Jl(H.selected)):($n=!0,Jl(H.selected),Ce.openPost3D()),Ya())}function Ja(){H.postOpen&&(H.postOpen=!1,ct.open?(ct.close(),Hu.hidden=!0,dc.classList.remove("hidden")):Ce&&Ce.closePost3D(),Ya())}function ui(){H.postOpen&&Ja()}function uM(){Kp(!ae.animationMode),Tm(),Ce&&Ce.resetPostPosition(),$n=!0}var Ki=ae.cameraDistanceProportion,er=()=>((Qi()||{}).def||{}).layout==="map",dM=()=>er()?60:ae.cameraZoomMin;function Gu(){ae.cameraDistanceProportion<ae.cameraZoomMax&&(ae.cameraDistanceProportion=Math.min(ae.cameraZoomMax,Math.trunc(ae.cameraDistanceProportion*1.5)),Pm())}function Wu(){ae.cameraDistanceProportion>dM()&&(ae.cameraDistanceProportion=Math.trunc(ae.cameraDistanceProportion/1.5),Pm())}function Pm(){(er()||si())&&(H.cameraY=Jr()),gm()}function Xu(){ae.cameraDistanceProportion!==Ki&&(ae.cameraDistanceProportion=Ki,hc())}var Hp=!1;function Lm(n){if(!Bn)return;Hp||(Hp=!0,wu(),Em=setTimeout(Ql,6e3));let e=H.postOpen&&ct.open,t=H.postOpen&&!ct.open;switch(n.code){case"ArrowLeft":Xi("ArrowLeft"),e?ct.action("LEFT"):(ui(),ru("PREVIOUS"),t&&za());break;case"ArrowRight":Xi("ArrowRight"),e?ct.action("RIGHT"):(ui(),ru("NEXT"),t&&za());break;case"ArrowUp":Xi("ArrowUp"),e||Xb();break;case"ArrowDown":Xi("ArrowDown"),e||qb();break;case"Tab":Xi("Tab"),e?(Ja(),ru("NEXT"),za()):io((H.currentSection+1)%Ot.length);break;case"KeyK":Rs.classList.contains("open")?Ql():wu();break;case"KeyA":Xi("KeyA"),uM();break;case"Equal":case"NumpadAdd":Xi("Equal"),e||Wu();break;case"Minus":case"NumpadSubtract":Xi("Minus"),e||Gu();break;case"Space":Xi("Space"),Ce&&Ce.checkPostSelected(),H.postOpen?Ja():za();break;case"Escape":ui();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Pn||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||Lm(n)});var Vp=new Ml,Gp=new Ke;function tc(n,e){if(!Cs||!Ce)return null;Gp.set(n/qt*2-1,-(e/Wt)*2+1),Vp.setFromCamera(Gp,ni);let t=Vp.intersectObjects([...Qi().blockers,...Ce.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:fM(n,e)||(t?t.object.userData:null)}var zl=new U;function fM(n,e){if(!Ce||!Ce.net)return null;let t=null,i=14;for(let s of Ce.net.hits){if(!s.visible)continue;s.getWorldPosition(zl).project(ni);let r=(zl.x+1)/2*qt-n,o=(1-zl.y)/2*Wt-e,a=Math.hypot(r,o);a<i&&zl.z<1&&(i=a,t=s.userData)}return t}var Cn=null,hi=null,Eu=0,Tu=0;vn.addEventListener("pointerdown",n=>{if(!Bn||Cn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&wi.size>0)return;_s=Eu=n.clientX,xs=Tu=n.clientY;let e=tc(n.clientX,n.clientY);ui(),hi=e&&e.post?e:null,hi&&hi.face==="back"&&(hi.post.view.focus(hi.post.id_),$n=!0),Cn=n.pointerId,vn.setPointerCapture(n.pointerId),vn.classList.add("dragging"),Xl=_s,ql=xs,$n=!1,ws=!0});function tr(n,e=!1){if(n.pointerId===Cn){if(Cn=null,vn.classList.remove("dragging"),ws&&($n=!0,ws=!1,si()&&(H.degreeCamera=Ou(H.degreeCamera),H.cameraY=Jr())),e){hi=null;return}if(hi&&hi.face==="front"&&Math.hypot(n.clientX-Eu,n.clientY-Tu)<6){let t=tc(n.clientX,n.clientY);t&&t.post===hi.post&&Za(t.post.id_)}else if(!hi&&Math.hypot(n.clientX-Eu,n.clientY-Tu)<6){let t=tc(n.clientX,n.clientY);t&&t.netNode?dm(t.netNode,n.clientX,n.clientY):rc()}hi=null}}vn.addEventListener("pointerup",tr);vn.addEventListener("pointercancel",n=>tr(n,!0));vn.addEventListener("lostpointercapture",n=>{n.pointerId===Cn&&tr(n,!0)});window.addEventListener("pointerup",n=>{Cn!==null&&n.pointerId===Cn&&n.target!==vn&&tr(n,!0)});window.addEventListener("blur",()=>{Cn!==null&&tr({pointerId:Cn},!0),Kr()});var cu=!1,qr=null,jr=null,Im=()=>Nu()&&Bn&&Ce&&["carousel","spiral"].includes(Ce.def.layout);function qu(){return H.postOpen||!Ce?null:jr&&jr.view===Ce?jr:Im()?(Ce.checkPostSelected(),Ce.postViews[H.selected]||null):null}var pM=0;function mM(){++pM%6===0&&Im()&&so(qu())}function so(n){qr!==n&&(qr&&qr.hover(!1),qr=n,n&&n.hover(!0))}vn.addEventListener("pointerleave",()=>{jr=null,so(qu())});vn.addEventListener("pointermove",n=>{if(Cn!==null&&n.pointerId===Cn&&n.pointerType==="mouse"&&n.buttons===0){tr(n,!0);return}Cn!==null&&n.pointerId!==Cn||(_s=n.clientX,xs=n.clientY,Cn===null&&n.pointerType==="mouse"&&!cu&&(cu=!0,requestAnimationFrame(()=>{cu=!1;let e=tc(_s,xs);vn.classList.toggle("hover",!!(e&&e.post)),jr=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,so(qu()),e&&e.netNode&&!H.postOpen?dm(e.netNode,_s,xs):rc()})))});var Wp=0,wi=new Map,$r=null,Nm=()=>{let[n,e]=[...wi.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Pn||ct.open||!wi.size&&n.target!==vn||(wi.set(n.pointerId,{x:n.clientX,y:n.clientY}),wi.size===2&&(Cn!==null&&tr({pointerId:Cn},!0),$r={last:Nm()}))});window.addEventListener("pointermove",n=>{if(!wi.has(n.pointerId)||(wi.set(n.pointerId,{x:n.clientX,y:n.clientY}),!$r||wi.size<2||!Bn))return;let e=Nm(),t=e/$r.last;t>1.15?(Wu(),$r.last=e):t<1/1.15&&(Gu(),$r.last=e)});var gM=n=>{wi.delete(n.pointerId),wi.size<2&&($r=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,gM));vn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!Bn||e-Wp<220||!n.deltaY||(Wp=e,n.deltaY<0?Wu():Gu())},{passive:!1});window.addEventListener("resize",()=>{let n=ji(),e=Cs&&Ce?qn||no():null;ym(),gm(),Ya(),mm(e),ji()!==n&&Ce&&Ce.retexture(),Hm(),Um(),ct.open&&(xm(),clearTimeout(ct.relayout),ct.relayout=setTimeout(()=>{ct.open&&ct.post&&JSON.stringify(bu("project"))!==ct.geomKey&&(ct.build(ct.post,H.section.def.card),Ya())},250))});function Xp(){if(Oe.settings.negativeToggle!==!1){if(ii=!ii,!Xt)try{localStorage.setItem("hc-neg",ii?"1":"0")}catch{}Bu(),Ce&&Ce.retexture()}}["logo","home-logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Xp),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Xp())}))});var ge=null,yM=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function _M(){let n=(Oe.settings.showreel||"").trim();if(!ge){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ge={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>xM()),ge.x.addEventListener("click",kl),i.querySelector(".scrim").addEventListener("click",kl),ge.snd.addEventListener("click",()=>Dm(!ge.muted)),window.addEventListener("keydown",s=>{if(ge.open){if(s.code==="Escape")s.preventDefault(),kl();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ge.player||s.source!==ge.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ge.muted&&(ge.muted=r.info.muted,Ka())})}ge.btn.hidden=!n,ge.btn.setAttribute("aria-label","Showreel"),ge.x.setAttribute("aria-label",pt("close")),n!==ge.src&&(ge.open&&kl(!0),ge.src=n,ge.kind=n?Vu(n):"",ge.vid.innerHTML="",ge.player=null);let e=ge.kind==="youtube"?`https://www.youtube.com/watch?v=${pc(n)}`:ge.kind==="vimeo"?`https://vimeo.com/${mc(n)}`:"";ge.ext.hidden=!e,e&&(ge.ext.href=e,ge.ext.textContent=(ge.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Ka()}function Ka(){ge&&(ge.snd.innerHTML=yM(!ge.muted)+`<span>${pt(ge.muted?"soundOn":"soundOff")}</span>`,ge.snd.setAttribute("aria-pressed",String(!ge.muted)))}function nc(n,e=[]){let t=ge.player;if(!(!t||!t.contentWindow)){if(ge.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ge.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function Dm(n){ge.muted=n,Ka(),ge.kind==="video"?ge.player&&(ge.player.muted=n,n||(ge.player.volume=1)):(nc(n?"mute":"unMute"),n||nc("setVolume",[100]))}function xM(){if(!(!ge||!ge.src||ge.open)){if(ge.open=!0,ge.last=document.activeElement,ge.player)ge.kind==="video"?ge.player.play().catch(()=>{}):nc("playVideo");else{let n=ge.src,e=ge.kind;if(e==="video"){let t=document.createElement("video");t.src=_n(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ge.muted&&(ge.muted=t.muted,Ka())}),ge.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?pc(n):mc(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ge.muted||Dm(!1)}),ge.player=t}else{let t=document.createElement("img");t.src=_n(n),t.alt="",ge.player=t}ge.muted=!0,Ka(),ge.vid.appendChild(ge.player)}ge.snd.hidden=!/^(youtube|vimeo|video)$/.test(ge.kind),ge.box.hidden=!1,ge.btn.setAttribute("aria-expanded","true"),ge.box.offsetWidth,ge.box.classList.add("on"),setTimeout(()=>{ge.open&&ge.x.focus({preventScroll:!0})},60)}}function kl(n){!ge||!ge.open||(ge.open=!1,ge.btn.setAttribute("aria-expanded","false"),ge.kind==="video"?ge.player&&ge.player.pause():nc("pauseVideo"),ge.box.classList.remove("on"),clearTimeout(ge.t),ge.t=setTimeout(()=>{ge.open||(ge.box.hidden=!0)},n===!0?0:650),ge.last&&ge.last.focus&&n!==!0&&ge.last.focus({preventScroll:!0}))}var D=null,Va=["white","grey","accent","source"],$u=8;function vM(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},Oe.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:2*Math.round(e(4,12)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(Va,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function bM(){if(D)return;let n=document.getElementById("home-band");if(!n)return;let e=vM(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),D={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:Va.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min($u,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},D.octx=D.off.getContext("2d",{willReadFrequently:!0}),D.raw=document.createElement("canvas"),D.rctx=D.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let o=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(o.crossOrigin="anonymous"),Object.assign(o,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:_n(s)}),o.setAttribute("playsinline",""),o.addEventListener("loadedmetadata",()=>{isFinite(o.duration)&&o.duration>2&&(o.currentTime=Math.random()*(o.duration-1)),o.play().catch(()=>{})},{once:!0}),D.video=o}else{let o=new Set;Oe.posts.filter(a=>a.published!==!1).forEach(a=>[a.thumb,...(a.media||[]).map(l=>l&&l.src)].forEach(l=>{l&&!/^(https?:|data:)/.test(l)&&/\.(jpe?g|png|webp)$/i.test(l)&&!o.has(l)&&o.size<10&&o.add(l)})),D.pics=[...o].sort(()=>Math.random()-.5).map(a=>{let l=new Image;return l.src=_n(a),l})}e.controls!==!1&&MM(document.getElementById("home"));let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),Um()}function Um(){if(!D)return;let n=D.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);D.W=Math.max(1,Math.round(n.width)),D.H=Math.max(1,Math.round(n.height)),D.cv.width=D.W*e,D.cv.height=D.H*e,D.ctx.setTransform(e,0,0,e,0,0)}function MM(n){let e=document.createElement("div");e.id="hv",e.innerHTML=`<div id="hv-panel">
      <div class="lbl" data-k="grid"></div><div class="row"><button type="button" class="key" data-a="grid-" data-code="ArrowLeft">\u25C2</button><button type="button" class="key" data-a="grid+" data-code="ArrowRight">\u25B8</button></div>
      <div class="lbl" data-k="contrast"></div><div class="row"><button type="button" class="key" data-a="con-" data-code="ArrowDown">\u25BE</button><button type="button" class="key" data-a="con+" data-code="ArrowUp">\u25B4</button></div>
      <div class="lbl" data-k="delay"></div><div class="row"><button type="button" class="key" data-a="del-" data-code="Minus">\u2212</button><button type="button" class="key" data-a="del+" data-code="Equal">+</button></div>
      <div class="lbl" data-k="color"></div><div class="row"><button type="button" class="key sw" data-a="color" data-code="KeyC"><i></i> C</button></div>
      <div class="lbl" data-k="invert"></div><button type="button" class="key" data-a="invert" data-code="KeyI" aria-pressed="false">I</button>
      <div class="lbl" data-k="sound"></div><button type="button" class="key" data-a="sound" data-code="KeyS" aria-pressed="false">S</button>
      <div class="lbl" data-k="cam"></div><button type="button" class="key" data-a="cam" data-code="KeyV" aria-pressed="false">V</button>
      <span class="hv-note" hidden></span>
    </div><button id="hv-toggle" type="button" aria-expanded="false"></button>`,n.appendChild(e),D.box=e,D.note=e.querySelector(".hv-note");let t=i=>{e.classList.toggle("open",i),e.querySelector("#hv-toggle").setAttribute("aria-expanded",String(i))};D.setOpen=t,e.querySelector("#hv-toggle").addEventListener("click",()=>t(!e.classList.contains("open"))),window.addEventListener("keydown",i=>{if(Pn||i.ctrlKey||i.metaKey||i.altKey||ge&&ge.open)return;let s=i.target&&i.target.id==="bs",r=s&&i.target.value.length>0;if(i.code==="Escape"&&s){i.target.blur();return}if(i.code==="KeyK"&&!s){i.preventDefault(),t(!e.classList.contains("open"));return}let o=e.querySelector(`[data-code="${i.code}"]`);o&&(s&&!/^Arrow/.test(i.code)||/^Arrow/.test(i.code)&&r||(i.preventDefault(),D.touched||(D.touched=!0,t(!0)),o.click()))}),e.querySelector("#hv-panel").addEventListener("click",i=>{let s=i.target.closest("button[data-a]");if(!s)return;let r=s.dataset.a;s.classList.add("down"),setTimeout(()=>s.classList.remove("down"),200),r==="grid+"?D.cell=Math.max(6,D.cell-2):r==="grid-"?D.cell=Math.min(40,D.cell+2):r==="con-"?D.gamma=Math.max(.4,+(D.gamma-.2).toFixed(2)):r==="con+"?D.gamma=Math.min(3,+(D.gamma+.2).toFixed(2)):r==="del-"?D.delay=Math.max(1,D.delay-1):r==="del+"?D.delay=Math.min($u,D.delay+1):r==="color"?D.color=Va[(Va.indexOf(D.color)+1)%Va.length]:r==="invert"?D.mode=D.mode==="light"?"dark":"light":r==="sound"?(D.sound=!D.sound,D.video&&(D.video.muted=!D.sound,D.video.volume=1,D.video.play().catch(()=>{}))):r==="cam"&&(D.cam?Om():SM()),Qs()}),Qs()}function Qs(){if(!D||!D.box)return;D.box.querySelectorAll(".lbl[data-k]").forEach(s=>{s.textContent=pt("hv_"+s.dataset.k)}),D.box.querySelector("#hv-toggle").setAttribute("aria-label",pt("hv_tab"));let n=D.box.querySelector(".sw i");n.className="c-"+D.color;let e=(s,r,o)=>{let a=D.box.querySelector(`[data-a="${s}"]`);a.setAttribute("aria-pressed",String(r)),a.classList.toggle("on",r),o&&a.setAttribute("aria-label",o)};e("invert",D.mode==="dark",pt("hv_invert")),e("sound",D.sound,pt("hv_sound")),e("cam",!!D.cam,pt("hv_cam")),D.box.querySelector('[data-a="sound"]').disabled=!D.video||!!D.cam,D.box.querySelector('[data-a="color"]').setAttribute("aria-label",pt("hv_color")),["grid-","grid+","con-","con+","del-","del+"].forEach(s=>D.box.querySelector(`[data-a="${s}"]`).setAttribute("aria-label",pt(s.startsWith("grid")?"hv_grid":s.startsWith("con")?"hv_contrast":"hv_delay")+(s.endsWith("+")?" +":" \u2212")));let t=D.box.querySelector('.lbl[data-k="delay"]');t&&(t.textContent=pt("hv_delay")+" "+Au()+(Au()<D.delay?"*":""));let i=D.box.querySelector('[data-a="del+"]');i&&(i.disabled=D.delay>=$u)}async function SM(){D.note.hidden=!0;try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),D.cam={stream:n,video:e},D.lo=0,D.hi=1,D.video&&D.video.pause(),D.note.textContent=pt("hv_camNote"),D.note.hidden=!1}catch{D.note.textContent=pt("hv_camDenied"),D.note.hidden=!1}Qs()}function Om(){D&&D.cam&&(D.cam.stream.getTracks().forEach(n=>n.stop()),D.cam=null,D.video&&D.video.play().catch(()=>{}),D.note.hidden=!0),D&&Qs()}function wM(){D&&(Om(),D.video&&D.video.pause())}function hu(n,e,t,i=1,s=0,r=0,o=!1){let a=D.rctx,l=D.raw.width,c=D.raw.height,h=Math.max(l/e,c/t)*i,u=e*h,f=t*h;o&&(a.save(),a.translate(l,0),a.scale(-1,1)),a.drawImage(n,(l-u)/2+s*l,(c-f)/2+r*c,u,f),o&&a.restore()}function EM(n){let e=D.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,D.raw.width,D.raw.height),D.cam&&D.cam.video.readyState>=2)return hu(D.cam.video,D.cam.video.videoWidth,D.cam.video.videoHeight,1,0,0,!0),!0;if(D.video)return D.video.readyState<2?!1:(hu(D.video,D.video.videoWidth,D.video.videoHeight),!0);let t=D.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,o=(Math.floor(s)%r+r)%r,a=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,hu(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[o],a,1),a>.78&&r>1&&l(t[(o+1)%r],a-1,(a-.78)/.22),e.globalAlpha=1,!0}var TM=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function AM(n){if(D.pyr&&D.pyr.cell===n&&D.pyr.fill===D.fill)return D.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-a/D.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),D.pyr={cell:n,fill:D.fill,pat:D.ctx.createPattern(e,"repeat")},D.pyr.pat}function CM(n,e,t){let i=D.ctx,s=D.W,r=D.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!TM){i.globalAlpha=.45,i.drawImage(D.off,o,a,n*t,e*t),i.globalAlpha=1;return}D.tmp||(D.tmp=document.createElement("canvas"),D.tctx=D.tmp.getContext("2d"));let l=D.tmp,c=D.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${D.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+D.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(D.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=AM(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),D.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",D.color==="source"?i.drawImage(D.off,o,a,n*t,e*t):(i.fillStyle=D.color==="grey"?"#8d8d8d":Oe.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var RM=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},qp=new Map,PM=(n,e,t)=>{let i=n>>3<<10|e>>3<<5|t>>3,s=qp.get(i);return s||(s=`rgb(${n&248},${e&248},${t&248})`,qp.set(i,s)),s},Au=()=>D.floor||D.interval>1e3/29?1:D.delay;function LM(n){if(!D||!D.W||n-D.last<D.interval)return;D.last=n;let e=performance.now(),t=RM.matches?0:(n-D.t0)/1e3,i=D.ctx,s=D.W,r=D.H,o=Math.max(D.cell,D.floor),a=Math.ceil(s/o),l=Math.ceil(r/o);if(i.fillStyle="#0b0b0b",i.fillRect(0,0,s,r),(D.off.width!==a||D.off.height!==l)&&(D.off.width=D.raw.width=a,D.off.height=D.raw.height=l,D.fresh=!0),!EM(t))return;let c=Au();D.octx.globalAlpha=D.fresh||c<=1?1:1/c,D.octx.drawImage(D.raw,0,0),D.octx.globalAlpha=1,D.fresh=!1;let h=null;if(!D.tainted)try{h=D.octx.getImageData(0,0,a,l).data}catch{D.tainted=!0}D.tainted?CM(a,l,o):IM(h,a,l,o);let u=performance.now()-e;D.cost=D.cost*.9+u*.1,D.cost>14&&++D.slow>15?(D.box&&setTimeout(Qs,0),D.slow=0,D.interval<1e3/21?D.interval=D.interval<1e3/25?1e3/24:1e3/20:D.floor=Math.min(40,Math.max(D.floor,o)+2)):D.cost<5&&++D.fast>60&&(D.box&&setTimeout(Qs,0),D.fast=0,D.floor?D.floor=Math.max(0,D.floor-2):D.interval>1e3/30&&(D.interval=D.interval>1e3/22?1e3/24:1e3/30))}function IM(n,e,t,i){let s=D.ctx,r=e*t,o=D.lum&&D.lum.length===r?D.lum:D.lum=new Float32Array(r),a=1,l=0;for(let d=0,M=0;d<r;d++,M+=4){let v=(.2126*n[M]+.7152*n[M+1]+.0722*n[M+2])/255;o[d]=v,v<a&&(a=v),v>l&&(l=v)}D.lo+=(a-D.lo)*.15,D.hi+=(Math.max(l,D.lo+.15)-D.hi)*.15;let c=D.lo,h=1/(D.hi-c),u=D.mode==="dark",f=D.gamma,m=i*D.fill,g=(D.W-e*i)/2,x=(D.H-t*i)/2,p=D.color==="source";p||(s.fillStyle=D.color==="grey"?"#8d8d8d":D.color==="accent"?Oe.settings.accent||"#ffcc00":"#f2f2f2",s.beginPath());for(let d=0,M=0;d<t;d++){let v=x+d*i+i/2;for(let P=0;P<e;P++,M++){let N=(o[M]-c)*h;N=N<0?0:N>1?1:N,u&&(N=1-N);let L=(f===1?N:Math.pow(N,f))*m;if(L<.6)continue;let I=g+P*i+(i-L)/2,Z=v-L/2;if(p){let T=M*4;s.fillStyle=PM(n[T],n[T+1],n[T+2]),s.fillRect(I,Z,L,L)}else s.rect(I,Z,L,L)}}p||s.fill()}var Ks=document.getElementById("home"),vs=document.getElementById("enter"),Qa=document.getElementById("ticker"),Hl=Qa.getContext("2d"),Ga=null,ka=0,Wa=1,Fm="hc-bullshit-slogans",Xa=[];try{let n=JSON.parse(localStorage.getItem(Fm)||"[]");Array.isArray(n)&&(Xa=n.filter(e=>typeof e=="string").slice(0,8))}catch{}function Bm(){let n=document.getElementById("bs"),e=n.value.replace(/\s+/g," ").trim().slice(0,70);if(!e)return!1;Xa=[e.toUpperCase(),...Xa.filter(t=>t!==e.toUpperCase())].slice(0,8);try{localStorage.setItem(Fm,JSON.stringify(Xa))}catch{}return km=null,zm(),ka=0,n.value="",document.getElementById("bs-sent").textContent=pt("sent"),NM(e),!0}function NM(n){let e=(Oe.settings.sloganInbox||"").trim();if(!e||Xt||!/^https:\/\//.test(e))return;let t=JSON.stringify({slogan:n,lang:Yi,tag:Gm("")||"",site:location.host||"local"});try{fetch(e,{method:"POST",mode:"no-cors",keepalive:!0,headers:{"Content-Type":"text/plain;charset=utf-8"},body:t}).catch(()=>{})}catch{}}document.getElementById("bs-form").addEventListener("submit",n=>{n.preventDefault(),Bm(),document.getElementById("bs").blur(),vs.click()});var $p={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},DM=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=$p[e]||$p["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function UM(n){let e=i=>i.published&&Oe.sections.some(s=>s.id===i.section&&s.visible),t=Oe.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+Oe.settings.founded||2012));case"auto:projects":return String(Oe.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(Oe.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(Oe.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(Oe.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var OM=()=>(Oe.settings.home&&Oe.settings.home.figures||[]).map(n=>({value:UM(n.value),label:Re(n.label)})).filter(n=>n.value&&n.label),FM=()=>OM().map(n=>`${n.value} ${n.label}`);function zm(){let n=[...Xa,...FM(),...Oe.settings.home.ticker||[]].filter(Boolean),e=(n.length?n:[Oe.settings.name]).map(t=>String(t).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Ga=BM(e)}var km=null;function BM(n){let e=[];for(let t of n){let i=DM(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var bi={pitch:3.2,rows:7,h:30},Xr=null,Yp="";function jp(n,e){let t=Wa,i=Math.ceil(bi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,bi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-bi.pitch*.1*t,o-bi.pitch*.1*t,bi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Hm(){Wa=Math.min(window.devicePixelRatio||1,2),Qa.width=Math.round(window.innerWidth*Wa),Qa.height=Math.round(bi.h*Wa),Xr=null}var Vl=0;function zM(n){let e=tn();(!Xr||Yp!==e)&&(Yp=e,Xr={on:jp(e,!0),off:jp(e,!1)}),Vl+=n*26,Vl>=1&&(ka=(ka+Math.floor(Vl))%Ga.w,Vl%=1);let t=Wa,i=bi.pitch,s=Math.ceil(window.innerWidth/i)+1,r=(bi.h-bi.rows*i)/2;Hl.setTransform(1,0,0,1,0,0),Hl.fillStyle="#000",Hl.fillRect(0,0,Qa.width,Qa.height);let o=Xr.on.width/2,a=km,l=a&&a.w<=s?Math.floor((s-a.w)/2):0;for(let c=0;c<s;c++){let h=a?a.w<=s?c>=l&&c<l+a.w?a.cols[c-l]:0:a.cols[(ka+c)%a.w]:Ga.cols[(ka+c)%Ga.w],u=(c*i+i/2)*t-o;for(let f=0;f<bi.rows;f++)Hl.drawImage(h>>f&1?Xr.on:Xr.off,u,(r+f*i+i/2)*t-o)}}var Pn=!1,Yu=!1,ju=!1,Zu=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),Cu=0,Vm=0;function Ju(){if(!Pn){if(Pn=!0,clearTimeout(Cu),Sm=performance.now(),!Xt&&Zu())try{history.pushState(null,"",location.pathname+location.search+"#"+(Oe.sections.find(n=>n.id===Oe.settings.startSection&&n.visible)||Ot[0].def).id)}catch{}Ks.classList.add("out"),Cu=setTimeout(()=>{Ks.hidden=!0,wM()},1100),HM(),iM(),Es.classList.add("on"),setTimeout(aM,1500),Rs.hidden=!1,dc.classList.remove("hidden"),vn.focus({preventScroll:!0})}}function Ku(n=!0){if(Pn){if(ui(),Ql(),Su(),rc(),so(null),Xu(),Pn=!1,ju=!1,clearTimeout(Cu),Vm=performance.now()+1300,vs.textContent=Re(Oe.settings.home.enter)||pt("enter"),vs.classList.remove("wait"),Ks.hidden=!1,Ks.offsetWidth,Ks.classList.remove("out"),D&&D.video&&D.video.play().catch(()=>{}),n&&!Xt)try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}zu()}}window.addEventListener("popstate",()=>{if(!Xt){if(Zu())Ku(!1);else if(!Pn&&Yu)Ju();else if(Pn&&Cs){let n=Ot.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&Bn&&io(n)}}});Es.addEventListener("click",n=>{n.target.closest(".wm")&&Pn&&Ku()});Es.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Pn&&(n.preventDefault(),Ku())});vs.addEventListener("click",()=>{Bm(),ju=!0,Yu?Ju():(vs.textContent=pt("loading"),vs.classList.add("wait"))});var Ru=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function Gm(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Xt&&Xt.tag&&(e=Xt.tag),Ru(e||n)}function kM(n,e){let t=n.tags||[],i=t.find(s=>Ru(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>Ru(r)===e));return i?i.id:""}function HM(){try{Ts.compile(Pb,ni,Ms)}catch{}hc();let n=Xt&&Xt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Ot.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Ot.findIndex(o=>o.def.id===Oe.settings.startSection)));let s=Gm(t||(e&&i<0?e:""));if(s){let o=Ot.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Ot.keys()];for(let a of o){let l=kM(Ot[a].def,s);if(l){i=a,Ot[a].def.defaultTag=l;break}}}Ki=ae.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=Qi();H.cameraY=Jr(),yt.x=Ji()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=Ji()*Math.cos(H.degreeCamera)+r.p.z,Rn.x=r.p.x,Rn.y=lc(),Rn.z=r.p.z,Cs=!0,io(i,0),(qt<=700||Wt<=520)&&Ya()}var Zp=performance.now();function Wm(n){let e=Math.min(.25,Math.max(0,(n-Zp)/1e3));Zp=n,$i+=e,$l=e*wb,!Pn&&Ga&&zM(e),D&&!Ks.hidden&&LM(n),Cs&&(Pn||n<Vm)&&(Ab(),Qb(),eM(),nM(),Ce&&Ce.update(),mM(),ct.step(),sM(),Ts.render(Ms,ni)),requestAnimationFrame(Wm)}function uu(n){console.error(n);let e=document.getElementById("load-error");e.textContent=pt("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function VM(){Xt||!/[?&]preview\b/.test(location.search)||window.parent===window||(Xt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:Jp},"*")}catch{}}))}(async function(){try{await VM(),Xt?Oe=Ys(structuredClone(Xt.content)):(Oe=await Gl.load(),Gl.prepare&&await Gl.prepare(Oe))}catch(r){uu(r);return}if(ii=!!Oe.settings.negative,lm(),!Xt&&Oe.settings.negativeToggle!==!1)try{let r=localStorage.getItem("hc-neg");(r==="1"||r==="0")&&(ii=r==="1")}catch{}let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=Oe.settings.langs&&Oe.settings.langs.length?Oe.settings.langs:Gi,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(r=>String(r).toLowerCase().slice(0,2)).find(r=>t.includes(r));if(Yi=t.includes(e)?e:i||Oe.settings.defaultLang||t[0],Ot=Oe.sections.filter(r=>r.visible).map(r=>({def:r})),!Ot.length){uu(new Error("aucune section visible"));return}window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Kp(!1),Tm(),Bu(),rM(),bM(),ym(),hc(),Hm(),requestAnimationFrame(Wm),js=Ot.map((r,o)=>new yu(r.def,o)),Ot.forEach((r,o)=>{r.object=js[o]}),Ot.forEach(r=>{r.container=r.object.container,r.p=r.object.p});let s=new Rl(rm);try{(await Promise.allSettled(js.map(o=>o.load(s)))).forEach((o,a)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+js[a].def.id+" \xBB :",o.reason)}),js.forEach((o,a)=>o.place(a)),await Promise.race([Promise.all(om).then(As),new Promise(o=>setTimeout(o,3e3))]),Yu=!0,(ju||!Zu()||Xt&&Xt.start)&&Ju()}catch(r){uu(r)}})();window.__hc={P:H,STYLE:ae,cam:yt,camera:ni,renderer:Ts,get hv(){return D&&{cell:D.cell,floor:D.floor,fps:Math.round(1e3/D.interval),cost:+D.cost.toFixed(1),tainted:D.tainted}},get input(){return Bn},get homeGone(){return Pn},get content(){return Oe},get postsView(){return Ce},getToSectionView:io,openThatPost:Za,closePost:Ja,goToPost:Rm,setLang:vm,enter:()=>vs.click()};})();
