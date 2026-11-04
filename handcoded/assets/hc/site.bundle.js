/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var uu="160";var e0=0,Hd=1,t0=2;var Lp=1,n0=2,Bi=3,Bn=0,cn=1,On=2;var ps=0,Fr=1,Vd=2,Gd=3,Wd=4,i0=5,Ws=100,s0=101,r0=102,Xd=103,qd=104,a0=200,o0=201,l0=202,c0=203,Ph=204,Ih=205,h0=206,u0=207,d0=208,f0=209,p0=210,m0=211,g0=212,y0=213,_0=214,v0=0,x0=1,b0=2,rl=3,M0=4,S0=5,w0=6,E0=7,Vl=0,T0=1,A0=2,ms=0,C0=1,R0=2,L0=3,P0=4,I0=5,N0=6,$d="attached",D0="detached",Pp=300,zr=301,Hr=302,Nh=303,Dh=304,Gl=306,ys=1e3,Tn=1001,Uh=1002,dn=1003,Yd=1004;var Zc=1005;var Dn=1006,U0=1007;var _s=1008;var gs=1009,O0=1010,F0=1011,du=1012,Ip=1013,fs=1014,Hi=1015,Da=1016,Np=1017,Dp=1018,$s=1020,k0=1021,ti=1023,B0=1024,z0=1025,Ys=1026,Vr=1027,H0=1028,Up=1029,V0=1030,Op=1031,Fp=1033,Jc=33776,Kc=33777,Qc=33778,eh=33779,jd=35840,Zd=35841,Jd=35842,Kd=35843,kp=36196,Qd=37492,ef=37496,tf=37808,nf=37809,sf=37810,rf=37811,af=37812,of=37813,lf=37814,cf=37815,hf=37816,uf=37817,df=37818,ff=37819,pf=37820,mf=37821,th=36492,gf=36494,yf=36495,G0=36283,_f=36284,vf=36285,xf=36286;var al=2300,ol=2301,nh=2302,bf=2400,Mf=2401,Sf=2402,W0=2500;var Bp=3e3,js=3001,X0=3200,q0=3201,fu=0,$0=1,ni="",Wt="srgb",Gi="srgb-linear",pu="display-p3",Wl="display-p3-linear",ll="linear",Ot="srgb",cl="rec709",hl="p3";var mr=7680;var wf=519,Y0=512,j0=513,Z0=514,zp=515,J0=516,K0=517,Q0=518,ey=519,Oh=35044;var Ef="300 es",Fh=1035,Vi=2e3,ul=2001,vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=1234567,La=Math.PI/180,Gr=180/Math.PI;function fi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function En(n,e,t){return Math.max(e,Math.min(t,n))}function mu(n,e){return(n%e+e)%e}function ty(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ny(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function iy(n,e,t,i){return Pa(n,e,1-Math.exp(-t*i))}function sy(n,e=1){return e-Math.abs(mu(n,e*2)-e)}function ry(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ay(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function oy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ly(n,e){return n+Math.random()*(e-n)}function cy(n){return n*(.5-Math.random())}function hy(n){n!==void 0&&(Tf=n);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uy(n){return n*La}function dy(n){return n*Gr}function kh(n){return(n&n-1)===0&&n!==0}function fy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function py(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*m,o*c);break;case"YXY":n.set(l*m,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ms={DEG2RAD:La,RAD2DEG:Gr,generateUUID:fi,clamp:En,euclideanModulo:mu,mapLinear:ty,inverseLerp:ny,lerp:Pa,damp:iy,pingpong:sy,smoothstep:ry,smootherstep:ay,randInt:oy,randFloat:ly,randFloatSpread:cy,seededRandom:hy,degToRad:uy,radToDeg:dy,isPowerOfTwo:kh,ceilPowerOfTwo:fy,floorPowerOfTwo:dl,setQuaternionFromProperEuler:py,normalize:Ct,denormalize:bi},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],f=s[6],T=s[1],b=s[4],L=s[7],N=s[2],P=s[5],D=s[8];return r[0]=a*v+o*T+l*N,r[3]=a*p+o*b+l*P,r[6]=a*f+o*L+l*D,r[1]=c*v+h*T+u*N,r[4]=c*p+h*b+u*P,r[7]=c*f+h*L+u*D,r[2]=d*v+m*T+g*N,r[5]=d*p+m*b+g*P,r[8]=d*f+m*L+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ih.makeScale(e,t)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ih=new pt;function Hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function my(){let n=Ua("canvas");return n.style.display="block",n}var Af={};function Ia(n){n in Af||(Af[n]=!0,console.warn(n))}var Cf=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rf=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[Gi]:{transfer:ll,primaries:cl,toReference:n=>n,fromReference:n=>n},[Wt]:{transfer:Ot,primaries:cl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Wl]:{transfer:ll,primaries:hl,toReference:n=>n.applyMatrix3(Rf),fromReference:n=>n.applyMatrix3(Cf)},[pu]:{transfer:Ot,primaries:hl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rf),fromReference:n=>n.applyMatrix3(Cf).convertLinearToSRGB()}},gy=new Set([Gi,Wl]),Rt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Lo[e].toReference,s=Lo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lo[n].primaries},getTransfer:function(n){return n===ni?ll:Lo[n].transfer}};function kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gr,fl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=Ua("canvas")),gr.width=e.width,gr.height=e.height;let i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ua("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(kr(t[i]/255)*255):t[i]=kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yy=0,pl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rh(s[a].image)):r.push(rh(s[a]))}else r=rh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function rh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _y=0,zn=class n extends vs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Tn,s=Tn,r=Dn,a=_s,o=ti,l=gs,c=n.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=fi(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===js?Wt:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Wt?js:Bp}set encoding(e){Ia("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===js?Wt:ni}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Pp;zn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],v=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,L=(m+1)/2,N=(f+1)/2,P=(h+d)/4,D=(u+v)/4,B=(g+p)/4;return b>L&&b>N?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=P/i,r=D/i):L>N?L<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),i=P/s,r=B/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=D/r,s=B/r),this.set(i,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bh=class extends vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ia("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===js?Wt:ni),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends Bh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ml=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zh=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==m||h!==g){let p=1-o,f=l*d+c*m+h*g+u*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let N=Math.sqrt(b),P=Math.atan2(N,f*T);p=Math.sin(p*P)/N,o=Math.sin(o*P)/N}let L=o*T;if(l=l*p+d*L,c=c*p+m*L,h=h*p+g*L,u=u*p+v*L,p===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-o*m,e[t+2]=c*g+h*m+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(En(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new U,Lf=new Mi,fn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Po.copy(i.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),Io.subVectors(this.max,Ma),yr.subVectors(e.a,Ma),_r.subVectors(e.b,Ma),vr.subVectors(e.c,Ma),ls.subVectors(_r,yr),cs.subVectors(vr,_r),Bs.subVectors(yr,vr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Bs.z,Bs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Bs.z,0,-Bs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Bs.y,Bs.x,0];return!oh(t,yr,_r,vr,Io)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,yr,_r,vr,Io))?!1:(No.crossVectors(ls,cs),t=[No.x,No.y,No.z],oh(t,yr,_r,vr,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ni=[new U,new U,new U,new U,new U,new U,new U,new U],hi=new U,Po=new fn,yr=new U,_r=new U,vr=new U,ls=new U,cs=new U,Bs=new U,Ma=new U,Io=new U,No=new U,zs=new U;function oh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zs.fromArray(n,r);let o=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),h=i.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vy=new fn,Sa=new U,lh=new U,ii=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(lh)),this.expandByPoint(Sa.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Di=new U,ch=new U,Do=new U,hs=new U,hh=new U,Uo=new U,uh=new U,Wr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ch.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(ch);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=hs.dot(this.direction),l=-hs.dot(Do),c=hs.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ch).addScaledVector(Do,d),m}intersectSphere(e,t){Di.subVectors(e.center,this.origin);let i=Di.dot(this.direction),s=Di.dot(Di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,s,r){hh.subVectors(t,e),Uo.subVectors(i,e),uh.crossVectors(hh,Uo);let a=this.direction.dot(uh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hs.subVectors(this.origin,e);let l=o*this.direction.dot(Uo.crossVectors(hs,Uo));if(l<0)return null;let c=o*this.direction.dot(hh.cross(hs));if(c<0||l+c>a)return null;let h=-o*hs.dot(uh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,m,g,v,p)}set(e,t,i,s,r,a,o,l,c,h,u,d,m,g,v,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,by)}lookAt(e,t,i){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),us.crossVectors(i,$n),us.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),us.crossVectors(i,$n)),us.normalize(),Oo.crossVectors($n,us),s[0]=us.x,s[4]=Oo.x,s[8]=$n.x,s[1]=us.y,s[5]=Oo.y,s[9]=$n.y,s[2]=us.z,s[6]=Oo.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],f=i[14],T=i[3],b=i[7],L=i[11],N=i[15],P=s[0],D=s[4],B=s[8],S=s[12],C=s[1],z=s[5],re=s[9],me=s[13],F=s[2],H=s[6],k=s[10],ne=s[14],q=s[3],W=s[7],Q=s[11],te=s[15];return r[0]=a*P+o*C+l*F+c*q,r[4]=a*D+o*z+l*H+c*W,r[8]=a*B+o*re+l*k+c*Q,r[12]=a*S+o*me+l*ne+c*te,r[1]=h*P+u*C+d*F+m*q,r[5]=h*D+u*z+d*H+m*W,r[9]=h*B+u*re+d*k+m*Q,r[13]=h*S+u*me+d*ne+m*te,r[2]=g*P+v*C+p*F+f*q,r[6]=g*D+v*z+p*H+f*W,r[10]=g*B+v*re+p*k+f*Q,r[14]=g*S+v*me+p*ne+f*te,r[3]=T*P+b*C+L*F+N*q,r[7]=T*D+b*z+L*H+N*W,r[11]=T*B+b*re+L*k+N*Q,r[15]=T*S+b*me+L*ne+N*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*m-i*l*m)+v*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+i*a*m+r*o*h-i*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],T=u*p*c-v*d*c+v*l*m-o*p*m-u*l*f+o*d*f,b=g*d*c-h*p*c-g*l*m+a*p*m+h*l*f-a*d*f,L=h*v*c-g*u*c+g*o*m-a*v*m-h*o*f+a*u*f,N=g*u*l-h*v*l-g*o*d+a*v*d+h*o*p-a*u*p,P=t*T+i*b+s*L+r*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=T*D,e[1]=(v*d*r-u*p*r-v*s*m+i*p*m+u*s*f-i*d*f)*D,e[2]=(o*p*r-v*l*r+v*s*c-i*p*c-o*s*f+i*l*f)*D,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*m-i*l*m)*D,e[4]=b*D,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*D,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*f-t*l*f)*D,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*m+t*l*m)*D,e[8]=L*D,e[9]=(g*u*r-h*v*r-g*i*m+t*v*m+h*i*f-t*u*f)*D,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*m-t*o*m)*D,e[12]=N*D,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*p+t*u*p)*D,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*p-t*o*p)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,g=r*u,v=a*h,p=a*u,f=o*u,T=l*c,b=l*h,L=l*u,N=i.x,P=i.y,D=i.z;return s[0]=(1-(v+f))*N,s[1]=(m+L)*N,s[2]=(g-b)*N,s[3]=0,s[4]=(m-L)*P,s[5]=(1-(d+f))*P,s[6]=(p+T)*P,s[7]=0,s[8]=(g+b)*D,s[9]=(p-T)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=xr.set(s[0],s[1],s[2]).length(),a=xr.set(s[4],s[5],s[6]).length(),o=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let c=1/r,h=1/a,u=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Vi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),m,g;if(o===Vi)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ul)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,m=(i+s)*h,g,v;if(o===Vi)g=(a+r)*u,v=-2*u;else if(o===ul)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},xr=new U,ui=new lt,xy=new U(0,0,0),by=new U(1,1,1),us=new U,Oo=new U,$n=new U,Pf=new lt,If=new Mi,gl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(En(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-En(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-En(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(En(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-En(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gl.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},My=0,Nf=new U,br=new Mi,Ui=new lt,Fo=new U,wa=new U,Sy=new U,wy=new Mi,Df=new U(1,0,0),Uf=new U(0,1,0),Of=new U(0,0,1),Ey={type:"added"},Ty={type:"removed"},qt=class n extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new gl,i=new Mi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new pt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Df,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Nf.copy(e).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Df,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(wa,Fo,this.up):Ui.lookAt(Fo,wa,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Ui),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ey)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ty)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new U,Oi=new U,dh=new U,Fi=new U,Mr=new U,Sr=new U,Ff=new U,fh=new U,ph=new U,mh=new U,ko=!1,qs=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){di.subVectors(s,t),Oi.subVectors(i,t),dh.subVectors(e,t);let a=di.dot(di),o=di.dot(Oi),l=di.dot(dh),c=Oi.dot(Oi),h=Oi.dot(dh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,s,r,a,o,l){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static isFrontFacing(e,t,i,s){return di.subVectors(i,t),Oi.subVectors(e,t),di.cross(Oi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),di.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ko===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ko=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Mr.subVectors(s,i),Sr.subVectors(r,i),fh.subVectors(e,i);let l=Mr.dot(fh),c=Sr.dot(fh);if(l<=0&&c<=0)return t.copy(i);ph.subVectors(e,s);let h=Mr.dot(ph),u=Sr.dot(ph);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Mr,a);mh.subVectors(e,r);let m=Mr.dot(mh),g=Sr.dot(mh);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Sr,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Ff.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Ff,o);let f=1/(p+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function gh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=mu(e,1),t=En(t,0,1),i=En(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gh(a,r,e+1/3),this.g=gh(a,r,e),this.b=gh(a,r,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=Vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=sh(e.r),this.g=sh(e.g),this.b=sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Rt.fromWorkingColorSpace(wn.copy(this),e),Math.round(En(wn.r*255,0,255))*65536+Math.round(En(wn.g*255,0,255))*256+Math.round(En(wn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(wn.copy(this),t);let i=wn.r,s=wn.g,r=wn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Wt){Rt.fromWorkingColorSpace(wn.copy(this),e);let t=wn.r,i=wn.g,s=wn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Bo);let i=Pa(ds.h,Bo.h,t),s=Pa(ds.s,Bo.s,t),r=Pa(ds.l,Bo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new ot;ot.NAMES=Vp;var Ay=0,Si=class extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Fr,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ph&&(i.blendSrc=this.blendSrc),this.blendDst!==Ih&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kt=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new U,zo=new et,jn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zo.fromBufferAttribute(this,t),zo.applyMatrix3(e),this.setXY(t,zo.x,zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}};var yl=class extends jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _l=class extends jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends jn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Cy=0,ei=new lt,yh=new qt,wr=new U,Yn=new fn,Ea=new fn,ln=new U,Hn=class n extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hp(e)?_l:yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Yn.min,Ea.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,Ea.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(Ea.min),Yn.expandByPoint(Ea.max))}Yn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),ln.add(wr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new U,h[C]=new U;let u=new U,d=new U,m=new U,g=new et,v=new et,p=new et,f=new U,T=new U;function b(C,z,re){u.fromArray(s,C*3),d.fromArray(s,z*3),m.fromArray(s,re*3),g.fromArray(a,C*2),v.fromArray(a,z*2),p.fromArray(a,re*2),d.sub(u),m.sub(u),v.sub(g),p.sub(g);let me=1/(v.x*p.y-p.x*v.y);isFinite(me)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(me),T.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(me),c[C].add(f),c[z].add(f),c[re].add(f),h[C].add(T),h[z].add(T),h[re].add(T))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let C=0,z=L.length;C<z;++C){let re=L[C],me=re.start,F=re.count;for(let H=me,k=me+F;H<k;H+=3)b(i[H+0],i[H+1],i[H+2])}let N=new U,P=new U,D=new U,B=new U;function S(C){D.fromArray(r,C*3),B.copy(D);let z=c[C];N.copy(z),N.sub(D.multiplyScalar(D.dot(z))).normalize(),P.crossVectors(B,z);let me=P.dot(h[C])<0?-1:1;l[C*4]=N.x,l[C*4+1]=N.y,l[C*4+2]=N.z,l[C*4+3]=me}for(let C=0,z=L.length;C<z;++C){let re=L[C],me=re.start,F=re.count;for(let H=me,k=me+F;H<k;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new jn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kf=new lt,Hs=new Wr,Ho=new ii,Bf=new U,Er=new U,Tr=new U,Ar=new U,_h=new U,Vo=new U,Go=new et,Wo=new et,Xo=new et,zf=new U,Hf=new U,Vf=new U,qo=new U,$o=new U,Ft=class extends qt{constructor(e=new Hn,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_h.fromBufferAttribute(u,e),a?Vo.addScaledVector(_h,h):Vo.addScaledVector(_h.sub(t),h))}t.add(Vo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Ho.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Ho,Bf)===null||Hs.origin.distanceToSquared(Bf)>(e.far-e.near)**2))&&(kf.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let L=T,N=b;L<N;L+=3){let P=o.getX(L),D=o.getX(L+1),B=o.getX(L+2);s=Yo(this,f,e,i,c,h,u,P,D,B),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let T=o.getX(p),b=o.getX(p+1),L=o.getX(p+2);s=Yo(this,a,e,i,c,h,u,T,b,L),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],f=a[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let L=T,N=b;L<N;L+=3){let P=L,D=L+1,B=L+2;s=Yo(this,f,e,i,c,h,u,P,D,B),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let T=p,b=p+1,L=p+2;s=Yo(this,a,e,i,c,h,u,T,b,L),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ry(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;$o.copy(o),$o.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:n}}function Yo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Er),n.getVertexPosition(l,Tr),n.getVertexPosition(c,Ar);let h=Ry(n,e,t,i,Er,Tr,Ar,qo);if(h){s&&(Go.fromBufferAttribute(s,o),Wo.fromBufferAttribute(s,l),Xo.fromBufferAttribute(s,c),h.uv=qs.getInterpolation(qo,Er,Tr,Ar,Go,Wo,Xo,new et)),r&&(Go.fromBufferAttribute(r,o),Wo.fromBufferAttribute(r,l),Xo.fromBufferAttribute(r,c),h.uv1=qs.getInterpolation(qo,Er,Tr,Ar,Go,Wo,Xo,new et),h.uv2=h.uv1),a&&(zf.fromBufferAttribute(a,o),Hf.fromBufferAttribute(a,l),Vf.fromBufferAttribute(a,c),h.normal=qs.getInterpolation(qo,Er,Tr,Ar,zf,Hf,Vf,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};qs.getNormal(Er,Tr,Ar,u.normal),h.face=u}return h}var Fa=class n extends Hn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(v,p,f,T,b,L,N,P,D,B,S){let C=L/D,z=N/B,re=L/2,me=N/2,F=P/2,H=D+1,k=B+1,ne=0,q=0,W=new U;for(let Q=0;Q<k;Q++){let te=Q*z-me;for(let ue=0;ue<H;ue++){let V=ue*C-re;W[v]=V*T,W[p]=te*b,W[f]=F,c.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[f]=P>0?1:-1,h.push(W.x,W.y,W.z),u.push(ue/D),u.push(1-Q/B),ne+=1}}for(let Q=0;Q<B;Q++)for(let te=0;te<D;te++){let ue=d+te+H*Q,V=d+te+H*(Q+1),j=d+(te+1)+H*(Q+1),se=d+(te+1)+H*Q;l.push(ue,V,se),l.push(V,j,se),q+=6}o.addGroup(m,q,S),m+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nn(n){let e={};for(let t=0;t<n.length;t++){let i=Xr(n[t]);for(let s in i)e[s]=i[s]}return e}function Ly(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Gp(n){return n.getRenderTarget()===null?n.outputColorSpace:Rt.workingColorSpace}var Xl={clone:Xr,merge:Nn},Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},vl=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends vl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(La*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cr=-90,Rr=1,Hh=class extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Jt(Cr,Rr,e,t);s.layers=this.layers,this.add(s);let r=new Jt(Cr,Rr,e,t);r.layers=this.layers,this.add(r);let a=new Jt(Cr,Rr,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Cr,Rr,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Cr,Rr,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Cr,Rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xl=class extends zn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vh=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ia("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===js?Wt:ni),this.texture=new xl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fa(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:ps});r.uniforms.tEquirect.value=t;let a=new Ft(s,r),o=t.minFilter;return t.minFilter===_s&&(t.minFilter=Dn),new Hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},vh=new U,Ny=new U,Dy=new pt,zi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=vh.subVectors(i,t).cross(Ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(vh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dy.getNormalMatrix(e),s=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new ii,jo=new U,ka=class{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,a=new zi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],f=s[12],T=s[13],b=s[14],L=s[15];if(i[0].setComponents(l-r,d-c,p-m,L-f).normalize(),i[1].setComponents(l+r,d+c,p+m,L+f).normalize(),i[2].setComponents(l+a,d+h,p+g,L+T).normalize(),i[3].setComponents(l-a,d-h,p-g,L-T).normalize(),i[4].setComponents(l-o,d-u,p-v,L-b).normalize(),t===Vi)i[5].setComponents(l+o,d+u,p+v,L+b).normalize();else if(t===ul)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Uy(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Xi=class n extends Hn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],g=[],v=[],p=[];for(let f=0;f<h;f++){let T=f*d-a;for(let b=0;b<c;b++){let L=b*u-r;g.push(L,-T,0),v.push(0,0,1),p.push(b/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){let b=T+c*f,L=T+c*(f+1),N=T+1+c*(f+1),P=T+1+c*f;m.push(b,L,P),m.push(L,N,P)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
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
#endif`,ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
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
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jy=`#ifdef USE_IRIDESCENCE
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
#endif`,Zy=`#ifdef USE_BUMPMAP
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
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,r_=`#define PI 3.141592653589793
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
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o_=`vec3 transformedNormal = objectNormal;
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
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d_="gl_FragColor = linearToOutputTexel( gl_FragColor );",f_=`
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
}`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
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
}`,w_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
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
#endif`,U_=`struct PhysicalMaterial {
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
}`,O_=`
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,G_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,$_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
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
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,K_=`#ifdef USE_MORPHTARGETS
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
#endif`,Q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xv=`float getShadowMask() {
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
}`,bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,Kv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,ex=`#define MATCAP
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
}`,tx=`#define NORMAL
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
}`,nx=`#define NORMAL
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
}`,ix=`#define PHONG
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
}`,sx=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,ox=`#define TOON
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
}`,lx=`#define TOON
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
}`,cx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 color;
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
}`,fx=`uniform float rotation;
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
}`,px=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Oy,alphahash_pars_fragment:Fy,alphamap_fragment:ky,alphamap_pars_fragment:By,alphatest_fragment:zy,alphatest_pars_fragment:Hy,aomap_fragment:Vy,aomap_pars_fragment:Gy,batching_pars_vertex:Wy,batching_vertex:Xy,begin_vertex:qy,beginnormal_vertex:$y,bsdfs:Yy,iridescence_fragment:jy,bumpmap_pars_fragment:Zy,clipping_planes_fragment:Jy,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Qy,clipping_planes_vertex:e_,color_fragment:t_,color_pars_fragment:n_,color_pars_vertex:i_,color_vertex:s_,common:r_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:o_,displacementmap_pars_vertex:l_,displacementmap_vertex:c_,emissivemap_fragment:h_,emissivemap_pars_fragment:u_,colorspace_fragment:d_,colorspace_pars_fragment:f_,envmap_fragment:p_,envmap_common_pars_fragment:m_,envmap_pars_fragment:g_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:R_,envmap_vertex:__,fog_vertex:v_,fog_pars_vertex:x_,fog_fragment:b_,fog_pars_fragment:M_,gradientmap_pars_fragment:S_,lightmap_fragment:w_,lightmap_pars_fragment:E_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:A_,lights_pars_begin:C_,lights_toon_fragment:L_,lights_toon_pars_fragment:P_,lights_phong_fragment:I_,lights_phong_pars_fragment:N_,lights_physical_fragment:D_,lights_physical_pars_fragment:U_,lights_fragment_begin:O_,lights_fragment_maps:F_,lights_fragment_end:k_,logdepthbuf_fragment:B_,logdepthbuf_pars_fragment:z_,logdepthbuf_pars_vertex:H_,logdepthbuf_vertex:V_,map_fragment:G_,map_pars_fragment:W_,map_particle_fragment:X_,map_particle_pars_fragment:q_,metalnessmap_fragment:$_,metalnessmap_pars_fragment:Y_,morphcolor_vertex:j_,morphnormal_vertex:Z_,morphtarget_pars_vertex:J_,morphtarget_vertex:K_,normal_fragment_begin:Q_,normal_fragment_maps:ev,normal_pars_fragment:tv,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:ov,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:_v,shadowmap_vertex:vv,shadowmask_pars_fragment:xv,skinbase_vertex:bv,skinning_pars_vertex:Mv,skinning_vertex:Sv,skinnormal_vertex:wv,specularmap_fragment:Ev,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Cv,transmission_fragment:Rv,transmission_pars_fragment:Lv,uv_pars_fragment:Pv,uv_pars_vertex:Iv,uv_vertex:Nv,worldpos_vertex:Dv,background_vert:Uv,background_frag:Ov,backgroundCube_vert:Fv,backgroundCube_frag:kv,cube_vert:Bv,cube_frag:zv,depth_vert:Hv,depth_frag:Vv,distanceRGBA_vert:Gv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:$v,linedashed_frag:Yv,meshbasic_vert:jv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:Kv,meshmatcap_vert:Qv,meshmatcap_frag:ex,meshnormal_vert:tx,meshnormal_frag:nx,meshphong_vert:ix,meshphong_frag:sx,meshphysical_vert:rx,meshphysical_frag:ax,meshtoon_vert:ox,meshtoon_frag:lx,points_vert:cx,points_frag:hx,shadow_vert:ux,shadow_frag:dx,sprite_vert:fx,sprite_frag:px},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Un={basic:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Nn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Nn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Nn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Nn([ye.points,ye.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Nn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Nn([ye.common,ye.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Nn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Nn([ye.sprite,ye.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Nn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Nn([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Un.physical={uniforms:Nn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Zo={r:0,b:0,g:0};function mx(n,e,t,i,s,r,a){let o=new ot(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let T=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(o,l):b&&b.isColor&&(v(b,1),T=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Gl)?(h===void 0&&(h=new Ft(new Fa(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Xr(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,(u!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ft(new Xi(2,2),new pi({name:"BackgroundMaterial",uniforms:Xr(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,f){p.getRGB(Zo,Gp(n)),i.buffers.color.setClear(Zo.r,Zo.g,Zo.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function gx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(F,H,k,ne,q){let W=!1;if(a){let Q=v(ne,k,H);c!==Q&&(c=Q,m(c.object)),W=f(F,ne,k,q),W&&T(F,ne,k,q)}else{let Q=H.wireframe===!0;(c.geometry!==ne.id||c.program!==k.id||c.wireframe!==Q)&&(c.geometry=ne.id,c.program=k.id,c.wireframe=Q,W=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,B(F,H,k,ne),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function v(F,H,k){let ne=k.wireframe===!0,q=o[F.id];q===void 0&&(q={},o[F.id]=q);let W=q[H.id];W===void 0&&(W={},q[H.id]=W);let Q=W[ne];return Q===void 0&&(Q=p(d()),W[ne]=Q),Q}function p(F){let H=[],k=[],ne=[];for(let q=0;q<s;q++)H[q]=0,k[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:ne,object:F,attributes:{},index:null}}function f(F,H,k,ne){let q=c.attributes,W=H.attributes,Q=0,te=k.getAttributes();for(let ue in te)if(te[ue].location>=0){let j=q[ue],se=W[ue];if(se===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),j===void 0||j.attribute!==se||se&&j.data!==se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ne}function T(F,H,k,ne){let q={},W=H.attributes,Q=0,te=k.getAttributes();for(let ue in te)if(te[ue].location>=0){let j=W[ue];j===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));let se={};se.attribute=j,j&&j.data&&(se.data=j.data),q[ue]=se,Q++}c.attributes=q,c.attributesNum=Q,c.index=ne}function b(){let F=c.newAttributes;for(let H=0,k=F.length;H<k;H++)F[H]=0}function L(F){N(F,0)}function N(F,H){let k=c.newAttributes,ne=c.enabledAttributes,q=c.attributeDivisors;k[F]=1,ne[F]===0&&(n.enableVertexAttribArray(F),ne[F]=1),q[F]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),q[F]=H)}function P(){let F=c.newAttributes,H=c.enabledAttributes;for(let k=0,ne=H.length;k<ne;k++)H[k]!==F[k]&&(n.disableVertexAttribArray(k),H[k]=0)}function D(F,H,k,ne,q,W,Q){Q===!0?n.vertexAttribIPointer(F,H,k,q,W):n.vertexAttribPointer(F,H,k,ne,q,W)}function B(F,H,k,ne){if(i.isWebGL2===!1&&(F.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=ne.attributes,W=k.getAttributes(),Q=H.defaultAttributeValues;for(let te in W){let ue=W[te];if(ue.location>=0){let V=q[te];if(V===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){let j=V.normalized,se=V.itemSize,ae=t.get(V);if(ae===void 0)continue;let le=ae.buffer,Ce=ae.type,He=ae.bytesPerElement,Ve=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||V.gpuType===Ip);if(V.isInterleavedBufferAttribute){let gt=V.data,$=gt.stride,hn=V.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<ue.locationSize;Xe++)N(ue.location+Xe,gt.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<ue.locationSize;Xe++)L(ue.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<ue.locationSize;Xe++)D(ue.location+Xe,se/ue.locationSize,Ce,j,$*He,(hn+se/ue.locationSize*Xe)*He,Ve)}else{if(V.isInstancedBufferAttribute){for(let gt=0;gt<ue.locationSize;gt++)N(ue.location+gt,V.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let gt=0;gt<ue.locationSize;gt++)L(ue.location+gt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let gt=0;gt<ue.locationSize;gt++)D(ue.location+gt,se/ue.locationSize,Ce,j,se*He,se/ue.locationSize*gt*He,Ve)}}else if(Q!==void 0){let j=Q[te];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(ue.location,j);break;case 3:n.vertexAttrib3fv(ue.location,j);break;case 4:n.vertexAttrib4fv(ue.location,j);break;default:n.vertexAttrib1fv(ue.location,j)}}}}P()}function S(){re();for(let F in o){let H=o[F];for(let k in H){let ne=H[k];for(let q in ne)g(ne[q].object),delete ne[q];delete H[k]}delete o[F]}}function C(F){if(o[F.id]===void 0)return;let H=o[F.id];for(let k in H){let ne=H[k];for(let q in ne)g(ne[q].object),delete ne[q];delete H[k]}delete o[F.id]}function z(F){for(let H in o){let k=o[H];if(k[F.id]===void 0)continue;let ne=k[F.id];for(let q in ne)g(ne[q].object),delete ne[q];delete k[F.id]}}function re(){me(),h=!0,c!==l&&(c=l,m(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:re,resetDefaultState:me,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:L,disableUnusedAttributes:P}}function yx(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function _x(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,L=a||e.has("OES_texture_float"),N=b&&L,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:T,vertexTextures:b,floatFragmentTextures:L,floatVertexTextures:N,maxSamples:P}}function vx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new zi,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let T=r?0:i,b=T*4,L=f.clippingState||null;l.value=L,L=h(g,d,b,m);for(let N=0;N!==b;++N)L[N]=t[N];f.clippingState=L,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let f=m+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,L=m;b!==v;++b,L+=4)a.copy(u[b]).applyMatrix4(T,o),a.normal.toArray(p,L),p[L+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function xx(n){let e=new WeakMap;function t(a,o){return o===Nh?a.mapping=zr:o===Dh&&(a.mapping=Hr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Nh||o===Dh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Vh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var qr=class extends vl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ur=4,Gf=[.125,.215,.35,.446,.526,.582],Xs=20,xh=new qr,Wf=new ot,bh=null,Mh=0,Sh=0,Gs=(1+Math.sqrt(5))/2,Lr=1/Gs,Xf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Gs,Lr),new U(0,Gs,-Lr),new U(Lr,0,Gs),new U(-Lr,0,Gs),new U(Gs,Lr,0),new U(-Gs,Lr,0)],bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){bh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bh,Mh,Sh),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Da,format:ti,colorSpace:Gi,depthBuffer:!1},s=qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Mx(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,xh)}_sceneToCubeUV(e,t,i,s){let o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Wf),h.toneMapping=ms,h.autoClear=!1;let m=new Kt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Ft(new Fa,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Wf),v=!0);for(let f=0;f<6;f++){let T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;Jo(s,T*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===zr||e.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xf[(s-1)%Xf.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xs-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Xs;p>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xs}`);let f=[],T=0;for(let D=0;D<Xs;++D){let B=D/v,S=Math.exp(-B*B/2);f.push(S),D===0?T+=S:D<p&&(T+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let L=this._sizeLods[s],N=3*L*(s>b-Ur?s-b+Ur:0),P=4*(this._cubeSize-L);Jo(t,N,P,3*L,2*L),l.setRenderTarget(t),l.render(u,xh)}};function bx(n){let e=[],t=[],i=[],s=n,r=n-Ur+1+Gf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ur?l=Gf[a-n+Ur-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,f=1,T=new Float32Array(v*g*m),b=new Float32Array(p*g*m),L=new Float32Array(f*g*m);for(let P=0;P<m;P++){let D=P%3*2/3-1,B=P>2?0:-1,S=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];T.set(S,v*g*P),b.set(d,p*g*P);let C=[P,P,P,P,P,P];L.set(C,f*g*P)}let N=new Hn;N.setAttribute("position",new jn(T,v)),N.setAttribute("uv",new jn(b,p)),N.setAttribute("faceIndex",new jn(L,f)),e.push(N),s>Ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qf(n,e,t){let i=new Wi(n,e,t);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Mx(n,e,t){let i=new Float32Array(Xs),s=new U(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function $f(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Yf(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function Sx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Nh||l===Dh,h=l===zr||l===Hr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new bl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new bl(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function wx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ex(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let T=m.array;v=m.version;for(let b=0,L=T.length;b<L;b+=3){let N=T[b+0],P=T[b+1],D=T[b+2];d.push(N,P,P,D,D,N)}}else if(g!==void 0){let T=g.array;v=g.version;for(let b=0,L=T.length/3-1;b<L;b+=3){let N=b+0,P=b+1,D=b+2;d.push(N,P,P,D,D,N)}}else return;let p=new(Hp(d)?_l:yl)(d,1);p.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tx(n,e,t,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,o,m*l,v),t.update(g,r,v)}function d(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<v;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let f=0;for(let T=0;T<v;T++)f+=g[T];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ax(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Cx(n,e){return n[0]-e[0]}function Rx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Lx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let F=function(){re.dispose(),r.delete(h),h.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();let T=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,N=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],B=0;T===!0&&(B=1),b===!0&&(B=2),L===!0&&(B=3);let S=h.attributes.position.count*B,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let z=new Float32Array(S*C*4*g),re=new ml(z,S,C,g);re.type=Hi,re.needsUpdate=!0;let me=B*4;for(let H=0;H<g;H++){let k=N[H],ne=P[H],q=D[H],W=S*C*4*H;for(let Q=0;Q<k.count;Q++){let te=Q*me;T===!0&&(a.fromBufferAttribute(k,Q),z[W+te+0]=a.x,z[W+te+1]=a.y,z[W+te+2]=a.z,z[W+te+3]=0),b===!0&&(a.fromBufferAttribute(ne,Q),z[W+te+4]=a.x,z[W+te+5]=a.y,z[W+te+6]=a.z,z[W+te+7]=0),L===!0&&(a.fromBufferAttribute(q,Q),z[W+te+8]=a.x,z[W+te+9]=a.y,z[W+te+10]=a.z,z[W+te+11]=q.itemSize===4?a.w:1)}}v={count:g,texture:re,size:new et(S,C)},r.set(h,v),h.addEventListener("dispose",F)}let p=0;for(let T=0;T<d.length;T++)p+=d[T];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let b=0;b<m;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<m;b++){let L=g[b];L[0]=b,L[1]=d[b]}g.sort(Rx);for(let b=0;b<8;b++)b<m&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Cx);let v=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let L=o[b],N=L[0],P=L[1];N!==Number.MAX_SAFE_INTEGER&&P?(v&&h.getAttribute("morphTarget"+b)!==v[N]&&h.setAttribute("morphTarget"+b,v[N]),p&&h.getAttribute("morphNormal"+b)!==p[N]&&h.setAttribute("morphNormal"+b,p[N]),s[b]=P,f+=P):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let T=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",T),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Px(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ml=class extends zn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ys,h!==Ys&&h!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ys&&(i=fs),i===void 0&&h===Vr&&(i=$s),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xp=new zn,qp=new Ml(1,1);qp.compareFunction=zp;var $p=new ml,Yp=new zh,jp=new xl,jf=[],Zf=[],Jf=new Float32Array(16),Kf=new Float32Array(9),Qf=new Float32Array(4);function Qr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=jf[s];if(r===void 0&&(r=new Float32Array(s),jf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ql(n,e){let t=Zf[e];t===void 0&&(t=new Int32Array(e),Zf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function Ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function Ox(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),rn(t,i)}}function Fx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),rn(t,i)}}function kx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),rn(t,i)}}function Bx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function Hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function Gx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function Xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function $x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?qp:Xp;t.setTexture2D(e||r,s)}function Yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yp,s)}function jx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jp,s)}function Zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$p,s)}function Jx(n){switch(n){case 5126:return Ix;case 35664:return Nx;case 35665:return Dx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return kx;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Zx}}function Kx(n,e){n.uniform1fv(this.addr,e)}function Qx(n,e){let t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function eb(n,e){let t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function tb(n,e){let t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function nb(n,e){let t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ib(n,e){let t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sb(n,e){let t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rb(n,e){n.uniform1iv(this.addr,e)}function ab(n,e){n.uniform2iv(this.addr,e)}function ob(n,e){n.uniform3iv(this.addr,e)}function lb(n,e){n.uniform4iv(this.addr,e)}function cb(n,e){n.uniform1uiv(this.addr,e)}function hb(n,e){n.uniform2uiv(this.addr,e)}function ub(n,e){n.uniform3uiv(this.addr,e)}function db(n,e){n.uniform4uiv(this.addr,e)}function fb(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xp,r[a])}function pb(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yp,r[a])}function mb(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||jp,r[a])}function gb(n,e,t){let i=this.cache,s=e.length,r=ql(t,s);sn(i,r)||(n.uniform1iv(this.addr,r),rn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$p,r[a])}function yb(n){switch(n){case 5126:return Kx;case 35664:return Qx;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ab;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return hb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}var Gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}},Wh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yb(t.type)}},Xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},wh=/(\w+)(\])?(\[|\.)?/g;function ep(n,e){n.seq.push(e),n.map[e.id]=e}function _b(n,e,t){let i=n.name,s=i.length;for(wh.lastIndex=0;;){let r=wh.exec(i),a=wh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ep(t,c===void 0?new Gh(o,n,e):new Wh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Xh(o),ep(t,u)),t=u}}}var Br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);_b(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function tp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var vb=37297,xb=0;function bb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Mb(n){let e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(n),i;switch(e===t?i="":e===hl&&t===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&t===hl&&(i="LinearSRGBToLinearDisplayP3"),n){case Gi:case Wl:return[i,"LinearTransferOETF"];case Wt:case pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function np(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+bb(n.getShaderSource(e),a)}else return s}function Sb(n,e){let t=Mb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wb(n,e){let t;switch(e){case C0:t="Linear";break;case R0:t="Reinhard";break;case L0:t="OptimizedCineon";break;case P0:t="ACESFilmic";break;case N0:t="AgX";break;case I0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Eb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function Tb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function Ab(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Or(n){return n!==""}function ip(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(n){return n.replace(Rb,Pb)}var Lb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pb(n,e){let t=dt[e];if(t===void 0){let i=Lb.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}var Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(n){return n.replace(Ib,Nb)}function Nb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Db(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ub(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ob(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case T0:e="ENVMAP_BLENDING_MIX";break;case A0:e="ENVMAP_BLENDING_ADD";break}return e}function kb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Db(t),c=Ub(t),h=Ob(t),u=Fb(t),d=kb(t),m=t.isWebGL2?"":Eb(t),g=Tb(t),v=Ab(r),p=s.createProgram(),f,T,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Or).join(`
`),f.length>0&&(f+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Or).join(`
`),T.length>0&&(T+=`
`)):(f=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),T=[m,ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?dt.tonemapping_pars_fragment:"",t.toneMapping!==ms?wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Sb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=qh(a),a=ip(a,t),a=sp(a,t),o=qh(o),o=ip(o,t),o=sp(o,t),a=rp(a),o=rp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);let L=b+f+a,N=b+T+o,P=tp(s,s.VERTEX_SHADER,L),D=tp(s,s.FRAGMENT_SHADER,N);s.attachShader(p,P),s.attachShader(p,D),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function B(re){if(n.debug.checkShaderErrors){let me=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(D).trim(),k=!0,ne=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,P,D);else{let q=np(s,P,"vertex"),W=np(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+me+`
`+q+`
`+W)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(F===""||H==="")&&(ne=!1);ne&&(re.diagnostics={runnable:k,programLog:me,vertexShader:{log:F,prefix:f},fragmentShader:{log:H,prefix:T}})}s.deleteShader(P),s.deleteShader(D),S=new Br(s,p),C=Cb(s,p)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,vb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=D,this}var zb=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Yh(e),t.set(e,i)),i}},Yh=class{constructor(e){this.id=zb++,this.code=e,this.usedTimes=0}};function Hb(n,e,t,i,s,r,a){let o=new Oa,l=new $h,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,C,z,re,me){let F=re.fog,H=me.geometry,k=S.isMeshStandardMaterial?re.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=ne&&ne.mapping===Gl?ne.image.height:null,W=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=Q!==void 0?Q.length:0,ue=0;H.morphAttributes.position!==void 0&&(ue=1),H.morphAttributes.normal!==void 0&&(ue=2),H.morphAttributes.color!==void 0&&(ue=3);let V,j,se,ae;if(W){let an=Un[W];V=an.vertexShader,j=an.fragmentShader}else V=S.vertexShader,j=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);let le=n.getRenderTarget(),Ce=me.isInstancedMesh===!0,He=me.isBatchedMesh===!0,Ve=!!S.map,gt=!!S.matcap,$=!!ne,hn=!!S.aoMap,Xe=!!S.lightMap,nt=!!S.bumpMap,De=!!S.normalMap,Lt=!!S.displacementMap,ct=!!S.emissiveMap,I=!!S.metalnessMap,E=!!S.roughnessMap,Z=S.anisotropy>0,pe=S.clearcoat>0,de=S.iridescence>0,ge=S.sheen>0,ke=S.transmission>0,Se=Z&&!!S.anisotropyMap,Pe=pe&&!!S.clearcoatMap,$e=pe&&!!S.clearcoatNormalMap,ht=pe&&!!S.clearcoatRoughnessMap,fe=de&&!!S.iridescenceMap,Mt=de&&!!S.iridescenceThicknessMap,ft=ge&&!!S.sheenColorMap,Qe=ge&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ie=!!S.specularColorMap,rt=!!S.specularIntensityMap,bt=ke&&!!S.transmissionMap,Dt=ke&&!!S.thicknessMap,ut=!!S.gradientMap,_e=!!S.alphaMap,O=S.alphaTest>0,be=!!S.alphaHash,Me=!!S.extensions,Je=!!H.attributes.uv1,qe=!!H.attributes.uv2,wt=!!H.attributes.uv3,Tt=ms;return S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:j,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:He,instancing:Ce,instancingColor:Ce&&me.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Gi,map:Ve,matcap:gt,envMap:$,envMapMode:$&&ne.mapping,envMapCubeUVHeight:q,aoMap:hn,lightMap:Xe,bumpMap:nt,normalMap:De,displacementMap:d&&Lt,emissiveMap:ct,normalMapObjectSpace:De&&S.normalMapType===$0,normalMapTangentSpace:De&&S.normalMapType===fu,metalnessMap:I,roughnessMap:E,anisotropy:Z,anisotropyMap:Se,clearcoat:pe,clearcoatMap:Pe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ht,iridescence:de,iridescenceMap:fe,iridescenceThicknessMap:Mt,sheen:ge,sheenColorMap:ft,sheenRoughnessMap:Qe,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:rt,transmission:ke,transmissionMap:bt,thicknessMap:Dt,gradientMap:ut,opaque:S.transparent===!1&&S.blending===Fr,alphaMap:_e,alphaTest:O,alphaHash:be,combine:S.combine,mapUv:Ve&&v(S.map.channel),aoMapUv:hn&&v(S.aoMap.channel),lightMapUv:Xe&&v(S.lightMap.channel),bumpMapUv:nt&&v(S.bumpMap.channel),normalMapUv:De&&v(S.normalMap.channel),displacementMapUv:Lt&&v(S.displacementMap.channel),emissiveMapUv:ct&&v(S.emissiveMap.channel),metalnessMapUv:I&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Se&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:$e&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(S.sheenRoughnessMap.channel),specularMapUv:Ge&&v(S.specularMap.channel),specularColorMapUv:Ie&&v(S.specularColorMap.channel),specularIntensityMapUv:rt&&v(S.specularIntensityMap.channel),transmissionMapUv:bt&&v(S.transmissionMap.channel),thicknessMapUv:Dt&&v(S.thicknessMap.channel),alphaMapUv:_e&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(De||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:qe,vertexUv3s:wt,pointsUvs:me.isPoints===!0&&!!H.attributes.uv&&(Ve||_e),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:me.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Rt.getTransfer(S.map.colorSpace)===Ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===On,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Me&&S.extensions.derivatives===!0,extensionFragDepth:Me&&S.extensions.fragDepth===!0,extensionDrawBuffers:Me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(let z in S.defines)C.push(z),C.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(T(C,S),b(C,S),C.push(n.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function T(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function b(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function L(S){let C=g[S.type],z;if(C){let re=Un[C];z=Xl.clone(re.uniforms)}else z=S.uniforms;return z}function N(S,C){let z;for(let re=0,me=c.length;re<me;re++){let F=c[re];if(F.cacheKey===C){z=F,++z.usedTimes;break}}return z===void 0&&(z=new Bb(n,C,S,r),c.push(z)),z}function P(S){if(--S.usedTimes===0){let C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:L,acquireProgram:N,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:B}}function Vb(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Gb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function op(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,g,v,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),e++,f}function o(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,v,p){let f=a(u,d,m,g,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Gb),i.length>1&&i.sort(d||op),s.length>1&&s.sort(d||op)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Wb(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new lp,n.set(i,[a])):s>=r.length?(a=new lp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Xb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ot};break;case"SpotLight":t={position:new U,direction:new U,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function qb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var $b=0;function Yb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jb(n,e){let t=new Xb,i=qb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new lt,o=new lt;function l(h,u){let d=0,m=0,g=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let v=0,p=0,f=0,T=0,b=0,L=0,N=0,P=0,D=0,B=0,S=0;h.sort(Yb);let C=u===!0?Math.PI:1;for(let re=0,me=h.length;re<me;re++){let F=h[re],H=F.color,k=F.intensity,ne=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=H.r*k*C,m+=H.g*k*C,g+=H.b*k*C;else if(F.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(F.sh.coefficients[W],k);S++}else if(F.isDirectionalLight){let W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*C),F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[v]=te,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=F.shadow.matrix,L++}s.directional[v]=W,v++}else if(F.isSpotLight){let W=t.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(H).multiplyScalar(k*C),W.distance=ne,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,s.spot[f]=W;let Q=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,Q.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[f]=Q.matrix,F.castShadow){let te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=q,P++}f++}else if(F.isRectAreaLight){let W=t.get(F);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),s.rectArea[T]=W,T++}else if(F.isPointLight){let W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*C),W.distance=F.distance,W.decay=F.decay,F.castShadow){let Q=F.shadow,te=i.get(F);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=F.shadow.matrix,N++}s.point[p]=W,p++}else if(F.isHemisphereLight){let W=t.get(F);W.skyColor.copy(F.color).multiplyScalar(k*C),W.groundColor.copy(F.groundColor).multiplyScalar(k*C),s.hemi[b]=W,b++}}T>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==v||z.pointLength!==p||z.spotLength!==f||z.rectAreaLength!==T||z.hemiLength!==b||z.numDirectionalShadows!==L||z.numPointShadows!==N||z.numSpotShadows!==P||z.numSpotMaps!==D||z.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=T,s.point.length=p,s.hemi.length=b,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+D-B,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=S,z.directionalLength=v,z.pointLength=p,z.spotLength=f,z.rectAreaLength=T,z.hemiLength=b,z.numDirectionalShadows=L,z.numPointShadows=N,z.numSpotShadows=P,z.numSpotMaps=D,z.numLightProbes=S,s.version=$b++)}function c(h,u){let d=0,m=0,g=0,v=0,p=0,f=u.matrixWorldInverse;for(let T=0,b=h.length;T<b;T++){let L=h[T];if(L.isDirectionalLight){let N=s.directional[d];N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),d++}else if(L.isSpotLight){let N=s.spot[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(f),N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(f),g++}else if(L.isRectAreaLight){let N=s.rectArea[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(f),o.identity(),a.copy(L.matrixWorld),a.premultiply(f),o.extractRotation(a),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),v++}else if(L.isPointLight){let N=s.point[m];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(f),m++}else if(L.isHemisphereLight){let N=s.hemi[p];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function cp(n,e){let t=new jb(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zb(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new cp(n,e),t.set(r,[l])):a>=o.length?(l=new cp(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var jh=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zh=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Jb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`;function Qb(n,e,t){let i=new ka,s=new et,r=new et,a=new xt,o=new jh({depthPacking:q0}),l=new Zh,c={},h=t.maxTextureSize,u={[Bn]:cn,[cn]:Bn,[On]:On},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Jb,fragmentShader:Kb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Hn;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ft(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let f=this.type;this.render=function(P,D,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;let S=n.getRenderTarget(),C=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),re=n.state;re.setBlending(ps),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let me=f!==Bi&&this.type===Bi,F=f===Bi&&this.type!==Bi;for(let H=0,k=P.length;H<k;H++){let ne=P[H],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||me===!0||F===!0){let te=this.type!==Bi?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new Wi(s.x,s.y,te),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Q=q.getViewportCount();for(let te=0;te<Q;te++){let ue=q.getViewport(te);a.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),re.viewport(a),q.updateMatrices(ne,te),i=q.getFrustum(),L(D,B,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Bi&&T(q,B),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,C,z)};function T(P,D){let B=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,B,d,v,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,B,m,v,null)}function b(P,D,B,S){let C=null,z=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)C=z;else if(C=B.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let re=C.uuid,me=D.uuid,F=c[re];F===void 0&&(F={},c[re]=F);let H=F[me];H===void 0&&(H=C.clone(),F[me]=H,D.addEventListener("dispose",N)),C=H}if(C.visible=D.visible,C.wireframe=D.wireframe,S===Bi?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let re=n.properties.get(C);re.light=B}return C}function L(P,D,B,S,C){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===Bi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);let me=e.update(P),F=P.material;if(Array.isArray(F)){let H=me.groups;for(let k=0,ne=H.length;k<ne;k++){let q=H[k],W=F[q.materialIndex];if(W&&W.visible){let Q=b(P,W,S,C);P.onBeforeShadow(n,P,D,B,me,Q,q),n.renderBufferDirect(B,null,me,Q,P,q),P.onAfterShadow(n,P,D,B,me,Q,q)}}}else if(F.visible){let H=b(P,F,S,C);P.onBeforeShadow(n,P,D,B,me,H,null),n.renderBufferDirect(B,null,me,H,P,null),P.onAfterShadow(n,P,D,B,me,H,null)}}let re=P.children;for(let me=0,F=re.length;me<F;me++)L(re[me],D,B,S,C)}function N(P){P.target.removeEventListener("dispose",N);for(let B in c){let S=c[B],C=P.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function eM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,be=new xt,Me=null,Je=new xt(0,0,0,0);return{setMask:function(qe){Me!==qe&&!O&&(n.colorMask(qe,qe,qe,qe),Me=qe)},setLocked:function(qe){O=qe},setClear:function(qe,wt,Tt,St,an){an===!0&&(qe*=St,wt*=St,Tt*=St),be.set(qe,wt,Tt,St),Je.equals(be)===!1&&(n.clearColor(qe,wt,Tt,St),Je.copy(be))},reset:function(){O=!1,Me=null,Je.set(-1,0,0,0)}}}function r(){let O=!1,be=null,Me=null,Je=null;return{setTest:function(qe){qe?He(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(qe){be!==qe&&!O&&(n.depthMask(qe),be=qe)},setFunc:function(qe){if(Me!==qe){switch(qe){case v0:n.depthFunc(n.NEVER);break;case x0:n.depthFunc(n.ALWAYS);break;case b0:n.depthFunc(n.LESS);break;case rl:n.depthFunc(n.LEQUAL);break;case M0:n.depthFunc(n.EQUAL);break;case S0:n.depthFunc(n.GEQUAL);break;case w0:n.depthFunc(n.GREATER);break;case E0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=qe}},setLocked:function(qe){O=qe},setClear:function(qe){Je!==qe&&(n.clearDepth(qe),Je=qe)},reset:function(){O=!1,be=null,Me=null,Je=null}}}function a(){let O=!1,be=null,Me=null,Je=null,qe=null,wt=null,Tt=null,St=null,an=null;return{setTest:function(At){O||(At?He(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(At){be!==At&&!O&&(n.stencilMask(At),be=At)},setFunc:function(At,un,Kn){(Me!==At||Je!==un||qe!==Kn)&&(n.stencilFunc(At,un,Kn),Me=At,Je=un,qe=Kn)},setOp:function(At,un,Kn){(wt!==At||Tt!==un||St!==Kn)&&(n.stencilOp(At,un,Kn),wt=At,Tt=un,St=Kn)},setLocked:function(At){O=At},setClear:function(At){an!==At&&(n.clearStencil(At),an=At)},reset:function(){O=!1,be=null,Me=null,Je=null,qe=null,wt=null,Tt=null,St=null,an=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,v=[],p=null,f=!1,T=null,b=null,L=null,N=null,P=null,D=null,B=null,S=new ot(0,0,0),C=0,z=!1,re=null,me=null,F=null,H=null,k=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=W>=2);let te=null,ue={},V=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),se=new xt().fromArray(V),ae=new xt().fromArray(j);function le(O,be,Me,Je){let qe=new Uint8Array(4),wt=n.createTexture();n.bindTexture(O,wt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Tt=0;Tt<Me;Tt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,Je,0,n.RGBA,n.UNSIGNED_BYTE,qe):n.texImage2D(be+Tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,qe);return wt}let Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(rl),ct(!1),I(Hd),He(n.CULL_FACE),De(ps);function He(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ve(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function gt(O,be){return m[O]!==be?(n.bindFramebuffer(O,be),m[O]=be,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=be),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function $(O,be){let Me=v,Je=!1;if(O)if(Me=g.get(be),Me===void 0&&(Me=[],g.set(be,Me)),O.isWebGLMultipleRenderTargets){let qe=O.texture;if(Me.length!==qe.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Tt=qe.length;wt<Tt;wt++)Me[wt]=n.COLOR_ATTACHMENT0+wt;Me.length=qe.length,Je=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,Je=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,Je=!0);Je&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function hn(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let Xe={[Ws]:n.FUNC_ADD,[s0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[Xd]=n.MIN,Xe[qd]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[Xd]=O.MIN_EXT,Xe[qd]=O.MAX_EXT)}let nt={[a0]:n.ZERO,[o0]:n.ONE,[l0]:n.SRC_COLOR,[Ph]:n.SRC_ALPHA,[p0]:n.SRC_ALPHA_SATURATE,[d0]:n.DST_COLOR,[h0]:n.DST_ALPHA,[c0]:n.ONE_MINUS_SRC_COLOR,[Ih]:n.ONE_MINUS_SRC_ALPHA,[f0]:n.ONE_MINUS_DST_COLOR,[u0]:n.ONE_MINUS_DST_ALPHA,[m0]:n.CONSTANT_COLOR,[g0]:n.ONE_MINUS_CONSTANT_COLOR,[y0]:n.CONSTANT_ALPHA,[_0]:n.ONE_MINUS_CONSTANT_ALPHA};function De(O,be,Me,Je,qe,wt,Tt,St,an,At){if(O===ps){f===!0&&(Ve(n.BLEND),f=!1);return}if(f===!1&&(He(n.BLEND),f=!0),O!==i0){if(O!==T||At!==z){if((b!==Ws||P!==Ws)&&(n.blendEquation(n.FUNC_ADD),b=Ws,P=Ws),At)switch(O){case Fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vd:n.blendFunc(n.ONE,n.ONE);break;case Gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}L=null,N=null,D=null,B=null,S.set(0,0,0),C=0,T=O,z=At}return}qe=qe||be,wt=wt||Me,Tt=Tt||Je,(be!==b||qe!==P)&&(n.blendEquationSeparate(Xe[be],Xe[qe]),b=be,P=qe),(Me!==L||Je!==N||wt!==D||Tt!==B)&&(n.blendFuncSeparate(nt[Me],nt[Je],nt[wt],nt[Tt]),L=Me,N=Je,D=wt,B=Tt),(St.equals(S)===!1||an!==C)&&(n.blendColor(St.r,St.g,St.b,an),S.copy(St),C=an),T=O,z=!1}function Lt(O,be){O.side===On?Ve(n.CULL_FACE):He(n.CULL_FACE);let Me=O.side===cn;be&&(Me=!Me),ct(Me),O.blending===Fr&&O.transparent===!1?De(ps):De(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let Je=O.stencilWrite;c.setTest(Je),Je&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){re!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),re=O)}function I(O){O!==e0?(He(n.CULL_FACE),O!==me&&(O===Hd?n.cullFace(n.BACK):O===t0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),me=O}function E(O){O!==F&&(q&&n.lineWidth(O),F=O)}function Z(O,be,Me){O?(He(n.POLYGON_OFFSET_FILL),(H!==be||k!==Me)&&(n.polygonOffset(be,Me),H=be,k=Me)):Ve(n.POLYGON_OFFSET_FILL)}function pe(O){O?He(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function de(O){O===void 0&&(O=n.TEXTURE0+ne-1),te!==O&&(n.activeTexture(O),te=O)}function ge(O,be,Me){Me===void 0&&(te===null?Me=n.TEXTURE0+ne-1:Me=te);let Je=ue[Me];Je===void 0&&(Je={type:void 0,texture:void 0},ue[Me]=Je),(Je.type!==O||Je.texture!==be)&&(te!==Me&&(n.activeTexture(Me),te=Me),n.bindTexture(O,be||Ce[O]),Je.type=O,Je.texture=be)}function ke(){let O=ue[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function bt(O){ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function Dt(O,be){let Me=u.get(be);Me===void 0&&(Me=new WeakMap,u.set(be,Me));let Je=Me.get(O);Je===void 0&&(Je=n.getUniformBlockIndex(be,O.name),Me.set(O,Je))}function ut(O,be){let Je=u.get(be).get(O);h.get(be)!==Je&&(n.uniformBlockBinding(be,Je,O.__bindingPointIndex),h.set(be,Je))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,ue={},m={},g=new WeakMap,v=[],p=null,f=!1,T=null,b=null,L=null,N=null,P=null,D=null,B=null,S=new ot(0,0,0),C=0,z=!1,re=null,me=null,F=null,H=null,k=null,se.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:He,disable:Ve,bindFramebuffer:gt,drawBuffers:$,useProgram:hn,setBlending:De,setMaterial:Lt,setFlipSided:ct,setCullFace:I,setLineWidth:E,setPolygonOffset:Z,setScissorTest:pe,activeTexture:de,bindTexture:ge,unbindTexture:ke,compressedTexImage2D:Se,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:ut,texStorage2D:ft,texStorage3D:Qe,texSubImage2D:$e,texSubImage3D:ht,compressedTexSubImage2D:fe,compressedTexSubImage3D:Mt,scissor:rt,viewport:bt,reset:_e}}function tM(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):Ua("canvas")}function v(I,E,Z,pe){let de=1;if((I.width>pe||I.height>pe)&&(de=pe/Math.max(I.width,I.height)),de<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ge=E?dl:Math.floor,ke=ge(de*I.width),Se=ge(de*I.height);u===void 0&&(u=g(ke,Se));let Pe=Z?g(ke,Se):u;return Pe.width=ke,Pe.height=Se,Pe.getContext("2d").drawImage(I,0,0,ke,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ke+"x"+Se+")."),Pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function p(I){return kh(I.width)&&kh(I.height)}function f(I){return o?!1:I.wrapS!==Tn||I.wrapT!==Tn||I.minFilter!==dn&&I.minFilter!==Dn}function T(I,E){return I.generateMipmaps&&E&&I.minFilter!==dn&&I.minFilter!==Dn}function b(I){n.generateMipmap(I)}function L(I,E,Z,pe,de=!1){if(o===!1)return E;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ge=E;if(E===n.RED&&(Z===n.FLOAT&&(ge=n.R32F),Z===n.HALF_FLOAT&&(ge=n.R16F),Z===n.UNSIGNED_BYTE&&(ge=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ge=n.R8UI),Z===n.UNSIGNED_SHORT&&(ge=n.R16UI),Z===n.UNSIGNED_INT&&(ge=n.R32UI),Z===n.BYTE&&(ge=n.R8I),Z===n.SHORT&&(ge=n.R16I),Z===n.INT&&(ge=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(ge=n.RG32F),Z===n.HALF_FLOAT&&(ge=n.RG16F),Z===n.UNSIGNED_BYTE&&(ge=n.RG8)),E===n.RGBA){let ke=de?ll:Rt.getTransfer(pe);Z===n.FLOAT&&(ge=n.RGBA32F),Z===n.HALF_FLOAT&&(ge=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ge=ke===Ot?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(I,E,Z){return T(I,Z)===!0||I.isFramebufferTexture&&I.minFilter!==dn&&I.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function P(I){return I===dn||I===Yd||I===Zc?n.NEAREST:n.LINEAR}function D(I){let E=I.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&h.delete(E)}function B(I){let E=I.target;E.removeEventListener("dispose",B),z(E)}function S(I){let E=i.get(I);if(E.__webglInit===void 0)return;let Z=I.source,pe=d.get(Z);if(pe){let de=pe[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&C(I),Object.keys(pe).length===0&&d.delete(Z)}i.remove(I)}function C(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let Z=I.source,pe=d.get(Z);delete pe[E.__cacheKey],a.memory.textures--}function z(I){let E=I.texture,Z=i.get(I),pe=i.get(E);if(pe.__webglTexture!==void 0&&(n.deleteTexture(pe.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Z.__webglFramebuffer[de]))for(let ge=0;ge<Z.__webglFramebuffer[de].length;ge++)n.deleteFramebuffer(Z.__webglFramebuffer[de][ge]);else n.deleteFramebuffer(Z.__webglFramebuffer[de]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[de])}else{if(Array.isArray(Z.__webglFramebuffer))for(let de=0;de<Z.__webglFramebuffer.length;de++)n.deleteFramebuffer(Z.__webglFramebuffer[de]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let de=0;de<Z.__webglColorRenderbuffer.length;de++)Z.__webglColorRenderbuffer[de]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[de]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let de=0,ge=E.length;de<ge;de++){let ke=i.get(E[de]);ke.__webglTexture&&(n.deleteTexture(ke.__webglTexture),a.memory.textures--),i.remove(E[de])}i.remove(E),i.remove(I)}let re=0;function me(){re=0}function F(){let I=re;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),re+=1,I}function H(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function k(I,E){let Z=i.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){let pe=I.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,I,E);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function ne(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){se(Z,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function q(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){se(Z,I,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function W(I,E){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){ae(Z,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}let Q={[ys]:n.REPEAT,[Tn]:n.CLAMP_TO_EDGE,[Uh]:n.MIRRORED_REPEAT},te={[dn]:n.NEAREST,[Yd]:n.NEAREST_MIPMAP_NEAREST,[Zc]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[U0]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},ue={[Y0]:n.NEVER,[ey]:n.ALWAYS,[j0]:n.LESS,[zp]:n.LEQUAL,[Z0]:n.EQUAL,[Q0]:n.GEQUAL,[J0]:n.GREATER,[K0]:n.NOTEQUAL};function V(I,E,Z){if(Z?(n.texParameteri(I,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,te[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,te[E.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Tn||E.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,P(E.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,P(E.minFilter)),E.minFilter!==dn&&E.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let pe=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===dn||E.minFilter!==Zc&&E.minFilter!==_s||E.type===Hi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Da&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(I,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function j(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",D));let pe=E.source,de=d.get(pe);de===void 0&&(de={},d.set(pe,de));let ge=H(E);if(ge!==I.__cacheKey){de[ge]===void 0&&(de[ge]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),de[ge].usedTimes++;let ke=de[I.__cacheKey];ke!==void 0&&(de[I.__cacheKey].usedTimes--,ke.usedTimes===0&&C(E)),I.__cacheKey=ge,I.__webglTexture=de[ge].texture}return Z}function se(I,E,Z){let pe=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=n.TEXTURE_3D);let de=j(I,E),ge=E.source;t.bindTexture(pe,I.__webglTexture,n.TEXTURE0+Z);let ke=i.get(ge);if(ge.version!==ke.__version||de===!0){t.activeTexture(n.TEXTURE0+Z);let Se=Rt.getPrimaries(Rt.workingColorSpace),Pe=E.colorSpace===ni?null:Rt.getPrimaries(E.colorSpace),$e=E.colorSpace===ni||Se===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ht=f(E)&&p(E.image)===!1,fe=v(E.image,ht,!1,s.maxTextureSize);fe=ct(E,fe);let Mt=p(fe)||o,ft=r.convert(E.format,E.colorSpace),Qe=r.convert(E.type),Ge=L(E.internalFormat,ft,Qe,E.colorSpace,E.isVideoTexture);V(pe,E,Mt);let Ie,rt=E.mipmaps,bt=o&&E.isVideoTexture!==!0&&Ge!==kp,Dt=ke.__version===void 0||de===!0,ut=N(E,fe,Mt);if(E.isDepthTexture)Ge=n.DEPTH_COMPONENT,o?E.type===Hi?Ge=n.DEPTH_COMPONENT32F:E.type===fs?Ge=n.DEPTH_COMPONENT24:E.type===$s?Ge=n.DEPTH24_STENCIL8:Ge=n.DEPTH_COMPONENT16:E.type===Hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ys&&Ge===n.DEPTH_COMPONENT&&E.type!==du&&E.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fs,Qe=r.convert(E.type)),E.format===Vr&&Ge===n.DEPTH_COMPONENT&&(Ge=n.DEPTH_STENCIL,E.type!==$s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=$s,Qe=r.convert(E.type))),Dt&&(bt?t.texStorage2D(n.TEXTURE_2D,1,Ge,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,ft,Qe,null));else if(E.isDataTexture)if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data);E.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,ft,Qe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ge,fe.width,fe.height,0,ft,Qe,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){bt&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,rt[0].width,rt[0].height,fe.depth);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],E.format!==ti?ft!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,fe.depth,ft,Ie.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ie.width,Ie.height,fe.depth,ft,Qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ge,Ie.width,Ie.height,fe.depth,0,ft,Qe,Ie.data)}else{bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],E.format!==ti?ft!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie.width,Ie.height,ft,Qe,Ie.data):t.texImage2D(n.TEXTURE_2D,_e,Ge,Ie.width,Ie.height,0,ft,Qe,Ie.data)}else if(E.isDataArrayTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ge,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ft,Qe,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ge,fe.width,fe.height,fe.depth,0,ft,Qe,fe.data);else if(E.isData3DTexture)bt?(Dt&&t.texStorage3D(n.TEXTURE_3D,ut,Ge,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ft,Qe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ge,fe.width,fe.height,fe.depth,0,ft,Qe,fe.data);else if(E.isFramebufferTexture){if(Dt)if(bt)t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height);else{let _e=fe.width,O=fe.height;for(let be=0;be<ut;be++)t.texImage2D(n.TEXTURE_2D,be,Ge,_e,O,0,ft,Qe,null),_e>>=1,O>>=1}}else if(rt.length>0&&Mt){bt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,rt[0].width,rt[0].height);for(let _e=0,O=rt.length;_e<O;_e++)Ie=rt[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ft,Qe,Ie):t.texImage2D(n.TEXTURE_2D,_e,Ge,ft,Qe,Ie);E.generateMipmaps=!1}else bt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ut,Ge,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,Qe,fe)):t.texImage2D(n.TEXTURE_2D,0,Ge,ft,Qe,fe);T(E,Mt)&&b(pe),ke.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ae(I,E,Z){if(E.image.length!==6)return;let pe=j(I,E),de=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);let ge=i.get(de);if(de.version!==ge.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let ke=Rt.getPrimaries(Rt.workingColorSpace),Se=E.colorSpace===ni?null:Rt.getPrimaries(E.colorSpace),Pe=E.colorSpace===ni||ke===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ht=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let _e=0;_e<6;_e++)!$e&&!ht?fe[_e]=v(E.image[_e],!1,!0,s.maxCubemapSize):fe[_e]=ht?E.image[_e].image:E.image[_e],fe[_e]=ct(E,fe[_e]);let Mt=fe[0],ft=p(Mt)||o,Qe=r.convert(E.format,E.colorSpace),Ge=r.convert(E.type),Ie=L(E.internalFormat,Qe,Ge,E.colorSpace),rt=o&&E.isVideoTexture!==!0,bt=ge.__version===void 0||pe===!0,Dt=N(E,Mt,ft);V(n.TEXTURE_CUBE_MAP,E,ft);let ut;if($e){rt&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,Mt.width,Mt.height);for(let _e=0;_e<6;_e++){ut=fe[_e].mipmaps;for(let O=0;O<ut.length;O++){let be=ut[O];E.format!==ti?Qe!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,be.width,be.height,Qe,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,be.width,be.height,Qe,Ge,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,Ie,be.width,be.height,0,Qe,Ge,be.data)}}}else{ut=E.mipmaps,rt&&bt&&(ut.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ie,fe[0].width,fe[0].height));for(let _e=0;_e<6;_e++)if(ht){rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe[_e].width,fe[_e].height,Qe,Ge,fe[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,fe[_e].width,fe[_e].height,0,Qe,Ge,fe[_e].data);for(let O=0;O<ut.length;O++){let Me=ut[O].image[_e].image;rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Me.width,Me.height,Qe,Ge,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,Me.width,Me.height,0,Qe,Ge,Me.data)}}else{rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,Ge,fe[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ie,Qe,Ge,fe[_e]);for(let O=0;O<ut.length;O++){let be=ut[O];rt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Qe,Ge,be.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,Ie,Qe,Ge,be.image[_e])}}}T(E,ft)&&b(n.TEXTURE_CUBE_MAP),ge.__version=de.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function le(I,E,Z,pe,de,ge){let ke=r.convert(Z.format,Z.colorSpace),Se=r.convert(Z.type),Pe=L(Z.internalFormat,ke,Se,Z.colorSpace);if(!i.get(E).__hasExternalTextures){let ht=Math.max(1,E.width>>ge),fe=Math.max(1,E.height>>ge);de===n.TEXTURE_3D||de===n.TEXTURE_2D_ARRAY?t.texImage3D(de,ge,Pe,ht,fe,E.depth,0,ke,Se,null):t.texImage2D(de,ge,Pe,ht,fe,0,ke,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,de,i.get(Z).__webglTexture,0,nt(E)):(de===n.TEXTURE_2D||de>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,de,i.get(Z).__webglTexture,ge),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(I,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer&&!E.stencilBuffer){let pe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||De(E)){let de=E.depthTexture;de&&de.isDepthTexture&&(de.type===Hi?pe=n.DEPTH_COMPONENT32F:de.type===fs&&(pe=n.DEPTH_COMPONENT24));let ge=nt(E);De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,pe,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,pe,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,pe,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(E.depthBuffer&&E.stencilBuffer){let pe=nt(E);Z&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let pe=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let de=0;de<pe.length;de++){let ge=pe[de],ke=r.convert(ge.format,ge.colorSpace),Se=r.convert(ge.type),Pe=L(ge.internalFormat,ke,Se,ge.colorSpace),$e=nt(E);Z&&De(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Pe,E.width,E.height):De(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Pe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let pe=i.get(E.depthTexture).__webglTexture,de=nt(E);if(E.depthTexture.format===Ys)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Vr)De(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ve(I){let E=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");He(E.__webglFramebuffer,I)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ce(E.__webglDepthbuffer[pe],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ce(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(I,E,Z){let pe=i.get(I);E!==void 0&&le(pe.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ve(I)}function $(I){let E=I.texture,Z=i.get(I),pe=i.get(E);I.addEventListener("dispose",B),I.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=E.version,a.memory.textures++);let de=I.isWebGLCubeRenderTarget===!0,ge=I.isWebGLMultipleRenderTargets===!0,ke=p(I)||o;if(de){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)Z.__webglFramebuffer[Se][Pe]=n.createFramebuffer()}else Z.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ge)if(s.drawBuffers){let Se=I.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=i.get(Se[Pe]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&De(I)===!1){let Se=ge?E:[E];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){let $e=Se[Pe];Z.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);let ht=r.convert($e.format,$e.colorSpace),fe=r.convert($e.type),Mt=L($e.internalFormat,ht,fe,$e.colorSpace,I.isXRRenderTarget===!0),ft=nt(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Mt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),V(n.TEXTURE_CUBE_MAP,E,ke);for(let Se=0;Se<6;Se++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Se][Pe],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else le(Z.__webglFramebuffer[Se],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);T(E,ke)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Se=I.texture;for(let Pe=0,$e=Se.length;Pe<$e;Pe++){let ht=Se[Pe],fe=i.get(ht);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),V(n.TEXTURE_2D,ht,ke),le(Z.__webglFramebuffer,I,ht,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),T(ht,ke)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?Se=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,pe.__webglTexture),V(Se,E,ke),o&&E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)le(Z.__webglFramebuffer[Pe],I,E,n.COLOR_ATTACHMENT0,Se,Pe);else le(Z.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Se,0);T(E,ke)&&b(Se),t.unbindTexture()}I.depthBuffer&&Ve(I)}function hn(I){let E=p(I)||o,Z=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let pe=0,de=Z.length;pe<de;pe++){let ge=Z[pe];if(T(ge,E)){let ke=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ge).__webglTexture;t.bindTexture(ke,Se),b(ke),t.unbindTexture()}}}function Xe(I){if(o&&I.samples>0&&De(I)===!1){let E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Z=I.width,pe=I.height,de=n.COLOR_BUFFER_BIT,ge=[],ke=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(I),Pe=I.isWebGLMultipleRenderTargets===!0;if(Pe)for(let $e=0;$e<E.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){ge.push(n.COLOR_ATTACHMENT0+$e),I.depthBuffer&&ge.push(ke);let ht=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ht===!1&&(I.depthBuffer&&(de|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(de|=n.STENCIL_BUFFER_BIT)),Pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]),ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),Pe){let fe=i.get(E[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,de,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let $e=0;$e<E.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]);let ht=i.get(E[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,ht,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function nt(I){return Math.min(s.maxSamples,I.samples)}function De(I){let E=i.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(I){let E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ct(I,E){let Z=I.colorSpace,pe=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Fh||Z!==Gi&&Z!==ni&&(Rt.getTransfer(Z)===Ot?o===!1?e.has("EXT_sRGB")===!0&&pe===ti?(I.format=Fh,I.minFilter=Dn,I.generateMipmaps=!1):E=fl.sRGBToLinear(E):(pe!==ti||de!==gs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}this.allocateTextureUnit=F,this.resetTextureUnits=me,this.setTexture2D=k,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=gt,this.setupRenderTarget=$,this.updateRenderTargetMipmap=hn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=De}function nM(n,e,t){let i=t.isWebGL2;function s(r,a=ni){let o,l=Rt.getTransfer(a);if(r===gs)return n.UNSIGNED_BYTE;if(r===Np)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Dp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===O0)return n.BYTE;if(r===F0)return n.SHORT;if(r===du)return n.UNSIGNED_SHORT;if(r===Ip)return n.INT;if(r===fs)return n.UNSIGNED_INT;if(r===Hi)return n.FLOAT;if(r===Da)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===k0)return n.ALPHA;if(r===ti)return n.RGBA;if(r===B0)return n.LUMINANCE;if(r===z0)return n.LUMINANCE_ALPHA;if(r===Ys)return n.DEPTH_COMPONENT;if(r===Vr)return n.DEPTH_STENCIL;if(r===Fh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===H0)return n.RED;if(r===Up)return n.RED_INTEGER;if(r===V0)return n.RG;if(r===Op)return n.RG_INTEGER;if(r===Fp)return n.RGBA_INTEGER;if(r===Jc||r===Kc||r===Qc||r===eh)if(l===Ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Jc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===eh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Jc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===eh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jd||r===Zd||r===Jd||r===Kd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===jd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Kd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qd||r===ef)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Qd)return l===Ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ef)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tf||r===nf||r===sf||r===rf||r===af||r===of||r===lf||r===cf||r===hf||r===uf||r===df||r===ff||r===pf||r===mf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===tf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===af)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===of)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===df)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ff)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mf)return l===Ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===th||r===gf||r===yf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===th)return l===Ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===G0||r===_f||r===vf||r===xf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===th)return o.COMPRESSED_RED_RGTC1_EXT;if(r===_f)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Jh=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},An=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},iM={type:"move"},Na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,i),f=this._getHandJoint(c,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kh=class extends vs{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,v=t.getContextAttributes(),p=null,f=null,T=[],b=[],L=new et,N=null,P=new Jt;P.layers.enable(1),P.viewport=new xt;let D=new Jt;D.layers.enable(2),D.viewport=new xt;let B=[P,D],S=new Jh;S.layers.enable(1),S.layers.enable(2);let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=T[V];return j===void 0&&(j=new Na,T[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=T[V];return j===void 0&&(j=new Na,T[V]=j),j.getGripSpace()},this.getHand=function(V){let j=T[V];return j===void 0&&(j=new Na,T[V]=j),j.getHandSpace()};function re(V){let j=b.indexOf(V.inputSource);if(j===-1)return;let se=T[j];se!==void 0&&(se.update(V.inputSource,V.frame,c||a),se.dispatchEvent({type:V.type,data:V.inputSource}))}function me(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",me),s.removeEventListener("inputsourceschange",F);for(let V=0;V<T.length;V++){let j=b[V];j!==null&&(b[V]=null,T[V].disconnect(j))}C=null,z=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",me),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Wi(m.framebufferWidth,m.framebufferHeight,{format:ti,type:gs,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,se=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Vr:Ys,se=v.stencil?$s:fs);let le={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Wi(d.textureWidth,d.textureHeight,{format:ti,type:gs,depthTexture:new Ml(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(f);Ce.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(V){for(let j=0;j<V.removed.length;j++){let se=V.removed[j],ae=b.indexOf(se);ae>=0&&(b[ae]=null,T[ae].disconnect(se))}for(let j=0;j<V.added.length;j++){let se=V.added[j],ae=b.indexOf(se);if(ae===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=b.length){b.push(se),ae=Ce;break}else if(b[Ce]===null){b[Ce]=se,ae=Ce;break}if(ae===-1)break}let le=T[ae];le&&le.connect(se)}}let H=new U,k=new U;function ne(V,j,se){H.setFromMatrixPosition(j.matrixWorld),k.setFromMatrixPosition(se.matrixWorld);let ae=H.distanceTo(k),le=j.projectionMatrix.elements,Ce=se.projectionMatrix.elements,He=le[14]/(le[10]-1),Ve=le[14]/(le[10]+1),gt=(le[9]+1)/le[5],$=(le[9]-1)/le[5],hn=(le[8]-1)/le[0],Xe=(Ce[8]+1)/Ce[0],nt=He*hn,De=He*Xe,Lt=ae/(-hn+Xe),ct=Lt*-hn;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ct),V.translateZ(Lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let I=He+Lt,E=Ve+Lt,Z=nt-ct,pe=De+(ae-ct),de=gt*Ve/E*I,ge=$*Ve/E*I;V.projectionMatrix.makePerspective(Z,pe,de,ge,I,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=D.near=P.near=V.near,S.far=D.far=P.far=V.far,(C!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far);let j=V.parent,se=S.cameras;q(S,j);for(let ae=0;ae<se.length;ae++)q(se[ae],j);se.length===2?ne(S,P,D):S.projectionMatrix.copy(P.projectionMatrix),W(V,S,j)};function W(V,j,se){se===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Gr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let Q=null;function te(V,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let se=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ae=!1;se.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let le=0;le<se.length;le++){let Ce=se[le],He=null;if(m!==null)He=m.getViewport(Ce);else{let gt=u.getViewSubImage(d,Ce);He=gt.viewport,le===0&&(e.setRenderTargetTextures(f,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(f))}let Ve=B[le];Ve===void 0&&(Ve=new Jt,Ve.layers.enable(le),Ve.viewport=new xt,B[le]=Ve),Ve.matrix.fromArray(Ce.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ce.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),le===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Ve)}}for(let se=0;se<T.length;se++){let ae=b[se],le=T[se];ae!==null&&le!==void 0&&le.update(ae,j,c||a)}Q&&Q(V,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let ue=new Wp;ue.setAnimationLoop(te),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}};function sM(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Gp(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,b,L){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,L)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,T,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===cn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===cn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T=e.get(f).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rM(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,b){let L=b.program;i.uniformBlockBinding(T,L)}function c(T,b){let L=s[T.id];L===void 0&&(g(T),L=h(T),s[T.id]=L,T.addEventListener("dispose",p));let N=b.program;i.updateUBOMapping(T,N);let P=e.render.frame;r[T.id]!==P&&(d(T),r[T.id]=P)}function h(T){let b=u();T.__bindingPointIndex=b;let L=n.createBuffer(),N=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,N,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,L),L}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],L=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,D=L.length;P<D;P++){let B=Array.isArray(L[P])?L[P]:[L[P]];for(let S=0,C=B.length;S<C;S++){let z=B[S];if(m(z,P,S,N)===!0){let re=z.__offset,me=Array.isArray(z.value)?z.value:[z.value],F=0;for(let H=0;H<me.length;H++){let k=me[H],ne=v(k);typeof k=="number"||typeof k=="boolean"?(z.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,re+F,z.__data)):k.isMatrix3?(z.__data[0]=k.elements[0],z.__data[1]=k.elements[1],z.__data[2]=k.elements[2],z.__data[3]=0,z.__data[4]=k.elements[3],z.__data[5]=k.elements[4],z.__data[6]=k.elements[5],z.__data[7]=0,z.__data[8]=k.elements[6],z.__data[9]=k.elements[7],z.__data[10]=k.elements[8],z.__data[11]=0):(k.toArray(z.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,re,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,b,L,N){let P=T.value,D=b+"_"+L;if(N[D]===void 0)return typeof P=="number"||typeof P=="boolean"?N[D]=P:N[D]=P.clone(),!0;{let B=N[D];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return N[D]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function g(T){let b=T.uniforms,L=0,N=16;for(let D=0,B=b.length;D<B;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let C=0,z=S.length;C<z;C++){let re=S[C],me=Array.isArray(re.value)?re.value:[re.value];for(let F=0,H=me.length;F<H;F++){let k=me[F],ne=v(k),q=L%N;q!==0&&N-q<ne.boundary&&(L+=N-q),re.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=ne.storage}}}let P=L%N;return P>0&&(L+=N-P),T.__size=L,T.__cache={},this}function v(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){let b=T.target;b.removeEventListener("dispose",p);let L=a.indexOf(b.__bindingPointIndex);a.splice(L,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ba=class{constructor(e={}){let{canvas:t=my(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this._useLegacyLights=!1,this.toneMapping=ms,this.toneMappingExposure=1;let b=this,L=!1,N=0,P=0,D=null,B=-1,S=null,C=new xt,z=new xt,re=null,me=new ot(0),F=0,H=t.width,k=t.height,ne=1,q=null,W=null,Q=new xt(0,0,H,k),te=new xt(0,0,H,k),ue=!1,V=new ka,j=!1,se=!1,ae=null,le=new lt,Ce=new et,He=new U,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?ne:1}let $=i;function hn(R,X){for(let J=0;J<R.length;J++){let ee=R[J],Y=t.getContext(ee,X);if(Y!==null)return Y}return null}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",be,!1),$===null){let X=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&X.shift(),$=hn(X,R),$===null)throw hn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,nt,De,Lt,ct,I,E,Z,pe,de,ge,ke,Se,Pe,$e,ht,fe,Mt,ft,Qe,Ge,Ie,rt,bt;function Dt(){Xe=new wx($),nt=new _x($,Xe,e),Xe.init(nt),Ie=new nM($,Xe,nt),De=new eM($,Xe,nt),Lt=new Ax($),ct=new Vb,I=new tM($,Xe,De,ct,nt,Ie,Lt),E=new xx(b),Z=new Sx(b),pe=new Uy($,nt),rt=new gx($,Xe,pe,nt),de=new Ex($,pe,Lt,rt),ge=new Px($,de,pe,Lt),ft=new Lx($,nt,I),ht=new vx(ct),ke=new Hb(b,E,Z,Xe,nt,rt,ht),Se=new sM(b,ct),Pe=new Wb,$e=new Zb(Xe,nt),Mt=new mx(b,E,Z,De,ge,d,l),fe=new Qb(b,ge,nt),bt=new rM($,Lt,nt,De),Qe=new yx($,Xe,Lt,nt),Ge=new Tx($,Xe,Lt,nt),Lt.programs=ke.programs,b.capabilities=nt,b.extensions=Xe,b.properties=ct,b.renderLists=Pe,b.shadowMap=fe,b.state=De,b.info=Lt}Dt();let ut=new Kh(b,$);this.xr=ut,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(R){R!==void 0&&(ne=R,this.setSize(H,k,!1))},this.getSize=function(R){return R.set(H,k)},this.setSize=function(R,X,J=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,k=X,t.width=Math.floor(R*ne),t.height=Math.floor(X*ne),J===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(H*ne,k*ne).floor()},this.setDrawingBufferSize=function(R,X,J){H=R,k=X,ne=J,t.width=Math.floor(R*J),t.height=Math.floor(X*J),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,X,J,ee){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,X,J,ee),De.viewport(C.copy(Q).multiplyScalar(ne).floor())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,X,J,ee){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,X,J,ee),De.scissor(z.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){De.setScissorTest(ue=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(R=!0,X=!0,J=!0){let ee=0;if(R){let Y=!1;if(D!==null){let Te=D.texture.format;Y=Te===Fp||Te===Op||Te===Up}if(Y){let Te=D.texture.type,Ae=Te===gs||Te===fs||Te===du||Te===$s||Te===Np||Te===Dp,Be=Mt.getClearColor(),Ye=Mt.getClearAlpha(),at=Be.r,it=Be.g,st=Be.b;Ae?(m[0]=at,m[1]=it,m[2]=st,m[3]=Ye,$.clearBufferuiv($.COLOR,0,m)):(g[0]=at,g[1]=it,g[2]=st,g[3]=Ye,$.clearBufferiv($.COLOR,0,g))}else ee|=$.COLOR_BUFFER_BIT}X&&(ee|=$.DEPTH_BUFFER_BIT),J&&(ee|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Pe.dispose(),$e.dispose(),ct.dispose(),E.dispose(),Z.dispose(),ge.dispose(),rt.dispose(),bt.dispose(),ke.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",an),ut.removeEventListener("sessionend",At),ae&&(ae.dispose(),ae=null),un.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let R=Lt.autoReset,X=fe.enabled,J=fe.autoUpdate,ee=fe.needsUpdate,Y=fe.type;Dt(),Lt.autoReset=R,fe.enabled=X,fe.autoUpdate=J,fe.needsUpdate=ee,fe.type=Y}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){let X=R.target;X.removeEventListener("dispose",Me),Je(X)}function Je(R){qe(R),ct.remove(R)}function qe(R){let X=ct.get(R).programs;X!==void 0&&(X.forEach(function(J){ke.releaseProgram(J)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,J,ee,Y,Te){X===null&&(X=Ve);let Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Be=qc(R,X,J,ee,Y);De.setMaterial(ee,Ae);let Ye=J.index,at=1;if(ee.wireframe===!0){if(Ye=de.getWireframeAttribute(J),Ye===void 0)return;at=2}let it=J.drawRange,st=J.attributes.position,Ht=it.start*at,Pn=(it.start+it.count)*at;Te!==null&&(Ht=Math.max(Ht,Te.start*at),Pn=Math.min(Pn,(Te.start+Te.count)*at)),Ye!==null?(Ht=Math.max(Ht,0),Pn=Math.min(Pn,Ye.count)):st!=null&&(Ht=Math.max(Ht,0),Pn=Math.min(Pn,st.count));let jt=Pn-Ht;if(jt<0||jt===1/0)return;rt.setup(Y,ee,Be,J,Ye);let Qn,Pt=Qe;if(Ye!==null&&(Qn=pe.get(Ye),Pt=Ge,Pt.setIndex(Qn)),Y.isMesh)ee.wireframe===!0?(De.setLineWidth(ee.wireframeLinewidth*gt()),Pt.setMode($.LINES)):Pt.setMode($.TRIANGLES);else if(Y.isLine){let tt=ee.linewidth;tt===void 0&&(tt=1),De.setLineWidth(tt*gt()),Y.isLineSegments?Pt.setMode($.LINES):Y.isLineLoop?Pt.setMode($.LINE_LOOP):Pt.setMode($.LINE_STRIP)}else Y.isPoints?Pt.setMode($.POINTS):Y.isSprite&&Pt.setMode($.TRIANGLES);if(Y.isBatchedMesh)Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Pt.renderInstances(Ht,jt,Y.count);else if(J.isInstancedBufferGeometry){let tt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ya=Math.min(J.instanceCount,tt);Pt.renderInstances(Ht,jt,ya)}else Pt.render(Ht,jt)};function wt(R,X,J){R.transparent===!0&&R.side===On&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,fr(R,X,J),R.side=Bn,R.needsUpdate=!0,fr(R,X,J),R.side=On):fr(R,X,J)}this.compile=function(R,X,J=null){J===null&&(J=R),p=$e.get(J),p.init(),T.push(p),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==J&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(b._useLegacyLights);let ee=new Set;return R.traverse(function(Y){let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ae=0;Ae<Te.length;Ae++){let Be=Te[Ae];wt(Be,J,Y),ee.add(Be)}else wt(Te,J,Y),ee.add(Te)}),T.pop(),p=null,ee},this.compileAsync=function(R,X,J=null){let ee=this.compile(R,X,J);return new Promise(Y=>{function Te(){if(ee.forEach(function(Ae){ct.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){Y(R);return}setTimeout(Te,10)}Xe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function St(R){Tt&&Tt(R)}function an(){un.stop()}function At(){un.start()}let un=new Wp;un.setAnimationLoop(St),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(R){Tt=R,ut.setAnimationLoop(R),R===null?un.stop():un.start()},ut.addEventListener("sessionstart",an),ut.addEventListener("sessionend",At),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,X,D),p=$e.get(R,T.length),p.init(),T.push(p),le.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(le),se=this.localClippingEnabled,j=ht.init(this.clippingPlanes,se),v=Pe.get(R,f.length),v.init(),f.push(v),Kn(R,X,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(q,W),this.info.render.frame++,j===!0&&ht.beginShadows();let J=p.state.shadowsArray;if(fe.render(J,R,X),j===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(v,R),p.setupLights(b._useLegacyLights),X.isArrayCamera){let ee=X.cameras;for(let Y=0,Te=ee.length;Y<Te;Y++){let Ae=ee[Y];wo(v,R,Ae,Ae.viewport)}}else wo(v,R,X);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(b,R,X),rt.resetDefaultState(),B=-1,S=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Kn(R,X,J,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){ee&&He.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);let Ae=ge.update(R),Be=R.material;Be.visible&&v.push(R,Ae,Be,J,He.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){let Ae=ge.update(R),Be=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),He.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),He.copy(Ae.boundingSphere.center)),He.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(Be)){let Ye=Ae.groups;for(let at=0,it=Ye.length;at<it;at++){let st=Ye[at],Ht=Be[st.materialIndex];Ht&&Ht.visible&&v.push(R,Ae,Ht,J,He.z,st)}}else Be.visible&&v.push(R,Ae,Be,J,He.z,null)}}let Te=R.children;for(let Ae=0,Be=Te.length;Ae<Be;Ae++)Kn(Te[Ae],X,J,ee)}function wo(R,X,J,ee){let Y=R.opaque,Te=R.transmissive,Ae=R.transparent;p.setupLightsView(J),j===!0&&ht.setGlobalState(b.clippingPlanes,J),Te.length>0&&Xc(Y,Te,X,J),ee&&De.viewport(C.copy(ee)),Y.length>0&&dr(Y,X,J),Te.length>0&&dr(Te,X,J),Ae.length>0&&dr(Ae,X,J),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Xc(R,X,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Te=nt.isWebGL2;ae===null&&(ae=new Wi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Da:gs,minFilter:_s,samples:Te?4:0})),b.getDrawingBufferSize(Ce),Te?ae.setSize(Ce.x,Ce.y):ae.setSize(dl(Ce.x),dl(Ce.y));let Ae=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(me),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear();let Be=b.toneMapping;b.toneMapping=ms,dr(R,J,ee),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae);let Ye=!1;for(let at=0,it=X.length;at<it;at++){let st=X[at],Ht=st.object,Pn=st.geometry,jt=st.material,Qn=st.group;if(jt.side===On&&Ht.layers.test(ee.layers)){let Pt=jt.side;jt.side=cn,jt.needsUpdate=!0,ma(Ht,J,ee,Pn,jt,Qn),jt.side=Pt,jt.needsUpdate=!0,Ye=!0}}Ye===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),b.setRenderTarget(Ae),b.setClearColor(me,F),b.toneMapping=Be}function dr(R,X,J){let ee=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Te=R.length;Y<Te;Y++){let Ae=R[Y],Be=Ae.object,Ye=Ae.geometry,at=ee===null?Ae.material:ee,it=Ae.group;Be.layers.test(J.layers)&&ma(Be,X,J,Ye,at,it)}}function ma(R,X,J,ee,Y,Te){R.onBeforeRender(b,X,J,ee,Y,Te),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(b,X,J,ee,R,Te),Y.transparent===!0&&Y.side===On&&Y.forceSinglePass===!1?(Y.side=cn,Y.needsUpdate=!0,b.renderBufferDirect(J,X,ee,Y,R,Te),Y.side=Bn,Y.needsUpdate=!0,b.renderBufferDirect(J,X,ee,Y,R,Te),Y.side=On):b.renderBufferDirect(J,X,ee,Y,R,Te),R.onAfterRender(b,X,J,ee,Y,Te)}function fr(R,X,J){X.isScene!==!0&&(X=Ve);let ee=ct.get(R),Y=p.state.lights,Te=p.state.shadowsArray,Ae=Y.state.version,Be=ke.getParameters(R,Y.state,Te,X,J),Ye=ke.getProgramCacheKey(Be),at=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?Z:E).get(R.envMap||ee.environment),at===void 0&&(R.addEventListener("dispose",Me),at=new Map,ee.programs=at);let it=at.get(Ye);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Ae)return Eo(R,Be),it}else Be.uniforms=ke.getUniforms(R),R.onBuild(J,Be,b),R.onBeforeCompile(Be,b),it=ke.acquireProgram(Be,Ye),at.set(Ye,it),ee.uniforms=Be.uniforms;let st=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ht.uniform),Eo(R,Be),ee.needsLights=Yc(R),ee.lightsStateVersion=Ae,ee.needsLights&&(st.ambientLightColor.value=Y.state.ambient,st.lightProbe.value=Y.state.probe,st.directionalLights.value=Y.state.directional,st.directionalLightShadows.value=Y.state.directionalShadow,st.spotLights.value=Y.state.spot,st.spotLightShadows.value=Y.state.spotShadow,st.rectAreaLights.value=Y.state.rectArea,st.ltc_1.value=Y.state.rectAreaLTC1,st.ltc_2.value=Y.state.rectAreaLTC2,st.pointLights.value=Y.state.point,st.pointLightShadows.value=Y.state.pointShadow,st.hemisphereLights.value=Y.state.hemi,st.directionalShadowMap.value=Y.state.directionalShadowMap,st.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,st.spotShadowMap.value=Y.state.spotShadowMap,st.spotLightMatrix.value=Y.state.spotLightMatrix,st.spotLightMap.value=Y.state.spotLightMap,st.pointShadowMap.value=Y.state.pointShadowMap,st.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function ga(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=Br.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Eo(R,X){let J=ct.get(R);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function qc(R,X,J,ee,Y){X.isScene!==!0&&(X=Ve),I.resetTextureUnits();let Te=X.fog,Ae=ee.isMeshStandardMaterial?X.environment:null,Be=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Gi,Ye=(ee.isMeshStandardMaterial?Z:E).get(ee.envMap||Ae),at=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),st=!!J.morphAttributes.position,Ht=!!J.morphAttributes.normal,Pn=!!J.morphAttributes.color,jt=ms;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(jt=b.toneMapping);let Qn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Pt=Qn!==void 0?Qn.length:0,tt=ct.get(ee),ya=p.state.lights;if(j===!0&&(se===!0||R!==S)){let Mn=R===S&&ee.id===B;ht.setState(ee,R,Mn)}let Ut=!1;ee.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==ya.state.version||tt.outputColorSpace!==Be||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||tt.envMap!==Ye||ee.fog===!0&&tt.fog!==Te||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ht.numPlanes||tt.numIntersection!==ht.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==it||tt.morphTargets!==st||tt.morphNormals!==Ht||tt.morphColors!==Pn||tt.toneMapping!==jt||nt.isWebGL2===!0&&tt.morphTargetsCount!==Pt)&&(Ut=!0):(Ut=!0,tt.__version=ee.version);let Pi=tt.currentProgram;Ut===!0&&(Pi=fr(ee,X,Y));let _a=!1,ks=!1,va=!1,on=Pi.getUniforms(),xi=tt.uniforms;if(De.useProgram(Pi.program)&&(_a=!0,ks=!0,va=!0),ee.id!==B&&(B=ee.id,ks=!0),_a||S!==R){on.setValue($,"projectionMatrix",R.projectionMatrix),on.setValue($,"viewMatrix",R.matrixWorldInverse);let Mn=on.map.cameraPosition;Mn!==void 0&&Mn.setValue($,He.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&on.setValue($,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&on.setValue($,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,ks=!0,va=!0)}if(Y.isSkinnedMesh){on.setOptional($,Y,"bindMatrix"),on.setOptional($,Y,"bindMatrixInverse");let Mn=Y.skeleton;Mn&&(nt.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),on.setValue($,"boneTexture",Mn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(on.setOptional($,Y,"batchingTexture"),on.setValue($,"batchingTexture",Y._matricesTexture,I));let Vt=J.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0&&nt.isWebGL2===!0)&&ft.update(Y,J,Pi),(ks||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,on.setValue($,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(xi.envMap.value=Ye,xi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ks&&(on.setValue($,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&$c(xi,va),Te&&ee.fog===!0&&Se.refreshFogUniforms(xi,Te),Se.refreshMaterialUniforms(xi,ee,ne,k,ae),Br.upload($,ga(tt),xi,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Br.upload($,ga(tt),xi,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&on.setValue($,"center",Y.center),on.setValue($,"modelViewMatrix",Y.modelViewMatrix),on.setValue($,"normalMatrix",Y.normalMatrix),on.setValue($,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Mn=ee.uniformsGroups;for(let xa=0,To=Mn.length;xa<To;xa++)if(nt.isWebGL2){let ba=Mn[xa];bt.update(ba,Pi),bt.bind(ba,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function $c(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Yc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,X,J){ct.get(R.texture).__webglTexture=X,ct.get(R.depthTexture).__webglTexture=J;let ee=ct.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){let J=ct.get(R);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,J=0){D=R,N=X,P=J;let ee=!0,Y=null,Te=!1,Ae=!1;if(R){let Ye=ct.get(R);Ye.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer($.FRAMEBUFFER,null),ee=!1):Ye.__webglFramebuffer===void 0?I.setupRenderTarget(R):Ye.__hasExternalTextures&&I.rebindTextures(R,ct.get(R.texture).__webglTexture,ct.get(R.depthTexture).__webglTexture);let at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ae=!0);let it=ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[X])?Y=it[X][J]:Y=it[X],Te=!0):nt.isWebGL2&&R.samples>0&&I.useMultisampledRTT(R)===!1?Y=ct.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Y=it[J]:Y=it,C.copy(R.viewport),z.copy(R.scissor),re=R.scissorTest}else C.copy(Q).multiplyScalar(ne).floor(),z.copy(te).multiplyScalar(ne).floor(),re=ue;if(De.bindFramebuffer($.FRAMEBUFFER,Y)&&nt.drawBuffers&&ee&&De.drawBuffers(R,Y),De.viewport(C),De.scissor(z),De.setScissorTest(re),Te){let Ye=ct.get(R.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ye.__webglTexture,J)}else if(Ae){let Ye=ct.get(R.texture),at=X||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ye.__webglTexture,J||0,at)}B=-1},this.readRenderTargetPixels=function(R,X,J,ee,Y,Te,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Be=Be[Ae]),Be){De.bindFramebuffer($.FRAMEBUFFER,Be);try{let Ye=R.texture,at=Ye.format,it=Ye.type;if(at!==ti&&Ie.convert(at)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=it===Da&&(Xe.has("EXT_color_buffer_half_float")||nt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(it!==gs&&Ie.convert(it)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===Hi&&(nt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&J>=0&&J<=R.height-Y&&$.readPixels(X,J,ee,Y,Ie.convert(at),Ie.convert(it),Te)}finally{let Ye=D!==null?ct.get(D).__webglFramebuffer:null;De.bindFramebuffer($.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,X,J=0){let ee=Math.pow(2,-J),Y=Math.floor(X.image.width*ee),Te=Math.floor(X.image.height*ee);I.setTexture2D(X,0),$.copyTexSubImage2D($.TEXTURE_2D,J,0,0,R.x,R.y,Y,Te),De.unbindTexture()},this.copyTextureToTexture=function(R,X,J,ee=0){let Y=X.image.width,Te=X.image.height,Ae=Ie.convert(J.format),Be=Ie.convert(J.type);I.setTexture2D(J,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment),X.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ee,R.x,R.y,Y,Te,Ae,Be,X.image.data):X.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ee,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ae,X.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,ee,R.x,R.y,Ae,Be,X.image),ee===0&&J.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(R,X,J,ee,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=R.max.x-R.min.x+1,Ae=R.max.y-R.min.y+1,Be=R.max.z-R.min.z+1,Ye=Ie.convert(ee.format),at=Ie.convert(ee.type),it;if(ee.isData3DTexture)I.setTexture3D(ee,0),it=$.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)I.setTexture2DArray(ee,0),it=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ee.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ee.unpackAlignment);let st=$.getParameter($.UNPACK_ROW_LENGTH),Ht=$.getParameter($.UNPACK_IMAGE_HEIGHT),Pn=$.getParameter($.UNPACK_SKIP_PIXELS),jt=$.getParameter($.UNPACK_SKIP_ROWS),Qn=$.getParameter($.UNPACK_SKIP_IMAGES),Pt=J.isCompressedTexture?J.mipmaps[Y]:J.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Pt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Pt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,R.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,R.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,R.min.z),J.isDataTexture||J.isData3DTexture?$.texSubImage3D(it,Y,X.x,X.y,X.z,Te,Ae,Be,Ye,at,Pt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(it,Y,X.x,X.y,X.z,Te,Ae,Be,Ye,Pt.data)):$.texSubImage3D(it,Y,X.x,X.y,X.z,Te,Ae,Be,Ye,at,Pt),$.pixelStorei($.UNPACK_ROW_LENGTH,st),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ht),$.pixelStorei($.UNPACK_SKIP_PIXELS,Pn),$.pixelStorei($.UNPACK_SKIP_ROWS,jt),$.pixelStorei($.UNPACK_SKIP_IMAGES,Qn),Y===0&&ee.generateMipmaps&&$.generateMipmap(it),De.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),De.unbindTexture()},this.resetState=function(){N=0,P=0,D=null,De.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===pu?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===Wl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Wt?js:Bp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===js?Wt:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Qh=class extends Ba{};Qh.prototype.isWebGL1Renderer=!0;var Zs=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Sl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new U,si=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$r=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Ta=new U,Ir=new U,Nr=new U,Dr=new et,Aa=new et,Zp=new lt,Ko=new U,Ca=new U,Qo=new U,hp=new et,Eh=new et,up=new et,za=class extends qt{constructor(e=new $r){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Hn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sl(t,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new si(i,3,0,!1)),Pr.setAttribute("uv",new si(i,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),Zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Nr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;el(Ko.set(-.5,-.5,0),Nr,a,Ir,s,r),el(Ca.set(.5,-.5,0),Nr,a,Ir,s,r),el(Qo.set(.5,.5,0),Nr,a,Ir,s,r),hp.set(0,0),Eh.set(1,0),up.set(1,1);let o=e.ray.intersectTriangle(Ko,Ca,Qo,!1,Ta);if(o===null&&(el(Ca.set(-.5,.5,0),Nr,a,Ir,s,r),Eh.set(0,1),o=e.ray.intersectTriangle(Ko,Qo,Ca,!1,Ta),o===null))return;let l=e.ray.origin.distanceTo(Ta);l<e.near||l>e.far||t.push({distance:l,point:Ta.clone(),uv:qs.getInterpolation(Ta,Ko,Ca,Qo,hp,Eh,up,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function el(n,e,t,i,s,r){Dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Aa.x=r*Dr.x-s*Dr.y,Aa.y=s*Dr.x+r*Dr.y):Aa.copy(Dr),n.copy(e),n.x+=Aa.x,n.y+=Aa.y,n.applyMatrix4(Zp)}var dp=new U,fp=new xt,pp=new xt,aM=new U,mp=new lt,tl=new U,Th=new ii,gp=new lt,Ah=new Wr,wl=class extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$d,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingBox.expandByPoint(tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,tl),this.boundingSphere.expandByPoint(tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Th.copy(this.boundingSphere),Th.applyMatrix4(s),e.ray.intersectsSphere(Th)!==!1&&(gp.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(gp),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===D0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;fp.fromBufferAttribute(s.attributes.skinIndex,e),pp.fromBufferAttribute(s.attributes.skinWeight,e),dp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=pp.getComponent(r);if(a!==0){let o=fp.getComponent(r);mp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(aM.copy(dp).applyMatrix4(mp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ha=class extends qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},El=class extends zn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=dn,h=dn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yp=new lt,oM=new lt,Tl=class n{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:oM;yp.multiplyMatrices(o,t[r]),yp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new El(t,e,e,ti,Hi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ha),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var Yr=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_p=new U,vp=new U,xp=new lt,Ch=new Wr,nl=new ii,Va=class extends qt{constructor(e=new Hn,t=new Yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_p.fromBufferAttribute(t,s-1),vp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_p.distanceTo(vp);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;xp.copy(s).invert(),Ch.copy(e.ray).applyMatrix4(xp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,d=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let b=f,L=T-1;b<L;b+=m){let N=g.getX(b),P=g.getX(b+1);if(c.fromBufferAttribute(p,N),h.fromBufferAttribute(p,P),Ch.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),T=Math.min(p.count,a.start+a.count);for(let b=f,L=T-1;b<L;b+=m){if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,b+1),Ch.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},bp=new U,Mp=new U,Al=class extends Va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)bp.fromBufferAttribute(t,s),Mp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bp.distanceTo(Mp);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jr=class extends zn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cl=class n extends Hn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,m=[],g=[],v=[],p=[];for(let f=0;f<=i;f++){let T=[],b=f/i,L=0;f===0&&a===0?L=.5/t:f===i&&l===Math.PI&&(L=-.5/t);for(let N=0;N<=t;N++){let P=N/t;u.x=-e*Math.cos(s+P*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+P*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(P+L,1-b),T.push(c++)}h.push(T)}for(let f=0;f<i;f++)for(let T=0;T<t;T++){let b=h[f][T+1],L=h[f][T],N=h[f+1][T],P=h[f+1][T+1];(f!==0||a>0)&&m.push(b,L,P),(f!==i-1||l<Math.PI)&&m.push(L,N,P)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rl=class extends Hn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,m=u.count;for(let g=d,v=d+m;g<v;g+=3)for(let p=0;p<3;p++){let f=o.getX(g+p),T=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,T),Sp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Sp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new It(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Sp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Ga=class extends Si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ot(16777215),this.specular=new ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Js=class extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function il(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function lM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function cM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function wp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function Jp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Zr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eu=class extends Zr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bf,endingEnd:bf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mf:r=e,o=2*t-i;break;case Sf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mf:a=e,l=2*i-t;break;case Sf:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,T=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-m)*p+(1.5+m)*v+.5*g,L=m*p-m*v;for(let N=0;N!==o;++N)r[N]=f*a[h+N]+T*a[c+N]+b*a[l+N]+L*a[u+N];return r}},tu=class extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},nu=class extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ri=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=il(t,this.TimeBufferType),this.values=il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:il(e.times,Array),values:il(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case al:t=this.InterpolantFactoryMethodDiscrete;break;case ol:t=this.InterpolantFactoryMethodLinear;break;case nh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return al;case this.InterpolantFactoryMethodLinear:return ol;case this.InterpolantFactoryMethodSmooth:return nh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=ol;var xs=class extends ri{};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=al;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends ri{};Ll.prototype.ValueTypeName="color";var Jr=class extends ri{};Jr.prototype.ValueTypeName="number";var iu=class extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},qi=class extends ri{InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}};qi.prototype.ValueTypeName="quaternion";qi.prototype.DefaultInterpolation=ol;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends ri{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=al;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends ri{};$i.prototype.ValueTypeName="vector";var Wa=class{constructor(e,t=-1,i,s=W0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(uM(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(ri.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=cM(l);l=wp(l,1,h),c=wp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Jr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,m,g,v){if(m.length!==0){let p=[],f=[];Jp(m,p,f,g),p.length!==0&&v.push(new u(d,p,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)m[d[g].morphTargets[v]]=-1;for(let v in m){let p=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){let b=d[g];p.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new Jr(".morphTargetInfluence["+v+"]",p,f))}l=m.length*a}else{let m=".bones["+t[u].name+"]";i($i,m+".position",d,"pos",s),i(qi,m+".quaternion",d,"rot",s),i($i,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return Ll;case"quaternion":return qi;case"bool":case"boolean":return xs;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hM(n.type);if(n.times===void 0){let t=[],i=[];Jp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Pl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Xa=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},dM=new Xa,wi=class{constructor(e){this.manager=e!==void 0?e:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},su=class extends Error{constructor(e,t){super(e),this.response=t}},qa=class extends wi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ki[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0,v=0,p=new ReadableStream({start(f){T();function T(){u.read().then(({done:b,value:L})=>{if(b)f.close();else{v+=L.byteLength;let N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let P=0,D=h.length;P<D;P++){let B=h[P];B.onProgress&&B.onProgress(N)}f.enqueue(L),T()}})}}});return new Response(p)}else throw new su(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Pl.add(e,c);let h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{let h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,d=h.length;u<d;u++){let m=h[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ru=class extends wi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Pl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ua("img");function l(){h(),Pl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Il=class extends wi{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new El,o=new qa(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Tn,a.wrapT=c.wrapT!==void 0?c.wrapT:Tn,a.magFilter=c.magFilter!==void 0?c.magFilter:Dn,a.minFilter=c.minFilter!==void 0?c.minFilter:Dn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=_s),c.mipmapCount===1&&(a.minFilter=Dn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},Nl=class extends wi{constructor(e){super(e)}load(e,t,i,s){let r=new zn,a=new ru(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ks=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Dl=class extends Ks{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rh=new lt,Ep=new U,Tp=new U,$a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ka,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),Rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},au=class extends $a{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ul=class extends Ks{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ap=new lt,Ra=new U,Lh=new U,ou=class extends $a{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ra),Lh.copy(i.position),Lh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Lh),i.updateMatrixWorld(),s.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ap)}},Ol=class extends Ks{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ou}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},lu=class extends $a{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new lu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fl=class extends Ks{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var kl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Bl=class extends Hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var yu="\\[\\]\\.:\\/",fM=new RegExp("["+yu+"]","g"),_u="[^"+yu+"]",pM="[^"+yu.replace("\\.","")+"]",mM=/((?:WC+[\/:])*)/.source.replace("WC",_u),gM=/(WCOD+)?/.source.replace("WCOD",pM),yM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),_M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),vM=new RegExp("^"+mM+gM+yM+_M+"$"),xM=["material","materials","bones","map"],cu=class{constructor(e,t,i){let s=i||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fM,"")}static parseTrackName(e){let t=vM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);xM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=cu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hS=new Float32Array(1);var Qs=class extends Sl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var zl=class{constructor(e,t,i=0,s=1/0){this.ray=new Wr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return hu(e,this,i,t),i.sort(Cp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)hu(e[s],this,i,t);return i.sort(Cp),i}};function Cp(n,e){return n.distance-e.distance}function hu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)hu(s[r],e,t,!0)}}var Rp=new U,sl=new U,Hl=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rp.subVectors(e,this.start),sl.subVectors(this.end,this.start);let i=sl.dot(sl),r=sl.dot(Rp)/i;return t&&(r=En(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);var Ya=class extends Il{constructor(e){super(e)}parse(e){function t(k){switch(k.image_type){case d:case v:if(k.colormap_length>256||k.colormap_size!==24||k.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case m:case g:case p:case f:if(k.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+k.image_type)}if(k.width<=0||k.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(k.pixel_size!==8&&k.pixel_size!==16&&k.pixel_size!==24&&k.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+k.pixel_size)}function i(k,ne,q,W,Q){let te,ue,V=q.pixel_size>>3,j=q.width*q.height*V;if(ne&&(ue=Q.subarray(W,W+=q.colormap_length*(q.colormap_size>>3))),k){te=new Uint8Array(j);let se,ae,le,Ce=0,He=new Uint8Array(V);for(;Ce<j;)if(se=Q[W++],ae=(se&127)+1,se&128){for(le=0;le<V;++le)He[le]=Q[W++];for(le=0;le<ae;++le)te.set(He,Ce+le*V);Ce+=V*ae}else{for(ae*=V,le=0;le<ae;++le)te[Ce+le]=Q[W++];Ce+=ae}}else te=Q.subarray(W,W+=ne?q.width*q.height:j);return{pixel_data:te,palettes:ue}}function s(k,ne,q,W,Q,te,ue,V,j){let se=j,ae,le=0,Ce,He,Ve=C.width;for(He=ne;He!==W;He+=q)for(Ce=Q;Ce!==ue;Ce+=te,le++)ae=V[le],k[(Ce+Ve*He)*4+3]=255,k[(Ce+Ve*He)*4+2]=se[ae*3+0],k[(Ce+Ve*He)*4+1]=se[ae*3+1],k[(Ce+Ve*He)*4+0]=se[ae*3+2];return k}function r(k,ne,q,W,Q,te,ue,V){let j,se=0,ae,le,Ce=C.width;for(le=ne;le!==W;le+=q)for(ae=Q;ae!==ue;ae+=te,se+=2)j=V[se+0]+(V[se+1]<<8),k[(ae+Ce*le)*4+0]=(j&31744)>>7,k[(ae+Ce*le)*4+1]=(j&992)>>2,k[(ae+Ce*le)*4+2]=(j&31)<<3,k[(ae+Ce*le)*4+3]=j&32768?0:255;return k}function a(k,ne,q,W,Q,te,ue,V){let j=0,se,ae,le=C.width;for(ae=ne;ae!==W;ae+=q)for(se=Q;se!==ue;se+=te,j+=3)k[(se+le*ae)*4+3]=255,k[(se+le*ae)*4+2]=V[j+0],k[(se+le*ae)*4+1]=V[j+1],k[(se+le*ae)*4+0]=V[j+2];return k}function o(k,ne,q,W,Q,te,ue,V){let j=0,se,ae,le=C.width;for(ae=ne;ae!==W;ae+=q)for(se=Q;se!==ue;se+=te,j+=4)k[(se+le*ae)*4+2]=V[j+0],k[(se+le*ae)*4+1]=V[j+1],k[(se+le*ae)*4+0]=V[j+2],k[(se+le*ae)*4+3]=V[j+3];return k}function l(k,ne,q,W,Q,te,ue,V){let j,se=0,ae,le,Ce=C.width;for(le=ne;le!==W;le+=q)for(ae=Q;ae!==ue;ae+=te,se++)j=V[se],k[(ae+Ce*le)*4+0]=j,k[(ae+Ce*le)*4+1]=j,k[(ae+Ce*le)*4+2]=j,k[(ae+Ce*le)*4+3]=255;return k}function c(k,ne,q,W,Q,te,ue,V){let j=0,se,ae,le=C.width;for(ae=ne;ae!==W;ae+=q)for(se=Q;se!==ue;se+=te,j+=2)k[(se+le*ae)*4+0]=V[j+0],k[(se+le*ae)*4+1]=V[j+0],k[(se+le*ae)*4+2]=V[j+0],k[(se+le*ae)*4+3]=V[j+1];return k}function h(k,ne,q,W,Q){let te,ue,V,j,se,ae;switch((C.flags&T)>>b){default:case P:te=0,V=1,se=ne,ue=0,j=1,ae=q;break;case L:te=0,V=1,se=ne,ue=q-1,j=-1,ae=-1;break;case D:te=ne-1,V=-1,se=-1,ue=0,j=1,ae=q;break;case N:te=ne-1,V=-1,se=-1,ue=q-1,j=-1,ae=-1;break}if(me)switch(C.pixel_size){case 8:l(k,ue,j,ae,te,V,se,W);break;case 16:c(k,ue,j,ae,te,V,se,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(C.pixel_size){case 8:s(k,ue,j,ae,te,V,se,W,Q);break;case 16:r(k,ue,j,ae,te,V,se,W);break;case 24:a(k,ue,j,ae,te,V,se,W);break;case 32:o(k,ue,j,ae,te,V,se,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return k}let u=0,d=1,m=2,g=3,v=9,p=10,f=11,T=48,b=4,L=0,N=1,P=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let B=0,S=new Uint8Array(e),C={id_length:S[B++],colormap_type:S[B++],image_type:S[B++],colormap_index:S[B++]|S[B++]<<8,colormap_length:S[B++]|S[B++]<<8,colormap_size:S[B++],origin:[S[B++]|S[B++]<<8,S[B++]|S[B++]<<8],width:S[B++]|S[B++]<<8,height:S[B++]|S[B++]<<8,pixel_size:S[B++],flags:S[B++]};if(t(C),C.id_length+B>e.length)throw new Error("THREE.TGALoader: No data.");B+=C.id_length;let z=!1,re=!1,me=!1;switch(C.image_type){case v:z=!0,re=!0;break;case d:re=!0;break;case p:z=!0;break;case m:break;case f:z=!0,me=!0;break;case g:me=!0;break}let F=new Uint8Array(C.width*C.height*4),H=i(z,re,C,B,S);return h(F,C.width,C.height,H.pixel_data,H.palettes),{data:F,width:C.width,height:C.height,flipY:!0,generateMipmaps:!0,minFilter:_s}}};var $l=class extends wi{load(e,t,i,s){let r=this,a=r.path===""?kl.extractUrlBase(e):r.path,o=new qa(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,y){let w=[],M=_.childNodes;for(let A=0,K=M.length;A<K;A++){let ie=M[A];ie.nodeName===y&&w.push(ie)}return w}function s(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=y[M];return w}function r(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=parseFloat(y[M]);return w}function a(_){if(_.length===0)return[];let y=_.trim().split(/\s+/),w=new Array(y.length);for(let M=0,A=y.length;M<A;M++)w[M]=parseInt(y[M]);return w}function o(_){return _.substring(1)}function l(){return"three_default_"+Kg++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function m(_,y,w,M){let A=i(_,y)[0];if(A!==void 0){let K=i(A,w);for(let ie=0;ie<K.length;ie++)M(K[ie])}}function g(_,y){for(let w in _){let M=_[w];M.build=y(_[w])}}function v(_,y){return _.build!==void 0||(_.build=y(_)),_.build}function p(_){let y={sources:{},samplers:{},channels:{}},w=!1;for(let M=0,A=_.childNodes.length;M<A;M++){let K=_.childNodes[M];if(K.nodeType!==1)continue;let ie;switch(K.nodeName){case"source":ie=K.getAttribute("id"),y.sources[ie]=O(K);break;case"sampler":ie=K.getAttribute("id"),y.samplers[ie]=f(K);break;case"channel":ie=K.getAttribute("target"),y.channels[ie]=T(K);break;case"animation":p(K),w=!0;break;default:console.log(K)}}w===!1&&(je.animations[_.getAttribute("id")||Ms.generateUUID()]=y)}function f(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let K=o(A.getAttribute("source")),ie=A.getAttribute("semantic");y.inputs[ie]=K;break}}return y}function T(_){let y={},M=_.getAttribute("target").split("/"),A=M.shift(),K=M.shift(),ie=K.indexOf("(")!==-1,Le=K.indexOf(".")!==-1;if(Le)M=K.split("."),K=M.shift(),y.member=M.shift();else if(ie){let ve=K.split("(");K=ve.shift();for(let we=0;we<ve.length;we++)ve[we]=parseInt(ve[we].replace(/\)/,""));y.indices=ve}return y.id=A,y.sid=K,y.arraySyntax=ie,y.memberSyntax=Le,y.sampler=o(_.getAttribute("source")),y}function b(_){let y=[],w=_.channels,M=_.samplers,A=_.sources;for(let K in w)if(w.hasOwnProperty(K)){let ie=w[K],Le=M[ie.sampler],ve=Le.inputs.INPUT,we=Le.inputs.OUTPUT,Oe=A[ve],he=A[we],Ue=N(ie,Oe,he);C(Ue,y)}return y}function L(_){return v(je.animations[_],b)}function N(_,y,w){let M=je.nodes[_.id],A=tt(M.id),K=M.transforms[_.sid],ie=M.matrix.clone().transpose(),Le,ve,we,Oe,he,Ue,Ne={};switch(K){case"matrix":for(we=0,Oe=y.array.length;we<Oe;we++)if(Le=y.array[we],ve=we*w.stride,Ne[Le]===void 0&&(Ne[Le]={}),_.arraySyntax===!0){let Gt=w.array[ve],Et=_.indices[0]+4*_.indices[1];Ne[Le][Et]=Gt}else for(he=0,Ue=w.stride;he<Ue;he++)Ne[Le][he]=w.array[ve+he];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let We=P(Ne,ie);return{name:A.uuid,keyframes:We}}function P(_,y){let w=[];for(let A in _)w.push({time:parseFloat(A),value:_[A]});w.sort(M);for(let A=0;A<16;A++)z(w,A,y.elements[A]);return w;function M(A,K){return A.time-K.time}}let D=new U,B=new U,S=new Mi;function C(_,y){let w=_.keyframes,M=_.name,A=[],K=[],ie=[],Le=[];for(let ve=0,we=w.length;ve<we;ve++){let Oe=w[ve],he=Oe.time,Ue=Oe.value;Ae.fromArray(Ue).transpose(),Ae.decompose(D,S,B),A.push(he),K.push(D.x,D.y,D.z),ie.push(S.x,S.y,S.z,S.w),Le.push(B.x,B.y,B.z)}return K.length>0&&y.push(new $i(M+".position",A,K)),ie.length>0&&y.push(new qi(M+".quaternion",A,ie)),Le.length>0&&y.push(new $i(M+".scale",A,Le)),y}function z(_,y,w){let M,A=!0,K,ie;for(K=0,ie=_.length;K<ie;K++)M=_[K],M.value[y]===void 0?M.value[y]=null:A=!1;if(A===!0)for(K=0,ie=_.length;K<ie;K++)M=_[K],M.value[y]=w;else re(_,y)}function re(_,y){let w,M;for(let A=0,K=_.length;A<K;A++){let ie=_[A];if(ie.value[y]===null){if(w=me(_,A,y),M=F(_,A,y),w===null){ie.value[y]=M.value[y];continue}if(M===null){ie.value[y]=w.value[y];continue}H(ie,w,M,y)}}}function me(_,y,w){for(;y>=0;){let M=_[y];if(M.value[w]!==null)return M;y--}return null}function F(_,y,w){for(;y<_.length;){let M=_[y];if(M.value[w]!==null)return M;y++}return null}function H(_,y,w,M){if(w.time-y.time===0){_.value[M]=y.value[M];return}_.value[M]=(_.time-y.time)*(w.value[M]-y.value[M])/(w.time-y.time)+y.value[M]}function k(_){let y={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":y.animations.push(o(A.getAttribute("url")));break}}je.clips[_.getAttribute("id")]=y}function ne(_){let y=[],w=_.name,M=_.end-_.start||-1,A=_.animations;for(let K=0,ie=A.length;K<ie;K++){let Le=L(A[K]);for(let ve=0,we=Le.length;ve<we;ve++)y.push(Le[ve])}return new Wa(w,M,y)}function q(_){return v(je.clips[_],ne)}function W(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":y.id=o(A.getAttribute("source")),y.skin=Q(A);break;case"morph":y.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}je.controllers[_.getAttribute("id")]=y}function Q(_){let y={sources:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":y.bindShapeMatrix=r(A.textContent);break;case"source":let K=A.getAttribute("id");y.sources[K]=O(A);break;case"joints":y.joints=te(A);break;case"vertex_weights":y.vertexWeights=ue(A);break}}return y}function te(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let K=A.getAttribute("semantic"),ie=o(A.getAttribute("source"));y.inputs[K]=ie;break}}return y}function ue(_){let y={inputs:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let K=A.getAttribute("semantic"),ie=o(A.getAttribute("source")),Le=parseInt(A.getAttribute("offset"));y.inputs[K]={id:ie,offset:Le};break;case"vcount":y.vcount=a(A.textContent);break;case"v":y.v=a(A.textContent);break}}return y}function V(_){let y={id:_.id},w=je.geometries[y.id];return _.skin!==void 0&&(y.skin=j(_.skin),w.sources.skinIndices=y.skin.indices,w.sources.skinWeights=y.skin.weights),y}function j(_){let w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},M=_.sources,A=_.vertexWeights,K=A.vcount,ie=A.v,Le=A.inputs.JOINT.offset,ve=A.inputs.WEIGHT.offset,we=_.sources[_.joints.inputs.JOINT],Oe=_.sources[_.joints.inputs.INV_BIND_MATRIX],he=M[A.inputs.WEIGHT.id].array,Ue=0,Ne,We,ze;for(Ne=0,ze=K.length;Ne<ze;Ne++){let Et=K[Ne],_t=[];for(We=0;We<Et;We++){let vt=ie[Ue+Le],Ii=ie[Ue+ve],kn=he[Ii];_t.push({index:vt,weight:kn}),Ue+=2}for(_t.sort(Gt),We=0;We<4;We++){let vt=_t[We];vt!==void 0?(w.indices.array.push(vt.index),w.weights.array.push(vt.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(_.bindShapeMatrix?w.bindMatrix=new lt().fromArray(_.bindShapeMatrix).transpose():w.bindMatrix=new lt().identity(),Ne=0,ze=we.array.length;Ne<ze;Ne++){let Et=we.array[Ne],_t=new lt().fromArray(Oe.array,Ne*Oe.stride).transpose();w.joints.push({name:Et,boneInverse:_t})}return w;function Gt(Et,_t){return _t.weight-Et.weight}}function se(_){return v(je.controllers[_],V)}function ae(_){let y={init_from:i(_,"init_from")[0].textContent};je.images[_.getAttribute("id")]=y}function le(_){return _.build!==void 0?_.build:_.init_from}function Ce(_){let y=je.images[_];return y!==void 0?v(y,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function He(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":y.profile=Ve(A);break}}je.effects[_.getAttribute("id")]=y}function Ve(_){let y={surfaces:{},samplers:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":gt(A,y);break;case"technique":y.technique=Xe(A);break;case"extra":y.extra=E(A);break}}return y}function gt(_,y){let w=_.getAttribute("sid");for(let M=0,A=_.childNodes.length;M<A;M++){let K=_.childNodes[M];if(K.nodeType===1)switch(K.nodeName){case"surface":y.surfaces[w]=$(K);break;case"sampler2D":y.samplers[w]=hn(K);break}}}function $(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"init_from":y.init_from=A.textContent;break}}return y}function hn(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"source":y.source=A.textContent;break}}return y}function Xe(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":y.type=A.nodeName,y.parameters=nt(A);break;case"extra":y.extra=E(A);break}}return y}function nt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":y[A.nodeName]=De(A);break;case"transparent":y[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:De(A)};break}}return y}function De(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":y[A.nodeName]=r(A.textContent);break;case"float":y[A.nodeName]=parseFloat(A.textContent);break;case"texture":y[A.nodeName]={id:A.getAttribute("texture"),extra:Lt(A)};break}}return y}function Lt(_){let y={technique:{}};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"extra":ct(A,y);break}}return y}function ct(_,y){for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":I(A,y);break}}}function I(_,y){for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":y.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?y.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?y.technique[A.nodeName]=0:y.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=pe(A);break}}}function E(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":y.technique=Z(A);break}}return y}function Z(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":y[A.nodeName]=parseInt(A.textContent);break;case"bump":y[A.nodeName]=pe(A);break}}return y}function pe(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"texture":y[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:Lt(A)};break}}return y}function de(_){return _}function ge(_){return v(je.effects[_],de)}function ke(_){let y={name:_.getAttribute("name")};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":y.url=o(A.getAttribute("url"));break}}je.materials[_.getAttribute("id")]=y}function Se(_){let y,w=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":y=jc;break;default:y=ba}return y}function Pe(_){let y=ge(_.url),w=y.profile.technique,M;switch(w.type){case"phong":case"blinn":M=new Ga;break;case"lambert":M=new Js;break;default:M=new Kt;break}M.name=_.name||"";function A(ve,we=null){let Oe=y.profile.samplers[ve.id],he=null;if(Oe!==void 0){let Ue=y.profile.surfaces[Oe.source];he=Ce(Ue.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),he=Ce(ve.id);if(he!==null){let Ue=Se(he);if(Ue!==void 0){let Ne=Ue.load(he),We=ve.extra;if(We!==void 0&&We.technique!==void 0&&c(We.technique)===!1){let ze=We.technique;Ne.wrapS=ze.wrapU?ys:Tn,Ne.wrapT=ze.wrapV?ys:Tn,Ne.offset.set(ze.offsetU||0,ze.offsetV||0),Ne.repeat.set(ze.repeatU||1,ze.repeatV||1)}else Ne.wrapS=ys,Ne.wrapT=ys;return we!==null&&(Ne.colorSpace=we),Ne}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",he),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ve.id),null}let K=w.parameters;for(let ve in K){let we=K[ve];switch(ve){case"diffuse":we.color&&M.color.fromArray(we.color),we.texture&&(M.map=A(we.texture,Wt));break;case"specular":we.color&&M.specular&&M.specular.fromArray(we.color),we.texture&&(M.specularMap=A(we.texture));break;case"bump":we.texture&&(M.normalMap=A(we.texture));break;case"ambient":we.texture&&(M.lightMap=A(we.texture,Wt));break;case"shininess":we.float&&M.shininess&&(M.shininess=we.float);break;case"emission":we.color&&M.emissive&&M.emissive.fromArray(we.color),we.texture&&(M.emissiveMap=A(we.texture,Wt));break}}M.color.convertSRGBToLinear(),M.specular&&M.specular.convertSRGBToLinear(),M.emissive&&M.emissive.convertSRGBToLinear();let ie=K.transparent,Le=K.transparency;if(Le===void 0&&ie&&(Le={float:1}),ie===void 0&&Le&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&Le)if(ie.data.texture)M.transparent=!0;else{let ve=ie.data.color;switch(ie.opaque){case"A_ONE":M.opacity=ve[3]*Le.float;break;case"RGB_ZERO":M.opacity=1-ve[0]*Le.float;break;case"A_ZERO":M.opacity=1-ve[3]*Le.float;break;case"RGB_ONE":M.opacity=ve[0]*Le.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}M.opacity<1&&(M.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){let ve=w.extra.technique;for(let we in ve){let Oe=ve[we];switch(we){case"double_sided":M.side=Oe===1?On:Bn;break;case"bump":M.normalMap=A(Oe.texture),M.normalScale=new et(1,1);break}}}return M}function $e(_){return v(je.materials[_],Pe)}function ht(_){let y={name:_.getAttribute("name")};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"optics":y.optics=fe(A);break}}je.cameras[_.getAttribute("id")]=y}function fe(_){for(let y=0;y<_.childNodes.length;y++){let w=_.childNodes[y];switch(w.nodeName){case"technique_common":return Mt(w)}}return{}}function Mt(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"perspective":case"orthographic":y.technique=M.nodeName,y.parameters=ft(M);break}}return y}function ft(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":y[M.nodeName]=parseFloat(M.textContent);break}}return y}function Qe(_){let y;switch(_.optics.technique){case"perspective":y=new Jt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let w=_.optics.parameters.ymag,M=_.optics.parameters.xmag,A=_.optics.parameters.aspect_ratio;M=M===void 0?w*A:M,w=w===void 0?M/A:w,M*=.5,w*=.5,y=new qr(-M,M,w,-w,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:y=new Jt;break}return y.name=_.name||"",y}function Ge(_){let y=je.cameras[_];return y!==void 0?v(y,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Ie(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique_common":y=rt(A);break}}je.lights[_.getAttribute("id")]=y}function rt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":y.technique=A.nodeName,y.parameters=bt(A)}}return y}function bt(_){let y={};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":let K=r(A.textContent);y.color=new ot().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":y.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":let ie=parseFloat(A.textContent);y.distance=ie?Math.sqrt(1/ie):0;break}}return y}function Dt(_){let y;switch(_.technique){case"directional":y=new Kr;break;case"point":y=new Ol;break;case"spot":y=new Ul;break;case"ambient":y=new Fl;break}return _.parameters.color&&y.color.copy(_.parameters.color),_.parameters.distance&&(y.distance=_.parameters.distance),y}function ut(_){let y=je.lights[_];return y!==void 0?v(y,Dt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function _e(_){let y={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=i(_,"mesh")[0];if(w!==void 0){for(let M=0;M<w.childNodes.length;M++){let A=w.childNodes[M];if(A.nodeType!==1)continue;let K=A.getAttribute("id");switch(A.nodeName){case"source":y.sources[K]=O(A);break;case"vertices":y.vertices=be(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":y.primitives.push(Me(A));break;default:console.log(A)}}je.geometries[_.getAttribute("id")]=y}}function O(_){let y={array:[],stride:3};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"float_array":y.array=r(M.textContent);break;case"Name_array":y.array=s(M.textContent);break;case"technique_common":let A=i(M,"accessor")[0];A!==void 0&&(y.stride=parseInt(A.getAttribute("stride")));break}}return y}function be(_){let y={};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];M.nodeType===1&&(y[M.getAttribute("semantic")]=o(M.getAttribute("source")))}return y}function Me(_){let y={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,M=_.childNodes.length;w<M;w++){let A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":let K=o(A.getAttribute("source")),ie=A.getAttribute("semantic"),Le=parseInt(A.getAttribute("offset")),ve=parseInt(A.getAttribute("set")),we=ve>0?ie+ve:ie;y.inputs[we]={id:K,offset:Le},y.stride=Math.max(y.stride,Le+1),ie==="TEXCOORD"&&(y.hasUV=!0);break;case"vcount":y.vcount=a(A.textContent);break;case"p":y.p=a(A.textContent);break}}return y}function Je(_){let y={};for(let w=0;w<_.length;w++){let M=_[w];y[M.type]===void 0&&(y[M.type]=[]),y[M.type].push(M)}return y}function qe(_){let y=0;for(let w=0,M=_.length;w<M;w++)_[w].hasUV===!0&&y++;y>0&&y<_.length&&(_.uvsNeedsFix=!0)}function wt(_){let y={},w=_.sources,M=_.vertices,A=_.primitives;if(A.length===0)return{};let K=Je(A);for(let ie in K){let Le=K[ie];qe(Le),y[ie]=Tt(Le,w,M)}return y}function Tt(_,y,w){let M={},A={array:[],stride:0},K={array:[],stride:0},ie={array:[],stride:0},Le={array:[],stride:0},ve={array:[],stride:0},we={array:[],stride:4},Oe={array:[],stride:4},he=new Hn,Ue=[],Ne=0;for(let We=0;We<_.length;We++){let ze=_[We],Gt=ze.inputs,Et=0;switch(ze.type){case"lines":case"linestrips":Et=ze.count*2;break;case"triangles":Et=ze.count*3;break;case"polylist":for(let _t=0;_t<ze.count;_t++){let vt=ze.vcount[_t];switch(vt){case 3:Et+=3;break;case 4:Et+=6;break;default:Et+=(vt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",ze.type)}he.addGroup(Ne,Et,We),Ne+=Et,ze.material&&Ue.push(ze.material);for(let _t in Gt){let vt=Gt[_t];switch(_t){case"VERTEX":for(let Ii in w){let kn=w[Ii];switch(Ii){case"POSITION":let pr=A.array.length;if(St(ze,y[kn],vt.offset,A.array),A.stride=y[kn].stride,y.skinWeights&&y.skinIndices&&(St(ze,y.skinIndices,vt.offset,we.array),St(ze,y.skinWeights,vt.offset,Oe.array)),ze.hasUV===!1&&_.uvsNeedsFix===!0){let Qg=(A.array.length-pr)/A.stride;for(let zd=0;zd<Qg;zd++)ie.array.push(0,0)}break;case"NORMAL":St(ze,y[kn],vt.offset,K.array),K.stride=y[kn].stride;break;case"COLOR":St(ze,y[kn],vt.offset,ve.array),ve.stride=y[kn].stride;break;case"TEXCOORD":St(ze,y[kn],vt.offset,ie.array),ie.stride=y[kn].stride;break;case"TEXCOORD1":St(ze,y[kn],vt.offset,Le.array),ie.stride=y[kn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ii)}}break;case"NORMAL":St(ze,y[vt.id],vt.offset,K.array),K.stride=y[vt.id].stride;break;case"COLOR":St(ze,y[vt.id],vt.offset,ve.array,!0),ve.stride=y[vt.id].stride;break;case"TEXCOORD":St(ze,y[vt.id],vt.offset,ie.array),ie.stride=y[vt.id].stride;break;case"TEXCOORD1":St(ze,y[vt.id],vt.offset,Le.array),Le.stride=y[vt.id].stride;break}}}return A.array.length>0&&he.setAttribute("position",new It(A.array,A.stride)),K.array.length>0&&he.setAttribute("normal",new It(K.array,K.stride)),ve.array.length>0&&he.setAttribute("color",new It(ve.array,ve.stride)),ie.array.length>0&&he.setAttribute("uv",new It(ie.array,ie.stride)),Le.array.length>0&&he.setAttribute("uv1",new It(Le.array,Le.stride)),we.array.length>0&&he.setAttribute("skinIndex",new It(we.array,we.stride)),Oe.array.length>0&&he.setAttribute("skinWeight",new It(Oe.array,Oe.stride)),M.data=he,M.type=_[0].type,M.materialKeys=Ue,M}function St(_,y,w,M,A=!1){let K=_.p,ie=_.stride,Le=_.vcount;function ve(he){let Ue=K[he+w]*Oe,Ne=Ue+Oe;for(;Ue<Ne;Ue++)M.push(we[Ue]);if(A){let We=M.length-Oe-1;Ao.setRGB(M[We+0],M[We+1],M[We+2]).convertSRGBToLinear(),M[We+0]=Ao.r,M[We+1]=Ao.g,M[We+2]=Ao.b}}let we=y.array,Oe=y.stride;if(_.vcount!==void 0){let he=0;for(let Ue=0,Ne=Le.length;Ue<Ne;Ue++){let We=Le[Ue];if(We===4){let ze=he+ie*0,Gt=he+ie*1,Et=he+ie*2,_t=he+ie*3;ve(ze),ve(Gt),ve(_t),ve(Gt),ve(Et),ve(_t)}else if(We===3){let ze=he+ie*0,Gt=he+ie*1,Et=he+ie*2;ve(ze),ve(Gt),ve(Et)}else if(We>4)for(let ze=1,Gt=We-2;ze<=Gt;ze++){let Et=he+ie*0,_t=he+ie*ze,vt=he+ie*(ze+1);ve(Et),ve(_t),ve(vt)}he+=ie*We}}else for(let he=0,Ue=K.length;he<Ue;he+=ie)ve(he)}function an(_){return v(je.geometries[_],wt)}function At(_){let y={name:_.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":wo(M,y);break}}je.kinematicsModels[_.getAttribute("id")]=y}function un(_){return _.build!==void 0?_.build:_}function Kn(_){return v(je.kinematicsModels[_],un)}function wo(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"joint":y.joints[M.getAttribute("sid")]=Xc(M);break;case"link":y.links.push(ma(M));break}}}function Xc(_){let y;for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"prismatic":case"revolute":y=dr(M);break}}return y}function dr(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=r(M.textContent);y.axis.fromArray(A);break;case"limits":let K=M.getElementsByTagName("max")[0],ie=M.getElementsByTagName("min")[0];y.limits.max=parseFloat(K.textContent),y.limits.min=parseFloat(ie.textContent);break}}return y.limits.min>=y.limits.max&&(y.static=!0),y.middlePosition=(y.limits.min+y.limits.max)/2,y}function ma(_){let y={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"attachment_full":y.attachments.push(fr(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(ga(M));break}}return y}function fr(_){let y={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"link":y.links.push(ma(M));break;case"matrix":case"translate":case"rotate":y.transforms.push(ga(M));break}}return y}function ga(_){let y={type:_.nodeName},w=r(_.textContent);switch(y.type){case"matrix":y.obj=new lt,y.obj.fromArray(w).transpose();break;case"translate":y.obj=new U,y.obj.fromArray(w);break;case"rotate":y.obj=new U,y.obj.fromArray(w),y.angle=Ms.degToRad(w[3]);break}return y}function Eo(_){let y={name:_.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"rigid_body":y.rigidBodies[M.getAttribute("name")]={},qc(M,y.rigidBodies[M.getAttribute("name")]);break}}je.physicsModels[_.getAttribute("id")]=y}function qc(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"technique_common":$c(M,y);break}}}function $c(_,y){for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"inertia":y.inertia=r(M.textContent);break;case"mass":y.mass=r(M.textContent)[0];break}}}function Yc(_){let y={bindJointAxis:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"bind_joint_axis":y.bindJointAxis.push(R(M));break}}je.kinematicsScenes[o(_.getAttribute("url"))]=y}function R(_){let y={target:_.getAttribute("target").split("/").pop()};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType===1)switch(M.nodeName){case"axis":let A=M.getElementsByTagName("param")[0];y.axis=A.textContent;let K=y.axis.split("inst_").pop().split("axis")[0];y.jointIndex=K.substring(0,K.length-1);break}}return y}function X(_){return _.build!==void 0?_.build:_}function J(_){return v(je.kinematicsScenes[_],X)}function ee(){let _=Object.keys(je.kinematicsModels)[0],y=Object.keys(je.kinematicsScenes)[0],w=Object.keys(je.visualScenes)[0];if(_===void 0||y===void 0)return;let M=Kn(_),A=J(y),K=_a(w),ie=A.bindJointAxis,Le={};for(let Oe=0,he=ie.length;Oe<he;Oe++){let Ue=ie[Oe],Ne=Vt.querySelector('[sid="'+Ue.target+'"]');if(Ne){let We=Ne.parentElement;ve(Ue.jointIndex,We)}}function ve(Oe,he){let Ue=he.getAttribute("name"),Ne=M.joints[Oe];K.traverse(function(We){We.name===Ue&&(Le[Oe]={object:We,transforms:Y(he),joint:Ne,position:Ne.zeroPosition})})}let we=new lt;Bd={joints:M&&M.joints,getJointValue:function(Oe){let he=Le[Oe];if(he)return he.position;console.warn("THREE.ColladaLoader: Joint "+Oe+" doesn't exist.")},setJointValue:function(Oe,he){let Ue=Le[Oe];if(Ue){let Ne=Ue.joint;if(he>Ne.limits.max||he<Ne.limits.min)console.warn("THREE.ColladaLoader: Joint "+Oe+" value "+he+" outside of limits (min: "+Ne.limits.min+", max: "+Ne.limits.max+").");else if(Ne.static)console.warn("THREE.ColladaLoader: Joint "+Oe+" is static.");else{let We=Ue.object,ze=Ne.axis,Gt=Ue.transforms;Ae.identity();for(let Et=0;Et<Gt.length;Et++){let _t=Gt[Et];if(_t.sid&&_t.sid.indexOf(Oe)!==-1)switch(Ne.type){case"revolute":Ae.multiply(we.makeRotationAxis(ze,Ms.degToRad(he)));break;case"prismatic":Ae.multiply(we.makeTranslation(ze.x*he,ze.y*he,ze.z*he));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ne.type);break}else switch(_t.type){case"matrix":Ae.multiply(_t.obj);break;case"translate":Ae.multiply(we.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Ae.scale(_t.obj);break;case"rotate":Ae.multiply(we.makeRotationAxis(_t.obj,_t.angle));break}}We.matrix.copy(Ae),We.matrix.decompose(We.position,We.quaternion,We.scale),Le[Oe].position=he}}else console.log("THREE.ColladaLoader: "+Oe+" does not exist.")}}}function Y(_){let y=[],w=Vt.querySelector('[id="'+_.id+'"]');for(let M=0;M<w.childNodes.length;M++){let A=w.childNodes[M];if(A.nodeType!==1)continue;let K,ie;switch(A.nodeName){case"matrix":K=r(A.textContent);let Le=new lt().fromArray(K).transpose();y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Le});break;case"translate":case"scale":K=r(A.textContent),ie=new U().fromArray(K),y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ie});break;case"rotate":K=r(A.textContent),ie=new U().fromArray(K);let ve=Ms.degToRad(K[3]);y.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ie,angle:ve});break}}return y}function Te(_){let y=_.getElementsByTagName("node");for(let w=0;w<y.length;w++){let M=y[w];M.hasAttribute("id")===!1&&M.setAttribute("id",l())}}let Ae=new lt,Be=new U;function Ye(_){let y={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new lt,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];if(M.nodeType!==1)continue;let A;switch(M.nodeName){case"node":y.nodes.push(M.getAttribute("id")),Ye(M);break;case"instance_camera":y.instanceCameras.push(o(M.getAttribute("url")));break;case"instance_controller":y.instanceControllers.push(at(M));break;case"instance_light":y.instanceLights.push(o(M.getAttribute("url")));break;case"instance_geometry":y.instanceGeometries.push(at(M));break;case"instance_node":y.instanceNodes.push(o(M.getAttribute("url")));break;case"matrix":A=r(M.textContent),y.matrix.multiply(Ae.fromArray(A).transpose()),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"translate":A=r(M.textContent),Be.fromArray(A),y.matrix.multiply(Ae.makeTranslation(Be.x,Be.y,Be.z)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"rotate":A=r(M.textContent);let K=Ms.degToRad(A[3]);y.matrix.multiply(Ae.makeRotationAxis(Be.fromArray(A),K)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"scale":A=r(M.textContent),y.matrix.scale(Be.fromArray(A)),y.transforms[M.getAttribute("sid")]=M.nodeName;break;case"extra":break;default:console.log(M)}}return Pt(y.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",y.id):je.nodes[y.id]=y,y}function at(_){let y={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<_.childNodes.length;w++){let M=_.childNodes[w];switch(M.nodeName){case"bind_material":let A=M.getElementsByTagName("instance_material");for(let K=0;K<A.length;K++){let ie=A[K],Le=ie.getAttribute("symbol"),ve=ie.getAttribute("target");y.materials[Le]=o(ve)}break;case"skeleton":y.skeletons.push(o(M.textContent));break;default:break}}return y}function it(_,y){let w=[],M=[],A,K,ie;for(A=0;A<_.length;A++){let we=_[A],Oe;if(Pt(we))Oe=tt(we),st(Oe,y,w);else if(Pi(we)){let Ue=je.visualScenes[we].children;for(let Ne=0;Ne<Ue.length;Ne++){let We=Ue[Ne];if(We.type==="JOINT"){let ze=tt(We.id);st(ze,y,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",we)}for(A=0;A<y.length;A++)for(K=0;K<w.length;K++)if(ie=w[K],ie.bone.name===y[A].name){M[A]=ie,ie.processed=!0;break}for(A=0;A<w.length;A++)ie=w[A],ie.processed===!1&&(M.push(ie),ie.processed=!0);let Le=[],ve=[];for(A=0;A<M.length;A++)ie=M[A],Le.push(ie.bone),ve.push(ie.boneInverse);return new Tl(Le,ve)}function st(_,y,w){_.traverse(function(M){if(M.isBone===!0){let A;for(let K=0;K<y.length;K++){let ie=y[K];if(ie.name===M.name){A=ie.boneInverse;break}}A===void 0&&(A=new lt),w.push({bone:M,boneInverse:A,processed:!1})}})}function Ht(_){let y=[],w=_.matrix,M=_.nodes,A=_.type,K=_.instanceCameras,ie=_.instanceControllers,Le=_.instanceLights,ve=_.instanceGeometries,we=_.instanceNodes;for(let he=0,Ue=M.length;he<Ue;he++)y.push(tt(M[he]));for(let he=0,Ue=K.length;he<Ue;he++){let Ne=Ge(K[he]);Ne!==null&&y.push(Ne.clone())}for(let he=0,Ue=ie.length;he<Ue;he++){let Ne=ie[he],We=se(Ne.id),ze=an(We.id),Gt=Qn(ze,Ne.materials),Et=Ne.skeletons,_t=We.skin.joints,vt=it(Et,_t);for(let Ii=0,kn=Gt.length;Ii<kn;Ii++){let pr=Gt[Ii];pr.isSkinnedMesh&&(pr.bind(vt,We.skin.bindMatrix),pr.normalizeSkinWeights()),y.push(pr)}}for(let he=0,Ue=Le.length;he<Ue;he++){let Ne=ut(Le[he]);Ne!==null&&y.push(Ne.clone())}for(let he=0,Ue=ve.length;he<Ue;he++){let Ne=ve[he],We=an(Ne.id),ze=Qn(We,Ne.materials);for(let Gt=0,Et=ze.length;Gt<Et;Gt++)y.push(ze[Gt])}for(let he=0,Ue=we.length;he<Ue;he++)y.push(tt(we[he]).clone());let Oe;if(M.length===0&&y.length===1)Oe=y[0];else{Oe=A==="JOINT"?new Ha:new An;for(let he=0;he<y.length;he++)Oe.add(y[he])}return Oe.name=A==="JOINT"?_.sid:_.name,Oe.matrix.copy(w),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe}let Pn=new Kt({name:wi.DEFAULT_MATERIAL_NAME,color:16711935});function jt(_,y){let w=[];for(let M=0,A=_.length;M<A;M++){let K=y[_[M]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[M]),w.push(Pn)):w.push($e(K))}return w}function Qn(_,y){let w=[];for(let M in _){let A=_[M],K=jt(A.materialKeys,y);if(K.length===0&&(M==="lines"||M==="linestrips"?K.push(new Yr):K.push(new Ga)),M==="lines"||M==="linestrips")for(let we=0,Oe=K.length;we<Oe;we++){let he=K[we];if(he.isMeshPhongMaterial===!0||he.isMeshLambertMaterial===!0){let Ue=new Yr;Ue.color.copy(he.color),Ue.opacity=he.opacity,Ue.transparent=he.transparent,K[we]=Ue}}let ie=A.data.attributes.skinIndex!==void 0,Le=K.length===1?K[0]:K,ve;switch(M){case"lines":ve=new Al(A.data,Le);break;case"linestrips":ve=new Va(A.data,Le);break;case"triangles":case"polylist":ie?ve=new wl(A.data,Le):ve=new Ft(A.data,Le);break}w.push(ve)}return w}function Pt(_){return je.nodes[_]!==void 0}function tt(_){return v(je.nodes[_],Ht)}function ya(_){let y={name:_.getAttribute("name"),children:[]};Te(_);let w=i(_,"node");for(let M=0;M<w.length;M++)y.children.push(Ye(w[M]));je.visualScenes[_.getAttribute("id")]=y}function Ut(_){let y=new An;y.name=_.name;let w=_.children;for(let M=0;M<w.length;M++){let A=w[M];y.add(tt(A.id))}return y}function Pi(_){return je.visualScenes[_]!==void 0}function _a(_){return v(je.visualScenes[_],Ut)}function ks(_){let y=i(_,"instance_visual_scene")[0];return _a(o(y.getAttribute("url")))}function va(){let _=je.clips;if(c(_)===!0){if(c(je.animations)===!1){let y=[];for(let w in je.animations){let M=L(w);for(let A=0,K=M.length;A<K;A++)y.push(M[A])}Co.push(new Wa("default",-1,y))}}else for(let y in _)Co.push(q(y))}function on(_){let y="",w=[_];for(;w.length;){let M=w.shift();M.nodeType===Node.TEXT_NODE?y+=M.textContent:(y+=`
`,w.push.apply(w,M.childNodes))}return y.trim()}if(e.length===0)return{scene:new Zs};let xi=new DOMParser().parseFromString(e,"application/xml"),Vt=i(xi,"COLLADA")[0],Mn=xi.getElementsByTagName("parsererror")[0];if(Mn!==void 0){let _=i(Mn,"div")[0],y;return _?y=_.textContent:y=on(Mn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,y),null}let xa=Vt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",xa);let To=h(i(Vt,"asset")[0]),ba=new Nl(this.manager);ba.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let jc;Ya&&(jc=new Ya(this.manager),jc.setPath(this.resourcePath||t));let Ao=new ot,Co=[],Bd={},Kg=0,je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};m(Vt,"library_animations","animation",p),m(Vt,"library_animation_clips","animation_clip",k),m(Vt,"library_controllers","controller",W),m(Vt,"library_images","image",ae),m(Vt,"library_effects","effect",He),m(Vt,"library_materials","material",ke),m(Vt,"library_cameras","camera",ht),m(Vt,"library_lights","light",Ie),m(Vt,"library_geometries","geometry",_e),m(Vt,"library_nodes","node",Ye),m(Vt,"library_visual_scenes","visual_scene",ya),m(Vt,"library_kinematics_models","kinematics_model",At),m(Vt,"library_physics_models","physics_model",Eo),m(Vt,"scene","instance_kinematics_scene",Yc),g(je.animations,b),g(je.clips,ne),g(je.controllers,V),g(je.images,le),g(je.effects,de),g(je.materials,Pe),g(je.cameras,Qe),g(je.lights,Dt),g(je.geometries,wt),g(je.visualScenes,Ut),va(),ee();let Ro=ks(i(Vt,"scene")[0]);return Ro.animations=Co,To.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ro.rotation.set(-Math.PI/2,0,0)),Ro.scale.multiplyScalar(To.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Co},kinematics:Bd,library:je,scene:Ro}}};var Kp=new fn,Yl=new U,er=class extends Bl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new It(e,3)),this.setAttribute("uv",new It(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Qs(t,6,1);return this.setAttribute("instanceStart",new si(i,3,0)),this.setAttribute("instanceEnd",new si(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new Qs(t,6,1);return this.setAttribute("instanceColorStart",new si(i,3,0)),this.setAttribute("instanceColorEnd",new si(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Rl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Kp.setFromBufferAttribute(t),this.boundingBox.union(Kp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yl.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yl)),Yl.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Yl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Un.line={uniforms:Xl.merge([ye.common,ye.fog,ye.line]),vertexShader:`
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
		`};var Yi=class extends pi{constructor(e){super({type:"LineMaterial",uniforms:Xl.clone(Un.line.uniforms),vertexShader:Un.line.vertexShader,fragmentShader:Un.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Qp=new U,em=new U,pn=new xt,mn=new xt,Ei=new xt,vu=new U,xu=new lt,gn=new Hl,tm=new U,jl=new fn,Zl=new ii,Ti=new xt,Ai,tr;function nm(n,e,t){return Ti.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ti.multiplyScalar(1/Ti.w),Ti.x=tr/t.width,Ti.y=tr/t.height,Ti.applyMatrix4(n.projectionMatrixInverse),Ti.multiplyScalar(1/Ti.w),Math.abs(Math.max(Ti.x,Ti.y))}function MM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){gn.start.fromBufferAttribute(s,o),gn.end.fromBufferAttribute(r,o),gn.applyMatrix4(t);let c=new U,h=new U;Ai.distanceSqToSegment(gn.start,gn.end,h,c),h.distanceTo(c)<tr*.5&&e.push({point:h,pointOnLine:c,distance:Ai.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function SM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Ai.at(1,Ei),Ei.w=1,Ei.applyMatrix4(e.matrixWorldInverse),Ei.applyMatrix4(i),Ei.multiplyScalar(1/Ei.w),Ei.x*=r.x/2,Ei.y*=r.y/2,Ei.z=0,vu.copy(Ei),xu.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,m=h;d<m;d++){if(pn.fromBufferAttribute(l,d),mn.fromBufferAttribute(c,d),pn.w=1,mn.w=1,pn.applyMatrix4(xu),mn.applyMatrix4(xu),pn.z>u&&mn.z>u)continue;if(pn.z>u){let b=pn.z-mn.z,L=(pn.z-u)/b;pn.lerp(mn,L)}else if(mn.z>u){let b=mn.z-pn.z,L=(mn.z-u)/b;mn.lerp(pn,L)}pn.applyMatrix4(i),mn.applyMatrix4(i),pn.multiplyScalar(1/pn.w),mn.multiplyScalar(1/mn.w),pn.x*=r.x/2,pn.y*=r.y/2,mn.x*=r.x/2,mn.y*=r.y/2,gn.start.copy(pn),gn.start.z=0,gn.end.copy(mn),gn.end.z=0;let v=gn.closestPointToPointParameter(vu,!0);gn.at(v,tm);let p=Ms.lerp(pn.z,mn.z,v),f=p>=-1&&p<=1,T=vu.distanceTo(tm)<tr*.5;if(f&&T){gn.start.fromBufferAttribute(l,d),gn.end.fromBufferAttribute(c,d),gn.start.applyMatrix4(a),gn.end.applyMatrix4(a);let b=new U,L=new U;Ai.distanceSqToSegment(gn.start,gn.end,L,b),t.push({point:L,pointOnLine:b,distance:Ai.origin.distanceTo(L),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var ja=class extends Ft{constructor(e=new er,t=new Yi({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Qp.fromBufferAttribute(t,a),em.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Qp.distanceTo(em);let r=new Qs(s,2,1);return e.setAttribute("instanceDistanceStart",new si(r,1,0)),e.setAttribute("instanceDistanceEnd",new si(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ai=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;tr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Zl.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=tr*.5;else{let u=Math.max(s.near,Zl.distanceToPoint(Ai.origin));c=nm(s,u,l.resolution)}if(Zl.radius+=c,Ai.intersectsSphere(Zl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),jl.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=tr*.5;else{let u=Math.max(s.near,jl.distanceToPoint(Ai.origin));h=nm(s,u,l.resolution)}jl.expandByScalar(h),Ai.intersectsBox(jl)!==!1&&(i?MM(this,t):SM(this,s,t))}};var wM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",Za=null;function EM(){if(Za)return Za;Za=new Map;for(let n of wM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,a]=i.split(" ");Za.set(t?t+"/"+s:s,[+r,+a])}}return Za}var nr=Math.PI/180;function TM(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*nr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*nr,a=(23.439-36e-8*i)*nr,o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(a)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*nr+t*nr-o,u=e*nr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/nr}function AM(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=EM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function im(n=Date.now(),e=AM()){if(e.lat==null){let r=new Date(n),a=r.getHours()+r.getMinutes()/60,o=a>=7&&a<20,l=new Date(n);return l.setHours(o?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:o,next:+l}}let t=r=>TM(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let a=r-s,o=r;for(;o-a>3e4;){let l=(a+o)/2;t(l)===i?a=l:o=l}return{day:i,next:Math.ceil(o)}}return{day:i,next:n+24*36e5}}var ai=["en","fr","ca","es"];var CM={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function cm(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of CM[e]||ai)if(n[t])return n[t];return""}var Ka={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Video settings",hv_source:"Source",hv_cell:"Squares",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"R\xE9glages vid\xE9o",hv_source:"Source",hv_cell:"Carr\xE9s",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Ajustos del v\xEDdeo",hv_source:"Font",hv_cell:"Quadrats",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Ajustes del v\xEDdeo",hv_source:"Fuente",hv_cell:"Cuadrados",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web"}},RM={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},Qa={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function sm(){return Object.fromEntries(ai.map(n=>[n,""]))}function ir(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ai.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||sm(),e.sub=e.sub||sm(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[];let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ai.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ai.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=RM[s.layout]?s.layout:"carousel",s.card=Qa[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ai.map(a=>[a,s[r]||""]))),ai.forEach(a=>{s[r][a]==null&&(s[r][a]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ai.map(a=>[a,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(Mu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function bu(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function hm(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Ql(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function Fe(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var LM=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function ec(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!LM.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function sr(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Mu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Ss(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function Su(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function rm(n){try{let e=await Su();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function am(n,e){let t=await Su();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function om(n){try{let e=await Su();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Jl=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return ir(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return ir(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Kl=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await rm("demo:content:v6");if(e)return ir(e);if(window.HC_CONTENT)return ir(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return ir(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await om("demo:file:"+i.path);continue}await am("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await am("demo:content:v6",e),"demo"}async reset(){await om("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await rm("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},lm=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Ja=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],PM=["font","size","lh","weight","italic","ls","upper"],um=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function IM(n){let e=lm.find(i=>i.id===n);if(e)return e.css;let t=um(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:lm[0].css}function oi(n,e){let t=Ja.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...PM,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=IM(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function dm(n){let e=[],t=[],i=[],s=[];for(let r of Ja){if(r.vars||!r.sel)continue;let a=oi(n,r.id),o=r.id;s.push(`--f-${o}: ${a.css}`,`--w-${o}: ${a.weight||400}`,`--st-${o}: ${a.italic?"italic":"normal"}`,`--tt-${o}: ${a.upper?"uppercase":"none"}`,`--ls-${o}: ${a.ls||0}em`),a.size&&s.push(`--s-${o}: ${a.size}px`,`--lh-${o}: ${a.lh?a.lh:+(a.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of Ja){let a=n&&n.typo&&n.typo[r.id]||{},o=oi(n,r.id),l=h=>a[h]!==void 0&&a[h]!==""&&a[h]!==null&&a[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${o.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${o.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(o.size*r.clamp[0])}px, ${(o.size/r.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?o.lh:+(r.lh*o.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${o.weight}`),l("italic")&&c.push(`font-style: ${o.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${o.ls}em`),l("upper")&&c.push(`text-transform: ${o.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?o.lh:r.lh*o.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function fm(n){let e=new Map;for(let t of Ja){let i=oi(n,t.id),s=um(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function wu(n){let e=new Set;for(let t of Ja){let i=oi(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function pm(n,e,t=!1){let i=oi(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,88,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic",r.font=`${i.italic?"italic ":""}${i.weight||400} ${Math.max(8,+i.size||38)*2}px ${i.css}`;let o=r.measureText(a),l=(o.actualBoundingBoxAscent||i.size*1.4)-(o.actualBoundingBoxDescent||0);if(r.fillText(a,120,120+l/2),t){let c=r.getImageData(0,0,240,240),h=c.data;for(let u=0;u<h.length;u+=4)h[u]=255-h[u],h[u+1]=255-h[u+1],h[u+2]=255-h[u+2];r.putImageData(c,0,0)}return s.toDataURL("image/png")}var mm=window.HC_BASE||"",lc=window.HC_MODE==="demo"?new Kl(mm):new Jl(mm),Ts=window.HC_ASSETS||null,NM=location.protocol==="file:",Zm=20261102;window.HC_SITE_VERSION=Zm;var kt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,$t=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return kt&&kt.files&&kt.files[e]?kt.files[e]:Ts&&Ts[e]&&Ts[e].startsWith("data:")?Ts[e]:lc.url(e)};async function DM(n){if(Ts&&Ts[n]&&!Ts[n].startsWith("data:"))return Ts[n];let e=await fetch($t(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var xe=null,Qi="en",Ee=n=>cm(n,Qi),Ze=n=>(Ka[Qi]||Ka.en)[n],UM=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Ps={zoom:2,focus:300},OM=.08,gm={};function Jm(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=gm[t]}):(e.forEach(t=>{gm[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Hu=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=bu(xe,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(t=>t.tags));return[{id:"",label:Object.fromEntries(ai.map(t=>[t,(Ka[t]||Ka.en).all]))},...this.section.tags.filter(t=>e.has(t.id))]}changeCategory(e){e&&!this.categoryList.some(t=>t.id===e)&&(e=""),this.category=e,this.list=e?this.all.filter(t=>t.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?Ee(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},G={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Nt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Hu(this.section.def)}},Nt=[],yt={x:0,y:0,z:0,zoom:Ps.zoom},Rn={x:0,y:0,z:0},Ki=0,yi=[],FM={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function Qt(n,e,t,i={}){for(let r of yi)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:Ki+(i.delay||0),ease:FM[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return yi.push(s),s}var co=(n,e)=>Qt({},n,{},{onComplete:e,ease:"linear"});function _n(n){for(let e=yi.length-1;e>=0;e--)yi[e].obj===n&&yi.splice(e,1)}function ha(n){return yi.some(e=>e.obj===n&&Ki>=e.start)}function Km(n,e){if(!e&&Ki<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(Ki-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function kM(){for(let n of yi.slice())if(Km(n,!1)){let e=yi.indexOf(n);e>=0&&yi.splice(e,1),n.onComplete&&n.onComplete()}}function Qm(){yi.splice(0).forEach(n=>Km(n,!0))}function BM(n,e,t,i,s,r,a){_n(yt),Qt(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),dd(i,s,r,a)}function dd(n,e,t,i){_n(Rn),Qt(Rn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function zM(n,e,t,i){_n(yt),Qt(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var fc=1,vn=n=>n<=1?1:1-Math.pow(1-1/n,fc),Ri=Math.PI/180,Vu=(n,e,t)=>new U(n,e,-t),ws=(n,e,t)=>[-n,e,t],xn=document.getElementById("stage"),Ds=new Ba({canvas:xn,antialias:!0});Ds.debug.checkShaderErrors=!1;Ds.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ds.setClearColor(16777215,1);var es=new Zs;es.add(new Dl(16777215,14211288,2.2));var eg=new Kr(16777215,1.2);eg.position.set(300,800,500);es.add(eg);var Fn=new Jt(60,1,1,6e4),tg=new Yi({color:oe.lineColor,linewidth:oe.lineThickness}),Gu=new Yi({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),ng=new Yi({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),cc=new Yi({color:oe.locatorColor,linewidth:1.3}),ig=[tg,Gu,ng,cc],sg=new Xa;sg.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:$t(n));var Eu=new Map;function Is(n){return n?NM&&!/^(data:|blob:|https?:)/.test($t(n))?Promise.reject(new Error("local")):(Eu.has(n)||Eu.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test($t(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=$t(n)})),Eu.get(n)):Promise.reject(new Error("no image"))}function fd(n){return n.colorSpace=Wt,n.anisotropy=Math.min(8,Ds.capabilities.getMaxAnisotropy()),n}var HM=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=fd(new jr(n)),t=new Xi(1,1),i=new Zs;return[Bn,cn,On].forEach(s=>i.add(new Ft(t,new Kt({map:e,side:s})))),i.add(new Ft(t,new Kt({color:1118481}))),i.add(new za(new $r({map:e,transparent:!0}))),i})(),Yt=0,zt=0,Wn=!1,pc=()=>Wn,lr=0,ym=0,ho=()=>xe.settings.negative==="auto";function Tc(){if(!ho())return lr=0,!!xe.settings.negative;let n=im();return lr=n.next,!n.day}function pd(){if(kt||xe.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!ho()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function rg(n){n!==Wn&&(Wn=n,kc(),Re&&Re.retexture())}function md(){if(clearTimeout(ym),!ho())return;ym=setTimeout(()=>{if(Date.now()>=lr-1e3){let e=Tc(),t=pd();rg(t??e)}md()},Math.min(Math.max(lr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&lr&&Date.now()>=lr){let n=Tc(),e=pd();rg(e??n),md()}});var ag=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},Jn=()=>{let n=xe.settings.accent||"#ffcc00";return pc()?ag(n):n},Ac='Georgia, Gelasio, "Times New Roman", serif',yn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',og=400,lg=Ac,cg=!1,hg=1,_i=n=>`${og} ${n}px ${Ac}`,Cs=n=>`${cg?"italic ":""}400 ${Math.round(n*hg*10)/10}px ${lg}`,gd=1,mt=n=>Math.round(n*gd),VM=700,yd=()=>{let n=Yt||window.innerWidth,e=zt||window.innerHeight;return n<VM||Math.min(n,e)<500},ts=yd;function Us(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...xe?wu(xe.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var _m=0,ug=[];function GM(){Xt&&(Sg(),Mg()),clearTimeout(_m),_m=setTimeout(async()=>{try{await Promise.all(wu(xe.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}xe.settings.logo||Ku(),Re&&!Re.loading&&Re.retexture()},150)}function dg(){let n=xe.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=dm(n);e.textContent!==t&&(e.textContent=t);let i=fm(n);document.querySelectorAll("link[data-hc-font]").forEach(a=>{i.includes(a.href)||a.remove()}),i.forEach(a=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(a)}"]`)){let o=document.createElement("link");o.rel="stylesheet",o.href=a,o.dataset.hcFont="",ug.push(new Promise(l=>{o.onload=()=>{l(),GM()},o.onerror=l})),document.head.appendChild(o)}});let s=oi(n,"card"),r=oi(n,"subtitle");og=s.weight||400,lg=r.css,cg=!!r.italic,hg=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,Ac=s.css,yn=oi(n,"cardsm").css,gd=Math.max(.5,Math.min(2,(+oi(n,"card").scale||100)/100))}function en(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function nn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),fd(new jr(s))}function ns(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,l=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,t,i,s,r),pc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Wu=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function fg(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function ua(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Cc=n=>Nt.some(e=>e.def.id===n.section),WM=(n,e)=>Nt.findIndex(t=>t.def.id===n.section)-Nt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),mc=n=>xe.posts.filter(e=>e.published&&e!==n&&Cc(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(WM),Xu=n=>{let e=Ql(xe,n).filter(Cc);return e.length?e:mc(n)},Tu=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),XM=n=>hm(xe,n).filter(Cc),uo=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Mc(e.src)==="image")||{}).src||"",vm=new Map,qu=n=>mc(n).filter(uo);async function Rc(n,e=Xu(n)){let t=e.filter(uo);if(!t.length)return null;let i=t.find(r=>r.id===vm.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,a)=>r[0]-a[0]).map(r=>r[1]);for(let r of s){let a=await Is(uo(r)).catch(()=>null);if(a)return vm.set(n.id,r.id),{im:a,project:r}}return null}function Lc(n,e,t,i,s){ns(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function pg(n,e){let t=Ee(n.title).trim(),i=Ee(n.subtitle).trim();if(!t&&!i)return null;let s=ts(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),a=s?17:Math.max(7.5,r*.74),o=Math.round(r*(s?.6:.75)),l=e-2*o,c=document.createElement("canvas").getContext("2d");c.font=_i(r);let h=t?en(c,t,l).slice(0,2):[];c.font=Cs(a);let u=i?en(c,i,l).slice(0,2):[],d=Math.round(r*1.2),m=Math.round(a*1.25),g=Math.ceil(o+h.length*d+(u.length?3+u.length*m:0)+o-2);return{tex:nn(e,g,p=>{p.fillStyle="rgba(0,0,0,.62)",p.fillRect(0,0,e,g),p.textBaseline="top";let f=o;p.fillStyle="#fff",p.font=_i(r),h.forEach(T=>{p.fillText(T,o,f),f+=d}),f+=3,p.font=Cs(a),u.forEach(T=>{p.fillText(T,o,f),f+=m})},3),bh:g,w:e}}async function qM(n,e,t){let i=n.thumb?await Is(n.thumb).catch(()=>null):null,s=n.thumbBack?await Is(n.thumbBack).catch(()=>null):null,r=i?null:await Rc(n);await Us();let a=(c,h=!1)=>{if(i){ns(c,i,0,0,e,t);return}r?Lc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ts(),d=u?14:16,m=u?[mt(31),mt(34),2]:[mt(24),28,3],g=u?[mt(20),mt(23),1]:[mt(13),16,2],v=u?mt(15):10,p=u?mt(13):9,f=u?26:20;c.fillStyle=Jn(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=_i(m[0]);let T=en(c,Ee(n.title),e-2*d).slice(0,m[2]),b=u?22:30;T.forEach((N,P)=>c.fillText(N,d,b+P*m[1])),c.font=Cs(g[0]),en(c,Ee(n.subtitle),e-2*d).slice(0,u&&T.length<2?2:g[2]).forEach((N,P)=>c.fillText(N,d,b+8+T.length*m[1]+P*g[1]));let L=r?Rm(r.project,r.project.media[0]&&r.project.media[0].credit):Rm(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${yn}`,c.fillText([n.date,Ee(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(L?f+v+6:v+12)),L){c.font=`${p}px ${yn}`;let N=L;for(;c.measureText(N).width>e-2*d&&N.length>4;)N=N.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(N,d,t-f/2)}c.globalAlpha=1},o=nn(e,t,a,2),l=s?nn(e,t,c=>ns(c,s,0,0,e,t),2):r?nn(e,t,ua(e,c=>a(c,!0)),2):nn(e,t,fg(a),1.5);return[o,l,i?pg(n,e):null]}async function $M(n,e,t){let i=n.thumb?await Is(n.thumb).catch(()=>null):null,s=n.thumbBack?await Is(n.thumbBack).catch(()=>null):null,r=i||Tu(n)?null:await Rc(n,qu(n));await Us();let a=(l,c=!1)=>{if(Tu(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ts()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${yn}`;let v=en(l,Ee(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((p,f)=>l.fillText(p,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),pc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,m=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-m)/2,d,m),pc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){ns(l,i,0,0,e,t);return}r?Lc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Cs(Math.round(t*.42*gd)),l.textAlign="center",l.textBaseline="middle",l.fillText(Wu(Ee(n.title)),e/2,t*.45),l.fillStyle=Jn(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},o=s?nn(e,t,l=>ns(l,s,0,0,e,t),3):r?nn(e,t,ua(e,l=>a(l,!0)),2):nn(e,t,fg(a),2);return[nn(e,t,a,3),o,i||r||Tu(n)?pg(n,e):null]}async function YM(n,e,t){let i=await Rc(n);if(i)return jM(n,e,t,i);let s=n.thumb?await Is(n.thumb).catch(()=>null):null;await Us();let r=Ee(n.title).trim(),a=ts(),o=mt(a?30:21),l=a?mt(32):22,c=a?2:3,h=s?72:18,u=e-h-14,d=nn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?ns(g,s,13,12.75,53,53):(g.fillStyle=Jn(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=_i(o),g.textBaseline="top",en(g,r,u).slice(0,c).forEach((v,p)=>g.fillText(v,h,(s?12:20)+p*l))}),m=nn(e,t,ua(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=_i(o),g.textBaseline="top",en(g,r,u).slice(0,c).forEach((v,p)=>g.fillText(v,h,(s?9:17)+p*l))}));return[d,m]}async function jM(n,e,t,i){await Us();let s=Ee(n.title).trim(),r=e-32,a=ts(),o=mt(a?30:21),l=a?mt(32):22,c=h=>u=>{Lc(u,i,e,t,h?.2:a?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=Jn(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=_i(o),u.textBaseline="top",en(u,s,r).slice(0,a?2:3).forEach((d,m)=>u.fillText(d,18,20+m*l)),u.globalAlpha=1};return[nn(e,t,c(!1),2),nn(e,t,ua(e,c(!0)),2)]}async function ZM(n,e,t){let i=n.thumb?await Is(n.thumb).catch(()=>null):null;await Us();let r=nn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),ns(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=Jn(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${mt(12)}px ${Ac}`,a.textAlign="center",a.textBaseline="top",a.fillText(Ee(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var JM={image:qM,portrait:$M,text:YM,place:ZM};async function KM(n,e,t){let i=n.thumb?await Is(n.thumb).catch(()=>null):null,s=i?{im:i}:await Rc(n);await Us();let r=Ee(n.title).trim(),a=(Ee(n.subtitle).trim()||sr(Ee(n.body)).join(" ")).replace(/\s+/g," ").trim(),o=t<110,l=ts(),c=s&&!l?Math.round(o?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,m,g,v]=l?o?[28,31,0,1]:[36,40,0,1]:o?[15,18,9.5,12]:[17,20,10.5,13.5],p=(L,N)=>{L.globalAlpha=N,L.textBaseline="top";let P=e-h-12;L.fillStyle=Jn(),L.fillRect(h,o?9:13,14,2),L.fillStyle="#fff",L.font=_i(mt(d));let D=o?16:22;en(L,r,P).slice(0,l?3:2).forEach(B=>{L.fillText(B,h,D),D+=mt(m)}),L.globalAlpha=1},f=L=>{L.fillStyle="#111",L.fillRect(0,0,e,t),s&&(ns(L,s.im,0,0,e,t),L.fillStyle="rgba(0,0,0,.18)",L.fillRect(0,0,e,t)),p(L,.38)},T=L=>{let N=L.createLinearGradient(0,0,0,t);N.addColorStop(0,"rgba(0,0,0,.7)"),N.addColorStop(1,"rgba(0,0,0,.3)"),L.fillStyle=N,L.fillRect(0,0,e,t),p(L,1)};return[nn(e,t,(L=>N=>{N.fillStyle="#111",N.fillRect(0,0,e,t),s&&l&&!L&&Lc(N,s,e,t,.6),s&&!l&&ns(N,s.im,e-c,0,c,t),N.textBaseline="top",N.fillStyle=Jn(),N.fillRect(h,o?9:13,14,2),N.fillStyle="#fff",N.font=_i(mt(d));let P=en(N,r,u).slice(0,l?3:2),D=o?16:22;P.forEach(C=>{N.fillText(C,h,D),D+=mt(m)}),D+=o?2:5,N.font=Cs(mt(g));let B=l?0:Math.max(0,Math.floor((t-D-8)/mt(v))),S=en(N,a,u);if(S.length>B&&(S=S.slice(0,B),B)){let C=S[B-1];for(;C&&N.measureText(C+"\u2026").width>u;)C=C.replace(/\s*\S+$/,"");S[B-1]=C+"\u2026"}S.forEach(C=>{N.fillText(C,h,D),D+=mt(v)}),N.globalAlpha=1})(!1),2),nn(e,t,ua(e,f),2),null,nn(e,t,ua(e,T),2)]}function tc(n,e){return Us().then(()=>e==="place"?nn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=_i(mt(44)),t.fillText(Ee(n.title)+".",32,18),t.font=Cs(mt(18)),en(t,Ee(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.font=`14px ${yn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",sr(Ee(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.font=`600 15px ${yn}`,t.fillText(Ee(n.place),32,260)},1.5):ts()?nn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=_i(mt(25));let i=en(t,Ee(n.title)+".",172).slice(0,2);i.forEach((d,m)=>t.fillText(d,14,12+m*mt(27))),t.font=`${mt(13)}px ${yn}`;let s=mc(n).map(d=>Ee(d.title).trim()).filter(Boolean),r=s.length?en(t,s.join("  \xB7  "),172).slice(0,2):[],a=Ee(n.place)?168:188,o=a-r.length*16-16,l=18+i.length*mt(27);t.font=Cs(mt(17));let c=(r.length?o-6:a)-mt(20),h=en(t,Ee(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=mt(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,m)=>t.fillText(d,14,18+i.length*mt(27)+m*mt(20))),r.length&&(t.font=`600 ${mt(11)}px ${yn}`,t.fillText(Ze("together").toUpperCase(),14,o),t.font=`${mt(13)}px ${yn}`,r.forEach((d,m)=>t.fillText(d,14,o+16+m*16))),Ee(n.place)&&(t.font=`600 ${mt(13)}px ${yn}`,t.fillText(Ee(n.place).toUpperCase(),14,176))},2.5):nn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=_i(mt(20));let i=en(t,Ee(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${yn}`;let r=mc(n).map(u=>Ee(u.title).trim()).filter(Boolean),a=r.length?en(t,r.join("  \xB7  "),166).slice(0,3):[],o=(Ee(n.place)?174:188)-a.length*13-13;t.font=Cs(mt(15));let l=(a.length?o-4:168)-18,c=[];Ee(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>en(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${yn}`,sr(Ee(n.body)).join(" ").split(/\s+/).length>1&&en(t,sr(Ee(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((a.length?o-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),a.length&&(t.font=`600 8px ${yn}`,t.fillText(Ze("together").toUpperCase(),19,o),t.font=`10px ${yn}`,a.forEach((u,d)=>t.fillText(u,19,o+13+d*13))),Ee(n.place)&&(t.font=`600 11px ${yn}`,t.fillText(Ee(n.place).toUpperCase(),19,180))}))}function QM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${yn}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${yn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let l=new za(new $r({map:fd(new jr(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*a/o,c,1),l.renderOrder=2,l}var Ci=document.createElement("div");Ci.id="net-tip";Ci.className="ui";Ci.hidden=!0;document.body.appendChild(Ci);function mg(n,e,t){Ci.innerHTML=`<b>${Fe(n.city||"")}</b>${n.titles.map(s=>`<span>${Fe(s)}</span>`).join("")}`,Ci.hidden=!1;let i=Ci.getBoundingClientRect();Ci.style.left=Math.min(e+14,Yt-i.width-10)+"px",Ci.style.top=Math.max(10,t-i.height-12)+"px"}function Pc(){Ci.hidden=!0}var $u=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new An,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=xe.models.find(h=>h.id===this.def.model)||xe.models[0];if(!t)return;let i=await DM(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new An;o.add(a),a.traverse(h=>{if(!h.isMesh)return;let u=d=>{let m=d.map||d.emissiveMap||null;return m?new Kt({map:m}):t.untextured==="white"?new Js({color:15921906}):t.untextured==="black"?new Js({color:2236962}):new Kt({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){o.updateMatrixWorld(!0);let h=new fn().setFromObject(o),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;o.scale.setScalar(d),o.updateMatrixWorld(!0);let m=new fn().setFromObject(o),g=m.getCenter(new U);o.position.set(-g.x,-m.min.y,-g.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let h=new fn().setFromObject(o);h.max.y-h.min.y>oe.object3DMaxHeight&&o.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),o.scale.multiplyScalar(l)}let c=new An;c.rotation.y=(t.rotationY||0)*Ri,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Vu(this.p.x,0,this.p.z))}};function gg(n,e){let t=new er;t.setPositions(n);let i=new ja(t,e);return i.computeLineDistances(),i}var Yu=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new An,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Xi(this.width,this.height);if(this.setBand(i),s){let h=new Ft(r,new Kt({map:s,side:cn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let a=new Ft(r,new Kt({map:e,side:Bn})),o=new Ft(r,new Kt({map:t,side:cn}));a.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=gg([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Gu),this.group.add(a,o,this.frame),this.meshes.push(a,o),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...ws(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ri,t.rotation.x=-e.rotX*Ri,t.rotation.z=e.rotZ*Ri,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&Qt(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=ng,co(.8,()=>{this.frame&&(this.frame.material=Gu)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),Qt(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){_n(this.thumb);let i=ss(),s={x:-i*Math.sin(G.degreeCamera),z:-i*Math.cos(G.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||1;return Qt(this.thumb,t,{x:s.x+a*e/l,y:r.y,z:s.z+o*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/l,z:o/l}}}moveBack(e=0){_n(this.thumb);let t=this.p2;Qt(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){Qt(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>Qt(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),_n(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Ft(new Xi(t,s),new Kt({map:e.tex,transparent:!0,depthWrite:!1,side:Bn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&Qt(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,a=r+t*e.bh;i.setY(0,a),i.setY(1,a),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),_n(this.thumb),this.bhi&&_n(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!ig.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Au(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ri;i===0&&(i=2*Math.PI);let s=(i-G.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),G.selected=e,G.cameraY=t.p2.y,G.degreeCamera+=s,t.selectIt(),!0}function Cu(n,e,t){G.degreeCamera%=2*Math.PI,G.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(G.selected=e,G.degreeCamera=Math.PI,i.ready&&(G.cameraY=i.p2.y,i.selectIt(),t(i)))}var Ru=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||ha(r.thumb))return;let o=r.thumb,l=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+l)*vn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*vn(2*i))}),gc={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ri+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Au(n,e),move:(n,e,t,i)=>Ru(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Cu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Ru(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,a=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},o=t,l;t+1>s?(o=2*Math.round(i/2)-t-1,l=Math.pow(-1,o)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,m=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+m,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Au(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*vn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Ss(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Ic(n.def);return{x:i[0]+s[0],y:(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Cu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ha(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*vn(2*oe.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ri+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Au(n,e),move:(n,e,t,i)=>Ru(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Cu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ha(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*vn(2*oe.cameraEaseSpeed)})}}},e1=["fan","arc","map"],xm=n=>yd()&&e1.includes(n.layout),_d=()=>Ps.zoom*Ps.focus*Math.min(1,Yt/900);function yg(){let n=r=>{let a=document.getElementById(r);if(!a||a.hidden)return null;let o=a.getBoundingClientRect();return o.width&&o.height?o:null},t={l:12,t:12,r:Yt-12,b:zt-12},i=["slogan","logo","reel-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return zt>=Yt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs")].filter(Boolean).forEach(r=>{r.left<Yt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Yt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Yt-12),t.b-t.t<120&&(t.t=12,t.b=zt-12),t}function bm(n){let e=yg(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,a=n.h*n.k+oe.planeFrameDistance,o=s?1.5*r+102.5:r,l=s?Math.max(a,130):a,c=Math.round(Math.min(o,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),p=g*o+(g-1)*c,f=v*l+(v-1)*c,T=Math.min(t/p,i/f);(!h||T>h.sc+1e-9)&&(h={cols:g,rows:v,gw:p,gh:f,sc:T})}let d=n.container.position.y-n.section.container.position.y,m=s?140:40;return{...h,sc:h.sc*.94,uw:o,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Yt/2,fy:(e.t+e.b)/2-zt/2,zg:200,gy:m+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var t1=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},Lu=2*Math.PI,vd=n=>n+(((Math.PI-n)%Lu+Lu+Math.PI)%Lu-Math.PI);function Mm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>t1(e,i),focus(e,t){let i=e.postViews[t];i&&(G.selected=t,G.degreeCamera=vd(G.degreeCamera),G.cameraY=da(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===gc.fan?i.turnAround("x",720):n===gc.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var Sm=new U,wm=new U,ju=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=gc[this.def.layout]||gc.carousel,this.card=this.def.card,this.posts=G.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?KM:JM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?Qa.text.size:Qa.image.size:Qa[this.card].size,this.k=l1(this.def),this.container=new An,this.container.position.copy(e.container.position),es.add(this.container),this.postViews=this.posts.map((t,i)=>new Yu(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),xm(this.def)&&(this.grid=bm(this),this.L=this.gridL=Mm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Nt.map(f=>f.def.id)),t=new Map,i=(f,T,b)=>{if(!Mu(f))return;let L=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),N=t.get(L);N||t.set(L,N={loc:f,city:f.city||"",titles:[],base:!1}),T&&!N.titles.includes(T)&&N.titles.push(T),b&&(N.base=!0)};if(bu(xe,this.def.id).forEach(f=>i(f.location,Ee(f.title),!0)),xe.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(T=>i(T,Ee(f.title)))}),!t.size)return;cc.color.set(Jn());let s=50,r=new An,a=[...t.values()],o=a.filter(f=>f.base),l=new Cl(1,14,10),c={on:new Kt({color:Jn()}),base:new Kt({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:Ki+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},a.forEach(f=>{f.xz=Ss(f.loc)}),a.forEach(f=>{f.from=f.base?null:o.length?o.map(T=>[T,Math.hypot(Ss(T.loc)[0]-f.xz[0],Ss(T.loc)[1]-f.xz[1])]).sort((T,b)=>T[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Ss(f.from.loc)[0]-f.xz[0],Ss(f.from.loc)[1]-f.xz[1]):0}),a.sort((f,T)=>T.base-f.base||f.d-T.d);let h=70,u=null,d=-1;a.forEach(f=>{let T=a.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);T.length>d&&(d=T.length,u=T)});let m=u.reduce((f,T)=>f+T.xz[0],0)/u.length,g=u.reduce((f,T)=>f+T.xz[1],0)/u.length,v=new qt;v.position.set(...ws(m,s,g)),r.add(v),this.net.focus=v;let p=[];a.forEach((f,T)=>{let[b,L]=f.xz,N=f.base?0:.15+T*.07,P=new Ft(l,f.base?c.base:c.on);P.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),P.position.set(...ws(b,s,L)),r.add(P),P.userData={netNode:f},this.net.hits.push(P);let D=null,B=0;if(f.from){let[z,re]=Ss(f.from.loc),me=s+18+f.d*.32,F=2*me-s,H=(z+b)/2,k=(re+L)/2;B=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=Q=>{let te=1-Q;return ws(te*te*z+2*te*Q*H+Q*Q*b,te*te*s+2*te*Q*F+Q*Q*s,te*te*re+2*te*Q*k+Q*Q*L)},q=[];for(let Q=0;Q<B;Q++)q.push(...ne(Q/B),...ne((Q+1)/B));let W=new er;W.setPositions(q),D=new ja(W,cc),D.computeLineDistances(),W.instanceCount=0,r.add(D)}let S=null,C=1/0;if(f.city){for(let z of p){let re=Math.max(Math.abs(z[0]-b)/80,Math.abs(z[1]-L)/22);re<z[2]&&(C=Math.min(C,re))}C>.06&&(S=QM(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),S.position.set(...ws(b,s+9,L)),r.add(S),p.push([b,L,C]))}this.net.items.push({dot:P,arc:D,segs:B,label:S,thr:C,delay:N,base:f.base,ds:P.scale.x,ls:S?S.scale.clone():null,x:b,z:L})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=Ki+OM;for(;Ki<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,Qt(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:o}),Qt(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,Qt(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...ws(...i),...ws(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=gg(r,tg),this.container.add(a))}async openInfo(e,t,i){let s=await tc(this.posts[t],"place");if(!this.alive)return;let r=new Ft(new Xi(165,130),new Kt({map:s,side:On}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),Qt(a.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),co(i,()=>{r.visible=!0})}async openPost3D(){let e=G.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Ft(new Xi(90,90),new Kt({side:On})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await tc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),co(oe.tween,()=>{!G.postOpen||G.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,_n(i),Qt(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[G.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(_n(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=xm(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?bm(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Mm(this.base)):this.base,r)return!0;let a=oe.tween*1.2,o=G.postOpen&&this.def.open==="focus3d"?G.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===o)return;let u=this.following.has(l);_n(l.thumb),this.following.add(l),Qt(l.thumb,a,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(_n(d.p),Qt(d.p,a,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=_o(),r=_d(),a=2*e.width+3,o=Math.max(90,r*Math.max(a/(i.aw*.92),e.height/(i.ah*.85))),l=ss()+Ps.focus,c=o/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;_n(e.thumb),Qt(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-o,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;_n(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(G.degreeCamera/Ri)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=G.selected,s=this.postViews[G.selected]&&this.postViews[G.selected].ready?t(this.postViews[G.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),G.selected=i}goNext(){return G.selected+1>=this.n?0:G.selected+1}goPrev(){return G.selected-1<=-1?this.n-1:G.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/rs),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*vn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(Ki-this.net.start-s.delay)/.9)),a=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(a*s.segs));let o=s.base||r>=1;s.dot.visible=o,s.label&&(s.label.visible=o&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...ws(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ri)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Sm.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),wm.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Sm).add(wm)}}async retexture(){this.net&&(cc.color.set(Jn()),this.net.mats.on.color.set(Jn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(o=>o&&o.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(ia===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(o=>o&&o.dispose()),i.bhi&&s[3]){let o=e(i.bhi.mesh,s[3]);o&&o.dispose()}else s[3]&&s[3].dispose();let a=this.infos[t];if(a){let o=await tc(this.posts[t],"place");if(!this.alive){o.dispose();return}let l=e(a.mesh,o);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&G.postOpen){let t=await tc(this.posts[G.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(_n(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),Pc(),es.remove(this.container)}},rr=[],Re=null,ar=oe.cameraEaseSpeed,is=!1,qn=!1,Rs=0,Ls=0,hc=0,uc=0,Os=!1,bn=!1,os=()=>rr[G.currentSection];function n1(){let n=oe.cameraHeight;G.cameraY=G.cameraY+n/7<=3*n?G.cameraY+n/7:n*3}function i1(){let n=oe.cameraHeight;G.cameraY=G.cameraY-n/7>=n/7?G.cameraY-n/7:n/7}var s1={map:58},Ic=(n=(os()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||s1[n.layout]||100)/100)),ci=()=>Re&&Re.L.grid&&Re.grid&&Re.section===os()?Re:null,r1=n=>_d()/n.sc*Math.min(1,oe.cameraDistanceProportion/rs);function Nc(n){let e=n.grid,t=r1(e),i=t/_d();return{d:Math.max(20,t-Ps.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var ss=()=>{let n=ci();return n?Nc(n).d:oe.cameraDistance*Ic()},Dc=()=>{let n=ci();return n?Nc(n).ty:oe.cameraTargetHeight*(((os()||{}).def||{}).layout==="map"?Ic()*.62:1)},Em=()=>{let n=ci();return n?Nc(n).ty:oe.cameraHeight*(((os()||{}).def||{}).layout==="map"?Ic()*1.6:1)},nc=new U;function a1(){return!hr()||ci()||oe.cameraDistanceProportion>=rs?0:Math.min(1,(1-oe.cameraDistanceProportion/rs)*1.25)}function o1(){let n=Re&&Re.net&&Re.net.focus;return n?(n.getWorldPosition(nc),{x:nc.x,y:nc.y,z:-nc.z}):null}function yo(){let n=os(),e=a1(),t=e?o1():null,i=Dc(),s=ci();return s?{x:n.p.x-Nc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var da=()=>{if(!hr()||ci())return Em();let n=Math.min(1,oe.cameraDistanceProportion/rs);return yo().ty+(Em()-Dc())*Math.pow(n,.55)},l1=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),_o=()=>{let n=yo();return{d:ss(),x:n.x,z:n.z,ty:n.ty}},Vn=null;function _g(n){if(!n||!Re||!Re.relayout())return;_n(yt),_n(Rn),Vn=n,ci()&&(G.degreeCamera=vd(G.degreeCamera)),G.cameraY=da(),qn=!0,ar=oe.cameraEaseSpeed;let e=G.postOpen&&G.section.def.open==="focus3d"&&Re.postViews[G.selected];e&&e.ready&&(Re.L.grid?Re.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var c1=0;function h1(){if(++c1%20||!Os||G.postOpen||is||!bn)return;let n=ci();if(!n)return;let e=yg();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&_g(Vn||_o())}function u1(){if(!Vn)return;let n=_o(),e=vn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-Vn[i];Math.abs(s)>.05?(Vn[i]+=s*e,t=!1):Vn[i]=n[i]}ha(Rn)||(Rn.x=Vn.x,Rn.y=Vn.ty,Rn.z=Vn.z),!is&&!qn&&!ha(yt)&&Zu(),t&&(Vn=null)}function Zu(){let n=Vn||_o();yt.x=n.x+n.d*Math.sin(G.actualDeg),yt.z=n.z+n.d*Math.cos(G.actualDeg)}function Uc(){rr.forEach((n,e)=>{e===G.currentSection?n.container.parent||es.add(n.container):n.container.parent&&es.remove(n.container)}),is=!1,qn=!1,xn.classList.remove("dragging"),ia=null,oa=null,so=null,Re&&Re.destroy(),Vn=null,Re=new ju(os()),yc(G.selected),G.actualDeg=G.degreeCamera,d1()}function d1(){let n=yo();G.cameraY=da(),BM(ss()*Math.sin(G.degreeCamera)+n.x,G.cameraY,ss()*Math.cos(G.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function yc(n){G.selected=n,Re&&Re.focus(n)}function Pu(n){!Re||!Re.n||(qn=!0,Re.checkPostSelected(),ar=oe.cameraKeyboardSpeed,yc(n==="NEXT"?Re.goNext():Re.goPrev()))}var ro=()=>Yt>700&&zt>520;function Oc(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((zt<680?1e3-zt:320)*t)}function vg(){if(qn=!1,Oc(),!Os)return;let n=yo();if(G.postOpen&&G.section.def.open==="focus3d"&&Re&&Re.postViews[G.selected]){let t=Re.postViews[G.selected];Re.L.grid?Re.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=hr()||ci();zM(n.x+ss()*Math.sin(G.actualDeg),e?G.cameraY:yt.y,n.z+ss()*Math.cos(G.actualDeg),oe.cameraSpeed/2),e&&dd(n.x,n.ty,n.z,oe.cameraSpeed/2)}function f1(){if(!bn){Math.abs(yt.y-G.cameraY)>.007&&!ha(yt)&&(yt.y-=(yt.y-G.cameraY)*vn(oe.cameraEaseSpeed));return}if(is){ar=oe.cameraEaseSpeed;let n=G.degreeCamera;G.degreeCamera+=(Rs-hc)/150,G.actualDeg-=(G.actualDeg-n)*vn(ar),Zu(),G.cameraY+=(Ls-uc)*2;let e=oe.cameraHeight,t=hr()?yo().ty+12:e/3;G.cameraY<t?G.cameraY=t:G.cameraY>e*4&&(G.cameraY=4*e),yt.y-=(yt.y-G.cameraY)*vn(ar),oe.animationMode&&Re&&Re.movePosts((hc-Rs)/Math.max(fc,.25),(uc-Ls)/Math.max(fc,.25),ar),hc=Rs,uc=Ls}else qn?(Math.abs(G.actualDeg-G.degreeCamera)<=.007&&(qn=!1),G.actualDeg-=(G.actualDeg-G.degreeCamera)*vn(oe.cameraEaseSpeed),Zu(),yt.y-=(yt.y-G.cameraY)*vn(ar),oe.animationMode&&Re&&Re.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-G.cameraY)>.007&&(yt.y-=(yt.y-G.cameraY)*vn(oe.cameraEaseSpeed))}function p1(){yt.zoom=6;let e=Re&&Re.postViews[0]&&Re.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,Rn.y=e+100,dd(Rn.x,Dc(),Rn.z,1),bn=!1,Qt(yt,1,{zoom:Ps.zoom},{ease:"expoOut"}),setTimeout(()=>{bn=!0},1*1e3+50)}var Iu=new U,Nu=new U,eo=new U,to=1;function m1(){Iu.copy(Vu(yt.x,yt.y,yt.z)),Nu.copy(Vu(Rn.x,Rn.y,Rn.z)),eo.subVectors(Nu,Iu),eo.lengthSq()<1e-6&&eo.set(0,0,-1),eo.normalize();let n=hr()&&!ci()?Math.min(1,oe.cameraDistanceProportion/rs):1;to+=Math.abs(n-to)<.001?n-to:(n-to)*vn(oe.cameraEaseSpeed),Fn.position.copy(Iu).addScaledVector(eo,-Ps.focus*to),Fn.lookAt(Nu);let e=Math.min(1,Yt/900),t=2*Math.atan(zt/2/(yt.zoom*Ps.focus*e))/Ri;Math.abs(Fn.fov-t)>1e-4&&(Fn.fov=t,Fn.updateProjectionMatrix())}function xg(){Yt=window.innerWidth,zt=window.innerHeight,Ds.setSize(Yt,zt,!1),Fn.aspect=Yt/zt,Fn.updateProjectionMatrix(),ig.forEach(n=>n.resolution.set(Yt,zt))}var Gn=document.getElementById("menu"),Xn=document.getElementById("slogan"),ao=document.getElementById("langs"),Fc=[];function g1(){Gn.innerHTML="",Fc=Nt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=Ee(n.def.name),i.addEventListener("click",()=>{e!==G.currentSection&&bn&&bo(e)}),t.appendChild(i),Gn.appendChild(t),i}),Gn.style.setProperty("--n",Nt.length),xd()}function xd(){Fc.forEach((n,e)=>n.setAttribute("aria-current",String(e===G.currentSection)))}function y1(){Fc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),Gn.hidden=!1,ao.hidden=!1,cr(),setTimeout(()=>Gn.classList.add("ready"),(Nt.length+1)*200)}var _1=1.44,Tm={col:362,gutter:160,side:79,top:34,bottom:20},Am={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function ea(){let n=xe&&xe.settings&&xe.settings.fiche||{},e={};for(let t in Tm){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?Tm[t]:Math.max(Am[t][0],Math.min(Am[t][1],Math.round(+i)))}return e}function Ju(n){let e=ea(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Yt-2*oe.margin)/(Ke.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function bg(){let n=zt<=420;document.body.classList.toggle("post-short",n&&G.postOpen);let e=Xn.offsetTop+Xn.offsetHeight+(n?1:2)*oe.margin,t=Ke.height+12,i=n?24:(Gn.offsetHeight||90)+70,s=(zt-e-i)/t,r=(zt-e-56)/t,a=Yt>700&&!n?14/(+oi(xe.settings,"body").size||14):0,o=Math.max(n?.4:.5,Math.min(_1,Math.max(s,Math.min(a,r))));Ke.scale=o,tn.style.top=e+"px",tn.style.transform=o!==1?`scale(${o.toFixed(3)})`:"",tn.style.width=o!==1?Math.ceil((Yt-oe.margin)/o)+"px":"",tn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",zt-(e+t*o)<Gn.offsetHeight+60)}function cr(){if(G.postOpen||document.body.classList.remove("post-cramped","post-short"),G.postOpen&&Ke.open&&Ke.height>100){let n=Xn.offsetTop+Xn.offsetHeight+Ke.height*(Ke.scale||1)+2*oe.margin+30;n=Math.min(n,ao.getBoundingClientRect().top-Gn.offsetHeight-22),Gn.style.left=oe.margin+"px",Gn.style.top=n+"px"}else{let n=ao.hidden?zt-30:ao.getBoundingClientRect().top;Gn.style.left=(ro()?26:oe.margin)+"px",Gn.style.top=Math.round(Math.min(zt-(Gn.offsetHeight||86)-(ro()?100:56),n-(Gn.offsetHeight||86)-24))+"px"}document.body.classList.toggle("post-open-wide",ro()&&!!G.postOpen),Sg(),Mg()}function Mg(){if(!ce||!ce.btn)return;let n=ce.btn;ro()?(n.style.top=Math.round(Xn.offsetTop+Xn.offsetHeight+26)+"px",n.style.left=Xn.offsetLeft+2+"px",n.style.right="auto"):n.style.top=n.style.left=n.style.right=""}function Sg(){if(ro()){gi.style.top=gi.style.left="",vc.style.maxHeight=Math.max(140,zt-200)+"px";return}let n=Xn.offsetTop+Xn.offsetHeight+10;gi.style.top=Math.round(n)+"px",gi.style.left=Xn.offsetLeft+"px",vc.style.maxHeight=Math.max(140,zt-n-120)+"px"}var Du=(n,e=!1)=>pm(n,xe.settings,e);function Ku(){let n=xe.settings,e=n.accent||"#ffcc00",t=n.logo?$t(n.logo):Du(Wn?"#ffffff":e,Wn);["logo","home-logo"].forEach(i=>{let s=document.getElementById(i);s&&(s.src=i==="home-logo"&&!n.logo?Du(e,!1):t,s.classList.toggle("raw",!n.logo))}),v1(n.logo?t:Wn?Du(e):t)}function v1(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var dc="",_c=document.querySelector('meta[name="description"]'),Cm=_c?_c.content:"",bd=document.title;function wg(n){if(!(kt||!xe)){document.title=n?`${Ee(n.title).trim()} \xB7 ${xe.settings.name||"Hand Coded"}`:bd,_c&&(_c.content=n&&(sr(Ee(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||Ee(n.subtitle))||Cm);try{let e=new URL(location.href);n?e.searchParams.set("p",n.id):e.searchParams.delete("p"),e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&fa("?p="+n.id,document.title)}}function x1(){let n=String((xe.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||kt||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{dc||fa("",bd)}),document.head.appendChild(e)}function fa(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:location.pathname.replace(/index\.html$/,"")+n,title:e,event:t})}catch{}}function kc(){let n=xe.settings;dg(),zg(),Hc(),document.documentElement.lang=Qi,document.documentElement.classList.toggle("neg",Wn),G.postOpen||(document.title=bd||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[Qi]||n.taglines.en)||[],t=e.length?`<b class="wm">${Fe(e[0])}</b>${e.slice(1).map(a=>`<span>${Fe(a)}</span>`).join("")}`:Fe(n.name);if(Xn.innerHTML=e.length?t.replace('<b class="wm">',`<b class="wm" role="link" tabindex="0" title="${Fe(Ze("homeLink"))}">`):t,document.getElementById("home-slogan").innerHTML=t,Ku(),!n.logo&&document.fonts){let a=oi(n,"logo"),o=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(o)||document.fonts.load(o).then(()=>{xe.settings.logo||Ku()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let o=document.getElementById(a);o&&(o.classList.toggle("toggle",i),i?(o.setAttribute("role","button"),o.tabIndex=0,o.setAttribute("aria-pressed",String(Wn)),o.alt=o.title=Ze(Wn?"toPos":"toNeg")):(o.removeAttribute("role"),o.removeAttribute("tabindex"),o.removeAttribute("aria-pressed"),o.alt="",o.removeAttribute("title")))}),Ln.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),Ns.classList.contains("wait")||Ud(Ee(n.home.enter)||Ze("enter")),R1(),Zn(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=Ze(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Ze("keys")),oo.setAttribute("aria-label",Ze("prev")),xc.setAttribute("aria-label",Ze("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=Ze("category"));let r=n.langs&&n.langs.length?n.langs:ai;[ao,document.getElementById("home-langs")].forEach(a=>{a.innerHTML="",!(r.length<2)&&r.forEach(o=>{let l=document.createElement("button");l.type="button",l.textContent=o.toUpperCase(),l.setAttribute("aria-pressed",String(o===Qi)),l.setAttribute("aria-label",Ze("lang")+" "+o.toUpperCase()),l.addEventListener("click",()=>Eg(o)),a.appendChild(l)})}),document.documentElement.style.setProperty("--accent",Jn()),document.documentElement.style.setProperty("--accent-raw",xe.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",ag(xe.settings.accent||"#ffcc00")),K1()}function Eg(n){if(n!==Qi){Qi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(kc(),Os){Fc.forEach((i,s)=>{i.textContent=Ee(Nt[s].def.name)}),zc();let e=G.postOpen,t=G.selected;vi(),G.selected=t,Uc(),e&&co(.6,()=>po(t))}}}var Bc=document.getElementById("cats"),gi=document.getElementById("cat-box"),vc=document.getElementById("cat-list"),Tg=document.getElementById("cat-name"),fo=document.getElementById("cat-open"),oo=document.getElementById("pg-prev"),xc=document.getElementById("pg-next");function zc(){let n=G.data,e=n.categoryList;gi.hidden=e.length<=1,vc.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${Fe(Ee(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Qu(),M1(t.id)}),i.appendChild(s),vc.appendChild(i)}),Tg.innerHTML=`${Fe(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,Ag(),Qu()}var ic=document.getElementById("pg-num");function Ag(){let n=G.data;oo.disabled=!n.hasNewer(),xc.disabled=!n.hasOlder(),oo.hidden=xc.hidden=!n.hasNewer()&&!n.hasOlder(),ic&&(ic.hidden=oo.hidden,ic.textContent=`${n.page}/${n.pages}`,ic.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function Qu(){clearTimeout(aa),gi.classList.remove("open"),fo.setAttribute("aria-expanded","false")}var aa=0,Md=-1e9;function Cg(n=.7){clearTimeout(aa),!(gi.hidden||!G.data||G.data.categoryList.length<=1)&&(aa=setTimeout(()=>{!Xt||G.postOpen||Bc.classList.contains("hidden")||(gi.classList.add("open"),fo.setAttribute("aria-expanded","true"),aa=setTimeout(()=>{gi.classList.remove("open"),fo.setAttribute("aria-expanded","false")},2600))},n*1e3))}gi.addEventListener("pointerenter",()=>clearTimeout(aa));fo.addEventListener("click",()=>{clearTimeout(aa);let n=gi.classList.toggle("open");fo.setAttribute("aria-expanded",String(n))});oo.addEventListener("click",()=>{bn&&Ig("newer")});xc.addEventListener("click",()=>{bn&&Ig("older")});var Fs=document.getElementById("kb"),Sd=document.getElementById("kb-toggle"),Rg=null;function ed(){Fs.classList.add("open"),Sd.setAttribute("aria-expanded","true")}function bc(){Fs.classList.remove("open"),Sd.setAttribute("aria-expanded","false")}Sd.addEventListener("click",()=>{clearTimeout(Rg),Fs.classList.contains("open")?bc():ed()});Fs.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>Dg({code:n.dataset.k,preventDefault(){}})));function ji(n){let e=Fs.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Lg(){Fs.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var wd=document.getElementById("whiteboard"),tn=document.getElementById("post2d"),Es=document.getElementById("strip");function Rm(n,e){if(!n||xe.settings.signImages===!1)return"";let t=[Ee(n.title).trim(),(n.author||xe.settings.name||"").trim()].filter(Boolean);return e&&t.push(Ze("photo")+" "+e.trim()),t.join(" \xB7 ")}var b1=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),vo=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},xo=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},Mc=n=>vo(n)?"youtube":xo(n)?"vimeo":b1(n)?"video":"image",Ke={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,tn.classList.remove("closing"),tn.hidden=!1,bg(),this.geomKey=JSON.stringify(Ju("project"));{let i=ea();Es.style.setProperty("--ft",i.top+"px"),Es.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(G.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Es.style.transform="translateX(0px)"},addRelations(n){let e=Xu(n);if(!e.length)return;let t=Ql(xe,n).length>0,i=ea(),s=this.panels[this.panels.length-1],r=G.section.def.skills&&s&&s.classList.contains("txt"),a=r?Math.max(12,i.gutter-i.side):i.side,o=Math.max(200,Math.min(300,i.col))+a+i.side,l=`<h2 class="ttl" style="left:${a}px;right:${i.side}px;top:${i.top}px">${Fe(Ze(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${a}px;bottom:${i.bottom}px">${e.length}</span>`;r||this.addPanel("relh",o,l),e.forEach(c=>{let h=uo(c),u=[c.date,Ee(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${Fe(c.id)}" aria-label="${Fe(Ee(c.title))}">`+(h?`<img src="${Fe($t(h))}" alt="" draggable="false">`:"")+`<span class="mono"${h?" hidden":""}>${Fe(Wu(Ee(c.title)))}</span><span class="cap"><span class="t">${Fe(Ee(c.title).trim())}</span>${u?`<span class="m">${Fe(u)}</span>`:""}</span></button>`),m=d.querySelector("img");m&&m.addEventListener("error",()=>{m.remove(),d.querySelector(".mono").hidden=!1})})},addLogos(n){let e=n.logos.length,t=e<=4?2:3,i=Math.ceil(e/t),s=68+t*118,r=this.addPanel("logos",s,`<span class="lbl">${Fe(Ze("partners"))}</span><div class="grid" style="grid-template-columns:repeat(${t},110px)">`+n.logos.map(a=>`<span class="lg"><img src="${Fe($t(a))}" alt="" draggable="false"></span>`).join("")+"</div>");i>3&&(r.querySelector(".grid").style.gridAutoRows=Math.floor(230/i-6)+"px")},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Ze("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${Fe(t)}</span><a href="${Fe(e)}" target="_blank" rel="noopener"><span class="host">${Fe(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Es.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=r=>Mc(r.src)==="image";if(n.filter(e).length<3){n.forEach(r=>this.addMedia(r.src,355,r.credit,!0,r.caption));return}let t=["mat","grid","bleed","bleed"],i=0,s=0;for(;i<n.length;){let r=n[i];if(!e(r)){this.addMedia(r.src,355,r.credit,!0,r.caption),i++;continue}let a=t[s++%t.length];if(a==="grid"){let o=n.slice(i,i+4);if(o.length===4&&o.every(e)){this.addGrid(o),i+=4;continue}a="mat"}a==="mat"?this.addMat(r):this.addMedia(r.src,355,r.credit,!0,r.caption),i++}},addMat(n){let t=n.caption?Ee(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${Fe($t(n.src))}" alt="" draggable="false" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${Fe(t)}</p>`:"")),r=s.querySelector("img"),a=()=>{if(!r.naturalWidth)return;let o=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=o+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=o+"px"),this.layout()};r.addEventListener("load",a),r.complete&&a(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(o=>o!==s),this.layout()})},addGrid(n){let e=ea(),t=Math.max(16,Math.min(34,e.top)),i=8,s=(355-2*t-i)/2,r=Math.round(s*1.42);this.addPanel("media grid4",Math.round(2*r+i+2*t),n.map((o,l)=>`<img src="${Fe($t(o.src))}" alt="" draggable="false" style="left:${t+l%2*(r+i)}px;top:${t+Math.floor(l/2)*(s+i)}px;width:${r}px;height:${s}px">`).join("")).querySelectorAll("img").forEach(o=>o.addEventListener("error",()=>{o.style.visibility="hidden"}))},addMedia(n,e=355,t="",i=!0,s=null){let r=Mc(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let a=r==="video",o=this.addPanel("media",e,""),l=document.createElement(a?"video":"img");if(l.draggable=!1,l.style.height=e+"px",a){Object.assign(l,{src:$t(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Ze("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),o.querySelector(".in").appendChild(u)}else l.src=$t(n),l.alt="";let c=()=>{let u=Math.round(a?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(o.style.width=u+"px",this.layout())};l.addEventListener(a?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(u=>u!==o),this.layout())}),o.querySelector(".in").prepend(l);let h=s?Ee(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",m=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${Fe(d)}</b> `:"")+Fe(m),o.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?vo(n):xo(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?$t(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Ze("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),a.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Ju(e),a=ea(),o=355-a.bottom;e==="project"&&G.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(N,P)=>r?[N===0?a.side:Math.floor(a.gutter/2),N===P-1?a.side:Math.ceil(a.gutter/2)]:[i,t-i-s],c=Ee(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=Ee(n.subtitle),u=G.section.def,d=n.tags.filter(N=>N!=="featured").map(N=>u.tags.find(P=>P.id===N)).filter(Boolean).map(N=>Ee(N.label)),m=d.length?`${Fe(Ze("postedIn"))} <span>${d.map(Fe).join(", ")}</span>`:"",g=Fe([n.date,Ee(n.place)].filter(Boolean).join(" | ")),v=ec(Ee(n.body)),p=document.createElement("div");p.className="txt",p.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(p),p.innerHTML=`<h2 class="ttl" style="position:static">${Fe(c)}</h2>${h?`<p class="stl" style="position:static">${Fe(h)}</p>`:""}`;let f=p.firstChild.offsetHeight,T=h?p.lastChild.offsetHeight+6:0,b=e==="project"?XM(n):[],L="";if(b.length){let N=(Nt.find(P=>P.def.id===b[0].section)||{}).def;L=`${Fe((N?Ee(N.name):Ze("skills")).trim())} ${b.map((P,D)=>`<span class="it"><button type="button" class="go" data-go="${Fe(P.id)}">${Fe(Ee(P.title).trim())}</button>${D<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let N=`<div class="fecha">${g}</div>${m?`<div class="posted">${m}</div>`:""}${L?`<div class="posted skl-tags">${L}</div>`:""}`;p.innerHTML=`<div class="meta" style="position:static">${N}</div>`;let P=p.firstChild.offsetHeight,D=o-13,B=D-P,S=G.section.def.skills?Xu(n).length:0,C="",z=0;S&&(C=`<span class="lbl">${Fe(Ze(Ql(xe,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${S}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,p.innerHTML=`<div class="relp" style="position:static">${C}</div>`,z=p.firstChild.offsetHeight);let re=z?B-z-18:B,me=a.top+f+6,F=a.top+f+T+20,H=Uu(v,s,[o-F,o-a.top],p);p.innerHTML=`<div class="body" style="position:static">${H[H.length-1]}</div>`;let k=H.length===1?F:a.top;if(H[H.length-1]&&k+p.firstChild.offsetHeight>re-12){let q=Uu(H.pop(),s,z?[o-k,re-12-a.top]:[re-12-k,re-12-a.top],p);H.push(...q),z&&q.length===1&&H.push("")}let ne=0;if(z){k=H.length===1?F:a.top,p.innerHTML=`<div class="body" style="position:static">${H[H.length-1]||""}</div>`;let q=k+(H[H.length-1]?p.firstChild.offsetHeight:0)+18;ne=H[H.length-1]?Math.min(re,Math.max(Math.round((a.top+o)/2)-10,q)):a.top+4}H.forEach((q,W)=>{let Q=W===H.length-1,[te,ue]=l(W,H.length);this.addPanel("txt",te+s+ue,(W===0?`<h2 class="ttl" style="left:${te}px;top:${a.top}px;width:${s}px">${Fe(c)}</h2>${h?`<p class="stl" style="left:${te}px;top:${me}px;width:${s}px">${Fe(h)}</p>`:""}`:"")+`<div class="body" style="left:${te}px;top:${W===0?F:a.top}px;width:${s}px">${q}</div>`+(Q&&z?`<div class="relp" style="left:${te}px;top:${ne}px;width:${s}px">${C}</div>`:"")+(Q?`<div class="meta" style="left:${te}px;top:${B}px;width:${s}px">${N}</div>`:""))})}else{let N=13+f+4,P=13+f+T+10,D=P+20,B=D+18+20;Uu(v,s,[355-B-14,327],p).forEach((C,z)=>{this.addPanel("txt",t,(z===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${Fe(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${N}px;width:${s}px">${Fe(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${P}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${m}</div>`:"")+`<div class="body" style="left:${i}px;top:${z===0?B:14}px;width:${s}px">${C}</div>`)})}p.remove()},addTeam(n){let e=n.team.map(P=>xe.posts.find(D=>D.id===P)).filter(Boolean),t=ea(),i=t.top,s=355-t.bottom,r=t.side,a=Math.max(24,Math.min(36,t.gutter)),o=P=>String(P+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${Fe(Ze("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((P,D)=>`<li data-i="${D}"><b>${o(D)}</b><span><span class="nm">${Fe(Ee(P.title).trim())}</span>${Ee(P.subtitle).trim()?`<i>${Fe(Ee(P.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${Fe(Ze("with"))}</i> ${Fe(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let m=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+m+a,p=v,f=i,T=0,b=0,L=v;e.forEach((P,D)=>{let B=g[D%g.length]*(e.length>12?.8:1),S=16;f+B+S>s&&f>i+1&&(p+=T+16,b++,f=i+(b%2?34:0),T=0);let C=Cc(P)&&P.published!==!1,z=document.createElement(C?"button":"div");z.className="face"+(C?" go":""),C&&(z.type="button",z.dataset.go=P.id),z.dataset.i=D,Object.assign(z.style,{left:p+"px",top:f+"px",width:B+"px",height:B+"px"});let re=!P.thumb&&(qu(P).find(F=>F!==n)||qu(P)[0]),me=re?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${Fe($t(uo(re))).replace(/'/g,"%27")}') center/cover"`:"";z.innerHTML=(P.thumb?`<img src="${Fe($t(P.thumb))}" alt="" draggable="false">`:`<span class="mono"${me}>${Fe(Wu(Ee(P.title)))}</span>`)+`<b class="n">${o(D)}</b>`,z.setAttribute("aria-label",Ee(P.title)),c.appendChild(z),T=Math.max(T,B),f+=B+S,L=Math.max(L,p+B)}),l.style.width=Math.ceil((e.length?L:r+m)+r)+"px";let N=(P,D)=>c.querySelectorAll(`[data-i="${P}"]`).forEach(B=>B.classList.toggle("on",D));c.querySelectorAll("[data-i]").forEach(P=>{["pointerenter","focus"].forEach(D=>P.addEventListener(D,()=>N(P.dataset.i,!0))),["pointerleave","blur"].forEach(D=>P.addEventListener(D,()=>N(P.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(P=>{let D=c.querySelector(`.face.go[data-i="${P.dataset.i}"]`);D&&(P.classList.add("go"),P.dataset.go=D.dataset.go)})},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Yt-2*oe.margin)/(this.scale||1)))),`<div class="cn">${Fe(Ee(n.title))}.</div><div class="ac">${Fe(Ee(n.subtitle))}</div><div class="site">${n.link?`<a href="${Fe(n.link)}" target="_blank" rel="noopener">${Fe(e)}</a>`:""}</div><div class="ad">${ec(Ee(n.body))}</div><div class="ct">${Fe(Ee(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return tn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Es.querySelectorAll("video").forEach(n=>n.pause()),Es.innerHTML="",this.panels=[],tn.hidden=!0,tn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(Sc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*vn(oe.easing),this.xprev=Sc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*vn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);Es.style.transform=`translateX(${Math.round(this.x)}px)`}}};function Uu(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,m=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,m&&s.appendChild(m)};for(let d of a){let m=d.cloneNode(!0);if(s.appendChild(m),s.offsetHeight<=h())continue;if(s.removeChild(m),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let g=[];(function f(T,b){T.childNodes.forEach(L=>{L.nodeType===3?L.textContent.split(/(\s+)/).forEach(N=>N&&g.push({w:N,path:b})):f(L,[...b,L])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let p=({w:f,path:T})=>{let b=v;for(let L of T){let N=b.lastChild;(!N||N.nodeType!==1||N.dataset.src!==L.outerHTML)&&(N=L.cloneNode(!1),N.dataset.src=L.outerHTML,b.appendChild(N)),b=N}b.appendChild(document.createTextNode(f))};for(let f of g)if(p(f),s.offsetHeight>h()){let T=function b(L){return L.lastChild&&L.lastChild.nodeType===1?b(L.lastChild):L}(v);T.removeChild(T.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&p(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var Sc=0,Zi=null;tn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(Zi={id:n.pointerId,x:n.clientX,y:n.clientY},Sc=n.clientX)});tn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(Zi||Ke.dragging)){pa();return}if(Sc=n.clientX,!Zi||n.pointerId!==Zi.id||Ke.dragging)return;let e=n.clientX-Zi.x,t=n.clientY-Zi.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Ke.dragging=!0,Ke.xprev=Zi.x,Ke.finalpos=Ke.x,Ke.vel=0;try{tn.setPointerCapture(n.pointerId)}catch{}tn.classList.add("grabbing")}});tn.addEventListener("click",n=>{Ke.justDragged&&(n.preventDefault(),n.stopPropagation(),Ke.justDragged=!1)},!0);tn.addEventListener("wheel",n=>{if(n.preventDefault(),!Ke.open||Ke.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Ke.finalpos=Math.max(Ke.end-60,Math.min(60,Ke.finalpos-e*t/(Ke.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var pa=()=>{Ke.dragging&&(Ke.justDragged=!0,setTimeout(()=>{Ke.justDragged=!1},0),Ke.finalpos+=(Ke.vel||0)*10),Ke.vel=0,Zi=null,Ke.dragging=!1,tn.classList.remove("grabbing")};tn.addEventListener("pointerup",pa);tn.addEventListener("pointercancel",pa);tn.addEventListener("lostpointercapture",n=>{n.target===tn&&pa()});window.addEventListener("pointerup",()=>{(Zi||Ke.dragging)&&pa()});wd.addEventListener("pointerdown",()=>mo());function bo(n=-1,e=0){Qm(),n===-1&&(n=G.currentSection||0),vi(),n!==G.currentSection&&Cd(),G.currentSection=n,G.resetData(),G.selected=e,Uc(),xd(),zc(),Cg(performance.now()-Md<1500?2.2:.7);try{history.replaceState(null,"","#"+G.section.def.id)}catch{}fa("#"+G.section.def.id,Ee(G.section.def.name).trim())}function Pg(){vi(),G.selected=0,Uc(),Ag()}function Ig(n){(n==="newer"?G.data.newer():G.data.older())&&Pg()}function M1(n){G.data.changeCategory(n),Tg.textContent=G.data.currentCatName,Pg(),zc()}function po(n){vi(),G.selected=n,io()}var Lm=0;function Ed(n){let e=xe.posts.find(h=>h.id===n),t=e?Nt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!bn)return;Qm(),vi();let i=t!==G.currentSection;i&&Cd(),G.currentSection=t,i&&G.resetData();let s=G.data,r=!s.list.includes(e);r&&s.changeCategory("");let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.per;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!o&&Re){po(l);return}G.selected=l,Uc(),xd(),zc(),i&&Cg();try{history.replaceState(null,"","#"+G.section.def.id)}catch{}fa("#"+G.section.def.id,Ee(G.section.def.name).trim());let c=++Lm;co(.5,()=>{c===Lm&&G.data===s&&s.posts[l]===e&&po(l)})}Es.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Ed(e.dataset.go))});function io(){!Re||!G.data.posts[G.selected]||(Mo(null),Rd(null),vi(),G.postOpen=!0,G.section.def.open==="strip"?(wd.hidden=!1,Ke.build(G.data.posts[G.selected],G.section.def.card),Bc.classList.add("hidden"),is=!1,xn.classList.remove("dragging"),qn=!0,yc(G.selected)):(qn=!0,yc(G.selected),Re.openPost3D()),cr(),wg(G.data.posts[G.selected]))}function mo(){G.postOpen&&(G.postOpen=!1,Ke.open?(Ke.close(),wd.hidden=!0,Bc.classList.remove("hidden")):Re&&Re.closePost3D(),cr(),wg(null))}function vi(){G.postOpen&&mo()}function S1(){Jm(!oe.animationMode),Lg(),Re&&Re.resetPostPosition(),qn=!0}var rs=oe.cameraDistanceProportion,hr=()=>((os()||{}).def||{}).layout==="map",w1=()=>hr()?60:oe.cameraZoomMin;function Td(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),Ng())}function Ad(){oe.cameraDistanceProportion>w1()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),Ng())}function Ng(){(hr()||ci())&&(G.cameraY=da()),vg()}function Cd(){oe.cameraDistanceProportion!==rs&&(oe.cameraDistanceProportion=rs,Oc())}var Pm=!1;function Dg(n){if(!bn)return;Pm||(Pm=!0,ed(),Rg=setTimeout(bc,6e3));let e=G.postOpen&&Ke.open,t=G.postOpen&&!Ke.open;switch(n.code){case"ArrowLeft":ji("ArrowLeft"),e?Ke.action("LEFT"):(vi(),Pu("PREVIOUS"),t&&io());break;case"ArrowRight":ji("ArrowRight"),e?Ke.action("RIGHT"):(vi(),Pu("NEXT"),t&&io());break;case"ArrowUp":ji("ArrowUp"),e||n1();break;case"ArrowDown":ji("ArrowDown"),e||i1();break;case"Tab":ji("Tab"),e?(mo(),Pu("NEXT"),io()):bo((G.currentSection+1)%Nt.length);break;case"KeyK":Fs.classList.contains("open")?bc():ed();break;case"KeyA":ji("KeyA"),S1();break;case"Equal":case"NumpadAdd":ji("Equal"),e||Ad();break;case"Minus":case"NumpadSubtract":ji("Minus"),e||Td();break;case"Space":ji("Space"),Re&&Re.checkPostSelected(),G.postOpen?mo():io();break;case"Escape":vi();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Xt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||Dg(n)});var Im=new zl,Nm=new et;function wc(n,e){if(!Os||!Re)return null;Nm.set(n/Yt*2-1,-(e/zt)*2+1),Im.setFromCamera(Nm,Fn);let t=Im.intersectObjects([...os().blockers,...Re.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:E1(n,e)||(t?t.object.userData:null)}var sc=new U;function E1(n,e){if(!Re||!Re.net)return null;let t=null,i=14;for(let s of Re.net.hits){if(!s.visible)continue;s.getWorldPosition(sc).project(Fn);let r=(sc.x+1)/2*Yt-n,a=(1-sc.y)/2*zt-e,o=Math.hypot(r,a);o<i&&sc.z<1&&(i=o,t=s.userData)}return t}var Cn=null,mi=null,td=0,nd=0;xn.addEventListener("pointerdown",n=>{if(!bn||Cn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Li.size>0)return;Rs=td=n.clientX,Ls=nd=n.clientY;let e=wc(n.clientX,n.clientY);vi(),mi=e&&e.post?e:null,mi&&mi.face==="back"&&(mi.post.view.focus(mi.post.id_),qn=!0),Cn=n.pointerId,xn.setPointerCapture(n.pointerId),xn.classList.add("dragging"),hc=Rs,uc=Ls,qn=!1,is=!0});function ur(n,e=!1){if(n.pointerId===Cn){if(Cn=null,xn.classList.remove("dragging"),is&&(qn=!0,is=!1,ci()&&(G.degreeCamera=vd(G.degreeCamera),G.cameraY=da())),e){mi=null;return}if(mi&&mi.face==="front"&&Math.hypot(n.clientX-td,n.clientY-nd)<6){let t=wc(n.clientX,n.clientY);t&&t.post===mi.post&&po(t.post.id_)}else if(!mi&&Math.hypot(n.clientX-td,n.clientY-nd)<6){let t=wc(n.clientX,n.clientY);t&&t.netNode?mg(t.netNode,n.clientX,n.clientY):Pc()}mi=null}}xn.addEventListener("pointerup",ur);xn.addEventListener("pointercancel",n=>ur(n,!0));xn.addEventListener("lostpointercapture",n=>{n.pointerId===Cn&&ur(n,!0)});window.addEventListener("pointerup",n=>{Cn!==null&&n.pointerId===Cn&&n.target!==xn&&ur(n,!0)});window.addEventListener("blur",()=>{Cn!==null&&ur({pointerId:Cn},!0),pa()});var Ou=!1,ia=null,oa=null,so=null;function Rd(n){so!==n&&(so&&so.hoverBack(!1),so=n,n&&n.hoverBack(!0))}var Ug=()=>yd()&&bn&&Re&&["carousel","spiral"].includes(Re.def.layout);function Ld(){return G.postOpen||!Re?null:oa&&oa.view===Re?oa:Ug()?(Re.checkPostSelected(),Re.postViews[G.selected]||null):null}var T1=0;function A1(){++T1%6===0&&Ug()&&Mo(Ld())}function Mo(n){ia!==n&&(ia&&ia.hover(!1),ia=n,n&&n.hover(!0))}xn.addEventListener("pointerleave",()=>{oa=null,Mo(Ld()),Rd(null)});xn.addEventListener("pointermove",n=>{if(Cn!==null&&n.pointerId===Cn&&n.pointerType==="mouse"&&n.buttons===0){ur(n,!0);return}Cn!==null&&n.pointerId!==Cn||(Rs=n.clientX,Ls=n.clientY,Cn===null&&n.pointerType==="mouse"&&!Ou&&(Ou=!0,requestAnimationFrame(()=>{Ou=!1;let e=wc(Rs,Ls);xn.classList.toggle("hover",!!(e&&e.post)),oa=e&&e.post&&e.face==="front"&&!G.postOpen?e.post:null,Mo(Ld()),Rd(e&&e.post&&e.face==="back"&&e.post.bhi&&!G.postOpen?e.post:null),e&&e.netNode&&!G.postOpen?mg(e.netNode,Rs,Ls):Pc()})))});var Dm=0,Li=new Map,sa=null,Og=()=>{let[n,e]=[...Li.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Xt||Ke.open||!Li.size&&n.target!==xn||(Li.set(n.pointerId,{x:n.clientX,y:n.clientY}),Li.size===2&&(Cn!==null&&ur({pointerId:Cn},!0),sa={last:Og()}))});window.addEventListener("pointermove",n=>{if(!Li.has(n.pointerId)||(Li.set(n.pointerId,{x:n.clientX,y:n.clientY}),!sa||Li.size<2||!bn))return;let e=Og(),t=e/sa.last;t>1.15?(Ad(),sa.last=e):t<1/1.15&&(Td(),sa.last=e)});var C1=n=>{Li.delete(n.pointerId),Li.size<2&&(sa=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,C1));xn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!bn||e-Dm<220||!n.deltaY||e-Md<1400||(Dm=e,n.deltaY<0?Ad():Td())},{passive:!1});window.addEventListener("resize",()=>{let n=ts(),e=Os&&Re?Vn||_o():null;xg(),vg(),cr(),_g(e),ts()!==n&&Re&&Re.retexture(),Yg(),id(),Ke.open&&(bg(),clearTimeout(Ke.relayout),Ke.relayout=setTimeout(()=>{Ke.open&&Ke.post&&JSON.stringify(Ju("project"))!==Ke.geomKey&&(Ke.build(Ke.post,G.section.def.card),cr())},250))});function Um(){if(xe.settings.negativeToggle!==!1){if(Wn=!Wn,ho()&&Tc(),!kt)try{localStorage.setItem("hc-neg",(Wn?"1":"0")+(ho()?"@"+lr:""))}catch{}kc(),Re&&Re.retexture()}}["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Um),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Um())}))});var ce=null,Fg=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function R1(){let n=(xe.settings.showreel||"").trim();if(!ce){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i aria-hidden="true"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ce={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Gg()),ce.x.addEventListener("click",rc),i.querySelector(".scrim").addEventListener("click",rc),ce.snd.addEventListener("click",()=>kg(!ce.muted)),window.addEventListener("keydown",s=>{if(ce.open){if(s.code==="Escape")s.preventDefault(),rc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ce.player||s.source!==ce.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ce.muted&&(ce.muted=r.info.muted,go())})}ce.btn.hidden=!n,ce.btn.setAttribute("aria-label","Showreel"),ce.x.setAttribute("aria-label",Ze("close")),n!==ce.src&&(ce.open&&rc(!0),ce.src=n,ce.kind=n?Mc(n):"",ce.vid.innerHTML="",ce.player=null);let e=ce.kind==="youtube"?`https://www.youtube.com/watch?v=${vo(n)}`:ce.kind==="vimeo"?`https://vimeo.com/${xo(n)}`:"";ce.ext.hidden=!e,e&&(ce.ext.href=e,ce.ext.textContent=(ce.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),go()}function go(){ce&&(ce.snd.innerHTML=Fg(!ce.muted)+`<span>${Ze(ce.muted?"soundOn":"soundOff")}</span>`,ce.snd.setAttribute("aria-pressed",String(!ce.muted)))}function Ec(n,e=[]){let t=ce.player;if(!(!t||!t.contentWindow)){if(ce.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ce.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function kg(n){ce.muted=n,go(),ce.kind==="video"?ce.player&&(ce.player.muted=n,n||(ce.player.volume=1)):(Ec(n?"mute":"unMute"),n||Ec("setVolume",[100]))}function L1(){if(!(!ce||!ce.src||ce.open)){if(ce.open=!0,ce.last=document.activeElement,ce.player)ce.kind==="video"?ce.player.play().catch(()=>{}):Ec("playVideo");else{let n=ce.src,e=ce.kind;if(e==="video"){let t=document.createElement("video");t.src=$t(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ce.muted&&(ce.muted=t.muted,go())}),ce.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?vo(n):xo(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ce.muted||kg(!1)}),ce.player=t}else{let t=document.createElement("img");t.src=$t(n),t.alt="",ce.player=t}ce.muted=!0,go(),ce.vid.appendChild(ce.player)}ce.snd.hidden=!/^(youtube|vimeo|video)$/.test(ce.kind),ce.box.hidden=!1,ce.btn.setAttribute("aria-expanded","true"),ce.box.offsetWidth,ce.box.classList.add("on"),setTimeout(()=>{ce.open&&ce.x.focus({preventScroll:!0})},60)}}function rc(n){!ce||!ce.open||(ce.open=!1,ce.btn.setAttribute("aria-expanded","false"),ce.kind==="video"?ce.player&&ce.player.pause():Ec("pauseVideo"),ce.box.classList.remove("on"),clearTimeout(ce.t),ce.t=setTimeout(()=>{ce.open||(ce.box.hidden=!0)},n===!0?0:650),ce.last&&ce.last.focus&&n!==!0&&ce.last.focus({preventScroll:!0}))}var x=null,ra=["white","grey","accent","source"],Bg=8;function P1(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},xe.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(ra,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function I1(){if(x)return;let n=document.getElementById("home-band");if(!n)return;let e=P1(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>id()).observe(t),x={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:ra.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(Bg,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},x.octx=x.off.getContext("2d",{willReadFrequently:!0}),x.raw=document.createElement("canvas"),x.rctx=x.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:$t(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),x.video=a}else{let a=d=>d&&!/^(https?:|data:)/.test(d)&&/\.(jpe?g|png|webp)$/i.test(d),o=xe.sections.find(d=>d.visible&&d.card==="image"&&!d.skills)||{},l=xe.posts.filter(d=>d.published!==!1&&a(d.thumb)),c=l.filter(d=>d.section===o.id),h=d=>d.map(m=>m.thumb).sort(()=>Math.random()-.5),u=[...new Set([...h(c),...h(l)])].slice(0,10);x.pics=u.map(d=>{let m=new Image;return m.decoding="async",m.src=$t(d),m})}N1(e.controls!==!1),Id()&&Gc()&&!/[?&]p=/.test(location.search)&&!Dd.matches&&!(kt&&kt.start)&&Wg(!0);let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),id()}var Om={video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="10" r="4" fill="currentColor"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function N1(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(x&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    <button type="button" id="hv-shot" hidden>${Om.shot}<span></span></button>
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden>?</button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><i aria-hidden="true"></i><span>Showreel</span></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false">${Om.faders}</button>`:"");let a=document.getElementById("home-band"),o=a.querySelector(".lg");o?o.after(r):a.appendChild(r),n&&O1(e,i,r),z1(e),r.querySelector("#home-reel").addEventListener("click",()=>{x.reelOn?as():Gg()}),document.querySelectorAll("#hv-src button").forEach(l=>l.addEventListener("click",()=>{l.dataset.src==="cam"&&!x.cam?qg():l.dataset.src==="video"&&x.cam&&Vc()})),s.querySelector("#hv-shot").addEventListener("click",D1),s.querySelector("#story-btn").addEventListener("click",()=>Pd()),zg(),Hc()}function Hc(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(x&&x.cam);document.querySelectorAll("#hv-src button").forEach(o=>{let l=o.dataset.src==="cam"===e;o.setAttribute("aria-pressed",String(l)),o.classList.toggle("on",l),o.textContent=Ze(o.dataset.src==="cam"?"hv_cam":"hv_video")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Ze("hv_src"));let i=n.querySelector("#hv-shot");i.hidden=!e,i.setAttribute("aria-label",Ze("hv_shot")),i.querySelector("span").textContent=Ze("photo");let s=n.querySelector("#story-btn");s.setAttribute("aria-label",Ze("story")),s.title=Ze("story");let r=document.getElementById("home-reel");r.hidden=!(xe.settings.showreel||"").trim();let a=!!(x&&x.reelOn);r.setAttribute("aria-pressed",String(a)),r.classList.toggle("on",a),r.setAttribute("aria-label","Showreel")}var Fm=0;function la(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Fm),t.textContent=n||"",t.hidden=!n,n&&e&&(Fm=setTimeout(()=>{t.hidden=!0},e)))}async function D1(){if(!x||!x.cam||x.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(x.cell,x.floor),a=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,x.W)))),o=Math.ceil(n/a),l=Math.ceil(e/a),c={ctx:x.ctx,W:x.W,H:x.H,ow:x.off.width,oh:x.off.height,lo:x.lo,hi:x.hi};try{x.ctx=i,x.W=n,x.H=e,x.off.width=x.raw.width=o,x.off.height=x.raw.height=l,$g(0),x.octx.globalAlpha=1,x.octx.drawImage(x.raw,0,0);let W=null;try{W=x.octx.getImageData(0,0,o,l).data}catch{}W?od(W,o,l,a):rd(o,l,a)}finally{x.ctx=c.ctx,x.W=c.W,x.H=c.H,x.off.width=x.raw.width=c.ow,x.off.height=x.raw.height=c.oh,x.lo=c.lo,x.hi=c.hi,x.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let m=(((xe.settings.taglines||{})[Qi]||(xe.settings.taglines||{}).en||[]).join(" ")||"Hand Coded.").toUpperCase(),g=getComputedStyle(document.documentElement).getPropertyValue("--grotesk").trim()||"sans-serif",v=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),p=getComputedStyle(v),f=W=>`${p.fontStyle==="italic"?"italic ":""}${p.fontWeight} ${W}px ${p.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${g}`),document.fonts.load(f(110))])}catch{}let T=72,b=70,L=128,N=document.getElementById("home-logo");if(N&&N.complete&&N.naturalWidth)try{i.drawImage(N,T,b,L,L)}catch{}let P=(xe.settings.name||"Hand Coded")+".",D=T+L+34,B=120;for(i.font=f(B);i.measureText(P).width>n-D-T&&B>48;)B-=4,i.font=f(B);i.fillStyle="#fff",i.textBaseline="middle",i.fillText(P,D,b+L/2+B*.04),i.textBaseline="top";let S=n-2*T,C=104,z=[];for(;C>=40&&(i.font=`bold ${C}px ${g}`,z=en(i,m,S),!(z.length<=4));C-=4);z=z.slice(0,4);let re=Math.round(C*1.05),me=e-96,F=me-44-z.length*re;i.fillStyle=Jn(),i.fillRect(T,F-38,54,7),i.fillStyle="#fff",i.font=`bold ${C}px ${g}`,z.forEach((W,Q)=>i.fillText(W,T-C*.04,F+Q*re)),i.fillStyle="#8f8f8f",i.font=`28px ${g}`,i.fillText((location.host+location.pathname).replace(/\/(index\.html)?$/,"").replace(/^www\./,""),T,me);let H=await new Promise(W=>t.toBlob(W,"image/jpeg",.92));if(!H)return;fa("photo-souvenir","Photo souvenir",!0);let k="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",ne=typeof File=="function"?new File([H],k,{type:"image/jpeg"}):null;if(ne&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[ne]}))try{await navigator.share({files:[ne],title:xe.settings.name||"Hand Coded"}),la(Ze("hv_shotDone"),2500);return}catch(W){if(W&&W.name==="AbortError")return}let q=document.createElement("a");q.href=URL.createObjectURL(H),q.download=k,document.body.appendChild(q),q.click(),setTimeout(()=>{URL.revokeObjectURL(q.href),q.remove()},2e3),la(Ze("hv_shotDone"),2500)}function zg(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(xe.settings.home||{}).story||{},i=Ee(t.title||{}).trim(),s=ec(Ee(t.body||{})),r=!!(i||sr(s).join("").trim());n.hidden=!r;let a=document.getElementById("hc-story");if(!r){a&&a.remove();return}a||(a=document.createElement("section"),a.id="hc-story",a.hidden=!0,e.appendChild(a)),a.setAttribute("aria-label",i||Ze("story"));let o=(t.images||[]).filter(Boolean);a.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${Fe(Ze("close"))}">\xD7</button><h2>${Fe(i||Ze("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${Fe(t.link)}" target="_blank" rel="noopener">${Fe(Ee(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(o.length?`<div class="shots scroll-x">${o.map(l=>`<a href="${Fe($t(l))}" target="_blank" rel="noopener"><img src="${Fe($t(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",a.querySelector(".x").addEventListener("click",()=>Pd(!1))}var km=0;function Pd(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(km),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),km=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),Pd(!1))},!0);function id(){if(!x)return;let n=x.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);x.W=Math.max(1,Math.round(n.width)),x.H=Math.max(1,Math.round(n.height)),x.cv.width=x.W*e,x.cv.height=x.H*e,x.ctx.setTransform(e,0,0,e,0,0),x.reelOn&&Nd()}var sd=[{p:"cell",min:3,max:40,step:1,get:()=>x.cell,set:n=>{x.cell=n},show:()=>Math.max(x.cell,x.floor)+"px"+(x.floor>x.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(x.fill*100),set:n=>{x.fill=n/100},show:()=>Math.round(x.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>x.gamma,set:n=>{x.gamma=n},show:()=>"\xD7"+x.gamma.toFixed(1)},{p:"delay",min:1,max:Bg,step:1,get:()=>x.delay,set:n=>{x.delay=n},show:()=>ad()+(ad()<x.delay?"*":"")}],U1=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function O1(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div>`:"")+sd.map(l=>`<label class="rw"><span class="lb" data-k="${l.p}"></span><input type="range" data-p="${l.p}" min="${l.min}" max="${l.max}" step="${l.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${ra.map(l=>`<button type="button" data-c="${l}"><i class="c-${l}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");x.panel=i,x.toggle=s;let r=0,a=l=>{clearTimeout(r),l?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(l)),s.classList.toggle("on",l),n.classList.toggle("hv-open",l),l&&Zn()};x.setOpen=a,s.addEventListener("click",()=>a(!i.classList.contains("open"))),n.addEventListener("pointerdown",l=>{i.classList.contains("open")&&!l.target.closest("#hv-panel, #hv-toggle, #hv-src")&&a(!1)}),i.querySelectorAll("input[data-p]").forEach(l=>{let c=sd.find(h=>h.p===l.dataset.p);l.addEventListener("input",()=>{c.set(+l.value),Zn()})});let o=l=>{if(l==="color")x.color=ra[(ra.indexOf(x.color)+1)%ra.length];else if(l==="invert")x.mode=x.mode==="light"?"dark":"light";else if(l==="sound"){Vg(!x.sound);return}else if(l==="cam"){if(!document.getElementById("hv-src"))return;x.cam?Vc():qg()}Zn()};i.querySelectorAll("[data-c]").forEach(l=>l.addEventListener("click",()=>{x.color=l.dataset.c,Zn()})),i.querySelectorAll(".tgl").forEach(l=>l.addEventListener("click",()=>o(l.dataset.a))),window.addEventListener("keydown",l=>{if(Xt||l.ctrlKey||l.metaKey||l.altKey||ce&&ce.open)return;if(l.code==="Escape"&&i.classList.contains("open")){a(!1),s.focus({preventScroll:!0});return}if(l.code==="Escape"&&x.reelOn){as();return}let c={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[l.code];if(c){if(l.preventDefault(),c==="panel"){a(!i.classList.contains("open"));return}x.touched||(x.touched=!0,a(!0)),o(c)}}),Zn()}function Zn(){if(Hc(),!x||!x.panel)return;let n=x.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Ze("hv_"+t.dataset.k)}),x.toggle.setAttribute("aria-label",Ze("hv_panel")),x.toggle.title=Ze("hv_panel")+" (K)",sd.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),U1(i),i.setAttribute("aria-label",Ze("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===x.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Ze("hv_color")+" "+Ze("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",x.mode==="dark"),Hg()}function Hg(){let n=x&&x.panel&&x.panel.querySelector(".stat");if(!n)return;let e=Math.max(x.cell,x.floor);n.textContent=`${Math.ceil(x.W/e)}\xD7${Math.ceil(x.H/e)} \xB7 ${Math.round(1e3/x.interval)} FPS`}var F1=()=>x&&!x.reelOn?x.video:null;function Vg(n){x.sound=n,x.reelOn&&x.rp?x.rp.mute(!n):x.video&&(x.video.muted=!n,n&&(x.video.volume=1),x.video.paused&&!x.frozen&&x.video.play().catch(()=>{})),Zn(),As()}var Id=()=>!!(ce&&ce.src&&/^(video|youtube|vimeo)$/.test(ce.kind));function Gg(){x&&Id()?(Xt&&Wc(),Wg()):L1()}function k1(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let r=document.createElement("video");Object.assign(r,{muted:!0,playsInline:!0,preload:"auto",src:$t(e)}),r.setAttribute("playsinline","");let a=()=>{i.t=r.currentTime,i.d=isFinite(r.duration)?r.duration:0,i.paused=r.paused,As()};["timeupdate","durationchange","play","pause"].forEach(o=>r.addEventListener(o,a)),r.addEventListener("loadedmetadata",()=>{r.videoWidth&&(i.ratio=r.videoWidth/r.videoHeight),Nd(),a()}),r.addEventListener("ended",()=>as()),Object.assign(i,{el:r,play:()=>r.play().catch(()=>{}),pause:()=>r.pause(),mute:o=>{r.muted=o,o||(r.volume=1)},seek:o=>{r.currentTime=o}})}else{let r=document.createElement("iframe"),a=n==="youtube",o=a?vo(e):xo(e),l=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";r.src=a?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${l}`:`https://player.vimeo.com/video/${o}?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0`,r.allow="autoplay; encrypted-media",r.tabIndex=-1,r.title="Showreel",r.referrerPolicy="strict-origin-when-cross-origin";let c=u=>{try{r.contentWindow.postMessage(JSON.stringify(u),"*")}catch{}},h=a?(u,d=[])=>c({event:"command",func:u,args:d}):(u,d)=>c(d===void 0?{method:u}:{method:u,value:d});r.addEventListener("load",()=>{a&&c({event:"listening",id:"hvreel",channel:"widget"})}),Object.assign(i,{el:r,post:c,play:()=>{i.paused=!1,h(a?"playVideo":"play"),As()},pause:()=>{i.paused=!0,h(a?"pauseVideo":"pause"),As()},mute:u=>{a?(h(u?"mute":"unMute"),u||h("setVolume",[100])):(h("setMuted",u),u||h("setVolume",1))},seek:u=>{a?h("seekTo",[u,!0]):h("setCurrentTime",u),i.t=u,As()}})}let s=document.createElement("div");return s.className="grid",t.append(i.el,s),i}window.addEventListener("message",n=>{let e=x&&x.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&x.reelOn){as();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),x.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&x.reelOn){as();return}}As()}});function Nd(){let n=x&&x.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=e/t>=1.2,s=n.ratio,r=e,a=e/s;(i?a<t:a>t)&&(a=t,r=t*s),Object.assign(n.el.style,{width:Math.ceil(r)+"px",height:Math.ceil(a)+"px",left:Math.round((e-r)/2)+"px",top:Math.round((t-a)/2)+"px"})}function Wg(n=!1){if(!x||!Id())return!1;if(x.reelOn)return!0;x.setOpen&&x.setOpen(!1),x.cam&&Vc();let e=ce.kind+"|"+ce.src;if(!x.rp||x.rp.key!==e){x.rp&&(x.rp.pause(),x.rp.box.remove()),x.rp=k1(ce.kind,ce.src),x.rp.key=e;let t=document.getElementById("home-band");t.insertBefore(x.rp.box,t.querySelector(".hv-shade")),x.sound&&ce.kind==="video"&&x.rp.mute(!1),ce.kind==="video"&&x.rp.play()}else x.rp.seek(0),x.rp.play(),x.rp.mute(!x.sound);return x.reelOn=!0,x.rp.box.hidden=!1,x.video&&x.video.pause(),Ln.classList.add("reel-on"),Nd(),As(),Zn(),n||fa("showreel","Showreel",!0),!0}function as(){!x||!x.reelOn||(x.reelOn=!1,x.rp.pause(),x.rp.box.hidden=!0,x.fresh=!0,x.video&&!Xt&&!x.frozen&&(x.video.muted=!x.sound,x.video.play().catch(()=>{})),Ln.classList.remove("reel-on"),As(),Zn())}var B1=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Fu=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),Xg=()=>{let n=x&&x.rp;!n||!x.reelOn||(n.paused?n.play():n.pause())};function z1(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),x.reelBar=e,e.querySelector(".pp").addEventListener("click",Xg),e.querySelector(".snd").addEventListener("click",()=>Vg(!x.sound)),e.querySelector(".x").addEventListener("click",as);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=x.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=x.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function As(){let n=x&&x.reelBar;if(!n||(n.hidden=!x.reelOn,Hc(),!x.reelOn))return;let e=x.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=B1(e.paused),s.setAttribute("aria-label",Ze(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Fu(i)} / ${Fu(t)}`:Fu(i);let r=n.querySelector(".snd");r.innerHTML=Fg(x.sound),r.setAttribute("aria-label",Ze(x.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(x.sound)),n.querySelector(".x").setAttribute("aria-label",Ze("close"))}async function qg(){la("");try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),x.reelOn&&as(),x.cam={stream:n,video:e},x.lo=0,x.hi=1,x.video&&x.video.pause(),la(Ze("hv_camNote"),6e3)}catch{la(Ze("hv_camDenied"),4e3)}Zn()}function Vc(){if(x&&x.cam){x.cam.stream.getTracks().forEach(e=>e.stop()),x.cam=null;let n=F1();n&&!Xt&&n.play().catch(()=>{}),la("")}x&&Zn()}function H1(){x&&(as(),Vc(),x.video&&x.video.pause())}function ku(n,e,t,i=1,s=0,r=0,a=!1,o=!1){let l=x.rctx,c=x.raw.width,h=x.raw.height,u=(o?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,m=t*u;a&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-m)/2+r*h,d,m),a&&l.restore()}function $g(n){let e=x.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,x.raw.width,x.raw.height),x.cam&&x.cam.video.readyState>=2)return ku(x.cam.video,x.cam.video.videoWidth,x.cam.video.videoHeight,1,0,0,!0),!0;if(x.video)return x.video.readyState<2?!1:(ku(x.video,x.video.videoWidth,x.video.videoHeight),!0);let t=x.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,ku(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[a],o,1),o>.78&&r>1&&l(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var V1=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function G1(n){if(x.pyr&&x.pyr.cell===n&&x.pyr.fill===x.fill)return x.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-o/x.fill))*255,c=(r*n+a)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),x.pyr={cell:n,fill:x.fill,pat:x.ctx.createPattern(e,"repeat")},x.pyr.pat}function rd(n,e,t){let i=x.ctx,s=x.W,r=x.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!V1){i.globalAlpha=.45,i.drawImage(x.off,a,o,n*t,e*t),i.globalAlpha=1;return}x.tmp||(x.tmp=document.createElement("canvas"),x.tctx=x.tmp.getContext("2d"));let l=x.tmp,c=x.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${x.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+x.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(x.off,a,o,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(a,o),c.fillStyle=G1(t),c.fillRect(-a,-o,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),x.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",x.color==="source"?i.drawImage(x.off,a,o,n*t,e*t):(i.fillStyle=x.color==="grey"?"#8d8d8d":xe.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Dd=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},ad=()=>x.floor||x.interval>1e3/29?1:x.delay;function W1(n){if(!x||!x.W)return;let e=x.exit?n-x.exit:-1;if(e>Bm){x.cleared||(x.cleared=!0,x.ctx.fillStyle="#0b0b0b",x.ctx.fillRect(0,0,x.W,x.H));return}if(x.reelOn||n-x.last<(e>=0?1e3/60:x.interval))return;x.last=n;let t=performance.now(),i=Dd.matches?0:(n-x.t0)/1e3,s=x.ctx,r=x.W,a=x.H;if(x.panel&&x.panel.classList.contains("open")&&n-(x.statAt||0)>500&&(x.statAt=n,Hg()),s.fillStyle="#0b0b0b",s.fillRect(0,0,r,a),x.intro&&n<x.intro)return;let o=x.intro?n-x.intro:-1;if(o>X1&&(x.intro=0),x.frozen||e>=0&&x.frozenAt&&n-x.sampleAt<x.interval){let g=x.frozenAt;if(!g)return;x.tainted?e<Bm/3&&rd(g.cols,g.rows,g.cell):od(g.d,g.cols,g.rows,g.cell,e,-1);return}let l=Math.max(x.cell,x.floor),c=Math.ceil(r/l),h=Math.ceil(a/l);if((x.off.width!==c||x.off.height!==h)&&(x.off.width=x.raw.width=c,x.off.height=x.raw.height=h,x.fresh=!0),!$g(i))return;let u=ad();x.octx.globalAlpha=x.fresh||u<=1?1:1/u,x.octx.drawImage(x.raw,0,0),x.octx.globalAlpha=1,x.fresh=!1;let d=null;if(!x.tainted)try{d=x.octx.getImageData(0,0,c,h).data}catch{x.tainted=!0}if(x.frozenAt={d,cols:c,rows:h,cell:l},x.sampleAt=n,x.tainted?rd(c,h,l):od(d,c,h,l,e,o),e>=0)return;let m=performance.now()-t;x.cost=x.cost*.9+m*.1,x.cost>14&&++x.slow>15?(x.panel&&setTimeout(Zn,0),x.slow=0,x.interval<1e3/21?x.interval=x.interval<1e3/25?1e3/24:1e3/20:x.floor=Math.min(Math.max(x.cell+6,14),Math.max(x.floor,l)+2)):x.cost<5&&++x.fast>60&&(x.panel&&setTimeout(Zn,0),x.fast=0,x.floor?x.floor=Math.max(0,x.floor-2):x.interval>1e3/30&&(x.interval=x.interval>1e3/22?1e3/24:1e3/30))}var Bm=420,X1=650,zm=(n,e)=>Math.pow(1-1/n,e*.06);function od(n,e,t,i,s=-1,r=-1){let a=x.ctx,o=e*t,l=x.lum&&x.lum.length===o?x.lum:x.lum=new Float32Array(o),c=1,h=0;for(let N=0,P=0;N<o;N++,P+=4){let D=(.2126*n[P]+.7152*n[P+1]+.0722*n[P+2])/255;l[N]=D,D<c&&(c=D),D>h&&(h=D)}x.lo+=(c-x.lo)*.15,x.hi+=(Math.max(h,x.lo+.15)-x.hi)*.15;let u=x.lo,d=1/(x.hi-u),m=x.mode==="dark",g=x.gamma,v=i*x.fill,p=(x.W-e*i)/2,f=(x.H-t*i)/2,T=x.color==="source",b=s>=0||r>=0,L=T?q1(a):a;L.fillStyle=T?"#fff":x.color==="grey"?"#8d8d8d":x.color==="accent"?xe.settings.accent||"#ffcc00":"#f2f2f2",L.beginPath();for(let N=0,P=0;N<t;N++){let D=f+N*i+i/2;for(let B=0;B<e;B++,P++){let S=(l[P]-u)*d;S=S<0?0:S>1?1:S,m&&(S=1-S);let C=(g===1?S:Math.pow(S,g))*v;if(C<.6)continue;let z=p+B*i+i/2,re=D;if(b){let me=C/v;if(s>=0?C*=zm(2.4+4.6*me,s):C*=1-zm(3+4*me,r),C<.6)continue}L.rect(z-C/2,re-C/2,C,C)}}L.fill(),T&&(L.globalCompositeOperation="source-in",L.imageSmoothingEnabled=!1,L.drawImage(x.off,p,f,e*i,t*i),L.globalCompositeOperation="source-over",a.save(),a.setTransform(1,0,0,1,0,0),a.drawImage(L.canvas,0,0),a.restore())}function q1(n){let e=n.canvas;x.mask||(x.mask=document.createElement("canvas"),x.mctx=x.mask.getContext("2d")),(x.mask.width!==e.width||x.mask.height!==e.height)&&(x.mask.width=e.width,x.mask.height=e.height);let t=x.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Ln=document.getElementById("home"),Ns=document.getElementById("enter"),$1=Ns.querySelector(".lbl"),or=document.getElementById("ticker"),Hm=or.getContext("2d"),Ji=null,no=0,ca=1;function Ud(n){$1.textContent=n,Ns.setAttribute("aria-label",n)}var Vm={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},Y1=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=Vm[e]||Vm["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function j1(n){let e=i=>i.published&&xe.sections.some(s=>s.id===i.section&&s.visible),t=xe.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+xe.settings.founded||2012));case"auto:projects":return String(xe.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(xe.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(xe.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(xe.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var Z1=()=>(xe.settings.home&&xe.settings.home.figures||[]).map(n=>({value:j1(n.value),label:Ee(n.label)})).filter(n=>n.value&&n.label),J1=()=>Z1().map(n=>`${n.value} ${n.label}`);function K1(){let n=Ee(xe.settings.home.sub||{}).trim(),e=n?[n]:[...J1(),...xe.settings.home.ticker||[]].filter(Boolean),t=(e.length?e:[xe.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Ji=Q1(t)}function Q1(n){let e=[];for(let t of n){let i=Y1(t),s=t===" "?3:5;for(let r=0;r<s;r++){let a=0;for(let o=0;o<7;o++)i[o]&1<<4-r&&(a|=1<<o);e.push(a)}e.push(0)}return{w:e.length,cols:e}}var li={pitch:3.2,rows:7,h:30},ta=null,Gm="";function Wm(n,e){let t=ca,i=Math.ceil(li.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,li.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-li.pitch*.1*t,a-li.pitch*.1*t,li.pitch*.12*t,0,Math.PI*2),r.fill()),s}function Yg(){ca=Math.min(window.devicePixelRatio||1,2),or.width=Math.round(window.innerWidth*ca),or.height=Math.round(li.h*ca),ta=null,na=null}var ac=0,na=null;function eS(n){let e=ca,t=li.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[Ji.w,i,e,n].join("|");if(na&&na.dots===Ji&&na.key===s)return na;(!ta||Gm!==n)&&(Gm=n,ta={on:Wm(n,!0),off:Wm(n,!1)});let r=Ji.w+i,a=document.createElement("canvas");a.width=Math.ceil(r*t*e),a.height=Math.round(li.h*e);let o=a.getContext("2d"),l=(li.h-li.rows*t)/2,c=ta.on.width/2;o.fillStyle="#000",o.fillRect(0,0,a.width,a.height);for(let h=0;h<r;h++){let u=Ji.cols[h%Ji.w],d=(h*t+t/2)*e-c;for(let m=0;m<li.rows;m++)o.drawImage(u>>m&1?ta.on:ta.off,d,(l+m*t+t/2)*e-c)}return na={canvas:a,dots:Ji,key:s,shown:-1}}function tS(n){ac+=n*26,ac>=1&&(no=(no+Math.floor(ac))%Ji.w,ac%=1);let e=eS(xe.settings.accent||"#ffcc00");e.shown!==no&&(e.shown=no,Hm.setTransform(1,0,0,1,0,0),Hm.drawImage(e.canvas,no*li.pitch*ca,0,or.width,or.height,0,0,or.width,or.height))}var Xt=!1,Od=!1,So=!1,Gc=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),ld=0,cd=0,Bu=!1,nS=180;function Fd(n=So){if(!(Xt||Bu)){if(!(n&&x&&x.W&&!Ln.hidden&&!Dd.matches)){Xm();return}Bu=!0,Ln.classList.add("leaving"),x.setOpen&&x.setOpen(!1),x.reelOn&&as(),iS(),x.exit=performance.now(),x.cleared=!1,x.intro=0,setTimeout(()=>{Bu=!1,Xm()},nS)}}function iS(){x&&(x.frozen=!0,x.video&&x.video.pause(),x.rp&&x.rp.pause(),x.cam&&(x.cam.stream.getTracks().forEach(n=>n.stop()),x.cam=null))}function Xm(){if(!Xt){if(Xt=!0,clearTimeout(ld),Md=performance.now(),!kt&&Gc())try{history.pushState(null,"",location.pathname+location.search+"#"+(xe.sections.find(n=>n.id===xe.settings.startSection&&n.visible)||Nt[0].def).id)}catch{}aS(),p1(),cr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Ln.classList.add("out"),ld=setTimeout(()=>{Ln.hidden=!0,H1()},1250)})),Xn.classList.add("on"),setTimeout(y1,1500),Fs.hidden=!1,Bc.classList.remove("hidden"),xn.focus({preventScroll:!0})}}function Wc(n=!0){if(Xt&&(vi(),bc(),Qu(),Pc(),Mo(null),Cd(),Xt=!1,So=!1,clearTimeout(ld),cd=performance.now()+1300,Ns.classList.remove("wait"),Ud(Ee(xe.settings.home.enter)||Ze("enter")),jg=performance.now(),x&&(x.exit=0,x.frozen=!1,x.cleared=!1,x.fresh=!0,x.intro=performance.now()+450),Ln.classList.remove("leaving"),Ln.hidden=!1,Ln.offsetWidth,Ln.classList.remove("out"),x&&x.video&&x.video.play().catch(()=>{}),n&&!kt))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!kt){if(Gc())Wc(!1);else if(!Xt&&Od)Fd();else if(Xt&&Os){let n=Nt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==G.currentSection&&bn&&bo(n)}}});Xn.addEventListener("click",n=>{n.target.closest(".wm")&&Xt&&Wc()});Xn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Xt&&(n.preventDefault(),Wc())});Ns.addEventListener("click",()=>{So=!0,Od?Fd():(Ud(Ze("loading")),Ns.classList.add("wait"))});var jg=0,oc=0,qm=0,lo=null,Zg=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function kd(){if(Xt||So||performance.now()-jg<900||ce&&ce.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||Ns.click()}Ln.addEventListener("wheel",n=>{if(Xt||Zg(n.target))return;let e=performance.now();e-qm>350&&(oc=0),qm=e,n.deltaY>0&&(oc+=n.deltaY*(n.deltaMode?30:1),oc>40&&(oc=0,kd()))},{passive:!0});Ln.addEventListener("touchstart",n=>{lo=n.touches.length===1&&!Zg(n.target)?n.touches[0].clientY:null},{passive:!0});Ln.addEventListener("touchmove",n=>{lo!==null&&n.touches.length===1&&lo-n.touches[0].clientY>46&&(lo=null,kd())},{passive:!0});Ln.addEventListener("touchend",()=>{lo=null},{passive:!0});window.addEventListener("keydown",n=>{if(Xt||n.ctrlKey||n.metaKey||n.altKey||ce&&ce.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&x&&x.reelOn){n.preventDefault(),Xg();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),kd()}});var hd=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function sS(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return kt&&kt.tag&&(e=kt.tag),hd(e||n)}function rS(n,e){let t=n.tags||[],i=t.find(s=>hd(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>hd(r)===e));return i?i.id:""}function aS(){try{Ds.compile(HM,Fn,es)}catch{}Oc();let n=kt&&kt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Nt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Nt.findIndex(a=>a.def.id===xe.settings.startSection)));let s=sS(t||(e&&i<0?e:""));if(s){let a=Nt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Nt.keys()];for(let o of a){let l=rS(Nt[o].def,s);if(l){i=o,Nt[o].def.defaultTag=l;break}}}rs=oe.cameraDistanceProportion,G.currentSection=i,G.resetData();let r=os();G.cameraY=da(),yt.x=ss()*Math.sin(G.degreeCamera)+r.p.x,yt.y=G.cameraY,yt.z=ss()*Math.cos(G.degreeCamera)+r.p.z,Rn.x=r.p.x,Rn.y=Dc(),Rn.z=r.p.z,Os=!0,bo(i,0),(Yt<=700||zt<=520)&&cr()}var $m=performance.now(),Ym=NaN,jm=0,ud=0,oS=(n=700)=>{ud=Math.max(ud,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>oS(),{passive:!0}));function lS(){let n=Fn.position,e=Fn.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Fn.fov*7.3,i=1;return es.traverseVisible(s=>{i+=1.13;let r=s.position,a=s.rotation,o=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+a.x*3.1+a.y*3.7+a.z*4.3+o.x*5.3+o.y*5.9+o.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function Jg(n){let e=Math.min(.25,Math.max(0,(n-$m)/1e3));if($m=n,Ki+=e,fc=e*UM,!Xt&&Ji&&tS(e),x&&!Ln.hidden&&W1(n),Os&&(Xt||n<cd)){kM(),h1(),u1(),f1(),Re&&Re.update(),A1(),Ke.step(),m1();let t=yi.length||n<ud||n<cd||is||qn||Vn||n-jm>2e3,i=lS();(t||i!==Ym)&&(Ds.render(es,Fn),jm=n,Ym=i)}requestAnimationFrame(Jg)}function zu(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Ze("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function cS(){kt||!/[?&]preview\b/.test(location.search)||window.parent===window||(kt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:Zm},"*")}catch{}}))}(async function(){try{await cS(),kt?xe=ir(structuredClone(kt.content)):(xe=await lc.load(),lc.prepare&&await lc.prepare(xe))}catch(a){zu(a);return}Wn=Tc(),dg();{let a=pd();a!==null&&(Wn=a)}md();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=xe.settings.langs&&xe.settings.langs.length?xe.settings.langs:ai,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}if(Qi=t.includes(s)?s:t.includes(e)?e:i||xe.settings.defaultLang||t[0],Nt=xe.sections.filter(a=>a.visible).map(a=>({def:a})),!Nt.length){zu(new Error("aucune section visible"));return}if(!kt)try{let a=new URLSearchParams(location.search).get("p"),o=a&&xe.posts.find(l=>l.id===a&&l.published!==!1&&Nt.some(c=>c.def.id===l.section));o&&(dc=o.id,history.replaceState(null,"",location.pathname+location.search+"#"+o.section))}catch{}x1(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Jm(!1),Lg(),kc(),g1(),I1(),xg(),Oc(),Yg(),requestAnimationFrame(Jg),rr=Nt.map((a,o)=>new $u(a.def,o)),Nt.forEach((a,o)=>{a.object=rr[o]}),Nt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let r=new $l(sg);try{if((await Promise.allSettled(rr.map(o=>o.load(r)))).forEach((o,l)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+rr[l].def.id+" \xBB :",o.reason)}),rr.forEach((o,l)=>o.place(l)),await Promise.race([Promise.all(ug).then(Us),new Promise(o=>setTimeout(o,3e3))]),Od=!0,(So||!Gc()||kt&&kt.start)&&Fd(),dc){let o=dc,l=performance.now(),c=setInterval(()=>{(bn||performance.now()-l>8e3)&&(clearInterval(c),bn&&Ed(o))},120)}}catch(a){zu(a)}})();window.__hc={P:G,STYLE:oe,cam:yt,camera:Fn,renderer:Ds,get hv(){return x&&{cell:x.cell,floor:x.floor,fps:Math.round(1e3/x.interval),cost:+x.cost.toFixed(1),tainted:x.tainted}},get input(){return bn},get homeGone(){return Xt},get content(){return xe},get postsView(){return Re},getToSectionView:bo,openThatPost:po,closePost:mo,goToPost:Ed,setLang:Eg,enter:()=>Ns.click()};})();
