/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Mu="160";var p0=0,Zd=1,m0=2;var Bp=1,g0=2,$i=3,$n=0,fn=1,zn=2;var _s=0,qr=1,Jd=2,Kd=3,Qd=4,y0=5,Ks=100,v0=101,_0=102,ef=103,tf=104,x0=200,b0=201,M0=202,S0=203,Vh=204,Gh=205,w0=206,E0=207,T0=208,A0=209,C0=210,R0=211,L0=212,P0=213,I0=214,N0=0,D0=1,U0=2,yl=3,O0=4,k0=5,F0=6,B0=7,ec=0,z0=1,H0=2,xs=0,V0=1,G0=2,W0=3,$0=4,q0=5,X0=6,nf="attached",Y0="detached",zp=300,jr=301,Zr=302,Wh=303,$h=304,tc=306,Ms=1e3,Ln=1001,qh=1002,yn=1003,sf=1004;var oh=1005;var Fn=1006,j0=1007;var Ss=1008;var bs=1009,Z0=1010,J0=1011,Su=1012,Hp=1013,vs=1014,Xi=1015,qa=1016,Vp=1017,Gp=1018,tr=1020,K0=1021,ai=1023,Q0=1024,ey=1025,nr=1026,Jr=1027,ty=1028,Wp=1029,ny=1030,$p=1031,qp=1033,lh=33776,ch=33777,hh=33778,uh=33779,rf=35840,af=35841,of=35842,lf=35843,Xp=36196,cf=37492,hf=37496,uf=37808,df=37809,ff=37810,pf=37811,mf=37812,gf=37813,yf=37814,vf=37815,_f=37816,xf=37817,bf=37818,Mf=37819,Sf=37820,wf=37821,dh=36492,Ef=36494,Tf=36495,iy=36283,Af=36284,Cf=36285,Rf=36286;var vl=2300,_l=2301,fh=2302,Lf=2400,Pf=2401,If=2402,sy=2500;var Yp=3e3,ir=3001,ry=3200,ay=3201,wu=0,oy=1,oi="",Xt="srgb",ji="srgb-linear",Eu="display-p3",nc="display-p3-linear",xl="linear",Ft="srgb",bl="rec709",Ml="p3";var wr=7680;var Nf=519,ly=512,cy=513,hy=514,jp=515,uy=516,dy=517,fy=518,py=519,Xh=35044;var Df="300 es",Yh=1035,Yi=2e3,Sl=2001,ws=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,Va=Math.PI/180,Kr=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Rn(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function my(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function gy(n,e,t){return n!==e?(t-n)/(e-n):0}function Ga(n,e,t){return(1-t)*n+t*e}function yy(n,e,t,i){return Ga(n,e,1-Math.exp(-t*i))}function vy(n,e=1){return e-Math.abs(Tu(n,e*2)-e)}function _y(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function by(n,e){return n+Math.floor(Math.random()*(e-n+1))}function My(n,e){return n+Math.random()*(e-n)}function Sy(n){return n*(.5-Math.random())}function wy(n){n!==void 0&&(Uf=n);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ey(n){return n*Va}function Ty(n){return n*Kr}function jh(n){return(n&n-1)===0&&n!==0}function Ay(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cy(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var As={DEG2RAD:Va,RAD2DEG:Kr,generateUUID:vi,clamp:Rn,euclideanModulo:Tu,mapLinear:my,inverseLerp:gy,lerp:Ga,damp:yy,pingpong:vy,smoothstep:_y,smootherstep:xy,randInt:by,randFloat:My,randFloatSpread:Sy,seededRandom:wy,degToRad:Ey,radToDeg:Ty,isPowerOfTwo:jh,ceilPowerOfTwo:Ay,floorPowerOfTwo:wl,setQuaternionFromProperEuler:Cy,normalize:Rt,denormalize:Ei},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],E=s[1],b=s[4],N=s[7],P=s[2],R=s[5],D=s[8];return r[0]=a*x+o*E+l*P,r[3]=a*m+o*b+l*R,r[6]=a*f+o*N+l*D,r[1]=c*x+h*E+u*P,r[4]=c*m+h*b+u*R,r[7]=c*f+h*N+u*D,r[2]=d*x+p*E+g*P,r[5]=d*m+p*b+g*R,r[8]=d*f+p*N+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ph.makeScale(e,t)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,t){return this.premultiply(ph.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ph=new mt;function Zp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ry(){let n=Xa("canvas");return n.style.display="block",n}var Of={};function Wa(n){n in Of||(Of[n]=!0,console.warn(n))}var kf=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ff=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[ji]:{transfer:xl,primaries:bl,toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:Ft,primaries:bl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nc]:{transfer:xl,primaries:Ml,toReference:n=>n.applyMatrix3(Ff),fromReference:n=>n.applyMatrix3(kf)},[Eu]:{transfer:Ft,primaries:Ml,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ff),fromReference:n=>n.applyMatrix3(kf).convertLinearToSRGB()}},Ly=new Set([ji,nc]),Lt={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ly.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Vo[e].toReference,s=Vo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Vo[n].primaries},getTransfer:function(n){return n===oi?xl:Vo[n].transfer}};function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Er,El=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Xa("canvas")),Er.width=e.width,Er.height=e.height;let i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Py=0,Tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gh(s[a].image)):r.push(gh(s[a]))}else r=gh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?El.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iy=0,qn=class n extends ws{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Fn,a=Ss,o=ai,l=bs,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=vi(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ir?Xt:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?ir:Yp}set encoding(e){Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ir?Xt:oi}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=zp;qn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,N=(p+1)/2,P=(f+1)/2,R=(h+d)/4,D=(u+x)/4,z=(g+m)/4;return b>N&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=D/i):N>P?N<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(N),i=R/s,r=z/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=D/r,s=z/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zh=class extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ir?Xt:oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zi=class extends Zh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Al=class extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jh=class extends qn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*x,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,f*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}let N=o*E;if(l=l*m+d*N,c=c*m+p*N,h=h*m+g*N,u=u*m+x*N,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yh.copy(this).projectOnVector(e),this.sub(yh)}reflect(e){return this.sub(yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},yh=new U,Bf=new Ti,vn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mi):mi.fromBufferAttribute(r,a),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),Wo.subVectors(this.max,Da),Tr.subVectors(e.a,Da),Ar.subVectors(e.b,Da),Cr.subVectors(e.c,Da),fs.subVectors(Ar,Tr),ps.subVectors(Cr,Ar),Xs.subVectors(Tr,Cr);let t=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Xs.z,Xs.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Xs.z,0,-Xs.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Xs.y,Xs.x,0];return!vh(t,Tr,Ar,Cr,Wo)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,Tr,Ar,Cr,Wo))?!1:($o.crossVectors(fs,ps),t=[$o.x,$o.y,$o.z],vh(t,Tr,Ar,Cr,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new U,new U,new U,new U,new U,new U,new U,new U],mi=new U,Go=new vn,Tr=new U,Ar=new U,Cr=new U,fs=new U,ps=new U,Xs=new U,Da=new U,Wo=new U,$o=new U,Ys=new U;function vh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ys.fromArray(n,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=t.dot(Ys),h=i.dot(Ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ny=new vn,Ua=new U,_h=new U,li=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ny.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);let t=Ua.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ua,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(_h)),this.expandByPoint(Ua.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},zi=new U,xh=new U,qo=new U,ms=new U,bh=new U,Xo=new U,Mh=new U,Qr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xh.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),ms.copy(this.origin).sub(xh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qo),o=ms.dot(this.direction),l=-ms.dot(qo),c=ms.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xh).addScaledVector(qo,d),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,s,r){bh.subVectors(t,e),Xo.subVectors(i,e),Mh.crossVectors(bh,Xo);let a=this.direction.dot(Mh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ms.subVectors(this.origin,e);let l=o*this.direction.dot(Xo.crossVectors(ms,Xo));if(l<0)return null;let c=o*this.direction.dot(bh.cross(ms));if(c<0||l+c>a)return null;let h=-o*ms.dot(Mh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Rr.setFromMatrixColumn(e,0).length(),r=1/Rr.setFromMatrixColumn(e,1).length(),a=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dy,e,Uy)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),gs.crossVectors(i,Kn),gs.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),gs.crossVectors(i,Kn)),gs.normalize(),Yo.crossVectors(Kn,gs),s[0]=gs.x,s[4]=Yo.x,s[8]=Kn.x,s[1]=gs.y,s[5]=Yo.y,s[9]=Kn.y,s[2]=gs.z,s[6]=Yo.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],E=i[3],b=i[7],N=i[11],P=i[15],R=s[0],D=s[4],z=s[8],w=s[12],M=s[1],F=s[5],ie=s[9],ue=s[13],O=s[2],G=s[6],B=s[10],ne=s[14],q=s[3],$=s[7],ee=s[11],j=s[15];return r[0]=a*R+o*M+l*O+c*q,r[4]=a*D+o*F+l*G+c*$,r[8]=a*z+o*ie+l*B+c*ee,r[12]=a*w+o*ue+l*ne+c*j,r[1]=h*R+u*M+d*O+p*q,r[5]=h*D+u*F+d*G+p*$,r[9]=h*z+u*ie+d*B+p*ee,r[13]=h*w+u*ue+d*ne+p*j,r[2]=g*R+x*M+m*O+f*q,r[6]=g*D+x*F+m*G+f*$,r[10]=g*z+x*ie+m*B+f*ee,r[14]=g*w+x*ue+m*ne+f*j,r[3]=E*R+b*M+N*O+P*q,r[7]=E*D+b*F+N*G+P*$,r[11]=E*z+b*ie+N*B+P*ee,r[15]=E*w+b*ue+N*ne+P*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+x*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],E=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,N=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,P=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,R=t*E+i*b+s*N+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=E*D,e[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*D,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*f+i*l*f)*D,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*D,e[4]=b*D,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*D,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*D,e[8]=N*D,e[9]=(g*u*r-h*x*r-g*i*p+t*x*p+h*i*f-t*u*f)*D,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*f+t*o*f)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*D,e[12]=P*D,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*D,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,E=l*c,b=l*h,N=l*u,P=i.x,R=i.y,D=i.z;return s[0]=(1-(x+f))*P,s[1]=(p+N)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-N)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*D,s[9]=(m-E)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Rr.set(s[0],s[1],s[2]).length(),a=Rr.set(s[4],s[5],s[6]).length(),o=Rr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);let c=1/r,h=1/a,u=1/o;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Yi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(o===Yi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sl)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,p=(i+s)*h,g,x;if(o===Yi)g=(a+r)*u,x=-2*u;else if(o===Sl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Rr=new U,gi=new ct,Dy=new U(0,0,0),Uy=new U(1,1,1),gs=new U,Yo=new U,Kn=new U,zf=new ct,Hf=new Ti,Cl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cl.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Oy=0,Vf=new U,Lr=new Ti,Hi=new ct,jo=new U,Oa=new U,ky=new U,Fy=new Ti,Gf=new U(1,0,0),Wf=new U(0,1,0),$f=new U(0,0,1),By={type:"added"},zy={type:"removed"},jt=class n extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Cl,i=new Ti,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Oa,jo,this.up):Hi.lookAt(jo,Oa,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(Hi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(By)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};jt.DEFAULT_UP=new U(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new U,Vi=new U,Sh=new U,Gi=new U,Pr=new U,Ir=new U,qf=new U,wh=new U,Eh=new U,Th=new U,Zo=!1,er=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),Vi.subVectors(i,t),Sh.subVectors(e,t);let a=yi.dot(yi),o=yi.dot(Vi),l=yi.dot(Sh),c=Vi.dot(Vi),h=Vi.dot(Sh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,t,i,s,r,a,o,l){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l)}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),Vi.subVectors(e,t),yi.cross(Vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),yi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Zo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Pr.subVectors(s,i),Ir.subVectors(r,i),wh.subVectors(e,i);let l=Pr.dot(wh),c=Ir.dot(wh);if(l<=0&&c<=0)return t.copy(i);Eh.subVectors(e,s);let h=Pr.dot(Eh),u=Ir.dot(Eh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pr,a);Th.subVectors(e,r);let p=Pr.dot(Th),g=Ir.dot(Th);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ir,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return qf.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(qf,o);let f=1/(m+x+d);return a=x*f,o=d*f,t.copy(i).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var lt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Lt.workingColorSpace){if(e=Tu(e,1),t=Rn(t,0,1),i=Rn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ah(a,r,e+1/3),this.g=Ah(a,r,e),this.b=Ah(a,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=Jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=mh(e.r),this.g=mh(e.g),this.b=mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Lt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Rn(Cn.r*255,0,255))*65536+Math.round(Rn(Cn.g*255,0,255))*256+Math.round(Rn(Cn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Xt){Lt.fromWorkingColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Jo);let i=Ga(ys.h,Jo.h,t),s=Ga(ys.s,Jo.s,t),r=Ga(ys.l,Jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new lt;lt.NAMES=Jp;var Hy=0,Ai=class extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=qr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new U,Ko=new et,ei=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}};var Rl=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ll=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Dt=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Vy=0,ri=new ct,Ch=new jt,Nr=new U,Qn=new vn,ka=new vn,dn=new U,Xn=class n extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?Ll:Rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Qn.min,ka.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,ka.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(ka.min),Qn.expandByPoint(ka.max))}Qn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(Nr.fromBufferAttribute(e,c),dn.add(Nr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new U,h[M]=new U;let u=new U,d=new U,p=new U,g=new et,x=new et,m=new et,f=new U,E=new U;function b(M,F,ie){u.fromArray(s,M*3),d.fromArray(s,F*3),p.fromArray(s,ie*3),g.fromArray(a,M*2),x.fromArray(a,F*2),m.fromArray(a,ie*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let ue=1/(x.x*m.y-m.x*x.y);isFinite(ue)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(ue),E.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ue),c[M].add(f),c[F].add(f),c[ie].add(f),h[M].add(E),h[F].add(E),h[ie].add(E))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let M=0,F=N.length;M<F;++M){let ie=N[M],ue=ie.start,O=ie.count;for(let G=ue,B=ue+O;G<B;G+=3)b(i[G+0],i[G+1],i[G+2])}let P=new U,R=new U,D=new U,z=new U;function w(M){D.fromArray(r,M*3),z.copy(D);let F=c[M];P.copy(F),P.sub(D.multiplyScalar(D.dot(F))).normalize(),R.crossVectors(z,F);let ue=R.dot(h[M])<0?-1:1;l[M*4]=P.x,l[M*4+1]=P.y,l[M*4+2]=P.z,l[M*4+3]=ue}for(let M=0,F=N.length;M<F;++M){let ie=N[M],ue=ie.start,O=ie.count;for(let G=ue,B=ue+O;G<B;G+=3)w(i[G+0]),w(i[G+1]),w(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ei(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xf=new ct,js=new Qr,Qo=new li,Yf=new U,Dr=new U,Ur=new U,Or=new U,Rh=new U,el=new U,tl=new et,nl=new et,il=new et,jf=new U,Zf=new U,Jf=new U,sl=new U,rl=new U,Bt=class extends jt{constructor(e=new Xn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){el.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Rh.fromBufferAttribute(u,e),a?el.addScaledVector(Rh,h):el.addScaledVector(Rh.sub(t),h))}t.add(el)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(Qo.containsPoint(js.origin)===!1&&(js.intersectSphere(Qo,Yf)===null||js.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),js.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,P=b;N<P;N+=3){let R=o.getX(N),D=o.getX(N+1),z=o.getX(N+2);s=al(this,f,e,i,c,h,u,R,D,z),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let E=o.getX(m),b=o.getX(m+1),N=o.getX(m+2);s=al(this,a,e,i,c,h,u,E,b,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,P=b;N<P;N+=3){let R=N,D=N+1,z=N+2;s=al(this,f,e,i,c,h,u,R,D,z),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let E=m,b=m+1,N=m+2;s=al(this,a,e,i,c,h,u,E,b,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gy(n,e,t,i,s,r,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===$n,o),l===null)return null;rl.copy(o),rl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:n}}function al(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Dr),n.getVertexPosition(l,Ur),n.getVertexPosition(c,Or);let h=Gy(n,e,t,i,Dr,Ur,Or,sl);if(h){s&&(tl.fromBufferAttribute(s,o),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),h.uv=er.getInterpolation(sl,Dr,Ur,Or,tl,nl,il,new et)),r&&(tl.fromBufferAttribute(r,o),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),h.uv1=er.getInterpolation(sl,Dr,Ur,Or,tl,nl,il,new et),h.uv2=h.uv1),a&&(jf.fromBufferAttribute(a,o),Zf.fromBufferAttribute(a,l),Jf.fromBufferAttribute(a,c),h.normal=er.getInterpolation(sl,Dr,Ur,Or,jf,Zf,Jf,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};er.getNormal(Dr,Ur,Or,u.normal),h.face=u}return h}var ja=class n extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function g(x,m,f,E,b,N,P,R,D,z,w){let M=N/D,F=P/z,ie=N/2,ue=P/2,O=R/2,G=D+1,B=z+1,ne=0,q=0,$=new U;for(let ee=0;ee<B;ee++){let j=ee*F-ue;for(let oe=0;oe<G;oe++){let V=oe*M-ie;$[x]=V*E,$[m]=j*b,$[f]=O,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[f]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(oe/D),u.push(1-ee/z),ne+=1}}for(let ee=0;ee<z;ee++)for(let j=0;j<D;j++){let oe=d+j+G*ee,V=d+j+G*(ee+1),Z=d+(j+1)+G*(ee+1),re=d+(j+1)+G*ee;l.push(oe,V,re),l.push(V,Z,re),q+=6}o.addGroup(p,q,w),p+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ea(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kn(n){let e={};for(let t=0;t<n.length;t++){let i=ea(n[t]);for(let s in i)e[s]=i[s]}return e}function Wy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){return n.getRenderTarget()===null?n.outputColorSpace:Lt.workingColorSpace}var ic={clone:ea,merge:kn},$y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$y,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Pl=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=class extends Pl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,Fr=1,Kh=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(kr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new en(kr,Fr,e,t);r.layers=this.layers,this.add(r);let a=new en(kr,Fr,e,t);a.layers=this.layers,this.add(a);let o=new en(kr,Fr,e,t);o.layers=this.layers,this.add(o);let l=new en(kr,Fr,e,t);l.layers=this.layers,this.add(l);let c=new en(kr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Il=class extends qn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qh=class extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ir?Xt:oi),this.texture=new Il(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ja(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:_s});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Fn),new Kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Lh=new U,Xy=new U,Yy=new mt,qi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Lh.subVectors(i,t).cross(Xy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Lh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Yy.getNormalMatrix(e),s=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zs=new li,ol=new U,Za=class{constructor(e=new qi,t=new qi,i=new qi,s=new qi,r=new qi,a=new qi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],E=s[13],b=s[14],N=s[15];if(i[0].setComponents(l-r,d-c,m-p,N-f).normalize(),i[1].setComponents(l+r,d+c,m+p,N+f).normalize(),i[2].setComponents(l+a,d+h,m+g,N+E).normalize(),i[3].setComponents(l-a,d-h,m-g,N-E).normalize(),i[4].setComponents(l-o,d-u,m-x,N-b).normalize(),t===Yi)i[5].setComponents(l+o,d+u,m+x,N+b).normalize();else if(t===Sl)i[5].setComponents(o,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function jy(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Ji=class n extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let E=f*d-a;for(let b=0;b<c;b++){let N=b*u-r;g.push(N,-E,0),x.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let b=E+c*f,N=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;p.push(b,N,R),p.push(N,P,R)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
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
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cv=`#ifdef USE_IRIDESCENCE
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
#endif`,hv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_v=`#define PI 3.141592653589793
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bv=`vec3 transformedNormal = objectNormal;
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
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Av=`
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
}`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Fv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vv=`uniform bool receiveShadow;
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
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
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
#endif`,jv=`struct PhysicalMaterial {
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
}`,Zv=`
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z_=`uniform sampler2D t2D;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,nx=`#if DEPTH_PACKING == 3200
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
}`,ix=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define MATCAP
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
}`,px=`#define MATCAP
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
}`,mx=`#define NORMAL
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
}`,gx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,_x=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ax=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Zy,alphahash_pars_fragment:Jy,alphamap_fragment:Ky,alphamap_pars_fragment:Qy,alphatest_fragment:ev,alphatest_pars_fragment:tv,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:sv,batching_vertex:rv,begin_vertex:av,beginnormal_vertex:ov,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:hv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:yv,color_vertex:vv,common:_v,cube_uv_reflection_fragment:xv,defaultnormal_vertex:bv,displacementmap_pars_vertex:Mv,displacementmap_vertex:Sv,emissivemap_fragment:wv,emissivemap_pars_fragment:Ev,colorspace_fragment:Tv,colorspace_pars_fragment:Av,envmap_fragment:Cv,envmap_common_pars_fragment:Rv,envmap_pars_fragment:Lv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Gv,envmap_vertex:Iv,fog_vertex:Nv,fog_pars_vertex:Dv,fog_fragment:Uv,fog_pars_fragment:Ov,gradientmap_pars_fragment:kv,lightmap_fragment:Fv,lightmap_pars_fragment:Bv,lights_lambert_fragment:zv,lights_lambert_pars_fragment:Hv,lights_pars_begin:Vv,lights_toon_fragment:Wv,lights_toon_pars_fragment:$v,lights_phong_fragment:qv,lights_phong_pars_fragment:Xv,lights_physical_fragment:Yv,lights_physical_pars_fragment:jv,lights_fragment_begin:Zv,lights_fragment_maps:Jv,lights_fragment_end:Kv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:a_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:l_,morphcolor_vertex:c_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:d_,normal_fragment_begin:f_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:y_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:M_,opaque_fragment:S_,packing:w_,premultiplied_alpha_fragment:E_,project_vertex:T_,dithering_fragment:A_,dithering_pars_fragment:C_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:N_,shadowmask_pars_fragment:D_,skinbase_vertex:U_,skinning_pars_vertex:O_,skinning_vertex:k_,skinnormal_vertex:F_,specularmap_fragment:B_,specularmap_pars_fragment:z_,tonemapping_fragment:H_,tonemapping_pars_fragment:V_,transmission_fragment:G_,transmission_pars_fragment:W_,uv_pars_fragment:$_,uv_pars_vertex:q_,uv_vertex:X_,worldpos_vertex:Y_,background_vert:j_,background_frag:Z_,backgroundCube_vert:J_,backgroundCube_frag:K_,cube_vert:Q_,cube_frag:ex,depth_vert:tx,depth_frag:nx,distanceRGBA_vert:ix,distanceRGBA_frag:sx,equirect_vert:rx,equirect_frag:ax,linedashed_vert:ox,linedashed_frag:lx,meshbasic_vert:cx,meshbasic_frag:hx,meshlambert_vert:ux,meshlambert_frag:dx,meshmatcap_vert:fx,meshmatcap_frag:px,meshnormal_vert:mx,meshnormal_frag:gx,meshphong_vert:yx,meshphong_frag:vx,meshphysical_vert:_x,meshphysical_frag:xx,meshtoon_vert:bx,meshtoon_frag:Mx,points_vert:Sx,points_frag:wx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:Cx},_e={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Bn={basic:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:kn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:kn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:kn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:kn([_e.points,_e.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:kn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:kn([_e.common,_e.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:kn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:kn([_e.sprite,_e.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:kn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:kn([_e.lights,_e.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Bn.physical={uniforms:kn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var ll={r:0,b:0,g:0};function Rx(n,e,t,i,s,r,a){let o=new lt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let E=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?x(o,l):b&&b.isColor&&(x(b,1),E=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===tc)?(h===void 0&&(h=new Bt(new ja(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ea(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Ft,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bt(new Ji(2,2),new _i({name:"BackgroundMaterial",uniforms:ea(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,f){m.getRGB(ll,Kp(n)),i.buffers.color.setClear(ll.r,ll.g,ll.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function Lx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(O,G,B,ne,q){let $=!1;if(a){let ee=x(ne,B,G);c!==ee&&(c=ee,p(c.object)),$=f(O,ne,B,q),$&&E(O,ne,B,q)}else{let ee=G.wireframe===!0;(c.geometry!==ne.id||c.program!==B.id||c.wireframe!==ee)&&(c.geometry=ne.id,c.program=B.id,c.wireframe=ee,$=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,z(O,G,B,ne),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function x(O,G,B){let ne=B.wireframe===!0,q=o[O.id];q===void 0&&(q={},o[O.id]=q);let $=q[G.id];$===void 0&&($={},q[G.id]=$);let ee=$[ne];return ee===void 0&&(ee=m(d()),$[ne]=ee),ee}function m(O){let G=[],B=[],ne=[];for(let q=0;q<s;q++)G[q]=0,B[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:B,attributeDivisors:ne,object:O,attributes:{},index:null}}function f(O,G,B,ne){let q=c.attributes,$=G.attributes,ee=0,j=B.getAttributes();for(let oe in j)if(j[oe].location>=0){let Z=q[oe],re=$[oe];if(re===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ne}function E(O,G,B,ne){let q={},$=G.attributes,ee=0,j=B.getAttributes();for(let oe in j)if(j[oe].location>=0){let Z=$[oe];Z===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));let re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),q[oe]=re,ee++}c.attributes=q,c.attributesNum=ee,c.index=ne}function b(){let O=c.newAttributes;for(let G=0,B=O.length;G<B;G++)O[G]=0}function N(O){P(O,0)}function P(O,G){let B=c.newAttributes,ne=c.enabledAttributes,q=c.attributeDivisors;B[O]=1,ne[O]===0&&(n.enableVertexAttribArray(O),ne[O]=1),q[O]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),q[O]=G)}function R(){let O=c.newAttributes,G=c.enabledAttributes;for(let B=0,ne=G.length;B<ne;B++)G[B]!==O[B]&&(n.disableVertexAttribArray(B),G[B]=0)}function D(O,G,B,ne,q,$,ee){ee===!0?n.vertexAttribIPointer(O,G,B,q,$):n.vertexAttribPointer(O,G,B,ne,q,$)}function z(O,G,B,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=ne.attributes,$=B.getAttributes(),ee=G.defaultAttributeValues;for(let j in $){let oe=$[j];if(oe.location>=0){let V=q[j];if(V===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let Z=V.normalized,re=V.itemSize,ae=t.get(V);if(ae===void 0)continue;let ce=ae.buffer,Le=ae.type,Ve=ae.bytesPerElement,Ge=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||V.gpuType===Hp);if(V.isInterleavedBufferAttribute){let gt=V.data,X=gt.stride,mn=V.offset;if(gt.isInstancedInterleavedBuffer){for(let qe=0;qe<oe.locationSize;qe++)P(oe.location+qe,gt.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let qe=0;qe<oe.locationSize;qe++)N(oe.location+qe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let qe=0;qe<oe.locationSize;qe++)D(oe.location+qe,re/oe.locationSize,Le,Z,X*Ve,(mn+re/oe.locationSize*qe)*Ve,Ge)}else{if(V.isInstancedBufferAttribute){for(let gt=0;gt<oe.locationSize;gt++)P(oe.location+gt,V.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let gt=0;gt<oe.locationSize;gt++)N(oe.location+gt);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let gt=0;gt<oe.locationSize;gt++)D(oe.location+gt,re/oe.locationSize,Le,Z,re*Ve,re/oe.locationSize*gt*Ve,Ge)}}else if(ee!==void 0){let Z=ee[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(oe.location,Z);break;case 3:n.vertexAttrib3fv(oe.location,Z);break;case 4:n.vertexAttrib4fv(oe.location,Z);break;default:n.vertexAttrib1fv(oe.location,Z)}}}}R()}function w(){ie();for(let O in o){let G=o[O];for(let B in G){let ne=G[B];for(let q in ne)g(ne[q].object),delete ne[q];delete G[B]}delete o[O]}}function M(O){if(o[O.id]===void 0)return;let G=o[O.id];for(let B in G){let ne=G[B];for(let q in ne)g(ne[q].object),delete ne[q];delete G[B]}delete o[O.id]}function F(O){for(let G in o){let B=o[G];if(B[O.id]===void 0)continue;let ne=B[O.id];for(let q in ne)g(ne[q].object),delete ne[q];delete B[O.id]}}function ie(){ue(),h=!0,c!==l&&(c=l,p(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:ue,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:N,disableUnusedAttributes:R}}function Px(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ix(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,N=a||e.has("OES_texture_float"),P=b&&N,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:N,floatVertexTextures:P,maxSamples:R}}function Nx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new qi,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,b=E*4,N=f.clippingState||null;l.value=N,N=h(g,d,b,p);for(let P=0;P!==b;++P)N[P]=t[P];f.clippingState=N,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,N=p;b!==x;++b,N+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,N),m[N+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dx(n){let e=new WeakMap;function t(a,o){return o===Wh?a.mapping=jr:o===$h&&(a.mapping=Zr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wh||o===$h)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ta=class extends Pl{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wr=4,Kf=[.125,.215,.35,.446,.526,.582],Qs=20,Ph=new ta,Qf=new lt,Ih=null,Nh=0,Dh=0,Js=(1+Math.sqrt(5))/2,Br=1/Js,ep=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Js,Br),new U(0,Js,-Br),new U(Br,0,Js),new U(-Br,0,Js),new U(Js,Br,0),new U(-Js,Br,0)],Nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ih=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ih,Nh,Dh),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ih=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:qa,format:ai,colorSpace:ji,depthBuffer:!1},s=tp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Ox(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Ph)}_sceneToCubeUV(e,t,i,s){let o=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qf),h.toneMapping=xs,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Bt(new ja,p),x=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Qf),x=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;cl(s,E*b,f>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===jr||e.mapping===Zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;cl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ph)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ep[(s-1)%ep.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let f=[],E=0;for(let D=0;D<Qs;++D){let z=D/x,w=Math.exp(-z*z/2);f.push(w),D===0?E+=w:D<m&&(E+=2*w)}for(let D=0;D<f.length;D++)f[D]=f[D]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let N=this._sizeLods[s],P=3*N*(s>b-Wr?s-b+Wr:0),R=4*(this._cubeSize-N);cl(t,P,R,3*N,2*N),l.setRenderTarget(t),l.render(u,Ph)}};function Ux(n){let e=[],t=[],i=[],s=n,r=n-Wr+1+Kf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Wr?l=Kf[a-n+Wr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),b=new Float32Array(m*g*p),N=new Float32Array(f*g*p);for(let R=0;R<p;R++){let D=R%3*2/3-1,z=R>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];E.set(w,x*g*R),b.set(d,m*g*R);let M=[R,R,R,R,R,R];N.set(M,f*g*R)}let P=new Xn;P.setAttribute("position",new ei(E,x)),P.setAttribute("uv",new ei(b,m)),P.setAttribute("faceIndex",new ei(N,f)),e.push(P),s>Wr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tp(n,e,t){let i=new Zi(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ox(n,e,t){let i=new Float32Array(Qs),s=new U(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function np(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function ip(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function kx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wh||l===$h,h=l===jr||l===Zr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Nl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Nl(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Fx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bx(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let b=0,N=E.length;b<N;b+=3){let P=E[b+0],R=E[b+1],D=E[b+2];d.push(P,R,R,D,D,P)}}else if(g!==void 0){let E=g.array;x=g.version;for(let b=0,N=E.length/3-1;b<N;b+=3){let P=b+0,R=b+1,D=b+2;d.push(P,R,R,D,D,P)}}else return;let m=new(Zp(d)?Ll:Rl)(d,1);m.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zx(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,x),t.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,x);let f=0;for(let E=0;E<x;E++)f+=g[E];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Hx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vx(n,e){return n[0]-e[0]}function Gx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Wx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let O=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",O)};x!==void 0&&x.texture.dispose();let E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],z=0;E===!0&&(z=1),b===!0&&(z=2),N===!0&&(z=3);let w=h.attributes.position.count*z,M=1;w>e.maxTextureSize&&(M=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let F=new Float32Array(w*M*4*g),ie=new Al(F,w,M,g);ie.type=Xi,ie.needsUpdate=!0;let ue=z*4;for(let G=0;G<g;G++){let B=P[G],ne=R[G],q=D[G],$=w*M*4*G;for(let ee=0;ee<B.count;ee++){let j=ee*ue;E===!0&&(a.fromBufferAttribute(B,ee),F[$+j+0]=a.x,F[$+j+1]=a.y,F[$+j+2]=a.z,F[$+j+3]=0),b===!0&&(a.fromBufferAttribute(ne,ee),F[$+j+4]=a.x,F[$+j+5]=a.y,F[$+j+6]=a.z,F[$+j+7]=0),N===!0&&(a.fromBufferAttribute(q,ee),F[$+j+8]=a.x,F[$+j+9]=a.y,F[$+j+10]=a.z,F[$+j+11]=q.itemSize===4?a.w:1)}}x={count:g,texture:ie,size:new et(w,M)},r.set(h,x),h.addEventListener("dispose",O)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let N=g[b];N[0]=b,N[1]=d[b]}g.sort(Gx);for(let b=0;b<8;b++)b<p&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Vx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let N=o[b],P=N[0],R=N[1];P!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+b)!==x[P]&&h.setAttribute("morphTarget"+b,x[P]),m&&h.getAttribute("morphNormal"+b)!==m[P]&&h.setAttribute("morphNormal"+b,m[P]),s[b]=R,f+=R):(x&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function $x(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Dl=class extends qn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:nr,h!==nr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===nr&&(i=vs),i===void 0&&h===Jr&&(i=tr),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},em=new qn,tm=new Dl(1,1);tm.compareFunction=jp;var nm=new Al,im=new Jh,sm=new Il,sp=[],rp=[],ap=new Float32Array(16),op=new Float32Array(9),lp=new Float32Array(4);function la(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sc(n,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Yx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function Zx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;lp.set(i),n.uniformMatrix2fv(this.addr,!1,lp),on(t,i)}}function Jx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;op.set(i),n.uniformMatrix3fv(this.addr,!1,op),on(t,i)}}function Kx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;ap.set(i),n.uniformMatrix4fv(this.addr,!1,ap),on(t,i)}}function Qx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function ib(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function rb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function ab(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function ob(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?tm:em;t.setTexture2D(e||r,s)}function lb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||im,s)}function cb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sm,s)}function hb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nm,s)}function ub(n){switch(n){case 5126:return qx;case 35664:return Xx;case 35665:return Yx;case 35666:return jx;case 35674:return Zx;case 35675:return Jx;case 35676:return Kx;case 5124:case 35670:return Qx;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return sb;case 36295:return rb;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return hb}}function db(n,e){n.uniform1fv(this.addr,e)}function fb(n,e){let t=la(e,this.size,2);n.uniform2fv(this.addr,t)}function pb(n,e){let t=la(e,this.size,3);n.uniform3fv(this.addr,t)}function mb(n,e){let t=la(e,this.size,4);n.uniform4fv(this.addr,t)}function gb(n,e){let t=la(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yb(n,e){let t=la(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vb(n,e){let t=la(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _b(n,e){n.uniform1iv(this.addr,e)}function xb(n,e){n.uniform2iv(this.addr,e)}function bb(n,e){n.uniform3iv(this.addr,e)}function Mb(n,e){n.uniform4iv(this.addr,e)}function Sb(n,e){n.uniform1uiv(this.addr,e)}function wb(n,e){n.uniform2uiv(this.addr,e)}function Eb(n,e){n.uniform3uiv(this.addr,e)}function Tb(n,e){n.uniform4uiv(this.addr,e)}function Ab(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||em,r[a])}function Cb(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||im,r[a])}function Rb(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||sm,r[a])}function Lb(n,e,t){let i=this.cache,s=e.length,r=sc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nm,r[a])}function Pb(n){switch(n){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return yb;case 35676:return vb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return bb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return wb;case 36295:return Eb;case 36296:return Tb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Lb}}var eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ub(t.type)}},tu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pb(t.type)}},nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Uh=/(\w+)(\])?(\[|\.)?/g;function cp(n,e){n.seq.push(e),n.map[e.id]=e}function Ib(n,e,t){let i=n.name,s=i.length;for(Uh.lastIndex=0;;){let r=Uh.exec(i),a=Uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){cp(t,c===void 0?new eu(o,n,e):new tu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new nu(o),cp(t,u)),t=u}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ib(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function hp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Nb=37297,Db=0;function Ub(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ob(n){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(n),i;switch(e===t?i="":e===Ml&&t===bl?i="LinearDisplayP3ToLinearSRGB":e===bl&&t===Ml&&(i="LinearSRGBToLinearDisplayP3"),n){case ji:case nc:return[i,"LinearTransferOETF"];case Xt:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function up(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ub(n.getShaderSource(e),a)}else return s}function kb(n,e){let t=Ob(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fb(n,e){let t;switch(e){case V0:t="Linear";break;case G0:t="Reinhard";break;case W0:t="OptimizedCineon";break;case $0:t="ACESFilmic";break;case X0:t="AgX";break;case q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($r).join(`
`)}function zb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter($r).join(`
`)}function Hb(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function $r(n){return n!==""}function dp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(Gb,$b)}var Wb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $b(n,e){let t=ft[e];if(t===void 0){let i=Wb.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}var qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(n){return n.replace(qb,Xb)}function Xb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Zr:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ec:e="ENVMAP_BLENDING_MULTIPLY";break;case z0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function Kb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Qb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Yb(t),c=jb(t),h=Zb(t),u=Jb(t),d=Kb(t),p=t.isWebGL2?"":Bb(t),g=zb(t),x=Hb(r),m=s.createProgram(),f,E,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter($r).join(`
`),E.length>0&&(E+=`
`)):(f=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),E=[p,mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?ft.tonemapping_pars_fragment:"",t.toneMapping!==xs?Fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,kb("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),a=iu(a),a=dp(a,t),a=fp(a,t),o=iu(o),o=dp(o,t),o=fp(o,t),a=pp(a),o=pp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let N=b+f+a,P=b+E+o,R=hp(s,s.VERTEX_SHADER,N),D=hp(s,s.FRAGMENT_SHADER,P);s.attachShader(m,R),s.attachShader(m,D),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(ie){if(n.debug.checkShaderErrors){let ue=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(D).trim(),B=!0,ne=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,D);else{let q=up(s,R,"vertex"),$=up(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+q+`
`+$)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(O===""||G==="")&&(ne=!1);ne&&(ie.diagnostics={runnable:B,programLog:ue,vertexShader:{log:O,prefix:f},fragmentShader:{log:G,prefix:E}})}s.deleteShader(R),s.deleteShader(D),w=new Yr(s,m),M=Vb(s,m)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,Nb)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=D,this}var e1=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ru(e),t.set(e,i)),i}},ru=class{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}};function t1(n,e,t,i,s,r,a){let o=new Ya,l=new su,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return w===0?"uv":`uv${w}`}function m(w,M,F,ie,ue){let O=ie.fog,G=ue.geometry,B=w.isMeshStandardMaterial?ie.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),q=ne&&ne.mapping===tc?ne.image.height:null,$=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=ee!==void 0?ee.length:0,oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let V,Z,re,ae;if($){let hn=Bn[$];V=hn.vertexShader,Z=hn.fragmentShader}else V=w.vertexShader,Z=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);let ce=n.getRenderTarget(),Le=ue.isInstancedMesh===!0,Ve=ue.isBatchedMesh===!0,Ge=!!w.map,gt=!!w.matcap,X=!!ne,mn=!!w.aoMap,qe=!!w.lightMap,it=!!w.bumpMap,Oe=!!w.normalMap,It=!!w.displacementMap,ht=!!w.emissiveMap,I=!!w.metalnessMap,A=!!w.roughnessMap,J=w.anisotropy>0,ge=w.clearcoat>0,pe=w.iridescence>0,ye=w.sheen>0,Be=w.transmission>0,we=J&&!!w.anisotropyMap,Ne=ge&&!!w.clearcoatMap,Ye=ge&&!!w.clearcoatNormalMap,ut=ge&&!!w.clearcoatRoughnessMap,me=pe&&!!w.iridescenceMap,St=pe&&!!w.iridescenceThicknessMap,pt=ye&&!!w.sheenColorMap,Qe=ye&&!!w.sheenRoughnessMap,We=!!w.specularMap,De=!!w.specularColorMap,at=!!w.specularIntensityMap,Mt=Be&&!!w.transmissionMap,Ot=Be&&!!w.thicknessMap,dt=!!w.gradientMap,xe=!!w.alphaMap,k=w.alphaTest>0,Me=!!w.alphaHash,Se=!!w.extensions,Ke=!!G.attributes.uv1,Xe=!!G.attributes.uv2,Et=!!G.attributes.uv3,At=xs;return w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:V,fragmentShader:Z,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ve,instancing:Le,instancingColor:Le&&ue.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ji,map:Ge,matcap:gt,envMap:X,envMapMode:X&&ne.mapping,envMapCubeUVHeight:q,aoMap:mn,lightMap:qe,bumpMap:it,normalMap:Oe,displacementMap:d&&It,emissiveMap:ht,normalMapObjectSpace:Oe&&w.normalMapType===oy,normalMapTangentSpace:Oe&&w.normalMapType===wu,metalnessMap:I,roughnessMap:A,anisotropy:J,anisotropyMap:we,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ut,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:St,sheen:ye,sheenColorMap:pt,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:De,specularIntensityMap:at,transmission:Be,transmissionMap:Mt,thicknessMap:Ot,gradientMap:dt,opaque:w.transparent===!1&&w.blending===qr,alphaMap:xe,alphaTest:k,alphaHash:Me,combine:w.combine,mapUv:Ge&&x(w.map.channel),aoMapUv:mn&&x(w.aoMap.channel),lightMapUv:qe&&x(w.lightMap.channel),bumpMapUv:it&&x(w.bumpMap.channel),normalMapUv:Oe&&x(w.normalMap.channel),displacementMapUv:It&&x(w.displacementMap.channel),emissiveMapUv:ht&&x(w.emissiveMap.channel),metalnessMapUv:I&&x(w.metalnessMap.channel),roughnessMapUv:A&&x(w.roughnessMap.channel),anisotropyMapUv:we&&x(w.anisotropyMap.channel),clearcoatMapUv:Ne&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&x(w.sheenRoughnessMap.channel),specularMapUv:We&&x(w.specularMap.channel),specularColorMapUv:De&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:Mt&&x(w.transmissionMap.channel),thicknessMapUv:Ot&&x(w.thicknessMap.channel),alphaMapUv:xe&&x(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||J),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Xe,vertexUv3s:Et,pointsUvs:ue.isPoints===!0&&!!G.attributes.uv&&(Ge||xe),fog:!!O,useFog:w.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ue.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zn,flipSided:w.side===fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Se&&w.extensions.derivatives===!0,extensionFragDepth:Se&&w.extensions.fragDepth===!0,extensionDrawBuffers:Se&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)M.push(F),M.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(E(M,w),b(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function N(w){let M=g[w.type],F;if(M){let ie=Bn[M];F=ic.clone(ie.uniforms)}else F=w.uniforms;return F}function P(w,M){let F;for(let ie=0,ue=c.length;ie<ue;ie++){let O=c[ie];if(O.cacheKey===M){F=O,++F.usedTimes;break}}return F===void 0&&(F=new Qb(n,M,w,r),c.push(F)),F}function R(w){if(--w.usedTimes===0){let M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:N,acquireProgram:P,releaseProgram:R,releaseShaderCache:D,programs:c,dispose:z}}function n1(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function i1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,p,g,x,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function o(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,x,m){let f=a(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||i1),i.length>1&&i.sort(d||gp),s.length>1&&s.sort(d||gp)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function s1(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new yp,n.set(i,[a])):s>=r.length?(a=new yp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function r1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new lt};break;case"SpotLight":t={position:new U,direction:new U,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function a1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var o1=0;function l1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c1(n,e){let t=new r1,i=a1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new ct,o=new ct;function l(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let x=0,m=0,f=0,E=0,b=0,N=0,P=0,R=0,D=0,z=0,w=0;h.sort(l1);let M=u===!0?Math.PI:1;for(let ie=0,ue=h.length;ie<ue;ie++){let O=h[ie],G=O.color,B=O.intensity,ne=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=G.r*B*M,p+=G.g*B*M,g+=G.b*B*M;else if(O.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(O.sh.coefficients[$],B);w++}else if(O.isDirectionalLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){let ee=O.shadow,j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.directionalShadow[x]=j,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=O.shadow.matrix,N++}s.directional[x]=$,x++}else if(O.isSpotLight){let $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(G).multiplyScalar(B*M),$.distance=ne,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,s.spot[f]=$;let ee=O.shadow;if(O.map&&(s.spotLightMap[D]=O.map,D++,ee.updateMatrices(O),O.castShadow&&z++),s.spotLightMatrix[f]=ee.matrix,O.castShadow){let j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.spotShadow[f]=j,s.spotShadowMap[f]=q,R++}f++}else if(O.isRectAreaLight){let $=t.get(O);$.color.copy(G).multiplyScalar(B),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),s.rectArea[E]=$,E++}else if(O.isPointLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),$.distance=O.distance,$.decay=O.decay,O.castShadow){let ee=O.shadow,j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=O.shadow.matrix,P++}s.point[m]=$,m++}else if(O.isHemisphereLight){let $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(B*M),$.groundColor.copy(O.groundColor).multiplyScalar(B*M),s.hemi[b]=$,b++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==E||F.hemiLength!==b||F.numDirectionalShadows!==N||F.numPointShadows!==P||F.numSpotShadows!==R||F.numSpotMaps!==D||F.numLightProbes!==w)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+D-z,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=w,F.directionalLength=x,F.pointLength=m,F.spotLength=f,F.rectAreaLength=E,F.hemiLength=b,F.numDirectionalShadows=N,F.numPointShadows=P,F.numSpotShadows=R,F.numSpotMaps=D,F.numLightProbes=w,s.version=o1++)}function c(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let E=0,b=h.length;E<b;E++){let N=h[E];if(N.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(N.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(N.isRectAreaLight){let P=s.rectArea[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(N.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(N.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),p++}else if(N.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function vp(n,e){let t=new c1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function h1(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new vp(n,e),t.set(r,[l])):a>=o.length?(l=new vp(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var au=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ou=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
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
}`;function f1(n,e,t){let i=new Za,s=new et,r=new et,a=new xt,o=new au({depthPacking:ay}),l=new ou,c={},h=t.maxTextureSize,u={[$n]:fn,[fn]:$n,[zn]:zn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:u1,fragmentShader:d1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Xn;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let f=this.type;this.render=function(R,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(_s),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let ue=f!==$i&&this.type===$i,O=f===$i&&this.type!==$i;for(let G=0,B=R.length;G<B;G++){let ne=R[G],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let $=q.getFrameExtents();if(s.multiply($),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,q.mapSize.y=r.y)),q.map===null||ue===!0||O===!0){let j=this.type!==$i?{minFilter:yn,magFilter:yn}:{};q.map!==null&&q.map.dispose(),q.map=new Zi(s.x,s.y,j),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let ee=q.getViewportCount();for(let j=0;j<ee;j++){let oe=q.getViewport(j);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),ie.viewport(a),q.updateMatrices(ne,j),i=q.getFrustum(),N(D,z,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===$i&&E(q,z),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,F)};function E(R,D){let z=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,z,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,z,p,x,null)}function b(R,D,z,w){let M=null,F=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)M=F;else if(M=z.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ie=M.uuid,ue=D.uuid,O=c[ie];O===void 0&&(O={},c[ie]=O);let G=O[ue];G===void 0&&(G=M.clone(),O[ue]=G,D.addEventListener("dispose",P)),M=G}if(M.visible=D.visible,M.wireframe=D.wireframe,w===$i?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let ie=n.properties.get(M);ie.light=z}return M}function N(R,D,z,w,M){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===$i)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let ue=e.update(R),O=R.material;if(Array.isArray(O)){let G=ue.groups;for(let B=0,ne=G.length;B<ne;B++){let q=G[B],$=O[q.materialIndex];if($&&$.visible){let ee=b(R,$,w,M);R.onBeforeShadow(n,R,D,z,ue,ee,q),n.renderBufferDirect(z,null,ue,ee,R,q),R.onAfterShadow(n,R,D,z,ue,ee,q)}}}else if(O.visible){let G=b(R,O,w,M);R.onBeforeShadow(n,R,D,z,ue,G,null),n.renderBufferDirect(z,null,ue,G,R,null),R.onAfterShadow(n,R,D,z,ue,G,null)}}let ie=R.children;for(let ue=0,O=ie.length;ue<O;ue++)N(ie[ue],D,z,w,M)}function P(R){R.target.removeEventListener("dispose",P);for(let z in c){let w=c[z],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function p1(n,e,t){let i=t.isWebGL2;function s(){let k=!1,Me=new xt,Se=null,Ke=new xt(0,0,0,0);return{setMask:function(Xe){Se!==Xe&&!k&&(n.colorMask(Xe,Xe,Xe,Xe),Se=Xe)},setLocked:function(Xe){k=Xe},setClear:function(Xe,Et,At,wt,hn){hn===!0&&(Xe*=wt,Et*=wt,At*=wt),Me.set(Xe,Et,At,wt),Ke.equals(Me)===!1&&(n.clearColor(Xe,Et,At,wt),Ke.copy(Me))},reset:function(){k=!1,Se=null,Ke.set(-1,0,0,0)}}}function r(){let k=!1,Me=null,Se=null,Ke=null;return{setTest:function(Xe){Xe?Ve(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(Xe){Me!==Xe&&!k&&(n.depthMask(Xe),Me=Xe)},setFunc:function(Xe){if(Se!==Xe){switch(Xe){case N0:n.depthFunc(n.NEVER);break;case D0:n.depthFunc(n.ALWAYS);break;case U0:n.depthFunc(n.LESS);break;case yl:n.depthFunc(n.LEQUAL);break;case O0:n.depthFunc(n.EQUAL);break;case k0:n.depthFunc(n.GEQUAL);break;case F0:n.depthFunc(n.GREATER);break;case B0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Xe}},setLocked:function(Xe){k=Xe},setClear:function(Xe){Ke!==Xe&&(n.clearDepth(Xe),Ke=Xe)},reset:function(){k=!1,Me=null,Se=null,Ke=null}}}function a(){let k=!1,Me=null,Se=null,Ke=null,Xe=null,Et=null,At=null,wt=null,hn=null;return{setTest:function(Ct){k||(Ct?Ve(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Ct){Me!==Ct&&!k&&(n.stencilMask(Ct),Me=Ct)},setFunc:function(Ct,gn,ii){(Se!==Ct||Ke!==gn||Xe!==ii)&&(n.stencilFunc(Ct,gn,ii),Se=Ct,Ke=gn,Xe=ii)},setOp:function(Ct,gn,ii){(Et!==Ct||At!==gn||wt!==ii)&&(n.stencilOp(Ct,gn,ii),Et=Ct,At=gn,wt=ii)},setLocked:function(Ct){k=Ct},setClear:function(Ct){hn!==Ct&&(n.clearStencil(Ct),hn=Ct)},reset:function(){k=!1,Me=null,Se=null,Ke=null,Xe=null,Et=null,At=null,wt=null,hn=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,E=null,b=null,N=null,P=null,R=null,D=null,z=null,w=new lt(0,0,0),M=0,F=!1,ie=null,ue=null,O=null,G=null,B=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=$>=2);let j=null,oe={},V=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),re=new xt().fromArray(V),ae=new xt().fromArray(Z);function ce(k,Me,Se,Ke){let Xe=new Uint8Array(4),Et=n.createTexture();n.bindTexture(k,Et),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<Se;At++)i&&(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Xe):n.texImage2D(Me+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xe);return Et}let Le={};Le[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(n.DEPTH_TEST),l.setFunc(yl),ht(!1),I(Zd),Ve(n.CULL_FACE),Oe(_s);function Ve(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function Ge(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function gt(k,Me){return p[k]!==Me?(n.bindFramebuffer(k,Me),p[k]=Me,i&&(k===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Me),k===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function X(k,Me){let Se=x,Ke=!1;if(k)if(Se=g.get(Me),Se===void 0&&(Se=[],g.set(Me,Se)),k.isWebGLMultipleRenderTargets){let Xe=k.texture;if(Se.length!==Xe.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,At=Xe.length;Et<At;Et++)Se[Et]=n.COLOR_ATTACHMENT0+Et;Se.length=Xe.length,Ke=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,Ke=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function mn(k){return m!==k?(n.useProgram(k),m=k,!0):!1}let qe={[Ks]:n.FUNC_ADD,[v0]:n.FUNC_SUBTRACT,[_0]:n.FUNC_REVERSE_SUBTRACT};if(i)qe[ef]=n.MIN,qe[tf]=n.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(qe[ef]=k.MIN_EXT,qe[tf]=k.MAX_EXT)}let it={[x0]:n.ZERO,[b0]:n.ONE,[M0]:n.SRC_COLOR,[Vh]:n.SRC_ALPHA,[C0]:n.SRC_ALPHA_SATURATE,[T0]:n.DST_COLOR,[w0]:n.DST_ALPHA,[S0]:n.ONE_MINUS_SRC_COLOR,[Gh]:n.ONE_MINUS_SRC_ALPHA,[A0]:n.ONE_MINUS_DST_COLOR,[E0]:n.ONE_MINUS_DST_ALPHA,[R0]:n.CONSTANT_COLOR,[L0]:n.ONE_MINUS_CONSTANT_COLOR,[P0]:n.CONSTANT_ALPHA,[I0]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(k,Me,Se,Ke,Xe,Et,At,wt,hn,Ct){if(k===_s){f===!0&&(Ge(n.BLEND),f=!1);return}if(f===!1&&(Ve(n.BLEND),f=!0),k!==y0){if(k!==E||Ct!==F){if((b!==Ks||R!==Ks)&&(n.blendEquation(n.FUNC_ADD),b=Ks,R=Ks),Ct)switch(k){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jd:n.blendFunc(n.ONE,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,P=null,D=null,z=null,w.set(0,0,0),M=0,E=k,F=Ct}return}Xe=Xe||Me,Et=Et||Se,At=At||Ke,(Me!==b||Xe!==R)&&(n.blendEquationSeparate(qe[Me],qe[Xe]),b=Me,R=Xe),(Se!==N||Ke!==P||Et!==D||At!==z)&&(n.blendFuncSeparate(it[Se],it[Ke],it[Et],it[At]),N=Se,P=Ke,D=Et,z=At),(wt.equals(w)===!1||hn!==M)&&(n.blendColor(wt.r,wt.g,wt.b,hn),w.copy(wt),M=hn),E=k,F=!1}function It(k,Me){k.side===zn?Ge(n.CULL_FACE):Ve(n.CULL_FACE);let Se=k.side===fn;Me&&(Se=!Se),ht(Se),k.blending===qr&&k.transparent===!1?Oe(_s):Oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),o.setMask(k.colorWrite);let Ke=k.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){ie!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),ie=k)}function I(k){k!==p0?(Ve(n.CULL_FACE),k!==ue&&(k===Zd?n.cullFace(n.BACK):k===m0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),ue=k}function A(k){k!==O&&(q&&n.lineWidth(k),O=k)}function J(k,Me,Se){k?(Ve(n.POLYGON_OFFSET_FILL),(G!==Me||B!==Se)&&(n.polygonOffset(Me,Se),G=Me,B=Se)):Ge(n.POLYGON_OFFSET_FILL)}function ge(k){k?Ve(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function pe(k){k===void 0&&(k=n.TEXTURE0+ne-1),j!==k&&(n.activeTexture(k),j=k)}function ye(k,Me,Se){Se===void 0&&(j===null?Se=n.TEXTURE0+ne-1:Se=j);let Ke=oe[Se];Ke===void 0&&(Ke={type:void 0,texture:void 0},oe[Se]=Ke),(Ke.type!==k||Ke.texture!==Me)&&(j!==Se&&(n.activeTexture(Se),j=Se),n.bindTexture(k,Me||Le[k]),Ke.type=k,Ke.texture=Me)}function Be(){let k=oe[j];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function we(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(k){re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),re.copy(k))}function Mt(k){ae.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ae.copy(k))}function Ot(k,Me){let Se=u.get(Me);Se===void 0&&(Se=new WeakMap,u.set(Me,Se));let Ke=Se.get(k);Ke===void 0&&(Ke=n.getUniformBlockIndex(Me,k.name),Se.set(k,Ke))}function dt(k,Me){let Ke=u.get(Me).get(k);h.get(Me)!==Ke&&(n.uniformBlockBinding(Me,Ke,k.__bindingPointIndex),h.set(Me,Ke))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,oe={},p={},g=new WeakMap,x=[],m=null,f=!1,E=null,b=null,N=null,P=null,R=null,D=null,z=null,w=new lt(0,0,0),M=0,F=!1,ie=null,ue=null,O=null,G=null,B=null,re.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ve,disable:Ge,bindFramebuffer:gt,drawBuffers:X,useProgram:mn,setBlending:Oe,setMaterial:It,setFlipSided:ht,setCullFace:I,setLineWidth:A,setPolygonOffset:J,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:Be,compressedTexImage2D:we,compressedTexImage3D:Ne,texImage2D:We,texImage3D:De,updateUBOMapping:Ot,uniformBlockBinding:dt,texStorage2D:pt,texStorage3D:Qe,texSubImage2D:Ye,texSubImage3D:ut,compressedTexSubImage2D:me,compressedTexSubImage3D:St,scissor:at,viewport:Mt,reset:xe}}function m1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return p?new OffscreenCanvas(I,A):Xa("canvas")}function x(I,A,J,ge){let pe=1;if((I.width>ge||I.height>ge)&&(pe=ge/Math.max(I.width,I.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ye=A?wl:Math.floor,Be=ye(pe*I.width),we=ye(pe*I.height);u===void 0&&(u=g(Be,we));let Ne=J?g(Be,we):u;return Ne.width=Be,Ne.height=we,Ne.getContext("2d").drawImage(I,0,0,Be,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Be+"x"+we+")."),Ne}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return jh(I.width)&&jh(I.height)}function f(I){return o?!1:I.wrapS!==Ln||I.wrapT!==Ln||I.minFilter!==yn&&I.minFilter!==Fn}function E(I,A){return I.generateMipmaps&&A&&I.minFilter!==yn&&I.minFilter!==Fn}function b(I){n.generateMipmap(I)}function N(I,A,J,ge,pe=!1){if(o===!1)return A;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye=A;if(A===n.RED&&(J===n.FLOAT&&(ye=n.R32F),J===n.HALF_FLOAT&&(ye=n.R16F),J===n.UNSIGNED_BYTE&&(ye=n.R8)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ye=n.R8UI),J===n.UNSIGNED_SHORT&&(ye=n.R16UI),J===n.UNSIGNED_INT&&(ye=n.R32UI),J===n.BYTE&&(ye=n.R8I),J===n.SHORT&&(ye=n.R16I),J===n.INT&&(ye=n.R32I)),A===n.RG&&(J===n.FLOAT&&(ye=n.RG32F),J===n.HALF_FLOAT&&(ye=n.RG16F),J===n.UNSIGNED_BYTE&&(ye=n.RG8)),A===n.RGBA){let Be=pe?xl:Lt.getTransfer(ge);J===n.FLOAT&&(ye=n.RGBA32F),J===n.HALF_FLOAT&&(ye=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ye=Be===Ft?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function P(I,A,J){return E(I,J)===!0||I.isFramebufferTexture&&I.minFilter!==yn&&I.minFilter!==Fn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function R(I){return I===yn||I===sf||I===oh?n.NEAREST:n.LINEAR}function D(I){let A=I.target;A.removeEventListener("dispose",D),w(A),A.isVideoTexture&&h.delete(A)}function z(I){let A=I.target;A.removeEventListener("dispose",z),F(A)}function w(I){let A=i.get(I);if(A.__webglInit===void 0)return;let J=I.source,ge=d.get(J);if(ge){let pe=ge[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(I),Object.keys(ge).length===0&&d.delete(J)}i.remove(I)}function M(I){let A=i.get(I);n.deleteTexture(A.__webglTexture);let J=I.source,ge=d.get(J);delete ge[A.__cacheKey],a.memory.textures--}function F(I){let A=I.texture,J=i.get(I),ge=i.get(A);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(J.__webglFramebuffer[pe]))for(let ye=0;ye<J.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(J.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(J.__webglFramebuffer[pe]);J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer[pe])}else{if(Array.isArray(J.__webglFramebuffer))for(let pe=0;pe<J.__webglFramebuffer.length;pe++)n.deleteFramebuffer(J.__webglFramebuffer[pe]);else n.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&n.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let pe=0;pe<J.__webglColorRenderbuffer.length;pe++)J.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(J.__webglColorRenderbuffer[pe]);J.__webglDepthRenderbuffer&&n.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let pe=0,ye=A.length;pe<ye;pe++){let Be=i.get(A[pe]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),a.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(I)}let ie=0;function ue(){ie=0}function O(){let I=ie;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),ie+=1,I}function G(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function B(I,A){let J=i.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){let ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,I,A);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function ne(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){re(J,I,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function q(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){re(J,I,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function $(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){ae(J,I,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}let ee={[Ms]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[qh]:n.MIRRORED_REPEAT},j={[yn]:n.NEAREST,[sf]:n.NEAREST_MIPMAP_NEAREST,[oh]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[j0]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},oe={[ly]:n.NEVER,[py]:n.ALWAYS,[cy]:n.LESS,[jp]:n.LEQUAL,[hy]:n.EQUAL,[fy]:n.GEQUAL,[uy]:n.GREATER,[dy]:n.NOTEQUAL};function V(I,A,J){if(J?(n.texParameteri(I,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ee[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,j[A.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Ln||A.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,R(A.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==yn&&A.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===yn||A.minFilter!==oh&&A.minFilter!==Ss||A.type===Xi&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===qa&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(I,A){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",D));let ge=A.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=G(A);if(ye!==I.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,J=!0),pe[ye].usedTimes++;let Be=pe[I.__cacheKey];Be!==void 0&&(pe[I.__cacheKey].usedTimes--,Be.usedTimes===0&&M(A)),I.__cacheKey=ye,I.__webglTexture=pe[ye].texture}return J}function re(I,A,J){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=Z(I,A),ye=A.source;t.bindTexture(ge,I.__webglTexture,n.TEXTURE0+J);let Be=i.get(ye);if(ye.version!==Be.__version||pe===!0){t.activeTexture(n.TEXTURE0+J);let we=Lt.getPrimaries(Lt.workingColorSpace),Ne=A.colorSpace===oi?null:Lt.getPrimaries(A.colorSpace),Ye=A.colorSpace===oi||we===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ut=f(A)&&m(A.image)===!1,me=x(A.image,ut,!1,s.maxTextureSize);me=ht(A,me);let St=m(me)||o,pt=r.convert(A.format,A.colorSpace),Qe=r.convert(A.type),We=N(A.internalFormat,pt,Qe,A.colorSpace,A.isVideoTexture);V(ge,A,St);let De,at=A.mipmaps,Mt=o&&A.isVideoTexture!==!0&&We!==Xp,Ot=Be.__version===void 0||pe===!0,dt=P(A,me,St);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,o?A.type===Xi?We=n.DEPTH_COMPONENT32F:A.type===vs?We=n.DEPTH_COMPONENT24:A.type===tr?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===nr&&We===n.DEPTH_COMPONENT&&A.type!==Su&&A.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=vs,Qe=r.convert(A.type)),A.format===Jr&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==tr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=tr,Qe=r.convert(A.type))),Ot&&(Mt?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,Qe,null));else if(A.isDataTexture)if(at.length>0&&St){Mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,Qe,De.data):t.texImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,pt,Qe,De.data);A.generateMipmaps=!1}else Mt?(Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,pt,Qe,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,Qe,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Mt&&Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,at[0].width,at[0].height,me.depth);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],A.format!==ai?pt!==null?Mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,me.depth,pt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,We,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,me.depth,pt,Qe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,We,De.width,De.height,me.depth,0,pt,Qe,De.data)}else{Mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],A.format!==ai?pt!==null?Mt?t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,Qe,De.data):t.texImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,pt,Qe,De.data)}else if(A.isDataArrayTexture)Mt?(Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,pt,Qe,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,pt,Qe,me.data);else if(A.isData3DTexture)Mt?(Ot&&t.texStorage3D(n.TEXTURE_3D,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,pt,Qe,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,pt,Qe,me.data);else if(A.isFramebufferTexture){if(Ot)if(Mt)t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height);else{let xe=me.width,k=me.height;for(let Me=0;Me<dt;Me++)t.texImage2D(n.TEXTURE_2D,Me,We,xe,k,0,pt,Qe,null),xe>>=1,k>>=1}}else if(at.length>0&&St){Mt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,pt,Qe,De):t.texImage2D(n.TEXTURE_2D,xe,We,pt,Qe,De);A.generateMipmaps=!1}else Mt?(Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Qe,me)):t.texImage2D(n.TEXTURE_2D,0,We,pt,Qe,me);E(A,St)&&b(ge),Be.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ae(I,A,J){if(A.image.length!==6)return;let ge=Z(I,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+J);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+J);let Be=Lt.getPrimaries(Lt.workingColorSpace),we=A.colorSpace===oi?null:Lt.getPrimaries(A.colorSpace),Ne=A.colorSpace===oi||Be===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,me=[];for(let xe=0;xe<6;xe++)!Ye&&!ut?me[xe]=x(A.image[xe],!1,!0,s.maxCubemapSize):me[xe]=ut?A.image[xe].image:A.image[xe],me[xe]=ht(A,me[xe]);let St=me[0],pt=m(St)||o,Qe=r.convert(A.format,A.colorSpace),We=r.convert(A.type),De=N(A.internalFormat,Qe,We,A.colorSpace),at=o&&A.isVideoTexture!==!0,Mt=ye.__version===void 0||ge===!0,Ot=P(A,St,pt);V(n.TEXTURE_CUBE_MAP,A,pt);let dt;if(Ye){at&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,De,St.width,St.height);for(let xe=0;xe<6;xe++){dt=me[xe].mipmaps;for(let k=0;k<dt.length;k++){let Me=dt[k];A.format!==ai?Qe!==null?at?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,0,0,Me.width,Me.height,Qe,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,0,0,Me.width,Me.height,Qe,We,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,De,Me.width,Me.height,0,Qe,We,Me.data)}}}else{dt=A.mipmaps,at&&Mt&&(dt.length>0&&Ot++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,De,me[0].width,me[0].height));for(let xe=0;xe<6;xe++)if(ut){at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,me[xe].width,me[xe].height,Qe,We,me[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,me[xe].width,me[xe].height,0,Qe,We,me[xe].data);for(let k=0;k<dt.length;k++){let Se=dt[k].image[xe].image;at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,0,0,Se.width,Se.height,Qe,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,De,Se.width,Se.height,0,Qe,We,Se.data)}}else{at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Qe,We,me[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,Qe,We,me[xe]);for(let k=0;k<dt.length;k++){let Me=dt[k];at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,0,0,Qe,We,Me.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,De,Qe,We,Me.image[xe])}}}E(A,pt)&&b(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ce(I,A,J,ge,pe,ye){let Be=r.convert(J.format,J.colorSpace),we=r.convert(J.type),Ne=N(J.internalFormat,Be,we,J.colorSpace);if(!i.get(A).__hasExternalTextures){let ut=Math.max(1,A.width>>ye),me=Math.max(1,A.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,ut,me,A.depth,0,Be,we,null):t.texImage2D(pe,ye,Ne,ut,me,0,Be,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(J).__webglTexture,0,it(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(J).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(I,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let ge=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(J||Oe(A)){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Xi?ge=n.DEPTH_COMPONENT32F:pe.type===vs&&(ge=n.DEPTH_COMPONENT24));let ye=it(A);Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){let ge=it(A);J&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],Be=r.convert(ye.format,ye.colorSpace),we=r.convert(ye.type),Ne=N(ye.internalFormat,Be,we,ye.colorSpace),Ye=it(A);J&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ne,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);let ge=i.get(A.depthTexture).__webglTexture,pe=it(A);if(A.depthTexture.format===nr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===Jr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ge(I){let A=i.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ve(A.__webglFramebuffer,I)}else if(J){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=n.createRenderbuffer(),Le(A.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Le(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(I,A,J){let ge=i.get(I);A!==void 0&&ce(ge.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Ge(I)}function X(I){let A=I.texture,J=i.get(I),ge=i.get(A);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,a.memory.textures++);let pe=I.isWebGLCubeRenderTarget===!0,ye=I.isWebGLMultipleRenderTargets===!0,Be=m(I)||o;if(pe){J.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[we]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)J.__webglFramebuffer[we][Ne]=n.createFramebuffer()}else J.__webglFramebuffer[we]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)J.__webglFramebuffer[we]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let we=I.texture;for(let Ne=0,Ye=we.length;Ne<Ye;Ne++){let ut=i.get(we[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&Oe(I)===!1){let we=ye?A:[A];J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<we.length;Ne++){let Ye=we[Ne];J.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);let ut=r.convert(Ye.format,Ye.colorSpace),me=r.convert(Ye.type),St=N(Ye.internalFormat,ut,me,Ye.colorSpace,I.isXRRenderTarget===!0),pt=it(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,St,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),V(n.TEXTURE_CUBE_MAP,A,Be);for(let we=0;we<6;we++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ce(J.__webglFramebuffer[we][Ne],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else ce(J.__webglFramebuffer[we],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);E(A,Be)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let we=I.texture;for(let Ne=0,Ye=we.length;Ne<Ye;Ne++){let ut=we[Ne],me=i.get(ut);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),V(n.TEXTURE_2D,ut,Be),ce(J.__webglFramebuffer,I,ut,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),E(ut,Be)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?we=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,ge.__webglTexture),V(we,A,Be),o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ce(J.__webglFramebuffer[Ne],I,A,n.COLOR_ATTACHMENT0,we,Ne);else ce(J.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,we,0);E(A,Be)&&b(we),t.unbindTexture()}I.depthBuffer&&Ge(I)}function mn(I){let A=m(I)||o,J=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,pe=J.length;ge<pe;ge++){let ye=J[ge];if(E(ye,A)){let Be=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ye).__webglTexture;t.bindTexture(Be,we),b(Be),t.unbindTexture()}}}function qe(I){if(o&&I.samples>0&&Oe(I)===!1){let A=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],J=I.width,ge=I.height,pe=n.COLOR_BUFFER_BIT,ye=[],Be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(I),Ne=I.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){ye.push(n.COLOR_ATTACHMENT0+Ye),I.depthBuffer&&ye.push(Be);let ut=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(ut===!1&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]),ut===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Ne){let me=i.get(A[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,J,ge,0,0,J,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]);let ut=i.get(A[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function it(I){return Math.min(s.maxSamples,I.samples)}function Oe(I){let A=i.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ht(I,A){let J=I.colorSpace,ge=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Yh||J!==ji&&J!==oi&&(Lt.getTransfer(J)===Ft?o===!1?e.has("EXT_sRGB")===!0&&ge===ai?(I.format=Yh,I.minFilter=Fn,I.generateMipmaps=!1):A=El.sRGBToLinear(A):(ge!==ai||pe!==bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=ue,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=gt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=mn,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Oe}function g1(n,e,t){let i=t.isWebGL2;function s(r,a=oi){let o,l=Lt.getTransfer(a);if(r===bs)return n.UNSIGNED_BYTE;if(r===Vp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Gp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Z0)return n.BYTE;if(r===J0)return n.SHORT;if(r===Su)return n.UNSIGNED_SHORT;if(r===Hp)return n.INT;if(r===vs)return n.UNSIGNED_INT;if(r===Xi)return n.FLOAT;if(r===qa)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===K0)return n.ALPHA;if(r===ai)return n.RGBA;if(r===Q0)return n.LUMINANCE;if(r===ey)return n.LUMINANCE_ALPHA;if(r===nr)return n.DEPTH_COMPONENT;if(r===Jr)return n.DEPTH_STENCIL;if(r===Yh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ty)return n.RED;if(r===Wp)return n.RED_INTEGER;if(r===ny)return n.RG;if(r===$p)return n.RG_INTEGER;if(r===qp)return n.RGBA_INTEGER;if(r===lh||r===ch||r===hh||r===uh)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rf||r===af||r===of||r===lf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===af)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===of)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cf||r===hf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===cf)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===uf||r===df||r===ff||r===pf||r===mf||r===gf||r===yf||r===vf||r===_f||r===xf||r===bf||r===Mf||r===Sf||r===wf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===uf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===df)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ff)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_f)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dh||r===Ef||r===Tf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===dh)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ef)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===iy||r===Af||r===Cf||r===Rf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===dh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Af)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===tr?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var lu=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pn=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},y1={type:"move"},$a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cu=class extends ws{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=t.getContextAttributes(),m=null,f=null,E=[],b=[],N=new et,P=null,R=new en;R.layers.enable(1),R.viewport=new xt;let D=new en;D.layers.enable(2),D.viewport=new xt;let z=[R,D],w=new lu;w.layers.enable(1),w.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=E[V];return Z===void 0&&(Z=new $a,E[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=E[V];return Z===void 0&&(Z=new $a,E[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=E[V];return Z===void 0&&(Z=new $a,E[V]=Z),Z.getHandSpace()};function ie(V){let Z=b.indexOf(V.inputSource);if(Z===-1)return;let re=E[Z];re!==void 0&&(re.update(V.inputSource,V.frame,c||a),re.dispatchEvent({type:V.type,data:V.inputSource}))}function ue(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",O);for(let V=0;V<E.length;V++){let Z=b[V];Z!==null&&(b[V]=null,E[V].disconnect(Z))}M=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Zi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:bs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,re=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=x.stencil?Jr:nr,re=x.stencil?tr:vs);let ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Zi(d.textureWidth,d.textureHeight,{format:ai,type:bs,depthTexture:new Dl(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(V){for(let Z=0;Z<V.removed.length;Z++){let re=V.removed[Z],ae=b.indexOf(re);ae>=0&&(b[ae]=null,E[ae].disconnect(re))}for(let Z=0;Z<V.added.length;Z++){let re=V.added[Z],ae=b.indexOf(re);if(ae===-1){for(let Le=0;Le<E.length;Le++)if(Le>=b.length){b.push(re),ae=Le;break}else if(b[Le]===null){b[Le]=re,ae=Le;break}if(ae===-1)break}let ce=E[ae];ce&&ce.connect(re)}}let G=new U,B=new U;function ne(V,Z,re){G.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);let ae=G.distanceTo(B),ce=Z.projectionMatrix.elements,Le=re.projectionMatrix.elements,Ve=ce[14]/(ce[10]-1),Ge=ce[14]/(ce[10]+1),gt=(ce[9]+1)/ce[5],X=(ce[9]-1)/ce[5],mn=(ce[8]-1)/ce[0],qe=(Le[8]+1)/Le[0],it=Ve*mn,Oe=Ve*qe,It=ae/(-mn+qe),ht=It*-mn;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ht),V.translateZ(It),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let I=Ve+It,A=Ge+It,J=it-ht,ge=Oe+(ae-ht),pe=gt*Ge/A*I,ye=X*Ge/A*I;V.projectionMatrix.makePerspective(J,ge,pe,ye,I,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;w.near=D.near=R.near=V.near,w.far=D.far=R.far=V.far,(M!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),M=w.near,F=w.far);let Z=V.parent,re=w.cameras;q(w,Z);for(let ae=0;ae<re.length;ae++)q(re[ae],Z);re.length===2?ne(w,R,D):w.projectionMatrix.copy(R.projectionMatrix),$(V,w,Z)};function $(V,Z,re){re===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Kr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let ee=null;function j(V,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;re.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let ce=0;ce<re.length;ce++){let Le=re[ce],Ve=null;if(p!==null)Ve=p.getViewport(Le);else{let gt=u.getViewSubImage(d,Le);Ve=gt.viewport,ce===0&&(e.setRenderTargetTextures(f,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(f))}let Ge=z[ce];Ge===void 0&&(Ge=new en,Ge.layers.enable(ce),Ge.viewport=new xt,z[ce]=Ge),Ge.matrix.fromArray(Le.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Le.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ce===0&&(w.matrix.copy(Ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(Ge)}}for(let re=0;re<E.length;re++){let ae=b[re],ce=E[re];ae!==null&&ce!==void 0&&ce.update(ae,Z,c||a)}ee&&ee(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let oe=new Qp;oe.setAnimationLoop(j),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}};function v1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Kp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,N){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,N)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){let N=b.program;i.uniformBlockBinding(E,N)}function c(E,b){let N=s[E.id];N===void 0&&(g(E),N=h(E),s[E.id]=N,E.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(E,P);let R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){let b=u();E.__bindingPointIndex=b;let N=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,N),N}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],N=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,D=N.length;R<D;R++){let z=Array.isArray(N[R])?N[R]:[N[R]];for(let w=0,M=z.length;w<M;w++){let F=z[w];if(p(F,R,w,P)===!0){let ie=F.__offset,ue=Array.isArray(F.value)?F.value:[F.value],O=0;for(let G=0;G<ue.length;G++){let B=ue[G],ne=x(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,ie+O,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,N,P){let R=E.value,D=b+"_"+N;if(P[D]===void 0)return typeof R=="number"||typeof R=="boolean"?P[D]=R:P[D]=R.clone(),!0;{let z=P[D];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return P[D]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(E){let b=E.uniforms,N=0,P=16;for(let D=0,z=b.length;D<z;D++){let w=Array.isArray(b[D])?b[D]:[b[D]];for(let M=0,F=w.length;M<F;M++){let ie=w[M],ue=Array.isArray(ie.value)?ie.value:[ie.value];for(let O=0,G=ue.length;O<G;O++){let B=ue[O],ne=x(B),q=N%P;q!==0&&P-q<ne.boundary&&(N+=P-q),ie.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=N,N+=ne.storage}}}let R=N%P;return R>0&&(N+=P-R),E.__size=N,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let N=a.indexOf(b.__bindingPointIndex);a.splice(N,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ja=class{constructor(e={}){let{canvas:t=Ry(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=xs,this.toneMappingExposure=1;let b=this,N=!1,P=0,R=0,D=null,z=-1,w=null,M=new xt,F=new xt,ie=null,ue=new lt(0),O=0,G=t.width,B=t.height,ne=1,q=null,$=null,ee=new xt(0,0,G,B),j=new xt(0,0,G,B),oe=!1,V=new Za,Z=!1,re=!1,ae=null,ce=new ct,Le=new et,Ve=new U,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?ne:1}let X=i;function mn(L,W){for(let K=0;K<L.length;K++){let te=L[K],Y=t.getContext(te,W);if(Y!==null)return Y}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Me,!1),X===null){let W=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&W.shift(),X=mn(W,L),X===null)throw mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let qe,it,Oe,It,ht,I,A,J,ge,pe,ye,Be,we,Ne,Ye,ut,me,St,pt,Qe,We,De,at,Mt;function Ot(){qe=new Fx(X),it=new Ix(X,qe,e),qe.init(it),De=new g1(X,qe,it),Oe=new p1(X,qe,it),It=new Hx(X),ht=new n1,I=new m1(X,qe,Oe,ht,it,De,It),A=new Dx(b),J=new kx(b),ge=new jy(X,it),at=new Lx(X,qe,ge,it),pe=new Bx(X,ge,It,at),ye=new $x(X,pe,ge,It),pt=new Wx(X,it,I),ut=new Nx(ht),Be=new t1(b,A,J,qe,it,at,ut),we=new v1(b,ht),Ne=new s1,Ye=new h1(qe,it),St=new Rx(b,A,J,Oe,ye,d,l),me=new f1(b,ye,it),Mt=new _1(X,It,it,Oe),Qe=new Px(X,qe,It,it),We=new zx(X,qe,It,it),It.programs=Be.programs,b.capabilities=it,b.extensions=qe,b.properties=ht,b.renderLists=Ne,b.shadowMap=me,b.state=Oe,b.info=It}Ot();let dt=new cu(b,X);this.xr=dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=qe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=qe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(L){L!==void 0&&(ne=L,this.setSize(G,B,!1))},this.getSize=function(L){return L.set(G,B)},this.setSize=function(L,W,K=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,B=W,t.width=Math.floor(L*ne),t.height=Math.floor(W*ne),K===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(G*ne,B*ne).floor()},this.setDrawingBufferSize=function(L,W,K){G=L,B=W,ne=K,t.width=Math.floor(L*K),t.height=Math.floor(W*K),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,W,K,te){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,W,K,te),Oe.viewport(M.copy(ee).multiplyScalar(ne).floor())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,W,K,te){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,W,K,te),Oe.scissor(F.copy(j).multiplyScalar(ne).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){Oe.setScissorTest(oe=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){$=L},this.getClearColor=function(L){return L.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(L=!0,W=!0,K=!0){let te=0;if(L){let Y=!1;if(D!==null){let Ce=D.texture.format;Y=Ce===qp||Ce===$p||Ce===Wp}if(Y){let Ce=D.texture.type,Re=Ce===bs||Ce===vs||Ce===Su||Ce===tr||Ce===Vp||Ce===Gp,ze=St.getClearColor(),je=St.getClearAlpha(),ot=ze.r,st=ze.g,rt=ze.b;Re?(p[0]=ot,p[1]=st,p[2]=rt,p[3]=je,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=ot,g[1]=st,g[2]=rt,g[3]=je,X.clearBufferiv(X.COLOR,0,g))}else te|=X.COLOR_BUFFER_BIT}W&&(te|=X.DEPTH_BUFFER_BIT),K&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),Ye.dispose(),ht.dispose(),A.dispose(),J.dispose(),ye.dispose(),at.dispose(),Mt.dispose(),Be.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",hn),dt.removeEventListener("sessionend",Ct),ae&&(ae.dispose(),ae=null),gn.stop()};function xe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let L=It.autoReset,W=me.enabled,K=me.autoUpdate,te=me.needsUpdate,Y=me.type;Ot(),It.autoReset=L,me.enabled=W,me.autoUpdate=K,me.needsUpdate=te,me.type=Y}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){let W=L.target;W.removeEventListener("dispose",Se),Ke(W)}function Ke(L){Xe(L),ht.remove(L)}function Xe(L){let W=ht.get(L).programs;W!==void 0&&(W.forEach(function(K){Be.releaseProgram(K)}),L.isShaderMaterial&&Be.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,K,te,Y,Ce){W===null&&(W=Ge);let Re=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=ih(L,W,K,te,Y);Oe.setMaterial(te,Re);let je=K.index,ot=1;if(te.wireframe===!0){if(je=pe.getWireframeAttribute(K),je===void 0)return;ot=2}let st=K.drawRange,rt=K.attributes.position,Wt=st.start*ot,Un=(st.start+st.count)*ot;Ce!==null&&(Wt=Math.max(Wt,Ce.start*ot),Un=Math.min(Un,(Ce.start+Ce.count)*ot)),je!==null?(Wt=Math.max(Wt,0),Un=Math.min(Un,je.count)):rt!=null&&(Wt=Math.max(Wt,0),Un=Math.min(Un,rt.count));let Kt=Un-Wt;if(Kt<0||Kt===1/0)return;at.setup(Y,te,ze,K,je);let si,Nt=Qe;if(je!==null&&(si=ge.get(je),Nt=We,Nt.setIndex(si)),Y.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*gt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(Y.isLine){let nt=te.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*gt()),Y.isLineSegments?Nt.setMode(X.LINES):Y.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else Y.isPoints?Nt.setMode(X.POINTS):Y.isSprite&&Nt.setMode(X.TRIANGLES);if(Y.isBatchedMesh)Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Nt.renderInstances(Wt,Kt,Y.count);else if(K.isInstancedBufferGeometry){let nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ra=Math.min(K.instanceCount,nt);Nt.renderInstances(Wt,Kt,Ra)}else Nt.render(Wt,Kt)};function Et(L,W,K){L.transparent===!0&&L.side===zn&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,Mr(L,W,K),L.side=$n,L.needsUpdate=!0,Mr(L,W,K),L.side=zn):Mr(L,W,K)}this.compile=function(L,W,K=null){K===null&&(K=L),m=Ye.get(K),m.init(),E.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),L!==K&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(b._useLegacyLights);let te=new Set;return L.traverse(function(Y){let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Re=0;Re<Ce.length;Re++){let ze=Ce[Re];Et(ze,K,Y),te.add(ze)}else Et(Ce,K,Y),te.add(Ce)}),E.pop(),m=null,te},this.compileAsync=function(L,W,K=null){let te=this.compile(L,W,K);return new Promise(Y=>{function Ce(){if(te.forEach(function(Re){ht.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){Y(L);return}setTimeout(Ce,10)}qe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let At=null;function wt(L){At&&At(L)}function hn(){gn.stop()}function Ct(){gn.start()}let gn=new Qp;gn.setAnimationLoop(wt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(L){At=L,dt.setAnimationLoop(L),L===null?gn.stop():gn.start()},dt.addEventListener("sessionstart",hn),dt.addEventListener("sessionend",Ct),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(W),W=dt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,W,D),m=Ye.get(L,E.length),m.init(),E.push(m),ce.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(ce),re=this.localClippingEnabled,Z=ut.init(this.clippingPlanes,re),x=Ne.get(L,f.length),x.init(),f.push(x),ii(L,W,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(q,$),this.info.render.frame++,Z===!0&&ut.beginShadows();let K=m.state.shadowsArray;if(me.render(K,L,W),Z===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(x,L),m.setupLights(b._useLegacyLights),W.isArrayCamera){let te=W.cameras;for(let Y=0,Ce=te.length;Y<Ce;Y++){let Re=te[Y];Oo(x,L,Re,Re.viewport)}}else Oo(x,L,W);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(b,L,W),at.resetDefaultState(),z=-1,w=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ii(L,W,K,te){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){te&&Ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);let Re=ye.update(L),ze=L.material;ze.visible&&x.push(L,Re,ze,K,Ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||V.intersectsObject(L))){let Re=ye.update(L),ze=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ve.copy(L.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(ze)){let je=Re.groups;for(let ot=0,st=je.length;ot<st;ot++){let rt=je[ot],Wt=ze[rt.materialIndex];Wt&&Wt.visible&&x.push(L,Re,Wt,K,Ve.z,rt)}}else ze.visible&&x.push(L,Re,ze,K,Ve.z,null)}}let Ce=L.children;for(let Re=0,ze=Ce.length;Re<ze;Re++)ii(Ce[Re],W,K,te)}function Oo(L,W,K,te){let Y=L.opaque,Ce=L.transmissive,Re=L.transparent;m.setupLightsView(K),Z===!0&&ut.setGlobalState(b.clippingPlanes,K),Ce.length>0&&nh(Y,Ce,W,K),te&&Oe.viewport(M.copy(te)),Y.length>0&&br(Y,W,K),Ce.length>0&&br(Ce,W,K),Re.length>0&&br(Re,W,K),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function nh(L,W,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ce=it.isWebGL2;ae===null&&(ae=new Zi(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?qa:bs,minFilter:Ss,samples:Ce?4:0})),b.getDrawingBufferSize(Le),Ce?ae.setSize(Le.x,Le.y):ae.setSize(wl(Le.x),wl(Le.y));let Re=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(ue),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();let ze=b.toneMapping;b.toneMapping=xs,br(L,K,te),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae);let je=!1;for(let ot=0,st=W.length;ot<st;ot++){let rt=W[ot],Wt=rt.object,Un=rt.geometry,Kt=rt.material,si=rt.group;if(Kt.side===zn&&Wt.layers.test(te.layers)){let Nt=Kt.side;Kt.side=fn,Kt.needsUpdate=!0,Aa(Wt,K,te,Un,Kt,si),Kt.side=Nt,Kt.needsUpdate=!0,je=!0}}je===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),b.setRenderTarget(Re),b.setClearColor(ue,O),b.toneMapping=ze}function br(L,W,K){let te=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ce=L.length;Y<Ce;Y++){let Re=L[Y],ze=Re.object,je=Re.geometry,ot=te===null?Re.material:te,st=Re.group;ze.layers.test(K.layers)&&Aa(ze,W,K,je,ot,st)}}function Aa(L,W,K,te,Y,Ce){L.onBeforeRender(b,W,K,te,Y,Ce),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(b,W,K,te,L,Ce),Y.transparent===!0&&Y.side===zn&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,b.renderBufferDirect(K,W,te,Y,L,Ce),Y.side=$n,Y.needsUpdate=!0,b.renderBufferDirect(K,W,te,Y,L,Ce),Y.side=zn):b.renderBufferDirect(K,W,te,Y,L,Ce),L.onAfterRender(b,W,K,te,Y,Ce)}function Mr(L,W,K){W.isScene!==!0&&(W=Ge);let te=ht.get(L),Y=m.state.lights,Ce=m.state.shadowsArray,Re=Y.state.version,ze=Be.getParameters(L,Y.state,Ce,W,K),je=Be.getProgramCacheKey(ze),ot=te.programs;te.environment=L.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(L.isMeshStandardMaterial?J:A).get(L.envMap||te.environment),ot===void 0&&(L.addEventListener("dispose",Se),ot=new Map,te.programs=ot);let st=ot.get(je);if(st!==void 0){if(te.currentProgram===st&&te.lightsStateVersion===Re)return ko(L,ze),st}else ze.uniforms=Be.getUniforms(L),L.onBuild(K,ze,b),L.onBeforeCompile(ze,b),st=Be.acquireProgram(ze,je),ot.set(je,st),te.uniforms=ze.uniforms;let rt=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=ut.uniform),ko(L,ze),te.needsLights=rh(L),te.lightsStateVersion=Re,te.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=st,te.uniformsList=null,st}function Ca(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=Yr.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function ko(L,W){let K=ht.get(L);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function ih(L,W,K,te,Y){W.isScene!==!0&&(W=Ge),I.resetTextureUnits();let Ce=W.fog,Re=te.isMeshStandardMaterial?W.environment:null,ze=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ji,je=(te.isMeshStandardMaterial?J:A).get(te.envMap||Re),ot=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,st=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!K.morphAttributes.position,Wt=!!K.morphAttributes.normal,Un=!!K.morphAttributes.color,Kt=xs;te.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Kt=b.toneMapping);let si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Nt=si!==void 0?si.length:0,nt=ht.get(te),Ra=m.state.lights;if(Z===!0&&(re===!0||L!==w)){let Tn=L===w&&te.id===z;ut.setState(te,L,Tn)}let kt=!1;te.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ra.state.version||nt.outputColorSpace!==ze||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||nt.envMap!==je||te.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ut.numPlanes||nt.numIntersection!==ut.numIntersection)||nt.vertexAlphas!==ot||nt.vertexTangents!==st||nt.morphTargets!==rt||nt.morphNormals!==Wt||nt.morphColors!==Un||nt.toneMapping!==Kt||it.isWebGL2===!0&&nt.morphTargetsCount!==Nt)&&(kt=!0):(kt=!0,nt.__version=te.version);let ki=nt.currentProgram;kt===!0&&(ki=Mr(te,W,Y));let La=!1,qs=!1,Pa=!1,un=ki.getUniforms(),wi=nt.uniforms;if(Oe.useProgram(ki.program)&&(La=!0,qs=!0,Pa=!0),te.id!==z&&(z=te.id,qs=!0),La||w!==L){un.setValue(X,"projectionMatrix",L.projectionMatrix),un.setValue(X,"viewMatrix",L.matrixWorldInverse);let Tn=un.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,Ve.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&un.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&un.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,qs=!0,Pa=!0)}if(Y.isSkinnedMesh){un.setOptional(X,Y,"bindMatrix"),un.setOptional(X,Y,"bindMatrixInverse");let Tn=Y.skeleton;Tn&&(it.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),un.setValue(X,"boneTexture",Tn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(un.setOptional(X,Y,"batchingTexture"),un.setValue(X,"batchingTexture",Y._matricesTexture,I));let $t=K.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0&&it.isWebGL2===!0)&&pt.update(Y,K,ki),(qs||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,un.setValue(X,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(wi.envMap.value=je,wi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),qs&&(un.setValue(X,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&sh(wi,Pa),Ce&&te.fog===!0&&we.refreshFogUniforms(wi,Ce),we.refreshMaterialUniforms(wi,te,ne,B,ae),Yr.upload(X,Ca(nt),wi,I)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Yr.upload(X,Ca(nt),wi,I),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&un.setValue(X,"center",Y.center),un.setValue(X,"modelViewMatrix",Y.modelViewMatrix),un.setValue(X,"normalMatrix",Y.normalMatrix),un.setValue(X,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Tn=te.uniformsGroups;for(let Ia=0,Fo=Tn.length;Ia<Fo;Ia++)if(it.isWebGL2){let Na=Tn[Ia];Mt.update(Na,ki),Mt.bind(Na,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function sh(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function rh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,W,K){ht.get(L.texture).__webglTexture=W,ht.get(L.depthTexture).__webglTexture=K;let te=ht.get(L);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,W){let K=ht.get(L);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,K=0){D=L,P=W,R=K;let te=!0,Y=null,Ce=!1,Re=!1;if(L){let je=ht.get(L);je.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(X.FRAMEBUFFER,null),te=!1):je.__webglFramebuffer===void 0?I.setupRenderTarget(L):je.__hasExternalTextures&&I.rebindTextures(L,ht.get(L.texture).__webglTexture,ht.get(L.depthTexture).__webglTexture);let ot=L.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Re=!0);let st=ht.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[W])?Y=st[W][K]:Y=st[W],Ce=!0):it.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?Y=ht.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[K]:Y=st,M.copy(L.viewport),F.copy(L.scissor),ie=L.scissorTest}else M.copy(ee).multiplyScalar(ne).floor(),F.copy(j).multiplyScalar(ne).floor(),ie=oe;if(Oe.bindFramebuffer(X.FRAMEBUFFER,Y)&&it.drawBuffers&&te&&Oe.drawBuffers(L,Y),Oe.viewport(M),Oe.scissor(F),Oe.setScissorTest(ie),Ce){let je=ht.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,je.__webglTexture,K)}else if(Re){let je=ht.get(L.texture),ot=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.__webglTexture,K||0,ot)}z=-1},this.readRenderTargetPixels=function(L,W,K,te,Y,Ce,Re){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ht.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){Oe.bindFramebuffer(X.FRAMEBUFFER,ze);try{let je=L.texture,ot=je.format,st=je.type;if(ot!==ai&&De.convert(ot)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=st===qa&&(qe.has("EXT_color_buffer_half_float")||it.isWebGL2&&qe.has("EXT_color_buffer_float"));if(st!==bs&&De.convert(st)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===Xi&&(it.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-te&&K>=0&&K<=L.height-Y&&X.readPixels(W,K,te,Y,De.convert(ot),De.convert(st),Ce)}finally{let je=D!==null?ht.get(D).__webglFramebuffer:null;Oe.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(L,W,K=0){let te=Math.pow(2,-K),Y=Math.floor(W.image.width*te),Ce=Math.floor(W.image.height*te);I.setTexture2D(W,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,L.x,L.y,Y,Ce),Oe.unbindTexture()},this.copyTextureToTexture=function(L,W,K,te=0){let Y=W.image.width,Ce=W.image.height,Re=De.convert(K.format),ze=De.convert(K.type);I.setTexture2D(K,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,Y,Ce,Re,ze,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,te,L.x,L.y,W.mipmaps[0].width,W.mipmaps[0].height,Re,W.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,Re,ze,W.image),te===0&&K.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(L,W,K,te,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=L.max.x-L.min.x+1,Re=L.max.y-L.min.y+1,ze=L.max.z-L.min.z+1,je=De.convert(te.format),ot=De.convert(te.type),st;if(te.isData3DTexture)I.setTexture3D(te,0),st=X.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)I.setTexture2DArray(te,0),st=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,te.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,te.unpackAlignment);let rt=X.getParameter(X.UNPACK_ROW_LENGTH),Wt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Un=X.getParameter(X.UNPACK_SKIP_PIXELS),Kt=X.getParameter(X.UNPACK_SKIP_ROWS),si=X.getParameter(X.UNPACK_SKIP_IMAGES),Nt=K.isCompressedTexture?K.mipmaps[Y]:K.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Nt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,je,ot,Nt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,je,Nt.data)):X.texSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,je,ot,Nt),X.pixelStorei(X.UNPACK_ROW_LENGTH,rt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Wt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Un),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,si),Y===0&&te.generateMipmaps&&X.generateMipmap(st),Oe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Oe.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,Oe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?ir:Yp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ir?Xt:ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},hu=class extends Ja{};hu.prototype.isWebGL1Renderer=!0;var sr=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ul=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new U,ci=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},na=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zr,Fa=new U,Hr=new U,Vr=new U,Gr=new et,Ba=new et,rm=new ct,hl=new U,za=new U,ul=new U,_p=new et,Oh=new et,xp=new et,Ka=class extends jt{constructor(e=new na){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Xn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ul(t,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new ci(i,3,0,!1)),zr.setAttribute("uv",new ci(i,2,3,!1))}this.geometry=zr,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),rm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;dl(hl.set(-.5,-.5,0),Vr,a,Hr,s,r),dl(za.set(.5,-.5,0),Vr,a,Hr,s,r),dl(ul.set(.5,.5,0),Vr,a,Hr,s,r),_p.set(0,0),Oh.set(1,0),xp.set(1,1);let o=e.ray.intersectTriangle(hl,za,ul,!1,Fa);if(o===null&&(dl(za.set(-.5,.5,0),Vr,a,Hr,s,r),Oh.set(0,1),o=e.ray.intersectTriangle(hl,ul,za,!1,Fa),o===null))return;let l=e.ray.origin.distanceTo(Fa);l<e.near||l>e.far||t.push({distance:l,point:Fa.clone(),uv:er.getInterpolation(Fa,hl,za,ul,_p,Oh,xp,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function dl(n,e,t,i,s,r){Gr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ba.x=r*Gr.x-s*Gr.y,Ba.y=s*Gr.x+r*Gr.y):Ba.copy(Gr),n.copy(e),n.x+=Ba.x,n.y+=Ba.y,n.applyMatrix4(rm)}var bp=new U,Mp=new xt,Sp=new xt,x1=new U,wp=new ct,fl=new U,kh=new li,Ep=new ct,Fh=new Qr,Ol=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fl),this.boundingBox.expandByPoint(fl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fl),this.boundingSphere.expandByPoint(fl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kh.copy(this.boundingSphere),kh.applyMatrix4(s),e.ray.intersectsSphere(kh)!==!1&&(Ep.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(Ep),!(this.boundingBox!==null&&Fh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Mp.fromBufferAttribute(s.attributes.skinIndex,e),Sp.fromBufferAttribute(s.attributes.skinWeight,e),bp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Sp.getComponent(r);if(a!==0){let o=Mp.getComponent(r);wp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(x1.copy(bp).applyMatrix4(wp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Qa=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kl=class extends qn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=yn,h=yn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tp=new ct,b1=new ct,Fl=class n{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:b1;Tp.multiplyMatrices(o,t[r]),Tp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new kl(t,e,e,ai,Xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Qa),this.bones.push(a),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var ia=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ap=new U,Cp=new U,Rp=new ct,Bh=new Qr,pl=new li,eo=class extends jt{constructor(e=new Xn,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ap.fromBufferAttribute(t,s-1),Cp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ap.distanceTo(Cp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;Rp.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(Rp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let b=f,N=E-1;b<N;b+=p){let P=g.getX(b),R=g.getX(b+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,R),Bh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let b=f,N=E-1;b<N;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),Bh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Lp=new U,Pp=new U,Bl=class extends eo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Lp.fromBufferAttribute(t,s),Pp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lp.distanceTo(Pp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sa=class extends qn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zl=class n extends Xn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){let E=[],b=f/i,N=0;f===0&&a===0?N=.5/t:f===i&&l===Math.PI&&(N=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(R+N,1-b),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let b=h[f][E+1],N=h[f][E],P=h[f+1][E],R=h[f+1][E+1];(f!==0||a>0)&&p.push(b,N,R),(f!==i-1||l<Math.PI)&&p.push(N,P,R)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hl=class extends Xn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,x=d+p;g<x;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,E),Ip(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Ip(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ip(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var to=class extends Ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var rr=class extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wu,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ml(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function M1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function S1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Np(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function am(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var ra=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends ra{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lf,endingEnd:Lf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pf:r=e,o=2*t-i;break;case If:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:a=e,l=2*i-t;break;case If:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,N=p*m-p*x;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+E*a[c+P]+b*a[l+P]+N*a[u+P];return r}},du=class extends ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},fu=class extends ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vl:t=this.InterpolantFactoryMethodDiscrete;break;case _l:t=this.InterpolantFactoryMethodLinear;break;case fh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vl;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&M1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=_l;var Es=class extends hi{};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=vl;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends hi{};Vl.prototype.ValueTypeName="color";var aa=class extends hi{};aa.prototype.ValueTypeName="number";var pu=class extends ra{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ki=class extends hi{InterpolantFactoryMethodLinear(e){return new pu(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.DefaultInterpolation=_l;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends hi{};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=vl;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends hi{};Qi.prototype.ValueTypeName="vector";var no=class{constructor(e,t=-1,i,s=sy){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(E1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(hi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=S1(l);l=Np(l,1,h),c=Np(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new aa(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,x){if(p.length!==0){let m=[],f=[];am(p,m,f,g),m.length!==0&&x.push(new u(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(let x in p){let m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){let b=d[g];m.push(b.time),f.push(b.morphTarget===x?1:0)}s.push(new aa(".morphTargetInfluence["+x+"]",m,f))}l=p.length*a}else{let p=".bones["+t[u].name+"]";i(Qi,p+".position",d,"pos",s),i(Ki,p+".quaternion",d,"rot",s),i(Qi,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function w1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return aa;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Vl;case"quaternion":return Ki;case"bool":case"boolean":return Es;case"string":return Ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function E1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=w1(n.type);if(n.times===void 0){let t=[],i=[];am(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Gl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},io=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},T1=new io,Ci=class{constructor(e){this.manager=e!==void 0?e:T1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},mu=class extends Error{constructor(e,t){super(e),this.response=t}},so=class extends Ci{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:i,onError:s});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Wi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,x=0,m=new ReadableStream({start(f){E();function E(){u.read().then(({done:b,value:N})=>{if(b)f.close();else{x+=N.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,D=h.length;R<D;R++){let z=h[R];z.onProgress&&z.onProgress(P)}f.enqueue(N),E()}})}}});return new Response(m)}else throw new mu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Gl.add(e,c);let h=Wi[e];delete Wi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gu=class extends Ci{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Gl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Xa("img");function l(){h(),Gl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Wl=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new kl,o=new so(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ln,a.wrapT=c.wrapT!==void 0?c.wrapT:Ln,a.magFilter=c.magFilter!==void 0?c.magFilter:Fn,a.minFilter=c.minFilter!==void 0?c.minFilter:Fn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Ss),c.mipmapCount===1&&(a.minFilter=Fn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},$l=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=new qn,a=new gu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ar=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ql=class extends ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zh=new ct,Dp=new U,Up=new U,ro=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yu=class extends ro{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xl=class extends ar{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Op=new ct,Ha=new U,Hh=new U,vu=class extends ro{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ha),Hh.copy(i.position),Hh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hh),i.updateMatrixWorld(),s.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Op)}},Yl=class extends ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_u=class extends ro{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jl=class extends ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Jl=class extends Xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Cu="\\[\\]\\.:\\/",A1=new RegExp("["+Cu+"]","g"),Ru="[^"+Cu+"]",C1="[^"+Cu.replace("\\.","")+"]",R1=/((?:WC+[\/:])*)/.source.replace("WC",Ru),L1=/(WCOD+)?/.source.replace("WCOD",C1),P1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),I1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),N1=new RegExp("^"+R1+L1+P1+I1+"$"),D1=["material","materials","bones","map"],xu=class{constructor(e,t,i){let s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A1,"")}static parseTrackName(e){let t=N1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=xu;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NS=new Float32Array(1);var or=class extends Ul{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Kl=class{constructor(e,t,i=0,s=1/0){this.ray=new Qr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return bu(e,this,i,t),i.sort(kp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bu(e[s],this,i,t);return i.sort(kp),i}};function kp(n,e){return n.distance-e.distance}function bu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)bu(s[r],e,t,!0)}}var Fp=new U,gl=new U,Ql=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fp.subVectors(e,this.start),gl.subVectors(this.end,this.start);let i=gl.dot(gl),r=gl.dot(Fp)/i;return t&&(r=Rn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);var ao=class extends Wl{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case x:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ne,q,$,ee){let j,oe,V=q.pixel_size>>3,Z=q.width*q.height*V;if(ne&&(oe=ee.subarray($,$+=q.colormap_length*(q.colormap_size>>3))),B){j=new Uint8Array(Z);let re,ae,ce,Le=0,Ve=new Uint8Array(V);for(;Le<Z;)if(re=ee[$++],ae=(re&127)+1,re&128){for(ce=0;ce<V;++ce)Ve[ce]=ee[$++];for(ce=0;ce<ae;++ce)j.set(Ve,Le+ce*V);Le+=V*ae}else{for(ae*=V,ce=0;ce<ae;++ce)j[Le+ce]=ee[$++];Le+=ae}}else j=ee.subarray($,$+=ne?q.width*q.height:Z);return{pixel_data:j,palettes:oe}}function s(B,ne,q,$,ee,j,oe,V,Z){let re=Z,ae,ce=0,Le,Ve,Ge=M.width;for(Ve=ne;Ve!==$;Ve+=q)for(Le=ee;Le!==oe;Le+=j,ce++)ae=V[ce],B[(Le+Ge*Ve)*4+3]=255,B[(Le+Ge*Ve)*4+2]=re[ae*3+0],B[(Le+Ge*Ve)*4+1]=re[ae*3+1],B[(Le+Ge*Ve)*4+0]=re[ae*3+2];return B}function r(B,ne,q,$,ee,j,oe,V){let Z,re=0,ae,ce,Le=M.width;for(ce=ne;ce!==$;ce+=q)for(ae=ee;ae!==oe;ae+=j,re+=2)Z=V[re+0]+(V[re+1]<<8),B[(ae+Le*ce)*4+0]=(Z&31744)>>7,B[(ae+Le*ce)*4+1]=(Z&992)>>2,B[(ae+Le*ce)*4+2]=(Z&31)<<3,B[(ae+Le*ce)*4+3]=Z&32768?0:255;return B}function a(B,ne,q,$,ee,j,oe,V){let Z=0,re,ae,ce=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=3)B[(re+ce*ae)*4+3]=255,B[(re+ce*ae)*4+2]=V[Z+0],B[(re+ce*ae)*4+1]=V[Z+1],B[(re+ce*ae)*4+0]=V[Z+2];return B}function o(B,ne,q,$,ee,j,oe,V){let Z=0,re,ae,ce=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=4)B[(re+ce*ae)*4+2]=V[Z+0],B[(re+ce*ae)*4+1]=V[Z+1],B[(re+ce*ae)*4+0]=V[Z+2],B[(re+ce*ae)*4+3]=V[Z+3];return B}function l(B,ne,q,$,ee,j,oe,V){let Z,re=0,ae,ce,Le=M.width;for(ce=ne;ce!==$;ce+=q)for(ae=ee;ae!==oe;ae+=j,re++)Z=V[re],B[(ae+Le*ce)*4+0]=Z,B[(ae+Le*ce)*4+1]=Z,B[(ae+Le*ce)*4+2]=Z,B[(ae+Le*ce)*4+3]=255;return B}function c(B,ne,q,$,ee,j,oe,V){let Z=0,re,ae,ce=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=2)B[(re+ce*ae)*4+0]=V[Z+0],B[(re+ce*ae)*4+1]=V[Z+0],B[(re+ce*ae)*4+2]=V[Z+0],B[(re+ce*ae)*4+3]=V[Z+1];return B}function h(B,ne,q,$,ee){let j,oe,V,Z,re,ae;switch((M.flags&E)>>b){default:case R:j=0,V=1,re=ne,oe=0,Z=1,ae=q;break;case N:j=0,V=1,re=ne,oe=q-1,Z=-1,ae=-1;break;case D:j=ne-1,V=-1,re=-1,oe=0,Z=1,ae=q;break;case P:j=ne-1,V=-1,re=-1,oe=q-1,Z=-1,ae=-1;break}if(ue)switch(M.pixel_size){case 8:l(B,oe,Z,ae,j,V,re,$);break;case 16:c(B,oe,Z,ae,j,V,re,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(M.pixel_size){case 8:s(B,oe,Z,ae,j,V,re,$,ee);break;case 16:r(B,oe,Z,ae,j,V,re,$);break;case 24:a(B,oe,Z,ae,j,V,re,$);break;case 32:o(B,oe,Z,ae,j,V,re,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let u=0,d=1,p=2,g=3,x=9,m=10,f=11,E=48,b=4,N=0,P=1,R=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let z=0,w=new Uint8Array(e),M={id_length:w[z++],colormap_type:w[z++],image_type:w[z++],colormap_index:w[z++]|w[z++]<<8,colormap_length:w[z++]|w[z++]<<8,colormap_size:w[z++],origin:[w[z++]|w[z++]<<8,w[z++]|w[z++]<<8],width:w[z++]|w[z++]<<8,height:w[z++]|w[z++]<<8,pixel_size:w[z++],flags:w[z++]};if(t(M),M.id_length+z>e.length)throw new Error("THREE.TGALoader: No data.");z+=M.id_length;let F=!1,ie=!1,ue=!1;switch(M.image_type){case x:F=!0,ie=!0;break;case d:ie=!0;break;case m:F=!0;break;case p:break;case f:F=!0,ue=!0;break;case g:ue=!0;break}let O=new Uint8Array(M.width*M.height*4),G=i(F,ie,M,z,w);return h(O,M.width,M.height,G.pixel_data,G.palettes),{data:O,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:Ss}}};var rc=class extends Ci{load(e,t,i,s){let r=this,a=r.path===""?Zl.extractUrlBase(e):r.path,o=new so(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(_,v){let T=[],S=_.childNodes;for(let C=0,Q=S.length;C<Q;C++){let se=S[C];se.nodeName===v&&T.push(se)}return T}function s(_){if(_.length===0)return[];let v=_.trim().split(/\s+/),T=new Array(v.length);for(let S=0,C=v.length;S<C;S++)T[S]=v[S];return T}function r(_){if(_.length===0)return[];let v=_.trim().split(/\s+/),T=new Array(v.length);for(let S=0,C=v.length;S<C;S++)T[S]=parseFloat(v[S]);return T}function a(_){if(_.length===0)return[];let v=_.trim().split(/\s+/),T=new Array(v.length);for(let S=0,C=v.length;S<C;S++)T[S]=parseInt(v[S]);return T}function o(_){return _.substring(1)}function l(){return"three_default_"+d0++}function c(_){return Object.keys(_).length===0}function h(_){return{unit:u(i(_,"unit")[0]),upAxis:d(i(_,"up_axis")[0])}}function u(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function d(_){return _!==void 0?_.textContent:"Y_UP"}function p(_,v,T,S){let C=i(_,v)[0];if(C!==void 0){let Q=i(C,T);for(let se=0;se<Q.length;se++)S(Q[se])}}function g(_,v){for(let T in _){let S=_[T];S.build=v(_[T])}}function x(_,v){return _.build!==void 0||(_.build=v(_)),_.build}function m(_){let v={sources:{},samplers:{},channels:{}},T=!1;for(let S=0,C=_.childNodes.length;S<C;S++){let Q=_.childNodes[S];if(Q.nodeType!==1)continue;let se;switch(Q.nodeName){case"source":se=Q.getAttribute("id"),v.sources[se]=k(Q);break;case"sampler":se=Q.getAttribute("id"),v.samplers[se]=f(Q);break;case"channel":se=Q.getAttribute("target"),v.channels[se]=E(Q);break;case"animation":m(Q),T=!0;break;default:console.log(Q)}}T===!1&&(Ze.animations[_.getAttribute("id")||As.generateUUID()]=v)}function f(_){let v={inputs:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=o(C.getAttribute("source")),se=C.getAttribute("semantic");v.inputs[se]=Q;break}}return v}function E(_){let v={},S=_.getAttribute("target").split("/"),C=S.shift(),Q=S.shift(),se=Q.indexOf("(")!==-1,Ie=Q.indexOf(".")!==-1;if(Ie)S=Q.split("."),Q=S.shift(),v.member=S.shift();else if(se){let be=Q.split("(");Q=be.shift();for(let Te=0;Te<be.length;Te++)be[Te]=parseInt(be[Te].replace(/\)/,""));v.indices=be}return v.id=C,v.sid=Q,v.arraySyntax=se,v.memberSyntax=Ie,v.sampler=o(_.getAttribute("source")),v}function b(_){let v=[],T=_.channels,S=_.samplers,C=_.sources;for(let Q in T)if(T.hasOwnProperty(Q)){let se=T[Q],Ie=S[se.sampler],be=Ie.inputs.INPUT,Te=Ie.inputs.OUTPUT,Fe=C[be],fe=C[Te],ke=P(se,Fe,fe);M(ke,v)}return v}function N(_){return x(Ze.animations[_],b)}function P(_,v,T){let S=Ze.nodes[_.id],C=nt(S.id),Q=S.transforms[_.sid],se=S.matrix.clone().transpose(),Ie,be,Te,Fe,fe,ke,Ue={};switch(Q){case"matrix":for(Te=0,Fe=v.array.length;Te<Fe;Te++)if(Ie=v.array[Te],be=Te*T.stride,Ue[Ie]===void 0&&(Ue[Ie]={}),_.arraySyntax===!0){let qt=T.array[be],Tt=_.indices[0]+4*_.indices[1];Ue[Ie][Tt]=qt}else for(fe=0,ke=T.stride;fe<ke;fe++)Ue[Ie][fe]=T.array[be+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let $e=R(Ue,se);return{name:C.uuid,keyframes:$e}}function R(_,v){let T=[];for(let C in _)T.push({time:parseFloat(C),value:_[C]});T.sort(S);for(let C=0;C<16;C++)F(T,C,v.elements[C]);return T;function S(C,Q){return C.time-Q.time}}let D=new U,z=new U,w=new Ti;function M(_,v){let T=_.keyframes,S=_.name,C=[],Q=[],se=[],Ie=[];for(let be=0,Te=T.length;be<Te;be++){let Fe=T[be],fe=Fe.time,ke=Fe.value;Re.fromArray(ke).transpose(),Re.decompose(D,w,z),C.push(fe),Q.push(D.x,D.y,D.z),se.push(w.x,w.y,w.z,w.w),Ie.push(z.x,z.y,z.z)}return Q.length>0&&v.push(new Qi(S+".position",C,Q)),se.length>0&&v.push(new Ki(S+".quaternion",C,se)),Ie.length>0&&v.push(new Qi(S+".scale",C,Ie)),v}function F(_,v,T){let S,C=!0,Q,se;for(Q=0,se=_.length;Q<se;Q++)S=_[Q],S.value[v]===void 0?S.value[v]=null:C=!1;if(C===!0)for(Q=0,se=_.length;Q<se;Q++)S=_[Q],S.value[v]=T;else ie(_,v)}function ie(_,v){let T,S;for(let C=0,Q=_.length;C<Q;C++){let se=_[C];if(se.value[v]===null){if(T=ue(_,C,v),S=O(_,C,v),T===null){se.value[v]=S.value[v];continue}if(S===null){se.value[v]=T.value[v];continue}G(se,T,S,v)}}}function ue(_,v,T){for(;v>=0;){let S=_[v];if(S.value[T]!==null)return S;v--}return null}function O(_,v,T){for(;v<_.length;){let S=_[v];if(S.value[T]!==null)return S;v++}return null}function G(_,v,T,S){if(T.time-v.time===0){_.value[S]=v.value[S];return}_.value[S]=(_.time-v.time)*(T.value[S]-v.value[S])/(T.time-v.time)+v.value[S]}function B(_){let v={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_animation":v.animations.push(o(C.getAttribute("url")));break}}Ze.clips[_.getAttribute("id")]=v}function ne(_){let v=[],T=_.name,S=_.end-_.start||-1,C=_.animations;for(let Q=0,se=C.length;Q<se;Q++){let Ie=N(C[Q]);for(let be=0,Te=Ie.length;be<Te;be++)v.push(Ie[be])}return new no(T,S,v)}function q(_){return x(Ze.clips[_],ne)}function $(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"skin":v.id=o(C.getAttribute("source")),v.skin=ee(C);break;case"morph":v.id=o(C.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ze.controllers[_.getAttribute("id")]=v}function ee(_){let v={sources:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"bind_shape_matrix":v.bindShapeMatrix=r(C.textContent);break;case"source":let Q=C.getAttribute("id");v.sources[Q]=k(C);break;case"joints":v.joints=j(C);break;case"vertex_weights":v.vertexWeights=oe(C);break}}return v}function j(_){let v={inputs:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=C.getAttribute("semantic"),se=o(C.getAttribute("source"));v.inputs[Q]=se;break}}return v}function oe(_){let v={inputs:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=C.getAttribute("semantic"),se=o(C.getAttribute("source")),Ie=parseInt(C.getAttribute("offset"));v.inputs[Q]={id:se,offset:Ie};break;case"vcount":v.vcount=a(C.textContent);break;case"v":v.v=a(C.textContent);break}}return v}function V(_){let v={id:_.id},T=Ze.geometries[v.id];return _.skin!==void 0&&(v.skin=Z(_.skin),T.sources.skinIndices=v.skin.indices,T.sources.skinWeights=v.skin.weights),v}function Z(_){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},S=_.sources,C=_.vertexWeights,Q=C.vcount,se=C.v,Ie=C.inputs.JOINT.offset,be=C.inputs.WEIGHT.offset,Te=_.sources[_.joints.inputs.JOINT],Fe=_.sources[_.joints.inputs.INV_BIND_MATRIX],fe=S[C.inputs.WEIGHT.id].array,ke=0,Ue,$e,He;for(Ue=0,He=Q.length;Ue<He;Ue++){let Tt=Q[Ue],vt=[];for($e=0;$e<Tt;$e++){let _t=se[ke+Ie],Fi=se[ke+be],Wn=fe[Fi];vt.push({index:_t,weight:Wn}),ke+=2}for(vt.sort(qt),$e=0;$e<4;$e++){let _t=vt[$e];_t!==void 0?(T.indices.array.push(_t.index),T.weights.array.push(_t.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(_.bindShapeMatrix?T.bindMatrix=new ct().fromArray(_.bindShapeMatrix).transpose():T.bindMatrix=new ct().identity(),Ue=0,He=Te.array.length;Ue<He;Ue++){let Tt=Te.array[Ue],vt=new ct().fromArray(Fe.array,Ue*Fe.stride).transpose();T.joints.push({name:Tt,boneInverse:vt})}return T;function qt(Tt,vt){return vt.weight-Tt.weight}}function re(_){return x(Ze.controllers[_],V)}function ae(_){let v={init_from:i(_,"init_from")[0].textContent};Ze.images[_.getAttribute("id")]=v}function ce(_){return _.build!==void 0?_.build:_.init_from}function Le(_){let v=Ze.images[_];return v!==void 0?x(v,ce):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Ve(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"profile_COMMON":v.profile=Ge(C);break}}Ze.effects[_.getAttribute("id")]=v}function Ge(_){let v={surfaces:{},samplers:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"newparam":gt(C,v);break;case"technique":v.technique=qe(C);break;case"extra":v.extra=A(C);break}}return v}function gt(_,v){let T=_.getAttribute("sid");for(let S=0,C=_.childNodes.length;S<C;S++){let Q=_.childNodes[S];if(Q.nodeType===1)switch(Q.nodeName){case"surface":v.surfaces[T]=X(Q);break;case"sampler2D":v.samplers[T]=mn(Q);break}}}function X(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"init_from":v.init_from=C.textContent;break}}return v}function mn(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"source":v.source=C.textContent;break}}return v}function qe(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"constant":case"lambert":case"blinn":case"phong":v.type=C.nodeName,v.parameters=it(C);break;case"extra":v.extra=A(C);break}}return v}function it(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":v[C.nodeName]=Oe(C);break;case"transparent":v[C.nodeName]={opaque:C.hasAttribute("opaque")?C.getAttribute("opaque"):"A_ONE",data:Oe(C)};break}}return v}function Oe(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":v[C.nodeName]=r(C.textContent);break;case"float":v[C.nodeName]=parseFloat(C.textContent);break;case"texture":v[C.nodeName]={id:C.getAttribute("texture"),extra:It(C)};break}}return v}function It(_){let v={technique:{}};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"extra":ht(C,v);break}}return v}function ht(_,v){for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":I(C,v);break}}}function I(_,v){for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":v.technique[C.nodeName]=parseFloat(C.textContent);break;case"wrapU":case"wrapV":C.textContent.toUpperCase()==="TRUE"?v.technique[C.nodeName]=1:C.textContent.toUpperCase()==="FALSE"?v.technique[C.nodeName]=0:v.technique[C.nodeName]=parseInt(C.textContent);break;case"bump":v[C.nodeName]=ge(C);break}}}function A(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":v.technique=J(C);break}}return v}function J(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"double_sided":v[C.nodeName]=parseInt(C.textContent);break;case"bump":v[C.nodeName]=ge(C);break}}return v}function ge(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"texture":v[C.nodeName]={id:C.getAttribute("texture"),texcoord:C.getAttribute("texcoord"),extra:It(C)};break}}return v}function pe(_){return _}function ye(_){return x(Ze.effects[_],pe)}function Be(_){let v={name:_.getAttribute("name")};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_effect":v.url=o(C.getAttribute("url"));break}}Ze.materials[_.getAttribute("id")]=v}function we(_){let v,T=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":v=ah;break;default:v=Na}return v}function Ne(_){let v=ye(_.url),T=v.profile.technique,S;switch(T.type){case"phong":case"blinn":S=new to;break;case"lambert":S=new rr;break;default:S=new tn;break}S.name=_.name||"";function C(be,Te=null){let Fe=v.profile.samplers[be.id],fe=null;if(Fe!==void 0){let ke=v.profile.surfaces[Fe.source];fe=Le(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Le(be.id);if(fe!==null){let ke=we(fe);if(ke!==void 0){let Ue=ke.load(fe),$e=be.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let He=$e.technique;Ue.wrapS=He.wrapU?Ms:Ln,Ue.wrapT=He.wrapV?Ms:Ln,Ue.offset.set(He.offsetU||0,He.offsetV||0),Ue.repeat.set(He.repeatU||1,He.repeatV||1)}else Ue.wrapS=Ms,Ue.wrapT=Ms;return Te!==null&&(Ue.colorSpace=Te),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",be.id),null}let Q=T.parameters;for(let be in Q){let Te=Q[be];switch(be){case"diffuse":Te.color&&S.color.fromArray(Te.color),Te.texture&&(S.map=C(Te.texture,Xt));break;case"specular":Te.color&&S.specular&&S.specular.fromArray(Te.color),Te.texture&&(S.specularMap=C(Te.texture));break;case"bump":Te.texture&&(S.normalMap=C(Te.texture));break;case"ambient":Te.texture&&(S.lightMap=C(Te.texture,Xt));break;case"shininess":Te.float&&S.shininess&&(S.shininess=Te.float);break;case"emission":Te.color&&S.emissive&&S.emissive.fromArray(Te.color),Te.texture&&(S.emissiveMap=C(Te.texture,Xt));break}}S.color.convertSRGBToLinear(),S.specular&&S.specular.convertSRGBToLinear(),S.emissive&&S.emissive.convertSRGBToLinear();let se=Q.transparent,Ie=Q.transparency;if(Ie===void 0&&se&&(Ie={float:1}),se===void 0&&Ie&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&Ie)if(se.data.texture)S.transparent=!0;else{let be=se.data.color;switch(se.opaque){case"A_ONE":S.opacity=be[3]*Ie.float;break;case"RGB_ZERO":S.opacity=1-be[0]*Ie.float;break;case"A_ZERO":S.opacity=1-be[3]*Ie.float;break;case"RGB_ONE":S.opacity=be[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}S.opacity<1&&(S.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let be=T.extra.technique;for(let Te in be){let Fe=be[Te];switch(Te){case"double_sided":S.side=Fe===1?zn:$n;break;case"bump":S.normalMap=C(Fe.texture),S.normalScale=new et(1,1);break}}}return S}function Ye(_){return x(Ze.materials[_],Ne)}function ut(_){let v={name:_.getAttribute("name")};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"optics":v.optics=me(C);break}}Ze.cameras[_.getAttribute("id")]=v}function me(_){for(let v=0;v<_.childNodes.length;v++){let T=_.childNodes[v];switch(T.nodeName){case"technique_common":return St(T)}}return{}}function St(_){let v={};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];switch(S.nodeName){case"perspective":case"orthographic":v.technique=S.nodeName,v.parameters=pt(S);break}}return v}function pt(_){let v={};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":v[S.nodeName]=parseFloat(S.textContent);break}}return v}function Qe(_){let v;switch(_.optics.technique){case"perspective":v=new en(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let T=_.optics.parameters.ymag,S=_.optics.parameters.xmag,C=_.optics.parameters.aspect_ratio;S=S===void 0?T*C:S,T=T===void 0?S/C:T,S*=.5,T*=.5,v=new ta(-S,S,T,-T,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:v=new en;break}return v.name=_.name||"",v}function We(_){let v=Ze.cameras[_];return v!==void 0?x(v,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function De(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique_common":v=at(C);break}}Ze.lights[_.getAttribute("id")]=v}function at(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"directional":case"point":case"spot":case"ambient":v.technique=C.nodeName,v.parameters=Mt(C)}}return v}function Mt(_){let v={};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":let Q=r(C.textContent);v.color=new lt().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":v.falloffAngle=parseFloat(C.textContent);break;case"quadratic_attenuation":let se=parseFloat(C.textContent);v.distance=se?Math.sqrt(1/se):0;break}}return v}function Ot(_){let v;switch(_.technique){case"directional":v=new oa;break;case"point":v=new Yl;break;case"spot":v=new Xl;break;case"ambient":v=new jl;break}return _.parameters.color&&v.color.copy(_.parameters.color),_.parameters.distance&&(v.distance=_.parameters.distance),v}function dt(_){let v=Ze.lights[_];return v!==void 0?x(v,Ot):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function xe(_){let v={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=i(_,"mesh")[0];if(T!==void 0){for(let S=0;S<T.childNodes.length;S++){let C=T.childNodes[S];if(C.nodeType!==1)continue;let Q=C.getAttribute("id");switch(C.nodeName){case"source":v.sources[Q]=k(C);break;case"vertices":v.vertices=Me(C);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",C.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":v.primitives.push(Se(C));break;default:console.log(C)}}Ze.geometries[_.getAttribute("id")]=v}}function k(_){let v={array:[],stride:3};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"float_array":v.array=r(S.textContent);break;case"Name_array":v.array=s(S.textContent);break;case"technique_common":let C=i(S,"accessor")[0];C!==void 0&&(v.stride=parseInt(C.getAttribute("stride")));break}}return v}function Me(_){let v={};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];S.nodeType===1&&(v[S.getAttribute("semantic")]=o(S.getAttribute("source")))}return v}function Se(_){let v={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,S=_.childNodes.length;T<S;T++){let C=_.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=o(C.getAttribute("source")),se=C.getAttribute("semantic"),Ie=parseInt(C.getAttribute("offset")),be=parseInt(C.getAttribute("set")),Te=be>0?se+be:se;v.inputs[Te]={id:Q,offset:Ie},v.stride=Math.max(v.stride,Ie+1),se==="TEXCOORD"&&(v.hasUV=!0);break;case"vcount":v.vcount=a(C.textContent);break;case"p":v.p=a(C.textContent);break}}return v}function Ke(_){let v={};for(let T=0;T<_.length;T++){let S=_[T];v[S.type]===void 0&&(v[S.type]=[]),v[S.type].push(S)}return v}function Xe(_){let v=0;for(let T=0,S=_.length;T<S;T++)_[T].hasUV===!0&&v++;v>0&&v<_.length&&(_.uvsNeedsFix=!0)}function Et(_){let v={},T=_.sources,S=_.vertices,C=_.primitives;if(C.length===0)return{};let Q=Ke(C);for(let se in Q){let Ie=Q[se];Xe(Ie),v[se]=At(Ie,T,S)}return v}function At(_,v,T){let S={},C={array:[],stride:0},Q={array:[],stride:0},se={array:[],stride:0},Ie={array:[],stride:0},be={array:[],stride:0},Te={array:[],stride:4},Fe={array:[],stride:4},fe=new Xn,ke=[],Ue=0;for(let $e=0;$e<_.length;$e++){let He=_[$e],qt=He.inputs,Tt=0;switch(He.type){case"lines":case"linestrips":Tt=He.count*2;break;case"triangles":Tt=He.count*3;break;case"polylist":for(let vt=0;vt<He.count;vt++){let _t=He.vcount[vt];switch(_t){case 3:Tt+=3;break;case 4:Tt+=6;break;default:Tt+=(_t-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",He.type)}fe.addGroup(Ue,Tt,$e),Ue+=Tt,He.material&&ke.push(He.material);for(let vt in qt){let _t=qt[vt];switch(vt){case"VERTEX":for(let Fi in T){let Wn=T[Fi];switch(Fi){case"POSITION":let Sr=C.array.length;if(wt(He,v[Wn],_t.offset,C.array),C.stride=v[Wn].stride,v.skinWeights&&v.skinIndices&&(wt(He,v.skinIndices,_t.offset,Te.array),wt(He,v.skinWeights,_t.offset,Fe.array)),He.hasUV===!1&&_.uvsNeedsFix===!0){let f0=(C.array.length-Sr)/C.stride;for(let jd=0;jd<f0;jd++)se.array.push(0,0)}break;case"NORMAL":wt(He,v[Wn],_t.offset,Q.array),Q.stride=v[Wn].stride;break;case"COLOR":wt(He,v[Wn],_t.offset,be.array),be.stride=v[Wn].stride;break;case"TEXCOORD":wt(He,v[Wn],_t.offset,se.array),se.stride=v[Wn].stride;break;case"TEXCOORD1":wt(He,v[Wn],_t.offset,Ie.array),se.stride=v[Wn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Fi)}}break;case"NORMAL":wt(He,v[_t.id],_t.offset,Q.array),Q.stride=v[_t.id].stride;break;case"COLOR":wt(He,v[_t.id],_t.offset,be.array,!0),be.stride=v[_t.id].stride;break;case"TEXCOORD":wt(He,v[_t.id],_t.offset,se.array),se.stride=v[_t.id].stride;break;case"TEXCOORD1":wt(He,v[_t.id],_t.offset,Ie.array),Ie.stride=v[_t.id].stride;break}}}return C.array.length>0&&fe.setAttribute("position",new Dt(C.array,C.stride)),Q.array.length>0&&fe.setAttribute("normal",new Dt(Q.array,Q.stride)),be.array.length>0&&fe.setAttribute("color",new Dt(be.array,be.stride)),se.array.length>0&&fe.setAttribute("uv",new Dt(se.array,se.stride)),Ie.array.length>0&&fe.setAttribute("uv1",new Dt(Ie.array,Ie.stride)),Te.array.length>0&&fe.setAttribute("skinIndex",new Dt(Te.array,Te.stride)),Fe.array.length>0&&fe.setAttribute("skinWeight",new Dt(Fe.array,Fe.stride)),S.data=fe,S.type=_[0].type,S.materialKeys=ke,S}function wt(_,v,T,S,C=!1){let Q=_.p,se=_.stride,Ie=_.vcount;function be(fe){let ke=Q[fe+T]*Fe,Ue=ke+Fe;for(;ke<Ue;ke++)S.push(Te[ke]);if(C){let $e=S.length-Fe-1;Bo.setRGB(S[$e+0],S[$e+1],S[$e+2]).convertSRGBToLinear(),S[$e+0]=Bo.r,S[$e+1]=Bo.g,S[$e+2]=Bo.b}}let Te=v.array,Fe=v.stride;if(_.vcount!==void 0){let fe=0;for(let ke=0,Ue=Ie.length;ke<Ue;ke++){let $e=Ie[ke];if($e===4){let He=fe+se*0,qt=fe+se*1,Tt=fe+se*2,vt=fe+se*3;be(He),be(qt),be(vt),be(qt),be(Tt),be(vt)}else if($e===3){let He=fe+se*0,qt=fe+se*1,Tt=fe+se*2;be(He),be(qt),be(Tt)}else if($e>4)for(let He=1,qt=$e-2;He<=qt;He++){let Tt=fe+se*0,vt=fe+se*He,_t=fe+se*(He+1);be(Tt),be(vt),be(_t)}fe+=se*$e}}else for(let fe=0,ke=Q.length;fe<ke;fe+=se)be(fe)}function hn(_){return x(Ze.geometries[_],Et)}function Ct(_){let v={name:_.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Oo(S,v);break}}Ze.kinematicsModels[_.getAttribute("id")]=v}function gn(_){return _.build!==void 0?_.build:_}function ii(_){return x(Ze.kinematicsModels[_],gn)}function Oo(_,v){for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"joint":v.joints[S.getAttribute("sid")]=nh(S);break;case"link":v.links.push(Aa(S));break}}}function nh(_){let v;for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":v=br(S);break}}return v}function br(_){let v={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"axis":let C=r(S.textContent);v.axis.fromArray(C);break;case"limits":let Q=S.getElementsByTagName("max")[0],se=S.getElementsByTagName("min")[0];v.limits.max=parseFloat(Q.textContent),v.limits.min=parseFloat(se.textContent);break}}return v.limits.min>=v.limits.max&&(v.static=!0),v.middlePosition=(v.limits.min+v.limits.max)/2,v}function Aa(_){let v={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":v.attachments.push(Mr(S));break;case"matrix":case"translate":case"rotate":v.transforms.push(Ca(S));break}}return v}function Mr(_){let v={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"link":v.links.push(Aa(S));break;case"matrix":case"translate":case"rotate":v.transforms.push(Ca(S));break}}return v}function Ca(_){let v={type:_.nodeName},T=r(_.textContent);switch(v.type){case"matrix":v.obj=new ct,v.obj.fromArray(T).transpose();break;case"translate":v.obj=new U,v.obj.fromArray(T);break;case"rotate":v.obj=new U,v.obj.fromArray(T),v.angle=As.degToRad(T[3]);break}return v}function ko(_){let v={name:_.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"rigid_body":v.rigidBodies[S.getAttribute("name")]={},ih(S,v.rigidBodies[S.getAttribute("name")]);break}}Ze.physicsModels[_.getAttribute("id")]=v}function ih(_,v){for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"technique_common":sh(S,v);break}}}function sh(_,v){for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"inertia":v.inertia=r(S.textContent);break;case"mass":v.mass=r(S.textContent)[0];break}}}function rh(_){let v={bindJointAxis:[]};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"bind_joint_axis":v.bindJointAxis.push(L(S));break}}Ze.kinematicsScenes[o(_.getAttribute("url"))]=v}function L(_){let v={target:_.getAttribute("target").split("/").pop()};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"axis":let C=S.getElementsByTagName("param")[0];v.axis=C.textContent;let Q=v.axis.split("inst_").pop().split("axis")[0];v.jointIndex=Q.substring(0,Q.length-1);break}}return v}function W(_){return _.build!==void 0?_.build:_}function K(_){return x(Ze.kinematicsScenes[_],W)}function te(){let _=Object.keys(Ze.kinematicsModels)[0],v=Object.keys(Ze.kinematicsScenes)[0],T=Object.keys(Ze.visualScenes)[0];if(_===void 0||v===void 0)return;let S=ii(_),C=K(v),Q=La(T),se=C.bindJointAxis,Ie={};for(let Fe=0,fe=se.length;Fe<fe;Fe++){let ke=se[Fe],Ue=$t.querySelector('[sid="'+ke.target+'"]');if(Ue){let $e=Ue.parentElement;be(ke.jointIndex,$e)}}function be(Fe,fe){let ke=fe.getAttribute("name"),Ue=S.joints[Fe];Q.traverse(function($e){$e.name===ke&&(Ie[Fe]={object:$e,transforms:Y(fe),joint:Ue,position:Ue.zeroPosition})})}let Te=new ct;Yd={joints:S&&S.joints,getJointValue:function(Fe){let fe=Ie[Fe];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,fe){let ke=Ie[Fe];if(ke){let Ue=ke.joint;if(fe>Ue.limits.max||fe<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+fe+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let $e=ke.object,He=Ue.axis,qt=ke.transforms;Re.identity();for(let Tt=0;Tt<qt.length;Tt++){let vt=qt[Tt];if(vt.sid&&vt.sid.indexOf(Fe)!==-1)switch(Ue.type){case"revolute":Re.multiply(Te.makeRotationAxis(He,As.degToRad(fe)));break;case"prismatic":Re.multiply(Te.makeTranslation(He.x*fe,He.y*fe,He.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(vt.type){case"matrix":Re.multiply(vt.obj);break;case"translate":Re.multiply(Te.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Re.scale(vt.obj);break;case"rotate":Re.multiply(Te.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(Re),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Ie[Fe].position=fe}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Y(_){let v=[],T=$t.querySelector('[id="'+_.id+'"]');for(let S=0;S<T.childNodes.length;S++){let C=T.childNodes[S];if(C.nodeType!==1)continue;let Q,se;switch(C.nodeName){case"matrix":Q=r(C.textContent);let Ie=new ct().fromArray(Q).transpose();v.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:Ie});break;case"translate":case"scale":Q=r(C.textContent),se=new U().fromArray(Q),v.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se});break;case"rotate":Q=r(C.textContent),se=new U().fromArray(Q);let be=As.degToRad(Q[3]);v.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se,angle:be});break}}return v}function Ce(_){let v=_.getElementsByTagName("node");for(let T=0;T<v.length;T++){let S=v[T];S.hasAttribute("id")===!1&&S.setAttribute("id",l())}}let Re=new ct,ze=new U;function je(_){let v={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new ct,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];if(S.nodeType!==1)continue;let C;switch(S.nodeName){case"node":v.nodes.push(S.getAttribute("id")),je(S);break;case"instance_camera":v.instanceCameras.push(o(S.getAttribute("url")));break;case"instance_controller":v.instanceControllers.push(ot(S));break;case"instance_light":v.instanceLights.push(o(S.getAttribute("url")));break;case"instance_geometry":v.instanceGeometries.push(ot(S));break;case"instance_node":v.instanceNodes.push(o(S.getAttribute("url")));break;case"matrix":C=r(S.textContent),v.matrix.multiply(Re.fromArray(C).transpose()),v.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":C=r(S.textContent),ze.fromArray(C),v.matrix.multiply(Re.makeTranslation(ze.x,ze.y,ze.z)),v.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":C=r(S.textContent);let Q=As.degToRad(C[3]);v.matrix.multiply(Re.makeRotationAxis(ze.fromArray(C),Q)),v.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":C=r(S.textContent),v.matrix.scale(ze.fromArray(C)),v.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return Nt(v.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",v.id):Ze.nodes[v.id]=v,v}function ot(_){let v={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<_.childNodes.length;T++){let S=_.childNodes[T];switch(S.nodeName){case"bind_material":let C=S.getElementsByTagName("instance_material");for(let Q=0;Q<C.length;Q++){let se=C[Q],Ie=se.getAttribute("symbol"),be=se.getAttribute("target");v.materials[Ie]=o(be)}break;case"skeleton":v.skeletons.push(o(S.textContent));break;default:break}}return v}function st(_,v){let T=[],S=[],C,Q,se;for(C=0;C<_.length;C++){let Te=_[C],Fe;if(Nt(Te))Fe=nt(Te),rt(Fe,v,T);else if(ki(Te)){let ke=Ze.visualScenes[Te].children;for(let Ue=0;Ue<ke.length;Ue++){let $e=ke[Ue];if($e.type==="JOINT"){let He=nt($e.id);rt(He,v,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(C=0;C<v.length;C++)for(Q=0;Q<T.length;Q++)if(se=T[Q],se.bone.name===v[C].name){S[C]=se,se.processed=!0;break}for(C=0;C<T.length;C++)se=T[C],se.processed===!1&&(S.push(se),se.processed=!0);let Ie=[],be=[];for(C=0;C<S.length;C++)se=S[C],Ie.push(se.bone),be.push(se.boneInverse);return new Fl(Ie,be)}function rt(_,v,T){_.traverse(function(S){if(S.isBone===!0){let C;for(let Q=0;Q<v.length;Q++){let se=v[Q];if(se.name===S.name){C=se.boneInverse;break}}C===void 0&&(C=new ct),T.push({bone:S,boneInverse:C,processed:!1})}})}function Wt(_){let v=[],T=_.matrix,S=_.nodes,C=_.type,Q=_.instanceCameras,se=_.instanceControllers,Ie=_.instanceLights,be=_.instanceGeometries,Te=_.instanceNodes;for(let fe=0,ke=S.length;fe<ke;fe++)v.push(nt(S[fe]));for(let fe=0,ke=Q.length;fe<ke;fe++){let Ue=We(Q[fe]);Ue!==null&&v.push(Ue.clone())}for(let fe=0,ke=se.length;fe<ke;fe++){let Ue=se[fe],$e=re(Ue.id),He=hn($e.id),qt=si(He,Ue.materials),Tt=Ue.skeletons,vt=$e.skin.joints,_t=st(Tt,vt);for(let Fi=0,Wn=qt.length;Fi<Wn;Fi++){let Sr=qt[Fi];Sr.isSkinnedMesh&&(Sr.bind(_t,$e.skin.bindMatrix),Sr.normalizeSkinWeights()),v.push(Sr)}}for(let fe=0,ke=Ie.length;fe<ke;fe++){let Ue=dt(Ie[fe]);Ue!==null&&v.push(Ue.clone())}for(let fe=0,ke=be.length;fe<ke;fe++){let Ue=be[fe],$e=hn(Ue.id),He=si($e,Ue.materials);for(let qt=0,Tt=He.length;qt<Tt;qt++)v.push(He[qt])}for(let fe=0,ke=Te.length;fe<ke;fe++)v.push(nt(Te[fe]).clone());let Fe;if(S.length===0&&v.length===1)Fe=v[0];else{Fe=C==="JOINT"?new Qa:new Pn;for(let fe=0;fe<v.length;fe++)Fe.add(v[fe])}return Fe.name=C==="JOINT"?_.sid:_.name,Fe.matrix.copy(T),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let Un=new tn({name:Ci.DEFAULT_MATERIAL_NAME,color:16711935});function Kt(_,v){let T=[];for(let S=0,C=_.length;S<C;S++){let Q=v[_[S]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[S]),T.push(Un)):T.push(Ye(Q))}return T}function si(_,v){let T=[];for(let S in _){let C=_[S],Q=Kt(C.materialKeys,v);if(Q.length===0&&(S==="lines"||S==="linestrips"?Q.push(new ia):Q.push(new to)),S==="lines"||S==="linestrips")for(let Te=0,Fe=Q.length;Te<Fe;Te++){let fe=Q[Te];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let ke=new ia;ke.color.copy(fe.color),ke.opacity=fe.opacity,ke.transparent=fe.transparent,Q[Te]=ke}}let se=C.data.attributes.skinIndex!==void 0,Ie=Q.length===1?Q[0]:Q,be;switch(S){case"lines":be=new Bl(C.data,Ie);break;case"linestrips":be=new eo(C.data,Ie);break;case"triangles":case"polylist":se?be=new Ol(C.data,Ie):be=new Bt(C.data,Ie);break}T.push(be)}return T}function Nt(_){return Ze.nodes[_]!==void 0}function nt(_){return x(Ze.nodes[_],Wt)}function Ra(_){let v={name:_.getAttribute("name"),children:[]};Ce(_);let T=i(_,"node");for(let S=0;S<T.length;S++)v.children.push(je(T[S]));Ze.visualScenes[_.getAttribute("id")]=v}function kt(_){let v=new Pn;v.name=_.name;let T=_.children;for(let S=0;S<T.length;S++){let C=T[S];v.add(nt(C.id))}return v}function ki(_){return Ze.visualScenes[_]!==void 0}function La(_){return x(Ze.visualScenes[_],kt)}function qs(_){let v=i(_,"instance_visual_scene")[0];return La(o(v.getAttribute("url")))}function Pa(){let _=Ze.clips;if(c(_)===!0){if(c(Ze.animations)===!1){let v=[];for(let T in Ze.animations){let S=N(T);for(let C=0,Q=S.length;C<Q;C++)v.push(S[C])}zo.push(new no("default",-1,v))}}else for(let v in _)zo.push(q(v))}function un(_){let v="",T=[_];for(;T.length;){let S=T.shift();S.nodeType===Node.TEXT_NODE?v+=S.textContent:(v+=`
`,T.push.apply(T,S.childNodes))}return v.trim()}if(e.length===0)return{scene:new sr};let wi=new DOMParser().parseFromString(e,"application/xml"),$t=i(wi,"COLLADA")[0],Tn=wi.getElementsByTagName("parsererror")[0];if(Tn!==void 0){let _=i(Tn,"div")[0],v;return _?v=_.textContent:v=un(Tn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,v),null}let Ia=$t.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ia);let Fo=h(i($t,"asset")[0]),Na=new $l(this.manager);Na.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let ah;ao&&(ah=new ao(this.manager),ah.setPath(this.resourcePath||t));let Bo=new lt,zo=[],Yd={},d0=0,Ze={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p($t,"library_animations","animation",m),p($t,"library_animation_clips","animation_clip",B),p($t,"library_controllers","controller",$),p($t,"library_images","image",ae),p($t,"library_effects","effect",Ve),p($t,"library_materials","material",Be),p($t,"library_cameras","camera",ut),p($t,"library_lights","light",De),p($t,"library_geometries","geometry",xe),p($t,"library_nodes","node",je),p($t,"library_visual_scenes","visual_scene",Ra),p($t,"library_kinematics_models","kinematics_model",Ct),p($t,"library_physics_models","physics_model",ko),p($t,"scene","instance_kinematics_scene",rh),g(Ze.animations,b),g(Ze.clips,ne),g(Ze.controllers,V),g(Ze.images,ce),g(Ze.effects,pe),g(Ze.materials,Ne),g(Ze.cameras,Qe),g(Ze.lights,Ot),g(Ze.geometries,Et),g(Ze.visualScenes,kt),Pa(),te();let Ho=qs(i($t,"scene")[0]);return Ho.animations=zo,Fo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Ho.rotation.set(-Math.PI/2,0,0)),Ho.scale.multiplyScalar(Fo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),zo},kinematics:Yd,library:Ze,scene:Ho}}};var om=new vn,ac=new U,lr=class extends Jl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Dt(e,3)),this.setAttribute("uv",new Dt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new or(t,6,1);return this.setAttribute("instanceStart",new ci(i,3,0)),this.setAttribute("instanceEnd",new ci(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new or(t,6,1);return this.setAttribute("instanceColorStart",new ci(i,3,0)),this.setAttribute("instanceColorEnd",new ci(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Hl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),om.setFromBufferAttribute(t),this.boundingBox.union(om))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)ac.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ac)),ac.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ac));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};_e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bn.line={uniforms:ic.merge([_e.common,_e.fog,_e.line]),vertexShader:`
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
		`};var es=class extends _i{constructor(e){super({type:"LineMaterial",uniforms:ic.clone(Bn.line.uniforms),vertexShader:Bn.line.vertexShader,fragmentShader:Bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var lm=new U,cm=new U,_n=new xt,xn=new xt,Ri=new xt,Lu=new U,Pu=new ct,bn=new Ql,hm=new U,oc=new vn,lc=new li,Li=new xt,Pi,cr;function um(n,e,t){return Li.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=cr/t.width,Li.y=cr/t.height,Li.applyMatrix4(n.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function O1(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){bn.start.fromBufferAttribute(s,o),bn.end.fromBufferAttribute(r,o),bn.applyMatrix4(t);let c=new U,h=new U;Pi.distanceSqToSegment(bn.start,bn.end,h,c),h.distanceTo(c)<cr*.5&&e.push({point:h,pointOnLine:c,distance:Pi.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function k1(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Pi.at(1,Ri),Ri.w=1,Ri.applyMatrix4(e.matrixWorldInverse),Ri.applyMatrix4(i),Ri.multiplyScalar(1/Ri.w),Ri.x*=r.x/2,Ri.y*=r.y/2,Ri.z=0,Lu.copy(Ri),Pu.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(_n.fromBufferAttribute(l,d),xn.fromBufferAttribute(c,d),_n.w=1,xn.w=1,_n.applyMatrix4(Pu),xn.applyMatrix4(Pu),_n.z>u&&xn.z>u)continue;if(_n.z>u){let b=_n.z-xn.z,N=(_n.z-u)/b;_n.lerp(xn,N)}else if(xn.z>u){let b=xn.z-_n.z,N=(xn.z-u)/b;xn.lerp(_n,N)}_n.applyMatrix4(i),xn.applyMatrix4(i),_n.multiplyScalar(1/_n.w),xn.multiplyScalar(1/xn.w),_n.x*=r.x/2,_n.y*=r.y/2,xn.x*=r.x/2,xn.y*=r.y/2,bn.start.copy(_n),bn.start.z=0,bn.end.copy(xn),bn.end.z=0;let x=bn.closestPointToPointParameter(Lu,!0);bn.at(x,hm);let m=As.lerp(_n.z,xn.z,x),f=m>=-1&&m<=1,E=Lu.distanceTo(hm)<cr*.5;if(f&&E){bn.start.fromBufferAttribute(l,d),bn.end.fromBufferAttribute(c,d),bn.start.applyMatrix4(a),bn.end.applyMatrix4(a);let b=new U,N=new U;Pi.distanceSqToSegment(bn.start,bn.end,N,b),t.push({point:N,pointOnLine:b,distance:Pi.origin.distanceTo(N),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var oo=class extends Bt{constructor(e=new lr,t=new es({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)lm.fromBufferAttribute(t,a),cm.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+lm.distanceTo(cm);let r=new or(s,2,1);return e.setAttribute("instanceDistanceStart",new ci(r,1,0)),e.setAttribute("instanceDistanceEnd",new ci(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Pi=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;cr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),lc.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=cr*.5;else{let u=Math.max(s.near,lc.distanceToPoint(Pi.origin));c=um(s,u,l.resolution)}if(lc.radius+=c,Pi.intersectsSphere(lc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),oc.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=cr*.5;else{let u=Math.max(s.near,oc.distanceToPoint(Pi.origin));h=um(s,u,l.resolution)}oc.expandByScalar(h),Pi.intersectsBox(oc)!==!1&&(i?O1(this,t):k1(this,s,t))}};var F1="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",lo=null;function B1(){if(lo)return lo;lo=new Map;for(let n of F1.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,a]=i.split(" ");lo.set(t?t+"/"+s:s,[+r,+a])}}return lo}var hr=Math.PI/180;function z1(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*hr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*hr,a=(23.439-36e-8*i)*hr,o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(a)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*hr+t*hr-o,u=e*hr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/hr}function H1(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=B1().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function dm(n=Date.now(),e=H1()){if(e.lat==null){let r=new Date(n),a=r.getHours()+r.getMinutes()/60,o=a>=7&&a<20,l=new Date(n);return l.setHours(o?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:o,next:+l}}let t=r=>z1(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let a=r-s,o=r;for(;o-a>3e4;){let l=(a+o)/2;t(l)===i?a=l:o=l}return{day:i,next:Math.ceil(o)}}return{day:i,next:n+24*36e5}}var ui=["en","fr","ca","es"];var V1={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function vm(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of V1[e]||ui)if(n[t])return n[t];return""}var ho={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type a bullshit title",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Squares",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Tape un titre bidon",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Carr\xE9s",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Escriu un t\xEDtol inventat",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Quadrats",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Escribe un t\xEDtulo inventado",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadrados",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web"}},G1={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},uo={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function fm(){return Object.fromEntries(ui.map(n=>[n,""]))}function ur(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ui.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||fm(),e.sub=e.sub||fm(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[];let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ui.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ui.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=G1[s.layout]?s.layout:"carousel",s.card=uo[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ui.map(a=>[a,s[r]||""]))),ui.forEach(a=>{s[r][a]==null&&(s[r][a]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ui.map(a=>[a,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(Nu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function Iu(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function _m(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function fo(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function Ae(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var W1=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function ca(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!W1.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function dr(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Nu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Cs(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function Du(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function pm(n){try{let e=await Du();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function mm(n,e){let t=await Du();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function gm(n){try{let e=await Du();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var cc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return ur(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return ur(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var hc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await pm("demo:content:v6");if(e)return ur(e);if(window.HC_CONTENT)return ur(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return ur(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await gm("demo:file:"+i.path);continue}await mm("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await mm("demo:content:v6",e),"demo"}async reset(){await gm("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await pm("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},ym=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],co=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],$1=["font","size","lh","weight","italic","ls","upper"],xm=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function q1(n){let e=ym.find(i=>i.id===n);if(e)return e.css;let t=xm(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:ym[0].css}function di(n,e){let t=co.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...$1,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=q1(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function bm(n){let e=[],t=[],i=[],s=[];for(let r of co){if(r.vars||!r.sel)continue;let a=di(n,r.id),o=r.id;s.push(`--f-${o}: ${a.css}`,`--w-${o}: ${a.weight||400}`,`--st-${o}: ${a.italic?"italic":"normal"}`,`--tt-${o}: ${a.upper?"uppercase":"none"}`,`--ls-${o}: ${a.ls||0}em`),a.size&&s.push(`--s-${o}: ${a.size}px`,`--lh-${o}: ${a.lh?a.lh:+(a.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of co){let a=n&&n.typo&&n.typo[r.id]||{},o=di(n,r.id),l=h=>a[h]!==void 0&&a[h]!==""&&a[h]!==null&&a[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${o.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${o.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(o.size*r.clamp[0])}px, ${(o.size/r.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?o.lh:+(r.lh*o.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${o.weight}`),l("italic")&&c.push(`font-style: ${o.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${o.ls}em`),l("upper")&&c.push(`text-transform: ${o.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?o.lh:r.lh*o.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function Mm(n){let e=new Map;for(let t of co){let i=di(n,t.id),s=xm(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Uu(n){let e=new Set;for(let t of co){let i=di(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Sm(n,e,t=!1){let i=di(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let o=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=o(l);let c=r.measureText(a).width;c>172&&(l=Math.floor(l*172/c),r.font=o(l));let h=r.measureText(a),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(a,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var wm=window.HC_BASE||"",vc=window.HC_MODE==="demo"?new hc(wm):new cc(wm),Is=window.HC_ASSETS||null,X1=location.protocol==="file:",og=20261102;window.HC_SITE_VERSION=og;var Ut=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,bt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Ut&&Ut.files&&Ut.files[e]?Ut.files[e]:Is&&Is[e]&&Is[e].startsWith("data:")?Is[e]:vc.url(e)};async function Y1(n){if(Is&&Is[n]&&!Is[n].startsWith("data:"))return Is[n];let e=await fetch(bt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,Zn="en",de=n=>vm(n,Zn),Ee=n=>(ho[Zn]||ho.en)[n],j1=42,le={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Fs={zoom:2,focus:300},Z1=.08,Em={};function lg(n){if(le.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{le[t]=Em[t]}):(e.forEach(t=>{Em[t]=le[t]}),Object.assign(le,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),le.animationMode=n}var Ku=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=Iu(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(ui.map(s=>[s,(ho[s]||ho.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?de(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:le.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Pt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Ku(this.section.def)}},Pt=[],yt={x:0,y:0,z:0,zoom:Fs.zoom},Nn={x:0,y:0,z:0},ss=0,bi=[],J1={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function nn(n,e,t,i={}){for(let r of bi)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ss+(i.delay||0),ease:J1[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return bi.push(s),s}var Mo=(n,e)=>nn({},n,{},{onComplete:e,ease:"linear"});function Mn(n){for(let e=bi.length-1;e>=0;e--)bi[e].obj===n&&bi.splice(e,1)}function _a(n){return bi.some(e=>e.obj===n&&ss>=e.start)}function cg(n,e){if(!e&&ss<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ss-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function K1(){for(let n of bi.slice())if(cg(n,!1)){let e=bi.indexOf(n);e>=0&&bi.splice(e,1),n.onComplete&&n.onComplete()}}function hg(){bi.splice(0).forEach(n=>cg(n,!0))}function Q1(n,e,t,i,s,r,a){Mn(yt),nn(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),Sd(i,s,r,a)}function Sd(n,e,t,i){Mn(Nn),nn(Nn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function eM(n,e,t,i){Mn(yt),nn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Sc=1,Sn=n=>n<=1?1:1-Math.pow(1-1/n,Sc),Ni=Math.PI/180,Qu=(n,e,t)=>new U(n,e,-t),Rs=(n,e,t)=>[-n,e,t],pn=document.getElementById("stage"),Vs=new Ja({canvas:pn,antialias:!0});Vs.debug.checkShaderErrors=!1;Vs.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Vs.setClearColor(16777215,1);var as=new sr;as.add(new ql(16777215,14211288,2.2));var ug=new oa(16777215,1.2);ug.position.set(300,800,500);as.add(ug);var Hn=new en(60,1,1,6e4),dg=new es({color:le.lineColor,linewidth:le.lineThickness}),ed=new es({color:le.planeFrameColor,linewidth:le.planeFrameThickness}),fg=new es({color:le.planeFrameSelectColor,linewidth:le.planeFrameThickness}),_c=new es({color:le.locatorColor,linewidth:1.3}),pg=[dg,ed,fg,_c],mg=new io;mg.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:bt(n));var Ou=new Map;function os(n){return n?X1&&!/^(data:|blob:|https?:)/.test(bt(n))?Promise.reject(new Error("local")):(Ou.has(n)||Ou.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(bt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=bt(n)})),Ou.get(n)):Promise.reject(new Error("no image"))}function wd(n){return n.colorSpace=Xt,n.anisotropy=Math.min(8,Vs.capabilities.getMaxAnisotropy()),n}var tM=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=wd(new sa(n)),t=new Ji(1,1),i=new sr;return[$n,fn,zn].forEach(s=>i.add(new Bt(t,new tn({map:e,side:s})))),i.add(new Bt(t,new tn({color:1118481}))),i.add(new Ka(new na({map:e,transparent:!0}))),i})(),Ht=0,Vt=0,ni=!1,wc=()=>ni,gr=0,Tm=0,So=()=>ve.settings.negative==="auto";function Uc(){if(!So())return gr=0,!!ve.settings.negative;let n=dm();return gr=n.next,!n.day}function Ed(){if(Ut||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!So()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function gg(n){n!==ni&&(ni=n,Xc(),Pe&&Pe.retexture())}function Td(){if(clearTimeout(Tm),!So())return;Tm=setTimeout(()=>{if(Date.now()>=gr-1e3){let e=Uc(),t=Ed();gg(t??e)}Td()},Math.min(Math.max(gr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&gr&&Date.now()>=gr){let n=Uc(),e=Ed();gg(e??n),Td()}});var yg=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},ti=()=>{let n=ve.settings.accent||"#ffcc00";return wc()?yg(n):n},Oc='Georgia, Gelasio, "Times New Roman", serif',cn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',vg=400,_g=Oc,xg=!1,bg=1,Mi=n=>`${vg} ${n}px ${Oc}`,rs=n=>`${xg?"italic ":""}400 ${Math.round(n*bg*10)/10}px ${_g}`,Ad=1,tt=n=>Math.round(n*Ad),nM=700,kc=()=>{let n=Ht||window.innerWidth,e=Vt||window.innerHeight;return n<nM||Math.min(n,e)<500},ls=kc;function Gs(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?Uu(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Am=0,Mg=[];function iM(){Gt&&(Ug(),Dg()),clearTimeout(Am),Am=setTimeout(async()=>{try{await Promise.all(Uu(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||od(),Pe&&!Pe.loading&&Pe.retexture()},150)}function Sg(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=bm(n);e.textContent!==t&&(e.textContent=t);let i=Mm(n);document.querySelectorAll("link[data-hc-font]").forEach(a=>{i.includes(a.href)||a.remove()}),i.forEach(a=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(a)}"]`)){let o=document.createElement("link");o.rel="stylesheet",o.href=a,o.dataset.hcFont="",Mg.push(new Promise(l=>{o.onload=()=>{l(),iM()},o.onerror=l})),document.head.appendChild(o)}});let s=di(n,"card"),r=di(n,"subtitle");vg=s.weight||400,_g=r.css,xg=!!r.italic,bg=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,Oc=s.css,cn=di(n,"cardsm").css,Ad=Math.max(.5,Math.min(2,(+di(n,"card").scale||100)/100))}function Zt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function rn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),wd(new sa(s))}function Di(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,l=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,t,i,s,r),wc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var wo=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function wg(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function xa(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Lo=n=>Pt.some(e=>e.def.id===n.section),sM=(n,e)=>Pt.findIndex(t=>t.def.id===n.section)-Pt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),Ec=n=>ve.posts.filter(e=>e.published&&e!==n&&Lo(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(sM),Eo=n=>{let e=fo(ve,n).filter(Lo);return e.length?e:Ec(n)},ku=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),Eg=n=>_m(ve,n).filter(Lo),yr=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&ba(e.src)==="image")||{}).src||"",Cm=new Map,td=n=>Ec(n).filter(yr);async function Fc(n,e=Eo(n)){let t=e.filter(yr);if(!t.length)return null;let i=t.find(r=>r.id===Cm.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,a)=>r[0]-a[0]).map(r=>r[1]);for(let r of s){let a=await os(yr(r)).catch(()=>null);if(a)return Cm.set(n.id,r.id),{im:a,project:r}}return null}function Bc(n,e,t,i,s){Di(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function Tg(n,e){let t=de(n.title).trim(),i=de(n.subtitle).trim();if(!t&&!i)return null;let s=ls(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),a=s?17:Math.max(7.5,r*.74),o=Math.round(r*(s?.6:.75)),l=e-2*o,c=document.createElement("canvas").getContext("2d");c.font=Mi(r);let h=t?Zt(c,t,l).slice(0,2):[];c.font=rs(a);let u=i?Zt(c,i,l).slice(0,2):[],d=Math.round(r*1.2),p=Math.round(a*1.25),g=Math.ceil(o+h.length*d+(u.length?3+u.length*p:0)+o-2);return{tex:rn(e,g,m=>{m.fillStyle="rgba(0,0,0,.62)",m.fillRect(0,0,e,g),m.textBaseline="top";let f=o;m.fillStyle="#fff",m.font=Mi(r),h.forEach(E=>{m.fillText(E,o,f),f+=d}),f+=3,m.font=rs(a),u.forEach(E=>{m.fillText(E,o,f),f+=p})},3),bh:g,w:e}}async function rM(n,e,t){let i=n.thumb?await os(n.thumb).catch(()=>null):null,s=n.thumbBack?await os(n.thumbBack).catch(()=>null):null,r=i?null:await Fc(n);await Gs();let a=(c,h=!1)=>{if(i){Di(c,i,0,0,e,t);return}r?Bc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ls(),d=u?14:16,p=u?[tt(31),tt(34),2]:[tt(24),28,3],g=u?[tt(20),tt(23),1]:[tt(13),16,2],x=u?tt(15):10,m=u?tt(13):9,f=u?26:20;c.fillStyle=ti(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=Mi(p[0]);let E=Zt(c,de(n.title),e-2*d).slice(0,p[2]),b=u?22:30;E.forEach((P,R)=>c.fillText(P,d,b+R*p[1])),c.font=rs(g[0]),Zt(c,de(n.subtitle),e-2*d).slice(0,u&&E.length<2?2:g[2]).forEach((P,R)=>c.fillText(P,d,b+8+E.length*p[1]+R*g[1]));let N=r?Bm(r.project,r.project.media[0]&&r.project.media[0].credit):Bm(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${x}px ${cn}`,c.fillText([n.date,de(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(N?f+x+6:x+12)),N){c.font=`${m}px ${cn}`;let P=N;for(;c.measureText(P).width>e-2*d&&P.length>4;)P=P.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(P,d,t-f/2)}c.globalAlpha=1},o=rn(e,t,a,2),l=s?rn(e,t,c=>Di(c,s,0,0,e,t),2):r?rn(e,t,xa(e,c=>a(c,!0)),2):rn(e,t,wg(a),1.5);return[o,l,i?Tg(n,e):null]}async function aM(n,e,t){let i=n.thumb?await os(n.thumb).catch(()=>null):null,s=n.thumbBack?await os(n.thumbBack).catch(()=>null):null,r=i||ku(n)?null:await Fc(n,td(n));await Gs();let a=(l,c=!1)=>{if(ku(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ls()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${cn}`;let x=Zt(l,de(n.title),e*(g>1?.9:.76)).slice(0,3);x.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(x.length-1)/2)*t*.16*g)),wc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),wc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Di(l,i,0,0,e,t);return}r?Bc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=rs(Math.round(t*.42*Ad)),l.textAlign="center",l.textBaseline="middle",l.fillText(wo(de(n.title)),e/2,t*.45),l.fillStyle=ti(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},o=s?rn(e,t,l=>Di(l,s,0,0,e,t),3):r?rn(e,t,xa(e,l=>a(l,!0)),2):rn(e,t,wg(a),2);return[rn(e,t,a,3),o,i||r||ku(n)?Tg(n,e):null]}async function oM(n,e,t){let i=await Fc(n);if(i)return lM(n,e,t,i);let s=n.thumb?await os(n.thumb).catch(()=>null):null;await Gs();let r=de(n.title).trim(),a=ls(),o=tt(a?30:21),l=a?tt(32):22,c=a?2:3,h=s?72:18,u=e-h-14,d=rn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Di(g,s,13,12.75,53,53):(g.fillStyle=ti(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=Mi(o),g.textBaseline="top",Zt(g,r,u).slice(0,c).forEach((x,m)=>g.fillText(x,h,(s?12:20)+m*l))}),p=rn(e,t,xa(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=Mi(o),g.textBaseline="top",Zt(g,r,u).slice(0,c).forEach((x,m)=>g.fillText(x,h,(s?9:17)+m*l))}));return[d,p]}async function lM(n,e,t,i){await Gs();let s=de(n.title).trim(),r=e-32,a=ls(),o=tt(a?30:21),l=a?tt(32):22,c=h=>u=>{Bc(u,i,e,t,h?.2:a?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=ti(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=Mi(o),u.textBaseline="top",Zt(u,s,r).slice(0,a?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[rn(e,t,c(!1),2),rn(e,t,xa(e,c(!0)),2)]}async function cM(n,e,t){let i=n.thumb?await os(n.thumb).catch(()=>null):null;await Gs();let r=rn(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),Di(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=ti(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${tt(12)}px ${Oc}`,a.textAlign="center",a.textBaseline="top",a.fillText(de(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var hM={image:rM,portrait:aM,text:oM,place:cM};async function uM(n,e,t){let i=n.thumb?await os(n.thumb).catch(()=>null):null,s=i?{im:i}:await Fc(n);await Gs();let r=de(n.title).trim(),a=(de(n.subtitle).trim()||dr(de(n.body)).join(" ")).replace(/\s+/g," ").trim(),o=t<110,l=ls(),c=s&&!l?Math.round(o?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,x]=l?o?[28,31,0,1]:[36,40,0,1]:o?[15,18,9.5,12]:[17,20,10.5,13.5],m=(P,R)=>{P.globalAlpha=R,P.textBaseline="top";let D=e-h-12;P.fillStyle=ti(),P.fillRect(h,o?9:13,14,2),P.fillStyle="#fff",P.font=Mi(tt(d));let z=o?16:22;Zt(P,r,D).slice(0,l?3:2).forEach(w=>{P.fillText(w,h,z),z+=tt(p)}),P.globalAlpha=1},f=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Di(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.18)",P.fillRect(0,0,e,t)),m(P,.38)},E=P=>{let R=P.createLinearGradient(0,0,0,t);R.addColorStop(0,"rgba(0,0,0,.7)"),R.addColorStop(1,"rgba(0,0,0,.3)"),P.fillStyle=R,P.fillRect(0,0,e,t),m(P,1)},b=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Di(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.22)",P.fillRect(0,0,e,t));let R=P.createLinearGradient(0,t*.3,0,t);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(1,"rgba(0,0,0,.82)"),P.fillStyle=R,P.fillRect(0,t*.3,e,t*.7);let D=Math.round(e*.07),z=e-2*D,w=Eo(n).length;P.textBaseline="top",P.fillStyle="#fff",w&&(P.font=`600 ${tt(11)}px ${cn}`,P.fillText(`${w} ${Ee("nProjects")}`.toUpperCase(),D,D));let M=de(n.subtitle).trim();P.font=`${tt(11.5)}px ${cn}`;let F=M?Zt(P,M,z).slice(0,2):[],ie=t-D-F.length*tt(14);F.forEach((O,G)=>P.fillText(O,D,ie+G*tt(14))),P.font=rs(tt(26));let ue=Zt(P,r,z).slice(0,2);ie-=(F.length?tt(6):0)+ue.length*tt(25),ue.forEach((O,G)=>P.fillText(O,D,ie+G*tt(25)))};return[rn(e,t,(P=>R=>{if(l&&!P){b(R);return}R.fillStyle="#111",R.fillRect(0,0,e,t),s&&l&&!P&&Bc(R,s,e,t,.6),s&&!l&&Di(R,s.im,e-c,0,c,t),R.textBaseline="top",R.fillStyle=ti(),R.fillRect(h,o?9:13,14,2),R.fillStyle="#fff",R.font=Mi(tt(d));let D=Zt(R,r,u).slice(0,l?3:2),z=o?16:22;D.forEach(F=>{R.fillText(F,h,z),z+=tt(p)}),z+=o?2:5,R.font=rs(tt(g));let w=l?0:Math.max(0,Math.floor((t-z-8)/tt(x))),M=Zt(R,a,u);if(M.length>w&&(M=M.slice(0,w),w)){let F=M[w-1];for(;F&&R.measureText(F+"\u2026").width>u;)F=F.replace(/\s*\S+$/,"");M[w-1]=F+"\u2026"}M.forEach(F=>{R.fillText(F,h,z),z+=tt(x)}),R.globalAlpha=1})(!1),2),rn(e,t,xa(e,f),2),null,rn(e,t,xa(e,E),2)]}function uc(n,e){return Gs().then(()=>e==="place"?rn(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(44)),t.fillText(de(n.title)+".",32,18),t.font=rs(tt(18)),Zt(t,de(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.font=`14px ${cn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",dr(de(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.font=`600 15px ${cn}`,t.fillText(de(n.place),32,260)},1.5):ls()?rn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(25));let i=Zt(t,de(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*tt(27))),t.font=`${tt(13)}px ${cn}`;let s=Ec(n).map(d=>de(d.title).trim()).filter(Boolean),r=s.length?Zt(t,s.join("  \xB7  "),172).slice(0,2):[],a=de(n.place)?168:188,o=a-r.length*16-16,l=18+i.length*tt(27);t.font=rs(tt(17));let c=(r.length?o-6:a)-tt(20),h=Zt(t,de(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=tt(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*tt(27)+p*tt(20))),r.length&&(t.font=`600 ${tt(11)}px ${cn}`,t.fillText(Ee("together").toUpperCase(),14,o),t.font=`${tt(13)}px ${cn}`,r.forEach((d,p)=>t.fillText(d,14,o+16+p*16))),de(n.place)&&(t.font=`600 ${tt(13)}px ${cn}`,t.fillText(de(n.place).toUpperCase(),14,176))},2.5):rn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(20));let i=Zt(t,de(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${cn}`;let r=Ec(n).map(u=>de(u.title).trim()).filter(Boolean),a=r.length?Zt(t,r.join("  \xB7  "),166).slice(0,3):[],o=(de(n.place)?174:188)-a.length*13-13;t.font=rs(tt(15));let l=(a.length?o-4:168)-18,c=[];de(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Zt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${cn}`,dr(de(n.body)).join(" ").split(/\s+/).length>1&&Zt(t,dr(de(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((a.length?o-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),a.length&&(t.font=`600 8px ${cn}`,t.fillText(Ee("together").toUpperCase(),19,o),t.font=`10px ${cn}`,a.forEach((u,d)=>t.fillText(u,19,o+13+d*13))),de(n.place)&&(t.font=`600 11px ${cn}`,t.fillText(de(n.place).toUpperCase(),19,180))}))}function dM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${cn}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${cn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let l=new Ka(new na({map:wd(new sa(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*a/o,c,1),l.renderOrder=2,l}var Ii=document.createElement("div");Ii.id="net-tip";Ii.className="ui";Ii.hidden=!0;document.body.appendChild(Ii);function Ag(n,e,t){Ii.innerHTML=`<b>${Ae(n.city||"")}</b>${n.titles.map(s=>`<span>${Ae(s)}</span>`).join("")}`,Ii.hidden=!1;let i=Ii.getBoundingClientRect();Ii.style.left=Math.min(e+14,Ht-i.width-10)+"px",Ii.style.top=Math.max(10,t-i.height-12)+"px"}function zc(){Ii.hidden=!0}var nd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Pn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await Y1(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new Pn;o.add(a),a.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new tn({map:p}):t.untextured==="white"?new rr({color:15921906}):t.untextured==="black"?new rr({color:2236962}):new tn({color:le.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){o.updateMatrixWorld(!0);let h=new vn().setFromObject(o),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;o.scale.setScalar(d),o.updateMatrixWorld(!0);let p=new vn().setFromObject(o),g=p.getCenter(new U);o.position.set(-g.x,-p.min.y,-g.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let h=new vn().setFromObject(o);h.max.y-h.min.y>le.object3DMaxHeight&&o.scale.setScalar(le.object3DMaxHeight/(h.max.y-h.min.y)),o.scale.multiplyScalar(l)}let c=new Pn;c.rotation.y=(t.rotationY||0)*Ni,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*le.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*le.object3DDistance,this.container.position.copy(Qu(this.p.x,0,this.p.z))}};function Cg(n,e){let t=new lr;t.setPositions(n);let i=new oo(t,e);return i.computeLineDistances(),i}var id=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Pn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Ji(this.width,this.height);if(this.setBand(i),s){let h=new Bt(r,new tn({map:s,side:fn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let a=new Bt(r,new tn({map:e,side:$n})),o=new Bt(r,new tn({map:t,side:fn}));a.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=le.planeFrameDistance,this.height+=le.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=Cg([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],ed),this.group.add(a,o,this.frame),this.meshes.push(a,o),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...Rs(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ni,t.rotation.x=-e.rotX*Ni,t.rotation.z=e.rotZ*Ni,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&nn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=fg,Mo(.8,()=>{this.frame&&(this.frame.material=ed)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),nn(this.thumb,le.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Mn(this.thumb);let i=cs(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||1;return nn(this.thumb,t,{x:s.x+a*e/l,y:r.y,z:s.z+o*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/l,z:o/l}}}moveBack(e=0){Mn(this.thumb);let t=this.p2;nn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){nn(this.thumb,le.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>nn(this.thumb,le.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Mn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Bt(new Ji(t,s),new tn({map:e.tex,transparent:!0,depthWrite:!1,side:$n}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&nn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,a=r+t*e.bh;i.setY(0,a),i.setY(1,a),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Mn(this.thumb),this.bhi&&Mn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!pg.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Fu(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ni;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function Bu(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var zu=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||_a(r.thumb))return;let o=r.thumb,l=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+l)*Sn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*Sn(2*i))}),Tc={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:le.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*le.planeDisOrder+le.planeDistance,z:le.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ni+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Fu(n,e),move:(n,e,t,i)=>zu(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=le;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Bu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>zu(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=le,a=g=>{let x=n.angle*(g+1);return x-Math.cos(x)*n.angle/2},o=t,l;t+1>s?(o=2*Math.round(i/2)-t-1,l=Math.pow(-1,o)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Fu(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*Sn(2*le.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*Sn(2*le.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Cs(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Hc(n.def);return{x:i[0]+s[0],y:(le.planeDistance+e.height+Math.pow(-1,t+1)*le.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Bu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||_a(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*Sn(2*le.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=le.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*le.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ni+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Fu(n,e),move:(n,e,t,i)=>zu(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*le.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Bu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||_a(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*Sn(2*le.cameraEaseSpeed)})}}},fM=["fan","arc","map"],Rm=n=>kc()&&fM.includes(n.layout),Cd=()=>Fs.zoom*Fs.focus*Math.min(1,Ht/900);function Rg(){let n=r=>{let a=document.getElementById(r);if(!a||a.hidden)return null;let o=a.getBoundingClientRect();return o.width&&o.height?o:null},t={l:12,t:12,r:Ht-12,b:Vt-12},i=["slogan","logo","reel-btn","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Vt>=Ht?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<Ht/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Ht/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Ht-12),t.b-t.t<120&&(t.t=12,t.b=Vt-12),t}function Lm(n){let e=Rg(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+le.planeFrameDistance,a=n.h*n.k+le.planeFrameDistance,o=s?1.5*r+102.5:r,l=s?Math.max(a,130):a,c=Math.round(Math.min(o,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let x=Math.ceil(u/g),m=g*o+(g-1)*c,f=x*l+(x-1)*c,E=Math.min(t/m,i/f);(!h||E>h.sc+1e-9)&&(h={cols:g,rows:x,gw:m,gh:f,sc:E})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:o,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Ht/2,fy:(e.t+e.b)/2-Vt/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var pM=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*le.planeDisOrder*.1,rotY:180}},Hu=2*Math.PI,Rd=n=>n+(((Math.PI-n)%Hu+Hu+Math.PI)%Hu-Math.PI);function Pm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>pM(e,i),focus(e,t){let i=e.postViews[t];i&&(H.selected=t,H.degreeCamera=Rd(H.degreeCamera),H.cameraY=Ma(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===Tc.fan?i.turnAround("x",720):n===Tc.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var Im=new U,Nm=new U,sd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=Tc[this.def.layout]||Tc.carousel,this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?uM:hM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?uo.text.size:uo.image.size:uo[this.card].size,this.k=bM(this.def),this.container=new Pn,this.container.position.copy(e.container.position),as.add(this.container),this.postViews=this.posts.map((t,i)=>new id(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Rm(this.def)&&(this.grid=Lm(this),this.L=this.gridL=Pm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Pt.map(f=>f.def.id)),t=new Map,i=(f,E,b)=>{if(!Nu(f))return;let N=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),P=t.get(N);P||t.set(N,P={loc:f,city:f.city||"",titles:[],base:!1}),E&&!P.titles.includes(E)&&P.titles.push(E),b&&(P.base=!0)};if(Iu(ve,this.def.id).forEach(f=>i(f.location,de(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(E=>i(E,de(f.title)))}),!t.size)return;_c.color.set(ti());let s=50,r=new Pn,a=[...t.values()],o=a.filter(f=>f.base),l=new zl(1,14,10),c={on:new tn({color:ti()}),base:new tn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ss+(le.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},a.forEach(f=>{f.xz=Cs(f.loc)}),a.forEach(f=>{f.from=f.base?null:o.length?o.map(E=>[E,Math.hypot(Cs(E.loc)[0]-f.xz[0],Cs(E.loc)[1]-f.xz[1])]).sort((E,b)=>E[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Cs(f.from.loc)[0]-f.xz[0],Cs(f.from.loc)[1]-f.xz[1]):0}),a.sort((f,E)=>E.base-f.base||f.d-E.d);let h=70,u=null,d=-1;a.forEach(f=>{let E=a.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);E.length>d&&(d=E.length,u=E)});let p=u.reduce((f,E)=>f+E.xz[0],0)/u.length,g=u.reduce((f,E)=>f+E.xz[1],0)/u.length,x=new jt;x.position.set(...Rs(p,s,g)),r.add(x),this.net.focus=x;let m=[];a.forEach((f,E)=>{let[b,N]=f.xz,P=f.base?0:.15+E*.07,R=new Bt(l,f.base?c.base:c.on);R.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),R.position.set(...Rs(b,s,N)),r.add(R),R.userData={netNode:f},this.net.hits.push(R);let D=null,z=0;if(f.from){let[F,ie]=Cs(f.from.loc),ue=s+18+f.d*.32,O=2*ue-s,G=(F+b)/2,B=(ie+N)/2;z=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=ee=>{let j=1-ee;return Rs(j*j*F+2*j*ee*G+ee*ee*b,j*j*s+2*j*ee*O+ee*ee*s,j*j*ie+2*j*ee*B+ee*ee*N)},q=[];for(let ee=0;ee<z;ee++)q.push(...ne(ee/z),...ne((ee+1)/z));let $=new lr;$.setPositions(q),D=new oo($,_c),D.computeLineDistances(),$.instanceCount=0,r.add(D)}let w=null,M=1/0;if(f.city){for(let F of m){let ie=Math.max(Math.abs(F[0]-b)/80,Math.abs(F[1]-N)/22);ie<F[2]&&(M=Math.min(M,ie))}M>.06&&(w=dM(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),w.position.set(...Rs(b,s+9,N)),r.add(w),m.push([b,N,M]))}this.net.items.push({dot:R,arc:D,segs:z,label:w,thr:M,delay:P,base:f.base,ds:R.scale.x,ls:w?w.scale.clone():null,x:b,z:N})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),le.planeSpeed>0){let i=ss+Z1;for(;ss<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*le.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,nn(e.thumb,r,{y:s.y,rotX:0},{delay:le.planeSpeed/3,ease:"expoOut",onComplete:o}),nn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,nn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Rs(...i),...Rs(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=Cg(r,dg),this.container.add(a))}async openInfo(e,t,i){let s=await uc(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new Ji(165,130),new tn({map:s,side:zn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),nn(a.p,le.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Mo(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,le.tween):t.moveToCamera(60,le.tween),this.focusInfo||(this.focusInfo={mesh:new Bt(new Ji(90,90),new tn({side:zn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await uc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Mo(le.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Mn(i),nn(i,le.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(le.tween/2),this.focusInfo&&(Mn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Rm(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Lm(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Pm(this.base)):this.base,r)return!0;let a=le.tween*1.2,o=H.postOpen&&Zc()==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===o)return;let u=this.following.has(l);Mn(l.thumb),this.following.add(l),nn(l.thumb,a,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Mn(d.p),nn(d.p,a,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=Io(),r=Cd(),a=2*e.width+3,o=Math.max(90,r*Math.max(a/(i.aw*.92),e.height/(i.ah*.85))),l=cs()+Fs.focus,c=o/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Mn(e.thumb),nn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-o,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Mn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Ni)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,le.cameraDistanceProportion/hs),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*Sn(le.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ss-this.net.start-s.delay)/.9)),a=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(a*s.segs));let o=s.base||r>=1;s.dot.visible=o,s.label&&(s.label.visible=o&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Rs(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ni)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Im.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Nm.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Im).add(Nm)}}async retexture(){this.net&&(_c.color.set(ti()),this.net.mats.on.color.set(ti()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(o=>o&&o.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(da===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(o=>o&&o.dispose()),i.bhi&&s[3]){let o=e(i.bhi.mesh,s[3]);o&&o.dispose()}else s[3]&&s[3].dispose();let a=this.infos[t];if(a){let o=await uc(this.posts[t],"place");if(!this.alive){o.dispose();return}let l=e(a.mesh,o);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await uc(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Mn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),zc(),as.remove(this.container)}},fr=[],Pe=null,pr=le.cameraEaseSpeed,Oi=!1,Gn=!1,Us=0,Os=0,xc=0,bc=0,Ws=!1,En=!1,ds=()=>fr[H.currentSection];function mM(){let n=le.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function gM(){let n=le.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var yM={map:58},Hc=(n=(ds()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||yM[n.layout]||100)/100)),pi=()=>Pe&&Pe.L.grid&&Pe.grid&&Pe.section===ds()?Pe:null,vM=n=>Cd()/n.sc*Math.min(1,le.cameraDistanceProportion/hs);function Vc(n){let e=n.grid,t=vM(e),i=t/Cd();return{d:Math.max(20,t-Fs.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var cs=()=>{let n=pi();return n?Vc(n).d:le.cameraDistance*Hc()},Gc=()=>{let n=pi();return n?Vc(n).ty:le.cameraTargetHeight*(((ds()||{}).def||{}).layout==="map"?Hc()*.62:1)},Dm=()=>{let n=pi();return n?Vc(n).ty:le.cameraHeight*(((ds()||{}).def||{}).layout==="map"?Hc()*1.6:1)},dc=new U;function _M(){return!_r()||pi()||le.cameraDistanceProportion>=hs?0:Math.min(1,(1-le.cameraDistanceProportion/hs)*1.25)}function xM(){let n=Pe&&Pe.net&&Pe.net.focus;return n?(n.getWorldPosition(dc),{x:dc.x,y:dc.y,z:-dc.z}):null}function Po(){let n=ds(),e=_M(),t=e?xM():null,i=Gc(),s=pi();return s?{x:n.p.x-Vc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var Ma=()=>{if(!_r()||pi())return Dm();let n=Math.min(1,le.cameraDistanceProportion/hs);return Po().ty+(Dm()-Gc())*Math.pow(n,.55)},bM=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),Io=()=>{let n=Po();return{d:cs(),x:n.x,z:n.z,ty:n.ty}},Yn=null;function Lg(n){if(!n||!Pe||!Pe.relayout())return;Mn(yt),Mn(Nn),Yn=n,pi()&&(H.degreeCamera=Rd(H.degreeCamera)),H.cameraY=Ma(),Gn=!0,pr=le.cameraEaseSpeed;let e=H.postOpen&&Zc()==="focus3d"&&!Je.open&&Pe.postViews[H.selected];e&&e.ready&&(Pe.L.grid?Pe.gridToCamera(e,le.tween/2):e.moveToCamera(60,le.tween/2))}var MM=0;function SM(){if(++MM%20||!Ws||H.postOpen||Oi||!En)return;let n=pi();if(!n)return;let e=Rg();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&Lg(Yn||Io())}function wM(){if(!Yn)return;let n=Io(),e=Sn(le.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-Yn[i];Math.abs(s)>.05?(Yn[i]+=s*e,t=!1):Yn[i]=n[i]}_a(Nn)||(Nn.x=Yn.x,Nn.y=Yn.ty,Nn.z=Yn.z),!Oi&&!Gn&&!_a(yt)&&rd(),t&&(Yn=null)}function rd(){let n=Yn||Io();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function Wc(){fr.forEach((n,e)=>{e===H.currentSection?n.container.parent||as.add(n.container):n.container.parent&&as.remove(n.container)}),Oi=!1,Gn=!1,pn.classList.remove("dragging"),da=null,ma=null,vo=null,Pe&&Pe.destroy(),Yn=null,Pe=new sd(ds()),_o(H.selected),H.actualDeg=H.degreeCamera,EM()}function EM(){let n=Po();H.cameraY=Ma(),Q1(cs()*Math.sin(H.degreeCamera)+n.x,H.cameraY,cs()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,le.cameraSpeed)}function _o(n){H.selected=n,Pe&&Pe.focus(n)}function Vu(n){!Pe||!Pe.n||(Gn=!0,Pe.checkPostSelected(),pr=le.cameraKeyboardSpeed,_o(n==="NEXT"?Pe.goNext():Pe.goPrev()))}var Ns=()=>Ht>700&&Vt>520;function $c(){let t=le.cameraDistanceProportion/280;le.cameraDistance=Math.round((Vt<680?1e3-Vt:320)*t)}function Pg(){if(Gn=!1,$c(),!Ws)return;let n=Po();if(H.postOpen&&Zc()==="focus3d"&&!Je.open&&Pe&&Pe.postViews[H.selected]){let t=Pe.postViews[H.selected];Pe.L.grid?Pe.gridToCamera(t,le.tween/2):t.moveToCamera(100,0)}let e=_r()||pi();eM(n.x+cs()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+cs()*Math.cos(H.actualDeg),le.cameraSpeed/2),e&&Sd(n.x,n.ty,n.z,le.cameraSpeed/2)}function TM(){if(!En){Math.abs(yt.y-H.cameraY)>.007&&!_a(yt)&&(yt.y-=(yt.y-H.cameraY)*Sn(le.cameraEaseSpeed));return}if(Oi){pr=le.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Us-xc)/150,H.actualDeg-=(H.actualDeg-n)*Sn(pr),rd(),H.cameraY+=(Os-bc)*2;let e=le.cameraHeight,t=_r()?Po().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*Sn(pr),le.animationMode&&Pe&&Pe.movePosts((xc-Us)/Math.max(Sc,.25),(bc-Os)/Math.max(Sc,.25),pr),xc=Us,bc=Os}else Gn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(Gn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*Sn(le.cameraEaseSpeed),rd(),yt.y-=(yt.y-H.cameraY)*Sn(pr),le.animationMode&&Pe&&Pe.movePosts(0,0,le.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*Sn(le.cameraEaseSpeed))}function AM(){yt.zoom=6;let e=Pe&&Pe.postViews[0]&&Pe.postViews[0].p2.y||le.planeDistance;yt.y=e+100,Nn.y=e+100,Sd(Nn.x,Gc(),Nn.z,1),En=!1,nn(yt,1,{zoom:Fs.zoom},{ease:"expoOut"}),setTimeout(()=>{En=!0},1*1e3+50)}var Gu=new U,Wu=new U,po=new U,mo=1;function CM(){Gu.copy(Qu(yt.x,yt.y,yt.z)),Wu.copy(Qu(Nn.x,Nn.y,Nn.z)),po.subVectors(Wu,Gu),po.lengthSq()<1e-6&&po.set(0,0,-1),po.normalize();let n=_r()&&!pi()?Math.min(1,le.cameraDistanceProportion/hs):1;mo+=Math.abs(n-mo)<.001?n-mo:(n-mo)*Sn(le.cameraEaseSpeed),Hn.position.copy(Gu).addScaledVector(po,-Fs.focus*mo),Hn.lookAt(Wu);let e=Math.min(1,Ht/900),t=2*Math.atan(Vt/2/(yt.zoom*Fs.focus*e))/Ni;Math.abs(Hn.fov-t)>1e-4&&(Hn.fov=t,Hn.updateProjectionMatrix())}function Ig(){Ht=window.innerWidth,Vt=window.innerHeight,Vs.setSize(Ht,Vt,!1),Hn.aspect=Ht/Vt,Hn.updateProjectionMatrix(),pg.forEach(n=>n.resolution.set(Ht,Vt))}var jn=document.getElementById("menu"),Vn=document.getElementById("slogan"),wn=document.getElementById("langs"),qc=[];function RM(){jn.innerHTML="",qc=Pt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=de(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&En&&No(e)}),t.appendChild(i),jn.appendChild(t),i}),jn.style.setProperty("--n",Pt.length),Ld()}function Ld(){qc.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function LM(){qc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),jn.hidden=!1,wn.hidden=!1,vr(),setTimeout(()=>jn.classList.add("ready"),(Pt.length+1)*200)}var PM=1.44,Um={col:362,gutter:160,side:79,top:34,bottom:20},Om={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Ls(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in Um){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?Um[t]:Math.max(Om[t][0],Math.min(Om[t][1],Math.round(+i)))}return e}function ad(n){let e=Ls(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Ht-2*le.margin)/(Je.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Ng(){let n=Vt<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=Vn.offsetTop+Vn.offsetHeight+(n?1:2)*le.margin,t=Je.height+12,i=n?24:(jn.offsetHeight||90)+70,s=(Vt-e-i)/t,r=(Vt-e-56)/t,a=Ht>700&&!n?14/(+di(ve.settings,"body").size||14):0,o=Math.max(n?.4:.5,Math.min(PM,Math.max(s,Math.min(a,r))));Je.scale=o,sn.style.top=e+"px",sn.style.transform=o!==1?`scale(${o.toFixed(3)})`:"",sn.style.width=o!==1?Math.ceil((Ht-le.margin)/o)+"px":"",sn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Vt-(e+t*o)<jn.offsetHeight+60)}function vr(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Je.open&&Je.height>100){let n=Vn.offsetTop+Vn.offsetHeight+Je.height*(Je.scale||1)+2*le.margin+30;n=Math.min(n,wn.getBoundingClientRect().top-jn.offsetHeight-22),jn.style.left=le.margin+"px",jn.style.top=n+"px"}else{let n=wn.hidden?Vt-30:wn.getBoundingClientRect().top;if(!Ns()&&!Bs.hidden){let e=Bs.getBoundingClientRect();e.height&&e.left<Ht/2&&(n=Math.min(n,e.top))}jn.style.left=(Ns()?26:le.margin)+"px",jn.style.top=Math.round(Math.min(Vt-(jn.offsetHeight||86)-(Ns()?100:56),n-(jn.offsetHeight||86)-24))+"px"}document.body.classList.toggle("post-open-wide",Ns()&&!!H.postOpen),Ug(),Dg()}function Dg(){if(!he||!he.btn)return;let n=he.btn;n.style.top=Math.round(Vn.offsetTop+Vn.offsetHeight+(Ns()?26:16))+"px",n.style.left=Vn.offsetLeft+2+"px",n.style.right="auto",pd()}function Ug(){Bs.style.top=Bs.style.left="",ld.style.maxHeight=Math.max(140,Vt-200)+"px",document.body.classList.toggle("cats-up",!Ns()&&Ht<560)}var km=(n,e=!1)=>Sm(n,ve.settings,e);function od(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?bt(n.logo):km(ni?"#ffffff":e,ni),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:km("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),NM(n.logo?t:IM)}var IM="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function NM(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var Mc="",Ac=document.querySelector('meta[name="description"]'),Fm=Ac?Ac.content:"",Pd=document.title;function Og(n){if(!(Ut||!ve)){document.title=n?`${de(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:Pd,Ac&&(Ac.content=n&&(dr(de(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||de(n.subtitle))||Fm);try{let e=new URL(location.href);n?e.searchParams.set("p",n.id):e.searchParams.delete("p"),e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&Sa("?p="+n.id,document.title)}}function DM(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||Ut||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{Mc||Sa("",Pd)}),document.head.appendChild(e)}function Sa(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:location.pathname.replace(/index\.html$/,"")+n,title:e,event:t})}catch{}}function Xc(){let n=ve.settings;Sg(),Qg(),Jc(),document.documentElement.lang=Zn,document.documentElement.classList.toggle("neg",ni),H.postOpen||(document.title=Pd||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[Zn]||n.taglines.en)||[],t=e.length?`<b class="wm">${Ae(e[0])}</b>${e.slice(1).map(a=>`<span>${Ae(a)}</span>`).join("")}`:Ae(n.name);if(Vn.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${Ae(Ee("homeLink"))}">${Ae(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${Ae(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,od(),!n.logo&&document.fonts){let a=di(n,"logo"),o=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(o)||document.fonts.load(o).then(()=>{ve.settings.logo||od()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let o=document.getElementById(a);o&&(o.classList.toggle("toggle",i),i?(o.setAttribute("role","button"),o.tabIndex=0,o.setAttribute("aria-pressed",String(ni)),o.title=Ee(ni?"toPos":"toNeg"),o.setAttribute("aria-label",o.title)):(o.removeAttribute("role"),o.removeAttribute("tabindex"),o.removeAttribute("aria-pressed"),o.removeAttribute("aria-label"),o.removeAttribute("title")))}),Dn.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),Hs.classList.contains("wait")||$d(de(n.home.enter)||Ee("enter")),qM(),KM(),Jn(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=Ee(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Ee("keys")),xo.setAttribute("aria-label",Ee("prev")),Cc.setAttribute("aria-label",Ee("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=Ee("category"));let r=n.langs&&n.langs.length?n.langs:ui;UM(r),[document.getElementById("home-langs")].forEach(a=>{if(a.innerHTML="",a.classList.add("hlg"),a.classList.remove("open"),a.hidden=r.length<2,r.length<2)return;let o=document.createElement("button");o.type="button",o.className="cur",o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label",Ee("lang")+" : "+Zn.toUpperCase()),o.innerHTML=`<b class="ic">${Zn.toUpperCase()}</b>`,o.addEventListener("click",()=>{let c=a.classList.toggle("open");o.setAttribute("aria-expanded",String(c))});let l=document.createElement("span");l.className="opts",r.filter(c=>c!==Zn).forEach(c=>{let h=document.createElement("button");h.type="button",h.textContent=c.toUpperCase(),h.lang=c,h.setAttribute("aria-label",Ee("lang")+" "+c.toUpperCase()),h.addEventListener("click",()=>Id(c)),l.appendChild(h)}),a.append(o,l)}),document.documentElement.style.setProperty("--accent",ti()),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",yg(ve.settings.accent||"#ffcc00")),bS()}function UM(n){if(wn.innerHTML="",wn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",Ee("lang")+" : "+Zn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${Zn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==Zn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",Ee("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{wn.classList.remove("open"),Id(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=wn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),wn.append(t,e)}document.addEventListener("pointerdown",n=>{if(wn.classList.contains("open")&&!wn.contains(n.target)){wn.classList.remove("open");let e=wn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});wn.addEventListener("keydown",n=>{if(n.code==="Escape"&&wn.classList.contains("open")){n.stopPropagation(),wn.classList.remove("open");let e=wn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Id(n){if(n!==Zn){Zn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(Xc(),Ws){qc.forEach((i,s)=>{i.textContent=de(Pt[s].def.name)}),Yc();let e=H.postOpen,t=H.selected;Si(),H.selected=t,Wc(),e&&Mo(.6,()=>Ao(t))}}}var To=document.getElementById("cats"),Bs=document.getElementById("cat-box"),ld=document.getElementById("cat-list"),kg=document.getElementById("cat-name"),cd=document.getElementById("cat-open"),xo=document.getElementById("pg-prev"),Cc=document.getElementById("pg-next");function Yc(){let n=H.data,e=n.categoryList;Bs.hidden=e.length<=1,ld.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${Ae(de(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{hd(),FM(t.id)}),i.appendChild(s),ld.appendChild(i)}),kg.innerHTML=`${Ae(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,Fg(),hd()}var fc=document.getElementById("pg-num");function Fg(){let n=H.data;xo.disabled=!n.hasNewer(),Cc.disabled=!n.hasOlder(),xo.hidden=Cc.hidden=!n.hasNewer()&&!n.hasOlder(),fc&&(fc.hidden=xo.hidden,fc.textContent=`${n.page}/${n.pages}`,fc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function hd(){clearTimeout(Nd),Bs.classList.remove("open"),cd.setAttribute("aria-expanded","false")}var Nd=0,Bg=-1e9;Bs.addEventListener("pointerenter",()=>clearTimeout(Nd));cd.addEventListener("click",()=>{clearTimeout(Nd);let n=Bs.classList.toggle("open");cd.setAttribute("aria-expanded",String(n))});xo.addEventListener("click",()=>{En&&Wg("newer")});Cc.addEventListener("click",()=>{En&&Wg("older")});var $s=document.getElementById("kb"),Dd=document.getElementById("kb-toggle"),zg=null;function ud(){$s.classList.add("open"),Dd.setAttribute("aria-expanded","true")}function Rc(){$s.classList.remove("open"),Dd.setAttribute("aria-expanded","false")}Dd.addEventListener("click",()=>{clearTimeout(zg),$s.classList.contains("open")?Rc():ud()});$s.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>qg({code:n.dataset.k,preventDefault(){}})));function ts(n){let e=$s.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function Hg(){$s.querySelector(".key.anim").classList.toggle("off",!le.animationMode)}var Ud=document.getElementById("whiteboard"),sn=document.getElementById("post2d"),Ps=document.getElementById("strip");function Bm(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[de(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(Ee("photo")+" "+e.trim()),t.join(" \xB7 ")}var OM=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),wa=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Ea=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},ba=n=>wa(n)?"youtube":Ea(n)?"vimeo":OM(n)?"video":"image",Je={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,sn.classList.remove("closing"),sn.hidden=!1,Ng(),this.geomKey=JSON.stringify(ad("project"));{let i=Ls();Ps.style.setProperty("--ft",i.top+"px"),Ps.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Ps.style.transform="translateX(0px)"},addRelations(n){let e=Eo(n);if(!e.length)return;let t=fo(ve,n).length>0,i=Ls(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),a=r?Math.max(12,i.gutter-i.side):i.side,o=Math.max(200,Math.min(300,i.col))+a+i.side,l=`<h2 class="ttl" style="left:${a}px;right:${i.side}px;top:${i.top}px">${Ae(Ee(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${a}px;bottom:${i.bottom}px">${e.length}</span>`;r||this.addPanel("relh",o,l),e.forEach(c=>{let h=yr(c),u=[c.date,de(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${Ae(c.id)}" aria-label="${Ae(de(c.title))}">`+(h?`<img src="${Ae(bt(h))}" alt="" draggable="false">`:"")+`<span class="mono"${h?" hidden":""}>${Ae(wo(de(c.title)))}</span><span class="cap"><span class="t">${Ae(de(c.title).trim())}</span>${u?`<span class="m">${Ae(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addLogos(n){let e=Ls(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,a=e.side,o=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${Ae(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",a*2+h*o,`<h3 class="lbl" style="left:${a}px;top:${i}px">${Ae(Ee("partners"))}</h3><div class="grid" style="left:${a}px;top:${g}px;grid-template-columns:repeat(${h},${o-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>Vg(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Ee("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${Ae(t)}</span><a href="${Ae(e)}" target="_blank" rel="noopener"><span class="host">${Ae(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Ps.appendChild(i),this.panels.push(i);let s=le.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>ba(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let a=r%t.length;t[a]==="bleed"&&a++;let o=0;for(;o<n.length;){let l=n[o];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}let c=t[a++%t.length],h=i[c]||1,u=n.slice(o,o+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),o+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${Ae(bt(h.src))}" alt="" draggable="false">`).join("")+(i?`<p class="mcap2">${Ae(i)}</p>`:"")),a=[...r.querySelectorAll("img")],o=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);a.forEach((d,p)=>{let[g,x,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(x),width:l(m),height:l(f)})}),o&&(u.cap?Object.assign(o.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):o.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return a.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&de(t.caption).trim());return e?de(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],a=263*s[1];return{w:2*46+r+16+a,boxes:[[46,46,r,263],[46+r+16,46,a,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Ls().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],a=(i-t)/(1/s[1]+1/s[2]),o=a/s[1];return{w:2*e+r+t+a,boxes:[[e,e,r,i],[e+r+t,e,a,o],[e+r+t,e+o+t,a,i-t-o]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[a,o]=e(t[1],230,160),l=30+o+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+a,r+c+120)+46,boxes:[[46,46,i,s],[r,30,a,o],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let a=(355-s)/2,o=34,l=i.map(c=>{let h=[o,a,s*c,s];return o+=s*c+10,h});return{w:o-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Ls().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],a=s[2]+s[3],o=t+(i-t)/(1/r+1/a),l=(o-t)/r,c=(o-t)/a,h=e+l+t;return{w:o+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?de(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),a=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-a,r,a]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?de(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],a=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,a,s,r]],cap:[70,a+r+10,s]}},e)},addMat(n){let t=n.caption?de(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${Ae(bt(n.src))}" alt="" draggable="false" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${Ae(t)}</p>`:"")),r=s.querySelector("img"),a=()=>{if(!r.naturalWidth)return;let o=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=o+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=o+"px"),this.layout()};r.addEventListener("load",a),r.complete&&a(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(o=>o!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=ba(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let a=r==="video",o=this.addPanel("media",e,""),l=document.createElement(a?"video":"img");if(l.draggable=!1,l.style.height=e+"px",a){Object.assign(l,{src:bt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Ee("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),o.querySelector(".in").appendChild(u)}else l.src=bt(n),l.alt="";let c=()=>{let u=Math.round(a?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(o.style.width=u+"px",this.layout())};l.addEventListener(a?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(u=>u!==o),this.layout())}),o.querySelector(".in").prepend(l);let h=s?de(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${Ae(d)}</b> `:"")+Ae(p),o.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?wa(n):Ea(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?bt(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Ee("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),a.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=ad(e),a=Ls(),o=355-a.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(P,R)=>r?[P===0?a.side:Math.floor(a.gutter/2),P===R-1?a.side:Math.ceil(a.gutter/2)]:[i,t-i-s],c=de(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=de(n.subtitle),u=H.section.def,d=n.tags.filter(P=>P!=="featured").map(P=>u.tags.find(R=>R.id===P)).filter(Boolean).map(P=>de(P.label)),p=d.length?`${Ae(Ee("postedIn"))} <span>${d.map(Ae).join(", ")}</span>`:"",g=Ae([n.date,de(n.place)].filter(Boolean).join(" | ")),x=ca(de(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${Ae(c)}</h2>${h?`<p class="stl" style="position:static">${Ae(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,E=h?m.lastChild.offsetHeight+6:0,b=e==="project"?Eg(n):[],N="";if(b.length){let P=(Pt.find(R=>R.def.id===b[0].section)||{}).def;N=`${Ae((P?de(P.name):Ee("skills")).trim())} ${b.map((R,D)=>`<span class="it"><button type="button" class="go" data-go="${Ae(R.id)}">${Ae(de(R.title).trim())}</button>${D<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let P=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${N?`<div class="posted skl-tags">${N}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${P}</div>`;let R=m.firstChild.offsetHeight,D=o-13,z=D-R,w=H.section.def.skills?Eo(n).length:0,M="",F=0;w&&(M=`<span class="lbl">${Ae(Ee(fo(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${w}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${M}</div>`,F=m.firstChild.offsetHeight);let ie=F?z-F-18:z,ue=a.top+f+6,O=a.top+f+E+20,G=qu(x,s,[o-O,o-a.top],m);m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]}</div>`;let B=G.length===1?O:a.top;if(G[G.length-1]&&B+m.firstChild.offsetHeight>ie-12){let q=qu(G.pop(),s,F?[o-B,ie-12-a.top]:[ie-12-B,ie-12-a.top],m);G.push(...q),F&&q.length===1&&G.push("")}let ne=0;if(F){B=G.length===1?O:a.top,m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]||""}</div>`;let q=B+(G[G.length-1]?m.firstChild.offsetHeight:0)+18;ne=G[G.length-1]?Math.min(ie,Math.max(Math.round((a.top+o)/2)-10,q)):a.top+4}G.forEach((q,$)=>{let ee=$===G.length-1,[j,oe]=l($,G.length);this.addPanel("txt",j+s+oe,($===0?`<h2 class="ttl" style="left:${j}px;top:${a.top}px;width:${s}px">${Ae(c)}</h2>${h?`<p class="stl" style="left:${j}px;top:${ue}px;width:${s}px">${Ae(h)}</p>`:""}`:"")+`<div class="body" style="left:${j}px;top:${$===0?O:a.top}px;width:${s}px">${q}</div>`+(ee&&F?`<div class="relp" style="left:${j}px;top:${ne}px;width:${s}px">${M}</div>`:"")+(ee?`<div class="meta" style="left:${j}px;top:${z}px;width:${s}px">${P}</div>`:""))})}else{let P=13+f+4,R=13+f+E+10,D=R+20,z=D+18+20;qu(x,s,[355-z-14,327],m).forEach((M,F)=>{this.addPanel("txt",t,(F===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${Ae(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${P}px;width:${s}px">${Ae(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${R}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${F===0?z:14}px;width:${s}px">${M}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(R=>ve.posts.find(D=>D.id===R)).filter(Boolean),t=Ls(),i=t.top,s=355-t.bottom,r=t.side,a=Math.max(24,Math.min(36,t.gutter)),o=R=>String(R+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${Ae(Ee("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((R,D)=>`<li data-i="${D}"><b>${o(D)}</b><span><span class="nm">${Ae(de(R.title).trim())}</span>${de(R.subtitle).trim()?`<i>${Ae(de(R.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${Ae(Ee("with"))}</i> ${Ae(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],x=r+p+a,m=x,f=i,E=0,b=0,N=x;e.forEach((R,D)=>{let z=g[D%g.length]*(e.length>12?.8:1),w=16;f+z+w>s&&f>i+1&&(m+=E+16,b++,f=i+(b%2?34:0),E=0);let M=Lo(R)&&R.published!==!1,F=document.createElement(M?"button":"div");F.className="face"+(M?" go":""),M&&(F.type="button",F.dataset.go=R.id),F.dataset.i=D,Object.assign(F.style,{left:m+"px",top:f+"px",width:z+"px",height:z+"px"});let ie=!R.thumb&&(td(R).find(O=>O!==n)||td(R)[0]),ue=ie?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${Ae(bt(yr(ie))).replace(/'/g,"%27")}') center/cover"`:"";F.innerHTML=(R.thumb?`<img src="${Ae(bt(R.thumb))}" alt="" draggable="false">`:`<span class="mono"${ue}>${Ae(wo(de(R.title)))}</span>`)+`<b class="n">${o(D)}</b>`,F.setAttribute("aria-label",de(R.title)),c.appendChild(F),E=Math.max(E,z),f+=z+w,N=Math.max(N,m+z)}),l.style.width=Math.ceil((e.length?N:r+p)+r)+"px";let P=(R,D)=>c.querySelectorAll(`[data-i="${R}"]`).forEach(z=>z.classList.toggle("on",D));c.querySelectorAll("[data-i]").forEach(R=>{["pointerenter","focus"].forEach(D=>R.addEventListener(D,()=>P(R.dataset.i,!0))),["pointerleave","blur"].forEach(D=>R.addEventListener(D,()=>P(R.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(R=>{let D=c.querySelector(`.face.go[data-i="${R.dataset.i}"]`);D&&(R.classList.add("go"),R.dataset.go=D.dataset.go)})},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Ht-2*le.margin)/(this.scale||1)))),`<div class="cn">${Ae(de(n.title))}.</div><div class="ac">${Ae(de(n.subtitle))}</div><div class="site">${n.link?`<a href="${Ae(n.link)}" target="_blank" rel="noopener">${Ae(e)}</a>`:""}</div><div class="ad">${ca(de(n.body))}</div><div class="ct">${Ae(de(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=le.animationMode?.8:0;return sn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Ps.querySelectorAll("video").forEach(n=>n.pause()),Ps.innerHTML="",this.panels=[],sn.hidden=!0,sn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(Lc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*Sn(le.easing),this.xprev=Lc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*Sn(le.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);Ps.style.transform=`translateX(${Math.round(this.x)}px)`}}},Jt=document.createElement("div");Jt.id="postv";Jt.hidden=!0;Jt.setAttribute("role","dialog");Jt.setAttribute("aria-modal","true");document.body.appendChild(Jt);var kM=()=>kc(),ks={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(c=>c&&c.src),s=Ae,r=de(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=de(n.subtitle).trim(),o=[];o.push(`<div class="pv-bar"><span class="pv-sec">${s(de(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(Ee("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&o.push(this.media(l,"pv-hero")),e==="place"){let c=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");o.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${a?`<p class="pv-stl">${s(a)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(c)}</a></p>`:"")+`<div class="pv-body">${ca(de(n.body))}</div>${de(n.place)?`<p class="pv-meta">${s(de(n.place))}</p>`:""}</div>`)}else{if(o.push(this.text(n,r,a,t)),t.skills&&o.push(this.relations(n)),e==="text"?i.slice(1).forEach(c=>o.push(this.media(c,"pv-full"))):o.push(this.gallery(i.slice(1))),t.skills||o.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&o.push(this.team(n)),n.logos&&n.logos.length&&o.push(`<section class="pv-logos"><h2 class="pv-h">${s(Ee("partners"))}</h2><div class="pv-lgrid">${n.logos.map(c=>`<span><img data-src="${s(c)}" alt=""></span>`).join("")}</div></section>`),n.link){let c=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,h=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");o.push(`<p class="pv-link"><span>${s(String(Ee("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(c)}" target="_blank" rel="noopener">${s(h)} \u2197</a></p>`)}o.push(this.next(n))}if(Jt.innerHTML=`<div class="pv-page">${o.join("")}</div>`,this.wire(),Jt.hidden=!1,Jt.scrollTop=0,Jt.offsetWidth,Jt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!Ut)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=Ae,r=ca(de(n.body)),a=r.split(/(?=<h3[\s>])/i),o=/^\s*<h3/i.test(a[0])?"":a.shift(),l=a.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>de(p.label)),h=[n.date,de(n.place)].filter(Boolean).join(" | "),u=Eg(n),d="";if(u.length){let p=(Pt.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?de(p.name):Ee("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(de(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${o||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(Ee("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=Ae,i=ba(n.src),s=n.caption?de(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let a=i==="youtube"?wa(n.src):Ea(n.src),o=i==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:this.post&&this.post.thumb?bt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(a||"")}"><div class="pv-cover">${o?`<img src="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(Ee("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(bt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(bt(n.src))}" alt="" loading="lazy">${r}</figure>`},gallery(n){let e=u=>ba(u.src)==="image",t=[],i=Ae,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(bt(d.src))}" alt="" loading="lazy">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],a={pair:2,quad:4,big2:3},o=String(this.post.id||""),l=0;for(let u of o)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=a[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let x=g.map(f=>f.caption?de(f.caption).trim():"").filter(Boolean)[0]||"",m=x?`<figcaption>${i(x)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(bt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=Eo(n);if(!e.length)return"";let t=Ae,i=fo(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(Ee(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=yr(s),a=[s.date,de(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?`<img src="${t(bt(r))}" alt="" loading="lazy">`:`<span class="mono">${t(wo(de(s.title)))}</span>`}<span class="t">${t(de(s.title).trim())}</span>${a?`<span class="m">${t(a)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=Ae,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(Ee("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=Lo(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?`<img src="${e(bt(i.thumb))}" alt="" loading="lazy">`:`<span class="mono">${e(wo(de(i.title)))}</span>`}<span class="t">${e(de(i.title).trim())}</span>${de(i.subtitle).trim()?`<span class="m">${e(de(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(Ee("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=yr(i),r=Ae;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(Ee("nextProject"))} \u2192</span><span class="t">${r(de(i.title).trim())}</span>${s?`<img src="${r(bt(s))}" alt="" loading="lazy">`:""}</button>`},wire(){Jt.querySelector(".pv-x").addEventListener("click",()=>zs()),Jt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Jt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Jt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>Vg(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Jt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${t}?autoplay=1&title=0&byline=0&portrait=0`,i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Jt.querySelectorAll("video").forEach(n=>n.pause()),Jt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Jt.hidden=!0,Jt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Jt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),ks.keepHistory=!0,jc(e.dataset.go),ks.keepHistory=!1)});Jt.addEventListener("keydown",n=>{n.code==="Escape"&&zs()});var $u=new Map;function Vg(n){if($u.has(n))return $u.get(n);let e=os(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,s,r);let l;try{l=o.getImageData(0,0,s,r)}catch{return{src:bt(n),raw:!0}}let c=l.data,h=M=>(.2126*c[M]+.7152*c[M+1]+.0722*c[M+2])/255,u=0,d=0,p=0,g=M=>{u++,c[M+3]<40?d++:p+=h(M)};for(let M=0;M<s;M++)g(M*4),g(((r-1)*s+M)*4);for(let M=0;M<r;M++)g(M*s*4),g((M*s+s-1)*4);let x=d>u*.5,m=x?0:p/Math.max(1,u-d),f=0,E=0;if(x){for(let M=0;M<c.length;M+=16)c[M+3]>128&&(f+=h(M),E++);f=E?f/E:0}let b=x?f<.5?1:0:m,N=Math.max(.25,Math.max(b,1-b));for(let M=0;M<c.length;M+=4){let F=c[M+3]/255,ie=h(M),ue=(Math.max(c[M],c[M+1],c[M+2])-Math.min(c[M],c[M+1],c[M+2]))/255,O=Math.min(1,Math.max(Math.abs(ie-b),ue*.8)/N);O=O<.08?0:Math.min(1,(O-.08)*1.35),c[M]=c[M+1]=c[M+2]=255,c[M+3]=Math.round(255*O*F)}o.putImageData(l,0,0);let P=s,R=r,D=-1,z=-1;for(let M=0;M<r;M++)for(let F=0;F<s;F++)c[(M*s+F)*4+3]>24&&(F<P&&(P=F),F>D&&(D=F),M<R&&(R=M),M>z&&(z=M));if(D<P)return{src:a.toDataURL("image/png")};let w=document.createElement("canvas");return w.width=D-P+1,w.height=z-R+1,w.getContext("2d").drawImage(a,-P,-R),{src:w.toDataURL("image/png")}}).catch(()=>({src:bt(n),raw:!0}));return $u.set(n,e),e}function qu(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of a){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let g=[];(function f(E,b){E.childNodes.forEach(N=>{N.nodeType===3?N.textContent.split(/(\s+)/).forEach(P=>P&&g.push({w:P,path:b})):f(N,[...b,N])})})(d,[]);let x=document.createElement("p");s.appendChild(x);let m=({w:f,path:E})=>{let b=x;for(let N of E){let P=b.lastChild;(!P||P.nodeType!==1||P.dataset.src!==N.outerHTML)&&(P=N.cloneNode(!1),P.dataset.src=N.outerHTML,b.appendChild(P)),b=P}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let E=function b(N){return N.lastChild&&N.lastChild.nodeType===1?b(N.lastChild):N}(x);E.removeChild(E.lastChild),u(),x=document.createElement("p"),s.appendChild(x),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var Lc=0,ns=null;sn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(ns={id:n.pointerId,x:n.clientX,y:n.clientY},Lc=n.clientX)});sn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(ns||Je.dragging)){Ta();return}if(Lc=n.clientX,!ns||n.pointerId!==ns.id||Je.dragging)return;let e=n.clientX-ns.x,t=n.clientY-ns.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Je.dragging=!0,Je.xprev=ns.x,Je.finalpos=Je.x,Je.vel=0;try{sn.setPointerCapture(n.pointerId)}catch{}sn.classList.add("grabbing")}});sn.addEventListener("click",n=>{Je.justDragged&&(n.preventDefault(),n.stopPropagation(),Je.justDragged=!1)},!0);sn.addEventListener("wheel",n=>{if(n.preventDefault(),!Je.open||Je.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Je.finalpos=Math.max(Je.end-60,Math.min(60,Je.finalpos-e*t/(Je.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ta=()=>{Je.dragging&&(Je.justDragged=!0,setTimeout(()=>{Je.justDragged=!1},0),Je.finalpos+=(Je.vel||0)*10),Je.vel=0,ns=null,Je.dragging=!1,sn.classList.remove("grabbing")};sn.addEventListener("pointerup",Ta);sn.addEventListener("pointercancel",Ta);sn.addEventListener("lostpointercapture",n=>{n.target===sn&&Ta()});window.addEventListener("pointerup",()=>{(ns||Je.dragging)&&Ta()});Ud.addEventListener("pointerdown",()=>zs());function No(n=-1,e=0){hg(),n===-1&&(n=H.currentSection||0),Si(),n!==H.currentSection&&Fd(),H.currentSection=n,H.resetData(),H.selected=e,Wc(),Ld(),Yc();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Sa("#"+H.section.def.id,de(H.section.def.name).trim())}function Gg(){Si(),H.selected=0,Wc(),Fg()}function Wg(n){(n==="newer"?H.data.newer():H.data.older())&&Gg()}function FM(n){H.data.changeCategory(n),kg.textContent=H.data.currentCatName,Gg(),Yc()}function Ao(n){Si(),H.selected=n,yo()}var zm=0;function jc(n){let e=ve.posts.find(h=>h.id===n),t=e?Pt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!En)return;hg(),Si();let i=t!==H.currentSection;i&&Fd(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.per;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!o&&Pe){Ao(l);return}H.selected=l,Wc(),Ld(),Yc();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Sa("#"+H.section.def.id,de(H.section.def.name).trim());let c=++zm;Mo(.5,()=>{c===zm&&H.data===s&&s.posts[l]===e&&Ao(l)})}Ps.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),jc(e.dataset.go))});var BM=(n,e=H.section&&H.section.def)=>e?n&&e.open==="focus3d"&&(e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))?"strip":e.open:"",Zc=()=>BM(H.data&&H.data.posts[H.selected]);function yo(){if(!Pe||!H.data.posts[H.selected])return;let n=Zc();Do(null),Bd(null),Si(),H.postOpen=!0,(n==="strip"||n==="focus3d")&&kM()?(ks.build(H.data.posts[H.selected],H.section.def.card),To.classList.add("hidden"),Oi=!1,pn.classList.remove("dragging"),Gn=!0,_o(H.selected)):n==="strip"?(Ud.hidden=!1,Je.build(H.data.posts[H.selected],H.section.def.card),To.classList.add("hidden"),Oi=!1,pn.classList.remove("dragging"),Gn=!0,_o(H.selected)):(Gn=!0,_o(H.selected),Pe.openPost3D()),vr(),Og(H.data.posts[H.selected])}function zs(){H.postOpen&&(H.postOpen=!1,ks.open?(ks.close(),To.classList.remove("hidden")):Je.open?(Je.close(),Ud.hidden=!0,To.classList.remove("hidden")):Pe&&Pe.closePost3D(),vr(),Og(null))}function Si(){H.postOpen&&zs()}function zM(){lg(!le.animationMode),Hg(),Pe&&Pe.resetPostPosition(),Gn=!0}var hs=le.cameraDistanceProportion,_r=()=>((ds()||{}).def||{}).layout==="map",HM=()=>_r()?60:le.cameraZoomMin;function Od(){le.cameraDistanceProportion<le.cameraZoomMax&&(le.cameraDistanceProportion=Math.min(le.cameraZoomMax,Math.trunc(le.cameraDistanceProportion*1.5)),$g())}function kd(){le.cameraDistanceProportion>HM()&&(le.cameraDistanceProportion=Math.trunc(le.cameraDistanceProportion/1.5),$g())}function $g(){(_r()||pi())&&(H.cameraY=Ma()),Pg()}function Fd(){le.cameraDistanceProportion!==hs&&(le.cameraDistanceProportion=hs,$c())}var Hm=!1;function qg(n){if(!En)return;Hm||(Hm=!0,ud(),zg=setTimeout(Rc,6e3));let e=H.postOpen&&Je.open,t=H.postOpen&&!Je.open;switch(n.code){case"ArrowLeft":ts("ArrowLeft"),e?Je.action("LEFT"):(Si(),Vu("PREVIOUS"),t&&yo());break;case"ArrowRight":ts("ArrowRight"),e?Je.action("RIGHT"):(Si(),Vu("NEXT"),t&&yo());break;case"ArrowUp":ts("ArrowUp"),e||mM();break;case"ArrowDown":ts("ArrowDown"),e||gM();break;case"Tab":ts("Tab"),e?(zs(),Vu("NEXT"),yo()):No((H.currentSection+1)%Pt.length);break;case"KeyK":$s.classList.contains("open")?Rc():ud();break;case"KeyA":ts("KeyA"),zM();break;case"Equal":case"NumpadAdd":ts("Equal"),e||kd();break;case"Minus":case"NumpadSubtract":ts("Minus"),e||Od();break;case"Space":ts("Space"),Pe&&Pe.checkPostSelected(),H.postOpen?zs():yo();break;case"Escape":Si();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Gt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||qg(n)});var Vm=new Kl,Gm=new et;function Pc(n,e){if(!Ws||!Pe)return null;Gm.set(n/Ht*2-1,-(e/Vt)*2+1),Vm.setFromCamera(Gm,Hn);let t=Vm.intersectObjects([...ds().blockers,...Pe.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:VM(n,e)||(t?t.object.userData:null)}var pc=new U;function VM(n,e){if(!Pe||!Pe.net)return null;let t=null,i=14;for(let s of Pe.net.hits){if(!s.visible)continue;s.getWorldPosition(pc).project(Hn);let r=(pc.x+1)/2*Ht-n,a=(1-pc.y)/2*Vt-e,o=Math.hypot(r,a);o<i&&pc.z<1&&(i=o,t=s.userData)}return t}var In=null,xi=null,dd=0,fd=0;pn.addEventListener("pointerdown",n=>{if(!En||In!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Ui.size>0)return;Us=dd=n.clientX,Os=fd=n.clientY;let e=Pc(n.clientX,n.clientY);Si(),xi=e&&e.post?e:null,xi&&xi.face==="back"&&(xi.post.view.focus(xi.post.id_),Gn=!0),In=n.pointerId,pn.setPointerCapture(n.pointerId),pn.classList.add("dragging"),xc=Us,bc=Os,Gn=!1,Oi=!0});function xr(n,e=!1){if(n.pointerId===In){if(In=null,pn.classList.remove("dragging"),Oi&&(Gn=!0,Oi=!1,pi()&&(H.degreeCamera=Rd(H.degreeCamera),H.cameraY=Ma())),e){xi=null;return}if(xi&&xi.face==="front"&&Math.hypot(n.clientX-dd,n.clientY-fd)<6){let t=Pc(n.clientX,n.clientY);t&&t.post===xi.post&&Ao(t.post.id_)}else if(!xi&&Math.hypot(n.clientX-dd,n.clientY-fd)<6){let t=Pc(n.clientX,n.clientY);t&&t.netNode?Ag(t.netNode,n.clientX,n.clientY):zc()}xi=null}}pn.addEventListener("pointerup",xr);pn.addEventListener("pointercancel",n=>xr(n,!0));pn.addEventListener("lostpointercapture",n=>{n.pointerId===In&&xr(n,!0)});window.addEventListener("pointerup",n=>{In!==null&&n.pointerId===In&&n.target!==pn&&xr(n,!0)});window.addEventListener("blur",()=>{In!==null&&xr({pointerId:In},!0),Ta()});var Xu=!1,da=null,ma=null,vo=null;function Bd(n){vo!==n&&(vo&&vo.hoverBack(!1),vo=n,n&&n.hoverBack(!0))}var Xg=()=>kc()&&En&&Pe&&["carousel","spiral"].includes(Pe.def.layout);function zd(){return H.postOpen||!Pe?null:ma&&ma.view===Pe?ma:Xg()?(Pe.checkPostSelected(),Pe.postViews[H.selected]||null):null}var GM=0;function WM(){++GM%6===0&&Xg()&&Do(zd())}function Do(n){da!==n&&(da&&da.hover(!1),da=n,n&&n.hover(!0))}pn.addEventListener("pointerleave",()=>{ma=null,Do(zd()),Bd(null)});pn.addEventListener("pointermove",n=>{if(In!==null&&n.pointerId===In&&n.pointerType==="mouse"&&n.buttons===0){xr(n,!0);return}In!==null&&n.pointerId!==In||(Us=n.clientX,Os=n.clientY,In===null&&n.pointerType==="mouse"&&!Xu&&(Xu=!0,requestAnimationFrame(()=>{Xu=!1;let e=Pc(Us,Os);pn.classList.toggle("hover",!!(e&&e.post)),ma=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,Do(zd()),Bd(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?Ag(e.netNode,Us,Os):zc()})))});var Wm=0,Ui=new Map,fa=null,Yg=()=>{let[n,e]=[...Ui.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Gt||Je.open||!Ui.size&&n.target!==pn||(Ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ui.size===2&&(In!==null&&xr({pointerId:In},!0),fa={last:Yg()}))});window.addEventListener("pointermove",n=>{if(!Ui.has(n.pointerId)||(Ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),!fa||Ui.size<2||!En))return;let e=Yg(),t=e/fa.last;t>1.15?(kd(),fa.last=e):t<1/1.15&&(Od(),fa.last=e)});var $M=n=>{Ui.delete(n.pointerId),Ui.size<2&&(fa=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,$M));pn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!En||e-Wm<220||!n.deltaY||e-Bg<1400||(Wm=e,n.deltaY<0?kd():Od())},{passive:!1});window.addEventListener("resize",()=>{let n=ls(),e=Ws&&Pe?Yn||Io():null;Ig(),Pg(),vr(),Lg(e),ls()!==n&&Pe&&Pe.retexture(),l0(),md(),Je.open&&(Ng(),clearTimeout(Je.relayout),Je.relayout=setTimeout(()=>{Je.open&&Je.post&&JSON.stringify(ad("project"))!==Je.geomKey&&(Je.build(Je.post,H.section.def.card),vr())},250))});function $m(){if(ve.settings.negativeToggle!==!1){if(ni=!ni,So()&&Uc(),!Ut)try{localStorage.setItem("hc-neg",(ni?"1":"0")+(So()?"@"+gr:""))}catch{}Xc(),Pe&&Pe.retexture()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,a=i,o=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(o>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(a)*o*d,g=d+Math.sin(a)*o*d,x=Math.max(0,Math.min(1,1-o/.28)),m=d-x*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{a=s=i,o=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),x=t-(d.top+p),m=Math.hypot(g,x);m>.5&&(i=Math.atan2(x,g));let f=m/p,E=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=E*E*(3-2*E);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",$m),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),$m())}))});var he=null,jg=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function qM(){let n=(ve.settings.showreel||"").trim();if(!he){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),he={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>n0()),he.x.addEventListener("click",mc),i.querySelector(".scrim").addEventListener("click",mc),he.snd.addEventListener("click",()=>Zg(!he.muted)),window.addEventListener("keydown",s=>{if(he.open){if(s.code==="Escape")s.preventDefault(),mc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!he.player||s.source!==he.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==he.muted&&(he.muted=r.info.muted,Co())})}he.btn.hidden=!n,he.btn.setAttribute("aria-label","Showreel"),he.x.setAttribute("aria-label",Ee("close")),n!==he.src&&(he.open&&mc(!0),he.src=n,he.kind=n?ba(n):"",he.vid.innerHTML="",he.player=null);let e=he.kind==="youtube"?`https://www.youtube.com/watch?v=${wa(n)}`:he.kind==="vimeo"?`https://vimeo.com/${Ea(n)}`:"";he.ext.hidden=!e,e&&(he.ext.href=e,he.ext.textContent=(he.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Co()}function Co(){he&&(he.snd.innerHTML=jg(!he.muted)+`<span>${Ee(he.muted?"soundOn":"soundOff")}</span>`,he.snd.setAttribute("aria-pressed",String(!he.muted)))}function Ic(n,e=[]){let t=he.player;if(!(!t||!t.contentWindow)){if(he.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(he.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function Zg(n){he.muted=n,Co(),he.kind==="video"?he.player&&(he.player.muted=n,n||(he.player.volume=1)):(Ic(n?"mute":"unMute"),n||Ic("setVolume",[100]))}function XM(){if(!(!he||!he.src||he.open)){if(he.open=!0,he.last=document.activeElement,he.player)he.kind==="video"?he.player.play().catch(()=>{}):Ic("playVideo");else{let n=he.src,e=he.kind;if(e==="video"){let t=document.createElement("video");t.src=bt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==he.muted&&(he.muted=t.muted,Co())}),he.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?wa(n):Ea(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),he.muted||Zg(!1)}),he.player=t}else{let t=document.createElement("img");t.src=bt(n),t.alt="",he.player=t}he.muted=!0,Co(),he.vid.appendChild(he.player)}he.snd.hidden=!/^(youtube|vimeo|video)$/.test(he.kind),he.box.hidden=!1,he.btn.setAttribute("aria-expanded","true"),he.box.offsetWidth,he.box.classList.add("on"),setTimeout(()=>{he.open&&he.x.focus({preventScroll:!0})},60)}}function mc(n){!he||!he.open||(he.open=!1,he.btn.setAttribute("aria-expanded","false"),he.kind==="video"?he.player&&he.player.pause():Ic("pauseVideo"),he.box.classList.remove("on"),clearTimeout(he.t),he.t=setTimeout(()=>{he.open||(he.box.hidden=!0)},n===!0?0:650),he.last&&he.last.focus&&n!==!0&&he.last.focus({preventScroll:!0}))}var y=null,pa=["white","grey","accent","source"],Jg=8;function YM(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(pa,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function jM(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=YM(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>md()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:pa.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(Jg,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=fS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let o=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(o.crossOrigin="anonymous"),Object.assign(o,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:bt(s)}),o.setAttribute("playsinline",""),o.addEventListener("loadedmetadata",()=>{isFinite(o.duration)&&o.duration>2&&(o.currentTime=Math.random()*(o.duration-1)),o.play().catch(()=>{})},{once:!0}),y.video=o}else{let o=p=>p&&!/^(https?:|data:)/.test(p)&&/\.(jpe?g|png|webp)$/i.test(p),l=ve.sections.find(p=>p.visible&&p.card==="image"&&!p.skills)||{},c=ve.posts.filter(p=>p.published!==!1&&o(p.thumb)),h=c.filter(p=>p.section===l.id),u=p=>p.map(g=>g.thumb).sort(()=>Math.random()-.5),d=[...new Set([...u(h),...u(c)])].slice(0,10);y.pics=d.map(p=>{let g=new Image;return g.decoding="async",g.src=bt(p),g})}if(ZM(e.controls!==!1),Vd()&&Ro()&&!/[?&]p=/.test(location.search)&&!Qc.matches&&!(Ut&&Ut.start)){let o=performance.now(),l=()=>{!Gt&&!y.reelOn&&!y.cam&&!y.userReel&&Ro()&&i0(!0)},c=setInterval(()=>{(eh||performance.now()-o>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),a=document.getElementById("home-ctl");r&&a?a.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),md()}var ga={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function ZM(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${ga.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${ga.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${ga.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let a=document.getElementById("home-band"),o=a.querySelector(".lg");o?o.after(r):a.appendChild(r),n&&tS(e,i,r),aS(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?us():n0()});let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){Nc(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("pointerenter",u=>{u.pointerType==="mouse"&&h(!0)}),l.addEventListener("pointerleave",u=>{u.pointerType==="mouse"&&h(!1)}),l.addEventListener("focus",()=>{l.matches(":focus-visible")&&h(!0)}),l.addEventListener("blur",()=>h(!1)),l.addEventListener("click",u=>{u.pointerType!=="mouse"&&h(!c.classList.contains("on"))}),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?r0():u.dataset.src==="video"&&y.cam&&Kc()})),document.getElementById("hv-shot").addEventListener("click",QM),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>Hd()),Qg(),Jc()}function Jc(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(g=>{let x=g.dataset.src==="cam"===e;g.setAttribute("aria-pressed",String(x)),g.classList.toggle("on",x),g.textContent=Ee(g.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Ee("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=Ee("hv_words"),s.setAttribute("aria-label",Ee("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",Ee("hv_shot")),r.querySelector("span").textContent=Ee(i?"hv_shot":"photo");let a=document.querySelector("#hv-panel .priv");a&&(a.textContent=Ee("hv_private"));let o=n.querySelector("#story-btn");o.setAttribute("aria-label",Ee("story")),o.querySelector(".lbl").textContent=Ee("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=de((ve.settings.home||{}).sub||{}).trim();l&&(l.hidden=!h,Nc(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=Ee("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?Ee("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?Ee("stop"):"Showreel"}var qm=0,Kg=()=>de((ve.settings.home||{}).sub||{}).trim();function JM(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>bt(s.thumb))}function Nc(n,e=!0){if(n.querySelector("p").textContent=Kg(),!e)return;let t=JM(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var Yt=null,ln=null;function KM(){if(!Yt){Yt=document.createElement("button"),Yt.type="button",Yt.id="about-btn",Yt.className="ui",Yt.setAttribute("aria-expanded","false"),Yt.innerHTML=`<b class="ic">${ga.about}</b>`,ln=document.createElement("figure"),ln.id="about-card",ln.className="ui",ln.hidden=!0,ln.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append(Yt,ln);let e=t=>{t&&(Nc(ln),ln.hidden=!1,pd(),ln.offsetWidth),ln.classList.toggle("on",t),Yt.classList.toggle("on",t),Yt.setAttribute("aria-expanded",String(t))};Yt.addEventListener("pointerenter",t=>{t.pointerType==="mouse"&&e(!0)}),Yt.addEventListener("pointerleave",t=>{t.pointerType==="mouse"&&e(!1)}),Yt.addEventListener("focus",()=>{Yt.matches(":focus-visible")&&e(!0)}),Yt.addEventListener("blur",()=>e(!1)),Yt.addEventListener("click",t=>{t.pointerType!=="mouse"&&e(!ln.classList.contains("on"))}),document.addEventListener("pointerdown",t=>{ln.classList.contains("on")&&!t.target.closest("#about-btn")&&e(!1)})}let n=Kg();Yt.hidden=!n,Yt.setAttribute("aria-label",n),Nc(ln,!1),pd()}function pd(){if(!Yt)return;let n=he&&he.btn&&!he.btn.hidden?he.btn:null,e=n?n.offsetTop+n.offsetHeight+8:Math.round(Vn.offsetTop+Vn.offsetHeight+(Ns()?26:16));if(Yt.style.top=e+"px",Yt.style.left=Vn.offsetLeft+2+"px",!ln.hidden){let t=Ns(),i=Vn.offsetLeft+2;if(t){let s=Math.max(16,Math.min(e,Vt-20-ln.offsetHeight));ln.style.left=i+Yt.offsetWidth+12+"px",ln.style.top=s+"px"}else ln.style.left=i+"px",ln.style.top=e+Yt.offsetHeight+8+"px"}}function ya(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(qm),t.textContent=n||"",t.hidden=!n,n&&e&&(qm=setTimeout(()=>{t.hidden=!0},e)))}async function QM(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(y.cell,y.floor),a=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,y.W)))),o=Math.ceil(n/a),l=Math.ceil(e/a),c={ctx:y.ctx,W:y.W,H:y.H,ow:y.off.width,oh:y.off.height,lo:y.lo,hi:y.hi};try{if(y.ctx=i,y.W=n,y.H=e,y.off.width=y.raw.width=o,y.off.height=y.raw.height=l,!a0(Qc.matches?0:(performance.now()-y.t0)/1e3))return;y.octx.globalAlpha=1,y.octx.drawImage(y.raw,0,0);let oe=null;try{oe=y.octx.getImageData(0,0,o,l).data}catch{}oe?o0(oe,o,l,a):yd(o,l,a)}finally{y.ctx=c.ctx,y.W=c.W,y.H=c.H,y.off.width=y.raw.width=c.ow,y.off.height=y.raw.height=c.oh,y.lo=c.lo,y.hi=c.hi,y.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=getComputedStyle(document.documentElement).getPropertyValue("--grotesk").trim()||"sans-serif",x=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),m=getComputedStyle(x),f=oe=>`${m.fontStyle==="italic"?"italic ":""}${m.fontWeight} ${oe}px ${m.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${g}`),document.fonts.load(`500 27px ${g}`),document.fonts.load(f(110))])}catch{}let E=72,b=78,N=ve.settings.taglines&&(ve.settings.taglines[Zn]||ve.settings.taglines.en)||[],P=N[0]||(ve.settings.name||"Hand Coded")+".",R=N.slice(1),D=27,z=31;i.font=`500 ${D}px ${g}`;let w=R.length?Math.max(...R.map(oe=>i.measureText(oe).width))+30:0,M=130;for(i.font=f(M);i.measureText(P).width>n-2*E-w&&M>48;)M-=4,i.font=f(M);let F=i.measureText(P).width;i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText(P,E,b+M*.8),i.font=`500 ${D}px ${g}`,i.textBaseline="top",R.forEach((oe,V)=>i.fillText(oe,E+F+30,b+M*.12+V*z));let ie=n-2*E,ue=104,O=[];for(;ue>=40&&(i.font=`bold ${ue}px ${g}`,O=Zt(i,p,ie),!(O.length<=4));ue-=4);O=p?O.slice(0,4):[];let G=Math.round(ue*1.05),B=e-96,ne=B-44-O.length*G;i.fillStyle=ti(),O.length&&i.fillRect(E,ne-38,54,7),i.fillStyle="#fff",i.font=`bold ${ue}px ${g}`,O.forEach((oe,V)=>i.fillText(oe,E-ue*.04,ne+V*G)),i.fillStyle="#8f8f8f",i.font=`28px ${g}`,i.fillText("hand-coded.net",E,B);let q=await new Promise(oe=>t.toBlob(oe,"image/jpeg",.92));if(!q)return;Sa("photo-souvenir","Photo souvenir",!0);let $="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",ee=typeof File=="function"?new File([q],$,{type:"image/jpeg"}):null;if(ee&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[ee]}))try{await navigator.share({files:[ee],title:ve.settings.name||"Hand Coded"}),ya(Ee("hv_shotDone"),2500);return}catch(oe){if(oe&&oe.name==="AbortError")return}let j=document.createElement("a");j.href=URL.createObjectURL(q),j.download=$,document.body.appendChild(j),j.click(),setTimeout(()=>{URL.revokeObjectURL(j.href),j.remove()},2e3),ya(Ee("hv_shotDone"),2500)}function Qg(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=de(t.title||{}).trim(),s=ca(de(t.body||{})),r=!!(i||dr(s).join("").trim());n.hidden=!r;let a=document.getElementById("hc-story");if(!r){a&&a.remove();return}a||(a=document.createElement("section"),a.id="hc-story",a.hidden=!0,e.appendChild(a)),a.setAttribute("aria-label",i||Ee("story"));let o=(t.images||[]).filter(Boolean);a.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${Ae(Ee("close"))}">\xD7</button><h2>${Ae(i||Ee("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${Ae(t.link)}" target="_blank" rel="noopener">${Ae(de(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(o.length?`<div class="shots scroll-x">${o.map(l=>`<a href="${Ae(bt(l))}" target="_blank" rel="noopener"><img src="${Ae(bt(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",a.querySelector(".x").addEventListener("click",()=>Hd(!1))}var Xm=0;function Hd(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Xm),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Xm=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),Hd(!1))},!0);function md(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);y.W=Math.max(1,Math.round(n.width)),y.H=Math.max(1,Math.round(n.height)),y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn&&Gd()}var gd=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:Jg,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>vd()+(vd()<y.delay?"*":"")}],eS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function tS(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+gd.map(l=>`<label class="rw"><span class="lb" data-k="${l.p}"></span><input type="range" data-p="${l.p}" min="${l.min}" max="${l.max}" step="${l.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${pa.map(l=>`<button type="button" data-c="${l}"><i class="c-${l}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${ga.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,a=l=>{clearTimeout(r),l?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(l)),s.classList.toggle("on",l),n.classList.toggle("hv-open",l),l&&Jn()};y.setOpen=a,s.addEventListener("click",()=>a(!i.classList.contains("open"))),n.addEventListener("pointerdown",l=>{i.classList.contains("open")&&!l.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&a(!1)}),i.querySelectorAll("input[data-p]").forEach(l=>{let c=gd.find(h=>h.p===l.dataset.p);l.addEventListener("input",()=>{c.set(+l.value),Jn()})});let o=l=>{if(l==="color")y.color=pa[(pa.indexOf(y.color)+1)%pa.length];else if(l==="invert")y.mode=y.mode==="light"?"dark":"light";else if(l==="sound"){t0(!y.sound);return}else if(l==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Kc():r0()}Jn()};i.querySelectorAll("[data-c]").forEach(l=>l.addEventListener("click",()=>{y.color=l.dataset.c,Jn()})),i.querySelectorAll(".tgl").forEach(l=>l.addEventListener("click",()=>o(l.dataset.a))),window.addEventListener("keydown",l=>{if(Gt||l.ctrlKey||l.metaKey||l.altKey||he&&he.open||l.target&&l.target.id==="hv-words")return;if(l.code==="Escape"&&i.classList.contains("open")){a(!1),s.focus({preventScroll:!0});return}if(l.code==="Escape"&&y.reelOn){us();return}let c={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[l.code];if(c){if(l.preventDefault(),c==="panel"){a(!i.classList.contains("open"));return}y.touched||(y.touched=!0,a(!0)),o(c)}}),Jn()}function Jn(){if(Jc(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Ee("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",Ee("hv_panel")),y.toggle.title=Ee("hv_panel")+" (K)",gd.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),eS(i),i.setAttribute("aria-label",Ee("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Ee("hv_color")+" "+Ee("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),e0()}function e0(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var nS=()=>y&&!y.reelOn?y.video:null;function t0(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),Jn(),Ds()}var Vd=()=>!!(he&&he.src&&/^(video|youtube|vimeo)$/.test(he.kind));function n0(){y&&Vd()?(Gt&&th(),i0()):XM()}function iS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:bt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,Ds()};["timeupdate","durationchange","play","pause"].forEach(a=>s.addEventListener(a,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Gd(),r()}),s.addEventListener("ended",()=>us()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:a=>{s.muted=a,a||(s.volume=1)},seek:a=>{s.currentTime=a}})}else{let s=document.createElement("iframe"),r=n==="youtube",a=r?wa(e):Ea(e),o=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${o}`:`https://player.vimeo.com/video/${a}?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0`,s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{r&&l({event:"listening",id:"hvreel",channel:"widget"})}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),Dc(),Ds()},pause:()=>{i.paused=!0,c(r?"pauseVideo":"pause"),Dc(),Ds()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,Ds()}})}return sS(i,t)}function Dc(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&n.t>=(n.showAt||0);e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!Gt&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function sS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){us();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){us();return}}Ds(),Dc()}});function Gd(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=e/t>=1.2,s=n.ratio,r=e,a=e/s;(i?a<t:a>t)&&(a=t,r=t*s),Object.assign(n.el.style,{width:Math.ceil(r)+"px",height:Math.ceil(a)+"px",left:Math.round((e-r)/2)+"px",top:Math.round((t-a)/2)+"px"})}function i0(n=!1){if(!y||!Vd())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Kc();let e=he.kind+"|"+he.src;if(!y.rp||y.rp.key!==e){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=iS(he.kind,he.src),y.rp.key=e;let t=document.getElementById("home-band");t.insertBefore(y.rp.box,t.querySelector(".hv-shade")),y.sound&&he.kind==="video"&&y.rp.mute(!1),he.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,Dc()),Dn.classList.add("reel-on"),Gd(),Ds(),Jn(),n||Sa("showreel","Showreel",!0),!0}function us(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!Gt&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),Dn.classList.remove("reel-on"),Ds(),Jn())}var rS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Yu=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),s0=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function aS(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",s0),e.querySelector(".snd").addEventListener("click",()=>t0(!y.sound)),e.querySelector(".x").addEventListener("click",us);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function Ds(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,Jc(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=rS(e.paused),s.setAttribute("aria-label",Ee(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Yu(i)} / ${Yu(t)}`:Yu(i);let r=n.querySelector(".snd");r.innerHTML=jg(y.sound),r.setAttribute("aria-label",Ee(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",Ee("close"))}function oS(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${Ae(Ee("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${ga.shot}<span>${Ae(Ee("hv_camYes"))}</span></button><button type="button" class="no">${Ae(Ee("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",Ee("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function r0(){if(ya(""),!y.camOK){if(!await oS()){Jn();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&us(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||ya(Ee("hv_camNote"),6e3)}catch{ya(Ee("hv_camDenied"),4e3)}Jn()}function Kc(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=nS();n&&!Gt&&n.play().catch(()=>{}),ya("")}y&&Jn()}function lS(){y&&(us(),Kc(),y.video&&y.video.pause())}function ju(n,e,t,i=1,s=0,r=0,a=!1,o=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(o?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;a&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),a&&l.restore()}function a0(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return ju(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(ju(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,ju(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[a],o,1),o>.78&&r>1&&l(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var cS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function hS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-o/y.fill))*255,c=(r*n+a)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function yd(n,e,t){let i=y.ctx,s=y.W,r=y.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!cS){i.globalAlpha=.45,i.drawImage(y.off,a,o,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,a,o,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(a,o),c.fillStyle=hS(t),c.fillRect(-a,-o,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,a,o,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Qc=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},vd=()=>y.floor||y.interval>1e3/29?1:y.delay;function uS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>Ym){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),Zm());return}if(y.reelOn||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=Qc.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,a=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,e0()),Wd()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,a)),y.intro&&n<y.intro){Zm();return}let o=y.intro?n-y.intro:-1;if(o>dS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<Ym/3&&yd(f.cols,f.rows,f.cell):Jm(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(a/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!a0(i))return;let u=vd();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),yd(c,h,l)):Jm(d,c,h,l,e,o),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],x=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(x));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(Jn,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(Jn,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var Ym=420,dS=650,jm=(n,e)=>Math.pow(1-1/n,e*.06);function o0(n,e,t,i,s=-1,r=-1){let a=y.ctx,o=e*t,l=y.lum&&y.lum.length===o?y.lum:y.lum=new Float32Array(o),c=1,h=0;for(let P=0,R=0;P<o;P++,R+=4){let D=(.2126*n[R]+.7152*n[R+1]+.0722*n[R+2])/255;l[P]=D,D<c&&(c=D),D>h&&(h=D)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,x=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,E=y.color==="source",b=s>=0||r>=0,N=E?mS(a):a;N.fillStyle=E?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",N.beginPath();for(let P=0,R=0;P<t;P++){let D=f+P*i+i/2;for(let z=0;z<e;z++,R++){let w=(l[R]-u)*d;w=w<0?0:w>1?1:w,p&&(w=1-w);let M=(g===1?w:Math.pow(w,g))*x;if(M<.6)continue;let F=m+z*i+i/2,ie=D;if(b){let ue=M/x;if(s>=0?M*=jm(2.4+4.6*ue,s):M*=1-jm(3+4*ue,r),M<.6)continue}N.rect(F-M/2,ie-M/2,M,M)}}N.fill(),E&&(N.globalCompositeOperation="source-in",N.imageSmoothingEnabled=!1,N.drawImage(y.off,m,f,e*i,t*i),N.globalCompositeOperation="source-over",a.save(),a.setTransform(1,0,0,1,0,0),a.drawImage(N.canvas,0,0),a.restore())}function fS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
uniform sampler2D T;uniform vec2 grid,org,res;uniform float cell,maxs,lo,k,gam,dark,ex,intro,dpr,src;uniform vec3 col,bg;
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
  float a=clamp((h-d.x)*dpr+.5,0.,1.)*clamp((h-d.y)*dpr+.5,0.,1.);if(sz<.6)a=0.;
  gl_FragColor=vec4(mix(bg,src>.5?s.rgb:col,a),1.);
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let a=t.getAttribLocation(s,"a");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Wd=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function Zm(){if(!Wd())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var pS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function Jm(n,e,t,i,s=-1,r=-1){if(!Wd()){o0(n,e,t,i,s,r);return}let a=y.gl,o=a.gl,l=a.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let x=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;x<h&&(h=x),x>u&&(u=x)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,a.data!==n&&(a.data=n,o.texImage2D(o.TEXTURE_2D,0,o.RGBA,e,t,0,o.RGBA,o.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),o.viewport(0,0,a.c.width,a.c.height);let d=pS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");o.uniform2f(l.grid,e,t),o.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),o.uniform2f(l.res,a.c.width,a.c.height),o.uniform1f(l.cell,i),o.uniform1f(l.maxs,i*y.fill),o.uniform1f(l.lo,y.lo),o.uniform1f(l.k,1/(y.hi-y.lo)),o.uniform1f(l.gam,y.gamma),o.uniform1f(l.dark,y.mode==="dark"?1:0),o.uniform1f(l.ex,s),o.uniform1f(l.intro,r),o.uniform1f(l.dpr,a.dpr),o.uniform1f(l.src,y.color==="source"?1:0),o.uniform3f(l.col,d[0],d[1],d[2]),o.uniform3f(l.bg,11/255,11/255,11/255),o.drawArrays(o.TRIANGLES,0,3)}function mS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Dn=document.getElementById("home"),Hs=document.getElementById("enter"),gS=Hs.querySelector(".lbl"),mr=document.getElementById("ticker"),Km=mr.getContext("2d"),is=null,go=0,va=1;function $d(n){gS.textContent=n,Hs.setAttribute("aria-label",n)}var Qm={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},yS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=Qm[e]||Qm["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function vS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var _S=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:vS(n.value),label:de(n.label)})).filter(n=>n.value&&n.label),xS=()=>_S().map(n=>`${n.value} ${n.label}`);function bS(){let n=de(ve.settings.home.sub||{}).trim(),e=n?[n]:[...xS(),...ve.settings.home.ticker||[]].filter(Boolean),t=(e.length?e:[ve.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";is=MS(t)}function MS(n){let e=[];for(let t of n){let i=yS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let a=0;for(let o=0;o<7;o++)i[o]&1<<4-r&&(a|=1<<o);e.push(a)}e.push(0)}return{w:e.length,cols:e}}var fi={pitch:3.2,rows:7,h:30},ha=null,eg="";function tg(n,e){let t=va,i=Math.ceil(fi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,fi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-fi.pitch*.1*t,a-fi.pitch*.1*t,fi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function l0(){va=Math.min(window.devicePixelRatio||1,2),mr.width=Math.round(window.innerWidth*va),mr.height=Math.round(fi.h*va),ha=null,ua=null}var gc=0,ua=null;function SS(n){let e=va,t=fi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[is.w,i,e,n].join("|");if(ua&&ua.dots===is&&ua.key===s)return ua;(!ha||eg!==n)&&(eg=n,ha={on:tg(n,!0),off:tg(n,!1)});let r=is.w+i,a=document.createElement("canvas");a.width=Math.ceil(r*t*e),a.height=Math.round(fi.h*e);let o=a.getContext("2d"),l=(fi.h-fi.rows*t)/2,c=ha.on.width/2;o.fillStyle="#000",o.fillRect(0,0,a.width,a.height);for(let h=0;h<r;h++){let u=is.cols[h%is.w],d=(h*t+t/2)*e-c;for(let p=0;p<fi.rows;p++)o.drawImage(u>>p&1?ha.on:ha.off,d,(l+p*t+t/2)*e-c)}return ua={canvas:a,dots:is,key:s,shown:-1}}function wS(n){gc+=n*26,gc>=1&&(go=(go+Math.floor(gc))%is.w,gc%=1);let e=SS(ve.settings.accent||"#ffcc00");e.shown!==go&&(e.shown=go,Km.setTransform(1,0,0,1,0,0),Km.drawImage(e.canvas,go*fi.pitch*va,0,mr.width,mr.height,0,0,mr.width,mr.height))}var Gt=!1,eh=!1,Uo=!1,Ro=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),_d=0,xd=0,Zu=!1,ES=180;function qd(n=Uo){if(!(Gt||Zu)){if(!(n&&y&&y.W&&!Dn.hidden&&!Qc.matches)){ng();return}Zu=!0,Dn.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&us(),TS(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{Zu=!1,ng()},ES)}}function TS(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function ng(){if(!Gt){if(Gt=!0,clearTimeout(_d),Bg=performance.now(),!Ut&&Ro())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Pt[0].def).id)}catch{}RS(),AM(),vr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Dn.classList.add("out"),_d=setTimeout(()=>{Dn.hidden=!0,lS()},1250)})),Vn.classList.add("on"),setTimeout(LM,1500),$s.hidden=!1,To.classList.remove("hidden"),pn.focus({preventScroll:!0})}}function th(n=!0){if(Gt&&(Si(),Rc(),hd(),zc(),Do(null),Fd(),Gt=!1,Uo=!1,clearTimeout(_d),xd=performance.now()+1300,Hs.classList.remove("wait"),$d(de(ve.settings.home.enter)||Ee("enter")),c0=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),Dn.classList.remove("leaving"),Dn.hidden=!1,Dn.offsetWidth,Dn.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!Ut))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!Ut){if(ks.open){ks.pushed=!1,zs();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(ks.pushed=!1,Ro())th(!1);else if(!Gt&&eh)qd();else if(Gt&&Ws){let n=Pt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&En&&No(n)}}});Vn.addEventListener("click",n=>{n.target.closest(".wm")&&Gt&&th()});Vn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Gt&&(n.preventDefault(),th())});Hs.addEventListener("click",()=>{Uo=!0,eh?qd():($d(Ee("loading")),Hs.classList.add("wait"))});var c0=0,yc=0,ig=0,bo=null,h0=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function Xd(){if(Gt||Uo||performance.now()-c0<900||he&&he.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||Hs.click()}Dn.addEventListener("wheel",n=>{if(Gt||h0(n.target))return;let e=performance.now();e-ig>350&&(yc=0),ig=e,n.deltaY>0&&(yc+=n.deltaY*(n.deltaMode?30:1),yc>40&&(yc=0,Xd()))},{passive:!0});Dn.addEventListener("touchstart",n=>{bo=n.touches.length===1&&!h0(n.target)?n.touches[0].clientY:null},{passive:!0});Dn.addEventListener("touchmove",n=>{bo!==null&&n.touches.length===1&&bo-n.touches[0].clientY>46&&(bo=null,Xd())},{passive:!0});Dn.addEventListener("touchend",()=>{bo=null},{passive:!0});window.addEventListener("keydown",n=>{if(Gt||n.ctrlKey||n.metaKey||n.altKey||he&&he.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),s0();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),Xd()}});var bd=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function AS(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Ut&&Ut.tag&&(e=Ut.tag),bd(e||n)}function CS(n,e){let t=n.tags||[],i=t.find(s=>bd(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>bd(r)===e));return i?i.id:""}function RS(){try{Vs.compile(tM,Hn,as)}catch{}$c();let n=Ut&&Ut.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Pt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Pt.findIndex(a=>a.def.id===ve.settings.startSection)));let s=AS(t||(e&&i<0?e:""));if(s){let a=Pt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Pt.keys()];for(let o of a){let l=CS(Pt[o].def,s);if(l){i=o,Pt[o].def.defaultTag=l;break}}}hs=le.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=ds();H.cameraY=Ma(),yt.x=cs()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=cs()*Math.cos(H.degreeCamera)+r.p.z,Nn.x=r.p.x,Nn.y=Gc(),Nn.z=r.p.z,Ws=!0,No(i,0),(Ht<=700||Vt<=520)&&vr()}var sg=performance.now(),rg=NaN,ag=0,Md=0,LS=(n=700)=>{Md=Math.max(Md,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>LS(),{passive:!0}));function PS(){let n=Hn.position,e=Hn.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Hn.fov*7.3,i=1;return as.traverseVisible(s=>{i+=1.13;let r=s.position,a=s.rotation,o=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+a.x*3.1+a.y*3.7+a.z*4.3+o.x*5.3+o.y*5.9+o.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function u0(n){let e=Math.min(.25,Math.max(0,(n-sg)/1e3));if(sg=n,ss+=e,Sc=e*j1,!Gt&&is&&wS(e),y&&!Dn.hidden&&uS(n),Ws&&(Gt||n<xd)){K1(),SM(),wM(),TM(),Pe&&Pe.update(),WM(),Je.step(),CM();let t=bi.length||n<Md||n<xd||Oi||Gn||Yn||n-ag>2e3,i=PS();(t||i!==rg)&&(Vs.render(as,Hn),ag=n,rg=i)}requestAnimationFrame(u0)}function Ju(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Ee("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function IS(){Ut||!/[?&]preview\b/.test(location.search)||window.parent===window||(Ut=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:og},"*")}catch{}}))}(async function(){try{await IS(),Ut?ve=ur(structuredClone(Ut.content)):(ve=await vc.load(),vc.prepare&&await vc.prepare(ve))}catch(a){Ju(a);return}ni=Uc(),Sg();{let a=Ed();a!==null&&(ni=a)}Td();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:ui,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}if(Zn=t.includes(s)?s:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Pt=ve.sections.filter(a=>a.visible).map(a=>({def:a})),!Pt.length){Ju(new Error("aucune section visible"));return}if(!Ut)try{let a=new URLSearchParams(location.search).get("p"),o=a&&ve.posts.find(l=>l.id===a&&l.published!==!1&&Pt.some(c=>c.def.id===l.section));o&&(Mc=o.id,history.replaceState(null,"",location.pathname+location.search+"#"+o.section))}catch{}DM(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&lg(!1),Hg(),Xc(),RM(),jM(),Ig(),$c(),l0(),requestAnimationFrame(u0),fr=Pt.map((a,o)=>new nd(a.def,o)),Pt.forEach((a,o)=>{a.object=fr[o]}),Pt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let r=new rc(mg);try{if((await Promise.allSettled(fr.map(o=>o.load(r)))).forEach((o,l)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+fr[l].def.id+" \xBB :",o.reason)}),fr.forEach((o,l)=>o.place(l)),await Promise.race([Promise.all(Mg).then(Gs),new Promise(o=>setTimeout(o,3e3))]),eh=!0,(Uo||!Ro()||Ut&&Ut.start)&&qd(),Mc){let o=Mc,l=performance.now(),c=setInterval(()=>{(En||performance.now()-l>8e3)&&(clearInterval(c),En&&jc(o))},120)}}catch(a){Ju(a)}})();window.__hc={P:H,STYLE:le,cam:yt,camera:Hn,renderer:Vs,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return En},get homeGone(){return Gt},get content(){return ve},get postsView(){return Pe},getToSectionView:No,openThatPost:Ao,closePost:zs,goToPost:jc,setLang:Id,enter:()=>Hs.click()};})();
