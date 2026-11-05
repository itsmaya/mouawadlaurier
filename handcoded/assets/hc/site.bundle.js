/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var bu="160";var c0=0,Yd=1,h0=2;var kp=1,u0=2,qi=3,Vn=0,un=1,Fn=2;var xs=0,Gr=1,jd=2,Zd=3,Jd=4,d0=5,Zs=100,f0=101,p0=102,Kd=103,Qd=104,m0=200,g0=201,y0=202,v0=203,Hh=204,Vh=205,_0=206,x0=207,b0=208,M0=209,S0=210,w0=211,E0=212,T0=213,A0=214,C0=0,R0=1,L0=2,gl=3,P0=4,I0=5,N0=6,D0=7,Ql=0,U0=1,O0=2,bs=0,k0=1,F0=2,B0=3,z0=4,H0=5,V0=6,ef="attached",G0="detached",Fp=300,qr=301,Xr=302,Gh=303,Wh=304,ec=306,Ss=1e3,Cn=1001,$h=1002,mn=1003,tf=1004;var ah=1005;var On=1006,W0=1007;var ws=1008;var Ms=1009,$0=1010,q0=1011,Mu=1012,Bp=1013,_s=1014,Yi=1015,$a=1016,zp=1017,Hp=1018,Qs=1020,X0=1021,ni=1023,Y0=1024,j0=1025,er=1026,Yr=1027,Z0=1028,Vp=1029,J0=1030,Gp=1031,Wp=1033,oh=33776,lh=33777,ch=33778,hh=33779,nf=35840,sf=35841,rf=35842,af=35843,$p=36196,of=37492,lf=37496,cf=37808,hf=37809,uf=37810,df=37811,ff=37812,pf=37813,mf=37814,gf=37815,yf=37816,vf=37817,_f=37818,xf=37819,bf=37820,Mf=37821,uh=36492,Sf=36494,wf=36495,K0=36283,Ef=36284,Tf=36285,Af=36286;var yl=2300,vl=2301,dh=2302,Cf=2400,Rf=2401,Lf=2402,Q0=2500;var qp=3e3,tr=3001,ey=3200,ty=3201,Su=0,ny=1,ii="",Yt="srgb",Zi="srgb-linear",wu="display-p3",tc="display-p3-linear",_l="linear",Ft="srgb",xl="rec709",bl="p3";var br=7680;var Pf=519,iy=512,sy=513,ry=514,Xp=515,ay=516,oy=517,ly=518,cy=519,qh=35044;var If="300 es",Xh=1035,ji=2e3,Ml=2001,Es=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Ha=Math.PI/180,jr=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function An(n,e,t){return Math.max(e,Math.min(t,n))}function Eu(n,e){return(n%e+e)%e}function hy(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function uy(n,e,t){return n!==e?(t-n)/(e-n):0}function Va(n,e,t){return(1-t)*n+t*e}function dy(n,e,t,i){return Va(n,e,1-Math.exp(-t*i))}function fy(n,e=1){return e-Math.abs(Eu(n,e*2)-e)}function py(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function my(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function gy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yy(n,e){return n+Math.random()*(e-n)}function vy(n){return n*(.5-Math.random())}function _y(n){n!==void 0&&(Nf=n);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xy(n){return n*Ha}function by(n){return n*jr}function Yh(n){return(n&n-1)===0&&n!==0}function My(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Sl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sy(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:Ha,RAD2DEG:jr,generateUUID:mi,clamp:An,euclideanModulo:Eu,mapLinear:hy,inverseLerp:uy,lerp:Va,damp:dy,pingpong:fy,smoothstep:py,smootherstep:my,randInt:gy,randFloat:yy,randFloatSpread:vy,seededRandom:_y,degToRad:xy,radToDeg:by,isPowerOfTwo:Yh,ceilPowerOfTwo:My,floorPowerOfTwo:Sl,setQuaternionFromProperEuler:Sy,normalize:Rt,denormalize:Ei},tt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],E=s[1],b=s[4],N=s[7],P=s[2],R=s[5],D=s[8];return r[0]=a*v+o*E+l*P,r[3]=a*m+o*b+l*R,r[6]=a*f+o*N+l*D,r[1]=c*v+h*E+u*P,r[4]=c*m+h*b+u*R,r[7]=c*f+h*N+u*D,r[2]=d*v+p*E+g*P,r[5]=d*m+p*b+g*R,r[8]=d*f+p*N+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fh.makeScale(e,t)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fh=new mt;function Yp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wy(){let n=qa("canvas");return n.style.display="block",n}var Df={};function Ga(n){n in Df||(Df[n]=!0,console.warn(n))}var Uf=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Zi]:{transfer:_l,primaries:xl,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:Ft,primaries:xl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[tc]:{transfer:_l,primaries:bl,toReference:n=>n.applyMatrix3(Of),fromReference:n=>n.applyMatrix3(Uf)},[wu]:{transfer:Ft,primaries:bl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Of),fromReference:n=>n.applyMatrix3(Uf).convertLinearToSRGB()}},Ey=new Set([Zi,tc]),Lt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ey.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ho[e].toReference,s=Ho[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ho[n].primaries},getTransfer:function(n){return n===ii?_l:Ho[n].transfer}};function Wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ph(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Mr,wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=qa("canvas")),Mr.width=e.width,Mr.height=e.height;let i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wr(t[i]/255)*255):t[i]=Wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ty=0,El=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mh(s[a].image)):r.push(mh(s[a]))}else r=mh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ay=0,Gn=class n extends Es{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Cn,s=Cn,r=On,a=ws,o=ni,l=Ms,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=mi(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===tr?Yt:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?tr:qp}set encoding(e){Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===tr?Yt:ii}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Fp;Gn.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,N=(p+1)/2,P=(f+1)/2,R=(h+d)/4,D=(u+v)/4,z=(g+m)/4;return b>N&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=D/i):N>P?N<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(N),i=R/s,r=z/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=D/r,s=z/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jh=class extends Es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===tr?Yt:ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tl=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zh=class extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o,f=l*d+c*p+h*g+u*v,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,f*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}let N=o*E;if(l=l*m+d*N,c=c*m+p*N,h=h*m+g*N,u=u*m+v*N,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gh=new U,kf=new Ti,gn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),Go.subVectors(this.max,Na),Sr.subVectors(e.a,Na),wr.subVectors(e.b,Na),Er.subVectors(e.c,Na),ps.subVectors(wr,Sr),ms.subVectors(Er,wr),$s.subVectors(Sr,Er);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-$s.z,$s.y,ps.z,0,-ps.x,ms.z,0,-ms.x,$s.z,0,-$s.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-$s.y,$s.x,0];return!yh(t,Sr,wr,Er,Go)||(t=[1,0,0,0,1,0,0,0,1],!yh(t,Sr,wr,Er,Go))?!1:(Wo.crossVectors(ps,ms),t=[Wo.x,Wo.y,Wo.z],yh(t,Sr,wr,Er,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},zi=[new U,new U,new U,new U,new U,new U,new U,new U],di=new U,Vo=new gn,Sr=new U,wr=new U,Er=new U,ps=new U,ms=new U,$s=new U,Na=new U,Go=new U,Wo=new U,qs=new U;function yh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qs.fromArray(n,r);let o=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),h=i.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cy=new gn,Da=new U,vh=new U,si=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);let t=Da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(vh)),this.expandByPoint(Da.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hi=new U,_h=new U,$o=new U,gs=new U,xh=new U,qo=new U,bh=new U,Zr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_h.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(_h);let r=e.distanceTo(t)*.5,a=-this.direction.dot($o),o=gs.dot(this.direction),l=-gs.dot($o),c=gs.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_h).addScaledVector($o,d),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,s,r){xh.subVectors(t,e),qo.subVectors(i,e),bh.crossVectors(xh,qo);let a=this.direction.dot(bh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gs.subVectors(this.origin,e);let l=o*this.direction.dot(qo.crossVectors(gs,qo));if(l<0)return null;let c=o*this.direction.dot(xh.cross(gs));if(c<0||l+c>a)return null;let h=-o*gs.dot(bh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Ly)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ys.crossVectors(i,jn),ys.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ys.crossVectors(i,jn)),ys.normalize(),Xo.crossVectors(jn,ys),s[0]=ys.x,s[4]=Xo.x,s[8]=jn.x,s[1]=ys.y,s[5]=Xo.y,s[9]=jn.y,s[2]=ys.z,s[6]=Xo.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],E=i[3],b=i[7],N=i[11],P=i[15],R=s[0],D=s[4],z=s[8],w=s[12],M=s[1],F=s[5],ie=s[9],de=s[13],k=s[2],V=s[6],B=s[10],ne=s[14],q=s[3],W=s[7],Q=s[11],te=s[15];return r[0]=a*R+o*M+l*k+c*q,r[4]=a*D+o*F+l*V+c*W,r[8]=a*z+o*ie+l*B+c*Q,r[12]=a*w+o*de+l*ne+c*te,r[1]=h*R+u*M+d*k+p*q,r[5]=h*D+u*F+d*V+p*W,r[9]=h*z+u*ie+d*B+p*Q,r[13]=h*w+u*de+d*ne+p*te,r[2]=g*R+v*M+m*k+f*q,r[6]=g*D+v*F+m*V+f*W,r[10]=g*z+v*ie+m*B+f*Q,r[14]=g*w+v*de+m*ne+f*te,r[3]=E*R+b*M+N*k+P*q,r[7]=E*D+b*F+N*V+P*W,r[11]=E*z+b*ie+N*B+P*Q,r[15]=E*w+b*de+N*ne+P*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],E=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,N=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,P=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,R=t*E+i*b+s*N+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=E*D,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*D,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*D,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*D,e[4]=b*D,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*D,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*D,e[8]=N*D,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*D,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*D,e[12]=P*D,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*D,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,E=l*c,b=l*h,N=l*u,P=i.x,R=i.y,D=i.z;return s[0]=(1-(v+f))*P,s[1]=(p+N)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-N)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*D,s[9]=(m-E)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Tr.set(s[0],s[1],s[2]).length(),a=Tr.set(s[4],s[5],s[6]).length(),o=Tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);let c=1/r,h=1/a,u=1/o;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,t.setFromRotationMatrix(fi),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=ji){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(o===ji)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ml)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ji){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,p=(i+s)*h,g,v;if(o===ji)g=(a+r)*u,v=-2*u;else if(o===Ml)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Tr=new U,fi=new ct,Ry=new U(0,0,0),Ly=new U(1,1,1),ys=new U,Xo=new U,jn=new U,Ff=new ct,Bf=new Ti,Al=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Al.DEFAULT_ORDER="XYZ";var Xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Py=0,zf=new U,Ar=new Ti,Vi=new ct,Yo=new U,Ua=new U,Iy=new U,Ny=new Ti,Hf=new U(1,0,0),Vf=new U(0,1,0),Gf=new U(0,0,1),Dy={type:"added"},Uy={type:"removed"},jt=class n extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Al,i=new Ti,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Hf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yo.copy(e):Yo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ua,Yo,this.up):Vi.lookAt(Yo,Ua,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,Iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,Ny,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};jt.DEFAULT_UP=new U(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new U,Gi=new U,Mh=new U,Wi=new U,Cr=new U,Rr=new U,Wf=new U,Sh=new U,wh=new U,Eh=new U,jo=!1,Ks=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),Gi.subVectors(i,t),Mh.subVectors(e,t);let a=pi.dot(pi),o=pi.dot(Gi),l=pi.dot(Mh),c=Gi.dot(Gi),h=Gi.dot(Mh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,i,s,r,a,o,l){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l)}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Gi.subVectors(e,t),pi.cross(Gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),pi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jo=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Cr.subVectors(s,i),Rr.subVectors(r,i),Sh.subVectors(e,i);let l=Cr.dot(Sh),c=Rr.dot(Sh);if(l<=0&&c<=0)return t.copy(i);wh.subVectors(e,s);let h=Cr.dot(wh),u=Rr.dot(wh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Cr,a);Eh.subVectors(e,r);let p=Cr.dot(Eh),g=Rr.dot(Eh);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Rr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Wf.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Wf,o);let f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Cr,a).addScaledVector(Rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Th(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var lt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Lt.workingColorSpace){if(e=Eu(e,1),t=An(t,0,1),i=An(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Th(a,r,e+1/3),this.g=Th(a,r,e),this.b=Th(a,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=ph(e.r),this.g=ph(e.g),this.b=ph(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Lt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(An(Tn.r*255,0,255))*65536+Math.round(An(Tn.g*255,0,255))*256+Math.round(An(Tn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Yt){Lt.fromWorkingColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Zo);let i=Va(vs.h,Zo.h,t),s=Va(vs.s,Zo.s,t),r=Va(vs.l,Zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new lt;lt.NAMES=jp;var Oy=0,Ai=class extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Gr,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Vh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==Zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Qt=new U,Jo=new tt,Jn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}};var Cl=class extends Jn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rl=class extends Jn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Dt=class extends Jn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ky=0,ti=new ct,Ah=new jt,Lr=new U,Zn=new gn,Oa=new gn,hn=new U,Wn=class n extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?Rl:Cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Zn.min,Oa.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,Oa.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(Oa.min),Zn.expandByPoint(Oa.max))}Zn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(e,c),hn.add(Lr)),s=Math.max(s,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<o;M++)c[M]=new U,h[M]=new U;let u=new U,d=new U,p=new U,g=new tt,v=new tt,m=new tt,f=new U,E=new U;function b(M,F,ie){u.fromArray(s,M*3),d.fromArray(s,F*3),p.fromArray(s,ie*3),g.fromArray(a,M*2),v.fromArray(a,F*2),m.fromArray(a,ie*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let de=1/(v.x*m.y-m.x*v.y);isFinite(de)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(de),E.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(de),c[M].add(f),c[F].add(f),c[ie].add(f),h[M].add(E),h[F].add(E),h[ie].add(E))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let M=0,F=N.length;M<F;++M){let ie=N[M],de=ie.start,k=ie.count;for(let V=de,B=de+k;V<B;V+=3)b(i[V+0],i[V+1],i[V+2])}let P=new U,R=new U,D=new U,z=new U;function w(M){D.fromArray(r,M*3),z.copy(D);let F=c[M];P.copy(F),P.sub(D.multiplyScalar(D.dot(F))).normalize(),R.crossVectors(z,F);let de=R.dot(h[M])<0?-1:1;l[M*4]=P.x,l[M*4+1]=P.y,l[M*4+2]=P.z,l[M*4+3]=de}for(let M=0,F=N.length;M<F;++M){let ie=N[M],de=ie.start,k=ie.count;for(let V=de,B=de+k;V<B;V+=3)w(i[V+0]),w(i[V+1]),w(i[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Jn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$f=new ct,Xs=new Zr,Ko=new si,qf=new U,Pr=new U,Ir=new U,Nr=new U,Ch=new U,Qo=new U,el=new tt,tl=new tt,nl=new tt,Xf=new U,Yf=new U,jf=new U,il=new U,sl=new U,Bt=class extends jt{constructor(e=new Wn,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ch.fromBufferAttribute(u,e),a?Qo.addScaledVector(Ch,h):Qo.addScaledVector(Ch.sub(t),h))}t.add(Qo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ko.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ko,qf)===null||Xs.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&($f.copy(r).invert(),Xs.copy(e.ray).applyMatrix4($f),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,P=b;N<P;N+=3){let R=o.getX(N),D=o.getX(N+1),z=o.getX(N+2);s=rl(this,f,e,i,c,h,u,R,D,z),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let E=o.getX(m),b=o.getX(m+1),N=o.getX(m+2);s=rl(this,a,e,i,c,h,u,E,b,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let N=E,P=b;N<P;N+=3){let R=N,D=N+1,z=N+2;s=rl(this,f,e,i,c,h,u,R,D,z),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let E=m,b=m+1,N=m+2;s=rl(this,a,e,i,c,h,u,E,b,N),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fy(n,e,t,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Vn,o),l===null)return null;sl.copy(o),sl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:n}}function rl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Pr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Nr);let h=Fy(n,e,t,i,Pr,Ir,Nr,il);if(h){s&&(el.fromBufferAttribute(s,o),tl.fromBufferAttribute(s,l),nl.fromBufferAttribute(s,c),h.uv=Ks.getInterpolation(il,Pr,Ir,Nr,el,tl,nl,new tt)),r&&(el.fromBufferAttribute(r,o),tl.fromBufferAttribute(r,l),nl.fromBufferAttribute(r,c),h.uv1=Ks.getInterpolation(il,Pr,Ir,Nr,el,tl,nl,new tt),h.uv2=h.uv1),a&&(Xf.fromBufferAttribute(a,o),Yf.fromBufferAttribute(a,l),jf.fromBufferAttribute(a,c),h.normal=Ks.getInterpolation(il,Pr,Ir,Nr,Xf,Yf,jf,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Ks.getNormal(Pr,Ir,Nr,u.normal),h.face=u}return h}var Ya=class n extends Wn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(u,2));function g(v,m,f,E,b,N,P,R,D,z,w){let M=N/D,F=P/z,ie=N/2,de=P/2,k=R/2,V=D+1,B=z+1,ne=0,q=0,W=new U;for(let Q=0;Q<B;Q++){let te=Q*F-de;for(let fe=0;fe<V;fe++){let G=fe*M-ie;W[v]=G*E,W[m]=te*b,W[f]=k,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(fe/D),u.push(1-Q/z),ne+=1}}for(let Q=0;Q<z;Q++)for(let te=0;te<D;te++){let fe=d+te+V*Q,G=d+te+V*(Q+1),j=d+(te+1)+V*(Q+1),re=d+(te+1)+V*Q;l.push(fe,G,re),l.push(G,j,re),q+=6}o.addGroup(p,q,w),p+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(n){let e={};for(let t=0;t<n.length;t++){let i=Jr(n[t]);for(let s in i)e[s]=i[s]}return e}function By(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zp(n){return n.getRenderTarget()===null?n.outputColorSpace:Lt.workingColorSpace}var nc={clone:Jr,merge:Un},zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gi=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=By(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ll=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},en=class extends Ll{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Dr=-90,Ur=1,Jh=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(Dr,Ur,e,t);s.layers=this.layers,this.add(s);let r=new en(Dr,Ur,e,t);r.layers=this.layers,this.add(r);let a=new en(Dr,Ur,e,t);a.layers=this.layers,this.add(a);let o=new en(Dr,Ur,e,t);o.layers=this.layers,this.add(o);let l=new en(Dr,Ur,e,t);l.layers=this.layers,this.add(l);let c=new en(Dr,Ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pl=class extends Gn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kh=class extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===tr?Yt:ii),this.texture=new Pl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ya(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:xs});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===ws&&(t.minFilter=On),new Jh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Rh=new U,Vy=new U,Gy=new mt,Xi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rh.subVectors(i,t).cross(Vy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Rh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gy.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ys=new si,al=new U,ja=class{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],E=s[13],b=s[14],N=s[15];if(i[0].setComponents(l-r,d-c,m-p,N-f).normalize(),i[1].setComponents(l+r,d+c,m+p,N+f).normalize(),i[2].setComponents(l+a,d+h,m+g,N+E).normalize(),i[3].setComponents(l-a,d-h,m-g,N-E).normalize(),i[4].setComponents(l-o,d-u,m-v,N-b).normalize(),t===ji)i[5].setComponents(l+o,d+u,m+v,N+b).normalize();else if(t===Ml)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(al.x=s.normal.x>0?e.max.x:e.min.x,al.y=s.normal.y>0?e.max.y:e.min.y,al.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wy(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Ki=class n extends Wn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let E=f*d-a;for(let b=0;b<c;b++){let N=b*u-r;g.push(N,-E,0),v.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){let b=E+c*f,N=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;p.push(b,N,R),p.push(N,P,R)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},$y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
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
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sv=`#ifdef USE_IRIDESCENCE
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
#endif`,rv=`#ifdef USE_BUMPMAP
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pv=`#define PI 3.141592653589793
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
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gv=`vec3 transformedNormal = objectNormal;
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
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`
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
}`,Sv=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
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
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gv=`PhysicalMaterial material;
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
#endif`,Wv=`struct PhysicalMaterial {
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
}`,$v=`
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r_=`#ifdef USE_MORPHNORMALS
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
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f_=`#ifdef USE_NORMALMAP
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
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R_=`float getShadowMask() {
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
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,D_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,B_=`#ifdef USE_TRANSMISSION
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$_=`uniform sampler2D t2D;
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
}`,K_=`#define DISTANCE
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
}`,Q_=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,ax=`#define LAMBERT
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
}`,ox=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,cx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,yx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,_x=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:$y,alphahash_pars_fragment:qy,alphamap_fragment:Xy,alphamap_pars_fragment:Yy,alphatest_fragment:jy,alphatest_pars_fragment:Zy,aomap_fragment:Jy,aomap_pars_fragment:Ky,batching_pars_vertex:Qy,batching_vertex:ev,begin_vertex:tv,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:sv,bumpmap_pars_fragment:rv,clipping_planes_fragment:av,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:hv,color_pars_fragment:uv,color_pars_vertex:dv,color_vertex:fv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:yv,displacementmap_vertex:vv,emissivemap_fragment:_v,emissivemap_pars_fragment:xv,colorspace_fragment:bv,colorspace_pars_fragment:Mv,envmap_fragment:Sv,envmap_common_pars_fragment:wv,envmap_pars_fragment:Ev,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Fv,envmap_vertex:Av,fog_vertex:Cv,fog_pars_vertex:Rv,fog_fragment:Lv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Iv,lightmap_fragment:Nv,lightmap_pars_fragment:Dv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Ov,lights_pars_begin:kv,lights_toon_fragment:Bv,lights_toon_pars_fragment:zv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Gv,lights_physical_pars_fragment:Wv,lights_fragment_begin:$v,lights_fragment_maps:qv,lights_fragment_end:Xv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:Kv,map_pars_fragment:Qv,map_particle_fragment:e_,map_particle_pars_fragment:t_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphcolor_vertex:s_,morphnormal_vertex:r_,morphtarget_pars_vertex:a_,morphtarget_vertex:o_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:h_,normal_pars_vertex:u_,normal_vertex:d_,normalmap_pars_fragment:f_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:g_,iridescence_pars_fragment:y_,opaque_fragment:v_,packing:__,premultiplied_alpha_fragment:x_,project_vertex:b_,dithering_fragment:M_,dithering_pars_fragment:S_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:A_,shadowmap_vertex:C_,shadowmask_pars_fragment:R_,skinbase_vertex:L_,skinning_pars_vertex:P_,skinning_vertex:I_,skinnormal_vertex:N_,specularmap_fragment:D_,specularmap_pars_fragment:U_,tonemapping_fragment:O_,tonemapping_pars_fragment:k_,transmission_fragment:F_,transmission_pars_fragment:B_,uv_pars_fragment:z_,uv_pars_vertex:H_,uv_vertex:V_,worldpos_vertex:G_,background_vert:W_,background_frag:$_,backgroundCube_vert:q_,backgroundCube_frag:X_,cube_vert:Y_,cube_frag:j_,depth_vert:Z_,depth_frag:J_,distanceRGBA_vert:K_,distanceRGBA_frag:Q_,equirect_vert:ex,equirect_frag:tx,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ax,meshlambert_frag:ox,meshmatcap_vert:lx,meshmatcap_frag:cx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:yx,points_vert:vx,points_frag:_x,shadow_vert:xx,shadow_frag:bx,sprite_vert:Mx,sprite_frag:Sx},ve={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},kn={basic:{uniforms:Un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Un([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Un([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Un([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Un([ve.points,ve.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Un([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Un([ve.common,ve.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Un([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Un([ve.sprite,ve.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Un([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Un([ve.lights,ve.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};kn.physical={uniforms:Un([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var ol={r:0,b:0,g:0};function wx(n,e,t,i,s,r,a){let o=new lt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let E=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(o,l):b&&b.isColor&&(v(b,1),E=!0);let N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ec)?(h===void 0&&(h=new Bt(new Ya(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Jr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Ft,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bt(new Ki(2,2),new gi({name:"BackgroundMaterial",uniforms:Jr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(ol,Zp(n)),i.buffers.color.setClear(ol.r,ol.g,ol.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Ex(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(k,V,B,ne,q){let W=!1;if(a){let Q=v(ne,B,V);c!==Q&&(c=Q,p(c.object)),W=f(k,ne,B,q),W&&E(k,ne,B,q)}else{let Q=V.wireframe===!0;(c.geometry!==ne.id||c.program!==B.id||c.wireframe!==Q)&&(c.geometry=ne.id,c.program=B.id,c.wireframe=Q,W=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,z(k,V,B,ne),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,V,B){let ne=B.wireframe===!0,q=o[k.id];q===void 0&&(q={},o[k.id]=q);let W=q[V.id];W===void 0&&(W={},q[V.id]=W);let Q=W[ne];return Q===void 0&&(Q=m(d()),W[ne]=Q),Q}function m(k){let V=[],B=[],ne=[];for(let q=0;q<s;q++)V[q]=0,B[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:B,attributeDivisors:ne,object:k,attributes:{},index:null}}function f(k,V,B,ne){let q=c.attributes,W=V.attributes,Q=0,te=B.getAttributes();for(let fe in te)if(te[fe].location>=0){let j=q[fe],re=W[fe];if(re===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(re=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(re=k.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;Q++}return c.attributesNum!==Q||c.index!==ne}function E(k,V,B,ne){let q={},W=V.attributes,Q=0,te=B.getAttributes();for(let fe in te)if(te[fe].location>=0){let j=W[fe];j===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(j=k.instanceColor));let re={};re.attribute=j,j&&j.data&&(re.data=j.data),q[fe]=re,Q++}c.attributes=q,c.attributesNum=Q,c.index=ne}function b(){let k=c.newAttributes;for(let V=0,B=k.length;V<B;V++)k[V]=0}function N(k){P(k,0)}function P(k,V){let B=c.newAttributes,ne=c.enabledAttributes,q=c.attributeDivisors;B[k]=1,ne[k]===0&&(n.enableVertexAttribArray(k),ne[k]=1),q[k]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,V),q[k]=V)}function R(){let k=c.newAttributes,V=c.enabledAttributes;for(let B=0,ne=V.length;B<ne;B++)V[B]!==k[B]&&(n.disableVertexAttribArray(B),V[B]=0)}function D(k,V,B,ne,q,W,Q){Q===!0?n.vertexAttribIPointer(k,V,B,q,W):n.vertexAttribPointer(k,V,B,ne,q,W)}function z(k,V,B,ne){if(i.isWebGL2===!1&&(k.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=ne.attributes,W=B.getAttributes(),Q=V.defaultAttributeValues;for(let te in W){let fe=W[te];if(fe.location>=0){let G=q[te];if(G===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){let j=G.normalized,re=G.itemSize,ae=t.get(G);if(ae===void 0)continue;let le=ae.buffer,Le=ae.type,Ve=ae.bytesPerElement,Ge=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||G.gpuType===Bp);if(G.isInterleavedBufferAttribute){let gt=G.data,X=gt.stride,fn=G.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<fe.locationSize;Xe++)P(fe.location+Xe,gt.meshPerAttribute);k.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<fe.locationSize;Xe++)N(fe.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Xe=0;Xe<fe.locationSize;Xe++)D(fe.location+Xe,re/fe.locationSize,Le,j,X*Ve,(fn+re/fe.locationSize*Xe)*Ve,Ge)}else{if(G.isInstancedBufferAttribute){for(let gt=0;gt<fe.locationSize;gt++)P(fe.location+gt,G.meshPerAttribute);k.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let gt=0;gt<fe.locationSize;gt++)N(fe.location+gt);n.bindBuffer(n.ARRAY_BUFFER,le);for(let gt=0;gt<fe.locationSize;gt++)D(fe.location+gt,re/fe.locationSize,Le,j,re*Ve,re/fe.locationSize*gt*Ve,Ge)}}else if(Q!==void 0){let j=Q[te];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(fe.location,j);break;case 3:n.vertexAttrib3fv(fe.location,j);break;case 4:n.vertexAttrib4fv(fe.location,j);break;default:n.vertexAttrib1fv(fe.location,j)}}}}R()}function w(){ie();for(let k in o){let V=o[k];for(let B in V){let ne=V[B];for(let q in ne)g(ne[q].object),delete ne[q];delete V[B]}delete o[k]}}function M(k){if(o[k.id]===void 0)return;let V=o[k.id];for(let B in V){let ne=V[B];for(let q in ne)g(ne[q].object),delete ne[q];delete V[B]}delete o[k.id]}function F(k){for(let V in o){let B=o[V];if(B[k.id]===void 0)continue;let ne=B[k.id];for(let q in ne)g(ne[q].object),delete ne[q];delete B[k.id]}}function ie(){de(),h=!0,c!==l&&(c=l,p(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:de,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:N,disableUnusedAttributes:R}}function Tx(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ax(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,N=a||e.has("OES_texture_float"),P=b&&N,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:N,floatVertexTextures:P,maxSamples:R}}function Cx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Xi,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,b=E*4,N=f.clippingState||null;l.value=N,N=h(g,d,b,p);for(let P=0;P!==b;++P)N[P]=t[P];f.clippingState=N,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,N=p;b!==v;++b,N+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,N),m[N+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Rx(n){let e=new WeakMap;function t(a,o){return o===Gh?a.mapping=qr:o===Wh&&(a.mapping=Xr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Gh||o===Wh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Kr=class extends Ll{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hr=4,Zf=[.125,.215,.35,.446,.526,.582],Js=20,Lh=new Kr,Jf=new lt,Ph=null,Ih=0,Nh=0,js=(1+Math.sqrt(5))/2,Or=1/js,Kf=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,js,Or),new U(0,js,-Or),new U(Or,0,js),new U(-Or,0,js),new U(js,Or,0),new U(-js,Or,0)],Il=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,Nh),e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:$a,format:ni,colorSpace:Zi,depthBuffer:!1},s=Qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(r)),this._blurMaterial=Px(r,e,t)}return s}_compileMaterial(e){let t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Lh)}_sceneToCubeUV(e,t,i,s){let o=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jf),h.toneMapping=bs,h.autoClear=!1;let p=new tn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Bt(new Ya,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jf),v=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let b=this._cubeSize;ll(s,E*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qr||e.mapping===Xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ll(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Lh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kf[(s-1)%Kf.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Js-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Js;m>Js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Js}`);let f=[],E=0;for(let D=0;D<Js;++D){let z=D/v,w=Math.exp(-z*z/2);f.push(w),D===0?E+=w:D<m&&(E+=2*w)}for(let D=0;D<f.length;D++)f[D]=f[D]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let N=this._sizeLods[s],P=3*N*(s>b-Hr?s-b+Hr:0),R=4*(this._cubeSize-N);ll(t,P,R,3*N,2*N),l.setRenderTarget(t),l.render(u,Lh)}};function Lx(n){let e=[],t=[],i=[],s=n,r=n-Hr+1+Zf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Hr?l=Zf[a-n+Hr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*p),b=new Float32Array(m*g*p),N=new Float32Array(f*g*p);for(let R=0;R<p;R++){let D=R%3*2/3-1,z=R>2?0:-1,w=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];E.set(w,v*g*R),b.set(d,m*g*R);let M=[R,R,R,R,R,R];N.set(M,f*g*R)}let P=new Wn;P.setAttribute("position",new Jn(E,v)),P.setAttribute("uv",new Jn(b,m)),P.setAttribute("faceIndex",new Jn(N,f)),e.push(P),s>Hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qf(n,e,t){let i=new Ji(n,e,t);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Px(n,e,t){let i=new Float32Array(Js),s=new U(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function ep(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:xs,depthTest:!1,depthWrite:!1})}function tp(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xs,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}function Ix(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Gh||l===Wh,h=l===qr||l===Xr;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Il(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Il(n));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Nx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dx(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let b=0,N=E.length;b<N;b+=3){let P=E[b+0],R=E[b+1],D=E[b+2];d.push(P,R,R,D,D,P)}}else if(g!==void 0){let E=g.array;v=g.version;for(let b=0,N=E.length/3-1;b<N;b+=3){let P=b+0,R=b+1,D=b+2;d.push(P,R,R,D,D,P)}}else return;let m=new(Yp(d)?Rl:Cl)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Ux(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,o,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,v);let f=0;for(let E=0;E<v;E++)f+=g[E];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ox(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kx(n,e){return n[0]-e[0]}function Fx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bx(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let k=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],z=0;E===!0&&(z=1),b===!0&&(z=2),N===!0&&(z=3);let w=h.attributes.position.count*z,M=1;w>e.maxTextureSize&&(M=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let F=new Float32Array(w*M*4*g),ie=new Tl(F,w,M,g);ie.type=Yi,ie.needsUpdate=!0;let de=z*4;for(let V=0;V<g;V++){let B=P[V],ne=R[V],q=D[V],W=w*M*4*V;for(let Q=0;Q<B.count;Q++){let te=Q*de;E===!0&&(a.fromBufferAttribute(B,Q),F[W+te+0]=a.x,F[W+te+1]=a.y,F[W+te+2]=a.z,F[W+te+3]=0),b===!0&&(a.fromBufferAttribute(ne,Q),F[W+te+4]=a.x,F[W+te+5]=a.y,F[W+te+6]=a.z,F[W+te+7]=0),N===!0&&(a.fromBufferAttribute(q,Q),F[W+te+8]=a.x,F[W+te+9]=a.y,F[W+te+10]=a.z,F[W+te+11]=q.itemSize===4?a.w:1)}}v={count:g,texture:ie,size:new tt(w,M)},r.set(h,v),h.addEventListener("dispose",k)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let N=g[b];N[0]=b,N[1]=d[b]}g.sort(Fx);for(let b=0;b<8;b++)b<p&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(kx);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let N=o[b],P=N[0],R=N[1];P!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+b)!==v[P]&&h.setAttribute("morphTarget"+b,v[P]),m&&h.getAttribute("morphNormal"+b)!==m[P]&&h.setAttribute("morphNormal"+b,m[P]),s[b]=R,f+=R):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function zx(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Nl=class extends Gn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:er,h!==er&&h!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===er&&(i=_s),i===void 0&&h===Yr&&(i=Qs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Kp=new Gn,Qp=new Nl(1,1);Qp.compareFunction=Xp;var em=new Tl,tm=new Zh,nm=new Pl,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),ap=new Float32Array(4);function ra(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ic(n,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Hx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function Gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function Wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function $x(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),on(t,i)}}function qx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),on(t,i)}}function Xx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),on(t,i)}}function Yx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function Zx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function Jx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function Kx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function eb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function nb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Qp:Kp;t.setTexture2D(e||r,s)}function ib(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tm,s)}function sb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nm,s)}function rb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||em,s)}function ab(n){switch(n){case 5126:return Hx;case 35664:return Vx;case 35665:return Gx;case 35666:return Wx;case 35674:return $x;case 35675:return qx;case 35676:return Xx;case 5124:case 35670:return Yx;case 35667:case 35671:return jx;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Kx;case 36294:return Qx;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(n,e){n.uniform1fv(this.addr,e)}function lb(n,e){let t=ra(e,this.size,2);n.uniform2fv(this.addr,t)}function cb(n,e){let t=ra(e,this.size,3);n.uniform3fv(this.addr,t)}function hb(n,e){let t=ra(e,this.size,4);n.uniform4fv(this.addr,t)}function ub(n,e){let t=ra(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function db(n,e){let t=ra(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fb(n,e){let t=ra(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pb(n,e){n.uniform1iv(this.addr,e)}function mb(n,e){n.uniform2iv(this.addr,e)}function gb(n,e){n.uniform3iv(this.addr,e)}function yb(n,e){n.uniform4iv(this.addr,e)}function vb(n,e){n.uniform1uiv(this.addr,e)}function _b(n,e){n.uniform2uiv(this.addr,e)}function xb(n,e){n.uniform3uiv(this.addr,e)}function bb(n,e){n.uniform4uiv(this.addr,e)}function Mb(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Kp,r[a])}function Sb(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tm,r[a])}function wb(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nm,r[a])}function Eb(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);an(i,r)||(n.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||em,r[a])}function Tb(n){switch(n){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return hb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return yb;case 5125:return vb;case 36294:return _b;case 36295:return xb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}var Qh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ab(t.type)}},eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}},tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function op(n,e){n.seq.push(e),n.map[e.id]=e}function Ab(n,e,t){let i=n.name,s=i.length;for(Dh.lastIndex=0;;){let r=Dh.exec(i),a=Dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){op(t,c===void 0?new Qh(o,n,e):new eu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new tu(o),op(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ab(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Cb=37297,Rb=0;function Lb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Pb(n){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(n),i;switch(e===t?i="":e===bl&&t===xl?i="LinearDisplayP3ToLinearSRGB":e===xl&&t===bl&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case tc:return[i,"LinearTransferOETF"];case Yt:case wu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lb(n.getShaderSource(e),a)}else return s}function Ib(n,e){let t=Pb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nb(n,e){let t;switch(e){case k0:t="Linear";break;case F0:t="Reinhard";break;case B0:t="OptimizedCineon";break;case z0:t="ACESFilmic";break;case V0:t="AgX";break;case H0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Db(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function Ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vr).join(`
`)}function Ob(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Vr(n){return n!==""}function hp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(n){return n.replace(Fb,zb)}var Bb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zb(n,e){let t=ft[e];if(t===void 0){let i=Bb.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}var Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(n){return n.replace(Hb,Vb)}function Vb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qr:case Xr:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xr:e="ENVMAP_MODE_REFRACTION";break}return e}function qb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case U0:e="ENVMAP_BLENDING_MIX";break;case O0:e="ENVMAP_BLENDING_ADD";break}return e}function Xb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Yb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Gb(t),c=Wb(t),h=$b(t),u=qb(t),d=Xb(t),p=t.isWebGL2?"":Db(t),g=Ub(t),v=Ob(r),m=s.createProgram(),f,E,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Vr).join(`
`),E.length>0&&(E+=`
`)):(f=[fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),E=[p,fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?ft.tonemapping_pars_fragment:"",t.toneMapping!==bs?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),a=nu(a),a=hp(a,t),a=up(a,t),o=nu(o),o=hp(o,t),o=up(o,t),a=dp(a),o=dp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let N=b+f+a,P=b+E+o,R=lp(s,s.VERTEX_SHADER,N),D=lp(s,s.FRAGMENT_SHADER,P);s.attachShader(m,R),s.attachShader(m,D),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(ie){if(n.debug.checkShaderErrors){let de=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(D).trim(),B=!0,ne=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,D);else{let q=cp(s,R,"vertex"),W=cp(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+q+`
`+W)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(k===""||V==="")&&(ne=!1);ne&&(ie.diagnostics={runnable:B,programLog:de,vertexShader:{log:k,prefix:f},fragmentShader:{log:V,prefix:E}})}s.deleteShader(R),s.deleteShader(D),w=new $r(s,m),M=kb(s,m)}let w;this.getUniforms=function(){return w===void 0&&z(this),w};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,Cb)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=D,this}var jb=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new su(e),t.set(e,i)),i}},su=class{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}};function Zb(n,e,t,i,s,r,a){let o=new Xa,l=new iu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,M,F,ie,de){let k=ie.fog,V=de.geometry,B=w.isMeshStandardMaterial?ie.environment:null,ne=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),q=ne&&ne.mapping===ec?ne.image.height:null,W=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=Q!==void 0?Q.length:0,fe=0;V.morphAttributes.position!==void 0&&(fe=1),V.morphAttributes.normal!==void 0&&(fe=2),V.morphAttributes.color!==void 0&&(fe=3);let G,j,re,ae;if(W){let ln=kn[W];G=ln.vertexShader,j=ln.fragmentShader}else G=w.vertexShader,j=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);let le=n.getRenderTarget(),Le=de.isInstancedMesh===!0,Ve=de.isBatchedMesh===!0,Ge=!!w.map,gt=!!w.matcap,X=!!ne,fn=!!w.aoMap,Xe=!!w.lightMap,it=!!w.bumpMap,Oe=!!w.normalMap,It=!!w.displacementMap,ht=!!w.emissiveMap,I=!!w.metalnessMap,A=!!w.roughnessMap,Z=w.anisotropy>0,ge=w.clearcoat>0,pe=w.iridescence>0,ye=w.sheen>0,Be=w.transmission>0,we=Z&&!!w.anisotropyMap,Ne=ge&&!!w.clearcoatMap,je=ge&&!!w.clearcoatNormalMap,ut=ge&&!!w.clearcoatRoughnessMap,me=pe&&!!w.iridescenceMap,St=pe&&!!w.iridescenceThicknessMap,pt=ye&&!!w.sheenColorMap,et=ye&&!!w.sheenRoughnessMap,We=!!w.specularMap,De=!!w.specularColorMap,at=!!w.specularIntensityMap,bt=Be&&!!w.transmissionMap,Ot=Be&&!!w.thicknessMap,dt=!!w.gradientMap,_e=!!w.alphaMap,O=w.alphaTest>0,Me=!!w.alphaHash,Se=!!w.extensions,Ke=!!V.attributes.uv1,Ye=!!V.attributes.uv2,Et=!!V.attributes.uv3,At=bs;return w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(At=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:G,fragmentShader:j,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ve,instancing:Le,instancingColor:Le&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Zi,map:Ge,matcap:gt,envMap:X,envMapMode:X&&ne.mapping,envMapCubeUVHeight:q,aoMap:fn,lightMap:Xe,bumpMap:it,normalMap:Oe,displacementMap:d&&It,emissiveMap:ht,normalMapObjectSpace:Oe&&w.normalMapType===ny,normalMapTangentSpace:Oe&&w.normalMapType===Su,metalnessMap:I,roughnessMap:A,anisotropy:Z,anisotropyMap:we,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:ut,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:St,sheen:ye,sheenColorMap:pt,sheenRoughnessMap:et,specularMap:We,specularColorMap:De,specularIntensityMap:at,transmission:Be,transmissionMap:bt,thicknessMap:Ot,gradientMap:dt,opaque:w.transparent===!1&&w.blending===Gr,alphaMap:_e,alphaTest:O,alphaHash:Me,combine:w.combine,mapUv:Ge&&v(w.map.channel),aoMapUv:fn&&v(w.aoMap.channel),lightMapUv:Xe&&v(w.lightMap.channel),bumpMapUv:it&&v(w.bumpMap.channel),normalMapUv:Oe&&v(w.normalMap.channel),displacementMapUv:It&&v(w.displacementMap.channel),emissiveMapUv:ht&&v(w.emissiveMap.channel),metalnessMapUv:I&&v(w.metalnessMap.channel),roughnessMapUv:A&&v(w.roughnessMap.channel),anisotropyMapUv:we&&v(w.anisotropyMap.channel),clearcoatMapUv:Ne&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:et&&v(w.sheenRoughnessMap.channel),specularMapUv:We&&v(w.specularMap.channel),specularColorMapUv:De&&v(w.specularColorMap.channel),specularIntensityMapUv:at&&v(w.specularIntensityMap.channel),transmissionMapUv:bt&&v(w.transmissionMap.channel),thicknessMapUv:Ot&&v(w.thicknessMap.channel),alphaMapUv:_e&&v(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Oe||Z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ye,vertexUv3s:Et,pointsUvs:de.isPoints===!0&&!!V.attributes.uv&&(Ge||_e),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:de.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fn,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Se&&w.extensions.derivatives===!0,extensionFragDepth:Se&&w.extensions.fragDepth===!0,extensionDrawBuffers:Se&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)M.push(F),M.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(E(M,w),b(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function b(w,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function N(w){let M=g[w.type],F;if(M){let ie=kn[M];F=nc.clone(ie.uniforms)}else F=w.uniforms;return F}function P(w,M){let F;for(let ie=0,de=c.length;ie<de;ie++){let k=c[ie];if(k.cacheKey===M){F=k,++F.usedTimes;break}}return F===void 0&&(F=new Yb(n,M,w,r),c.push(F)),F}function R(w){if(--w.usedTimes===0){let M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:N,acquireProgram:P,releaseProgram:R,releaseShaderCache:D,programs:c,dispose:z}}function Jb(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Kb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Kb),i.length>1&&i.sort(d||pp),s.length>1&&s.sort(d||pp)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Qb(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new mp,n.set(i,[a])):s>=r.length?(a=new mp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function e1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new lt};break;case"SpotLight":t={position:new U,direction:new U,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function t1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var n1=0;function i1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function s1(n,e){let t=new e1,i=t1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new ct,o=new ct;function l(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let v=0,m=0,f=0,E=0,b=0,N=0,P=0,R=0,D=0,z=0,w=0;h.sort(i1);let M=u===!0?Math.PI:1;for(let ie=0,de=h.length;ie<de;ie++){let k=h[ie],V=k.color,B=k.intensity,ne=k.distance,q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=V.r*B*M,p+=V.g*B*M,g+=V.b*B*M;else if(k.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(k.sh.coefficients[W],B);w++}else if(k.isDirectionalLight){let W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*M),k.castShadow){let Q=k.shadow,te=i.get(k);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[v]=te,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=k.shadow.matrix,N++}s.directional[v]=W,v++}else if(k.isSpotLight){let W=t.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(V).multiplyScalar(B*M),W.distance=ne,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,s.spot[f]=W;let Q=k.shadow;if(k.map&&(s.spotLightMap[D]=k.map,D++,Q.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[f]=Q.matrix,k.castShadow){let te=i.get(k);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[f]=te,s.spotShadowMap[f]=q,R++}f++}else if(k.isRectAreaLight){let W=t.get(k);W.color.copy(V).multiplyScalar(B),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),s.rectArea[E]=W,E++}else if(k.isPointLight){let W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity*M),W.distance=k.distance,W.decay=k.decay,k.castShadow){let Q=k.shadow,te=i.get(k);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[m]=te,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=k.shadow.matrix,P++}s.point[m]=W,m++}else if(k.isHemisphereLight){let W=t.get(k);W.skyColor.copy(k.color).multiplyScalar(B*M),W.groundColor.copy(k.groundColor).multiplyScalar(B*M),s.hemi[b]=W,b++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==E||F.hemiLength!==b||F.numDirectionalShadows!==N||F.numPointShadows!==P||F.numSpotShadows!==R||F.numSpotMaps!==D||F.numLightProbes!==w)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+D-z,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=w,F.directionalLength=v,F.pointLength=m,F.spotLength=f,F.rectAreaLength=E,F.hemiLength=b,F.numDirectionalShadows=N,F.numPointShadows=P,F.numSpotShadows=R,F.numSpotMaps=D,F.numLightProbes=w,s.version=n1++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let E=0,b=h.length;E<b;E++){let N=h[E];if(N.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(N.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(N.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(N.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(N.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(f),p++}else if(N.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function gp(n,e){let t=new s1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function r1(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new gp(n,e),t.set(r,[l])):a>=o.length?(l=new gp(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var ru=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},au=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o1=`uniform sampler2D shadow_pass;
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
}`;function l1(n,e,t){let i=new ja,s=new tt,r=new tt,a=new xt,o=new ru({depthPacking:ty}),l=new au,c={},h=t.maxTextureSize,u={[Vn]:un,[un]:Vn,[Fn]:Fn},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:a1,fragmentShader:o1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Wn;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let f=this.type;this.render=function(R,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(xs),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let de=f!==qi&&this.type===qi,k=f===qi&&this.type!==qi;for(let V=0,B=R.length;V<B;V++){let ne=R[V],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||de===!0||k===!0){let te=this.type!==qi?{minFilter:mn,magFilter:mn}:{};q.map!==null&&q.map.dispose(),q.map=new Ji(s.x,s.y,te),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Q=q.getViewportCount();for(let te=0;te<Q;te++){let fe=q.getViewport(te);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),ie.viewport(a),q.updateMatrices(ne,te),i=q.getFrustum(),N(D,z,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===qi&&E(q,z),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,F)};function E(R,D){let z=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ji(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,z,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,z,p,v,null)}function b(R,D,z,w){let M=null,F=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)M=F;else if(M=z.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let ie=M.uuid,de=D.uuid,k=c[ie];k===void 0&&(k={},c[ie]=k);let V=k[de];V===void 0&&(V=M.clone(),k[de]=V,D.addEventListener("dispose",P)),M=V}if(M.visible=D.visible,M.wireframe=D.wireframe,w===qi?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let ie=n.properties.get(M);ie.light=z}return M}function N(R,D,z,w,M){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===qi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let de=e.update(R),k=R.material;if(Array.isArray(k)){let V=de.groups;for(let B=0,ne=V.length;B<ne;B++){let q=V[B],W=k[q.materialIndex];if(W&&W.visible){let Q=b(R,W,w,M);R.onBeforeShadow(n,R,D,z,de,Q,q),n.renderBufferDirect(z,null,de,Q,R,q),R.onAfterShadow(n,R,D,z,de,Q,q)}}}else if(k.visible){let V=b(R,k,w,M);R.onBeforeShadow(n,R,D,z,de,V,null),n.renderBufferDirect(z,null,de,V,R,null),R.onAfterShadow(n,R,D,z,de,V,null)}}let ie=R.children;for(let de=0,k=ie.length;de<k;de++)N(ie[de],D,z,w,M)}function P(R){R.target.removeEventListener("dispose",P);for(let z in c){let w=c[z],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function c1(n,e,t){let i=t.isWebGL2;function s(){let O=!1,Me=new xt,Se=null,Ke=new xt(0,0,0,0);return{setMask:function(Ye){Se!==Ye&&!O&&(n.colorMask(Ye,Ye,Ye,Ye),Se=Ye)},setLocked:function(Ye){O=Ye},setClear:function(Ye,Et,At,wt,ln){ln===!0&&(Ye*=wt,Et*=wt,At*=wt),Me.set(Ye,Et,At,wt),Ke.equals(Me)===!1&&(n.clearColor(Ye,Et,At,wt),Ke.copy(Me))},reset:function(){O=!1,Se=null,Ke.set(-1,0,0,0)}}}function r(){let O=!1,Me=null,Se=null,Ke=null;return{setTest:function(Ye){Ye?Ve(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(Ye){Me!==Ye&&!O&&(n.depthMask(Ye),Me=Ye)},setFunc:function(Ye){if(Se!==Ye){switch(Ye){case C0:n.depthFunc(n.NEVER);break;case R0:n.depthFunc(n.ALWAYS);break;case L0:n.depthFunc(n.LESS);break;case gl:n.depthFunc(n.LEQUAL);break;case P0:n.depthFunc(n.EQUAL);break;case I0:n.depthFunc(n.GEQUAL);break;case N0:n.depthFunc(n.GREATER);break;case D0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Ye}},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ke!==Ye&&(n.clearDepth(Ye),Ke=Ye)},reset:function(){O=!1,Me=null,Se=null,Ke=null}}}function a(){let O=!1,Me=null,Se=null,Ke=null,Ye=null,Et=null,At=null,wt=null,ln=null;return{setTest:function(Ct){O||(Ct?Ve(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Ct){Me!==Ct&&!O&&(n.stencilMask(Ct),Me=Ct)},setFunc:function(Ct,pn,Qn){(Se!==Ct||Ke!==pn||Ye!==Qn)&&(n.stencilFunc(Ct,pn,Qn),Se=Ct,Ke=pn,Ye=Qn)},setOp:function(Ct,pn,Qn){(Et!==Ct||At!==pn||wt!==Qn)&&(n.stencilOp(Ct,pn,Qn),Et=Ct,At=pn,wt=Qn)},setLocked:function(Ct){O=Ct},setClear:function(Ct){ln!==Ct&&(n.clearStencil(Ct),ln=Ct)},reset:function(){O=!1,Me=null,Se=null,Ke=null,Ye=null,Et=null,At=null,wt=null,ln=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,E=null,b=null,N=null,P=null,R=null,D=null,z=null,w=new lt(0,0,0),M=0,F=!1,ie=null,de=null,k=null,V=null,B=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=W>=2);let te=null,fe={},G=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),re=new xt().fromArray(G),ae=new xt().fromArray(j);function le(O,Me,Se,Ke){let Ye=new Uint8Array(4),Et=n.createTexture();n.bindTexture(O,Et),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<Se;At++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Me+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return Et}let Le={};Le[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(n.DEPTH_TEST),l.setFunc(gl),ht(!1),I(Yd),Ve(n.CULL_FACE),Oe(xs);function Ve(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Ge(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function gt(O,Me){return p[O]!==Me?(n.bindFramebuffer(O,Me),p[O]=Me,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Me),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function X(O,Me){let Se=v,Ke=!1;if(O)if(Se=g.get(Me),Se===void 0&&(Se=[],g.set(Me,Se)),O.isWebGLMultipleRenderTargets){let Ye=O.texture;if(Se.length!==Ye.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,At=Ye.length;Et<At;Et++)Se[Et]=n.COLOR_ATTACHMENT0+Et;Se.length=Ye.length,Ke=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,Ke=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function fn(O){return m!==O?(n.useProgram(O),m=O,!0):!1}let Xe={[Zs]:n.FUNC_ADD,[f0]:n.FUNC_SUBTRACT,[p0]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[Kd]=n.MIN,Xe[Qd]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(Xe[Kd]=O.MIN_EXT,Xe[Qd]=O.MAX_EXT)}let it={[m0]:n.ZERO,[g0]:n.ONE,[y0]:n.SRC_COLOR,[Hh]:n.SRC_ALPHA,[S0]:n.SRC_ALPHA_SATURATE,[b0]:n.DST_COLOR,[_0]:n.DST_ALPHA,[v0]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[M0]:n.ONE_MINUS_DST_COLOR,[x0]:n.ONE_MINUS_DST_ALPHA,[w0]:n.CONSTANT_COLOR,[E0]:n.ONE_MINUS_CONSTANT_COLOR,[T0]:n.CONSTANT_ALPHA,[A0]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,Me,Se,Ke,Ye,Et,At,wt,ln,Ct){if(O===xs){f===!0&&(Ge(n.BLEND),f=!1);return}if(f===!1&&(Ve(n.BLEND),f=!0),O!==d0){if(O!==E||Ct!==F){if((b!==Zs||R!==Zs)&&(n.blendEquation(n.FUNC_ADD),b=Zs,R=Zs),Ct)switch(O){case Gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.ONE,n.ONE);break;case Zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}N=null,P=null,D=null,z=null,w.set(0,0,0),M=0,E=O,F=Ct}return}Ye=Ye||Me,Et=Et||Se,At=At||Ke,(Me!==b||Ye!==R)&&(n.blendEquationSeparate(Xe[Me],Xe[Ye]),b=Me,R=Ye),(Se!==N||Ke!==P||Et!==D||At!==z)&&(n.blendFuncSeparate(it[Se],it[Ke],it[Et],it[At]),N=Se,P=Ke,D=Et,z=At),(wt.equals(w)===!1||ln!==M)&&(n.blendColor(wt.r,wt.g,wt.b,ln),w.copy(wt),M=ln),E=O,F=!1}function It(O,Me){O.side===Fn?Ge(n.CULL_FACE):Ve(n.CULL_FACE);let Se=O.side===un;Me&&(Se=!Se),ht(Se),O.blending===Gr&&O.transparent===!1?Oe(xs):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);let Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){ie!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),ie=O)}function I(O){O!==c0?(Ve(n.CULL_FACE),O!==de&&(O===Yd?n.cullFace(n.BACK):O===h0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),de=O}function A(O){O!==k&&(q&&n.lineWidth(O),k=O)}function Z(O,Me,Se){O?(Ve(n.POLYGON_OFFSET_FILL),(V!==Me||B!==Se)&&(n.polygonOffset(Me,Se),V=Me,B=Se)):Ge(n.POLYGON_OFFSET_FILL)}function ge(O){O?Ve(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+ne-1),te!==O&&(n.activeTexture(O),te=O)}function ye(O,Me,Se){Se===void 0&&(te===null?Se=n.TEXTURE0+ne-1:Se=te);let Ke=fe[Se];Ke===void 0&&(Ke={type:void 0,texture:void 0},fe[Se]=Ke),(Ke.type!==O||Ke.texture!==Me)&&(te!==Se&&(n.activeTexture(Se),te=Se),n.bindTexture(O,Me||Le[O]),Ke.type=O,Ke.texture=Me)}function Be(){let O=fe[te];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function we(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(O){re.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function bt(O){ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function Ot(O,Me){let Se=u.get(Me);Se===void 0&&(Se=new WeakMap,u.set(Me,Se));let Ke=Se.get(O);Ke===void 0&&(Ke=n.getUniformBlockIndex(Me,O.name),Se.set(O,Ke))}function dt(O,Me){let Ke=u.get(Me).get(O);h.get(Me)!==Ke&&(n.uniformBlockBinding(Me,Ke,O.__bindingPointIndex),h.set(Me,Ke))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},te=null,fe={},p={},g=new WeakMap,v=[],m=null,f=!1,E=null,b=null,N=null,P=null,R=null,D=null,z=null,w=new lt(0,0,0),M=0,F=!1,ie=null,de=null,k=null,V=null,B=null,re.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ve,disable:Ge,bindFramebuffer:gt,drawBuffers:X,useProgram:fn,setBlending:Oe,setMaterial:It,setFlipSided:ht,setCullFace:I,setLineWidth:A,setPolygonOffset:Z,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:Be,compressedTexImage2D:we,compressedTexImage3D:Ne,texImage2D:We,texImage3D:De,updateUBOMapping:Ot,uniformBlockBinding:dt,texStorage2D:pt,texStorage3D:et,texSubImage2D:je,texSubImage3D:ut,compressedTexSubImage2D:me,compressedTexSubImage3D:St,scissor:at,viewport:bt,reset:_e}}function h1(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return p?new OffscreenCanvas(I,A):qa("canvas")}function v(I,A,Z,ge){let pe=1;if((I.width>ge||I.height>ge)&&(pe=ge/Math.max(I.width,I.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ye=A?Sl:Math.floor,Be=ye(pe*I.width),we=ye(pe*I.height);u===void 0&&(u=g(Be,we));let Ne=Z?g(Be,we):u;return Ne.width=Be,Ne.height=we,Ne.getContext("2d").drawImage(I,0,0,Be,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Be+"x"+we+")."),Ne}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return Yh(I.width)&&Yh(I.height)}function f(I){return o?!1:I.wrapS!==Cn||I.wrapT!==Cn||I.minFilter!==mn&&I.minFilter!==On}function E(I,A){return I.generateMipmaps&&A&&I.minFilter!==mn&&I.minFilter!==On}function b(I){n.generateMipmap(I)}function N(I,A,Z,ge,pe=!1){if(o===!1)return A;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye=A;if(A===n.RED&&(Z===n.FLOAT&&(ye=n.R32F),Z===n.HALF_FLOAT&&(ye=n.R16F),Z===n.UNSIGNED_BYTE&&(ye=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ye=n.R8UI),Z===n.UNSIGNED_SHORT&&(ye=n.R16UI),Z===n.UNSIGNED_INT&&(ye=n.R32UI),Z===n.BYTE&&(ye=n.R8I),Z===n.SHORT&&(ye=n.R16I),Z===n.INT&&(ye=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(ye=n.RG32F),Z===n.HALF_FLOAT&&(ye=n.RG16F),Z===n.UNSIGNED_BYTE&&(ye=n.RG8)),A===n.RGBA){let Be=pe?_l:Lt.getTransfer(ge);Z===n.FLOAT&&(ye=n.RGBA32F),Z===n.HALF_FLOAT&&(ye=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ye=Be===Ft?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function P(I,A,Z){return E(I,Z)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function R(I){return I===mn||I===tf||I===ah?n.NEAREST:n.LINEAR}function D(I){let A=I.target;A.removeEventListener("dispose",D),w(A),A.isVideoTexture&&h.delete(A)}function z(I){let A=I.target;A.removeEventListener("dispose",z),F(A)}function w(I){let A=i.get(I);if(A.__webglInit===void 0)return;let Z=I.source,ge=d.get(Z);if(ge){let pe=ge[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(I),Object.keys(ge).length===0&&d.delete(Z)}i.remove(I)}function M(I){let A=i.get(I);n.deleteTexture(A.__webglTexture);let Z=I.source,ge=d.get(Z);delete ge[A.__cacheKey],a.memory.textures--}function F(I){let A=I.texture,Z=i.get(I),ge=i.get(A);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Z.__webglFramebuffer[pe]))for(let ye=0;ye<Z.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(Z.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(Z.__webglFramebuffer[pe]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[pe])}else{if(Array.isArray(Z.__webglFramebuffer))for(let pe=0;pe<Z.__webglFramebuffer.length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[pe]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let pe=0;pe<Z.__webglColorRenderbuffer.length;pe++)Z.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[pe]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let pe=0,ye=A.length;pe<ye;pe++){let Be=i.get(A[pe]);Be.__webglTexture&&(n.deleteTexture(Be.__webglTexture),a.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(I)}let ie=0;function de(){ie=0}function k(){let I=ie;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),ie+=1,I}function V(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function B(I,A){let Z=i.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){let ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(Z,I,A);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function ne(I,A){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){re(Z,I,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function q(I,A){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){re(Z,I,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function W(I,A){let Z=i.get(I);if(I.version>0&&Z.__version!==I.version){ae(Z,I,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}let Q={[Ss]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[$h]:n.MIRRORED_REPEAT},te={[mn]:n.NEAREST,[tf]:n.NEAREST_MIPMAP_NEAREST,[ah]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[W0]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},fe={[iy]:n.NEVER,[cy]:n.ALWAYS,[sy]:n.LESS,[Xp]:n.LEQUAL,[ry]:n.EQUAL,[ly]:n.GEQUAL,[ay]:n.GREATER,[oy]:n.NOTEQUAL};function G(I,A,Z){if(Z?(n.texParameteri(I,n.TEXTURE_WRAP_S,Q[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,Q[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,Q[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,te[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,te[A.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Cn||A.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,R(A.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==mn&&A.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,fe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===mn||A.minFilter!==ah&&A.minFilter!==ws||A.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===$a&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function j(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",D));let ge=A.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=V(A);if(ye!==I.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),pe[ye].usedTimes++;let Be=pe[I.__cacheKey];Be!==void 0&&(pe[I.__cacheKey].usedTimes--,Be.usedTimes===0&&M(A)),I.__cacheKey=ye,I.__webglTexture=pe[ye].texture}return Z}function re(I,A,Z){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=j(I,A),ye=A.source;t.bindTexture(ge,I.__webglTexture,n.TEXTURE0+Z);let Be=i.get(ye);if(ye.version!==Be.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let we=Lt.getPrimaries(Lt.workingColorSpace),Ne=A.colorSpace===ii?null:Lt.getPrimaries(A.colorSpace),je=A.colorSpace===ii||we===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ut=f(A)&&m(A.image)===!1,me=v(A.image,ut,!1,s.maxTextureSize);me=ht(A,me);let St=m(me)||o,pt=r.convert(A.format,A.colorSpace),et=r.convert(A.type),We=N(A.internalFormat,pt,et,A.colorSpace,A.isVideoTexture);G(ge,A,St);let De,at=A.mipmaps,bt=o&&A.isVideoTexture!==!0&&We!==$p,Ot=Be.__version===void 0||pe===!0,dt=P(A,me,St);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,o?A.type===Yi?We=n.DEPTH_COMPONENT32F:A.type===_s?We=n.DEPTH_COMPONENT24:A.type===Qs?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===er&&We===n.DEPTH_COMPONENT&&A.type!==Mu&&A.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_s,et=r.convert(A.type)),A.format===Yr&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Qs,et=r.convert(A.type))),Ot&&(bt?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,et,null));else if(A.isDataTexture)if(at.length>0&&St){bt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let _e=0,O=at.length;_e<O;_e++)De=at[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(n.TEXTURE_2D,_e,We,De.width,De.height,0,pt,et,De.data);A.generateMipmaps=!1}else bt?(Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,pt,et,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,et,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){bt&&Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,at[0].width,at[0].height,me.depth);for(let _e=0,O=at.length;_e<O;_e++)De=at[_e],A.format!==ni?pt!==null?bt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,me.depth,pt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,We,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,me.depth,pt,et,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,We,De.width,De.height,me.depth,0,pt,et,De.data)}else{bt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let _e=0,O=at.length;_e<O;_e++)De=at[_e],A.format!==ni?pt!==null?bt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,pt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,pt,et,De.data):t.texImage2D(n.TEXTURE_2D,_e,We,De.width,De.height,0,pt,et,De.data)}else if(A.isDataArrayTexture)bt?(Ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,pt,et,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,pt,et,me.data);else if(A.isData3DTexture)bt?(Ot&&t.texStorage3D(n.TEXTURE_3D,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,pt,et,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,pt,et,me.data);else if(A.isFramebufferTexture){if(Ot)if(bt)t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height);else{let _e=me.width,O=me.height;for(let Me=0;Me<dt;Me++)t.texImage2D(n.TEXTURE_2D,Me,We,_e,O,0,pt,et,null),_e>>=1,O>>=1}}else if(at.length>0&&St){bt&&Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let _e=0,O=at.length;_e<O;_e++)De=at[_e],bt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,pt,et,De):t.texImage2D(n.TEXTURE_2D,_e,We,pt,et,De);A.generateMipmaps=!1}else bt?(Ot&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,et,me)):t.texImage2D(n.TEXTURE_2D,0,We,pt,et,me);E(A,St)&&b(ge),Be.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ae(I,A,Z){if(A.image.length!==6)return;let ge=j(I,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Z);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);let Be=Lt.getPrimaries(Lt.workingColorSpace),we=A.colorSpace===ii?null:Lt.getPrimaries(A.colorSpace),Ne=A.colorSpace===ii||Be===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,me=[];for(let _e=0;_e<6;_e++)!je&&!ut?me[_e]=v(A.image[_e],!1,!0,s.maxCubemapSize):me[_e]=ut?A.image[_e].image:A.image[_e],me[_e]=ht(A,me[_e]);let St=me[0],pt=m(St)||o,et=r.convert(A.format,A.colorSpace),We=r.convert(A.type),De=N(A.internalFormat,et,We,A.colorSpace),at=o&&A.isVideoTexture!==!0,bt=ye.__version===void 0||ge===!0,Ot=P(A,St,pt);G(n.TEXTURE_CUBE_MAP,A,pt);let dt;if(je){at&&bt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,De,St.width,St.height);for(let _e=0;_e<6;_e++){dt=me[_e].mipmaps;for(let O=0;O<dt.length;O++){let Me=dt[O];A.format!==ni?et!==null?at?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,Me.width,Me.height,et,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,De,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,0,0,Me.width,Me.height,et,We,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O,De,Me.width,Me.height,0,et,We,Me.data)}}}else{dt=A.mipmaps,at&&bt&&(dt.length>0&&Ot++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,De,me[0].width,me[0].height));for(let _e=0;_e<6;_e++)if(ut){at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,me[_e].width,me[_e].height,et,We,me[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,De,me[_e].width,me[_e].height,0,et,We,me[_e].data);for(let O=0;O<dt.length;O++){let Se=dt[O].image[_e].image;at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,Se.width,Se.height,et,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,De,Se.width,Se.height,0,et,We,Se.data)}}else{at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,et,We,me[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,De,et,We,me[_e]);for(let O=0;O<dt.length;O++){let Me=dt[O];at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,0,0,et,We,Me.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,O+1,De,et,We,Me.image[_e])}}}E(A,pt)&&b(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function le(I,A,Z,ge,pe,ye){let Be=r.convert(Z.format,Z.colorSpace),we=r.convert(Z.type),Ne=N(Z.internalFormat,Be,we,Z.colorSpace);if(!i.get(A).__hasExternalTextures){let ut=Math.max(1,A.width>>ye),me=Math.max(1,A.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,ut,me,A.depth,0,Be,we,null):t.texImage2D(pe,ye,Ne,ut,me,0,Be,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,0,it(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(I,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let ge=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Oe(A)){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Yi?ge=n.DEPTH_COMPONENT32F:pe.type===_s&&(ge=n.DEPTH_COMPONENT24));let ye=it(A);Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){let ge=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],Be=r.convert(ye.format,ye.colorSpace),we=r.convert(ye.type),Ne=N(ye.internalFormat,Be,we,ye.colorSpace),je=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);let ge=i.get(A.depthTexture).__webglTexture,pe=it(A);if(A.depthTexture.format===er)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===Yr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ge(I){let A=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ve(A.__webglFramebuffer,I)}else if(Z){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=n.createRenderbuffer(),Le(A.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Le(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(I,A,Z){let ge=i.get(I);A!==void 0&&le(ge.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Ge(I)}function X(I){let A=I.texture,Z=i.get(I),ge=i.get(A);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,a.memory.textures++);let pe=I.isWebGLCubeRenderTarget===!0,ye=I.isWebGLMultipleRenderTargets===!0,Be=m(I)||o;if(pe){Z.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[we]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)Z.__webglFramebuffer[we][Ne]=n.createFramebuffer()}else Z.__webglFramebuffer[we]=n.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let we=0;we<A.mipmaps.length;we++)Z.__webglFramebuffer[we]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let we=I.texture;for(let Ne=0,je=we.length;Ne<je;Ne++){let ut=i.get(we[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&Oe(I)===!1){let we=ye?A:[A];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ne=0;Ne<we.length;Ne++){let je=we[Ne];Z.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne]);let ut=r.convert(je.format,je.colorSpace),me=r.convert(je.type),St=N(je.internalFormat,ut,me,je.colorSpace,I.isXRRenderTarget===!0),pt=it(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,St,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),G(n.TEXTURE_CUBE_MAP,A,Be);for(let we=0;we<6;we++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)le(Z.__webglFramebuffer[we][Ne],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else le(Z.__webglFramebuffer[we],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);E(A,Be)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let we=I.texture;for(let Ne=0,je=we.length;Ne<je;Ne++){let ut=we[Ne],me=i.get(ut);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),G(n.TEXTURE_2D,ut,Be),le(Z.__webglFramebuffer,I,ut,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),E(ut,Be)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?we=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,ge.__webglTexture),G(we,A,Be),o&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)le(Z.__webglFramebuffer[Ne],I,A,n.COLOR_ATTACHMENT0,we,Ne);else le(Z.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,we,0);E(A,Be)&&b(we),t.unbindTexture()}I.depthBuffer&&Ge(I)}function fn(I){let A=m(I)||o,Z=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,pe=Z.length;ge<pe;ge++){let ye=Z[ge];if(E(ye,A)){let Be=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,we=i.get(ye).__webglTexture;t.bindTexture(Be,we),b(Be),t.unbindTexture()}}}function Xe(I){if(o&&I.samples>0&&Oe(I)===!1){let A=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],Z=I.width,ge=I.height,pe=n.COLOR_BUFFER_BIT,ye=[],Be=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(I),Ne=I.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<A.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let je=0;je<A.length;je++){ye.push(n.COLOR_ATTACHMENT0+je),I.depthBuffer&&ye.push(Be);let ut=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(ut===!1&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[je]),ut===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Be]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Be])),Ne){let me=i.get(A[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,we.__webglColorRenderbuffer[je]);let ut=i.get(A[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function it(I){return Math.min(s.maxSamples,I.samples)}function Oe(I){let A=i.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(I){let A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ht(I,A){let Z=I.colorSpace,ge=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Xh||Z!==Zi&&Z!==ii&&(Lt.getTransfer(Z)===Ft?o===!1?e.has("EXT_sRGB")===!0&&ge===ni?(I.format=Xh,I.minFilter=On,I.generateMipmaps=!1):A=wl.sRGBToLinear(A):(ge!==ni||pe!==Ms)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=k,this.resetTextureUnits=de,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=gt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=fn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function u1(n,e,t){let i=t.isWebGL2;function s(r,a=ii){let o,l=Lt.getTransfer(a);if(r===Ms)return n.UNSIGNED_BYTE;if(r===zp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Hp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===$0)return n.BYTE;if(r===q0)return n.SHORT;if(r===Mu)return n.UNSIGNED_SHORT;if(r===Bp)return n.INT;if(r===_s)return n.UNSIGNED_INT;if(r===Yi)return n.FLOAT;if(r===$a)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===X0)return n.ALPHA;if(r===ni)return n.RGBA;if(r===Y0)return n.LUMINANCE;if(r===j0)return n.LUMINANCE_ALPHA;if(r===er)return n.DEPTH_COMPONENT;if(r===Yr)return n.DEPTH_STENCIL;if(r===Xh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Z0)return n.RED;if(r===Vp)return n.RED_INTEGER;if(r===J0)return n.RG;if(r===Gp)return n.RG_INTEGER;if(r===Wp)return n.RGBA_INTEGER;if(r===oh||r===lh||r===ch||r===hh)if(l===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===oh)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===oh)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lh)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ch)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hh)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===sf||r===rf||r===af)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$p)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===of||r===lf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===of)return l===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===lf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===cf||r===hf||r===uf||r===df||r===ff||r===pf||r===mf||r===gf||r===yf||r===vf||r===_f||r===xf||r===bf||r===Mf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===cf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===df)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ff)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mf)return l===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uh||r===Sf||r===wf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===uh)return l===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===K0||r===Ef||r===Tf||r===Af)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===uh)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ef)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Tf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Af)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ou=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rn=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},d1={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},lu=class extends Es{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,E=[],b=[],N=new tt,P=null,R=new en;R.layers.enable(1),R.viewport=new xt;let D=new en;D.layers.enable(2),D.viewport=new xt;let z=[R,D],w=new ou;w.layers.enable(1),w.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=E[G];return j===void 0&&(j=new Wa,E[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=E[G];return j===void 0&&(j=new Wa,E[G]=j),j.getGripSpace()},this.getHand=function(G){let j=E[G];return j===void 0&&(j=new Wa,E[G]=j),j.getHandSpace()};function ie(G){let j=b.indexOf(G.inputSource);if(j===-1)return;let re=E[j];re!==void 0&&(re.update(G.inputSource,G.frame,c||a),re.dispatchEvent({type:G.type,data:G.inputSource}))}function de(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",k);for(let G=0;G<E.length;G++){let j=b[G];j!==null&&(b[G]=null,E[G].disconnect(j))}M=null,F=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",de),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let j={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ji(p.framebufferWidth,p.framebufferHeight,{format:ni,type:Ms,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,re=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Yr:er,re=v.stencil?Qs:_s);let le={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Ji(d.textureWidth,d.textureHeight,{format:ni,type:Ms,depthTexture:new Nl(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(G){for(let j=0;j<G.removed.length;j++){let re=G.removed[j],ae=b.indexOf(re);ae>=0&&(b[ae]=null,E[ae].disconnect(re))}for(let j=0;j<G.added.length;j++){let re=G.added[j],ae=b.indexOf(re);if(ae===-1){for(let Le=0;Le<E.length;Le++)if(Le>=b.length){b.push(re),ae=Le;break}else if(b[Le]===null){b[Le]=re,ae=Le;break}if(ae===-1)break}let le=E[ae];le&&le.connect(re)}}let V=new U,B=new U;function ne(G,j,re){V.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);let ae=V.distanceTo(B),le=j.projectionMatrix.elements,Le=re.projectionMatrix.elements,Ve=le[14]/(le[10]-1),Ge=le[14]/(le[10]+1),gt=(le[9]+1)/le[5],X=(le[9]-1)/le[5],fn=(le[8]-1)/le[0],Xe=(Le[8]+1)/Le[0],it=Ve*fn,Oe=Ve*Xe,It=ae/(-fn+Xe),ht=It*-fn;j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ht),G.translateZ(It),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let I=Ve+It,A=Ge+It,Z=it-ht,ge=Oe+(ae-ht),pe=gt*Ge/A*I,ye=X*Ge/A*I;G.projectionMatrix.makePerspective(Z,ge,pe,ye,I,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;w.near=D.near=R.near=G.near,w.far=D.far=R.far=G.far,(M!==w.near||F!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),M=w.near,F=w.far);let j=G.parent,re=w.cameras;q(w,j);for(let ae=0;ae<re.length;ae++)q(re[ae],j);re.length===2?ne(w,R,D):w.projectionMatrix.copy(R.projectionMatrix),W(G,w,j)};function W(G,j,re){re===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=jr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Q=null;function te(G,j){if(h=j.getViewerPose(c||a),g=j,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;re.length!==w.cameras.length&&(w.cameras.length=0,ae=!0);for(let le=0;le<re.length;le++){let Le=re[le],Ve=null;if(p!==null)Ve=p.getViewport(Le);else{let gt=u.getViewSubImage(d,Le);Ve=gt.viewport,le===0&&(e.setRenderTargetTextures(f,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(f))}let Ge=z[le];Ge===void 0&&(Ge=new en,Ge.layers.enable(le),Ge.viewport=new xt,z[le]=Ge),Ge.matrix.fromArray(Le.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Le.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),le===0&&(w.matrix.copy(Ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ae===!0&&w.cameras.push(Ge)}}for(let re=0;re<E.length;re++){let ae=b[re],le=E[re];ae!==null&&le!==void 0&&le.update(ae,j,c||a)}Q&&Q(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let fe=new Jp;fe.setAnimationLoop(te),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}};function f1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Zp(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,N){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,N)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function p1(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){let N=b.program;i.uniformBlockBinding(E,N)}function c(E,b){let N=s[E.id];N===void 0&&(g(E),N=h(E),s[E.id]=N,E.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(E,P);let R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){let b=u();E.__bindingPointIndex=b;let N=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,N),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,N),N}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],N=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,D=N.length;R<D;R++){let z=Array.isArray(N[R])?N[R]:[N[R]];for(let w=0,M=z.length;w<M;w++){let F=z[w];if(p(F,R,w,P)===!0){let ie=F.__offset,de=Array.isArray(F.value)?F.value:[F.value],k=0;for(let V=0;V<de.length;V++){let B=de[V],ne=v(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,ie+k,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,k),k+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,N,P){let R=E.value,D=b+"_"+N;if(P[D]===void 0)return typeof R=="number"||typeof R=="boolean"?P[D]=R:P[D]=R.clone(),!0;{let z=P[D];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return P[D]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(E){let b=E.uniforms,N=0,P=16;for(let D=0,z=b.length;D<z;D++){let w=Array.isArray(b[D])?b[D]:[b[D]];for(let M=0,F=w.length;M<F;M++){let ie=w[M],de=Array.isArray(ie.value)?ie.value:[ie.value];for(let k=0,V=de.length;k<V;k++){let B=de[k],ne=v(B),q=N%P;q!==0&&P-q<ne.boundary&&(N+=P-q),ie.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=N,N+=ne.storage}}}let R=N%P;return R>0&&(N+=P-R),E.__size=N,E.__cache={},this}function v(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let N=a.indexOf(b.__bindingPointIndex);a.splice(N,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Za=class{constructor(e={}){let{canvas:t=wy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=bs,this.toneMappingExposure=1;let b=this,N=!1,P=0,R=0,D=null,z=-1,w=null,M=new xt,F=new xt,ie=null,de=new lt(0),k=0,V=t.width,B=t.height,ne=1,q=null,W=null,Q=new xt(0,0,V,B),te=new xt(0,0,V,B),fe=!1,G=new ja,j=!1,re=!1,ae=null,le=new ct,Le=new tt,Ve=new U,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?ne:1}let X=i;function fn(L,$){for(let J=0;J<L.length;J++){let ee=L[J],Y=t.getContext(ee,$);if(Y!==null)return Y}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Me,!1),X===null){let $=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&$.shift(),X=fn($,L),X===null)throw fn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Xe,it,Oe,It,ht,I,A,Z,ge,pe,ye,Be,we,Ne,je,ut,me,St,pt,et,We,De,at,bt;function Ot(){Xe=new Nx(X),it=new Ax(X,Xe,e),Xe.init(it),De=new u1(X,Xe,it),Oe=new c1(X,Xe,it),It=new Ox(X),ht=new Jb,I=new h1(X,Xe,Oe,ht,it,De,It),A=new Rx(b),Z=new Ix(b),ge=new Wy(X,it),at=new Ex(X,Xe,ge,it),pe=new Dx(X,ge,It,at),ye=new zx(X,pe,ge,It),pt=new Bx(X,it,I),ut=new Cx(ht),Be=new Zb(b,A,Z,Xe,it,at,ut),we=new f1(b,ht),Ne=new Qb,je=new r1(Xe,it),St=new wx(b,A,Z,Oe,ye,d,l),me=new l1(b,ye,it),bt=new p1(X,It,it,Oe),et=new Tx(X,Xe,It,it),We=new Ux(X,Xe,It,it),It.programs=Be.programs,b.capabilities=it,b.extensions=Xe,b.properties=ht,b.renderLists=Ne,b.shadowMap=me,b.state=Oe,b.info=It}Ot();let dt=new lu(b,X);this.xr=dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=Xe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Xe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(L){L!==void 0&&(ne=L,this.setSize(V,B,!1))},this.getSize=function(L){return L.set(V,B)},this.setSize=function(L,$,J=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=L,B=$,t.width=Math.floor(L*ne),t.height=Math.floor($*ne),J===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(V*ne,B*ne).floor()},this.setDrawingBufferSize=function(L,$,J){V=L,B=$,ne=J,t.width=Math.floor(L*J),t.height=Math.floor($*J),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(Q)},this.setViewport=function(L,$,J,ee){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,$,J,ee),Oe.viewport(M.copy(Q).multiplyScalar(ne).floor())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,$,J,ee){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,$,J,ee),Oe.scissor(F.copy(te).multiplyScalar(ne).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(L){Oe.setScissorTest(fe=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){W=L},this.getClearColor=function(L){return L.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(L=!0,$=!0,J=!0){let ee=0;if(L){let Y=!1;if(D!==null){let Ce=D.texture.format;Y=Ce===Wp||Ce===Gp||Ce===Vp}if(Y){let Ce=D.texture.type,Re=Ce===Ms||Ce===_s||Ce===Mu||Ce===Qs||Ce===zp||Ce===Hp,ze=St.getClearColor(),Ze=St.getClearAlpha(),ot=ze.r,st=ze.g,rt=ze.b;Re?(p[0]=ot,p[1]=st,p[2]=rt,p[3]=Ze,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=ot,g[1]=st,g[2]=rt,g[3]=Ze,X.clearBufferiv(X.COLOR,0,g))}else ee|=X.COLOR_BUFFER_BIT}$&&(ee|=X.DEPTH_BUFFER_BIT),J&&(ee|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ne.dispose(),je.dispose(),ht.dispose(),A.dispose(),Z.dispose(),ye.dispose(),at.dispose(),bt.dispose(),Be.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ln),dt.removeEventListener("sessionend",Ct),ae&&(ae.dispose(),ae=null),pn.stop()};function _e(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;let L=It.autoReset,$=me.enabled,J=me.autoUpdate,ee=me.needsUpdate,Y=me.type;Ot(),It.autoReset=L,me.enabled=$,me.autoUpdate=J,me.needsUpdate=ee,me.type=Y}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Se(L){let $=L.target;$.removeEventListener("dispose",Se),Ke($)}function Ke(L){Ye(L),ht.remove(L)}function Ye(L){let $=ht.get(L).programs;$!==void 0&&($.forEach(function(J){Be.releaseProgram(J)}),L.isShaderMaterial&&Be.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,J,ee,Y,Ce){$===null&&($=Ge);let Re=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=nh(L,$,J,ee,Y);Oe.setMaterial(ee,Re);let Ze=J.index,ot=1;if(ee.wireframe===!0){if(Ze=pe.getWireframeAttribute(J),Ze===void 0)return;ot=2}let st=J.drawRange,rt=J.attributes.position,$t=st.start*ot,Nn=(st.start+st.count)*ot;Ce!==null&&($t=Math.max($t,Ce.start*ot),Nn=Math.min(Nn,(Ce.start+Ce.count)*ot)),Ze!==null?($t=Math.max($t,0),Nn=Math.min(Nn,Ze.count)):rt!=null&&($t=Math.max($t,0),Nn=Math.min(Nn,rt.count));let Kt=Nn-$t;if(Kt<0||Kt===1/0)return;at.setup(Y,ee,ze,J,Ze);let ei,Nt=et;if(Ze!==null&&(ei=ge.get(Ze),Nt=We,Nt.setIndex(ei)),Y.isMesh)ee.wireframe===!0?(Oe.setLineWidth(ee.wireframeLinewidth*gt()),Nt.setMode(X.LINES)):Nt.setMode(X.TRIANGLES);else if(Y.isLine){let nt=ee.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*gt()),Y.isLineSegments?Nt.setMode(X.LINES):Y.isLineLoop?Nt.setMode(X.LINE_LOOP):Nt.setMode(X.LINE_STRIP)}else Y.isPoints?Nt.setMode(X.POINTS):Y.isSprite&&Nt.setMode(X.TRIANGLES);if(Y.isBatchedMesh)Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Nt.renderInstances($t,Kt,Y.count);else if(J.isInstancedBufferGeometry){let nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ca=Math.min(J.instanceCount,nt);Nt.renderInstances($t,Kt,Ca)}else Nt.render($t,Kt)};function Et(L,$,J){L.transparent===!0&&L.side===Fn&&L.forceSinglePass===!1?(L.side=un,L.needsUpdate=!0,_r(L,$,J),L.side=Vn,L.needsUpdate=!0,_r(L,$,J),L.side=Fn):_r(L,$,J)}this.compile=function(L,$,J=null){J===null&&(J=L),m=je.get(J),m.init(),E.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),L!==J&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test($.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(b._useLegacyLights);let ee=new Set;return L.traverse(function(Y){let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Re=0;Re<Ce.length;Re++){let ze=Ce[Re];Et(ze,J,Y),ee.add(ze)}else Et(Ce,J,Y),ee.add(Ce)}),E.pop(),m=null,ee},this.compileAsync=function(L,$,J=null){let ee=this.compile(L,$,J);return new Promise(Y=>{function Ce(){if(ee.forEach(function(Re){ht.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){Y(L);return}setTimeout(Ce,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let At=null;function wt(L){At&&At(L)}function ln(){pn.stop()}function Ct(){pn.start()}let pn=new Jp;pn.setAnimationLoop(wt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(L){At=L,dt.setAnimationLoop(L),L===null?pn.stop():pn.start()},dt.addEventListener("sessionstart",ln),dt.addEventListener("sessionend",Ct),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera($),$=dt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,$,D),m=je.get(L,E.length),m.init(),E.push(m),le.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G.setFromProjectionMatrix(le),re=this.localClippingEnabled,j=ut.init(this.clippingPlanes,re),v=Ne.get(L,f.length),v.init(),f.push(v),Qn(L,$,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(q,W),this.info.render.frame++,j===!0&&ut.beginShadows();let J=m.state.shadowsArray;if(me.render(J,L,$),j===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),St.render(v,L),m.setupLights(b._useLegacyLights),$.isArrayCamera){let ee=$.cameras;for(let Y=0,Ce=ee.length;Y<Ce;Y++){let Re=ee[Y];Uo(v,L,Re,Re.viewport)}}else Uo(v,L,$);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(b,L,$),at.resetDefaultState(),z=-1,w=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Qn(L,$,J,ee){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||G.intersectsSprite(L)){ee&&Ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(le);let Re=ye.update(L),ze=L.material;ze.visible&&v.push(L,Re,ze,J,Ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||G.intersectsObject(L))){let Re=ye.update(L),ze=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ve.copy(L.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(L.matrixWorld).applyMatrix4(le)),Array.isArray(ze)){let Ze=Re.groups;for(let ot=0,st=Ze.length;ot<st;ot++){let rt=Ze[ot],$t=ze[rt.materialIndex];$t&&$t.visible&&v.push(L,Re,$t,J,Ve.z,rt)}}else ze.visible&&v.push(L,Re,ze,J,Ve.z,null)}}let Ce=L.children;for(let Re=0,ze=Ce.length;Re<ze;Re++)Qn(Ce[Re],$,J,ee)}function Uo(L,$,J,ee){let Y=L.opaque,Ce=L.transmissive,Re=L.transparent;m.setupLightsView(J),j===!0&&ut.setGlobalState(b.clippingPlanes,J),Ce.length>0&&th(Y,Ce,$,J),ee&&Oe.viewport(M.copy(ee)),Y.length>0&&vr(Y,$,J),Ce.length>0&&vr(Ce,$,J),Re.length>0&&vr(Re,$,J),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function th(L,$,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Ce=it.isWebGL2;ae===null&&(ae=new Ji(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?$a:Ms,minFilter:ws,samples:Ce?4:0})),b.getDrawingBufferSize(Le),Ce?ae.setSize(Le.x,Le.y):ae.setSize(Sl(Le.x),Sl(Le.y));let Re=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(de),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();let ze=b.toneMapping;b.toneMapping=bs,vr(L,J,ee),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae);let Ze=!1;for(let ot=0,st=$.length;ot<st;ot++){let rt=$[ot],$t=rt.object,Nn=rt.geometry,Kt=rt.material,ei=rt.group;if(Kt.side===Fn&&$t.layers.test(ee.layers)){let Nt=Kt.side;Kt.side=un,Kt.needsUpdate=!0,Ta($t,J,ee,Nn,Kt,ei),Kt.side=Nt,Kt.needsUpdate=!0,Ze=!0}}Ze===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),b.setRenderTarget(Re),b.setClearColor(de,k),b.toneMapping=ze}function vr(L,$,J){let ee=$.isScene===!0?$.overrideMaterial:null;for(let Y=0,Ce=L.length;Y<Ce;Y++){let Re=L[Y],ze=Re.object,Ze=Re.geometry,ot=ee===null?Re.material:ee,st=Re.group;ze.layers.test(J.layers)&&Ta(ze,$,J,Ze,ot,st)}}function Ta(L,$,J,ee,Y,Ce){L.onBeforeRender(b,$,J,ee,Y,Ce),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(b,$,J,ee,L,Ce),Y.transparent===!0&&Y.side===Fn&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,b.renderBufferDirect(J,$,ee,Y,L,Ce),Y.side=Vn,Y.needsUpdate=!0,b.renderBufferDirect(J,$,ee,Y,L,Ce),Y.side=Fn):b.renderBufferDirect(J,$,ee,Y,L,Ce),L.onAfterRender(b,$,J,ee,Y,Ce)}function _r(L,$,J){$.isScene!==!0&&($=Ge);let ee=ht.get(L),Y=m.state.lights,Ce=m.state.shadowsArray,Re=Y.state.version,ze=Be.getParameters(L,Y.state,Ce,$,J),Ze=Be.getProgramCacheKey(ze),ot=ee.programs;ee.environment=L.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(L.isMeshStandardMaterial?Z:A).get(L.envMap||ee.environment),ot===void 0&&(L.addEventListener("dispose",Se),ot=new Map,ee.programs=ot);let st=ot.get(Ze);if(st!==void 0){if(ee.currentProgram===st&&ee.lightsStateVersion===Re)return Oo(L,ze),st}else ze.uniforms=Be.getUniforms(L),L.onBuild(J,ze,b),L.onBeforeCompile(ze,b),st=Be.acquireProgram(ze,Ze),ot.set(Ze,st),ee.uniforms=ze.uniforms;let rt=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=ut.uniform),Oo(L,ze),ee.needsLights=sh(L),ee.lightsStateVersion=Re,ee.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=st,ee.uniformsList=null,st}function Aa(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=$r.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Oo(L,$){let J=ht.get(L);J.outputColorSpace=$.outputColorSpace,J.batching=$.batching,J.instancing=$.instancing,J.instancingColor=$.instancingColor,J.skinning=$.skinning,J.morphTargets=$.morphTargets,J.morphNormals=$.morphNormals,J.morphColors=$.morphColors,J.morphTargetsCount=$.morphTargetsCount,J.numClippingPlanes=$.numClippingPlanes,J.numIntersection=$.numClipIntersection,J.vertexAlphas=$.vertexAlphas,J.vertexTangents=$.vertexTangents,J.toneMapping=$.toneMapping}function nh(L,$,J,ee,Y){$.isScene!==!0&&($=Ge),I.resetTextureUnits();let Ce=$.fog,Re=ee.isMeshStandardMaterial?$.environment:null,ze=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Zi,Ze=(ee.isMeshStandardMaterial?Z:A).get(ee.envMap||Re),ot=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,st=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),rt=!!J.morphAttributes.position,$t=!!J.morphAttributes.normal,Nn=!!J.morphAttributes.color,Kt=bs;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Kt=b.toneMapping);let ei=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Nt=ei!==void 0?ei.length:0,nt=ht.get(ee),Ca=m.state.lights;if(j===!0&&(re===!0||L!==w)){let wn=L===w&&ee.id===z;ut.setState(ee,L,wn)}let kt=!1;ee.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Ca.state.version||nt.outputColorSpace!==ze||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||nt.envMap!==Ze||ee.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ut.numPlanes||nt.numIntersection!==ut.numIntersection)||nt.vertexAlphas!==ot||nt.vertexTangents!==st||nt.morphTargets!==rt||nt.morphNormals!==$t||nt.morphColors!==Nn||nt.toneMapping!==Kt||it.isWebGL2===!0&&nt.morphTargetsCount!==Nt)&&(kt=!0):(kt=!0,nt.__version=ee.version);let Fi=nt.currentProgram;kt===!0&&(Fi=_r(ee,$,Y));let Ra=!1,Ws=!1,La=!1,cn=Fi.getUniforms(),wi=nt.uniforms;if(Oe.useProgram(Fi.program)&&(Ra=!0,Ws=!0,La=!0),ee.id!==z&&(z=ee.id,Ws=!0),Ra||w!==L){cn.setValue(X,"projectionMatrix",L.projectionMatrix),cn.setValue(X,"viewMatrix",L.matrixWorldInverse);let wn=cn.map.cameraPosition;wn!==void 0&&wn.setValue(X,Ve.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&cn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&cn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,Ws=!0,La=!0)}if(Y.isSkinnedMesh){cn.setOptional(X,Y,"bindMatrix"),cn.setOptional(X,Y,"bindMatrixInverse");let wn=Y.skeleton;wn&&(it.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),cn.setValue(X,"boneTexture",wn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(cn.setOptional(X,Y,"batchingTexture"),cn.setValue(X,"batchingTexture",Y._matricesTexture,I));let qt=J.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&it.isWebGL2===!0)&&pt.update(Y,J,Fi),(Ws||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,cn.setValue(X,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(wi.envMap.value=Ze,wi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),Ws&&(cn.setValue(X,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&ih(wi,La),Ce&&ee.fog===!0&&we.refreshFogUniforms(wi,Ce),we.refreshMaterialUniforms(wi,ee,ne,B,ae),$r.upload(X,Aa(nt),wi,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&($r.upload(X,Aa(nt),wi,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&cn.setValue(X,"center",Y.center),cn.setValue(X,"modelViewMatrix",Y.modelViewMatrix),cn.setValue(X,"normalMatrix",Y.normalMatrix),cn.setValue(X,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let wn=ee.uniformsGroups;for(let Pa=0,ko=wn.length;Pa<ko;Pa++)if(it.isWebGL2){let Ia=wn[Pa];bt.update(Ia,Fi),bt.bind(Ia,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function ih(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function sh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,$,J){ht.get(L.texture).__webglTexture=$,ht.get(L.depthTexture).__webglTexture=J;let ee=ht.get(L);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){let J=ht.get(L);J.__webglFramebuffer=$,J.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,J=0){D=L,P=$,R=J;let ee=!0,Y=null,Ce=!1,Re=!1;if(L){let Ze=ht.get(L);Ze.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(X.FRAMEBUFFER,null),ee=!1):Ze.__webglFramebuffer===void 0?I.setupRenderTarget(L):Ze.__hasExternalTextures&&I.rebindTextures(L,ht.get(L.texture).__webglTexture,ht.get(L.depthTexture).__webglTexture);let ot=L.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Re=!0);let st=ht.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[$])?Y=st[$][J]:Y=st[$],Ce=!0):it.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?Y=ht.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[J]:Y=st,M.copy(L.viewport),F.copy(L.scissor),ie=L.scissorTest}else M.copy(Q).multiplyScalar(ne).floor(),F.copy(te).multiplyScalar(ne).floor(),ie=fe;if(Oe.bindFramebuffer(X.FRAMEBUFFER,Y)&&it.drawBuffers&&ee&&Oe.drawBuffers(L,Y),Oe.viewport(M),Oe.scissor(F),Oe.setScissorTest(ie),Ce){let Ze=ht.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,J)}else if(Re){let Ze=ht.get(L.texture),ot=$||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.__webglTexture,J||0,ot)}z=-1},this.readRenderTargetPixels=function(L,$,J,ee,Y,Ce,Re){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ht.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){Oe.bindFramebuffer(X.FRAMEBUFFER,ze);try{let Ze=L.texture,ot=Ze.format,st=Ze.type;if(ot!==ni&&De.convert(ot)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=st===$a&&(Xe.has("EXT_color_buffer_half_float")||it.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(st!==Ms&&De.convert(st)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===Yi&&(it.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ee&&J>=0&&J<=L.height-Y&&X.readPixels($,J,ee,Y,De.convert(ot),De.convert(st),Ce)}finally{let Ze=D!==null?ht.get(D).__webglFramebuffer:null;Oe.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,$,J=0){let ee=Math.pow(2,-J),Y=Math.floor($.image.width*ee),Ce=Math.floor($.image.height*ee);I.setTexture2D($,0),X.copyTexSubImage2D(X.TEXTURE_2D,J,0,0,L.x,L.y,Y,Ce),Oe.unbindTexture()},this.copyTextureToTexture=function(L,$,J,ee=0){let Y=$.image.width,Ce=$.image.height,Re=De.convert(J.format),ze=De.convert(J.type);I.setTexture2D(J,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment),$.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ee,L.x,L.y,Y,Ce,Re,ze,$.image.data):$.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ee,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Re,$.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ee,L.x,L.y,Re,ze,$.image),ee===0&&J.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(L,$,J,ee,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=L.max.x-L.min.x+1,Re=L.max.y-L.min.y+1,ze=L.max.z-L.min.z+1,Ze=De.convert(ee.format),ot=De.convert(ee.type),st;if(ee.isData3DTexture)I.setTexture3D(ee,0),st=X.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)I.setTexture2DArray(ee,0),st=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment);let rt=X.getParameter(X.UNPACK_ROW_LENGTH),$t=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Nn=X.getParameter(X.UNPACK_SKIP_PIXELS),Kt=X.getParameter(X.UNPACK_SKIP_ROWS),ei=X.getParameter(X.UNPACK_SKIP_IMAGES),Nt=J.isCompressedTexture?J.mipmaps[Y]:J.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Nt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Nt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),J.isDataTexture||J.isData3DTexture?X.texSubImage3D(st,Y,$.x,$.y,$.z,Ce,Re,ze,Ze,ot,Nt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(st,Y,$.x,$.y,$.z,Ce,Re,ze,Ze,Nt.data)):X.texSubImage3D(st,Y,$.x,$.y,$.z,Ce,Re,ze,Ze,ot,Nt),X.pixelStorei(X.UNPACK_ROW_LENGTH,rt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$t),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Nn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Kt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ei),Y===0&&ee.generateMipmaps&&X.generateMipmap(st),Oe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Oe.unbindTexture()},this.resetState=function(){P=0,R=0,D=null,Oe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wu?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?tr:qp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===tr?Yt:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},cu=class extends Za{};cu.prototype.isWebGL1Renderer=!0;var nr=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Dl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new U,ri=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kr,ka=new U,Fr=new U,Br=new U,zr=new tt,Fa=new tt,im=new ct,cl=new U,Ba=new U,hl=new U,yp=new tt,Uh=new tt,vp=new tt,Ja=class extends jt{constructor(e=new Qr){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new Wn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Dl(t,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new ri(i,3,0,!1)),kr.setAttribute("uv",new ri(i,2,3,!1))}this.geometry=kr,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Br.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ul(cl.set(-.5,-.5,0),Br,a,Fr,s,r),ul(Ba.set(.5,-.5,0),Br,a,Fr,s,r),ul(hl.set(.5,.5,0),Br,a,Fr,s,r),yp.set(0,0),Uh.set(1,0),vp.set(1,1);let o=e.ray.intersectTriangle(cl,Ba,hl,!1,ka);if(o===null&&(ul(Ba.set(-.5,.5,0),Br,a,Fr,s,r),Uh.set(0,1),o=e.ray.intersectTriangle(cl,hl,Ba,!1,ka),o===null))return;let l=e.ray.origin.distanceTo(ka);l<e.near||l>e.far||t.push({distance:l,point:ka.clone(),uv:Ks.getInterpolation(ka,cl,Ba,hl,yp,Uh,vp,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ul(n,e,t,i,s,r){zr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Fa.x=r*zr.x-s*zr.y,Fa.y=s*zr.x+r*zr.y):Fa.copy(zr),n.copy(e),n.x+=Fa.x,n.y+=Fa.y,n.applyMatrix4(im)}var _p=new U,xp=new xt,bp=new xt,m1=new U,Mp=new ct,dl=new U,Oh=new si,Sp=new ct,kh=new Zr,Ul=class extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ef,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,dl),this.boundingBox.expandByPoint(dl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,dl),this.boundingSphere.expandByPoint(dl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oh.copy(this.boundingSphere),Oh.applyMatrix4(s),e.ray.intersectsSphere(Oh)!==!1&&(Sp.copy(s).invert(),kh.copy(e.ray).applyMatrix4(Sp),!(this.boundingBox!==null&&kh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===G0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;xp.fromBufferAttribute(s.attributes.skinIndex,e),bp.fromBufferAttribute(s.attributes.skinWeight,e),_p.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=bp.getComponent(r);if(a!==0){let o=xp.getComponent(r);Mp.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(m1.copy(_p).applyMatrix4(Mp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ka=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ol=class extends Gn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=mn,h=mn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wp=new ct,g1=new ct,kl=class n{constructor(e=[],t=[]){this.uuid=mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:g1;wp.multiplyMatrices(o,t[r]),wp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Ol(t,e,e,ni,Yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ka),this.bones.push(a),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}};var ea=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ep=new U,Tp=new U,Ap=new ct,Fh=new Zr,fl=new si,Qa=class extends jt{constructor(e=new Wn,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ep.fromBufferAttribute(t,s-1),Tp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ep.distanceTo(Tp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Ap.copy(s).invert(),Fh.copy(e.ray).applyMatrix4(Ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,a.start),E=Math.min(g.count,a.start+a.count);for(let b=f,N=E-1;b<N;b+=p){let P=g.getX(b),R=g.getX(b+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,R),Fh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let b=f,N=E-1;b<N;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),Fh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},Cp=new U,Rp=new U,Fl=class extends Qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Cp.fromBufferAttribute(t,s),Rp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cp.distanceTo(Rp);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ta=class extends Gn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bl=class n extends Wn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let E=[],b=f/i,N=0;f===0&&a===0?N=.5/t:f===i&&l===Math.PI&&(N=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+N,1-b),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let b=h[f][E+1],N=h[f][E],P=h[f+1][E],R=h[f+1][E+1];(f!==0||a>0)&&p.push(b,N,R),(f!==i-1||l<Math.PI)&&p.push(N,P,R)}this.setIndex(p),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zl=class extends Wn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=o.getX(g+m),E=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,E),Lp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Lp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Dt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var eo=class extends Ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ir=class extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function pl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function y1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function v1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Pp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function sm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var na=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hu=class extends na{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cf,endingEnd:Cf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rf:r=e,o=2*t-i;break;case Lf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rf:a=e,l=2*i-t;break;case Lf:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,E=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,N=p*m-p*v;for(let P=0;P!==o;++P)r[P]=f*a[h+P]+E*a[c+P]+b*a[l+P]+N*a[u+P];return r}},uu=class extends na{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},du=class extends na{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yl:t=this.InterpolantFactoryMethodDiscrete;break;case vl:t=this.InterpolantFactoryMethodLinear;break;case dh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&y1(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dh,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=vl;var Ts=class extends ai{};Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=yl;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends ai{};Hl.prototype.ValueTypeName="color";var ia=class extends ai{};ia.prototype.ValueTypeName="number";var fu=class extends na{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qi=class extends ai{InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.DefaultInterpolation=vl;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends ai{};As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=yl;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends ai{};es.prototype.ValueTypeName="vector";var to=class{constructor(e,t=-1,i,s=Q0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(x1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(ai.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=v1(l);l=Pp(l,1,h),c=Pp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ia(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];sm(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){let b=d[g];m.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new ia(".morphTargetInfluence["+v+"]",m,f))}l=p.length*a}else{let p=".bones["+t[u].name+"]";i(es,p+".position",d,"pos",s),i(Qi,p+".quaternion",d,"rot",s),i(es,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ia;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Hl;case"quaternion":return Qi;case"bool":case"boolean":return Ts;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function x1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_1(n.type);if(n.times===void 0){let t=[],i=[];sm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Vl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},no=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},b1=new no,Ci=class{constructor(e){this.manager=e!==void 0?e:b1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i={},pu=class extends Error{constructor(e,t){super(e),this.response=t}},io=class extends Ci{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:i,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=$i[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){E();function E(){u.read().then(({done:b,value:N})=>{if(b)f.close();else{v+=N.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let R=0,D=h.length;R<D;R++){let z=h[R];z.onProgress&&z.onProgress(P)}f.enqueue(N),E()}})}}});return new Response(m)}else throw new pu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Vl.add(e,c);let h=$i[e];delete $i[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=$i[e];if(h===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var mu=class extends Ci{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=qa("img");function l(){h(),Vl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Gl=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=this,a=new Ol,o=new io(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Cn,a.wrapT=c.wrapT!==void 0?c.wrapT:Cn,a.magFilter=c.magFilter!==void 0?c.magFilter:On,a.minFilter=c.minFilter!==void 0?c.minFilter:On,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=ws),c.mipmapCount===1&&(a.minFilter=On),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}},Wl=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=new Gn,a=new mu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},sr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$l=class extends sr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bh=new ct,Ip=new U,Np=new U,so=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Np.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Np),t.updateMatrixWorld(),Bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gu=class extends so{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ql=class extends sr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new gu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dp=new ct,za=new U,zh=new U,yu=class extends so{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),za.setFromMatrixPosition(e.matrixWorld),i.position.copy(za),zh.copy(i.position),zh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zh),i.updateMatrixWorld(),s.makeTranslation(-za.x,-za.y,-za.z),Dp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp)}},Xl=class extends sr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vu=class extends so{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},sa=class extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yl=class extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var jl=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Zl=class extends Wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Au="\\[\\]\\.:\\/",M1=new RegExp("["+Au+"]","g"),Cu="[^"+Au+"]",S1="[^"+Au.replace("\\.","")+"]",w1=/((?:WC+[\/:])*)/.source.replace("WC",Cu),E1=/(WCOD+)?/.source.replace("WCOD",S1),T1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),A1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),C1=new RegExp("^"+w1+E1+T1+A1+"$"),R1=["material","materials","bones","map"],_u=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M1,"")}static parseTrackName(e){let t=C1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);R1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=_u;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ES=new Float32Array(1);var rr=class extends Dl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Jl=class{constructor(e,t,i=0,s=1/0){this.ray=new Zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return xu(e,this,i,t),i.sort(Up),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xu(e[s],this,i,t);return i.sort(Up),i}};function Up(n,e){return n.distance-e.distance}function xu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)xu(s[r],e,t,!0)}}var Op=new U,ml=new U,Kl=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Op.subVectors(e,this.start),ml.subVectors(this.end,this.start);let i=ml.dot(ml),r=ml.dot(Op)/i;return t&&(r=An(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);var ro=class extends Gl{constructor(e){super(e)}parse(e){function t(B){switch(B.image_type){case d:case v:if(B.colormap_length>256||B.colormap_size!==24||B.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(B.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+B.image_type)}if(B.width<=0||B.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(B.pixel_size!==8&&B.pixel_size!==16&&B.pixel_size!==24&&B.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+B.pixel_size)}function i(B,ne,q,W,Q){let te,fe,G=q.pixel_size>>3,j=q.width*q.height*G;if(ne&&(fe=Q.subarray(W,W+=q.colormap_length*(q.colormap_size>>3))),B){te=new Uint8Array(j);let re,ae,le,Le=0,Ve=new Uint8Array(G);for(;Le<j;)if(re=Q[W++],ae=(re&127)+1,re&128){for(le=0;le<G;++le)Ve[le]=Q[W++];for(le=0;le<ae;++le)te.set(Ve,Le+le*G);Le+=G*ae}else{for(ae*=G,le=0;le<ae;++le)te[Le+le]=Q[W++];Le+=ae}}else te=Q.subarray(W,W+=ne?q.width*q.height:j);return{pixel_data:te,palettes:fe}}function s(B,ne,q,W,Q,te,fe,G,j){let re=j,ae,le=0,Le,Ve,Ge=M.width;for(Ve=ne;Ve!==W;Ve+=q)for(Le=Q;Le!==fe;Le+=te,le++)ae=G[le],B[(Le+Ge*Ve)*4+3]=255,B[(Le+Ge*Ve)*4+2]=re[ae*3+0],B[(Le+Ge*Ve)*4+1]=re[ae*3+1],B[(Le+Ge*Ve)*4+0]=re[ae*3+2];return B}function r(B,ne,q,W,Q,te,fe,G){let j,re=0,ae,le,Le=M.width;for(le=ne;le!==W;le+=q)for(ae=Q;ae!==fe;ae+=te,re+=2)j=G[re+0]+(G[re+1]<<8),B[(ae+Le*le)*4+0]=(j&31744)>>7,B[(ae+Le*le)*4+1]=(j&992)>>2,B[(ae+Le*le)*4+2]=(j&31)<<3,B[(ae+Le*le)*4+3]=j&32768?0:255;return B}function a(B,ne,q,W,Q,te,fe,G){let j=0,re,ae,le=M.width;for(ae=ne;ae!==W;ae+=q)for(re=Q;re!==fe;re+=te,j+=3)B[(re+le*ae)*4+3]=255,B[(re+le*ae)*4+2]=G[j+0],B[(re+le*ae)*4+1]=G[j+1],B[(re+le*ae)*4+0]=G[j+2];return B}function o(B,ne,q,W,Q,te,fe,G){let j=0,re,ae,le=M.width;for(ae=ne;ae!==W;ae+=q)for(re=Q;re!==fe;re+=te,j+=4)B[(re+le*ae)*4+2]=G[j+0],B[(re+le*ae)*4+1]=G[j+1],B[(re+le*ae)*4+0]=G[j+2],B[(re+le*ae)*4+3]=G[j+3];return B}function l(B,ne,q,W,Q,te,fe,G){let j,re=0,ae,le,Le=M.width;for(le=ne;le!==W;le+=q)for(ae=Q;ae!==fe;ae+=te,re++)j=G[re],B[(ae+Le*le)*4+0]=j,B[(ae+Le*le)*4+1]=j,B[(ae+Le*le)*4+2]=j,B[(ae+Le*le)*4+3]=255;return B}function c(B,ne,q,W,Q,te,fe,G){let j=0,re,ae,le=M.width;for(ae=ne;ae!==W;ae+=q)for(re=Q;re!==fe;re+=te,j+=2)B[(re+le*ae)*4+0]=G[j+0],B[(re+le*ae)*4+1]=G[j+0],B[(re+le*ae)*4+2]=G[j+0],B[(re+le*ae)*4+3]=G[j+1];return B}function h(B,ne,q,W,Q){let te,fe,G,j,re,ae;switch((M.flags&E)>>b){default:case R:te=0,G=1,re=ne,fe=0,j=1,ae=q;break;case N:te=0,G=1,re=ne,fe=q-1,j=-1,ae=-1;break;case D:te=ne-1,G=-1,re=-1,fe=0,j=1,ae=q;break;case P:te=ne-1,G=-1,re=-1,fe=q-1,j=-1,ae=-1;break}if(de)switch(M.pixel_size){case 8:l(B,fe,j,ae,te,G,re,W);break;case 16:c(B,fe,j,ae,te,G,re,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(M.pixel_size){case 8:s(B,fe,j,ae,te,G,re,W,Q);break;case 16:r(B,fe,j,ae,te,G,re,W);break;case 24:a(B,fe,j,ae,te,G,re,W);break;case 32:o(B,fe,j,ae,te,G,re,W);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return B}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,E=48,b=4,N=0,P=1,R=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let z=0,w=new Uint8Array(e),M={id_length:w[z++],colormap_type:w[z++],image_type:w[z++],colormap_index:w[z++]|w[z++]<<8,colormap_length:w[z++]|w[z++]<<8,colormap_size:w[z++],origin:[w[z++]|w[z++]<<8,w[z++]|w[z++]<<8],width:w[z++]|w[z++]<<8,height:w[z++]|w[z++]<<8,pixel_size:w[z++],flags:w[z++]};if(t(M),M.id_length+z>e.length)throw new Error("THREE.TGALoader: No data.");z+=M.id_length;let F=!1,ie=!1,de=!1;switch(M.image_type){case v:F=!0,ie=!0;break;case d:ie=!0;break;case m:F=!0;break;case p:break;case f:F=!0,de=!0;break;case g:de=!0;break}let k=new Uint8Array(M.width*M.height*4),V=i(F,ie,M,z,w);return h(k,M.width,M.height,V.pixel_data,V.palettes),{data:k,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:ws}}};var sc=class extends Ci{load(e,t,i,s){let r=this,a=r.path===""?jl.extractUrlBase(e):r.path,o=new io(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,_){let T=[],S=x.childNodes;for(let C=0,K=S.length;C<K;C++){let se=S[C];se.nodeName===_&&T.push(se)}return T}function s(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let S=0,C=_.length;S<C;S++)T[S]=_[S];return T}function r(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let S=0,C=_.length;S<C;S++)T[S]=parseFloat(_[S]);return T}function a(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let S=0,C=_.length;S<C;S++)T[S]=parseInt(_[S]);return T}function o(x){return x.substring(1)}function l(){return"three_default_"+o0++}function c(x){return Object.keys(x).length===0}function h(x){return{unit:u(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function u(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function p(x,_,T,S){let C=i(x,_)[0];if(C!==void 0){let K=i(C,T);for(let se=0;se<K.length;se++)S(K[se])}}function g(x,_){for(let T in x){let S=x[T];S.build=_(x[T])}}function v(x,_){return x.build!==void 0||(x.build=_(x)),x.build}function m(x){let _={sources:{},samplers:{},channels:{}},T=!1;for(let S=0,C=x.childNodes.length;S<C;S++){let K=x.childNodes[S];if(K.nodeType!==1)continue;let se;switch(K.nodeName){case"source":se=K.getAttribute("id"),_.sources[se]=O(K);break;case"sampler":se=K.getAttribute("id"),_.samplers[se]=f(K);break;case"channel":se=K.getAttribute("target"),_.channels[se]=E(K);break;case"animation":m(K),T=!0;break;default:console.log(K)}}T===!1&&(Je.animations[x.getAttribute("id")||Cs.generateUUID()]=_)}function f(x){let _={inputs:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let K=o(C.getAttribute("source")),se=C.getAttribute("semantic");_.inputs[se]=K;break}}return _}function E(x){let _={},S=x.getAttribute("target").split("/"),C=S.shift(),K=S.shift(),se=K.indexOf("(")!==-1,Ie=K.indexOf(".")!==-1;if(Ie)S=K.split("."),K=S.shift(),_.member=S.shift();else if(se){let xe=K.split("(");K=xe.shift();for(let Ee=0;Ee<xe.length;Ee++)xe[Ee]=parseInt(xe[Ee].replace(/\)/,""));_.indices=xe}return _.id=C,_.sid=K,_.arraySyntax=se,_.memberSyntax=Ie,_.sampler=o(x.getAttribute("source")),_}function b(x){let _=[],T=x.channels,S=x.samplers,C=x.sources;for(let K in T)if(T.hasOwnProperty(K)){let se=T[K],Ie=S[se.sampler],xe=Ie.inputs.INPUT,Ee=Ie.inputs.OUTPUT,Fe=C[xe],ue=C[Ee],ke=P(se,Fe,ue);M(ke,_)}return _}function N(x){return v(Je.animations[x],b)}function P(x,_,T){let S=Je.nodes[x.id],C=nt(S.id),K=S.transforms[x.sid],se=S.matrix.clone().transpose(),Ie,xe,Ee,Fe,ue,ke,Ue={};switch(K){case"matrix":for(Ee=0,Fe=_.array.length;Ee<Fe;Ee++)if(Ie=_.array[Ee],xe=Ee*T.stride,Ue[Ie]===void 0&&(Ue[Ie]={}),x.arraySyntax===!0){let Xt=T.array[xe],Tt=x.indices[0]+4*x.indices[1];Ue[Ie][Tt]=Xt}else for(ue=0,ke=T.stride;ue<ke;ue++)Ue[Ie][ue]=T.array[xe+ue];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}let $e=R(Ue,se);return{name:C.uuid,keyframes:$e}}function R(x,_){let T=[];for(let C in x)T.push({time:parseFloat(C),value:x[C]});T.sort(S);for(let C=0;C<16;C++)F(T,C,_.elements[C]);return T;function S(C,K){return C.time-K.time}}let D=new U,z=new U,w=new Ti;function M(x,_){let T=x.keyframes,S=x.name,C=[],K=[],se=[],Ie=[];for(let xe=0,Ee=T.length;xe<Ee;xe++){let Fe=T[xe],ue=Fe.time,ke=Fe.value;Re.fromArray(ke).transpose(),Re.decompose(D,w,z),C.push(ue),K.push(D.x,D.y,D.z),se.push(w.x,w.y,w.z,w.w),Ie.push(z.x,z.y,z.z)}return K.length>0&&_.push(new es(S+".position",C,K)),se.length>0&&_.push(new Qi(S+".quaternion",C,se)),Ie.length>0&&_.push(new es(S+".scale",C,Ie)),_}function F(x,_,T){let S,C=!0,K,se;for(K=0,se=x.length;K<se;K++)S=x[K],S.value[_]===void 0?S.value[_]=null:C=!1;if(C===!0)for(K=0,se=x.length;K<se;K++)S=x[K],S.value[_]=T;else ie(x,_)}function ie(x,_){let T,S;for(let C=0,K=x.length;C<K;C++){let se=x[C];if(se.value[_]===null){if(T=de(x,C,_),S=k(x,C,_),T===null){se.value[_]=S.value[_];continue}if(S===null){se.value[_]=T.value[_];continue}V(se,T,S,_)}}}function de(x,_,T){for(;_>=0;){let S=x[_];if(S.value[T]!==null)return S;_--}return null}function k(x,_,T){for(;_<x.length;){let S=x[_];if(S.value[T]!==null)return S;_++}return null}function V(x,_,T,S){if(T.time-_.time===0){x.value[S]=_.value[S];return}x.value[S]=(x.time-_.time)*(T.value[S]-_.value[S])/(T.time-_.time)+_.value[S]}function B(x){let _={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_animation":_.animations.push(o(C.getAttribute("url")));break}}Je.clips[x.getAttribute("id")]=_}function ne(x){let _=[],T=x.name,S=x.end-x.start||-1,C=x.animations;for(let K=0,se=C.length;K<se;K++){let Ie=N(C[K]);for(let xe=0,Ee=Ie.length;xe<Ee;xe++)_.push(Ie[xe])}return new to(T,S,_)}function q(x){return v(Je.clips[x],ne)}function W(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"skin":_.id=o(C.getAttribute("source")),_.skin=Q(C);break;case"morph":_.id=o(C.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[x.getAttribute("id")]=_}function Q(x){let _={sources:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(C.textContent);break;case"source":let K=C.getAttribute("id");_.sources[K]=O(C);break;case"joints":_.joints=te(C);break;case"vertex_weights":_.vertexWeights=fe(C);break}}return _}function te(x){let _={inputs:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let K=C.getAttribute("semantic"),se=o(C.getAttribute("source"));_.inputs[K]=se;break}}return _}function fe(x){let _={inputs:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let K=C.getAttribute("semantic"),se=o(C.getAttribute("source")),Ie=parseInt(C.getAttribute("offset"));_.inputs[K]={id:se,offset:Ie};break;case"vcount":_.vcount=a(C.textContent);break;case"v":_.v=a(C.textContent);break}}return _}function G(x){let _={id:x.id},T=Je.geometries[_.id];return x.skin!==void 0&&(_.skin=j(x.skin),T.sources.skinIndices=_.skin.indices,T.sources.skinWeights=_.skin.weights),_}function j(x){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},S=x.sources,C=x.vertexWeights,K=C.vcount,se=C.v,Ie=C.inputs.JOINT.offset,xe=C.inputs.WEIGHT.offset,Ee=x.sources[x.joints.inputs.JOINT],Fe=x.sources[x.joints.inputs.INV_BIND_MATRIX],ue=S[C.inputs.WEIGHT.id].array,ke=0,Ue,$e,He;for(Ue=0,He=K.length;Ue<He;Ue++){let Tt=K[Ue],vt=[];for($e=0;$e<Tt;$e++){let _t=se[ke+Ie],Bi=se[ke+xe],Hn=ue[Bi];vt.push({index:_t,weight:Hn}),ke+=2}for(vt.sort(Xt),$e=0;$e<4;$e++){let _t=vt[$e];_t!==void 0?(T.indices.array.push(_t.index),T.weights.array.push(_t.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(x.bindShapeMatrix?T.bindMatrix=new ct().fromArray(x.bindShapeMatrix).transpose():T.bindMatrix=new ct().identity(),Ue=0,He=Ee.array.length;Ue<He;Ue++){let Tt=Ee.array[Ue],vt=new ct().fromArray(Fe.array,Ue*Fe.stride).transpose();T.joints.push({name:Tt,boneInverse:vt})}return T;function Xt(Tt,vt){return vt.weight-Tt.weight}}function re(x){return v(Je.controllers[x],G)}function ae(x){let _={init_from:i(x,"init_from")[0].textContent};Je.images[x.getAttribute("id")]=_}function le(x){return x.build!==void 0?x.build:x.init_from}function Le(x){let _=Je.images[x];return _!==void 0?v(_,le):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function Ve(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"profile_COMMON":_.profile=Ge(C);break}}Je.effects[x.getAttribute("id")]=_}function Ge(x){let _={surfaces:{},samplers:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"newparam":gt(C,_);break;case"technique":_.technique=Xe(C);break;case"extra":_.extra=A(C);break}}return _}function gt(x,_){let T=x.getAttribute("sid");for(let S=0,C=x.childNodes.length;S<C;S++){let K=x.childNodes[S];if(K.nodeType===1)switch(K.nodeName){case"surface":_.surfaces[T]=X(K);break;case"sampler2D":_.samplers[T]=fn(K);break}}}function X(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"init_from":_.init_from=C.textContent;break}}return _}function fn(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"source":_.source=C.textContent;break}}return _}function Xe(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=C.nodeName,_.parameters=it(C);break;case"extra":_.extra=A(C);break}}return _}function it(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[C.nodeName]=Oe(C);break;case"transparent":_[C.nodeName]={opaque:C.hasAttribute("opaque")?C.getAttribute("opaque"):"A_ONE",data:Oe(C)};break}}return _}function Oe(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":_[C.nodeName]=r(C.textContent);break;case"float":_[C.nodeName]=parseFloat(C.textContent);break;case"texture":_[C.nodeName]={id:C.getAttribute("texture"),extra:It(C)};break}}return _}function It(x){let _={technique:{}};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"extra":ht(C,_);break}}return _}function ht(x,_){for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":I(C,_);break}}}function I(x,_){for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[C.nodeName]=parseFloat(C.textContent);break;case"wrapU":case"wrapV":C.textContent.toUpperCase()==="TRUE"?_.technique[C.nodeName]=1:C.textContent.toUpperCase()==="FALSE"?_.technique[C.nodeName]=0:_.technique[C.nodeName]=parseInt(C.textContent);break;case"bump":_[C.nodeName]=ge(C);break}}}function A(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":_.technique=Z(C);break}}return _}function Z(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"double_sided":_[C.nodeName]=parseInt(C.textContent);break;case"bump":_[C.nodeName]=ge(C);break}}return _}function ge(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"texture":_[C.nodeName]={id:C.getAttribute("texture"),texcoord:C.getAttribute("texcoord"),extra:It(C)};break}}return _}function pe(x){return x}function ye(x){return v(Je.effects[x],pe)}function Be(x){let _={name:x.getAttribute("name")};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_effect":_.url=o(C.getAttribute("url"));break}}Je.materials[x.getAttribute("id")]=_}function we(x){let _,T=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":_=rh;break;default:_=Ia}return _}function Ne(x){let _=ye(x.url),T=_.profile.technique,S;switch(T.type){case"phong":case"blinn":S=new eo;break;case"lambert":S=new ir;break;default:S=new tn;break}S.name=x.name||"";function C(xe,Ee=null){let Fe=_.profile.samplers[xe.id],ue=null;if(Fe!==void 0){let ke=_.profile.surfaces[Fe.source];ue=Le(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ue=Le(xe.id);if(ue!==null){let ke=we(ue);if(ke!==void 0){let Ue=ke.load(ue),$e=xe.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let He=$e.technique;Ue.wrapS=He.wrapU?Ss:Cn,Ue.wrapT=He.wrapV?Ss:Cn,Ue.offset.set(He.offsetU||0,He.offsetV||0),Ue.repeat.set(He.repeatU||1,He.repeatV||1)}else Ue.wrapS=Ss,Ue.wrapT=Ss;return Ee!==null&&(Ue.colorSpace=Ee),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ue),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xe.id),null}let K=T.parameters;for(let xe in K){let Ee=K[xe];switch(xe){case"diffuse":Ee.color&&S.color.fromArray(Ee.color),Ee.texture&&(S.map=C(Ee.texture,Yt));break;case"specular":Ee.color&&S.specular&&S.specular.fromArray(Ee.color),Ee.texture&&(S.specularMap=C(Ee.texture));break;case"bump":Ee.texture&&(S.normalMap=C(Ee.texture));break;case"ambient":Ee.texture&&(S.lightMap=C(Ee.texture,Yt));break;case"shininess":Ee.float&&S.shininess&&(S.shininess=Ee.float);break;case"emission":Ee.color&&S.emissive&&S.emissive.fromArray(Ee.color),Ee.texture&&(S.emissiveMap=C(Ee.texture,Yt));break}}S.color.convertSRGBToLinear(),S.specular&&S.specular.convertSRGBToLinear(),S.emissive&&S.emissive.convertSRGBToLinear();let se=K.transparent,Ie=K.transparency;if(Ie===void 0&&se&&(Ie={float:1}),se===void 0&&Ie&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&Ie)if(se.data.texture)S.transparent=!0;else{let xe=se.data.color;switch(se.opaque){case"A_ONE":S.opacity=xe[3]*Ie.float;break;case"RGB_ZERO":S.opacity=1-xe[0]*Ie.float;break;case"A_ZERO":S.opacity=1-xe[3]*Ie.float;break;case"RGB_ONE":S.opacity=xe[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}S.opacity<1&&(S.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let xe=T.extra.technique;for(let Ee in xe){let Fe=xe[Ee];switch(Ee){case"double_sided":S.side=Fe===1?Fn:Vn;break;case"bump":S.normalMap=C(Fe.texture),S.normalScale=new tt(1,1);break}}}return S}function je(x){return v(Je.materials[x],Ne)}function ut(x){let _={name:x.getAttribute("name")};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"optics":_.optics=me(C);break}}Je.cameras[x.getAttribute("id")]=_}function me(x){for(let _=0;_<x.childNodes.length;_++){let T=x.childNodes[_];switch(T.nodeName){case"technique_common":return St(T)}}return{}}function St(x){let _={};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];switch(S.nodeName){case"perspective":case"orthographic":_.technique=S.nodeName,_.parameters=pt(S);break}}return _}function pt(x){let _={};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];switch(S.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[S.nodeName]=parseFloat(S.textContent);break}}return _}function et(x){let _;switch(x.optics.technique){case"perspective":_=new en(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let T=x.optics.parameters.ymag,S=x.optics.parameters.xmag,C=x.optics.parameters.aspect_ratio;S=S===void 0?T*C:S,T=T===void 0?S/C:T,S*=.5,T*=.5,_=new Kr(-S,S,T,-T,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:_=new en;break}return _.name=x.name||"",_}function We(x){let _=Je.cameras[x];return _!==void 0?v(_,et):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function De(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique_common":_=at(C);break}}Je.lights[x.getAttribute("id")]=_}function at(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=C.nodeName,_.parameters=bt(C)}}return _}function bt(x){let _={};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":let K=r(C.textContent);_.color=new lt().fromArray(K).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(C.textContent);break;case"quadratic_attenuation":let se=parseFloat(C.textContent);_.distance=se?Math.sqrt(1/se):0;break}}return _}function Ot(x){let _;switch(x.technique){case"directional":_=new sa;break;case"point":_=new Xl;break;case"spot":_=new ql;break;case"ambient":_=new Yl;break}return x.parameters.color&&_.color.copy(x.parameters.color),x.parameters.distance&&(_.distance=x.parameters.distance),_}function dt(x){let _=Je.lights[x];return _!==void 0?v(_,Ot):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function _e(x){let _={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=i(x,"mesh")[0];if(T!==void 0){for(let S=0;S<T.childNodes.length;S++){let C=T.childNodes[S];if(C.nodeType!==1)continue;let K=C.getAttribute("id");switch(C.nodeName){case"source":_.sources[K]=O(C);break;case"vertices":_.vertices=Me(C);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",C.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Se(C));break;default:console.log(C)}}Je.geometries[x.getAttribute("id")]=_}}function O(x){let _={array:[],stride:3};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"float_array":_.array=r(S.textContent);break;case"Name_array":_.array=s(S.textContent);break;case"technique_common":let C=i(S,"accessor")[0];C!==void 0&&(_.stride=parseInt(C.getAttribute("stride")));break}}return _}function Me(x){let _={};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];S.nodeType===1&&(_[S.getAttribute("semantic")]=o(S.getAttribute("source")))}return _}function Se(x){let _={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,S=x.childNodes.length;T<S;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let K=o(C.getAttribute("source")),se=C.getAttribute("semantic"),Ie=parseInt(C.getAttribute("offset")),xe=parseInt(C.getAttribute("set")),Ee=xe>0?se+xe:se;_.inputs[Ee]={id:K,offset:Ie},_.stride=Math.max(_.stride,Ie+1),se==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=a(C.textContent);break;case"p":_.p=a(C.textContent);break}}return _}function Ke(x){let _={};for(let T=0;T<x.length;T++){let S=x[T];_[S.type]===void 0&&(_[S.type]=[]),_[S.type].push(S)}return _}function Ye(x){let _=0;for(let T=0,S=x.length;T<S;T++)x[T].hasUV===!0&&_++;_>0&&_<x.length&&(x.uvsNeedsFix=!0)}function Et(x){let _={},T=x.sources,S=x.vertices,C=x.primitives;if(C.length===0)return{};let K=Ke(C);for(let se in K){let Ie=K[se];Ye(Ie),_[se]=At(Ie,T,S)}return _}function At(x,_,T){let S={},C={array:[],stride:0},K={array:[],stride:0},se={array:[],stride:0},Ie={array:[],stride:0},xe={array:[],stride:0},Ee={array:[],stride:4},Fe={array:[],stride:4},ue=new Wn,ke=[],Ue=0;for(let $e=0;$e<x.length;$e++){let He=x[$e],Xt=He.inputs,Tt=0;switch(He.type){case"lines":case"linestrips":Tt=He.count*2;break;case"triangles":Tt=He.count*3;break;case"polylist":for(let vt=0;vt<He.count;vt++){let _t=He.vcount[vt];switch(_t){case 3:Tt+=3;break;case 4:Tt+=6;break;default:Tt+=(_t-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",He.type)}ue.addGroup(Ue,Tt,$e),Ue+=Tt,He.material&&ke.push(He.material);for(let vt in Xt){let _t=Xt[vt];switch(vt){case"VERTEX":for(let Bi in T){let Hn=T[Bi];switch(Bi){case"POSITION":let xr=C.array.length;if(wt(He,_[Hn],_t.offset,C.array),C.stride=_[Hn].stride,_.skinWeights&&_.skinIndices&&(wt(He,_.skinIndices,_t.offset,Ee.array),wt(He,_.skinWeights,_t.offset,Fe.array)),He.hasUV===!1&&x.uvsNeedsFix===!0){let l0=(C.array.length-xr)/C.stride;for(let Xd=0;Xd<l0;Xd++)se.array.push(0,0)}break;case"NORMAL":wt(He,_[Hn],_t.offset,K.array),K.stride=_[Hn].stride;break;case"COLOR":wt(He,_[Hn],_t.offset,xe.array),xe.stride=_[Hn].stride;break;case"TEXCOORD":wt(He,_[Hn],_t.offset,se.array),se.stride=_[Hn].stride;break;case"TEXCOORD1":wt(He,_[Hn],_t.offset,Ie.array),se.stride=_[Hn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Bi)}}break;case"NORMAL":wt(He,_[_t.id],_t.offset,K.array),K.stride=_[_t.id].stride;break;case"COLOR":wt(He,_[_t.id],_t.offset,xe.array,!0),xe.stride=_[_t.id].stride;break;case"TEXCOORD":wt(He,_[_t.id],_t.offset,se.array),se.stride=_[_t.id].stride;break;case"TEXCOORD1":wt(He,_[_t.id],_t.offset,Ie.array),Ie.stride=_[_t.id].stride;break}}}return C.array.length>0&&ue.setAttribute("position",new Dt(C.array,C.stride)),K.array.length>0&&ue.setAttribute("normal",new Dt(K.array,K.stride)),xe.array.length>0&&ue.setAttribute("color",new Dt(xe.array,xe.stride)),se.array.length>0&&ue.setAttribute("uv",new Dt(se.array,se.stride)),Ie.array.length>0&&ue.setAttribute("uv1",new Dt(Ie.array,Ie.stride)),Ee.array.length>0&&ue.setAttribute("skinIndex",new Dt(Ee.array,Ee.stride)),Fe.array.length>0&&ue.setAttribute("skinWeight",new Dt(Fe.array,Fe.stride)),S.data=ue,S.type=x[0].type,S.materialKeys=ke,S}function wt(x,_,T,S,C=!1){let K=x.p,se=x.stride,Ie=x.vcount;function xe(ue){let ke=K[ue+T]*Fe,Ue=ke+Fe;for(;ke<Ue;ke++)S.push(Ee[ke]);if(C){let $e=S.length-Fe-1;Fo.setRGB(S[$e+0],S[$e+1],S[$e+2]).convertSRGBToLinear(),S[$e+0]=Fo.r,S[$e+1]=Fo.g,S[$e+2]=Fo.b}}let Ee=_.array,Fe=_.stride;if(x.vcount!==void 0){let ue=0;for(let ke=0,Ue=Ie.length;ke<Ue;ke++){let $e=Ie[ke];if($e===4){let He=ue+se*0,Xt=ue+se*1,Tt=ue+se*2,vt=ue+se*3;xe(He),xe(Xt),xe(vt),xe(Xt),xe(Tt),xe(vt)}else if($e===3){let He=ue+se*0,Xt=ue+se*1,Tt=ue+se*2;xe(He),xe(Xt),xe(Tt)}else if($e>4)for(let He=1,Xt=$e-2;He<=Xt;He++){let Tt=ue+se*0,vt=ue+se*He,_t=ue+se*(He+1);xe(Tt),xe(vt),xe(_t)}ue+=se*$e}}else for(let ue=0,ke=K.length;ue<ke;ue+=se)xe(ue)}function ln(x){return v(Je.geometries[x],Et)}function Ct(x){let _={name:x.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"technique_common":Uo(S,_);break}}Je.kinematicsModels[x.getAttribute("id")]=_}function pn(x){return x.build!==void 0?x.build:x}function Qn(x){return v(Je.kinematicsModels[x],pn)}function Uo(x,_){for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"joint":_.joints[S.getAttribute("sid")]=th(S);break;case"link":_.links.push(Ta(S));break}}}function th(x){let _;for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"prismatic":case"revolute":_=vr(S);break}}return _}function vr(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"axis":let C=r(S.textContent);_.axis.fromArray(C);break;case"limits":let K=S.getElementsByTagName("max")[0],se=S.getElementsByTagName("min")[0];_.limits.max=parseFloat(K.textContent),_.limits.min=parseFloat(se.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Ta(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"attachment_full":_.attachments.push(_r(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Aa(S));break}}return _}function _r(x){let _={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"link":_.links.push(Ta(S));break;case"matrix":case"translate":case"rotate":_.transforms.push(Aa(S));break}}return _}function Aa(x){let _={type:x.nodeName},T=r(x.textContent);switch(_.type){case"matrix":_.obj=new ct,_.obj.fromArray(T).transpose();break;case"translate":_.obj=new U,_.obj.fromArray(T);break;case"rotate":_.obj=new U,_.obj.fromArray(T),_.angle=Cs.degToRad(T[3]);break}return _}function Oo(x){let _={name:x.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"rigid_body":_.rigidBodies[S.getAttribute("name")]={},nh(S,_.rigidBodies[S.getAttribute("name")]);break}}Je.physicsModels[x.getAttribute("id")]=_}function nh(x,_){for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"technique_common":ih(S,_);break}}}function ih(x,_){for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"inertia":_.inertia=r(S.textContent);break;case"mass":_.mass=r(S.textContent)[0];break}}}function sh(x){let _={bindJointAxis:[]};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"bind_joint_axis":_.bindJointAxis.push(L(S));break}}Je.kinematicsScenes[o(x.getAttribute("url"))]=_}function L(x){let _={target:x.getAttribute("target").split("/").pop()};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType===1)switch(S.nodeName){case"axis":let C=S.getElementsByTagName("param")[0];_.axis=C.textContent;let K=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=K.substring(0,K.length-1);break}}return _}function $(x){return x.build!==void 0?x.build:x}function J(x){return v(Je.kinematicsScenes[x],$)}function ee(){let x=Object.keys(Je.kinematicsModels)[0],_=Object.keys(Je.kinematicsScenes)[0],T=Object.keys(Je.visualScenes)[0];if(x===void 0||_===void 0)return;let S=Qn(x),C=J(_),K=Ra(T),se=C.bindJointAxis,Ie={};for(let Fe=0,ue=se.length;Fe<ue;Fe++){let ke=se[Fe],Ue=qt.querySelector('[sid="'+ke.target+'"]');if(Ue){let $e=Ue.parentElement;xe(ke.jointIndex,$e)}}function xe(Fe,ue){let ke=ue.getAttribute("name"),Ue=S.joints[Fe];K.traverse(function($e){$e.name===ke&&(Ie[Fe]={object:$e,transforms:Y(ue),joint:Ue,position:Ue.zeroPosition})})}let Ee=new ct;qd={joints:S&&S.joints,getJointValue:function(Fe){let ue=Ie[Fe];if(ue)return ue.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,ue){let ke=Ie[Fe];if(ke){let Ue=ke.joint;if(ue>Ue.limits.max||ue<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+ue+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{let $e=ke.object,He=Ue.axis,Xt=ke.transforms;Re.identity();for(let Tt=0;Tt<Xt.length;Tt++){let vt=Xt[Tt];if(vt.sid&&vt.sid.indexOf(Fe)!==-1)switch(Ue.type){case"revolute":Re.multiply(Ee.makeRotationAxis(He,Cs.degToRad(ue)));break;case"prismatic":Re.multiply(Ee.makeTranslation(He.x*ue,He.y*ue,He.z*ue));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(vt.type){case"matrix":Re.multiply(vt.obj);break;case"translate":Re.multiply(Ee.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Re.scale(vt.obj);break;case"rotate":Re.multiply(Ee.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(Re),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Ie[Fe].position=ue}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Y(x){let _=[],T=qt.querySelector('[id="'+x.id+'"]');for(let S=0;S<T.childNodes.length;S++){let C=T.childNodes[S];if(C.nodeType!==1)continue;let K,se;switch(C.nodeName){case"matrix":K=r(C.textContent);let Ie=new ct().fromArray(K).transpose();_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:Ie});break;case"translate":case"scale":K=r(C.textContent),se=new U().fromArray(K),_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se});break;case"rotate":K=r(C.textContent),se=new U().fromArray(K);let xe=Cs.degToRad(K[3]);_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se,angle:xe});break}}return _}function Ce(x){let _=x.getElementsByTagName("node");for(let T=0;T<_.length;T++){let S=_[T];S.hasAttribute("id")===!1&&S.setAttribute("id",l())}}let Re=new ct,ze=new U;function Ze(x){let _={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new ct,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];if(S.nodeType!==1)continue;let C;switch(S.nodeName){case"node":_.nodes.push(S.getAttribute("id")),Ze(S);break;case"instance_camera":_.instanceCameras.push(o(S.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(ot(S));break;case"instance_light":_.instanceLights.push(o(S.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(ot(S));break;case"instance_node":_.instanceNodes.push(o(S.getAttribute("url")));break;case"matrix":C=r(S.textContent),_.matrix.multiply(Re.fromArray(C).transpose()),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"translate":C=r(S.textContent),ze.fromArray(C),_.matrix.multiply(Re.makeTranslation(ze.x,ze.y,ze.z)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"rotate":C=r(S.textContent);let K=Cs.degToRad(C[3]);_.matrix.multiply(Re.makeRotationAxis(ze.fromArray(C),K)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"scale":C=r(S.textContent),_.matrix.scale(ze.fromArray(C)),_.transforms[S.getAttribute("sid")]=S.nodeName;break;case"extra":break;default:console.log(S)}}return Nt(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):Je.nodes[_.id]=_,_}function ot(x){let _={id:o(x.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<x.childNodes.length;T++){let S=x.childNodes[T];switch(S.nodeName){case"bind_material":let C=S.getElementsByTagName("instance_material");for(let K=0;K<C.length;K++){let se=C[K],Ie=se.getAttribute("symbol"),xe=se.getAttribute("target");_.materials[Ie]=o(xe)}break;case"skeleton":_.skeletons.push(o(S.textContent));break;default:break}}return _}function st(x,_){let T=[],S=[],C,K,se;for(C=0;C<x.length;C++){let Ee=x[C],Fe;if(Nt(Ee))Fe=nt(Ee),rt(Fe,_,T);else if(Fi(Ee)){let ke=Je.visualScenes[Ee].children;for(let Ue=0;Ue<ke.length;Ue++){let $e=ke[Ue];if($e.type==="JOINT"){let He=nt($e.id);rt(He,_,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ee)}for(C=0;C<_.length;C++)for(K=0;K<T.length;K++)if(se=T[K],se.bone.name===_[C].name){S[C]=se,se.processed=!0;break}for(C=0;C<T.length;C++)se=T[C],se.processed===!1&&(S.push(se),se.processed=!0);let Ie=[],xe=[];for(C=0;C<S.length;C++)se=S[C],Ie.push(se.bone),xe.push(se.boneInverse);return new kl(Ie,xe)}function rt(x,_,T){x.traverse(function(S){if(S.isBone===!0){let C;for(let K=0;K<_.length;K++){let se=_[K];if(se.name===S.name){C=se.boneInverse;break}}C===void 0&&(C=new ct),T.push({bone:S,boneInverse:C,processed:!1})}})}function $t(x){let _=[],T=x.matrix,S=x.nodes,C=x.type,K=x.instanceCameras,se=x.instanceControllers,Ie=x.instanceLights,xe=x.instanceGeometries,Ee=x.instanceNodes;for(let ue=0,ke=S.length;ue<ke;ue++)_.push(nt(S[ue]));for(let ue=0,ke=K.length;ue<ke;ue++){let Ue=We(K[ue]);Ue!==null&&_.push(Ue.clone())}for(let ue=0,ke=se.length;ue<ke;ue++){let Ue=se[ue],$e=re(Ue.id),He=ln($e.id),Xt=ei(He,Ue.materials),Tt=Ue.skeletons,vt=$e.skin.joints,_t=st(Tt,vt);for(let Bi=0,Hn=Xt.length;Bi<Hn;Bi++){let xr=Xt[Bi];xr.isSkinnedMesh&&(xr.bind(_t,$e.skin.bindMatrix),xr.normalizeSkinWeights()),_.push(xr)}}for(let ue=0,ke=Ie.length;ue<ke;ue++){let Ue=dt(Ie[ue]);Ue!==null&&_.push(Ue.clone())}for(let ue=0,ke=xe.length;ue<ke;ue++){let Ue=xe[ue],$e=ln(Ue.id),He=ei($e,Ue.materials);for(let Xt=0,Tt=He.length;Xt<Tt;Xt++)_.push(He[Xt])}for(let ue=0,ke=Ee.length;ue<ke;ue++)_.push(nt(Ee[ue]).clone());let Fe;if(S.length===0&&_.length===1)Fe=_[0];else{Fe=C==="JOINT"?new Ka:new Rn;for(let ue=0;ue<_.length;ue++)Fe.add(_[ue])}return Fe.name=C==="JOINT"?x.sid:x.name,Fe.matrix.copy(T),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}let Nn=new tn({name:Ci.DEFAULT_MATERIAL_NAME,color:16711935});function Kt(x,_){let T=[];for(let S=0,C=x.length;S<C;S++){let K=_[x[S]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[S]),T.push(Nn)):T.push(je(K))}return T}function ei(x,_){let T=[];for(let S in x){let C=x[S],K=Kt(C.materialKeys,_);if(K.length===0&&(S==="lines"||S==="linestrips"?K.push(new ea):K.push(new eo)),S==="lines"||S==="linestrips")for(let Ee=0,Fe=K.length;Ee<Fe;Ee++){let ue=K[Ee];if(ue.isMeshPhongMaterial===!0||ue.isMeshLambertMaterial===!0){let ke=new ea;ke.color.copy(ue.color),ke.opacity=ue.opacity,ke.transparent=ue.transparent,K[Ee]=ke}}let se=C.data.attributes.skinIndex!==void 0,Ie=K.length===1?K[0]:K,xe;switch(S){case"lines":xe=new Fl(C.data,Ie);break;case"linestrips":xe=new Qa(C.data,Ie);break;case"triangles":case"polylist":se?xe=new Ul(C.data,Ie):xe=new Bt(C.data,Ie);break}T.push(xe)}return T}function Nt(x){return Je.nodes[x]!==void 0}function nt(x){return v(Je.nodes[x],$t)}function Ca(x){let _={name:x.getAttribute("name"),children:[]};Ce(x);let T=i(x,"node");for(let S=0;S<T.length;S++)_.children.push(Ze(T[S]));Je.visualScenes[x.getAttribute("id")]=_}function kt(x){let _=new Rn;_.name=x.name;let T=x.children;for(let S=0;S<T.length;S++){let C=T[S];_.add(nt(C.id))}return _}function Fi(x){return Je.visualScenes[x]!==void 0}function Ra(x){return v(Je.visualScenes[x],kt)}function Ws(x){let _=i(x,"instance_visual_scene")[0];return Ra(o(_.getAttribute("url")))}function La(){let x=Je.clips;if(c(x)===!0){if(c(Je.animations)===!1){let _=[];for(let T in Je.animations){let S=N(T);for(let C=0,K=S.length;C<K;C++)_.push(S[C])}Bo.push(new to("default",-1,_))}}else for(let _ in x)Bo.push(q(_))}function cn(x){let _="",T=[x];for(;T.length;){let S=T.shift();S.nodeType===Node.TEXT_NODE?_+=S.textContent:(_+=`
`,T.push.apply(T,S.childNodes))}return _.trim()}if(e.length===0)return{scene:new nr};let wi=new DOMParser().parseFromString(e,"application/xml"),qt=i(wi,"COLLADA")[0],wn=wi.getElementsByTagName("parsererror")[0];if(wn!==void 0){let x=i(wn,"div")[0],_;return x?_=x.textContent:_=cn(wn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}let Pa=qt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Pa);let ko=h(i(qt,"asset")[0]),Ia=new Wl(this.manager);Ia.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let rh;ro&&(rh=new ro(this.manager),rh.setPath(this.resourcePath||t));let Fo=new lt,Bo=[],qd={},o0=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(qt,"library_animations","animation",m),p(qt,"library_animation_clips","animation_clip",B),p(qt,"library_controllers","controller",W),p(qt,"library_images","image",ae),p(qt,"library_effects","effect",Ve),p(qt,"library_materials","material",Be),p(qt,"library_cameras","camera",ut),p(qt,"library_lights","light",De),p(qt,"library_geometries","geometry",_e),p(qt,"library_nodes","node",Ze),p(qt,"library_visual_scenes","visual_scene",Ca),p(qt,"library_kinematics_models","kinematics_model",Ct),p(qt,"library_physics_models","physics_model",Oo),p(qt,"scene","instance_kinematics_scene",sh),g(Je.animations,b),g(Je.clips,ne),g(Je.controllers,G),g(Je.images,le),g(Je.effects,pe),g(Je.materials,Ne),g(Je.cameras,et),g(Je.lights,Ot),g(Je.geometries,Et),g(Je.visualScenes,kt),La(),ee();let zo=Ws(i(qt,"scene")[0]);return zo.animations=Bo,ko.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),zo.rotation.set(-Math.PI/2,0,0)),zo.scale.multiplyScalar(ko.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Bo},kinematics:qd,library:Je,scene:zo}}};var rm=new gn,rc=new U,ar=class extends Zl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Dt(e,3)),this.setAttribute("uv",new Dt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new rr(t,6,1);return this.setAttribute("instanceStart",new ri(i,3,0)),this.setAttribute("instanceEnd",new ri(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new rr(t,6,1);return this.setAttribute("instanceColorStart",new ri(i,3,0)),this.setAttribute("instanceColorEnd",new ri(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new zl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rm.setFromBufferAttribute(t),this.boundingBox.union(rm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)rc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rc)),rc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};kn.line={uniforms:nc.merge([ve.common,ve.fog,ve.line]),vertexShader:`
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
		`};var ts=class extends gi{constructor(e){super({type:"LineMaterial",uniforms:nc.clone(kn.line.uniforms),vertexShader:kn.line.vertexShader,fragmentShader:kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var am=new U,om=new U,yn=new xt,vn=new xt,Ri=new xt,Ru=new U,Lu=new ct,_n=new Kl,lm=new U,ac=new gn,oc=new si,Li=new xt,Pi,or;function cm(n,e,t){return Li.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=or/t.width,Li.y=or/t.height,Li.applyMatrix4(n.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function P1(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){_n.start.fromBufferAttribute(s,o),_n.end.fromBufferAttribute(r,o),_n.applyMatrix4(t);let c=new U,h=new U;Pi.distanceSqToSegment(_n.start,_n.end,h,c),h.distanceTo(c)<or*.5&&e.push({point:h,pointOnLine:c,distance:Pi.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function I1(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Pi.at(1,Ri),Ri.w=1,Ri.applyMatrix4(e.matrixWorldInverse),Ri.applyMatrix4(i),Ri.multiplyScalar(1/Ri.w),Ri.x*=r.x/2,Ri.y*=r.y/2,Ri.z=0,Ru.copy(Ri),Lu.multiplyMatrices(e.matrixWorldInverse,a);for(let d=0,p=h;d<p;d++){if(yn.fromBufferAttribute(l,d),vn.fromBufferAttribute(c,d),yn.w=1,vn.w=1,yn.applyMatrix4(Lu),vn.applyMatrix4(Lu),yn.z>u&&vn.z>u)continue;if(yn.z>u){let b=yn.z-vn.z,N=(yn.z-u)/b;yn.lerp(vn,N)}else if(vn.z>u){let b=vn.z-yn.z,N=(vn.z-u)/b;vn.lerp(yn,N)}yn.applyMatrix4(i),vn.applyMatrix4(i),yn.multiplyScalar(1/yn.w),vn.multiplyScalar(1/vn.w),yn.x*=r.x/2,yn.y*=r.y/2,vn.x*=r.x/2,vn.y*=r.y/2,_n.start.copy(yn),_n.start.z=0,_n.end.copy(vn),_n.end.z=0;let v=_n.closestPointToPointParameter(Ru,!0);_n.at(v,lm);let m=Cs.lerp(yn.z,vn.z,v),f=m>=-1&&m<=1,E=Ru.distanceTo(lm)<or*.5;if(f&&E){_n.start.fromBufferAttribute(l,d),_n.end.fromBufferAttribute(c,d),_n.start.applyMatrix4(a),_n.end.applyMatrix4(a);let b=new U,N=new U;Pi.distanceSqToSegment(_n.start,_n.end,N,b),t.push({point:N,pointOnLine:b,distance:Pi.origin.distanceTo(N),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var ao=class extends Bt{constructor(e=new ar,t=new ts({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)am.fromBufferAttribute(t,a),om.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+am.distanceTo(om);let r=new rr(s,2,1);return e.setAttribute("instanceDistanceStart",new ri(r,1,0)),e.setAttribute("instanceDistanceEnd",new ri(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Pi=e.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;or=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),oc.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=or*.5;else{let u=Math.max(s.near,oc.distanceToPoint(Pi.origin));c=cm(s,u,l.resolution)}if(oc.radius+=c,Pi.intersectsSphere(oc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ac.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=or*.5;else{let u=Math.max(s.near,ac.distanceToPoint(Pi.origin));h=cm(s,u,l.resolution)}ac.expandByScalar(h),Pi.intersectsBox(ac)!==!1&&(i?P1(this,t):I1(this,s,t))}};var N1="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",oo=null;function D1(){if(oo)return oo;oo=new Map;for(let n of N1.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,a]=i.split(" ");oo.set(t?t+"/"+s:s,[+r,+a])}}return oo}var lr=Math.PI/180;function U1(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*lr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*lr,a=(23.439-36e-8*i)*lr,o=Math.atan2(Math.cos(a)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(a)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*lr+t*lr-o,u=e*lr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/lr}function O1(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=D1().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function hm(n=Date.now(),e=O1()){if(e.lat==null){let r=new Date(n),a=r.getHours()+r.getMinutes()/60,o=a>=7&&a<20,l=new Date(n);return l.setHours(o?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:o,next:+l}}let t=r=>U1(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let a=r-s,o=r;for(;o-a>3e4;){let l=(a+o)/2;t(l)===i?a=l:o=l}return{day:i,next:Math.ceil(o)}}return{day:i,next:n+24*36e5}}var oi=["en","fr","ca","es"];var k1={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function gm(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of k1[e]||oi)if(n[t])return n[t];return""}var co={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type a bullshit title",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",params:"Settings",hv_source:"Source",hv_cell:"Squares",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Tape un titre bidon",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Carr\xE9s",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Escriu un t\xEDtol inventat",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Quadrats",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Escribe un t\xEDtulo inventado",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadrados",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web"}},F1={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},ho={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function um(){return Object.fromEntries(oi.map(n=>[n,""]))}function cr(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:oi.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||um(),e.sub=e.sub||um(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[];let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(oi.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(oi.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=F1[s.layout]?s.layout:"carousel",s.card=ho[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(oi.map(a=>[a,s[r]||""]))),oi.forEach(a=>{s[r][a]==null&&(s[r][a]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(oi.map(a=>[a,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(Iu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function Pu(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function ym(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function uo(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function Te(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var B1=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function aa(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let a=e.createElement("p");for(;r.firstChild;)a.appendChild(r.firstChild);r.replaceWith(a);return}if(!B1.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(a=>{r.tagName==="A"&&a.name==="href"||r.removeAttribute(a.name)}),r.tagName==="A"){let a=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(a)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function ns(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Iu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Rs(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function Nu(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function dm(n){try{let e=await Nu();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function fm(n,e){let t=await Nu();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function pm(n){try{let e=await Nu();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var lc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return cr(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return cr(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var cc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await dm("demo:content:v6");if(e)return cr(e);if(window.HC_CONTENT)return cr(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return cr(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await pm("demo:file:"+i.path);continue}await fm("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await fm("demo:content:v6",e),"demo"}async reset(){await pm("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await dm("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},mm=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],lo=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],z1=["font","size","lh","weight","italic","ls","upper"],vm=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function H1(n){let e=mm.find(i=>i.id===n);if(e)return e.css;let t=vm(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:mm[0].css}function li(n,e){let t=lo.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...z1,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=H1(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function _m(n){let e=[],t=[],i=[],s=[];for(let r of lo){if(r.vars||!r.sel)continue;let a=li(n,r.id),o=r.id;s.push(`--f-${o}: ${a.css}`,`--w-${o}: ${a.weight||400}`,`--st-${o}: ${a.italic?"italic":"normal"}`,`--tt-${o}: ${a.upper?"uppercase":"none"}`,`--ls-${o}: ${a.ls||0}em`),a.size&&s.push(`--s-${o}: ${a.size}px`,`--lh-${o}: ${a.lh?a.lh:+(a.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of lo){let a=n&&n.typo&&n.typo[r.id]||{},o=li(n,r.id),l=h=>a[h]!==void 0&&a[h]!==""&&a[h]!==null&&a[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${o.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${o.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(o.size*r.clamp[0])}px, ${(o.size/r.clamp[1]*100).toFixed(2)}vw, ${o.size}px)`:`font-size: ${o.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?o.lh:+(r.lh*o.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${o.weight}`),l("italic")&&c.push(`font-style: ${o.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${o.ls}em`),l("upper")&&c.push(`text-transform: ${o.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?o.lh:r.lh*o.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(o.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function xm(n){let e=new Map;for(let t of lo){let i=li(n,t.id),s=vm(i.font);if(!s)continue;new Set([+(i.weight||400),400,700]).forEach(a=>e.set(`${s}|${i.italic?1:0}|${a}`,[s,i.italic?1:0,a]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Du(n){let e=new Set;for(let t of lo){let i=li(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function bm(n,e,t=!1){let i=li(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let a=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let o=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=o(l);let c=r.measureText(a).width;c>172&&(l=Math.floor(l*172/c),r.font=o(l));let h=r.measureText(a),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(a,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var Mm=window.HC_BASE||"",yc=window.HC_MODE==="demo"?new cc(Mm):new lc(Mm),Ns=window.HC_ASSETS||null,V1=location.protocol==="file:",sg=20261102;window.HC_SITE_VERSION=sg;var Ut=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,Mt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return Ut&&Ut.files&&Ut.files[e]?Ut.files[e]:Ns&&Ns[e]&&Ns[e].startsWith("data:")?Ns[e]:yc.url(e)};async function G1(n){if(Ns&&Ns[n]&&!Ns[n].startsWith("data:"))return Ns[n];let e=await fetch(Mt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var be=null,vi="en",ce=n=>gm(n,vi),Ae=n=>(co[vi]||co.en)[n],W1=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Fs={zoom:2,focus:300},$1=.08,Sm={};function rg(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=Sm[t]}):(e.forEach(t=>{Sm[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Ju=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=Pu(be,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(oi.map(s=>[s,(co[s]||co.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?ce(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Pt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Ju(this.section.def)}},Pt=[],yt={x:0,y:0,z:0,zoom:Fs.zoom},Pn={x:0,y:0,z:0},as=0,_i=[],q1={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function sn(n,e,t,i={}){for(let r of _i)if(r.obj===n)for(let a in t)delete r.props[a];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:as+(i.delay||0),ease:q1[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return _i.push(s),s}var bo=(n,e)=>sn({},n,{},{onComplete:e,ease:"linear"});function xn(n){for(let e=_i.length-1;e>=0;e--)_i[e].obj===n&&_i.splice(e,1)}function ya(n){return _i.some(e=>e.obj===n&&as>=e.start)}function ag(n,e){if(!e&&as<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(as-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],a=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(a-r)):r+(a-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function X1(){for(let n of _i.slice())if(ag(n,!1)){let e=_i.indexOf(n);e>=0&&_i.splice(e,1),n.onComplete&&n.onComplete()}}function og(){_i.splice(0).forEach(n=>ag(n,!0))}function Y1(n,e,t,i,s,r,a){xn(yt),sn(yt,a,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),xd(i,s,r,a)}function xd(n,e,t,i){xn(Pn),sn(Pn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function j1(n,e,t,i){xn(yt),sn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Sc=1,bn=n=>n<=1?1:1-Math.pow(1-1/n,Sc),Ni=Math.PI/180,Ku=(n,e,t)=>new U(n,e,-t),Ls=(n,e,t)=>[-n,e,t],dn=document.getElementById("stage"),Hs=new Za({canvas:dn,antialias:!0});Hs.debug.checkShaderErrors=!1;Hs.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Hs.setClearColor(16777215,1);var os=new nr;os.add(new $l(16777215,14211288,2.2));var lg=new sa(16777215,1.2);lg.position.set(300,800,500);os.add(lg);var Bn=new en(60,1,1,6e4),cg=new ts({color:oe.lineColor,linewidth:oe.lineThickness}),Qu=new ts({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),hg=new ts({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),vc=new ts({color:oe.locatorColor,linewidth:1.3}),ug=[cg,Qu,hg,vc],dg=new no;dg.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:Mt(n));var Uu=new Map;function Oi(n){return n?V1&&!/^(data:|blob:|https?:)/.test(Mt(n))?Promise.reject(new Error("local")):(Uu.has(n)||Uu.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(Mt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=Mt(n)})),Uu.get(n)):Promise.reject(new Error("no image"))}function bd(n){return n.colorSpace=Yt,n.anisotropy=Math.min(8,Hs.capabilities.getMaxAnisotropy()),n}var Z1=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=bd(new ta(n)),t=new Ki(1,1),i=new nr;return[Vn,un,Fn].forEach(s=>i.add(new Bt(t,new tn({map:e,side:s})))),i.add(new Bt(t,new tn({color:1118481}))),i.add(new Ja(new Qr({map:e,transparent:!0}))),i})(),Ht=0,Wt=0,Yn=!1,wc=()=>Yn,fr=0,wm=0,Mo=()=>be.settings.negative==="auto";function Uc(){if(!Mo())return fr=0,!!be.settings.negative;let n=hm();return fr=n.next,!n.day}function Md(){if(Ut||be.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!Mo()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function fg(n){n!==Yn&&(Yn=n,Xc(),Pe&&Pe.retexture())}function Sd(){if(clearTimeout(wm),!Mo())return;wm=setTimeout(()=>{if(Date.now()>=fr-1e3){let e=Uc(),t=Md();fg(t??e)}Sd()},Math.min(Math.max(fr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&fr&&Date.now()>=fr){let n=Uc(),e=Md();fg(e??n),Sd()}});var pg=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},Kn=()=>{let n=be.settings.accent||"#ffcc00";return wc()?pg(n):n},Oc='Georgia, Gelasio, "Times New Roman", serif',nn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',mg=400,gg=Oc,yg=!1,vg=1,hi=n=>`${mg} ${n}px ${Oc}`,Di=n=>`${yg?"italic ":""}400 ${Math.round(n*vg*10)/10}px ${gg}`,wd=1,qe=n=>Math.round(n*wd),J1=700,kc=()=>{let n=Ht||window.innerWidth,e=Wt||window.innerHeight;return n<J1||Math.min(n,e)<500},ls=kc;function ds(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...be?Du(be.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var Em=0,_g=[];function K1(){Vt&&(Pg(),Lg()),clearTimeout(Em),Em=setTimeout(async()=>{try{await Promise.all(Du(be.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}be.settings.logo||ad(),Pe&&!Pe.loading&&Pe.retexture()},150)}function xg(){let n=be.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=_m(n);e.textContent!==t&&(e.textContent=t);let i=xm(n);document.querySelectorAll("link[data-hc-font]").forEach(a=>{i.includes(a.href)||a.remove()}),i.forEach(a=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(a)}"]`)){let o=document.createElement("link");o.rel="stylesheet",o.href=a,o.dataset.hcFont="",_g.push(new Promise(l=>{o.onload=()=>{l(),K1()},o.onerror=l})),document.head.appendChild(o)}});let s=li(n,"card"),r=li(n,"subtitle");mg=s.weight||400,gg=r.css,yg=!!r.italic,vg=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,Oc=s.css,nn=li(n,"cardsm").css,wd=Math.max(.5,Math.min(2,(+li(n,"card").scale||100)/100))}function zt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let a of i){let o=r?r+" "+a:a;n.measureText(o).width>t&&r?(s.push(r),r=a):r=o}return r&&s.push(r),s}function Zt(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),bd(new ta(s))}function xi(n,e,t,i,s,r){let a=Math.max(s/e.naturalWidth,r/e.naturalHeight),o=s/a,l=r/a;n.drawImage(e,(e.naturalWidth-o)/2,(e.naturalHeight-l)/2,o,l,t,i,s,r),wc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var So=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function Ed(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function va(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Ro=n=>Pt.some(e=>e.def.id===n.section),Q1=(n,e)=>Pt.findIndex(t=>t.def.id===n.section)-Pt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),Ec=n=>be.posts.filter(e=>e.published&&e!==n&&Ro(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(Q1),wo=n=>{let e=uo(be,n).filter(Ro);return e.length?e:Ec(n)},_c=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.tags||[]).includes("partners"),bg=n=>ym(be,n).filter(Ro),pr=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&xa(e.src)==="image")||{}).src||"",Tm=new Map,ed=n=>Ec(n).filter(pr);async function Fc(n,e=wo(n)){let t=e.filter(pr);if(!t.length)return null;let i=t.find(r=>r.id===Tm.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,a)=>r[0]-a[0]).map(r=>r[1]);for(let r of s){let a=await Oi(pr(r)).catch(()=>null);if(a)return Tm.set(n.id,r.id),{im:a,project:r}}return null}function Bc(n,e,t,i,s){xi(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function Mg(n,e){let t=ce(n.title).trim(),i=ce(n.subtitle).trim();if(!t&&!i)return null;let s=ls(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),a=s?17:Math.max(7.5,r*.74),o=Math.round(r*(s?.6:.75)),l=e-2*o,c=document.createElement("canvas").getContext("2d");c.font=hi(r);let h=t?zt(c,t,l).slice(0,2):[];c.font=Di(a);let u=i?zt(c,i,l).slice(0,2):[],d=Math.round(r*1.2),p=Math.round(a*1.25),g=Math.ceil(o+h.length*d+(u.length?3+u.length*p:0)+o-2);return{tex:Zt(e,g,m=>{m.fillStyle="rgba(0,0,0,.62)",m.fillRect(0,0,e,g),m.textBaseline="top";let f=o;m.fillStyle="#fff",m.font=hi(r),h.forEach(E=>{m.fillText(E,o,f),f+=d}),f+=3,m.font=Di(a),u.forEach(E=>{m.fillText(E,o,f),f+=p})},3),bh:g,w:e}}async function eM(n,e,t){let i=n.thumb?await Oi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Oi(n.thumbBack).catch(()=>null):null,r=i?null:await Fc(n);await ds();let a=(c,h=!1)=>{if(i){xi(c,i,0,0,e,t);return}r?Bc(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ls(),d=u?14:16,p=u?[qe(31),qe(34),2]:[qe(24),28,3],g=u?[qe(20),qe(23),1]:[qe(13),16,2],v=u?qe(15):10,m=u?qe(13):9,f=u?26:20;c.fillStyle=Kn(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=hi(p[0]);let E=zt(c,ce(n.title),e-2*d).slice(0,p[2]),b=u?22:30;E.forEach((P,R)=>c.fillText(P,d,b+R*p[1])),c.font=Di(g[0]),zt(c,ce(n.subtitle),e-2*d).slice(0,u&&E.length<2?2:g[2]).forEach((P,R)=>c.fillText(P,d,b+8+E.length*p[1]+R*g[1]));let N=r?Om(r.project,r.project.media[0]&&r.project.media[0].credit):Om(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${nn}`,c.fillText([n.date,ce(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(N?f+v+6:v+12)),N){c.font=`${m}px ${nn}`;let P=N;for(;c.measureText(P).width>e-2*d&&P.length>4;)P=P.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(P,d,t-f/2)}c.globalAlpha=1},o=Zt(e,t,a,2),l=s?Zt(e,t,c=>xi(c,s,0,0,e,t),2):r?Zt(e,t,va(e,c=>a(c,!0)),2):Zt(e,t,Ed(a),1.5);return[o,l,i?Mg(n,e):null]}async function tM(n,e,t){let i=n.thumb?await Oi(n.thumb).catch(()=>null):null,s=n.thumbBack?await Oi(n.thumbBack).catch(()=>null):null,r=i||_c(n)?null:await Fc(n,ed(n));await ds();let a=(l,c=!1)=>{if(_c(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ls()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${nn}`;let v=zt(l,ce(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),wc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),wc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){xi(l,i,0,0,e,t);return}r?Bc(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Di(Math.round(t*.42*wd)),l.textAlign="center",l.textBaseline="middle",l.fillText(So(ce(n.title)),e/2,t*.45),l.fillStyle=Kn(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},o=s?Zt(e,t,l=>xi(l,s,0,0,e,t),3):r?Zt(e,t,va(e,l=>a(l,!0)),2):Zt(e,t,Ed(a),2);return[Zt(e,t,a,3),o,i||r||_c(n)?Mg(n,e):null]}async function nM(n,e,t){let i=n.thumb?await Oi(n.thumb).catch(()=>null):null;await ds();let s=Math.round(t*.68),r=s+14,a=e-r-14,o=l=>{l.fillStyle="#111",l.fillRect(0,0,e,t),i&&xi(l,i,0,0,s,t),l.textBaseline="top",l.fillStyle="#fff";let c=12;l.font=hi(qe(15)),zt(l,ce(n.title).trim(),a).slice(0,2).forEach(v=>{l.fillText(v,r,c),c+=qe(16)});let h=ce(n.subtitle).trim();h&&(c+=1,l.font=Di(qe(9.5)),zt(l,h,a).slice(0,3).forEach(v=>{l.fillText(v,r,c),c+=qe(11)})),c+=5,l.fillStyle="rgba(255,255,255,.4)",l.fillRect(r,c,a,.6),c+=6,l.fillStyle="#fff";let u=ns(ce(n.body)).join(" ").replace(/\s+/g," ").trim(),d=qe(9.6),p=Math.max(1,Math.floor((t-10-c)/d));l.font=`${qe(7.6)}px ${nn}`;let g=zt(l,u,a);if(g.length>p){g=g.slice(0,p);let v=g[p-1];for(;v&&l.measureText(v+"\u2026").width>a;)v=v.replace(/\s*\S+$/,"");g[p-1]=v+"\u2026"}g.forEach(v=>{l.fillText(v,r,c),c+=d})};return[Zt(e,t,o,4),Zt(e,t,Ed(o),2)]}async function iM(n,e,t){let i=await Fc(n);if(i)return sM(n,e,t,i);let s=n.thumb?await Oi(n.thumb).catch(()=>null):null;await ds();let r=ce(n.title).trim(),a=ls(),o=qe(a?30:21),l=a?qe(32):22,c=a?2:3,h=s?72:18,u=e-h-14,d=Zt(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?xi(g,s,13,12.75,53,53):(g.fillStyle=Kn(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=hi(o),g.textBaseline="top",zt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=Zt(e,t,va(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=hi(o),g.textBaseline="top",zt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function sM(n,e,t,i){await ds();let s=ce(n.title).trim(),r=e-32,a=ls(),o=qe(a?30:21),l=a?qe(32):22,c=h=>u=>{Bc(u,i,e,t,h?.2:a?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=Kn(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=hi(o),u.textBaseline="top",zt(u,s,r).slice(0,a?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[Zt(e,t,c(!1),2),Zt(e,t,va(e,c(!0)),2)]}async function rM(n,e,t){let i=n.thumb?await Oi(n.thumb).catch(()=>null):null;await ds();let r=Zt(e,t,a=>{if(i){a.fillStyle="#fff",a.fillRect(0,0,e,t),xi(a,i,0,0,e,t);return}a.fillStyle="#fff",a.fillRect(0,0,e,t),a.fillStyle="#111",a.beginPath(),a.arc(e/2,t/2-8,34,0,Math.PI*2),a.fill(),a.fillStyle=Kn(),a.beginPath(),a.arc(e/2,t/2-8,9,0,Math.PI*2),a.fill(),a.fillStyle="#333",a.font=`${qe(12)}px ${Oc}`,a.textAlign="center",a.textBaseline="top",a.fillText(ce(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var aM={image:eM,portrait:tM,text:iM,place:rM};async function oM(n,e,t){let i=n.thumb?await Oi(n.thumb).catch(()=>null):null,s=i?{im:i}:await Fc(n);await ds();let r=ce(n.title).trim(),a=(ce(n.subtitle).trim()||ns(ce(n.body)).join(" ")).replace(/\s+/g," ").trim(),o=t<110,l=ls(),c=s&&!l?Math.round(o?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?o?[28,31,0,1]:[36,40,0,1]:o?[15,18,9.5,12]:[17,20,10.5,13.5],m=(P,R)=>{P.globalAlpha=R,P.textBaseline="top";let D=e-h-12;P.fillStyle=Kn(),P.fillRect(h,o?9:13,14,2),P.fillStyle="#fff",P.font=hi(qe(d));let z=o?16:22;zt(P,r,D).slice(0,l?3:2).forEach(w=>{P.fillText(w,h,z),z+=qe(p)}),P.globalAlpha=1},f=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(xi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.18)",P.fillRect(0,0,e,t)),m(P,.38)},E=P=>{let R=P.createLinearGradient(0,0,0,t);R.addColorStop(0,"rgba(0,0,0,.7)"),R.addColorStop(1,"rgba(0,0,0,.3)"),P.fillStyle=R,P.fillRect(0,0,e,t),m(P,1)},b=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(xi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.22)",P.fillRect(0,0,e,t));let R=P.createLinearGradient(0,t*.3,0,t);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(1,"rgba(0,0,0,.82)"),P.fillStyle=R,P.fillRect(0,t*.3,e,t*.7);let D=Math.round(e*.07),z=e-2*D,w=wo(n).length;P.textBaseline="top",P.fillStyle="#fff",w&&(P.font=`600 ${qe(11)}px ${nn}`,P.fillText(`${w} ${Ae("nProjects")}`.toUpperCase(),D,D));let M=ce(n.subtitle).trim();P.font=`${qe(11.5)}px ${nn}`;let F=M?zt(P,M,z).slice(0,2):[],ie=t-D-F.length*qe(14);F.forEach((k,V)=>P.fillText(k,D,ie+V*qe(14))),P.font=Di(qe(26));let de=zt(P,r,z).slice(0,2);ie-=(F.length?qe(6):0)+de.length*qe(25),de.forEach((k,V)=>P.fillText(k,D,ie+V*qe(25)))};return[Zt(e,t,(P=>R=>{if(l&&!P){b(R);return}R.fillStyle="#111",R.fillRect(0,0,e,t),s&&l&&!P&&Bc(R,s,e,t,.6),s&&!l&&xi(R,s.im,e-c,0,c,t),R.textBaseline="top",R.fillStyle=Kn(),R.fillRect(h,o?9:13,14,2),R.fillStyle="#fff",R.font=hi(qe(d));let D=zt(R,r,u).slice(0,l?3:2),z=o?16:22;D.forEach(F=>{R.fillText(F,h,z),z+=qe(p)}),z+=o?2:5,R.font=Di(qe(g));let w=l?0:Math.max(0,Math.floor((t-z-8)/qe(v))),M=zt(R,a,u);if(M.length>w&&(M=M.slice(0,w),w)){let F=M[w-1];for(;F&&R.measureText(F+"\u2026").width>u;)F=F.replace(/\s*\S+$/,"");M[w-1]=F+"\u2026"}M.forEach(F=>{R.fillText(F,h,z),z+=qe(v)}),R.globalAlpha=1})(!1),2),Zt(e,t,va(e,f),2),null,Zt(e,t,va(e,E),2)]}function hc(n,e){return ds().then(()=>e==="place"?Zt(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=hi(qe(44)),t.fillText(ce(n.title)+".",32,18),t.font=Di(qe(18)),zt(t,ce(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.font=`14px ${nn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",ns(ce(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.font=`600 15px ${nn}`,t.fillText(ce(n.place),32,260)},1.5):ls()?Zt(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=hi(qe(25));let i=zt(t,ce(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*qe(27))),t.font=`${qe(13)}px ${nn}`;let s=Ec(n).map(d=>ce(d.title).trim()).filter(Boolean),r=s.length?zt(t,s.join("  \xB7  "),172).slice(0,2):[],a=ce(n.place)?168:188,o=a-r.length*16-16,l=18+i.length*qe(27);t.font=Di(qe(17));let c=(r.length?o-6:a)-qe(20),h=zt(t,ce(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=qe(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*qe(27)+p*qe(20))),r.length&&(t.font=`600 ${qe(11)}px ${nn}`,t.fillText(Ae("together").toUpperCase(),14,o),t.font=`${qe(13)}px ${nn}`,r.forEach((d,p)=>t.fillText(d,14,o+16+p*16))),ce(n.place)&&(t.font=`600 ${qe(13)}px ${nn}`,t.fillText(ce(n.place).toUpperCase(),14,176))},2.5):Zt(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=hi(qe(20));let i=zt(t,ce(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${nn}`;let r=Ec(n).map(u=>ce(u.title).trim()).filter(Boolean),a=r.length?zt(t,r.join("  \xB7  "),166).slice(0,3):[],o=(ce(n.place)?174:188)-a.length*13-13;t.font=Di(qe(15));let l=(a.length?o-4:168)-18,c=[];ce(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>zt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${nn}`,ns(ce(n.body)).join(" ").split(/\s+/).length>1&&zt(t,ns(ce(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((a.length?o-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),a.length&&(t.font=`600 8px ${nn}`,t.fillText(Ae("together").toUpperCase(),19,o),t.font=`10px ${nn}`,a.forEach((u,d)=>t.fillText(u,19,o+13+d*13))),ce(n.place)&&(t.font=`600 11px ${nn}`,t.fillText(ce(n.place).toUpperCase(),19,180))}))}function lM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${nn}`;let a=Math.ceil(r.measureText(n).width)+2*7,o=30;s.width=a*2,s.height=o*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,a,o),r.font=`${e?"bold ":""}20px ${nn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,o/2+1);let l=new Ja(new Qr({map:bd(new ta(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*a/o,c,1),l.renderOrder=2,l}var Ii=document.createElement("div");Ii.id="net-tip";Ii.className="ui";Ii.hidden=!0;document.body.appendChild(Ii);function Sg(n,e,t){Ii.innerHTML=`<b>${Te(n.city||"")}</b>${n.titles.map(s=>`<span>${Te(s)}</span>`).join("")}`,Ii.hidden=!1;let i=Ii.getBoundingClientRect();Ii.style.left=Math.min(e+14,Ht-i.width-10)+"px",Ii.style.top=Math.max(10,t-i.height-12)+"px"}function zc(){Ii.hidden=!0}var td=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Rn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=be.models.find(h=>h.id===this.def.model)||be.models[0];if(!t)return;let i=await G1(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),a=e.parse(i,s).scene,o=new Rn;o.add(a),a.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new tn({map:p}):t.untextured==="white"?new ir({color:15921906}):t.untextured==="black"?new ir({color:2236962}):new tn({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){o.updateMatrixWorld(!0);let h=new gn().setFromObject(o),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;o.scale.setScalar(d),o.updateMatrixWorld(!0);let p=new gn().setFromObject(o),g=p.getCenter(new U);o.position.set(-g.x,-p.min.y,-g.z)}else{a.scale.setScalar(100),o.updateMatrixWorld(!0);let h=new gn().setFromObject(o);h.max.y-h.min.y>oe.object3DMaxHeight&&o.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),o.scale.multiplyScalar(l)}let c=new Rn;c.rotation.y=(t.rotationY||0)*Ni,c.add(o),this.container.add(c)}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Ku(this.p.x,0,this.p.z))}};function wg(n,e){let t=new ar;t.setPositions(n);let i=new ao(t,e);return i.computeLineDistances(),i}var nd=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Rn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new Ki(this.width,this.height);if(this.setBand(i),s){let h=new Bt(r,new tn({map:s,side:un,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let a=new Bt(r,new tn({map:e,side:Vn})),o=new Bt(r,new tn({map:t,side:un}));a.userData={post:this,face:"front"},o.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=wg([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Qu),this.group.add(a,o,this.frame),this.meshes.push(a,o),this.ready=!0}setPosition(e,t,i,s,r=0,a=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:a})}apply(){let e=this.thumb,t=this.group;t.position.set(...Ls(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ni,t.rotation.x=-e.rotX*Ni,t.rotation.z=e.rotZ*Ni,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&sn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=hg,bo(.8,()=>{this.frame&&(this.frame.material=Qu)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),sn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){xn(this.thumb);let i=cs(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,a=r.x-s.x,o=r.z-s.z,l=Math.hypot(a,o)||1;return sn(this.thumb,t,{x:s.x+a*e/l,y:r.y,z:s.z+o*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:a/l,z:o/l}}}moveBack(e=0){xn(this.thumb);let t=this.p2;sn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){sn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>sn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),xn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Bt(new Ki(t,s),new tn({map:e.tex,transparent:!0,depthWrite:!1,side:Vn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&sn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,a=r+t*e.bh;i.setY(0,a),i.setY(1,a),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),xn(this.thumb),this.bhi&&xn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!ug.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Ou(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ni;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function ku(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var Fu=(n,e,t,i,s="y")=>n.postViews.forEach((r,a)=>{if(!r.ready||ya(r.thumb))return;let o=r.thumb,l=Math.pow(-1,a)*e*(Math.random()*2+1);o[s]-=(o[s]-r.p2[s]+l)*bn(2*i),s==="y"&&(o.rotX-=(o.rotX-r.p2.rotX-t)*bn(2*i))}),Tc={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ni+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Ou(n,e),move:(n,e,t,i)=>Fu(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>ku(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>Fu(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,a=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},o=t,l;t+1>s?(o=2*Math.round(i/2)-t-1,l=Math.pow(-1,o)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(a(o)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(a(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(a(o)),y:u*Math.sin(a(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Ou(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*bn(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*bn(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Rs(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=Hc(n.def);return{x:i[0]+s[0],y:(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>ku(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ya(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*bn(2*oe.cameraEaseSpeed);let a=n.infos[i];a&&(a.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ni+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Ou(n,e),move:(n,e,t,i)=>Fu(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,a=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*a+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>ku(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||ya(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*bn(2*oe.cameraEaseSpeed)})}}},cM=["fan","arc","map"],Am=n=>kc()&&cM.includes(n.layout),Td=()=>Fs.zoom*Fs.focus*Math.min(1,Ht/900);function Eg(){let n=r=>{let a=document.getElementById(r);if(!a||a.hidden)return null;let o=a.getBoundingClientRect();return o.width&&o.height?o:null},t={l:12,t:12,r:Ht-12,b:Wt-12},i=["slogan","logo","reel-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Wt>=Ht?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs")].filter(Boolean).forEach(r=>{r.left<Ht/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Ht/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Ht-12),t.b-t.t<120&&(t.t=12,t.b=Wt-12),t}function Cm(n){let e=Eg(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,a=n.h*n.k+oe.planeFrameDistance,o=s?1.5*r+102.5:r,l=s?Math.max(a,130):a,c=Math.round(Math.min(o,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=n.bio&&Ht>Wt?u:1;g<=u;g++){let v=Math.ceil(u/g),m=g*o+(g-1)*c,f=v*l+(v-1)*c,E=Math.min(t/m,i/f);(!h||E>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:E})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*(n.bio?.84:.94),uw:o,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Ht/2,fy:(e.t+e.b)/2-Wt/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var hM=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},Bu=2*Math.PI,Ad=n=>n+(((Math.PI-n)%Bu+Bu+Math.PI)%Bu-Math.PI);function Rm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>hM(e,i),focus(e,t){let i=e.postViews[t];i&&(H.selected=t,H.degreeCamera=Ad(H.degreeCamera),H.cameraY=ba(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===Tc.fan?i.turnAround("x",720):n===Tc.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var Lm=new U,Pm=new U,id=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=Tc[this.def.layout]||Tc.carousel,this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?oM:aM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?ho.text.size:ho.image.size:ho[this.card].size,this.k=yM(this.def),this.bio=this.card==="portrait"&&!this.def.skills&&this.n>0&&this.n<=4&&this.posts.every(t=>t.thumb&&!_c(t)&&ns(ce(t.body)).join(" ").length>80),this.bio&&(this.tex=nM,[this.w,this.h]=[340,150]),this.container=new Rn,this.container.position.copy(e.container.position),os.add(this.container),this.postViews=this.posts.map((t,i)=>new nd(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),(Am(this.def)||this.bio)&&(this.grid=Cm(this),this.L=this.gridL=Rm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Pt.map(f=>f.def.id)),t=new Map,i=(f,E,b)=>{if(!Iu(f))return;let N=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),P=t.get(N);P||t.set(N,P={loc:f,city:f.city||"",titles:[],base:!1}),E&&!P.titles.includes(E)&&P.titles.push(E),b&&(P.base=!0)};if(Pu(be,this.def.id).forEach(f=>i(f.location,ce(f.title),!0)),be.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(E=>i(E,ce(f.title)))}),!t.size)return;vc.color.set(Kn());let s=50,r=new Rn,a=[...t.values()],o=a.filter(f=>f.base),l=new Bl(1,14,10),c={on:new tn({color:Kn()}),base:new tn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:as+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},a.forEach(f=>{f.xz=Rs(f.loc)}),a.forEach(f=>{f.from=f.base?null:o.length?o.map(E=>[E,Math.hypot(Rs(E.loc)[0]-f.xz[0],Rs(E.loc)[1]-f.xz[1])]).sort((E,b)=>E[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Rs(f.from.loc)[0]-f.xz[0],Rs(f.from.loc)[1]-f.xz[1]):0}),a.sort((f,E)=>E.base-f.base||f.d-E.d);let h=70,u=null,d=-1;a.forEach(f=>{let E=a.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);E.length>d&&(d=E.length,u=E)});let p=u.reduce((f,E)=>f+E.xz[0],0)/u.length,g=u.reduce((f,E)=>f+E.xz[1],0)/u.length,v=new jt;v.position.set(...Ls(p,s,g)),r.add(v),this.net.focus=v;let m=[];a.forEach((f,E)=>{let[b,N]=f.xz,P=f.base?0:.15+E*.07,R=new Bt(l,f.base?c.base:c.on);R.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),R.position.set(...Ls(b,s,N)),r.add(R),R.userData={netNode:f},this.net.hits.push(R);let D=null,z=0;if(f.from){let[F,ie]=Rs(f.from.loc),de=s+18+f.d*.32,k=2*de-s,V=(F+b)/2,B=(ie+N)/2;z=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=Q=>{let te=1-Q;return Ls(te*te*F+2*te*Q*V+Q*Q*b,te*te*s+2*te*Q*k+Q*Q*s,te*te*ie+2*te*Q*B+Q*Q*N)},q=[];for(let Q=0;Q<z;Q++)q.push(...ne(Q/z),...ne((Q+1)/z));let W=new ar;W.setPositions(q),D=new ao(W,vc),D.computeLineDistances(),W.instanceCount=0,r.add(D)}let w=null,M=1/0;if(f.city){for(let F of m){let ie=Math.max(Math.abs(F[0]-b)/80,Math.abs(F[1]-N)/22);ie<F[2]&&(M=Math.min(M,ie))}M>.06&&(w=lM(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),w.position.set(...Ls(b,s+9,N)),r.add(w),m.push([b,N,M]))}this.net.items.push({dot:R,arc:D,segs:z,label:w,thr:M,delay:P,base:f.base,ds:R.scale.x,ls:w?w.scale.clone():null,x:b,z:N})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=as+$1;for(;as<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,a,o=()=>{--a<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(a=2,sn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:o}),sn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:o})):(a=1,sn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:o})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Ls(...i),...Ls(...s)],a=this.lines[t];a?a.geometry.setPositions(r):(a=this.lines[t]=wg(r,cg),this.container.add(a))}async openInfo(e,t,i){let s=await hc(this.posts[t],"place");if(!this.alive)return;let r=new Bt(new Ki(165,130),new tn({map:s,side:Fn}));r.userData={post:e,face:"front"},r.visible=!1;let a={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=a,e.meshes.push(r),this.container.add(r),sn(a.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),bo(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Bt(new Ki(90,90),new tn({side:Fn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await hc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),bo(oe.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,xn(i),sn(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(xn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Am(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Cm(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=Rm(this.base)):this.base,r)return!0;let a=oe.tween*1.2,o=H.postOpen&&this.def.open==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===o)return;let u=this.following.has(l);xn(l.thumb),this.following.add(l),sn(l.thumb,a,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(xn(d.p),sn(d.p,a,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=Po(),r=Td(),a=2*e.width+3,o=Math.max(90,r*Math.max(a/(i.aw*.92),e.height/(i.ah*.85))),l=cs()+Fs.focus,c=o/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;xn(e.thumb),sn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-o,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;xn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Ni)%360+360)%360,t=r=>{let a=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(a-e),360-Math.abs(a-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,a)=>{if(!r.ready)return;let o=t(r);o<s-.5&&(s=o,i=a)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/hs),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*bn(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(as-this.net.start-s.delay)/.9)),a=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(a*s.segs));let o=s.base||r>=1;s.dot.visible=o,s.label&&(s.label.visible=o&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Ls(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ni)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Lm.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Pm.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Lm).add(Pm)}}async retexture(){this.net&&(vc.color.set(Kn()),this.net.mats.on.color.set(Kn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(o=>o&&o.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(ha===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(o=>o&&o.dispose()),i.bhi&&s[3]){let o=e(i.bhi.mesh,s[3]);o&&o.dispose()}else s[3]&&s[3].dispose();let a=this.infos[t];if(a){let o=await hc(this.posts[t],"place");if(!this.alive){o.dispose();return}let l=e(a.mesh,o);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await hc(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(xn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),zc(),os.remove(this.container)}},hr=[],Pe=null,ur=oe.cameraEaseSpeed,ki=!1,zn=!1,Us=0,Os=0,xc=0,bc=0,Vs=!1,Sn=!1,fs=()=>hr[H.currentSection];function uM(){let n=oe.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function dM(){let n=oe.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var fM={map:58},Hc=(n=(fs()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||fM[n.layout]||100)/100)),ui=()=>Pe&&Pe.L.grid&&Pe.grid&&Pe.section===fs()?Pe:null,pM=n=>Td()/n.sc*Math.min(1,oe.cameraDistanceProportion/hs);function Vc(n){let e=n.grid,t=pM(e),i=t/Td();return{d:Math.max(20,t-Fs.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var cs=()=>{let n=ui();return n?Vc(n).d:oe.cameraDistance*Hc()},Gc=()=>{let n=ui();return n?Vc(n).ty:oe.cameraTargetHeight*(((fs()||{}).def||{}).layout==="map"?Hc()*.62:1)},Im=()=>{let n=ui();return n?Vc(n).ty:oe.cameraHeight*(((fs()||{}).def||{}).layout==="map"?Hc()*1.6:1)},uc=new U;function mM(){return!gr()||ui()||oe.cameraDistanceProportion>=hs?0:Math.min(1,(1-oe.cameraDistanceProportion/hs)*1.25)}function gM(){let n=Pe&&Pe.net&&Pe.net.focus;return n?(n.getWorldPosition(uc),{x:uc.x,y:uc.y,z:-uc.z}):null}function Lo(){let n=fs(),e=mM(),t=e?gM():null,i=Gc(),s=ui();return s?{x:n.p.x-Vc(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var ba=()=>{if(!gr()||ui())return Im();let n=Math.min(1,oe.cameraDistanceProportion/hs);return Lo().ty+(Im()-Gc())*Math.pow(n,.55)},yM=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),Po=()=>{let n=Lo();return{d:cs(),x:n.x,z:n.z,ty:n.ty}},$n=null;function Tg(n){if(!n||!Pe||!Pe.relayout())return;xn(yt),xn(Pn),$n=n,ui()&&(H.degreeCamera=Ad(H.degreeCamera)),H.cameraY=ba(),zn=!0,ur=oe.cameraEaseSpeed;let e=H.postOpen&&H.section.def.open==="focus3d"&&Pe.postViews[H.selected];e&&e.ready&&(Pe.L.grid?Pe.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var vM=0;function _M(){if(++vM%20||!Vs||H.postOpen||ki||!Sn)return;let n=ui();if(!n)return;let e=Eg();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&Tg($n||Po())}function xM(){if(!$n)return;let n=Po(),e=bn(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-$n[i];Math.abs(s)>.05?($n[i]+=s*e,t=!1):$n[i]=n[i]}ya(Pn)||(Pn.x=$n.x,Pn.y=$n.ty,Pn.z=$n.z),!ki&&!zn&&!ya(yt)&&sd(),t&&($n=null)}function sd(){let n=$n||Po();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function Wc(){hr.forEach((n,e)=>{e===H.currentSection?n.container.parent||os.add(n.container):n.container.parent&&os.remove(n.container)}),ki=!1,zn=!1,dn.classList.remove("dragging"),ha=null,pa=null,yo=null,Pe&&Pe.destroy(),$n=null,Pe=new id(fs()),vo(H.selected),H.actualDeg=H.degreeCamera,bM()}function bM(){let n=Lo();H.cameraY=ba(),Y1(cs()*Math.sin(H.degreeCamera)+n.x,H.cameraY,cs()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function vo(n){H.selected=n,Pe&&Pe.focus(n)}function zu(n){!Pe||!Pe.n||(zn=!0,Pe.checkPostSelected(),ur=oe.cameraKeyboardSpeed,vo(n==="NEXT"?Pe.goNext():Pe.goPrev()))}var ca=()=>Ht>700&&Wt>520;function $c(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Wt<680?1e3-Wt:320)*t)}function Ag(){if(zn=!1,$c(),!Vs)return;let n=Lo();if(H.postOpen&&H.section.def.open==="focus3d"&&Pe&&Pe.postViews[H.selected]){let t=Pe.postViews[H.selected];Pe.L.grid?Pe.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=gr()||ui();j1(n.x+cs()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+cs()*Math.cos(H.actualDeg),oe.cameraSpeed/2),e&&xd(n.x,n.ty,n.z,oe.cameraSpeed/2)}function MM(){if(!Sn){Math.abs(yt.y-H.cameraY)>.007&&!ya(yt)&&(yt.y-=(yt.y-H.cameraY)*bn(oe.cameraEaseSpeed));return}if(ki){ur=oe.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Us-xc)/150,H.actualDeg-=(H.actualDeg-n)*bn(ur),sd(),H.cameraY+=(Os-bc)*2;let e=oe.cameraHeight,t=gr()?Lo().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*bn(ur),oe.animationMode&&Pe&&Pe.movePosts((xc-Us)/Math.max(Sc,.25),(bc-Os)/Math.max(Sc,.25),ur),xc=Us,bc=Os}else zn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(zn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*bn(oe.cameraEaseSpeed),sd(),yt.y-=(yt.y-H.cameraY)*bn(ur),oe.animationMode&&Pe&&Pe.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*bn(oe.cameraEaseSpeed))}function SM(){yt.zoom=6;let e=Pe&&Pe.postViews[0]&&Pe.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,Pn.y=e+100,xd(Pn.x,Gc(),Pn.z,1),Sn=!1,sn(yt,1,{zoom:Fs.zoom},{ease:"expoOut"}),setTimeout(()=>{Sn=!0},1*1e3+50)}var Hu=new U,Vu=new U,fo=new U,po=1;function wM(){Hu.copy(Ku(yt.x,yt.y,yt.z)),Vu.copy(Ku(Pn.x,Pn.y,Pn.z)),fo.subVectors(Vu,Hu),fo.lengthSq()<1e-6&&fo.set(0,0,-1),fo.normalize();let n=gr()&&!ui()?Math.min(1,oe.cameraDistanceProportion/hs):1;po+=Math.abs(n-po)<.001?n-po:(n-po)*bn(oe.cameraEaseSpeed),Bn.position.copy(Hu).addScaledVector(fo,-Fs.focus*po),Bn.lookAt(Vu);let e=Math.min(1,Ht/900),t=2*Math.atan(Wt/2/(yt.zoom*Fs.focus*e))/Ni;Math.abs(Bn.fov-t)>1e-4&&(Bn.fov=t,Bn.updateProjectionMatrix())}function Cg(){Ht=window.innerWidth,Wt=window.innerHeight,Hs.setSize(Ht,Wt,!1),Bn.aspect=Ht/Wt,Bn.updateProjectionMatrix(),ug.forEach(n=>n.resolution.set(Ht,Wt))}var qn=document.getElementById("menu"),bi=document.getElementById("slogan"),Mn=document.getElementById("langs"),qc=[];function EM(){qn.innerHTML="",qc=Pt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=ce(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&Sn&&Io(e)}),t.appendChild(i),qn.appendChild(t),i}),qn.style.setProperty("--n",Pt.length),Cd()}function Cd(){qc.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function TM(){qc.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),qn.hidden=!1,Mn.hidden=!1,mr(),setTimeout(()=>qn.classList.add("ready"),(Pt.length+1)*200)}var AM=1.44,Nm={col:362,gutter:160,side:79,top:34,bottom:20},Dm={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Ps(){let n=be&&be.settings&&be.settings.fiche||{},e={};for(let t in Nm){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?Nm[t]:Math.max(Dm[t][0],Math.min(Dm[t][1],Math.round(+i)))}return e}function rd(n){let e=Ps(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Ht-2*oe.margin)/(Qe.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function Rg(){let n=Wt<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=bi.offsetTop+bi.offsetHeight+(n?1:2)*oe.margin,t=Qe.height+12,i=n?24:(qn.offsetHeight||90)+70,s=(Wt-e-i)/t,r=(Wt-e-56)/t,a=Ht>700&&!n?14/(+li(be.settings,"body").size||14):0,o=Math.max(n?.4:.5,Math.min(AM,Math.max(s,Math.min(a,r))));Qe.scale=o,rn.style.top=e+"px",rn.style.transform=o!==1?`scale(${o.toFixed(3)})`:"",rn.style.width=o!==1?Math.ceil((Ht-oe.margin)/o)+"px":"",rn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Wt-(e+t*o)<qn.offsetHeight+60)}function mr(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Qe.open&&Qe.height>100){let n=bi.offsetTop+bi.offsetHeight+Qe.height*(Qe.scale||1)+2*oe.margin+30;n=Math.min(n,Mn.getBoundingClientRect().top-qn.offsetHeight-22),qn.style.left=oe.margin+"px",qn.style.top=n+"px"}else{let n=Mn.hidden?Wt-30:Mn.getBoundingClientRect().top;if(!ca()&&!Mi.hidden){let e=Mi.getBoundingClientRect();e.height&&e.left<Ht/2&&(n=Math.min(n,e.top))}qn.style.left=(ca()?26:oe.margin)+"px",qn.style.top=Math.round(Math.min(Wt-(qn.offsetHeight||86)-(ca()?100:56),n-(qn.offsetHeight||86)-24))+"px"}document.body.classList.toggle("post-open-wide",ca()&&!!H.postOpen),Pg(),Lg()}function Lg(){if(!he||!he.btn)return;let n=he.btn;n.style.top=Math.round(bi.offsetTop+bi.offsetHeight+(ca()?26:16))+"px",n.style.left=bi.offsetLeft+2+"px",n.style.right="auto"}function Pg(){Mi.style.top=Mi.style.left="",od.style.maxHeight=Math.max(140,Wt-200)+"px",document.body.classList.toggle("cats-up",!ca()&&Ht<560)}var Gu=(n,e=!1)=>bm(n,be.settings,e);function ad(){let n=be.settings,e=n.accent||"#ffcc00",t=n.logo?Mt(n.logo):Gu(Yn?"#ffffff":e,Yn),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:Gu("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),CM(n.logo?t:Yn?Gu(e):t)}function CM(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var Mc="",Ac=document.querySelector('meta[name="description"]'),Um=Ac?Ac.content:"",Rd=document.title;function Ig(n){if(!(Ut||!be)){document.title=n?`${ce(n.title).trim()} \xB7 ${be.settings.name||"Hand Coded"}`:Rd,Ac&&(Ac.content=n&&(ns(ce(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||ce(n.subtitle))||Um);try{let e=new URL(location.href);n?e.searchParams.set("p",n.id):e.searchParams.delete("p"),e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&Ma("?p="+n.id,document.title)}}function RM(){let n=String((be.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||Ut||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{Mc||Ma("",Rd)}),document.head.appendChild(e)}function Ma(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:location.pathname.replace(/index\.html$/,"")+n,title:e,event:t})}catch{}}function Xc(){let n=be.settings;xg(),Yg(),Zc(),document.documentElement.lang=vi,document.documentElement.classList.toggle("neg",Yn),H.postOpen||(document.title=Rd||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[vi]||n.taglines.en)||[],t=e.length?`<b class="wm">${Te(e[0])}</b>${e.slice(1).map(a=>`<span>${Te(a)}</span>`).join("")}`:Te(n.name);if(bi.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${Te(Ae("homeLink"))}">${Te(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${Te(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,ad(),!n.logo&&document.fonts){let a=li(n,"logo"),o=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(o)||document.fonts.load(o).then(()=>{be.settings.logo||ad()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let o=document.getElementById(a);o&&(o.classList.toggle("toggle",i),i?(o.setAttribute("role","button"),o.tabIndex=0,o.setAttribute("aria-pressed",String(Yn)),o.title=Ae(Yn?"toPos":"toNeg"),o.setAttribute("aria-label",o.title)):(o.removeAttribute("role"),o.removeAttribute("tabindex"),o.removeAttribute("aria-pressed"),o.removeAttribute("aria-label"),o.removeAttribute("title")))}),In.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),zs.classList.contains("wait")||Gd(ce(n.home.enter)||Ae("enter")),zM(),Xn(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=Ae(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Ae("keys")),_o.setAttribute("aria-label",Ae("prev")),Cc.setAttribute("aria-label",Ae("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=Ae("category"));let r=n.langs&&n.langs.length?n.langs:oi;LM(r),[document.getElementById("home-langs")].forEach(a=>{a.innerHTML="",!(r.length<2)&&r.forEach(o=>{let l=document.createElement("button");l.type="button",l.textContent=o.toUpperCase(),l.setAttribute("aria-pressed",String(o===vi)),l.setAttribute("aria-label",Ae("lang")+" "+o.toUpperCase()),l.addEventListener("click",()=>Ld(o)),a.appendChild(l)})}),document.documentElement.style.setProperty("--accent",Kn()),document.documentElement.style.setProperty("--accent-raw",be.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",pg(be.settings.accent||"#ffcc00")),fS()}function LM(n){if(Mn.innerHTML="",Mn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",Ae("lang")+" : "+vi.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${vi.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==vi).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",Ae("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{Mn.classList.remove("open"),Ld(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=Mn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),Mn.append(t,e)}document.addEventListener("pointerdown",n=>{if(Mn.classList.contains("open")&&!Mn.contains(n.target)){Mn.classList.remove("open");let e=Mn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});Mn.addEventListener("keydown",n=>{if(n.code==="Escape"&&Mn.classList.contains("open")){n.stopPropagation(),Mn.classList.remove("open");let e=Mn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Ld(n){if(n!==vi){vi=n;try{localStorage.setItem("hc-lang",n)}catch{}if(Xc(),Vs){qc.forEach((i,s)=>{i.textContent=ce(Pt[s].def.name)}),Yc();let e=H.postOpen,t=H.selected;Si(),H.selected=t,Wc(),e&&bo(.6,()=>To(t))}}}var _a=document.getElementById("cats"),Mi=document.getElementById("cat-box"),od=document.getElementById("cat-list"),Ng=document.getElementById("cat-name"),Eo=document.getElementById("cat-open"),_o=document.getElementById("pg-prev"),Cc=document.getElementById("pg-next");function Yc(){let n=H.data,e=n.categoryList;Mi.hidden=e.length<=1,od.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${Te(ce(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{ld(),NM(t.id)}),i.appendChild(s),od.appendChild(i)}),Ng.innerHTML=`${Te(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,Dg(),ld()}var dc=document.getElementById("pg-num");function Dg(){let n=H.data;_o.disabled=!n.hasNewer(),Cc.disabled=!n.hasOlder(),_o.hidden=Cc.hidden=!n.hasNewer()&&!n.hasOlder(),dc&&(dc.hidden=_o.hidden,dc.textContent=`${n.page}/${n.pages}`,dc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function ld(){clearTimeout(fa),Mi.classList.remove("open"),Eo.setAttribute("aria-expanded","false")}var fa=0,Pd=-1e9;function Ug(n=.7){clearTimeout(fa),!(Mi.hidden||!H.data||H.data.categoryList.length<=1)&&(fa=setTimeout(()=>{!Vt||H.postOpen||_a.classList.contains("hidden")||(Mi.classList.add("open"),Eo.setAttribute("aria-expanded","true"),fa=setTimeout(()=>{Mi.classList.remove("open"),Eo.setAttribute("aria-expanded","false")},1300))},n*1e3))}Mi.addEventListener("pointerenter",()=>clearTimeout(fa));Eo.addEventListener("click",()=>{clearTimeout(fa);let n=Mi.classList.toggle("open");Eo.setAttribute("aria-expanded",String(n))});_o.addEventListener("click",()=>{Sn&&zg("newer")});Cc.addEventListener("click",()=>{Sn&&zg("older")});var Gs=document.getElementById("kb"),Id=document.getElementById("kb-toggle"),Og=null;function cd(){Gs.classList.add("open"),Id.setAttribute("aria-expanded","true")}function Rc(){Gs.classList.remove("open"),Id.setAttribute("aria-expanded","false")}Id.addEventListener("click",()=>{clearTimeout(Og),Gs.classList.contains("open")?Rc():cd()});Gs.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>Vg({code:n.dataset.k,preventDefault(){}})));function is(n){let e=Gs.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function kg(){Gs.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var Nd=document.getElementById("whiteboard"),rn=document.getElementById("post2d"),Is=document.getElementById("strip");function Om(n,e){if(!n||be.settings.signImages===!1)return"";let t=[ce(n.title).trim(),(n.author||be.settings.name||"").trim()].filter(Boolean);return e&&t.push(Ae("photo")+" "+e.trim()),t.join(" \xB7 ")}var PM=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Sa=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},wa=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},xa=n=>Sa(n)?"youtube":wa(n)?"vimeo":PM(n)?"video":"image",Qe={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,rn.classList.remove("closing"),rn.hidden=!1,Rg(),this.geomKey=JSON.stringify(rd("project"));{let i=Ps();Is.style.setProperty("--ft",i.top+"px"),Is.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Is.style.transform="translateX(0px)"},addRelations(n){let e=wo(n);if(!e.length)return;let t=uo(be,n).length>0,i=Ps(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),a=r?Math.max(12,i.gutter-i.side):i.side,o=Math.max(200,Math.min(300,i.col))+a+i.side,l=`<h2 class="ttl" style="left:${a}px;right:${i.side}px;top:${i.top}px">${Te(Ae(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${a}px;bottom:${i.bottom}px">${e.length}</span>`;r||this.addPanel("relh",o,l),e.forEach(c=>{let h=pr(c),u=[c.date,ce(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${Te(c.id)}" aria-label="${Te(ce(c.title))}">`+(h?`<img src="${Te(Mt(h))}" alt="" draggable="false">`:"")+`<span class="mono"${h?" hidden":""}>${Te(So(ce(c.title)))}</span><span class="cap"><span class="t">${Te(ce(c.title).trim())}</span>${u?`<span class="m">${Te(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addLogos(n){let e=Ps(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,a=e.side,o=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${Te(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",a*2+h*o,`<h3 class="lbl" style="left:${a}px;top:${i}px">${Te(Ae("partners"))}</h3><div class="grid" style="left:${a}px;top:${g}px;grid-template-columns:repeat(${h},${o-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>Fg(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Ae("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${Te(t)}</span><a href="${Te(e)}" target="_blank" rel="noopener"><span class="host">${Te(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Is.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>xa(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let a=r%t.length;t[a]==="bleed"&&a++;let o=0;for(;o<n.length;){let l=n[o];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}let c=t[a++%t.length],h=i[c]||1,u=n.slice(o,o+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),o++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),o+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${Te(Mt(h.src))}" alt="" draggable="false">`).join("")+(i?`<p class="mcap2">${Te(i)}</p>`:"")),a=[...r.querySelectorAll("img")],o=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);a.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),o&&(u.cap?Object.assign(o.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):o.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return a.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&ce(t.caption).trim());return e?ce(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],a=263*s[1];return{w:2*46+r+16+a,boxes:[[46,46,r,263],[46+r+16,46,a,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Ps().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],a=(i-t)/(1/s[1]+1/s[2]),o=a/s[1];return{w:2*e+r+t+a,boxes:[[e,e,r,i],[e+r+t,e,a,o],[e+r+t,e+o+t,a,i-t-o]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[a,o]=e(t[1],230,160),l=30+o+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+a,r+c+120)+46,boxes:[[46,46,i,s],[r,30,a,o],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let a=(355-s)/2,o=34,l=i.map(c=>{let h=[o,a,s*c,s];return o+=s*c+10,h});return{w:o-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Ps().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],a=s[2]+s[3],o=t+(i-t)/(1/r+1/a),l=(o-t)/r,c=(o-t)/a,h=e+l+t;return{w:o+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?ce(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),a=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-a,r,a]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?ce(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],a=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,a,s,r]],cap:[70,a+r+10,s]}},e)},addMat(n){let t=n.caption?ce(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${Te(Mt(n.src))}" alt="" draggable="false" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${Te(t)}</p>`:"")),r=s.querySelector("img"),a=()=>{if(!r.naturalWidth)return;let o=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=o+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=o+"px"),this.layout()};r.addEventListener("load",a),r.complete&&a(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(o=>o!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=xa(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let a=r==="video",o=this.addPanel("media",e,""),l=document.createElement(a?"video":"img");if(l.draggable=!1,l.style.height=e+"px",a){Object.assign(l,{src:Mt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Ae("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),o.querySelector(".in").appendChild(u)}else l.src=Mt(n),l.alt="";let c=()=>{let u=Math.round(a?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(o.style.width=u+"px",this.layout())};l.addEventListener(a?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(o)||this.panels.length<2||(o.remove(),this.panels=this.panels.filter(u=>u!==o),this.layout())}),o.querySelector(".in").prepend(l);let h=s?ce(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${Te(d)}</b> `:"")+Te(p),o.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),a=this.addPanel("media embed",s,"").querySelector(".in"),o=e==="youtube"?Sa(n):wa(n),l=document.createElement("div");l.className="cover";let c=e==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:this.post&&this.post.thumb?Mt(this.post.thumb):"";if(c){let u=document.createElement("img");u.src=c,u.alt="",u.draggable=!1,u.onerror=()=>u.remove(),l.appendChild(u)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let h=document.createElement("button");h.type="button",h.className="play",h.setAttribute("aria-label",Ae("play")),h.addEventListener("click",()=>{let u=document.createElement("iframe");u.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${o}?autoplay=1&title=0&byline=0&portrait=0`,u.allow="autoplay; fullscreen; picture-in-picture",u.allowFullscreen=!0,u.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(u)}),l.appendChild(h),a.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=rd(e),a=Ps(),o=355-a.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(P,R)=>r?[P===0?a.side:Math.floor(a.gutter/2),P===R-1?a.side:Math.ceil(a.gutter/2)]:[i,t-i-s],c=ce(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=ce(n.subtitle),u=H.section.def,d=n.tags.filter(P=>P!=="featured").map(P=>u.tags.find(R=>R.id===P)).filter(Boolean).map(P=>ce(P.label)),p=d.length?`${Te(Ae("postedIn"))} <span>${d.map(Te).join(", ")}</span>`:"",g=Te([n.date,ce(n.place)].filter(Boolean).join(" | ")),v=aa(ce(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${Te(c)}</h2>${h?`<p class="stl" style="position:static">${Te(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,E=h?m.lastChild.offsetHeight+6:0,b=e==="project"?bg(n):[],N="";if(b.length){let P=(Pt.find(R=>R.def.id===b[0].section)||{}).def;N=`${Te((P?ce(P.name):Ae("skills")).trim())} ${b.map((R,D)=>`<span class="it"><button type="button" class="go" data-go="${Te(R.id)}">${Te(ce(R.title).trim())}</button>${D<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let P=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${N?`<div class="posted skl-tags">${N}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${P}</div>`;let R=m.firstChild.offsetHeight,D=o-13,z=D-R,w=H.section.def.skills?wo(n).length:0,M="",F=0;w&&(M=`<span class="lbl">${Te(Ae(uo(be,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${w}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${M}</div>`,F=m.firstChild.offsetHeight);let ie=F?z-F-18:z,de=a.top+f+6,k=a.top+f+E+20,V=$u(v,s,[o-k,o-a.top],m);m.innerHTML=`<div class="body" style="position:static">${V[V.length-1]}</div>`;let B=V.length===1?k:a.top;if(V[V.length-1]&&B+m.firstChild.offsetHeight>ie-12){let q=$u(V.pop(),s,F?[o-B,ie-12-a.top]:[ie-12-B,ie-12-a.top],m);V.push(...q),F&&q.length===1&&V.push("")}let ne=0;if(F){B=V.length===1?k:a.top,m.innerHTML=`<div class="body" style="position:static">${V[V.length-1]||""}</div>`;let q=B+(V[V.length-1]?m.firstChild.offsetHeight:0)+18;ne=V[V.length-1]?Math.min(ie,Math.max(Math.round((a.top+o)/2)-10,q)):a.top+4}V.forEach((q,W)=>{let Q=W===V.length-1,[te,fe]=l(W,V.length);this.addPanel("txt",te+s+fe,(W===0?`<h2 class="ttl" style="left:${te}px;top:${a.top}px;width:${s}px">${Te(c)}</h2>${h?`<p class="stl" style="left:${te}px;top:${de}px;width:${s}px">${Te(h)}</p>`:""}`:"")+`<div class="body" style="left:${te}px;top:${W===0?k:a.top}px;width:${s}px">${q}</div>`+(Q&&F?`<div class="relp" style="left:${te}px;top:${ne}px;width:${s}px">${M}</div>`:"")+(Q?`<div class="meta" style="left:${te}px;top:${z}px;width:${s}px">${P}</div>`:""))})}else{let P=13+f+4,R=13+f+E+10,D=R+20,z=D+18+20;$u(v,s,[355-z-14,327],m).forEach((M,F)=>{this.addPanel("txt",t,(F===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${Te(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${P}px;width:${s}px">${Te(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${R}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${F===0?z:14}px;width:${s}px">${M}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(R=>be.posts.find(D=>D.id===R)).filter(Boolean),t=Ps(),i=t.top,s=355-t.bottom,r=t.side,a=Math.max(24,Math.min(36,t.gutter)),o=R=>String(R+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${Te(Ae("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((R,D)=>`<li data-i="${D}"><b>${o(D)}</b><span><span class="nm">${Te(ce(R.title).trim())}</span>${ce(R.subtitle).trim()?`<i>${Te(ce(R.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${Te(Ae("with"))}</i> ${Te(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+a,m=v,f=i,E=0,b=0,N=v;e.forEach((R,D)=>{let z=g[D%g.length]*(e.length>12?.8:1),w=16;f+z+w>s&&f>i+1&&(m+=E+16,b++,f=i+(b%2?34:0),E=0);let M=Ro(R)&&R.published!==!1,F=document.createElement(M?"button":"div");F.className="face"+(M?" go":""),M&&(F.type="button",F.dataset.go=R.id),F.dataset.i=D,Object.assign(F.style,{left:m+"px",top:f+"px",width:z+"px",height:z+"px"});let ie=!R.thumb&&(ed(R).find(k=>k!==n)||ed(R)[0]),de=ie?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${Te(Mt(pr(ie))).replace(/'/g,"%27")}') center/cover"`:"";F.innerHTML=(R.thumb?`<img src="${Te(Mt(R.thumb))}" alt="" draggable="false">`:`<span class="mono"${de}>${Te(So(ce(R.title)))}</span>`)+`<b class="n">${o(D)}</b>`,F.setAttribute("aria-label",ce(R.title)),c.appendChild(F),E=Math.max(E,z),f+=z+w,N=Math.max(N,m+z)}),l.style.width=Math.ceil((e.length?N:r+p)+r)+"px";let P=(R,D)=>c.querySelectorAll(`[data-i="${R}"]`).forEach(z=>z.classList.toggle("on",D));c.querySelectorAll("[data-i]").forEach(R=>{["pointerenter","focus"].forEach(D=>R.addEventListener(D,()=>P(R.dataset.i,!0))),["pointerleave","blur"].forEach(D=>R.addEventListener(D,()=>P(R.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(R=>{let D=c.querySelector(`.face.go[data-i="${R.dataset.i}"]`);D&&(R.classList.add("go"),R.dataset.go=D.dataset.go)})},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(380,Math.max(260,Math.floor((Ht-2*oe.margin)/(this.scale||1)))),`<div class="cn">${Te(ce(n.title))}.</div><div class="ac">${Te(ce(n.subtitle))}</div><div class="site">${n.link?`<a href="${Te(n.link)}" target="_blank" rel="noopener">${Te(e)}</a>`:""}</div><div class="ad">${aa(ce(n.body))}</div><div class="ct">${Te(ce(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return rn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Is.querySelectorAll("video").forEach(n=>n.pause()),Is.innerHTML="",this.panels=[],rn.hidden=!0,rn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(Lc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*bn(oe.easing),this.xprev=Lc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*bn(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);Is.style.transform=`translateX(${Math.round(this.x)}px)`}}},Jt=document.createElement("div");Jt.id="postv";Jt.hidden=!0;Jt.setAttribute("role","dialog");Jt.setAttribute("aria-modal","true");document.body.appendChild(Jt);var IM=()=>kc(),ks={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(c=>c&&c.src),s=Te,r=ce(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let a=ce(n.subtitle).trim(),o=[];o.push(`<div class="pv-bar"><span class="pv-sec">${s(ce(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(Ae("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&o.push(this.media(l,"pv-hero")),e==="place"){let c=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");o.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${a?`<p class="pv-stl">${s(a)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(c)}</a></p>`:"")+`<div class="pv-body">${aa(ce(n.body))}</div>${ce(n.place)?`<p class="pv-meta">${s(ce(n.place))}</p>`:""}</div>`)}else{if(o.push(this.text(n,r,a,t)),t.skills&&o.push(this.relations(n)),e==="text"?i.slice(1).forEach(c=>o.push(this.media(c,"pv-full"))):o.push(this.gallery(i.slice(1))),t.skills||o.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&o.push(this.team(n)),n.logos&&n.logos.length&&o.push(`<section class="pv-logos"><h2 class="pv-h">${s(Ae("partners"))}</h2><div class="pv-lgrid">${n.logos.map(c=>`<span><img data-src="${s(c)}" alt=""></span>`).join("")}</div></section>`),n.link){let c=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,h=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");o.push(`<p class="pv-link"><span>${s(String(Ae("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(c)}" target="_blank" rel="noopener">${s(h)} \u2197</a></p>`)}o.push(this.next(n))}if(Jt.innerHTML=`<div class="pv-page">${o.join("")}</div>`,this.wire(),Jt.hidden=!1,Jt.scrollTop=0,Jt.offsetWidth,Jt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!Ut)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=Te,r=aa(ce(n.body)),a=r.split(/(?=<h3[\s>])/i),o=/^\s*<h3/i.test(a[0])?"":a.shift(),l=a.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>ce(p.label)),h=[n.date,ce(n.place)].filter(Boolean).join(" | "),u=bg(n),d="";if(u.length){let p=(Pt.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?ce(p.name):Ae("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(ce(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${o||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(Ae("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=Te,i=xa(n.src),s=n.caption?ce(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let a=i==="youtube"?Sa(n.src):wa(n.src),o=i==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:this.post&&this.post.thumb?Mt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(a||"")}"><div class="pv-cover">${o?`<img src="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(Ae("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(Mt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(Mt(n.src))}" alt="" loading="lazy">${r}</figure>`},gallery(n){let e=u=>xa(u.src)==="image",t=[],i=Te,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(Mt(d.src))}" alt="" loading="lazy">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],a={pair:2,quad:4,big2:3},o=String(this.post.id||""),l=0;for(let u of o)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=a[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?ce(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(Mt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=wo(n);if(!e.length)return"";let t=Te,i=uo(be,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(Ae(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=pr(s),a=[s.date,ce(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?`<img src="${t(Mt(r))}" alt="" loading="lazy">`:`<span class="mono">${t(So(ce(s.title)))}</span>`}<span class="t">${t(ce(s.title).trim())}</span>${a?`<span class="m">${t(a)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=Te,t=(n.team||[]).map(i=>be.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(Ae("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=Ro(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?`<img src="${e(Mt(i.thumb))}" alt="" loading="lazy">`:`<span class="mono">${e(So(ce(i.title)))}</span>`}<span class="t">${e(ce(i.title).trim())}</span>${ce(i.subtitle).trim()?`<span class="m">${e(ce(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(Ae("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=pr(i),r=Te;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(Ae("nextProject"))} \u2192</span><span class="t">${r(ce(i.title).trim())}</span>${s?`<img src="${r(Mt(s))}" alt="" loading="lazy">`:""}</button>`},wire(){Jt.querySelector(".pv-x").addEventListener("click",()=>Bs()),Jt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Jt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Jt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>Fg(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Jt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${t}?autoplay=1&title=0&byline=0&portrait=0`,i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Jt.querySelectorAll("video").forEach(n=>n.pause()),Jt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Jt.hidden=!0,Jt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Jt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),ks.keepHistory=!0,jc(e.dataset.go),ks.keepHistory=!1)});Jt.addEventListener("keydown",n=>{n.code==="Escape"&&Bs()});var Wu=new Map;function Fg(n){if(Wu.has(n))return Wu.get(n);let e=Oi(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,s,r);let l;try{l=o.getImageData(0,0,s,r)}catch{return{src:Mt(n),raw:!0}}let c=l.data,h=M=>(.2126*c[M]+.7152*c[M+1]+.0722*c[M+2])/255,u=0,d=0,p=0,g=M=>{u++,c[M+3]<40?d++:p+=h(M)};for(let M=0;M<s;M++)g(M*4),g(((r-1)*s+M)*4);for(let M=0;M<r;M++)g(M*s*4),g((M*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,E=0;if(v){for(let M=0;M<c.length;M+=16)c[M+3]>128&&(f+=h(M),E++);f=E?f/E:0}let b=v?f<.5?1:0:m,N=Math.max(.25,Math.max(b,1-b));for(let M=0;M<c.length;M+=4){let F=c[M+3]/255,ie=h(M),de=(Math.max(c[M],c[M+1],c[M+2])-Math.min(c[M],c[M+1],c[M+2]))/255,k=Math.min(1,Math.max(Math.abs(ie-b),de*.8)/N);k=k<.08?0:Math.min(1,(k-.08)*1.35),c[M]=c[M+1]=c[M+2]=255,c[M+3]=Math.round(255*k*F)}o.putImageData(l,0,0);let P=s,R=r,D=-1,z=-1;for(let M=0;M<r;M++)for(let F=0;F<s;F++)c[(M*s+F)*4+3]>24&&(F<P&&(P=F),F>D&&(D=F),M<R&&(R=M),M>z&&(z=M));if(D<P)return{src:a.toDataURL("image/png")};let w=document.createElement("canvas");return w.width=D-P+1,w.height=z-R+1,w.getContext("2d").drawImage(a,-P,-R),{src:w.toDataURL("image/png")}}).catch(()=>({src:Mt(n),raw:!0}));return Wu.set(n,e),e}function $u(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let a=[],o=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){o=null,d.textContent.trim()&&a.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){o=null;return}d.nodeType===3&&!d.textContent.trim()&&!o||(o||(o=document.createElement("p"),a.push(o)),o.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of a){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="UL"||d.nodeName==="OL"||d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}let g=[];(function f(E,b){E.childNodes.forEach(N=>{N.nodeType===3?N.textContent.split(/(\s+)/).forEach(P=>P&&g.push({w:P,path:b})):f(N,[...b,N])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:E})=>{let b=v;for(let N of E){let P=b.lastChild;(!P||P.nodeType!==1||P.dataset.src!==N.outerHTML)&&(P=N.cloneNode(!1),P.dataset.src=N.outerHTML,b.appendChild(P)),b=P}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let E=function b(N){return N.lastChild&&N.lastChild.nodeType===1?b(N.lastChild):N}(v);E.removeChild(E.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var Lc=0,ss=null;rn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(ss={id:n.pointerId,x:n.clientX,y:n.clientY},Lc=n.clientX)});rn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(ss||Qe.dragging)){Ea();return}if(Lc=n.clientX,!ss||n.pointerId!==ss.id||Qe.dragging)return;let e=n.clientX-ss.x,t=n.clientY-ss.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Qe.dragging=!0,Qe.xprev=ss.x,Qe.finalpos=Qe.x,Qe.vel=0;try{rn.setPointerCapture(n.pointerId)}catch{}rn.classList.add("grabbing")}});rn.addEventListener("click",n=>{Qe.justDragged&&(n.preventDefault(),n.stopPropagation(),Qe.justDragged=!1)},!0);rn.addEventListener("wheel",n=>{if(n.preventDefault(),!Qe.open||Qe.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Qe.finalpos=Math.max(Qe.end-60,Math.min(60,Qe.finalpos-e*t/(Qe.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ea=()=>{Qe.dragging&&(Qe.justDragged=!0,setTimeout(()=>{Qe.justDragged=!1},0),Qe.finalpos+=(Qe.vel||0)*10),Qe.vel=0,ss=null,Qe.dragging=!1,rn.classList.remove("grabbing")};rn.addEventListener("pointerup",Ea);rn.addEventListener("pointercancel",Ea);rn.addEventListener("lostpointercapture",n=>{n.target===rn&&Ea()});window.addEventListener("pointerup",()=>{(ss||Qe.dragging)&&Ea()});Nd.addEventListener("pointerdown",()=>Bs());function Io(n=-1,e=0){og(),n===-1&&(n=H.currentSection||0),Si(),n!==H.currentSection&&Od(),H.currentSection=n,H.resetData(),H.selected=e,Wc(),Cd(),Yc(),performance.now()-Pd>1500&&Ug(.7);try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Ma("#"+H.section.def.id,ce(H.section.def.name).trim())}function Bg(){Si(),H.selected=0,Wc(),Dg()}function zg(n){(n==="newer"?H.data.newer():H.data.older())&&Bg()}function NM(n){H.data.changeCategory(n),Ng.textContent=H.data.currentCatName,Bg(),Yc()}function To(n){Si(),H.selected=n,go()}var km=0;function jc(n){let e=be.posts.find(h=>h.id===n),t=e?Pt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!Sn)return;og(),Si();let i=t!==H.currentSection;i&&Od(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let a=s.list.indexOf(e);if(a<0)return;let o=a<s.first||a>=s.last;if(o){let h=s.per;s.first=Math.floor(a/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!o&&Pe){To(l);return}H.selected=l,Wc(),Cd(),Yc(),i&&Ug();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Ma("#"+H.section.def.id,ce(H.section.def.name).trim());let c=++km;bo(.5,()=>{c===km&&H.data===s&&s.posts[l]===e&&To(l)})}Is.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),jc(e.dataset.go))});function go(){!Pe||!H.data.posts[H.selected]||(No(null),kd(null),Si(),H.postOpen=!0,(H.section.def.open==="strip"||H.section.def.open==="focus3d")&&IM()?(ks.build(H.data.posts[H.selected],H.section.def.card),_a.classList.add("hidden"),ki=!1,dn.classList.remove("dragging"),zn=!0,vo(H.selected)):H.section.def.open==="strip"?(Nd.hidden=!1,Qe.build(H.data.posts[H.selected],H.section.def.card),_a.classList.add("hidden"),ki=!1,dn.classList.remove("dragging"),zn=!0,vo(H.selected)):(zn=!0,vo(H.selected),Pe.openPost3D()),mr(),Ig(H.data.posts[H.selected]))}function Bs(){H.postOpen&&(H.postOpen=!1,ks.open?(ks.close(),_a.classList.remove("hidden")):Qe.open?(Qe.close(),Nd.hidden=!0,_a.classList.remove("hidden")):Pe&&Pe.closePost3D(),mr(),Ig(null))}function Si(){H.postOpen&&Bs()}function DM(){rg(!oe.animationMode),kg(),Pe&&Pe.resetPostPosition(),zn=!0}var hs=oe.cameraDistanceProportion,gr=()=>((fs()||{}).def||{}).layout==="map",UM=()=>gr()?60:oe.cameraZoomMin;function Dd(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),Hg())}function Ud(){oe.cameraDistanceProportion>UM()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),Hg())}function Hg(){(gr()||ui())&&(H.cameraY=ba()),Ag()}function Od(){oe.cameraDistanceProportion!==hs&&(oe.cameraDistanceProportion=hs,$c())}var Fm=!1;function Vg(n){if(!Sn)return;Fm||(Fm=!0,cd(),Og=setTimeout(Rc,6e3));let e=H.postOpen&&Qe.open,t=H.postOpen&&!Qe.open;switch(n.code){case"ArrowLeft":is("ArrowLeft"),e?Qe.action("LEFT"):(Si(),zu("PREVIOUS"),t&&go());break;case"ArrowRight":is("ArrowRight"),e?Qe.action("RIGHT"):(Si(),zu("NEXT"),t&&go());break;case"ArrowUp":is("ArrowUp"),e||uM();break;case"ArrowDown":is("ArrowDown"),e||dM();break;case"Tab":is("Tab"),e?(Bs(),zu("NEXT"),go()):Io((H.currentSection+1)%Pt.length);break;case"KeyK":Gs.classList.contains("open")?Rc():cd();break;case"KeyA":is("KeyA"),DM();break;case"Equal":case"NumpadAdd":is("Equal"),e||Ud();break;case"Minus":case"NumpadSubtract":is("Minus"),e||Dd();break;case"Space":is("Space"),Pe&&Pe.checkPostSelected(),H.postOpen?Bs():go();break;case"Escape":Si();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!Vt||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||Vg(n)});var Bm=new Jl,zm=new tt;function Pc(n,e){if(!Vs||!Pe)return null;zm.set(n/Ht*2-1,-(e/Wt)*2+1),Bm.setFromCamera(zm,Bn);let t=Bm.intersectObjects([...fs().blockers,...Pe.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:OM(n,e)||(t?t.object.userData:null)}var fc=new U;function OM(n,e){if(!Pe||!Pe.net)return null;let t=null,i=14;for(let s of Pe.net.hits){if(!s.visible)continue;s.getWorldPosition(fc).project(Bn);let r=(fc.x+1)/2*Ht-n,a=(1-fc.y)/2*Wt-e,o=Math.hypot(r,a);o<i&&fc.z<1&&(i=o,t=s.userData)}return t}var Ln=null,yi=null,hd=0,ud=0;dn.addEventListener("pointerdown",n=>{if(!Sn||Ln!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&Ui.size>0)return;Us=hd=n.clientX,Os=ud=n.clientY;let e=Pc(n.clientX,n.clientY);Si(),yi=e&&e.post?e:null,yi&&yi.face==="back"&&(yi.post.view.focus(yi.post.id_),zn=!0),Ln=n.pointerId,dn.setPointerCapture(n.pointerId),dn.classList.add("dragging"),xc=Us,bc=Os,zn=!1,ki=!0});function yr(n,e=!1){if(n.pointerId===Ln){if(Ln=null,dn.classList.remove("dragging"),ki&&(zn=!0,ki=!1,ui()&&(H.degreeCamera=Ad(H.degreeCamera),H.cameraY=ba())),e){yi=null;return}if(yi&&yi.face==="front"&&Math.hypot(n.clientX-hd,n.clientY-ud)<6){let t=Pc(n.clientX,n.clientY);t&&t.post===yi.post&&To(t.post.id_)}else if(!yi&&Math.hypot(n.clientX-hd,n.clientY-ud)<6){let t=Pc(n.clientX,n.clientY);t&&t.netNode?Sg(t.netNode,n.clientX,n.clientY):zc()}yi=null}}dn.addEventListener("pointerup",yr);dn.addEventListener("pointercancel",n=>yr(n,!0));dn.addEventListener("lostpointercapture",n=>{n.pointerId===Ln&&yr(n,!0)});window.addEventListener("pointerup",n=>{Ln!==null&&n.pointerId===Ln&&n.target!==dn&&yr(n,!0)});window.addEventListener("blur",()=>{Ln!==null&&yr({pointerId:Ln},!0),Ea()});var qu=!1,ha=null,pa=null,yo=null;function kd(n){yo!==n&&(yo&&yo.hoverBack(!1),yo=n,n&&n.hoverBack(!0))}var Gg=()=>kc()&&Sn&&Pe&&["carousel","spiral"].includes(Pe.def.layout);function Fd(){return H.postOpen||!Pe?null:pa&&pa.view===Pe?pa:Gg()?(Pe.checkPostSelected(),Pe.postViews[H.selected]||null):null}var kM=0;function FM(){++kM%6===0&&Gg()&&No(Fd())}function No(n){ha!==n&&(ha&&ha.hover(!1),ha=n,n&&n.hover(!0))}dn.addEventListener("pointerleave",()=>{pa=null,No(Fd()),kd(null)});dn.addEventListener("pointermove",n=>{if(Ln!==null&&n.pointerId===Ln&&n.pointerType==="mouse"&&n.buttons===0){yr(n,!0);return}Ln!==null&&n.pointerId!==Ln||(Us=n.clientX,Os=n.clientY,Ln===null&&n.pointerType==="mouse"&&!qu&&(qu=!0,requestAnimationFrame(()=>{qu=!1;let e=Pc(Us,Os);dn.classList.toggle("hover",!!(e&&e.post)),pa=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,No(Fd()),kd(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?Sg(e.netNode,Us,Os):zc()})))});var Hm=0,Ui=new Map,ua=null,Wg=()=>{let[n,e]=[...Ui.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!Vt||Qe.open||!Ui.size&&n.target!==dn||(Ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),Ui.size===2&&(Ln!==null&&yr({pointerId:Ln},!0),ua={last:Wg()}))});window.addEventListener("pointermove",n=>{if(!Ui.has(n.pointerId)||(Ui.set(n.pointerId,{x:n.clientX,y:n.clientY}),!ua||Ui.size<2||!Sn))return;let e=Wg(),t=e/ua.last;t>1.15?(Ud(),ua.last=e):t<1/1.15&&(Dd(),ua.last=e)});var BM=n=>{Ui.delete(n.pointerId),Ui.size<2&&(ua=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,BM));dn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!Sn||e-Hm<220||!n.deltaY||e-Pd<1400||(Hm=e,n.deltaY<0?Ud():Dd())},{passive:!1});window.addEventListener("resize",()=>{let n=ls(),e=Vs&&Pe?$n||Po():null;Cg(),Ag(),mr(),Tg(e),ls()!==n&&Pe&&Pe.retexture(),i0(),dd(),Qe.open&&(Rg(),clearTimeout(Qe.relayout),Qe.relayout=setTimeout(()=>{Qe.open&&Qe.post&&JSON.stringify(rd("project"))!==Qe.geomKey&&(Qe.build(Qe.post,H.section.def.card),mr())},250))});function Vm(){if(be.settings.negativeToggle!==!1){if(Yn=!Yn,Mo()&&Uc(),!Ut)try{localStorage.setItem("hc-neg",(Yn?"1":"0")+(Mo()?"@"+fr:""))}catch{}Xc(),Pe&&Pe.retexture()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,a=i,o=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(o>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(a)*o*d,g=d+Math.sin(a)*o*d,v=Math.max(0,Math.min(1,1-o/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{a=s=i,o=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,E=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=E*E*(3-2*E);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Vm),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Vm())}))});var he=null,$g=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function zM(){let n=(be.settings.showreel||"").trim();if(!he){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),he={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>Jg()),he.x.addEventListener("click",pc),i.querySelector(".scrim").addEventListener("click",pc),he.snd.addEventListener("click",()=>qg(!he.muted)),window.addEventListener("keydown",s=>{if(he.open){if(s.code==="Escape")s.preventDefault(),pc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(a=>a.offsetParent);if(r.length){let a=r.indexOf(document.activeElement);s.shiftKey&&a<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&a===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!he.player||s.source!==he.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==he.muted&&(he.muted=r.info.muted,Ao())})}he.btn.hidden=!n,he.btn.setAttribute("aria-label","Showreel"),he.x.setAttribute("aria-label",Ae("close")),n!==he.src&&(he.open&&pc(!0),he.src=n,he.kind=n?xa(n):"",he.vid.innerHTML="",he.player=null);let e=he.kind==="youtube"?`https://www.youtube.com/watch?v=${Sa(n)}`:he.kind==="vimeo"?`https://vimeo.com/${wa(n)}`:"";he.ext.hidden=!e,e&&(he.ext.href=e,he.ext.textContent=(he.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Ao()}function Ao(){he&&(he.snd.innerHTML=$g(!he.muted)+`<span>${Ae(he.muted?"soundOn":"soundOff")}</span>`,he.snd.setAttribute("aria-pressed",String(!he.muted)))}function Ic(n,e=[]){let t=he.player;if(!(!t||!t.contentWindow)){if(he.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(he.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function qg(n){he.muted=n,Ao(),he.kind==="video"?he.player&&(he.player.muted=n,n||(he.player.volume=1)):(Ic(n?"mute":"unMute"),n||Ic("setVolume",[100]))}function HM(){if(!(!he||!he.src||he.open)){if(he.open=!0,he.last=document.activeElement,he.player)he.kind==="video"?he.player.play().catch(()=>{}):Ic("playVideo");else{let n=he.src,e=he.kind;if(e==="video"){let t=document.createElement("video");t.src=Mt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==he.muted&&(he.muted=t.muted,Ao())}),he.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Sa(n):wa(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),he.muted||qg(!1)}),he.player=t}else{let t=document.createElement("img");t.src=Mt(n),t.alt="",he.player=t}he.muted=!0,Ao(),he.vid.appendChild(he.player)}he.snd.hidden=!/^(youtube|vimeo|video)$/.test(he.kind),he.box.hidden=!1,he.btn.setAttribute("aria-expanded","true"),he.box.offsetWidth,he.box.classList.add("on"),setTimeout(()=>{he.open&&he.x.focus({preventScroll:!0})},60)}}function pc(n){!he||!he.open||(he.open=!1,he.btn.setAttribute("aria-expanded","false"),he.kind==="video"?he.player&&he.player.pause():Ic("pauseVideo"),he.box.classList.remove("on"),clearTimeout(he.t),he.t=setTimeout(()=>{he.open||(he.box.hidden=!0)},n===!0?0:650),he.last&&he.last.focus&&n!==!0&&he.last.focus({preventScroll:!0}))}var y=null,da=["white","grey","accent","source"],Xg=8;function VM(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},be.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((a,o)=>a+o,0);for(let a=0;a<i.length;a++)if((r-=s[a])<0)return i[a];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(da,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function GM(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=VM(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>dd()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:da.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(Xg,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=rS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:Mt(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),y.video=a}else{let a=d=>d&&!/^(https?:|data:)/.test(d)&&/\.(jpe?g|png|webp)$/i.test(d),o=be.sections.find(d=>d.visible&&d.card==="image"&&!d.skills)||{},l=be.posts.filter(d=>d.published!==!1&&a(d.thumb)),c=l.filter(d=>d.section===o.id),h=d=>d.map(p=>p.thumb).sort(()=>Math.random()-.5),u=[...new Set([...h(c),...h(l)])].slice(0,10);y.pics=u.map(d=>{let p=new Image;return p.decoding="async",p.src=Mt(d),p})}if(WM(e.controls!==!1),zd()&&Co()&&!/[?&]p=/.test(location.search)&&!Kc.matches&&!(Ut&&Ut.start)){let a=performance.now(),o=()=>{!Vt&&!y.reelOn&&!y.cam&&!y.userReel&&Co()&&Kg(!0)},l=setInterval(()=>{(Qc||performance.now()-a>6e3)&&(clearInterval(l),setTimeout(o,500))},150)}let r=document.getElementById("home-langs");r&&document.getElementById("home").appendChild(r),dd()}var Nc={video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function WM(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Nc.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden>?</button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Nc.faders}</b><span class="lbl"></span></button>`:"");let a=document.getElementById("home-band"),o=a.querySelector(".lg");o?o.after(r):a.appendChild(r),n&&XM(e,i,r),KM(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?us():Jg()}),document.querySelectorAll("#hv-src button").forEach(l=>l.addEventListener("click",()=>{l.dataset.src==="cam"&&!y.cam?e0():l.dataset.src==="video"&&y.cam&&Jc()})),document.getElementById("hv-shot").addEventListener("click",$M),document.getElementById("hv-words").addEventListener("keydown",l=>{l.stopPropagation(),l.key==="Enter"&&(l.preventDefault(),l.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>Bd()),Yg(),Zc()}function Zc(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(u=>{let d=u.dataset.src==="cam"===e;u.setAttribute("aria-pressed",String(d)),u.classList.toggle("on",d),u.textContent=Ae(u.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Ae("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=Ae("hv_words"),s.setAttribute("aria-label",Ae("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",Ae("hv_shot")),r.querySelector("span").textContent=Ae(i?"hv_shot":"photo");let a=document.querySelector("#hv-panel .priv");a&&(a.textContent=Ae("hv_private"));let o=n.querySelector("#story-btn");o.setAttribute("aria-label",Ae("story")),o.title=Ae("story");let l=document.querySelector("#hv-toggle .lbl");l&&(l.textContent=Ae("params"));let c=document.getElementById("home-reel");c.hidden=!(be.settings.showreel||"").trim();let h=!!(y&&y.reelOn);c.setAttribute("aria-pressed",String(h)),c.classList.toggle("on",h),c.setAttribute("aria-label","Showreel")}var Gm=0;function ma(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Gm),t.textContent=n||"",t.hidden=!n,n&&e&&(Gm=setTimeout(()=>{t.hidden=!0},e)))}async function $M(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(y.cell,y.floor),a=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,y.W)))),o=Math.ceil(n/a),l=Math.ceil(e/a),c={ctx:y.ctx,W:y.W,H:y.H,ow:y.off.width,oh:y.off.height,lo:y.lo,hi:y.hi};try{if(y.ctx=i,y.W=n,y.H=e,y.off.width=y.raw.width=o,y.off.height=y.raw.height=l,!t0(Kc.matches?0:(performance.now()-y.t0)/1e3))return;y.octx.globalAlpha=1,y.octx.drawImage(y.raw,0,0);let W=null;try{W=y.octx.getImageData(0,0,o,l).data}catch{}W?n0(W,o,l,a):pd(o,l,a)}finally{y.ctx=c.ctx,y.W=c.W,y.H=c.H,y.off.width=y.raw.width=c.ow,y.off.height=y.raw.height=c.oh,y.lo=c.lo,y.hi=c.hi,y.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=getComputedStyle(document.documentElement).getPropertyValue("--grotesk").trim()||"sans-serif",v=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),m=getComputedStyle(v),f=W=>`${m.fontStyle==="italic"?"italic ":""}${m.fontWeight} ${W}px ${m.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${g}`),document.fonts.load(f(110))])}catch{}let E=72,b=70,N=128,P=document.getElementById("home-logo");if(P&&P.complete&&P.naturalWidth)try{i.drawImage(P,E,b,N,N)}catch{}let R=(be.settings.name||"Hand Coded")+".",D=E+N+34,z=120;for(i.font=f(z);i.measureText(R).width>n-D-E&&z>48;)z-=4,i.font=f(z);i.fillStyle="#fff",i.textBaseline="middle",i.fillText(R,D,b+N/2+z*.04),i.textBaseline="top";let w=n-2*E,M=104,F=[];for(;M>=40&&(i.font=`bold ${M}px ${g}`,F=zt(i,p,w),!(F.length<=4));M-=4);F=p?F.slice(0,4):[];let ie=Math.round(M*1.05),de=e-96,k=de-44-F.length*ie;i.fillStyle=Kn(),F.length&&i.fillRect(E,k-38,54,7),i.fillStyle="#fff",i.font=`bold ${M}px ${g}`,F.forEach((W,Q)=>i.fillText(W,E-M*.04,k+Q*ie)),i.fillStyle="#8f8f8f",i.font=`28px ${g}`,i.fillText("hand-coded.net",E,de);let V=await new Promise(W=>t.toBlob(W,"image/jpeg",.92));if(!V)return;Ma("photo-souvenir","Photo souvenir",!0);let B="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",ne=typeof File=="function"?new File([V],B,{type:"image/jpeg"}):null;if(ne&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[ne]}))try{await navigator.share({files:[ne],title:be.settings.name||"Hand Coded"}),ma(Ae("hv_shotDone"),2500);return}catch(W){if(W&&W.name==="AbortError")return}let q=document.createElement("a");q.href=URL.createObjectURL(V),q.download=B,document.body.appendChild(q),q.click(),setTimeout(()=>{URL.revokeObjectURL(q.href),q.remove()},2e3),ma(Ae("hv_shotDone"),2500)}function Yg(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(be.settings.home||{}).story||{},i=ce(t.title||{}).trim(),s=aa(ce(t.body||{})),r=!!(i||ns(s).join("").trim());n.hidden=!r;let a=document.getElementById("hc-story");if(!r){a&&a.remove();return}a||(a=document.createElement("section"),a.id="hc-story",a.hidden=!0,e.appendChild(a)),a.setAttribute("aria-label",i||Ae("story"));let o=(t.images||[]).filter(Boolean);a.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${Te(Ae("close"))}">\xD7</button><h2>${Te(i||Ae("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${Te(t.link)}" target="_blank" rel="noopener">${Te(ce(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(o.length?`<div class="shots scroll-x">${o.map(l=>`<a href="${Te(Mt(l))}" target="_blank" rel="noopener"><img src="${Te(Mt(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",a.querySelector(".x").addEventListener("click",()=>Bd(!1))}var Wm=0;function Bd(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(Wm),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),Wm=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),Bd(!1))},!0);function dd(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);y.W=Math.max(1,Math.round(n.width)),y.H=Math.max(1,Math.round(n.height)),y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn&&Hd()}var fd=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:Xg,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>md()+(md()<y.delay?"*":"")}],qM=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function XM(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+fd.map(l=>`<label class="rw"><span class="lb" data-k="${l.p}"></span><input type="range" data-p="${l.p}" min="${l.min}" max="${l.max}" step="${l.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${da.map(l=>`<button type="button" data-c="${l}"><i class="c-${l}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Nc.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,a=l=>{clearTimeout(r),l?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(l)),s.classList.toggle("on",l),n.classList.toggle("hv-open",l),l&&Xn()};y.setOpen=a,s.addEventListener("click",()=>a(!i.classList.contains("open"))),n.addEventListener("pointerdown",l=>{i.classList.contains("open")&&!l.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&a(!1)}),i.querySelectorAll("input[data-p]").forEach(l=>{let c=fd.find(h=>h.p===l.dataset.p);l.addEventListener("input",()=>{c.set(+l.value),Xn()})});let o=l=>{if(l==="color")y.color=da[(da.indexOf(y.color)+1)%da.length];else if(l==="invert")y.mode=y.mode==="light"?"dark":"light";else if(l==="sound"){Zg(!y.sound);return}else if(l==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Jc():e0()}Xn()};i.querySelectorAll("[data-c]").forEach(l=>l.addEventListener("click",()=>{y.color=l.dataset.c,Xn()})),i.querySelectorAll(".tgl").forEach(l=>l.addEventListener("click",()=>o(l.dataset.a))),window.addEventListener("keydown",l=>{if(Vt||l.ctrlKey||l.metaKey||l.altKey||he&&he.open||l.target&&l.target.id==="hv-words")return;if(l.code==="Escape"&&i.classList.contains("open")){a(!1),s.focus({preventScroll:!0});return}if(l.code==="Escape"&&y.reelOn){us();return}let c={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[l.code];if(c){if(l.preventDefault(),c==="panel"){a(!i.classList.contains("open"));return}y.touched||(y.touched=!0,a(!0)),o(c)}}),Xn()}function Xn(){if(Zc(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Ae("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",Ae("hv_panel")),y.toggle.title=Ae("hv_panel")+" (K)",fd.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),qM(i),i.setAttribute("aria-label",Ae("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Ae("hv_color")+" "+Ae("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),jg()}function jg(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var YM=()=>y&&!y.reelOn?y.video:null;function Zg(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),Xn(),Ds()}var zd=()=>!!(he&&he.src&&/^(video|youtube|vimeo)$/.test(he.kind));function Jg(){y&&zd()?(Vt&&eh(),Kg()):HM()}function jM(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:Mt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,Ds()};["timeupdate","durationchange","play","pause"].forEach(a=>s.addEventListener(a,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Hd(),r()}),s.addEventListener("ended",()=>us()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:a=>{s.muted=a,a||(s.volume=1)},seek:a=>{s.currentTime=a}})}else{let s=document.createElement("iframe"),r=n==="youtube",a=r?Sa(e):wa(e),o=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${o}`:`https://player.vimeo.com/video/${a}?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0`,s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{r&&l({event:"listening",id:"hvreel",channel:"widget"})}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),Dc(),Ds()},pause:()=>{i.paused=!0,c(r?"pauseVideo":"pause"),Dc(),Ds()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,Ds()}})}return ZM(i,t)}function Dc(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&n.t>=(n.showAt||0);e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!Vt&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function ZM(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){us();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){us();return}}Ds(),Dc()}});function Hd(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=e/t>=1.2,s=n.ratio,r=e,a=e/s;(i?a<t:a>t)&&(a=t,r=t*s),Object.assign(n.el.style,{width:Math.ceil(r)+"px",height:Math.ceil(a)+"px",left:Math.round((e-r)/2)+"px",top:Math.round((t-a)/2)+"px"})}function Kg(n=!1){if(!y||!zd())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Jc();let e=he.kind+"|"+he.src;if(!y.rp||y.rp.key!==e){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=jM(he.kind,he.src),y.rp.key=e;let t=document.getElementById("home-band");t.insertBefore(y.rp.box,t.querySelector(".hv-shade")),y.sound&&he.kind==="video"&&y.rp.mute(!1),he.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,Dc()),In.classList.add("reel-on"),Hd(),Ds(),Xn(),n||Ma("showreel","Showreel",!0),!0}function us(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!Vt&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),In.classList.remove("reel-on"),Ds(),Xn())}var JM=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Xu=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),Qg=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function KM(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",Qg),e.querySelector(".snd").addEventListener("click",()=>Zg(!y.sound)),e.querySelector(".x").addEventListener("click",us);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function Ds(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,Zc(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=JM(e.paused),s.setAttribute("aria-label",Ae(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Xu(i)} / ${Xu(t)}`:Xu(i);let r=n.querySelector(".snd");r.innerHTML=$g(y.sound),r.setAttribute("aria-label",Ae(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",Ae("close"))}function QM(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${Te(Ae("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Nc.shot}<span>${Te(Ae("hv_camYes"))}</span></button><button type="button" class="no">${Te(Ae("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",Ae("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function e0(){if(ma(""),!y.camOK){if(!await QM()){Xn();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&us(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||ma(Ae("hv_camNote"),6e3)}catch{ma(Ae("hv_camDenied"),4e3)}Xn()}function Jc(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=YM();n&&!Vt&&n.play().catch(()=>{}),ma("")}y&&Xn()}function eS(){y&&(us(),Jc(),y.video&&y.video.pause())}function Yu(n,e,t,i=1,s=0,r=0,a=!1,o=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(o?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;a&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),a&&l.restore()}function t0(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return Yu(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(Yu(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,a=(Math.floor(s)%r+r)%r,o=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,Yu(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[a],o,1),o>.78&&r>1&&l(t[(a+1)%r],o-1,(o-.78)/.22),e.globalAlpha=1,!0}var tS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function nS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.max(Math.abs(a+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-o/y.fill))*255,c=(r*n+a)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function pd(n,e,t){let i=y.ctx,s=y.W,r=y.H,a=Math.round((s-n*t)/2),o=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!tS){i.globalAlpha=.45,i.drawImage(y.off,a,o,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,a,o,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(a,o),c.fillStyle=nS(t),c.fillRect(-a,-o,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,a,o,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":be.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Kc=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},md=()=>y.floor||y.interval>1e3/29?1:y.delay;function iS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>$m){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),Xm());return}if(y.reelOn||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=Kc.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,a=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,jg()),Vd()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,a)),y.intro&&n<y.intro){Xm();return}let o=y.intro?n-y.intro:-1;if(o>sS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<$m/3&&pd(f.cols,f.rows,f.cell):Ym(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(a/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!t0(i))return;let u=md();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),pd(c,h,l)):Ym(d,c,h,l,e,o),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(Xn,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(Xn,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var $m=420,sS=650,qm=(n,e)=>Math.pow(1-1/n,e*.06);function n0(n,e,t,i,s=-1,r=-1){let a=y.ctx,o=e*t,l=y.lum&&y.lum.length===o?y.lum:y.lum=new Float32Array(o),c=1,h=0;for(let P=0,R=0;P<o;P++,R+=4){let D=(.2126*n[R]+.7152*n[R+1]+.0722*n[R+2])/255;l[P]=D,D<c&&(c=D),D>h&&(h=D)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,E=y.color==="source",b=s>=0||r>=0,N=E?oS(a):a;N.fillStyle=E?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?be.settings.accent||"#ffcc00":"#f2f2f2",N.beginPath();for(let P=0,R=0;P<t;P++){let D=f+P*i+i/2;for(let z=0;z<e;z++,R++){let w=(l[R]-u)*d;w=w<0?0:w>1?1:w,p&&(w=1-w);let M=(g===1?w:Math.pow(w,g))*v;if(M<.6)continue;let F=m+z*i+i/2,ie=D;if(b){let de=M/v;if(s>=0?M*=qm(2.4+4.6*de,s):M*=1-qm(3+4*de,r),M<.6)continue}N.rect(F-M/2,ie-M/2,M,M)}}N.fill(),E&&(N.globalCompositeOperation="source-in",N.imageSmoothingEnabled=!1,N.drawImage(y.off,m,f,e*i,t*i),N.globalCompositeOperation="source-over",a.save(),a.setTransform(1,0,0,1,0,0),a.drawImage(N.canvas,0,0),a.restore())}function rS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
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
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let a=t.getAttribLocation(s,"a");t.enableVertexAttribArray(a),t.vertexAttribPointer(a,2,t.FLOAT,!1,0,0);let o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Vd=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function Xm(){if(!Vd())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var aS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function Ym(n,e,t,i,s=-1,r=-1){if(!Vd()){n0(n,e,t,i,s,r);return}let a=y.gl,o=a.gl,l=a.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,a.data!==n&&(a.data=n,o.texImage2D(o.TEXTURE_2D,0,o.RGBA,e,t,0,o.RGBA,o.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),o.viewport(0,0,a.c.width,a.c.height);let d=aS(y.color==="grey"?"#8d8d8d":y.color==="accent"?be.settings.accent||"#ffcc00":"#f2f2f2");o.uniform2f(l.grid,e,t),o.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),o.uniform2f(l.res,a.c.width,a.c.height),o.uniform1f(l.cell,i),o.uniform1f(l.maxs,i*y.fill),o.uniform1f(l.lo,y.lo),o.uniform1f(l.k,1/(y.hi-y.lo)),o.uniform1f(l.gam,y.gamma),o.uniform1f(l.dark,y.mode==="dark"?1:0),o.uniform1f(l.ex,s),o.uniform1f(l.intro,r),o.uniform1f(l.dpr,a.dpr),o.uniform1f(l.src,y.color==="source"?1:0),o.uniform3f(l.col,d[0],d[1],d[2]),o.uniform3f(l.bg,11/255,11/255,11/255),o.drawArrays(o.TRIANGLES,0,3)}function oS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var In=document.getElementById("home"),zs=document.getElementById("enter"),lS=zs.querySelector(".lbl"),dr=document.getElementById("ticker"),jm=dr.getContext("2d"),rs=null,mo=0,ga=1;function Gd(n){lS.textContent=n,zs.setAttribute("aria-label",n)}var Zm={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},cS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").toUpperCase(),t=Zm[e]||Zm["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function hS(n){let e=i=>i.published&&be.sections.some(s=>s.id===i.section&&s.visible),t=be.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+be.settings.founded||2012));case"auto:projects":return String(be.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(be.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(be.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(be.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var uS=()=>(be.settings.home&&be.settings.home.figures||[]).map(n=>({value:hS(n.value),label:ce(n.label)})).filter(n=>n.value&&n.label),dS=()=>uS().map(n=>`${n.value} ${n.label}`);function fS(){let n=ce(be.settings.home.sub||{}).trim(),e=n?[n]:[...dS(),...be.settings.home.ticker||[]].filter(Boolean),t=(e.length?e:[be.settings.name]).map(i=>String(i).toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";rs=pS(t)}function pS(n){let e=[];for(let t of n){let i=cS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let a=0;for(let o=0;o<7;o++)i[o]&1<<4-r&&(a|=1<<o);e.push(a)}e.push(0)}return{w:e.length,cols:e}}var ci={pitch:3.2,rows:7,h:30},oa=null,Jm="";function Km(n,e){let t=ga,i=Math.ceil(ci.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),a=i/2;if(e){let o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,n),o.addColorStop(.35,n),o.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=o,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(a,a,ci.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(a-ci.pitch*.1*t,a-ci.pitch*.1*t,ci.pitch*.12*t,0,Math.PI*2),r.fill()),s}function i0(){ga=Math.min(window.devicePixelRatio||1,2),dr.width=Math.round(window.innerWidth*ga),dr.height=Math.round(ci.h*ga),oa=null,la=null}var mc=0,la=null;function mS(n){let e=ga,t=ci.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[rs.w,i,e,n].join("|");if(la&&la.dots===rs&&la.key===s)return la;(!oa||Jm!==n)&&(Jm=n,oa={on:Km(n,!0),off:Km(n,!1)});let r=rs.w+i,a=document.createElement("canvas");a.width=Math.ceil(r*t*e),a.height=Math.round(ci.h*e);let o=a.getContext("2d"),l=(ci.h-ci.rows*t)/2,c=oa.on.width/2;o.fillStyle="#000",o.fillRect(0,0,a.width,a.height);for(let h=0;h<r;h++){let u=rs.cols[h%rs.w],d=(h*t+t/2)*e-c;for(let p=0;p<ci.rows;p++)o.drawImage(u>>p&1?oa.on:oa.off,d,(l+p*t+t/2)*e-c)}return la={canvas:a,dots:rs,key:s,shown:-1}}function gS(n){mc+=n*26,mc>=1&&(mo=(mo+Math.floor(mc))%rs.w,mc%=1);let e=mS(be.settings.accent||"#ffcc00");e.shown!==mo&&(e.shown=mo,jm.setTransform(1,0,0,1,0,0),jm.drawImage(e.canvas,mo*ci.pitch*ga,0,dr.width,dr.height,0,0,dr.width,dr.height))}var Vt=!1,Qc=!1,Do=!1,Co=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),gd=0,yd=0,ju=!1,yS=180;function Wd(n=Do){if(!(Vt||ju)){if(!(n&&y&&y.W&&!In.hidden&&!Kc.matches)){Qm();return}ju=!0,In.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&us(),vS(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{ju=!1,Qm()},yS)}}function vS(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function Qm(){if(!Vt){if(Vt=!0,clearTimeout(gd),Pd=performance.now(),!Ut&&Co())try{history.pushState(null,"",location.pathname+location.search+"#"+(be.sections.find(n=>n.id===be.settings.startSection&&n.visible)||Pt[0].def).id)}catch{}bS(),SM(),mr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{In.classList.add("out"),gd=setTimeout(()=>{In.hidden=!0,eS()},1250)})),bi.classList.add("on"),setTimeout(TM,1500),Gs.hidden=!1,_a.classList.remove("hidden"),dn.focus({preventScroll:!0})}}function eh(n=!0){if(Vt&&(Si(),Rc(),ld(),zc(),No(null),Od(),Vt=!1,Do=!1,clearTimeout(gd),yd=performance.now()+1300,zs.classList.remove("wait"),Gd(ce(be.settings.home.enter)||Ae("enter")),s0=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),In.classList.remove("leaving"),In.hidden=!1,In.offsetWidth,In.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!Ut))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!Ut){if(ks.open){ks.pushed=!1,Bs();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(ks.pushed=!1,Co())eh(!1);else if(!Vt&&Qc)Wd();else if(Vt&&Vs){let n=Pt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&Sn&&Io(n)}}});bi.addEventListener("click",n=>{n.target.closest(".wm")&&Vt&&eh()});bi.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&Vt&&(n.preventDefault(),eh())});zs.addEventListener("click",()=>{Do=!0,Qc?Wd():(Gd(Ae("loading")),zs.classList.add("wait"))});var s0=0,gc=0,eg=0,xo=null,r0=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function $d(){if(Vt||Do||performance.now()-s0<900||he&&he.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||zs.click()}In.addEventListener("wheel",n=>{if(Vt||r0(n.target))return;let e=performance.now();e-eg>350&&(gc=0),eg=e,n.deltaY>0&&(gc+=n.deltaY*(n.deltaMode?30:1),gc>40&&(gc=0,$d()))},{passive:!0});In.addEventListener("touchstart",n=>{xo=n.touches.length===1&&!r0(n.target)?n.touches[0].clientY:null},{passive:!0});In.addEventListener("touchmove",n=>{xo!==null&&n.touches.length===1&&xo-n.touches[0].clientY>46&&(xo=null,$d())},{passive:!0});In.addEventListener("touchend",()=>{xo=null},{passive:!0});window.addEventListener("keydown",n=>{if(Vt||n.ctrlKey||n.metaKey||n.altKey||he&&he.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),Qg();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),$d()}});var vd=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function _S(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return Ut&&Ut.tag&&(e=Ut.tag),vd(e||n)}function xS(n,e){let t=n.tags||[],i=t.find(s=>vd(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>vd(r)===e));return i?i.id:""}function bS(){try{Hs.compile(Z1,Bn,os)}catch{}$c();let n=Ut&&Ut.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Pt.findIndex(a=>a.def.id===e);i<0&&(i=Math.max(0,Pt.findIndex(a=>a.def.id===be.settings.startSection)));let s=_S(t||(e&&i<0?e:""));if(s){let a=Pt.findIndex(o=>o.def.id===e)>=0?[i]:[i,...Pt.keys()];for(let o of a){let l=xS(Pt[o].def,s);if(l){i=o,Pt[o].def.defaultTag=l;break}}}hs=oe.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=fs();H.cameraY=ba(),yt.x=cs()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=cs()*Math.cos(H.degreeCamera)+r.p.z,Pn.x=r.p.x,Pn.y=Gc(),Pn.z=r.p.z,Vs=!0,Io(i,0),(Ht<=700||Wt<=520)&&mr()}var tg=performance.now(),ng=NaN,ig=0,_d=0,MS=(n=700)=>{_d=Math.max(_d,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>MS(),{passive:!0}));function SS(){let n=Bn.position,e=Bn.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Bn.fov*7.3,i=1;return os.traverseVisible(s=>{i+=1.13;let r=s.position,a=s.rotation,o=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+a.x*3.1+a.y*3.7+a.z*4.3+o.x*5.3+o.y*5.9+o.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function a0(n){let e=Math.min(.25,Math.max(0,(n-tg)/1e3));if(tg=n,as+=e,Sc=e*W1,!Vt&&rs&&gS(e),y&&!In.hidden&&iS(n),Vs&&(Vt||n<yd)){X1(),_M(),xM(),MM(),Pe&&Pe.update(),FM(),Qe.step(),wM();let t=_i.length||n<_d||n<yd||ki||zn||$n||n-ig>2e3,i=SS();(t||i!==ng)&&(Hs.render(os,Bn),ig=n,ng=i)}requestAnimationFrame(a0)}function Zu(n){console.error(n);let e=document.getElementById("load-error");e.textContent=Ae("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function wS(){Ut||!/[?&]preview\b/.test(location.search)||window.parent===window||(Ut=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,a])=>{try{s.files[r]=URL.createObjectURL(a)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:sg},"*")}catch{}}))}(async function(){try{await wS(),Ut?be=cr(structuredClone(Ut.content)):(be=await yc.load(),yc.prepare&&await yc.prepare(be))}catch(a){Zu(a);return}Yn=Uc(),xg();{let a=Md();a!==null&&(Yn=a)}Sd();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=be.settings.langs&&be.settings.langs.length?be.settings.langs:oi,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}if(vi=t.includes(s)?s:t.includes(e)?e:i||be.settings.defaultLang||t[0],Pt=be.sections.filter(a=>a.visible).map(a=>({def:a})),!Pt.length){Zu(new Error("aucune section visible"));return}if(!Ut)try{let a=new URLSearchParams(location.search).get("p"),o=a&&be.posts.find(l=>l.id===a&&l.published!==!1&&Pt.some(c=>c.def.id===l.section));o&&(Mc=o.id,history.replaceState(null,"",location.pathname+location.search+"#"+o.section))}catch{}RM(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&rg(!1),kg(),Xc(),EM(),GM(),Cg(),$c(),i0(),requestAnimationFrame(a0),hr=Pt.map((a,o)=>new td(a.def,o)),Pt.forEach((a,o)=>{a.object=hr[o]}),Pt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let r=new sc(dg);try{if((await Promise.allSettled(hr.map(o=>o.load(r)))).forEach((o,l)=>{o.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+hr[l].def.id+" \xBB :",o.reason)}),hr.forEach((o,l)=>o.place(l)),await Promise.race([Promise.all(_g).then(ds),new Promise(o=>setTimeout(o,3e3))]),Qc=!0,(Do||!Co()||Ut&&Ut.start)&&Wd(),Mc){let o=Mc,l=performance.now(),c=setInterval(()=>{(Sn||performance.now()-l>8e3)&&(clearInterval(c),Sn&&jc(o))},120)}}catch(a){Zu(a)}})();window.__hc={P:H,STYLE:oe,cam:yt,camera:Bn,renderer:Hs,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return Sn},get homeGone(){return Vt},get content(){return be},get postsView(){return Pe},getToSectionView:Io,openThatPost:To,closePost:Bs,goToPost:jc,setLang:Ld,enter:()=>zs.click()};})();
