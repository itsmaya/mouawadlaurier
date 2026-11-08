/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Uu="160";var O0=0,pf=1,k0=2;var nm=1,B0=2,Yi=3,Xn=0,pn=1,Gn=2;var bs=0,Jr=1,mf=2,gf=3,yf=4,F0=5,tr=100,z0=101,H0=102,vf=103,_f=104,V0=200,G0=201,W0=202,$0=203,tu=204,nu=205,q0=206,X0=207,Y0=208,j0=209,Z0=210,J0=211,K0=212,Q0=213,ey=214,ty=0,ny=1,iy=2,Tl=3,sy=4,ry=5,ay=6,oy=7,cc=0,ly=1,cy=2,Ms=0,hy=1,uy=2,dy=3,fy=4,py=5,my=6,xf="attached",gy="detached",im=300,ea=301,ta=302,iu=303,su=304,hc=306,ws=1e3,Ln=1001,ru=1002,vn=1003,bf=1004;var xh=1005;var Hn=1006,yy=1007;var Es=1008;var Ss=1009,vy=1010,_y=1011,Ou=1012,sm=1013,xs=1014,Zi=1015,Qa=1016,rm=1017,am=1018,sr=1020,xy=1021,ai=1023,by=1024,My=1025,rr=1026,na=1027,Sy=1028,om=1029,wy=1030,lm=1031,cm=1033,bh=33776,Mh=33777,Sh=33778,wh=33779,Mf=35840,Sf=35841,wf=35842,Ef=35843,hm=36196,Tf=37492,Af=37496,Cf=37808,Rf=37809,Lf=37810,Pf=37811,If=37812,Nf=37813,Df=37814,Uf=37815,Of=37816,kf=37817,Bf=37818,Ff=37819,zf=37820,Hf=37821,Eh=36492,Vf=36494,Gf=36495,Ey=36283,Wf=36284,$f=36285,qf=36286;var Al=2300,Cl=2301,Th=2302,Xf=2400,Yf=2401,jf=2402,Ty=2500;var um=3e3,ar=3001,Ay=3200,Cy=3201,ku=0,Ry=1,oi="",Yt="srgb",Ki="srgb-linear",Bu="display-p3",uc="display-p3-linear",Rl="linear",Ft="srgb",Ll="rec709",Pl="p3";var Rr=7680;var Zf=519,Ly=512,Py=513,Iy=514,dm=515,Ny=516,Dy=517,Uy=518,Oy=519,au=35044;var Jf="300 es",ou=1035,Ji=2e3,Il=2001,Ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=1234567,ja=Math.PI/180,ia=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function Rn(n,e,t){return Math.max(e,Math.min(t,n))}function Fu(n,e){return(n%e+e)%e}function ky(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function By(n,e,t){return n!==e?(t-n)/(e-n):0}function Za(n,e,t){return(1-t)*n+t*e}function Fy(n,e,t,i){return Za(n,e,1-Math.exp(-t*i))}function zy(n,e=1){return e-Math.abs(Fu(n,e*2)-e)}function Hy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vy(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Gy(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Wy(n,e){return n+Math.random()*(e-n)}function $y(n){return n*(.5-Math.random())}function qy(n){n!==void 0&&(Kf=n);let e=Kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(n){return n*ja}function Yy(n){return n*ia}function lu(n){return(n&n-1)===0&&n!==0}function jy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zy(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Rs={DEG2RAD:ja,RAD2DEG:ia,generateUUID:vi,clamp:Rn,euclideanModulo:Fu,mapLinear:ky,inverseLerp:By,lerp:Za,damp:Fy,pingpong:zy,smoothstep:Hy,smootherstep:Vy,randInt:Gy,randFloat:Wy,randFloatSpread:$y,seededRandom:qy,degToRad:Xy,radToDeg:Yy,isPowerOfTwo:lu,ceilPowerOfTwo:jy,floorPowerOfTwo:Nl,setQuaternionFromProperEuler:Zy,normalize:Lt,denormalize:Ei},et=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],E=s[1],b=s[4],D=s[7],P=s[2],R=s[5],N=s[8];return r[0]=o*v+a*E+l*P,r[3]=o*m+a*b+l*R,r[6]=o*f+a*D+l*N,r[1]=c*v+h*E+u*P,r[4]=c*m+h*b+u*R,r[7]=c*f+h*D+u*N,r[2]=d*v+p*E+g*P,r[5]=d*m+p*b+g*R,r[8]=d*f+p*D+g*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new mt;function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jy(){let n=eo("canvas");return n.style.display="block",n}var Qf={};function Ja(n){n in Qf||(Qf[n]=!0,console.warn(n))}var ep=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tp=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[Ki]:{transfer:Rl,primaries:Ll,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:Ft,primaries:Ll,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uc]:{transfer:Rl,primaries:Pl,toReference:n=>n.applyMatrix3(tp),fromReference:n=>n.applyMatrix3(ep)},[Bu]:{transfer:Ft,primaries:Pl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tp),fromReference:n=>n.applyMatrix3(ep).convertLinearToSRGB()}},Ky=new Set([Ki,uc]),Pt={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ky.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Jo[e].toReference,s=Jo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Jo[n].primaries},getTransfer:function(n){return n===oi?Rl:Jo[n].transfer}};function Kr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ch(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Lr,Dl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Lr===void 0&&(Lr=eo("canvas")),Lr.width=e.width,Lr.height=e.height;let i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kr(t[i]/255)*255):t[i]=Kr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qy=0,Ul=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rh(s[o].image)):r.push(Rh(s[o]))}else r=Rh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Rh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ev=0,Yn=class n extends Ts{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Hn,o=Es,a=ai,l=Ss,c=n.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=vi(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ar?Yt:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==im)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Yt?ar:um}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ar?Yt:oi}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=im;Yn.DEFAULT_ANISOTROPY=1;var bt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,D=(p+1)/2,P=(f+1)/2,R=(h+d)/4,N=(u+v)/4,z=(g+m)/4;return b>D&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=N/i):D>P?D<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),i=R/s,r=z/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=N/r,s=z/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-v)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cu=class extends Ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ar?Yt:oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ol=class extends Yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hu=class extends Yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*v,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),R=Math.atan2(P,f*E);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let D=a*E;if(l=l*m+d*D,c=c*m+p*D,h=h*m+g*D,u=u*m+v*D,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lh=new U,np=new Ti,_n=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ko.copy(i.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Qo.subVectors(this.max,Ha),Pr.subVectors(e.a,Ha),Ir.subVectors(e.b,Ha),Nr.subVectors(e.c,Ha),ms.subVectors(Ir,Pr),gs.subVectors(Nr,Ir),Zs.subVectors(Pr,Nr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Zs.z,Zs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Zs.z,0,-Zs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Zs.y,Zs.x,0];return!Ph(t,Pr,Ir,Nr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,Pr,Ir,Nr,Qo))?!1:(el.crossVectors(ms,gs),t=[el.x,el.y,el.z],Ph(t,Pr,Ir,Nr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vi=[new U,new U,new U,new U,new U,new U,new U,new U],mi=new U,Ko=new _n,Pr=new U,Ir=new U,Nr=new U,ms=new U,gs=new U,Zs=new U,Ha=new U,Qo=new U,el=new U,Js=new U;function Ph(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Js.fromArray(n,r);let a=s.x*Math.abs(Js.x)+s.y*Math.abs(Js.y)+s.z*Math.abs(Js.z),l=e.dot(Js),c=t.dot(Js),h=i.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tv=new _n,Va=new U,Ih=new U,li=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);let t=Va.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Va,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(Ih)),this.expandByPoint(Va.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new U,Nh=new U,tl=new U,ys=new U,Dh=new U,nl=new U,Uh=new U,sa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Nh.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Nh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(tl),a=ys.dot(this.direction),l=-ys.dot(tl),c=ys.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nh).addScaledVector(tl,d),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,r){Dh.subVectors(t,e),nl.subVectors(i,e),Uh.crossVectors(Dh,nl);let o=this.direction.dot(Uh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,e);let l=a*this.direction.dot(nl.crossVectors(ys,nl));if(l<0)return null;let c=a*this.direction.dot(Dh.cross(ys));if(c<0||l+c>o)return null;let h=-a*ys.dot(Uh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nv,e,iv)}lookAt(e,t,i){let s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vs.crossVectors(i,Kn),vs.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vs.crossVectors(i,Kn)),vs.normalize(),il.crossVectors(Kn,vs),s[0]=vs.x,s[4]=il.x,s[8]=Kn.x,s[1]=vs.y,s[5]=il.y,s[9]=Kn.y,s[2]=vs.z,s[6]=il.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],E=i[3],b=i[7],D=i[11],P=i[15],R=s[0],N=s[4],z=s[8],S=s[12],M=s[1],B=s[5],ie=s[9],de=s[13],O=s[2],G=s[6],F=s[10],ne=s[14],q=s[3],$=s[7],ee=s[11],j=s[15];return r[0]=o*R+a*M+l*O+c*q,r[4]=o*N+a*B+l*G+c*$,r[8]=o*z+a*ie+l*F+c*ee,r[12]=o*S+a*de+l*ne+c*j,r[1]=h*R+u*M+d*O+p*q,r[5]=h*N+u*B+d*G+p*$,r[9]=h*z+u*ie+d*F+p*ee,r[13]=h*S+u*de+d*ne+p*j,r[2]=g*R+v*M+m*O+f*q,r[6]=g*N+v*B+m*G+f*$,r[10]=g*z+v*ie+m*F+f*ee,r[14]=g*S+v*de+m*ne+f*j,r[3]=E*R+b*M+D*O+P*q,r[7]=E*N+b*B+D*G+P*$,r[11]=E*z+b*ie+D*F+P*ee,r[15]=E*S+b*de+D*ne+P*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],E=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,D=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,P=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,R=t*E+i*b+s*D+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/R;return e[0]=E*N,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*N,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*N,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*N,e[4]=b*N,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*N,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*N,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*N,e[8]=D*N,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*N,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*N,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*N,e[12]=P*N,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*N,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*N,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,E=l*c,b=l*h,D=l*u,P=i.x,R=i.y,N=i.z;return s[0]=(1-(v+f))*P,s[1]=(p+D)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-D)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+b)*N,s[9]=(m-E)*N,s[10]=(1-(d+v))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Dr.set(s[0],s[1],s[2]).length(),o=Dr.set(s[4],s[5],s[6]).length(),a=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gi.copy(this);let c=1/r,h=1/o,u=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ji){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===Ji)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Il)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ji){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,v;if(a===Ji)g=(o+r)*u,v=-2*u;else if(a===Il)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Dr=new U,gi=new ct,nv=new U(0,0,0),iv=new U(1,1,1),vs=new U,il=new U,Kn=new U,ip=new ct,sp=new Ti,kl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kl.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sv=0,rp=new U,Ur=new Ti,Wi=new ct,sl=new U,Ga=new U,rv=new U,av=new Ti,ap=new U(1,0,0),op=new U(0,1,0),lp=new U(0,0,1),ov={type:"added"},lv={type:"removed"},jt=class n extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new kl,i=new Ti,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new mt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sl.copy(e):sl.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ga,sl,this.up):Wi.lookAt(sl,Ga,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ov)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};jt.DEFAULT_UP=new U(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new U,$i=new U,Oh=new U,qi=new U,Or=new U,kr=new U,cp=new U,kh=new U,Bh=new U,Fh=new U,rl=!1,ir=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),$i.subVectors(i,t),Oh.subVectors(e,t);let o=yi.dot(yi),a=yi.dot($i),l=yi.dot(Oh),c=$i.dot($i),h=$i.dot(Oh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,i,s,r,o,a,l){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),$i.subVectors(e,t),yi.cross($i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),yi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Or.subVectors(s,i),kr.subVectors(r,i),kh.subVectors(e,i);let l=Or.dot(kh),c=kr.dot(kh);if(l<=0&&c<=0)return t.copy(i);Bh.subVectors(e,s);let h=Or.dot(Bh),u=kr.dot(Bh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Or,o);Fh.subVectors(e,r);let p=Or.dot(Fh),g=kr.dot(Fh);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(kr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return cp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(cp,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Or,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},al={h:0,s:0,l:0};function zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var lt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Pt.workingColorSpace){if(e=Fu(e,1),t=Rn(t,0,1),i=Rn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=zh(o,r,e+1/3),this.g=zh(o,r,e),this.b=zh(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Ch(e.r),this.g=Ch(e.g),this.b=Ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Pt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Rn(Cn.r*255,0,255))*65536+Math.round(Rn(Cn.g*255,0,255))*256+Math.round(Rn(Cn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Cn.copy(this),t);let i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Yt){Pt.fromWorkingColorSpace(Cn.copy(this),e);let t=Cn.r,i=Cn.g,s=Cn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(al);let i=Za(_s.h,al.h,t),s=Za(_s.s,al.s,t),r=Za(_s.l,al.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new lt;lt.NAMES=pm;var cv=0,Ai=class extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Jr,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tu&&(i.blendSrc=this.blendSrc),this.blendDst!==nu&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new U,ol=new et,ei=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ol.fromBufferAttribute(this,t),ol.applyMatrix3(e),this.setXY(t,ol.x,ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==au&&(e.usage=this.usage),e}};var Bl=class extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fl=class extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ot=class extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}};var hv=0,ri=new ct,Hh=new jt,Br=new U,Qn=new _n,Wa=new _n,fn=new U,jn=class n extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?Fl:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new mt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Qn.min,Wa.min),Qn.expandByPoint(fn),fn.addVectors(Qn.max,Wa.max),Qn.expandByPoint(fn)):(Qn.expandByPoint(Wa.min),Qn.expandByPoint(Wa.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),fn.add(Br)),s=Math.max(s,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new U,h[M]=new U;let u=new U,d=new U,p=new U,g=new et,v=new et,m=new et,f=new U,E=new U;function b(M,B,ie){u.fromArray(s,M*3),d.fromArray(s,B*3),p.fromArray(s,ie*3),g.fromArray(o,M*2),v.fromArray(o,B*2),m.fromArray(o,ie*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let de=1/(v.x*m.y-m.x*v.y);isFinite(de)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(de),E.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(de),c[M].add(f),c[B].add(f),c[ie].add(f),h[M].add(E),h[B].add(E),h[ie].add(E))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let M=0,B=D.length;M<B;++M){let ie=D[M],de=ie.start,O=ie.count;for(let G=de,F=de+O;G<F;G+=3)b(i[G+0],i[G+1],i[G+2])}let P=new U,R=new U,N=new U,z=new U;function S(M){N.fromArray(r,M*3),z.copy(N);let B=c[M];P.copy(B),P.sub(N.multiplyScalar(N.dot(B))).normalize(),R.crossVectors(z,B);let de=R.dot(h[M])<0?-1:1;l[M*4]=P.x,l[M*4+1]=P.y,l[M*4+2]=P.z,l[M*4+3]=de}for(let M=0,B=D.length;M<B;++M){let ie=D[M],de=ie.start,O=ie.count;for(let G=de,F=de+O;G<F;G+=3)S(i[G+0]),S(i[G+1]),S(i[G+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ei(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hp=new ct,Ks=new sa,ll=new li,up=new U,Fr=new U,zr=new U,Hr=new U,Vh=new U,cl=new U,hl=new et,ul=new et,dl=new et,dp=new U,fp=new U,pp=new U,fl=new U,pl=new U,zt=class extends jt{constructor(e=new jn,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Vh.fromBufferAttribute(u,e),o?cl.addScaledVector(Vh,h):cl.addScaledVector(Vh.sub(t),h))}t.add(cl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(ll.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(ll,up)===null||Ks.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(hp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(hp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let D=E,P=b;D<P;D+=3){let R=a.getX(D),N=a.getX(D+1),z=a.getX(D+2);s=ml(this,f,e,i,c,h,u,R,N,z),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let E=a.getX(m),b=a.getX(m+1),D=a.getX(m+2);s=ml(this,o,e,i,c,h,u,E,b,D),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let D=E,P=b;D<P;D+=3){let R=D,N=D+1,z=D+2;s=ml(this,f,e,i,c,h,u,R,N,z),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let E=m,b=m+1,D=m+2;s=ml(this,o,e,i,c,h,u,E,b,D),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function uv(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Xn,a),l===null)return null;pl.copy(a),pl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:n}}function ml(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Fr),n.getVertexPosition(l,zr),n.getVertexPosition(c,Hr);let h=uv(n,e,t,i,Fr,zr,Hr,fl);if(h){s&&(hl.fromBufferAttribute(s,a),ul.fromBufferAttribute(s,l),dl.fromBufferAttribute(s,c),h.uv=ir.getInterpolation(fl,Fr,zr,Hr,hl,ul,dl,new et)),r&&(hl.fromBufferAttribute(r,a),ul.fromBufferAttribute(r,l),dl.fromBufferAttribute(r,c),h.uv1=ir.getInterpolation(fl,Fr,zr,Hr,hl,ul,dl,new et),h.uv2=h.uv1),o&&(dp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),pp.fromBufferAttribute(o,c),h.normal=ir.getInterpolation(fl,Fr,zr,Hr,dp,fp,pp,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};ir.getNormal(Fr,zr,Hr,u.normal),h.face=u}return h}var no=class n extends jn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function g(v,m,f,E,b,D,P,R,N,z,S){let M=D/N,B=P/z,ie=D/2,de=P/2,O=R/2,G=N+1,F=z+1,ne=0,q=0,$=new U;for(let ee=0;ee<F;ee++){let j=ee*B-de;for(let oe=0;oe<G;oe++){let V=oe*M-ie;$[v]=V*E,$[m]=j*b,$[f]=O,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(oe/N),u.push(1-ee/z),ne+=1}}for(let ee=0;ee<z;ee++)for(let j=0;j<N;j++){let oe=d+j+G*ee,V=d+j+G*(ee+1),Z=d+(j+1)+G*(ee+1),re=d+(j+1)+G*ee;l.push(oe,V,re),l.push(V,Z,re),q+=6}a.addGroup(p,q,S),p+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ra(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zn(n){let e={};for(let t=0;t<n.length;t++){let i=ra(n[t]);for(let s in i)e[s]=i[s]}return e}function dv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mm(n){return n.getRenderTarget()===null?n.outputColorSpace:Pt.workingColorSpace}var dc={clone:ra,merge:zn},fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_i=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fv,this.fragmentShader=pv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zl=class extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends zl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vr=-90,Gr=1,uu=class extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(Vr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new tn(Vr,Gr,e,t);r.layers=this.layers,this.add(r);let o=new tn(Vr,Gr,e,t);o.layers=this.layers,this.add(o);let a=new tn(Vr,Gr,e,t);a.layers=this.layers,this.add(a);let l=new tn(Vr,Gr,e,t);l.layers=this.layers,this.add(l);let c=new tn(Vr,Gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Hl=class extends Yn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ea,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},du=class extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ar?Yt:oi),this.texture=new Hl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new no(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:bs});r.uniforms.tEquirect.value=t;let o=new zt(s,r),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=Hn),new uu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Gh=new U,mv=new U,gv=new mt,ji=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Gh.subVectors(i,t).cross(mv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Gh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gv.getNormalMatrix(e),s=this.coplanarPoint(Gh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new li,gl=new U,io=class{constructor(e=new ji,t=new ji,i=new ji,s=new ji,r=new ji,o=new ji){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],E=s[13],b=s[14],D=s[15];if(i[0].setComponents(l-r,d-c,m-p,D-f).normalize(),i[1].setComponents(l+r,d+c,m+p,D+f).normalize(),i[2].setComponents(l+o,d+h,m+g,D+E).normalize(),i[3].setComponents(l-o,d-h,m-g,D-E).normalize(),i[4].setComponents(l-a,d-u,m-v,D-b).normalize(),t===Ji)i[5].setComponents(l+a,d+u,m+v,D+b).normalize();else if(t===Il)i[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(gl.x=s.normal.x>0?e.max.x:e.min.x,gl.y=s.normal.y>0?e.max.y:e.min.y,gl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yv(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var es=class n extends jn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let E=f*d-o;for(let b=0;b<c;b++){let D=b*u-r;g.push(D,-E,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){let b=E+c*f,D=E+c*(f+1),P=E+1+c*(f+1),R=E+1+c*f;p.push(b,D,R),p.push(D,P,R)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_v=`#ifdef USE_ALPHAHASH
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
#endif`,xv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tv=`#ifdef USE_BATCHING
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
#endif`,Av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
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
#endif`,Iv=`#ifdef USE_BUMPMAP
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hv=`#define PI 3.141592653589793
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
} // validated`,Vv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gv=`vec3 transformedNormal = objectNormal;
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
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`
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
}`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
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
}`,a_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h_=`uniform bool receiveShadow;
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
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,d_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g_=`PhysicalMaterial material;
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
#endif`,y_=`struct PhysicalMaterial {
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
}`,v_=`
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
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
#endif`,N_=`#ifdef USE_MORPHTARGETS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
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
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nx=`float getShadowMask() {
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,wx=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Nx=`#define LAMBERT
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
}`,Dx=`#define LAMBERT
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
}`,Ux=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Bx=`#define NORMAL
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
}`,Fx=`#define PHONG
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
}`,zx=`#define PHONG
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
}`,Hx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Gx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 color;
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
}`,jx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:vv,alphahash_pars_fragment:_v,alphamap_fragment:xv,alphamap_pars_fragment:bv,alphatest_fragment:Mv,alphatest_pars_fragment:Sv,aomap_fragment:wv,aomap_pars_fragment:Ev,batching_pars_vertex:Tv,batching_vertex:Av,begin_vertex:Cv,beginnormal_vertex:Rv,bsdfs:Lv,iridescence_fragment:Pv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:Dv,clipping_planes_pars_vertex:Uv,clipping_planes_vertex:Ov,color_fragment:kv,color_pars_fragment:Bv,color_pars_vertex:Fv,color_vertex:zv,common:Hv,cube_uv_reflection_fragment:Vv,defaultnormal_vertex:Gv,displacementmap_pars_vertex:Wv,displacementmap_vertex:$v,emissivemap_fragment:qv,emissivemap_pars_fragment:Xv,colorspace_fragment:Yv,colorspace_pars_fragment:jv,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Kv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:u_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_fragment:a_,lightmap_pars_fragment:o_,lights_lambert_fragment:l_,lights_lambert_pars_fragment:c_,lights_pars_begin:h_,lights_toon_fragment:d_,lights_toon_pars_fragment:f_,lights_phong_fragment:p_,lights_phong_pars_fragment:m_,lights_physical_fragment:g_,lights_physical_pars_fragment:y_,lights_fragment_begin:v_,lights_fragment_maps:__,lights_fragment_end:x_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:w_,map_fragment:E_,map_pars_fragment:T_,map_particle_fragment:A_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:L_,morphcolor_vertex:P_,morphnormal_vertex:I_,morphtarget_pars_vertex:N_,morphtarget_vertex:D_,normal_fragment_begin:U_,normal_fragment_maps:O_,normal_pars_fragment:k_,normal_pars_vertex:B_,normal_vertex:F_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:W_,opaque_fragment:$_,packing:q_,premultiplied_alpha_fragment:X_,project_vertex:Y_,dithering_fragment:j_,dithering_pars_fragment:Z_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:hx,transmission_fragment:ux,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:yx,background_frag:vx,backgroundCube_vert:_x,backgroundCube_frag:xx,cube_vert:bx,cube_frag:Mx,depth_vert:Sx,depth_frag:wx,distanceRGBA_vert:Ex,distanceRGBA_frag:Tx,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Rx,linedashed_frag:Lx,meshbasic_vert:Px,meshbasic_frag:Ix,meshlambert_vert:Nx,meshlambert_frag:Dx,meshmatcap_vert:Ux,meshmatcap_frag:Ox,meshnormal_vert:kx,meshnormal_frag:Bx,meshphong_vert:Fx,meshphong_frag:zx,meshphysical_vert:Hx,meshphysical_frag:Vx,meshtoon_vert:Gx,meshtoon_frag:Wx,points_vert:$x,points_frag:qx,shadow_vert:Xx,shadow_frag:Yx,sprite_vert:jx,sprite_frag:Zx},_e={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Vn={basic:{uniforms:zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:zn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:zn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:zn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:zn([_e.points,_e.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:zn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:zn([_e.common,_e.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:zn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:zn([_e.sprite,_e.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:zn([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:zn([_e.lights,_e.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vn.physical={uniforms:zn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var yl={r:0,b:0,g:0};function Jx(n,e,t,i,s,r,o){let a=new lt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let E=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),E=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===hc)?(h===void 0&&(h=new zt(new no(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ra(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Ft,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new zt(new es(2,2),new _i({name:"BackgroundMaterial",uniforms:ra(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(yl,mm(n)),i.buffers.color.setClear(yl.r,yl.g,yl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function Kx(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(O,G,F,ne,q){let $=!1;if(o){let ee=v(ne,F,G);c!==ee&&(c=ee,p(c.object)),$=f(O,ne,F,q),$&&E(O,ne,F,q)}else{let ee=G.wireframe===!0;(c.geometry!==ne.id||c.program!==F.id||c.wireframe!==ee)&&(c.geometry=ne.id,c.program=F.id,c.wireframe=ee,$=!0)}q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,z(O,G,F,ne),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,G,F){let ne=F.wireframe===!0,q=a[O.id];q===void 0&&(q={},a[O.id]=q);let $=q[G.id];$===void 0&&($={},q[G.id]=$);let ee=$[ne];return ee===void 0&&(ee=m(d()),$[ne]=ee),ee}function m(O){let G=[],F=[],ne=[];for(let q=0;q<s;q++)G[q]=0,F[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:F,attributeDivisors:ne,object:O,attributes:{},index:null}}function f(O,G,F,ne){let q=c.attributes,$=G.attributes,ee=0,j=F.getAttributes();for(let oe in j)if(j[oe].location>=0){let Z=q[oe],re=$[oe];if(re===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;ee++}return c.attributesNum!==ee||c.index!==ne}function E(O,G,F,ne){let q={},$=G.attributes,ee=0,j=F.getAttributes();for(let oe in j)if(j[oe].location>=0){let Z=$[oe];Z===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));let re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),q[oe]=re,ee++}c.attributes=q,c.attributesNum=ee,c.index=ne}function b(){let O=c.newAttributes;for(let G=0,F=O.length;G<F;G++)O[G]=0}function D(O){P(O,0)}function P(O,G){let F=c.newAttributes,ne=c.enabledAttributes,q=c.attributeDivisors;F[O]=1,ne[O]===0&&(n.enableVertexAttribArray(O),ne[O]=1),q[O]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),q[O]=G)}function R(){let O=c.newAttributes,G=c.enabledAttributes;for(let F=0,ne=G.length;F<ne;F++)G[F]!==O[F]&&(n.disableVertexAttribArray(F),G[F]=0)}function N(O,G,F,ne,q,$,ee){ee===!0?n.vertexAttribIPointer(O,G,F,q,$):n.vertexAttribPointer(O,G,F,ne,q,$)}function z(O,G,F,ne){if(i.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let q=ne.attributes,$=F.getAttributes(),ee=G.defaultAttributeValues;for(let j in $){let oe=$[j];if(oe.location>=0){let V=q[j];if(V===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let Z=V.normalized,re=V.itemSize,ae=t.get(V);if(ae===void 0)continue;let he=ae.buffer,Le=ae.type,Ve=ae.bytesPerElement,Ge=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||V.gpuType===sm);if(V.isInterleavedBufferAttribute){let gt=V.data,X=gt.stride,gn=V.offset;if(gt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<oe.locationSize;Xe++)P(oe.location+Xe,gt.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Xe=0;Xe<oe.locationSize;Xe++)D(oe.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Xe=0;Xe<oe.locationSize;Xe++)N(oe.location+Xe,re/oe.locationSize,Le,Z,X*Ve,(gn+re/oe.locationSize*Xe)*Ve,Ge)}else{if(V.isInstancedBufferAttribute){for(let gt=0;gt<oe.locationSize;gt++)P(oe.location+gt,V.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let gt=0;gt<oe.locationSize;gt++)D(oe.location+gt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let gt=0;gt<oe.locationSize;gt++)N(oe.location+gt,re/oe.locationSize,Le,Z,re*Ve,re/oe.locationSize*gt*Ve,Ge)}}else if(ee!==void 0){let Z=ee[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(oe.location,Z);break;case 3:n.vertexAttrib3fv(oe.location,Z);break;case 4:n.vertexAttrib4fv(oe.location,Z);break;default:n.vertexAttrib1fv(oe.location,Z)}}}}R()}function S(){ie();for(let O in a){let G=a[O];for(let F in G){let ne=G[F];for(let q in ne)g(ne[q].object),delete ne[q];delete G[F]}delete a[O]}}function M(O){if(a[O.id]===void 0)return;let G=a[O.id];for(let F in G){let ne=G[F];for(let q in ne)g(ne[q].object),delete ne[q];delete G[F]}delete a[O.id]}function B(O){for(let G in a){let F=a[G];if(F[O.id]===void 0)continue;let ne=F[O.id];for(let q in ne)g(ne[q].object),delete ne[q];delete F[O.id]}}function ie(){de(),h=!0,c!==l&&(c=l,p(c.object))}function de(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:de,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:D,disableUnusedAttributes:R}}function Qx(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eb(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,D=o||e.has("OES_texture_float"),P=b&&D,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:D,floatVertexTextures:P,maxSamples:R}}function tb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ji,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,b=E*4,D=f.clippingState||null;l.value=D,D=h(g,d,b,p);for(let P=0;P!==b;++P)D[P]=t[P];f.clippingState=D,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,D=p;b!==v;++b,D+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,D),m[D+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nb(n){let e=new WeakMap;function t(o,a){return a===iu?o.mapping=ea:a===su&&(o.mapping=ta),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===iu||a===su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new du(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var aa=class extends zl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jr=4,mp=[.125,.215,.35,.446,.526,.582],nr=20,Wh=new aa,gp=new lt,$h=null,qh=0,Xh=0,er=(1+Math.sqrt(5))/2,Wr=1/er,yp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,er,Wr),new U(0,er,-Wr),new U(Wr,0,er),new U(-Wr,0,er),new U(er,Wr,0),new U(-er,Wr,0)],Vl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$h=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($h,qh,Xh),e.scissorTest=!1,vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Qa,format:ai,colorSpace:Ki,depthBuffer:!1},s=vp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(r)),this._blurMaterial=sb(r,e,t)}return s}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Wh)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(gp),h.toneMapping=Ms,h.autoClear=!1;let p=new nn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new zt(new no,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(gp),v=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;vl(s,E*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ea||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yp[(s-1)%yp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*nr-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):nr;m>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let f=[],E=0;for(let N=0;N<nr;++N){let z=N/v,S=Math.exp(-z*z/2);f.push(S),N===0?E+=S:N<m&&(E+=2*S)}for(let N=0;N<f.length;N++)f[N]=f[N]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let D=this._sizeLods[s],P=3*D*(s>b-jr?s-b+jr:0),R=4*(this._cubeSize-D);vl(t,P,R,3*D,2*D),l.setRenderTarget(t),l.render(u,Wh)}};function ib(n){let e=[],t=[],i=[],s=n,r=n-jr+1+mp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-jr?l=mp[o-n+jr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*p),b=new Float32Array(m*g*p),D=new Float32Array(f*g*p);for(let R=0;R<p;R++){let N=R%3*2/3-1,z=R>2?0:-1,S=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];E.set(S,v*g*R),b.set(d,m*g*R);let M=[R,R,R,R,R,R];D.set(M,f*g*R)}let P=new jn;P.setAttribute("position",new ei(E,v)),P.setAttribute("uv",new ei(b,m)),P.setAttribute("faceIndex",new ei(D,f)),e.push(P),s>jr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vp(n,e,t){let i=new Qi(n,e,t);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sb(n,e,t){let i=new Float32Array(nr),s=new U(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zu(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function _p(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function xp(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function rb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===iu||l===su,h=l===ea||l===ta;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Vl(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Vl(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ab(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ob(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let E=p.array;v=p.version;for(let b=0,D=E.length;b<D;b+=3){let P=E[b+0],R=E[b+1],N=E[b+2];d.push(P,R,R,N,N,P)}}else if(g!==void 0){let E=g.array;v=g.version;for(let b=0,D=E.length/3-1;b<D;b+=3){let P=b+0,R=b+1,N=b+2;d.push(P,R,R,N,N,P)}}else return;let m=new(fm(d)?Fl:Bl)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lb(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let f=0;for(let E=0;E<v;E++)f+=g[E];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function cb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hb(n,e){return n[0]-e[0]}function ub(n,e){return Math.abs(e[1])-Math.abs(n[1])}function db(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let O=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();let E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],z=0;E===!0&&(z=1),b===!0&&(z=2),D===!0&&(z=3);let S=h.attributes.position.count*z,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let B=new Float32Array(S*M*4*g),ie=new Ol(B,S,M,g);ie.type=Zi,ie.needsUpdate=!0;let de=z*4;for(let G=0;G<g;G++){let F=P[G],ne=R[G],q=N[G],$=S*M*4*G;for(let ee=0;ee<F.count;ee++){let j=ee*de;E===!0&&(o.fromBufferAttribute(F,ee),B[$+j+0]=o.x,B[$+j+1]=o.y,B[$+j+2]=o.z,B[$+j+3]=0),b===!0&&(o.fromBufferAttribute(ne,ee),B[$+j+4]=o.x,B[$+j+5]=o.y,B[$+j+6]=o.z,B[$+j+7]=0),D===!0&&(o.fromBufferAttribute(q,ee),B[$+j+8]=o.x,B[$+j+9]=o.y,B[$+j+10]=o.z,B[$+j+11]=q.itemSize===4?o.w:1)}}v={count:g,texture:ie,size:new et(S,M)},r.set(h,v),h.addEventListener("dispose",O)}let m=0;for(let E=0;E<d.length;E++)m+=d[E];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let D=g[b];D[0]=b,D[1]=d[b]}g.sort(ub);for(let b=0;b<8;b++)b<p&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(hb);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let D=a[b],P=D[0],R=D[1];P!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+b)!==v[P]&&h.setAttribute("morphTarget"+b,v[P]),m&&h.getAttribute("morphNormal"+b)!==m[P]&&h.setAttribute("morphNormal"+b,m[P]),s[b]=R,f+=R):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",E),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function fb(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Gl=class extends Yn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:rr,h!==rr&&h!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===rr&&(i=xs),i===void 0&&h===na&&(i=sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ym=new Yn,vm=new Gl(1,1);vm.compareFunction=dm;var _m=new Ol,xm=new hu,bm=new Hl,bp=[],Mp=[],Sp=new Float32Array(16),wp=new Float32Array(9),Ep=new Float32Array(4);function fa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=bp[s];if(r===void 0&&(r=new Float32Array(s),bp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fc(n,e){let t=Mp[e];t===void 0&&(t=new Int32Array(e),Mp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function yb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function vb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ep.set(i),n.uniformMatrix2fv(this.addr,!1,Ep),cn(t,i)}}function _b(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;wp.set(i),n.uniformMatrix3fv(this.addr,!1,wp),cn(t,i)}}function xb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Sp.set(i),n.uniformMatrix4fv(this.addr,!1,Sp),cn(t,i)}}function bb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function Sb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function wb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function Eb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function Ab(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function Cb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function Rb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?vm:ym;t.setTexture2D(e||r,s)}function Lb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xm,s)}function Pb(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bm,s)}function Ib(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||_m,s)}function Nb(n){switch(n){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return yb;case 35674:return vb;case 35675:return _b;case 35676:return xb;case 5124:case 35670:return bb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return wb;case 5125:return Eb;case 36294:return Tb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}function Db(n,e){n.uniform1fv(this.addr,e)}function Ub(n,e){let t=fa(e,this.size,2);n.uniform2fv(this.addr,t)}function Ob(n,e){let t=fa(e,this.size,3);n.uniform3fv(this.addr,t)}function kb(n,e){let t=fa(e,this.size,4);n.uniform4fv(this.addr,t)}function Bb(n,e){let t=fa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fb(n,e){let t=fa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zb(n,e){let t=fa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hb(n,e){n.uniform1iv(this.addr,e)}function Vb(n,e){n.uniform2iv(this.addr,e)}function Gb(n,e){n.uniform3iv(this.addr,e)}function Wb(n,e){n.uniform4iv(this.addr,e)}function $b(n,e){n.uniform1uiv(this.addr,e)}function qb(n,e){n.uniform2uiv(this.addr,e)}function Xb(n,e){n.uniform3uiv(this.addr,e)}function Yb(n,e){n.uniform4uiv(this.addr,e)}function jb(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ym,r[o])}function Zb(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xm,r[o])}function Jb(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bm,r[o])}function Kb(n,e,t){let i=this.cache,s=e.length,r=fc(t,s);ln(i,r)||(n.uniform1iv(this.addr,r),cn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_m,r[o])}function Qb(n){switch(n){case 5126:return Db;case 35664:return Ub;case 35665:return Ob;case 35666:return kb;case 35674:return Bb;case 35675:return Fb;case 35676:return zb;case 5124:case 35670:return Hb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return $b;case 36294:return qb;case 36295:return Xb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return Kb}}var fu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}},pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}},mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function Tp(n,e){n.seq.push(e),n.map[e.id]=e}function e1(n,e,t){let i=n.name,s=i.length;for(Yh.lastIndex=0;;){let r=Yh.exec(i),o=Yh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tp(t,c===void 0?new fu(a,n,e):new pu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new mu(a),Tp(t,u)),t=u}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);e1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var t1=37297,n1=0;function i1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function s1(n){let e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(n),i;switch(e===t?i="":e===Pl&&t===Ll?i="LinearDisplayP3ToLinearSRGB":e===Ll&&t===Pl&&(i="LinearSRGBToLinearDisplayP3"),n){case Ki:case uc:return[i,"LinearTransferOETF"];case Yt:case Bu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+i1(n.getShaderSource(e),o)}else return s}function r1(n,e){let t=s1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function a1(n,e){let t;switch(e){case hy:t="Linear";break;case uy:t="Reinhard";break;case dy:t="OptimizedCineon";break;case fy:t="ACESFilmic";break;case my:t="AgX";break;case py:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function o1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function l1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zr).join(`
`)}function c1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function h1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zr(n){return n!==""}function Rp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(n){return n.replace(u1,f1)}var d1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function f1(n,e){let t=ft[e];if(t===void 0){let i=d1.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gu(t)}var p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(n){return n.replace(p1,m1)}function m1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function g1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===B0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function y1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function _1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case cy:e="ENVMAP_BLENDING_ADD";break}return e}function x1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function b1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=g1(t),c=y1(t),h=v1(t),u=_1(t),d=x1(t),p=t.isWebGL2?"":o1(t),g=l1(t),v=c1(r),m=s.createProgram(),f,E,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zr).join(`
`),E.length>0&&(E+=`
`)):(f=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),E=[p,Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ms?"#define TONE_MAPPING":"",t.toneMapping!==Ms?ft.tonemapping_pars_fragment:"",t.toneMapping!==Ms?a1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,r1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),o=gu(o),o=Rp(o,t),o=Lp(o,t),a=gu(a),a=Rp(a,t),a=Lp(a,t),o=Pp(o),a=Pp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let D=b+f+o,P=b+E+a,R=Ap(s,s.VERTEX_SHADER,D),N=Ap(s,s.FRAGMENT_SHADER,P);s.attachShader(m,R),s.attachShader(m,N),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(ie){if(n.debug.checkShaderErrors){let de=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(N).trim(),F=!0,ne=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,R,N);else{let q=Cp(s,R,"vertex"),$=Cp(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+de+`
`+q+`
`+$)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(O===""||G==="")&&(ne=!1);ne&&(ie.diagnostics={runnable:F,programLog:de,vertexShader:{log:O,prefix:f},fragmentShader:{log:G,prefix:E}})}s.deleteShader(R),s.deleteShader(N),S=new Qr(s,m),M=h1(s,m)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,t1)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=N,this}var M1=0,yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vu(e),t.set(e,i)),i}},vu=class{constructor(e){this.id=M1++,this.code=e,this.usedTimes=0}};function S1(n,e,t,i,s,r,o){let a=new to,l=new yu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,M,B,ie,de){let O=ie.fog,G=de.geometry,F=S.isMeshStandardMaterial?ie.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),q=ne&&ne.mapping===hc?ne.image.height:null,$=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=ee!==void 0?ee.length:0,oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let V,Z,re,ae;if($){let un=Vn[$];V=un.vertexShader,Z=un.fragmentShader}else V=S.vertexShader,Z=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);let he=n.getRenderTarget(),Le=de.isInstancedMesh===!0,Ve=de.isBatchedMesh===!0,Ge=!!S.map,gt=!!S.matcap,X=!!ne,gn=!!S.aoMap,Xe=!!S.lightMap,it=!!S.bumpMap,Oe=!!S.normalMap,Dt=!!S.displacementMap,ht=!!S.emissiveMap,I=!!S.metalnessMap,A=!!S.roughnessMap,J=S.anisotropy>0,ge=S.clearcoat>0,pe=S.iridescence>0,ye=S.sheen>0,Fe=S.transmission>0,Ee=J&&!!S.anisotropyMap,Ne=ge&&!!S.clearcoatMap,je=ge&&!!S.clearcoatNormalMap,ut=ge&&!!S.clearcoatRoughnessMap,me=pe&&!!S.iridescenceMap,wt=pe&&!!S.iridescenceThicknessMap,pt=ye&&!!S.sheenColorMap,Qe=ye&&!!S.sheenRoughnessMap,We=!!S.specularMap,De=!!S.specularColorMap,at=!!S.specularIntensityMap,Mt=Fe&&!!S.transmissionMap,kt=Fe&&!!S.thicknessMap,dt=!!S.gradientMap,xe=!!S.alphaMap,k=S.alphaTest>0,Se=!!S.alphaHash,we=!!S.extensions,Ke=!!G.attributes.uv1,Ye=!!G.attributes.uv2,Tt=!!G.attributes.uv3,Ct=Ms;return S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ct=n.toneMapping),{isWebGL2:h,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:Z,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ve,instancing:Le,instancingColor:Le&&de.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ki,map:Ge,matcap:gt,envMap:X,envMapMode:X&&ne.mapping,envMapCubeUVHeight:q,aoMap:gn,lightMap:Xe,bumpMap:it,normalMap:Oe,displacementMap:d&&Dt,emissiveMap:ht,normalMapObjectSpace:Oe&&S.normalMapType===Ry,normalMapTangentSpace:Oe&&S.normalMapType===ku,metalnessMap:I,roughnessMap:A,anisotropy:J,anisotropyMap:Ee,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:ut,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:wt,sheen:ye,sheenColorMap:pt,sheenRoughnessMap:Qe,specularMap:We,specularColorMap:De,specularIntensityMap:at,transmission:Fe,transmissionMap:Mt,thicknessMap:kt,gradientMap:dt,opaque:S.transparent===!1&&S.blending===Jr,alphaMap:xe,alphaTest:k,alphaHash:Se,combine:S.combine,mapUv:Ge&&v(S.map.channel),aoMapUv:gn&&v(S.aoMap.channel),lightMapUv:Xe&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:Oe&&v(S.normalMap.channel),displacementMapUv:Dt&&v(S.displacementMap.channel),emissiveMapUv:ht&&v(S.emissiveMap.channel),metalnessMapUv:I&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:Ee&&v(S.anisotropyMap.channel),clearcoatMapUv:Ne&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(S.sheenRoughnessMap.channel),specularMapUv:We&&v(S.specularMap.channel),specularColorMapUv:De&&v(S.specularColorMap.channel),specularIntensityMapUv:at&&v(S.specularIntensityMap.channel),transmissionMapUv:Mt&&v(S.transmissionMap.channel),thicknessMapUv:kt&&v(S.thicknessMap.channel),alphaMapUv:xe&&v(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Oe||J),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ye,vertexUv3s:Tt,pointsUvs:de.isPoints===!0&&!!G.attributes.uv&&(Ge||xe),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:de.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ct,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Pt.getTransfer(S.map.colorSpace)===Ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gn,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:we&&S.extensions.derivatives===!0,extensionFragDepth:we&&S.extensions.fragDepth===!0,extensionDrawBuffers:we&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let B in S.defines)M.push(B),M.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(E(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function D(S){let M=g[S.type],B;if(M){let ie=Vn[M];B=dc.clone(ie.uniforms)}else B=S.uniforms;return B}function P(S,M){let B;for(let ie=0,de=c.length;ie<de;ie++){let O=c[ie];if(O.cacheKey===M){B=O,++B.usedTimes;break}}return B===void 0&&(B=new b1(n,M,S,r),c.push(B)),B}function R(S){if(--S.usedTimes===0){let M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function N(S){l.remove(S)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:D,acquireProgram:P,releaseProgram:R,releaseShaderCache:N,programs:c,dispose:z}}function w1(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function E1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||E1),i.length>1&&i.sort(d||Np),s.length>1&&s.sort(d||Np)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function T1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Dp,n.set(i,[o])):s>=r.length?(o=new Dp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new lt};break;case"SpotLight":t={position:new U,direction:new U,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function C1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var R1=0;function L1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P1(n,e){let t=new A1,i=C1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new ct,a=new ct;function l(h,u){let d=0,p=0,g=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let v=0,m=0,f=0,E=0,b=0,D=0,P=0,R=0,N=0,z=0,S=0;h.sort(L1);let M=u===!0?Math.PI:1;for(let ie=0,de=h.length;ie<de;ie++){let O=h[ie],G=O.color,F=O.intensity,ne=O.distance,q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=G.r*F*M,p+=G.g*F*M,g+=G.b*F*M;else if(O.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(O.sh.coefficients[$],F);S++}else if(O.isDirectionalLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){let ee=O.shadow,j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.directionalShadow[v]=j,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=O.shadow.matrix,D++}s.directional[v]=$,v++}else if(O.isSpotLight){let $=t.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(G).multiplyScalar(F*M),$.distance=ne,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,s.spot[f]=$;let ee=O.shadow;if(O.map&&(s.spotLightMap[N]=O.map,N++,ee.updateMatrices(O),O.castShadow&&z++),s.spotLightMatrix[f]=ee.matrix,O.castShadow){let j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,s.spotShadow[f]=j,s.spotShadowMap[f]=q,R++}f++}else if(O.isRectAreaLight){let $=t.get(O);$.color.copy(G).multiplyScalar(F),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),s.rectArea[E]=$,E++}else if(O.isPointLight){let $=t.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*M),$.distance=O.distance,$.decay=O.decay,O.castShadow){let ee=O.shadow,j=i.get(O);j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,s.pointShadow[m]=j,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=O.shadow.matrix,P++}s.point[m]=$,m++}else if(O.isHemisphereLight){let $=t.get(O);$.skyColor.copy(O.color).multiplyScalar(F*M),$.groundColor.copy(O.groundColor).multiplyScalar(F*M),s.hemi[b]=$,b++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==E||B.hemiLength!==b||B.numDirectionalShadows!==D||B.numPointShadows!==P||B.numSpotShadows!==R||B.numSpotMaps!==N||B.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+N-z,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=f,B.rectAreaLength=E,B.hemiLength=b,B.numDirectionalShadows=D,B.numPointShadows=P,B.numSpotShadows=R,B.numSpotMaps=N,B.numLightProbes=S,s.version=R1++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let E=0,b=h.length;E<b;E++){let D=h[E];if(D.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(D.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(D.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(D.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(D.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(f),p++}else if(D.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Up(n,e){let t=new P1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I1(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Up(n,e),t.set(r,[l])):o>=a.length?(l=new Up(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var _u=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xu=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
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
}`;function U1(n,e,t){let i=new io,s=new et,r=new et,o=new bt,a=new _u({depthPacking:Cy}),l=new xu,c={},h=t.maxTextureSize,u={[Xn]:pn,[pn]:Xn,[Gn]:Gn},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:N1,fragmentShader:D1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new jn;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new zt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nm;let f=this.type;this.render=function(R,N,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(bs),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);let de=f!==Yi&&this.type===Yi,O=f===Yi&&this.type!==Yi;for(let G=0,F=R.length;G<F;G++){let ne=R[G],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let $=q.getFrameExtents();if(s.multiply($),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,q.mapSize.y=r.y)),q.map===null||de===!0||O===!0){let j=this.type!==Yi?{minFilter:vn,magFilter:vn}:{};q.map!==null&&q.map.dispose(),q.map=new Qi(s.x,s.y,j),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let ee=q.getViewportCount();for(let j=0;j<ee;j++){let oe=q.getViewport(j);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),ie.viewport(o),q.updateMatrices(ne,j),i=q.getFrustum(),D(N,z,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Yi&&E(q,z),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,B)};function E(R,N){let z=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,z,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,z,p,v,null)}function b(R,N,z,S){let M=null,B=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)M=B;else if(M=z.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ie=M.uuid,de=N.uuid,O=c[ie];O===void 0&&(O={},c[ie]=O);let G=O[de];G===void 0&&(G=M.clone(),O[de]=G,N.addEventListener("dispose",P)),M=G}if(M.visible=N.visible,M.wireframe=N.wireframe,S===Yi?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:u[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let ie=n.properties.get(M);ie.light=z}return M}function D(R,N,z,S,M){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Yi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);let de=e.update(R),O=R.material;if(Array.isArray(O)){let G=de.groups;for(let F=0,ne=G.length;F<ne;F++){let q=G[F],$=O[q.materialIndex];if($&&$.visible){let ee=b(R,$,S,M);R.onBeforeShadow(n,R,N,z,de,ee,q),n.renderBufferDirect(z,null,de,ee,R,q),R.onAfterShadow(n,R,N,z,de,ee,q)}}}else if(O.visible){let G=b(R,O,S,M);R.onBeforeShadow(n,R,N,z,de,G,null),n.renderBufferDirect(z,null,de,G,R,null),R.onAfterShadow(n,R,N,z,de,G,null)}}let ie=R.children;for(let de=0,O=ie.length;de<O;de++)D(ie[de],N,z,S,M)}function P(R){R.target.removeEventListener("dispose",P);for(let z in c){let S=c[z],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function O1(n,e,t){let i=t.isWebGL2;function s(){let k=!1,Se=new bt,we=null,Ke=new bt(0,0,0,0);return{setMask:function(Ye){we!==Ye&&!k&&(n.colorMask(Ye,Ye,Ye,Ye),we=Ye)},setLocked:function(Ye){k=Ye},setClear:function(Ye,Tt,Ct,Et,un){un===!0&&(Ye*=Et,Tt*=Et,Ct*=Et),Se.set(Ye,Tt,Ct,Et),Ke.equals(Se)===!1&&(n.clearColor(Ye,Tt,Ct,Et),Ke.copy(Se))},reset:function(){k=!1,we=null,Ke.set(-1,0,0,0)}}}function r(){let k=!1,Se=null,we=null,Ke=null;return{setTest:function(Ye){Ye?Ve(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(Ye){Se!==Ye&&!k&&(n.depthMask(Ye),Se=Ye)},setFunc:function(Ye){if(we!==Ye){switch(Ye){case ty:n.depthFunc(n.NEVER);break;case ny:n.depthFunc(n.ALWAYS);break;case iy:n.depthFunc(n.LESS);break;case Tl:n.depthFunc(n.LEQUAL);break;case sy:n.depthFunc(n.EQUAL);break;case ry:n.depthFunc(n.GEQUAL);break;case ay:n.depthFunc(n.GREATER);break;case oy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Ye}},setLocked:function(Ye){k=Ye},setClear:function(Ye){Ke!==Ye&&(n.clearDepth(Ye),Ke=Ye)},reset:function(){k=!1,Se=null,we=null,Ke=null}}}function o(){let k=!1,Se=null,we=null,Ke=null,Ye=null,Tt=null,Ct=null,Et=null,un=null;return{setTest:function(Rt){k||(Rt?Ve(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Rt){Se!==Rt&&!k&&(n.stencilMask(Rt),Se=Rt)},setFunc:function(Rt,yn,ii){(we!==Rt||Ke!==yn||Ye!==ii)&&(n.stencilFunc(Rt,yn,ii),we=Rt,Ke=yn,Ye=ii)},setOp:function(Rt,yn,ii){(Tt!==Rt||Ct!==yn||Et!==ii)&&(n.stencilOp(Rt,yn,ii),Tt=Rt,Ct=yn,Et=ii)},setLocked:function(Rt){k=Rt},setClear:function(Rt){un!==Rt&&(n.clearStencil(Rt),un=Rt)},reset:function(){k=!1,Se=null,we=null,Ke=null,Ye=null,Tt=null,Ct=null,Et=null,un=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,E=null,b=null,D=null,P=null,R=null,N=null,z=null,S=new lt(0,0,0),M=0,B=!1,ie=null,de=null,O=null,G=null,F=null,ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),q=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),q=$>=2);let j=null,oe={},V=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),re=new bt().fromArray(V),ae=new bt().fromArray(Z);function he(k,Se,we,Ke){let Ye=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(k,Tt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<we;Ct++)i&&(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Ye):n.texImage2D(Se+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ye);return Tt}let Le={};Le[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ve(n.DEPTH_TEST),l.setFunc(Tl),ht(!1),I(pf),Ve(n.CULL_FACE),Oe(bs);function Ve(k){d[k]!==!0&&(n.enable(k),d[k]=!0)}function Ge(k){d[k]!==!1&&(n.disable(k),d[k]=!1)}function gt(k,Se){return p[k]!==Se?(n.bindFramebuffer(k,Se),p[k]=Se,i&&(k===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),k===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function X(k,Se){let we=v,Ke=!1;if(k)if(we=g.get(Se),we===void 0&&(we=[],g.set(Se,we)),k.isWebGLMultipleRenderTargets){let Ye=k.texture;if(we.length!==Ye.length||we[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Ct=Ye.length;Tt<Ct;Tt++)we[Tt]=n.COLOR_ATTACHMENT0+Tt;we.length=Ye.length,Ke=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ke=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function gn(k){return m!==k?(n.useProgram(k),m=k,!0):!1}let Xe={[tr]:n.FUNC_ADD,[z0]:n.FUNC_SUBTRACT,[H0]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[vf]=n.MIN,Xe[_f]=n.MAX;else{let k=e.get("EXT_blend_minmax");k!==null&&(Xe[vf]=k.MIN_EXT,Xe[_f]=k.MAX_EXT)}let it={[V0]:n.ZERO,[G0]:n.ONE,[W0]:n.SRC_COLOR,[tu]:n.SRC_ALPHA,[Z0]:n.SRC_ALPHA_SATURATE,[Y0]:n.DST_COLOR,[q0]:n.DST_ALPHA,[$0]:n.ONE_MINUS_SRC_COLOR,[nu]:n.ONE_MINUS_SRC_ALPHA,[j0]:n.ONE_MINUS_DST_COLOR,[X0]:n.ONE_MINUS_DST_ALPHA,[J0]:n.CONSTANT_COLOR,[K0]:n.ONE_MINUS_CONSTANT_COLOR,[Q0]:n.CONSTANT_ALPHA,[ey]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(k,Se,we,Ke,Ye,Tt,Ct,Et,un,Rt){if(k===bs){f===!0&&(Ge(n.BLEND),f=!1);return}if(f===!1&&(Ve(n.BLEND),f=!0),k!==F0){if(k!==E||Rt!==B){if((b!==tr||R!==tr)&&(n.blendEquation(n.FUNC_ADD),b=tr,R=tr),Rt)switch(k){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.ONE,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,P=null,N=null,z=null,S.set(0,0,0),M=0,E=k,B=Rt}return}Ye=Ye||Se,Tt=Tt||we,Ct=Ct||Ke,(Se!==b||Ye!==R)&&(n.blendEquationSeparate(Xe[Se],Xe[Ye]),b=Se,R=Ye),(we!==D||Ke!==P||Tt!==N||Ct!==z)&&(n.blendFuncSeparate(it[we],it[Ke],it[Tt],it[Ct]),D=we,P=Ke,N=Tt,z=Ct),(Et.equals(S)===!1||un!==M)&&(n.blendColor(Et.r,Et.g,Et.b,un),S.copy(Et),M=un),E=k,B=!1}function Dt(k,Se){k.side===Gn?Ge(n.CULL_FACE):Ve(n.CULL_FACE);let we=k.side===pn;Se&&(we=!we),ht(we),k.blending===Jr&&k.transparent===!1?Oe(bs):Oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);let Ke=k.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),J(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){ie!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),ie=k)}function I(k){k!==O0?(Ve(n.CULL_FACE),k!==de&&(k===pf?n.cullFace(n.BACK):k===k0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),de=k}function A(k){k!==O&&(q&&n.lineWidth(k),O=k)}function J(k,Se,we){k?(Ve(n.POLYGON_OFFSET_FILL),(G!==Se||F!==we)&&(n.polygonOffset(Se,we),G=Se,F=we)):Ge(n.POLYGON_OFFSET_FILL)}function ge(k){k?Ve(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function pe(k){k===void 0&&(k=n.TEXTURE0+ne-1),j!==k&&(n.activeTexture(k),j=k)}function ye(k,Se,we){we===void 0&&(j===null?we=n.TEXTURE0+ne-1:we=j);let Ke=oe[we];Ke===void 0&&(Ke={type:void 0,texture:void 0},oe[we]=Ke),(Ke.type!==k||Ke.texture!==Se)&&(j!==we&&(n.activeTexture(we),j=we),n.bindTexture(k,Se||Le[k]),Ke.type=k,Ke.texture=Se)}function Fe(){let k=oe[j];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(k){re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),re.copy(k))}function Mt(k){ae.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ae.copy(k))}function kt(k,Se){let we=u.get(Se);we===void 0&&(we=new WeakMap,u.set(Se,we));let Ke=we.get(k);Ke===void 0&&(Ke=n.getUniformBlockIndex(Se,k.name),we.set(k,Ke))}function dt(k,Se){let Ke=u.get(Se).get(k);h.get(Se)!==Ke&&(n.uniformBlockBinding(Se,Ke,k.__bindingPointIndex),h.set(Se,Ke))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,oe={},p={},g=new WeakMap,v=[],m=null,f=!1,E=null,b=null,D=null,P=null,R=null,N=null,z=null,S=new lt(0,0,0),M=0,B=!1,ie=null,de=null,O=null,G=null,F=null,re.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ve,disable:Ge,bindFramebuffer:gt,drawBuffers:X,useProgram:gn,setBlending:Oe,setMaterial:Dt,setFlipSided:ht,setCullFace:I,setLineWidth:A,setPolygonOffset:J,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:Fe,compressedTexImage2D:Ee,compressedTexImage3D:Ne,texImage2D:We,texImage3D:De,updateUBOMapping:kt,uniformBlockBinding:dt,texStorage2D:pt,texStorage3D:Qe,texSubImage2D:je,texSubImage3D:ut,compressedTexSubImage2D:me,compressedTexSubImage3D:wt,scissor:at,viewport:Mt,reset:xe}}function k1(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return p?new OffscreenCanvas(I,A):eo("canvas")}function v(I,A,J,ge){let pe=1;if((I.width>ge||I.height>ge)&&(pe=ge/Math.max(I.width,I.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ye=A?Nl:Math.floor,Fe=ye(pe*I.width),Ee=ye(pe*I.height);u===void 0&&(u=g(Fe,Ee));let Ne=J?g(Fe,Ee):u;return Ne.width=Fe,Ne.height=Ee,Ne.getContext("2d").drawImage(I,0,0,Fe,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Fe+"x"+Ee+")."),Ne}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function m(I){return lu(I.width)&&lu(I.height)}function f(I){return a?!1:I.wrapS!==Ln||I.wrapT!==Ln||I.minFilter!==vn&&I.minFilter!==Hn}function E(I,A){return I.generateMipmaps&&A&&I.minFilter!==vn&&I.minFilter!==Hn}function b(I){n.generateMipmap(I)}function D(I,A,J,ge,pe=!1){if(a===!1)return A;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ye=A;if(A===n.RED&&(J===n.FLOAT&&(ye=n.R32F),J===n.HALF_FLOAT&&(ye=n.R16F),J===n.UNSIGNED_BYTE&&(ye=n.R8)),A===n.RED_INTEGER&&(J===n.UNSIGNED_BYTE&&(ye=n.R8UI),J===n.UNSIGNED_SHORT&&(ye=n.R16UI),J===n.UNSIGNED_INT&&(ye=n.R32UI),J===n.BYTE&&(ye=n.R8I),J===n.SHORT&&(ye=n.R16I),J===n.INT&&(ye=n.R32I)),A===n.RG&&(J===n.FLOAT&&(ye=n.RG32F),J===n.HALF_FLOAT&&(ye=n.RG16F),J===n.UNSIGNED_BYTE&&(ye=n.RG8)),A===n.RGBA){let Fe=pe?Rl:Pt.getTransfer(ge);J===n.FLOAT&&(ye=n.RGBA32F),J===n.HALF_FLOAT&&(ye=n.RGBA16F),J===n.UNSIGNED_BYTE&&(ye=Fe===Ft?n.SRGB8_ALPHA8:n.RGBA8),J===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),J===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function P(I,A,J){return E(I,J)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==Hn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function R(I){return I===vn||I===bf||I===xh?n.NEAREST:n.LINEAR}function N(I){let A=I.target;A.removeEventListener("dispose",N),S(A),A.isVideoTexture&&h.delete(A)}function z(I){let A=I.target;A.removeEventListener("dispose",z),B(A)}function S(I){let A=i.get(I);if(A.__webglInit===void 0)return;let J=I.source,ge=d.get(J);if(ge){let pe=ge[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(I),Object.keys(ge).length===0&&d.delete(J)}i.remove(I)}function M(I){let A=i.get(I);n.deleteTexture(A.__webglTexture);let J=I.source,ge=d.get(J);delete ge[A.__cacheKey],o.memory.textures--}function B(I){let A=I.texture,J=i.get(I),ge=i.get(A);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(J.__webglFramebuffer[pe]))for(let ye=0;ye<J.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(J.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(J.__webglFramebuffer[pe]);J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer[pe])}else{if(Array.isArray(J.__webglFramebuffer))for(let pe=0;pe<J.__webglFramebuffer.length;pe++)n.deleteFramebuffer(J.__webglFramebuffer[pe]);else n.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&n.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&n.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let pe=0;pe<J.__webglColorRenderbuffer.length;pe++)J.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(J.__webglColorRenderbuffer[pe]);J.__webglDepthRenderbuffer&&n.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let pe=0,ye=A.length;pe<ye;pe++){let Fe=i.get(A[pe]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(I)}let ie=0;function de(){ie=0}function O(){let I=ie;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),ie+=1,I}function G(I){let A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function F(I,A){let J=i.get(I);if(I.isVideoTexture&&Dt(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){let ge=I.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(J,I,A);return}}t.bindTexture(n.TEXTURE_2D,J.__webglTexture,n.TEXTURE0+A)}function ne(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){re(J,I,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,J.__webglTexture,n.TEXTURE0+A)}function q(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){re(J,I,A);return}t.bindTexture(n.TEXTURE_3D,J.__webglTexture,n.TEXTURE0+A)}function $(I,A){let J=i.get(I);if(I.version>0&&J.__version!==I.version){ae(J,I,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture,n.TEXTURE0+A)}let ee={[ws]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[ru]:n.MIRRORED_REPEAT},j={[vn]:n.NEAREST,[bf]:n.NEAREST_MIPMAP_NEAREST,[xh]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[yy]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},oe={[Ly]:n.NEVER,[Oy]:n.ALWAYS,[Py]:n.LESS,[dm]:n.LEQUAL,[Iy]:n.EQUAL,[Uy]:n.GEQUAL,[Ny]:n.GREATER,[Dy]:n.NOTEQUAL};function V(I,A,J){if(J?(n.texParameteri(I,n.TEXTURE_WRAP_S,ee[A.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ee[A.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ee[A.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,j[A.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,j[A.minFilter])):(n.texParameteri(I,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(I,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Ln||A.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,n.TEXTURE_MAG_FILTER,R(A.magFilter)),n.texParameteri(I,n.TEXTURE_MIN_FILTER,R(A.minFilter)),A.minFilter!==vn&&A.minFilter!==Hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===vn||A.minFilter!==xh&&A.minFilter!==Es||A.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Qa&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(I,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(I,A){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",N));let ge=A.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=G(A);if(ye!==I.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,J=!0),pe[ye].usedTimes++;let Fe=pe[I.__cacheKey];Fe!==void 0&&(pe[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&M(A)),I.__cacheKey=ye,I.__webglTexture=pe[ye].texture}return J}function re(I,A,J){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=Z(I,A),ye=A.source;t.bindTexture(ge,I.__webglTexture,n.TEXTURE0+J);let Fe=i.get(ye);if(ye.version!==Fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+J);let Ee=Pt.getPrimaries(Pt.workingColorSpace),Ne=A.colorSpace===oi?null:Pt.getPrimaries(A.colorSpace),je=A.colorSpace===oi||Ee===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ut=f(A)&&m(A.image)===!1,me=v(A.image,ut,!1,s.maxTextureSize);me=ht(A,me);let wt=m(me)||a,pt=r.convert(A.format,A.colorSpace),Qe=r.convert(A.type),We=D(A.internalFormat,pt,Qe,A.colorSpace,A.isVideoTexture);V(ge,A,wt);let De,at=A.mipmaps,Mt=a&&A.isVideoTexture!==!0&&We!==hm,kt=Fe.__version===void 0||pe===!0,dt=P(A,me,wt);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,a?A.type===Zi?We=n.DEPTH_COMPONENT32F:A.type===xs?We=n.DEPTH_COMPONENT24:A.type===sr?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===rr&&We===n.DEPTH_COMPONENT&&A.type!==Ou&&A.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=xs,Qe=r.convert(A.type)),A.format===na&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=sr,Qe=r.convert(A.type))),kt&&(Mt?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,Qe,null));else if(A.isDataTexture)if(at.length>0&&wt){Mt&&kt&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,Qe,De.data):t.texImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,pt,Qe,De.data);A.generateMipmaps=!1}else Mt?(kt&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,pt,Qe,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,pt,Qe,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Mt&&kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,at[0].width,at[0].height,me.depth);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],A.format!==ai?pt!==null?Mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,me.depth,pt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,We,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,me.depth,pt,Qe,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,We,De.width,De.height,me.depth,0,pt,Qe,De.data)}else{Mt&&kt&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],A.format!==ai?pt!==null?Mt?t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,De.width,De.height,pt,Qe,De.data):t.texImage2D(n.TEXTURE_2D,xe,We,De.width,De.height,0,pt,Qe,De.data)}else if(A.isDataArrayTexture)Mt?(kt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,pt,Qe,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,pt,Qe,me.data);else if(A.isData3DTexture)Mt?(kt&&t.texStorage3D(n.TEXTURE_3D,dt,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,pt,Qe,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,pt,Qe,me.data);else if(A.isFramebufferTexture){if(kt)if(Mt)t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height);else{let xe=me.width,k=me.height;for(let Se=0;Se<dt;Se++)t.texImage2D(n.TEXTURE_2D,Se,We,xe,k,0,pt,Qe,null),xe>>=1,k>>=1}}else if(at.length>0&&wt){Mt&&kt&&t.texStorage2D(n.TEXTURE_2D,dt,We,at[0].width,at[0].height);for(let xe=0,k=at.length;xe<k;xe++)De=at[xe],Mt?t.texSubImage2D(n.TEXTURE_2D,xe,0,0,pt,Qe,De):t.texImage2D(n.TEXTURE_2D,xe,We,pt,Qe,De);A.generateMipmaps=!1}else Mt?(kt&&t.texStorage2D(n.TEXTURE_2D,dt,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Qe,me)):t.texImage2D(n.TEXTURE_2D,0,We,pt,Qe,me);E(A,wt)&&b(ge),Fe.__version=ye.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ae(I,A,J){if(A.image.length!==6)return;let ge=Z(I,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+J);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+J);let Fe=Pt.getPrimaries(Pt.workingColorSpace),Ee=A.colorSpace===oi?null:Pt.getPrimaries(A.colorSpace),Ne=A.colorSpace===oi||Fe===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,me=[];for(let xe=0;xe<6;xe++)!je&&!ut?me[xe]=v(A.image[xe],!1,!0,s.maxCubemapSize):me[xe]=ut?A.image[xe].image:A.image[xe],me[xe]=ht(A,me[xe]);let wt=me[0],pt=m(wt)||a,Qe=r.convert(A.format,A.colorSpace),We=r.convert(A.type),De=D(A.internalFormat,Qe,We,A.colorSpace),at=a&&A.isVideoTexture!==!0,Mt=ye.__version===void 0||ge===!0,kt=P(A,wt,pt);V(n.TEXTURE_CUBE_MAP,A,pt);let dt;if(je){at&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,kt,De,wt.width,wt.height);for(let xe=0;xe<6;xe++){dt=me[xe].mipmaps;for(let k=0;k<dt.length;k++){let Se=dt[k];A.format!==ai?Qe!==null?at?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,0,0,Se.width,Se.height,Qe,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,0,0,Se.width,Se.height,Qe,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k,De,Se.width,Se.height,0,Qe,We,Se.data)}}}else{dt=A.mipmaps,at&&Mt&&(dt.length>0&&kt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,kt,De,me[0].width,me[0].height));for(let xe=0;xe<6;xe++)if(ut){at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,me[xe].width,me[xe].height,Qe,We,me[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,me[xe].width,me[xe].height,0,Qe,We,me[xe].data);for(let k=0;k<dt.length;k++){let we=dt[k].image[xe].image;at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,0,0,we.width,we.height,Qe,We,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,De,we.width,we.height,0,Qe,We,we.data)}}else{at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Qe,We,me[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,De,Qe,We,me[xe]);for(let k=0;k<dt.length;k++){let Se=dt[k];at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,0,0,Qe,We,Se.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,k+1,De,Qe,We,Se.image[xe])}}}E(A,pt)&&b(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function he(I,A,J,ge,pe,ye){let Fe=r.convert(J.format,J.colorSpace),Ee=r.convert(J.type),Ne=D(J.internalFormat,Fe,Ee,J.colorSpace);if(!i.get(A).__hasExternalTextures){let ut=Math.max(1,A.width>>ye),me=Math.max(1,A.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,ut,me,A.depth,0,Fe,Ee,null):t.texImage2D(pe,ye,Ne,ut,me,0,Fe,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(J).__webglTexture,0,it(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(J).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(I,A,J){if(n.bindRenderbuffer(n.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let ge=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(J||Oe(A)){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Zi?ge=n.DEPTH_COMPONENT32F:pe.type===xs&&(ge=n.DEPTH_COMPONENT24));let ye=it(A);Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){let ge=it(A);J&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,I)}else{let ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],Fe=r.convert(ye.format,ye.colorSpace),Ee=r.convert(ye.type),Ne=D(ye.internalFormat,Fe,Ee,ye.colorSpace),je=it(A);J&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ve(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ge=i.get(A.depthTexture).__webglTexture,pe=it(A);if(A.depthTexture.format===rr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===na)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ge(I){let A=i.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ve(A.__webglFramebuffer,I)}else if(J){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=n.createRenderbuffer(),Le(A.__webglDepthbuffer[ge],I,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Le(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(I,A,J){let ge=i.get(I);A!==void 0&&he(ge.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),J!==void 0&&Ge(I)}function X(I){let A=I.texture,J=i.get(I),ge=i.get(A);I.addEventListener("dispose",z),I.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,o.memory.textures++);let pe=I.isWebGLCubeRenderTarget===!0,ye=I.isWebGLMultipleRenderTargets===!0,Fe=m(I)||a;if(pe){J.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ee]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)J.__webglFramebuffer[Ee][Ne]=n.createFramebuffer()}else J.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ee=0;Ee<A.mipmaps.length;Ee++)J.__webglFramebuffer[Ee]=n.createFramebuffer()}else J.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let Ee=I.texture;for(let Ne=0,je=Ee.length;Ne<je;Ne++){let ut=i.get(Ee[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&Oe(I)===!1){let Ee=ye?A:[A];J.__webglMultisampledFramebuffer=n.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ee.length;Ne++){let je=Ee[Ne];J.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);let ut=r.convert(je.format,je.colorSpace),me=r.convert(je.type),wt=D(je.internalFormat,ut,me,je.colorSpace,I.isXRRenderTarget===!0),pt=it(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,wt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),V(n.TEXTURE_CUBE_MAP,A,Fe);for(let Ee=0;Ee<6;Ee++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)he(J.__webglFramebuffer[Ee][Ne],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ne);else he(J.__webglFramebuffer[Ee],I,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);E(A,Fe)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Ee=I.texture;for(let Ne=0,je=Ee.length;Ne<je;Ne++){let ut=Ee[Ne],me=i.get(ut);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),V(n.TEXTURE_2D,ut,Fe),he(J.__webglFramebuffer,I,ut,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),E(ut,Fe)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?Ee=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,ge.__webglTexture),V(Ee,A,Fe),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)he(J.__webglFramebuffer[Ne],I,A,n.COLOR_ATTACHMENT0,Ee,Ne);else he(J.__webglFramebuffer,I,A,n.COLOR_ATTACHMENT0,Ee,0);E(A,Fe)&&b(Ee),t.unbindTexture()}I.depthBuffer&&Ge(I)}function gn(I){let A=m(I)||a,J=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ge=0,pe=J.length;ge<pe;ge++){let ye=J[ge];if(E(ye,A)){let Fe=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ye).__webglTexture;t.bindTexture(Fe,Ee),b(Fe),t.unbindTexture()}}}function Xe(I){if(a&&I.samples>0&&Oe(I)===!1){let A=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],J=I.width,ge=I.height,pe=n.COLOR_BUFFER_BIT,ye=[],Fe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(I),Ne=I.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<A.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let je=0;je<A.length;je++){ye.push(n.COLOR_ATTACHMENT0+je),I.depthBuffer&&ye.push(Fe);let ut=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(ut===!1&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[je]),ut===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),Ne){let me=i.get(A[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,J,ge,0,0,J,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[je]);let ut=i.get(A[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,ut,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function it(I){return Math.min(s.maxSamples,I.samples)}function Oe(I){let A=i.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(I){let A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function ht(I,A){let J=I.colorSpace,ge=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===ou||J!==Ki&&J!==oi&&(Pt.getTransfer(J)===Ft?a===!1?e.has("EXT_sRGB")===!0&&ge===ai?(I.format=ou,I.minFilter=Hn,I.generateMipmaps=!1):A=Dl.sRGBToLinear(A):(ge!==ai||pe!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=de,this.setTexture2D=F,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=gt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=gn,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function B1(n,e,t){let i=t.isWebGL2;function s(r,o=oi){let a,l=Pt.getTransfer(o);if(r===Ss)return n.UNSIGNED_BYTE;if(r===rm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===am)return n.UNSIGNED_SHORT_5_5_5_1;if(r===vy)return n.BYTE;if(r===_y)return n.SHORT;if(r===Ou)return n.UNSIGNED_SHORT;if(r===sm)return n.INT;if(r===xs)return n.UNSIGNED_INT;if(r===Zi)return n.FLOAT;if(r===Qa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===xy)return n.ALPHA;if(r===ai)return n.RGBA;if(r===by)return n.LUMINANCE;if(r===My)return n.LUMINANCE_ALPHA;if(r===rr)return n.DEPTH_COMPONENT;if(r===na)return n.DEPTH_STENCIL;if(r===ou)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sy)return n.RED;if(r===om)return n.RED_INTEGER;if(r===wy)return n.RG;if(r===lm)return n.RG_INTEGER;if(r===cm)return n.RGBA_INTEGER;if(r===bh||r===Mh||r===Sh||r===wh)if(l===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mf||r===Sf||r===wf||r===Ef)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Mf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tf||r===Af)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tf)return l===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Af)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Cf||r===Rf||r===Lf||r===Pf||r===If||r===Nf||r===Df||r===Uf||r===Of||r===kf||r===Bf||r===Ff||r===zf||r===Hf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Cf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===If)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Df)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Of)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eh||r===Vf||r===Gf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Eh)return l===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ey||r===Wf||r===$f||r===qf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Eh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$f)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var bu=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pn=class extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},F1={type:"move"},Ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mu=class extends Ts{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,E=[],b=[],D=new et,P=null,R=new tn;R.layers.enable(1),R.viewport=new bt;let N=new tn;N.layers.enable(2),N.viewport=new bt;let z=[R,N],S=new bu;S.layers.enable(1),S.layers.enable(2);let M=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=E[V];return Z===void 0&&(Z=new Ka,E[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=E[V];return Z===void 0&&(Z=new Ka,E[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=E[V];return Z===void 0&&(Z=new Ka,E[V]=Z),Z.getHandSpace()};function ie(V){let Z=b.indexOf(V.inputSource);if(Z===-1)return;let re=E[Z];re!==void 0&&(re.update(V.inputSource,V.frame,c||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function de(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",O);for(let V=0;V<E.length;V++){let Z=b[V];Z!==null&&(b[V]=null,E[V].disconnect(Z))}M=null,B=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",de),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Qi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Ss,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,re=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?na:rr,re=v.stencil?sr:xs);let he={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(he),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Qi(d.textureWidth,d.textureHeight,{format:ai,type:Ss,depthTexture:new Gl(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(V){for(let Z=0;Z<V.removed.length;Z++){let re=V.removed[Z],ae=b.indexOf(re);ae>=0&&(b[ae]=null,E[ae].disconnect(re))}for(let Z=0;Z<V.added.length;Z++){let re=V.added[Z],ae=b.indexOf(re);if(ae===-1){for(let Le=0;Le<E.length;Le++)if(Le>=b.length){b.push(re),ae=Le;break}else if(b[Le]===null){b[Le]=re,ae=Le;break}if(ae===-1)break}let he=E[ae];he&&he.connect(re)}}let G=new U,F=new U;function ne(V,Z,re){G.setFromMatrixPosition(Z.matrixWorld),F.setFromMatrixPosition(re.matrixWorld);let ae=G.distanceTo(F),he=Z.projectionMatrix.elements,Le=re.projectionMatrix.elements,Ve=he[14]/(he[10]-1),Ge=he[14]/(he[10]+1),gt=(he[9]+1)/he[5],X=(he[9]-1)/he[5],gn=(he[8]-1)/he[0],Xe=(Le[8]+1)/Le[0],it=Ve*gn,Oe=Ve*Xe,Dt=ae/(-gn+Xe),ht=Dt*-gn;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ht),V.translateZ(Dt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let I=Ve+Dt,A=Ge+Dt,J=it-ht,ge=Oe+(ae-ht),pe=gt*Ge/A*I,ye=X*Ge/A*I;V.projectionMatrix.makePerspective(J,ge,pe,ye,I,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;S.near=N.near=R.near=V.near,S.far=N.far=R.far=V.far,(M!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,B=S.far);let Z=V.parent,re=S.cameras;q(S,Z);for(let ae=0;ae<re.length;ae++)q(re[ae],Z);re.length===2?ne(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),$(V,S,Z)};function $(V,Z,re){re===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ia*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let ee=null;function j(V,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let re=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ae=!1;re.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let he=0;he<re.length;he++){let Le=re[he],Ve=null;if(p!==null)Ve=p.getViewport(Le);else{let gt=u.getViewSubImage(d,Le);Ve=gt.viewport,he===0&&(e.setRenderTargetTextures(f,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(f))}let Ge=z[he];Ge===void 0&&(Ge=new tn,Ge.layers.enable(he),Ge.viewport=new bt,z[he]=Ge),Ge.matrix.fromArray(Le.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Le.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),he===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Ge)}}for(let re=0;re<E.length;re++){let ae=b[re],he=E[re];ae!==null&&he!==void 0&&he.update(ae,Z,c||o)}ee&&ee(V,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}let oe=new gm;oe.setAnimationLoop(j),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}};function z1(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,mm(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,D){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,D)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function H1(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){let D=b.program;i.uniformBlockBinding(E,D)}function c(E,b){let D=s[E.id];D===void 0&&(g(E),D=h(E),s[E.id]=D,E.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(E,P);let R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function h(E){let b=u();E.__bindingPointIndex=b;let D=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,D),D}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=s[E.id],D=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,N=D.length;R<N;R++){let z=Array.isArray(D[R])?D[R]:[D[R]];for(let S=0,M=z.length;S<M;S++){let B=z[S];if(p(B,R,S,P)===!0){let ie=B.__offset,de=Array.isArray(B.value)?B.value:[B.value],O=0;for(let G=0;G<de.length;G++){let F=de[G],ne=v(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,ie+O,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,b,D,P){let R=E.value,N=b+"_"+D;if(P[N]===void 0)return typeof R=="number"||typeof R=="boolean"?P[N]=R:P[N]=R.clone(),!0;{let z=P[N];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return P[N]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(E){let b=E.uniforms,D=0,P=16;for(let N=0,z=b.length;N<z;N++){let S=Array.isArray(b[N])?b[N]:[b[N]];for(let M=0,B=S.length;M<B;M++){let ie=S[M],de=Array.isArray(ie.value)?ie.value:[ie.value];for(let O=0,G=de.length;O<G;O++){let F=de[O],ne=v(F),q=D%P;q!==0&&P-q<ne.boundary&&(D+=P-q),ie.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=D,D+=ne.storage}}}let R=D%P;return R>0&&(D+=P-R),E.__size=D,E.__cache={},this}function v(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let D=o.indexOf(b.__bindingPointIndex);o.splice(D,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var so=class{constructor(e={}){let{canvas:t=Jy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=Ms,this.toneMappingExposure=1;let b=this,D=!1,P=0,R=0,N=null,z=-1,S=null,M=new bt,B=new bt,ie=null,de=new lt(0),O=0,G=t.width,F=t.height,ne=1,q=null,$=null,ee=new bt(0,0,G,F),j=new bt(0,0,G,F),oe=!1,V=new io,Z=!1,re=!1,ae=null,he=new ct,Le=new et,Ve=new U,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return N===null?ne:1}let X=i;function gn(L,W){for(let K=0;K<L.length;K++){let te=L[K],Y=t.getContext(te,W);if(Y!==null)return Y}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",Se,!1),X===null){let W=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&W.shift(),X=gn(W,L),X===null)throw gn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Xe,it,Oe,Dt,ht,I,A,J,ge,pe,ye,Fe,Ee,Ne,je,ut,me,wt,pt,Qe,We,De,at,Mt;function kt(){Xe=new ab(X),it=new eb(X,Xe,e),Xe.init(it),De=new B1(X,Xe,it),Oe=new O1(X,Xe,it),Dt=new cb(X),ht=new w1,I=new k1(X,Xe,Oe,ht,it,De,Dt),A=new nb(b),J=new rb(b),ge=new yv(X,it),at=new Kx(X,Xe,ge,it),pe=new ob(X,ge,Dt,at),ye=new fb(X,pe,ge,Dt),pt=new db(X,it,I),ut=new tb(ht),Fe=new S1(b,A,J,Xe,it,at,ut),Ee=new z1(b,ht),Ne=new T1,je=new I1(Xe,it),wt=new Jx(b,A,J,Oe,ye,d,l),me=new U1(b,ye,it),Mt=new H1(X,Dt,it,Oe),Qe=new Qx(X,Xe,Dt,it),We=new lb(X,Xe,Dt,it),Dt.programs=Fe.programs,b.capabilities=it,b.extensions=Xe,b.properties=ht,b.renderLists=Ne,b.shadowMap=me,b.state=Oe,b.info=Dt}kt();let dt=new Mu(b,X);this.xr=dt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=Xe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Xe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(L){L!==void 0&&(ne=L,this.setSize(G,F,!1))},this.getSize=function(L){return L.set(G,F)},this.setSize=function(L,W,K=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=L,F=W,t.width=Math.floor(L*ne),t.height=Math.floor(W*ne),K===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(G*ne,F*ne).floor()},this.setDrawingBufferSize=function(L,W,K){G=L,F=W,ne=K,t.width=Math.floor(L*K),t.height=Math.floor(W*K),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,W,K,te){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,W,K,te),Oe.viewport(M.copy(ee).multiplyScalar(ne).floor())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,W,K,te){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,W,K,te),Oe.scissor(B.copy(j).multiplyScalar(ne).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){Oe.setScissorTest(oe=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){$=L},this.getClearColor=function(L){return L.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(L=!0,W=!0,K=!0){let te=0;if(L){let Y=!1;if(N!==null){let Ce=N.texture.format;Y=Ce===cm||Ce===lm||Ce===om}if(Y){let Ce=N.texture.type,Re=Ce===Ss||Ce===xs||Ce===Ou||Ce===sr||Ce===rm||Ce===am,ze=wt.getClearColor(),Ze=wt.getClearAlpha(),ot=ze.r,st=ze.g,rt=ze.b;Re?(p[0]=ot,p[1]=st,p[2]=rt,p[3]=Ze,X.clearBufferuiv(X.COLOR,0,p)):(g[0]=ot,g[1]=st,g[2]=rt,g[3]=Ze,X.clearBufferiv(X.COLOR,0,g))}else te|=X.COLOR_BUFFER_BIT}W&&(te|=X.DEPTH_BUFFER_BIT),K&&(te|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ne.dispose(),je.dispose(),ht.dispose(),A.dispose(),J.dispose(),ye.dispose(),at.dispose(),Mt.dispose(),Fe.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",un),dt.removeEventListener("sessionend",Rt),ae&&(ae.dispose(),ae=null),yn.stop()};function xe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let L=Dt.autoReset,W=me.enabled,K=me.autoUpdate,te=me.needsUpdate,Y=me.type;kt(),Dt.autoReset=L,me.enabled=W,me.autoUpdate=K,me.needsUpdate=te,me.type=Y}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){let W=L.target;W.removeEventListener("dispose",we),Ke(W)}function Ke(L){Ye(L),ht.remove(L)}function Ye(L){let W=ht.get(L).programs;W!==void 0&&(W.forEach(function(K){Fe.releaseProgram(K)}),L.isShaderMaterial&&Fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,K,te,Y,Ce){W===null&&(W=Ge);let Re=Y.isMesh&&Y.matrixWorld.determinant()<0,ze=gh(L,W,K,te,Y);Oe.setMaterial(te,Re);let Ze=K.index,ot=1;if(te.wireframe===!0){if(Ze=pe.getWireframeAttribute(K),Ze===void 0)return;ot=2}let st=K.drawRange,rt=K.attributes.position,$t=st.start*ot,Bn=(st.start+st.count)*ot;Ce!==null&&($t=Math.max($t,Ce.start*ot),Bn=Math.min(Bn,(Ce.start+Ce.count)*ot)),Ze!==null?($t=Math.max($t,0),Bn=Math.min(Bn,Ze.count)):rt!=null&&($t=Math.max($t,0),Bn=Math.min(Bn,rt.count));let Qt=Bn-$t;if(Qt<0||Qt===1/0)return;at.setup(Y,te,ze,K,Ze);let si,Ut=Qe;if(Ze!==null&&(si=ge.get(Ze),Ut=We,Ut.setIndex(si)),Y.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*gt()),Ut.setMode(X.LINES)):Ut.setMode(X.TRIANGLES);else if(Y.isLine){let nt=te.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*gt()),Y.isLineSegments?Ut.setMode(X.LINES):Y.isLineLoop?Ut.setMode(X.LINE_LOOP):Ut.setMode(X.LINE_STRIP)}else Y.isPoints?Ut.setMode(X.POINTS):Y.isSprite&&Ut.setMode(X.TRIANGLES);if(Y.isBatchedMesh)Ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ut.renderInstances($t,Qt,Y.count);else if(K.isInstancedBufferGeometry){let nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Oa=Math.min(K.instanceCount,nt);Ut.renderInstances($t,Qt,Oa)}else Ut.render($t,Qt)};function Tt(L,W,K){L.transparent===!0&&L.side===Gn&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,Ar(L,W,K),L.side=Xn,L.needsUpdate=!0,Ar(L,W,K),L.side=Gn):Ar(L,W,K)}this.compile=function(L,W,K=null){K===null&&(K=L),m=je.get(K),m.init(),E.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),L!==K&&L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(b._useLegacyLights);let te=new Set;return L.traverse(function(Y){let Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let Re=0;Re<Ce.length;Re++){let ze=Ce[Re];Tt(ze,K,Y),te.add(ze)}else Tt(Ce,K,Y),te.add(Ce)}),E.pop(),m=null,te},this.compileAsync=function(L,W,K=null){let te=this.compile(L,W,K);return new Promise(Y=>{function Ce(){if(te.forEach(function(Re){ht.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){Y(L);return}setTimeout(Ce,10)}Xe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ct=null;function Et(L){Ct&&Ct(L)}function un(){yn.stop()}function Rt(){yn.start()}let yn=new gm;yn.setAnimationLoop(Et),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(L){Ct=L,dt.setAnimationLoop(L),L===null?yn.stop():yn.start()},dt.addEventListener("sessionstart",un),dt.addEventListener("sessionend",Rt),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(W),W=dt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,W,N),m=je.get(L,E.length),m.init(),E.push(m),he.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(he),re=this.localClippingEnabled,Z=ut.init(this.clippingPlanes,re),v=Ne.get(L,f.length),v.init(),f.push(v),ii(L,W,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(q,$),this.info.render.frame++,Z===!0&&ut.beginShadows();let K=m.state.shadowsArray;if(me.render(K,L,W),Z===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),wt.render(v,L),m.setupLights(b._useLegacyLights),W.isArrayCamera){let te=W.cameras;for(let Y=0,Ce=te.length;Y<Ce;Y++){let Re=te[Y];$o(v,L,Re,Re.viewport)}}else $o(v,L,W);N!==null&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),L.isScene===!0&&L.onAfterRender(b,L,W),at.resetDefaultState(),z=-1,S=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ii(L,W,K,te){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){te&&Ve.setFromMatrixPosition(L.matrixWorld).applyMatrix4(he);let Re=ye.update(L),ze=L.material;ze.visible&&v.push(L,Re,ze,K,Ve.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||V.intersectsObject(L))){let Re=ye.update(L),ze=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ve.copy(L.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(L.matrixWorld).applyMatrix4(he)),Array.isArray(ze)){let Ze=Re.groups;for(let ot=0,st=Ze.length;ot<st;ot++){let rt=Ze[ot],$t=ze[rt.materialIndex];$t&&$t.visible&&v.push(L,Re,$t,K,Ve.z,rt)}}else ze.visible&&v.push(L,Re,ze,K,Ve.z,null)}}let Ce=L.children;for(let Re=0,ze=Ce.length;Re<ze;Re++)ii(Ce[Re],W,K,te)}function $o(L,W,K,te){let Y=L.opaque,Ce=L.transmissive,Re=L.transparent;m.setupLightsView(K),Z===!0&&ut.setGlobalState(b.clippingPlanes,K),Ce.length>0&&mh(Y,Ce,W,K),te&&Oe.viewport(M.copy(te)),Y.length>0&&Tr(Y,W,K),Ce.length>0&&Tr(Ce,W,K),Re.length>0&&Tr(Re,W,K),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function mh(L,W,K,te){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Ce=it.isWebGL2;ae===null&&(ae=new Qi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Qa:Ss,minFilter:Es,samples:Ce?4:0})),b.getDrawingBufferSize(Le),Ce?ae.setSize(Le.x,Le.y):ae.setSize(Nl(Le.x),Nl(Le.y));let Re=b.getRenderTarget();b.setRenderTarget(ae),b.getClearColor(de),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();let ze=b.toneMapping;b.toneMapping=Ms,Tr(L,K,te),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae);let Ze=!1;for(let ot=0,st=W.length;ot<st;ot++){let rt=W[ot],$t=rt.object,Bn=rt.geometry,Qt=rt.material,si=rt.group;if(Qt.side===Gn&&$t.layers.test(te.layers)){let Ut=Qt.side;Qt.side=pn,Qt.needsUpdate=!0,Da($t,K,te,Bn,Qt,si),Qt.side=Ut,Qt.needsUpdate=!0,Ze=!0}}Ze===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae)),b.setRenderTarget(Re),b.setClearColor(de,O),b.toneMapping=ze}function Tr(L,W,K){let te=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ce=L.length;Y<Ce;Y++){let Re=L[Y],ze=Re.object,Ze=Re.geometry,ot=te===null?Re.material:te,st=Re.group;ze.layers.test(K.layers)&&Da(ze,W,K,Ze,ot,st)}}function Da(L,W,K,te,Y,Ce){L.onBeforeRender(b,W,K,te,Y,Ce),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Y.onBeforeRender(b,W,K,te,L,Ce),Y.transparent===!0&&Y.side===Gn&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,b.renderBufferDirect(K,W,te,Y,L,Ce),Y.side=Xn,Y.needsUpdate=!0,b.renderBufferDirect(K,W,te,Y,L,Ce),Y.side=Gn):b.renderBufferDirect(K,W,te,Y,L,Ce),L.onAfterRender(b,W,K,te,Y,Ce)}function Ar(L,W,K){W.isScene!==!0&&(W=Ge);let te=ht.get(L),Y=m.state.lights,Ce=m.state.shadowsArray,Re=Y.state.version,ze=Fe.getParameters(L,Y.state,Ce,W,K),Ze=Fe.getProgramCacheKey(ze),ot=te.programs;te.environment=L.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(L.isMeshStandardMaterial?J:A).get(L.envMap||te.environment),ot===void 0&&(L.addEventListener("dispose",we),ot=new Map,te.programs=ot);let st=ot.get(Ze);if(st!==void 0){if(te.currentProgram===st&&te.lightsStateVersion===Re)return qo(L,ze),st}else ze.uniforms=Fe.getUniforms(L),L.onBuild(K,ze,b),L.onBeforeCompile(ze,b),st=Fe.acquireProgram(ze,Ze),ot.set(Ze,st),te.uniforms=ze.uniforms;let rt=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=ut.uniform),qo(L,ze),te.needsLights=vh(L),te.lightsStateVersion=Re,te.needsLights&&(rt.ambientLightColor.value=Y.state.ambient,rt.lightProbe.value=Y.state.probe,rt.directionalLights.value=Y.state.directional,rt.directionalLightShadows.value=Y.state.directionalShadow,rt.spotLights.value=Y.state.spot,rt.spotLightShadows.value=Y.state.spotShadow,rt.rectAreaLights.value=Y.state.rectArea,rt.ltc_1.value=Y.state.rectAreaLTC1,rt.ltc_2.value=Y.state.rectAreaLTC2,rt.pointLights.value=Y.state.point,rt.pointLightShadows.value=Y.state.pointShadow,rt.hemisphereLights.value=Y.state.hemi,rt.directionalShadowMap.value=Y.state.directionalShadowMap,rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,rt.spotShadowMap.value=Y.state.spotShadowMap,rt.spotLightMatrix.value=Y.state.spotLightMatrix,rt.spotLightMap.value=Y.state.spotLightMap,rt.pointShadowMap.value=Y.state.pointShadowMap,rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=st,te.uniformsList=null,st}function Ua(L){if(L.uniformsList===null){let W=L.currentProgram.getUniforms();L.uniformsList=Qr.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function qo(L,W){let K=ht.get(L);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function gh(L,W,K,te,Y){W.isScene!==!0&&(W=Ge),I.resetTextureUnits();let Ce=W.fog,Re=te.isMeshStandardMaterial?W.environment:null,ze=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ki,Ze=(te.isMeshStandardMaterial?J:A).get(te.envMap||Re),ot=te.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,st=!!K.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!K.morphAttributes.position,$t=!!K.morphAttributes.normal,Bn=!!K.morphAttributes.color,Qt=Ms;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Qt=b.toneMapping);let si=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ut=si!==void 0?si.length:0,nt=ht.get(te),Oa=m.state.lights;if(Z===!0&&(re===!0||L!==S)){let Tn=L===S&&te.id===z;ut.setState(te,L,Tn)}let Bt=!1;te.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Oa.state.version||nt.outputColorSpace!==ze||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||nt.envMap!==Ze||te.fog===!0&&nt.fog!==Ce||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==ut.numPlanes||nt.numIntersection!==ut.numIntersection)||nt.vertexAlphas!==ot||nt.vertexTangents!==st||nt.morphTargets!==rt||nt.morphNormals!==$t||nt.morphColors!==Bn||nt.toneMapping!==Qt||it.isWebGL2===!0&&nt.morphTargetsCount!==Ut)&&(Bt=!0):(Bt=!0,nt.__version=te.version);let zi=nt.currentProgram;Bt===!0&&(zi=Ar(te,W,Y));let ka=!1,js=!1,Ba=!1,dn=zi.getUniforms(),wi=nt.uniforms;if(Oe.useProgram(zi.program)&&(ka=!0,js=!0,Ba=!0),te.id!==z&&(z=te.id,js=!0),ka||S!==L){dn.setValue(X,"projectionMatrix",L.projectionMatrix),dn.setValue(X,"viewMatrix",L.matrixWorldInverse);let Tn=dn.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,Ve.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&dn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&dn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,js=!0,Ba=!0)}if(Y.isSkinnedMesh){dn.setOptional(X,Y,"bindMatrix"),dn.setOptional(X,Y,"bindMatrixInverse");let Tn=Y.skeleton;Tn&&(it.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),dn.setValue(X,"boneTexture",Tn.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(dn.setOptional(X,Y,"batchingTexture"),dn.setValue(X,"batchingTexture",Y._matricesTexture,I));let qt=K.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0&&it.isWebGL2===!0)&&pt.update(Y,K,zi),(js||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,dn.setValue(X,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(wi.envMap.value=Ze,wi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),js&&(dn.setValue(X,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&yh(wi,Ba),Ce&&te.fog===!0&&Ee.refreshFogUniforms(wi,Ce),Ee.refreshMaterialUniforms(wi,te,ne,F,ae),Qr.upload(X,Ua(nt),wi,I)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Qr.upload(X,Ua(nt),wi,I),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&dn.setValue(X,"center",Y.center),dn.setValue(X,"modelViewMatrix",Y.modelViewMatrix),dn.setValue(X,"normalMatrix",Y.normalMatrix),dn.setValue(X,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let Tn=te.uniformsGroups;for(let Fa=0,Xo=Tn.length;Fa<Xo;Fa++)if(it.isWebGL2){let za=Tn[Fa];Mt.update(za,zi),Mt.bind(za,zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zi}function yh(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function vh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(L,W,K){ht.get(L.texture).__webglTexture=W,ht.get(L.depthTexture).__webglTexture=K;let te=ht.get(L);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=K===void 0,te.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,W){let K=ht.get(L);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,K=0){N=L,P=W,R=K;let te=!0,Y=null,Ce=!1,Re=!1;if(L){let Ze=ht.get(L);Ze.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(X.FRAMEBUFFER,null),te=!1):Ze.__webglFramebuffer===void 0?I.setupRenderTarget(L):Ze.__hasExternalTextures&&I.rebindTextures(L,ht.get(L.texture).__webglTexture,ht.get(L.depthTexture).__webglTexture);let ot=L.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Re=!0);let st=ht.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[W])?Y=st[W][K]:Y=st[W],Ce=!0):it.isWebGL2&&L.samples>0&&I.useMultisampledRTT(L)===!1?Y=ht.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?Y=st[K]:Y=st,M.copy(L.viewport),B.copy(L.scissor),ie=L.scissorTest}else M.copy(ee).multiplyScalar(ne).floor(),B.copy(j).multiplyScalar(ne).floor(),ie=oe;if(Oe.bindFramebuffer(X.FRAMEBUFFER,Y)&&it.drawBuffers&&te&&Oe.drawBuffers(L,Y),Oe.viewport(M),Oe.scissor(B),Oe.setScissorTest(ie),Ce){let Ze=ht.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ze.__webglTexture,K)}else if(Re){let Ze=ht.get(L.texture),ot=W||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ze.__webglTexture,K||0,ot)}z=-1},this.readRenderTargetPixels=function(L,W,K,te,Y,Ce,Re){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=ht.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){Oe.bindFramebuffer(X.FRAMEBUFFER,ze);try{let Ze=L.texture,ot=Ze.format,st=Ze.type;if(ot!==ai&&De.convert(ot)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=st===Qa&&(Xe.has("EXT_color_buffer_half_float")||it.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(st!==Ss&&De.convert(st)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===Zi&&(it.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-te&&K>=0&&K<=L.height-Y&&X.readPixels(W,K,te,Y,De.convert(ot),De.convert(st),Ce)}finally{let Ze=N!==null?ht.get(N).__webglFramebuffer:null;Oe.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,W,K=0){let te=Math.pow(2,-K),Y=Math.floor(W.image.width*te),Ce=Math.floor(W.image.height*te);I.setTexture2D(W,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,L.x,L.y,Y,Ce),Oe.unbindTexture()},this.copyTextureToTexture=function(L,W,K,te=0){let Y=W.image.width,Ce=W.image.height,Re=De.convert(K.format),ze=De.convert(K.type);I.setTexture2D(K,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment),W.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,Y,Ce,Re,ze,W.image.data):W.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,te,L.x,L.y,W.mipmaps[0].width,W.mipmaps[0].height,Re,W.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,te,L.x,L.y,Re,ze,W.image),te===0&&K.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(L,W,K,te,Y=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ce=L.max.x-L.min.x+1,Re=L.max.y-L.min.y+1,ze=L.max.z-L.min.z+1,Ze=De.convert(te.format),ot=De.convert(te.type),st;if(te.isData3DTexture)I.setTexture3D(te,0),st=X.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)I.setTexture2DArray(te,0),st=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,te.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,te.unpackAlignment);let rt=X.getParameter(X.UNPACK_ROW_LENGTH),$t=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=X.getParameter(X.UNPACK_SKIP_PIXELS),Qt=X.getParameter(X.UNPACK_SKIP_ROWS),si=X.getParameter(X.UNPACK_SKIP_IMAGES),Ut=K.isCompressedTexture?K.mipmaps[Y]:K.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ut.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ut.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,Ze,ot,Ut.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,Ze,Ut.data)):X.texSubImage3D(st,Y,W.x,W.y,W.z,Ce,Re,ze,Ze,ot,Ut),X.pixelStorei(X.UNPACK_ROW_LENGTH,rt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$t),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,si),Y===0&&te.generateMipmaps&&X.generateMipmap(st),Oe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),Oe.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,Oe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bu?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===uc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Yt?ar:um}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ar?Yt:Ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Su=class extends so{};Su.prototype.isWebGL1Renderer=!0;var or=class extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Wl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new U,ci=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ei(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},oa=class extends Ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$r,$a=new U,qr=new U,Xr=new U,Yr=new et,qa=new et,Mm=new ct,_l=new U,Xa=new U,xl=new U,Op=new et,jh=new et,kp=new et,ro=class extends jt{constructor(e=new oa){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new jn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wl(t,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new ci(i,3,0,!1)),$r.setAttribute("uv",new ci(i,2,3,!1))}this.geometry=$r,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),Mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Xr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;bl(_l.set(-.5,-.5,0),Xr,o,qr,s,r),bl(Xa.set(.5,-.5,0),Xr,o,qr,s,r),bl(xl.set(.5,.5,0),Xr,o,qr,s,r),Op.set(0,0),jh.set(1,0),kp.set(1,1);let a=e.ray.intersectTriangle(_l,Xa,xl,!1,$a);if(a===null&&(bl(Xa.set(-.5,.5,0),Xr,o,qr,s,r),jh.set(0,1),a=e.ray.intersectTriangle(_l,xl,Xa,!1,$a),a===null))return;let l=e.ray.origin.distanceTo($a);l<e.near||l>e.far||t.push({distance:l,point:$a.clone(),uv:ir.getInterpolation($a,_l,Xa,xl,Op,jh,kp,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function bl(n,e,t,i,s,r){Yr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(qa.x=r*Yr.x-s*Yr.y,qa.y=s*Yr.x+r*Yr.y):qa.copy(Yr),n.copy(e),n.x+=qa.x,n.y+=qa.y,n.applyMatrix4(Mm)}var Bp=new U,Fp=new bt,zp=new bt,V1=new U,Hp=new ct,Ml=new U,Zh=new li,Vp=new ct,Jh=new sa,$l=class extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xf,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ml),this.boundingBox.expandByPoint(Ml)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ml),this.boundingSphere.expandByPoint(Ml)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zh.copy(this.boundingSphere),Zh.applyMatrix4(s),e.ray.intersectsSphere(Zh)!==!1&&(Vp.copy(s).invert(),Jh.copy(e.ray).applyMatrix4(Vp),!(this.boundingBox!==null&&Jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Fp.fromBufferAttribute(s.attributes.skinIndex,e),zp.fromBufferAttribute(s.attributes.skinWeight,e),Bp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=zp.getComponent(r);if(o!==0){let a=Fp.getComponent(r);Hp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(V1.copy(Bp).applyMatrix4(Hp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},ao=class extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ql=class extends Yn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=vn,h=vn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gp=new ct,G1=new ct,Xl=class n{constructor(e=[],t=[]){this.uuid=vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new ct;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:G1;Gp.multiplyMatrices(a,t[r]),Gp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ql(t,e,e,ai,Zi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ao),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var la=class extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wp=new U,$p=new U,qp=new ct,Kh=new sa,Sl=new li,oo=class extends jt{constructor(e=new jn,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Wp.fromBufferAttribute(t,s-1),$p.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wp.distanceTo($p);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;qp.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(qp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let b=f,D=E-1;b<D;b+=p){let P=g.getX(b),R=g.getX(b+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,R),Kh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let b=f,D=E-1;b<D;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),Kh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Xp=new U,Yp=new U,Yl=class extends oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xp.fromBufferAttribute(t,s),Yp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xp.distanceTo(Yp);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ca=class extends Yn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jl=class n extends jn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let E=[],b=f/i,D=0;f===0&&o===0?D=.5/t:f===i&&l===Math.PI&&(D=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+D,1-b),E.push(c++)}h.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){let b=h[f][E+1],D=h[f][E],P=h[f+1][E],R=h[f+1][E+1];(f!==0||o>0)&&p.push(b,D,R),(f!==i-1||l<Math.PI)&&p.push(D,P,R)}this.setIndex(p),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zl=class extends jn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),E=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,E),jp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),jp(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ot(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function jp(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var lo=class extends Ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var lr=class extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function wl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function W1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function $1(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Zp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Sm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ha=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wu=class extends ha{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xf,endingEnd:Xf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yf:r=e,a=2*t-i;break;case jf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yf:o=e,l=2*i-t;break;case jf:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,E=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,D=p*m-p*v;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+E*o[c+P]+b*o[l+P]+D*o[u+P];return r}},Eu=class extends ha{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Tu=class extends ha{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wl(t,this.TimeBufferType),this.values=wl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wl(e.times,Array),values:wl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Al:t=this.InterpolantFactoryMethodDiscrete;break;case Cl:t=this.InterpolantFactoryMethodLinear;break;case Th:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Al;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return Th}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&W1(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Th,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Cl;var As=class extends hi{};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Al;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends hi{};Jl.prototype.ValueTypeName="color";var ua=class extends hi{};ua.prototype.ValueTypeName="number";var Au=class extends ha{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},ts=class extends hi{InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.DefaultInterpolation=Cl;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends hi{};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Al;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends hi{};ns.prototype.ValueTypeName="vector";var co=class{constructor(e,t=-1,i,s=Ty){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=vi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(X1(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(hi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=$1(l);l=Zp(l,1,h),c=Zp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ua(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];Sm(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){let b=d[g];m.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new ua(".morphTargetInfluence["+v+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(ns,p+".position",d,"pos",s),i(ts,p+".quaternion",d,"rot",s),i(ns,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function q1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ua;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Jl;case"quaternion":return ts;case"bool":case"boolean":return As;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function X1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=q1(n.type);if(n.times===void 0){let t=[],i=[];Sm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Kl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ho=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Y1=new ho,Ci=class{constructor(e){this.manager=e!==void 0?e:Y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xi={},Cu=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends Ci{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:i,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){E();function E(){u.read().then(({done:b,value:D})=>{if(b)f.close();else{v+=D.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let R=0,N=h.length;R<N;R++){let z=h[R];z.onProgress&&z.onProgress(P)}f.enqueue(D),E()}})}}});return new Response(m)}else throw new Cu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Kl.add(e,c);let h=Xi[e];delete Xi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ru=class extends Ci{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=eo("img");function l(){h(),Kl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ql=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new ql,a=new uo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ln,o.wrapT=c.wrapT!==void 0?c.wrapT:Ln,o.magFilter=c.magFilter!==void 0?c.magFilter:Hn,o.minFilter=c.minFilter!==void 0?c.minFilter:Hn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Es),c.mipmapCount===1&&(o.minFilter=Hn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},ec=class extends Ci{constructor(e){super(e)}load(e,t,i,s){let r=new Yn,o=new Ru(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},cr=class extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},tc=class extends cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qh=new ct,Jp=new U,Kp=new U,fo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kp),t.updateMatrixWorld(),Qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lu=class extends fo{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ia*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},nc=class extends cr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qp=new ct,Ya=new U,eu=new U,Pu=class extends fo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ya),eu.copy(i.position),eu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(eu),i.updateMatrixWorld(),s.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Qp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}},ic=class extends cr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Iu=class extends fo{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},da=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sc=class extends cr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var rc=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ac=class extends jn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Hu="\\[\\]\\.:\\/",j1=new RegExp("["+Hu+"]","g"),Vu="[^"+Hu+"]",Z1="[^"+Hu.replace("\\.","")+"]",J1=/((?:WC+[\/:])*)/.source.replace("WC",Vu),K1=/(WCOD+)?/.source.replace("WCOD",Z1),Q1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),eM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),tM=new RegExp("^"+J1+K1+Q1+eM+"$"),nM=["material","materials","bones","map"],Nu=class{constructor(e,t,i){let s=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j1,"")}static parseTrackName(e){let t=tM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);nM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Nu;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lw=new Float32Array(1);var hr=class extends Wl{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var oc=class{constructor(e,t,i=0,s=1/0){this.ray=new sa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Du(e,this,i,t),i.sort(em),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Du(e[s],this,i,t);return i.sort(em),i}};function em(n,e){return n.distance-e.distance}function Du(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Du(s[r],e,t,!0)}}var tm=new U,El=new U,lc=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){tm.subVectors(e,this.start),El.subVectors(this.end,this.start);let i=El.dot(El),r=El.dot(tm)/i;return t&&(r=Rn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);var po=class extends Ql{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case d:case v:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function i(F,ne,q,$,ee){let j,oe,V=q.pixel_size>>3,Z=q.width*q.height*V;if(ne&&(oe=ee.subarray($,$+=q.colormap_length*(q.colormap_size>>3))),F){j=new Uint8Array(Z);let re,ae,he,Le=0,Ve=new Uint8Array(V);for(;Le<Z;)if(re=ee[$++],ae=(re&127)+1,re&128){for(he=0;he<V;++he)Ve[he]=ee[$++];for(he=0;he<ae;++he)j.set(Ve,Le+he*V);Le+=V*ae}else{for(ae*=V,he=0;he<ae;++he)j[Le+he]=ee[$++];Le+=ae}}else j=ee.subarray($,$+=ne?q.width*q.height:Z);return{pixel_data:j,palettes:oe}}function s(F,ne,q,$,ee,j,oe,V,Z){let re=Z,ae,he=0,Le,Ve,Ge=M.width;for(Ve=ne;Ve!==$;Ve+=q)for(Le=ee;Le!==oe;Le+=j,he++)ae=V[he],F[(Le+Ge*Ve)*4+3]=255,F[(Le+Ge*Ve)*4+2]=re[ae*3+0],F[(Le+Ge*Ve)*4+1]=re[ae*3+1],F[(Le+Ge*Ve)*4+0]=re[ae*3+2];return F}function r(F,ne,q,$,ee,j,oe,V){let Z,re=0,ae,he,Le=M.width;for(he=ne;he!==$;he+=q)for(ae=ee;ae!==oe;ae+=j,re+=2)Z=V[re+0]+(V[re+1]<<8),F[(ae+Le*he)*4+0]=(Z&31744)>>7,F[(ae+Le*he)*4+1]=(Z&992)>>2,F[(ae+Le*he)*4+2]=(Z&31)<<3,F[(ae+Le*he)*4+3]=Z&32768?0:255;return F}function o(F,ne,q,$,ee,j,oe,V){let Z=0,re,ae,he=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=3)F[(re+he*ae)*4+3]=255,F[(re+he*ae)*4+2]=V[Z+0],F[(re+he*ae)*4+1]=V[Z+1],F[(re+he*ae)*4+0]=V[Z+2];return F}function a(F,ne,q,$,ee,j,oe,V){let Z=0,re,ae,he=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=4)F[(re+he*ae)*4+2]=V[Z+0],F[(re+he*ae)*4+1]=V[Z+1],F[(re+he*ae)*4+0]=V[Z+2],F[(re+he*ae)*4+3]=V[Z+3];return F}function l(F,ne,q,$,ee,j,oe,V){let Z,re=0,ae,he,Le=M.width;for(he=ne;he!==$;he+=q)for(ae=ee;ae!==oe;ae+=j,re++)Z=V[re],F[(ae+Le*he)*4+0]=Z,F[(ae+Le*he)*4+1]=Z,F[(ae+Le*he)*4+2]=Z,F[(ae+Le*he)*4+3]=255;return F}function c(F,ne,q,$,ee,j,oe,V){let Z=0,re,ae,he=M.width;for(ae=ne;ae!==$;ae+=q)for(re=ee;re!==oe;re+=j,Z+=2)F[(re+he*ae)*4+0]=V[Z+0],F[(re+he*ae)*4+1]=V[Z+0],F[(re+he*ae)*4+2]=V[Z+0],F[(re+he*ae)*4+3]=V[Z+1];return F}function h(F,ne,q,$,ee){let j,oe,V,Z,re,ae;switch((M.flags&E)>>b){default:case R:j=0,V=1,re=ne,oe=0,Z=1,ae=q;break;case D:j=0,V=1,re=ne,oe=q-1,Z=-1,ae=-1;break;case N:j=ne-1,V=-1,re=-1,oe=0,Z=1,ae=q;break;case P:j=ne-1,V=-1,re=-1,oe=q-1,Z=-1,ae=-1;break}if(de)switch(M.pixel_size){case 8:l(F,oe,Z,ae,j,V,re,$);break;case 16:c(F,oe,Z,ae,j,V,re,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(M.pixel_size){case 8:s(F,oe,Z,ae,j,V,re,$,ee);break;case 16:r(F,oe,Z,ae,j,V,re,$);break;case 24:o(F,oe,Z,ae,j,V,re,$);break;case 32:a(F,oe,Z,ae,j,V,re,$);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,E=48,b=4,D=0,P=1,R=2,N=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let z=0,S=new Uint8Array(e),M={id_length:S[z++],colormap_type:S[z++],image_type:S[z++],colormap_index:S[z++]|S[z++]<<8,colormap_length:S[z++]|S[z++]<<8,colormap_size:S[z++],origin:[S[z++]|S[z++]<<8,S[z++]|S[z++]<<8],width:S[z++]|S[z++]<<8,height:S[z++]|S[z++]<<8,pixel_size:S[z++],flags:S[z++]};if(t(M),M.id_length+z>e.length)throw new Error("THREE.TGALoader: No data.");z+=M.id_length;let B=!1,ie=!1,de=!1;switch(M.image_type){case v:B=!0,ie=!0;break;case d:ie=!0;break;case m:B=!0;break;case p:break;case f:B=!0,de=!0;break;case g:de=!0;break}let O=new Uint8Array(M.width*M.height*4),G=i(B,ie,M,z,S);return h(O,M.width,M.height,G.pixel_data,G.palettes),{data:O,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:Es}}};var pc=class extends Ci{load(e,t,i,s){let r=this,o=r.path===""?rc.extractUrlBase(e):r.path,a=new uo(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,_){let T=[],w=x.childNodes;for(let C=0,Q=w.length;C<Q;C++){let se=w[C];se.nodeName===_&&T.push(se)}return T}function s(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,C=_.length;w<C;w++)T[w]=_[w];return T}function r(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,C=_.length;w<C;w++)T[w]=parseFloat(_[w]);return T}function o(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let w=0,C=_.length;w<C;w++)T[w]=parseInt(_[w]);return T}function a(x){return x.substring(1)}function l(){return"three_default_"+D0++}function c(x){return Object.keys(x).length===0}function h(x){return{unit:u(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function u(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function p(x,_,T,w){let C=i(x,_)[0];if(C!==void 0){let Q=i(C,T);for(let se=0;se<Q.length;se++)w(Q[se])}}function g(x,_){for(let T in x){let w=x[T];w.build=_(x[T])}}function v(x,_){return x.build!==void 0||(x.build=_(x)),x.build}function m(x){let _={sources:{},samplers:{},channels:{}},T=!1;for(let w=0,C=x.childNodes.length;w<C;w++){let Q=x.childNodes[w];if(Q.nodeType!==1)continue;let se;switch(Q.nodeName){case"source":se=Q.getAttribute("id"),_.sources[se]=k(Q);break;case"sampler":se=Q.getAttribute("id"),_.samplers[se]=f(Q);break;case"channel":se=Q.getAttribute("target"),_.channels[se]=E(Q);break;case"animation":m(Q),T=!0;break;default:console.log(Q)}}T===!1&&(Je.animations[x.getAttribute("id")||Rs.generateUUID()]=_)}function f(x){let _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=a(C.getAttribute("source")),se=C.getAttribute("semantic");_.inputs[se]=Q;break}}return _}function E(x){let _={},w=x.getAttribute("target").split("/"),C=w.shift(),Q=w.shift(),se=Q.indexOf("(")!==-1,Ie=Q.indexOf(".")!==-1;if(Ie)w=Q.split("."),Q=w.shift(),_.member=w.shift();else if(se){let be=Q.split("(");Q=be.shift();for(let Te=0;Te<be.length;Te++)be[Te]=parseInt(be[Te].replace(/\)/,""));_.indices=be}return _.id=C,_.sid=Q,_.arraySyntax=se,_.memberSyntax=Ie,_.sampler=a(x.getAttribute("source")),_}function b(x){let _=[],T=x.channels,w=x.samplers,C=x.sources;for(let Q in T)if(T.hasOwnProperty(Q)){let se=T[Q],Ie=w[se.sampler],be=Ie.inputs.INPUT,Te=Ie.inputs.OUTPUT,Be=C[be],fe=C[Te],ke=P(se,Be,fe);M(ke,_)}return _}function D(x){return v(Je.animations[x],b)}function P(x,_,T){let w=Je.nodes[x.id],C=nt(w.id),Q=w.transforms[x.sid],se=w.matrix.clone().transpose(),Ie,be,Te,Be,fe,ke,Ue={};switch(Q){case"matrix":for(Te=0,Be=_.array.length;Te<Be;Te++)if(Ie=_.array[Te],be=Te*T.stride,Ue[Ie]===void 0&&(Ue[Ie]={}),x.arraySyntax===!0){let Xt=T.array[be],At=x.indices[0]+4*x.indices[1];Ue[Ie][At]=Xt}else for(fe=0,ke=T.stride;fe<ke;fe++)Ue[Ie][fe]=T.array[be+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let qe=R(Ue,se);return{name:C.uuid,keyframes:qe}}function R(x,_){let T=[];for(let C in x)T.push({time:parseFloat(C),value:x[C]});T.sort(w);for(let C=0;C<16;C++)B(T,C,_.elements[C]);return T;function w(C,Q){return C.time-Q.time}}let N=new U,z=new U,S=new Ti;function M(x,_){let T=x.keyframes,w=x.name,C=[],Q=[],se=[],Ie=[];for(let be=0,Te=T.length;be<Te;be++){let Be=T[be],fe=Be.time,ke=Be.value;Re.fromArray(ke).transpose(),Re.decompose(N,S,z),C.push(fe),Q.push(N.x,N.y,N.z),se.push(S.x,S.y,S.z,S.w),Ie.push(z.x,z.y,z.z)}return Q.length>0&&_.push(new ns(w+".position",C,Q)),se.length>0&&_.push(new ts(w+".quaternion",C,se)),Ie.length>0&&_.push(new ns(w+".scale",C,Ie)),_}function B(x,_,T){let w,C=!0,Q,se;for(Q=0,se=x.length;Q<se;Q++)w=x[Q],w.value[_]===void 0?w.value[_]=null:C=!1;if(C===!0)for(Q=0,se=x.length;Q<se;Q++)w=x[Q],w.value[_]=T;else ie(x,_)}function ie(x,_){let T,w;for(let C=0,Q=x.length;C<Q;C++){let se=x[C];if(se.value[_]===null){if(T=de(x,C,_),w=O(x,C,_),T===null){se.value[_]=w.value[_];continue}if(w===null){se.value[_]=T.value[_];continue}G(se,T,w,_)}}}function de(x,_,T){for(;_>=0;){let w=x[_];if(w.value[T]!==null)return w;_--}return null}function O(x,_,T){for(;_<x.length;){let w=x[_];if(w.value[T]!==null)return w;_++}return null}function G(x,_,T,w){if(T.time-_.time===0){x.value[w]=_.value[w];return}x.value[w]=(x.time-_.time)*(T.value[w]-_.value[w])/(T.time-_.time)+_.value[w]}function F(x){let _={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_animation":_.animations.push(a(C.getAttribute("url")));break}}Je.clips[x.getAttribute("id")]=_}function ne(x){let _=[],T=x.name,w=x.end-x.start||-1,C=x.animations;for(let Q=0,se=C.length;Q<se;Q++){let Ie=D(C[Q]);for(let be=0,Te=Ie.length;be<Te;be++)_.push(Ie[be])}return new co(T,w,_)}function q(x){return v(Je.clips[x],ne)}function $(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"skin":_.id=a(C.getAttribute("source")),_.skin=ee(C);break;case"morph":_.id=a(C.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[x.getAttribute("id")]=_}function ee(x){let _={sources:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(C.textContent);break;case"source":let Q=C.getAttribute("id");_.sources[Q]=k(C);break;case"joints":_.joints=j(C);break;case"vertex_weights":_.vertexWeights=oe(C);break}}return _}function j(x){let _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=C.getAttribute("semantic"),se=a(C.getAttribute("source"));_.inputs[Q]=se;break}}return _}function oe(x){let _={inputs:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=C.getAttribute("semantic"),se=a(C.getAttribute("source")),Ie=parseInt(C.getAttribute("offset"));_.inputs[Q]={id:se,offset:Ie};break;case"vcount":_.vcount=o(C.textContent);break;case"v":_.v=o(C.textContent);break}}return _}function V(x){let _={id:x.id},T=Je.geometries[_.id];return x.skin!==void 0&&(_.skin=Z(x.skin),T.sources.skinIndices=_.skin.indices,T.sources.skinWeights=_.skin.weights),_}function Z(x){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},w=x.sources,C=x.vertexWeights,Q=C.vcount,se=C.v,Ie=C.inputs.JOINT.offset,be=C.inputs.WEIGHT.offset,Te=x.sources[x.joints.inputs.JOINT],Be=x.sources[x.joints.inputs.INV_BIND_MATRIX],fe=w[C.inputs.WEIGHT.id].array,ke=0,Ue,qe,He;for(Ue=0,He=Q.length;Ue<He;Ue++){let At=Q[Ue],_t=[];for(qe=0;qe<At;qe++){let xt=se[ke+Ie],Hi=se[ke+be],qn=fe[Hi];_t.push({index:xt,weight:qn}),ke+=2}for(_t.sort(Xt),qe=0;qe<4;qe++){let xt=_t[qe];xt!==void 0?(T.indices.array.push(xt.index),T.weights.array.push(xt.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(x.bindShapeMatrix?T.bindMatrix=new ct().fromArray(x.bindShapeMatrix).transpose():T.bindMatrix=new ct().identity(),Ue=0,He=Te.array.length;Ue<He;Ue++){let At=Te.array[Ue],_t=new ct().fromArray(Be.array,Ue*Be.stride).transpose();T.joints.push({name:At,boneInverse:_t})}return T;function Xt(At,_t){return _t.weight-At.weight}}function re(x){return v(Je.controllers[x],V)}function ae(x){let _={init_from:i(x,"init_from")[0].textContent};Je.images[x.getAttribute("id")]=_}function he(x){return x.build!==void 0?x.build:x.init_from}function Le(x){let _=Je.images[x];return _!==void 0?v(_,he):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function Ve(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"profile_COMMON":_.profile=Ge(C);break}}Je.effects[x.getAttribute("id")]=_}function Ge(x){let _={surfaces:{},samplers:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"newparam":gt(C,_);break;case"technique":_.technique=Xe(C);break;case"extra":_.extra=A(C);break}}return _}function gt(x,_){let T=x.getAttribute("sid");for(let w=0,C=x.childNodes.length;w<C;w++){let Q=x.childNodes[w];if(Q.nodeType===1)switch(Q.nodeName){case"surface":_.surfaces[T]=X(Q);break;case"sampler2D":_.samplers[T]=gn(Q);break}}}function X(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"init_from":_.init_from=C.textContent;break}}return _}function gn(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"source":_.source=C.textContent;break}}return _}function Xe(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=C.nodeName,_.parameters=it(C);break;case"extra":_.extra=A(C);break}}return _}function it(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[C.nodeName]=Oe(C);break;case"transparent":_[C.nodeName]={opaque:C.hasAttribute("opaque")?C.getAttribute("opaque"):"A_ONE",data:Oe(C)};break}}return _}function Oe(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":_[C.nodeName]=r(C.textContent);break;case"float":_[C.nodeName]=parseFloat(C.textContent);break;case"texture":_[C.nodeName]={id:C.getAttribute("texture"),extra:Dt(C)};break}}return _}function Dt(x){let _={technique:{}};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"extra":ht(C,_);break}}return _}function ht(x,_){for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":I(C,_);break}}}function I(x,_){for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[C.nodeName]=parseFloat(C.textContent);break;case"wrapU":case"wrapV":C.textContent.toUpperCase()==="TRUE"?_.technique[C.nodeName]=1:C.textContent.toUpperCase()==="FALSE"?_.technique[C.nodeName]=0:_.technique[C.nodeName]=parseInt(C.textContent);break;case"bump":_[C.nodeName]=ge(C);break}}}function A(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique":_.technique=J(C);break}}return _}function J(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"double_sided":_[C.nodeName]=parseInt(C.textContent);break;case"bump":_[C.nodeName]=ge(C);break}}return _}function ge(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"texture":_[C.nodeName]={id:C.getAttribute("texture"),texcoord:C.getAttribute("texcoord"),extra:Dt(C)};break}}return _}function pe(x){return x}function ye(x){return v(Je.effects[x],pe)}function Fe(x){let _={name:x.getAttribute("name")};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"instance_effect":_.url=a(C.getAttribute("url"));break}}Je.materials[x.getAttribute("id")]=_}function Ee(x){let _,T=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":_=_h;break;default:_=za}return _}function Ne(x){let _=ye(x.url),T=_.profile.technique,w;switch(T.type){case"phong":case"blinn":w=new lo;break;case"lambert":w=new lr;break;default:w=new nn;break}w.name=x.name||"";function C(be,Te=null){let Be=_.profile.samplers[be.id],fe=null;if(Be!==void 0){let ke=_.profile.surfaces[Be.source];fe=Le(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Le(be.id);if(fe!==null){let ke=Ee(fe);if(ke!==void 0){let Ue=ke.load(fe),qe=be.extra;if(qe!==void 0&&qe.technique!==void 0&&c(qe.technique)===!1){let He=qe.technique;Ue.wrapS=He.wrapU?ws:Ln,Ue.wrapT=He.wrapV?ws:Ln,Ue.offset.set(He.offsetU||0,He.offsetV||0),Ue.repeat.set(He.repeatU||1,He.repeatV||1)}else Ue.wrapS=ws,Ue.wrapT=ws;return Te!==null&&(Ue.colorSpace=Te),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",be.id),null}let Q=T.parameters;for(let be in Q){let Te=Q[be];switch(be){case"diffuse":Te.color&&w.color.fromArray(Te.color),Te.texture&&(w.map=C(Te.texture,Yt));break;case"specular":Te.color&&w.specular&&w.specular.fromArray(Te.color),Te.texture&&(w.specularMap=C(Te.texture));break;case"bump":Te.texture&&(w.normalMap=C(Te.texture));break;case"ambient":Te.texture&&(w.lightMap=C(Te.texture,Yt));break;case"shininess":Te.float&&w.shininess&&(w.shininess=Te.float);break;case"emission":Te.color&&w.emissive&&w.emissive.fromArray(Te.color),Te.texture&&(w.emissiveMap=C(Te.texture,Yt));break}}w.color.convertSRGBToLinear(),w.specular&&w.specular.convertSRGBToLinear(),w.emissive&&w.emissive.convertSRGBToLinear();let se=Q.transparent,Ie=Q.transparency;if(Ie===void 0&&se&&(Ie={float:1}),se===void 0&&Ie&&(se={opaque:"A_ONE",data:{color:[1,1,1,1]}}),se&&Ie)if(se.data.texture)w.transparent=!0;else{let be=se.data.color;switch(se.opaque){case"A_ONE":w.opacity=be[3]*Ie.float;break;case"RGB_ZERO":w.opacity=1-be[0]*Ie.float;break;case"A_ZERO":w.opacity=1-be[3]*Ie.float;break;case"RGB_ONE":w.opacity=be[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',se.opaque)}w.opacity<1&&(w.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let be=T.extra.technique;for(let Te in be){let Be=be[Te];switch(Te){case"double_sided":w.side=Be===1?Gn:Xn;break;case"bump":w.normalMap=C(Be.texture),w.normalScale=new et(1,1);break}}}return w}function je(x){return v(Je.materials[x],Ne)}function ut(x){let _={name:x.getAttribute("name")};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"optics":_.optics=me(C);break}}Je.cameras[x.getAttribute("id")]=_}function me(x){for(let _=0;_<x.childNodes.length;_++){let T=x.childNodes[_];switch(T.nodeName){case"technique_common":return wt(T)}}return{}}function wt(x){let _={};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];switch(w.nodeName){case"perspective":case"orthographic":_.technique=w.nodeName,_.parameters=pt(w);break}}return _}function pt(x){let _={};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];switch(w.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[w.nodeName]=parseFloat(w.textContent);break}}return _}function Qe(x){let _;switch(x.optics.technique){case"perspective":_=new tn(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let T=x.optics.parameters.ymag,w=x.optics.parameters.xmag,C=x.optics.parameters.aspect_ratio;w=w===void 0?T*C:w,T=T===void 0?w/C:T,w*=.5,T*=.5,_=new aa(-w,w,T,-T,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:_=new tn;break}return _.name=x.name||"",_}function We(x){let _=Je.cameras[x];return _!==void 0?v(_,Qe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function De(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"technique_common":_=at(C);break}}Je.lights[x.getAttribute("id")]=_}function at(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=C.nodeName,_.parameters=Mt(C)}}return _}function Mt(x){let _={};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"color":let Q=r(C.textContent);_.color=new lt().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(C.textContent);break;case"quadratic_attenuation":let se=parseFloat(C.textContent);_.distance=se?Math.sqrt(1/se):0;break}}return _}function kt(x){let _;switch(x.technique){case"directional":_=new da;break;case"point":_=new ic;break;case"spot":_=new nc;break;case"ambient":_=new sc;break}return x.parameters.color&&_.color.copy(x.parameters.color),x.parameters.distance&&(_.distance=x.parameters.distance),_}function dt(x){let _=Je.lights[x];return _!==void 0?v(_,kt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function xe(x){let _={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=i(x,"mesh")[0];if(T!==void 0){for(let w=0;w<T.childNodes.length;w++){let C=T.childNodes[w];if(C.nodeType!==1)continue;let Q=C.getAttribute("id");switch(C.nodeName){case"source":_.sources[Q]=k(C);break;case"vertices":_.vertices=Se(C);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",C.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(we(C));break;default:console.log(C)}}Je.geometries[x.getAttribute("id")]=_}}function k(x){let _={array:[],stride:3};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"float_array":_.array=r(w.textContent);break;case"Name_array":_.array=s(w.textContent);break;case"technique_common":let C=i(w,"accessor")[0];C!==void 0&&(_.stride=parseInt(C.getAttribute("stride")));break}}return _}function Se(x){let _={};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];w.nodeType===1&&(_[w.getAttribute("semantic")]=a(w.getAttribute("source")))}return _}function we(x){let _={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,w=x.childNodes.length;T<w;T++){let C=x.childNodes[T];if(C.nodeType===1)switch(C.nodeName){case"input":let Q=a(C.getAttribute("source")),se=C.getAttribute("semantic"),Ie=parseInt(C.getAttribute("offset")),be=parseInt(C.getAttribute("set")),Te=be>0?se+be:se;_.inputs[Te]={id:Q,offset:Ie},_.stride=Math.max(_.stride,Ie+1),se==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=o(C.textContent);break;case"p":_.p=o(C.textContent);break}}return _}function Ke(x){let _={};for(let T=0;T<x.length;T++){let w=x[T];_[w.type]===void 0&&(_[w.type]=[]),_[w.type].push(w)}return _}function Ye(x){let _=0;for(let T=0,w=x.length;T<w;T++)x[T].hasUV===!0&&_++;_>0&&_<x.length&&(x.uvsNeedsFix=!0)}function Tt(x){let _={},T=x.sources,w=x.vertices,C=x.primitives;if(C.length===0)return{};let Q=Ke(C);for(let se in Q){let Ie=Q[se];Ye(Ie),_[se]=Ct(Ie,T,w)}return _}function Ct(x,_,T){let w={},C={array:[],stride:0},Q={array:[],stride:0},se={array:[],stride:0},Ie={array:[],stride:0},be={array:[],stride:0},Te={array:[],stride:4},Be={array:[],stride:4},fe=new jn,ke=[],Ue=0;for(let qe=0;qe<x.length;qe++){let He=x[qe],Xt=He.inputs,At=0;switch(He.type){case"lines":case"linestrips":At=He.count*2;break;case"triangles":At=He.count*3;break;case"polylist":for(let _t=0;_t<He.count;_t++){let xt=He.vcount[_t];switch(xt){case 3:At+=3;break;case 4:At+=6;break;default:At+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",He.type)}fe.addGroup(Ue,At,qe),Ue+=At,He.material&&ke.push(He.material);for(let _t in Xt){let xt=Xt[_t];switch(_t){case"VERTEX":for(let Hi in T){let qn=T[Hi];switch(Hi){case"POSITION":let Cr=C.array.length;if(Et(He,_[qn],xt.offset,C.array),C.stride=_[qn].stride,_.skinWeights&&_.skinIndices&&(Et(He,_.skinIndices,xt.offset,Te.array),Et(He,_.skinWeights,xt.offset,Be.array)),He.hasUV===!1&&x.uvsNeedsFix===!0){let U0=(C.array.length-Cr)/C.stride;for(let ff=0;ff<U0;ff++)se.array.push(0,0)}break;case"NORMAL":Et(He,_[qn],xt.offset,Q.array),Q.stride=_[qn].stride;break;case"COLOR":Et(He,_[qn],xt.offset,be.array),be.stride=_[qn].stride;break;case"TEXCOORD":Et(He,_[qn],xt.offset,se.array),se.stride=_[qn].stride;break;case"TEXCOORD1":Et(He,_[qn],xt.offset,Ie.array),se.stride=_[qn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Hi)}}break;case"NORMAL":Et(He,_[xt.id],xt.offset,Q.array),Q.stride=_[xt.id].stride;break;case"COLOR":Et(He,_[xt.id],xt.offset,be.array,!0),be.stride=_[xt.id].stride;break;case"TEXCOORD":Et(He,_[xt.id],xt.offset,se.array),se.stride=_[xt.id].stride;break;case"TEXCOORD1":Et(He,_[xt.id],xt.offset,Ie.array),Ie.stride=_[xt.id].stride;break}}}return C.array.length>0&&fe.setAttribute("position",new Ot(C.array,C.stride)),Q.array.length>0&&fe.setAttribute("normal",new Ot(Q.array,Q.stride)),be.array.length>0&&fe.setAttribute("color",new Ot(be.array,be.stride)),se.array.length>0&&fe.setAttribute("uv",new Ot(se.array,se.stride)),Ie.array.length>0&&fe.setAttribute("uv1",new Ot(Ie.array,Ie.stride)),Te.array.length>0&&fe.setAttribute("skinIndex",new Ot(Te.array,Te.stride)),Be.array.length>0&&fe.setAttribute("skinWeight",new Ot(Be.array,Be.stride)),w.data=fe,w.type=x[0].type,w.materialKeys=ke,w}function Et(x,_,T,w,C=!1){let Q=x.p,se=x.stride,Ie=x.vcount;function be(fe){let ke=Q[fe+T]*Be,Ue=ke+Be;for(;ke<Ue;ke++)w.push(Te[ke]);if(C){let qe=w.length-Be-1;Yo.setRGB(w[qe+0],w[qe+1],w[qe+2]).convertSRGBToLinear(),w[qe+0]=Yo.r,w[qe+1]=Yo.g,w[qe+2]=Yo.b}}let Te=_.array,Be=_.stride;if(x.vcount!==void 0){let fe=0;for(let ke=0,Ue=Ie.length;ke<Ue;ke++){let qe=Ie[ke];if(qe===4){let He=fe+se*0,Xt=fe+se*1,At=fe+se*2,_t=fe+se*3;be(He),be(Xt),be(_t),be(Xt),be(At),be(_t)}else if(qe===3){let He=fe+se*0,Xt=fe+se*1,At=fe+se*2;be(He),be(Xt),be(At)}else if(qe>4)for(let He=1,Xt=qe-2;He<=Xt;He++){let At=fe+se*0,_t=fe+se*He,xt=fe+se*(He+1);be(At),be(_t),be(xt)}fe+=se*qe}}else for(let fe=0,ke=Q.length;fe<ke;fe+=se)be(fe)}function un(x){return v(Je.geometries[x],Tt)}function Rt(x){let _={name:x.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"technique_common":$o(w,_);break}}Je.kinematicsModels[x.getAttribute("id")]=_}function yn(x){return x.build!==void 0?x.build:x}function ii(x){return v(Je.kinematicsModels[x],yn)}function $o(x,_){for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"joint":_.joints[w.getAttribute("sid")]=mh(w);break;case"link":_.links.push(Da(w));break}}}function mh(x){let _;for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"prismatic":case"revolute":_=Tr(w);break}}return _}function Tr(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"axis":let C=r(w.textContent);_.axis.fromArray(C);break;case"limits":let Q=w.getElementsByTagName("max")[0],se=w.getElementsByTagName("min")[0];_.limits.max=parseFloat(Q.textContent),_.limits.min=parseFloat(se.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Da(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"attachment_full":_.attachments.push(Ar(w));break;case"matrix":case"translate":case"rotate":_.transforms.push(Ua(w));break}}return _}function Ar(x){let _={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"link":_.links.push(Da(w));break;case"matrix":case"translate":case"rotate":_.transforms.push(Ua(w));break}}return _}function Ua(x){let _={type:x.nodeName},T=r(x.textContent);switch(_.type){case"matrix":_.obj=new ct,_.obj.fromArray(T).transpose();break;case"translate":_.obj=new U,_.obj.fromArray(T);break;case"rotate":_.obj=new U,_.obj.fromArray(T),_.angle=Rs.degToRad(T[3]);break}return _}function qo(x){let _={name:x.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"rigid_body":_.rigidBodies[w.getAttribute("name")]={},gh(w,_.rigidBodies[w.getAttribute("name")]);break}}Je.physicsModels[x.getAttribute("id")]=_}function gh(x,_){for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"technique_common":yh(w,_);break}}}function yh(x,_){for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"inertia":_.inertia=r(w.textContent);break;case"mass":_.mass=r(w.textContent)[0];break}}}function vh(x){let _={bindJointAxis:[]};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"bind_joint_axis":_.bindJointAxis.push(L(w));break}}Je.kinematicsScenes[a(x.getAttribute("url"))]=_}function L(x){let _={target:x.getAttribute("target").split("/").pop()};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType===1)switch(w.nodeName){case"axis":let C=w.getElementsByTagName("param")[0];_.axis=C.textContent;let Q=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=Q.substring(0,Q.length-1);break}}return _}function W(x){return x.build!==void 0?x.build:x}function K(x){return v(Je.kinematicsScenes[x],W)}function te(){let x=Object.keys(Je.kinematicsModels)[0],_=Object.keys(Je.kinematicsScenes)[0],T=Object.keys(Je.visualScenes)[0];if(x===void 0||_===void 0)return;let w=ii(x),C=K(_),Q=ka(T),se=C.bindJointAxis,Ie={};for(let Be=0,fe=se.length;Be<fe;Be++){let ke=se[Be],Ue=qt.querySelector('[sid="'+ke.target+'"]');if(Ue){let qe=Ue.parentElement;be(ke.jointIndex,qe)}}function be(Be,fe){let ke=fe.getAttribute("name"),Ue=w.joints[Be];Q.traverse(function(qe){qe.name===ke&&(Ie[Be]={object:qe,transforms:Y(fe),joint:Ue,position:Ue.zeroPosition})})}let Te=new ct;df={joints:w&&w.joints,getJointValue:function(Be){let fe=Ie[Be];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Be+" doesn't exist.")},setJointValue:function(Be,fe){let ke=Ie[Be];if(ke){let Ue=ke.joint;if(fe>Ue.limits.max||fe<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Be+" value "+fe+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Be+" is static.");else{let qe=ke.object,He=Ue.axis,Xt=ke.transforms;Re.identity();for(let At=0;At<Xt.length;At++){let _t=Xt[At];if(_t.sid&&_t.sid.indexOf(Be)!==-1)switch(Ue.type){case"revolute":Re.multiply(Te.makeRotationAxis(He,Rs.degToRad(fe)));break;case"prismatic":Re.multiply(Te.makeTranslation(He.x*fe,He.y*fe,He.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(_t.type){case"matrix":Re.multiply(_t.obj);break;case"translate":Re.multiply(Te.makeTranslation(_t.obj.x,_t.obj.y,_t.obj.z));break;case"scale":Re.scale(_t.obj);break;case"rotate":Re.multiply(Te.makeRotationAxis(_t.obj,_t.angle));break}}qe.matrix.copy(Re),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),Ie[Be].position=fe}}else console.log("THREE.ColladaLoader: "+Be+" does not exist.")}}}function Y(x){let _=[],T=qt.querySelector('[id="'+x.id+'"]');for(let w=0;w<T.childNodes.length;w++){let C=T.childNodes[w];if(C.nodeType!==1)continue;let Q,se;switch(C.nodeName){case"matrix":Q=r(C.textContent);let Ie=new ct().fromArray(Q).transpose();_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:Ie});break;case"translate":case"scale":Q=r(C.textContent),se=new U().fromArray(Q),_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se});break;case"rotate":Q=r(C.textContent),se=new U().fromArray(Q);let be=Rs.degToRad(Q[3]);_.push({sid:C.getAttribute("sid"),type:C.nodeName,obj:se,angle:be});break}}return _}function Ce(x){let _=x.getElementsByTagName("node");for(let T=0;T<_.length;T++){let w=_[T];w.hasAttribute("id")===!1&&w.setAttribute("id",l())}}let Re=new ct,ze=new U;function Ze(x){let _={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new ct,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];if(w.nodeType!==1)continue;let C;switch(w.nodeName){case"node":_.nodes.push(w.getAttribute("id")),Ze(w);break;case"instance_camera":_.instanceCameras.push(a(w.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(ot(w));break;case"instance_light":_.instanceLights.push(a(w.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(ot(w));break;case"instance_node":_.instanceNodes.push(a(w.getAttribute("url")));break;case"matrix":C=r(w.textContent),_.matrix.multiply(Re.fromArray(C).transpose()),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"translate":C=r(w.textContent),ze.fromArray(C),_.matrix.multiply(Re.makeTranslation(ze.x,ze.y,ze.z)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"rotate":C=r(w.textContent);let Q=Rs.degToRad(C[3]);_.matrix.multiply(Re.makeRotationAxis(ze.fromArray(C),Q)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"scale":C=r(w.textContent),_.matrix.scale(ze.fromArray(C)),_.transforms[w.getAttribute("sid")]=w.nodeName;break;case"extra":break;default:console.log(w)}}return Ut(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):Je.nodes[_.id]=_,_}function ot(x){let _={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<x.childNodes.length;T++){let w=x.childNodes[T];switch(w.nodeName){case"bind_material":let C=w.getElementsByTagName("instance_material");for(let Q=0;Q<C.length;Q++){let se=C[Q],Ie=se.getAttribute("symbol"),be=se.getAttribute("target");_.materials[Ie]=a(be)}break;case"skeleton":_.skeletons.push(a(w.textContent));break;default:break}}return _}function st(x,_){let T=[],w=[],C,Q,se;for(C=0;C<x.length;C++){let Te=x[C],Be;if(Ut(Te))Be=nt(Te),rt(Be,_,T);else if(zi(Te)){let ke=Je.visualScenes[Te].children;for(let Ue=0;Ue<ke.length;Ue++){let qe=ke[Ue];if(qe.type==="JOINT"){let He=nt(qe.id);rt(He,_,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(C=0;C<_.length;C++)for(Q=0;Q<T.length;Q++)if(se=T[Q],se.bone.name===_[C].name){w[C]=se,se.processed=!0;break}for(C=0;C<T.length;C++)se=T[C],se.processed===!1&&(w.push(se),se.processed=!0);let Ie=[],be=[];for(C=0;C<w.length;C++)se=w[C],Ie.push(se.bone),be.push(se.boneInverse);return new Xl(Ie,be)}function rt(x,_,T){x.traverse(function(w){if(w.isBone===!0){let C;for(let Q=0;Q<_.length;Q++){let se=_[Q];if(se.name===w.name){C=se.boneInverse;break}}C===void 0&&(C=new ct),T.push({bone:w,boneInverse:C,processed:!1})}})}function $t(x){let _=[],T=x.matrix,w=x.nodes,C=x.type,Q=x.instanceCameras,se=x.instanceControllers,Ie=x.instanceLights,be=x.instanceGeometries,Te=x.instanceNodes;for(let fe=0,ke=w.length;fe<ke;fe++)_.push(nt(w[fe]));for(let fe=0,ke=Q.length;fe<ke;fe++){let Ue=We(Q[fe]);Ue!==null&&_.push(Ue.clone())}for(let fe=0,ke=se.length;fe<ke;fe++){let Ue=se[fe],qe=re(Ue.id),He=un(qe.id),Xt=si(He,Ue.materials),At=Ue.skeletons,_t=qe.skin.joints,xt=st(At,_t);for(let Hi=0,qn=Xt.length;Hi<qn;Hi++){let Cr=Xt[Hi];Cr.isSkinnedMesh&&(Cr.bind(xt,qe.skin.bindMatrix),Cr.normalizeSkinWeights()),_.push(Cr)}}for(let fe=0,ke=Ie.length;fe<ke;fe++){let Ue=dt(Ie[fe]);Ue!==null&&_.push(Ue.clone())}for(let fe=0,ke=be.length;fe<ke;fe++){let Ue=be[fe],qe=un(Ue.id),He=si(qe,Ue.materials);for(let Xt=0,At=He.length;Xt<At;Xt++)_.push(He[Xt])}for(let fe=0,ke=Te.length;fe<ke;fe++)_.push(nt(Te[fe]).clone());let Be;if(w.length===0&&_.length===1)Be=_[0];else{Be=C==="JOINT"?new ao:new Pn;for(let fe=0;fe<_.length;fe++)Be.add(_[fe])}return Be.name=C==="JOINT"?x.sid:x.name,Be.matrix.copy(T),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be}let Bn=new nn({name:Ci.DEFAULT_MATERIAL_NAME,color:16711935});function Qt(x,_){let T=[];for(let w=0,C=x.length;w<C;w++){let Q=_[x[w]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[w]),T.push(Bn)):T.push(je(Q))}return T}function si(x,_){let T=[];for(let w in x){let C=x[w],Q=Qt(C.materialKeys,_);if(Q.length===0&&(w==="lines"||w==="linestrips"?Q.push(new la):Q.push(new lo)),w==="lines"||w==="linestrips")for(let Te=0,Be=Q.length;Te<Be;Te++){let fe=Q[Te];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let ke=new la;ke.color.copy(fe.color),ke.opacity=fe.opacity,ke.transparent=fe.transparent,Q[Te]=ke}}let se=C.data.attributes.skinIndex!==void 0,Ie=Q.length===1?Q[0]:Q,be;switch(w){case"lines":be=new Yl(C.data,Ie);break;case"linestrips":be=new oo(C.data,Ie);break;case"triangles":case"polylist":se?be=new $l(C.data,Ie):be=new zt(C.data,Ie);break}T.push(be)}return T}function Ut(x){return Je.nodes[x]!==void 0}function nt(x){return v(Je.nodes[x],$t)}function Oa(x){let _={name:x.getAttribute("name"),children:[]};Ce(x);let T=i(x,"node");for(let w=0;w<T.length;w++)_.children.push(Ze(T[w]));Je.visualScenes[x.getAttribute("id")]=_}function Bt(x){let _=new Pn;_.name=x.name;let T=x.children;for(let w=0;w<T.length;w++){let C=T[w];_.add(nt(C.id))}return _}function zi(x){return Je.visualScenes[x]!==void 0}function ka(x){return v(Je.visualScenes[x],Bt)}function js(x){let _=i(x,"instance_visual_scene")[0];return ka(a(_.getAttribute("url")))}function Ba(){let x=Je.clips;if(c(x)===!0){if(c(Je.animations)===!1){let _=[];for(let T in Je.animations){let w=D(T);for(let C=0,Q=w.length;C<Q;C++)_.push(w[C])}jo.push(new co("default",-1,_))}}else for(let _ in x)jo.push(q(_))}function dn(x){let _="",T=[x];for(;T.length;){let w=T.shift();w.nodeType===Node.TEXT_NODE?_+=w.textContent:(_+=`
`,T.push.apply(T,w.childNodes))}return _.trim()}if(e.length===0)return{scene:new or};let wi=new DOMParser().parseFromString(e,"application/xml"),qt=i(wi,"COLLADA")[0],Tn=wi.getElementsByTagName("parsererror")[0];if(Tn!==void 0){let x=i(Tn,"div")[0],_;return x?_=x.textContent:_=dn(Tn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}let Fa=qt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Fa);let Xo=h(i(qt,"asset")[0]),za=new ec(this.manager);za.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let _h;po&&(_h=new po(this.manager),_h.setPath(this.resourcePath||t));let Yo=new lt,jo=[],df={},D0=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(qt,"library_animations","animation",m),p(qt,"library_animation_clips","animation_clip",F),p(qt,"library_controllers","controller",$),p(qt,"library_images","image",ae),p(qt,"library_effects","effect",Ve),p(qt,"library_materials","material",Fe),p(qt,"library_cameras","camera",ut),p(qt,"library_lights","light",De),p(qt,"library_geometries","geometry",xe),p(qt,"library_nodes","node",Ze),p(qt,"library_visual_scenes","visual_scene",Oa),p(qt,"library_kinematics_models","kinematics_model",Rt),p(qt,"library_physics_models","physics_model",qo),p(qt,"scene","instance_kinematics_scene",vh),g(Je.animations,b),g(Je.clips,ne),g(Je.controllers,V),g(Je.images,he),g(Je.effects,pe),g(Je.materials,Ne),g(Je.cameras,Qe),g(Je.lights,kt),g(Je.geometries,Tt),g(Je.visualScenes,Bt),Ba(),te();let Zo=js(i(qt,"scene")[0]);return Zo.animations=jo,Xo.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Zo.rotation.set(-Math.PI/2,0,0)),Zo.scale.multiplyScalar(Xo.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),jo},kinematics:df,library:Je,scene:Zo}}};var wm=new _n,mc=new U,ur=class extends ac{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Ot(e,3)),this.setAttribute("uv",new Ot(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new hr(t,6,1);return this.setAttribute("instanceStart",new ci(i,3,0)),this.setAttribute("instanceEnd",new ci(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new hr(t,6,1);return this.setAttribute("instanceColorStart",new ci(i,3,0)),this.setAttribute("instanceColorEnd",new ci(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Zl(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),wm.setFromBufferAttribute(t),this.boundingBox.union(wm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)mc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(mc)),mc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(mc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};_e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new et(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Vn.line={uniforms:dc.merge([_e.common,_e.fog,_e.line]),vertexShader:`
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
		`};var is=class extends _i{constructor(e){super({type:"LineMaterial",uniforms:dc.clone(Vn.line.uniforms),vertexShader:Vn.line.vertexShader,fragmentShader:Vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Em=new U,Tm=new U,xn=new bt,bn=new bt,Ri=new bt,Gu=new U,Wu=new ct,Mn=new lc,Am=new U,gc=new _n,yc=new li,Li=new bt,Pi,dr;function Cm(n,e,t){return Li.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Li.multiplyScalar(1/Li.w),Li.x=dr/t.width,Li.y=dr/t.height,Li.applyMatrix4(n.projectionMatrixInverse),Li.multiplyScalar(1/Li.w),Math.abs(Math.max(Li.x,Li.y))}function sM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Mn.start.fromBufferAttribute(s,a),Mn.end.fromBufferAttribute(r,a),Mn.applyMatrix4(t);let c=new U,h=new U;Pi.distanceSqToSegment(Mn.start,Mn.end,h,c),h.distanceTo(c)<dr*.5&&e.push({point:h,pointOnLine:c,distance:Pi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function rM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Pi.at(1,Ri),Ri.w=1,Ri.applyMatrix4(e.matrixWorldInverse),Ri.applyMatrix4(i),Ri.multiplyScalar(1/Ri.w),Ri.x*=r.x/2,Ri.y*=r.y/2,Ri.z=0,Gu.copy(Ri),Wu.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(xn.fromBufferAttribute(l,d),bn.fromBufferAttribute(c,d),xn.w=1,bn.w=1,xn.applyMatrix4(Wu),bn.applyMatrix4(Wu),xn.z>u&&bn.z>u)continue;if(xn.z>u){let b=xn.z-bn.z,D=(xn.z-u)/b;xn.lerp(bn,D)}else if(bn.z>u){let b=bn.z-xn.z,D=(bn.z-u)/b;bn.lerp(xn,D)}xn.applyMatrix4(i),bn.applyMatrix4(i),xn.multiplyScalar(1/xn.w),bn.multiplyScalar(1/bn.w),xn.x*=r.x/2,xn.y*=r.y/2,bn.x*=r.x/2,bn.y*=r.y/2,Mn.start.copy(xn),Mn.start.z=0,Mn.end.copy(bn),Mn.end.z=0;let v=Mn.closestPointToPointParameter(Gu,!0);Mn.at(v,Am);let m=Rs.lerp(xn.z,bn.z,v),f=m>=-1&&m<=1,E=Gu.distanceTo(Am)<dr*.5;if(f&&E){Mn.start.fromBufferAttribute(l,d),Mn.end.fromBufferAttribute(c,d),Mn.start.applyMatrix4(o),Mn.end.applyMatrix4(o);let b=new U,D=new U;Pi.distanceSqToSegment(Mn.start,Mn.end,D,b),t.push({point:D,pointOnLine:b,distance:Pi.origin.distanceTo(D),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var mo=class extends zt{constructor(e=new ur,t=new is({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Em.fromBufferAttribute(t,o),Tm.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Em.distanceTo(Tm);let r=new hr(s,2,1);return e.setAttribute("instanceDistanceStart",new ci(r,1,0)),e.setAttribute("instanceDistanceEnd",new ci(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Pi=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;dr=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),yc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=dr*.5;else{let u=Math.max(s.near,yc.distanceToPoint(Pi.origin));c=Cm(s,u,l.resolution)}if(yc.radius+=c,Pi.intersectsSphere(yc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),gc.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=dr*.5;else{let u=Math.max(s.near,gc.distanceToPoint(Pi.origin));h=Cm(s,u,l.resolution)}gc.expandByScalar(h),Pi.intersectsBox(gc)!==!1&&(i?sM(this,t):rM(this,s,t))}};var aM="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",go=null;function oM(){if(go)return go;go=new Map;for(let n of aM.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,o]=i.split(" ");go.set(t?t+"/"+s:s,[+r,+o])}}return go}var fr=Math.PI/180;function lM(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*fr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*fr,o=(23.439-36e-8*i)*fr,a=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(o)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*fr+t*fr-a,u=e*fr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/fr}function cM(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=oM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function Rm(n=Date.now(),e=cM()){if(e.lat==null){let r=new Date(n),o=r.getHours()+r.getMinutes()/60,a=o>=7&&o<20,l=new Date(n);return l.setHours(a?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:a,next:+l}}let t=r=>lM(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let o=r-s,a=r;for(;a-o>3e4;){let l=(o+a)/2;t(l)===i?o=l:a=l}return{day:i,next:Math.ceil(a)}}return{day:i,next:n+24*36e5}}var Lm=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim();var hM={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},Pm=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>hM[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);var uM=["core","artists","specialists","team","people"];function $u(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>uM.includes(s));return t.card==="portrait"?i&&(Pm(Lm(e.body,"en")).join(" ")+Pm(Lm(e.body,"fr")).join(" ")).length>40:!0}var ui=["en","fr","ca","es"];var dM={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function Om(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of dM[e]||ui)if(n[t])return n[t];return""}var vo={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type a bullshit title",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Squares",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Tape un titre bidon",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Carr\xE9s",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Escriu un t\xEDtol inventat",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Quadrats",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Escribe un t\xEDtulo inventado",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadrados",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web"}},fM={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},_o={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function qu(){return Object.fromEntries(ui.map(n=>[n,""]))}function pr(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:ui.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||qu(),e.sub=e.sub||qu(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:qu();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(ui.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(ui.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=fM[s.layout]?s.layout:"carousel",s.card=_o[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(ui.map(o=>[o,s[r]||""]))),ui.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(ui.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(Yu):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function Xu(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function km(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function xo(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function Ae(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var pM=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function pa(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!pM.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function mr(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var Yu=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Ls(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function ju(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function Im(n){try{let e=await ju();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function Nm(n,e){let t=await ju();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Dm(n){try{let e=await ju();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var vc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return pr(structuredClone(window.HC_CONTENT));let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return pr(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var _c=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await Im("demo:content:v6");if(e)return pr(e);if(window.HC_CONTENT)return pr(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return pr(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await Dm("demo:file:"+i.path);continue}await Nm("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await Nm("demo:content:v6",e),"demo"}async reset(){await Dm("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await Im("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},Um=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],yo=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],mM=["font","size","lh","weight","italic","ls","upper"],Bm=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function gM(n){let e=Um.find(i=>i.id===n);if(e)return e.css;let t=Bm(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:Um[0].css}function di(n,e){let t=yo.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...mM,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=gM(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function Fm(n){let e=[],t=[],i=[],s=[];for(let r of yo){if(r.vars||!r.sel)continue;let o=di(n,r.id),a=r.id;s.push(`--f-${a}: ${o.css}`,`--w-${a}: ${o.weight||400}`,`--st-${a}: ${o.italic?"italic":"normal"}`,`--tt-${a}: ${o.upper?"uppercase":"none"}`,`--ls-${a}: ${o.ls||0}em`),o.size&&s.push(`--s-${a}: ${o.size}px`,`--lh-${a}: ${o.lh?o.lh:+(o.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of yo){let o=n&&n.typo&&n.typo[r.id]||{},a=di(n,r.id),l=h=>o[h]!==void 0&&o[h]!==""&&o[h]!==null&&o[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${a.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${a.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(a.size*r.clamp[0])}px, ${(a.size/r.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?a.lh:+(r.lh*a.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${a.weight}`),l("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${a.ls}em`),l("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?a.lh:r.lh*a.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function zm(n){let e=new Map;for(let t of yo){let i=di(n,t.id),s=Bm(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function Zu(n){let e=new Set;for(let t of yo){let i=di(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function Hm(n,e,t=!1){let i=di(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let h=r.measureText(o),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(o,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var Vm=window.HC_BASE||"",Tc=window.HC_MODE==="demo"?new _c(Vm):new vc(Vm),Os=window.HC_ASSETS||null,Cg=location.protocol==="file:",Rg=(()=>{let n=document.querySelector("base"),e=n?document.baseURI:new URL("./",location.href).href;if(!Cg&&(window.HC_ROUTE||{}).pages)if(n)n.href=e;else{let t=document.createElement("base");t.href=e,document.head.prepend(t)}return new URL(e)})(),Lg=20261102;window.HC_SITE_VERSION=Lg;var St=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,yt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return St&&St.files&&St.files[e]?St.files[e]:Os&&Os[e]&&Os[e].startsWith("data:")?Os[e]:Tc.url(e)};async function yM(n){if(Os&&Os[n]&&!Os[n].startsWith("data:"))return Os[n];let e=await fetch(yt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,Nn="en",ce=n=>Om(n,Nn),Me=n=>(vo[Nn]||vo.en)[n],vM=42,le={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Vs={zoom:2,focus:300},_M=.08,Gm={};function Pg(n){if(le.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{le[t]=Gm[t]}):(e.forEach(t=>{Gm[t]=le[t]}),Object.assign(le,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),le.animationMode=n}var pd=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=Xu(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(ui.map(s=>[s,(vo[s]||vo.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?ce(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:le.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Nt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new pd(this.section.def)}},Nt=[],vt={x:0,y:0,z:0,zoom:Vs.zoom},On={x:0,y:0,z:0},as=0,bi=[],xM={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function an(n,e,t,i={}){for(let r of bi)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:as+(i.delay||0),ease:xM[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return bi.push(s),s}var Po=(n,e)=>an({},n,{},{onComplete:e,ease:"linear"});function Sn(n){for(let e=bi.length-1;e>=0;e--)bi[e].obj===n&&bi.splice(e,1)}function Ea(n){return bi.some(e=>e.obj===n&&as>=e.start)}function Ig(n,e){if(!e&&as<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(as-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function bM(){for(let n of bi.slice())if(Ig(n,!1)){let e=bi.indexOf(n);e>=0&&bi.splice(e,1),n.onComplete&&n.onComplete()}}function Ng(){bi.splice(0).forEach(n=>Ig(n,!0))}function MM(n,e,t,i,s,r,o){Sn(vt),an(vt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-vt.x)/2,y:e+500,z:(t-vt.z)/2}}),Bd(i,s,r,o)}function Bd(n,e,t,i){Sn(On),an(On,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function SM(n,e,t,i){Sn(vt),an(vt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Dc=1,wn=n=>n<=1?1:1-Math.pow(1-1/n,Dc),Ui=Math.PI/180,md=(n,e,t)=>new U(n,e,-t),Ps=(n,e,t)=>[-n,e,t],mn=document.getElementById("stage"),$s=new so({canvas:mn,antialias:!0});$s.debug.checkShaderErrors=!1;$s.setPixelRatio(Math.min(window.devicePixelRatio||1,2));$s.setClearColor(16777215,1);var ls=new or;ls.add(new tc(16777215,14211288,2.2));var Dg=new da(16777215,1.2);Dg.position.set(300,800,500);ls.add(Dg);var Wn=new tn(60,1,1,6e4),Ug=new is({color:le.lineColor,linewidth:le.lineThickness}),gd=new is({color:le.planeFrameColor,linewidth:le.planeFrameThickness}),Og=new is({color:le.planeFrameSelectColor,linewidth:le.planeFrameThickness}),Ac=new is({color:le.locatorColor,linewidth:1.3}),kg=[Ug,gd,Og,Ac],Bg=new ho;Bg.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:yt(n));var Ju=new Map;function cs(n){return n?Cg&&!/^(data:|blob:|https?:)/.test(yt(n))?Promise.reject(new Error("local")):(Ju.has(n)||Ju.set(n,new Promise((e,t)=>{let i=new Image;/^https?:/.test(yt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=yt(n)})),Ju.get(n)):Promise.reject(new Error("no image"))}function Fd(n){return n.colorSpace=Yt,n.anisotropy=Math.min(8,$s.capabilities.getMaxAnisotropy()),n}var wM=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=Fd(new ca(n)),t=new es(1,1),i=new or;return[Xn,pn,Gn].forEach(s=>i.add(new zt(t,new nn({map:e,side:s})))),i.add(new zt(t,new nn({color:1118481}))),i.add(new ro(new oa({map:e,transparent:!0}))),i})(),Wt=0,Ht=0,ni=!1,Uc=()=>ni,xr=0,Wm=0,Io=()=>ve.settings.negative==="auto";function Zc(){if(!Io())return xr=0,!!ve.settings.negative;let n=Rm();return xr=n.next,!n.day}function zd(){if(St||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!Io()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function Fg(n){n!==ni&&(ni=n,lh(),Pe&&Pe.retexture())}function Hd(){if(clearTimeout(Wm),!Io())return;Wm=setTimeout(()=>{if(Date.now()>=xr-1e3){let e=Zc(),t=zd();Fg(t??e)}Hd()},Math.min(Math.max(xr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&xr&&Date.now()>=xr){let n=Zc(),e=zd();Fg(e??n),Hd()}});var zg=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},ti=()=>{let n=ve.settings.accent||"#ffcc00";return Uc()?zg(n):n},Jc='Georgia, Gelasio, "Times New Roman", serif',hn='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',Hg=400,Vg=Jc,Gg=!1,Wg=1,Mi=n=>`${Hg} ${n}px ${Jc}`,os=n=>`${Gg?"italic ":""}400 ${Math.round(n*Wg*10)/10}px ${Vg}`,Vd=1,tt=n=>Math.round(n*Vd),EM=700,Kc=()=>{let n=Wt||window.innerWidth,e=Ht||window.innerHeight;return n<EM||Math.min(n,e)<500},hs=Kc;function qs(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?Zu(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var $m=0,$g=[];function TM(){It&&(s0(),i0()),clearTimeout($m),$m=setTimeout(async()=>{try{await Promise.all(Zu(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||Sd(),Pe&&!Pe.loading&&Pe.retexture()},150)}function qg(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=Fm(n);e.textContent!==t&&(e.textContent=t);let i=zm(n);document.querySelectorAll("link[data-hc-font]").forEach(o=>{i.includes(o.href)||o.remove()}),i.forEach(o=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(o)}"]`)){let a=document.createElement("link");a.rel="stylesheet",a.href=o,a.dataset.hcFont="",$g.push(new Promise(l=>{a.onload=()=>{l(),TM()},a.onerror=l})),document.head.appendChild(a)}});let s=di(n,"card"),r=di(n,"subtitle");Hg=s.weight||400,Vg=r.css,Gg=!!r.italic,Wg=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,Jc=s.css,hn=di(n,"cardsm").css,Vd=Math.max(.5,Math.min(2,(+di(n,"card").scale||100)/100))}function Jt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function on(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),Fd(new ca(s))}function Oi(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),Uc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var xa=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function Xg(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function Ta(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var ko=n=>Nt.some(e=>e.def.id===n.section),AM=(n,e)=>Nt.findIndex(t=>t.def.id===n.section)-Nt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),Oc=n=>ve.posts.filter(e=>e.published&&e!==n&&ko(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(AM),No=n=>{let e=xo(ve,n).filter(ko);return e.length?e:Oc(n)},CM=["core","artists","specialists","team","people"],Cc=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.section==="studio"||(n.tags||[]).includes("partners"))&&(n.tags||[]).length>0&&!(n.tags||[]).some(e=>CM.includes(e)),Yg=n=>km(ve,n).filter(ko),Bs=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Aa(e.src)==="image")||{}).src||"",qm=new Map,yd=n=>Oc(n).filter(Bs);async function Qc(n,e=No(n)){let t=e.filter(Bs);if(!t.length)return null;let i=t.find(r=>r.id===qm.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await cs(Bs(r)).catch(()=>null);if(o)return qm.set(n.id,r.id),{im:o,project:r}}return null}function eh(n,e,t,i,s){Oi(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function jg(n,e){let t=ce(n.title).trim(),i=ce(n.subtitle).trim();if(!t&&!i)return null;let s=hs(),r=s?24:Math.max(9,Math.min(13.5,e*.053)),o=s?17:Math.max(7.5,r*.74),a=Math.round(r*(s?.6:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d");c.font=Mi(r);let h=t?Jt(c,t,l).slice(0,2):[];c.font=os(o);let u=i?Jt(c,i,l).slice(0,2):[],d=Math.round(r*1.2),p=Math.round(o*1.25),g=Math.ceil(a+h.length*d+(u.length?3+u.length*p:0)+a-2);return{tex:on(e,g,m=>{m.fillStyle="rgba(0,0,0,.62)",m.fillRect(0,0,e,g),m.textBaseline="top";let f=a;m.fillStyle="#fff",m.font=Mi(r),h.forEach(E=>{m.fillText(E,a,f),f+=d}),f+=3,m.font=os(o),u.forEach(E=>{m.fillText(E,a,f),f+=p})},3),bh:g,w:e}}async function RM(n,e,t){let i=n.thumb?await cs(n.thumb).catch(()=>null):null,s=n.thumbBack?await cs(n.thumbBack).catch(()=>null):null,r=i?null:await Qc(n);await qs();let o=(c,h=!1)=>{if(i){Oi(c,i,0,0,e,t);return}r?eh(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=hs(),d=u?14:16,p=u?[tt(31),tt(34),2]:[tt(24),28,3],g=u?[tt(20),tt(23),1]:[tt(13),16,2],v=u?tt(15):10,m=u?tt(13):9,f=u?26:20;c.fillStyle=ti(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=Mi(p[0]);let E=Jt(c,ce(n.title),e-2*d).slice(0,p[2]),b=u?22:30;E.forEach((P,R)=>c.fillText(P,d,b+R*p[1])),c.font=os(g[0]),Jt(c,ce(n.subtitle),e-2*d).slice(0,u&&E.length<2?2:g[2]).forEach((P,R)=>c.fillText(P,d,b+8+E.length*p[1]+R*g[1]));let D=r?sg(r.project,r.project.media[0]&&r.project.media[0].credit):sg(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${hn}`,c.fillText([n.date,ce(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(D?f+v+6:v+12)),D){c.font=`${m}px ${hn}`;let P=D;for(;c.measureText(P).width>e-2*d&&P.length>4;)P=P.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(P,d,t-f/2)}c.globalAlpha=1},a=on(e,t,o,2),l=s?on(e,t,c=>Oi(c,s,0,0,e,t),2):r?on(e,t,Ta(e,c=>o(c,!0)),2):on(e,t,Xg(o),1.5);return[a,l,i?jg(n,e):null]}async function LM(n,e,t){let i=n.thumb?await cs(n.thumb).catch(()=>null):null,s=n.thumbBack?await cs(n.thumbBack).catch(()=>null):null,r=i||Cc(n)?null:await Qc(n,yd(n));await qs();let o=(l,c=!1)=>{if(Cc(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=hs()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${hn}`;let v=Jt(l,ce(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),Uc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),Uc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Oi(l,i,0,0,e,t);return}r?eh(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=os(Math.round(t*.42*Vd)),l.textAlign="center",l.textBaseline="middle",l.fillText(xa(ce(n.title)),e/2,t*.45),l.fillStyle=ti(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?on(e,t,l=>Oi(l,s,0,0,e,t),3):r?on(e,t,Ta(e,l=>o(l,!0)),2):on(e,t,Xg(o),2);return[on(e,t,o,3),a,i||r||Cc(n)?jg(n,e):null]}async function PM(n,e,t){let i=await Qc(n);if(i)return IM(n,e,t,i);let s=n.thumb?await cs(n.thumb).catch(()=>null):null;await qs();let r=ce(n.title).trim(),o=hs(),a=tt(o?30:21),l=o?tt(32):22,c=o?2:3,h=s?72:18,u=e-h-14,d=on(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Oi(g,s,13,12.75,53,53):(g.fillStyle=ti(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=Mi(a),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=on(e,t,Ta(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=Mi(a),g.textBaseline="top",Jt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function IM(n,e,t,i){await qs();let s=ce(n.title).trim(),r=e-32,o=hs(),a=tt(o?30:21),l=o?tt(32):22,c=h=>u=>{eh(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=ti(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=Mi(a),u.textBaseline="top",Jt(u,s,r).slice(0,o?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[on(e,t,c(!1),2),on(e,t,Ta(e,c(!0)),2)]}async function NM(n,e,t){let i=n.thumb?await cs(n.thumb).catch(()=>null):null;await qs();let r=on(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),Oi(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=ti(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${tt(12)}px ${Jc}`,o.textAlign="center",o.textBaseline="top",o.fillText(ce(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var DM={image:RM,portrait:LM,text:PM,place:NM};async function UM(n,e,t){let i=n.thumb?await cs(n.thumb).catch(()=>null):null,s=i?{im:i}:await Qc(n);await qs();let r=ce(n.title).trim(),o=(ce(n.subtitle).trim()||mr(ce(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=hs(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],m=(P,R)=>{P.globalAlpha=R,P.textBaseline="top";let N=e-h-12;P.fillStyle=ti(),P.fillRect(h,a?9:13,14,2),P.fillStyle="#fff",P.font=Mi(tt(d));let z=a?16:22;Jt(P,r,N).slice(0,l?3:2).forEach(S=>{P.fillText(S,h,z),z+=tt(p)}),P.globalAlpha=1},f=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Oi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.18)",P.fillRect(0,0,e,t)),m(P,.38)},E=P=>{let R=P.createLinearGradient(0,0,0,t);R.addColorStop(0,"rgba(0,0,0,.7)"),R.addColorStop(1,"rgba(0,0,0,.3)"),P.fillStyle=R,P.fillRect(0,0,e,t),m(P,1)},b=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Oi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.22)",P.fillRect(0,0,e,t));let R=P.createLinearGradient(0,t*.3,0,t);R.addColorStop(0,"rgba(0,0,0,0)"),R.addColorStop(1,"rgba(0,0,0,.82)"),P.fillStyle=R,P.fillRect(0,t*.3,e,t*.7);let N=Math.round(e*.07),z=e-2*N,S=No(n).length;P.textBaseline="top",P.fillStyle="#fff",S&&(P.font=`600 ${tt(11)}px ${hn}`,P.fillText(`${S} ${Me("nProjects")}`.toUpperCase(),N,N));let M=ce(n.subtitle).trim();P.font=`${tt(11.5)}px ${hn}`;let B=M?Jt(P,M,z).slice(0,2):[],ie=t-N-B.length*tt(14);B.forEach((O,G)=>P.fillText(O,N,ie+G*tt(14))),P.font=os(tt(26));let de=Jt(P,r,z).slice(0,2);ie-=(B.length?tt(6):0)+de.length*tt(25),de.forEach((O,G)=>P.fillText(O,N,ie+G*tt(25)))};return[on(e,t,(P=>R=>{if(l&&!P){b(R);return}R.fillStyle="#111",R.fillRect(0,0,e,t),s&&l&&!P&&eh(R,s,e,t,.6),s&&!l&&Oi(R,s.im,e-c,0,c,t),R.textBaseline="top",R.fillStyle=ti(),R.fillRect(h,a?9:13,14,2),R.fillStyle="#fff",R.font=Mi(tt(d));let N=Jt(R,r,u).slice(0,l?3:2),z=a?16:22;N.forEach(B=>{R.fillText(B,h,z),z+=tt(p)}),z+=a?2:5,R.font=os(tt(g));let S=l?0:Math.max(0,Math.floor((t-z-8)/tt(v))),M=Jt(R,o,u);if(M.length>S&&(M=M.slice(0,S),S)){let B=M[S-1];for(;B&&R.measureText(B+"\u2026").width>u;)B=B.replace(/\s*\S+$/,"");M[S-1]=B+"\u2026"}M.forEach(B=>{R.fillText(B,h,z),z+=tt(v)}),R.globalAlpha=1})(!1),2),on(e,t,Ta(e,f),2),null,on(e,t,Ta(e,E),2)]}function xc(n,e){return qs().then(()=>e==="place"?on(380,300,t=>{t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(44)),t.fillText(ce(n.title)+".",32,18),t.font=os(tt(18)),Jt(t,ce(n.subtitle),320).slice(0,2).forEach((i,s)=>t.fillText(i,32,76+s*22)),t.font=`14px ${hn}`,t.fillText((n.link||"").replace(/^https?:\/\/(www\.)?/,""),32,128),t.fillStyle="#fff",mr(ce(n.body)).slice(0,4).forEach((i,s)=>t.fillText(i,32,164+s*20)),t.font=`600 15px ${hn}`,t.fillText(ce(n.place),32,260)},1.5):hs()?on(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(25));let i=Jt(t,ce(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*tt(27))),t.font=`${tt(13)}px ${hn}`;let s=Oc(n).map(d=>ce(d.title).trim()).filter(Boolean),r=s.length?Jt(t,s.join("  \xB7  "),172).slice(0,2):[],o=ce(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*tt(27);t.font=os(tt(17));let c=(r.length?a-6:o)-tt(20),h=Jt(t,ce(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=tt(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*tt(27)+p*tt(20))),r.length&&(t.font=`600 ${tt(11)}px ${hn}`,t.fillText(Me("together").toUpperCase(),14,a),t.font=`${tt(13)}px ${hn}`,r.forEach((d,p)=>t.fillText(d,14,a+16+p*16))),ce(n.place)&&(t.font=`600 ${tt(13)}px ${hn}`,t.fillText(ce(n.place).toUpperCase(),14,176))},2.5):on(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=Mi(tt(20));let i=Jt(t,ce(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${hn}`;let r=Oc(n).map(u=>ce(u.title).trim()).filter(Boolean),o=r.length?Jt(t,r.join("  \xB7  "),166).slice(0,3):[],a=(ce(n.place)?174:188)-o.length*13-13;t.font=os(tt(15));let l=(o.length?a-4:168)-18,c=[];ce(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Jt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${hn}`,mr(ce(n.body)).join(" ").split(/\s+/).length>1&&Jt(t,mr(ce(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),o.length&&(t.font=`600 8px ${hn}`,t.fillText(Me("together").toUpperCase(),19,a),t.font=`10px ${hn}`,o.forEach((u,d)=>t.fillText(u,19,a+13+d*13))),ce(n.place)&&(t.font=`600 11px ${hn}`,t.fillText(ce(n.place).toUpperCase(),19,180))}))}function OM(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${hn}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${hn}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new ro(new oa({map:Fd(new ca(s)),transparent:!0}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=2,l}var Ni=document.createElement("div");Ni.id="net-tip";Ni.className="ui";Ni.hidden=!0;document.body.appendChild(Ni);function Zg(n,e,t){Ni.innerHTML=`<b>${Ae(n.city||"")}</b>${n.titles.map(s=>`<span>${Ae(s)}</span>`).join("")}`,Ni.hidden=!1;let i=Ni.getBoundingClientRect();Ni.style.left=Math.min(e+14,Wt-i.width-10)+"px",Ni.style.top=Math.max(10,t-i.height-12)+"px"}function th(){Ni.hidden=!0}var vd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Pn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await yM(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Pn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new nn({map:p}):t.untextured==="white"?new lr({color:15921906}):t.untextured==="black"?new lr({color:2236962}):new nn({color:le.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new _n().setFromObject(a),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(d),a.updateMatrixWorld(!0);let p=new _n().setFromObject(a),g=p.getCenter(new U);a.position.set(-g.x,-p.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new _n().setFromObject(a);h.max.y-h.min.y>le.object3DMaxHeight&&a.scale.setScalar(le.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Pn;c.rotation.y=(t.rotationY||0)*Ui,c.add(a),this.container.add(c)}place(e){this.p.x=e*5*le.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*le.object3DDistance,this.container.position.copy(md(this.p.x,0,this.p.z))}};function Jg(n,e){let t=new ur;t.setPositions(n);let i=new mo(t,e);return i.computeLineDistances(),i}var _d=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Pn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new es(this.width,this.height);if(this.setBand(i),s){let h=new zt(r,new nn({map:s,side:pn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let o=new zt(r,new nn({map:e,side:Xn})),a=new zt(r,new nn({map:t,side:pn}));o.userData={post:this,face:"front"},a.userData={post:this,face:"back"},this.width+=le.planeFrameDistance,this.height+=le.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=Jg([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],gd),this.group.add(o,a,this.frame),this.meshes.push(o,a),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...Ps(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*Ui,t.rotation.x=-e.rotX*Ui,t.rotation.z=e.rotZ*Ui,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&an(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=Og,Po(.8,()=>{this.frame&&(this.frame.material=gd)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),an(this.thumb,le.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Sn(this.thumb);let i=us(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return an(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){Sn(this.thumb);let t=this.p2;an(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){an(this.thumb,le.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>an(this.thumb,le.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Sn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new zt(new es(t,s),new nn({map:e.tex,transparent:!0,depthWrite:!1,side:Xn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&an(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Sn(this.thumb),this.bhi&&Sn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!kg.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function Ku(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*Ui;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function Qu(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var ed=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Ea(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*wn(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*wn(2*i))}),kc={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:le.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*le.planeDisOrder+le.planeDistance,z:le.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/Ui+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Ku(n,e),move:(n,e,t,i)=>ed(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=le;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>Qu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>ed(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=le,o=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{Ku(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*wn(2*le.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*wn(2*le.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Ls(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=nh(n.def);return{x:i[0]+s[0],y:(le.planeDistance+e.height+Math.pow(-1,t+1)*le.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>Qu(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ea(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*wn(2*le.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=le.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*le.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/Ui+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>Ku(n,e),move:(n,e,t,i)=>ed(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*le.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>Qu(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Ea(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*wn(2*le.cameraEaseSpeed)})}}},kM=["fan","arc","map"],Xm=n=>Kc()&&kM.includes(n.layout),Gd=()=>Vs.zoom*Vs.focus*Math.min(1,Wt/900);function Kg(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:Wt-12,b:Ht-12},i=["slogan","logo","reel-btn","lang-sq","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Ht>=Wt?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("lang-sq"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<Wt/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Wt/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Wt-12),t.b-t.t<120&&(t.t=12,t.b=Ht-12),t}function Ym(n){let e=Kg(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+le.planeFrameDistance,o=n.h*n.k+le.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),m=g*a+(g-1)*c,f=v*l+(v-1)*c,E=Math.min(t/m,i/f);(!h||E>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:E})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Wt/2,fy:(e.t+e.b)/2-Ht/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var BM=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*le.planeDisOrder*.1,rotY:180}},td=2*Math.PI,Wd=n=>n+(((Math.PI-n)%td+td+Math.PI)%td-Math.PI);function jm(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>BM(e,i),focus(e,t){let i=e.postViews[t];i&&(H.selected=t,H.degreeCamera=Wd(H.degreeCamera),H.cameraY=Ca(),i.ready&&(i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70),n===kc.fan?i.turnAround("x",720):n===kc.arc&&i.turnAround("y",360)))},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}var Zm=new U,Jm=new U,xd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=kc[this.def.layout]||kc.carousel,this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?UM:DM[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?_o.text.size:_o.image.size:_o[this.card].size,this.k=$M(this.def),this.container=new Pn,this.container.position.copy(e.container.position),ls.add(this.container),this.postViews=this.posts.map((t,i)=>new _d(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),Xm(this.def)&&(this.grid=Ym(this),this.L=this.gridL=jm(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Nt.map(f=>f.def.id)),t=new Map,i=(f,E,b)=>{if(!Yu(f))return;let D=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),P=t.get(D);P||t.set(D,P={loc:f,city:f.city||"",titles:[],base:!1}),E&&!P.titles.includes(E)&&P.titles.push(E),b&&(P.base=!0)};if(Xu(ve,this.def.id).forEach(f=>i(f.location,ce(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(E=>i(E,ce(f.title)))}),!t.size)return;Ac.color.set(ti());let s=50,r=new Pn,o=[...t.values()],a=o.filter(f=>f.base),l=new jl(1,14,10),c={on:new nn({color:ti()}),base:new nn({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:as+(le.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(f=>{f.xz=Ls(f.loc)}),o.forEach(f=>{f.from=f.base?null:a.length?a.map(E=>[E,Math.hypot(Ls(E.loc)[0]-f.xz[0],Ls(E.loc)[1]-f.xz[1])]).sort((E,b)=>E[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Ls(f.from.loc)[0]-f.xz[0],Ls(f.from.loc)[1]-f.xz[1]):0}),o.sort((f,E)=>E.base-f.base||f.d-E.d);let h=70,u=null,d=-1;o.forEach(f=>{let E=o.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);E.length>d&&(d=E.length,u=E)});let p=u.reduce((f,E)=>f+E.xz[0],0)/u.length,g=u.reduce((f,E)=>f+E.xz[1],0)/u.length,v=new jt;v.position.set(...Ps(p,s,g)),r.add(v),this.net.focus=v;let m=[];o.forEach((f,E)=>{let[b,D]=f.xz,P=f.base?0:.15+E*.07,R=new zt(l,f.base?c.base:c.on);R.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),R.position.set(...Ps(b,s,D)),r.add(R),R.userData={netNode:f},this.net.hits.push(R);let N=null,z=0;if(f.from){let[B,ie]=Ls(f.from.loc),de=s+18+f.d*.32,O=2*de-s,G=(B+b)/2,F=(ie+D)/2;z=Math.max(12,Math.min(48,Math.round(f.d/6)));let ne=ee=>{let j=1-ee;return Ps(j*j*B+2*j*ee*G+ee*ee*b,j*j*s+2*j*ee*O+ee*ee*s,j*j*ie+2*j*ee*F+ee*ee*D)},q=[];for(let ee=0;ee<z;ee++)q.push(...ne(ee/z),...ne((ee+1)/z));let $=new ur;$.setPositions(q),N=new mo($,Ac),N.computeLineDistances(),$.instanceCount=0,r.add(N)}let S=null,M=1/0;if(f.city){for(let B of m){let ie=Math.max(Math.abs(B[0]-b)/80,Math.abs(B[1]-D)/22);ie<B[2]&&(M=Math.min(M,ie))}M>.06&&(S=OM(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),S.position.set(...Ps(b,s+9,D)),r.add(S),m.push([b,D,M]))}this.net.items.push({dot:R,arc:N,segs:z,label:S,thr:M,delay:P,base:f.base,ds:R.scale.x,ls:S?S.scale.clone():null,x:b,z:D})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),le.planeSpeed>0){let i=as+_M;for(;as<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*le.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,an(e.thumb,r,{y:s.y,rotX:0},{delay:le.planeSpeed/3,ease:"expoOut",onComplete:a}),an(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,an(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&(this.following.add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Ps(...i),...Ps(...s)],o=this.lines[t];o?o.geometry.setPositions(r):(o=this.lines[t]=Jg(r,Ug),this.container.add(o))}async openInfo(e,t,i){let s=await xc(this.posts[t],"place");if(!this.alive)return;let r=new zt(new es(165,130),new nn({map:s,side:Gn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),an(o.p,le.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Po(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,le.tween):t.moveToCamera(60,le.tween),this.focusInfo||(this.focusInfo={mesh:new zt(new es(90,90),new nn({side:Gn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await xc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Po(le.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Sn(i),an(i,le.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(le.tween/2),this.focusInfo&&(Sn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=Xm(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?Ym(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=jm(this.base)):this.base,r)return!0;let o=le.tween*1.2,a=H.postOpen&&uh()==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);Sn(l.thumb),this.following.add(l),an(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Sn(d.p),an(d.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=Fo(),r=Gd(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=us()+Vs.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Sn(e.thumb),an(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Sn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/Ui)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,le.cameraDistanceProportion/fs),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*wn(le.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(as-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Ps(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*Ui)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),Zm.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Jm.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(Zm).add(Jm)}}async retexture(){this.net&&(Ac.color.set(ti()),this.net.mats.on.color.set(ti()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(a=>a&&a.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(ga===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose()),i.bhi&&s[3]){let a=e(i.bhi.mesh,s[3]);a&&a.dispose()}else s[3]&&s[3].dispose();let o=this.infos[t];if(o){let a=await xc(this.posts[t],"place");if(!this.alive){a.dispose();return}let l=e(o.mesh,a);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await xc(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Sn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),th(),ls.remove(this.container)}},gr=[],Pe=null,yr=le.cameraEaseSpeed,Bi=!1,$n=!1,Fs=0,zs=0,Rc=0,Lc=0,Xs=!1,En=!1,ps=()=>gr[H.currentSection];function FM(){let n=le.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function zM(){let n=le.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var HM={map:58},nh=(n=(ps()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||HM[n.layout]||100)/100)),pi=()=>Pe&&Pe.L.grid&&Pe.grid&&Pe.section===ps()?Pe:null,VM=n=>Gd()/n.sc*Math.min(1,le.cameraDistanceProportion/fs);function ih(n){let e=n.grid,t=VM(e),i=t/Gd();return{d:Math.max(20,t-Vs.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var us=()=>{let n=pi();return n?ih(n).d:le.cameraDistance*nh()},sh=()=>{let n=pi();return n?ih(n).ty:le.cameraTargetHeight*(((ps()||{}).def||{}).layout==="map"?nh()*.62:1)},Km=()=>{let n=pi();return n?ih(n).ty:le.cameraHeight*(((ps()||{}).def||{}).layout==="map"?nh()*1.6:1)},bc=new U;function GM(){return!wr()||pi()||le.cameraDistanceProportion>=fs?0:Math.min(1,(1-le.cameraDistanceProportion/fs)*1.25)}function WM(){let n=Pe&&Pe.net&&Pe.net.focus;return n?(n.getWorldPosition(bc),{x:bc.x,y:bc.y,z:-bc.z}):null}function Bo(){let n=ps(),e=GM(),t=e?WM():null,i=sh(),s=pi();return s?{x:n.p.x-ih(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var Ca=()=>{if(!wr()||pi())return Km();let n=Math.min(1,le.cameraDistanceProportion/fs);return Bo().ty+(Km()-sh())*Math.pow(n,.55)},$M=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),Fo=()=>{let n=Bo();return{d:us(),x:n.x,z:n.z,ty:n.ty}},Zn=null;function Qg(n){if(!n||!Pe||!Pe.relayout())return;Sn(vt),Sn(On),Zn=n,pi()&&(H.degreeCamera=Wd(H.degreeCamera)),H.cameraY=Ca(),$n=!0,yr=le.cameraEaseSpeed;let e=H.postOpen&&uh()==="focus3d"&&!$e.open&&Pe.postViews[H.selected];e&&e.ready&&(Pe.L.grid?Pe.gridToCamera(e,le.tween/2):e.moveToCamera(60,le.tween/2))}var qM=0;function XM(){if(++qM%20||!Xs||H.postOpen||Bi||!En)return;let n=pi();if(!n)return;let e=Kg();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&Qg(Zn||Fo())}function YM(){if(!Zn)return;let n=Fo(),e=wn(le.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-Zn[i];Math.abs(s)>.05?(Zn[i]+=s*e,t=!1):Zn[i]=n[i]}Ea(On)||(On.x=Zn.x,On.y=Zn.ty,On.z=Zn.z),!Bi&&!$n&&!Ea(vt)&&bd(),t&&(Zn=null)}function bd(){let n=Zn||Fo();vt.x=n.x+n.d*Math.sin(H.actualDeg),vt.z=n.z+n.d*Math.cos(H.actualDeg)}function rh(){gr.forEach((n,e)=>{e===H.currentSection?n.container.parent||ls.add(n.container):n.container.parent&&ls.remove(n.container)}),Bi=!1,$n=!1,mn.classList.remove("dragging"),ga=null,ba=null,wo=null,Pe&&Pe.destroy(),Zn=null,Pe=new xd(ps()),To(H.selected),H.actualDeg=H.degreeCamera,jM()}function jM(){let n=Bo();H.cameraY=Ca(),MM(us()*Math.sin(H.degreeCamera)+n.x,H.cameraY,us()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,le.cameraSpeed)}function To(n){H.selected=n,Pe&&Pe.focus(n)}function nd(n){!Pe||!Pe.n||($n=!0,Pe.checkPostSelected(),yr=le.cameraKeyboardSpeed,To(n==="NEXT"?Pe.goNext():Pe.goPrev()))}var Di=()=>Wt>700&&Ht>520;function ah(){let t=le.cameraDistanceProportion/280;le.cameraDistance=Math.round((Ht<680?1e3-Ht:320)*t)}function e0(){if($n=!1,ah(),!Xs)return;let n=Bo();if(H.postOpen&&uh()==="focus3d"&&!$e.open&&Pe&&Pe.postViews[H.selected]){let t=Pe.postViews[H.selected];Pe.L.grid?Pe.gridToCamera(t,le.tween/2):t.moveToCamera(100,0)}let e=wr()||pi();SM(n.x+us()*Math.sin(H.actualDeg),e?H.cameraY:vt.y,n.z+us()*Math.cos(H.actualDeg),le.cameraSpeed/2),e&&Bd(n.x,n.ty,n.z,le.cameraSpeed/2)}function ZM(){if(!En){Math.abs(vt.y-H.cameraY)>.007&&!Ea(vt)&&(vt.y-=(vt.y-H.cameraY)*wn(le.cameraEaseSpeed));return}if(Bi){yr=le.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(Fs-Rc)/150,H.actualDeg-=(H.actualDeg-n)*wn(yr),bd(),H.cameraY+=(zs-Lc)*2;let e=le.cameraHeight,t=wr()?Bo().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),vt.y-=(vt.y-H.cameraY)*wn(yr),le.animationMode&&Pe&&Pe.movePosts((Rc-Fs)/Math.max(Dc,.25),(Lc-zs)/Math.max(Dc,.25),yr),Rc=Fs,Lc=zs}else $n?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&($n=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*wn(le.cameraEaseSpeed),bd(),vt.y-=(vt.y-H.cameraY)*wn(yr),le.animationMode&&Pe&&Pe.movePosts(0,0,le.cameraEaseSpeed)):Math.abs(vt.y-H.cameraY)>.007&&(vt.y-=(vt.y-H.cameraY)*wn(le.cameraEaseSpeed))}function JM(){vt.zoom=6;let e=Pe&&Pe.postViews[0]&&Pe.postViews[0].p2.y||le.planeDistance;vt.y=e+100,On.y=e+100,Bd(On.x,sh(),On.z,1),En=!1,an(vt,1,{zoom:Vs.zoom},{ease:"expoOut"}),setTimeout(()=>{En=!0},1*1e3+50)}var id=new U,sd=new U,bo=new U,Mo=1;function KM(){id.copy(md(vt.x,vt.y,vt.z)),sd.copy(md(On.x,On.y,On.z)),bo.subVectors(sd,id),bo.lengthSq()<1e-6&&bo.set(0,0,-1),bo.normalize();let n=wr()&&!pi()?Math.min(1,le.cameraDistanceProportion/fs):1;Mo+=Math.abs(n-Mo)<.001?n-Mo:(n-Mo)*wn(le.cameraEaseSpeed),Wn.position.copy(id).addScaledVector(bo,-Vs.focus*Mo),Wn.lookAt(sd);let e=Math.min(1,Wt/900),t=2*Math.atan(Ht/2/(vt.zoom*Vs.focus*e))/Ui;Math.abs(Wn.fov-t)>1e-4&&(Wn.fov=t,Wn.updateProjectionMatrix())}function t0(){Wt=window.innerWidth,Ht=window.innerHeight,$s.setSize(Wt,Ht,!1),Wn.aspect=Wt/Ht,Wn.updateProjectionMatrix(),kg.forEach(n=>n.resolution.set(Wt,Ht))}var In=document.getElementById("menu"),rn=document.getElementById("slogan"),Dn=document.getElementById("langs"),oh=[];function QM(){In.innerHTML="",oh=Nt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=ce(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&En&&zo(e)}),t.appendChild(i),In.appendChild(t),i}),In.style.setProperty("--n",Nt.length),$d()}function $d(){oh.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function eS(){oh.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),In.hidden=!1,Dn.hidden=!1,br(),setTimeout(()=>In.classList.add("ready"),(Nt.length+1)*200)}var tS=1.44,Qm={col:362,gutter:160,side:79,top:34,bottom:20},eg={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Is(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in Qm){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?Qm[t]:Math.max(eg[t][0],Math.min(eg[t][1],Math.round(+i)))}return e}function Md(n){let e=Is(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Wt-2*le.margin)/($e.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function n0(){let n=Ht<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=rn.offsetTop+rn.offsetHeight+(n?1:2)*le.margin,t=$e.height+12,i=n?24:(In.offsetHeight||90)+70,s=(Ht-e-i)/t,r=(Ht-e-56)/t,o=Wt>700&&!n?14/(+di(ve.settings,"body").size||14):0,a=Math.max(n?.4:.5,Math.min(tS,Math.max(s,Math.min(o,r))));$e.scale=a,Kt.style.top=e+"px",Kt.style.transform=a!==1?`scale(${a.toFixed(3)})`:"",Kt.style.width=a!==1?Math.ceil((Wt-le.margin)/a)+"px":"",Kt.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Ht-(e+t*a)<In.offsetHeight+60)}var tg=()=>{let n=Dn.getBoundingClientRect();return n.height?n.top:Ht-(Di()?44:48)};function br(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&$e.open&&$e.height>100){let n=rn.offsetTop+rn.offsetHeight+$e.height*($e.scale||1)+2*le.margin+30;n=Math.min(n,tg()-In.offsetHeight-22),In.style.left=le.margin+"px",In.style.top=n+"px"}else{let n=Dn.hidden?Ht-30:tg();if(!Di()&&!Gs.hidden){let e=Gs.getBoundingClientRect();e.height&&e.left<Wt/2&&(n=Math.min(n,e.top))}In.style.left=(Di()?26:le.margin)+"px",In.style.top=Math.round(Math.min(Ht-(In.offsetHeight||86)-(Di()?100:56),n-(In.offsetHeight||86)-24))+"px"}if(document.body.classList.toggle("post-open-wide",Di()&&!!H.postOpen),s0(),i0(),!(H.postOpen&&$e.open&&$e.height>100)){let n=Math.max(0,...["reel-btn","about-btn","lang-sq"].map(e=>document.getElementById(e)).filter(e=>e&&!e.hidden&&e.offsetHeight).map(e=>e.offsetTop+e.offsetHeight));n&&In.offsetTop<n+18&&(In.style.top=n+18+"px")}}function i0(){if(!ue||!ue.btn)return;let n=ue.btn;n.style.top=Math.round(rn.offsetTop+rn.offsetHeight+(Di()?26:16))+"px",n.style.left=rn.offsetLeft+2+"px",n.style.right="auto",$c()}function s0(){Gs.style.top=Gs.style.left="",wd.style.maxHeight=Math.max(140,Ht-200)+"px",document.body.classList.toggle("cats-up",!Di()&&Wt<560)}var ng=(n,e=!1)=>Hm(n,ve.settings,e);function Sd(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?yt(n.logo):ng(ni?"#ffffff":e,ni),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:ng("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),iS(n.logo?t:nS)}var nS="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function iS(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var Pc="",Bc=document.querySelector('meta[name="description"]'),ig=Bc?Bc.content:"",qd=document.title;function Xd(n){if(!(St||!ve)){document.title=n?`${ce(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:qd,Bc&&(Bc.content=n&&(mr(ce(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||ce(n.subtitle))||ig);try{let e=new URL(location.href),t=window.HC_ROUTE||{};if(t.pages&&location.protocol!=="file:"){let i=Rg;e.searchParams.delete("p"),e.searchParams.delete("lang"),e.pathname=i.pathname+(n&&$u(ve,n)?`${Nn}/${encodeURIComponent(n.id)}/`:t.p||e.pathname!==i.pathname?`${Nn}/`:""),n&&!$u(ve,n)&&e.searchParams.set("p",n.id)}else n?e.searchParams.set("p",n.id):e.searchParams.delete("p");e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&Ra("?p="+n.id,document.title)}}function sS(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||St||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{Pc||Ra("",qd)}),document.head.appendChild(e)}function Ra(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:((window.HC_ROUTE||{}).pages?Rg.pathname:location.pathname.replace(/index\.html$/,""))+n,title:e,event:t})}catch{}}function lh(){let n=ve.settings;qg(),qc(),Vo(),document.documentElement.lang=Nn,document.documentElement.classList.toggle("neg",ni),H.postOpen||(document.title=qd||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[Nn]||n.taglines.en)||[],t=e.length?`<b class="wm">${Ae(e[0])}</b>${e.slice(1).map(a=>`<span>${Ae(a)}</span>`).join("")}`:Ae(n.name);if(rn.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${Ae(Me("homeLink"))}">${Ae(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${Ae(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,Sd(),!n.logo&&document.fonts){let a=di(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{ve.settings.logo||Sd()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(ni)),l.title=Me(ni?"toPos":"toNeg"),l.setAttribute("aria-label",l.title)):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.removeAttribute("aria-label"),l.removeAttribute("title")))}),kn.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),Ws.classList.contains("wait")||cf(ce(n.home.enter)||Me("enter")),gS(),MS(),Jn(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=Me(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",Me("keys")),Ao.setAttribute("aria-label",Me("prev")),Fc.setAttribute("aria-label",Me("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=Me("category"));let r=n.langs&&n.langs.length?n.langs:ui;rS(r);let o=document.getElementById("lang-sq");o||(o=document.createElement("div"),o.id="lang-sq",o.className="ui",document.body.appendChild(o),document.addEventListener("pointerdown",a=>{a.target.closest("#lang-sq")||o.classList.remove("open")})),[document.getElementById("home-langs"),o].forEach(a=>{if(a.innerHTML="",a.classList.add("hlg"),a.classList.remove("open"),a.hidden=r.length<2,r.length<2)return;let l=document.createElement("button");l.type="button",l.className="cur",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label",Me("lang")+" : "+Nn.toUpperCase()),l.innerHTML=`<b class="ic">${Nn.toUpperCase()}</b>`,l.addEventListener("click",()=>{let h=a.classList.toggle("open");l.setAttribute("aria-expanded",String(h))});let c=document.createElement("span");c.className="opts",r.filter(h=>h!==Nn).forEach(h=>{let u=document.createElement("button");u.type="button",u.textContent=h.toUpperCase(),u.lang=h,u.setAttribute("aria-label",Me("lang")+" "+h.toUpperCase()),u.addEventListener("click",()=>Yd(h)),c.appendChild(u)}),a.append(l,c)}),$c(),document.documentElement.style.setProperty("--accent",ti()),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",zg(ve.settings.accent||"#ffcc00")),$S()}function rS(n){if(Dn.innerHTML="",Dn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",Me("lang")+" : "+Nn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${Nn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==Nn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",Me("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{Dn.classList.remove("open"),Yd(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=Dn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),Dn.append(t,e)}document.addEventListener("pointerdown",n=>{if(Dn.classList.contains("open")&&!Dn.contains(n.target)){Dn.classList.remove("open");let e=Dn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});Dn.addEventListener("keydown",n=>{if(n.code==="Escape"&&Dn.classList.contains("open")){n.stopPropagation(),Dn.classList.remove("open");let e=Dn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function Yd(n){if(n!==Nn){Nn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(document.documentElement.lang=n,lh(),Xs){oh.forEach((i,s)=>{i.textContent=ce(Nt[s].def.name)}),ch();let e=H.postOpen,t=H.selected;Si(),H.selected=t,rh(),e&&Po(.6,()=>Uo(t))}H.postOpen||Xd(null)}}var Do=document.getElementById("cats"),Gs=document.getElementById("cat-box"),wd=document.getElementById("cat-list"),r0=document.getElementById("cat-name"),Ed=document.getElementById("cat-open"),Ao=document.getElementById("pg-prev"),Fc=document.getElementById("pg-next");function ch(){let n=H.data,e=n.categoryList;Gs.hidden=e.length<=1,wd.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${Ae(ce(t.label))} <span class="n">(${n.countOf(t.id)})</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{Td(),lS(t.id)}),i.appendChild(s),wd.appendChild(i)}),r0.innerHTML=`${Ae(n.currentCatName)} <span class="n">(${n.countOf(n.category)})</span>`,a0(),Td()}var Mc=document.getElementById("pg-num");function a0(){let n=H.data;Ao.disabled=!n.hasNewer(),Fc.disabled=!n.hasOlder(),Ao.hidden=Fc.hidden=!n.hasNewer()&&!n.hasOlder(),Mc&&(Mc.hidden=Ao.hidden,Mc.textContent=`${n.page}/${n.pages}`,Mc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function Td(){clearTimeout(jd),Gs.classList.remove("open"),Ed.setAttribute("aria-expanded","false")}var jd=0,o0=-1e9;Gs.addEventListener("pointerenter",()=>clearTimeout(jd));Ed.addEventListener("click",()=>{clearTimeout(jd);let n=Gs.classList.toggle("open");Ed.setAttribute("aria-expanded",String(n))});Ao.addEventListener("click",()=>{En&&p0("newer")});Fc.addEventListener("click",()=>{En&&p0("older")});var Ys=document.getElementById("kb"),Zd=document.getElementById("kb-toggle"),l0=null;function Ad(){Ys.classList.add("open"),Zd.setAttribute("aria-expanded","true")}function zc(){Ys.classList.remove("open"),Zd.setAttribute("aria-expanded","false")}Zd.addEventListener("click",()=>{clearTimeout(l0),Ys.classList.contains("open")?zc():Ad()});Ys.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>g0({code:n.dataset.k,preventDefault(){}})));function ss(n){let e=Ys.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function c0(){Ys.querySelector(".key.anim").classList.toggle("off",!le.animationMode)}var Jd=document.getElementById("whiteboard"),Kt=document.getElementById("post2d"),Ns=document.getElementById("strip");function sg(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[ce(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(Me("photo")+" "+e.trim()),t.join(" \xB7 ")}var aS=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),La=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},Pa=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)/.exec(n||"");return e&&e[1]},rd=new Map,h0=n=>(rd.has(n)||rd.set(n,fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://vimeo.com/"+n)}&width=1280`).then(e=>e.ok?e.json():null).then(e=>e&&e.thumbnail_url||"").catch(()=>"")),rd.get(n)),u0=(n,e)=>{let t=(n&&n.media||[]).filter(i=>i&&/youtu\.?be|vimeo\.com/.test(i.src||""));return!t.length||t[0].src===e},Aa=n=>La(n)?"youtube":Pa(n)?"vimeo":aS(n)?"video":"image",$e={open:!1,height:0,panels:[],x:0,finalpos:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=e==="place"?300:355,Kt.classList.remove("closing"),Kt.hidden=!1,n0(),this.geomKey=JSON.stringify(Md("project"));{let i=Is();Ns.style.setProperty("--ft",i.top+"px"),Ns.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,300,t[0]?t[0].credit:"",!1),this.addContact(n)}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,Ns.style.transform="translateX(0px)"},addRelations(n){let e=No(n);if(!e.length)return;let t=xo(ve,n).length>0,i=Is(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),o=r?Math.max(12,i.gutter-i.side):i.side,a=Math.max(200,Math.min(300,i.col))+o+i.side,l=`<h2 class="ttl" style="left:${o}px;right:${i.side}px;top:${i.top}px">${Ae(Me(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${o}px;bottom:${i.bottom}px">${e.length}</span>`;if(!t){this.addIndex(e,i);return}r||this.addPanel("relh",a,l),e.forEach(c=>{let h=Bs(c),u=[c.date,ce(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${Ae(c.id)}" aria-label="${Ae(ce(c.title))}">`+(h?`<img src="${Ae(yt(h))}" alt="" draggable="false">`:"")+`<span class="mono"${h?" hidden":""}>${Ae(xa(ce(c.title)))}</span><span class="cap"><span class="t">${Ae(ce(c.title).trim())}</span>${u?`<span class="m">${Ae(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addIndex(n,e){let t=e.top,i=355-e.bottom,s=66,r=58,o=252,a=30,l=e.side,c=Math.max(1,Math.floor((i-t-r)/s)),h=Math.max(1,Math.floor((i-t)/s)),u=[],d=0;for(;d<n.length;){let m=(u.length?h:c)*2;u.push(n.slice(d,d+m)),d+=m}let p=Ae,g=m=>String(m).padStart(2,"0"),v=0;u.forEach((m,f)=>{let E=f?h:c,b=m.length>E?2:1,D=f?"":`<h2 class="ttl" style="left:${l}px;top:${t}px">${p(Me("together"))}.<span class="n">${n.length}</span></h2>`,P=m.map(N=>{let z=Bs(N),S=[N.date,ce(N.place)].filter(Boolean).join(" | ");return v++,`<button type="button" class="go" data-go="${p(N.id)}" aria-label="${p(ce(N.title))}"><span class="no">${g(v)}</span><span class="th">${z?`<img src="${p(yt(z))}" alt="" draggable="false" loading="lazy">`:""}<span class="mono"${z?" hidden":""}>${p(xa(ce(N.title)))}</span></span><span class="cap"><span class="t">${p(ce(N.title).trim())}</span>${S?`<span class="m">${p(S)}</span>`:""}</span></button>`}).join("");this.addPanel("idx",l*2+b*o+(b-1)*a,D+`<div class="list" style="left:${l}px;top:${f?t:t+r}px;grid-template-columns:repeat(${b},${o}px);grid-template-rows:repeat(${Math.min(E,m.length)},${s}px);column-gap:${a}px">${P}</div>`).querySelectorAll("img").forEach(N=>N.addEventListener("error",()=>{let z=N.nextElementSibling;N.remove(),z&&(z.hidden=!1)}))})},addLogos(n){let e=Is(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,o=e.side,a=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${Ae(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",o*2+h*a,`<h3 class="lbl" style="left:${o}px;top:${i}px">${Ae(Me("partners"))}</h3><div class="grid" style="left:${o}px;top:${g}px;grid-template-columns:repeat(${h},${a-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>d0(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(Me("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${Ae(t)}</span><a href="${Ae(e)}" target="_blank" rel="noopener"><span class="host">${Ae(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,Ns.appendChild(i),this.panels.push(i);let s=le.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>Aa(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let o=r%t.length;t[o]==="bleed"&&o++;let a=0;for(;a<n.length;){let l=n[a];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}let c=t[o++%t.length],h=i[c]||1,u=n.slice(a,a+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),a+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${Ae(yt(h.src))}" alt="" draggable="false">`).join("")+(i?`<p class="mcap2">${Ae(i)}</p>`:"")),o=[...r.querySelectorAll("img")],a=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);o.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),a&&(u.cap?Object.assign(a.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):a.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return o.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&ce(t.caption).trim());return e?ce(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],o=263*s[1];return{w:2*46+r+16+o,boxes:[[46,46,r,263],[46+r+16,46,o,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Is().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],o=(i-t)/(1/s[1]+1/s[2]),a=o/s[1];return{w:2*e+r+t+o,boxes:[[e,e,r,i],[e+r+t,e,o,a],[e+r+t,e+a+t,o,i-t-a]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[o,a]=e(t[1],230,160),l=30+a+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+o,r+c+120)+46,boxes:[[46,46,i,s],[r,30,o,a],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let o=(355-s)/2,a=34,l=i.map(c=>{let h=[a,o,s*c,s];return a+=s*c+10,h});return{w:a-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Is().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],o=s[2]+s[3],a=t+(i-t)/(1/r+1/o),l=(a-t)/r,c=(a-t)/o,h=e+l+t;return{w:a+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?ce(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),o=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-o,r,o]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?ce(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],o=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,o,s,r]],cap:[70,o+r+10,s]}},e)},addMat(n){let t=n.caption?ce(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${Ae(yt(n.src))}" alt="" draggable="false" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${Ae(t)}</p>`:"")),r=s.querySelector("img"),o=()=>{if(!r.naturalWidth)return;let a=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=a+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=a+"px"),this.layout()};r.addEventListener("load",o),r.complete&&o(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(a=>a!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=Aa(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:yt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",Me("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=yt(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?ce(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${Ae(d)}</b> `:"")+Ae(p),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?La(n):Pa(n),l=document.createElement("div");l.className="cover";let c=e==="vimeo"&&a&&!u0(this.post,n),h=this.post&&this.post.thumb?yt(this.post.thumb):"",u=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:c?"":h;if(u||c){let p=document.createElement("img");p.alt="",p.draggable=!1,p.onerror=()=>p.remove(),u?p.src=u:h0(a).then(g=>{g||h?p.src=g||h:p.remove()}),l.appendChild(p)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let d=document.createElement("button");d.type="button",d.className="play",d.setAttribute("aria-label",Me("play")),d.addEventListener("click",()=>{let p=document.createElement("iframe");p.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${a}?autoplay=1&title=0&byline=0&portrait=0`,p.allow="autoplay; fullscreen; picture-in-picture",p.allowFullscreen=!0,p.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(p)}),l.appendChild(d),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Md(e),o=Is(),a=355-o.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(P,R)=>r?[P===0?o.side:Math.floor(o.gutter/2),P===R-1?o.side:Math.ceil(o.gutter/2)]:[i,t-i-s],c=ce(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=ce(n.subtitle),u=H.section.def,d=n.tags.filter(P=>P!=="featured").map(P=>u.tags.find(R=>R.id===P)).filter(Boolean).map(P=>ce(P.label)),p=d.length?`${Ae(Me("postedIn"))} <span>${d.map(Ae).join(", ")}</span>`:"",g=Ae([n.date,ce(n.place)].filter(Boolean).join(" | ")),v=pa(ce(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${Ae(c)}</h2>${h?`<p class="stl" style="position:static">${Ae(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,E=h?m.lastChild.offsetHeight+6:0,b=e==="project"?Yg(n):[],D="";if(b.length){let P=(Nt.find(R=>R.def.id===b[0].section)||{}).def;D=`${Ae((P?ce(P.name):Me("skills")).trim())} ${b.map((R,N)=>`<span class="it"><button type="button" class="go" data-go="${Ae(R.id)}">${Ae(ce(R.title).trim())}</button>${N<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let P=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${D?`<div class="posted skl-tags">${D}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${P}</div>`;let R=m.firstChild.offsetHeight,N=a-13,z=N-R,S=H.section.def.skills?No(n).length:0,M="",B=0;S&&(M=`<span class="lbl">${Ae(Me(xo(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${S}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${M}</div>`,B=m.firstChild.offsetHeight);let ie=B?z-B-18:z,de=o.top+f+6,O=o.top+f+E+20,G=od(v,s,[a-O,a-o.top],m);m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]}</div>`;let F=G.length===1?O:o.top;if(G[G.length-1]&&F+m.firstChild.offsetHeight>ie-12){let q=od(G.pop(),s,B?[a-F,ie-12-o.top]:[ie-12-F,ie-12-o.top],m);G.push(...q),B&&q.length===1&&G.push("")}let ne=0;if(B){F=G.length===1?O:o.top,m.innerHTML=`<div class="body" style="position:static">${G[G.length-1]||""}</div>`;let q=F+(G[G.length-1]?m.firstChild.offsetHeight:0)+18;ne=G[G.length-1]?Math.min(ie,Math.max(Math.round((o.top+a)/2)-10,q)):o.top+4}G.forEach((q,$)=>{let ee=$===G.length-1,[j,oe]=l($,G.length);this.addPanel("txt",j+s+oe,($===0?`<h2 class="ttl" style="left:${j}px;top:${o.top}px;width:${s}px">${Ae(c)}</h2>${h?`<p class="stl" style="left:${j}px;top:${de}px;width:${s}px">${Ae(h)}</p>`:""}`:"")+`<div class="body" style="left:${j}px;top:${$===0?O:o.top}px;width:${s}px">${q}</div>`+(ee&&B?`<div class="relp" style="left:${j}px;top:${ne}px;width:${s}px">${M}</div>`:"")+(ee?`<div class="meta" style="left:${j}px;top:${z}px;width:${s}px">${P}</div>`:""))})}else{let P=13+f+4,R=13+f+E+10,N=R+20,z=N+18+20;od(v,s,[355-z-14,327],m).forEach((M,B)=>{this.addPanel("txt",t,(B===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${Ae(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${P}px;width:${s}px">${Ae(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${R}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${N}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${B===0?z:14}px;width:${s}px">${M}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(R=>ve.posts.find(N=>N.id===R)).filter(Boolean),t=Is(),i=t.top,s=355-t.bottom,r=t.side,o=Math.max(24,Math.min(36,t.gutter)),a=R=>String(R+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${Ae(Me("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((R,N)=>`<li data-i="${N}"><b>${a(N)}</b><span><span class="nm">${Ae(ce(R.title).trim())}</span>${ce(R.subtitle).trim()?`<i>${Ae(ce(R.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${Ae(Me("with"))}</i> ${Ae(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+o,m=v,f=i,E=0,b=0,D=v;e.forEach((R,N)=>{let z=g[N%g.length]*(e.length>12?.8:1),S=16;f+z+S>s&&f>i+1&&(m+=E+16,b++,f=i+(b%2?34:0),E=0);let M=ko(R)&&R.published!==!1,B=document.createElement(M?"button":"div");B.className="face"+(M?" go":""),M&&(B.type="button",B.dataset.go=R.id),B.dataset.i=N,Object.assign(B.style,{left:m+"px",top:f+"px",width:z+"px",height:z+"px"});let ie=!R.thumb&&(yd(R).find(O=>O!==n)||yd(R)[0]),de=ie?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${Ae(yt(Bs(ie))).replace(/'/g,"%27")}') center/cover"`:"";B.innerHTML=(R.thumb?`<img src="${Ae(yt(R.thumb))}" alt="" draggable="false">`:`<span class="mono"${de}>${Ae(xa(ce(R.title)))}</span>`)+`<b class="n">${a(N)}</b>`,B.setAttribute("aria-label",ce(R.title)),c.appendChild(B),E=Math.max(E,z),f+=z+S,D=Math.max(D,m+z)}),l.style.width=Math.ceil((e.length?D:r+p)+r)+"px";let P=(R,N)=>c.querySelectorAll(`[data-i="${R}"]`).forEach(z=>z.classList.toggle("on",N));c.querySelectorAll("[data-i]").forEach(R=>{["pointerenter","focus"].forEach(N=>R.addEventListener(N,()=>P(R.dataset.i,!0))),["pointerleave","blur"].forEach(N=>R.addEventListener(N,()=>P(R.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(R=>{let N=c.querySelector(`.face.go[data-i="${R.dataset.i}"]`);N&&(R.classList.add("go"),R.dataset.go=N.dataset.go)})},addContact(n){let e=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");this.addPanel("contact",Math.min(500,Math.max(260,Math.floor((Wt-2*le.margin)/(this.scale||1)))),`<div class="cn">${Ae(ce(n.title))}.</div><div class="ac">${Ae(ce(n.subtitle))}</div><div class="site">${n.link?`<a href="${Ae(n.link)}" target="_blank" rel="noopener">${Ae(e)}</a>`:""}</div><div class="ad">${pa(ce(n.body))}</div><div class="ct">${Ae(ce(n.place))}</div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=le.animationMode?.8:0;return Kt.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){Ns.querySelectorAll("video").forEach(n=>n.pause()),Ns.innerHTML="",this.panels=[],Kt.hidden=!0,Kt.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},step(){if(this.open){if(this.dragging){let n=(Hc-this.xprev)*1.5/(this.scale||1);this.finalpos+=n,this.vel=this.vel*.6+n*.4,this.x-=(this.x-this.finalpos)*wn(le.easing),this.xprev=Hc}else Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*wn(le.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<this.end&&(this.finalpos=this.end);Ns.style.transform=`translateX(${Math.round(this.x)}px)`}}},Zt=document.createElement("div");Zt.id="postv";Zt.hidden=!0;Zt.setAttribute("role","dialog");Zt.setAttribute("aria-modal","true");document.body.appendChild(Zt);var oS=()=>Kc(),Hs={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(c=>c&&c.src),s=Ae,r=ce(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=ce(n.subtitle).trim(),a=[];a.push(`<div class="pv-bar"><span class="pv-sec">${s(ce(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(Me("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&a.push(this.media(l,"pv-hero"+(!i[0]&&Cc(n)?" pv-logo":""))),e==="place"){let c=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");a.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${o?`<p class="pv-stl">${s(o)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(c)}</a></p>`:"")+`<div class="pv-body">${pa(ce(n.body))}</div>${ce(n.place)?`<p class="pv-meta">${s(ce(n.place))}</p>`:""}</div>`)}else{if(a.push(this.text(n,r,o,t)),t.skills&&a.push(this.relations(n)),e==="text"?i.slice(1).forEach(c=>a.push(this.media(c,"pv-full"))):a.push(this.gallery(i.slice(1))),t.skills||a.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&a.push(this.team(n)),n.logos&&n.logos.length&&a.push(`<section class="pv-logos"><h2 class="pv-h">${s(Me("partners"))}</h2><div class="pv-lgrid">${n.logos.map(c=>`<span><img data-src="${s(c)}" alt=""></span>`).join("")}</div></section>`),n.link){let c=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,h=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");a.push(`<p class="pv-link"><span>${s(String(Me("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(c)}" target="_blank" rel="noopener">${s(h)} \u2197</a></p>`)}a.push(this.next(n))}if(Zt.innerHTML=`<div class="pv-page">${a.join("")}</div>`,this.wire(),Zt.hidden=!1,Zt.scrollTop=0,Zt.offsetWidth,Zt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!St)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=Ae,r=pa(ce(n.body)),o=r.split(/(?=<h3[\s>])/i),a=/^\s*<h3/i.test(o[0])?"":o.shift(),l=o.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>ce(p.label)),h=[n.date,ce(n.place)].filter(Boolean).join(" | "),u=Yg(n),d="";if(u.length){let p=(Nt.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?ce(p.name):Me("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(ce(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${a||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(Me("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=Ae,i=Aa(n.src),s=n.caption?ce(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let o=i==="youtube"?La(n.src):Pa(n.src),a=i==="vimeo"&&o&&!u0(this.post,n.src),l=i==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:a?"":this.post&&this.post.thumb?yt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(o||"")}"><div class="pv-cover">${l?`<img src="${t(l)}" alt="">`:a?`<img data-vimeo="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(Me("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(yt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(yt(n.src))}" alt="" loading="lazy">${r}</figure>`},gallery(n){let e=u=>Aa(u.src)==="image",t=[],i=Ae,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(yt(d.src))}" alt="" loading="lazy">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],o={pair:2,quad:4,big2:3},a=String(this.post.id||""),l=0;for(let u of a)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=o[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?ce(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(yt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=No(n);if(!e.length)return"";let t=Ae,i=xo(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(Me(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=Bs(s),o=[s.date,ce(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?`<img src="${t(yt(r))}" alt="" loading="lazy">`:`<span class="mono">${t(xa(ce(s.title)))}</span>`}<span class="t">${t(ce(s.title).trim())}</span>${o?`<span class="m">${t(o)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=Ae,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(Me("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=ko(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?`<img src="${e(yt(i.thumb))}" alt="" loading="lazy">`:`<span class="mono">${e(xa(ce(i.title)))}</span>`}<span class="t">${e(ce(i.title).trim())}</span>${ce(i.subtitle).trim()?`<span class="m">${e(ce(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(Me("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=Bs(i),r=Ae;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(Me("nextProject"))} \u2192</span><span class="t">${r(ce(i.title).trim())}</span>${s?`<img src="${r(yt(s))}" alt="" loading="lazy">`:""}</button>`},wire(){Zt.querySelector(".pv-x").addEventListener("click",()=>ds()),Zt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Zt.querySelectorAll("img[data-vimeo]").forEach(n=>{let e=this.post&&this.post.thumb?yt(this.post.thumb):"";h0(n.dataset.vimeo).then(t=>{t||e?n.src=t||e:n.remove()})}),Zt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Zt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>d0(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Zt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:`https://player.vimeo.com/video/${t}?autoplay=1&title=0&byline=0&portrait=0`,i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Zt.querySelectorAll("video").forEach(n=>n.pause()),Zt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Zt.hidden=!0,Zt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Zt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Hs.keepHistory=!0,hh(e.dataset.go),Hs.keepHistory=!1)});Zt.addEventListener("keydown",n=>{n.code==="Escape"&&ds()});var ad=new Map;function d0(n){if(ad.has(n))return ad.get(n);let e=cs(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0,s,r);let l;try{l=a.getImageData(0,0,s,r)}catch{return{src:yt(n),raw:!0}}let c=l.data,h=M=>(.2126*c[M]+.7152*c[M+1]+.0722*c[M+2])/255,u=0,d=0,p=0,g=M=>{u++,c[M+3]<40?d++:p+=h(M)};for(let M=0;M<s;M++)g(M*4),g(((r-1)*s+M)*4);for(let M=0;M<r;M++)g(M*s*4),g((M*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,E=0;if(v){for(let M=0;M<c.length;M+=16)c[M+3]>128&&(f+=h(M),E++);f=E?f/E:0}let b=v?f<.5?1:0:m,D=Math.max(.25,Math.max(b,1-b));for(let M=0;M<c.length;M+=4){let B=c[M+3]/255,ie=h(M),de=(Math.max(c[M],c[M+1],c[M+2])-Math.min(c[M],c[M+1],c[M+2]))/255,O=Math.min(1,Math.max(Math.abs(ie-b),de*.8)/D);O=O<.08?0:Math.min(1,(O-.08)*1.35),c[M]=c[M+1]=c[M+2]=255,c[M+3]=Math.round(255*O*B)}a.putImageData(l,0,0);let P=s,R=r,N=-1,z=-1;for(let M=0;M<r;M++)for(let B=0;B<s;B++)c[(M*s+B)*4+3]>24&&(B<P&&(P=B),B>N&&(N=B),M<R&&(R=M),M>z&&(z=M));if(N<P)return{src:o.toDataURL("image/png")};let S=document.createElement("canvas");return S.width=N-P+1,S.height=z-R+1,S.getContext("2d").drawImage(o,-P,-R),{src:S.toDataURL("image/png")}}).catch(()=>({src:yt(n),raw:!0}));return ad.set(n,e),e}function od(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){a=null,d.textContent.trim()&&o.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){a=null;return}d.nodeType===3&&!d.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of o){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}if(d.nodeName==="UL"||d.nodeName==="OL"){let f=+(d.getAttribute("start")||1),E=d.cloneNode(!1),b=0;s.appendChild(E);for(let D of[...d.children]){let P=D.cloneNode(!0);E.appendChild(P),b++,!(s.offsetHeight<=h())&&(E.children.length===1&&[...s.children].every(R=>R===E||R.nodeName==="H3")||(E.removeChild(P),u(),E=d.cloneNode(!1),d.nodeName==="OL"&&E.setAttribute("start",String(f+b-1)),s.appendChild(E),E.appendChild(P)))}continue}let g=[];(function f(E,b){E.childNodes.forEach(D=>{D.nodeType===3?D.textContent.split(/(\s+)/).forEach(P=>P&&g.push({w:P,path:b})):f(D,[...b,D])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:E})=>{let b=v;for(let D of E){let P=b.lastChild;(!P||P.nodeType!==1||P.dataset.src!==D.outerHTML)&&(P=D.cloneNode(!1),P.dataset.src=D.outerHTML,b.appendChild(P)),b=P}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let E=function b(D){return D.lastChild&&D.lastChild.nodeType===1?b(D.lastChild):D}(v);E.removeChild(E.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var Hc=0,rs=null;Kt.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(rs={id:n.pointerId,x:n.clientX,y:n.clientY},Hc=n.clientX)});Kt.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(rs||$e.dragging)){Ia();return}if(Hc=n.clientX,!rs||n.pointerId!==rs.id||$e.dragging)return;let e=n.clientX-rs.x,t=n.clientY-rs.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){$e.dragging=!0,$e.xprev=rs.x,$e.finalpos=$e.x,$e.vel=0;try{Kt.setPointerCapture(n.pointerId)}catch{}Kt.classList.add("grabbing")}});Kt.addEventListener("click",n=>{$e.justDragged&&(n.preventDefault(),n.stopPropagation(),$e.justDragged=!1)},!0);Kt.addEventListener("wheel",n=>{if(n.preventDefault(),!$e.open||$e.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;$e.finalpos=Math.max($e.end-60,Math.min(60,$e.finalpos-e*t/($e.scale||1)))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ia=()=>{$e.dragging&&($e.justDragged=!0,setTimeout(()=>{$e.justDragged=!1},0),$e.finalpos+=($e.vel||0)*10),$e.vel=0,rs=null,$e.dragging=!1,Kt.classList.remove("grabbing")};Kt.addEventListener("pointerup",Ia);Kt.addEventListener("pointercancel",Ia);Kt.addEventListener("lostpointercapture",n=>{n.target===Kt&&Ia()});window.addEventListener("pointerup",()=>{(rs||$e.dragging)&&Ia()});Jd.addEventListener("pointerdown",()=>ds());Kt.addEventListener("click",n=>{if(!$e.open||$e.justDragged||n.target.closest(".pnl, a, button, iframe, video, input"))return;let e=Kt.querySelectorAll("#strip .pnl");if(!e.length)return;let t=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect();(n.clientX>i.right+4||n.clientX<t.left-4)&&ds()});function zo(n=-1,e=0){Ng(),n===-1&&(n=H.currentSection||0),Si(),n!==H.currentSection&&ef(),H.currentSection=n,H.resetData(),H.selected=e,rh(),$d(),ch();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Ra("#"+H.section.def.id,ce(H.section.def.name).trim())}function f0(){Si(),H.selected=0,rh(),a0()}function p0(n){(n==="newer"?H.data.newer():H.data.older())&&f0()}function lS(n){H.data.changeCategory(n),r0.textContent=H.data.currentCatName,f0(),ch()}function Uo(n){Si(),H.selected=n,So()}var rg=0;function hh(n){let e=ve.posts.find(h=>h.id===n),t=e?Nt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!En)return;Ng(),Si();let i=t!==H.currentSection;i&&ef(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Pe){Uo(l);return}H.selected=l,rh(),$d(),ch();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}Ra("#"+H.section.def.id,ce(H.section.def.name).trim());let c=++rg;Po(.5,()=>{c===rg&&H.data===s&&s.posts[l]===e&&Uo(l)})}Ns.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),hh(e.dataset.go))});var cS=(n,e=H.section&&H.section.def)=>e?n&&e.open==="focus3d"&&(e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))?"strip":e.open:"",uh=()=>cS(H.data&&H.data.posts[H.selected]);function So(){if(!Pe||!H.data.posts[H.selected])return;let n=uh();Ho(null),tf(null),Si(),H.postOpen=!0,(n==="strip"||n==="focus3d")&&oS()?(Hs.build(H.data.posts[H.selected],H.section.def.card),Do.classList.add("hidden"),Bi=!1,mn.classList.remove("dragging"),$n=!0,To(H.selected)):n==="strip"?(Jd.hidden=!1,$e.build(H.data.posts[H.selected],H.section.def.card),Do.classList.add("hidden"),Bi=!1,mn.classList.remove("dragging"),$n=!0,To(H.selected)):($n=!0,To(H.selected),Pe.openPost3D()),br(),Xd(H.data.posts[H.selected])}function ds(){H.postOpen&&(H.postOpen=!1,Hs.open?(Hs.close(),Do.classList.remove("hidden")):$e.open?($e.close(),Jd.hidden=!0,Do.classList.remove("hidden")):Pe&&Pe.closePost3D(),br(),Xd(null))}function Si(){H.postOpen&&ds()}function hS(){Pg(!le.animationMode),c0(),Pe&&Pe.resetPostPosition(),$n=!0}var fs=le.cameraDistanceProportion,wr=()=>((ps()||{}).def||{}).layout==="map",uS=()=>wr()?60:le.cameraZoomMin;function Kd(){le.cameraDistanceProportion<le.cameraZoomMax&&(le.cameraDistanceProportion=Math.min(le.cameraZoomMax,Math.trunc(le.cameraDistanceProportion*1.5)),m0())}function Qd(){le.cameraDistanceProportion>uS()&&(le.cameraDistanceProportion=Math.trunc(le.cameraDistanceProportion/1.5),m0())}function m0(){(wr()||pi())&&(H.cameraY=Ca()),e0()}function ef(){le.cameraDistanceProportion!==fs&&(le.cameraDistanceProportion=fs,ah())}var ag=!1;function g0(n){if(!En)return;ag||(ag=!0,Ad(),l0=setTimeout(zc,6e3));let e=H.postOpen&&$e.open,t=H.postOpen&&!$e.open;switch(n.code){case"ArrowLeft":ss("ArrowLeft"),e?$e.action("LEFT"):(Si(),nd("PREVIOUS"),t&&So());break;case"ArrowRight":ss("ArrowRight"),e?$e.action("RIGHT"):(Si(),nd("NEXT"),t&&So());break;case"ArrowUp":ss("ArrowUp"),e||FM();break;case"ArrowDown":ss("ArrowDown"),e||zM();break;case"Tab":ss("Tab"),e?(ds(),nd("NEXT"),So()):zo((H.currentSection+1)%Nt.length);break;case"KeyK":Ys.classList.contains("open")?zc():Ad();break;case"KeyA":ss("KeyA"),hS();break;case"Equal":case"NumpadAdd":ss("Equal"),e||Qd();break;case"Minus":case"NumpadSubtract":ss("Minus"),e||Kd();break;case"Space":ss("Space"),Pe&&Pe.checkPostSelected(),H.postOpen?ds():So();break;case"Escape":Si();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!It||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||g0(n)});var og=new oc,lg=new et;function Vc(n,e){if(!Xs||!Pe)return null;lg.set(n/Wt*2-1,-(e/Ht)*2+1),og.setFromCamera(lg,Wn);let t=og.intersectObjects([...ps().blockers,...Pe.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:dS(n,e)||(t?t.object.userData:null)}var Sc=new U;function dS(n,e){if(!Pe||!Pe.net)return null;let t=null,i=14;for(let s of Pe.net.hits){if(!s.visible)continue;s.getWorldPosition(Sc).project(Wn);let r=(Sc.x+1)/2*Wt-n,o=(1-Sc.y)/2*Ht-e,a=Math.hypot(r,o);a<i&&Sc.z<1&&(i=a,t=s.userData)}return t}var Un=null,xi=null,Cd=0,Rd=0;mn.addEventListener("pointerdown",n=>{if(!En||Un!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&ki.size>0)return;Fs=Cd=n.clientX,zs=Rd=n.clientY;let e=Vc(n.clientX,n.clientY);Si(),xi=e&&e.post?e:null,xi&&xi.face==="back"&&(xi.post.view.focus(xi.post.id_),$n=!0),Un=n.pointerId,mn.setPointerCapture(n.pointerId),mn.classList.add("dragging"),Rc=Fs,Lc=zs,$n=!1,Bi=!0});function Er(n,e=!1){if(n.pointerId===Un){if(Un=null,mn.classList.remove("dragging"),Bi&&($n=!0,Bi=!1,pi()&&(H.degreeCamera=Wd(H.degreeCamera),H.cameraY=Ca())),e){xi=null;return}if(xi&&xi.face==="front"&&Math.hypot(n.clientX-Cd,n.clientY-Rd)<6){let t=Vc(n.clientX,n.clientY);t&&t.post===xi.post&&Uo(t.post.id_)}else if(!xi&&Math.hypot(n.clientX-Cd,n.clientY-Rd)<6){let t=Vc(n.clientX,n.clientY);t&&t.netNode?Zg(t.netNode,n.clientX,n.clientY):th()}xi=null}}mn.addEventListener("pointerup",Er);mn.addEventListener("pointercancel",n=>Er(n,!0));mn.addEventListener("lostpointercapture",n=>{n.pointerId===Un&&Er(n,!0)});window.addEventListener("pointerup",n=>{Un!==null&&n.pointerId===Un&&n.target!==mn&&Er(n,!0)});window.addEventListener("blur",()=>{Un!==null&&Er({pointerId:Un},!0),Ia()});var ld=!1,ga=null,ba=null,wo=null;function tf(n){wo!==n&&(wo&&wo.hoverBack(!1),wo=n,n&&n.hoverBack(!0))}var y0=()=>Kc()&&En&&Pe&&["carousel","spiral"].includes(Pe.def.layout);function nf(){return H.postOpen||!Pe?null:ba&&ba.view===Pe?ba:y0()?(Pe.checkPostSelected(),Pe.postViews[H.selected]||null):null}var fS=0;function pS(){++fS%6===0&&y0()&&Ho(nf())}function Ho(n){ga!==n&&(ga&&ga.hover(!1),ga=n,n&&n.hover(!0))}mn.addEventListener("pointerleave",()=>{ba=null,Ho(nf()),tf(null)});mn.addEventListener("pointermove",n=>{if(Un!==null&&n.pointerId===Un&&n.pointerType==="mouse"&&n.buttons===0){Er(n,!0);return}Un!==null&&n.pointerId!==Un||(Fs=n.clientX,zs=n.clientY,Un===null&&n.pointerType==="mouse"&&!ld&&(ld=!0,requestAnimationFrame(()=>{ld=!1;let e=Vc(Fs,zs);mn.classList.toggle("hover",!!(e&&e.post)),ba=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,Ho(nf()),tf(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?Zg(e.netNode,Fs,zs):th()})))});var cg=0,ki=new Map,ya=null,v0=()=>{let[n,e]=[...ki.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!It||$e.open||!ki.size&&n.target!==mn||(ki.set(n.pointerId,{x:n.clientX,y:n.clientY}),ki.size===2&&(Un!==null&&Er({pointerId:Un},!0),ya={last:v0()}))});window.addEventListener("pointermove",n=>{if(!ki.has(n.pointerId)||(ki.set(n.pointerId,{x:n.clientX,y:n.clientY}),!ya||ki.size<2||!En))return;let e=v0(),t=e/ya.last;t>1.15?(Qd(),ya.last=e):t<1/1.15&&(Kd(),ya.last=e)});var mS=n=>{ki.delete(n.pointerId),ki.size<2&&(ya=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,mS));mn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!En||e-cg<220||!n.deltaY||e-o0<1400||(cg=e,n.deltaY<0?Qd():Kd())},{passive:!1});window.addEventListener("resize",()=>{let n=hs(),e=Xs&&Pe?Zn||Fo():null;t0(),e0(),br(),Qg(e),hs()!==n&&Pe&&Pe.retexture(),A0(),Ld(),$e.open&&(n0(),clearTimeout($e.relayout),$e.relayout=setTimeout(()=>{$e.open&&$e.post&&JSON.stringify(Md("project"))!==$e.geomKey&&($e.build($e.post,H.section.def.card),br())},250))});function hg(){if(ve.settings.negativeToggle!==!1){if(ni=!ni,Io()&&Zc(),!St)try{localStorage.setItem("hc-neg",(ni?"1":"0")+(Io()?"@"+xr:""))}catch{}lh(),Pe&&Pe.retexture()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,o=i,a=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(a>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(o)*a*d,g=d+Math.sin(o)*a*d,v=Math.max(0,Math.min(1,1-a/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{o=s=i,a=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,E=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=E*E*(3-2*E);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",hg),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),hg())}))});var ue=null,sf=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function gS(){let n=(ve.settings.showreel||"").trim();if(!ue){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),ue={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>M0()),ue.x.addEventListener("click",wc),i.querySelector(".scrim").addEventListener("click",wc),ue.snd.addEventListener("click",()=>_0(!ue.muted)),window.addEventListener("keydown",s=>{if(ue.open){if(s.code==="Escape")s.preventDefault(),wc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!ue.player||s.source!==ue.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==ue.muted&&(ue.muted=r.info.muted,Oo())})}ue.btn.hidden=!n,ue.btn.setAttribute("aria-label","Showreel"),ue.x.setAttribute("aria-label",Me("close")),n!==ue.src&&(ue.open&&wc(!0),ue.src=n,ue.kind=n?Aa(n):"",ue.vid.innerHTML="",ue.player=null);let e=ue.kind==="youtube"?`https://www.youtube.com/watch?v=${La(n)}`:ue.kind==="vimeo"?`https://vimeo.com/${Pa(n)}`:"";ue.ext.hidden=!e,e&&(ue.ext.href=e,ue.ext.textContent=(ue.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),Oo()}function Oo(){ue&&(ue.snd.innerHTML=sf(!ue.muted)+`<span>${Me(ue.muted?"soundOn":"soundOff")}</span>`,ue.snd.setAttribute("aria-pressed",String(!ue.muted)))}function Gc(n,e=[]){let t=ue.player;if(!(!t||!t.contentWindow)){if(ue.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(ue.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function _0(n){ue.muted=n,Oo(),ue.kind==="video"?ue.player&&(ue.player.muted=n,n||(ue.player.volume=1)):(Gc(n?"mute":"unMute"),n||Gc("setVolume",[100]))}function yS(){if(!(!ue||!ue.src||ue.open)){if(ue.open=!0,ue.last=document.activeElement,ue.player)ue.kind==="video"?ue.player.play().catch(()=>{}):Gc("playVideo");else{let n=ue.src,e=ue.kind;if(e==="video"){let t=document.createElement("video");t.src=yt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==ue.muted&&(ue.muted=t.muted,Oo())}),ue.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?La(n):Pa(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:`https://player.vimeo.com/video/${i}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`,t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),ue.muted||_0(!1)}),ue.player=t}else{let t=document.createElement("img");t.src=yt(n),t.alt="",ue.player=t}ue.muted=!0,Oo(),ue.vid.appendChild(ue.player)}ue.snd.hidden=!/^(youtube|vimeo|video)$/.test(ue.kind),ue.box.hidden=!1,ue.btn.setAttribute("aria-expanded","true"),ue.box.offsetWidth,ue.box.classList.add("on"),setTimeout(()=>{ue.open&&ue.x.focus({preventScroll:!0})},60)}}function wc(n){!ue||!ue.open||(ue.open=!1,ue.btn.setAttribute("aria-expanded","false"),ue.kind==="video"?ue.player&&ue.player.pause():Gc("pauseVideo"),ue.box.classList.remove("on"),clearTimeout(ue.t),ue.t=setTimeout(()=>{ue.open||(ue.box.hidden=!0)},n===!0?0:650),ue.last&&ue.last.focus&&n!==!0&&ue.last.focus({preventScroll:!0}))}var y=null,va=["white","grey","accent","source"],x0=8;function vS(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(va,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function _S(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=vS(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>Ld()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,color:va.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(x0,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=kS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:yt(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),y.video=a}else{let a=p=>p&&!/^(https?:|data:)/.test(p)&&/\.(jpe?g|png|webp)$/i.test(p),l=ve.sections.find(p=>p.visible&&p.card==="image"&&!p.skills)||{},c=ve.posts.filter(p=>p.published!==!1&&a(p.thumb)),h=c.filter(p=>p.section===l.id),u=p=>p.map(g=>g.thumb).sort(()=>Math.random()-.5),d=[...new Set([...u(h),...u(c)])].slice(0,10);y.pics=d.map(p=>{let g=new Image;return g.decoding="async",g.src=yt(p),g})}if(xS(e.controls!==!1),Go()&&Sr()&&!/[?&]p=/.test(location.search)&&!Na.matches&&!(St&&St.start)&&!document.getElementById("hc-intro")){let a=performance.now(),l=()=>{!It&&!y.reelOn&&!y.cam&&!y.userReel&&Sr()&&dh(!0)},c=setInterval(()=>{(Mr||performance.now()-a>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),o=document.getElementById("home-ctl");r&&o?o.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),Ld()}var Ma={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function xS(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Ma.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Ma.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${Ma.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let o=document.getElementById("home-band"),a=o.querySelector(".lg");a?a.after(r):o.appendChild(r),n&&ES(e,i,r),LS(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?Fi():M0()}),r.querySelector("#home-snd").addEventListener("click",()=>af(!y.sound));let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){Wc(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("click",()=>I0()),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?w0():u.dataset.src==="video"&&y.cam&&fh()})),document.getElementById("hv-shot").addEventListener("click",SS),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>Xc()),qc(),Vo()}function Vo(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(v=>{let m=v.dataset.src==="cam"===e;v.setAttribute("aria-pressed",String(m)),v.classList.toggle("on",m),v.textContent=Me(v.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",Me("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=Me("hv_words"),s.setAttribute("aria-label",Me("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",Me("hv_shot")),r.querySelector("span").textContent=Me(i?"hv_shot":"photo");let o=document.querySelector("#hv-panel .priv");o&&(o.textContent=Me("hv_private"));let a=n.querySelector("#story-btn");a.setAttribute("aria-label",Me("story")),a.querySelector(".lbl").textContent=Me("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=rf();l&&(l.hidden=!h,Wc(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=Me("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?Me("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?Me("stop"):"Showreel";let g=document.getElementById("home-snd");if(g){g.hidden=!p,p&&requestAnimationFrame(()=>g.style.setProperty("--rw",d.offsetWidth+"px"));let v=!!(y&&y.sound);g.querySelector(".ic").innerHTML=sf(v),g.classList.toggle("on",v),g.setAttribute("aria-pressed",String(v)),g.setAttribute("aria-label",Me(v?"soundOff":"soundOn")),g.title=Me(v?"soundOff":"soundOn")}}var ug=0,rf=()=>ce((ve.settings.home||{}).sub||{}).replace(/\s*\n\s*/g," ").trim();function bS(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>yt(s.thumb))}function Wc(n,e=!0){if(n.querySelector("p").textContent=rf(),!e)return;let t=bS(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var Gt=null,sn=null;function MS(){if(!Gt){Gt=document.createElement("button"),Gt.type="button",Gt.id="about-btn",Gt.className="ui",Gt.setAttribute("aria-expanded","false"),Gt.innerHTML=`<b class="ic">${Ma.about}</b>`,sn=document.createElement("figure"),sn.id="about-card",sn.className="ui",sn.hidden=!0,sn.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append(Gt,sn);let e=t=>{t&&(Wc(sn),sn.hidden=!1,$c(),sn.offsetWidth),sn.classList.toggle("on",t),Gt.classList.toggle("on",t),Gt.setAttribute("aria-expanded",String(t))};Gt.addEventListener("click",()=>I0())}let n=rf();Gt.hidden=!n,Gt.setAttribute("aria-label",n),Wc(sn,!1),$c()}function $c(){if(!Gt)return;let n=ue&&ue.btn&&!ue.btn.hidden?ue.btn:null,e=document.getElementById("lang-sq"),t=e&&!e.hidden;if(!Di()){let s=n?n.offsetTop:Math.round(rn.offsetTop+rn.offsetHeight+16),r=n?n.offsetLeft+n.offsetWidth+8:rn.offsetLeft+2;Gt.style.top=s+"px",Gt.style.left=r+"px",Gt.hidden||(r+=Gt.offsetWidth+8),t&&(e.style.top=s+"px",e.style.left=r+"px"),sn.hidden||(sn.style.left=rn.offsetLeft+2+"px",sn.style.top=s+Gt.offsetHeight+8+"px");return}let i=n?n.offsetTop+n.offsetHeight+8:Math.round(rn.offsetTop+rn.offsetHeight+(Di()?26:16));if(t&&(e.style.top=i+"px",e.style.left=rn.offsetLeft+2+"px",i+=Gt.offsetHeight+8),Gt.style.top=i+"px",Gt.style.left=rn.offsetLeft+2+"px",!sn.hidden){let s=Di(),r=rn.offsetLeft+2;if(s){let o=Math.max(16,Math.min(i,Ht-20-sn.offsetHeight));sn.style.left=r+Gt.offsetWidth+12+"px",sn.style.top=o+"px"}else sn.style.left=r+"px",sn.style.top=i+Gt.offsetHeight+8+"px"}}function Sa(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(ug),t.textContent=n||"",t.hidden=!n,n&&e&&(ug=setTimeout(()=>{t.hidden=!0},e)))}async function SS(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(y.cell,y.floor),o=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,y.W)))),a=Math.ceil(n/o),l=Math.ceil(e/o),c={ctx:y.ctx,W:y.W,H:y.H,ow:y.off.width,oh:y.off.height,lo:y.lo,hi:y.hi};try{if(y.ctx=i,y.W=n,y.H=e,y.off.width=y.raw.width=a,y.off.height=y.raw.height=l,!E0(Na.matches?0:(performance.now()-y.t0)/1e3))return;y.octx.globalAlpha=1,y.octx.drawImage(y.raw,0,0);let oe=null;try{oe=y.octx.getImageData(0,0,a,l).data}catch{}oe?T0(oe,a,l,o):Id(a,l,o)}finally{y.ctx=c.ctx,y.W=c.W,y.H=c.H,y.off.width=y.raw.width=c.ow,y.off.height=y.raw.height=c.oh,y.lo=c.lo,y.hi=c.hi,y.fresh=!0}let h=i.createLinearGradient(0,0,0,330);h.addColorStop(0,"rgba(11,11,11,.92)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,330);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=getComputedStyle(document.documentElement).getPropertyValue("--grotesk").trim()||"sans-serif",v=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),m=getComputedStyle(v),f=oe=>`${m.fontStyle==="italic"?"italic ":""}${m.fontWeight} ${oe}px ${m.fontFamily}`;try{await Promise.all([document.fonts.load(`bold 80px ${g}`),document.fonts.load(`500 27px ${g}`),document.fonts.load(f(110))])}catch{}let E=72,b=78,D=ve.settings.taglines&&(ve.settings.taglines[Nn]||ve.settings.taglines.en)||[],P=D[0]||(ve.settings.name||"Hand Coded")+".",R=D.slice(1),N=27,z=31;i.font=`500 ${N}px ${g}`;let S=R.length?Math.max(...R.map(oe=>i.measureText(oe).width))+30:0,M=130;for(i.font=f(M);i.measureText(P).width>n-2*E-S&&M>48;)M-=4,i.font=f(M);let B=i.measureText(P).width;i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText(P,E,b+M*.8),i.font=`500 ${N}px ${g}`,i.textBaseline="top",R.forEach((oe,V)=>i.fillText(oe,E+B+30,b+M*.12+V*z));let ie=n-2*E,de=104,O=[];for(;de>=40&&(i.font=`bold ${de}px ${g}`,O=Jt(i,p,ie),!(O.length<=4));de-=4);O=p?O.slice(0,4):[];let G=Math.round(de*1.05),F=e-96,ne=F-44-O.length*G;i.fillStyle=ti(),O.length&&i.fillRect(E,ne-38,54,7),i.fillStyle="#fff",i.font=`bold ${de}px ${g}`,O.forEach((oe,V)=>i.fillText(oe,E-de*.04,ne+V*G)),i.fillStyle="#8f8f8f",i.font=`28px ${g}`,i.fillText("hand-coded.net",E,F);let q=await new Promise(oe=>t.toBlob(oe,"image/jpeg",.92));if(!q)return;Ra("photo-souvenir","Photo souvenir",!0);let $="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",ee=typeof File=="function"?new File([q],$,{type:"image/jpeg"}):null;if(ee&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[ee]}))try{await navigator.share({files:[ee],title:ve.settings.name||"Hand Coded"}),Sa(Me("hv_shotDone"),2500);return}catch(oe){if(oe&&oe.name==="AbortError")return}let j=document.createElement("a");j.href=URL.createObjectURL(q),j.download=$,document.body.appendChild(j),j.click(),setTimeout(()=>{URL.revokeObjectURL(j.href),j.remove()},2e3),Sa(Me("hv_shotDone"),2500)}function qc(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=ce(t.title||{}).trim(),s=pa(ce(t.body||{})),r=!!(i||mr(s).join("").trim());n.hidden=!r;let o=document.getElementById("hc-story");if(!r){o&&o.remove();return}o||(o=document.createElement("section"),o.id="hc-story",o.hidden=!0,e.appendChild(o)),o.setAttribute("aria-label",i||Me("story"));let a=(t.images||[]).filter(Boolean);o.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${Ae(Me("close"))}">\xD7</button><h2>${Ae(i||Me("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${Ae(t.link)}" target="_blank" rel="noopener">${Ae(ce(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(a.length?`<div class="shots scroll-x">${a.map(l=>`<a href="${Ae(yt(l))}" target="_blank" rel="noopener"><img src="${Ae(yt(l))}" alt="" loading="lazy" draggable="false"></a>`).join("")}</div>`:"")+"</div></div>",o.querySelector(".x").addEventListener("click",()=>Xc(!1)),qc.out||(qc.out=!0,document.addEventListener("pointerdown",l=>{let c=document.getElementById("hc-story");c&&c.classList.contains("on")&&!l.target.closest("#hc-story, #story-btn")&&Xc(!1)}))}var dg=0;function Xc(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(dg),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),dg=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),Xc(!1))},!0);function Ld(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1);y.W=Math.max(1,Math.round(n.width)),y.H=Math.max(1,Math.round(n.height)),y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn&&of()}var Pd=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:x0,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>Nd()+(Nd()<y.delay?"*":"")}],wS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function ES(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+Pd.map(c=>`<label class="rw"><span class="lb" data-k="${c.p}"></span><input type="range" data-p="${c.p}" min="${c.min}" max="${c.max}" step="${c.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${va.map(c=>`<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Ma.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,o=c=>{clearTimeout(r),c?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(c)),s.classList.toggle("on",c),n.classList.toggle("hv-open",c),c&&Jn()};y.setOpen=o,s.addEventListener("click",()=>{if(y.reelOn){Fi(),o(!0);return}o(!i.classList.contains("open"))});let a=i.querySelector(".more");a.addEventListener("click",()=>{let c=!i.classList.contains("more-on");i.classList.toggle("more-on",c),a.setAttribute("aria-expanded",String(c)),a.textContent=c?"\u2212":"+"}),n.addEventListener("pointerdown",c=>{i.classList.contains("open")&&!c.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&o(!1)}),i.querySelectorAll("input[data-p]").forEach(c=>{let h=Pd.find(u=>u.p===c.dataset.p);c.addEventListener("input",()=>{h.set(+c.value),Jn()})});let l=c=>{if(c==="color")y.color=va[(va.indexOf(y.color)+1)%va.length];else if(c==="invert")y.mode=y.mode==="light"?"dark":"light";else if(c==="sound"){af(!y.sound);return}else if(c==="cam"){if(!document.getElementById("hv-src"))return;y.cam?fh():w0()}Jn()};i.querySelectorAll("[data-c]").forEach(c=>c.addEventListener("click",()=>{y.color=c.dataset.c,Jn()})),i.querySelectorAll(".tgl").forEach(c=>c.addEventListener("click",()=>l(c.dataset.a))),window.addEventListener("keydown",c=>{if(It||c.ctrlKey||c.metaKey||c.altKey||ue&&ue.open||c.target&&c.target.id==="hv-words")return;if(c.code==="Escape"&&i.classList.contains("open")){o(!1),s.focus({preventScroll:!0});return}if(c.code==="Escape"&&y.reelOn){Fi();return}let h={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[c.code];if(h){if(c.preventDefault(),h==="panel"){o(!i.classList.contains("open"));return}y.touched||(y.touched=!0,o(!0)),l(h)}}),Jn()}function Jn(){if(Vo(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=Me("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",Me("hv_panel")),y.toggle.title=Me("hv_panel")+" (K)",Pd.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),wS(i),i.setAttribute("aria-label",Me("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",Me("hv_color")+" "+Me("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),n.classList.toggle("cam",!!y.cam),!y.cam&&n.classList.contains("more-on")&&n.querySelector(".more").click(),n.querySelector(".more").setAttribute("aria-label",Me("params")),b0()}function b0(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var TS=()=>y&&!y.reelOn?y.video:null;function af(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),Jn(),ks()}var Go=()=>!!(ue&&ue.src&&/^(video|youtube|vimeo)$/.test(ue.kind));function M0(){y&&Go()?(It&&ph(),dh()):yS()}function AS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:yt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,ks()};["timeupdate","durationchange","play","pause"].forEach(o=>s.addEventListener(o,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),of(),r()}),s.addEventListener("ended",()=>Fi()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:o=>{s.muted=o,o||(s.volume=1)},seek:o=>{s.currentTime=o}})}else{let s=document.createElement("iframe"),r=n==="youtube",o=r?La(e):Pa(e),a=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${a}`:`https://player.vimeo.com/video/${o}?autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0`,s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{r&&l({event:"listening",id:"hvreel",channel:"widget"})}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),Yc(),ks()},pause:()=>{i.paused=!0,c(r?"pauseVideo":"pause"),Yc(),ks()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,ks()}})}return CS(i,t)}function Yc(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&n.t>=(n.showAt||0);e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!It&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function CS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){Fi();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){Fi();return}}ks(),Yc()}});function of(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=e/t>=1.2,s=n.ratio,r=e,o=e/s;(i?o<t:o>t)&&(o=t,r=t*s),Object.assign(n.el.style,{width:Math.ceil(r)+"px",height:Math.ceil(o)+"px",left:Math.round((e-r)/2)+"px",top:Math.round((t-o)/2)+"px"})}function dh(n=!1){if(!y||!Go())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&fh();let e=ue.kind+"|"+ue.src;if(!y.rp||y.rp.key!==e){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=AS(ue.kind,ue.src),y.rp.key=e;let t=document.getElementById("home-band");t.insertBefore(y.rp.box,t.querySelector(".hv-shade")),y.sound&&ue.kind==="video"&&y.rp.mute(!1),ue.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,Yc()),kn.classList.add("reel-on"),of(),ks(),Jn(),n||Ra("showreel","Showreel",!0),!0}function Fi(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!It&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),kn.classList.remove("reel-on"),ks(),Jn())}var RS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',cd=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),S0=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function LS(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",S0),e.querySelector(".snd").addEventListener("click",()=>af(!y.sound)),e.querySelector(".x").addEventListener("click",Fi);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function ks(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,Vo(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=RS(e.paused),s.setAttribute("aria-label",Me(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${cd(i)} / ${cd(t)}`:cd(i);let r=n.querySelector(".snd");r.innerHTML=sf(y.sound),r.setAttribute("aria-label",Me(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",Me("close"))}function PS(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${Ae(Me("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Ma.shot}<span>${Ae(Me("hv_camYes"))}</span></button><button type="button" class="no">${Ae(Me("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",Me("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function w0(){if(Sa(""),!y.camOK){if(!await PS()){Jn();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&Fi(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||Sa(Me("hv_camNote"),6e3)}catch{Sa(Me("hv_camDenied"),4e3)}Jn()}function fh(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=TS();n&&!It&&n.play().catch(()=>{}),Sa("")}y&&Jn()}function IS(){y&&(Fi(),fh(),y.video&&y.video.pause())}function hd(n,e,t,i=1,s=0,r=0,o=!1,a=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(a?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;o&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),o&&l.restore()}function E0(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return hd(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(hd(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,o=(Math.floor(s)%r+r)%r,a=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,hd(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[o],a,1),a>.78&&r>1&&l(t[(o+1)%r],a-1,(a-.78)/.22),e.globalAlpha=1,!0}var NS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function DS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s))/s,l=Math.max(0,Math.min(1,1-a/y.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function Id(n,e,t){let i=y.ctx,s=y.W,r=y.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!NS){i.globalAlpha=.45,i.drawImage(y.off,o,a,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=DS(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,o,a,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Na=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},Nd=()=>y.floor||y.interval>1e3/29?1:y.delay;function US(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>fg){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),mg());return}if(y.reelOn||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=Na.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,o=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,b0()),lf()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,o)),y.intro&&n<y.intro){mg();return}let a=y.intro?n-y.intro:-1;if(a>OS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<fg/3&&Id(f.cols,f.rows,f.cell):gg(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(o/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!E0(i))return;let u=Nd();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),Id(c,h,l)):gg(d,c,h,l,e,a),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(Jn,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(Jn,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var fg=420,OS=650,pg=(n,e)=>Math.pow(1-1/n,e*.06);function T0(n,e,t,i,s=-1,r=-1){let o=y.ctx,a=e*t,l=y.lum&&y.lum.length===a?y.lum:y.lum=new Float32Array(a),c=1,h=0;for(let P=0,R=0;P<a;P++,R+=4){let N=(.2126*n[R]+.7152*n[R+1]+.0722*n[R+2])/255;l[P]=N,N<c&&(c=N),N>h&&(h=N)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,E=y.color==="source",b=s>=0||r>=0,D=E?FS(o):o;D.fillStyle=E?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",D.beginPath();for(let P=0,R=0;P<t;P++){let N=f+P*i+i/2;for(let z=0;z<e;z++,R++){let S=(l[R]-u)*d;S=S<0?0:S>1?1:S,p&&(S=1-S);let M=(g===1?S:Math.pow(S,g))*v;if(M<.6)continue;let B=m+z*i+i/2,ie=N;if(b){let de=M/v;if(s>=0?M*=pg(2.4+4.6*de,s):M*=1-pg(3+4*de,r),M<.6)continue}D.rect(B-M/2,ie-M/2,M,M)}}D.fill(),E&&(D.globalCompositeOperation="source-in",D.imageSmoothingEnabled=!1,D.drawImage(y.off,m,f,e*i,t*i),D.globalCompositeOperation="source-over",o.save(),o.setTransform(1,0,0,1,0,0),o.drawImage(D.canvas,0,0),o.restore())}function kS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
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
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(s,"a");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var lf=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function mg(){if(!lf())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var BS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function gg(n,e,t,i,s=-1,r=-1){if(!lf()){T0(n,e,t,i,s,r);return}let o=y.gl,a=o.gl,l=o.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,o.data!==n&&(o.data=n,a.texImage2D(a.TEXTURE_2D,0,a.RGBA,e,t,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),a.viewport(0,0,o.c.width,o.c.height);let d=BS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");a.uniform2f(l.grid,e,t),a.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),a.uniform2f(l.res,o.c.width,o.c.height),a.uniform1f(l.cell,i),a.uniform1f(l.maxs,i*y.fill),a.uniform1f(l.lo,y.lo),a.uniform1f(l.k,1/(y.hi-y.lo)),a.uniform1f(l.gam,y.gamma),a.uniform1f(l.dark,y.mode==="dark"?1:0),a.uniform1f(l.ex,s),a.uniform1f(l.intro,r),a.uniform1f(l.dpr,o.dpr),a.uniform1f(l.src,y.color==="source"?1:0),a.uniform3f(l.col,d[0],d[1],d[2]),a.uniform3f(l.bg,11/255,11/255,11/255),a.drawArrays(a.TRIANGLES,0,3)}function FS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var kn=document.getElementById("home"),Ws=document.getElementById("enter"),zS=Ws.querySelector(".lbl"),vr=document.getElementById("ticker"),yg=vr.getContext("2d"),Ii=null,Ds=0,wa=1;function cf(n){zS.textContent=n,Ws.setAttribute("aria-label",n)}var vg={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},HS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=vg[e]||vg["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function VS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var GS=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:VS(n.value),label:ce(n.label)})).filter(n=>n.value&&n.label),WS=()=>GS().map(n=>`${n.value} ${n.label}`);function $S(){let n=ce(ve.settings.home.sub||{}).replace(/\s*\n\s*/g," ").trim(),e=ce(ve.settings.home.quotes||{}).split(/\n+/).map(s=>s.trim()).filter(Boolean),t=n?[n,...e]:[...WS(),...e,...ve.settings.home.ticker||[]].filter(Boolean),i=(t.length?t:[ve.settings.name]).map(s=>String(s).replace(/œ/g,"oe").replace(/Œ/g,"OE").replace(/æ/g,"ae").replace(/…/g,"...").replace(/·/g,".").toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";Ii=qS(i)}function qS(n){let e=[];for(let t of n){let i=HS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var fi={pitch:3.2,rows:7,h:30},ma=null,_g="";function xg(n,e){let t=wa,i=Math.ceil(fi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,fi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-fi.pitch*.1*t,o-fi.pitch*.1*t,fi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function A0(){wa=Math.min(window.devicePixelRatio||1,2),vr.width=Math.round(window.innerWidth*wa),vr.height=Math.round(fi.h*wa),ma=null,Us=null}var Eo=0,Us=null;function XS(n){let e=wa,t=fi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[Ii.w,i,e,n].join("|");if(Us&&Us.dots===Ii&&Us.key===s)return Us;(!ma||_g!==n)&&(_g=n,ma={on:xg(n,!0),off:xg(n,!1)});let r=i+Ii.w+i,o=document.createElement("canvas");o.width=Math.ceil(r*t*e),o.height=Math.round(fi.h*e);let a=o.getContext("2d"),l=(fi.h-fi.rows*t)/2,c=ma.on.width/2;a.fillStyle="#000",a.fillRect(0,0,o.width,o.height);for(let h=0;h<r;h++){let u=h<i?0:Ii.cols[(h-i)%Ii.w],d=(h*t+t/2)*e-c;for(let p=0;p<fi.rows;p++)a.drawImage(u>>p&1?ma.on:ma.off,d,(l+p*t+t/2)*e-c)}return Us={canvas:o,dots:Ii,key:s,shown:-1,lead:i}}function YS(n){let e=+(ve.settings.home||{}).tickerSpeed;Eo+=n*(e>0?Math.min(120,e):26);let t=XS(ve.settings.accent||"#ffcc00");Eo>=1&&(Ds+=Math.floor(Eo),Eo%=1),Ds>=t.lead+Ii.w&&(Ds=t.lead+(Ds-t.lead)%Ii.w),t.shown!==Ds&&(t.shown=Ds,yg.setTransform(1,0,0,1,0,0),yg.drawImage(t.canvas,Ds*fi.pitch*wa,0,vr.width,vr.height,0,0,vr.width,vr.height))}var It=!1,Mr=!1,Wo=!1,Sr=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),Dd=0,Ud=0,ud=!1,jS=180;function hf(n=Wo){if(!(It||ud)){if(!(n&&y&&y.W&&!kn.hidden&&!Na.matches)){bg();return}ud=!0,kn.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&Fi(),ZS(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{ud=!1,bg()},jS)}}function ZS(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function bg(){if(!It){if(It=!0,clearTimeout(Dd),o0=performance.now(),!St&&Sr())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Nt[0].def).id)}catch{}QS(),JM(),br(),requestAnimationFrame(()=>requestAnimationFrame(()=>{kn.classList.add("out"),Dd=setTimeout(()=>{kn.hidden=!0,IS()},1250)})),rn.classList.add("on"),setTimeout(eS,1500),Ys.hidden=!1,Do.classList.remove("hidden"),mn.focus({preventScroll:!0})}}function ph(n=!0){if(It&&(Si(),zc(),Td(),th(),Ho(null),ef(),It=!1,Wo=!1,clearTimeout(Dd),Ud=performance.now()+1300,Ws.classList.remove("wait"),cf(ce(ve.settings.home.enter)||Me("enter")),C0=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),kn.classList.remove("leaving"),kn.hidden=!1,kn.offsetWidth,kn.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!St))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!St){if(Hs.open){Hs.pushed=!1,ds();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(Hs.pushed=!1,Sr())ph(!1);else if(!It&&Mr)hf();else if(It&&Xs){let n=Nt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&En&&zo(n)}}});rn.addEventListener("click",n=>{n.target.closest(".wm")&&It&&ph()});rn.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&It&&(n.preventDefault(),ph())});Ws.addEventListener("click",()=>{Wo=!0,Mr?hf():(cf(Me("loading")),Ws.classList.add("wait"))});var C0=0,Ec=0,Mg=0,Co=null,R0=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function uf(){if(It||Wo||performance.now()-C0<900||ue&&ue.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||Ws.click()}kn.addEventListener("wheel",n=>{if(It||R0(n.target))return;let e=performance.now();e-Mg>350&&(Ec=0),Mg=e,n.deltaY>0&&(Ec+=n.deltaY*(n.deltaMode?30:1),Ec>40&&(Ec=0,uf()))},{passive:!0});kn.addEventListener("touchstart",n=>{Co=n.touches.length===1&&!R0(n.target)?n.touches[0].clientY:null},{passive:!0});kn.addEventListener("touchmove",n=>{Co!==null&&n.touches.length===1&&Co-n.touches[0].clientY>46&&(Co=null,uf())},{passive:!0});kn.addEventListener("touchend",()=>{Co=null},{passive:!0});window.addEventListener("keydown",n=>{if(It||n.ctrlKey||n.metaKey||n.altKey||ue&&ue.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),S0();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),uf()}});var Od=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function JS(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return St&&St.tag&&(e=St.tag),Od(e||n)}function KS(n,e){let t=n.tags||[],i=t.find(s=>Od(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>Od(r)===e));return i?i.id:""}function QS(){try{$s.compile(wM,Wn,ls)}catch{}ah();let n=St&&St.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Nt.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Nt.findIndex(o=>o.def.id===ve.settings.startSection)));let s=JS(t||(e&&i<0?e:""));if(s){let o=Nt.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Nt.keys()];for(let a of o){let l=KS(Nt[a].def,s);if(l){i=a,Nt[a].def.defaultTag=l;break}}}fs=le.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=ps();H.cameraY=Ca(),vt.x=us()*Math.sin(H.degreeCamera)+r.p.x,vt.y=H.cameraY,vt.z=us()*Math.cos(H.degreeCamera)+r.p.z,On.x=r.p.x,On.y=sh(),On.z=r.p.z,Xs=!0,zo(i,0),(Wt<=700||Ht<=520)&&br()}var Sg=performance.now(),wg=NaN,Eg=0,kd=0,ew=(n=700)=>{kd=Math.max(kd,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>ew(),{passive:!0}));function tw(){let n=Wn.position,e=Wn.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+Wn.fov*7.3,i=1;return ls.traverseVisible(s=>{i+=1.13;let r=s.position,o=s.rotation,a=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+o.x*3.1+o.y*3.7+o.z*4.3+a.x*5.3+a.y*5.9+a.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function L0(n){let e=Math.min(.25,Math.max(0,(n-Sg)/1e3));if(Sg=n,as+=e,Dc=e*vM,!It&&Ii&&!_r.classList.contains("hc-late")&&YS(e),y&&!kn.hidden&&US(n),Xs&&(It||n<Ud)){bM(),XM(),YM(),ZM(),Pe&&Pe.update(),pS(),$e.step(),KM();let t=bi.length||n<kd||n<Ud||Bi||$n||Zn||n-Eg>2e3,i=tw();(t||i!==wg)&&($s.render(ls,Wn),Eg=n,wg=i)}requestAnimationFrame(L0)}function dd(n){console.error(n),Nc(!0);let e=document.getElementById("load-error");e.textContent=Me("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function nw(){St||!/[?&]preview\b/.test(location.search)||window.parent===window||(St=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:Lg},"*")}catch{}}))}var P0=()=>{let n=ce((ve.settings.home||{}).sub||{}).trim();if(/\n/.test(n))return n.split(/\n+/).map(i=>i.trim()).filter(Boolean);let e=[],t="";return n.split(/(?<=,)\s+/).forEach(i=>{t&&(t+" "+i).length>62?(e.push(t),t=i):t=t?t+" "+i:i}),t&&e.push(t),e};function iw(){let n=document.getElementById("hc-intro");if(!n)return;let e=n.querySelector(".ln"),t=P0();if(!t.length){n.remove();return}e.querySelectorAll(".l").forEach(r=>r.getAnimations().forEach(o=>o.cancel())),e.innerHTML="",t.forEach(r=>{let o=document.createElement("span");o.className="l",o.textContent=r,e.appendChild(o)});let i=0,s=0;[...e.children].forEach((r,o)=>{r.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:i,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),o===t.length-1&&(s=i),i+=Math.max(650,Math.min(1700,120+16*t[o].length))}),window.HC_INTRO={t0:performance.now(),video:s,depart:i+150}}var _a=null;function I0(){if(_a){fd(_a,!0);return}let n=P0();if(!n.length)return;let e=!It,t=document.createElement("div");t.id="hc-say",t.className=e?"home":"world",t.setAttribute("role","status");let i=document.createElement("div");i.className="ln",t.appendChild(i);let s=document.querySelector("#home-band .sl span, #slogan span");if(s){let a=getComputedStyle(s);i.style.fontFamily=a.fontFamily,i.style.fontWeight=a.fontWeight,i.style.fontStyle=a.fontStyle}n.forEach(a=>{let l=document.createElement("span");l.className="l",l.textContent=a,i.appendChild(l)}),(e?document.getElementById("home"):document.body).appendChild(t),_a=t;let r=0;[...i.children].forEach((a,l)=>{a.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:r,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),r+=Math.max(650,Math.min(1700,120+16*n[l].length))}),t.animate([{opacity:0},{opacity:1}],{duration:500,fill:"both"}),t._t=setTimeout(()=>fd(t),r+900);let o=a=>{a.target.closest&&a.target.closest("#home-about, #about-btn")||fd(t,!0)};setTimeout(()=>{_a===t&&(t._away=o,window.addEventListener("pointerdown",o,!0),window.addEventListener("keydown",o,!0))},50)}function fd(n,e=!1){if(n._gone)return;n._gone=!0,clearTimeout(n._t),_a===n&&(_a=null),n._away&&(window.removeEventListener("pointerdown",n._away,!0),window.removeEventListener("keydown",n._away,!0));let t=[...n.querySelectorAll(".l")],i=e?80:N0,s=e?450:750,r=(t.length-1)*i;t.forEach((o,a)=>o.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:s,delay:a*i,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),n.animate([{opacity:0}],{duration:600,delay:r+s*.4,fill:"forwards"}),setTimeout(()=>n.remove(),r+s+50)}var jc=!1,Ro=!1,Lo=!1,N0=240;function Ic(){if(Lo)return;Lo=!0;let n=document.getElementById("hc-intro");n&&n.classList.remove("hold"),sw()}function Nc(n=!1,e=!1){let t=document.getElementById("hc-intro");if(!t||jc)return;if(jc=!0,n||!t.animate){t.remove(),Ic(),Ag(!0);return}e&&(Ic(),_r.classList.remove("hc-stage"));let i=[...t.querySelectorAll(".l")],s=e?80:N0,r=e?450:750,o=(i.length-1)*s;i.forEach((a,l)=>a.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:r,delay:l*s,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),setTimeout(Ic,o),setTimeout(()=>Ag(),o+r+(e?0:500)),setTimeout(()=>t.remove(),o+r+1300)}function sw(){if(!(!y||It)){if(y.reelOn&&y.rp&&!y.userReel)Ro||(Ro=!0,y.rp.seek(0),y.rp.play());else if(!y.reelOn&&!y.userReel&&!y.cam&&Go()&&Sr()&&!Na.matches&&!(St&&St.start)){let n=setInterval(()=>{if(It||y.reelOn||y.cam){clearInterval(n);return}Mr&&(clearInterval(n),dh(!0),Vo(),Tg())},150);return}Tg()}}function Tg(){let n=document.getElementById("home-snd");n&&!n.hidden&&!y.sound&&(n.classList.remove("blink"),n.offsetWidth,n.classList.add("blink"),setTimeout(()=>n.classList.remove("blink"),1400))}var _r=document.documentElement,rw="cubic-bezier(.22,.61,.36,1)";function aw(){if(!_r.classList.contains("hc-stage"))return;let n=()=>{if(!_r.classList.contains("hc-stage"))return;let t=document.querySelector("#home-slogan .wm"),i=[...document.querySelectorAll("#home-slogan > span")],s=[...document.querySelectorAll("#home-ctl > *")];_r.classList.remove("hc-stage");let r=(o,a,l=-24,c=900)=>o&&o.animate([{opacity:0,transform:`translateX(${l}px)`,filter:"blur(6px)"},{opacity:getComputedStyle(o).opacity,transform:"none",filter:"blur(0)"}],{duration:c,delay:a,easing:rw,fill:"backwards"});r(t,0,-30,1100),i.forEach((o,a)=>r(o,380+a*130,-18,800)),s.forEach((o,a)=>o.animate([{opacity:0,transform:"scale(.6)"},{opacity:getComputedStyle(o).opacity,transform:"none"}],{duration:520,delay:760+a*90,easing:"cubic-bezier(.34,1.4,.64,1)",fill:"backwards"})),setTimeout(()=>{window.HC_GO&&window.HC_GO()},1150+s.length*60)};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,1200))]):Promise.resolve()).then(()=>requestAnimationFrame(n))}function Ag(n=!1){_r.classList.contains("hc-late")&&(_r.classList.remove("hc-stage","hc-late"),Ds=0,Eo=0,Us&&(Us.shown=-1),!n&&["#ticker","#enter","#home-dock"].forEach((e,t)=>{let i=document.querySelector(e);i&&i.animate([{opacity:0},{opacity:getComputedStyle(i).opacity}],{duration:1200,delay:t*220,easing:"ease",fill:"backwards"})}))}function ow(){if(!document.getElementById("hc-intro"))return;let e=!!y&&Go()&&Sr()&&!Na.matches&&!(St&&St.start),t=!1,i=!e,s=0,r=()=>Nc(!1,!0);["pointerdown","keydown","wheel","touchmove"].forEach(a=>window.addEventListener(a,r,{once:!0,passive:!0,capture:!0}));let o=setInterval(()=>{if(jc&&Lo){clearInterval(o);return}if(It){clearInterval(o),Nc(!0);return}e&&Mr&&!t&&!y.reelOn&&!y.cam&&(t=dh(!0)),t&&!i&&y.rp&&y.rp.t>.05&&(y.rp.pause(),y.rp.seek(0),i=!0),t&&!y.reelOn&&(i=!0);let a=window.HC_INTRO;if(!a)return;let l=performance.now(),c=a.t0+(a.video??a.depart),h=a.t0+a.depart,u=!y||!y.rp?0:y.rp.kind==="youtube"?2900:y.rp.kind==="vimeo"?500:0;u&&i&&y.reelOn&&!Ro&&l>=c-u&&(Ro=!0,s=l,y.rp.seek(0),y.rp.play()),!Lo&&l>=c&&((e?!y.reelOn||i&&(!u||Ro&&l>=s+u):Mr)||l-c>6e3)&&Ic(),!jc&&Lo&&l>=Math.max(h,c+600)&&Nc()},60)}(async function(){try{await nw(),St?ve=pr(structuredClone(St.content)):(ve=await Tc.load(),Tc.prepare&&await Tc.prepare(ve))}catch(a){dd(a);return}ni=Zc(),qg();{let a=zd();a!==null&&(ni=a)}Hd();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:ui,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}let r=((window.HC_ROUTE||{}).lang||"").toLowerCase();if(Nn=t.includes(s)?s:t.includes(r)?r:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Nt=ve.sections.filter(a=>a.visible).map(a=>({def:a})),!Nt.length){dd(new Error("aucune section visible"));return}if(!St)try{let a={"nouveau-contenu":"immersive","nouveau-contenu-4":"la-traversee-du-temps","nouveau-contenu-5":"valentin-ducros","nouveau-contenu-7":"laurent-delforge"},l=new URLSearchParams(location.search).get("p")||(window.HC_ROUTE||{}).p,c=l&&!ve.posts.some(u=>u.id===l)&&a[l]?a[l]:l,h=c&&ve.posts.find(u=>u.id===c&&u.published!==!1&&Nt.some(d=>d.def.id===u.section));h&&(Pc=h.id,history.replaceState(null,"",location.pathname+location.search+"#"+h.section))}catch{}sS(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&Pg(!1),c0(),lh(),QM(),_S(),St&&iw(),ow(),aw(),t0(),ah(),A0(),requestAnimationFrame(L0),gr=Nt.map((a,l)=>new vd(a.def,l)),Nt.forEach((a,l)=>{a.object=gr[l]}),Nt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let o=new pc(Bg);try{(await Promise.allSettled(gr.map(l=>l.load(o)))).forEach((l,c)=>{l.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+gr[c].def.id+" \xBB :",l.reason)}),gr.forEach((l,c)=>l.place(c)),await Promise.race([Promise.all($g).then(qs),new Promise(l=>setTimeout(l,3e3))]),Mr=!0;{let l=document.getElementById("seo-page");l&&l.remove()}if((Wo||!Sr()||St&&St.start)&&hf(),Pc){let l=Pc,c=performance.now(),h=setInterval(()=>{(En||performance.now()-c>8e3)&&(clearInterval(h),En&&hh(l))},120)}}catch(a){dd(a)}})();window.__hc={P:H,STYLE:le,cam:vt,camera:Wn,renderer:$s,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return En},get homeGone(){return It},get content(){return ve},get postsView(){return Pe},getToSectionView:zo,openThatPost:Uo,closePost:ds,goToPost:hh,setLang:Yd,enter:()=>Ws.click()};})();
