/* Généré depuis assets/hc/site.js (sources lisibles à côté). Three.js r160, licence MIT. */
(()=>{var Ju="160";var by=0,Of=1,My=2;var Sm=1,wy=2,ts=3,Qn=0,yn=1,jn=2;var Ls=0,oa=1,kf=2,Bf=3,Ff=4,Sy=5,hr=100,Ey=101,Ty=102,zf=103,Hf=104,Ay=200,Cy=201,Ry=202,Ly=203,yu=204,vu=205,Py=206,Iy=207,Ny=208,Dy=209,Uy=210,Oy=211,ky=212,By=213,Fy=214,zy=0,Hy=1,Vy=2,Hl=3,Gy=4,Wy=5,$y=6,qy=7,Sc=0,Xy=1,Yy=2,Ps=0,jy=1,Zy=2,Jy=3,Ky=4,Qy=5,ev=6,Vf="attached",tv="detached",Em=300,ha=301,ua=302,_u=303,xu=304,Ec=306,Ns=1e3,Un=1001,bu=1002,wn=1003,Gf=1004;var Oh=1005;var Xn=1006,nv=1007;var Ds=1008;var Is=1009,iv=1010,sv=1011,Ku=1012,Tm=1013,Rs=1014,is=1015,lo=1016,Am=1017,Cm=1018,fr=1020,rv=1021,di=1023,av=1024,ov=1025,pr=1026,da=1027,lv=1028,Rm=1029,cv=1030,Lm=1031,Pm=1033,kh=33776,Bh=33777,Fh=33778,zh=33779,Wf=35840,$f=35841,qf=35842,Xf=35843,Im=36196,Yf=37492,jf=37496,Zf=37808,Jf=37809,Kf=37810,Qf=37811,ep=37812,tp=37813,np=37814,ip=37815,sp=37816,rp=37817,ap=37818,op=37819,lp=37820,cp=37821,Hh=36492,hp=36494,up=36495,hv=36283,dp=36284,fp=36285,pp=36286;var Vl=2300,Gl=2301,Vh=2302,mp=2400,gp=2401,yp=2402,uv=2500;var Nm=3e3,mr=3001,dv=3200,fv=3201,Qu=0,pv=1,fi="",Zt="srgb",rs="srgb-linear",ed="display-p3",Tc="display-p3-linear",Wl="linear",Vt="srgb",$l="rec709",ql="p3";var Fr=7680;var vp=519,mv=512,gv=513,yv=514,Dm=515,vv=516,_v=517,xv=518,bv=519,Mu=35044;var _p="300 es",wu=1035,ss=2e3,Xl=2001,Us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xp=1234567,so=Math.PI/180,fa=180/Math.PI;function wi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function Dn(n,e,t){return Math.max(e,Math.min(t,n))}function td(n,e){return(n%e+e)%e}function Mv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wv(n,e,t){return n!==e?(t-n)/(e-n):0}function ro(n,e,t){return(1-t)*n+t*e}function Sv(n,e,t,i){return ro(n,e,1-Math.exp(-t*i))}function Ev(n,e=1){return e-Math.abs(td(n,e*2)-e)}function Tv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Av(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rv(n,e){return n+Math.random()*(e-n)}function Lv(n){return n*(.5-Math.random())}function Pv(n){n!==void 0&&(xp=n);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iv(n){return n*so}function Nv(n){return n*fa}function Su(n){return(n&n-1)===0&&n!==0}function Dv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Uv(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Fs={DEG2RAD:so,RAD2DEG:fa,generateUUID:wi,clamp:Dn,euclideanModulo:td,mapLinear:Mv,inverseLerp:wv,lerp:ro,damp:Sv,pingpong:Ev,smoothstep:Tv,smootherstep:Av,randInt:Cv,randFloat:Rv,randFloatSpread:Lv,seededRandom:Pv,degToRad:Iv,radToDeg:Nv,isPowerOfTwo:Su,ceilPowerOfTwo:Dv,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:Uv,normalize:It,denormalize:Ri},tt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],M=s[1],b=s[4],I=s[7],P=s[2],C=s[5],D=s[8];return r[0]=o*v+a*M+l*P,r[3]=o*m+a*b+l*C,r[6]=o*f+a*I+l*D,r[1]=c*v+h*M+u*P,r[4]=c*m+h*b+u*C,r[7]=c*f+h*I+u*D,r[2]=d*v+p*M+g*P,r[5]=d*m+p*b+g*C,r[8]=d*f+p*I+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gh.makeScale(e,t)),this}rotate(e){return this.premultiply(Gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gh=new gt;function Um(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ov(){let n=co("canvas");return n.style.display="block",n}var bp={};function ao(n){n in bp||(bp[n]=!0,console.warn(n))}var Mp=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),dl={[rs]:{transfer:Wl,primaries:$l,toReference:n=>n,fromReference:n=>n},[Zt]:{transfer:Vt,primaries:$l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tc]:{transfer:Wl,primaries:ql,toReference:n=>n.applyMatrix3(wp),fromReference:n=>n.applyMatrix3(Mp)},[ed]:{transfer:Vt,primaries:ql,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wp),fromReference:n=>n.applyMatrix3(Mp).convertLinearToSRGB()}},kv=new Set([rs,Tc]),Nt={enabled:!0,_workingColorSpace:rs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!kv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=dl[e].toReference,s=dl[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return dl[n].primaries},getTransfer:function(n){return n===fi?Wl:dl[n].transfer}};function la(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zr,jl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=co("canvas")),zr.width=e.width,zr.height=e.height;let i=zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=la(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(la(t[i]/255)*255):t[i]=la(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bv=0,Zl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($h(s[o].image)):r.push($h(s[o]))}else r=$h(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function $h(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fv=0,ei=class n extends Us{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Un,s=Un,r=Xn,o=Ds,a=di,l=Is,c=n.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=wi(),this.name="",this.source=new Zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mr?Zt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?mr:Nm}set encoding(e){ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Zt:fi}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Em;ei.DEFAULT_ANISOTROPY=1;var xt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,I=(p+1)/2,P=(f+1)/2,C=(h+d)/4,D=(u+v)/4,z=(g+m)/4;return b>I&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=D/i):I>P?I<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),i=C/s,r=z/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=D/r,s=z/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eu=class extends Us{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?Zt:fi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ei(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},as=class extends Eu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jl=class extends ei{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tu=class extends ei{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Li=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*v,M=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let P=Math.sqrt(b),C=Math.atan2(P,f*M);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}let I=a*M;if(l=l*m+d*I,c=c*m+p*I,h=h*m+g*I,u=u*m+v*I,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qh=new U,Sp=new Li,vn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),pl.subVectors(this.max,Za),Hr.subVectors(e.a,Za),Vr.subVectors(e.b,Za),Gr.subVectors(e.c,Za),Ss.subVectors(Vr,Hr),Es.subVectors(Gr,Vr),rr.subVectors(Hr,Gr);let t=[0,-Ss.z,Ss.y,0,-Es.z,Es.y,0,-rr.z,rr.y,Ss.z,0,-Ss.x,Es.z,0,-Es.x,rr.z,0,-rr.x,-Ss.y,Ss.x,0,-Es.y,Es.x,0,-rr.y,rr.x,0];return!Xh(t,Hr,Vr,Gr,pl)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,Hr,Vr,Gr,pl))?!1:(ml.crossVectors(Ss,Es),t=[ml.x,ml.y,ml.z],Xh(t,Hr,Vr,Gr,pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ji=[new U,new U,new U,new U,new U,new U,new U,new U],xi=new U,fl=new vn,Hr=new U,Vr=new U,Gr=new U,Ss=new U,Es=new U,rr=new U,Za=new U,pl=new U,ml=new U,ar=new U;function Xh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ar.fromArray(n,r);let a=s.x*Math.abs(ar.x)+s.y*Math.abs(ar.y)+s.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zv=new vn,Ja=new U,Yh=new U,pi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ja.subVectors(e,this.center);let t=Ja.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ja,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ja.copy(e.center).add(Yh)),this.expandByPoint(Ja.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new U,jh=new U,gl=new U,Ts=new U,Zh=new U,yl=new U,Jh=new U,pa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){jh.copy(e).add(t).multiplyScalar(.5),gl.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(jh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(gl),a=Ts.dot(this.direction),l=-Ts.dot(gl),c=Ts.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jh).addScaledVector(gl,d),p}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);let i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,s,r){Zh.subVectors(t,e),yl.subVectors(i,e),Jh.crossVectors(Zh,yl);let o=this.direction.dot(Jh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);let l=a*this.direction.dot(yl.crossVectors(Ts,yl));if(l<0)return null;let c=a*this.direction.dot(Zh.cross(Ts));if(c<0||l+c>o)return null;let h=-a*Ts.dot(Jh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Wr.setFromMatrixColumn(e,0).length(),r=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hv,e,Vv)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),As.crossVectors(i,si),As.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),As.crossVectors(i,si)),As.normalize(),vl.crossVectors(si,As),s[0]=As.x,s[4]=vl.x,s[8]=si.x,s[1]=As.y,s[5]=vl.y,s[9]=si.y,s[2]=As.z,s[6]=vl.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],M=i[3],b=i[7],I=i[11],P=i[15],C=s[0],D=s[4],z=s[8],S=s[12],w=s[1],B=s[5],te=s[9],le=s[13],k=s[2],W=s[6],F=s[10],ie=s[14],Y=s[3],q=s[7],J=s[11],ee=s[15];return r[0]=o*C+a*w+l*k+c*Y,r[4]=o*D+a*B+l*W+c*q,r[8]=o*z+a*te+l*F+c*J,r[12]=o*S+a*le+l*ie+c*ee,r[1]=h*C+u*w+d*k+p*Y,r[5]=h*D+u*B+d*W+p*q,r[9]=h*z+u*te+d*F+p*J,r[13]=h*S+u*le+d*ie+p*ee,r[2]=g*C+v*w+m*k+f*Y,r[6]=g*D+v*B+m*W+f*q,r[10]=g*z+v*te+m*F+f*J,r[14]=g*S+v*le+m*ie+f*ee,r[3]=M*C+b*w+I*k+P*Y,r[7]=M*D+b*B+I*W+P*q,r[11]=M*z+b*te+I*F+P*J,r[15]=M*S+b*le+I*ie+P*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],M=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,b=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,I=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,P=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,C=t*M+i*b+s*I+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=M*D,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*D,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*D,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*D,e[4]=b*D,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*D,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*D,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*D,e[8]=I*D,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*D,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*D,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*D,e[12]=P*D,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*D,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*D,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,M=l*c,b=l*h,I=l*u,P=i.x,C=i.y,D=i.z;return s[0]=(1-(v+f))*P,s[1]=(p+I)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-I)*C,s[5]=(1-(d+f))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+b)*D,s[9]=(m-M)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Wr.set(s[0],s[1],s[2]).length(),o=Wr.set(s[4],s[5],s[6]).length(),a=Wr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let c=1/r,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ss){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(a===ss)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xl)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ss){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h,g,v;if(a===ss)g=(o+r)*u,v=-2*u;else if(a===Xl)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wr=new U,bi=new at,Hv=new U(0,0,0),Vv=new U(1,1,1),As=new U,vl=new U,si=new U,Ep=new at,Tp=new Li,Kl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kl.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gv=0,Ap=new U,$r=new Li,Ji=new at,_l=new U,Ka=new U,Wv=new U,$v=new Li,Cp=new U(1,0,0),Rp=new U(0,1,0),Lp=new U(0,0,1),qv={type:"added"},Xv={type:"removed"},Qt=class n extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Kl,i=new Li,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new gt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_l.copy(e):_l.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Ka,_l,this.up):Ji.lookAt(_l,Ka,this.up),this.quaternion.setFromRotationMatrix(Ji),s&&(Ji.extractRotation(s.matrixWorld),$r.setFromRotationMatrix(Ji),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,Wv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,$v,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new U,Ki=new U,Kh=new U,Qi=new U,qr=new U,Xr=new U,Pp=new U,Qh=new U,eu=new U,tu=new U,xl=!1,dr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mi.subVectors(s,t),Ki.subVectors(i,t),Kh.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(Ki),l=Mi.dot(Kh),c=Ki.dot(Ki),h=Ki.dot(Kh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getUV(e,t,i,s,r,o,a,l){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),Ki.subVectors(e,t),Mi.cross(Ki).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qr.subVectors(s,i),Xr.subVectors(r,i),Qh.subVectors(e,i);let l=qr.dot(Qh),c=Xr.dot(Qh);if(l<=0&&c<=0)return t.copy(i);eu.subVectors(e,s);let h=qr.dot(eu),u=Xr.dot(eu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(qr,o);tu.subVectors(e,r);let p=qr.dot(tu),g=Xr.dot(tu);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Xr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Pp.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Pp,a);let f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(qr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},bl={h:0,s:0,l:0};function nu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ht=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Nt.workingColorSpace){if(e=td(e,1),t=Dn(t,0,1),i=Dn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nu(o,r,e+1/3),this.g=nu(o,r,e),this.b=nu(o,r,e-1/3)}return Nt.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=Om[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Wh(e.r),this.g=Wh(e.g),this.b=Wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Nt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(Dn(Nn.r*255,0,255))*65536+Math.round(Dn(Nn.g*255,0,255))*256+Math.round(Dn(Nn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(Nn.copy(this),t);let i=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Zt){Nt.fromWorkingColorSpace(Nn.copy(this),e);let t=Nn.r,i=Nn.g,s=Nn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cs),this.setHSL(Cs.h+e,Cs.s+t,Cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cs),e.getHSL(bl);let i=ro(Cs.h,bl.h,t),s=ro(Cs.s,bl.s,t),r=ro(Cs.l,bl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new ht;ht.NAMES=Om;var Yv=0,Pi=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=oa,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=vu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yu&&(i.blendSrc=this.blendSrc),this.blendDst!==vu&&(i.blendDst=this.blendDst),this.blendEquation!==hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var sn=new U,Ml=new tt,ai=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}};var Ql=class extends ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ec=class extends ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Bt=class extends ai{constructor(e,t,i){super(new Float32Array(e),t,i)}};var jv=0,ui=new at,iu=new Qt,Yr=new U,ri=new vn,Qa=new vn,gn=new U,ti=class n extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?ec:Ql)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new gt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ri.min,Qa.min),ri.expandByPoint(gn),gn.addVectors(ri.max,Qa.max),ri.expandByPoint(gn)):(ri.expandByPoint(Qa.min),ri.expandByPoint(Qa.max))}ri.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),gn.add(Yr)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new U,h[w]=new U;let u=new U,d=new U,p=new U,g=new tt,v=new tt,m=new tt,f=new U,M=new U;function b(w,B,te){u.fromArray(s,w*3),d.fromArray(s,B*3),p.fromArray(s,te*3),g.fromArray(o,w*2),v.fromArray(o,B*2),m.fromArray(o,te*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);let le=1/(v.x*m.y-m.x*v.y);isFinite(le)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(le),M.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(le),c[w].add(f),c[B].add(f),c[te].add(f),h[w].add(M),h[B].add(M),h[te].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let w=0,B=I.length;w<B;++w){let te=I[w],le=te.start,k=te.count;for(let W=le,F=le+k;W<F;W+=3)b(i[W+0],i[W+1],i[W+2])}let P=new U,C=new U,D=new U,z=new U;function S(w){D.fromArray(r,w*3),z.copy(D);let B=c[w];P.copy(B),P.sub(D.multiplyScalar(D.dot(B))).normalize(),C.crossVectors(z,B);let le=C.dot(h[w])<0?-1:1;l[w*4]=P.x,l[w*4+1]=P.y,l[w*4+2]=P.z,l[w*4+3]=le}for(let w=0,B=I.length;w<B;++w){let te=I[w],le=te.start,k=te.count;for(let W=le,F=le+k;W<F;W+=3)S(i[W+0]),S(i[W+1]),S(i[W+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ai(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ip=new at,or=new pa,wl=new pi,Np=new U,jr=new U,Zr=new U,Jr=new U,su=new U,Sl=new U,El=new tt,Tl=new tt,Al=new tt,Dp=new U,Up=new U,Op=new U,Cl=new U,Rl=new U,Gt=class extends Qt{constructor(e=new ti,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(su.fromBufferAttribute(u,e),o?Sl.addScaledVector(su,h):Sl.addScaledVector(su.sub(t),h))}t.add(Sl)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(wl.containsPoint(or.origin)===!1&&(or.intersectSphere(wl,Np)===null||or.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Ip.copy(r).invert(),or.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let I=M,P=b;I<P;I+=3){let C=a.getX(I),D=a.getX(I+1),z=a.getX(I+2);s=Ll(this,f,e,i,c,h,u,C,D,z),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=a.getX(m),b=a.getX(m+1),I=a.getX(m+2);s=Ll(this,o,e,i,c,h,u,M,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let I=M,P=b;I<P;I+=3){let C=I,D=I+1,z=I+2;s=Ll(this,f,e,i,c,h,u,C,D,z),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let M=m,b=m+1,I=m+2;s=Ll(this,o,e,i,c,h,u,M,b,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zv(n,e,t,i,s,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:n}}function Ll(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jr),n.getVertexPosition(l,Zr),n.getVertexPosition(c,Jr);let h=Zv(n,e,t,i,jr,Zr,Jr,Cl);if(h){s&&(El.fromBufferAttribute(s,a),Tl.fromBufferAttribute(s,l),Al.fromBufferAttribute(s,c),h.uv=dr.getInterpolation(Cl,jr,Zr,Jr,El,Tl,Al,new tt)),r&&(El.fromBufferAttribute(r,a),Tl.fromBufferAttribute(r,l),Al.fromBufferAttribute(r,c),h.uv1=dr.getInterpolation(Cl,jr,Zr,Jr,El,Tl,Al,new tt),h.uv2=h.uv1),o&&(Dp.fromBufferAttribute(o,a),Up.fromBufferAttribute(o,l),Op.fromBufferAttribute(o,c),h.normal=dr.getInterpolation(Cl,jr,Zr,Jr,Dp,Up,Op,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};dr.getNormal(jr,Zr,Jr,u.normal),h.face=u}return h}var uo=class n extends ti{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function g(v,m,f,M,b,I,P,C,D,z,S){let w=I/D,B=P/z,te=I/2,le=P/2,k=C/2,W=D+1,F=z+1,ie=0,Y=0,q=new U;for(let J=0;J<F;J++){let ee=J*B-le;for(let ue=0;ue<W;ue++){let G=ue*w-te;q[v]=G*M,q[m]=ee*b,q[f]=k,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[f]=C>0?1:-1,h.push(q.x,q.y,q.z),u.push(ue/D),u.push(1-J/z),ie+=1}}for(let J=0;J<z;J++)for(let ee=0;ee<D;ee++){let ue=d+ee+W*J,G=d+ee+W*(J+1),X=d+(ee+1)+W*(J+1),se=d+(ee+1)+W*J;l.push(ue,G,se),l.push(G,X,se),Y+=6}a.addGroup(p,Y,S),p+=Y,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ma(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qn(n){let e={};for(let t=0;t<n.length;t++){let i=ma(n[t]);for(let s in i)e[s]=i[s]}return e}function Jv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function km(n){return n.getRenderTarget()===null?n.outputColorSpace:Nt.workingColorSpace}var Ac={clone:ma,merge:qn},Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},tc=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=ss}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends tc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kr=-90,Qr=1,Au=class extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Kr,Qr,e,t);s.layers=this.layers,this.add(s);let r=new rn(Kr,Qr,e,t);r.layers=this.layers,this.add(r);let o=new rn(Kr,Qr,e,t);o.layers=this.layers,this.add(o);let a=new rn(Kr,Qr,e,t);a.layers=this.layers,this.add(a);let l=new rn(Kr,Qr,e,t);l.layers=this.layers,this.add(l);let c=new rn(Kr,Qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},nc=class extends ei{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ha,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cu=class extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===mr?Zt:fi),this.texture=new nc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new uo(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Ls});r.uniforms.tEquirect.value=t;let o=new Gt(s,r),a=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Xn),new Au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ru=new U,e_=new U,t_=new gt,ns=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ru.subVectors(i,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ru),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||t_.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},lr=new pi,Pl=new U,fo=class{constructor(e=new ns,t=new ns,i=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ss){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],M=s[13],b=s[14],I=s[15];if(i[0].setComponents(l-r,d-c,m-p,I-f).normalize(),i[1].setComponents(l+r,d+c,m+p,I+f).normalize(),i[2].setComponents(l+o,d+h,m+g,I+M).normalize(),i[3].setComponents(l-o,d-h,m-g,I-M).normalize(),i[4].setComponents(l-a,d-u,m-v,I-b).normalize(),t===ss)i[5].setComponents(l+a,d+u,m+v,I+b).normalize();else if(t===Xl)i[5].setComponents(a,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Pl.x=s.normal.x>0?e.max.x:e.min.x,Pl.y=s.normal.y>0?e.max.y:e.min.y,Pl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function n_(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let f=g[v];t?n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var os=class n extends ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let b=0;b<c;b++){let I=b*u-r;g.push(I,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let b=M+c*f,I=M+c*(f+1),P=M+1+c*(f+1),C=M+1+c*f;p.push(b,I,C),p.push(I,P,C)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},i_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s_=`#ifdef USE_ALPHAHASH
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
#endif`,r_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,l_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c_=`#ifdef USE_AOMAP
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
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u_=`#ifdef USE_BATCHING
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
#endif`,d_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,f_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,T_=`#define PI 3.141592653589793
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
} // validated`,A_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`
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
}`,U_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
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
}`,$_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
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
#endif`,Z_=`#ifdef USE_ENVMAP
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
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
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
#endif`,nx=`struct PhysicalMaterial {
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
}`,ix=`
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
#endif`,sx=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fx=`#if defined( USE_POINTS_UV )
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
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
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
}`,cb=`#if DEPTH_PACKING == 3200
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
}`,hb=`#define DISTANCE
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
}`,ub=`#define DISTANCE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,yb=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,xb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Mb=`#define NORMAL
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
}`,wb=`#define NORMAL
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
}`,Sb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Tb=`#define STANDARD
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
}`,Ab=`#define STANDARD
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
}`,Cb=`#define TOON
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
}`,Rb=`#define TOON
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
}`,Lb=`uniform float size;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Ib=`#include <common>
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
}`,Nb=`uniform vec3 color;
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
}`,Db=`uniform float rotation;
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
}`,Ub=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:i_,alphahash_pars_fragment:s_,alphamap_fragment:r_,alphamap_pars_fragment:a_,alphatest_fragment:o_,alphatest_pars_fragment:l_,aomap_fragment:c_,aomap_pars_fragment:h_,batching_pars_vertex:u_,batching_vertex:d_,begin_vertex:f_,beginnormal_vertex:p_,bsdfs:m_,iridescence_fragment:g_,bumpmap_pars_fragment:y_,clipping_planes_fragment:v_,clipping_planes_pars_fragment:__,clipping_planes_pars_vertex:x_,clipping_planes_vertex:b_,color_fragment:M_,color_pars_fragment:w_,color_pars_vertex:S_,color_vertex:E_,common:T_,cube_uv_reflection_fragment:A_,defaultnormal_vertex:C_,displacementmap_pars_vertex:R_,displacementmap_vertex:L_,emissivemap_fragment:P_,emissivemap_pars_fragment:I_,colorspace_fragment:N_,colorspace_pars_fragment:D_,envmap_fragment:U_,envmap_common_pars_fragment:O_,envmap_pars_fragment:k_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:Z_,envmap_vertex:F_,fog_vertex:z_,fog_pars_vertex:H_,fog_fragment:V_,fog_pars_fragment:G_,gradientmap_pars_fragment:W_,lightmap_fragment:$_,lightmap_pars_fragment:q_,lights_lambert_fragment:X_,lights_lambert_pars_fragment:Y_,lights_pars_begin:j_,lights_toon_fragment:J_,lights_toon_pars_fragment:K_,lights_phong_fragment:Q_,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:sx,lights_fragment_end:rx,logdepthbuf_fragment:ax,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:lx,logdepthbuf_vertex:cx,map_fragment:hx,map_pars_fragment:ux,map_particle_fragment:dx,map_particle_pars_fragment:fx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphcolor_vertex:gx,morphnormal_vertex:yx,morphtarget_pars_vertex:vx,morphtarget_vertex:_x,normal_fragment_begin:xx,normal_fragment_maps:bx,normal_pars_fragment:Mx,normal_pars_vertex:wx,normal_vertex:Sx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Rx,opaque_fragment:Lx,packing:Px,premultiplied_alpha_fragment:Ix,project_vertex:Nx,dithering_fragment:Dx,dithering_pars_fragment:Ux,roughnessmap_fragment:Ox,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:$x,specularmap_fragment:qx,specularmap_pars_fragment:Xx,tonemapping_fragment:Yx,tonemapping_pars_fragment:jx,transmission_fragment:Zx,transmission_pars_fragment:Jx,uv_pars_fragment:Kx,uv_pars_vertex:Qx,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:sb,backgroundCube_frag:rb,cube_vert:ab,cube_frag:ob,depth_vert:lb,depth_frag:cb,distanceRGBA_vert:hb,distanceRGBA_frag:ub,equirect_vert:db,equirect_frag:fb,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:yb,meshlambert_vert:vb,meshlambert_frag:_b,meshmatcap_vert:xb,meshmatcap_frag:bb,meshnormal_vert:Mb,meshnormal_frag:wb,meshphong_vert:Sb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:Ab,meshtoon_vert:Cb,meshtoon_frag:Rb,points_vert:Lb,points_frag:Pb,shadow_vert:Ib,shadow_frag:Nb,sprite_vert:Db,sprite_frag:Ub},be={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Yn={basic:{uniforms:qn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:qn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:qn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:qn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:qn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new ht(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:qn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:qn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:qn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:qn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:qn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:qn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:qn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:qn([be.lights,be.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Yn.physical={uniforms:qn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Il={r:0,b:0,g:0};function Ob(n,e,t,i,s,r,o){let a=new ht(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let M=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b)),b===null?v(a,l):b&&b.isColor&&(v(b,1),M=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ec)?(h===void 0&&(h=new Gt(new uo(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ma(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Vt,(u!==b||d!==b.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Gt(new os(2,2),new Si({name:"BackgroundMaterial",uniforms:ma(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(b.colorSpace)!==Vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Il,km(n)),i.buffers.color.setClear(Il.r,Il.g,Il.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function kb(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(k,W,F,ie,Y){let q=!1;if(o){let J=v(ie,F,W);c!==J&&(c=J,p(c.object)),q=f(k,ie,F,Y),q&&M(k,ie,F,Y)}else{let J=W.wireframe===!0;(c.geometry!==ie.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=ie.id,c.program=F.id,c.wireframe=J,q=!0)}Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,z(k,W,F,ie),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function v(k,W,F){let ie=F.wireframe===!0,Y=a[k.id];Y===void 0&&(Y={},a[k.id]=Y);let q=Y[W.id];q===void 0&&(q={},Y[W.id]=q);let J=q[ie];return J===void 0&&(J=m(d()),q[ie]=J),J}function m(k){let W=[],F=[],ie=[];for(let Y=0;Y<s;Y++)W[Y]=0,F[Y]=0,ie[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:F,attributeDivisors:ie,object:k,attributes:{},index:null}}function f(k,W,F,ie){let Y=c.attributes,q=W.attributes,J=0,ee=F.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let X=Y[ue],se=q[ue];if(se===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;J++}return c.attributesNum!==J||c.index!==ie}function M(k,W,F,ie){let Y={},q=W.attributes,J=0,ee=F.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let X=q[ue];X===void 0&&(ue==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),ue==="instanceColor"&&k.instanceColor&&(X=k.instanceColor));let se={};se.attribute=X,X&&X.data&&(se.data=X.data),Y[ue]=se,J++}c.attributes=Y,c.attributesNum=J,c.index=ie}function b(){let k=c.newAttributes;for(let W=0,F=k.length;W<F;W++)k[W]=0}function I(k){P(k,0)}function P(k,W){let F=c.newAttributes,ie=c.enabledAttributes,Y=c.attributeDivisors;F[k]=1,ie[k]===0&&(n.enableVertexAttribArray(k),ie[k]=1),Y[k]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,W),Y[k]=W)}function C(){let k=c.newAttributes,W=c.enabledAttributes;for(let F=0,ie=W.length;F<ie;F++)W[F]!==k[F]&&(n.disableVertexAttribArray(F),W[F]=0)}function D(k,W,F,ie,Y,q,J){J===!0?n.vertexAttribIPointer(k,W,F,Y,q):n.vertexAttribPointer(k,W,F,ie,Y,q)}function z(k,W,F,ie){if(i.isWebGL2===!1&&(k.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let Y=ie.attributes,q=F.getAttributes(),J=W.defaultAttributeValues;for(let ee in q){let ue=q[ee];if(ue.location>=0){let G=Y[ee];if(G===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){let X=G.normalized,se=G.itemSize,re=t.get(G);if(re===void 0)continue;let ce=re.buffer,Ae=re.type,He=re.bytesPerElement,Fe=i.isWebGL2===!0&&(Ae===n.INT||Ae===n.UNSIGNED_INT||G.gpuType===Tm);if(G.isInterleavedBufferAttribute){let ot=G.data,V=ot.stride,Wt=G.offset;if(ot.isInstancedInterleavedBuffer){for(let qe=0;qe<ue.locationSize;qe++)P(ue.location+qe,ot.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let qe=0;qe<ue.locationSize;qe++)I(ue.location+qe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let qe=0;qe<ue.locationSize;qe++)D(ue.location+qe,se/ue.locationSize,Ae,X,V*He,(Wt+se/ue.locationSize*qe)*He,Fe)}else{if(G.isInstancedBufferAttribute){for(let ot=0;ot<ue.locationSize;ot++)P(ue.location+ot,G.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ot=0;ot<ue.locationSize;ot++)I(ue.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ot=0;ot<ue.locationSize;ot++)D(ue.location+ot,se/ue.locationSize,Ae,X,se*He,se/ue.locationSize*ot*He,Fe)}}else if(J!==void 0){let X=J[ee];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(ue.location,X);break;case 3:n.vertexAttrib3fv(ue.location,X);break;case 4:n.vertexAttrib4fv(ue.location,X);break;default:n.vertexAttrib1fv(ue.location,X)}}}}C()}function S(){te();for(let k in a){let W=a[k];for(let F in W){let ie=W[F];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete W[F]}delete a[k]}}function w(k){if(a[k.id]===void 0)return;let W=a[k.id];for(let F in W){let ie=W[F];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete W[F]}delete a[k.id]}function B(k){for(let W in a){let F=a[W];if(F[k.id]===void 0)continue;let ie=F[k.id];for(let Y in ie)g(ie[Y].object),delete ie[Y];delete F[k.id]}}function te(){le(),h=!0,c!==l&&(c=l,p(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:te,resetDefaultState:le,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:I,disableUnusedAttributes:C}}function Bb(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Fb(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,I=o||e.has("OES_texture_float"),P=b&&I,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:b,floatFragmentTextures:I,floatVertexTextures:P,maxSamples:C}}function zb(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ns,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,b=M*4,I=f.clippingState||null;l.value=I,I=h(g,d,b,p);for(let P=0;P!==b;++P)I[P]=t[P];f.clippingState=I,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,I=p;b!==v;++b,I+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Hb(n){let e=new WeakMap;function t(o,a){return a===_u?o.mapping=ha:a===xu&&(o.mapping=ua),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===_u||a===xu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Cu(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ga=class extends tc{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ra=4,kp=[.125,.215,.35,.446,.526,.582],ur=20,au=new ga,Bp=new ht,ou=null,lu=0,cu=0,cr=(1+Math.sqrt(5))/2,ea=1/cr,Fp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,cr,ea),new U(0,cr,-ea),new U(ea,0,cr),new U(-ea,0,cr),new U(cr,ea,0),new U(-cr,ea,0)],ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:lo,format:di,colorSpace:rs,depthBuffer:!1},s=zp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(r)),this._blurMaterial=Gb(r,e,t)}return s}_compileMaterial(e){let t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,i,s){let a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bp),h.toneMapping=Ps,h.autoClear=!1;let p=new an({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Gt(new uo,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Bp),v=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let b=this._cubeSize;Nl(s,M*b,f>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ha||e.mapping===ua;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Nl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,au)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fp[(s-1)%Fp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Gt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ur-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ur;m>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);let f=[],M=0;for(let D=0;D<ur;++D){let z=D/v,S=Math.exp(-z*z/2);f.push(S),D===0?M+=S:D<m&&(M+=2*S)}for(let D=0;D<f.length;D++)f[D]=f[D]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let I=this._sizeLods[s],P=3*I*(s>b-ra?s-b+ra:0),C=4*(this._cubeSize-I);Nl(t,P,C,3*I,2*I),l.setRenderTarget(t),l.render(u,au)}};function Vb(n){let e=[],t=[],i=[],s=n,r=n-ra+1+kp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ra?l=kp[o-n+ra-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,M=new Float32Array(v*g*p),b=new Float32Array(m*g*p),I=new Float32Array(f*g*p);for(let C=0;C<p;C++){let D=C%3*2/3-1,z=C>2?0:-1,S=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];M.set(S,v*g*C),b.set(d,m*g*C);let w=[C,C,C,C,C,C];I.set(w,f*g*C)}let P=new ti;P.setAttribute("position",new ai(M,v)),P.setAttribute("uv",new ai(b,m)),P.setAttribute("faceIndex",new ai(I,f)),e.push(P),s>ra&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zp(n,e,t){let i=new as(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gb(n,e,t){let i=new Float32Array(ur),s=new U(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function Hp(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function Vp(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ls,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}function Wb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===_u||l===xu,h=l===ha||l===ua;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ic(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ic(n));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $b(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qb(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let b=0,I=M.length;b<I;b+=3){let P=M[b+0],C=M[b+1],D=M[b+2];d.push(P,C,C,D,D,P)}}else if(g!==void 0){let M=g.array;v=g.version;for(let b=0,I=M.length/3-1;b<I;b+=3){let P=b+0,C=b+1,D=b+2;d.push(P,C,C,D,D,P)}}else return;let m=new(Um(d)?ec:Ql)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xb(n,e,t,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,a,p*l),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,v),t.update(g,r,v)}function d(p,g,v){if(v===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let f=0;for(let M=0;M<v;M++)f+=g[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Yb(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jb(n,e){return n[0]-e[0]}function Zb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Jb(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,v=r.get(h);if(v===void 0||v.count!==g){let k=function(){te.dispose(),r.delete(h),h.removeEventListener("dispose",k)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],z=0;M===!0&&(z=1),b===!0&&(z=2),I===!0&&(z=3);let S=h.attributes.position.count*z,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let B=new Float32Array(S*w*4*g),te=new Jl(B,S,w,g);te.type=is,te.needsUpdate=!0;let le=z*4;for(let W=0;W<g;W++){let F=P[W],ie=C[W],Y=D[W],q=S*w*4*W;for(let J=0;J<F.count;J++){let ee=J*le;M===!0&&(o.fromBufferAttribute(F,J),B[q+ee+0]=o.x,B[q+ee+1]=o.y,B[q+ee+2]=o.z,B[q+ee+3]=0),b===!0&&(o.fromBufferAttribute(ie,J),B[q+ee+4]=o.x,B[q+ee+5]=o.y,B[q+ee+6]=o.z,B[q+ee+7]=0),I===!0&&(o.fromBufferAttribute(Y,J),B[q+ee+8]=o.x,B[q+ee+9]=o.y,B[q+ee+10]=o.z,B[q+ee+11]=Y.itemSize===4?o.w:1)}}v={count:g,texture:te,size:new tt(S,w)},r.set(h,v),h.addEventListener("dispose",k)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let p=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let b=0;b<p;b++)g[b]=[b,0];i[h.id]=g}for(let b=0;b<p;b++){let I=g[b];I[0]=b,I[1]=d[b]}g.sort(Zb);for(let b=0;b<8;b++)b<p&&g[b][1]?(a[b][0]=g[b][0],a[b][1]=g[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(jb);let v=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let b=0;b<8;b++){let I=a[b],P=I[0],C=I[1];P!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+b)!==v[P]&&h.setAttribute("morphTarget"+b,v[P]),m&&h.getAttribute("morphNormal"+b)!==m[P]&&h.setAttribute("morphNormal"+b,m[P]),s[b]=C,f+=C):(v&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),m&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),s[b]=0)}let M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Kb(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sc=class extends ei{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:pr,h!==pr&&h!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pr&&(i=Rs),i===void 0&&h===da&&(i=fr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fm=new ei,zm=new sc(1,1);zm.compareFunction=Dm;var Hm=new Jl,Vm=new Tu,Gm=new nc,Gp=[],Wp=[],$p=new Float32Array(16),qp=new Float32Array(9),Xp=new Float32Array(4);function wa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cc(n,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function t1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function n1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function i1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;Xp.set(i),n.uniformMatrix2fv(this.addr,!1,Xp),dn(t,i)}}function s1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;qp.set(i),n.uniformMatrix3fv(this.addr,!1,qp),dn(t,i)}}function r1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(un(t,i))return;$p.set(i),n.uniformMatrix4fv(this.addr,!1,$p),dn(t,i)}}function a1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function l1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function c1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function h1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function d1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function p1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?zm:Fm;t.setTexture2D(e||r,s)}function m1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vm,s)}function g1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gm,s)}function y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hm,s)}function v1(n){switch(n){case 5126:return Qb;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return a1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return h1;case 36294:return u1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return y1}}function _1(n,e){n.uniform1fv(this.addr,e)}function x1(n,e){let t=wa(e,this.size,2);n.uniform2fv(this.addr,t)}function b1(n,e){let t=wa(e,this.size,3);n.uniform3fv(this.addr,t)}function M1(n,e){let t=wa(e,this.size,4);n.uniform4fv(this.addr,t)}function w1(n,e){let t=wa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S1(n,e){let t=wa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E1(n,e){let t=wa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T1(n,e){n.uniform1iv(this.addr,e)}function A1(n,e){n.uniform2iv(this.addr,e)}function C1(n,e){n.uniform3iv(this.addr,e)}function R1(n,e){n.uniform4iv(this.addr,e)}function L1(n,e){n.uniform1uiv(this.addr,e)}function P1(n,e){n.uniform2uiv(this.addr,e)}function I1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function D1(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fm,r[o])}function U1(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vm,r[o])}function O1(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gm,r[o])}function k1(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);un(i,r)||(n.uniform1iv(this.addr,r),dn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hm,r[o])}function B1(n){switch(n){case 5126:return _1;case 35664:return x1;case 35665:return b1;case 35666:return M1;case 35674:return w1;case 35675:return S1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return L1;case 36294:return P1;case 36295:return I1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}var Ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}},Lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B1(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Yp(n,e){n.seq.push(e),n.map[e.id]=e}function F1(n,e,t){let i=n.name,s=i.length;for(hu.lastIndex=0;;){let r=hu.exec(i),o=hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yp(t,c===void 0?new Ru(a,n,e):new Lu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Pu(a),Yp(t,u)),t=u}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);F1(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function jp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var z1=37297,H1=0;function V1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function G1(n){let e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(n),i;switch(e===t?i="":e===ql&&t===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&t===ql&&(i="LinearSRGBToLinearDisplayP3"),n){case rs:case Tc:return[i,"LinearTransferOETF"];case Zt:case ed:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V1(n.getShaderSource(e),o)}else return s}function W1(n,e){let t=G1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $1(n,e){let t;switch(e){case jy:t="Linear";break;case Zy:t="Reinhard";break;case Jy:t="OptimizedCineon";break;case Ky:t="ACESFilmic";break;case ev:t="AgX";break;case Qy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function q1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(aa).join(`
`)}function X1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(aa).join(`
`)}function Y1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function j1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function aa(n){return n!==""}function Jp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(Z1,K1)}var J1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function K1(n,e){let t=pt[e];if(t===void 0){let i=J1.get(e);if(i!==void 0)t=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Iu(t)}var Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(n){return n.replace(Q1,eM)}function eM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function em(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function nM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ha:case ua:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xy:e="ENVMAP_BLENDING_MIX";break;case Yy:e="ENVMAP_BLENDING_ADD";break}return e}function rM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function aM(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=tM(t),c=nM(t),h=iM(t),u=sM(t),d=rM(t),p=t.isWebGL2?"":q1(t),g=X1(t),v=Y1(r),m=s.createProgram(),f,M,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(aa).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(aa).join(`
`),M.length>0&&(M+=`
`)):(f=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),M=[p,em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ps?$1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,W1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Iu(o),o=Jp(o,t),o=Kp(o,t),a=Iu(a),a=Jp(a,t),a=Kp(a,t),o=Qp(o),a=Qp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let I=b+f+o,P=b+M+a,C=jp(s,s.VERTEX_SHADER,I),D=jp(s,s.FRAGMENT_SHADER,P);s.attachShader(m,C),s.attachShader(m,D),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function z(te){if(n.debug.checkShaderErrors){let le=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(C).trim(),W=s.getShaderInfoLog(D).trim(),F=!0,ie=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,C,D);else{let Y=Zp(s,C,"vertex"),q=Zp(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+Y+`
`+q)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(k===""||W==="")&&(ie=!1);ie&&(te.diagnostics={runnable:F,programLog:le,vertexShader:{log:k,prefix:f},fragmentShader:{log:W,prefix:M}})}s.deleteShader(C),s.deleteShader(D),S=new ca(s,m),w=j1(s,m)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,z1)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=D,this}var oM=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Du(e),t.set(e,i)),i}},Du=class{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}};function lM(n,e,t,i,s,r,o){let a=new ho,l=new Nu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,w,B,te,le){let k=te.fog,W=le.geometry,F=S.isMeshStandardMaterial?te.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),Y=ie&&ie.mapping===Ec?ie.image.height:null,q=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let J=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=J!==void 0?J.length:0,ue=0;W.morphAttributes.position!==void 0&&(ue=1),W.morphAttributes.normal!==void 0&&(ue=2),W.morphAttributes.color!==void 0&&(ue=3);let G,X,se,re;if(q){let pn=Yn[q];G=pn.vertexShader,X=pn.fragmentShader}else G=S.vertexShader,X=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);let ce=n.getRenderTarget(),Ae=le.isInstancedMesh===!0,He=le.isBatchedMesh===!0,Fe=!!S.map,ot=!!S.matcap,V=!!ie,Wt=!!S.aoMap,qe=!!S.lightMap,it=!!S.bumpMap,Oe=!!S.normalMap,Ot=!!S.displacementMap,ut=!!S.emissiveMap,N=!!S.metalnessMap,A=!!S.roughnessMap,Z=S.anisotropy>0,ge=S.clearcoat>0,pe=S.iridescence>0,ye=S.sheen>0,ze=S.transmission>0,Te=Z&&!!S.anisotropyMap,Ne=ge&&!!S.clearcoatMap,je=ge&&!!S.clearcoatNormalMap,dt=ge&&!!S.clearcoatRoughnessMap,me=pe&&!!S.iridescenceMap,Et=pe&&!!S.iridescenceThicknessMap,mt=ye&&!!S.sheenColorMap,et=ye&&!!S.sheenRoughnessMap,We=!!S.specularMap,De=!!S.specularColorMap,lt=!!S.specularIntensityMap,Mt=ze&&!!S.transmissionMap,zt=ze&&!!S.thicknessMap,ft=!!S.gradientMap,Me=!!S.alphaMap,O=S.alphaTest>0,Se=!!S.alphaHash,Ee=!!S.extensions,Ke=!!W.attributes.uv1,Xe=!!W.attributes.uv2,At=!!W.attributes.uv3,Lt=Ps;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Lt=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:G,fragmentShader:X,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:He,instancing:Ae,instancingColor:Ae&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:rs,map:Fe,matcap:ot,envMap:V,envMapMode:V&&ie.mapping,envMapCubeUVHeight:Y,aoMap:Wt,lightMap:qe,bumpMap:it,normalMap:Oe,displacementMap:d&&Ot,emissiveMap:ut,normalMapObjectSpace:Oe&&S.normalMapType===pv,normalMapTangentSpace:Oe&&S.normalMapType===Qu,metalnessMap:N,roughnessMap:A,anisotropy:Z,anisotropyMap:Te,clearcoat:ge,clearcoatMap:Ne,clearcoatNormalMap:je,clearcoatRoughnessMap:dt,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:Et,sheen:ye,sheenColorMap:mt,sheenRoughnessMap:et,specularMap:We,specularColorMap:De,specularIntensityMap:lt,transmission:ze,transmissionMap:Mt,thicknessMap:zt,gradientMap:ft,opaque:S.transparent===!1&&S.blending===oa,alphaMap:Me,alphaTest:O,alphaHash:Se,combine:S.combine,mapUv:Fe&&v(S.map.channel),aoMapUv:Wt&&v(S.aoMap.channel),lightMapUv:qe&&v(S.lightMap.channel),bumpMapUv:it&&v(S.bumpMap.channel),normalMapUv:Oe&&v(S.normalMap.channel),displacementMapUv:Ot&&v(S.displacementMap.channel),emissiveMapUv:ut&&v(S.emissiveMap.channel),metalnessMapUv:N&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:Te&&v(S.anisotropyMap.channel),clearcoatMapUv:Ne&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&v(S.sheenRoughnessMap.channel),specularMapUv:We&&v(S.specularMap.channel),specularColorMapUv:De&&v(S.specularColorMap.channel),specularIntensityMapUv:lt&&v(S.specularIntensityMap.channel),transmissionMapUv:Mt&&v(S.transmissionMap.channel),thicknessMapUv:zt&&v(S.thicknessMap.channel),alphaMapUv:Me&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Oe||Z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Xe,vertexUv3s:At,pointsUvs:le.isPoints===!0&&!!W.attributes.uv&&(Fe||Me),fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:le.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&S.map.isVideoTexture===!0&&Nt.getTransfer(S.map.colorSpace)===Vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jn,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ee&&S.extensions.derivatives===!0,extensionFragDepth:Ee&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(M(w,S),b(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function M(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function b(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function I(S){let w=g[S.type],B;if(w){let te=Yn[w];B=Ac.clone(te.uniforms)}else B=S.uniforms;return B}function P(S,w){let B;for(let te=0,le=c.length;te<le;te++){let k=c[te];if(k.cacheKey===w){B=k,++B.usedTimes;break}}return B===void 0&&(B=new aM(n,w,S,r),c.push(B)),B}function C(S){if(--S.usedTimes===0){let w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function D(S){l.remove(S)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:z}}function cM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function hM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nm(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){let f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||hM),i.length>1&&i.sort(d||tm),s.length>1&&s.sort(d||tm)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function uM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new nm,n.set(i,[o])):s>=r.length?(o=new nm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function dM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ht};break;case"SpotLight":t={position:new U,direction:new U,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function fM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var pM=0;function mM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gM(n,e){let t=new dM,i=fM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new at,a=new at;function l(h,u){let d=0,p=0,g=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let v=0,m=0,f=0,M=0,b=0,I=0,P=0,C=0,D=0,z=0,S=0;h.sort(mM);let w=u===!0?Math.PI:1;for(let te=0,le=h.length;te<le;te++){let k=h[te],W=k.color,F=k.intensity,ie=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=W.r*F*w,p+=W.g*F*w,g+=W.b*F*w;else if(k.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(k.sh.coefficients[q],F);S++}else if(k.isDirectionalLight){let q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){let J=k.shadow,ee=i.get(k);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.directionalShadow[v]=ee,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=k.shadow.matrix,I++}s.directional[v]=q,v++}else if(k.isSpotLight){let q=t.get(k);q.position.setFromMatrixPosition(k.matrixWorld),q.color.copy(W).multiplyScalar(F*w),q.distance=ie,q.coneCos=Math.cos(k.angle),q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),q.decay=k.decay,s.spot[f]=q;let J=k.shadow;if(k.map&&(s.spotLightMap[D]=k.map,D++,J.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[f]=J.matrix,k.castShadow){let ee=i.get(k);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.spotShadow[f]=ee,s.spotShadowMap[f]=Y,C++}f++}else if(k.isRectAreaLight){let q=t.get(k);q.color.copy(W).multiplyScalar(F),q.halfWidth.set(k.width*.5,0,0),q.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=q,M++}else if(k.isPointLight){let q=t.get(k);if(q.color.copy(k.color).multiplyScalar(k.intensity*w),q.distance=k.distance,q.decay=k.decay,k.castShadow){let J=k.shadow,ee=i.get(k);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,s.pointShadow[m]=ee,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=k.shadow.matrix,P++}s.point[m]=q,m++}else if(k.isHemisphereLight){let q=t.get(k);q.skyColor.copy(k.color).multiplyScalar(F*w),q.groundColor.copy(k.groundColor).multiplyScalar(F*w),s.hemi[b]=q,b++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==M||B.hemiLength!==b||B.numDirectionalShadows!==I||B.numPointShadows!==P||B.numSpotShadows!==C||B.numSpotMaps!==D||B.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=f,s.rectArea.length=M,s.point.length=m,s.hemi.length=b,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+D-z,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=f,B.rectAreaLength=M,B.hemiLength=b,B.numDirectionalShadows=I,B.numPointShadows=P,B.numSpotShadows=C,B.numSpotMaps=D,B.numLightProbes=S,s.version=pM++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let M=0,b=h.length;M<b;M++){let I=h[M];if(I.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(I.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(I.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(I.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(I.isPointLight){let P=s.point[p];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(f),p++}else if(I.isHemisphereLight){let P=s.hemi[m];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function im(n,e){let t=new gM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function yM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new im(n,e),t.set(r,[l])):o>=a.length?(l=new im(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Uu=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ou=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`;function xM(n,e,t){let i=new fo,s=new tt,r=new tt,o=new xt,a=new Uu({depthPacking:fv}),l=new Ou,c={},h=t.maxTextureSize,u={[Qn]:yn,[yn]:Qn,[jn]:jn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:vM,fragmentShader:_M}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ti;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let f=this.type;this.render=function(C,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),w=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),te=n.state;te.setBlending(Ls),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let le=f!==ts&&this.type===ts,k=f===ts&&this.type!==ts;for(let W=0,F=C.length;W<F;W++){let ie=C[W],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let q=Y.getFrameExtents();if(s.multiply(q),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||le===!0||k===!0){let ee=this.type!==ts?{minFilter:wn,magFilter:wn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new as(s.x,s.y,ee),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let J=Y.getViewportCount();for(let ee=0;ee<J;ee++){let ue=Y.getViewport(ee);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),te.viewport(o),Y.updateMatrices(ie,ee),i=Y.getFrustum(),I(D,z,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===ts&&M(Y,z),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,w,B)};function M(C,D){let z=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new as(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,z,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,z,p,v,null)}function b(C,D,z,S){let w=null,B=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)w=B;else if(w=z.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let te=w.uuid,le=D.uuid,k=c[te];k===void 0&&(k={},c[te]=k);let W=k[le];W===void 0&&(W=w.clone(),k[le]=W,D.addEventListener("dispose",P)),w=W}if(w.visible=D.visible,w.wireframe=D.wireframe,S===ts?w.side=D.shadowSide!==null?D.shadowSide:D.side:w.side=D.shadowSide!==null?D.shadowSide:u[D.side],w.alphaMap=D.alphaMap,w.alphaTest=D.alphaTest,w.map=D.map,w.clipShadows=D.clipShadows,w.clippingPlanes=D.clippingPlanes,w.clipIntersection=D.clipIntersection,w.displacementMap=D.displacementMap,w.displacementScale=D.displacementScale,w.displacementBias=D.displacementBias,w.wireframeLinewidth=D.wireframeLinewidth,w.linewidth=D.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let te=n.properties.get(w);te.light=z}return w}function I(C,D,z,S,w){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ts)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let le=e.update(C),k=C.material;if(Array.isArray(k)){let W=le.groups;for(let F=0,ie=W.length;F<ie;F++){let Y=W[F],q=k[Y.materialIndex];if(q&&q.visible){let J=b(C,q,S,w);C.onBeforeShadow(n,C,D,z,le,J,Y),n.renderBufferDirect(z,null,le,J,C,Y),C.onAfterShadow(n,C,D,z,le,J,Y)}}}else if(k.visible){let W=b(C,k,S,w);C.onBeforeShadow(n,C,D,z,le,W,null),n.renderBufferDirect(z,null,le,W,C,null),C.onAfterShadow(n,C,D,z,le,W,null)}}let te=C.children;for(let le=0,k=te.length;le<k;le++)I(te[le],D,z,S,w)}function P(C){C.target.removeEventListener("dispose",P);for(let z in c){let S=c[z],w=C.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function bM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,Se=new xt,Ee=null,Ke=new xt(0,0,0,0);return{setMask:function(Xe){Ee!==Xe&&!O&&(n.colorMask(Xe,Xe,Xe,Xe),Ee=Xe)},setLocked:function(Xe){O=Xe},setClear:function(Xe,At,Lt,Tt,pn){pn===!0&&(Xe*=Tt,At*=Tt,Lt*=Tt),Se.set(Xe,At,Lt,Tt),Ke.equals(Se)===!1&&(n.clearColor(Xe,At,Lt,Tt),Ke.copy(Se))},reset:function(){O=!1,Ee=null,Ke.set(-1,0,0,0)}}}function r(){let O=!1,Se=null,Ee=null,Ke=null;return{setTest:function(Xe){Xe?He(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(Xe){Se!==Xe&&!O&&(n.depthMask(Xe),Se=Xe)},setFunc:function(Xe){if(Ee!==Xe){switch(Xe){case zy:n.depthFunc(n.NEVER);break;case Hy:n.depthFunc(n.ALWAYS);break;case Vy:n.depthFunc(n.LESS);break;case Hl:n.depthFunc(n.LEQUAL);break;case Gy:n.depthFunc(n.EQUAL);break;case Wy:n.depthFunc(n.GEQUAL);break;case $y:n.depthFunc(n.GREATER);break;case qy:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Xe}},setLocked:function(Xe){O=Xe},setClear:function(Xe){Ke!==Xe&&(n.clearDepth(Xe),Ke=Xe)},reset:function(){O=!1,Se=null,Ee=null,Ke=null}}}function o(){let O=!1,Se=null,Ee=null,Ke=null,Xe=null,At=null,Lt=null,Tt=null,pn=null;return{setTest:function(Pt){O||(Pt?He(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function(Pt){Se!==Pt&&!O&&(n.stencilMask(Pt),Se=Pt)},setFunc:function(Pt,Mn,ci){(Ee!==Pt||Ke!==Mn||Xe!==ci)&&(n.stencilFunc(Pt,Mn,ci),Ee=Pt,Ke=Mn,Xe=ci)},setOp:function(Pt,Mn,ci){(At!==Pt||Lt!==Mn||Tt!==ci)&&(n.stencilOp(Pt,Mn,ci),At=Pt,Lt=Mn,Tt=ci)},setLocked:function(Pt){O=Pt},setClear:function(Pt){pn!==Pt&&(n.clearStencil(Pt),pn=Pt)},reset:function(){O=!1,Se=null,Ee=null,Ke=null,Xe=null,At=null,Lt=null,Tt=null,pn=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,b=null,I=null,P=null,C=null,D=null,z=null,S=new ht(0,0,0),w=0,B=!1,te=null,le=null,k=null,W=null,F=null,ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,q=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=q>=2);let ee=null,ue={},G=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),se=new xt().fromArray(G),re=new xt().fromArray(X);function ce(O,Se,Ee,Ke){let Xe=new Uint8Array(4),At=n.createTexture();n.bindTexture(O,At),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<Ee;Lt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,Ke,0,n.RGBA,n.UNSIGNED_BYTE,Xe):n.texImage2D(Se+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Xe);return At}let Ae={};Ae[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(Hl),ut(!1),N(Of),He(n.CULL_FACE),Oe(Ls);function He(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function Fe(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function ot(O,Se){return p[O]!==Se?(n.bindFramebuffer(O,Se),p[O]=Se,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Se),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function V(O,Se){let Ee=v,Ke=!1;if(O)if(Ee=g.get(Se),Ee===void 0&&(Ee=[],g.set(Se,Ee)),O.isWebGLMultipleRenderTargets){let Xe=O.texture;if(Ee.length!==Xe.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let At=0,Lt=Xe.length;At<Lt;At++)Ee[At]=n.COLOR_ATTACHMENT0+At;Ee.length=Xe.length,Ke=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,Ke=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ke=!0);Ke&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function Wt(O){return m!==O?(n.useProgram(O),m=O,!0):!1}let qe={[hr]:n.FUNC_ADD,[Ey]:n.FUNC_SUBTRACT,[Ty]:n.FUNC_REVERSE_SUBTRACT};if(i)qe[zf]=n.MIN,qe[Hf]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(qe[zf]=O.MIN_EXT,qe[Hf]=O.MAX_EXT)}let it={[Ay]:n.ZERO,[Cy]:n.ONE,[Ry]:n.SRC_COLOR,[yu]:n.SRC_ALPHA,[Uy]:n.SRC_ALPHA_SATURATE,[Ny]:n.DST_COLOR,[Py]:n.DST_ALPHA,[Ly]:n.ONE_MINUS_SRC_COLOR,[vu]:n.ONE_MINUS_SRC_ALPHA,[Dy]:n.ONE_MINUS_DST_COLOR,[Iy]:n.ONE_MINUS_DST_ALPHA,[Oy]:n.CONSTANT_COLOR,[ky]:n.ONE_MINUS_CONSTANT_COLOR,[By]:n.CONSTANT_ALPHA,[Fy]:n.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,Se,Ee,Ke,Xe,At,Lt,Tt,pn,Pt){if(O===Ls){f===!0&&(Fe(n.BLEND),f=!1);return}if(f===!1&&(He(n.BLEND),f=!0),O!==Sy){if(O!==M||Pt!==B){if((b!==hr||C!==hr)&&(n.blendEquation(n.FUNC_ADD),b=hr,C=hr),Pt)switch(O){case oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kf:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ff:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ff:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}I=null,P=null,D=null,z=null,S.set(0,0,0),w=0,M=O,B=Pt}return}Xe=Xe||Se,At=At||Ee,Lt=Lt||Ke,(Se!==b||Xe!==C)&&(n.blendEquationSeparate(qe[Se],qe[Xe]),b=Se,C=Xe),(Ee!==I||Ke!==P||At!==D||Lt!==z)&&(n.blendFuncSeparate(it[Ee],it[Ke],it[At],it[Lt]),I=Ee,P=Ke,D=At,z=Lt),(Tt.equals(S)===!1||pn!==w)&&(n.blendColor(Tt.r,Tt.g,Tt.b,pn),S.copy(Tt),w=pn),M=O,B=!1}function Ot(O,Se){O.side===jn?Fe(n.CULL_FACE):He(n.CULL_FACE);let Ee=O.side===yn;Se&&(Ee=!Ee),ut(Ee),O.blending===oa&&O.transparent===!1?Oe(Ls):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Ke=O.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){te!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),te=O)}function N(O){O!==by?(He(n.CULL_FACE),O!==le&&(O===Of?n.cullFace(n.BACK):O===My?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),le=O}function A(O){O!==k&&(Y&&n.lineWidth(O),k=O)}function Z(O,Se,Ee){O?(He(n.POLYGON_OFFSET_FILL),(W!==Se||F!==Ee)&&(n.polygonOffset(Se,Ee),W=Se,F=Ee)):Fe(n.POLYGON_OFFSET_FILL)}function ge(O){O?He(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function pe(O){O===void 0&&(O=n.TEXTURE0+ie-1),ee!==O&&(n.activeTexture(O),ee=O)}function ye(O,Se,Ee){Ee===void 0&&(ee===null?Ee=n.TEXTURE0+ie-1:Ee=ee);let Ke=ue[Ee];Ke===void 0&&(Ke={type:void 0,texture:void 0},ue[Ee]=Ke),(Ke.type!==O||Ke.texture!==Se)&&(ee!==Ee&&(n.activeTexture(Ee),ee=Ee),n.bindTexture(O,Se||Ae[O]),Ke.type=O,Ke.texture=Se)}function ze(){let O=ue[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function Mt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function zt(O,Se){let Ee=u.get(Se);Ee===void 0&&(Ee=new WeakMap,u.set(Se,Ee));let Ke=Ee.get(O);Ke===void 0&&(Ke=n.getUniformBlockIndex(Se,O.name),Ee.set(O,Ke))}function ft(O,Se){let Ke=u.get(Se).get(O);h.get(Se)!==Ke&&(n.uniformBlockBinding(Se,Ke,O.__bindingPointIndex),h.set(Se,Ke))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ee=null,ue={},p={},g=new WeakMap,v=[],m=null,f=!1,M=null,b=null,I=null,P=null,C=null,D=null,z=null,S=new ht(0,0,0),w=0,B=!1,te=null,le=null,k=null,W=null,F=null,se.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:Fe,bindFramebuffer:ot,drawBuffers:V,useProgram:Wt,setBlending:Oe,setMaterial:Ot,setFlipSided:ut,setCullFace:N,setLineWidth:A,setPolygonOffset:Z,setScissorTest:ge,activeTexture:pe,bindTexture:ye,unbindTexture:ze,compressedTexImage2D:Te,compressedTexImage3D:Ne,texImage2D:We,texImage3D:De,updateUBOMapping:zt,uniformBlockBinding:ft,texStorage2D:mt,texStorage3D:et,texSubImage2D:je,texSubImage3D:dt,compressedTexSubImage2D:me,compressedTexSubImage3D:Et,scissor:lt,viewport:Mt,reset:Me}}function MM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,A){return p?new OffscreenCanvas(N,A):co("canvas")}function v(N,A,Z,ge){let pe=1;if((N.width>ge||N.height>ge)&&(pe=ge/Math.max(N.width,N.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let ye=A?Yl:Math.floor,ze=ye(pe*N.width),Te=ye(pe*N.height);u===void 0&&(u=g(ze,Te));let Ne=Z?g(ze,Te):u;return Ne.width=ze,Ne.height=Te,Ne.getContext("2d").drawImage(N,0,0,ze,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ze+"x"+Te+")."),Ne}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function m(N){return Su(N.width)&&Su(N.height)}function f(N){return a?!1:N.wrapS!==Un||N.wrapT!==Un||N.minFilter!==wn&&N.minFilter!==Xn}function M(N,A){return N.generateMipmaps&&A&&N.minFilter!==wn&&N.minFilter!==Xn}function b(N){n.generateMipmap(N)}function I(N,A,Z,ge,pe=!1){if(a===!1)return A;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye=A;if(A===n.RED&&(Z===n.FLOAT&&(ye=n.R32F),Z===n.HALF_FLOAT&&(ye=n.R16F),Z===n.UNSIGNED_BYTE&&(ye=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ye=n.R8UI),Z===n.UNSIGNED_SHORT&&(ye=n.R16UI),Z===n.UNSIGNED_INT&&(ye=n.R32UI),Z===n.BYTE&&(ye=n.R8I),Z===n.SHORT&&(ye=n.R16I),Z===n.INT&&(ye=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(ye=n.RG32F),Z===n.HALF_FLOAT&&(ye=n.RG16F),Z===n.UNSIGNED_BYTE&&(ye=n.RG8)),A===n.RGBA){let ze=pe?Wl:Nt.getTransfer(ge);Z===n.FLOAT&&(ye=n.RGBA32F),Z===n.HALF_FLOAT&&(ye=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ye=ze===Vt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ye=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ye=n.RGB5_A1)}return(ye===n.R16F||ye===n.R32F||ye===n.RG16F||ye===n.RG32F||ye===n.RGBA16F||ye===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function P(N,A,Z){return M(N,Z)===!0||N.isFramebufferTexture&&N.minFilter!==wn&&N.minFilter!==Xn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function C(N){return N===wn||N===Gf||N===Oh?n.NEAREST:n.LINEAR}function D(N){let A=N.target;A.removeEventListener("dispose",D),S(A),A.isVideoTexture&&h.delete(A)}function z(N){let A=N.target;A.removeEventListener("dispose",z),B(A)}function S(N){let A=i.get(N);if(A.__webglInit===void 0)return;let Z=N.source,ge=d.get(Z);if(ge){let pe=ge[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(N),Object.keys(ge).length===0&&d.delete(Z)}i.remove(N)}function w(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let Z=N.source,ge=d.get(Z);delete ge[A.__cacheKey],o.memory.textures--}function B(N){let A=N.texture,Z=i.get(N),ge=i.get(A);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Z.__webglFramebuffer[pe]))for(let ye=0;ye<Z.__webglFramebuffer[pe].length;ye++)n.deleteFramebuffer(Z.__webglFramebuffer[pe][ye]);else n.deleteFramebuffer(Z.__webglFramebuffer[pe]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[pe])}else{if(Array.isArray(Z.__webglFramebuffer))for(let pe=0;pe<Z.__webglFramebuffer.length;pe++)n.deleteFramebuffer(Z.__webglFramebuffer[pe]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let pe=0;pe<Z.__webglColorRenderbuffer.length;pe++)Z.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[pe]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let pe=0,ye=A.length;pe<ye;pe++){let ze=i.get(A[pe]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(A[pe])}i.remove(A),i.remove(N)}let te=0;function le(){te=0}function k(){let N=te;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),te+=1,N}function W(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function F(N,A){let Z=i.get(N);if(N.isVideoTexture&&Ot(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){let ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,N,A);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function ie(N,A){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){se(Z,N,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function Y(N,A){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){se(Z,N,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function q(N,A){let Z=i.get(N);if(N.version>0&&Z.__version!==N.version){re(Z,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}let J={[Ns]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[bu]:n.MIRRORED_REPEAT},ee={[wn]:n.NEAREST,[Gf]:n.NEAREST_MIPMAP_NEAREST,[Oh]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[nv]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},ue={[mv]:n.NEVER,[bv]:n.ALWAYS,[gv]:n.LESS,[Dm]:n.LEQUAL,[yv]:n.EQUAL,[xv]:n.GEQUAL,[vv]:n.GREATER,[_v]:n.NOTEQUAL};function G(N,A,Z){if(Z?(n.texParameteri(N,n.TEXTURE_WRAP_S,J[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,J[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,J[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ee[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ee[A.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Un||A.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,C(A.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,C(A.minFilter)),A.minFilter!==wn&&A.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===wn||A.minFilter!==Oh&&A.minFilter!==Ds||A.type===is&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(N,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function X(N,A){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",D));let ge=A.source,pe=d.get(ge);pe===void 0&&(pe={},d.set(ge,pe));let ye=W(A);if(ye!==N.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[ye].usedTimes++;let ze=pe[N.__cacheKey];ze!==void 0&&(pe[N.__cacheKey].usedTimes--,ze.usedTimes===0&&w(A)),N.__cacheKey=ye,N.__webglTexture=pe[ye].texture}return Z}function se(N,A,Z){let ge=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=n.TEXTURE_3D);let pe=X(N,A),ye=A.source;t.bindTexture(ge,N.__webglTexture,n.TEXTURE0+Z);let ze=i.get(ye);if(ye.version!==ze.__version||pe===!0){t.activeTexture(n.TEXTURE0+Z);let Te=Nt.getPrimaries(Nt.workingColorSpace),Ne=A.colorSpace===fi?null:Nt.getPrimaries(A.colorSpace),je=A.colorSpace===fi||Te===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let dt=f(A)&&m(A.image)===!1,me=v(A.image,dt,!1,s.maxTextureSize);me=ut(A,me);let Et=m(me)||a,mt=r.convert(A.format,A.colorSpace),et=r.convert(A.type),We=I(A.internalFormat,mt,et,A.colorSpace,A.isVideoTexture);G(ge,A,Et);let De,lt=A.mipmaps,Mt=a&&A.isVideoTexture!==!0&&We!==Im,zt=ze.__version===void 0||pe===!0,ft=P(A,me,Et);if(A.isDepthTexture)We=n.DEPTH_COMPONENT,a?A.type===is?We=n.DEPTH_COMPONENT32F:A.type===Rs?We=n.DEPTH_COMPONENT24:A.type===fr?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:A.type===is&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===pr&&We===n.DEPTH_COMPONENT&&A.type!==Ku&&A.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Rs,et=r.convert(A.type)),A.format===da&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,A.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=fr,et=r.convert(A.type))),zt&&(Mt?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,mt,et,null));else if(A.isDataTexture)if(lt.length>0&&Et){Mt&&zt&&t.texStorage2D(n.TEXTURE_2D,ft,We,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],Mt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,mt,et,De.data):t.texImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,mt,et,De.data);A.generateMipmaps=!1}else Mt?(zt&&t.texStorage2D(n.TEXTURE_2D,ft,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,mt,et,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,mt,et,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Mt&&zt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,We,lt[0].width,lt[0].height,me.depth);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],A.format!==di?mt!==null?Mt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,mt,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,We,De.width,De.height,me.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,De.width,De.height,me.depth,mt,et,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,We,De.width,De.height,me.depth,0,mt,et,De.data)}else{Mt&&zt&&t.texStorage2D(n.TEXTURE_2D,ft,We,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],A.format!==di?mt!==null?Mt?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,mt,De.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,De.width,De.height,mt,et,De.data):t.texImage2D(n.TEXTURE_2D,Me,We,De.width,De.height,0,mt,et,De.data)}else if(A.isDataArrayTexture)Mt?(zt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ft,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,mt,et,me.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,mt,et,me.data);else if(A.isData3DTexture)Mt?(zt&&t.texStorage3D(n.TEXTURE_3D,ft,We,me.width,me.height,me.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,mt,et,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,mt,et,me.data);else if(A.isFramebufferTexture){if(zt)if(Mt)t.texStorage2D(n.TEXTURE_2D,ft,We,me.width,me.height);else{let Me=me.width,O=me.height;for(let Se=0;Se<ft;Se++)t.texImage2D(n.TEXTURE_2D,Se,We,Me,O,0,mt,et,null),Me>>=1,O>>=1}}else if(lt.length>0&&Et){Mt&&zt&&t.texStorage2D(n.TEXTURE_2D,ft,We,lt[0].width,lt[0].height);for(let Me=0,O=lt.length;Me<O;Me++)De=lt[Me],Mt?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,mt,et,De):t.texImage2D(n.TEXTURE_2D,Me,We,mt,et,De);A.generateMipmaps=!1}else Mt?(zt&&t.texStorage2D(n.TEXTURE_2D,ft,We,me.width,me.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,et,me)):t.texImage2D(n.TEXTURE_2D,0,We,mt,et,me);M(A,Et)&&b(ge),ze.__version=ye.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function re(N,A,Z){if(A.image.length!==6)return;let ge=X(N,A),pe=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);let ye=i.get(pe);if(pe.version!==ye.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);let ze=Nt.getPrimaries(Nt.workingColorSpace),Te=A.colorSpace===fi?null:Nt.getPrimaries(A.colorSpace),Ne=A.colorSpace===fi||ze===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let je=A.isCompressedTexture||A.image[0].isCompressedTexture,dt=A.image[0]&&A.image[0].isDataTexture,me=[];for(let Me=0;Me<6;Me++)!je&&!dt?me[Me]=v(A.image[Me],!1,!0,s.maxCubemapSize):me[Me]=dt?A.image[Me].image:A.image[Me],me[Me]=ut(A,me[Me]);let Et=me[0],mt=m(Et)||a,et=r.convert(A.format,A.colorSpace),We=r.convert(A.type),De=I(A.internalFormat,et,We,A.colorSpace),lt=a&&A.isVideoTexture!==!0,Mt=ye.__version===void 0||ge===!0,zt=P(A,Et,mt);G(n.TEXTURE_CUBE_MAP,A,mt);let ft;if(je){lt&&Mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,zt,De,Et.width,Et.height);for(let Me=0;Me<6;Me++){ft=me[Me].mipmaps;for(let O=0;O<ft.length;O++){let Se=ft[O];A.format!==di?et!==null?lt?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,et,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,0,0,Se.width,Se.height,et,We,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O,De,Se.width,Se.height,0,et,We,Se.data)}}}else{ft=A.mipmaps,lt&&Mt&&(ft.length>0&&zt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,zt,De,me[0].width,me[0].height));for(let Me=0;Me<6;Me++)if(dt){lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,me[Me].width,me[Me].height,et,We,me[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,me[Me].width,me[Me].height,0,et,We,me[Me].data);for(let O=0;O<ft.length;O++){let Ee=ft[O].image[Me].image;lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,Ee.width,Ee.height,et,We,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,Ee.width,Ee.height,0,et,We,Ee.data)}}else{lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,et,We,me[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,De,et,We,me[Me]);for(let O=0;O<ft.length;O++){let Se=ft[O];lt?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,0,0,et,We,Se.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,O+1,De,et,We,Se.image[Me])}}}M(A,mt)&&b(n.TEXTURE_CUBE_MAP),ye.__version=pe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ce(N,A,Z,ge,pe,ye){let ze=r.convert(Z.format,Z.colorSpace),Te=r.convert(Z.type),Ne=I(Z.internalFormat,ze,Te,Z.colorSpace);if(!i.get(A).__hasExternalTextures){let dt=Math.max(1,A.width>>ye),me=Math.max(1,A.height>>ye);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,Ne,dt,me,A.depth,0,ze,Te,null):t.texImage2D(pe,ye,Ne,dt,me,0,ze,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,0,it(A)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,i.get(Z).__webglTexture,ye),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(N,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let ge=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Oe(A)){let pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===is?ge=n.DEPTH_COMPONENT32F:pe.type===Rs&&(ge=n.DEPTH_COMPONENT24));let ye=it(A);Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let ge=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{let ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<ge.length;pe++){let ye=ge[pe],ze=r.convert(ye.format,ye.colorSpace),Te=r.convert(ye.type),Ne=I(ye.internalFormat,ze,Te,ye.colorSpace),je=it(A);Z&&Oe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Ne,A.width,A.height):Oe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Ne,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ge=i.get(A.depthTexture).__webglTexture,pe=it(A);if(A.depthTexture.format===pr)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(A.depthTexture.format===da)Oe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Fe(N){let A=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");He(A.__webglFramebuffer,N)}else if(Z){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=n.createRenderbuffer(),Ae(A.__webglDepthbuffer[ge],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Ae(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(N,A,Z){let ge=i.get(N);A!==void 0&&ce(ge.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Fe(N)}function V(N){let A=N.texture,Z=i.get(N),ge=i.get(A);N.addEventListener("dispose",z),N.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=A.version,o.memory.textures++);let pe=N.isWebGLCubeRenderTarget===!0,ye=N.isWebGLMultipleRenderTargets===!0,ze=m(N)||a;if(pe){Z.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(a&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Te]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)Z.__webglFramebuffer[Te][Ne]=n.createFramebuffer()}else Z.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)Z.__webglFramebuffer[Te]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ye)if(s.drawBuffers){let Te=N.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let dt=i.get(Te[Ne]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&Oe(N)===!1){let Te=ye?A:[A];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Te.length;Ne++){let je=Te[Ne];Z.__webglColorRenderbuffer[Ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne]);let dt=r.convert(je.format,je.colorSpace),me=r.convert(je.type),Et=I(je.internalFormat,dt,me,je.colorSpace,N.isXRRenderTarget===!0),mt=it(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Et,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ae(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),G(n.TEXTURE_CUBE_MAP,A,ze);for(let Te=0;Te<6;Te++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ce(Z.__webglFramebuffer[Te][Ne],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ne);else ce(Z.__webglFramebuffer[Te],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);M(A,ze)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Te=N.texture;for(let Ne=0,je=Te.length;Ne<je;Ne++){let dt=Te[Ne],me=i.get(dt);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),G(n.TEXTURE_2D,dt,ze),ce(Z.__webglFramebuffer,N,dt,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,0),M(dt,ze)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Te=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Te,ge.__webglTexture),G(Te,A,ze),a&&A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ce(Z.__webglFramebuffer[Ne],N,A,n.COLOR_ATTACHMENT0,Te,Ne);else ce(Z.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Te,0);M(A,ze)&&b(Te),t.unbindTexture()}N.depthBuffer&&Fe(N)}function Wt(N){let A=m(N)||a,Z=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ge=0,pe=Z.length;ge<pe;ge++){let ye=Z[ge];if(M(ye,A)){let ze=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(ye).__webglTexture;t.bindTexture(ze,Te),b(ze),t.unbindTexture()}}}function qe(N){if(a&&N.samples>0&&Oe(N)===!1){let A=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],Z=N.width,ge=N.height,pe=n.COLOR_BUFFER_BIT,ye=[],ze=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(N),Ne=N.isWebGLMultipleRenderTargets===!0;if(Ne)for(let je=0;je<A.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let je=0;je<A.length;je++){ye.push(n.COLOR_ATTACHMENT0+je),N.depthBuffer&&ye.push(ze);let dt=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(dt===!1&&(N.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),Ne&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]),dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ze]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ze])),Ne){let me=i.get(A[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,Z,ge,0,0,Z,ge,pe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<A.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Te.__webglColorRenderbuffer[je]);let dt=i.get(A[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,dt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function it(N){return Math.min(s.maxSamples,N.samples)}function Oe(N){let A=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ot(N){let A=o.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function ut(N,A){let Z=N.colorSpace,ge=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===wu||Z!==rs&&Z!==fi&&(Nt.getTransfer(Z)===Vt?a===!1?e.has("EXT_sRGB")===!0&&ge===di?(N.format=wu,N.minFilter=Xn,N.generateMipmaps=!1):A=jl.sRGBToLinear(A):(ge!==di||pe!==Is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=k,this.resetTextureUnits=le,this.setTexture2D=F,this.setTexture2DArray=ie,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=ot,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Oe}function wM(n,e,t){let i=t.isWebGL2;function s(r,o=fi){let a,l=Nt.getTransfer(o);if(r===Is)return n.UNSIGNED_BYTE;if(r===Am)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Cm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return n.BYTE;if(r===sv)return n.SHORT;if(r===Ku)return n.UNSIGNED_SHORT;if(r===Tm)return n.INT;if(r===Rs)return n.UNSIGNED_INT;if(r===is)return n.FLOAT;if(r===lo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rv)return n.ALPHA;if(r===di)return n.RGBA;if(r===av)return n.LUMINANCE;if(r===ov)return n.LUMINANCE_ALPHA;if(r===pr)return n.DEPTH_COMPONENT;if(r===da)return n.DEPTH_STENCIL;if(r===wu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===lv)return n.RED;if(r===Rm)return n.RED_INTEGER;if(r===cv)return n.RG;if(r===Lm)return n.RG_INTEGER;if(r===Pm)return n.RGBA_INTEGER;if(r===kh||r===Bh||r===Fh||r===zh)if(l===Vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===kh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===kh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wf||r===$f||r===qf||r===Xf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$f)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Im)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yf||r===jf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yf)return l===Vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===jf)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zf||r===Jf||r===Kf||r===Qf||r===ep||r===tp||r===np||r===ip||r===sp||r===rp||r===ap||r===op||r===lp||r===cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zf)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jf)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kf)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qf)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ep)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tp)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===np)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ip)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sp)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rp)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ap)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===op)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lp)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cp)return l===Vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hh||r===hp||r===up)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Hh)return l===Vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===up)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hv||r===dp||r===fp||r===pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Hh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===dp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ku=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Sn=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},SM={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bu=class extends Us{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,v=t.getContextAttributes(),m=null,f=null,M=[],b=[],I=new tt,P=null,C=new rn;C.layers.enable(1),C.viewport=new xt;let D=new rn;D.layers.enable(2),D.viewport=new xt;let z=[C,D],S=new ku;S.layers.enable(1),S.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=M[G];return X===void 0&&(X=new oo,M[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=M[G];return X===void 0&&(X=new oo,M[G]=X),X.getGripSpace()},this.getHand=function(G){let X=M[G];return X===void 0&&(X=new oo,M[G]=X),X.getHandSpace()};function te(G){let X=b.indexOf(G.inputSource);if(X===-1)return;let se=M[X];se!==void 0&&(se.update(G.inputSource,G.frame,c||o),se.dispatchEvent({type:G.type,data:G.inputSource}))}function le(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",k);for(let G=0;G<M.length;G++){let X=b[G];X!==null&&(b[G]=null,M[G].disconnect(X))}w=null,B=null,e.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",le),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new as(p.framebufferWidth,p.framebufferHeight,{format:di,type:Is,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let X=null,se=null,re=null;v.depth&&(re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=v.stencil?da:pr,se=v.stencil?fr:Rs);let ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new as(d.textureWidth,d.textureHeight,{format:di,type:Is,depthTexture:new sc(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(G){for(let X=0;X<G.removed.length;X++){let se=G.removed[X],re=b.indexOf(se);re>=0&&(b[re]=null,M[re].disconnect(se))}for(let X=0;X<G.added.length;X++){let se=G.added[X],re=b.indexOf(se);if(re===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=b.length){b.push(se),re=Ae;break}else if(b[Ae]===null){b[Ae]=se,re=Ae;break}if(re===-1)break}let ce=M[re];ce&&ce.connect(se)}}let W=new U,F=new U;function ie(G,X,se){W.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(se.matrixWorld);let re=W.distanceTo(F),ce=X.projectionMatrix.elements,Ae=se.projectionMatrix.elements,He=ce[14]/(ce[10]-1),Fe=ce[14]/(ce[10]+1),ot=(ce[9]+1)/ce[5],V=(ce[9]-1)/ce[5],Wt=(ce[8]-1)/ce[0],qe=(Ae[8]+1)/Ae[0],it=He*Wt,Oe=He*qe,Ot=re/(-Wt+qe),ut=Ot*-Wt;X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ut),G.translateZ(Ot),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let N=He+Ot,A=Fe+Ot,Z=it-ut,ge=Oe+(re-ut),pe=ot*Fe/A*N,ye=V*Fe/A*N;G.projectionMatrix.makePerspective(Z,ge,pe,ye,N,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;S.near=D.near=C.near=G.near,S.far=D.far=C.far=G.far,(w!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,B=S.far);let X=G.parent,se=S.cameras;Y(S,X);for(let re=0;re<se.length;re++)Y(se[re],X);se.length===2?ie(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),q(G,S,X)};function q(G,X,se){se===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(se.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=fa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let J=null;function ee(G,X){if(h=X.getViewerPose(c||o),g=X,h!==null){let se=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;se.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let ce=0;ce<se.length;ce++){let Ae=se[ce],He=null;if(p!==null)He=p.getViewport(Ae);else{let ot=u.getViewSubImage(d,Ae);He=ot.viewport,ce===0&&(e.setRenderTargetTextures(f,ot.colorTexture,d.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(f))}let Fe=z[ce];Fe===void 0&&(Fe=new rn,Fe.layers.enable(ce),Fe.viewport=new xt,z[ce]=Fe),Fe.matrix.fromArray(Ae.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ae.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),ce===0&&(S.matrix.copy(Fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(Fe)}}for(let se=0;se<M.length;se++){let re=b[se],ce=M[se];re!==null&&ce!==void 0&&ce.update(re,X,c||o)}J&&J(G,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}let ue=new Bm;ue.setAnimationLoop(ee),this.setAnimationLoop=function(G){J=G},this.dispose=function(){}}};function EM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,km(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,b,I){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,I)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===yn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===yn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=e.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,b){let I=b.program;i.uniformBlockBinding(M,I)}function c(M,b){let I=s[M.id];I===void 0&&(g(M),I=h(M),s[M.id]=I,M.addEventListener("dispose",m));let P=b.program;i.updateUBOMapping(M,P);let C=e.render.frame;r[M.id]!==C&&(d(M),r[M.id]=C)}function h(M){let b=u();M.__bindingPointIndex=b;let I=n.createBuffer(),P=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,I),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,I),I}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],I=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,D=I.length;C<D;C++){let z=Array.isArray(I[C])?I[C]:[I[C]];for(let S=0,w=z.length;S<w;S++){let B=z[S];if(p(B,C,S,P)===!0){let te=B.__offset,le=Array.isArray(B.value)?B.value:[B.value],k=0;for(let W=0;W<le.length;W++){let F=le[W],ie=v(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,te+k,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,b,I,P){let C=M.value,D=b+"_"+I;if(P[D]===void 0)return typeof C=="number"||typeof C=="boolean"?P[D]=C:P[D]=C.clone(),!0;{let z=P[D];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return P[D]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(M){let b=M.uniforms,I=0,P=16;for(let D=0,z=b.length;D<z;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let w=0,B=S.length;w<B;w++){let te=S[w],le=Array.isArray(te.value)?te.value:[te.value];for(let k=0,W=le.length;k<W;k++){let F=le[k],ie=v(F),Y=I%P;Y!==0&&P-Y<ie.boundary&&(I+=P-Y),te.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=ie.storage}}}let C=I%P;return C>0&&(I+=P-C),M.__size=I,M.__cache={},this}function v(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let I=o.indexOf(b.__bindingPointIndex);o.splice(I,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var po=class{constructor(e={}){let{canvas:t=Ov(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=Ps,this.toneMappingExposure=1;let b=this,I=!1,P=0,C=0,D=null,z=-1,S=null,w=new xt,B=new xt,te=null,le=new ht(0),k=0,W=t.width,F=t.height,ie=1,Y=null,q=null,J=new xt(0,0,W,F),ee=new xt(0,0,W,F),ue=!1,G=new fo,X=!1,se=!1,re=null,ce=new at,Ae=new tt,He=new U,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return D===null?ie:1}let V=i;function Wt(L,$){for(let K=0;K<L.length;K++){let ne=L[K],j=t.getContext(ne,$);if(j!==null)return j}return null}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ju}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Se,!1),V===null){let $=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&$.shift(),V=Wt($,L),V===null)throw Wt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let qe,it,Oe,Ot,ut,N,A,Z,ge,pe,ye,ze,Te,Ne,je,dt,me,Et,mt,et,We,De,lt,Mt;function zt(){qe=new $b(V),it=new Fb(V,qe,e),qe.init(it),De=new wM(V,qe,it),Oe=new bM(V,qe,it),Ot=new Yb(V),ut=new cM,N=new MM(V,qe,Oe,ut,it,De,Ot),A=new Hb(b),Z=new Wb(b),ge=new n_(V,it),lt=new kb(V,qe,ge,it),pe=new qb(V,ge,Ot,lt),ye=new Kb(V,pe,ge,Ot),mt=new Jb(V,it,N),dt=new zb(ut),ze=new lM(b,A,Z,qe,it,lt,dt),Te=new EM(b,ut),Ne=new uM,je=new yM(qe,it),Et=new Ob(b,A,Z,Oe,ye,d,l),me=new xM(b,ye,it),Mt=new TM(V,Ot,it,Oe),et=new Bb(V,qe,Ot,it),We=new Xb(V,qe,Ot,it),Ot.programs=ze.programs,b.capabilities=it,b.extensions=qe,b.properties=ut,b.renderLists=Ne,b.shadowMap=me,b.state=Oe,b.info=Ot}zt();let ft=new Bu(b,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let L=qe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=qe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(L){L!==void 0&&(ie=L,this.setSize(W,F,!1))},this.getSize=function(L){return L.set(W,F)},this.setSize=function(L,$,K=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=L,F=$,t.width=Math.floor(L*ie),t.height=Math.floor($*ie),K===!0&&(t.style.width=L+"px",t.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(W*ie,F*ie).floor()},this.setDrawingBufferSize=function(L,$,K){W=L,F=$,ie=K,t.width=Math.floor(L*K),t.height=Math.floor($*K),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(J)},this.setViewport=function(L,$,K,ne){L.isVector4?J.set(L.x,L.y,L.z,L.w):J.set(L,$,K,ne),Oe.viewport(w.copy(J).multiplyScalar(ie).floor())},this.getScissor=function(L){return L.copy(ee)},this.setScissor=function(L,$,K,ne){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,$,K,ne),Oe.scissor(B.copy(ee).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(L){Oe.setScissorTest(ue=L)},this.setOpaqueSort=function(L){Y=L},this.setTransparentSort=function(L){q=L},this.getClearColor=function(L){return L.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(L=!0,$=!0,K=!0){let ne=0;if(L){let j=!1;if(D!==null){let Re=D.texture.format;j=Re===Pm||Re===Lm||Re===Rm}if(j){let Re=D.texture.type,Le=Re===Is||Re===Rs||Re===Ku||Re===fr||Re===Am||Re===Cm,Ve=Et.getClearColor(),Ze=Et.getClearAlpha(),ct=Ve.r,st=Ve.g,rt=Ve.b;Le?(p[0]=ct,p[1]=st,p[2]=rt,p[3]=Ze,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=ct,g[1]=st,g[2]=rt,g[3]=Ze,V.clearBufferiv(V.COLOR,0,g))}else ne|=V.COLOR_BUFFER_BIT}$&&(ne|=V.DEPTH_BUFFER_BIT),K&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ne.dispose(),je.dispose(),ut.dispose(),A.dispose(),Z.dispose(),ye.dispose(),lt.dispose(),Mt.dispose(),ze.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",pn),ft.removeEventListener("sessionend",Pt),re&&(re.dispose(),re=null),Mn.stop()};function Me(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let L=Ot.autoReset,$=me.enabled,K=me.autoUpdate,ne=me.needsUpdate,j=me.type;zt(),Ot.autoReset=L,me.enabled=$,me.autoUpdate=K,me.needsUpdate=ne,me.type=j}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ee(L){let $=L.target;$.removeEventListener("dispose",Ee),Ke($)}function Ke(L){Xe(L),ut.remove(L)}function Xe(L){let $=ut.get(L).programs;$!==void 0&&($.forEach(function(K){ze.releaseProgram(K)}),L.isShaderMaterial&&ze.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,K,ne,j,Re){$===null&&($=Fe);let Le=j.isMesh&&j.matrixWorld.determinant()<0,Ve=Ih(L,$,K,ne,j);Oe.setMaterial(ne,Le);let Ze=K.index,ct=1;if(ne.wireframe===!0){if(Ze=pe.getWireframeAttribute(K),Ze===void 0)return;ct=2}let st=K.drawRange,rt=K.attributes.position,Xt=st.start*ct,Wn=(st.start+st.count)*ct;Re!==null&&(Xt=Math.max(Xt,Re.start*ct),Wn=Math.min(Wn,(Re.start+Re.count)*ct)),Ze!==null?(Xt=Math.max(Xt,0),Wn=Math.min(Wn,Ze.count)):rt!=null&&(Xt=Math.max(Xt,0),Wn=Math.min(Wn,rt.count));let nn=Wn-Xt;if(nn<0||nn===1/0)return;lt.setup(j,ne,Ve,K,Ze);let hi,kt=et;if(Ze!==null&&(hi=ge.get(Ze),kt=We,kt.setIndex(hi)),j.isMesh)ne.wireframe===!0?(Oe.setLineWidth(ne.wireframeLinewidth*ot()),kt.setMode(V.LINES)):kt.setMode(V.TRIANGLES);else if(j.isLine){let nt=ne.linewidth;nt===void 0&&(nt=1),Oe.setLineWidth(nt*ot()),j.isLineSegments?kt.setMode(V.LINES):j.isLineLoop?kt.setMode(V.LINE_LOOP):kt.setMode(V.LINE_STRIP)}else j.isPoints?kt.setMode(V.POINTS):j.isSprite&&kt.setMode(V.TRIANGLES);if(j.isBatchedMesh)kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)kt.renderInstances(Xt,nn,j.count);else if(K.isInstancedBufferGeometry){let nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,$a=Math.min(K.instanceCount,nt);kt.renderInstances(Xt,nn,$a)}else kt.render(Xt,nn)};function At(L,$,K){L.transparent===!0&&L.side===jn&&L.forceSinglePass===!1?(L.side=yn,L.needsUpdate=!0,kr(L,$,K),L.side=Qn,L.needsUpdate=!0,kr(L,$,K),L.side=jn):kr(L,$,K)}this.compile=function(L,$,K=null){K===null&&(K=L),m=je.get(K),m.init(),M.push(m),K.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),L!==K&&L.traverseVisible(function(j){j.isLight&&j.layers.test($.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(b._useLegacyLights);let ne=new Set;return L.traverse(function(j){let Re=j.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ve=Re[Le];At(Ve,K,j),ne.add(Ve)}else At(Re,K,j),ne.add(Re)}),M.pop(),m=null,ne},this.compileAsync=function(L,$,K=null){let ne=this.compile(L,$,K);return new Promise(j=>{function Re(){if(ne.forEach(function(Le){ut.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){j(L);return}setTimeout(Re,10)}qe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Lt=null;function Tt(L){Lt&&Lt(L)}function pn(){Mn.stop()}function Pt(){Mn.start()}let Mn=new Bm;Mn.setAnimationLoop(Tt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(L){Lt=L,ft.setAnimationLoop(L),L===null?Mn.stop():Mn.start()},ft.addEventListener("sessionstart",pn),ft.addEventListener("sessionend",Pt),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera($),$=ft.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,$,D),m=je.get(L,M.length),m.init(),M.push(m),ce.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G.setFromProjectionMatrix(ce),se=this.localClippingEnabled,X=dt.init(this.clippingPlanes,se),v=Ne.get(L,f.length),v.init(),f.push(v),ci(L,$,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Y,q),this.info.render.frame++,X===!0&&dt.beginShadows();let K=m.state.shadowsArray;if(me.render(K,L,$),X===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(v,L),m.setupLights(b._useLegacyLights),$.isArrayCamera){let ne=$.cameras;for(let j=0,Re=ne.length;j<Re;j++){let Le=ne[j];al(v,L,Le,Le.viewport)}}else al(v,L,$);D!==null&&(N.updateMultisampleRenderTarget(D),N.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(b,L,$),lt.resetDefaultState(),z=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ci(L,$,K,ne){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||G.intersectsSprite(L)){ne&&He.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ce);let Le=ye.update(L),Ve=L.material;Ve.visible&&v.push(L,Le,Ve,K,He.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||G.intersectsObject(L))){let Le=ye.update(L),Ve=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),He.copy(L.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),He.copy(Le.boundingSphere.center)),He.applyMatrix4(L.matrixWorld).applyMatrix4(ce)),Array.isArray(Ve)){let Ze=Le.groups;for(let ct=0,st=Ze.length;ct<st;ct++){let rt=Ze[ct],Xt=Ve[rt.materialIndex];Xt&&Xt.visible&&v.push(L,Le,Xt,K,He.z,rt)}}else Ve.visible&&v.push(L,Le,Ve,K,He.z,null)}}let Re=L.children;for(let Le=0,Ve=Re.length;Le<Ve;Le++)ci(Re[Le],$,K,ne)}function al(L,$,K,ne){let j=L.opaque,Re=L.transmissive,Le=L.transparent;m.setupLightsView(K),X===!0&&dt.setGlobalState(b.clippingPlanes,K),Re.length>0&&Ph(j,Re,$,K),ne&&Oe.viewport(w.copy(ne)),j.length>0&&Or(j,$,K),Re.length>0&&Or(Re,$,K),Le.length>0&&Or(Le,$,K),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ph(L,$,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Re=it.isWebGL2;re===null&&(re=new as(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")?lo:Is,minFilter:Ds,samples:Re?4:0})),b.getDrawingBufferSize(Ae),Re?re.setSize(Ae.x,Ae.y):re.setSize(Yl(Ae.x),Yl(Ae.y));let Le=b.getRenderTarget();b.setRenderTarget(re),b.getClearColor(le),k=b.getClearAlpha(),k<1&&b.setClearColor(16777215,.5),b.clear();let Ve=b.toneMapping;b.toneMapping=Ps,Or(L,K,ne),N.updateMultisampleRenderTarget(re),N.updateRenderTargetMipmap(re);let Ze=!1;for(let ct=0,st=$.length;ct<st;ct++){let rt=$[ct],Xt=rt.object,Wn=rt.geometry,nn=rt.material,hi=rt.group;if(nn.side===jn&&Xt.layers.test(ne.layers)){let kt=nn.side;nn.side=yn,nn.needsUpdate=!0,Ga(Xt,K,ne,Wn,nn,hi),nn.side=kt,nn.needsUpdate=!0,Ze=!0}}Ze===!0&&(N.updateMultisampleRenderTarget(re),N.updateRenderTargetMipmap(re)),b.setRenderTarget(Le),b.setClearColor(le,k),b.toneMapping=Ve}function Or(L,$,K){let ne=$.isScene===!0?$.overrideMaterial:null;for(let j=0,Re=L.length;j<Re;j++){let Le=L[j],Ve=Le.object,Ze=Le.geometry,ct=ne===null?Le.material:ne,st=Le.group;Ve.layers.test(K.layers)&&Ga(Ve,$,K,Ze,ct,st)}}function Ga(L,$,K,ne,j,Re){L.onBeforeRender(b,$,K,ne,j,Re),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),j.onBeforeRender(b,$,K,ne,L,Re),j.transparent===!0&&j.side===jn&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,b.renderBufferDirect(K,$,ne,j,L,Re),j.side=Qn,j.needsUpdate=!0,b.renderBufferDirect(K,$,ne,j,L,Re),j.side=jn):b.renderBufferDirect(K,$,ne,j,L,Re),L.onAfterRender(b,$,K,ne,j,Re)}function kr(L,$,K){$.isScene!==!0&&($=Fe);let ne=ut.get(L),j=m.state.lights,Re=m.state.shadowsArray,Le=j.state.version,Ve=ze.getParameters(L,j.state,Re,$,K),Ze=ze.getProgramCacheKey(Ve),ct=ne.programs;ne.environment=L.isMeshStandardMaterial?$.environment:null,ne.fog=$.fog,ne.envMap=(L.isMeshStandardMaterial?Z:A).get(L.envMap||ne.environment),ct===void 0&&(L.addEventListener("dispose",Ee),ct=new Map,ne.programs=ct);let st=ct.get(Ze);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Le)return ol(L,Ve),st}else Ve.uniforms=ze.getUniforms(L),L.onBuild(K,Ve,b),L.onBeforeCompile(Ve,b),st=ze.acquireProgram(Ve,Ze),ct.set(Ze,st),ne.uniforms=Ve.uniforms;let rt=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(rt.clippingPlanes=dt.uniform),ol(L,Ve),ne.needsLights=Dh(L),ne.lightsStateVersion=Le,ne.needsLights&&(rt.ambientLightColor.value=j.state.ambient,rt.lightProbe.value=j.state.probe,rt.directionalLights.value=j.state.directional,rt.directionalLightShadows.value=j.state.directionalShadow,rt.spotLights.value=j.state.spot,rt.spotLightShadows.value=j.state.spotShadow,rt.rectAreaLights.value=j.state.rectArea,rt.ltc_1.value=j.state.rectAreaLTC1,rt.ltc_2.value=j.state.rectAreaLTC2,rt.pointLights.value=j.state.point,rt.pointLightShadows.value=j.state.pointShadow,rt.hemisphereLights.value=j.state.hemi,rt.directionalShadowMap.value=j.state.directionalShadowMap,rt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,rt.spotShadowMap.value=j.state.spotShadowMap,rt.spotLightMatrix.value=j.state.spotLightMatrix,rt.spotLightMap.value=j.state.spotLightMap,rt.pointShadowMap.value=j.state.pointShadowMap,rt.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Wa(L){if(L.uniformsList===null){let $=L.currentProgram.getUniforms();L.uniformsList=ca.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function ol(L,$){let K=ut.get(L);K.outputColorSpace=$.outputColorSpace,K.batching=$.batching,K.instancing=$.instancing,K.instancingColor=$.instancingColor,K.skinning=$.skinning,K.morphTargets=$.morphTargets,K.morphNormals=$.morphNormals,K.morphColors=$.morphColors,K.morphTargetsCount=$.morphTargetsCount,K.numClippingPlanes=$.numClippingPlanes,K.numIntersection=$.numClipIntersection,K.vertexAlphas=$.vertexAlphas,K.vertexTangents=$.vertexTangents,K.toneMapping=$.toneMapping}function Ih(L,$,K,ne,j){$.isScene!==!0&&($=Fe),N.resetTextureUnits();let Re=$.fog,Le=ne.isMeshStandardMaterial?$.environment:null,Ve=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:rs,Ze=(ne.isMeshStandardMaterial?Z:A).get(ne.envMap||Le),ct=ne.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,st=!!K.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),rt=!!K.morphAttributes.position,Xt=!!K.morphAttributes.normal,Wn=!!K.morphAttributes.color,nn=Ps;ne.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(nn=b.toneMapping);let hi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,kt=hi!==void 0?hi.length:0,nt=ut.get(ne),$a=m.state.lights;if(X===!0&&(se===!0||L!==S)){let Pn=L===S&&ne.id===z;dt.setState(ne,L,Pn)}let Ht=!1;ne.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==$a.state.version||nt.outputColorSpace!==Ve||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||nt.envMap!==Ze||ne.fog===!0&&nt.fog!==Re||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==dt.numPlanes||nt.numIntersection!==dt.numIntersection)||nt.vertexAlphas!==ct||nt.vertexTangents!==st||nt.morphTargets!==rt||nt.morphNormals!==Xt||nt.morphColors!==Wn||nt.toneMapping!==nn||it.isWebGL2===!0&&nt.morphTargetsCount!==kt)&&(Ht=!0):(Ht=!0,nt.__version=ne.version);let Xi=nt.currentProgram;Ht===!0&&(Xi=kr(ne,$,j));let qa=!1,sr=!1,Xa=!1,mn=Xi.getUniforms(),Ci=nt.uniforms;if(Oe.useProgram(Xi.program)&&(qa=!0,sr=!0,Xa=!0),ne.id!==z&&(z=ne.id,sr=!0),qa||S!==L){mn.setValue(V,"projectionMatrix",L.projectionMatrix),mn.setValue(V,"viewMatrix",L.matrixWorldInverse);let Pn=mn.map.cameraPosition;Pn!==void 0&&Pn.setValue(V,He.setFromMatrixPosition(L.matrixWorld)),it.logarithmicDepthBuffer&&mn.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&mn.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,sr=!0,Xa=!0)}if(j.isSkinnedMesh){mn.setOptional(V,j,"bindMatrix"),mn.setOptional(V,j,"bindMatrixInverse");let Pn=j.skeleton;Pn&&(it.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),mn.setValue(V,"boneTexture",Pn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(mn.setOptional(V,j,"batchingTexture"),mn.setValue(V,"batchingTexture",j._matricesTexture,N));let Yt=K.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0&&it.isWebGL2===!0)&&mt.update(j,K,Xi),(sr||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,mn.setValue(V,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ci.envMap.value=Ze,Ci.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),sr&&(mn.setValue(V,"toneMappingExposure",b.toneMappingExposure),nt.needsLights&&Nh(Ci,Xa),Re&&ne.fog===!0&&Te.refreshFogUniforms(Ci,Re),Te.refreshMaterialUniforms(Ci,ne,ie,F,re),ca.upload(V,Wa(nt),Ci,N)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ca.upload(V,Wa(nt),Ci,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&mn.setValue(V,"center",j.center),mn.setValue(V,"modelViewMatrix",j.modelViewMatrix),mn.setValue(V,"normalMatrix",j.normalMatrix),mn.setValue(V,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Pn=ne.uniformsGroups;for(let Ya=0,ll=Pn.length;Ya<ll;Ya++)if(it.isWebGL2){let ja=Pn[Ya];Mt.update(ja,Xi),Mt.bind(ja,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function Nh(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Dh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,$,K){ut.get(L.texture).__webglTexture=$,ut.get(L.depthTexture).__webglTexture=K;let ne=ut.get(L);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=K===void 0,ne.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,$){let K=ut.get(L);K.__webglFramebuffer=$,K.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(L,$=0,K=0){D=L,P=$,C=K;let ne=!0,j=null,Re=!1,Le=!1;if(L){let Ze=ut.get(L);Ze.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1):Ze.__webglFramebuffer===void 0?N.setupRenderTarget(L):Ze.__hasExternalTextures&&N.rebindTextures(L,ut.get(L.texture).__webglTexture,ut.get(L.depthTexture).__webglTexture);let ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Le=!0);let st=ut.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(st[$])?j=st[$][K]:j=st[$],Re=!0):it.isWebGL2&&L.samples>0&&N.useMultisampledRTT(L)===!1?j=ut.get(L).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[K]:j=st,w.copy(L.viewport),B.copy(L.scissor),te=L.scissorTest}else w.copy(J).multiplyScalar(ie).floor(),B.copy(ee).multiplyScalar(ie).floor(),te=ue;if(Oe.bindFramebuffer(V.FRAMEBUFFER,j)&&it.drawBuffers&&ne&&Oe.drawBuffers(L,j),Oe.viewport(w),Oe.scissor(B),Oe.setScissorTest(te),Re){let Ze=ut.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,K)}else if(Le){let Ze=ut.get(L.texture),ct=$||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ze.__webglTexture,K||0,ct)}z=-1},this.readRenderTargetPixels=function(L,$,K,ne,j,Re,Le){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ut.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){Oe.bindFramebuffer(V.FRAMEBUFFER,Ve);try{let Ze=L.texture,ct=Ze.format,st=Ze.type;if(ct!==di&&De.convert(ct)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let rt=st===lo&&(qe.has("EXT_color_buffer_half_float")||it.isWebGL2&&qe.has("EXT_color_buffer_float"));if(st!==Is&&De.convert(st)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===is&&(it.isWebGL2||qe.has("OES_texture_float")||qe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ne&&K>=0&&K<=L.height-j&&V.readPixels($,K,ne,j,De.convert(ct),De.convert(st),Re)}finally{let Ze=D!==null?ut.get(D).__webglFramebuffer:null;Oe.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,$,K=0){let ne=Math.pow(2,-K),j=Math.floor($.image.width*ne),Re=Math.floor($.image.height*ne);N.setTexture2D($,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,L.x,L.y,j,Re),Oe.unbindTexture()},this.copyTextureToTexture=function(L,$,K,ne=0){let j=$.image.width,Re=$.image.height,Le=De.convert(K.format),Ve=De.convert(K.type);N.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),$.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ne,L.x,L.y,j,Re,Le,Ve,$.image.data):$.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ne,L.x,L.y,$.mipmaps[0].width,$.mipmaps[0].height,Le,$.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,ne,L.x,L.y,Le,Ve,$.image),ne===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(L,$,K,ne,j=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Re=L.max.x-L.min.x+1,Le=L.max.y-L.min.y+1,Ve=L.max.z-L.min.z+1,Ze=De.convert(ne.format),ct=De.convert(ne.type),st;if(ne.isData3DTexture)N.setTexture3D(ne,0),st=V.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)N.setTexture2DArray(ne,0),st=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ne.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ne.unpackAlignment);let rt=V.getParameter(V.UNPACK_ROW_LENGTH),Xt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wn=V.getParameter(V.UNPACK_SKIP_PIXELS),nn=V.getParameter(V.UNPACK_SKIP_ROWS),hi=V.getParameter(V.UNPACK_SKIP_IMAGES),kt=K.isCompressedTexture?K.mipmaps[j]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,L.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,L.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(st,j,$.x,$.y,$.z,Re,Le,Ve,Ze,ct,kt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(st,j,$.x,$.y,$.z,Re,Le,Ve,Ze,kt.data)):V.texSubImage3D(st,j,$.x,$.y,$.z,Re,Le,Ve,Ze,ct,kt),V.pixelStorei(V.UNPACK_ROW_LENGTH,rt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wn),V.pixelStorei(V.UNPACK_SKIP_ROWS,nn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,hi),j===0&&ne.generateMipmaps&&V.generateMipmap(st),Oe.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?N.setTextureCube(L,0):L.isData3DTexture?N.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?N.setTexture2DArray(L,0):N.setTexture2D(L,0),Oe.unbindTexture()},this.resetState=function(){P=0,C=0,D=null,Oe.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ed?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?mr:Nm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Zt:rs}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Fu=class extends po{};Fu.prototype.isWebGL1Renderer=!0;var Os=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},rc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$n=new U,mi=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ya=class extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ta,eo=new U,na=new U,ia=new U,sa=new tt,to=new tt,Wm=new at,Dl=new U,no=new U,Ul=new U,sm=new tt,uu=new tt,rm=new tt,mo=class extends Qt{constructor(e=new ya){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new ti;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rc(t,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new mi(i,3,0,!1)),ta.setAttribute("uv",new mi(i,2,3,!1))}this.geometry=ta,this.material=e,this.center=new tt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),Wm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ol(Dl.set(-.5,-.5,0),ia,o,na,s,r),Ol(no.set(.5,-.5,0),ia,o,na,s,r),Ol(Ul.set(.5,.5,0),ia,o,na,s,r),sm.set(0,0),uu.set(1,0),rm.set(1,1);let a=e.ray.intersectTriangle(Dl,no,Ul,!1,eo);if(a===null&&(Ol(no.set(-.5,.5,0),ia,o,na,s,r),uu.set(0,1),a=e.ray.intersectTriangle(Dl,Ul,no,!1,eo),a===null))return;let l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:dr.getInterpolation(eo,Dl,no,Ul,sm,uu,rm,new tt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ol(n,e,t,i,s,r){sa.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(to.x=r*sa.x-s*sa.y,to.y=s*sa.x+r*sa.y):to.copy(sa),n.copy(e),n.x+=to.x,n.y+=to.y,n.applyMatrix4(Wm)}var am=new U,om=new xt,lm=new xt,AM=new U,cm=new at,kl=new U,du=new pi,hm=new at,fu=new pa,ac=class extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vf,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,kl),this.boundingBox.expandByPoint(kl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,kl),this.boundingSphere.expandByPoint(kl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),du.copy(this.boundingSphere),du.applyMatrix4(s),e.ray.intersectsSphere(du)!==!1&&(hm.copy(s).invert(),fu.copy(e.ray).applyMatrix4(hm),!(this.boundingBox!==null&&fu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;om.fromBufferAttribute(s.attributes.skinIndex,e),lm.fromBufferAttribute(s.attributes.skinWeight,e),am.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=lm.getComponent(r);if(o!==0){let a=om.getComponent(r);cm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(AM.copy(am).applyMatrix4(cm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},go=class extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}},oc=class extends ei{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,h=wn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},um=new at,CM=new at,lc=class n{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new at;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:CM;um.multiplyMatrices(a,t[r]),um.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new oc(t,e,e,di,is);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new go),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}};var va=class extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dm=new U,fm=new U,pm=new at,pu=new pa,Bl=new pi,yo=class extends Qt{constructor(e=new ti,t=new va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)dm.fromBufferAttribute(t,s-1),fm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=dm.distanceTo(fm);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;pm.copy(s).invert(),pu.copy(e.ray).applyMatrix4(pm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,u=new U,d=new U,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let b=f,I=M-1;b<I;b+=p){let P=g.getX(b),C=g.getX(b+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,C),pu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let z=e.ray.origin.distanceTo(d);z<e.near||z>e.far||t.push({distance:z,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let b=f,I=M-1;b<I;b+=p){if(c.fromBufferAttribute(m,b),h.fromBufferAttribute(m,b+1),pu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},mm=new U,gm=new U,cc=class extends yo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)mm.fromBufferAttribute(t,s),gm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+mm.distanceTo(gm);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _a=class extends ei{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hc=class n extends ti{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let M=[],b=f/i,I=0;f===0&&o===0?I=.5/t:f===i&&l===Math.PI&&(I=-.5/t);for(let P=0;P<=t;P++){let C=P/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+I,1-b),M.push(c++)}h.push(M)}for(let f=0;f<i;f++)for(let M=0;M<t;M++){let b=h[f][M+1],I=h[f][M],P=h[f+1][M],C=h[f+1][M+1];(f!==0||o>0)&&p.push(b,I,C),(f!==i-1||l<Math.PI)&&p.push(I,P,C)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var uc=class extends ti{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new U,r=new U;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,p=u.count;for(let g=d,v=d+p;g<v;g+=3)for(let m=0;m<3;m++){let f=a.getX(g+m),M=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,M),ym(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),ym(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ym(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var vo=class extends Pi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var gr=class extends Pi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Fl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function RM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function LM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function vm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function $m(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var xa=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zu=class extends xa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mp,endingEnd:mp}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gp:r=e,a=2*t-i;break;case yp:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gp:o=e,l=2*i-t;break;case yp:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-p)*m+(1.5+p)*v+.5*g,I=p*m-p*v;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+M*o[c+P]+b*o[l+P]+I*o[u+P];return r}},Hu=class extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Vu=class extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vl:t=this.InterpolantFactoryMethodDiscrete;break;case Gl:t=this.InterpolantFactoryMethodLinear;break;case Vh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vl;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&RM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Gl;var ks=class extends gi{};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Vl;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var dc=class extends gi{};dc.prototype.ValueTypeName="color";var ba=class extends gi{};ba.prototype.ValueTypeName="number";var Gu=class extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Li.slerpFlat(r,0,o,c-a,o,c,l);return r}},ls=class extends gi{InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}};ls.prototype.ValueTypeName="quaternion";ls.prototype.DefaultInterpolation=Gl;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends gi{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Vl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends gi{};cs.prototype.ValueTypeName="vector";var _o=class{constructor(e,t=-1,i,s=uv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=wi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(IM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=LM(l);l=vm(l,1,h),c=vm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ba(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,p,g,v){if(p.length!==0){let m=[],f=[];$m(p,m,f,g),m.length!==0&&v.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(let v in p){let m=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){let b=d[g];m.push(b.time),f.push(b.morphTarget===v?1:0)}s.push(new ba(".morphTargetInfluence["+v+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";i(cs,p+".position",d,"pos",s),i(ls,p+".quaternion",d,"rot",s),i(cs,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function PM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ba;case"vector":case"vector2":case"vector3":case"vector4":return cs;case"color":return dc;case"quaternion":return ls;case"bool":case"boolean":return ks;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function IM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=PM(n.type);if(n.times===void 0){let t=[],i=[];$m(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var fc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},xo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},NM=new xo,Ii=class{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var es={},Wu=class extends Error{constructor(e,t){super(e),this.response=t}},bo=class extends Ii{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fc.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(es[e]!==void 0){es[e].push({onLoad:t,onProgress:i,onError:s});return}es[e]=[],es[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=es[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,v=0,m=new ReadableStream({start(f){M();function M(){u.read().then(({done:b,value:I})=>{if(b)f.close();else{v+=I.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let C=0,D=h.length;C<D;C++){let z=h[C];z.onProgress&&z.onProgress(P)}f.enqueue(I),M()}})}}});return new Response(m)}else throw new Wu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{fc.add(e,c);let h=es[e];delete es[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=es[e];if(h===void 0)throw this.manager.itemError(e),c;delete es[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $u=class extends Ii{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=fc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=co("img");function l(){h(),fc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var pc=class extends Ii{constructor(e){super(e)}load(e,t,i,s){let r=this,o=new oc,a=new bo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Un,o.wrapT=c.wrapT!==void 0?c.wrapT:Un,o.magFilter=c.magFilter!==void 0?c.magFilter:Xn,o.minFilter=c.minFilter!==void 0?c.minFilter:Xn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ds),c.mipmapCount===1&&(o.minFilter=Xn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}},mc=class extends Ii{constructor(e){super(e)}load(e,t,i,s){let r=new ei,o=new $u(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},yr=class extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},gc=class extends yr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mu=new at,_m=new U,xm=new U,Mo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),t.position.copy(_m),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qu=class extends Mo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=fa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},yc=class extends yr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bm=new at,io=new U,gu=new U,Xu=class extends Mo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),io.setFromMatrixPosition(e.matrixWorld),i.position.copy(io),gu.copy(i.position),gu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gu),i.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),bm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bm)}},vc=class extends yr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yu=class extends Mo{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_c=class extends yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var xc=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},bc=class extends ti{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var id="\\[\\]\\.:\\/",DM=new RegExp("["+id+"]","g"),sd="[^"+id+"]",UM="[^"+id.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",sd),kM=/(WCOD+)?/.source.replace("WCOD",UM),BM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),FM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),zM=new RegExp("^"+OM+kM+BM+FM+"$"),HM=["material","materials","bones","map"],ju=class{constructor(e,t,i){let s=i||$t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},$t=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DM,"")}static parseTrackName(e){let t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);HM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=ju;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iE=new Float32Array(1);var vr=class extends rc{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Mc=class{constructor(e,t,i=0,s=1/0){this.ray=new pa(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Zu(e,this,i,t),i.sort(Mm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zu(e[s],this,i,t);return i.sort(Mm),i}};function Mm(n,e){return n.distance-e.distance}function Zu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Zu(s[r],e,t,!0)}}var wm=new U,zl=new U,wc=class{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wm.subVectors(e,this.start),zl.subVectors(this.end,this.start);let i=zl.dot(zl),r=zl.dot(wm)/i;return t&&(r=Dn(r,0,1)),r}closestPointToPoint(e,t,i){let s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);var wo=class extends pc{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case d:case v:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case f:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function i(F,ie,Y,q,J){let ee,ue,G=Y.pixel_size>>3,X=Y.width*Y.height*G;if(ie&&(ue=J.subarray(q,q+=Y.colormap_length*(Y.colormap_size>>3))),F){ee=new Uint8Array(X);let se,re,ce,Ae=0,He=new Uint8Array(G);for(;Ae<X;)if(se=J[q++],re=(se&127)+1,se&128){for(ce=0;ce<G;++ce)He[ce]=J[q++];for(ce=0;ce<re;++ce)ee.set(He,Ae+ce*G);Ae+=G*re}else{for(re*=G,ce=0;ce<re;++ce)ee[Ae+ce]=J[q++];Ae+=re}}else ee=J.subarray(q,q+=ie?Y.width*Y.height:X);return{pixel_data:ee,palettes:ue}}function s(F,ie,Y,q,J,ee,ue,G,X){let se=X,re,ce=0,Ae,He,Fe=w.width;for(He=ie;He!==q;He+=Y)for(Ae=J;Ae!==ue;Ae+=ee,ce++)re=G[ce],F[(Ae+Fe*He)*4+3]=255,F[(Ae+Fe*He)*4+2]=se[re*3+0],F[(Ae+Fe*He)*4+1]=se[re*3+1],F[(Ae+Fe*He)*4+0]=se[re*3+2];return F}function r(F,ie,Y,q,J,ee,ue,G){let X,se=0,re,ce,Ae=w.width;for(ce=ie;ce!==q;ce+=Y)for(re=J;re!==ue;re+=ee,se+=2)X=G[se+0]+(G[se+1]<<8),F[(re+Ae*ce)*4+0]=(X&31744)>>7,F[(re+Ae*ce)*4+1]=(X&992)>>2,F[(re+Ae*ce)*4+2]=(X&31)<<3,F[(re+Ae*ce)*4+3]=X&32768?0:255;return F}function o(F,ie,Y,q,J,ee,ue,G){let X=0,se,re,ce=w.width;for(re=ie;re!==q;re+=Y)for(se=J;se!==ue;se+=ee,X+=3)F[(se+ce*re)*4+3]=255,F[(se+ce*re)*4+2]=G[X+0],F[(se+ce*re)*4+1]=G[X+1],F[(se+ce*re)*4+0]=G[X+2];return F}function a(F,ie,Y,q,J,ee,ue,G){let X=0,se,re,ce=w.width;for(re=ie;re!==q;re+=Y)for(se=J;se!==ue;se+=ee,X+=4)F[(se+ce*re)*4+2]=G[X+0],F[(se+ce*re)*4+1]=G[X+1],F[(se+ce*re)*4+0]=G[X+2],F[(se+ce*re)*4+3]=G[X+3];return F}function l(F,ie,Y,q,J,ee,ue,G){let X,se=0,re,ce,Ae=w.width;for(ce=ie;ce!==q;ce+=Y)for(re=J;re!==ue;re+=ee,se++)X=G[se],F[(re+Ae*ce)*4+0]=X,F[(re+Ae*ce)*4+1]=X,F[(re+Ae*ce)*4+2]=X,F[(re+Ae*ce)*4+3]=255;return F}function c(F,ie,Y,q,J,ee,ue,G){let X=0,se,re,ce=w.width;for(re=ie;re!==q;re+=Y)for(se=J;se!==ue;se+=ee,X+=2)F[(se+ce*re)*4+0]=G[X+0],F[(se+ce*re)*4+1]=G[X+0],F[(se+ce*re)*4+2]=G[X+0],F[(se+ce*re)*4+3]=G[X+1];return F}function h(F,ie,Y,q,J){let ee,ue,G,X,se,re;switch((w.flags&M)>>b){default:case C:ee=0,G=1,se=ie,ue=0,X=1,re=Y;break;case I:ee=0,G=1,se=ie,ue=Y-1,X=-1,re=-1;break;case D:ee=ie-1,G=-1,se=-1,ue=0,X=1,re=Y;break;case P:ee=ie-1,G=-1,se=-1,ue=Y-1,X=-1,re=-1;break}if(le)switch(w.pixel_size){case 8:l(F,ue,X,re,ee,G,se,q);break;case 16:c(F,ue,X,re,ee,G,se,q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:s(F,ue,X,re,ee,G,se,q,J);break;case 16:r(F,ue,X,re,ee,G,se,q);break;case 24:o(F,ue,X,re,ee,G,se,q);break;case 32:a(F,ue,X,re,ee,G,se,q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}let u=0,d=1,p=2,g=3,v=9,m=10,f=11,M=48,b=4,I=0,P=1,C=2,D=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let z=0,S=new Uint8Array(e),w={id_length:S[z++],colormap_type:S[z++],image_type:S[z++],colormap_index:S[z++]|S[z++]<<8,colormap_length:S[z++]|S[z++]<<8,colormap_size:S[z++],origin:[S[z++]|S[z++]<<8,S[z++]|S[z++]<<8],width:S[z++]|S[z++]<<8,height:S[z++]|S[z++]<<8,pixel_size:S[z++],flags:S[z++]};if(t(w),w.id_length+z>e.length)throw new Error("THREE.TGALoader: No data.");z+=w.id_length;let B=!1,te=!1,le=!1;switch(w.image_type){case v:B=!0,te=!0;break;case d:te=!0;break;case m:B=!0;break;case p:break;case f:B=!0,le=!0;break;case g:le=!0;break}let k=new Uint8Array(w.width*w.height*4),W=i(B,te,w,z,S);return h(k,w.width,w.height,W.pixel_data,W.palettes),{data:k,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Ds}}};var Rc=class extends Ii{load(e,t,i,s){let r=this,o=r.path===""?xc.extractUrlBase(e):r.path,a=new bo(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},i,s)}parse(e,t){function i(x,_){let T=[],E=x.childNodes;for(let R=0,Q=E.length;R<Q;R++){let ae=E[R];ae.nodeName===_&&T.push(ae)}return T}function s(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let E=0,R=_.length;E<R;E++)T[E]=_[E];return T}function r(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let E=0,R=_.length;E<R;E++)T[E]=parseFloat(_[E]);return T}function o(x){if(x.length===0)return[];let _=x.trim().split(/\s+/),T=new Array(_.length);for(let E=0,R=_.length;E<R;E++)T[E]=parseInt(_[E]);return T}function a(x){return x.substring(1)}function l(){return"three_default_"+_y++}function c(x){return Object.keys(x).length===0}function h(x){return{unit:u(i(x,"unit")[0]),upAxis:d(i(x,"up_axis")[0])}}function u(x){return x!==void 0&&x.hasAttribute("meter")===!0?parseFloat(x.getAttribute("meter")):1}function d(x){return x!==void 0?x.textContent:"Y_UP"}function p(x,_,T,E){let R=i(x,_)[0];if(R!==void 0){let Q=i(R,T);for(let ae=0;ae<Q.length;ae++)E(Q[ae])}}function g(x,_){for(let T in x){let E=x[T];E.build=_(x[T])}}function v(x,_){return x.build!==void 0||(x.build=_(x)),x.build}function m(x){let _={sources:{},samplers:{},channels:{}},T=!1;for(let E=0,R=x.childNodes.length;E<R;E++){let Q=x.childNodes[E];if(Q.nodeType!==1)continue;let ae;switch(Q.nodeName){case"source":ae=Q.getAttribute("id"),_.sources[ae]=O(Q);break;case"sampler":ae=Q.getAttribute("id"),_.samplers[ae]=f(Q);break;case"channel":ae=Q.getAttribute("target"),_.channels[ae]=M(Q);break;case"animation":m(Q),T=!0;break;default:console.log(Q)}}T===!1&&(Je.animations[x.getAttribute("id")||Fs.generateUUID()]=_)}function f(x){let _={inputs:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let Q=a(R.getAttribute("source")),ae=R.getAttribute("semantic");_.inputs[ae]=Q;break}}return _}function M(x){let _={},E=x.getAttribute("target").split("/"),R=E.shift(),Q=E.shift(),ae=Q.indexOf("(")!==-1,Ie=Q.indexOf(".")!==-1;if(Ie)E=Q.split("."),Q=E.shift(),_.member=E.shift();else if(ae){let we=Q.split("(");Q=we.shift();for(let Ce=0;Ce<we.length;Ce++)we[Ce]=parseInt(we[Ce].replace(/\)/,""));_.indices=we}return _.id=R,_.sid=Q,_.arraySyntax=ae,_.memberSyntax=Ie,_.sampler=a(x.getAttribute("source")),_}function b(x){let _=[],T=x.channels,E=x.samplers,R=x.sources;for(let Q in T)if(T.hasOwnProperty(Q)){let ae=T[Q],Ie=E[ae.sampler],we=Ie.inputs.INPUT,Ce=Ie.inputs.OUTPUT,Be=R[we],fe=R[Ce],ke=P(ae,Be,fe);w(ke,_)}return _}function I(x){return v(Je.animations[x],b)}function P(x,_,T){let E=Je.nodes[x.id],R=nt(E.id),Q=E.transforms[x.sid],ae=E.matrix.clone().transpose(),Ie,we,Ce,Be,fe,ke,Ue={};switch(Q){case"matrix":for(Ce=0,Be=_.array.length;Ce<Be;Ce++)if(Ie=_.array[Ce],we=Ce*T.stride,Ue[Ie]===void 0&&(Ue[Ie]={}),x.arraySyntax===!0){let jt=T.array[we],Ct=x.indices[0]+4*x.indices[1];Ue[Ie][Ct]=jt}else for(fe=0,ke=T.stride;fe<ke;fe++)Ue[Ie][fe]=T.array[we+fe];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',Q);break}let $e=C(Ue,ae);return{name:R.uuid,keyframes:$e}}function C(x,_){let T=[];for(let R in x)T.push({time:parseFloat(R),value:x[R]});T.sort(E);for(let R=0;R<16;R++)B(T,R,_.elements[R]);return T;function E(R,Q){return R.time-Q.time}}let D=new U,z=new U,S=new Li;function w(x,_){let T=x.keyframes,E=x.name,R=[],Q=[],ae=[],Ie=[];for(let we=0,Ce=T.length;we<Ce;we++){let Be=T[we],fe=Be.time,ke=Be.value;Le.fromArray(ke).transpose(),Le.decompose(D,S,z),R.push(fe),Q.push(D.x,D.y,D.z),ae.push(S.x,S.y,S.z,S.w),Ie.push(z.x,z.y,z.z)}return Q.length>0&&_.push(new cs(E+".position",R,Q)),ae.length>0&&_.push(new ls(E+".quaternion",R,ae)),Ie.length>0&&_.push(new cs(E+".scale",R,Ie)),_}function B(x,_,T){let E,R=!0,Q,ae;for(Q=0,ae=x.length;Q<ae;Q++)E=x[Q],E.value[_]===void 0?E.value[_]=null:R=!1;if(R===!0)for(Q=0,ae=x.length;Q<ae;Q++)E=x[Q],E.value[_]=T;else te(x,_)}function te(x,_){let T,E;for(let R=0,Q=x.length;R<Q;R++){let ae=x[R];if(ae.value[_]===null){if(T=le(x,R,_),E=k(x,R,_),T===null){ae.value[_]=E.value[_];continue}if(E===null){ae.value[_]=T.value[_];continue}W(ae,T,E,_)}}}function le(x,_,T){for(;_>=0;){let E=x[_];if(E.value[T]!==null)return E;_--}return null}function k(x,_,T){for(;_<x.length;){let E=x[_];if(E.value[T]!==null)return E;_++}return null}function W(x,_,T,E){if(T.time-_.time===0){x.value[E]=_.value[E];return}x.value[E]=(x.time-_.time)*(T.value[E]-_.value[E])/(T.time-_.time)+_.value[E]}function F(x){let _={name:x.getAttribute("id")||"default",start:parseFloat(x.getAttribute("start")||0),end:parseFloat(x.getAttribute("end")||0),animations:[]};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"instance_animation":_.animations.push(a(R.getAttribute("url")));break}}Je.clips[x.getAttribute("id")]=_}function ie(x){let _=[],T=x.name,E=x.end-x.start||-1,R=x.animations;for(let Q=0,ae=R.length;Q<ae;Q++){let Ie=I(R[Q]);for(let we=0,Ce=Ie.length;we<Ce;we++)_.push(Ie[we])}return new _o(T,E,_)}function Y(x){return v(Je.clips[x],ie)}function q(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"skin":_.id=a(R.getAttribute("source")),_.skin=J(R);break;case"morph":_.id=a(R.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[x.getAttribute("id")]=_}function J(x){let _={sources:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"bind_shape_matrix":_.bindShapeMatrix=r(R.textContent);break;case"source":let Q=R.getAttribute("id");_.sources[Q]=O(R);break;case"joints":_.joints=ee(R);break;case"vertex_weights":_.vertexWeights=ue(R);break}}return _}function ee(x){let _={inputs:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let Q=R.getAttribute("semantic"),ae=a(R.getAttribute("source"));_.inputs[Q]=ae;break}}return _}function ue(x){let _={inputs:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let Q=R.getAttribute("semantic"),ae=a(R.getAttribute("source")),Ie=parseInt(R.getAttribute("offset"));_.inputs[Q]={id:ae,offset:Ie};break;case"vcount":_.vcount=o(R.textContent);break;case"v":_.v=o(R.textContent);break}}return _}function G(x){let _={id:x.id},T=Je.geometries[_.id];return x.skin!==void 0&&(_.skin=X(x.skin),T.sources.skinIndices=_.skin.indices,T.sources.skinWeights=_.skin.weights),_}function X(x){let T={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=x.sources,R=x.vertexWeights,Q=R.vcount,ae=R.v,Ie=R.inputs.JOINT.offset,we=R.inputs.WEIGHT.offset,Ce=x.sources[x.joints.inputs.JOINT],Be=x.sources[x.joints.inputs.INV_BIND_MATRIX],fe=E[R.inputs.WEIGHT.id].array,ke=0,Ue,$e,Ge;for(Ue=0,Ge=Q.length;Ue<Ge;Ue++){let Ct=Q[Ue],vt=[];for($e=0;$e<Ct;$e++){let _t=ae[ke+Ie],Yi=ae[ke+we],Kn=fe[Yi];vt.push({index:_t,weight:Kn}),ke+=2}for(vt.sort(jt),$e=0;$e<4;$e++){let _t=vt[$e];_t!==void 0?(T.indices.array.push(_t.index),T.weights.array.push(_t.weight)):(T.indices.array.push(0),T.weights.array.push(0))}}for(x.bindShapeMatrix?T.bindMatrix=new at().fromArray(x.bindShapeMatrix).transpose():T.bindMatrix=new at().identity(),Ue=0,Ge=Ce.array.length;Ue<Ge;Ue++){let Ct=Ce.array[Ue],vt=new at().fromArray(Be.array,Ue*Be.stride).transpose();T.joints.push({name:Ct,boneInverse:vt})}return T;function jt(Ct,vt){return vt.weight-Ct.weight}}function se(x){return v(Je.controllers[x],G)}function re(x){let _={init_from:i(x,"init_from")[0].textContent};Je.images[x.getAttribute("id")]=_}function ce(x){return x.build!==void 0?x.build:x.init_from}function Ae(x){let _=Je.images[x];return _!==void 0?v(_,ce):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",x),null)}function He(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"profile_COMMON":_.profile=Fe(R);break}}Je.effects[x.getAttribute("id")]=_}function Fe(x){let _={surfaces:{},samplers:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"newparam":ot(R,_);break;case"technique":_.technique=qe(R);break;case"extra":_.extra=A(R);break}}return _}function ot(x,_){let T=x.getAttribute("sid");for(let E=0,R=x.childNodes.length;E<R;E++){let Q=x.childNodes[E];if(Q.nodeType===1)switch(Q.nodeName){case"surface":_.surfaces[T]=V(Q);break;case"sampler2D":_.samplers[T]=Wt(Q);break}}}function V(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"init_from":_.init_from=R.textContent;break}}return _}function Wt(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"source":_.source=R.textContent;break}}return _}function qe(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"constant":case"lambert":case"blinn":case"phong":_.type=R.nodeName,_.parameters=it(R);break;case"extra":_.extra=A(R);break}}return _}function it(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":_[R.nodeName]=Oe(R);break;case"transparent":_[R.nodeName]={opaque:R.hasAttribute("opaque")?R.getAttribute("opaque"):"A_ONE",data:Oe(R)};break}}return _}function Oe(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"color":_[R.nodeName]=r(R.textContent);break;case"float":_[R.nodeName]=parseFloat(R.textContent);break;case"texture":_[R.nodeName]={id:R.getAttribute("texture"),extra:Ot(R)};break}}return _}function Ot(x){let _={technique:{}};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"extra":ut(R,_);break}}return _}function ut(x,_){for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique":N(R,_);break}}}function N(x,_){for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":_.technique[R.nodeName]=parseFloat(R.textContent);break;case"wrapU":case"wrapV":R.textContent.toUpperCase()==="TRUE"?_.technique[R.nodeName]=1:R.textContent.toUpperCase()==="FALSE"?_.technique[R.nodeName]=0:_.technique[R.nodeName]=parseInt(R.textContent);break;case"bump":_[R.nodeName]=ge(R);break}}}function A(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique":_.technique=Z(R);break}}return _}function Z(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"double_sided":_[R.nodeName]=parseInt(R.textContent);break;case"bump":_[R.nodeName]=ge(R);break}}return _}function ge(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"texture":_[R.nodeName]={id:R.getAttribute("texture"),texcoord:R.getAttribute("texcoord"),extra:Ot(R)};break}}return _}function pe(x){return x}function ye(x){return v(Je.effects[x],pe)}function ze(x){let _={name:x.getAttribute("name")};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"instance_effect":_.url=a(R.getAttribute("url"));break}}Je.materials[x.getAttribute("id")]=_}function Te(x){let _,T=x.slice((x.lastIndexOf(".")-1>>>0)+2);switch(T=T.toLowerCase(),T){case"tga":_=Uh;break;default:_=ja}return _}function Ne(x){let _=ye(x.url),T=_.profile.technique,E;switch(T.type){case"phong":case"blinn":E=new vo;break;case"lambert":E=new gr;break;default:E=new an;break}E.name=x.name||"";function R(we,Ce=null){let Be=_.profile.samplers[we.id],fe=null;if(Be!==void 0){let ke=_.profile.surfaces[Be.source];fe=Ae(ke.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),fe=Ae(we.id);if(fe!==null){let ke=Te(fe);if(ke!==void 0){let Ue=ke.load(fe),$e=we.extra;if($e!==void 0&&$e.technique!==void 0&&c($e.technique)===!1){let Ge=$e.technique;Ue.wrapS=Ge.wrapU?Ns:Un,Ue.wrapT=Ge.wrapV?Ns:Un,Ue.offset.set(Ge.offsetU||0,Ge.offsetV||0),Ue.repeat.set(Ge.repeatU||1,Ge.repeatV||1)}else Ue.wrapS=Ns,Ue.wrapT=Ns;return Ce!==null&&(Ue.colorSpace=Ce),Ue}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",fe),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",we.id),null}let Q=T.parameters;for(let we in Q){let Ce=Q[we];switch(we){case"diffuse":Ce.color&&E.color.fromArray(Ce.color),Ce.texture&&(E.map=R(Ce.texture,Zt));break;case"specular":Ce.color&&E.specular&&E.specular.fromArray(Ce.color),Ce.texture&&(E.specularMap=R(Ce.texture));break;case"bump":Ce.texture&&(E.normalMap=R(Ce.texture));break;case"ambient":Ce.texture&&(E.lightMap=R(Ce.texture,Zt));break;case"shininess":Ce.float&&E.shininess&&(E.shininess=Ce.float);break;case"emission":Ce.color&&E.emissive&&E.emissive.fromArray(Ce.color),Ce.texture&&(E.emissiveMap=R(Ce.texture,Zt));break}}E.color.convertSRGBToLinear(),E.specular&&E.specular.convertSRGBToLinear(),E.emissive&&E.emissive.convertSRGBToLinear();let ae=Q.transparent,Ie=Q.transparency;if(Ie===void 0&&ae&&(Ie={float:1}),ae===void 0&&Ie&&(ae={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ae&&Ie)if(ae.data.texture)E.transparent=!0;else{let we=ae.data.color;switch(ae.opaque){case"A_ONE":E.opacity=we[3]*Ie.float;break;case"RGB_ZERO":E.opacity=1-we[0]*Ie.float;break;case"A_ZERO":E.opacity=1-we[3]*Ie.float;break;case"RGB_ONE":E.opacity=we[0]*Ie.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ae.opaque)}E.opacity<1&&(E.transparent=!0)}if(T.extra!==void 0&&T.extra.technique!==void 0){let we=T.extra.technique;for(let Ce in we){let Be=we[Ce];switch(Ce){case"double_sided":E.side=Be===1?jn:Qn;break;case"bump":E.normalMap=R(Be.texture),E.normalScale=new tt(1,1);break}}}return E}function je(x){return v(Je.materials[x],Ne)}function dt(x){let _={name:x.getAttribute("name")};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"optics":_.optics=me(R);break}}Je.cameras[x.getAttribute("id")]=_}function me(x){for(let _=0;_<x.childNodes.length;_++){let T=x.childNodes[_];switch(T.nodeName){case"technique_common":return Et(T)}}return{}}function Et(x){let _={};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];switch(E.nodeName){case"perspective":case"orthographic":_.technique=E.nodeName,_.parameters=mt(E);break}}return _}function mt(x){let _={};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":_[E.nodeName]=parseFloat(E.textContent);break}}return _}function et(x){let _;switch(x.optics.technique){case"perspective":_=new rn(x.optics.parameters.yfov,x.optics.parameters.aspect_ratio,x.optics.parameters.znear,x.optics.parameters.zfar);break;case"orthographic":let T=x.optics.parameters.ymag,E=x.optics.parameters.xmag,R=x.optics.parameters.aspect_ratio;E=E===void 0?T*R:E,T=T===void 0?E/R:T,E*=.5,T*=.5,_=new ga(-E,E,T,-T,x.optics.parameters.znear,x.optics.parameters.zfar);break;default:_=new rn;break}return _.name=x.name||"",_}function We(x){let _=Je.cameras[x];return _!==void 0?v(_,et):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",x),null)}function De(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"technique_common":_=lt(R);break}}Je.lights[x.getAttribute("id")]=_}function lt(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"directional":case"point":case"spot":case"ambient":_.technique=R.nodeName,_.parameters=Mt(R)}}return _}function Mt(x){let _={};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"color":let Q=r(R.textContent);_.color=new ht().fromArray(Q).convertSRGBToLinear();break;case"falloff_angle":_.falloffAngle=parseFloat(R.textContent);break;case"quadratic_attenuation":let ae=parseFloat(R.textContent);_.distance=ae?Math.sqrt(1/ae):0;break}}return _}function zt(x){let _;switch(x.technique){case"directional":_=new Ma;break;case"point":_=new vc;break;case"spot":_=new yc;break;case"ambient":_=new _c;break}return x.parameters.color&&_.color.copy(x.parameters.color),x.parameters.distance&&(_.distance=x.parameters.distance),_}function ft(x){let _=Je.lights[x];return _!==void 0?v(_,zt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",x),null)}function Me(x){let _={name:x.getAttribute("name"),sources:{},vertices:{},primitives:[]},T=i(x,"mesh")[0];if(T!==void 0){for(let E=0;E<T.childNodes.length;E++){let R=T.childNodes[E];if(R.nodeType!==1)continue;let Q=R.getAttribute("id");switch(R.nodeName){case"source":_.sources[Q]=O(R);break;case"vertices":_.vertices=Se(R);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",R.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":_.primitives.push(Ee(R));break;default:console.log(R)}}Je.geometries[x.getAttribute("id")]=_}}function O(x){let _={array:[],stride:3};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"float_array":_.array=r(E.textContent);break;case"Name_array":_.array=s(E.textContent);break;case"technique_common":let R=i(E,"accessor")[0];R!==void 0&&(_.stride=parseInt(R.getAttribute("stride")));break}}return _}function Se(x){let _={};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];E.nodeType===1&&(_[E.getAttribute("semantic")]=a(E.getAttribute("source")))}return _}function Ee(x){let _={type:x.nodeName,material:x.getAttribute("material"),count:parseInt(x.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let T=0,E=x.childNodes.length;T<E;T++){let R=x.childNodes[T];if(R.nodeType===1)switch(R.nodeName){case"input":let Q=a(R.getAttribute("source")),ae=R.getAttribute("semantic"),Ie=parseInt(R.getAttribute("offset")),we=parseInt(R.getAttribute("set")),Ce=we>0?ae+we:ae;_.inputs[Ce]={id:Q,offset:Ie},_.stride=Math.max(_.stride,Ie+1),ae==="TEXCOORD"&&(_.hasUV=!0);break;case"vcount":_.vcount=o(R.textContent);break;case"p":_.p=o(R.textContent);break}}return _}function Ke(x){let _={};for(let T=0;T<x.length;T++){let E=x[T];_[E.type]===void 0&&(_[E.type]=[]),_[E.type].push(E)}return _}function Xe(x){let _=0;for(let T=0,E=x.length;T<E;T++)x[T].hasUV===!0&&_++;_>0&&_<x.length&&(x.uvsNeedsFix=!0)}function At(x){let _={},T=x.sources,E=x.vertices,R=x.primitives;if(R.length===0)return{};let Q=Ke(R);for(let ae in Q){let Ie=Q[ae];Xe(Ie),_[ae]=Lt(Ie,T,E)}return _}function Lt(x,_,T){let E={},R={array:[],stride:0},Q={array:[],stride:0},ae={array:[],stride:0},Ie={array:[],stride:0},we={array:[],stride:0},Ce={array:[],stride:4},Be={array:[],stride:4},fe=new ti,ke=[],Ue=0;for(let $e=0;$e<x.length;$e++){let Ge=x[$e],jt=Ge.inputs,Ct=0;switch(Ge.type){case"lines":case"linestrips":Ct=Ge.count*2;break;case"triangles":Ct=Ge.count*3;break;case"polylist":for(let vt=0;vt<Ge.count;vt++){let _t=Ge.vcount[vt];switch(_t){case 3:Ct+=3;break;case 4:Ct+=6;break;default:Ct+=(_t-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Ge.type)}fe.addGroup(Ue,Ct,$e),Ue+=Ct,Ge.material&&ke.push(Ge.material);for(let vt in jt){let _t=jt[vt];switch(vt){case"VERTEX":for(let Yi in T){let Kn=T[Yi];switch(Yi){case"POSITION":let Br=R.array.length;if(Tt(Ge,_[Kn],_t.offset,R.array),R.stride=_[Kn].stride,_.skinWeights&&_.skinIndices&&(Tt(Ge,_.skinIndices,_t.offset,Ce.array),Tt(Ge,_.skinWeights,_t.offset,Be.array)),Ge.hasUV===!1&&x.uvsNeedsFix===!0){let xy=(R.array.length-Br)/R.stride;for(let Uf=0;Uf<xy;Uf++)ae.array.push(0,0)}break;case"NORMAL":Tt(Ge,_[Kn],_t.offset,Q.array),Q.stride=_[Kn].stride;break;case"COLOR":Tt(Ge,_[Kn],_t.offset,we.array),we.stride=_[Kn].stride;break;case"TEXCOORD":Tt(Ge,_[Kn],_t.offset,ae.array),ae.stride=_[Kn].stride;break;case"TEXCOORD1":Tt(Ge,_[Kn],_t.offset,Ie.array),ae.stride=_[Kn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Yi)}}break;case"NORMAL":Tt(Ge,_[_t.id],_t.offset,Q.array),Q.stride=_[_t.id].stride;break;case"COLOR":Tt(Ge,_[_t.id],_t.offset,we.array,!0),we.stride=_[_t.id].stride;break;case"TEXCOORD":Tt(Ge,_[_t.id],_t.offset,ae.array),ae.stride=_[_t.id].stride;break;case"TEXCOORD1":Tt(Ge,_[_t.id],_t.offset,Ie.array),Ie.stride=_[_t.id].stride;break}}}return R.array.length>0&&fe.setAttribute("position",new Bt(R.array,R.stride)),Q.array.length>0&&fe.setAttribute("normal",new Bt(Q.array,Q.stride)),we.array.length>0&&fe.setAttribute("color",new Bt(we.array,we.stride)),ae.array.length>0&&fe.setAttribute("uv",new Bt(ae.array,ae.stride)),Ie.array.length>0&&fe.setAttribute("uv1",new Bt(Ie.array,Ie.stride)),Ce.array.length>0&&fe.setAttribute("skinIndex",new Bt(Ce.array,Ce.stride)),Be.array.length>0&&fe.setAttribute("skinWeight",new Bt(Be.array,Be.stride)),E.data=fe,E.type=x[0].type,E.materialKeys=ke,E}function Tt(x,_,T,E,R=!1){let Q=x.p,ae=x.stride,Ie=x.vcount;function we(fe){let ke=Q[fe+T]*Be,Ue=ke+Be;for(;ke<Ue;ke++)E.push(Ce[ke]);if(R){let $e=E.length-Be-1;cl.setRGB(E[$e+0],E[$e+1],E[$e+2]).convertSRGBToLinear(),E[$e+0]=cl.r,E[$e+1]=cl.g,E[$e+2]=cl.b}}let Ce=_.array,Be=_.stride;if(x.vcount!==void 0){let fe=0;for(let ke=0,Ue=Ie.length;ke<Ue;ke++){let $e=Ie[ke];if($e===4){let Ge=fe+ae*0,jt=fe+ae*1,Ct=fe+ae*2,vt=fe+ae*3;we(Ge),we(jt),we(vt),we(jt),we(Ct),we(vt)}else if($e===3){let Ge=fe+ae*0,jt=fe+ae*1,Ct=fe+ae*2;we(Ge),we(jt),we(Ct)}else if($e>4)for(let Ge=1,jt=$e-2;Ge<=jt;Ge++){let Ct=fe+ae*0,vt=fe+ae*Ge,_t=fe+ae*(Ge+1);we(Ct),we(vt),we(_t)}fe+=ae*$e}}else for(let fe=0,ke=Q.length;fe<ke;fe+=ae)we(fe)}function pn(x){return v(Je.geometries[x],At)}function Pt(x){let _={name:x.getAttribute("name")||"",joints:{},links:[]};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique_common":al(E,_);break}}Je.kinematicsModels[x.getAttribute("id")]=_}function Mn(x){return x.build!==void 0?x.build:x}function ci(x){return v(Je.kinematicsModels[x],Mn)}function al(x,_){for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"joint":_.joints[E.getAttribute("sid")]=Ph(E);break;case"link":_.links.push(Ga(E));break}}}function Ph(x){let _;for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":_=Or(E);break}}return _}function Or(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",axis:new U,limits:{min:0,max:0},type:x.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=r(E.textContent);_.axis.fromArray(R);break;case"limits":let Q=E.getElementsByTagName("max")[0],ae=E.getElementsByTagName("min")[0];_.limits.max=parseFloat(Q.textContent),_.limits.min=parseFloat(ae.textContent);break}}return _.limits.min>=_.limits.max&&(_.static=!0),_.middlePosition=(_.limits.min+_.limits.max)/2,_}function Ga(x){let _={sid:x.getAttribute("sid"),name:x.getAttribute("name")||"",attachments:[],transforms:[]};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":_.attachments.push(kr(E));break;case"matrix":case"translate":case"rotate":_.transforms.push(Wa(E));break}}return _}function kr(x){let _={joint:x.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"link":_.links.push(Ga(E));break;case"matrix":case"translate":case"rotate":_.transforms.push(Wa(E));break}}return _}function Wa(x){let _={type:x.nodeName},T=r(x.textContent);switch(_.type){case"matrix":_.obj=new at,_.obj.fromArray(T).transpose();break;case"translate":_.obj=new U,_.obj.fromArray(T);break;case"rotate":_.obj=new U,_.obj.fromArray(T),_.angle=Fs.degToRad(T[3]);break}return _}function ol(x){let _={name:x.getAttribute("name")||"",rigidBodies:{}};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":_.rigidBodies[E.getAttribute("name")]={},Ih(E,_.rigidBodies[E.getAttribute("name")]);break}}Je.physicsModels[x.getAttribute("id")]=_}function Ih(x,_){for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Nh(E,_);break}}}function Nh(x,_){for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"inertia":_.inertia=r(E.textContent);break;case"mass":_.mass=r(E.textContent)[0];break}}}function Dh(x){let _={bindJointAxis:[]};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":_.bindJointAxis.push(L(E));break}}Je.kinematicsScenes[a(x.getAttribute("url"))]=_}function L(x){let _={target:x.getAttribute("target").split("/").pop()};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType===1)switch(E.nodeName){case"axis":let R=E.getElementsByTagName("param")[0];_.axis=R.textContent;let Q=_.axis.split("inst_").pop().split("axis")[0];_.jointIndex=Q.substring(0,Q.length-1);break}}return _}function $(x){return x.build!==void 0?x.build:x}function K(x){return v(Je.kinematicsScenes[x],$)}function ne(){let x=Object.keys(Je.kinematicsModels)[0],_=Object.keys(Je.kinematicsScenes)[0],T=Object.keys(Je.visualScenes)[0];if(x===void 0||_===void 0)return;let E=ci(x),R=K(_),Q=qa(T),ae=R.bindJointAxis,Ie={};for(let Be=0,fe=ae.length;Be<fe;Be++){let ke=ae[Be],Ue=Yt.querySelector('[sid="'+ke.target+'"]');if(Ue){let $e=Ue.parentElement;we(ke.jointIndex,$e)}}function we(Be,fe){let ke=fe.getAttribute("name"),Ue=E.joints[Be];Q.traverse(function($e){$e.name===ke&&(Ie[Be]={object:$e,transforms:j(fe),joint:Ue,position:Ue.zeroPosition})})}let Ce=new at;Df={joints:E&&E.joints,getJointValue:function(Be){let fe=Ie[Be];if(fe)return fe.position;console.warn("THREE.ColladaLoader: Joint "+Be+" doesn't exist.")},setJointValue:function(Be,fe){let ke=Ie[Be];if(ke){let Ue=ke.joint;if(fe>Ue.limits.max||fe<Ue.limits.min)console.warn("THREE.ColladaLoader: Joint "+Be+" value "+fe+" outside of limits (min: "+Ue.limits.min+", max: "+Ue.limits.max+").");else if(Ue.static)console.warn("THREE.ColladaLoader: Joint "+Be+" is static.");else{let $e=ke.object,Ge=Ue.axis,jt=ke.transforms;Le.identity();for(let Ct=0;Ct<jt.length;Ct++){let vt=jt[Ct];if(vt.sid&&vt.sid.indexOf(Be)!==-1)switch(Ue.type){case"revolute":Le.multiply(Ce.makeRotationAxis(Ge,Fs.degToRad(fe)));break;case"prismatic":Le.multiply(Ce.makeTranslation(Ge.x*fe,Ge.y*fe,Ge.z*fe));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ue.type);break}else switch(vt.type){case"matrix":Le.multiply(vt.obj);break;case"translate":Le.multiply(Ce.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":Le.scale(vt.obj);break;case"rotate":Le.multiply(Ce.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(Le),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),Ie[Be].position=fe}}else console.log("THREE.ColladaLoader: "+Be+" does not exist.")}}}function j(x){let _=[],T=Yt.querySelector('[id="'+x.id+'"]');for(let E=0;E<T.childNodes.length;E++){let R=T.childNodes[E];if(R.nodeType!==1)continue;let Q,ae;switch(R.nodeName){case"matrix":Q=r(R.textContent);let Ie=new at().fromArray(Q).transpose();_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:Ie});break;case"translate":case"scale":Q=r(R.textContent),ae=new U().fromArray(Q),_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae});break;case"rotate":Q=r(R.textContent),ae=new U().fromArray(Q);let we=Fs.degToRad(Q[3]);_.push({sid:R.getAttribute("sid"),type:R.nodeName,obj:ae,angle:we});break}}return _}function Re(x){let _=x.getElementsByTagName("node");for(let T=0;T<_.length;T++){let E=_[T];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}let Le=new at,Ve=new U;function Ze(x){let _={name:x.getAttribute("name")||"",type:x.getAttribute("type"),id:x.getAttribute("id"),sid:x.getAttribute("sid"),matrix:new at,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];if(E.nodeType!==1)continue;let R;switch(E.nodeName){case"node":_.nodes.push(E.getAttribute("id")),Ze(E);break;case"instance_camera":_.instanceCameras.push(a(E.getAttribute("url")));break;case"instance_controller":_.instanceControllers.push(ct(E));break;case"instance_light":_.instanceLights.push(a(E.getAttribute("url")));break;case"instance_geometry":_.instanceGeometries.push(ct(E));break;case"instance_node":_.instanceNodes.push(a(E.getAttribute("url")));break;case"matrix":R=r(E.textContent),_.matrix.multiply(Le.fromArray(R).transpose()),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":R=r(E.textContent),Ve.fromArray(R),_.matrix.multiply(Le.makeTranslation(Ve.x,Ve.y,Ve.z)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":R=r(E.textContent);let Q=Fs.degToRad(R[3]);_.matrix.multiply(Le.makeRotationAxis(Ve.fromArray(R),Q)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":R=r(E.textContent),_.matrix.scale(Ve.fromArray(R)),_.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return kt(_.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",_.id):Je.nodes[_.id]=_,_}function ct(x){let _={id:a(x.getAttribute("url")),materials:{},skeletons:[]};for(let T=0;T<x.childNodes.length;T++){let E=x.childNodes[T];switch(E.nodeName){case"bind_material":let R=E.getElementsByTagName("instance_material");for(let Q=0;Q<R.length;Q++){let ae=R[Q],Ie=ae.getAttribute("symbol"),we=ae.getAttribute("target");_.materials[Ie]=a(we)}break;case"skeleton":_.skeletons.push(a(E.textContent));break;default:break}}return _}function st(x,_){let T=[],E=[],R,Q,ae;for(R=0;R<x.length;R++){let Ce=x[R],Be;if(kt(Ce))Be=nt(Ce),rt(Be,_,T);else if(Xi(Ce)){let ke=Je.visualScenes[Ce].children;for(let Ue=0;Ue<ke.length;Ue++){let $e=ke[Ue];if($e.type==="JOINT"){let Ge=nt($e.id);rt(Ge,_,T)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ce)}for(R=0;R<_.length;R++)for(Q=0;Q<T.length;Q++)if(ae=T[Q],ae.bone.name===_[R].name){E[R]=ae,ae.processed=!0;break}for(R=0;R<T.length;R++)ae=T[R],ae.processed===!1&&(E.push(ae),ae.processed=!0);let Ie=[],we=[];for(R=0;R<E.length;R++)ae=E[R],Ie.push(ae.bone),we.push(ae.boneInverse);return new lc(Ie,we)}function rt(x,_,T){x.traverse(function(E){if(E.isBone===!0){let R;for(let Q=0;Q<_.length;Q++){let ae=_[Q];if(ae.name===E.name){R=ae.boneInverse;break}}R===void 0&&(R=new at),T.push({bone:E,boneInverse:R,processed:!1})}})}function Xt(x){let _=[],T=x.matrix,E=x.nodes,R=x.type,Q=x.instanceCameras,ae=x.instanceControllers,Ie=x.instanceLights,we=x.instanceGeometries,Ce=x.instanceNodes;for(let fe=0,ke=E.length;fe<ke;fe++)_.push(nt(E[fe]));for(let fe=0,ke=Q.length;fe<ke;fe++){let Ue=We(Q[fe]);Ue!==null&&_.push(Ue.clone())}for(let fe=0,ke=ae.length;fe<ke;fe++){let Ue=ae[fe],$e=se(Ue.id),Ge=pn($e.id),jt=hi(Ge,Ue.materials),Ct=Ue.skeletons,vt=$e.skin.joints,_t=st(Ct,vt);for(let Yi=0,Kn=jt.length;Yi<Kn;Yi++){let Br=jt[Yi];Br.isSkinnedMesh&&(Br.bind(_t,$e.skin.bindMatrix),Br.normalizeSkinWeights()),_.push(Br)}}for(let fe=0,ke=Ie.length;fe<ke;fe++){let Ue=ft(Ie[fe]);Ue!==null&&_.push(Ue.clone())}for(let fe=0,ke=we.length;fe<ke;fe++){let Ue=we[fe],$e=pn(Ue.id),Ge=hi($e,Ue.materials);for(let jt=0,Ct=Ge.length;jt<Ct;jt++)_.push(Ge[jt])}for(let fe=0,ke=Ce.length;fe<ke;fe++)_.push(nt(Ce[fe]).clone());let Be;if(E.length===0&&_.length===1)Be=_[0];else{Be=R==="JOINT"?new go:new Sn;for(let fe=0;fe<_.length;fe++)Be.add(_[fe])}return Be.name=R==="JOINT"?x.sid:x.name,Be.matrix.copy(T),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be}let Wn=new an({name:Ii.DEFAULT_MATERIAL_NAME,color:16711935});function nn(x,_){let T=[];for(let E=0,R=x.length;E<R;E++){let Q=_[x[E]];Q===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",x[E]),T.push(Wn)):T.push(je(Q))}return T}function hi(x,_){let T=[];for(let E in x){let R=x[E],Q=nn(R.materialKeys,_);if(Q.length===0&&(E==="lines"||E==="linestrips"?Q.push(new va):Q.push(new vo)),E==="lines"||E==="linestrips")for(let Ce=0,Be=Q.length;Ce<Be;Ce++){let fe=Q[Ce];if(fe.isMeshPhongMaterial===!0||fe.isMeshLambertMaterial===!0){let ke=new va;ke.color.copy(fe.color),ke.opacity=fe.opacity,ke.transparent=fe.transparent,Q[Ce]=ke}}let ae=R.data.attributes.skinIndex!==void 0,Ie=Q.length===1?Q[0]:Q,we;switch(E){case"lines":we=new cc(R.data,Ie);break;case"linestrips":we=new yo(R.data,Ie);break;case"triangles":case"polylist":ae?we=new ac(R.data,Ie):we=new Gt(R.data,Ie);break}T.push(we)}return T}function kt(x){return Je.nodes[x]!==void 0}function nt(x){return v(Je.nodes[x],Xt)}function $a(x){let _={name:x.getAttribute("name"),children:[]};Re(x);let T=i(x,"node");for(let E=0;E<T.length;E++)_.children.push(Ze(T[E]));Je.visualScenes[x.getAttribute("id")]=_}function Ht(x){let _=new Sn;_.name=x.name;let T=x.children;for(let E=0;E<T.length;E++){let R=T[E];_.add(nt(R.id))}return _}function Xi(x){return Je.visualScenes[x]!==void 0}function qa(x){return v(Je.visualScenes[x],Ht)}function sr(x){let _=i(x,"instance_visual_scene")[0];return qa(a(_.getAttribute("url")))}function Xa(){let x=Je.clips;if(c(x)===!0){if(c(Je.animations)===!1){let _=[];for(let T in Je.animations){let E=I(T);for(let R=0,Q=E.length;R<Q;R++)_.push(E[R])}hl.push(new _o("default",-1,_))}}else for(let _ in x)hl.push(Y(_))}function mn(x){let _="",T=[x];for(;T.length;){let E=T.shift();E.nodeType===Node.TEXT_NODE?_+=E.textContent:(_+=`
`,T.push.apply(T,E.childNodes))}return _.trim()}if(e.length===0)return{scene:new Os};let Ci=new DOMParser().parseFromString(e,"application/xml"),Yt=i(Ci,"COLLADA")[0],Pn=Ci.getElementsByTagName("parsererror")[0];if(Pn!==void 0){let x=i(Pn,"div")[0],_;return x?_=x.textContent:_=mn(Pn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,_),null}let Ya=Yt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ya);let ll=h(i(Yt,"asset")[0]),ja=new mc(this.manager);ja.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Uh;wo&&(Uh=new wo(this.manager),Uh.setPath(this.resourcePath||t));let cl=new ht,hl=[],Df={},_y=0,Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(Yt,"library_animations","animation",m),p(Yt,"library_animation_clips","animation_clip",F),p(Yt,"library_controllers","controller",q),p(Yt,"library_images","image",re),p(Yt,"library_effects","effect",He),p(Yt,"library_materials","material",ze),p(Yt,"library_cameras","camera",dt),p(Yt,"library_lights","light",De),p(Yt,"library_geometries","geometry",Me),p(Yt,"library_nodes","node",Ze),p(Yt,"library_visual_scenes","visual_scene",$a),p(Yt,"library_kinematics_models","kinematics_model",Pt),p(Yt,"library_physics_models","physics_model",ol),p(Yt,"scene","instance_kinematics_scene",Dh),g(Je.animations,b),g(Je.clips,ie),g(Je.controllers,G),g(Je.images,ce),g(Je.effects,pe),g(Je.materials,Ne),g(Je.cameras,et),g(Je.lights,zt),g(Je.geometries,At),g(Je.visualScenes,Ht),Xa(),ne();let ul=sr(i(Yt,"scene")[0]);return ul.animations=hl,ll.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ul.rotation.set(-Math.PI/2,0,0)),ul.scale.multiplyScalar(ll.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),hl},kinematics:Df,library:Je,scene:ul}}};var qm=new vn,Lc=new U,zs=class extends bc{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Bt(e,3)),this.setAttribute("uv",new Bt(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new vr(t,6,1);return this.setAttribute("instanceStart",new mi(i,3,0)),this.setAttribute("instanceEnd",new mi(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new vr(t,6,1);return this.setAttribute("instanceColorStart",new mi(i,3,0)),this.setAttribute("instanceColorEnd",new mi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new uc(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),qm.setFromBufferAttribute(t),this.boundingBox.union(qm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lc.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lc)),Lc.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Lc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yn.line={uniforms:Ac.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};var hs=class extends Si{constructor(e){super({type:"LineMaterial",uniforms:Ac.clone(Yn.line.uniforms),vertexShader:Yn.line.vertexShader,fragmentShader:Yn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var Xm=new U,Ym=new U,En=new xt,Tn=new xt,Ni=new xt,rd=new U,ad=new at,An=new wc,jm=new U,Pc=new vn,Ic=new pi,Di=new xt,Ui,_r;function Zm(n,e,t){return Di.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Di.multiplyScalar(1/Di.w),Di.x=_r/t.width,Di.y=_r/t.height,Di.applyMatrix4(n.projectionMatrixInverse),Di.multiplyScalar(1/Di.w),Math.abs(Math.max(Di.x,Di.y))}function GM(n,e){let t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){An.start.fromBufferAttribute(s,a),An.end.fromBufferAttribute(r,a),An.applyMatrix4(t);let c=new U,h=new U;Ui.distanceSqToSegment(An.start,An.end,h,c),h.distanceTo(c)<_r*.5&&e.push({point:h,pointOnLine:c,distance:Ui.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function WM(n,e,t){let i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;Ui.at(1,Ni),Ni.w=1,Ni.applyMatrix4(e.matrixWorldInverse),Ni.applyMatrix4(i),Ni.multiplyScalar(1/Ni.w),Ni.x*=r.x/2,Ni.y*=r.y/2,Ni.z=0,rd.copy(Ni),ad.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(En.fromBufferAttribute(l,d),Tn.fromBufferAttribute(c,d),En.w=1,Tn.w=1,En.applyMatrix4(ad),Tn.applyMatrix4(ad),En.z>u&&Tn.z>u)continue;if(En.z>u){let b=En.z-Tn.z,I=(En.z-u)/b;En.lerp(Tn,I)}else if(Tn.z>u){let b=Tn.z-En.z,I=(Tn.z-u)/b;Tn.lerp(En,I)}En.applyMatrix4(i),Tn.applyMatrix4(i),En.multiplyScalar(1/En.w),Tn.multiplyScalar(1/Tn.w),En.x*=r.x/2,En.y*=r.y/2,Tn.x*=r.x/2,Tn.y*=r.y/2,An.start.copy(En),An.start.z=0,An.end.copy(Tn),An.end.z=0;let v=An.closestPointToPointParameter(rd,!0);An.at(v,jm);let m=Fs.lerp(En.z,Tn.z,v),f=m>=-1&&m<=1,M=rd.distanceTo(jm)<_r*.5;if(f&&M){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.start.applyMatrix4(o),An.end.applyMatrix4(o);let b=new U,I=new U;Ui.distanceSqToSegment(An.start,An.end,I,b),t.push({point:I,pointOnLine:b,distance:Ui.origin.distanceTo(I),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}var Sa=class extends Gt{constructor(e=new zs,t=new hs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Xm.fromBufferAttribute(t,o),Ym.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Xm.distanceTo(Ym);let r=new vr(s,2,1);return e.setAttribute("instanceDistanceStart",new mi(r,1,0)),e.setAttribute("instanceDistanceEnd",new mi(r,1,1)),this}raycast(e,t){let i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ui=e.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;_r=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=_r*.5;else{let u=Math.max(s.near,Ic.distanceToPoint(Ui.origin));c=Zm(s,u,l.resolution)}if(Ic.radius+=c,Ui.intersectsSphere(Ic)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Pc.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=_r*.5;else{let u=Math.max(s.near,Pc.distanceToPoint(Ui.origin));h=Zm(s,u,l.resolution)}Pc.expandByScalar(h),Ui.intersectsBox(Pc)!==!1&&(i?GM(this,t):WM(this,s,t))}};var $M="Africa:Abidjan 5 -4,Accra 6 0,Addis_Ababa 9 39,Algiers 37 3,Asmara 15 39,Asmera 15 39,Bamako 13 -8,Bangui 4 19,Banjul 13 -17,Bissau 12 -16,Blantyre -16 35,Brazzaville -4 15,Bujumbura -3 29,Cairo 30 31,Casablanca 34 -8,Ceuta 36 -5,Conakry 10 -14,Dakar 15 -17,Dar_es_Salaam -7 39,Djibouti 12 43,Douala 4 10,El_Aaiun 27 -13,Freetown 8 -13,Gaborone -25 26,Harare -18 31,Johannesburg -26 28,Juba 5 32,Kampala 0 32,Khartoum 16 33,Kigali -2 30,Kinshasa -4 15,Lagos 6 3,Libreville 0 9,Lome 6 1,Luanda -9 13,Lubumbashi -12 27,Lusaka -15 28,Malabo 4 9,Maputo -26 33,Maseru -29 28,Mbabane -26 31,Mogadishu 2 45,Monrovia 6 -11,Nairobi -1 37,Ndjamena 12 15,Niamey 14 2,Nouakchott 18 -16,Ouagadougou 12 -2,Porto-Novo 6 3,Sao_Tome 0 7,Timbuktu 13 -8,Tripoli 33 13,Tunis 37 10,Windhoek -23 17;America:Adak 52 -177,Anchorage 61 -150,Anguilla 18 -63,Antigua 17 -62,Araguaina -7 -48,Argentina/Buenos_Aires -35 -58,Argentina/Catamarca -28 -66,Argentina/ComodRivadavia -28 -66,Argentina/Cordoba -31 -64,Argentina/Jujuy -24 -65,Argentina/La_Rioja -29 -67,Argentina/Mendoza -33 -69,Argentina/Rio_Gallegos -52 -69,Argentina/Salta -25 -65,Argentina/San_Juan -32 -69,Argentina/San_Luis -33 -66,Argentina/Tucuman -27 -65,Argentina/Ushuaia -55 -68,Aruba 12 -70,Asuncion -25 -58,Atikokan 49 -92,Atka 52 -177,Bahia -13 -39,Bahia_Banderas 21 -105,Barbados 13 -60,Belem -1 -48,Belize 18 -88,Blanc-Sablon 51 -57,Boa_Vista 3 -61,Bogota 5 -74,Boise 44 -116,Buenos_Aires -35 -58,Cambridge_Bay 69 -105,Campo_Grande -20 -55,Cancun 21 -87,Caracas 10 -67,Catamarca -28 -66,Cayenne 5 -52,Cayman 19 -81,Chicago 42 -88,Chihuahua 29 -106,Ciudad_Juarez 32 -106,Coral_Harbour 49 -92,Cordoba -31 -64,Costa_Rica 10 -84,Coyhaique -46 -72,Creston 49 -117,Cuiaba -16 -56,Curacao 12 -69,Danmarkshavn 77 -19,Dawson 64 -139,Dawson_Creek 56 -120,Denver 40 -105,Detroit 42 -83,Dominica 15 -61,Edmonton 54 -113,Eirunepe -7 -70,El_Salvador 14 -89,Ensenada 33 -117,Fort_Nelson 59 -123,Fort_Wayne 40 -86,Fortaleza -4 -38,Glace_Bay 46 -60,Godthab 64 -52,Goose_Bay 53 -60,Grand_Turk 21 -71,Grenada 12 -62,Guadeloupe 16 -62,Guatemala 15 -91,Guayaquil -2 -80,Guyana 7 -58,Halifax 45 -64,Havana 23 -82,Hermosillo 29 -111,Indiana/Indianapolis 40 -86,Indiana/Knox 41 -87,Indiana/Marengo 38 -86,Indiana/Petersburg 38 -87,Indiana/Tell_City 38 -87,Indiana/Vevay 39 -85,Indiana/Vincennes 39 -88,Indiana/Winamac 41 -87,Indianapolis 40 -86,Inuvik 68 -134,Iqaluit 64 -68,Jamaica 18 -77,Jujuy -24 -65,Juneau 58 -134,Kentucky/Louisville 38 -86,Kentucky/Monticello 37 -85,Knox_IN 41 -87,Kralendijk 12 -68,La_Paz -16 -68,Lima -12 -77,Los_Angeles 34 -118,Louisville 38 -86,Lower_Princes 18 -63,Maceio -10 -36,Managua 12 -86,Manaus -3 -60,Marigot 18 -63,Martinique 15 -61,Matamoros 26 -98,Mazatlan 23 -106,Mendoza -33 -69,Menominee 45 -88,Merida 21 -90,Metlakatla 55 -132,Mexico_City 19 -99,Miquelon 47 -56,Moncton 46 -65,Monterrey 26 -100,Montevideo -35 -56,Montreal 44 -79,Montserrat 17 -62,Nassau 25 -77,New_York 41 -74,Nipigon 44 -79,Nome 65 -165,Noronha -4 -32,North_Dakota/Beulah 47 -102,North_Dakota/Center 47 -101,North_Dakota/New_Salem 47 -101,Nuuk 64 -52,Ojinaga 30 -104,Panama 9 -80,Pangnirtung 64 -68,Paramaribo 6 -55,Phoenix 33 -112,Port-au-Prince 19 -72,Port_of_Spain 11 -62,Porto_Acre -10 -68,Porto_Velho -9 -64,Puerto_Rico 18 -66,Punta_Arenas -53 -71,Rainy_River 50 -97,Rankin_Inlet 63 -92,Recife -8 -35,Regina 50 -105,Resolute 75 -95,Rio_Branco -10 -68,Rosario -31 -64,Santa_Isabel 33 -117,Santarem -2 -55,Santiago -33 -71,Santo_Domingo 18 -70,Sao_Paulo -24 -47,Scoresbysund 70 -22,Shiprock 40 -105,Sitka 57 -135,St_Barthelemy 18 -63,St_Johns 48 -53,St_Kitts 17 -63,St_Lucia 14 -61,St_Thomas 18 -65,St_Vincent 13 -61,Swift_Current 50 -108,Tegucigalpa 14 -87,Thule 77 -69,Thunder_Bay 44 -79,Tijuana 33 -117,Toronto 44 -79,Tortola 18 -65,Vancouver 49 -123,Virgin 18 -65,Whitehorse 61 -135,Winnipeg 50 -97,Yakutat 60 -140,Yellowknife 54 -113;Antarctica:Casey -66 111,Davis -69 78,DumontDUrville -67 140,Macquarie -54 159,Mawson -68 63,McMurdo -78 167,Palmer -65 -64,Rothera -68 -68,South_Pole -78 167,Syowa -69 40,Troll -72 3,Vostok -78 107;Arctic:Longyearbyen 78 16;Asia:Aden 13 45,Almaty 43 77,Amman 32 36,Anadyr 65 177,Aqtau 45 50,Aqtobe 50 57,Ashgabat 38 58,Ashkhabad 38 58,Atyrau 47 52,Baghdad 33 44,Bahrain 26 51,Baku 40 50,Bangkok 14 101,Barnaul 53 84,Beirut 34 36,Bishkek 43 75,Brunei 5 115,Calcutta 23 88,Chita 52 113,Choibalsan 48 107,Chongqing 31 121,Chungking 31 121,Colombo 7 80,Dacca 24 90,Damascus 34 36,Dhaka 24 90,Dili -9 126,Dubai 25 55,Dushanbe 39 69,Famagusta 35 34,Gaza 32 34,Harbin 31 121,Hebron 32 35,Ho_Chi_Minh 11 107,Hong_Kong 22 114,Hovd 48 92,Irkutsk 52 104,Istanbul 41 29,Jakarta -6 107,Jayapura -3 141,Jerusalem 32 35,Kabul 35 69,Kamchatka 53 159,Karachi 25 67,Kashgar 44 88,Kathmandu 28 85,Katmandu 28 85,Khandyga 63 136,Kolkata 23 88,Krasnoyarsk 56 93,Kuala_Lumpur 3 102,Kuching 2 110,Kuwait 29 48,Macao 22 114,Macau 22 114,Magadan 60 151,Makassar -5 119,Manila 15 121,Muscat 24 59,Nicosia 35 33,Novokuznetsk 54 87,Novosibirsk 55 83,Omsk 55 73,Oral 51 51,Phnom_Penh 12 105,Pontianak 0 109,Pyongyang 39 126,Qatar 25 52,Qostanay 53 64,Qyzylorda 45 65,Rangoon 17 96,Riyadh 25 47,Saigon 11 107,Sakhalin 47 143,Samarkand 40 67,Seoul 38 127,Shanghai 31 121,Singapore 1 104,Srednekolymsk 67 154,Taipei 25 122,Tashkent 41 69,Tbilisi 42 45,Tehran 36 51,Tel_Aviv 32 35,Thimbu 27 90,Thimphu 27 90,Tokyo 36 140,Tomsk 56 85,Ujung_Pandang -5 119,Ulaanbaatar 48 107,Ulan_Bator 48 107,Urumqi 44 88,Ust-Nera 65 143,Vientiane 18 103,Vladivostok 43 132,Yakutsk 62 130,Yangon 17 96,Yekaterinburg 57 61,Yerevan 40 44;Atlantic:Azores 38 -26,Bermuda 32 -65,Canary 28 -15,Cape_Verde 15 -24,Faeroe 62 -7,Faroe 62 -7,Jan_Mayen 60 11,Madeira 33 -17,Reykjavik 64 -22,South_Georgia -54 -37,St_Helena -16 -6,Stanley -52 -58;Australia:ACT -34 151,Adelaide -35 139,Brisbane -27 153,Broken_Hill -32 141,Canberra -34 151,Currie -43 147,Darwin -12 131,Eucla -32 129,Hobart -43 147,LHI -32 159,Lindeman -20 149,Lord_Howe -32 159,Melbourne -38 145,NSW -34 151,North -12 131,Perth -32 116,Queensland -27 153,South -35 139,Sydney -34 151,Tasmania -43 147,Victoria -38 145,West -32 116,Yancowinna -32 141;Brazil:Acre -10 -68,DeNoronha -4 -32,East -24 -47,West -3 -60;Canada:Atlantic 45 -64,Central 50 -97,Eastern 44 -79,Mountain 54 -113,Newfoundland 48 -53,Pacific 49 -123,Saskatchewan 50 -105,Yukon 61 -135;Chile:Continental -33 -71,EasterIsland -27 -109;:Cuba 23 -82,Egypt 30 31,Eire 53 -6,GB 52 0,GB-Eire 52 0,Hongkong 22 114,Iceland 64 -22,Iran 36 51,Israel 32 35,Jamaica 18 -77,Japan 36 140,Kwajalein 9 167,Libya 33 13,NZ -37 175,NZ-CHAT -44 -177,Navajo 40 -105,PRC 31 121,Poland 52 21,Portugal 39 -9,ROC 25 122,ROK 38 127,Singapore 1 104,Turkey 41 29,W-SU 56 38;Europe:Amsterdam 52 5,Andorra 42 2,Astrakhan 46 48,Athens 38 24,Belfast 52 0,Belgrade 45 20,Berlin 52 13,Bratislava 48 17,Brussels 51 4,Bucharest 44 26,Budapest 48 19,Busingen 48 9,Chisinau 47 29,Copenhagen 56 13,Dublin 53 -6,Gibraltar 36 -5,Guernsey 49 -3,Helsinki 60 25,Isle_of_Man 54 -4,Istanbul 41 29,Jersey 49 -2,Kaliningrad 55 20,Kiev 50 31,Kirov 59 50,Kyiv 50 31,Lisbon 39 -9,Ljubljana 46 15,London 52 0,Luxembourg 50 6,Madrid 40 -4,Malta 36 15,Mariehamn 60 20,Minsk 54 28,Monaco 44 7,Moscow 56 38,Nicosia 35 33,Oslo 60 11,Paris 49 2,Podgorica 42 19,Prague 50 14,Riga 57 24,Rome 42 12,Samara 53 50,San_Marino 44 12,Sarajevo 44 18,Saratov 52 46,Simferopol 45 34,Skopje 42 21,Sofia 43 23,Stockholm 59 18,Tallinn 59 25,Tirane 41 20,Tiraspol 47 29,Ulyanovsk 54 48,Uzhgorod 50 31,Vaduz 47 10,Vatican 42 12,Vienna 48 16,Vilnius 55 25,Volgograd 49 44,Warsaw 52 21,Zagreb 46 16,Zaporozhye 50 31,Zurich 47 9;Indian:Antananarivo -19 48,Chagos -7 72,Christmas -10 106,Cocos -12 97,Comoro -12 43,Kerguelen -49 70,Mahe -5 55,Maldives 4 74,Mauritius -20 58,Mayotte -13 45,Reunion -21 55;Mexico:BajaNorte 33 -117,BajaSur 23 -106,General 19 -99;Pacific:Apia -14 -172,Auckland -37 175,Bougainville -6 156,Chatham -44 -177,Chuuk 7 152,Easter -27 -109,Efate -18 168,Enderbury -3 -172,Fakaofo -9 -171,Fiji -18 178,Funafuti -9 179,Galapagos -1 -90,Gambier -23 -135,Guadalcanal -10 160,Guam 13 145,Honolulu 21 -158,Johnston 21 -158,Kanton -3 -172,Kiritimati 2 -157,Kosrae 5 163,Kwajalein 9 167,Majuro 7 171,Marquesas -9 -140,Midway 28 -177,Nauru -1 167,Niue -19 -170,Norfolk -29 168,Noumea -22 166,Pago_Pago -14 -171,Palau 7 134,Pitcairn -25 -130,Pohnpei 7 158,Ponape 7 158,Port_Moresby -10 147,Rarotonga -21 -160,Saipan 15 146,Samoa -14 -171,Tahiti -18 -150,Tarawa 1 173,Tongatapu -21 -175,Truk 7 152,Wake 19 167,Wallis -13 -176,Yap 7 152;US:Alaska 61 -150,Aleutian 52 -177,Arizona 33 -112,Central 42 -88,East-Indiana 40 -86,Eastern 41 -74,Hawaii 21 -158,Indiana-Starke 41 -87,Michigan 42 -83,Mountain 40 -105,Pacific 34 -118,Samoa -14 -171",So=null;function qM(){if(So)return So;So=new Map;for(let n of $M.split(";")){let e=n.indexOf(":"),t=n.slice(0,e);for(let i of n.slice(e+1).split(",")){let[s,r,o]=i.split(" ");So.set(t?t+"/"+s:s,[+r,+o])}}return So}var xr=Math.PI/180;function XM(n,e,t){let i=n/864e5-10957.5,s=(357.529+.98560028*i)*xr,r=(280.459+.98564736*i+1.915*Math.sin(s)+.02*Math.sin(2*s))*xr,o=(23.439-36e-8*i)*xr,a=Math.atan2(Math.cos(o)*Math.sin(r),Math.cos(r)),l=Math.asin(Math.sin(o)*Math.sin(r)),h=(18.697374558+24.06570982441908*i)*15*xr+t*xr-a,u=e*xr;return Math.asin(Math.sin(u)*Math.sin(l)+Math.cos(u)*Math.cos(l)*Math.cos(h))/xr}function YM(){let n="";try{n=Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{}let e=qM().get(n);return e?{tz:n,lat:e[0],lon:e[1]}:{tz:n,lat:null,lon:null}}function Jm(n=Date.now(),e=YM()){if(e.lat==null){let r=new Date(n),o=r.getHours()+r.getMinutes()/60,a=o>=7&&o<20,l=new Date(n);return l.setHours(a?20:7,0,0,0),l<=r&&l.setDate(l.getDate()+1),{day:a,next:+l}}let t=r=>XM(r,e.lat,e.lon)>-.833,i=t(n),s=5*6e4;for(let r=n+s;r<n+48*36e5;r+=s)if(t(r)!==i){let o=r-s,a=r;for(;a-o>3e4;){let l=(o+a)/2;t(l)===i?o=l:a=l}return{day:i,next:Math.ceil(a)}}return{day:i,next:n+24*36e5}}var Km=(n,e)=>(n&&typeof n=="object"?n[e]||n.en||n.fr||Object.values(n).find(Boolean)||"":String(n||"")).trim();var jM={amp:"&",lt:"<",gt:">",quot:'"',"#39":"'",nbsp:" ",rsquo:"\u2019",lsquo:"\u2018",laquo:"\xAB",raquo:"\xBB"},Qm=n=>String(n||"").replace(/<\/(p|li|h3)>|<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&(#?\w+);/g,(e,t)=>jM[t]??e).split(`
`).map(e=>e.replace(/\s+/g," ").trim()).filter(Boolean);var ZM=["core","artists","specialists","team","people"];function od(n,e){let t=(n.sections||[]).find(s=>s.id===e.section&&s.visible!==!1);if(!t||e.published===!1)return!1;let i=(e.tags||[]).some(s=>ZM.includes(s));return t.card==="portrait"?i&&(Qm(Km(e.body,"en")).join(" ")+Qm(Km(e.body,"fr")).join(" ")).length>40:!0}var oi=["en","fr","ca","es"];var JM={en:["fr","es","ca"],fr:["en","es","ca"],ca:["es","en","fr"],es:["ca","en","fr"]};function sg(n,e){if(n==null)return"";if(typeof n=="string")return n;if(n[e])return n[e];for(let t of JM[e]||oi)if(n[t])return n[t];return""}var br={en:{category:"Category",together:"Projects together",all:"All",postedIn:"Filed under",visit:"Visit the site:",homeLink:"Home",partners:"Partners",skillProjects:"Projects that drew on it",skills:"Expertise",who:"Who worked on this project?",with:"With",leftToRight:"From left to right.",enter:"Enter",loading:"Loading",prev:"Previous posts",next:"Next posts",keys:"Keyboard shortcuts",animation:"Animation",section:"Section",move:"Move",zoom:"Zoom",openClose:"Open / Close",space:"SPACE BAR",loadError:"The 3D scene could not load: ",lang:"Language",photo:"Photo",toNeg:"Switch to negative",toPos:"Switch to positive",play:"Play",pause:"Pause",close:"Close",hv_words:"Type something",hv_turn:"Turn your phone to see the whole video",overview:"Overview",ov_n:"projects",nProjects:"projects",nextProject:"Next project",soundOn:"Sound on",soundOff:"Mute",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Colour",hv_invert:"Invert",hv_cam:"Camera",hv_camNote:"Your image stays on your screen. Take your photo.",hv_panel:"Settings",hv_slides:"Slideshow",hv_private:"Camera: nothing is recorded.",hv_consent:"This video is just for you. Nothing is recorded, nothing is sent.",hv_camYes:"Turn on the camera",cancel:"Cancel",stop:"Stop",params:"Settings",hv_source:"Source",hv_cell:"Grid",hv_size:"Size",hv_c_white:"white",hv_c_grey:"grey",hv_c_accent:"accent",hv_c_source:"video colours",hv_camDenied:"Camera unavailable.",hv_video:"Video",hv_src:"Video or camera",hv_shot:"Take a photo",hv_shotDone:"Photo saved.",story:"The story of this site",c_write:"Write",c_call:"Call",c_addr:"Address",c_follow:"Follow"},fr:{category:"Cat\xE9gorie",together:"Nos projets ensemble",all:"Tout",postedIn:"Class\xE9 dans",visit:"Voir le site :",homeLink:"Accueil",partners:"Partenaires",skillProjects:"Projets qui y ont eu recours",skills:"Savoir-faire",who:"Qui a travaill\xE9 sur ce projet ?",with:"Avec",leftToRight:"De gauche \xE0 droite.",enter:"Entrer",loading:"Chargement",prev:"Contenus pr\xE9c\xE9dents",next:"Contenus suivants",keys:"Raccourcis clavier",animation:"Animation",section:"Section",move:"Bouger",zoom:"Zoom",openClose:"Ouvrir / Fermer",space:"ESPACE",loadError:"La sc\xE8ne 3D n'a pas pu se charger : ",lang:"Langue",photo:"Photo",toNeg:"Passer en n\xE9gatif",toPos:"Passer en positif",play:"Lire",pause:"Pause",close:"Fermer",hv_words:"Type something",hv_turn:"Tourne ton t\xE9l\xE9phone pour voir la vid\xE9o en entier",overview:"Vue d\u2019ensemble",ov_n:"r\xE9alisations",nProjects:"projets",nextProject:"Projet suivant",soundOn:"Activer le son",soundOff:"Couper le son",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Couleur",hv_invert:"Inverser",hv_cam:"Cam\xE9ra",hv_camNote:"Ton image reste sur ton \xE9cran. Prends ta photo.",hv_panel:"Param\xE8tres",hv_slides:"Diaporama",hv_private:"Cam\xE9ra : rien n\u2019est enregistr\xE9.",hv_consent:"Cette vid\xE9o est juste pour toi. Rien n\u2019est enregistr\xE9, rien n\u2019est envoy\xE9.",hv_camYes:"Allumer la cam\xE9ra",cancel:"Annuler",stop:"Arr\xEAter",params:"Param\xE8tres",hv_source:"Source",hv_cell:"Grille",hv_size:"Taille",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"couleurs de la vid\xE9o",hv_camDenied:"Cam\xE9ra indisponible.",hv_video:"Vid\xE9o",hv_src:"Vid\xE9o ou cam\xE9ra",hv_shot:"Prendre une photo",hv_shotDone:"Photo enregistr\xE9e.",story:"L\u2019histoire de ce site",c_write:"\xC9crire",c_call:"Appeler",c_addr:"Adresse",c_follow:"Suivre"},ca:{category:"Categoria",together:"Els nostres projectes junts",all:"Tot",postedIn:"Classificat a",visit:"Visita el web:",homeLink:"Inici",partners:"Col\xB7laboradors",skillProjects:"Projectes que l'han fet servir",skills:"Coneixement",who:"Qui hi ha treballat?",with:"Amb",leftToRight:"D'esquerra a dreta.",enter:"Entra",loading:"Carregant",prev:"Anteriors",next:"Seg\xFCents",keys:"Dreceres de teclat",animation:"Animaci\xF3",section:"Secci\xF3",move:"Moure",zoom:"Zoom",openClose:"Obrir / Tancar",space:"ESPAI",loadError:"No s'ha pogut carregar l'escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Passar a negatiu",toPos:"Passar a positiu",play:"Reprodueix",pause:"Pausa",close:"Tanca",hv_words:"Type something",hv_turn:"Gira el m\xF2bil per veure el v\xEDdeo sencer",overview:"Visi\xF3 de conjunt",ov_n:"projectes",nProjects:"projectes",nextProject:"Projecte seg\xFCent",soundOn:"Activa el so",soundOff:"Silencia",hv_contrast:"Contrast",hv_delay:"Delay",hv_color:"Color",hv_invert:"Inverteix",hv_cam:"C\xE0mera",hv_camNote:"La teva imatge es queda a la teva pantalla. Fes la teva foto.",hv_panel:"Par\xE0metres",hv_slides:"Diapositives",hv_private:"C\xE0mera: no es grava res.",hv_consent:"Aquest v\xEDdeo \xE9s nom\xE9s per a tu. No es grava res, no s\u2019envia res.",hv_camYes:"Enc\xE9n la c\xE0mera",cancel:"Cancel\xB7la",stop:"Atura",params:"Par\xE0metres",hv_source:"Font",hv_cell:"Graella",hv_size:"Mida",hv_c_white:"blanc",hv_c_grey:"gris",hv_c_accent:"accent",hv_c_source:"colors del v\xEDdeo",hv_camDenied:"C\xE0mera no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE0mera",hv_shot:"Fes una foto",hv_shotDone:"Foto desada.",story:"La hist\xF2ria d\u2019aquest web",c_write:"Escriu",c_call:"Truca",c_addr:"Adre\xE7a",c_follow:"Segueix"},es:{category:"Categor\xEDa",together:"Nuestros proyectos juntos",all:"Todo",postedIn:"Archivado en",visit:"Visita la web:",homeLink:"Inicio",partners:"Colaboradores",skillProjects:"Proyectos que lo han usado",skills:"Saber hacer",who:"\xBFQui\xE9n ha trabajado en este proyecto?",with:"Con",leftToRight:"De izquierda a derecha.",enter:"Entrar",loading:"Cargando",prev:"Anteriores",next:"Siguientes",keys:"Atajos de teclado",animation:"Animaci\xF3n",section:"Secci\xF3n",move:"Mover",zoom:"Zoom",openClose:"Abrir / Cerrar",space:"ESPACIO",loadError:"No se ha podido cargar la escena 3D: ",lang:"Idioma",photo:"Foto",toNeg:"Pasar a negativo",toPos:"Pasar a positivo",play:"Reproducir",pause:"Pausa",close:"Cerrar",hv_words:"Type something",hv_turn:"Gira el m\xF3vil para ver el v\xEDdeo entero",overview:"Vista general",ov_n:"proyectos",nProjects:"proyectos",nextProject:"Proyecto siguiente",soundOn:"Activar el sonido",soundOff:"Silenciar",hv_contrast:"Contraste",hv_delay:"Delay",hv_color:"Color",hv_invert:"Invertir",hv_cam:"C\xE1mara",hv_camNote:"Tu imagen se queda en tu pantalla. Haz tu foto.",hv_panel:"Par\xE1metros",hv_slides:"Diapositivas",hv_private:"C\xE1mara: no se graba nada.",hv_consent:"Este v\xEDdeo es solo para ti. No se graba nada, no se env\xEDa nada.",hv_camYes:"Encender la c\xE1mara",cancel:"Cancelar",stop:"Detener",params:"Par\xE1metros",hv_source:"Fuente",hv_cell:"Cuadr\xEDcula",hv_size:"Tama\xF1o",hv_c_white:"blanco",hv_c_grey:"gris",hv_c_accent:"acento",hv_c_source:"colores del v\xEDdeo",hv_camDenied:"C\xE1mara no disponible.",hv_video:"V\xEDdeo",hv_src:"V\xEDdeo o c\xE1mara",hv_shot:"Haz una foto",hv_shotDone:"Foto guardada.",story:"La historia de esta web",c_write:"Escribe",c_call:"Llama",c_addr:"Direcci\xF3n",c_follow:"Sigue"}},KM={carousel:{label:{en:"Carousel",fr:"Carrousel"},hint:{en:"Cards in a ring around the object",fr:"Les cartes en cercle autour de l'objet"}},arc:{label:{en:"Arc",fr:"Arc"},hint:{en:"A rainbow arc above the object, facing the visitor",fr:"Un arc-en-ciel au-dessus de l'objet, face au visiteur"}},fan:{label:{en:"Fan",fr:"\xC9ventail"},hint:{en:"Two fans, front and back, cards turn on focus",fr:"Deux \xE9ventails devant et derri\xE8re, les cartes pivotent au focus"}},map:{label:{en:"Map",fr:"Carte"},hint:{en:"Cards placed by city, linked to the ground",fr:"Les cartes plac\xE9es par ville, reli\xE9es au sol"}},spiral:{label:{en:"Spiral",fr:"Spirale"},hint:{en:"A rising helix around the object",fr:"Une h\xE9lice qui monte autour de l'objet"}},wall:{label:{en:"Wall",fr:"Mur"},hint:{en:"A grid behind the object, like a mood board",fr:"Une grille derri\xE8re l'objet, comme un mur d'images"}}},To={image:{label:{en:"Image",fr:"Image"},size:[256,169],open:"strip"},portrait:{label:{en:"Portrait",fr:"Portrait"},size:[90,90],open:"focus3d"},text:{label:{en:"Text",fr:"Texte"},size:[312,78],open:"strip"},place:{label:{en:"Place",fr:"Lieu"},size:[140,130],open:"strip"}};function ld(){return Object.fromEntries(oi.map(n=>[n,""]))}function Hs(n){n=n&&typeof n=="object"?n:{},n.version=n.version||1,n.settings=Object.assign({name:"Hand Coded",since:"",langs:oi.slice(),defaultLang:"en",accent:"#ffcc00",logo:"",negative:!1,negativeToggle:!0,signImages:!0,showreel:"",homeVideo:{},taglines:{en:[],fr:[]},home:{},offices:[],social:[],startSection:""},n.settings||{});let e=n.settings.home;e.headline=e.headline||ld(),e.sub=e.sub||ld(),e.enter=e.enter||{en:"Enter",fr:"Entrer",ca:"Entra",es:"Entrar"},e.ticker=Array.isArray(e.ticker)?e.ticker:[],e.figures=Array.isArray(e.figures)?e.figures:[],e.intro&&typeof e.intro=="object"&&Object.entries(e.intro).forEach(([s,r])=>{String(r||"").trim()&&(e.sub[s]=r)}),delete e.intro,e.quotes=e.quotes&&typeof e.quotes=="object"?e.quotes:ld();let t=n.settings.seo=n.settings.seo&&typeof n.settings.seo=="object"?n.settings.seo:{};t.url=typeof t.url=="string"?t.url:"",t.image=typeof t.image=="string"?t.image:"",(!t.description||typeof t.description!="object")&&(t.description=Object.fromEntries(oi.map(s=>[s,t.description||""]))),n.settings.analytics=n.settings.analytics&&typeof n.settings.analytics=="object"?n.settings.analytics:{};let i=e.story=e.story&&typeof e.story=="object"?e.story:{};return["title","body","linkLabel"].forEach(s=>{(!i[s]||typeof i[s]!="object")&&(i[s]=Object.fromEntries(oi.map(r=>[r,i[s]||""])))}),i.images=Array.isArray(i.images)?i.images.filter(s=>typeof s=="string"&&s):[],i.link=typeof i.link=="string"?i.link:"",n.models=Array.isArray(n.models)?n.models:[],n.sections=Array.isArray(n.sections)?n.sections:[],n.sections.forEach(s=>{s.tags=Array.isArray(s.tags)?s.tags:[],s.layout=KM[s.layout]?s.layout:"carousel",s.card=To[s.card]?s.card:"image",s.open=s.open==="focus3d"?"focus3d":"strip",s.perPage=Math.max(1,Math.min(40,+s.perPage||8)),s.visible===void 0&&(s.visible=!0),s.network=!!s.network,s.skills=s.skills===void 0?s.id==="expertise":!!s.skills}),n.posts=Array.isArray(n.posts)?n.posts:[],n.posts.forEach(s=>{["title","subtitle","place","body"].forEach(r=>{(!s[r]||typeof s[r]!="object")&&(s[r]=Object.fromEntries(oi.map(o=>[o,s[r]||""]))),oi.forEach(o=>{s[r][o]==null&&(s[r][o]="")})}),s.tags=Array.isArray(s.tags)?s.tags:[],s.media=Array.isArray(s.media)?s.media:[],s.team=Array.isArray(s.team)?s.team:[],s.author=typeof s.author=="string"?s.author:"",s.media.forEach(r=>{r&&typeof r.credit!="string"&&(r.credit=""),r&&typeof r.caption=="string"&&(r.caption=Object.fromEntries(oi.map(o=>[o,r.caption])))}),s.spots=Array.isArray(s.spots)?s.spots.filter(hd):[],s.skills=Array.isArray(s.skills)?s.skills.filter(r=>typeof r=="string"):[],s.logos=Array.isArray(s.logos)?s.logos.filter(r=>typeof r=="string"&&r):[],s.published===void 0&&(s.published=!0)}),n}function cd(n,e,{all:t=!1}={}){return n.posts.filter(i=>i.section===e&&(t||i.published)).sort((i,s)=>(i.order??0)-(s.order??0))}function rg(n,e){return(e.skills||[]).map(t=>n.posts.find(i=>i.id===t&&i.published)).filter(Boolean)}function Ao(n,e){let t=new Map(n.sections.map((i,s)=>[i.id,s]));return n.posts.filter(i=>i.published&&i!==e&&(i.skills||[]).includes(e.id)&&t.has(i.section)).sort((i,s)=>t.get(i.section)-t.get(s.section)||(i.order??0)-(s.order??0))}function _e(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var QM=new Set(["P","BR","STRONG","B","EM","I","A","UL","OL","LI","H3"]);function Mr(n){let e=new DOMParser().parseFromString(`<div>${n||""}</div>`,"text/html"),t=e.body.firstChild;return function i(s){[...s.childNodes].forEach(r=>{if(r.nodeType!==3){if(r.nodeType!==1){r.remove();return}if(i(r),r.tagName==="DIV"){let o=e.createElement("p");for(;r.firstChild;)o.appendChild(r.firstChild);r.replaceWith(o);return}if(!QM.has(r.tagName)){r.replaceWith(...r.childNodes);return}if([...r.attributes].forEach(o=>{r.tagName==="A"&&o.name==="href"||r.removeAttribute(o.name)}),r.tagName==="A"){let o=r.getAttribute("href")||"";/^(https?:|mailto:)/i.test(o)?(r.setAttribute("target","_blank"),r.setAttribute("rel","noopener")):r.removeAttribute("href")}}})}(t),t.innerHTML.replace(/<p>(\s|&nbsp;|<br>)*<\/p>/g,"").trim()}function wr(n){return new DOMParser().parseFromString(`<div>${(n||"").replace(/<\/p>|<br\s*\/?>/gi,`
`)}</div>`,"text/html").body.textContent.split(`
`).map(t=>t.trim()).filter(Boolean)}var hd=n=>!!n&&isFinite(n.lat)&&isFinite(n.lon)&&n.lat!==""&&n.lon!=="";function Vs(n){return!n||!isFinite(n.lat)||!isFinite(n.lon)?null:[35-2.9*n.lon,44-2.98*n.lat]}function ud(){return new Promise((n,e)=>{let t=indexedDB.open("handcoded-cms",1);t.onupgradeneeded=()=>{t.result.createObjectStore("kv")},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function eg(n){try{let e=await ud();return await new Promise((t,i)=>{let s=e.transaction("kv").objectStore("kv").get(n);s.onsuccess=()=>t(s.result),s.onerror=()=>i(s.error)})}catch{return}}async function tg(n,e){let t=await ud();return new Promise((i,s)=>{let r=t.transaction("kv","readwrite");r.objectStore("kv").put(e,n),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function ng(n){try{let e=await ud();return await new Promise(t=>{let i=e.transaction("kv","readwrite");i.objectStore("kv").delete(n),i.oncomplete=()=>t(),i.onerror=()=>t()})}catch{}}var Nc=class{constructor(e=""){this.base=e,this.kind="static"}async load(){if(window.HC_CONTENT)return Hs(structuredClone(window.HC_CONTENT));if(window.HC_CONTENT_P&&!this.base){let t=await window.HC_CONTENT_P;if(window.HC_CONTENT_P=null,t)return Hs(t)}let e=await fetch(this.base+"content/content.json?v="+Date.now(),{cache:"no-store"});if(!e.ok)throw new Error("content/content.json : "+e.status);return Hs(await e.json())}url(e){return!e||/^(https?:|data:|blob:)/.test(e)?e:this.base+e}};var Dc=class{constructor(e=""){this.kind="demo",this.base=e,this.urls=new Map}async load(){let e=await eg("demo:content:v6");if(e)return Hs(e);if(window.HC_CONTENT)return Hs(structuredClone(window.HC_CONTENT));let t=await fetch(this.base+"content/content.json");return Hs(await t.json())}async publish(e,t=[]){for(let i of t){if(i.delete){await ng("demo:file:"+i.path);continue}await tg("demo:file:"+i.path,i.blob||new Blob([i.text],{type:"text/plain"}))}return await tg("demo:content:v6",e),"demo"}async reset(){await ng("demo:content:v6")}async listFiles(){return[]}async prepare(e){let t=new Set;e.posts.forEach(i=>{[i.thumb,i.thumbBack].forEach(s=>s&&t.add(s)),i.media.forEach(s=>s.src&&t.add(s.src)),(i.logos||[]).forEach(s=>t.add(s))}),e.models.forEach(i=>{!i.builtin&&i.file&&(t.add(i.file),(i.textures||[]).forEach(s=>t.add(i.file.replace(/[^/]+$/,"")+s)))}),e.settings.logo&&t.add(e.settings.logo);for(let i of t){if(this.urls.has(i))continue;let s=await eg("demo:file:"+i);s&&this.urls.set(i,URL.createObjectURL(s))}}url(e){return e&&(this.urls.has(e)?this.urls.get(e):/^(https?:|data:|blob:)/.test(e)?e:this.base+e)}},ig=[{id:"georgia",label:"Georgia (serif du site)",css:'Georgia, Gelasio, "Times New Roman", serif',group:"Syst\xE8me"},{id:"lucida",label:"Lucida Grande (interface du site)",css:'"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Verdana, sans-serif',group:"Syst\xE8me"},{id:"helvetica",label:"Helvetica",css:'"Helvetica Neue", Helvetica, Arial, sans-serif',group:"Syst\xE8me"},{id:"arial",label:"Arial",css:'Arial, "Helvetica Neue", sans-serif',group:"Syst\xE8me"},{id:"verdana",label:"Verdana",css:"Verdana, Geneva, sans-serif",group:"Syst\xE8me"},{id:"times",label:"Times",css:'"Times New Roman", Times, serif',group:"Syst\xE8me"},{id:"courier",label:"Courier",css:'"Courier New", Courier, monospace',group:"Syst\xE8me"},{id:"gelasio",label:"Gelasio",css:"Gelasio, Georgia, serif",group:"H\xE9berg\xE9es avec le site",local:!0},{id:"montserrat",label:"Montserrat",css:'Montserrat, "Helvetica Neue", Arial, sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0},{id:"wireone",label:"Wire One",css:'"Wire One", "Arial Narrow", sans-serif',group:"H\xE9berg\xE9es avec le site",local:!0}],Eo=[{id:"sig1",group:"Signature",label:"Premi\xE8re ligne",hint:"\xAB Hand Coded. \xBB en haut \xE0 gauche et sur l\u2019accueil",font:"georgia",size:30,lh:34,weight:400,sample:"Hand Coded.",sel:["#slogan .wm","#home-band .sl .wm"],mob:.74},{id:"sig2",group:"Signature",label:"Lignes suivantes",font:"georgia",size:26,lh:30,weight:400,sample:"Responsive. Intelligent.",sel:["#slogan span","#home-band .sl span"],mob:.72},{id:"menu",group:"Navigation",label:"Menu des sections",font:"georgia",size:15,lh:21.5,weight:400,sample:"R\xE9alisations  Savoir-faire  Le studio",sel:["#menu button"]},{id:"ui",group:"Navigation",label:"Interface",hint:"langues, tags, fl\xE8che d\u2019entr\xE9e, panneaux",font:"lucida",only:["font"],sample:"EN FR CA ES \xB7 S\xC9LECTION",vars:["--ui"]},{id:"title",group:"Fiches",label:"Titre",font:"georgia",size:30,lh:36,weight:400,sample:"Kinematope.",sel:[".txt .ttl"]},{id:"subtitle",group:"Fiches",label:"Sous-titre",font:"georgia",size:16,lh:20,weight:400,sample:"Pablo Valbuena, Paisaje T\xE9cnico",sel:[".txt .stl",".pnl.link .host"]},{id:"body",group:"Fiches",label:"Texte",font:"georgia",size:14,lh:18,weight:400,sample:"Animated light and shadow reveal the architecture and offer a new way to experience the space.",sel:[".txt .body"]},{id:"h3",group:"Fiches",label:"Intertitres",hint:"Cr\xE9dits, intertitres du texte riche",font:"georgia",size:14,lh:18,weight:700,sample:"Credits",sel:[".txt .body h3"]},{id:"date",group:"Fiches",label:"Date et lieu",font:"georgia",size:13,lh:18,weight:400,sample:"2016 | Fundaci\xF3n Telef\xF3nica, Madrid",sel:[".txt .fecha"]},{id:"meta",group:"Fiches",label:"\xAB Class\xE9 dans \xBB",font:"lucida",size:10,lh:14,weight:400,ls:.03,sample:"Filed under Selected, Light",sel:[".txt .posted",".pnl.link .lbl",".proj .m"]},{id:"names",group:"Fiches",label:"\xC9quipe, noms",font:"lucida",size:11,lh:15,weight:400,sample:"Cyril Laurier, Maya Benainous",sel:[".team .names"]},{id:"cname",group:"Contact",label:"Nom",font:"georgia",size:44,lh:50,weight:400,sample:"Hand Coded",sel:[".contact .cn"]},{id:"csub",group:"Contact",label:"Sous-titre",font:"georgia",size:18,lh:24,weight:400,sample:"Barcelona studio",sel:[".contact .ac"]},{id:"cinfo",group:"Contact",label:"Coordonn\xE9es",font:"lucida",size:14,lh:20,weight:400,sample:"maya@hand-coded.net",sel:[".contact .site",".contact .ad",".contact .ct"]},{id:"card",group:"Cartes 3D",label:"Titres des cartes",hint:"taille en % du dessin d\u2019origine ; les phrases des cartes prennent la police du sous-titre des fiches",font:"georgia",weight:400,scale:100,only:["font","weight","scale"],sample:"Rising \xB7 Mouawad Laurier"},{id:"cardsm",group:"Cartes 3D",label:"Mentions des cartes",hint:"lieux, signatures, \xE9tiquettes de la carte du monde",font:"lucida",only:["font"],sample:"AVEIRO, LA ROCHELLE, PARIS"},{id:"logo",group:"Logo",label:"Logo rond",hint:"le logo dessin\xE9 par d\xE9faut, quand aucun logo n\u2019est envoy\xE9",font:"georgia",size:38,weight:400,italic:!0,text:"hc",only:["font","size","weight","italic","text"],sample:"hc"}],ew=["font","size","lh","weight","italic","ls","upper"],ag=n=>/^g:/.test(n||"")?String(n).slice(2).trim():"";function tw(n){let e=ig.find(i=>i.id===n);if(e)return e.css;let t=ag(n);return t?`"${t.replace(/["\\]/g,"")}", ${/serif|garamond|playfair|lora|merriweather|baskerville|crimson|caslon|bodoni|didot/i.test(t)?"Georgia, serif":'"Helvetica Neue", Arial, sans-serif'}`:ig[0].css}function Zn(n,e){let t=Eo.find(r=>r.id===e),i=n&&n.typo&&n.typo[e]||{},s=Object.assign({},t);for(let r of[...ew,"scale","text"])i[r]!==void 0&&i[r]!==""&&i[r]!==null&&(s[r]=i[r]);return s.css=tw(s.font),s.changed=Object.keys(i).some(r=>i[r]!==void 0&&i[r]!==""&&i[r]!==null&&i[r]!==t[r]),s}function og(n){let e=[],t=[],i=[],s=[];for(let r of Eo){if(r.vars||!r.sel)continue;let o=Zn(n,r.id),a=r.id;s.push(`--f-${a}: ${o.css}`,`--w-${a}: ${o.weight||400}`,`--st-${a}: ${o.italic?"italic":"normal"}`,`--tt-${a}: ${o.upper?"uppercase":"none"}`,`--ls-${a}: ${o.ls||0}em`),o.size&&s.push(`--s-${a}: ${o.size}px`,`--lh-${a}: ${o.lh?o.lh:+(o.size*1.2).toFixed(1)}px`)}e.push(`:root { ${s.join("; ")} }`);for(let r of Eo){let o=n&&n.typo&&n.typo[r.id]||{},a=Zn(n,r.id),l=h=>o[h]!==void 0&&o[h]!==""&&o[h]!==null&&o[h]!==r[h];if(r.vars){l("font")&&e.push(`:root { ${r.vars.map(h=>`${h}: ${a.css};`).join(" ")} }`);continue}if(!r.sel)continue;let c=[];if(l("font")&&c.push(`font-family: ${a.css}`),l("size")&&c.push(r.clamp?`font-size: clamp(${Math.round(a.size*r.clamp[0])}px, ${(a.size/r.clamp[1]*100).toFixed(2)}vw, ${a.size}px)`:`font-size: ${a.size}px`),(l("lh")||l("size")&&!r.clamp&&!l("lh")&&r.lh)&&c.push(`line-height: ${l("lh")?a.lh:+(r.lh*a.size/r.size).toFixed(1)}px`),l("weight")&&c.push(`font-weight: ${a.weight}`),l("italic")&&c.push(`font-style: ${a.italic?"italic":"normal"}`),l("ls")&&c.push(`letter-spacing: ${a.ls}em`),l("upper")&&c.push(`text-transform: ${a.upper?"uppercase":"none"}`),c.length&&e.push(`${r.sel.join(", ")} { ${c.join("; ")} }`),r.mob&&(l("size")||l("lh"))){let h=l("lh")?a.lh:r.lh*a.size/r.size;t.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob)}px; line-height: ${Math.round(h*r.mob)}px }`),i.push(`${r.sel.join(", ")} { font-size: ${Math.round(a.size*r.mob*.8)}px; line-height: ${Math.round(h*r.mob*.8)}px }`)}}return t.length&&e.push(`@media (max-width: 700px) { ${t.join(" ")} }`,`@media (max-height: 520px) { ${i.join(" ")} }`),e.join(`
`)}function lg(n){let e=new Map;for(let t of Eo){let i=Zn(n,t.id),s=ag(i.font);if(!s)continue;new Set([+(i.weight||400),400,700,...t.id==="body"?[800]:[]]).forEach(o=>e.set(`${s}|${i.italic?1:0}|${o}`,[s,i.italic?1:0,o]))}return[...e.values()].map(([t,i,s])=>`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t).replace(/%20/g,"+")}:ital,wght@${i},${s}&display=swap`)}function dd(n){let e=new Set;for(let t of Eo){let i=Zn(n,t.id);e.add(`${i.italic?"italic ":""}${i.weight||400} 24px ${i.css}`)}return[...e]}function cg(n,e,t=!1){let i=Zn(e,"logo"),s=document.createElement("canvas");s.width=s.height=240;let r=s.getContext("2d");r.fillStyle=n,r.beginPath(),r.arc(120,120,112,0,Math.PI*2),r.fill(),r.fillStyle="#111",r.beginPath(),r.arc(120,120,106,0,Math.PI*2),r.fill();let o=String(i.text??"hc").slice(0,4);r.fillStyle="#fff",r.textAlign="center",r.textBaseline="alphabetic";let a=d=>`${i.italic?"italic ":""}${i.weight||400} ${d}px ${i.css}`,l=Math.max(8,+i.size||38)*2;r.font=a(l);let c=r.measureText(o).width;c>172&&(l=Math.floor(l*172/c),r.font=a(l));let h=r.measureText(o),u=(h.actualBoundingBoxAscent||l*.7)-(h.actualBoundingBoxDescent||0);if(r.fillText(o,120+((h.actualBoundingBoxLeft??h.width/2)-(h.actualBoundingBoxRight??h.width/2))/2,120+u/2-4),t){let d=r.getImageData(0,0,240,240),p=d.data;for(let g=0;g<p.length;g+=4)p[g]=255-p[g],p[g+1]=255-p[g+1],p[g+2]=255-p[g+2];r.putImageData(d,0,0)}return s.toDataURL("image/png")}var hg=window.HC_BASE||"",Gc=window.HC_MODE==="demo"?new Dc(hg):new Nc(hg),qs=window.HC_ASSETS||null,sf=location.protocol==="file:",r0=(()=>{let n=document.querySelector("base"),e=n?document.baseURI:new URL("./",location.href).href;if(!sf&&(window.HC_ROUTE||{}).pages)if(n)n.href=e;else{let t=document.createElement("base");t.href=e,document.head.prepend(t)}return new URL(e)})(),a0=20261102;window.HC_SITE_VERSION=a0;var wt=window.HC_PREVIEW||/[?&]preview\b/.test(location.search)?(()=>{try{return window.parent!==window&&window.parent.__hcPreview||window.opener&&window.opener.__hcPreview||null}catch{return null}})():null,bt=n=>{if(!n)return n;let e=String(n).replace(/^\.\//,"").replace(/\/\.\//g,"/");return wt&&wt.files&&wt.files[e]?wt.files[e]:qs&&qs[e]&&qs[e].startsWith("data:")?qs[e]:Gc.url(e)};async function nw(n){if(qs&&qs[n]&&!qs[n].startsWith("data:"))return qs[n];let e=await fetch(bt(n));if(!e.ok)throw new Error(n+" : "+e.status);return e.text()}var ve=null,fn="en",he=n=>sg(n,fn),xe=n=>(br[fn]||br.en)[n],o0=42,oe={object3DDistance:800,object3DMaxHeight:800,planeDistance:500,planeDisOrder:125,planeFrameThickness:1,planeFrameColor:15856113,planeFrameSelectColor:10066329,planeFrameDistance:1,planeSpeed:1,cameraDistance:600,cameraDistanceProportion:600,cameraEaseSpeed:7,cameraSpeed:2,cameraHeight:350,cameraTargetHeight:400,cameraKeyboardSpeed:3,cameraZoomMin:500,cameraZoomMax:2e3,lineThickness:1,lineColor:14606046,locatorColor:15841280,margin:20,easing:6,tween:1,animationMode:!0},Ks={zoom:2,focus:300},iw=.08,ug={};function l0(n){if(oe.animationMode===n)return;let e=["cameraEaseSpeed","cameraSpeed","planeSpeed","cameraKeyboardSpeed","planeDisOrder","easing","tween"];n?e.forEach(t=>{oe[t]=ug[t]}):(e.forEach(t=>{ug[t]=oe[t]}),Object.assign(oe,{easing:1,tween:0,cameraEaseSpeed:1,cameraSpeed:0,planeSpeed:0,cameraKeyboardSpeed:1,planeDisOrder:0})),oe.animationMode=n}var Nd=class{constructor(e){this.section=e,this.per=e.skills?Math.max(e.perPage,200):e.perPage,this.all=cd(ve,e.id),this.selected=0,this.defaultCategory=e.defaultTag||"",this.changeCategory(this.defaultCategory)}get categoryList(){let e=new Set(this.all.flatMap(s=>s.tags)),t=this.section.tags.filter(s=>e.has(s.id)&&s.menu!==!1),i={id:"",label:Object.fromEntries(oi.map(s=>[s,(br[s]||br.en).all]))};return this.section.noAll&&t.length?t:[i,...t]}tagOf(e){let t=this.categoryList;return e.tags.find(i=>t.some(s=>s.id===i))||(t[0]?t[0].id:"")}changeCategory(e){let t=this.categoryList;t.some(i=>i.id===e)||(e=t.some(i=>i.id===this.defaultCategory)?this.defaultCategory:t[0]?t[0].id:""),this.category=e,this.list=e?this.all.filter(i=>i.tags.includes(e)):this.all,this.first=0,this.posts=this.list.slice(0,this.per),this.last=this.posts.length}get currentCatName(){let e=this.categoryList.find(t=>t.id===this.category);return e?he(e.label):""}countOf(e){return e?this.all.filter(t=>t.tags.includes(e)).length:this.all.length}get page(){return Math.floor(this.first/this.per)+1}get pages(){return Math.max(1,Math.ceil(this.list.length/this.per))}get currentPost(){return this.posts[this.selected]}hasNewer(){return this.first>0}hasOlder(){return this.last<this.list.length}newer(){return this.hasNewer()?(this.last=this.first,this.first=Math.max(0,this.last-this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}older(){return this.hasOlder()?(this.first=this.last,this.last=Math.min(this.list.length,this.first+this.per),this.posts=this.list.slice(this.first,this.last),!0):!1}},H={currentSection:0,degreeCamera:Math.PI,actualDeg:Math.PI,cameraY:oe.cameraHeight,postOpen:!1,datas:[],get data(){return this.datas[this.currentSection]},get section(){return Dt[this.currentSection]},get selected(){return this.data.selected},set selected(n){this.data.selected=n},resetData(){this.datas[this.currentSection]?this.data.changeCategory(this.data.defaultCategory):this.datas[this.currentSection]=new Nd(this.section.def)}},Dt=[],yt={x:0,y:0,z:0,zoom:Ks.zoom},Fn={x:0,y:0,z:0},ps=0,Ti=[],sw={linear:n=>n,quadOut:n=>-n*(n-2),quartOut:n=>1-Math.pow(1-n,4),expoOut:n=>n>=1?1:1-Math.pow(2,-10*n),circOut:n=>Math.sqrt(1-(n-1)*(n-1))};function cn(n,e,t,i={}){for(let r of Ti)if(r.obj===n)for(let o in t)delete r.props[o];let s={obj:n,props:{...t},bezier:i.bezier||null,time:e,start:ps+(i.delay||0),ease:sw[i.ease||"quadOut"],onUpdate:i.onUpdate,onComplete:i.onComplete,from:null};return Ti.push(s),s}var Vo=(n,e)=>cn({},n,{},{onComplete:e,ease:"linear"});function Cn(n){for(let e=Ti.length-1;e>=0;e--)Ti[e].obj===n&&Ti.splice(e,1)}function Oa(n){return Ti.some(e=>e.obj===n&&ps>=e.start)}function c0(n,e){if(!e&&ps<n.start)return!1;if(!n.from){n.from={};for(let s in n.props)n.from[s]=n.obj[s]}let t=e||n.time<=0?1:Math.min(1,(ps-n.start)/n.time),i=t>=1?1:n.ease(t);for(let s in n.props){let r=n.from[s],o=n.props[s];n.obj[s]=n.bezier&&s in n.bezier?r+i*(2*(1-i)*(n.bezier[s]-r)+i*(o-r)):r+(o-r)*i}return n.onUpdate&&n.onUpdate(),t>=1}function rw(){for(let n of Ti.slice())if(c0(n,!1)){let e=Ti.indexOf(n);e>=0&&Ti.splice(e,1),n.onComplete&&n.onComplete()}}function h0(){Ti.splice(0).forEach(n=>c0(n,!0))}function aw(n,e,t,i,s,r,o){Cn(yt),cn(yt,o,{x:n,y:e,z:t},{ease:"quadOut",bezier:{x:(n-yt.x)/2,y:e+500,z:(t-yt.z)/2}}),rf(i,s,r,o)}function rf(n,e,t,i){Cn(Fn),cn(Fn,i*3/4,{x:n,y:e,z:t},{ease:"quartOut"})}function ow(n,e,t,i){Cn(yt),cn(yt,i,{x:n,y:e,z:t},{ease:"quadOut"})}var Go=1,_n=n=>n<=1?1:1-Math.pow(1-1/n,Go),zi=Math.PI/180,Dd=(n,e,t)=>new U(n,e,-t),Gs=(n,e,t)=>[-n,e,t],xn=document.getElementById("stage"),zn=new po({canvas:xn,antialias:(window.devicePixelRatio||1)<1.75,powerPreference:"high-performance"});zn.debug.checkShaderErrors=!1;var Wo=Math.min(window.devicePixelRatio||1,2),dg=Math.min(Wo,Wo>=2?1.25:1),Tr=Wo,Wc=0,Ud=0,u0=0;zn.setPixelRatio(Tr);function fg(n,e){Tr=n,zn.setPixelRatio(Tr),zn.setSize(Ft,Ut,!1),Wc=Ud=0,u0=e;try{zn.render(Rn,hn)}catch{}}function lw(n,e){n-u0<1500||(e>30?(Ud=0,++Wc>24&&Tr>dg&&fg(Math.max(dg,Math.round((Tr-.25)*4)/4),n)):e<19&&(Wc=Math.max(0,Wc-1),++Ud>240&&Tr<Wo&&fg(Math.min(Wo,Tr+.25),n)))}var pg=".t.webp",af=n=>n&&!sf&&!cw()&&!/^(https?:|data:|blob:)/.test(n)&&/^media\/.+\.(jpe?g|png|webp)$/i.test(n)&&!n.endsWith(pg)?n+pg:n;function cw(){return!!(window.HC_PREVIEW||/[?&]preview\b/.test(location.search))}document.addEventListener("error",n=>{let e=n.target;e&&e.tagName==="IMG"&&e.dataset.full&&!e.dataset.fell&&(e.dataset.fell="1",e.src=e.dataset.full)},!0);var Rr=(n,e="")=>{let t=af(n);return`<img src="${_e(bt(t))}"${t!==n?` data-full="${_e(bt(n))}"`:""} ${e}>`};zn.setClearColor(16777215,1);var Rn=new Os;Rn.add(new gc(16777215,14211288,2.2));var d0=new Ma(16777215,1.2);d0.position.set(300,800,500);Rn.add(d0);var hn=new rn(60,1,1,6e4),f0=new hs({color:oe.lineColor,linewidth:oe.lineThickness}),Od=new hs({color:oe.planeFrameColor,linewidth:oe.planeFrameThickness}),p0=new hs({color:oe.planeFrameSelectColor,linewidth:oe.planeFrameThickness}),$c=new hs({color:oe.locatorColor,linewidth:1.3}),of=[f0,Od,p0,$c],m0=new xo;m0.setURLModifier(n=>/^(blob:|data:|https?:)/.test(n)?n:bt(n));var La=new Map;function fd(n){return La.has(n)||La.set(n,new Promise((e,t)=>{let i=new Image;i.decoding="async",/^https?:/.test(bt(n))&&(i.crossOrigin="anonymous"),i.onload=()=>(i.decode?i.decode().catch(()=>{}):Promise.resolve()).then(()=>e(i)),i.onerror=t,i.src=bt(n)})),La.get(n)}function gs(n,e=!1){if(!n)return Promise.reject(new Error("no image"));if(sf&&!/^(data:|blob:|https?:)/.test(bt(n)))return Promise.reject(new Error("local"));let t=e?n:af(n);if(t===n)return fd(n);let i="tn:"+n;return La.has(i)||La.set(i,fd(t).catch(()=>fd(n))),La.get(i)}function lf(n){return n.colorSpace=Zt,n.anisotropy=Math.min(8,zn.capabilities.getMaxAnisotropy()),n}var kd=(()=>{let n=document.createElement("canvas");n.width=n.height=4;let e=lf(new _a(n)),t=new os(1,1),i=new Os;return[Qn,yn,jn].forEach(s=>i.add(new Gt(t,new an({map:e,side:s})))),i.add(new Gt(t,new an({color:1118481}))),i.add(new mo(new ya({map:e,transparent:!0}))),i})(),Ft=0,Ut=0,Vn=!1,Kc=()=>Vn,Lr=0,mg=0,$o=()=>ve.settings.negative==="auto";function fh(){if(!$o())return Lr=0,!!ve.settings.negative;let n=Jm();return Lr=n.next,!n.day}function cf(){if(wt||ve.settings.negativeToggle===!1)return null;try{let n=/^([01])(?:@(\d+))?$/.exec(localStorage.getItem("hc-neg")||"");if(n&&(!$o()||n[2]&&Date.now()<+n[2]))return n[1]==="1"}catch{}return null}function g0(n){n!==Vn&&(Vn=n,Eh(),Pe&&Pe.retexture())}function hf(){if(clearTimeout(mg),!$o())return;mg=setTimeout(()=>{if(Date.now()>=Lr-1e3){let e=fh(),t=cf();g0(t??e)}hf()},Math.min(Math.max(Lr-Date.now(),1e3),3*36e5))}document.addEventListener("visibilitychange",()=>{if(!document.hidden&&Lr&&Date.now()>=Lr){let n=fh(),e=cf();g0(e??n),hf()}});var y0=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n).trim());return e?"#"+(16777215^parseInt(e[1],16)).toString(16).padStart(6,"0"):n},Hn=()=>{let n=ve.settings.accent||"#ffcc00";return Kc()?y0(n):n},ph='Georgia, Gelasio, "Times New Roman", serif',en='"Lucida Grande", "Lucida Sans Unicode", Verdana, sans-serif',v0=400,_0=ph,x0=!1,b0=1,vi=n=>`${v0} ${n}px ${ph}`,Hi=n=>`${x0?"italic ":""}400 ${Math.round(n*b0*10)/10}px ${_0}`,uf=1,Qe=n=>Math.round(n*uf),hw=700,mh=()=>{let n=Ft||window.innerWidth,e=Ut||window.innerHeight;return n<hw||Math.min(n,e)<500},ys=mh;function tr(){if(!document.fonts||!document.fonts.load)return Promise.resolve();let n=["22px Gelasio","italic 22px Gelasio",...ve?dd(ve.settings):[]];return Promise.all(n.map(e=>document.fonts.load(e).catch(()=>{}))).catch(()=>{})}var gg=0,M0=[];function uw(){St&&(U0(),D0()),clearTimeout(gg),gg=setTimeout(async()=>{try{await Promise.all(dd(ve.settings).map(n=>document.fonts.load(n).catch(()=>{})))}catch{}ve.settings.logo||Gd(),Pe&&!Pe.loading&&Pe.retexture()},150)}function w0(){let n=ve.settings,e=document.getElementById("hc-typo");e||(e=document.createElement("style"),e.id="hc-typo",document.head.appendChild(e));let t=og(n);e.textContent!==t&&(e.textContent=t);let i=lg(n);document.querySelectorAll("link[data-hc-font]").forEach(o=>{i.includes(o.href)||o.remove()}),i.forEach(o=>{if(!document.querySelector(`link[data-hc-font][href="${CSS.escape(o)}"]`)){let a=document.createElement("link");a.rel="stylesheet",a.href=o,a.dataset.hcFont="",M0.push(new Promise(l=>{a.onload=()=>{l(),uw()},a.onerror=l})),document.head.appendChild(a)}});let s=Zn(n,"card"),r=Zn(n,"subtitle");v0=s.weight||400,_0=r.css,x0=!!r.italic,b0=/Instrument Serif|Playfair|Cormorant/.test(r.css)?1.18:1,ph=s.css,en=Zn(n,"cardsm").css,uf=Math.max(.5,Math.min(2,(+Zn(n,"card").scale||100)/100))}function Kt(n,e,t){let i=String(e).split(/\s+/),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Gn(n,e,t,i=2){let s=document.createElement("canvas");s.width=Math.round(n*i),s.height=Math.round(e*i);let r=s.getContext("2d");return r.scale(i,i),t(r),lf(new _a(s))}function Vi(n,e,t,i=2){return Gn(n,e,s=>{let r=Vn;Vn=!1;try{t(s)}finally{Vn=r}if(!r)return;let o=s.canvas;try{let a=s.getImageData(0,0,o.width,o.height),l=a.data;for(let c=0;c<l.length;c+=4)l[c]=255-l[c],l[c+1]=255-l[c+1],l[c+2]=255-l[c+2];s.putImageData(a,0,0)}catch{s.save(),s.setTransform(1,0,0,1,0,0),s.globalCompositeOperation="difference",s.fillStyle="#fff",s.fillRect(0,0,o.width,o.height),s.restore()}},i)}function Gi(n,e,t,i,s,r){let o=Math.max(s/e.naturalWidth,r/e.naturalHeight),a=s/o,l=r/o;n.drawImage(e,(e.naturalWidth-a)/2,(e.naturalHeight-l)/2,a,l,t,i,s,r),Kc()&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#fff",n.fillRect(t,i,s,r),n.restore())}var Pa=n=>String(n).split(/[\s&/|·,–-]+/).filter(e=>/[\p{L}\d]/u.test(e)).slice(0,2).map(e=>e.match(/[\p{L}\d]/u)[0].toUpperCase()).join("");function S0(n){return e=>{n(e),e.fillStyle="rgba(255,255,255,.8)",e.fillRect(0,0,4e3,4e3)}}function ka(n,e){return t=>{t.translate(n,0),t.scale(-1,1),e(t)}}var Zo=n=>Dt.some(e=>e.def.id===n.section),dw=(n,e)=>Dt.findIndex(t=>t.def.id===n.section)-Dt.findIndex(t=>t.def.id===e.section)||(n.order??0)-(e.order??0),Qc=n=>ve.posts.filter(e=>e.published&&e!==n&&Zo(e)&&((e.team||[]).includes(n.id)||n.thumb&&(e.logos||[]).includes(n.thumb))).sort(dw),qo=n=>{let e=Ao(ve,n).filter(Zo);return e.length?e:Qc(n)},fw=["core","artists","specialists","team","people"],Uo=n=>/(^|\/)media\/logos\//.test(n.thumb||"")||(n.section==="studio"||(n.tags||[]).includes("partners"))&&(n.tags||[]).length>0&&!(n.tags||[]).some(e=>fw.includes(e)),E0=n=>rg(ve,n).filter(Zo),Ys=n=>n.thumb||((n.media||[]).find(e=>e&&e.src&&Ir(e.src)==="image")||{}).src||"",yg=new Map,Bd=n=>Qc(n).filter(Ys);async function gh(n,e=qo(n)){let t=e.filter(Ys);if(!t.length)return null;let i=t.find(r=>r.id===yg.get(n.id)),s=i?[i]:t.map(r=>[Math.random(),r]).sort((r,o)=>r[0]-o[0]).map(r=>r[1]);for(let r of s){let o=await gs(Ys(r)).catch(()=>null);if(o)return yg.set(n.id,r.id),{im:o,project:r}}return null}function yh(n,e,t,i,s){Gi(n,e.im,0,0,t,i),n.fillStyle=`rgba(0,0,0,${s})`,n.fillRect(0,0,t,i)}function T0(n,e){let t=he(n.title).trim(),i=he(n.subtitle).trim();if(!t&&!i)return null;let s=ys(),r=s?15:Math.max(9,Math.min(13.5,e*.053)),o=s?11:Math.max(7.5,r*.74),a=Math.round(r*(s?.55:.75)),l=e-2*a,c=document.createElement("canvas").getContext("2d"),h=(f,M)=>{c.font=M;let b=f;if(c.measureText(b).width<=l)return[b];for(;b.length>4&&c.measureText(b+"\u2026").width>l;)b=b.slice(0,-1);return[b.trim()+"\u2026"]};c.font=vi(r);let u=s?t?h(t,vi(r)):[]:t?Kt(c,t,l).slice(0,2):[];c.font=Hi(o);let d=s?t?[]:h(i,Hi(o)):i?Kt(c,i,l).slice(0,2):[],p=Math.round(r*1.2),g=Math.round(o*1.25),v=Math.ceil(a+u.length*p+(d.length?3+d.length*g:0)+a-2);return{tex:Vi(e,v,f=>{f.fillStyle="rgba(0,0,0,.62)",f.fillRect(0,0,e,v),f.textBaseline="top";let M=a;f.fillStyle="#fff",f.font=vi(r),u.forEach(b=>{f.fillText(b,a,M),M+=p}),M+=3,f.font=Hi(o),d.forEach(b=>{f.fillText(b,a,M),M+=g})},3),bh:v,w:e}}async function pw(n,e,t){let i=n.thumb?await gs(n.thumb).catch(()=>null):null,s=n.thumbBack?await gs(n.thumbBack).catch(()=>null):null,r=i?null:await gh(n);await tr();let o=(c,h=!1)=>{if(i){Gi(c,i,0,0,e,t);return}r?yh(c,r,e,t,h?.22:.64):(c.fillStyle="#111",c.fillRect(0,0,e,t)),c.textBaseline="top",h&&(c.globalAlpha=.3);let u=ys(),d=u?14:16,p=u?[Qe(31),Qe(34),2]:[Qe(24),28,3],g=u?[Qe(20),Qe(23),1]:[Qe(13),16,2],v=u?Qe(15):10,m=u?Qe(13):9,f=u?26:20;c.fillStyle=Hn(),c.fillRect(d,u?13:18,18,2),c.fillStyle="#fff",c.font=vi(p[0]);let M=Kt(c,he(n.title),e-2*d).slice(0,p[2]),b=u?22:30;M.forEach((P,C)=>c.fillText(P,d,b+C*p[1])),c.font=Hi(g[0]),Kt(c,he(n.subtitle),e-2*d).slice(0,u&&M.length<2?2:g[2]).forEach((P,C)=>c.fillText(P,d,b+8+M.length*p[1]+C*g[1]));let I=r?Pg(r.project,r.project.media[0]&&r.project.media[0].credit):Pg(n,n.media[0]&&n.media[0].credit);if(c.font=`600 ${v}px ${en}`,c.fillText([n.date,he(n.place)].filter(Boolean).join("  \xB7  ").toUpperCase(),d,t-(I?f+v+6:v+12)),I){c.font=`${m}px ${en}`;let P=I;for(;c.measureText(P).width>e-2*d&&P.length>4;)P=P.slice(0,-2)+"\u2026";c.fillStyle="rgba(255,255,255,.5)",c.fillRect(d,t-f,e-2*d,.6),c.fillStyle="#fff",c.textBaseline="middle",c.fillText(P,d,t-f/2)}c.globalAlpha=1},a=(r?Vi:Gn)(e,t,o,2),l=s?Gn(e,t,c=>Gi(c,s,0,0,e,t),2):r?Vi(e,t,ka(e,c=>o(c,!0)),2):Gn(e,t,S0(o),1.5);return[a,l,i?T0(n,e):null]}async function mw(n,e,t){let i=n.thumb?await gs(n.thumb).catch(()=>null):null,s=n.thumbBack?await gs(n.thumbBack).catch(()=>null):null,r=i||Uo(n)?null:await gh(n,Bd(n));await tr();let o=(l,c=!1)=>{if(Uo(n)){if(l.fillStyle="#fff",l.fillRect(0,0,e,t),!i){l.fillStyle="#141414",l.textAlign="center",l.textBaseline="middle";let g=ys()?1.5:1;l.font=`600 ${Math.round(t*.13*g)}px ${en}`;let v=Kt(l,he(n.title),e*(g>1?.9:.76)).slice(0,3);v.forEach((m,f)=>l.fillText(m,e/2,t/2+(f-(v.length-1)/2)*t*.16*g)),Kc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}let h=e*.1,u=Math.min((e-2*h)/i.naturalWidth,(t-2*h)/i.naturalHeight),d=i.naturalWidth*u,p=i.naturalHeight*u;l.drawImage(i,(e-d)/2,(t-p)/2,d,p),Kc()&&(l.globalCompositeOperation="difference",l.fillStyle="#fff",l.fillRect(0,0,e,t),l.globalCompositeOperation="source-over");return}if(i){Gi(l,i,0,0,e,t);return}r?yh(l,r,e,t,c?.22:.42):(l.fillStyle="#1b1b1b",l.fillRect(0,0,e,t)),c&&(l.globalAlpha=.35),l.fillStyle="#fff",l.font=Hi(Math.round(t*.42*uf)),l.textAlign="center",l.textBaseline="middle",l.fillText(Pa(he(n.title)),e/2,t*.45),l.fillStyle=Hn(),l.fillRect(e/2-8,t*.78,16,1.5),l.globalAlpha=1},a=s?Gn(e,t,l=>Gi(l,s,0,0,e,t),3):r?Vi(e,t,ka(e,l=>o(l,!0)),2):Gn(e,t,S0(o),2);return[(r?Vi:Gn)(e,t,o,3),a,i||r||Uo(n)?T0(n,e):null]}async function gw(n,e,t){let i=await gh(n);if(i)return yw(n,e,t,i);let s=n.thumb?await gs(n.thumb).catch(()=>null):null;await tr();let r=he(n.title).trim(),o=ys(),a=Qe(o?30:21),l=o?Qe(32):22,c=o?2:3,h=s?72:18,u=e-h-14,d=Gn(e,t,g=>{g.fillStyle="#333",g.fillRect(0,0,e,t),s?Gi(g,s,13,12.75,53,53):(g.fillStyle=Hn(),g.fillRect(18,14,14,2)),g.fillStyle="#fff",g.font=vi(a),g.textBaseline="top",Kt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?12:20)+m*l))}),p=Gn(e,t,ka(e,g=>{g.fillStyle="rgba(255,255,255,.7)",g.fillRect(0,0,e,t),g.fillStyle="#c4c4c4",g.font=vi(a),g.textBaseline="top",Kt(g,r,u).slice(0,c).forEach((v,m)=>g.fillText(v,h,(s?9:17)+m*l))}));return[d,p]}async function yw(n,e,t,i){await tr();let s=he(n.title).trim(),r=e-32,o=ys(),a=Qe(o?30:21),l=o?Qe(32):22,c=h=>u=>{yh(u,i,e,t,h?.2:o?.7:.62),h&&(u.globalAlpha=.32),u.fillStyle=Hn(),u.fillRect(18,14,14,2),u.fillStyle="#fff",u.font=vi(a),u.textBaseline="top",Kt(u,s,r).slice(0,o?2:3).forEach((d,p)=>u.fillText(d,18,20+p*l)),u.globalAlpha=1};return[Vi(e,t,c(!1),2),Vi(e,t,ka(e,c(!0)),2)]}async function vw(n,e,t){let i=n.thumb?await gs(n.thumb).catch(()=>null):null;await tr();let r=Gn(e,t,o=>{if(i){o.fillStyle="#fff",o.fillRect(0,0,e,t),Gi(o,i,0,0,e,t);return}o.fillStyle="#fff",o.fillRect(0,0,e,t),o.fillStyle="#111",o.beginPath(),o.arc(e/2,t/2-8,34,0,Math.PI*2),o.fill(),o.fillStyle=Hn(),o.beginPath(),o.arc(e/2,t/2-8,9,0,Math.PI*2),o.fill(),o.fillStyle="#333",o.font=`${Qe(12)}px ${ph}`,o.textAlign="center",o.textBaseline="top",o.fillText(he(n.place)||n.location&&n.location.city||"",e/2,t-26)},2);return[r,r]}var _w={image:pw,portrait:mw,text:gw,place:vw};async function xw(n,e,t){let i=n.thumb?await gs(n.thumb).catch(()=>null):null,s=i?{im:i}:await gh(n);await tr();let r=he(n.title).trim(),o=(he(n.subtitle).trim()||wr(he(n.body)).join(" ")).replace(/\s+/g," ").trim(),a=t<110,l=ys(),c=s&&!l?Math.round(a?t*1.15:Math.min(e*.36,t*.8)):0,h=14,u=e-c-h-12,[d,p,g,v]=l?a?[28,31,0,1]:[36,40,0,1]:a?[15,18,9.5,12]:[17,20,10.5,13.5],m=(P,C)=>{P.globalAlpha=C,P.textBaseline="top";let D=e-h-12;P.fillStyle=Hn(),P.fillRect(h,a?9:13,14,2),P.fillStyle="#fff",P.font=vi(Qe(d));let z=a?16:22;Kt(P,r,D).slice(0,l?3:2).forEach(S=>{P.fillText(S,h,z),z+=Qe(p)}),P.globalAlpha=1},f=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Gi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.18)",P.fillRect(0,0,e,t)),m(P,.38)},M=P=>{let C=P.createLinearGradient(0,0,0,t);C.addColorStop(0,"rgba(0,0,0,.7)"),C.addColorStop(1,"rgba(0,0,0,.3)"),P.fillStyle=C,P.fillRect(0,0,e,t),m(P,1)},b=P=>{P.fillStyle="#111",P.fillRect(0,0,e,t),s&&(Gi(P,s.im,0,0,e,t),P.fillStyle="rgba(0,0,0,.22)",P.fillRect(0,0,e,t));let C=P.createLinearGradient(0,t*.3,0,t);C.addColorStop(0,"rgba(0,0,0,0)"),C.addColorStop(1,"rgba(0,0,0,.82)"),P.fillStyle=C,P.fillRect(0,t*.3,e,t*.7);let D=Math.round(e*.07),z=e-2*D,S=qo(n).length;P.textBaseline="top",P.fillStyle="#fff",S&&(P.font=`600 ${Qe(11)}px ${en}`,P.fillText(`${S} ${xe("nProjects")}`.toUpperCase(),D,D));let w=he(n.subtitle).trim();P.font=`${Qe(11.5)}px ${en}`;let B=w?Kt(P,w,z).slice(0,2):[],te=t-D-B.length*Qe(14);B.forEach((k,W)=>P.fillText(k,D,te+W*Qe(14))),P.font=Hi(Qe(26));let le=Kt(P,r,z).slice(0,2);te-=(B.length?Qe(6):0)+le.length*Qe(25),le.forEach((k,W)=>P.fillText(k,D,te+W*Qe(25)))};return[(s?Vi:Gn)(e,t,(P=>C=>{if(l&&!P){b(C);return}C.fillStyle="#111",C.fillRect(0,0,e,t),s&&l&&!P&&yh(C,s,e,t,.6),s&&!l&&Gi(C,s.im,e-c,0,c,t),C.textBaseline="top",C.fillStyle=Hn(),C.fillRect(h,a?9:13,14,2),C.fillStyle="#fff",C.font=vi(Qe(d));let D=Kt(C,r,u).slice(0,l?3:2),z=a?16:22;D.forEach(B=>{C.fillText(B,h,z),z+=Qe(p)}),z+=a?2:5,C.font=Hi(Qe(g));let S=l?0:Math.max(0,Math.floor((t-z-8)/Qe(v))),w=Kt(C,o,u);if(w.length>S&&(w=w.slice(0,S),S)){let B=w[S-1];for(;B&&C.measureText(B+"\u2026").width>u;)B=B.replace(/\s*\S+$/,"");w[S-1]=B+"\u2026"}w.forEach(B=>{C.fillText(B,h,z),z+=Qe(v)}),C.globalAlpha=1})(!1),2),(s?Vi:Gn)(e,t,ka(e,f),2),null,(s?Vi:Gn)(e,t,ka(e,M),2)]}function Uc(n,e){return tr().then(()=>e==="place"?Gn(380,300,t=>{let r=Y0(Mr(he(n.body))),o=(c,h)=>{t.font=h;let u=c;for(;u&&t.measureText(u).width>320;)u=u.slice(0,-2).trim()+"\u2026";return u};t.fillStyle="#000",t.fillRect(0,0,380,300),t.textBaseline="top",t.fillStyle=Hn(),t.fillRect(30,24,16,2);let a=he(n.title).trim();a&&!/[.!?]$/.test(a)&&(a+="."),t.fillStyle="#fff",t.font=vi(Qe(40));let l=36;if(Kt(t,a,320).slice(0,1).forEach(c=>{t.fillText(c,30,l),l+=Qe(44)}),t.font=Hi(Qe(17)),Kt(t,he(n.subtitle),320).slice(0,2).forEach(c=>{t.fillText(c,30,l),l+=Qe(21)}),l=Math.max(l+16,150),!r.ok){t.font=`13px ${en}`,wr(he(n.body)).slice(0,5).forEach(c=>{t.fillText(o(c,`13px ${en}`),30,l),l+=19});return}r.mail[0]&&(t.fillStyle=Hn(),t.fillText(o(r.mail[0],`600 16px ${en}`),30,l),l+=24),t.fillStyle="#fff",r.tel[0]&&(t.fillText(o(r.tel[0],`15px ${en}`),30,l),l+=26),t.fillStyle="rgba(255,255,255,.62)",(r.addr[0]||"").split(/\s+[.·•|]\s+/).slice(0,3).forEach(c=>{l<282&&(t.fillText(o(c,`12.5px ${en}`),30,l),l+=17)})},1.5):ys()?Gn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(25));let i=Kt(t,he(n.title)+".",172).slice(0,2);i.forEach((d,p)=>t.fillText(d,14,12+p*Qe(27))),t.font=`${Qe(13)}px ${en}`;let s=Qc(n).map(d=>he(d.title).trim()).filter(Boolean),r=s.length?Kt(t,s.join("  \xB7  "),172).slice(0,2):[],o=he(n.place)?168:188,a=o-r.length*16-16,l=18+i.length*Qe(27);t.font=Hi(Qe(17));let c=(r.length?a-6:o)-Qe(20),h=Kt(t,he(n.subtitle),172),u=[];for(let d of h){if(l>c)break;u.push(d),l+=Qe(20)}if(u.length<h.length&&u.length){let d=u[u.length-1];for(;d&&t.measureText(d+"\u2026").width>172;)d=d.replace(/\s*\S+$/,"");u[u.length-1]=d+"\u2026"}u.forEach((d,p)=>t.fillText(d,14,18+i.length*Qe(27)+p*Qe(20))),r.length&&(t.font=`600 ${Qe(11)}px ${en}`,t.fillText(xe("together").toUpperCase(),14,a),t.font=`${Qe(13)}px ${en}`,r.forEach((d,p)=>t.fillText(d,14,a+16+p*16))),he(n.place)&&(t.font=`600 ${Qe(13)}px ${en}`,t.fillText(he(n.place).toUpperCase(),14,176))},2.5):Gn(200,200,t=>{t.fillStyle="#000",t.fillRect(0,0,200,200),t.textBaseline="top",t.fillStyle="#fff",t.font=vi(Qe(20));let i=Kt(t,he(n.title)+".",166).slice(0,2);i.forEach((u,d)=>t.fillText(u,18,14+d*22));let s=20+i.length*22;t.font=`10px ${en}`;let r=Qc(n).map(u=>he(u.title).trim()).filter(Boolean),o=r.length?Kt(t,r.join("  \xB7  "),166).slice(0,3):[],a=(he(n.place)?174:188)-o.length*13-13;t.font=Hi(Qe(15));let l=(o.length?a-4:168)-18,c=[];he(n.subtitle).split(/(?<=\.)\s+/).forEach(u=>Kt(t,u,166).forEach(d=>c.push(d)));let h=[];for(let u of c){if(s>l)break;h.push(u),s+=18}if(h.length<c.length&&h.length){let u=h[h.length-1];for(;u&&t.measureText(u+"\u2026").width>166;)u=u.replace(/\s*\S+$/,"");h[h.length-1]=u+"\u2026"}h.forEach((u,d)=>t.fillText(u,19,20+i.length*22+d*18)),t.font=`11px ${en}`,wr(he(n.body)).join(" ").split(/\s+/).length>1&&Kt(t,wr(he(n.body)).join(" "),166).slice(0,Math.max(0,Math.floor(((o.length?a-6:176)-s)/14))).forEach(u=>{t.fillText(u,19,s+4),s+=14}),o.length&&(t.font=`600 8px ${en}`,t.fillText(xe("together").toUpperCase(),19,a),t.font=`10px ${en}`,o.forEach((u,d)=>t.fillText(u,19,a+13+d*13))),he(n.place)&&(t.font=`600 11px ${en}`,t.fillText(he(n.place).toUpperCase(),19,180))}))}function bw(n,e){let s=document.createElement("canvas"),r=s.getContext("2d");r.font=`${e?"bold ":""}20px ${en}`;let o=Math.ceil(r.measureText(n).width)+2*7,a=30;s.width=o*2,s.height=a*2,r.scale(2,2),r.fillStyle=e?"#111":"rgba(255,255,255,.88)",r.fillRect(0,0,o,a),r.font=`${e?"bold ":""}20px ${en}`,r.textBaseline="middle",r.fillStyle=e?"#fff":"#333",r.fillText(n,7,a/2+1);let l=new mo(new ya({map:lf(new _a(s)),transparent:!0,depthTest:!1}));l.center.set(.5,0);let c=20;return l.scale.set(c*o/a,c,1),l.renderOrder=5,l}var Bi=document.createElement("div");Bi.id="net-tip";Bi.className="ui";Bi.hidden=!0;document.body.appendChild(Bi);function A0(n,e,t){Bi.innerHTML=`<b>${_e(n.city||"")}</b>${n.titles.map(s=>`<span>${_e(s)}</span>`).join("")}`,Bi.hidden=!1;let i=Bi.getBoundingClientRect();Bi.style.left=Math.min(e+14,Ft-i.width-10)+"px",Bi.style.top=Math.max(10,t-i.height-12)+"px"}function vh(){Bi.hidden=!0}function Mw(n){n.updateMatrixWorld(!0);let e=[],t=new U,i=n.matrixWorld.clone().invert();if(n.traverse(h=>{if(!h.isMesh||!h.geometry||!h.geometry.attributes.position)return;let u=h.geometry;u.computeBoundingBox();let d=u.boundingBox.getSize(new U);if(Math.min(d.x,d.y,d.z)<1e-6*Math.max(d.x,d.y,d.z,1e-9))return;let p=u.attributes.position,g=u.index,v=g?g.count:p.count,m=new Map,f=Math.max(d.x,d.y,d.z)/2e3;for(let b=0;b<v;b++){let I=g?g.getX(b):b,P=Math.round(p.getX(I)/f)+","+Math.round(p.getY(I)/f)+","+Math.round(p.getZ(I)/f),C=m.get(P);C||m.set(P,C={j:I,n:0}),C.n++}let M=new at().multiplyMatrices(i,h.matrixWorld);m.forEach(b=>{t.fromBufferAttribute(p,b.j).applyMatrix4(M),e.push({p:t.clone(),n:b.n})})}),!e.length)return null;let s=Math.max(...e.map(h=>h.n));if(s<8)return null;let r=new vn;e.forEach(h=>r.expandByPoint(h.p));let o=r.getSize(new U).length()*.09,a=[];e.filter(h=>h.n>=s*.8).forEach(h=>{let u=a.find(d=>d.c.distanceTo(h.p)<o);u||a.push(u={s:new U,w:0,c:h.p.clone()}),u.s.addScaledVector(h.p,h.n),u.w+=h.n,u.c.copy(u.s).divideScalar(u.w)});let l=Math.max(...a.map(h=>h.w)),c=a.filter(h=>h.w>=l*.3).map(h=>h.c);return c.length?c:null}var Fd=class{constructor(e,t){this.def=e,this.idTable=t,this.container=new Sn,this.p={x:0,y:0,z:0},this.blockers=[]}async load(e){let t=ve.models.find(h=>h.id===this.def.model)||ve.models[0];if(!t)return;let i=await nw(t.file),s=t.file.slice(0,t.file.lastIndexOf("/")+1),o=e.parse(i,s).scene,a=new Sn;a.add(o),o.traverse(h=>{if(!h.isMesh)return;let u=d=>{let p=d.map||d.emissiveMap||null;return p?new an({map:p}):t.untextured==="white"?new gr({color:15921906}):t.untextured==="black"?new gr({color:2236962}):new an({color:oe.locatorColor,wireframe:!0})};h.material=Array.isArray(h.material)?h.material.map(u):u(h.material),this.blockers.push(h)});let l=Math.max(.05,Math.min(5,(+t.scale||100)/100));if(t.scaleMode==="fit"){a.updateMatrixWorld(!0);let h=new vn().setFromObject(a),u=h.getSize(new U),d=(t.height||420)/Math.max(u.y,1e-6)*l;a.scale.setScalar(d),a.updateMatrixWorld(!0);let p=new vn().setFromObject(a),g=p.getCenter(new U);a.position.set(-g.x,-p.min.y,-g.z)}else{o.scale.setScalar(100),a.updateMatrixWorld(!0);let h=new vn().setFromObject(a);h.max.y-h.min.y>oe.object3DMaxHeight&&a.scale.setScalar(oe.object3DMaxHeight/(h.max.y-h.min.y)),a.scale.multiplyScalar(l)}let c=new Sn;c.rotation.y=(t.rotationY||0)*zi,c.add(a),this.container.add(c);try{this.anchors=Mw(this.container)}catch{this.anchors=null}}place(e){this.p.x=e*5*oe.object3DDistance,this.p.z=(Math.pow(-1,e+1)-1)*e*oe.object3DDistance,this.container.position.copy(Dd(this.p.x,0,this.p.z))}};function C0(n,e){let t=new zs;t.setPositions(n);let i=new Sa(t,e);return i.computeLineDistances(),i}var zd=class{constructor(e,t,i,s){this.view=e,this.id_=s,this.width=t,this.height=i,this.thumb={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,scale:1},this.p2={x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0},this.group=new Sn,this.group.rotation.order="YXZ",this.meshes=[],this.ready=!1}build(e,t,i=null,s=null){let r=new os(this.width,this.height);if(this.setBand(i),s){let h=new Gt(r,new an({map:s,side:yn,transparent:!0,opacity:0,depthWrite:!1}));h.position.z=-.4,h.renderOrder=1,h.visible=!1,h.raycast=()=>{},this.bhi={mesh:h,k:0,drawn:-1},this.group.add(h)}let o=new Gt(r,new an({map:e,side:Qn})),a=new Gt(r,new an({map:t,side:yn}));o.userData={post:this,face:"front"},a.userData={post:this,face:"back"},this.width+=oe.planeFrameDistance,this.height+=oe.planeFrameDistance;let l=this.width/2,c=this.height/2;this.frame=C0([-l,-c,0,l,-c,0,-l,-c,0,-l,c,0,l,-c,0,l,c,0,-l,c,0,l,c,0],Od),this.group.add(o,a,this.frame),this.meshes.push(o,a),this.ready=!0}setPosition(e,t,i,s,r=0,o=0){Object.assign(this.p2,{x:e,y:t,z:i,rotY:s,rotX:r,rotZ:o})}apply(){let e=this.thumb,t=this.group;t.position.set(...Gs(e.x,e.y,e.z)),t.rotation.y=-(e.rotY+180)*zi,t.rotation.x=-e.rotX*zi,t.rotation.z=e.rotZ*zi,t.scale.setScalar(Math.max(1e-4,e.scale)),this.band&&this.drawBand();let i=this.bhi;i&&i.k!==i.drawn&&(i.drawn=i.k,i.mesh.material.opacity=Math.max(0,Math.min(1,i.k)),i.mesh.visible=i.k>.002)}hoverBack(e){let t=this.bhi;t&&cn(t,e?.6:.45,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}selectIt(){this.frame&&(this.frame.material=p0,Vo(.8,()=>{this.frame&&(this.frame.material=Od)}))}turnAround(e,t){let i={x:"rotX",y:"rotY",z:"rotZ"}[e];Object.assign(this.thumb,{rotX:this.p2.rotX,rotY:this.p2.rotY,rotZ:this.p2.rotZ}),cn(this.thumb,oe.tween,{[i]:this.p2[i]+t},{ease:"quartOut"})}moveToCamera(e,t=0){Cn(this.thumb);let i=vs(),s={x:-i*Math.sin(H.degreeCamera),z:-i*Math.cos(H.degreeCamera)},r=this.p2,o=r.x-s.x,a=r.z-s.z,l=Math.hypot(o,a)||1;return cn(this.thumb,t,{x:s.x+o*e/l,y:r.y,z:s.z+a*e/l,rotY:r.rotY+720},{ease:"quartOut"}),{cl:s,dir:{x:o/l,z:a/l}}}moveBack(e=0){Cn(this.thumb);let t=this.p2;cn(this.thumb,e,{x:t.x,y:t.y,z:t.z,rotX:t.rotX,rotY:t.rotY,rotZ:t.rotZ},{ease:"quartOut"})}jump(e,t,i){cn(this.thumb,oe.tween/2,{x:e,y:t,z:i},{ease:"quartOut",onComplete:()=>cn(this.thumb,oe.tween/2,{x:this.p2.x,y:this.p2.y,z:this.p2.z},{ease:"quartOut"})})}setBand(e){if(this.band&&(this.group.remove(this.band.mesh),this.band.mesh.geometry.dispose(),this.band.mesh.material.map.dispose(),this.band.mesh.material.dispose(),Cn(this.band)),this.band=null,!e)return;let t=this.cardW||this.width,i=this.cardH||this.height;this.cardW=t,this.cardH=i;let s=e.bh*t/e.w,r=new Gt(new os(t,s),new an({map:e.tex,transparent:!0,depthWrite:!1,side:Qn}));r.position.z=.4,r.renderOrder=1,r.visible=!1,r.raycast=()=>{},this.band={mesh:r,bh:s,w:t,h:i,k:0,drawn:-1},this.group.add(r)}hover(e){let t=this.band;t&&cn(t,e?.85:.5,{k:e?1:0},{ease:e?"expoOut":"quartOut"})}drawBand(){let e=this.band;if(!e||e.k===e.drawn)return;e.drawn=e.k;let t=Math.max(0,Math.min(1,e.k));e.mesh.visible=t>.002;let i=e.mesh.geometry.attributes.position,s=e.mesh.geometry.attributes.uv,r=-e.h/2,o=r+t*e.bh;i.setY(0,o),i.setY(1,o),i.setY(2,r),i.setY(3,r),s.setY(0,1),s.setY(1,1),s.setY(2,1-t),s.setY(3,1-t),i.needsUpdate=!0,s.needsUpdate=!0}dispose(){this.setBand(null),Cn(this.thumb),this.bhi&&Cn(this.bhi),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&!of.includes(e.material)&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};function pd(n,e){let t=n.postViews[e];if(!t)return!1;let i=t.p2.rotY*zi;i===0&&(i=2*Math.PI);let s=(i-H.degreeCamera)%(2*Math.PI);return s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),H.selected=e,H.cameraY=t.p2.y,H.degreeCamera+=s,t.selectIt(),!0}function md(n,e,t){H.degreeCamera%=2*Math.PI,H.actualDeg%=2*Math.PI;let i=n.postViews[e];i&&(H.selected=e,H.degreeCamera=Math.PI,i.ready&&(H.cameraY=i.p2.y,i.selectIt(),t(i)))}var gd=(n,e,t,i,s="y")=>n.postViews.forEach((r,o)=>{if(!r.ready||Oa(r.thumb))return;let a=r.thumb,l=Math.pow(-1,o)*e*(Math.random()*2+1);a[s]-=(a[s]-r.p2[s]+l)*_n(2*i),s==="y"&&(a.rotX-=(a.rotX-r.p2.rotX-t)*_n(2*i))}),eh={carousel:{preset(n){n.angle=-2*Math.PI/Math.max(1,n.n),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position:(n,e,t)=>({x:oe.planeDistance*Math.sin(n.angle*t+2*Math.PI),y:Math.pow(-1,t+1)*Math.random()*oe.planeDisOrder+oe.planeDistance,z:oe.planeDistance*Math.cos(n.angle*t+2*Math.PI),rotY:n.angle*t/zi+540}),keep:!0,open:"twoStep",lineEnd:n=>[n.x/3,n.y/3,n.z/3],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>pd(n,e),move:(n,e,t,i)=>gd(n,e,t,i)},arc:{preset(n){n.angle=Math.PI/(n.n+1)},position(n,e,t){let i=n.angle*(t+1),s=oe;return{x:(s.planeDistance-Math.abs(i-Math.PI/2)*120+e.width+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.cos(i),y:(s.planeDistance+e.height+Math.pow(-1,t+1)*s.planeDisOrder/(Math.random()+1))*Math.sin(i),z:Math.pow(-1,Math.round(Math.random()*5))*s.planeDisOrder*Math.random(),rotY:180}},open:"oneStep",focus:(n,e)=>md(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(i,t.p2.y*i/(t.p2.x||1e-6),t.p2.z),t.turnAround("y",360)}),move:(n,e,t,i)=>gd(n,e,t,i)},fan:{preset(n){n.angle=Math.PI/(Math.ceil(n.n/2)+1),n.container.position.y+=250*(n.h/78>1.6?.4:1),n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.n,s=Math.ceil(i/2),r=oe,o=g=>{let v=n.angle*(g+1);return v-Math.cos(v)*n.angle/2},a=t,l;t+1>s?(a=2*Math.round(i/2)-t-1,l=Math.pow(-1,a)):l=Math.pow(-1,t+1);let c=r.planeDistance*.7+e.width+l*r.planeDisOrder/(Math.random()+1)-Math.abs(o(a)-Math.PI/2)*120,h=t+1>s?2*Math.round(i/2)-t-1:t,u=r.planeDistance*.7+e.height+Math.pow(-1,h)*r.planeDisOrder/(Math.random()+1)+Math.abs(o(h)-Math.PI/2)*120,d=t+1>s?-1:1,p=t%2===1?r.planeDistance*.07:-r.planeDistance*.07;return{x:c*Math.cos(o(a)),y:u*Math.sin(o(h)),z:d*r.planeDistance*.3+Math.pow(-1,Math.round(Math.random()*5))*r.planeDisOrder*Math.random()+p,rotY:t+1>s?0:180}},open:"twoStep",lineEnd:n=>[n.x/5,n.y/5,n.z/5],lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>{pd(n,e)&&n.postViews[e].turnAround("x",720)},move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready)return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()*2+1);s.y-=(s.y-t.p2.y+r)*_n(2*oe.cameraEaseSpeed),s.z-=(s.z-t.p2.z+r)*_n(2*oe.cameraEaseSpeed)})}},map:{offsets:[[250,200],[0,-50],[400,0],[-600,-100],[-500,200]],preset(n){n.angle=Math.PI/(n.n+1)},coords(n,e){return Vs(n.posts[e].location)||[(e%5-2)*160,(e%3-1)*120]},offset(n){return this.offsets[n]||[(n%2?1:-1)*(300+40*n),(n%3-1)*160]},position(n,e,t){let i=this.coords(n,t),s=this.offset(t),r=_h(n.def);return{x:i[0]+s[0],y:.8*(oe.planeDistance+e.height+Math.pow(-1,t+1)*oe.planeDisOrder/(Math.random()+1))*Math.sin(n.angle*(t+1))*Math.min(1,.2+r),z:i[1]+s[1],rotY:180}},open:"oneStep",lineEnd(n,e,t){let i=this.coords(e,t);return[i[0],50,i[1]]},lineStart:(n,e)=>[e.x,e.y-n.height/2,e.z],focus:(n,e)=>md(n,e,t=>{let i=t.p2.x*(t.width/2)/Math.hypot(t.p2.x,t.p2.y)+t.p2.x;t.jump(t.p2.x,t.p2.y*i/(t.p2.x||1e-6),t.p2.z)}),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Oa(t.thumb))return;let s=t.thumb,r=-Math.abs(e*(Math.random()*2+1))/2;s.x-=(s.x-t.p2.x+r)*_n(2*oe.cameraEaseSpeed);let o=n.infos[i];o&&(o.p.x=t.p2.x-t.width-20-(s.x-t.p2.x))})}},spiral:{preset(n){n.angle=-2*Math.PI/7,n.postViews.forEach((e,t)=>{let i=this.position(n,e,t);e.setPosition(i.x,i.y,i.z,i.rotY)})},position(n,e,t){let i=n.angle*t,s=Math.max(e.height*.55,620/Math.max(1,n.n-1)),r=oe.planeDistance+40;return{x:r*Math.sin(i+2*Math.PI),y:140+t*Math.min(s,160)+Math.random()*oe.planeDisOrder*.2,z:r*Math.cos(i+2*Math.PI),rotY:i/zi+540}},keep:!0,open:"twoStep",lineEnd:n=>[0,n.y,0],lineStart:(n,e)=>[e.x,e.y,e.z],focus:(n,e)=>pd(n,e),move:(n,e,t,i)=>gd(n,e,t,i)},wall:{preset(n){n.cols=Math.max(1,Math.ceil(Math.sqrt(n.n*(n.w>n.h?1.2:2.2)))),n.rows=Math.ceil(n.n/n.cols)},position(n,e,t){let i=t%n.cols,s=Math.floor(t/n.cols),r=e.width+26,o=e.height+26;return{x:(i-(n.cols-1)/2)*r,y:120+(n.rows-1-s)*o+e.height/2,z:-320+Math.pow(-1,t)*Math.random()*oe.planeDisOrder*.3,rotY:180}},open:"oneStep",focus:(n,e)=>md(n,e,t=>t.jump(t.p2.x,t.p2.y,t.p2.z+90)),move(n,e){n.postViews.forEach((t,i)=>{if(!t.ready||Oa(t.thumb))return;let s=t.thumb,r=Math.pow(-1,i)*e*(Math.random()+.5);s.z-=(s.z-t.p2.z+r)*_n(2*oe.cameraEaseSpeed)})}}},ww=["fan","arc","map"],vg=n=>mh()&&ww.includes(n.layout),df=()=>Ks.zoom*Ks.focus*Math.min(1,Ft/900);function R0(){let n=r=>{let o=document.getElementById(r);if(!o||o.hidden)return null;let a=o.getBoundingClientRect();return a.width&&a.height?a:null},t={l:12,t:12,r:Ft-12,b:Ut-12},i=["slogan","logo","reel-btn","lang-sq","about-btn"].map(n).filter(Boolean),s=["menu","langs","cats","kb"].map(n).filter(Boolean);return Ut>=Ft?(i.forEach(r=>{t.t=Math.max(t.t,r.bottom+8)}),s.forEach(r=>{t.b=Math.min(t.b,r.top-8)})):([n("slogan"),n("menu"),n("langs"),n("reel-btn"),n("lang-sq"),n("about-btn")].filter(Boolean).forEach(r=>{r.left<Ft/2&&(t.l=Math.max(t.l,r.right+10))}),[n("logo"),n("reel-btn")].filter(Boolean).forEach(r=>{r.left>Ft/2&&(t.r=Math.min(t.r,r.left-10))}),[n("cats"),n("kb")].filter(Boolean).forEach(r=>{r.left<t.r&&r.right>t.l&&(t.b=Math.min(t.b,r.top-8))})),t.r-t.l<120&&(t.l=12,t.r=Ft-12),t.b-t.t<120&&(t.t=12,t.b=Ut-12),t}function _g(n){let e=R0(),t=e.r-e.l,i=e.b-e.t,s=n.def.layout==="map"&&n.card==="place",r=n.w*n.k+oe.planeFrameDistance,o=n.h*n.k+oe.planeFrameDistance,a=s?1.5*r+102.5:r,l=s?Math.max(o,130):o,c=Math.round(Math.min(a,l)*.1)+6,h=null,u=Math.max(1,n.n);for(let g=1;g<=u;g++){let v=Math.ceil(u/g),m=g*a+(g-1)*c,f=v*l+(v-1)*c,M=Math.min(t/m,i/f);(!h||M>h.sc+1e-9)&&(h={cols:g,rows:v,gw:m,gh:f,sc:M})}let d=n.container.position.y-n.section.container.position.y,p=s?140:40;return{...h,sc:h.sc*.94,uw:a,uh:l,g:c,aw:t,ah:i,rk:[e.l,e.t,e.r,e.b].map(Math.round).join(),fx:(e.l+e.r)/2-Ft/2,fy:(e.t+e.b)/2-Ut/2,zg:200,gy:p+h.gh/2-d,yOff:d,dx:s?(r/2+102.5)/2:0}}var Sw=(n,e)=>{let t=n.grid,i=e%t.cols,s=Math.floor(e/t.cols);return{x:((Math.min(t.cols,n.n-s*t.cols)-1)/2-i)*(t.uw+t.g)+t.dx,y:t.gy+((t.rows-1)/2-s)*(t.uh+t.g),z:t.zg+Math.pow(-1,e)*Math.random()*oe.planeDisOrder*.1,rotY:180}},yd=2*Math.PI,ff=n=>n+(((Math.PI-n)%yd+yd+Math.PI)%yd-Math.PI);function xg(n){return{grid:!0,base:n,open:n.open,lineStart:n.lineStart,lineEnd:n.lineEnd&&n.gridLines!==!1?(e,t,i)=>n.lineEnd.call(n,e,t,i):void 0,preset(){},position:(e,t,i)=>Sw(e,i),focus(e,t){let i=e.postViews[t];if(!i||(H.selected=t,H.degreeCamera=ff(H.degreeCamera),H.cameraY=Ba(),!i.ready))return;i.selectIt(),i.jump(i.p2.x,i.p2.y,i.p2.z+70);let s=n.orig||n;s===eh.fan?i.turnAround("x",720):s===eh.arc&&i.turnAround("y",360)},move:(e,t,i,s)=>n.move.call(n,e,t,i,s)}}function Ew(n,e){let t=Object.create(n),i=[],s=new Map,r=()=>{let o=e.container.position.y-e.section.container.position.y;return e.section.anchors.map(a=>[-a.x,a.y-o,a.z])};return t.orig=n,t.gridLines=!1,t.addedLines=!n.lineEnd,t.lineStart=n.lineStart||((o,a)=>[a.x,a.y-o.height/2,a.z]),t.lineEnd=function(o,a,l){if(i[l]==null){let c=r(),h=[0,1,2].map(v=>c.reduce((m,f)=>m+f[v],0)/c.length),u=v=>{let m=[v[0]-h[0],v[1]-h[1],v[2]-h[2]],f=Math.hypot(...m)||1;return m.map(M=>M/f)},d=u([o.x,o.y,o.z]),p=c.map((v,m)=>{let f=u(v);return[m,f[0]*d[0]+f[1]*d[1]+f[2]*d[2]]}).sort((v,m)=>m[1]-v[1]),g=p.find(([v,m])=>!s.has(v)&&m>p[0][1]-.6);i[l]=(g||p[0])[0],s.set(i[l],l)}return r()[i[l]]},t}var bg=new U,Mg=new U,Hd=class{constructor(e){this.section=e,this.def=e.def,this.base=this.L=eh[this.def.layout]||eh.carousel,e.anchors&&(this.def.layout==="carousel"||this.def.layout==="arc"&&this.def.skills)&&(this.base=this.L=Ew(this.base,this)),this.card=this.def.card,this.posts=H.data.posts.slice(),this.n=this.posts.length,this.tex=this.def.skills?xw:_w[this.card],[this.w,this.h]=this.def.skills?this.card==="text"?To.text.size:To.image.size:To[this.card].size,this.k=Iw(this.def),this.container=new Sn,this.container.position.copy(e.container.position),Rn.add(this.container),this.postViews=this.posts.map((t,i)=>new zd(this,this.w*this.k,this.h*this.k,i)),this.lines=[],this.following=new Set,this.trail=new Set,this.infos=[],this.alive=!0,this.L.preset.call(this.L,this),vg(this.def)&&(this.grid=_g(this),this.L=this.gridL=xg(this.base)),this.def.layout==="map"&&this.def.network&&this.buildNetwork(),this.openPosts()}buildNetwork(){let e=new Set(Dt.map(f=>f.def.id)),t=new Map,i=(f,M,b)=>{if(!hd(f))return;let I=(+f.lat).toFixed(1)+","+(+f.lon).toFixed(1),P=t.get(I);P||t.set(I,P={loc:f,city:f.city||"",titles:[],base:!1}),M&&!P.titles.includes(M)&&P.titles.push(M),b&&(P.base=!0)};if(cd(ve,this.def.id).forEach(f=>i(f.location,he(f.title),!0)),ve.posts.forEach(f=>{f.published&&e.has(f.section)&&f.section!==this.def.id&&f.spots.forEach(M=>i(M,he(f.title)))}),!t.size)return;$c.color.set(Hn());let s=50,r=new Sn,o=[...t.values()],a=o.filter(f=>f.base),l=new hc(1,14,10),c={on:new an({color:Hn()}),base:new an({color:1118481})};this.net={group:r,mats:c,items:[],hits:[],start:ps+(oe.planeSpeed>0?.5:-60),dispose:[l,c.on,c.base]},o.forEach(f=>{f.xz=Vs(f.loc)}),o.forEach(f=>{f.from=f.base?null:a.length?a.map(M=>[M,Math.hypot(Vs(M.loc)[0]-f.xz[0],Vs(M.loc)[1]-f.xz[1])]).sort((M,b)=>M[1]-b[1])[0][0]:null,f.d=f.from?Math.hypot(Vs(f.from.loc)[0]-f.xz[0],Vs(f.from.loc)[1]-f.xz[1]):0}),o.sort((f,M)=>M.base-f.base||f.d-M.d);let h=70,u=null,d=-1;o.forEach(f=>{let M=o.filter(b=>Math.hypot(b.xz[0]-f.xz[0],b.xz[1]-f.xz[1])<h);M.length>d&&(d=M.length,u=M)});let p=u.reduce((f,M)=>f+M.xz[0],0)/u.length,g=u.reduce((f,M)=>f+M.xz[1],0)/u.length,v=new Qt;v.position.set(...Gs(p,s,g)),r.add(v),this.net.focus=v;let m=[];o.forEach((f,M)=>{let[b,I]=f.xz,P=f.base?0:.15+M*.07,C=new Gt(l,f.base?c.base:c.on);C.scale.setScalar(f.base?7:4+Math.min(3,f.titles.length)),C.position.set(...Gs(b,s,I)),r.add(C),C.userData={netNode:f},this.net.hits.push(C);let D=null,z=0;if(f.from){let[B,te]=Vs(f.from.loc),le=s+18+f.d*.32,k=2*le-s,W=(B+b)/2,F=(te+I)/2;z=Math.max(12,Math.min(48,Math.round(f.d/6)));let ie=J=>{let ee=1-J;return Gs(ee*ee*B+2*ee*J*W+J*J*b,ee*ee*s+2*ee*J*k+J*J*s,ee*ee*te+2*ee*J*F+J*J*I)},Y=[];for(let J=0;J<z;J++)Y.push(...ie(J/z),...ie((J+1)/z));let q=new zs;q.setPositions(Y),D=new Sa(q,$c),D.computeLineDistances(),q.instanceCount=0,r.add(D)}let S=null,w=1/0;if(f.city){let B=bw(f.city.toUpperCase()+(f.titles.length>1&&!f.base?" \xB7 "+f.titles.length:""),f.base),te=B.scale.x;for(let le of m){let k=Math.max(Math.abs(le[0]-b)/((le[3]+te)/2+6),Math.abs(le[1]-I)/24);k<le[2]&&(w=Math.min(w,k))}w>.06?(S=B,S.position.set(...Gs(b,s+9,I)),r.add(S),m.push([b,I,w,te])):(B.material.map.dispose(),B.material.dispose())}this.net.items.push({dot:C,arc:D,segs:z,label:S,thr:w,delay:P,base:f.base,ds:C.scale.x,ls:S?S.scale.clone():null,x:b,z:I})}),this.container.add(r)}async openPosts(){this.loading=!0;for(let e=0;e<this.n;e++){let t;try{t=await this.tex(this.posts[e],this.w,this.h)}catch{continue}if(!this.alive)return;if(this.postViews[e].build(t[0],t[1],t[2],t[3]),this.animeOpenPost(this.postViews[e],e),oe.planeSpeed>0){let i=ps+iw;for(;ps<i;)if(await new Promise(s=>requestAnimationFrame(s)),!this.alive)return}}this.loading=!1}animeOpenPost(e,t){let i=this.L;if(!i.keep){let l=i.position.call(i,this,e,t);e.setPosition(l.x,l.y,l.z,l.rotY)}let s=e.p2;Object.assign(e.thumb,{x:s.x/2,y:10,z:s.z/2,rotY:s.rotY,rotX:90-2*360,rotZ:0,scale:.5});let r=2*oe.planeSpeed,o,a=()=>{--o<=0&&(this.following.delete(e),this.trail.delete(e),i.lineEnd&&this.followLine(e,t))};i.open==="twoStep"?(o=2,cn(e.thumb,r,{y:s.y,rotX:0},{delay:oe.planeSpeed/3,ease:"expoOut",onComplete:a}),cn(e.thumb,r,{x:s.x,z:s.z,rotY:s.rotY,scale:1},{ease:"circOut",onComplete:a})):(o=1,cn(e.thumb,r,{x:s.x,y:s.y,z:s.z,rotY:s.rotY,rotX:0,scale:1},{ease:"circOut",onComplete:a})),e.apply(),this.container.add(e.group),i.lineEnd&&((i.addedLines?this.trail:this.following).add(e),this.followLine(e,t)),this.def.layout==="map"&&this.card==="place"&&this.openInfo(e,t,r)}followLine(e,t){if(!this.L.lineEnd)return;let i=this.L.lineStart(e,e.thumb),s=this.L.lineEnd.call(this.L,e.p2,this,t),r=[...Gs(...i),...Gs(...s)],o=this.lines[t];o?(o.geometry.setPositions(r),o.visible=!0):(o=this.lines[t]=C0(r,f0),this.container.add(o))}async openInfo(e,t,i){let s=await Uc(this.posts[t],"place");if(!this.alive)return;let r=new Gt(new os(165,130),new an({map:s,side:jn}));r.userData={post:e,face:"front"},r.visible=!1;let o={mesh:r,p:{x:e.p2.x-e.width-20-165,y:e.p2.y,z:e.p2.z,rotY:180}};this.infos[t]=o,e.meshes.push(r),this.container.add(r),cn(o.p,oe.tween/4,{x:e.p2.x-e.width-20},{delay:i,ease:"quartOut"}),Vo(i,()=>{r.visible=!0})}async openPost3D(){let e=H.selected,t=this.postViews[e];if(!t||!t.ready)return;this.L.grid?this.gridToCamera(t,oe.tween):t.moveToCamera(60,oe.tween),this.focusInfo||(this.focusInfo={mesh:new Gt(new os(90,90),new an({side:jn})),p:{x:0,y:0,z:0,rotY:150}},this.container.add(this.focusInfo.mesh));let i=this.focusInfo;i.mesh.visible=!1;let s=await Uc(this.posts[e],"person");if(!this.alive)return;i.mesh.material.map&&i.mesh.material.map.dispose(),i.mesh.material.map=s,i.mesh.material.needsUpdate=!0;let r=this.h*this.k/90;i.mesh.scale.setScalar(r),Vo(oe.tween,()=>{!H.postOpen||H.selected!==e||(i.target=t,i.k=0,i.mesh.visible=!0,Cn(i),cn(i,oe.tween/4,{k:1},{ease:"quartOut"}))})}closePost3D(){let e=this.postViews[H.selected];e&&e.moveBack(oe.tween/2),this.focusInfo&&(Cn(this.focusInfo),this.focusInfo.target=null,this.focusInfo.mesh.visible=!1)}movePosts(e,t,i){this.L.move.call(this.L,this,e,t,i)}relayout(){let e=vg(this.def),t=!!this.L.grid;if(!e&&!t)return!1;let i=e?_g(this):null,s=this.grid,r=e&&t&&s&&["cols","rows","uw","uh","gy"].every(l=>Math.abs(i[l]-s[l])<.5);if(this.grid=i||s,this.L=e?this.gridL||(this.gridL=xg(this.base)):this.base,this.L.lineEnd||this.lines.forEach(l=>{l&&(l.visible=!1)}),r)return!0;let o=oe.tween*1.2,a=H.postOpen&&Ch()==="focus3d"?H.selected:-1;return this.postViews.forEach((l,c)=>{if(!l.ready)return;let h=this.L.position.call(this.L,this,l,c);if(l.setPosition(h.x,h.y,h.z,h.rotY),c===a)return;let u=this.following.has(l);Cn(l.thumb),this.following.add(l),cn(l.thumb,o,{x:h.x,y:h.y,z:h.z,rotX:0,rotY:h.rotY,rotZ:0,scale:1},{ease:"quartOut",onComplete:()=>{u||this.following.delete(l),this.L.lineEnd&&this.followLine(l,c)}});let d=this.infos[c];d&&(Cn(d.p),cn(d.p,o,{x:h.x-l.width-20,y:h.y,z:h.z},{ease:"quartOut"}))}),!0}gridToCamera(e,t){let i=this.grid,s=Ko(),r=df(),o=2*e.width+3,a=Math.max(90,r*Math.max(o/(i.aw*.92),e.height/(i.ah*.85))),l=vs()+Ks.focus,c=a/r,h=this.section.p.x-s.x,u=s.ty-this.container.position.y;Cn(e.thumb),cn(e.thumb,t,{x:h-i.fx*c+(e.width+3)/2,y:u-i.fy*c,z:l-a,rotY:e.p2.rotY+720,rotX:0,rotZ:0},{ease:"quartOut"})}resetPostPosition(){this.postViews.forEach((e,t)=>{if(!e.ready||this.following.has(e))return;Cn(e.thumb);let i=this.L.position.call(this.L,this,e,t);e.setPosition(i.x,i.y,i.z,i.rotY),Object.assign(e.thumb,{x:e.p2.x,y:e.p2.y,z:e.p2.z,rotX:0,rotY:e.p2.rotY,rotZ:0,scale:1}),this.L.lineEnd&&this.followLine(e,t);let s=this.infos[t];s&&Object.assign(s.p,{x:e.p2.x-e.width-20,y:e.p2.y,z:e.p2.z})})}checkPostSelected(){if(!["carousel","spiral"].includes(this.def.layout))return;let e=(Math.round(H.degreeCamera/zi)%360+360)%360,t=r=>{let o=(r.p2.rotY%360+360)%360;return Math.min(Math.abs(o-e),360-Math.abs(o-e))},i=H.selected,s=this.postViews[H.selected]&&this.postViews[H.selected].ready?t(this.postViews[H.selected]):1/0;this.postViews.forEach((r,o)=>{if(!r.ready)return;let a=t(r);a<s-.5&&(s=a,i=o)}),H.selected=i}goNext(){return H.selected+1>=this.n?0:H.selected+1}goPrev(){return H.selected-1<=-1?this.n-1:H.selected-1}focus(e){this.n&&this.L.focus.call(this.L,this,e)}update(){if(this.net){let e=Math.max(.2,Math.pow(Math.min(1,oe.cameraDistanceProportion/bs),.85)),t=this.net.sc??e,i=Math.abs(e-t)<.002?e:t+(e-t)*_n(oe.cameraEaseSpeed);for(let s of this.net.items){let r=Math.max(0,Math.min(1,(ps-this.net.start-s.delay)/.9)),o=1-(1-r)*(1-r);s.arc&&(s.arc.geometry.instanceCount=Math.round(o*s.segs));let a=s.base||r>=1;s.dot.visible=a,s.label&&(s.label.visible=a&&i<=s.thr+1e-6),this.net.sc!==i&&(s.dot.scale.setScalar(s.ds*i),s.label&&(s.label.scale.copy(s.ls).multiplyScalar(i),s.label.position.y=50+9*i))}this.net.sc=i}for(let e of this.postViews)e.ready&&e.apply();if(this.following.forEach(e=>this.followLine(e,e.id_)),this.trail.forEach(e=>this.followLine(e,e.id_)),this.infos.forEach(e=>{e&&(e.mesh.position.set(...Gs(e.p.x,e.p.y,e.p.z)),e.mesh.rotation.y=-(e.p.rotY+180)*zi)}),this.focusInfo&&this.focusInfo.target){let e=this.focusInfo,t=e.target.group,i=e.k??1;e.mesh.quaternion.copy(t.quaternion),bg.set(1,0,0).applyQuaternion(t.quaternion).multiplyScalar((e.target.width/2+45*e.mesh.scale.x+3)*i*t.scale.x),Mg.set(0,0,-1).applyQuaternion(t.quaternion).multiplyScalar(1.5*(1-i)),e.mesh.position.copy(t.position).add(bg).add(Mg)}}async retexture(){this.net&&($c.color.set(Hn()),this.net.mats.on.color.set(Hn()));let e=(t,i)=>{let s=t.material.map;return t.material.map=i,t.material.needsUpdate=!0,s};for(let t=0;t<this.n;t++){let i=this.postViews[t];if(!i.ready)continue;let s;try{s=await this.tex(this.posts[t],this.w,this.h)}catch{continue}if(!this.alive){[s[0],s[1],s[2]&&s[2].tex,s[3]].forEach(a=>a&&a.dispose());return}let r=i.band?i.band.k:0;if(i.setBand(s[2]||null),i.band&&r&&(i.band.k=r,i.hover(Ta===i)),new Set([e(i.meshes[0],s[0]),e(i.meshes[1],s[1])]).forEach(a=>a&&a.dispose()),i.bhi&&s[3]){let a=e(i.bhi.mesh,s[3]);a&&a.dispose()}else s[3]&&s[3].dispose();let o=this.infos[t];if(o){let a=await Uc(this.posts[t],"place");if(!this.alive){a.dispose();return}let l=e(o.mesh,a);l&&l.dispose()}}if(this.focusInfo&&this.focusInfo.mesh.material.map&&H.postOpen){let t=await Uc(this.posts[H.selected],"person");if(this.alive){let i=e(this.focusInfo.mesh,t);i&&i.dispose()}}}get meshes(){return this.postViews.flatMap(e=>e.meshes)}destroy(){this.alive=!1,this.postViews.forEach(e=>e.dispose()),this.lines.forEach(e=>e&&e.geometry.dispose()),this.infos.forEach(e=>{e&&(Cn(e.p),e.mesh.material.map&&e.mesh.material.map.dispose(),e.mesh.material.dispose())}),this.focusInfo&&(this.focusInfo.mesh.material.map&&this.focusInfo.mesh.material.map.dispose(),this.focusInfo.mesh.material.dispose()),this.net&&(this.net.items.forEach(e=>{e.arc&&e.arc.geometry.dispose(),e.label&&(e.label.material.map.dispose(),e.label.material.dispose())}),this.net.dispose.forEach(e=>e.dispose())),vh(),Rn.remove(this.container)}},Sr=[],Pe=null,Er=oe.cameraEaseSpeed,qi=!1,Jn=!1,js=0,Zs=0,qc=0,Xc=0,Ms=!1,bn=!1,ws=()=>Sr[H.currentSection];function Tw(){let n=oe.cameraHeight;H.cameraY=H.cameraY+n/7<=3*n?H.cameraY+n/7:n*3}function Aw(){let n=oe.cameraHeight;H.cameraY=H.cameraY-n/7>=n/7?H.cameraY-n/7:n/7}var Cw={map:58},_h=(n=(ws()||{}).def||{})=>Math.max(.3,Math.min(2.5,(+n.camera||Cw[n.layout]||100)/100)),li=()=>Pe&&Pe.L.grid&&Pe.grid&&Pe.section===ws()?Pe:null,Rw=n=>df()/n.sc*Math.min(1,oe.cameraDistanceProportion/bs);function xh(n){let e=n.grid,t=Rw(e),i=t/df();return{d:Math.max(20,t-Ks.focus+e.zg),ty:n.container.position.y+e.gy+e.fy*i,dx:e.fx*i}}var vs=()=>{let n=li();return n?xh(n).d:oe.cameraDistance*_h()},bh=()=>{let n=li();return n?xh(n).ty:oe.cameraTargetHeight*(((ws()||{}).def||{}).layout==="map"?_h()*.62:1)},wg=()=>{let n=li();return n?xh(n).ty:oe.cameraHeight*(((ws()||{}).def||{}).layout==="map"?_h()*1.6:1)},Oc=new U;function Lw(){return!Qs()||li()||oe.cameraDistanceProportion>=bs?0:Math.min(1,(1-oe.cameraDistanceProportion/bs)*1.25)}function Pw(){let n=Pe&&Pe.net&&Pe.net.focus;return n?(n.getWorldPosition(Oc),{x:Oc.x,y:Oc.y,z:-Oc.z}):null}function Jo(){let n=ws(),e=Lw(),t=e?Pw():null,i=bh(),s=li();return s?{x:n.p.x-xh(s).dx,z:n.p.z,ty:i}:t?{x:n.p.x+(t.x-n.p.x)*e,z:n.p.z+(t.z-n.p.z)*e,ty:i+(t.y-i)*e}:{x:n.p.x,z:n.p.z,ty:i}}var Ba=()=>{if(!Qs()||li())return wg();let n=Math.min(1,oe.cameraDistanceProportion/bs);return Jo().ty+(wg()-bh())*Math.pow(n,.55)},Iw=n=>Math.max(.4,Math.min(2.5,(+n.cardScale||100)/100)),Ko=()=>{let n=Jo();return{d:vs(),x:n.x,z:n.z,ty:n.ty}},ni=null;function L0(n){if(!n||!Pe||!Pe.relayout())return;Cn(yt),Cn(Fn),ni=n,li()&&(H.degreeCamera=ff(H.degreeCamera)),H.cameraY=Ba(),Jn=!0,Er=oe.cameraEaseSpeed;let e=H.postOpen&&Ch()==="focus3d"&&!Ye.open&&Pe.postViews[H.selected];e&&e.ready&&(Pe.L.grid?Pe.gridToCamera(e,oe.tween/2):e.moveToCamera(60,oe.tween/2))}var Nw=0;function Dw(){if(++Nw%20||!Ms||H.postOpen||qi||!bn)return;let n=li();if(!n)return;let e=R0();[e.l,e.t,e.r,e.b].map(Math.round).join()!==n.grid.rk&&L0(ni||Ko())}function Uw(){if(!ni)return;let n=Ko(),e=_n(oe.cameraEaseSpeed),t=!0;for(let i of["d","x","z","ty"]){let s=n[i]-ni[i];Math.abs(s)>.05?(ni[i]+=s*e,t=!1):ni[i]=n[i]}Oa(Fn)||(Fn.x=ni.x,Fn.y=ni.ty,Fn.z=ni.z),!qi&&!Jn&&!Oa(yt)&&Vd(),t&&(ni=null)}function Vd(){let n=ni||Ko();yt.x=n.x+n.d*Math.sin(H.actualDeg),yt.z=n.z+n.d*Math.cos(H.actualDeg)}function Mh(){Sr.forEach((n,e)=>{e===H.currentSection?n.container.parent||Rn.add(n.container):n.container.parent&&Rn.remove(n.container)}),qi=!1,Jn=!1,xn.classList.remove("dragging"),Ta=null,Ia=null,No=null,Pe&&Pe.destroy(),ni=null,Pe=new Hd(ws()),Oo(H.selected),H.actualDeg=H.degreeCamera,Ow()}function Ow(){let n=Jo();H.cameraY=Ba(),aw(vs()*Math.sin(H.degreeCamera)+n.x,H.cameraY,vs()*Math.cos(H.degreeCamera)+n.z,n.x,n.ty,n.z,oe.cameraSpeed)}function Oo(n){H.selected=n,Pe&&Pe.focus(n)}function vd(n){!Pe||!Pe.n||(Jn=!0,Pe.checkPostSelected(),Er=oe.cameraKeyboardSpeed,Oo(n==="NEXT"?Pe.goNext():Pe.goPrev()))}var Fi=()=>Ft>700&&Ut>520;function wh(){let t=oe.cameraDistanceProportion/280;oe.cameraDistance=Math.round((Ut<680?1e3-Ut:320)*t)}function P0(){if(Jn=!1,wh(),!Ms)return;let n=Jo();if(H.postOpen&&Ch()==="focus3d"&&!Ye.open&&Pe&&Pe.postViews[H.selected]){let t=Pe.postViews[H.selected];Pe.L.grid?Pe.gridToCamera(t,oe.tween/2):t.moveToCamera(100,0)}let e=Qs()||li();ow(n.x+vs()*Math.sin(H.actualDeg),e?H.cameraY:yt.y,n.z+vs()*Math.cos(H.actualDeg),oe.cameraSpeed/2),e&&rf(n.x,n.ty,n.z,oe.cameraSpeed/2)}function kw(){if(!bn){Math.abs(yt.y-H.cameraY)>.007&&!Oa(yt)&&(yt.y-=(yt.y-H.cameraY)*_n(oe.cameraEaseSpeed));return}if(qi){Er=oe.cameraEaseSpeed;let n=H.degreeCamera;H.degreeCamera+=(js-qc)/150,H.actualDeg-=(H.actualDeg-n)*_n(Er),Vd(),H.cameraY+=(Zs-Xc)*2;let e=oe.cameraHeight,t=Qs()?Jo().ty+12:e/3;H.cameraY<t?H.cameraY=t:H.cameraY>e*4&&(H.cameraY=4*e),yt.y-=(yt.y-H.cameraY)*_n(Er),oe.animationMode&&Pe&&Pe.movePosts((qc-js)/Math.max(Go,.25),(Xc-Zs)/Math.max(Go,.25),Er),qc=js,Xc=Zs}else Jn?(Math.abs(H.actualDeg-H.degreeCamera)<=.007&&(Jn=!1),H.actualDeg-=(H.actualDeg-H.degreeCamera)*_n(oe.cameraEaseSpeed),Vd(),yt.y-=(yt.y-H.cameraY)*_n(Er),oe.animationMode&&Pe&&Pe.movePosts(0,0,oe.cameraEaseSpeed)):Math.abs(yt.y-H.cameraY)>.007&&(yt.y-=(yt.y-H.cameraY)*_n(oe.cameraEaseSpeed))}function Bw(){yt.zoom=6;let e=Pe&&Pe.postViews[0]&&Pe.postViews[0].p2.y||oe.planeDistance;yt.y=e+100,Fn.y=e+100,rf(Fn.x,bh(),Fn.z,1),bn=!1,cn(yt,1,{zoom:Ks.zoom},{ease:"expoOut"}),setTimeout(()=>{bn=!0},1*1e3+50)}var _d=new U,xd=new U,Co=new U,Ro=1,Lo=1,Fw=1.45;function zw(){_d.copy(Dd(yt.x,yt.y,yt.z)),xd.copy(Dd(Fn.x,Fn.y,Fn.z)),Co.subVectors(xd,_d),Co.lengthSq()<1e-6&&Co.set(0,0,-1),Co.normalize();let n=Qs()&&!li()?Math.min(1,oe.cameraDistanceProportion/bs):1;Ro+=Math.abs(n-Ro)<.001?n-Ro:(n-Ro)*_n(oe.cameraEaseSpeed),hn.position.copy(_d).addScaledVector(Co,-Ks.focus*Ro),hn.lookAt(xd);let e=Ft<700&&Ut>Ft&&!li()&&!Qs()?Fw:1;Lo+=Math.abs(e-Lo)<.001?e-Lo:(e-Lo)*_n(oe.cameraEaseSpeed);let t=Math.min(1,Ft/900*Lo),i=2*Math.atan(Ut/2/(yt.zoom*Ks.focus*t))/zi;Math.abs(hn.fov-i)>1e-4&&(hn.fov=i,hn.updateProjectionMatrix())}function I0(){if(Ft=window.innerWidth,Ut=window.innerHeight,zn.setSize(Ft,Ut,!1),hn.aspect=Ft/Ut,hn.updateProjectionMatrix(),of.forEach(n=>n.resolution.set(Ft,Ut)),Ms)try{zn.render(Rn,hn)}catch{}}var On=document.getElementById("menu"),ln=document.getElementById("slogan"),kn=document.getElementById("langs"),Sh=[];function Hw(){On.innerHTML="",Sh=Dt.map((n,e)=>{let t=document.createElement("li"),i=document.createElement("button");return i.type="button",i.textContent=he(n.def.name),i.addEventListener("click",()=>{e!==H.currentSection&&bn&&Qo(e)}),t.appendChild(i),On.appendChild(t),i}),On.style.setProperty("--n",Dt.length),pf()}function pf(){Sh.forEach((n,e)=>n.setAttribute("aria-current",String(e===H.currentSection)))}function Vw(){Sh.forEach((n,e)=>n.animate([{transform:"translateX(-260px)",opacity:.5},{transform:"none",opacity:1}],{duration:(e+1)*200,easing:"cubic-bezier(.17,.84,.44,1)",fill:"backwards"})),On.hidden=!1,kn.hidden=!1,Pr(),setTimeout(()=>On.classList.add("ready"),(Dt.length+1)*200)}var Gw=1.44,Sg={col:362,gutter:160,side:79,top:34,bottom:20},Eg={col:[200,520],gutter:[10,240],side:[8,140],top:[8,100],bottom:[6,80]};function Oi(){let n=ve&&ve.settings&&ve.settings.fiche||{},e={};for(let t in Sg){let i=n[t];e[t]=i===""||i==null||!Number.isFinite(+i)?Sg[t]:Math.max(Eg[t][0],Math.min(Eg[t][1],Math.round(+i)))}return e}function Po(n){let e=Oi(),t=n==="project"?{width:e.col+2*e.side,x:e.side,colW:e.col,press:!0}:{width:389,x:17,colW:353},i=(Ft-2*oe.margin)/(Ye.scale||1);if(i>=t.width)return t;let s=Math.max(240,Math.floor(i)),r=n==="project"?26:17;return{width:s,x:r,colW:s-2*r}}function N0(){let n=Ut<=420;document.body.classList.toggle("post-short",n&&H.postOpen);let e=ln.offsetTop+ln.offsetHeight+(n?1:2)*oe.margin,t=Ye.height+12,i=n?24:(On.offsetHeight||90)+70,s=(Ut-e-i)/t,r=(Ut-e-56)/t,o=Ft>700&&!n?14/(+Zn(ve.settings,"body").size||14):0,a=Math.max(n?.4:.5,Math.min(Gw,Math.max(s,Math.min(o,r))));Ye.scale=a,tn.style.top=e+"px",tn.style.transform=a!==1?`scale(${a.toFixed(3)})`:"",tn.style.width=a!==1?Math.ceil((Ft-oe.margin)/a)+"px":"",tn.style.height=Math.ceil(t)+"px",document.body.classList.toggle("post-cramped",Ut-(e+t*a)<On.offsetHeight+60)}var Tg=()=>{let n=kn.getBoundingClientRect();return n.height?n.top:Ut-(Fi()?44:48)};function Pr(){if(H.postOpen||document.body.classList.remove("post-cramped","post-short"),H.postOpen&&Ye.open&&Ye.height>100){let n=ln.offsetTop+ln.offsetHeight+Ye.height*(Ye.scale||1)+2*oe.margin+30;n=Math.min(n,Tg()-On.offsetHeight-22),On.style.left=oe.margin+"px",On.style.top=n+"px"}else{let n=kn.hidden?Ut-30:Tg();if(!Fi()&&!_s.hidden){let e=_s.getBoundingClientRect();e.height&&e.left<Ft/2&&(n=Math.min(n,e.top))}On.style.left=(Fi()?26:oe.margin)+"px",On.style.top=Math.round(Math.min(Ut-(On.offsetHeight||86)-(Fi()?100:56),n-(On.offsetHeight||86)-24))+"px"}if(document.body.classList.toggle("post-open-wide",Fi()&&!!H.postOpen),U0(),D0(),!(H.postOpen&&Ye.open&&Ye.height>100)){let n=Math.max(0,...["reel-btn","about-btn","lang-sq"].map(e=>document.getElementById(e)).filter(e=>e&&!e.hidden&&e.offsetHeight).map(e=>e.offsetTop+e.offsetHeight));n&&On.offsetTop<n+18&&(On.style.top=n+18+"px")}}function D0(){if(!de||!de.btn)return;let n=de.btn;n.style.top=Math.round(ln.offsetTop+ln.offsetHeight+(Fi()?26:16))+"px",n.style.left=ln.offsetLeft+2+"px",n.style.right="auto",ch()}function U0(){_s.style.top=_s.style.left="",Wd.style.maxHeight=Math.max(140,Ut-200)+"px",document.body.classList.toggle("cats-up",!Fi()&&Ft<560)}var Ag=(n,e=!1)=>cg(n,ve.settings,e);function Gd(){let n=ve.settings,e=n.accent||"#ffcc00",t=n.logo?bt(n.logo):Ag(Vn?"#ffffff":e,Vn),i=document.getElementById("home-logo");i&&(i.src=n.logo?t:Ag("#ffffff",!1),i.classList.toggle("raw",!n.logo));let s=document.getElementById("logo");s&&(s.style.backgroundImage=n.logo?`url("${t}")`:"",s.classList.toggle("img",!!n.logo)),$w(n.logo?t:Ww)}var Ww="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="29" fill="#fff" stroke="#c4c4c4" stroke-width="2.5"/></svg>');function $w(n){let e=document.querySelector('link[rel~="icon"]');e||(e=document.createElement("link"),e.rel="icon",document.head.appendChild(e)),e.getAttribute("href")!==n&&(e.removeAttribute("type"),e.href=n)}var Yc="",th=document.querySelector('meta[name="description"]'),Cg=th?th.content:"",mf=document.title;function gf(n){if(!(wt||!ve)){document.title=n?`${he(n.title).trim()} \xB7 ${ve.settings.name||"Hand Coded"}`:mf,th&&(th.content=n&&(wr(he(n.body).split(/<h3/i)[0]).join(" ").slice(0,160)||he(n.subtitle))||Cg);try{let e=new URL(location.href),t=window.HC_ROUTE||{};if(t.pages&&location.protocol!=="file:"){let i=r0;e.searchParams.delete("p"),e.searchParams.delete("lang"),e.pathname=i.pathname+(n&&od(ve,n)?`${fn}/${encodeURIComponent(n.id)}/`:t.p||e.pathname!==i.pathname?`${fn}/`:""),n&&!od(ve,n)&&e.searchParams.set("p",n.id)}else n?e.searchParams.set("p",n.id):e.searchParams.delete("p");e.href!==location.href&&history.replaceState(history.state,"",e.pathname+e.search+e.hash)}catch{}n&&nr("?p="+n.id,document.title)}}function qw(){let n=String((ve.settings.analytics||{}).goatcounter||"").trim().replace(/^https?:\/\//,"").replace(/\.goatcounter\.com.*$/,"").replace(/[^a-z0-9-]/gi,"");if(!n||wt||location.protocol==="file:"||/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)||window.goatcounter)return;window.goatcounter={no_onload:!0};let e=document.createElement("script");e.async=!0,e.src="https://gc.zgo.at/count.js",e.dataset.goatcounter=`https://${n}.goatcounter.com/count`,e.dataset.goatcounterSettings=JSON.stringify({no_onload:!0}),e.addEventListener("load",()=>{Yc||nr("",mf)}),document.head.appendChild(e)}function nr(n,e,t=!1){try{window.goatcounter&&typeof window.goatcounter.count=="function"&&window.goatcounter.count({path:t?n:((window.HC_ROUTE||{}).pages?r0.pathname:location.pathname.replace(/index\.html$/,""))+n,title:e,event:t})}catch{}}function Eh(){let n=ve.settings;w0(),hh(),nl(),document.documentElement.lang=fn,document.documentElement.classList.toggle("neg",Vn),H.postOpen||(document.title=mf||n.name||"Hand Coded");let e=n.taglines&&(n.taglines[fn]||n.taglines.en)||[],t=e.length?`<b class="wm">${_e(e[0])}</b>${e.slice(1).map(a=>`<span>${_e(a)}</span>`).join("")}`:_e(n.name);if(ln.innerHTML=e.length?`<b class="wm" role="link" tabindex="0" title="${_e(xe("homeLink"))}">${_e(e[0])}</b><span class="tls">${e.slice(1).map(a=>`<span>${_e(a)}</span>`).join("")}</span>`:t,document.getElementById("home-slogan").innerHTML=t,Gd(),!n.logo&&document.fonts){let a=Zn(n,"logo"),l=`${a.italic?"italic ":""}${a.weight||400} 76px ${a.css}`;document.fonts.check(l)||document.fonts.load(l).then(()=>{ve.settings.logo||Gd()}).catch(()=>{})}let i=n.negativeToggle!==!1;["logo"].forEach(a=>{let l=document.getElementById(a);l&&(l.classList.toggle("toggle",i),i?(l.setAttribute("role","button"),l.tabIndex=0,l.setAttribute("aria-pressed",String(Vn)),l.title=xe(Vn?"toPos":"toNeg"),l.setAttribute("aria-label",l.title)):(l.removeAttribute("role"),l.removeAttribute("tabindex"),l.removeAttribute("aria-pressed"),l.removeAttribute("aria-label"),l.removeAttribute("title")))}),Ln.classList.toggle("no-ticker",!!(n.home&&n.home.tickerOff)),er.classList.contains("wait")||Pf(he(n.home.enter)||xe("enter")),cS(),mS(),ii(),document.querySelectorAll("[data-i18n]").forEach(a=>{a.textContent=xe(a.dataset.i18n)}),document.getElementById("kb-toggle").setAttribute("aria-label",xe("keys")),ko.setAttribute("aria-label",xe("prev")),nh.setAttribute("aria-label",xe("next"));let s=document.getElementById("cat-cap");s&&(s.textContent=xe("category"));let r=n.langs&&n.langs.length?n.langs:oi;Xw(r);let o=document.getElementById("lang-sq");o||(o=document.createElement("div"),o.id="lang-sq",o.className="ui",document.body.appendChild(o),document.addEventListener("pointerdown",a=>{a.target.closest("#lang-sq")||o.classList.remove("open")})),[document.getElementById("home-langs"),o].forEach(a=>{if(a.innerHTML="",a.classList.add("hlg"),a.classList.remove("open"),a.hidden=r.length<2,r.length<2)return;let l=document.createElement("button");l.type="button",l.className="cur",l.setAttribute("aria-expanded","false"),l.setAttribute("aria-label",xe("lang")+" : "+fn.toUpperCase()),l.innerHTML=`<b class="ic">${fn.toUpperCase()}</b>`,l.addEventListener("click",()=>{let h=a.classList.toggle("open");l.setAttribute("aria-expanded",String(h))});let c=document.createElement("span");c.className="opts",r.filter(h=>h!==fn).forEach(h=>{let u=document.createElement("button");u.type="button",u.textContent=h.toUpperCase(),u.lang=h,u.setAttribute("aria-label",xe("lang")+" "+h.toUpperCase()),u.addEventListener("click",()=>yf(h)),c.appendChild(u)}),a.append(l,c)}),ch(),document.documentElement.style.setProperty("--accent",Hn()),document.documentElement.style.setProperty("--accent-raw",ve.settings.accent||"#ffcc00"),document.documentElement.style.setProperty("--accent-inv",y0(ve.settings.accent||"#ffcc00")),zS()}function Xw(n){if(kn.innerHTML="",kn.classList.remove("open"),n.length<2)return;let e=document.createElement("button");e.type="button",e.className="lg-open",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-label",xe("lang")+" : "+fn.toUpperCase()),e.innerHTML=`<i class="tri"></i><span>${fn.toUpperCase()}</span>`;let t=document.createElement("ul");t.className="lg-list",n.filter(i=>i!==fn).forEach(i=>{let s=document.createElement("li"),r=document.createElement("button");r.type="button",r.textContent=i.toUpperCase(),r.lang=i,r.setAttribute("aria-label",xe("lang")+" "+i.toUpperCase()),r.addEventListener("click",()=>{kn.classList.remove("open"),yf(i)}),s.appendChild(r),t.appendChild(s)}),e.addEventListener("click",()=>{let i=kn.classList.toggle("open");e.setAttribute("aria-expanded",String(i))}),kn.append(t,e)}document.addEventListener("pointerdown",n=>{if(kn.classList.contains("open")&&!kn.contains(n.target)){kn.classList.remove("open");let e=kn.querySelector(".lg-open");e&&e.setAttribute("aria-expanded","false")}});kn.addEventListener("keydown",n=>{if(n.code==="Escape"&&kn.classList.contains("open")){n.stopPropagation(),kn.classList.remove("open");let e=kn.querySelector(".lg-open");e&&(e.setAttribute("aria-expanded","false"),e.focus())}});function yf(n){if(n!==fn){fn=n;try{localStorage.setItem("hc-lang",n)}catch{}if(document.documentElement.lang=n,Eh(),Ms){Sh.forEach((i,s)=>{i.textContent=he(Dt[s].def.name)}),Th();let e=H.postOpen,t=H.selected;Ai(),H.selected=t,Mh(),e&&Vo(.6,()=>Yo(t))}H.postOpen||gf(null)}}var Xo=document.getElementById("cats"),_s=document.getElementById("cat-box"),Wd=document.getElementById("cat-list"),O0=document.getElementById("cat-name"),$d=document.getElementById("cat-open"),ko=document.getElementById("pg-prev"),nh=document.getElementById("pg-next");function Th(){let n=H.data,e=n.categoryList;_s.hidden=e.length<=1,Wd.innerHTML="",e.forEach(t=>{let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.innerHTML=`${_e(he(t.label))} <span class="n">${n.countOf(t.id)}</span>`,s.setAttribute("aria-current",String(t.id===n.category)),s.addEventListener("click",()=>{ih(),tS(t.id)}),i.appendChild(s),Wd.appendChild(i)}),O0.innerHTML=`<span class="t">${_e(n.currentCatName)}</span> <span class="n">${n.countOf(n.category)}</span>`,k0(),ih(),jw()}var kc=document.getElementById("pg-num");function k0(){let n=H.data;ko.disabled=!n.hasNewer(),nh.disabled=!n.hasOlder(),ko.hidden=nh.hidden=!n.hasNewer()&&!n.hasOlder(),kc&&(kc.hidden=ko.hidden,kc.textContent=`${n.page}/${n.pages}`,kc.setAttribute("aria-label",`${n.page} / ${n.pages}`))}function ih(){clearTimeout(vf),_s.classList.remove("open"),$d.setAttribute("aria-expanded","false")}var Wi=document.createElement("button");Wi.id="ov-btn";Wi.type="button";Wi.hidden=!0;Wi.innerHTML='<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 1h8v8H1zM10.5 1H15v3.5h-4.5zM10.5 5.5H15V9h-4.5zM1 10.5h3.5V15H1zM5.5 10.5H9V15H5.5zM10.5 10.5H15V15h-4.5z" fill="currentColor"/></svg><span></span>';_s.appendChild(Wi);var Rt=null,Yw="",B0=()=>!!(H.section&&H.section.def.card==="image"&&!H.section.def.skills&&H.data&&H.data.all.length>=8);function jw(){Wi.hidden=!B0(),Wi.querySelector("span").textContent=xe("overview"),Wi.setAttribute("aria-label",xe("overview"))}Wi.addEventListener("click",n=>{n.stopPropagation(),Zw()});function Rg(){if(!Rt)return;let n=Rt.querySelector(".mos"),e=getComputedStyle(n).gridTemplateColumns.split(" ").length,t=[...n.children];[...n.children].forEach(d=>{d.className="t "+d.dataset.k,d.style.gridColumn=""});let i=d=>d.classList.contains("xl")?e<6?e*2:8:d.classList.contains("l")?4:d.classList.contains("w")?2:1,s=(e-t.reduce((d,p)=>d+i(p),0)%e)%e;for(let d=t.length-1;d>=0&&s>0;d--)t[d].dataset.k||(t[d].classList.add("w"),s--);let r=n.getBoundingClientRect(),o=r.width/e;if(!t.length||!o)return;let a=d=>{let p=d.getBoundingClientRect();return{t:d,c:Math.round((p.left-r.left)/o),n:Math.round(p.width/o),b:Math.round(p.bottom)}},l=t.map(a),c=Math.max(...l.map(d=>d.b)),h=l.filter(d=>d.b>=c-2).sort((d,p)=>d.c-p.c),u=e-h.reduce((d,p)=>d+p.n,0);for(let d=h.length-1,p=0;u>0;p++){let g=h[h.length-1-p%h.length];g.n++,u--,d--}h.forEach(d=>{d.t.style.gridColumn="span "+d.n})}function Lg(n,e=!0){if(Yw=n,!Rt)return;Rt.querySelectorAll(".chips button").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.cat===n)));let t=Rt.querySelector(".mos");t.classList.toggle("sel",!!n);let i=null;if(t.querySelectorAll(".t").forEach(s=>{let r=!!n&&s.dataset.tags.split(" ").includes(n);s.classList.toggle("hit",r),s.classList.toggle("dim",!!n&&!r),r&&!i&&(i=s)}),e&&i){let s=i.getBoundingClientRect();(s.top>innerHeight*.8||s.bottom<0)&&Rt.scrollTo({top:Rt.scrollTop+s.top-140,behavior:"smooth"})}}function Zw(){if(!B0()||!bn)return;ih();let n=H.data,e=H.section.def,t=n.all,i=e.defaultTag||"featured",s=(e.tags||[]).some(l=>l.id==="advertising")?"advertising":"",r=!0,o=t.map(l=>{let c=(l.tags||[]).includes(i),h=c&&r?"xl":c?"l":s&&(l.tags||[]).includes(s)?"w":"";c&&(r=!1);let u=l.ovSize==="s"?"":/^(xl|l|w)$/.test(l.ovSize||"")?l.ovSize:h,d=l.thumb?u==="xl"?`<img src="${_e(bt(l.thumb))}" alt="" loading="lazy" draggable="false">`:Rr(l.thumb,'alt="" loading="lazy" draggable="false"'):"";return`<a class="t ${u}" data-k="${u}" data-ov="${_e(l.id)}" data-tags="${_e((l.tags||[]).join(" "))}" href="?p=${encodeURIComponent(l.id)}&amp;lang=${fn}">${d}<em>${_e(l.date||"")}</em><span class="tx"><b>${_e(he(l.title))}</b><i>${_e(he(l.subtitle))}</i></span></a>`}).join(""),a=(n.categoryList.some(l=>l.id==="")?n.categoryList:[{id:"",label:Object.fromEntries(oi.map(l=>[l,(br[l]||br.en).all]))},...n.categoryList]).map(l=>`<button type="button" data-cat="${_e(l.id)}" aria-pressed="false">${_e(he(l.label))}<span>${n.countOf(l.id)}</span></button>`).join("");Rt||(Rt=document.createElement("section"),Rt.id="hc-ov",Rt.className="ui",Rt.setAttribute("role","dialog"),Rt.setAttribute("aria-modal","true"),Rt.hidden=!0,document.body.appendChild(Rt),Rt.addEventListener("click",l=>{let c=l.target.closest("[data-ov]");if(c){if(l.metaKey||l.ctrlKey||l.shiftKey)return;l.preventDefault();let u=c.dataset.ov;bd(),el(u);return}let h=l.target.closest("[data-cat]");if(h){Lg(h.dataset.cat);return}l.target.closest(".x")&&bd()}),window.addEventListener("keydown",l=>{!Rt||Rt.hidden||(l.code==="Escape"&&(l.preventDefault(),bd()),l.code!=="Tab"&&l.code!=="Enter"&&l.code!=="Space"&&l.stopImmediatePropagation())},!0),window.addEventListener("resize",Rg)),Rt.setAttribute("aria-label",xe("overview")),Rt.innerHTML=`<div class="ov-in"><div class="bar"><h2>${_e(xe("overview"))}</h2><span class="n">${t.length} ${_e(xe("ov_n"))}</span><button type="button" class="x" aria-label="${_e(xe("close"))}"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M2 2l10 10M12 2 2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button><div class="chips">${a}</div></div><div class="mos">${o}</div></div>`,Rt.hidden=!1,Rt.scrollTop=0,document.documentElement.classList.add("ov-open"),requestAnimationFrame(()=>{Rt.classList.add("on")}),Rg(),Lg("",!1),setTimeout(()=>{let l=Rt.querySelector(".x");l&&l.focus({preventScroll:!0})},50),nr("#overview",xe("overview"),!0)}function bd(){!Rt||Rt.hidden||(Rt.classList.remove("on"),document.documentElement.classList.remove("ov-open"),setTimeout(()=>{Rt.classList.contains("on")||(Rt.hidden=!0)},350),Wi.focus({preventScroll:!0}))}var vf=0,F0=-1e9;_s.addEventListener("pointerenter",()=>clearTimeout(vf));$d.addEventListener("click",()=>{clearTimeout(vf);let n=_s.classList.toggle("open");$d.setAttribute("aria-expanded",String(n))});ko.addEventListener("click",()=>{bn&&K0("newer")});nh.addEventListener("click",()=>{bn&&K0("older")});var ir=document.getElementById("kb"),_f=document.getElementById("kb-toggle"),z0=null;function qd(){ir.classList.add("open"),_f.setAttribute("aria-expanded","true")}function sh(){ir.classList.remove("open"),_f.setAttribute("aria-expanded","false")}_f.addEventListener("click",()=>{clearTimeout(z0),ir.classList.contains("open")?sh():qd()});ir.querySelectorAll(".key").forEach(n=>n.addEventListener("click",()=>ey({code:n.dataset.k,preventDefault(){}})));function us(n){let e=ir.querySelector(`.key[data-k="${n}"]`);e&&(e.classList.add("down"),setTimeout(()=>e.classList.remove("down"),200))}function H0(){ir.querySelector(".key.anim").classList.toggle("off",!oe.animationMode)}var xf=document.getElementById("whiteboard"),tn=document.getElementById("post2d"),ds=document.getElementById("strip");function Pg(n,e){if(!n||ve.settings.signImages===!1)return"";let t=[he(n.title).trim(),(n.author||ve.settings.name||"").trim()].filter(Boolean);return e&&t.push(xe("photo")+" "+e.trim()),t.join(" \xB7 ")}var Jw=n=>/\.(mp4|webm|mov)(\?|#|$)/i.test(n||""),Fa=n=>{let e=/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(n||"");return e&&e[1]},za=n=>{let e=/vimeo\.com\/(?:video\/)?(\d+)(?:\/([0-9a-f]{6,}))?/i.exec(n||"");if(!e)return null;let t=e[2]||(/[?&]h=([0-9a-f]{6,})/i.exec(n)||[])[1];return t?e[1]+"/"+t:e[1]},Ah=(n,e)=>{let[t,i]=String(n).split("/");return`https://player.vimeo.com/video/${t}?${i?"h="+i+"&":""}${e}`},Md=new Map,V0=n=>(Md.has(n)||Md.set(n,fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent("https://vimeo.com/"+n)}&width=1280`).then(e=>e.ok?e.json():null).then(e=>e&&e.thumbnail_url||"").catch(()=>"")),Md.get(n)),G0=(n,e)=>{let t=(n&&n.media||[]).filter(i=>i&&/youtu\.?be|vimeo\.com/.test(i.src||""));return!t.length||t[0].src===e},Ir=n=>Fa(n)?"youtube":za(n)?"vimeo":Jw(n)?"video":"image",Bo={to:"maya@hand-coded.net"},Ig={fr:{title:"Restons en contact.",intro:"Nos nouvelles, quelques fois par an : projets et coulisses. Un projet en t\xEAte ? Dites-nous en plus.",email:"Votre e-mail",who:"Vous \xEAtes",whoO:["Une marque","Une agence","Un(e) artiste","Une institution ou un festival","Autre"],what:"Un projet en t\xEAte ? (facultatif)",whatO:["Une installation","Un \xE9v\xE9nement ou une tourn\xE9e","Un outil ou un logiciel","Du conseil","Autre chose"],when:"Pour quand",whenO:["Moins de 3 mois","3 \xE0 6 mois","Plus tard","Je ne sais pas encore"],msg:"En quelques mots (facultatif)",send:"S\u2019inscrire",sending:"Envoi\u2026",ok:"Merci, vous \xEAtes inscrit(e) ! Et si vous nous avez parl\xE9 d\u2019un projet, on vous r\xE9pond tr\xE8s vite.",err:"L\u2019envoi n\u2019a pas march\xE9. \xC9crivez-nous directement \xE0 ",bad:"Il manque une adresse e-mail valide.",note:"Quelques e-mails par an. D\xE9sinscription en un clic."},en:{title:"Let\u2019s keep in touch.",intro:"Our news, a few times a year: projects and behind the scenes. A project in mind? Tell us more.",email:"Your email",who:"You are",whoO:["A brand","An agency","An artist","An institution or a festival","Other"],what:"A project in mind? (optional)",whatO:["An installation","An event or a tour","A tool or software","Consulting","Something else"],when:"When",whenO:["Within 3 months","3 to 6 months","Later","Not sure yet"],msg:"In a few words (optional)",send:"Sign up",sending:"Sending\u2026",ok:"Thank you, you\u2019re signed up! And if you told us about a project, we\u2019ll get back to you very soon.",err:"Sending failed. Write to us directly at ",bad:"Please enter a valid email address.",note:"A few emails a year. Unsubscribe in one click."},ca:{title:"Mantinguem el contacte.",intro:"Les nostres novetats, unes quantes vegades l\u2019any: projectes i bastidors. Teniu un projecte al cap? Expliqueu-nos-en m\xE9s.",email:"El vostre correu",who:"Sou",whoO:["Una marca","Una ag\xE8ncia","Un/a artista","Una instituci\xF3 o un festival","Altres"],what:"Un projecte al cap? (opcional)",whatO:["Una instal\xB7laci\xF3","Un esdeveniment o una gira","Una eina o un programari","Assessorament","Una altra cosa"],when:"Per a quan",whenO:["Menys de 3 mesos","De 3 a 6 mesos","M\xE9s endavant","Encara no ho s\xE9"],msg:"En poques paraules (opcional)",send:"Subscriure\u2019s",sending:"Enviant\u2026",ok:"Gr\xE0cies, ja us heu subscrit! I si ens heu parlat d\u2019un projecte, us responem molt aviat.",err:"L\u2019enviament no ha funcionat. Escriviu-nos directament a ",bad:"Falta una adre\xE7a de correu v\xE0lida.",note:"Uns quants correus l\u2019any. Baixa amb un clic."},es:{title:"Sigamos en contacto.",intro:"Nuestras novedades, unas pocas veces al a\xF1o: proyectos y bastidores. \xBFUn proyecto en mente? Cu\xE9ntanos m\xE1s.",email:"Tu correo",who:"Eres",whoO:["Una marca","Una agencia","Un/a artista","Una instituci\xF3n o un festival","Otro"],what:"\xBFUn proyecto en mente? (opcional)",whatO:["Una instalaci\xF3n","Un evento o una gira","Una herramienta o un software","Asesor\xEDa","Otra cosa"],when:"Para cu\xE1ndo",whenO:["Menos de 3 meses","De 3 a 6 meses","M\xE1s adelante","A\xFAn no lo s\xE9"],msg:"En pocas palabras (opcional)",send:"Suscribirme",sending:"Enviando\u2026",ok:"\xA1Gracias, ya te has suscrito! Y si nos has hablado de un proyecto, te respondemos muy pronto.",err:"El env\xEDo no ha funcionado. Escr\xEDbenos directamente a ",bad:"Falta una direcci\xF3n de correo v\xE1lida.",note:"Unos pocos correos al a\xF1o. Baja con un clic."}},W0=()=>Ig[fn]||Ig.en,Kw=0;function $0(n){let e=W0(),t=_e,i="cf"+ ++Kw,s=(r,o,a)=>`<fieldset class="cf-q"><legend>${t(o)}</legend><div class="cf-chips">${a.map((l,c)=>`<label class="cf-chip"><input type="radio" name="${i}-${r}" value="${t(l)}"${c===-1?" checked":""}><span>${t(l)}</span></label>`).join("")}</div></fieldset>`;return`<form class="cform-f cf-${n}" novalidate><div class="cf-col"><h2 class="${n==="pv"?"pv-ttl":"ttl"}">${t(e.title)}</h2><p class="cf-intro">${t(e.intro)}</p><label class="cf-q cf-mail"><span>${t(e.email)}</span><input type="email" name="email" autocomplete="email" required spellcheck="false"></label>`+s("who",e.who,e.whoO)+s("when",e.when,e.whenO)+'</div><div class="cf-col">'+s("what",e.what,e.whatO)+`<label class="cf-q cf-msg"><span>${t(e.msg)}</span><textarea name="message" rows="${n==="pv"?3:2}"></textarea></label><input type="text" name="_honey" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="cf-end"><button type="submit" class="cf-send">${t(e.send)}</button><span class="cf-note">${t(e.note)}</span></div><p class="cf-st" role="status" aria-live="polite"></p></div></form>`}function q0(n){let e=n.querySelector(".cform-f");if(!e||e.dataset.bound)return;e.dataset.bound="1";let t=e.querySelector(".cf-st"),i=e.querySelector(".cf-send"),s=r=>{let o=e.querySelector(`input[name$="-${r}"]:checked`);return o?o.value:""};e.addEventListener("submit",async r=>{r.preventDefault();let o=W0(),a=e.email.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)){t.textContent=o.bad,t.className="cf-st bad",e.email.focus();return}if(e._honey.value)return;i.disabled=!0,i.textContent=o.sending,t.textContent="",t.className="cf-st";let l=!!(s("what")||s("when")||e.message.value.trim()),c={email:a,Newsletter:"oui","Vous \xEAtes":s("who"),Projet:s("what"),"Pour quand":s("when"),Message:e.message.value.trim(),Langue:fn,Page:location.href,_subject:"Hand Coded \xB7 "+(l?"newsletter + projet":"inscription newsletter")+(s("who")?" ("+s("who")+")":""),_template:"table",_captcha:"false"},h=!1,u="";if(location.protocol==="file:")u="page ouverte depuis le disque : l\u2019envoi ne marche que sur le site en ligne";else try{let d=await fetch("https://formsubmit.co/ajax/"+Bo.to,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(c)}),p=await d.json().catch(()=>({}));h=d.ok&&String(p.success)!=="false",h||(u=p.message||"HTTP "+d.status)}catch(d){u=d&&d.message||"r\xE9seau"}h||console.warn("[contact] envoi refus\xE9 :",u),i.disabled=!1,i.textContent=o.send,h?(e.reset(),t.textContent=o.ok,t.className="cf-st ok",nr("contact-form","Formulaire de contact envoy\xE9",!0)):(t.innerHTML=_e(o.err)+`<a href="mailto:${_e(Bo.to)}">${_e(Bo.to)}</a>`+(u?`<small class="cf-why">${_e(u)}</small>`:""),t.className="cf-st bad")})}var Qw=[[/instagram\.com/i,"IG","Instagram"],[/vimeo\.com/i,"Vi","Vimeo"],[/facebook\.com/i,"Fb","Facebook"],[/linkedin\.com/i,"in","LinkedIn"],[/youtube\.com|youtu\.be/i,"YT","YouTube"],[/tiktok\.com/i,"TT","TikTok"],[/(?:^|\/\/|\.)(?:x|twitter)\.com/i,"X","X"],[/behance\.net/i,"Be","Behance"]];function X0(n){let e=document.createElement("div");return e.innerHTML=n,e.querySelectorAll("p").forEach(t=>{let i=[...t.querySelectorAll("a[href]")];if(!i.length)return;let s=i.map(o=>Qw.find(([a,,l])=>a.test(o.getAttribute("href"))&&o.textContent.trim().toLowerCase()===l.toLowerCase()));s.some(o=>!o)||[...t.childNodes].filter(o=>o.nodeType===3).map(o=>o.textContent).join("").replace(/[\s·•|,\/-]/g,"")||(t.className="socs",t.innerHTML=i.map((o,a)=>`<a class="soc" href="${_e(o.getAttribute("href"))}" target="_blank" rel="noopener" aria-label="${s[a][2]}" title="${s[a][2]}">${s[a][1]}</a>`).join(""))}),e.innerHTML}function Y0(n){let e=document.createElement("div");e.innerHTML=X0(n||"");let t=[...e.children],i={lead:"",mail:[],tel:[],addr:[],socs:"",note:[],rest:[]};return t.forEach((s,r)=>{let o=s.textContent.replace(/\s+/g," ").trim();if(!o&&!s.classList.contains("socs"))return;let a=[...s.querySelectorAll("a[href]")];if(s.classList.contains("socs"))i.socs=s.innerHTML;else if(a.some(l=>/^mailto:/i.test(l.getAttribute("href"))))a.filter(l=>/^mailto:/i.test(l.getAttribute("href"))).forEach(l=>i.mail.push(l.getAttribute("href").replace(/^mailto:/i,"").split("?")[0]));else if(/^\+?[\d\s().\-]{8,}$/.test(o))i.tel.push(o);else if(r===0&&!a.length&&s.querySelector("b, strong")&&s.querySelector("b, strong").textContent.trim()===o)i.lead=s.querySelector("b, strong").innerHTML;else if(r===0&&!a.length&&s.firstElementChild&&/^(B|STRONG)$/.test(s.firstElementChild.tagName)&&s.textContent.trim().startsWith(s.firstElementChild.textContent.trim())){let l=s.firstElementChild;i.lead=l.innerHTML,l.remove(),i.sub=s.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/i,"").trim()}else a.length?i.note.push(s.innerHTML):/\d/.test(o)&&o.length<120?i.addr.push(o):i.rest.push(s.outerHTML)}),i.ok=!!(i.mail.length||i.tel.length||i.addr.length),i}function j0(n){let e=Y0(n),t=_e;if(!e.ok)return X0(n||"");let i=(o,a)=>`<div class="cr"><dt>${t(xe(o))}</dt><dd>${a}</dd></div>`,s=o=>`<a href="tel:${t(o.replace(/[^\d+]/g,""))}">${t(o)}</a>`,r=o=>{let[a,...l]=o.split(/\s+[.·•|]\s+/);return t(a)+(l.length?"<br>"+t(l.join(" \xB7 ")):"")};return(e.lead?`<p class="lead">${e.lead}</p>`:"")+(e.sub?`<p class="csub">${e.sub}</p>`:"")+'<dl class="crows">'+(e.mail.length?i("c_write",e.mail.map(o=>`<a class="mail" href="mailto:${t(o)}">${t(o)}</a>`).join("<br>")):"")+(e.tel.length?i("c_call",e.tel.map(s).join("<br>")):"")+(e.addr.length?i("c_addr",e.addr.map(r).join("<br>")):"")+(e.socs?i("c_follow",`<span class="socs">${e.socs}</span>`):"")+"</dl>"+e.rest.join("")+(e.note.length?`<div class="cnote">${e.note.map(o=>`<p>${o}</p>`).join("")}</div>`:"")}var Bc=56,Ye={open:!1,height:0,panels:[],x:0,finalpos:0,over:0,ov:0,end:0,dragging:!1,xprev:0,vel:0,delay:0,build(n,e){this.clear(),this.post=n,this.open=!0,this.height=355,tn.classList.remove("closing"),tn.hidden=!1,N0(),this.geomKey=JSON.stringify(Po("project"));{let i=Oi();ds.style.setProperty("--ft",i.top+"px"),ds.style.setProperty("--fb",i.bottom+"px")}this.delay=0;let t=n.media.filter(i=>i&&i.src);if(e==="place"){let i=t[0]?t[0].src:n.thumb;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!1),this.addContact(n),Bo.to&&this.addForm()}else if(e==="text")this.addText(n,"blog"),t.forEach(i=>this.addMedia(i.src,355,i.credit,!0,i.caption)),this.addRelations(n);else if(H.section.def.skills){let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addRelations(n),this.addGallery(t.slice(1)),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}else{let i=t[0]?t[0].src:n.thumb||null;i&&this.addMedia(i,355,t[0]?t[0].credit:"",!0,t[0]&&t[0].caption),this.addText(n,"project"),this.addGallery(t.slice(1)),this.addRelations(n),(n.team&&n.team.length||n.credits)&&this.addTeam(n)}n.logos&&n.logos.length&&e!=="place"&&this.addLogos(n),n.link&&e!=="place"&&this.addLink(n),this.layout(),this.x=0,this.finalpos=0,this.over=0,this.ov=0,this.tx=0,ds.style.transform="translateX(0px)"},addRelations(n){let e=qo(n);if(!e.length)return;let t=Ao(ve,n).length>0,i=Oi(),s=this.panels[this.panels.length-1],r=H.section.def.skills&&s&&s.classList.contains("txt"),o=r?Math.max(12,i.gutter-i.side):i.side,a=Math.max(200,Math.min(300,i.col))+o+i.side,l=`<h2 class="ttl" style="left:${o}px;right:${i.side}px;top:${i.top}px">${_e(xe(t?"skillProjects":"together"))}.</h2><span class="n" style="left:${o}px;bottom:${i.bottom}px">${e.length}</span>`;if(!t){this.addIndex(e,i);return}r||this.addPanel("relh",a,l),e.forEach(c=>{let h=Ys(c),u=[c.date,he(c.place)].filter(Boolean).join(" | "),d=this.addPanel("proj",248,`<button type="button" class="go" data-go="${_e(c.id)}" aria-label="${_e(he(c.title))}">`+(h?Rr(h,'alt="" draggable="false"'):"")+`<span class="mono"${h?" hidden":""}>${_e(Pa(he(c.title)))}</span><span class="cap"><span class="t">${_e(he(c.title).trim())}</span>${u?`<span class="m">${_e(u)}</span>`:""}</span></button>`),p=d.querySelector("img");p&&p.addEventListener("error",()=>{p.remove(),d.querySelector(".mono").hidden=!1})})},addIndex(n,e){let t=e.top,i=355-e.bottom,s=66,r=58,o=252,a=30,l=e.side,c=Math.max(1,Math.floor((i-t-r)/s)),h=Math.max(1,Math.floor((i-t)/s)),u=[],d=0;for(;d<n.length;){let m=(u.length?h:c)*2;u.push(n.slice(d,d+m)),d+=m}let p=_e,g=m=>String(m).padStart(2,"0"),v=0;u.forEach((m,f)=>{let M=f?h:c,b=m.length>M?2:1,I=f?"":`<h2 class="ttl" style="left:${l}px;top:${t}px">${p(xe("together"))}.<span class="n">${n.length}</span></h2>`,P=m.map(D=>{let z=Ys(D),S=[D.date,he(D.place)].filter(Boolean).join(" | ");return v++,`<button type="button" class="go" data-go="${p(D.id)}" aria-label="${p(he(D.title))}"><span class="no">${g(v)}</span><span class="th">${z?Rr(z,'alt="" draggable="false" loading="lazy"'):""}<span class="mono"${z?" hidden":""}>${p(Pa(he(D.title)))}</span></span><span class="cap"><span class="t">${p(he(D.title).trim())}</span>${S?`<span class="m">${p(S)}</span>`:""}</span></button>`}).join("");this.addPanel("idx",l*2+b*o+(b-1)*a,I+`<div class="list" style="left:${l}px;top:${f?t:t+r}px;grid-template-columns:repeat(${b},${o}px);grid-template-rows:repeat(${Math.min(M,m.length)},${s}px);column-gap:${a}px">${P}</div>`).querySelectorAll("img").forEach(D=>D.addEventListener("error",()=>{let z=D.nextElementSibling;D.remove(),z&&(z.hidden=!1)}))})},addLogos(n){let e=Oi(),t=n.logos.length,i=e.top,s=355-e.bottom,r=34,o=e.side,a=96,l=50,c=Math.max(1,Math.floor((s-i-r)/l)),h=Math.max(1,Math.min(t,Math.ceil(t/c))),u=Math.ceil(t/h),d=Math.min(l,Math.floor((s-i-r)/u)),p=n.logos.map(m=>`<span class="lg"><img data-src="${_e(m)}" alt="" draggable="false"></span>`).concat(Array(u*h-t).fill('<span class="lg"></span>')).join(""),g=Math.round(i+r+Math.max(0,(s-i-r-u*d)/2));this.addPanel("logos",o*2+h*a,`<h3 class="lbl" style="left:${o}px;top:${i}px">${_e(xe("partners"))}</h3><div class="grid" style="left:${o}px;top:${g}px;grid-template-columns:repeat(${h},${a-1}px);grid-auto-rows:${d-1}px">${p}</div>`).querySelectorAll("img[data-src]").forEach(m=>Z0(m.dataset.src).then(f=>{m.src=f.src,m.classList.toggle("raw",!!f.raw)}))},addLink(n){let e=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,t=String(xe("visit")).replace(/\s*:\s*$/,""),i=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");this.addPanel("link",300,`<span class="lbl">${_e(t)}</span><a href="${_e(e)}" target="_blank" rel="noopener"><span class="host">${_e(i)}</span><span class="arr" aria-hidden="true">\u2197</span></a>`)},addPanel(n,e,t){let i=document.createElement("div");i.className="pnl "+n,i.style.width=e+"px",i.style.height=this.height+"px",i.innerHTML=`<div class="bgx"></div><div class="in">${t||""}</div>`,ds.appendChild(i),this.panels.push(i);let s=oe.animationMode?this.delay:0;return setTimeout(()=>i.classList.add("open"),s*1e3+20),this.delay+=.2,i},addGallery(n){let e=l=>Ir(l.src)==="image";if(n.filter(e).length<3){n.forEach(l=>this.addMedia(l.src,355,l.credit,!0,l.caption));return}let t=["mat","big2","bleed","collage","trio","bleed","duo","grid","offset","bleed","inset","bleed"],i={duo:2,big2:3,collage:3,trio:3,grid:4},s=String(this.post&&this.post.id||""),r=0;for(let l of s)r=r*31+l.charCodeAt(0)>>>0;let o=r%t.length;t[o]==="bleed"&&o++;let a=0;for(;a<n.length;){let l=n[a];if(!e(l)){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}let c=t[o++%t.length],h=i[c]||1,u=n.slice(a,a+h);if(h>1&&!(u.length===h&&u.every(e))){this.addMedia(l.src,355,l.credit,!0,l.caption),a++;continue}c==="mat"?this.addMat(l):c==="grid"?this.addGrid(u):c==="duo"?this.addDuo(u):c==="big2"?this.addBig2(u):c==="collage"?this.addCollage(u):c==="trio"?this.addTrio(u):c==="offset"?this.addOffset(l):c==="inset"?this.addInset(l):this.addMedia(l.src,355,l.credit,!0,l.caption),a+=h}},addFit(n,e,t,i=""){let s=e.map(()=>1.5),r=this.addPanel("media comp "+n,400,e.map(h=>`<img src="${_e(bt(h.src))}" alt="" draggable="false" decoding="async">`).join("")+(i?`<p class="mcap2">${_e(i)}</p>`:"")),o=[...r.querySelectorAll("img")],a=r.querySelector(".mcap2"),l=h=>Math.round(h)+"px",c=h=>{let u=t(s);o.forEach((d,p)=>{let[g,v,m,f]=u.boxes[p];Object.assign(d.style,{left:l(g),top:l(v),width:l(m),height:l(f)})}),a&&(u.cap?Object.assign(a.style,{left:l(u.cap[0]),top:l(u.cap[1]),width:l(u.cap[2]),display:""}):a.style.display="none"),r.style.width=l(u.w),h&&this.layout()};return o.forEach((h,u)=>{let d=()=>{h.naturalWidth&&(s[u]=h.naturalWidth/h.naturalHeight,c(!0))};h.addEventListener("load",d),h.addEventListener("error",()=>{h.style.visibility="hidden"}),h.complete&&d()}),c(!1),r},capOf(n){let e=n.find(t=>t.caption&&he(t.caption).trim());return e?he(e.caption).trim():""},addDuo(n){this.addFit("wht duo",n,s=>{let r=263*s[0],o=263*s[1];return{w:2*46+r+16+o,boxes:[[46,46,r,263],[46+r+16,46,o,263]]}})},addBig2(n){let e=Math.max(16,Math.min(34,Oi().top)),t=8,i=355-2*e;this.addFit("big2",n,s=>{let r=i*s[0],o=(i-t)/(1/s[1]+1/s[2]),a=o/s[1];return{w:2*e+r+t+o,boxes:[[e,e,r,i],[e+r+t,e,o,a],[e+r+t,e+a+t,o,i-t-a]]}})},addCollage(n){let e=(t,i,s)=>i/t>s?[s*t,s]:[i,i/t];this.addFit("wht collage",n,t=>{let[i,s]=e(t[0],210,263),r=46+i+26,[o,a]=e(t[1],230,160),l=30+a+20,[c,h]=e(t[2],150,315-l);return{w:Math.max(r+o,r+c+120)+46,boxes:[[46,46,i,s],[r,30,o,a],[r,l,c,h]],cap:[r+c+16,l+2,96]}},this.capOf(n))},addTrio(n){this.addFit("trio",n,i=>{let s=230,r=i[0]+i[1]+i[2];s*r>1100&&(s=1100/r);let o=(355-s)/2,a=34,l=i.map(c=>{let h=[a,o,s*c,s];return a+=s*c+10,h});return{w:a-10+34,boxes:l}})},addGrid(n){let e=Math.max(16,Math.min(34,Oi().top)),t=8,i=355-2*e;this.addFit("grid4",n,s=>{let r=s[0]+s[1],o=s[2]+s[3],a=t+(i-t)/(1/r+1/o),l=(a-t)/r,c=(a-t)/o,h=e+l+t;return{w:a+2*e,boxes:[[e,e,l*s[0],l],[e+l*s[0]+t,e,l*s[1],l],[e,h,c*s[2],c],[e+c*s[2]+t,h,c*s[3],c]]}})},addOffset(n){let i=n.caption?he(n.caption).trim():"";this.addFit("wht offset",[n],s=>{let r=Math.min(170*s[0],300),o=r/s[0];return{w:Math.max(360,46+r+170),boxes:[[46,309-o,r,o]],cap:[46+r+24,46,130]}},i)},addInset(n){let e=n.caption?he(n.caption).trim():"";this.addFit("inset",[n],t=>{let s=Math.min(200*t[0],360),r=s/t[0],o=(355-r)/2-(e?10:0);return{w:s+140,boxes:[[70,o,s,r]],cap:[70,o+r+10,s]}},e)},addMat(n){let t=n.caption?he(n.caption).trim():"",i=355-2*46,s=this.addPanel("media mat",Math.round(i*1.5+2*46),`<img src="${_e(bt(n.src))}" alt="" draggable="false" decoding="async" style="left:46px;top:46px;height:${i}px">`+(t?`<p class="mcap2" style="left:46px;top:319px">${_e(t)}</p>`:"")),r=s.querySelector("img"),o=()=>{if(!r.naturalWidth)return;let a=Math.round(r.naturalWidth*i/r.naturalHeight);s.style.width=a+2*46+"px";let l=s.querySelector(".mcap2");l&&(l.style.width=a+"px"),this.layout()};r.addEventListener("load",o),r.complete&&o(),r.addEventListener("error",()=>{s.remove(),this.panels=this.panels.filter(a=>a!==s),this.layout()})},addMedia(n,e=355,t="",i=!0,s=null){let r=Ir(n);if(r==="youtube"||r==="vimeo"){this.addEmbed(n,r,e,t);return}let o=r==="video",a=this.addPanel("media",e,""),l=document.createElement(o?"video":"img");if(l.draggable=!1,l.style.height=e+"px",o){Object.assign(l,{src:bt(n)+(/#t=/.test(n)?"":"#t=0.1"),playsInline:!0,preload:"metadata",controls:!1});let u=document.createElement("button");u.type="button",u.className="play",u.setAttribute("aria-label",xe("play")),u.addEventListener("click",()=>{l.controls=!0,l.play().catch(()=>{}),u.remove()}),a.querySelector(".in").appendChild(u)}else l.src=bt(n),l.alt="";let c=()=>{let u=Math.round(o?l.videoWidth*e/l.videoHeight:l.naturalWidth*e/l.naturalHeight);u&&(a.style.width=u+"px",this.layout())};l.addEventListener(o?"loadedmetadata":"load",c),l.addEventListener("error",()=>{!this.panels.includes(a)||this.panels.length<2||(a.remove(),this.panels=this.panels.filter(u=>u!==a),this.layout())}),a.querySelector(".in").prepend(l);let h=s?he(s).trim():"";if(h){let u=h.search(/[.:]\s/),d=u>0?h.slice(0,u+1):"",p=u>0?h.slice(u+2):h,g=document.createElement("div");g.className="mcap",g.innerHTML=(d?`<b>${_e(d)}</b> `:"")+_e(p),a.querySelector(".in").appendChild(g)}},addEmbed(n,e,t,i=""){let s=Math.round(t*16/9),o=this.addPanel("media embed",s,"").querySelector(".in"),a=e==="youtube"?Fa(n):za(n),l=document.createElement("div");l.className="cover";let c=e==="vimeo"&&a&&!G0(this.post,n),h=this.post&&this.post.thumb?bt(this.post.thumb):"",u=e==="youtube"&&a?`https://i.ytimg.com/vi/${a}/hqdefault.jpg`:c?"":h;if(u||c){let p=document.createElement("img");p.alt="",p.draggable=!1,p.onerror=()=>p.remove(),u?p.src=u:V0(a).then(g=>{g||h?p.src=g||h:p.remove()}),l.appendChild(p)}l.insertAdjacentHTML("beforeend",`<span class="brand">${e==="youtube"?"YouTube":"Vimeo"}</span>`);let d=document.createElement("button");d.type="button",d.className="play",d.setAttribute("aria-label",xe("play")),d.addEventListener("click",()=>{let p=document.createElement("iframe");p.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${a}?autoplay=1&playsinline=1&rel=0`:Ah(a,"autoplay=1&title=0&byline=0&portrait=0"),p.allow="autoplay; fullscreen; picture-in-picture",p.allowFullscreen=!0,p.title=e==="youtube"?"YouTube":"Vimeo",l.replaceWith(p)}),l.appendChild(d),o.appendChild(l)},addText(n,e){let{width:t,x:i,colW:s,press:r}=Po(e),o=Oi(),a=355-o.bottom;e==="project"&&H.section.def.skills&&(t=Math.min(t,261),i=26,s=t-52,r=!1);let l=(P,C)=>r?[P===0?o.side:Math.floor(o.gutter/2),P===C-1?o.side:Math.ceil(o.gutter/2)]:[i,t-i-s],c=he(n.title).trim();c&&!/[.!?]$/.test(c)&&(c+=".");let h=he(n.subtitle),u=H.section.def,d=n.tags.filter(P=>P!=="featured").map(P=>u.tags.find(C=>C.id===P)).filter(Boolean).map(P=>he(P.label)),p=d.length?`${_e(xe("postedIn"))} <span>${d.map(_e).join(", ")}</span>`:"",g=_e([n.date,he(n.place)].filter(Boolean).join(" | ")),v=Mr(he(n.body)),m=document.createElement("div");m.className="txt",m.style.cssText=`position:absolute;visibility:hidden;left:-9999px;top:0;width:${s}px`,document.body.appendChild(m),m.innerHTML=`<h2 class="ttl" style="position:static">${_e(c)}</h2>${h?`<p class="stl" style="position:static">${_e(h)}</p>`:""}`;let f=m.firstChild.offsetHeight,M=h?m.lastChild.offsetHeight+6:0,b=e==="project"?E0(n):[],I="";if(b.length){let P=(Dt.find(C=>C.def.id===b[0].section)||{}).def;I=`${_e((P?he(P.name):xe("skills")).trim())} ${b.map((C,D)=>`<span class="it"><button type="button" class="go" data-go="${_e(C.id)}">${_e(he(C.title).trim())}</button>${D<b.length-1?",":""}</span>`).join(" ")}`}if(e==="project"){let P=`<div class="fecha">${g}</div>${p?`<div class="posted">${p}</div>`:""}${I?`<div class="posted skl-tags">${I}</div>`:""}`;m.innerHTML=`<div class="meta" style="position:static">${P}</div>`;let C=m.firstChild.offsetHeight,D=a-13,z=D-C,S=H.section.def.skills?qo(n).length:0,w="",B=0;S&&(w=`<span class="lbl">${_e(xe(Ao(ve,n).length?"skillProjects":"together"))}</span><span class="row"><span class="n">${S}</span><span class="arr" aria-hidden="true">\u2192</span></span>`,m.innerHTML=`<div class="relp" style="position:static">${w}</div>`,B=m.firstChild.offsetHeight);let te=B?z-B-18:z,le=o.top+f+6,k=o.top+f+M+20,W=Sd(v,s,[a-k,a-o.top],m);m.innerHTML=`<div class="body" style="position:static">${W[W.length-1]}</div>`;let F=W.length===1?k:o.top;if(W[W.length-1]&&F+m.firstChild.offsetHeight>te-12){let Y=Sd(W.pop(),s,B?[a-F,te-12-o.top]:[te-12-F,te-12-o.top],m);W.push(...Y),B&&Y.length===1&&W.push("")}let ie=0;if(B){F=W.length===1?k:o.top,m.innerHTML=`<div class="body" style="position:static">${W[W.length-1]||""}</div>`;let Y=F+(W[W.length-1]?m.firstChild.offsetHeight:0)+18;ie=W[W.length-1]?Math.min(te,Math.max(Math.round((o.top+a)/2)-10,Y)):o.top+4}W.forEach((Y,q)=>{let J=q===W.length-1,[ee,ue]=l(q,W.length);this.addPanel("txt",ee+s+ue,(q===0?`<h2 class="ttl" style="left:${ee}px;top:${o.top}px;width:${s}px">${_e(c)}</h2>${h?`<p class="stl" style="left:${ee}px;top:${le}px;width:${s}px">${_e(h)}</p>`:""}`:"")+`<div class="body" style="left:${ee}px;top:${q===0?k:o.top}px;width:${s}px">${Y}</div>`+(J&&B?`<div class="relp" style="left:${ee}px;top:${ie}px;width:${s}px">${w}</div>`:"")+(J?`<div class="meta" style="left:${ee}px;top:${z}px;width:${s}px">${P}</div>`:""))})}else{let P=13+f+4,C=13+f+M+10,D=C+20,z=D+18+20;Sd(v,s,[355-z-14,327],m).forEach((w,B)=>{this.addPanel("txt",t,(B===0?`<h2 class="ttl" style="left:${i}px;top:13px;width:${s}px">${_e(c)}</h2>${h?`<p class="stl" style="left:${i}px;top:${P}px;width:${s}px">${_e(h)}</p>`:""}<div class="fecha" style="left:${i}px;top:${C}px;width:${s}px">${g}</div><div class="posted" style="left:${i}px;top:${D}px;width:${s}px">${p}</div>`:"")+`<div class="body" style="left:${i}px;top:${B===0?z:14}px;width:${s}px">${w}</div>`)})}m.remove()},addTeam(n){let e=n.team.map(C=>ve.posts.find(D=>D.id===C)).filter(Boolean),t=Oi(),i=t.top,s=355-t.bottom,r=t.side,o=Math.max(24,Math.min(36,t.gutter)),a=C=>String(C+1).padStart(2,"0"),l=this.addPanel("team",900,`<h2 class="ttl" style="left:${r}px;top:${i}px">${_e(xe("who"))}</h2><ol class="idx" style="left:${r}px">${e.map((C,D)=>`<li data-i="${D}"><b>${a(D)}</b><span><span class="nm">${_e(he(C.title).trim())}</span>${he(C.subtitle).trim()?`<i>${_e(he(C.subtitle).trim())}</i>`:""}</span></li>`).join("")}`+(n.credits?`<li class="more"><span><i>${_e(xe("with"))}</i> ${_e(n.credits)}</span></li>`:"")+"</ol>"),c=l.querySelector(".in"),h=c.querySelector(".ttl"),u=c.querySelector(".idx"),d=Math.ceil(h.offsetTop+h.offsetHeight+18);u.style.top=d+"px",u.style.height=Math.max(60,s-d)+"px";let p=Math.max(200,u.scrollWidth,Math.min(h.scrollWidth,260)),g=[116,82,98,70,108,76,90,66],v=r+p+o,m=v,f=i,M=0,b=0,I=v;e.forEach((C,D)=>{let z=g[D%g.length]*(e.length>12?.8:1),S=16;f+z+S>s&&f>i+1&&(m+=M+16,b++,f=i+(b%2?34:0),M=0);let w=Zo(C)&&C.published!==!1,B=document.createElement(w?"button":"div");B.className="face"+(w?" go":""),w&&(B.type="button",B.dataset.go=C.id),B.dataset.i=D,Object.assign(B.style,{left:m+"px",top:f+"px",width:z+"px",height:z+"px"});let te=!C.thumb&&(Bd(C).find(k=>k!==n)||Bd(C)[0]),le=te?` style="background:linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('${_e(bt(Ys(te))).replace(/'/g,"%27")}') center/cover"`:"";B.innerHTML=(C.thumb?Rr(C.thumb,'alt="" draggable="false"'):`<span class="mono"${le}>${_e(Pa(he(C.title)))}</span>`)+`<b class="n">${a(D)}</b>`,B.setAttribute("aria-label",he(C.title)),c.appendChild(B),M=Math.max(M,z),f+=z+S,I=Math.max(I,m+z)}),l.style.width=Math.ceil((e.length?I:r+p)+r)+"px";let P=(C,D)=>c.querySelectorAll(`[data-i="${C}"]`).forEach(z=>z.classList.toggle("on",D));c.querySelectorAll("[data-i]").forEach(C=>{["pointerenter","focus"].forEach(D=>C.addEventListener(D,()=>P(C.dataset.i,!0))),["pointerleave","blur"].forEach(D=>C.addEventListener(D,()=>P(C.dataset.i,!1)))}),c.querySelectorAll(".idx li[data-i]").forEach(C=>{let D=c.querySelector(`.face.go[data-i="${C.dataset.i}"]`);D&&(C.classList.add("go"),C.dataset.go=D.dataset.go)})},addForm(){let n=Oi(),{x:e,colW:t}=Po("project"),i=n.gutter||40;this.addPanel("txt contact cform",e+t*2+i+e,`<div class="cbox" style="left:${e}px;top:${n.top}px;bottom:${n.bottom}px;width:${t*2+i}px;--cf-gap:${i}px">${$0("pnl")}</div>`),q0(ds.lastElementChild)},addContact(n){let e=Oi(),{width:t,x:i,colW:s}=Po("project"),r=_e,o=(n.link||"").replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,""),a=he(n.title).trim();a&&!/[.!?]$/.test(a)&&(a+=".");let l=he(n.subtitle).trim();this.addPanel("txt contact",t,`<div class="cbox" style="left:${i}px;top:${e.top}px;bottom:${e.bottom}px;width:${s}px"><h2 class="ttl">${r(a)}</h2>${l?`<p class="stl">${r(l)}</p>`:""}<div class="body">${j0(Mr(he(n.body)))}${n.link?`<p class="site"><a href="${r(n.link)}" target="_blank" rel="noopener">${r(o)}</a></p>`:""}</div></div>`)},layout(){let n=0;this.panels.forEach(t=>{t.style.left=n+"px",n+=t.offsetWidth-2});let e=this.panels[this.panels.length-1];this.end=e?-parseFloat(e.style.left):0},close(){if(!this.open)return 0;this.open=!1;let n=oe.animationMode?.8:0;return tn.classList.add("closing"),setTimeout(()=>{this.open||this.clear()},n*1e3),n},clear(){ds.querySelectorAll("video").forEach(n=>n.pause()),ds.innerHTML="",this.panels=[],tn.hidden=!0,tn.classList.remove("closing")},action(n){if(this.panels.length<2)return;let e=0;if(this.finalpos>0)e=0;else if(this.finalpos<this.end)e=this.panels.length-1;else for(let t=1;t<this.panels.length;t++){let i=this.panels[t-1],s=this.panels[t];if(-this.finalpos>=i.offsetLeft+i.offsetWidth/2&&-this.finalpos<s.offsetLeft+s.offsetWidth/2){e=t;break}}n==="RIGHT"&&(this.finalpos=-this.panels[Math.min(e+1,this.panels.length-1)].offsetLeft),n==="LEFT"&&(this.finalpos=-this.panels[Math.max(e-1,0)].offsetLeft)},rubber(n){let e=Math.min(0,this.end),t=Bc,i=s=>t*(1-1/(s/t*.55+1));return n>0?i(n):n<e?e-i(e-n):n},push(n){let e=Math.min(0,this.end),t=this.finalpos+n;if(t>0||t<e){let i=t>0?t:t-e,s=!this.over||Math.sign(i)===Math.sign(this.over);this.finalpos=Math.max(e,Math.min(0,t)),this.ov+=i*12*(s?Math.pow(Math.max(0,1-Math.abs(this.over)/Bc),2):1)}else this.finalpos=t},step(){if(!this.open)return;let n=Math.min(0,this.end);if(this.dragging){let t=(rh-this.xprev)*1.5/(this.scale||1);this.finalpos+=t,this.vel=this.vel*.6+t*.4,this.x-=(this.x-this.finalpos)*_n(oe.easing),this.xprev=rh}else if(Math.abs(this.finalpos-this.x)>.5?this.x-=(this.x-this.finalpos)*_n(oe.easing*2/3):this.finalpos>0?this.finalpos=0:this.finalpos<n&&(this.finalpos=n),this.over||this.ov){let t=Math.min(.1,Go/o0),i=17,s=Math.exp(-i*t),r=this.over,o=this.ov,a=o+i*r;this.over=Math.max(-Bc,Math.min(Bc,(r+a*t)*s)),this.ov=(o-i*a*t)*s,Math.abs(this.over)<.2&&Math.abs(this.ov)<5&&(this.over=this.ov=0)}let e=Math.round(this.x+this.over);e!==this.tx&&(this.tx=e,ds.style.transform=`translateX(${e}px)`)}},Jt=document.createElement("div");Jt.id="postv";Jt.hidden=!0;Jt.setAttribute("role","dialog");Jt.setAttribute("aria-modal","true");document.body.appendChild(Jt);var eS=()=>mh(),Js={open:!1,pushed:!1,keepHistory:!1,post:null,build(n,e){this.post=n,this.open=!0;let t=H.section.def,i=n.media.filter(h=>h&&h.src),s=_e,r=he(n.title).trim();r&&!/[.!?]$/.test(r)&&(r+=".");let o=he(n.subtitle).trim(),a=[];a.push(`<div class="pv-bar"><span class="pv-sec">${s(he(t.name).trim())}</span><button type="button" class="pv-x" aria-label="${s(xe("close"))}"><span></span><span></span></button></div>`);let l=i[0]?i[0]:n.thumb?{src:n.thumb}:null;if(l&&a.push(this.media(l,"pv-hero"+(!i[0]&&Uo(n)?" pv-logo":""))),e==="place"){let h=(n.link||"").replace(/^https?:\/\/(www\.)?/,"");a.push(`<div class="pv-txt"><h1 class="pv-ttl">${s(r)}</h1>${o?`<p class="pv-stl">${s(o)}</p>`:""}`+(n.link?`<p class="pv-site"><a href="${s(n.link)}" target="_blank" rel="noopener">${s(h)}</a></p>`:"")+`<div class="pv-body pv-contact">${j0(Mr(he(n.body)))}</div></div>`+(Bo.to?`<div class="pv-form">${$0("pv")}</div>`:""))}else{if(a.push(this.text(n,r,o,t)),t.skills&&a.push(this.relations(n)),e==="text"?i.slice(1).forEach(h=>a.push(this.media(h,"pv-full"))):a.push(this.gallery(i.slice(1))),t.skills||a.push(this.relations(n)),e!=="text"&&(n.team&&n.team.length||n.credits)&&a.push(this.team(n)),n.logos&&n.logos.length&&a.push(`<section class="pv-logos"><h2 class="pv-h">${s(xe("partners"))}</h2><div class="pv-lgrid">${n.logos.map(h=>`<span><img data-src="${s(h)}" alt=""></span>`).join("")}</div></section>`),n.link){let h=/^https?:\/\//.test(n.link)?n.link:"https://"+n.link,u=n.link.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"");a.push(`<p class="pv-link"><span>${s(String(xe("visit")).replace(/\s*:\s*$/,""))}</span><a href="${s(h)}" target="_blank" rel="noopener">${s(u)} \u2197</a></p>`)}a.push(this.next(n))}Jt.innerHTML=`<div class="pv-page">${a.join("")}</div>`;let c=Jt.querySelector(".pv-form");if(c&&q0(c),this.wire(),Jt.hidden=!1,Jt.scrollTop=0,Jt.offsetWidth,Jt.classList.add("on"),document.body.classList.add("pv-open"),!this.pushed&&!wt)try{history.pushState({hcv:1},"",location.href),this.pushed=!0}catch{}},text(n,e,t,i){let s=_e,r=Mr(he(n.body)),o=r.split(/(?=<h3[\s>])/i),a=/^\s*<h3/i.test(o[0])?"":o.shift(),l=o.map(p=>{let g=/^<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*)$/i.exec(p.trim());return g?`<details class="pv-fold"><summary>${g[1]}</summary><div class="pv-body">${g[2]}</div></details>`:p}).join(""),c=n.tags.filter(p=>p!=="featured").map(p=>i.tags.find(g=>g.id===p)).filter(Boolean).map(p=>he(p.label)),h=[n.date,he(n.place)].filter(Boolean).join(" | "),u=E0(n),d="";if(u.length){let p=(Dt.find(g=>g.def.id===u[0].section)||{}).def;d=`<p class="pv-meta"><span>${s((p?he(p.name):xe("skills")).trim())}</span> ${u.map(g=>`<button type="button" class="go" data-go="${s(g.id)}">${s(he(g.title).trim())}</button>`).join(", ")}</p>`}return`<div class="pv-txt"><h1 class="pv-ttl">${s(e)}</h1>${t?`<p class="pv-stl">${s(t)}</p>`:""}`+(h?`<p class="pv-date">${s(h)}</p>`:"")+`<div class="pv-body">${a||""}</div>`+(l?`<div class="pv-folds">${l}</div>`:"")+(c.length?`<p class="pv-meta"><span>${s(xe("postedIn"))}</span> ${c.map(s).join(", ")}</p>`:"")+d+"</div>"},media(n,e){let t=_e,i=Ir(n.src),s=n.caption?he(n.caption).trim():"",r=s?`<figcaption>${t(s)}</figcaption>`:"";if(i==="youtube"||i==="vimeo"){let o=i==="youtube"?Fa(n.src):za(n.src),a=i==="vimeo"&&o&&!G0(this.post,n.src),l=i==="youtube"&&o?`https://i.ytimg.com/vi/${o}/hqdefault.jpg`:a?"":this.post&&this.post.thumb?bt(this.post.thumb):"";return`<figure class="${e} pv-embed" data-kind="${i}" data-id="${t(o||"")}"><div class="pv-cover">${l?`<img src="${t(l)}" alt="">`:a?`<img data-vimeo="${t(o)}" alt="">`:""}<button type="button" class="play" aria-label="${t(xe("play"))}"></button><span class="brand">${i==="youtube"?"YouTube":"Vimeo"}</span></div>${r}</figure>`}return i==="video"?`<figure class="${e}"><video src="${t(bt(n.src)+(/#t=/.test(n.src)?"":"#t=0.1"))}" controls playsinline preload="metadata"></video>${r}</figure>`:`<figure class="${e}"><img src="${t(bt(n.src))}" alt="" loading="lazy" decoding="async">${r}</figure>`},gallery(n){let e=u=>Ir(u.src)==="image",t=[],i=_e,s=u=>`<div class="pv-row">${u.map(d=>`<img src="${i(bt(d.src))}" alt="" loading="lazy" decoding="async">`).join("")}</div>`,r=["full","mat","pair","full","quad","full","big2","mat","full","pair"],o={pair:2,quad:4,big2:3},a=String(this.post.id||""),l=0;for(let u of a)l=l*31+u.charCodeAt(0)>>>0;let c=l%r.length,h=0;for(;h<n.length;){let u=n[h];if(!e(u)){t.push(this.media(u,"pv-full")),h++;continue}let d=r[c++%r.length],p=o[d]||1,g=n.slice(h,h+p);if(p>1&&!(g.length===p&&g.every(e))){t.push(this.media(u,"pv-full")),h++;continue}let v=g.map(f=>f.caption?he(f.caption).trim():"").filter(Boolean)[0]||"",m=v?`<figcaption>${i(v)}</figcaption>`:"";d==="mat"?t.push(this.media(u,"pv-mat")):d==="pair"?t.push(`<figure class="pv-grid">${s(g)}${m}</figure>`):d==="quad"?t.push(`<figure class="pv-grid">${s(g.slice(0,2))}${s(g.slice(2))}${m}</figure>`):d==="big2"?t.push(`<figure class="pv-grid"><img class="pv-one" src="${i(bt(g[0].src))}" alt="" loading="lazy">${s(g.slice(1))}${m}</figure>`):t.push(this.media(u,"pv-full")),h+=p}return t.length?`<div class="pv-gal">${t.join("")}</div>`:""},relations(n){let e=qo(n);if(!e.length)return"";let t=_e,i=Ao(ve,n).length>0;return`<section class="pv-rel"><h2 class="pv-h">${t(xe(i?"skillProjects":"together"))} <span>${e.length}</span></h2><div class="pv-tiles">`+e.map(s=>{let r=Ys(s),o=[s.date,he(s.place)].filter(Boolean).join(" | ");return`<button type="button" class="go pv-tile" data-go="${t(s.id)}">${r?Rr(r,'alt="" loading="lazy"'):`<span class="mono">${t(Pa(he(s.title)))}</span>`}<span class="t">${t(he(s.title).trim())}</span>${o?`<span class="m">${t(o)}</span>`:""}</button>`}).join("")+"</div></section>"},team(n){let e=_e,t=(n.team||[]).map(i=>ve.posts.find(s=>s.id===i)).filter(Boolean);return`<section class="pv-team"><h2 class="pv-h">${e(xe("who"))}</h2><div class="pv-faces">`+t.map(i=>{let s=Zo(i)&&i.published!==!1,r=s?"button":"div";return`<${r} ${s?`type="button" class="go pv-face" data-go="${e(i.id)}"`:'class="pv-face"'}>${i.thumb?Rr(i.thumb,'alt="" loading="lazy"'):`<span class="mono">${e(Pa(he(i.title)))}</span>`}<span class="t">${e(he(i.title).trim())}</span>${he(i.subtitle).trim()?`<span class="m">${e(he(i.subtitle).trim())}</span>`:""}</${r}>`}).join("")+"</div>"+(n.credits?`<p class="pv-with"><i>${e(xe("with"))}</i> ${e(n.credits)}</p>`:"")+"</section>"},next(n){let e=H.data&&H.data.list||[],t=e.indexOf(n);if(e.length<2||t<0)return"";let i=e[(t+1)%e.length],s=Ys(i),r=_e;return`<button type="button" class="go pv-next" data-go="${r(i.id)}"><span class="l">${r(xe("nextProject"))} \u2192</span><span class="t">${r(he(i.title).trim())}</span>${s?Rr(s,'alt="" loading="lazy"'):""}</button>`},wire(){Jt.querySelector(".pv-x").addEventListener("click",()=>xs()),Jt.querySelectorAll(".pv-row img").forEach(n=>{let e=()=>{n.naturalWidth&&(n.style.flexGrow=(n.naturalWidth/n.naturalHeight).toFixed(3))};n.addEventListener("load",e),n.complete&&e()}),Jt.querySelectorAll("img[data-vimeo]").forEach(n=>{let e=this.post&&this.post.thumb?bt(this.post.thumb):"";V0(n.dataset.vimeo).then(t=>{t||e?n.src=t||e:n.remove()})}),Jt.querySelectorAll("img").forEach(n=>n.addEventListener("error",()=>{let e=n.closest("figure.pv-full, figure.pv-mat");e&&!e.classList.contains("pv-hero")?e.remove():n.style.visibility="hidden"})),Jt.querySelectorAll(".pv-lgrid img[data-src]").forEach(n=>Z0(n.dataset.src).then(e=>{n.src=e.src,n.classList.toggle("raw",!!e.raw)})),Jt.querySelectorAll(".pv-embed").forEach(n=>n.querySelector(".play").addEventListener("click",()=>{let e=n.dataset.kind,t=n.dataset.id,i=document.createElement("iframe");i.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&playsinline=1&rel=0`:Ah(t,"autoplay=1&title=0&byline=0&portrait=0"),i.allow="autoplay; fullscreen; picture-in-picture",i.allowFullscreen=!0,i.title=e==="youtube"?"YouTube":"Vimeo",n.querySelector(".pv-cover").replaceWith(i)}))},close(){if(this.open){if(this.open=!1,Jt.querySelectorAll("video").forEach(n=>n.pause()),Jt.classList.remove("on"),document.body.classList.remove("pv-open"),setTimeout(()=>{this.open||(Jt.hidden=!0,Jt.innerHTML="")},420),this.keepHistory){this.keepHistory=!1;return}if(this.pushed){this.pushed=!1;try{history.back()}catch{}}}}};Jt.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),Js.keepHistory=!0,el(e.dataset.go),Js.keepHistory=!1)});Jt.addEventListener("keydown",n=>{n.code==="Escape"&&xs()});var wd=new Map;function Z0(n){if(wd.has(n))return wd.get(n);let e=gs(n).then(t=>{let i=Math.min(1,480/Math.max(t.naturalWidth,t.naturalHeight)),s=Math.max(1,Math.round(t.naturalWidth*i)),r=Math.max(1,Math.round(t.naturalHeight*i)),o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(t,0,0,s,r);let l;try{l=a.getImageData(0,0,s,r)}catch{return{src:bt(n),raw:!0}}let c=l.data,h=w=>(.2126*c[w]+.7152*c[w+1]+.0722*c[w+2])/255,u=0,d=0,p=0,g=w=>{u++,c[w+3]<40?d++:p+=h(w)};for(let w=0;w<s;w++)g(w*4),g(((r-1)*s+w)*4);for(let w=0;w<r;w++)g(w*s*4),g((w*s+s-1)*4);let v=d>u*.5,m=v?0:p/Math.max(1,u-d),f=0,M=0;if(v){for(let w=0;w<c.length;w+=16)c[w+3]>128&&(f+=h(w),M++);f=M?f/M:0}let b=v?f<.5?1:0:m,I=Math.max(.25,Math.max(b,1-b));for(let w=0;w<c.length;w+=4){let B=c[w+3]/255,te=h(w),le=(Math.max(c[w],c[w+1],c[w+2])-Math.min(c[w],c[w+1],c[w+2]))/255,k=Math.min(1,Math.max(Math.abs(te-b),le*.8)/I);k=k<.08?0:Math.min(1,(k-.08)*1.35),c[w]=c[w+1]=c[w+2]=255,c[w+3]=Math.round(255*k*B)}a.putImageData(l,0,0);let P=s,C=r,D=-1,z=-1;for(let w=0;w<r;w++)for(let B=0;B<s;B++)c[(w*s+B)*4+3]>24&&(B<P&&(P=B),B>D&&(D=B),w<C&&(C=w),w>z&&(z=w));if(D<P)return{src:o.toDataURL("image/png")};let S=document.createElement("canvas");return S.width=D-P+1,S.height=z-C+1,S.getContext("2d").drawImage(o,-P,-C),{src:S.toDataURL("image/png")}}).catch(()=>({src:bt(n),raw:!0}));return wd.set(n,e),e}function Sd(n,e,t,i){let s=document.createElement("div");s.className="body",s.style.cssText=`position:static;width:${e}px`,i.innerHTML="",i.appendChild(s);let r=document.createElement("div");r.innerHTML=n;let o=[],a=null;r.childNodes.forEach(d=>{if(d.nodeType===1&&["P","UL","OL","H3"].includes(d.nodeName)){a=null,d.textContent.trim()&&o.push(d);return}if(d.nodeType===1&&d.nodeName==="BR"){a=null;return}d.nodeType===3&&!d.textContent.trim()&&!a||(a||(a=document.createElement("p"),o.push(a)),a.appendChild(d.cloneNode(!0)))});let l=[],c=0,h=()=>t[Math.min(c,t.length-1)],u=()=>{for(;s.lastChild&&!s.lastChild.textContent.trim();)s.removeChild(s.lastChild);let d=s.lastElementChild,p=d&&d.nodeName==="H3"&&s.children.length>1?s.removeChild(d):null;l.push(s.innerHTML),s.innerHTML="",c++,p&&s.appendChild(p)};for(let d of o){let p=d.cloneNode(!0);if(s.appendChild(p),s.offsetHeight<=h())continue;if(s.removeChild(p),d.nodeName==="H3"){s.childNodes.length&&u(),s.appendChild(d.cloneNode(!0));continue}if(d.nodeName==="UL"||d.nodeName==="OL"){let f=+(d.getAttribute("start")||1),M=d.cloneNode(!1),b=0;s.appendChild(M);for(let I of[...d.children]){let P=I.cloneNode(!0);M.appendChild(P),b++,!(s.offsetHeight<=h())&&(M.children.length===1&&[...s.children].every(C=>C===M||C.nodeName==="H3")||(M.removeChild(P),u(),M=d.cloneNode(!1),d.nodeName==="OL"&&M.setAttribute("start",String(f+b-1)),s.appendChild(M),M.appendChild(P)))}continue}let g=[];(function f(M,b){M.childNodes.forEach(I=>{I.nodeType===3?I.textContent.split(/(\s+)/).forEach(P=>P&&g.push({w:P,path:b})):f(I,[...b,I])})})(d,[]);let v=document.createElement("p");s.appendChild(v);let m=({w:f,path:M})=>{let b=v;for(let I of M){let P=b.lastChild;(!P||P.nodeType!==1||P.dataset.src!==I.outerHTML)&&(P=I.cloneNode(!1),P.dataset.src=I.outerHTML,b.appendChild(P)),b=P}b.appendChild(document.createTextNode(f))};for(let f of g)if(m(f),s.offsetHeight>h()){let M=function b(I){return I.lastChild&&I.lastChild.nodeType===1?b(I.lastChild):I}(v);M.removeChild(M.lastChild),u(),v=document.createElement("p"),s.appendChild(v),f.w.trim()&&m(f)}}return(s.textContent.trim()||!l.length)&&l.push(s.innerHTML),l.map(d=>d.replace(/ data-src="[^"]*"/g,""))}var rh=0,fs=null;tn.addEventListener("pointerdown",n=>{n.target.closest("a, .face, iframe, input, textarea, select, label, button")||n.target.tagName==="VIDEO"&&n.target.controls&&n.clientY>n.target.getBoundingClientRect().bottom-52||(fs={id:n.pointerId,x:n.clientX,y:n.clientY},rh=n.clientX)});tn.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&n.buttons===0&&(fs||Ye.dragging)){Ha();return}if(rh=n.clientX,!fs||n.pointerId!==fs.id||Ye.dragging)return;let e=n.clientX-fs.x,t=n.clientY-fs.y;if(Math.abs(e)>6&&Math.abs(e)>=Math.abs(t)){Ye.dragging=!0,Ye.xprev=fs.x,Ye.finalpos=Ye.x,Ye.vel=0;try{tn.setPointerCapture(n.pointerId)}catch{}tn.classList.add("grabbing")}});tn.addEventListener("click",n=>{Ye.justDragged&&(n.preventDefault(),n.stopPropagation(),Ye.justDragged=!1)},!0);tn.addEventListener("wheel",n=>{if(n.preventDefault(),!Ye.open||Ye.dragging)return;let e=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY,t=n.deltaMode===1?16:1;Ye.push(-e*t/(Ye.scale||1))},{passive:!1});window.addEventListener("wheel",n=>{Math.abs(n.deltaX)>Math.abs(n.deltaY)&&!n.target.closest(".scroll-x")&&n.preventDefault()},{passive:!1});var Ha=()=>{Ye.dragging&&(Ye.justDragged=!0,setTimeout(()=>{Ye.justDragged=!1},0),Ye.finalpos+=(Ye.vel||0)*10),Ye.vel=0,fs=null,Ye.dragging=!1,tn.classList.remove("grabbing")};tn.addEventListener("pointerup",Ha);tn.addEventListener("pointercancel",Ha);tn.addEventListener("lostpointercapture",n=>{n.target===tn&&Ha()});window.addEventListener("pointerup",()=>{(fs||Ye.dragging)&&Ha()});xf.addEventListener("pointerdown",()=>xs());tn.addEventListener("click",n=>{if(!Ye.open||Ye.justDragged||n.target.closest(".pnl, a, button, iframe, video, input"))return;let e=tn.querySelectorAll("#strip .pnl");if(!e.length)return;let t=e[0].getBoundingClientRect(),i=e[e.length-1].getBoundingClientRect();(n.clientX>i.right+4||n.clientX<t.left-4)&&xs()});function Qo(n=-1,e=0){h0(),n===-1&&(n=H.currentSection||0),Ai(),n!==H.currentSection&&wf(),H.currentSection=n,H.resetData(),H.selected=e,Mh(),pf(),Th();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}nr("#"+H.section.def.id,he(H.section.def.name).trim())}function J0(){Ai(),H.selected=0,Mh(),k0()}function K0(n){(n==="newer"?H.data.newer():H.data.older())&&J0()}function tS(n){H.data.changeCategory(n),O0.textContent=H.data.currentCatName,J0(),Th()}function Yo(n){Ai(),H.selected=n,Io()}var Ng=0;function el(n){let e=ve.posts.find(h=>h.id===n),t=e?Dt.findIndex(h=>h.def.id===e.section):-1;if(t<0||!bn)return;h0(),Ai();let i=t!==H.currentSection;i&&wf(),H.currentSection=t,i&&H.resetData();let s=H.data,r=!s.list.includes(e);r&&s.changeCategory(s.categoryList.some(h=>h.id==="")?"":s.tagOf(e));let o=s.list.indexOf(e);if(o<0)return;let a=o<s.first||o>=s.last;if(a){let h=s.per;s.first=Math.floor(o/h)*h,s.last=Math.min(s.list.length,s.first+h),s.posts=s.list.slice(s.first,s.last)}let l=s.posts.indexOf(e);if(!i&&!r&&!a&&Pe){Yo(l);return}H.selected=l,Mh(),pf(),Th();try{history.replaceState(null,"","#"+H.section.def.id)}catch{}nr("#"+H.section.def.id,he(H.section.def.name).trim());let c=++Ng;Vo(.5,()=>{c===Ng&&H.data===s&&s.posts[l]===e&&Yo(l)})}ds.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),el(e.dataset.go))});var nS=(n,e=H.section&&H.section.def)=>e?n&&e.open==="focus3d"&&((e.tags||[]).some(t=>t.page&&(n.tags||[]).includes(t.id))||!Uo(n))?"strip":e.open:"",Ch=()=>nS(H.data&&H.data.posts[H.selected]);function Io(){if(!Pe||!H.data.posts[H.selected])return;let n=Ch();tl(null),Sf(null),Ai(),H.postOpen=!0,(n==="strip"||n==="focus3d")&&eS()?(Js.build(H.data.posts[H.selected],H.section.def.card),Xo.classList.add("hidden"),qi=!1,xn.classList.remove("dragging"),Jn=!0,Oo(H.selected)):n==="strip"?(xf.hidden=!1,Ye.build(H.data.posts[H.selected],H.section.def.card),Xo.classList.add("hidden"),qi=!1,xn.classList.remove("dragging"),Jn=!0,Oo(H.selected)):(Jn=!0,Oo(H.selected),Pe.openPost3D()),Pr(),gf(H.data.posts[H.selected])}function xs(){H.postOpen&&(H.postOpen=!1,Js.open?(Js.close(),Xo.classList.remove("hidden")):Ye.open?(Ye.close(),xf.hidden=!0,Xo.classList.remove("hidden")):Pe&&Pe.closePost3D(),Pr(),gf(null))}function Ai(){H.postOpen&&xs()}function iS(){l0(!oe.animationMode),H0(),Pe&&Pe.resetPostPosition(),Jn=!0}var bs=oe.cameraDistanceProportion,Qs=()=>((ws()||{}).def||{}).layout==="map",sS=()=>Qs()?60:oe.cameraZoomMin;function bf(){oe.cameraDistanceProportion<oe.cameraZoomMax&&(oe.cameraDistanceProportion=Math.min(oe.cameraZoomMax,Math.trunc(oe.cameraDistanceProportion*1.5)),Q0())}function Mf(){oe.cameraDistanceProportion>sS()&&(oe.cameraDistanceProportion=Math.trunc(oe.cameraDistanceProportion/1.5),Q0())}function Q0(){(Qs()||li())&&(H.cameraY=Ba()),P0()}function wf(){oe.cameraDistanceProportion!==bs&&(oe.cameraDistanceProportion=bs,wh())}var Dg=!1;function ey(n){if(!bn)return;Dg||(Dg=!0,qd(),z0=setTimeout(sh,6e3));let e=H.postOpen&&Ye.open,t=H.postOpen&&!Ye.open;switch(n.code){case"ArrowLeft":us("ArrowLeft"),e?Ye.action("LEFT"):(Ai(),vd("PREVIOUS"),t&&Io());break;case"ArrowRight":us("ArrowRight"),e?Ye.action("RIGHT"):(Ai(),vd("NEXT"),t&&Io());break;case"ArrowUp":us("ArrowUp"),e||Tw();break;case"ArrowDown":us("ArrowDown"),e||Aw();break;case"Tab":us("Tab"),e?(xs(),vd("NEXT"),Io()):Qo((H.currentSection+1)%Dt.length);break;case"KeyK":ir.classList.contains("open")?sh():qd();break;case"KeyA":us("KeyA"),iS();break;case"Equal":case"NumpadAdd":us("Equal"),e||Mf();break;case"Minus":case"NumpadSubtract":us("Minus"),e||bf();break;case"Space":us("Space"),Pe&&Pe.checkPostSelected(),H.postOpen?xs():Io();break;case"Escape":Ai();break;default:return}n.preventDefault()}document.addEventListener("click",n=>{let e=n.target.closest("#menu button, #cats button, #kb button, #langs button");e&&n.detail>0&&e.blur()});window.addEventListener("keydown",n=>{n.ctrlKey||n.metaKey||n.altKey||!St||(n.target instanceof HTMLButtonElement||n.target.id==="logo")&&(n.code==="Space"||n.code==="Enter")||n.target.closest&&n.target.closest("input, textarea, select, [contenteditable]")||ey(n)});var Ug=new Mc,Og=new tt;function ah(n,e){if(!Ms||!Pe)return null;Og.set(n/Ft*2-1,-(e/Ut)*2+1),Ug.setFromCamera(Og,hn);let t=Ug.intersectObjects([...ws().blockers,...Pe.meshes],!1)[0];return t&&t.object.userData.post?t.object.userData:rS(n,e)||(t?t.object.userData:null)}var Fc=new U;function rS(n,e){if(!Pe||!Pe.net)return null;let t=null,i=14;for(let s of Pe.net.hits){if(!s.visible)continue;s.getWorldPosition(Fc).project(hn);let r=(Fc.x+1)/2*Ft-n,o=(1-Fc.y)/2*Ut-e,a=Math.hypot(r,o);a<i&&Fc.z<1&&(i=a,t=s.userData)}return t}var Bn=null,Ei=null,Xd=0,Yd=0;xn.addEventListener("pointerdown",n=>{if(!bn||Bn!==null||n.pointerType==="mouse"&&n.button!==0||n.pointerType==="touch"&&$i.size>0)return;js=Xd=n.clientX,Zs=Yd=n.clientY;let e=ah(n.clientX,n.clientY);Ai(),Ei=e&&e.post?e:null,Ei&&Ei.face==="back"&&(Ei.post.view.focus(Ei.post.id_),Jn=!0),Bn=n.pointerId,xn.setPointerCapture(n.pointerId),xn.classList.add("dragging"),qc=js,Xc=Zs,Jn=!1,qi=!0});function Ur(n,e=!1){if(n.pointerId===Bn){if(Bn=null,xn.classList.remove("dragging"),qi&&(Jn=!0,qi=!1,li()&&(H.degreeCamera=ff(H.degreeCamera),H.cameraY=Ba())),e){Ei=null;return}if(Ei&&Ei.face==="front"&&Math.hypot(n.clientX-Xd,n.clientY-Yd)<6){let t=ah(n.clientX,n.clientY);t&&t.post===Ei.post&&Yo(t.post.id_)}else if(!Ei&&Math.hypot(n.clientX-Xd,n.clientY-Yd)<6){let t=ah(n.clientX,n.clientY);t&&t.netNode?A0(t.netNode,n.clientX,n.clientY):vh()}Ei=null}}xn.addEventListener("pointerup",Ur);xn.addEventListener("pointercancel",n=>Ur(n,!0));xn.addEventListener("lostpointercapture",n=>{n.pointerId===Bn&&Ur(n,!0)});window.addEventListener("pointerup",n=>{Bn!==null&&n.pointerId===Bn&&n.target!==xn&&Ur(n,!0)});window.addEventListener("blur",()=>{Bn!==null&&Ur({pointerId:Bn},!0),Ha()});var Ed=!1,Ta=null,Ia=null,No=null;function Sf(n){No!==n&&(No&&No.hoverBack(!1),No=n,n&&n.hoverBack(!0))}var ty=()=>mh()&&bn&&Pe&&["carousel","spiral"].includes(Pe.def.layout);function Ef(){return H.postOpen||!Pe?null:Ia&&Ia.view===Pe?Ia:ty()?(Pe.checkPostSelected(),Pe.postViews[H.selected]||null):null}var aS=0;function oS(){++aS%6===0&&ty()&&tl(Ef())}function tl(n){Ta!==n&&(Ta&&Ta.hover(!1),Ta=n,n&&n.hover(!0))}xn.addEventListener("pointerleave",()=>{Ia=null,tl(Ef()),Sf(null)});xn.addEventListener("pointermove",n=>{if(Bn!==null&&n.pointerId===Bn&&n.pointerType==="mouse"&&n.buttons===0){Ur(n,!0);return}Bn!==null&&n.pointerId!==Bn||(js=n.clientX,Zs=n.clientY,Bn===null&&n.pointerType==="mouse"&&!Ed&&(Ed=!0,requestAnimationFrame(()=>{Ed=!1;let e=ah(js,Zs);xn.classList.toggle("hover",!!(e&&e.post)),Ia=e&&e.post&&e.face==="front"&&!H.postOpen?e.post:null,tl(Ef()),Sf(e&&e.post&&e.face==="back"&&e.post.bhi&&!H.postOpen?e.post:null),e&&e.netNode&&!H.postOpen?A0(e.netNode,js,Zs):vh()})))});var kg=0,$i=new Map,Aa=null,ny=()=>{let[n,e]=[...$i.values()];return Math.hypot(n.x-e.x,n.y-e.y)};window.addEventListener("pointerdown",n=>{n.pointerType!=="touch"||!St||Ye.open||!$i.size&&n.target!==xn||($i.set(n.pointerId,{x:n.clientX,y:n.clientY}),$i.size===2&&(Bn!==null&&Ur({pointerId:Bn},!0),Aa={last:ny()}))});window.addEventListener("pointermove",n=>{if(!$i.has(n.pointerId)||($i.set(n.pointerId,{x:n.clientX,y:n.clientY}),!Aa||$i.size<2||!bn))return;let e=ny(),t=e/Aa.last;t>1.15?(Mf(),Aa.last=e):t<1/1.15&&(bf(),Aa.last=e)});var lS=n=>{$i.delete(n.pointerId),$i.size<2&&(Aa=null)};["pointerup","pointercancel"].forEach(n=>window.addEventListener(n,lS));xn.addEventListener("wheel",n=>{n.preventDefault();let e=performance.now();!bn||e-kg<220||!n.deltaY||e-F0<1400||(kg=e,n.deltaY<0?Mf():bf())},{passive:!1});window.addEventListener("resize",()=>{let n=ys(),e=Ms&&Pe?ni||Ko():null;I0(),P0(),Pr(),L0(e),ys()!==n&&Pe&&Pe.retexture(),dy(),jd(),Ye.open&&(N0(),clearTimeout(Ye.relayout),Ye.relayout=setTimeout(()=>{Ye.open&&Ye.post&&JSON.stringify(Po("project"))!==Ye.geomKey&&(Ye.build(Ye.post,H.section.def.card),Pr())},250))});function Bg(){if(ve.settings.negativeToggle!==!1){if(Vn=!Vn,$o()&&fh(),!wt)try{localStorage.setItem("hc-neg",(Vn?"1":"0")+($o()?"@"+Lr:""))}catch{}Eh(),Pe&&Pe.retexture()}}(()=>{let n=document.getElementById("logo");if(!n)return;let e=0,t=0,i=Math.atan2(.38,-1),s=i,r=2.3,o=i,a=2.3,l=()=>{let d=n.offsetWidth/2;if(!d)return;if(a>2.02){n.style.webkitMaskImage=n.style.maskImage="";return}let p=d+Math.cos(o)*a*d,g=d+Math.sin(o)*a*d,v=Math.max(0,Math.min(1,1-a/.28)),m=d-v*Math.max(2,d*.085);n.style.webkitMaskImage=n.style.maskImage=`radial-gradient(circle ${d}px at ${p.toFixed(2)}px ${g.toFixed(2)}px, transparent ${(m-.6).toFixed(2)}px, #000 ${(m+.6).toFixed(2)}px)`},c=d=>{o=s=i,a=r=d,l()},h=()=>{let d=n.getBoundingClientRect(),p=d.width/2;if(!p)return;let g=e-(d.left+p),v=t-(d.top+p),m=Math.hypot(g,v);m>.5&&(i=Math.atan2(v,g));let f=m/p,M=Math.max(0,Math.min(1,(5.5-f)/4.5)),b=M*M*(3-2*M);c(f<=1?.62*f:.62+1.68*(1-b))},u=!1;window.addEventListener("pointermove",d=>{d.pointerType!=="mouse"||!n.classList.contains("toggle")||(e=d.clientX,t=d.clientY,u||(u=!0,requestAnimationFrame(()=>{u=!1,h()})))},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>c(2.3)),n.addEventListener("focus",()=>{n.matches(":focus-visible")&&(i=Math.atan2(.38,-1),c(.55))}),n.addEventListener("blur",()=>c(2.3))})();["logo"].forEach(n=>{let e=document.getElementById(n);e&&(e.addEventListener("click",Bg),e.addEventListener("keydown",t=>{(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),t.stopPropagation(),Bg())}))});var de=null,Tf=n=>`<svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 5h4l5-4v14l-5-4H1z" fill="currentColor"/>${n?'<path d="M13 4.5a5 5 0 0 1 0 7M15.5 2a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>':'<path d="M13 5l6 6M19 5l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'}</svg>`;function cS(){let n=(ve.settings.showreel||"").trim();if(!de){let t=document.createElement("button");t.id="reel-btn",t.type="button",t.className="ui",t.innerHTML='<i class="tri"></i><span>Showreel</span>';let i=document.createElement("div");i.id="reel",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Showreel"),i.innerHTML='<div class="scrim"></div><div class="scr"><div class="bar"><b>Showreel</b><a class="ext" target="_blank" rel="noopener"></a><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button></div><div class="vid"></div></div>',document.body.append(t,i),de={btn:t,box:i,scr:i.querySelector(".scr"),vid:i.querySelector(".vid"),snd:i.querySelector(".snd"),x:i.querySelector(".x"),ext:i.querySelector(".ext"),src:null,kind:"",player:null,muted:!0,open:!1,last:null},t.addEventListener("click",()=>ay()),de.x.addEventListener("click",zc),i.querySelector(".scrim").addEventListener("click",zc),de.snd.addEventListener("click",()=>iy(!de.muted)),window.addEventListener("keydown",s=>{if(de.open){if(s.code==="Escape")s.preventDefault(),zc();else if(s.code==="Tab"){let r=[...i.querySelectorAll("a[href], button")].filter(o=>o.offsetParent);if(r.length){let o=r.indexOf(document.activeElement);s.shiftKey&&o<=0?(s.preventDefault(),r[r.length-1].focus()):!s.shiftKey&&o===r.length-1&&(s.preventDefault(),r[0].focus())}}s.stopImmediatePropagation()}},!0),window.addEventListener("message",s=>{if(!de.player||s.source!==de.player.contentWindow)return;let r=s.data;try{typeof r=="string"&&(r=JSON.parse(r))}catch{return}r&&r.event==="infoDelivery"&&r.info&&typeof r.info.muted=="boolean"&&r.info.muted!==de.muted&&(de.muted=r.info.muted,jo())})}de.btn.hidden=!n,de.btn.setAttribute("aria-label","Showreel"),de.x.setAttribute("aria-label",xe("close")),n!==de.src&&(de.open&&zc(!0),de.src=n,de.kind=n?Ir(n):"",de.vid.innerHTML="",de.player=null);let e=de.kind==="youtube"?`https://www.youtube.com/watch?v=${Fa(n)}`:de.kind==="vimeo"?`https://vimeo.com/${za(n)}`:"";de.ext.hidden=!e,e&&(de.ext.href=e,de.ext.textContent=(de.kind==="youtube"?"YouTube":"Vimeo")+" \u2197"),jo()}function jo(){de&&(de.snd.innerHTML=Tf(!de.muted)+`<span>${xe(de.muted?"soundOn":"soundOff")}</span>`,de.snd.setAttribute("aria-pressed",String(!de.muted)))}function oh(n,e=[]){let t=de.player;if(!(!t||!t.contentWindow)){if(de.kind==="youtube")t.contentWindow.postMessage(JSON.stringify({event:"command",func:n,args:e}),"*");else if(de.kind==="vimeo"){let i={playVideo:["play"],pauseVideo:["pause"],mute:["setMuted",!0],unMute:["setMuted",!1]}[n];i&&t.contentWindow.postMessage(JSON.stringify({method:i[0],value:i[1]}),"*")}}}function iy(n){de.muted=n,jo(),de.kind==="video"?de.player&&(de.player.muted=n,n||(de.player.volume=1)):(oh(n?"mute":"unMute"),n||oh("setVolume",[100]))}function hS(){if(!(!de||!de.src||de.open)){if(de.open=!0,de.last=document.activeElement,de.player)de.kind==="video"?de.player.play().catch(()=>{}):oh("playVideo");else{let n=de.src,e=de.kind;if(e==="video"){let t=document.createElement("video");t.src=bt(n),t.muted=!0,t.autoplay=!0,t.loop=!0,t.playsInline=!0,t.controls=!0,t.setAttribute("playsinline",""),t.addEventListener("volumechange",()=>{t.muted!==de.muted&&(de.muted=t.muted,jo())}),de.player=t}else if(e==="youtube"||e==="vimeo"){let t=document.createElement("iframe"),i=e==="youtube"?Fa(n):za(n),s=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";t.src=e==="youtube"?`https://www.youtube-nocookie.com/embed/${i}?autoplay=1&mute=1&playsinline=1&rel=0&loop=1&playlist=${i}&enablejsapi=1${s}`:Ah(i,"autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"),t.allow="autoplay; fullscreen; picture-in-picture; encrypted-media",t.allowFullscreen=!0,t.title="Showreel",t.referrerPolicy="strict-origin-when-cross-origin",t.addEventListener("load",()=>{e==="youtube"&&t.contentWindow.postMessage(JSON.stringify({event:"listening",id:"reel",channel:"widget"}),"*"),de.muted||iy(!1)}),de.player=t}else{let t=document.createElement("img");t.src=bt(n),t.alt="",de.player=t}de.muted=!0,jo(),de.vid.appendChild(de.player)}de.snd.hidden=!/^(youtube|vimeo|video)$/.test(de.kind),de.box.hidden=!1,de.btn.setAttribute("aria-expanded","true"),de.box.offsetWidth,de.box.classList.add("on"),setTimeout(()=>{de.open&&de.x.focus({preventScroll:!0})},60)}}function zc(n){!de||!de.open||(de.open=!1,de.btn.setAttribute("aria-expanded","false"),de.kind==="video"?de.player&&de.player.pause():oh("pauseVideo"),de.box.classList.remove("on"),clearTimeout(de.t),de.t=setTimeout(()=>{de.open||(de.box.hidden=!0)},n===!0?0:650),de.last&&de.last.focus&&n!==!0&&de.last.focus({preventScroll:!0}))}var y=null,Ca=["white","grey","accent","source"],sy=8;function uS(){let n=Object.assign({src:"",cell:14,contrast:1,size:92,color:"white",mode:"light",delay:4,controls:!0,random:!0},ve.settings.homeVideo||{});if(n.random!==!1){let e=(i,s)=>i+Math.random()*(s-i),t=(i,s)=>{let r=Math.random()*s.reduce((o,a)=>o+a,0);for(let o=0;o<i.length;o++)if((r-=s[o])<0)return i[o];return i[0]};Object.assign(n,{cell:Math.round(e(5,16)),contrast:+e(.6,2).toFixed(1),size:Math.round(e(72,100)),color:t(Ca,[4,2,2,1]),mode:Math.random()<.75?"light":"dark",delay:Math.round(e(1,8))})}return n}function dS(){if(y)return;let n=document.getElementById("home-band");if(!n)return;let e=uS(),t=document.createElement("canvas");t.id="home-video",t.setAttribute("aria-hidden","true");let i=document.createElement("div");i.className="hv-shade",n.prepend(t,i),window.ResizeObserver&&new ResizeObserver(()=>jd()).observe(t),y={cv:t,ctx:t.getContext("2d"),off:document.createElement("canvas"),cell:+e.cell||14,gamma:+e.contrast||1,fill:(+e.size||92)/100,round:e.shape!=="square",color:Ca.includes(e.color)?e.color:"white",mode:e.mode==="dark"?"dark":"light",delay:Math.max(1,Math.min(sy,+e.delay||1)),sound:!1,cam:null,video:null,pics:[],lo:0,hi:1,tainted:!1,last:0,t0:performance.now()-Math.random()*6e4,W:0,H:0,interval:1e3/30,floor:0,cost:0,slow:0,fast:0},y.octx=y.off.getContext("2d",{willReadFrequently:!0}),y.gl=IS(t),y.gl&&(y.interval=1e3/60),y.raw=document.createElement("canvas"),y.rctx=y.raw.getContext("2d",{willReadFrequently:!0});let s=(e.src||"").trim();if(s&&/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(s)){let a=document.createElement("video");/^https?:/.test(s)&&!s.startsWith(location.origin)&&(a.crossOrigin="anonymous"),Object.assign(a,{muted:!0,loop:!0,playsInline:!0,autoplay:!0,preload:"auto",src:bt(s)}),a.setAttribute("playsinline",""),a.addEventListener("loadedmetadata",()=>{isFinite(a.duration)&&a.duration>2&&(a.currentTime=Math.random()*(a.duration-1)),a.play().catch(()=>{})},{once:!0}),y.video=a}else{let a=m=>m&&!/^(https?:|data:)/.test(m)&&/\.(jpe?g|png|webp)$/i.test(m),l=ve.sections.find(m=>m.visible&&m.card==="image"&&!m.skills)||{},c=l.defaultTag||"featured",h=m=>Math.max(0,...(String(m.date||"").match(/\d{4}/g)||[]).map(Number)),u=m=>(m.media||[]).map(f=>f&&f.src).filter(f=>a(f)&&f!==m.thumb),d=ve.posts.filter(m=>m.published!==!1&&m.section===l.id&&(u(m).length||a(m.thumb))).map(m=>({p:m,k:((m.tags||[]).includes(c)?1e4:0)+h(m)+Math.random()*.5})).sort((m,f)=>f.k-m.k).slice(0,10).map(m=>m.p),p=m=>/screen|capture|schema|sch[eé]ma|plan|diagram|logo|affiche|poster/i.test(m.split("/").pop()),g=m=>{let f=u(m),M=f.filter(b=>!p(b)).length?f.filter(b=>!p(b)):f;return M.length?M[Math.floor(Math.random()*M.length)]:m.thumb},v=[...new Set(d.map(g))].sort(()=>Math.random()-.5);y.pics=v.map(m=>{let f=new Image,M=af(m);return f.decoding="async",M!==m&&(f.onerror=()=>{f.onerror=null,f.src=bt(m)}),f.src=bt(M),f})}if(fS(e.controls!==!1),il()&&Dr()&&!/[?&]p=/.test(location.search)&&!Va.matches&&!(wt&&wt.start)&&!document.getElementById("hc-intro")){let a=performance.now(),l=()=>{!St&&!y.reelOn&&!y.cam&&!y.userReel&&Dr()&&sl(!0)},c=setInterval(()=>{(Nr||performance.now()-a>6e3)&&(clearInterval(c),setTimeout(l,500))},150)}let r=document.getElementById("home-langs"),o=document.getElementById("home-ctl");r&&o?o.insertBefore(r,document.getElementById("home-about")):r&&document.getElementById("home").appendChild(r),jd()}var Na={about:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10 8.8v5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="10" cy="6.3" r="1.05" fill="currentColor"/></svg>',video:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg>',cam:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3.5 6.5h3l1.4-2h4.2l1.4 2h3v9h-13z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="10" cy="11" r="2.7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',shot:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2.5 6.5h3.3l1.6-2.3h5.2l1.6 2.3h3.3v9.6h-15z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="10" cy="11.1" r="3.2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',faders:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 3v14M10 3v14M15 3v14" stroke="currentColor" stroke-width="1.3" opacity=".55"/><rect x="2.5" y="10" width="5" height="3" rx=".5" fill="currentColor"/><rect x="7.5" y="5" width="5" height="3" rx=".5" fill="currentColor"/><rect x="12.5" y="12" width="5" height="3" rx=".5" fill="currentColor"/></svg>'};function fS(n){let e=document.getElementById("home");if(!e||document.getElementById("home-dock"))return;let i=!!(y&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)?'<div id="hv-src" class="seg" role="group"><button type="button" data-src="video" aria-pressed="true"></button><button type="button" data-src="cam" aria-pressed="false"></button></div>':"",s=document.createElement("div");s.id="home-dock",s.innerHTML=`<span class="hv-note" role="status" hidden></span>
    ${n?"":`<input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done" hidden>
    <button type="button" id="hv-shot" hidden>${Na.shot}<span></span></button>`}
    ${n?"":i}
    <button type="button" id="story-btn" aria-expanded="false" hidden><span class="lbl"></span><b class="ic">?</b></button>`,e.appendChild(s);let r=document.createElement("div");r.id="home-ctl",r.innerHTML='<button type="button" id="home-reel" aria-pressed="false" hidden><b class="ic"><i aria-hidden="true"></i></b><span>Showreel</span></button><button type="button" id="home-snd" aria-pressed="false" hidden><b class="ic"></b></button>'+(n?`<button type="button" id="hv-toggle" aria-expanded="false"><b class="ic">${Na.faders}</b><span class="lbl"></span></button>`:"")+`<button type="button" id="home-about" aria-expanded="false" hidden><b class="ic">${Na.about}</b></button><figure id="home-pitch" hidden><img alt="" decoding="async"><figcaption><p></p></figcaption></figure>`;let o=document.getElementById("home-band"),a=o.querySelector(".lg");a?a.after(r):o.appendChild(r),n&&vS(e,i,r),ES(e),r.querySelector("#home-reel").addEventListener("click",()=>{y.reelOn?_i():ay()}),r.querySelector("#home-snd").addEventListener("click",()=>Cf(!y.sound));let l=r.querySelector("#home-about"),c=r.querySelector("#home-pitch"),h=u=>{if(u){lh(c),c.hidden=!1,c.offsetWidth;let d=r.getBoundingClientRect().top,p=window.innerHeight-20-d-c.offsetHeight;c.style.setProperty("--y",Math.max(-d+20,Math.min(l.offsetTop,p))+"px")}c.classList.toggle("on",u),l.classList.toggle("on",u),l.setAttribute("aria-expanded",String(u))};l.addEventListener("click",()=>yy()),e.addEventListener("pointerdown",u=>{if(c.classList.contains("on")&&!u.target.closest("#home-about")&&h(!1),!u.target.closest("#home-langs")){let d=document.getElementById("home-langs");d&&d.classList.remove("open")}}),document.querySelectorAll("#hv-src button").forEach(u=>u.addEventListener("click",()=>{u.dataset.src==="cam"&&!y.cam?cy():u.dataset.src==="video"&&y.cam&&Rh()})),document.getElementById("hv-shot").addEventListener("click",gS),document.getElementById("hv-words").addEventListener("keydown",u=>{u.stopPropagation(),u.key==="Enter"&&(u.preventDefault(),u.target.blur())}),s.querySelector("#story-btn").addEventListener("click",()=>uh()),hh(),nl()}function nl(){let n=document.getElementById("home-dock");if(!n)return;let e=!!(y&&y.cam);document.querySelectorAll("#hv-src button").forEach(v=>{let m=v.dataset.src==="cam"===e;v.setAttribute("aria-pressed",String(m)),v.classList.toggle("on",m),v.textContent=xe(v.dataset.src==="cam"?"hv_cam":y&&y.video?"hv_video":"hv_slides")});let t=document.getElementById("hv-src");t&&t.setAttribute("aria-label",xe("hv_src"));let i=!!(y&&y.panel),s=document.getElementById("hv-words");s.hidden=!i&&!e,s.placeholder=xe("hv_words"),s.setAttribute("aria-label",xe("hv_words"));let r=document.getElementById("hv-shot");r.hidden=!i&&!e,r.setAttribute("aria-label",xe("hv_shot")),r.querySelector("span").textContent=xe(i?"hv_shot":"photo");let o=document.querySelector("#hv-panel .priv");o&&(o.textContent=xe("hv_private"));let a=n.querySelector("#story-btn");a.setAttribute("aria-label",xe("story")),a.querySelector(".lbl").textContent=xe("story");let l=document.getElementById("home-about"),c=document.getElementById("home-pitch"),h=Af();l&&(l.hidden=!h,lh(c,!1),l.setAttribute("aria-label",h));let u=document.querySelector("#hv-toggle .lbl");u&&(u.textContent=xe("params"));let d=document.getElementById("home-reel");d.hidden=!(ve.settings.showreel||"").trim();let p=!!(y&&y.reelOn);d.setAttribute("aria-pressed",String(p)),d.classList.toggle("on",p),d.setAttribute("aria-label",p?xe("stop")+" : Showreel":"Showreel"),d.querySelector("span").textContent=p?xe("stop"):"Showreel";let g=document.getElementById("home-snd");if(g&&!d._rwObs&&window.ResizeObserver&&(d._rwObs=new ResizeObserver(()=>{d.offsetWidth&&g.style.setProperty("--rw",d.offsetWidth+"px")}),d._rwObs.observe(d)),g){g.hidden=!p,p&&requestAnimationFrame(()=>g.style.setProperty("--rw",d.offsetWidth+"px"));let v=!!(y&&y.sound);g.querySelector(".ic").innerHTML=Tf(v),g.classList.toggle("on",v),g.setAttribute("aria-pressed",String(v)),g.setAttribute("aria-label",xe(v?"soundOff":"soundOn")),g.title=xe(v?"soundOff":"soundOn")}}var Fg=0,Af=()=>he((ve.settings.home||{}).sub||{}).replace(/\s*\n\s*/g," ").trim();function pS(){let n=ve.sections.find(s=>s.visible&&s.card==="image"&&!s.skills)||{},e=n.defaultTag,t=s=>s.published!==!1&&s.section===n.id&&s.thumb&&/\.(jpe?g|png|webp)$/i.test(s.thumb),i=ve.posts.filter(s=>t(s)&&(!e||(s.tags||[]).includes(e)));return(i.length?i:ve.posts.filter(t)).map(s=>bt(s.thumb))}function lh(n,e=!0){if(n.querySelector("p").textContent=Af(),!e)return;let t=pS(),i=n.querySelector("img");if(t.length){let s=t[Math.floor(Math.random()*t.length)];t.length>1&&s===n.dataset.last&&(s=t[(t.indexOf(s)+1)%t.length]),n.dataset.last=s,i.src=s,i.hidden=!1}else i.hidden=!0}var qt=null,on=null;function mS(){if(!qt){qt=document.createElement("button"),qt.type="button",qt.id="about-btn",qt.className="ui",qt.setAttribute("aria-expanded","false"),qt.innerHTML=`<b class="ic">${Na.about}</b>`,on=document.createElement("figure"),on.id="about-card",on.className="ui",on.hidden=!0,on.innerHTML='<img alt="" decoding="async"><figcaption><p></p></figcaption>',document.body.append(qt,on);let e=t=>{t&&(lh(on),on.hidden=!1,ch(),on.offsetWidth),on.classList.toggle("on",t),qt.classList.toggle("on",t),qt.setAttribute("aria-expanded",String(t))};qt.addEventListener("click",()=>yy())}let n=Af();qt.hidden=!n,qt.setAttribute("aria-label",n),lh(on,!1),ch()}function ch(){if(!qt)return;let n=de&&de.btn&&!de.btn.hidden?de.btn:null,e=document.getElementById("lang-sq"),t=e&&!e.hidden;if(!Fi()){let s=n?n.offsetTop:Math.round(ln.offsetTop+ln.offsetHeight+16),r=n?n.offsetLeft+n.offsetWidth+8:ln.offsetLeft+2;qt.style.top=s+"px",qt.style.left=r+"px",qt.hidden||(r+=qt.offsetWidth+8),t&&(e.style.top=s+"px",e.style.left=r+"px"),on.hidden||(on.style.left=ln.offsetLeft+2+"px",on.style.top=s+qt.offsetHeight+8+"px");return}let i=n?n.offsetTop+n.offsetHeight+8:Math.round(ln.offsetTop+ln.offsetHeight+(Fi()?26:16));if(t&&(e.style.top=i+"px",e.style.left=ln.offsetLeft+2+"px",i+=qt.offsetHeight+8),qt.style.top=i+"px",qt.style.left=ln.offsetLeft+2+"px",!on.hidden){let s=Fi(),r=ln.offsetLeft+2;if(s){let o=Math.max(16,Math.min(i,Ut-20-on.offsetHeight));on.style.left=r+qt.offsetWidth+12+"px",on.style.top=o+"px"}else on.style.left=r+"px",on.style.top=i+qt.offsetHeight+8+"px"}}function Da(n,e){let t=document.querySelector("#home-dock .hv-note");t&&(clearTimeout(Fg),t.textContent=n||"",t.hidden=!n,n&&e&&(Fg=setTimeout(()=>{t.hidden=!0},e)))}async function gS(){if(!y||y.cam&&y.cam.video.readyState<2)return;let n=1080,e=1350,t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");i.fillStyle="#0b0b0b",i.fillRect(0,0,n,e);let s=document.getElementById("home-band");s.classList.remove("flash"),s.offsetWidth,s.classList.add("flash");let r=Math.max(y.cell,y.floor),o=Math.max(10,Math.min(36,Math.round(r*n/Math.max(320,y.W)))),a=Math.ceil(n/o),l=Math.ceil(e/o),c={ctx:y.ctx,W:y.W,H:y.H,ow:y.off.width,oh:y.off.height,lo:y.lo,hi:y.hi};try{if(y.ctx=i,y.W=n,y.H=e,y.off.width=y.raw.width=a,y.off.height=y.raw.height=l,!hy(Va.matches?0:(performance.now()-y.t0)/1e3))return;y.octx.globalAlpha=1,y.octx.drawImage(y.raw,0,0);let V=null;try{V=y.octx.getImageData(0,0,a,l).data}catch{}V?uy(V,a,l,o):Jd(a,l,o)}finally{y.ctx=c.ctx,y.W=c.W,y.H=c.H,y.off.width=y.raw.width=c.ow,y.off.height=y.raw.height=c.oh,y.lo=c.lo,y.hi=c.hi,y.fresh=!0}let h=i.createLinearGradient(0,0,0,230);h.addColorStop(0,"rgba(11,11,11,.9)"),h.addColorStop(1,"rgba(11,11,11,0)"),i.fillStyle=h,i.fillRect(0,0,n,230);let u=i.createLinearGradient(0,e*.5,0,e);u.addColorStop(0,"rgba(11,11,11,0)"),u.addColorStop(.5,"rgba(11,11,11,.8)"),u.addColorStop(1,"rgba(11,11,11,.95)"),i.fillStyle=u,i.fillRect(0,e*.5,n,e*.5);let d=document.getElementById("hv-words"),p=(d?d.value:"").replace(/\s+/g," ").trim().toUpperCase(),g=ve.settings,v=Zn(g,"title"),m=Zn(g,"sig2"),f=document.querySelector("#slogan .wm")||document.querySelector("#home-band .sl .wm")||document.getElementById("slogan"),M=getComputedStyle(f),b=V=>`${M.fontStyle==="italic"?"italic ":""}${M.fontWeight} ${V}px ${M.fontFamily}`,I=V=>`${v.italic?"italic ":""}${v.weight||600} ${V}px ${v.css}`,P=V=>`${m.italic?"italic ":""}${m.weight||500} ${V}px ${m.css}`;try{await Promise.all([document.fonts.load(I(80)),document.fonts.load(P(30)),document.fonts.load(b(96))])}catch{}let C=72,D=70,z=34,S=g.taglines&&(g.taglines[fn]||g.taglines.en)||[],w=S[0]||(g.name||"Hand Coded")+".",B=S.slice(1),te=96,le=Math.round(te*.31),k=()=>{le=Math.round(te*.31),i.font=P(le);let V=B.length?Math.max(...B.map(Wt=>i.measureText(Wt).width))+te*.24:0;return i.font=b(te),i.measureText(w).width+V};for(;k()>n-2*C-2*z-40&&te>48;)te-=4;i.font=b(te);let W=i.measureText(w).width,F=D+te*.78;i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText(w,C,F),i.font=P(le),i.textBaseline="top";let ie=Math.round(le*1.18);B.forEach((V,Wt)=>i.fillText(V,C+W+te*.24,D+te*.1+Wt*ie)),i.fillStyle=Hn(),i.beginPath(),i.arc(n-C-z,D+te*.42,z,0,Math.PI*2),i.fill();let Y=n-2*C,q=84,J=[],ee=V=>{"letterSpacing"in i&&(i.letterSpacing=Math.round((+v.ls||-.02)*V)+"px")};for(;q>=36&&(i.font=I(q),ee(q),J=Kt(i,p,Y),!(J.length<=4));q-=4);J=p?J.slice(0,4):[];let ue=30,G=e-64-ue,X=Math.round(q*1.02),se=G-64-J.length*X;i.textBaseline="top",J.length&&(i.fillStyle=Hn(),i.fillRect(C,se-34,46,6)),i.fillStyle="#fff",i.font=I(q),ee(q),J.forEach((V,Wt)=>i.fillText(V,C-q*.03,se+Wt*X)),"letterSpacing"in i&&(i.letterSpacing="0px");let re=Zn(g,"subtitle"),ce=V=>`${re.italic!==!1?"italic ":""}${re.weight||400} ${V}px ${re.css}`;try{await document.fonts.load(ce(38))}catch{}i.font=ce(38),i.fillStyle="#fff",i.textBaseline="alphabetic",i.fillText("hand-coded.net",C,G+ue);let Ae=await new Promise(V=>t.toBlob(V,"image/jpeg",.92));if(!Ae)return;nr("photo-souvenir","Photo souvenir",!0);let He="hand-coded-"+new Date().toISOString().slice(0,19).replace(/[-:T]/g,"")+".jpg",Fe=typeof File=="function"?new File([Ae],He,{type:"image/jpeg"}):null;if(Fe&&navigator.canShare&&matchMedia("(pointer: coarse)").matches&&navigator.canShare({files:[Fe]}))try{await navigator.share({files:[Fe],title:ve.settings.name||"Hand Coded"}),Da(xe("hv_shotDone"),2500);return}catch(V){if(V&&V.name==="AbortError")return}let ot=document.createElement("a");ot.href=URL.createObjectURL(Ae),ot.download=He,document.body.appendChild(ot),ot.click(),setTimeout(()=>{URL.revokeObjectURL(ot.href),ot.remove()},2e3),Da(xe("hv_shotDone"),2500)}function hh(){let n=document.getElementById("story-btn"),e=document.getElementById("home-band");if(!n||!e)return;let t=(ve.settings.home||{}).story||{},i=he(t.title||{}).trim(),s=Mr(he(t.body||{})),r=!!(i||wr(s).join("").trim());n.hidden=!r;let o=document.getElementById("hc-story");if(!r){o&&o.remove();return}o||(o=document.createElement("section"),o.id="hc-story",o.hidden=!0,e.appendChild(o)),o.setAttribute("aria-label",i||xe("story"));let a=(t.images||[]).filter(Boolean);o.innerHTML=`<div class="in"><button type="button" class="x" aria-label="${_e(xe("close"))}">\xD7</button><h2>${_e(i||xe("story"))}</h2><div class="cols"><div class="txt">${s}`+(t.link?`<a class="go" href="${_e(t.link)}" target="_blank" rel="noopener">${_e(he(t.linkLabel||{}).trim()||t.link.replace(/^https?:\/\//,""))} <span aria-hidden="true">\u2197</span></a>`:"")+"</div>"+(a.length?`<div class="shots scroll-x">${a.map(l=>`<a href="${_e(bt(l))}" target="_blank" rel="noopener"><img src="${_e(bt(l))}" alt="" loading="lazy" draggable="false" onerror="this.parentNode.remove()"></a>`).join("")}</div>`:"")+"</div></div>",o.querySelector(".x").addEventListener("click",()=>uh(!1)),hh.out||(hh.out=!0,document.addEventListener("pointerdown",l=>{let c=document.getElementById("hc-story");c&&c.classList.contains("on")&&!l.target.closest("#hc-story, #story-btn")&&uh(!1)}))}var zg=0;function uh(n){let e=document.getElementById("hc-story"),t=document.getElementById("story-btn");e&&(n===void 0&&(n=!e.classList.contains("on")),clearTimeout(zg),t.setAttribute("aria-expanded",String(n)),t.classList.toggle("on",n),n?(e.hidden=!1,e.offsetWidth,e.classList.add("on"),e.scrollTop=0,setTimeout(()=>{e.classList.contains("on")&&e.querySelector(".x").focus({preventScroll:!0})},60)):(e.classList.remove("on"),zg=setTimeout(()=>{e.classList.contains("on")||(e.hidden=!0)},700)))}window.addEventListener("keydown",n=>{n.code==="Escape"&&document.getElementById("hc-story")&&document.getElementById("hc-story").classList.contains("on")&&(n.stopPropagation(),uh(!1))},!0);function jd(){if(!y)return;let n=y.cv.getBoundingClientRect(),e=Math.min(2,devicePixelRatio||1),t=Math.max(1,Math.round(n.width)),i=Math.max(1,Math.round(n.height));if(!(n.width<2||n.height<2||t===y.W&&i===y.H&&e===y.dpr)&&(y.W=t,y.H=i,y.dpr=e,y.cv.width=y.W*e,y.cv.height=y.H*e,y.ctx.setTransform(e,0,0,e,0,0),y.gl&&(y.gl.c.width=y.W*e,y.gl.c.height=y.H*e,y.gl.dpr=e),y.reelOn)){let s=oy();if(y.rp&&y.rp.key!==s.kind+"|"+s.src){let r=!y.userReel;_i(),sl(r)}else Rf()}}var Zd=[{p:"cell",min:3,max:40,step:1,get:()=>y.cell,set:n=>{y.cell=n},show:()=>Math.max(y.cell,y.floor)+"px"+(y.floor>y.cell?"*":"")},{p:"size",min:40,max:100,step:2,get:()=>Math.round(y.fill*100),set:n=>{y.fill=n/100},show:()=>Math.round(y.fill*100)+"%"},{p:"contrast",min:.4,max:3,step:.1,get:()=>y.gamma,set:n=>{y.gamma=n},show:()=>"\xD7"+y.gamma.toFixed(1)},{p:"delay",min:1,max:sy,step:1,get:()=>y.delay,set:n=>{y.delay=n},show:()=>Kd()+(Kd()<y.delay?"*":"")}],yS=n=>n.style.setProperty("--p",((n.value-n.min)/(n.max-n.min)*100).toFixed(1)+"%");function vS(n,e,t=n){let i=document.createElement("div");i.id="hv-panel",i.setAttribute("role","group"),i.hidden=!0,i.innerHTML='<div class="hd"><i class="led" aria-hidden="true"></i><b data-k="panel"></b><span class="stat" aria-hidden="true"></span><button type="button" class="more" aria-expanded="false">+</button></div>'+(e?`<div class="rw"><span class="lb" data-k="source"></span>${e}</div><p class="priv"></p>`:"")+Zd.map(c=>`<label class="rw"><span class="lb" data-k="${c.p}"></span><input type="range" data-p="${c.p}" min="${c.min}" max="${c.max}" step="${c.step}"><output></output></label>`).join("")+`<div class="rw"><span class="lb" data-k="color"></span><div class="seg sw" role="group">${Ca.map(c=>`<button type="button" data-c="${c}"><i class="c-${c}"></i></button>`).join("")}</div></div><div class="rw tg"><button type="button" class="tgl" data-a="invert"><i aria-hidden="true"></i><span data-k="invert"></span></button></div><div class="pic"><input type="text" id="hv-words" maxlength="80" autocomplete="off" enterkeyhint="done"><button type="button" id="hv-shot">${Na.shot}<span></span></button></div>`,t.appendChild(i);let s=document.getElementById("hv-toggle");y.panel=i,y.toggle=s;let r=0,o=c=>{clearTimeout(r),c?(i.hidden=!1,i.offsetWidth,i.classList.add("open")):(i.classList.remove("open"),r=setTimeout(()=>{i.classList.contains("open")||(i.hidden=!0)},320)),s.setAttribute("aria-expanded",String(c)),s.classList.toggle("on",c),n.classList.toggle("hv-open",c),c&&ii()};y.setOpen=o,s.addEventListener("click",()=>{if(y.reelOn){_i(),o(!0);return}o(!i.classList.contains("open"))});let a=i.querySelector(".more");a.addEventListener("click",()=>{let c=!i.classList.contains("more-on");i.classList.toggle("more-on",c),a.setAttribute("aria-expanded",String(c)),a.textContent=c?"\u2212":"+"}),n.addEventListener("pointerdown",c=>{i.classList.contains("open")&&!c.target.closest("#hv-panel, #hv-toggle, #hv-src, #hv-consent")&&o(!1)}),i.querySelectorAll("input[data-p]").forEach(c=>{let h=Zd.find(u=>u.p===c.dataset.p);c.addEventListener("input",()=>{h.set(+c.value),ii()})});let l=c=>{if(c==="color")y.color=Ca[(Ca.indexOf(y.color)+1)%Ca.length];else if(c==="invert")y.mode=y.mode==="light"?"dark":"light";else if(c==="sound"){Cf(!y.sound);return}else if(c==="cam"){if(!document.getElementById("hv-src"))return;y.cam?Rh():cy()}ii()};i.querySelectorAll("[data-c]").forEach(c=>c.addEventListener("click",()=>{y.color=c.dataset.c,ii()})),i.querySelectorAll(".tgl").forEach(c=>c.addEventListener("click",()=>l(c.dataset.a))),window.addEventListener("keydown",c=>{if(St||c.ctrlKey||c.metaKey||c.altKey||de&&de.open||c.target&&c.target.id==="hv-words")return;if(c.code==="Escape"&&i.classList.contains("open")){o(!1),s.focus({preventScroll:!0});return}if(c.code==="Escape"&&y.reelOn){_i();return}let h={KeyK:"panel",KeyC:"color",KeyI:"invert",KeyV:"cam"}[c.code];if(h){if(c.preventDefault(),h==="panel"){o(!i.classList.contains("open"));return}y.touched||(y.touched=!0,o(!0)),l(h)}}),ii()}function ii(){if(nl(),!y||!y.panel)return;let n=y.panel;n.querySelectorAll("[data-k]").forEach(t=>{t.textContent=xe("hv_"+t.dataset.k)}),y.toggle.setAttribute("aria-label",xe("hv_panel")),y.toggle.title=xe("hv_panel")+" (K)",Zd.forEach(t=>{let i=n.querySelector(`input[data-p="${t.p}"]`);i&&(document.activeElement!==i&&(i.value=t.get()),yS(i),i.setAttribute("aria-label",xe("hv_"+t.p)),i.nextElementSibling.textContent=t.show())}),n.querySelectorAll("[data-c]").forEach(t=>{let i=t.dataset.c===y.color;t.setAttribute("aria-pressed",String(i)),t.classList.toggle("on",i),t.setAttribute("aria-label",xe("hv_color")+" "+xe("hv_c_"+t.dataset.c))}),((t,i)=>{let s=n.querySelector(`.tgl[data-a="${t}"]`);s.setAttribute("aria-pressed",String(i)),s.classList.toggle("on",i)})("invert",y.mode==="dark"),n.classList.toggle("cam",!!y.cam),!y.cam&&n.classList.contains("more-on")&&n.querySelector(".more").click(),n.querySelector(".more").setAttribute("aria-label",xe("params")),ry()}function ry(){let n=y&&y.panel&&y.panel.querySelector(".stat");if(!n)return;let e=Math.max(y.cell,y.floor);n.textContent=`${Math.ceil(y.W/e)}\xD7${Math.ceil(y.H/e)} \xB7 ${Math.round(1e3/y.interval)} FPS`}var _S=()=>y&&!y.reelOn?y.video:null;function Cf(n){y.sound=n,y.reelOn&&y.rp?y.rp.mute(!n):y.video&&(y.video.muted=!n,n&&(y.video.volume=1),y.video.paused&&!y.frozen&&y.video.play().catch(()=>{})),ii(),Xs()}var il=()=>!!(de&&de.src&&/^(video|youtube|vimeo)$/.test(de.kind));function ay(){y&&il()?(St&&Lh(),sl()):hS()}function xS(n,e){let t=document.createElement("div");t.id="hv-rv",t.setAttribute("aria-hidden","true");let i={kind:n,box:t,t:0,d:0,paused:!1,ratio:16/9};if(n==="video"){let s=document.createElement("video");Object.assign(s,{muted:!0,playsInline:!0,preload:"auto",src:bt(e)}),s.setAttribute("playsinline","");let r=()=>{i.t=s.currentTime,i.d=isFinite(s.duration)?s.duration:0,i.paused=s.paused,Xs()};["timeupdate","durationchange","play","pause"].forEach(o=>s.addEventListener(o,r)),s.addEventListener("loadedmetadata",()=>{s.videoWidth&&(i.ratio=s.videoWidth/s.videoHeight),Rf(),r()}),s.addEventListener("ended",()=>_i()),Object.assign(i,{el:s,play:()=>s.play().catch(()=>{}),pause:()=>s.pause(),mute:o=>{s.muted=o,o||(s.volume=1)},seek:o=>{s.currentTime=o}})}else{let s=document.createElement("iframe"),r=n==="youtube",o=r?Fa(e):za(e),a=/^https?:/.test(location.protocol)?"&origin="+encodeURIComponent(location.origin):"";s.src=r?`https://www.youtube-nocookie.com/embed/${o}?autoplay=1&mute=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&enablejsapi=1${a}`:Ah(o,"autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&dnt=1&autopause=0"),s.allow="autoplay; encrypted-media",s.tabIndex=-1,s.title="Showreel",s.referrerPolicy="strict-origin-when-cross-origin";let l=h=>{try{s.contentWindow.postMessage(JSON.stringify(h),"*")}catch{}},c=r?(h,u=[])=>l({event:"command",func:h,args:u}):(h,u)=>l(u===void 0?{method:h}:{method:h,value:u});s.addEventListener("load",()=>{if(!r)return;let h=0;clearInterval(i.hello),l({event:"listening",id:"hvreel",channel:"widget"}),i.hello=setInterval(()=>{if(i.heard||++h>60){clearInterval(i.hello);return}l({event:"listening",id:"hvreel",channel:"widget"})},250)}),i.showAt=r?3.2:.4,t.classList.add("wait"),Object.assign(i,{el:s,post:l,play:()=>{i.paused=!1,i.playAt=performance.now(),i.showAt=i.t+(r?2.6:.3),c(r?"playVideo":"play"),dh(),Xs()},pause:()=>{i.paused=!0,c(r?"pauseVideo":"pause"),dh(),Xs()},mute:h=>{r?(c(h?"mute":"unMute"),h||c("setVolume",[100])):(c("setMuted",h),h||c("setVolume",1))},seek:h=>{r?c("seekTo",[h,!0]):c("setCurrentTime",h),i.t=h,Xs()}})}return bS(i,t)}function dh(){let n=y&&y.rp;if(!n||n.kind==="video")return;let e=y.reelOn&&!n.paused&&(n.forced||n.t>=(n.showAt||0));e!==!!n.shown&&(n.shown=e,n.box.classList.toggle("wait",!e),y.video&&!St&&!y.frozen&&(e?y.video.pause():y.reelOn&&y.video.play().catch(()=>{})))}function bS(n,e){let t=document.createElement("div");return t.className="grid",e.append(n.el,t),n}window.addEventListener("message",n=>{let e=y&&y.rp;if(!e||e.kind==="video"||!e.el.contentWindow||n.source!==e.el.contentWindow)return;let t=n.data;try{typeof t=="string"&&(t=JSON.parse(t))}catch{return}if(t){if(e.heard||(e.heard=!0,clearInterval(e.hello),e.kind==="youtube"&&e.mute(!y.sound)),e.kind==="youtube"){let i=t.event==="infoDelivery"&&t.info;if(!i)return;if(typeof i.currentTime=="number"&&(e.t=i.currentTime),typeof i.duration=="number"&&i.duration&&(e.d=i.duration),typeof i.playerState=="number"){if(i.playerState===0&&y.reelOn){_i();return}i.playerState===1?e.paused=!1:i.playerState===2&&(e.paused=!0)}}else{if(t.event==="ready"){["timeupdate","play","pause","ended"].forEach(i=>e.post({method:"addEventListener",value:i})),y.sound&&e.mute(!1);return}if(t.event==="timeupdate"&&t.data)e.t=t.data.seconds||0,e.d=t.data.duration||e.d;else if(t.event==="play")e.paused=!1;else if(t.event==="pause")e.paused=!0;else if(t.event==="ended"&&y.reelOn){_i();return}}Xs(),dh()}});var MS=()=>window.innerHeight>window.innerWidth*1.1;function oy(){let n=(ve&&ve.settings.showreelMobile||"").trim(),e=n?Ir(n):"";return n&&/^(video|youtube|vimeo)$/.test(e)&&MS()?{kind:e,src:n,vertical:!0}:{kind:de.kind,src:de.src,vertical:!1}}function Rf(){let n=y&&y.rp;if(!n)return;let e=n.box.clientWidth,t=n.box.clientHeight;if(!e||!t)return;let i=n.ratio,s=e,r=e/i;r<t&&(r=t,s=t*i),Object.assign(n.el.style,{width:Math.ceil(s)+"px",height:Math.ceil(r)+"px",left:Math.round((e-s)/2)+"px",top:Math.round((t-r)/2)+"px"});let o=document.getElementById("hv-turn");o||(o=document.createElement("p"),o.id="hv-turn",o.className="ui",o.setAttribute("aria-hidden","true"),document.getElementById("home-band").appendChild(o)),o.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 13.5a8.5 8.5 0 0 0 6 6.6M2.2 16.6l1.3-3.2 3 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><span>'+_e(xe("hv_turn"))+"</span>",Ln.classList.toggle("reel-crop",i/(e/t)>1.6)}function sl(n=!1){if(!y||!il())return!1;if(n||(y.userReel=!0),y.reelOn)return!0;y.setOpen&&y.setOpen(!1),y.cam&&Rh();let e=oy(),t=e.kind+"|"+e.src;if(!y.rp||y.rp.key!==t){y.rp&&(y.rp.pause(),y.rp.box.remove()),y.rp=xS(e.kind,e.src),y.rp.key=t,e.vertical&&(y.rp.ratio=9/16);let i=document.getElementById("home-band");i.insertBefore(y.rp.box,i.querySelector(".hv-shade")),y.sound&&e.kind==="video"&&y.rp.mute(!1),e.kind==="video"&&y.rp.play()}else y.rp.seek(0),y.rp.play(),y.rp.mute(!y.sound);return y.reelOn=!0,y.rp.box.hidden=!1,y.rp.playAt=performance.now(),wS(),y.rp.kind==="video"?y.video&&y.video.pause():(y.rp.shown=!0,dh()),Ln.classList.add("reel-on"),Rf(),Xs(),ii(),n||nr("showreel","Showreel",!0),!0}var Hc=0;function wS(){clearInterval(Hc),Hc=setInterval(()=>{let n=y&&y.rp;if(!n||!y.reelOn||n.kind==="video"||n.shown){clearInterval(Hc);return}if(!(n.paused||St||performance.now()-(n.playAt||0)<8e3)){if(clearInterval(Hc),!n.heard||!y.userReel){_i();return}n.showAt=0,n.forced=!0,n.shown=!0,n.box.classList.remove("wait"),y.video&&!y.frozen&&y.video.pause()}},500)}function _i(){!y||!y.reelOn||(y.reelOn=!1,y.rp.pause(),y.rp.box.hidden=!0,y.fresh=!0,y.rp.shown=!1,y.rp.kind!=="video"&&y.rp.box.classList.add("wait"),y.video&&!St&&!y.frozen&&(y.video.muted=!y.sound,y.video.play().catch(()=>{})),Ln.classList.remove("reel-on"),Xs(),ii())}var SS=n=>n?'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>':'<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>',Td=n=>(n=Math.max(0,Math.floor(n||0)),Math.floor(n/60)+":"+String(n%60).padStart(2,"0")),ly=()=>{let n=y&&y.rp;!n||!y.reelOn||(n.paused?n.play():n.pause())};function ES(n){let e=document.createElement("div");e.id="hv-reel",e.hidden=!0,e.setAttribute("role","group"),e.setAttribute("aria-label","Showreel"),e.innerHTML='<button type="button" class="pp"></button><div class="tl" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="tm"></span><button type="button" class="snd"></button><button type="button" class="x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M1 1l10 10M11 1 1 11" stroke="currentColor" stroke-width="1.8"/></svg></button>',n.appendChild(e),y.reelBar=e,e.querySelector(".pp").addEventListener("click",ly),e.querySelector(".snd").addEventListener("click",()=>Cf(!y.sound)),e.querySelector(".x").addEventListener("click",_i);let t=e.querySelector(".tl");t.addEventListener("pointerdown",i=>{let s=y.rp,r=t.getBoundingClientRect();s&&s.d&&s.seek(Math.max(0,Math.min(1,(i.clientX-r.left)/r.width))*s.d)}),t.addEventListener("keydown",i=>{let s=y.rp;!s||!(i.code==="ArrowRight"||i.code==="ArrowLeft")||(i.preventDefault(),i.stopPropagation(),s.seek(Math.max(0,s.t+(i.code==="ArrowRight"?5:-5))))})}function Xs(){let n=y&&y.reelBar;if(!n||(n.hidden=!y.reelOn,nl(),!y.reelOn))return;let e=y.rp,t=e.d||0,i=e.t||0,s=n.querySelector(".pp");s.innerHTML=SS(e.paused),s.setAttribute("aria-label",xe(e.paused?"play":"pause")),n.querySelector(".tl i").style.width=(t?Math.min(100,i/t*100):0).toFixed(2)+"%",n.querySelector(".tl").setAttribute("aria-valuenow",String(t?Math.round(i/t*100):0)),n.querySelector(".tl").setAttribute("aria-label","Showreel"),n.querySelector(".tm").textContent=t?`${Td(i)} / ${Td(t)}`:Td(i);let r=n.querySelector(".snd");r.innerHTML=Tf(y.sound),r.setAttribute("aria-label",xe(y.sound?"soundOff":"soundOn")),r.setAttribute("aria-pressed",String(y.sound)),n.querySelector(".x").setAttribute("aria-label",xe("close"))}function TS(){return new Promise(n=>{let e=document.getElementById("home-band"),t=document.getElementById("hv-consent");t&&t.remove(),t=document.createElement("div"),t.id="hv-consent",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.innerHTML=`<p>${_e(xe("hv_consent"))}</p><div class="bt"><button type="button" class="ok">${Na.shot}<span>${_e(xe("hv_camYes"))}</span></button><button type="button" class="no">${_e(xe("cancel"))}</button></div>`,e.appendChild(t),t.setAttribute("aria-label",xe("hv_cam"));let i=r=>{window.removeEventListener("keydown",s,!0),t.classList.remove("on"),setTimeout(()=>t.remove(),250),n(r)},s=r=>{r.code==="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),i(!1))};window.addEventListener("keydown",s,!0),t.querySelector(".ok").addEventListener("click",()=>i(!0)),t.querySelector(".no").addEventListener("click",()=>i(!1)),requestAnimationFrame(()=>{t.classList.add("on"),t.querySelector(".ok").focus({preventScroll:!0})})})}async function cy(){if(Da(""),!y.camOK){if(!await TS()){ii();return}y.camOK=!0}try{let n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640}},audio:!1}),e=document.createElement("video");Object.assign(e,{muted:!0,playsInline:!0,autoplay:!0,srcObject:n}),e.setAttribute("playsinline",""),await e.play().catch(()=>{}),y.reelOn&&_i(),y.cam={stream:n,video:e},y.lo=0,y.hi=1,y.video&&y.video.pause(),y.panel||Da(xe("hv_camNote"),6e3)}catch{Da(xe("hv_camDenied"),4e3)}ii()}function Rh(){if(y&&y.cam){y.cam.stream.getTracks().forEach(e=>e.stop()),y.cam=null;let n=_S();n&&!St&&n.play().catch(()=>{}),Da("")}y&&ii()}function AS(){y&&(_i(),Rh(),y.video&&y.video.pause())}function Ad(n,e,t,i=1,s=0,r=0,o=!1,a=!1){let l=y.rctx,c=y.raw.width,h=y.raw.height,u=(a?Math.min(c/e,h/t):Math.max(c/e,h/t))*i,d=e*u,p=t*u;o&&(l.save(),l.translate(c,0),l.scale(-1,1)),l.drawImage(n,(c-d)/2+s*c,(h-p)/2+r*h,d,p),o&&l.restore()}function hy(n){let e=y.rctx;if(e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,y.raw.width,y.raw.height),y.cam&&y.cam.video.readyState>=2)return Ad(y.cam.video,y.cam.video.videoWidth,y.cam.video.videoHeight,1,0,0,!0),!0;if(y.video)return y.video.readyState<2?!1:(Ad(y.video,y.video.videoWidth,y.video.videoHeight),!0);let t=y.pics.filter(c=>c.complete&&c.naturalWidth);if(!t.length)return!1;let i=7,s=Math.max(0,n)/i,r=t.length,o=(Math.floor(s)%r+r)%r,a=s-Math.floor(s),l=(c,h,u)=>{e.globalAlpha=u,Ad(c,c.naturalWidth,c.naturalHeight,1.18-.12*h,Math.sin(h*2.2)*.06,Math.cos(h*1.7)*.05)};return l(t[o],a,1),a>.78&&r>1&&l(t[(o+1)%r],a-1,(a-.78)/.22),e.globalAlpha=1,!0}var CS=(()=>{try{return typeof document.createElement("canvas").getContext("2d").filter=="string"}catch{return!1}})();function RS(n){if(y.pyr&&y.pyr.cell===n&&y.pyr.fill===y.fill&&y.pyr.round===y.round)return y.pyr.pat;let e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n),s=n/2;for(let r=0;r<n;r++)for(let o=0;o<n;o++){let a=(y.round?Math.hypot(o+.5-s,r+.5-s)/1.12:Math.max(Math.abs(o+.5-s),Math.abs(r+.5-s)))/s,l=Math.max(0,Math.min(1,1-a/y.fill))*255,c=(r*n+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=l,i.data[c+3]=255}return t.putImageData(i,0,0),y.pyr={cell:n,fill:y.fill,round:y.round,pat:y.ctx.createPattern(e,"repeat")},y.pyr.pat}function Jd(n,e,t){let i=y.ctx,s=y.W,r=y.H,o=Math.round((s-n*t)/2),a=Math.round((r-e*t)/2);if(i.imageSmoothingEnabled=!1,!CS){i.globalAlpha=.45,i.drawImage(y.off,o,a,n*t,e*t),i.globalAlpha=1;return}y.tmp||(y.tmp=document.createElement("canvas"),y.tctx=y.tmp.getContext("2d"));let l=y.tmp,c=y.tctx;(l.width!==s||l.height!==r)&&(l.width=s,l.height=r),c.setTransform(1,0,0,1,0,0),c.globalCompositeOperation="source-over",c.globalAlpha=1,c.filter="none",c.fillStyle="#000",c.fillRect(0,0,s,r),c.imageSmoothingEnabled=!1,c.filter=`grayscale(1)${y.mode==="dark"?" invert(1)":""} brightness(1.25) contrast(${(1.05+y.gamma*.45).toFixed(2)})`,c.globalAlpha=.5,c.drawImage(y.off,o,a,n*t,e*t),c.filter="none",c.globalCompositeOperation="lighter",c.save(),c.translate(o,a),c.fillStyle=RS(t),c.fillRect(-o,-a,s,r),c.restore(),c.globalCompositeOperation="source-over",c.globalAlpha=1,i.save(),i.filter="contrast(4000%)",i.drawImage(l,0,0,s,r),i.restore(),y.color!=="white"&&(i.save(),i.globalCompositeOperation="multiply",y.color==="source"?i.drawImage(y.off,o,a,n*t,e*t):(i.fillStyle=y.color==="grey"?"#8d8d8d":ve.settings.accent||"#ffcc00",i.fillRect(0,0,s,r)),i.restore())}var Va=window.matchMedia?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},Kd=()=>y.floor||y.interval>1e3/29?1:y.delay;function LS(n){if(!y||!y.W)return;let e=y.exit?n-y.exit:-1;if(e>Hg){y.cleared||(y.cleared=!0,y.ctx.fillStyle="#0b0b0b",y.ctx.fillRect(0,0,y.W,y.H),Gg());return}if(y.reelOn&&(!y.rp||y.rp.kind==="video"||y.rp.shown)||n-y.last<(e>=0?1e3/60:y.interval)-2)return;y.last=n;let t=performance.now(),i=Va.matches?0:(n-y.t0)/1e3,s=y.ctx,r=y.W,o=y.H;if(y.panel&&y.panel.classList.contains("open")&&n-(y.statAt||0)>500&&(y.statAt=n,ry()),Lf()||(s.fillStyle="#0b0b0b",s.fillRect(0,0,r,o)),y.intro&&n<y.intro){Gg();return}let a=y.intro?n-y.intro:-1;if(a>PS&&(y.intro=0),y.frozen||e>=0&&y.frozenAt&&n-y.sampleAt<y.interval){let f=y.frozenAt;if(!f)return;y.tainted?e<Hg/3&&Jd(f.cols,f.rows,f.cell):Wg(f.d,f.cols,f.rows,f.cell,e,-1);return}let l=Math.max(y.cell,y.floor),c=Math.ceil(r/l),h=Math.ceil(o/l);if((y.off.width!==c||y.off.height!==h)&&(y.off.width=y.raw.width=c,y.off.height=y.raw.height=h,y.fresh=!0),!hy(i))return;let u=Kd();y.octx.globalAlpha=y.fresh||u<=1?1:1-Math.pow(1-1/u,y.interval/(1e3/30)),y.octx.drawImage(y.raw,0,0),y.octx.globalAlpha=1,y.fresh=!1;let d=null;if(!y.tainted)try{d=y.octx.getImageData(0,0,c,h).data}catch{y.tainted=!0}if(y.frozenAt={d,cols:c,rows:h,cell:l},y.sampleAt=n,y.tainted?(y.gl&&(y.gl.c.style.display="none",y.gl=null),Jd(c,h,l)):Wg(d,c,h,l,e,a),e>=0)return;let p=performance.now()-t;y.cost=y.cost*.9+p*.1;let g=y.gl?[60,30,24,20]:[30,24,20],v=Math.round(1e3/y.interval),m=Math.max(0,g.indexOf(v));y.cost>(y.gl?9:14)&&++y.slow>15?(y.panel&&setTimeout(ii,0),y.slow=0,m<g.length-1?y.interval=1e3/g[m+1]:y.floor=Math.min(Math.max(y.cell+6,14),Math.max(y.floor,l)+2)):y.cost<4&&++y.fast>60&&(y.panel&&setTimeout(ii,0),y.fast=0,y.floor?y.floor=Math.max(0,y.floor-2):m>0&&(y.interval=1e3/g[m-1]))}var Hg=420,PS=650,Vg=(n,e)=>Math.pow(1-1/n,e*.06);function uy(n,e,t,i,s=-1,r=-1){let o=y.ctx,a=e*t,l=y.lum&&y.lum.length===a?y.lum:y.lum=new Float32Array(a),c=1,h=0;for(let P=0,C=0;P<a;P++,C+=4){let D=(.2126*n[C]+.7152*n[C+1]+.0722*n[C+2])/255;l[P]=D,D<c&&(c=D),D>h&&(h=D)}y.lo+=(c-y.lo)*.15,y.hi+=(Math.max(h,y.lo+.15)-y.hi)*.15;let u=y.lo,d=1/(y.hi-u),p=y.mode==="dark",g=y.gamma,v=i*y.fill,m=(y.W-e*i)/2,f=(y.H-t*i)/2,M=y.color==="source",b=s>=0||r>=0,I=M?DS(o):o;I.fillStyle=M?"#fff":y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2",I.beginPath();for(let P=0,C=0;P<t;P++){let D=f+P*i+i/2;for(let z=0;z<e;z++,C++){let S=(l[C]-u)*d;S=S<0?0:S>1?1:S,p&&(S=1-S);let w=(g===1?S:Math.pow(S,g))*v;if(w<.6)continue;let B=m+z*i+i/2,te=D;if(b){let le=w/v;if(s>=0?w*=Vg(2.4+4.6*le,s):w*=1-Vg(3+4*le,r),w<.6)continue}if(y.round){let le=Math.min(w*.56,i/2);I.moveTo(B+le,te),I.arc(B,te,le,0,6.2832)}else I.rect(B-w/2,te-w/2,w,w)}}I.fill(),M&&(I.globalCompositeOperation="source-in",I.imageSmoothingEnabled=!1,I.drawImage(y.off,m,f,e*i,t*i),I.globalCompositeOperation="source-over",o.save(),o.setTransform(1,0,0,1,0,0),o.drawImage(I.canvas,0,0),o.restore())}function IS(n){try{let e=document.createElement("canvas");e.id="home-gl",e.setAttribute("aria-hidden","true");let t=e.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!t)return null;let i=(c,h)=>{let u=t.createShader(c);if(t.shaderSource(u,h),t.compileShader(u),!t.getShaderParameter(u,t.COMPILE_STATUS))throw new Error(t.getShaderInfoLog(u));return u},s=t.createProgram();if(t.attachShader(s,i(t.VERTEX_SHADER,"attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}")),t.attachShader(s,i(t.FRAGMENT_SHADER,`precision highp float;
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
}`)),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return null;t.useProgram(s);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let o=t.getAttribLocation(s,"a");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),[[t.TEXTURE_MIN_FILTER,t.NEAREST],[t.TEXTURE_MAG_FILTER,t.NEAREST],[t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE],[t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE]].forEach(([c,h])=>t.texParameteri(t.TEXTURE_2D,c,h)),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let l={};return["grid","org","res","cell","maxs","lo","k","gam","dark","ex","intro","dpr","src","rnd","col","bg"].forEach(c=>{l[c]=t.getUniformLocation(s,c)}),n.after(e),{c:e,gl:t,u:l,dpr:1,data:null}}catch{return null}}var Lf=()=>!!(y&&y.gl&&!y.gl.gl.isContextLost());function Gg(){if(!Lf())return;let n=y.gl.gl;n.viewport(0,0,y.gl.c.width,y.gl.c.height),n.clearColor(11/255,11/255,11/255,1),n.clear(n.COLOR_BUFFER_BIT)}var NS=n=>{let e=/^#?([0-9a-f]{6})$/i.exec(String(n||"").trim()),t=e?parseInt(e[1],16):15921906;return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]};function Wg(n,e,t,i,s=-1,r=-1){if(!Lf()){uy(n,e,t,i,s,r);return}let o=y.gl,a=o.gl,l=o.u,c=e*t,h=1,u=0;for(let p=0,g=0;p<c;p++,g+=4){let v=(.2126*n[g]+.7152*n[g+1]+.0722*n[g+2])/255;v<h&&(h=v),v>u&&(u=v)}y.lo+=(h-y.lo)*.15,y.hi+=(Math.max(u,y.lo+.15)-y.hi)*.15,o.data!==n&&(o.data=n,a.texImage2D(a.TEXTURE_2D,0,a.RGBA,e,t,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array(n.buffer,n.byteOffset,c*4))),a.viewport(0,0,o.c.width,o.c.height);let d=NS(y.color==="grey"?"#8d8d8d":y.color==="accent"?ve.settings.accent||"#ffcc00":"#f2f2f2");a.uniform2f(l.grid,e,t),a.uniform2f(l.org,(y.W-e*i)/2,(y.H-t*i)/2),a.uniform2f(l.res,o.c.width,o.c.height),a.uniform1f(l.cell,i),a.uniform1f(l.maxs,i*y.fill),a.uniform1f(l.lo,y.lo),a.uniform1f(l.k,1/(y.hi-y.lo)),a.uniform1f(l.gam,y.gamma),a.uniform1f(l.dark,y.mode==="dark"?1:0),a.uniform1f(l.ex,s),a.uniform1f(l.intro,r),a.uniform1f(l.dpr,o.dpr),a.uniform1f(l.src,y.color==="source"?1:0),a.uniform1f(l.rnd,y.round?1:0),a.uniform3f(l.col,d[0],d[1],d[2]),a.uniform3f(l.bg,11/255,11/255,11/255),a.drawArrays(a.TRIANGLES,0,3)}function DS(n){let e=n.canvas;y.mask||(y.mask=document.createElement("canvas"),y.mctx=y.mask.getContext("2d")),(y.mask.width!==e.width||y.mask.height!==e.height)&&(y.mask.width=e.width,y.mask.height=e.height);let t=y.mctx;return t.setTransform(1,0,0,1,0,0),t.globalCompositeOperation="source-over",t.clearRect(0,0,e.width,e.height),t.setTransform(n.getTransform()),t}var Ln=document.getElementById("home"),er=document.getElementById("enter"),US=er.querySelector(".lbl"),Ar=document.getElementById("ticker"),$g=Ar.getContext("2d"),ki=null,Ws=0,Ua=1;function Pf(n){US.textContent=n,er.setAttribute("aria-label",n)}var qg={A:"0e11111f111111",B:"1e11111e11111e",C:"0e11101010110e",D:"1c12111111121c",E:"1f10101e10101f",F:"1f10101e101010",G:"0e111017111f0f".replace("1f0f","110f"),H:"1111111f111111",I:"0e04040404040e",J:"0702020202120c",K:"11121418141211",L:"1010101010101f",M:"111b1515111111",N:"11111915131111",O:"0e11111111110e",P:"1e11111e101010",Q:"0e111111151 20d".replace(/ /g,""),R:"1e11111e141211",S:"0f10100e01011e",T:"1f040404040404",U:"1111111111110e",V:"1111111111 0a04".replace(/ /g,""),W:"1111111515150a",X:"11110a040a1111",Y:"1111110a040404",Z:"1f01020408101f",0:"0e111315191 10e".replace(/ /g,""),1:"040c040404040e",2:"0e110102040 81f".replace(/ /g,""),3:"1f020402 01110e".replace(/ /g,""),4:"02060a121f0202",5:"1f101e0101110e",6:"0608101e11110e",7:"1f010204080808",8:"0e11110e11110e",9:"0e11110f01020c"," ":"00000000000000","!":"04040404040004","?":"0e110102040004",".":"00000000000c0c",",":"000000000c0408",":":"000c0c000c0c00",";":"000c0c000c0408","-":"0000001f000000","+":"0004041f040400","'":"0c040800000000",'"':"0a0a0a00000000","/":"00010204081000","(":"02040808080402",")":"08040202020408","&":"0c1214081512 0d".replace(/ /g,""),"@":"0e11010d15150e","#":"0a0a1f0a1f0a0a","*":"0004150e150400","=":"00001f001f0000","%":"18190204081303","\u271A":"0004 0e1f0e0400".replace(/ /g,"")},OS=n=>{let e=String(n).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[‘’]/g,"'").replace(/[“”«»]/g,'"').toUpperCase(),t=qg[e]||qg["?"];return Array.from({length:7},(i,s)=>parseInt(t.substr(s*2,2),16)||0)};function kS(n){let e=i=>i.published&&ve.sections.some(s=>s.id===i.section&&s.visible),t=ve.sections.find(i=>i.card==="image"&&!i.skills&&i.visible);switch(String(n)){case"auto:years":return String(new Date().getFullYear()-(+ve.settings.founded||2012));case"auto:projects":return String(ve.posts.filter(i=>e(i)&&t&&i.section===t.id).length);case"auto:partners":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).includes("partners")).length);case"auto:people":return String(ve.posts.filter(i=>e(i)&&(i.tags||[]).some(s=>["core","specialists","artists"].includes(s))).length);case"auto:cities":return String(new Set(ve.posts.filter(e).flatMap(i=>(i.spots||[]).map(s=>s.city))).size);default:return String(n||"")}}var BS=()=>(ve.settings.home&&ve.settings.home.figures||[]).map(n=>({value:kS(n.value),label:he(n.label)})).filter(n=>n.value&&n.label),FS=()=>BS().map(n=>`${n.value} ${n.label}`);function zS(){let n=he(ve.settings.home.sub||{}).replace(/\s*\n\s*/g," ").trim(),e=he(ve.settings.home.quotes||{}).split(/\n+/).map(s=>s.trim()).filter(Boolean),t=n?[n,...e]:[...FS(),...e,...ve.settings.home.ticker||[]].filter(Boolean),i=(t.length?t:[ve.settings.name]).map(s=>String(s).replace(/œ/g,"oe").replace(/Œ/g,"OE").replace(/æ/g,"ae").replace(/…/g,"...").replace(/·/g,".").toUpperCase().trim()).join("   \u271A   ")+"   \u271A   ";ki=HS(i)}function HS(n){let e=[];for(let t of n){let i=OS(t),s=t===" "?3:5;for(let r=0;r<s;r++){let o=0;for(let a=0;a<7;a++)i[a]&1<<4-r&&(o|=1<<a);e.push(o)}e.push(0)}return{w:e.length,cols:e}}var yi={pitch:3.2,rows:7,h:30},Ea=null,Xg="";function Yg(n,e){let t=Ua,i=Math.ceil(yi.pitch*2*t),s=document.createElement("canvas");s.width=s.height=i;let r=s.getContext("2d"),o=i/2;if(e){let a=r.createRadialGradient(o,o,0,o,o,o);a.addColorStop(0,n),a.addColorStop(.35,n),a.addColorStop(1,"rgba(0,0,0,0)"),r.globalAlpha=.35,r.fillStyle=a,r.fillRect(0,0,i,i),r.globalAlpha=1}return r.fillStyle=n,r.globalAlpha=e?1:.13,r.beginPath(),r.arc(o,o,yi.pitch*.38*t,0,Math.PI*2),r.fill(),e&&(r.globalAlpha=.55,r.fillStyle="#fff",r.beginPath(),r.arc(o-yi.pitch*.1*t,o-yi.pitch*.1*t,yi.pitch*.12*t,0,Math.PI*2),r.fill()),s}function dy(){Ua=Math.min(window.devicePixelRatio||1,2),Ar.width=Math.round(window.innerWidth*Ua),Ar.height=Math.round(yi.h*Ua),Ea=null,$s=null}var Do=0,$s=null;function VS(n){let e=Ua,t=yi.pitch,i=Math.ceil(window.innerWidth/t)+1,s=[ki.w,i,e,n].join("|");if($s&&$s.dots===ki&&$s.key===s)return $s;(!Ea||Xg!==n)&&(Xg=n,Ea={on:Yg(n,!0),off:Yg(n,!1)});let r=i+ki.w+i,o=document.createElement("canvas");o.width=Math.ceil(r*t*e),o.height=Math.round(yi.h*e);let a=o.getContext("2d"),l=(yi.h-yi.rows*t)/2,c=Ea.on.width/2;a.fillStyle="#000",a.fillRect(0,0,o.width,o.height);for(let h=0;h<r;h++){let u=h<i?0:ki.cols[(h-i)%ki.w],d=(h*t+t/2)*e-c;for(let p=0;p<yi.rows;p++)a.drawImage(u>>p&1?Ea.on:Ea.off,d,(l+p*t+t/2)*e-c)}return $s={canvas:o,dots:ki,key:s,shown:-1,lead:i}}function GS(n){let e=+(ve.settings.home||{}).tickerSpeed;Do+=n*(e>0?Math.min(120,e):26);let t=VS(ve.settings.accent||"#ffcc00");Do>=1&&(Ws+=Math.floor(Do),Do%=1),Ws>=t.lead+ki.w&&(Ws=t.lead+(Ws-t.lead)%ki.w),t.shown!==Ws&&(t.shown=Ws,$g.setTransform(1,0,0,1,0,0),$g.drawImage(t.canvas,Ws*yi.pitch*Ua,0,Ar.width,Ar.height,0,0,Ar.width,Ar.height))}var St=!1,Nr=!1,rl=!1,Dr=()=>/^(#(accueil|home|inici|inicio)?)?$/i.test(location.hash||""),Qd=0,ef=0,Cd=!1,WS=180;function If(n=rl){if(!(St||Cd)){if(!(n&&y&&y.W&&!Ln.hidden&&!Va.matches)){jg();return}Cd=!0,Ln.classList.add("leaving"),y.setOpen&&y.setOpen(!1),y.reelOn&&_i(),$S(),y.exit=performance.now(),y.cleared=!1,y.intro=0,setTimeout(()=>{Cd=!1,jg()},WS)}}function $S(){y&&(y.frozen=!0,y.video&&y.video.pause(),y.rp&&y.rp.pause(),y.cam&&(y.cam.stream.getTracks().forEach(n=>n.stop()),y.cam=null))}function jg(){if(!St){if(St=!0,clearTimeout(Qd),F0=performance.now(),!wt&&Dr())try{history.pushState(null,"",location.pathname+location.search+"#"+(ve.sections.find(n=>n.id===ve.settings.startSection&&n.visible)||Dt[0].def).id)}catch{}YS(),Bw(),Pr(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Ln.classList.add("out"),Qd=setTimeout(()=>{Ln.hidden=!0,AS()},1250)})),ln.classList.add("on"),setTimeout(Vw,1500),ir.hidden=!1,Xo.classList.remove("hidden"),xn.focus({preventScroll:!0})}}function Lh(n=!0){if(St&&(Ai(),sh(),ih(),vh(),tl(null),wf(),St=!1,rl=!1,clearTimeout(Qd),ef=performance.now()+1300,er.classList.remove("wait"),Pf(he(ve.settings.home.enter)||xe("enter")),fy=performance.now(),y&&(y.exit=0,y.frozen=!1,y.cleared=!1,y.fresh=!0,y.intro=performance.now()+450),Ln.classList.remove("leaving"),Ln.hidden=!1,Ln.offsetWidth,Ln.classList.remove("out"),y&&y.video&&y.video.play().catch(()=>{}),n&&!wt))try{history.pushState(null,"",location.pathname+location.search+"#accueil")}catch{}}window.addEventListener("popstate",()=>{if(!wt){if(Js.open){Js.pushed=!1,xs();try{history.replaceState(null,"",location.pathname+location.search+"#"+H.section.def.id)}catch{}return}if(Js.pushed=!1,Dr())Lh(!1);else if(!St&&Nr)If();else if(St&&Ms){let n=Dt.findIndex(e=>e.def.id===decodeURIComponent(location.hash.slice(1).split("/")[0]));n>=0&&n!==H.currentSection&&bn&&Qo(n)}}});ln.addEventListener("click",n=>{n.target.closest(".wm")&&St&&Lh()});ln.addEventListener("keydown",n=>{(n.code==="Enter"||n.code==="Space")&&n.target.closest(".wm")&&St&&(n.preventDefault(),Lh())});er.addEventListener("click",()=>{rl=!0,Nr?If():(Pf(xe("loading")),er.classList.add("wait"))});var fy=0,Vc=0,Zg=0,Fo=null,py=n=>!!(n&&n.closest&&n.closest("#hc-story, #hv-panel"));function Nf(){if(St||rl||performance.now()-fy<900||de&&de.open)return;let n=document.getElementById("hc-story");n&&n.classList.contains("on")||er.click()}Ln.addEventListener("wheel",n=>{if(St||py(n.target))return;let e=performance.now();e-Zg>350&&(Vc=0),Zg=e,n.deltaY>0&&(Vc+=n.deltaY*(n.deltaMode?30:1),Vc>40&&(Vc=0,Nf()))},{passive:!0});Ln.addEventListener("touchstart",n=>{Fo=n.touches.length===1&&!py(n.target)?n.touches[0].clientY:null},{passive:!0});Ln.addEventListener("touchmove",n=>{Fo!==null&&n.touches.length===1&&Fo-n.touches[0].clientY>46&&(Fo=null,Nf())},{passive:!0});Ln.addEventListener("touchend",()=>{Fo=null},{passive:!0});window.addEventListener("keydown",n=>{if(St||n.ctrlKey||n.metaKey||n.altKey||de&&de.open)return;let e=n.target,t=e&&e.closest&&e.closest('button, a, input, select, textarea, [contenteditable="true"]');if(n.code==="Space"&&!t&&y&&y.reelOn){n.preventDefault(),ly();return}if(n.code==="ArrowDown"||n.code==="PageDown"||(n.code==="Space"||n.code==="Enter")&&!t){if(e&&e.tagName==="INPUT")return;n.preventDefault(),Nf()}});var tf=n=>String(n||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"");function qS(n){let e="";try{let t=new URLSearchParams(location.search);e=t.get("tag")||t.get("cat")||t.get("categorie")||t.get("category")||t.get("tags")||""}catch{}return wt&&wt.tag&&(e=wt.tag),tf(e||n)}function XS(n,e){let t=n.tags||[],i=t.find(s=>tf(s.id)===e)||t.find(s=>Object.values(s.label||{}).some(r=>tf(r)===e));return i?i.id:""}function YS(){try{zn.compile(kd,hn,Rn)}catch{}wh();let n=wt&&wt.start||decodeURIComponent((location.hash||"").slice(1)),[e,t]=n.split("/"),i=Dt.findIndex(o=>o.def.id===e);i<0&&(i=Math.max(0,Dt.findIndex(o=>o.def.id===ve.settings.startSection)));let s=qS(t||(e&&i<0?e:""));if(s){let o=Dt.findIndex(a=>a.def.id===e)>=0?[i]:[i,...Dt.keys()];for(let a of o){let l=XS(Dt[a].def,s);if(l){i=a,Dt[a].def.defaultTag=l;break}}}bs=oe.cameraDistanceProportion,H.currentSection=i,H.resetData();let r=ws();H.cameraY=Ba(),yt.x=vs()*Math.sin(H.degreeCamera)+r.p.x,yt.y=H.cameraY,yt.z=vs()*Math.cos(H.degreeCamera)+r.p.z,Fn.x=r.p.x,Fn.y=bh(),Fn.z=r.p.z,Ms=!0,Qo(i,0),(Ft<=700||Ut<=520)&&Pr()}var Jg=performance.now(),Kg=NaN,Qg=0,nf=0,jS=(n=700)=>{nf=Math.max(nf,performance.now()+n)};["pointerdown","pointermove","pointerup","wheel","keydown","touchstart","touchmove","resize"].forEach(n=>window.addEventListener(n,()=>jS(),{passive:!0}));function ZS(){let n=hn.position,e=hn.quaternion,t=n.x+n.y*1.3+n.z*1.7+e.x*31+e.y*37+e.z*41+e.w*43+hn.fov*7.3,i=1;return Rn.traverseVisible(s=>{i+=1.13;let r=s.position,o=s.rotation,a=s.scale;t+=(r.x+r.y*1.3+r.z*1.7+o.x*3.1+o.y*3.7+o.z*4.3+a.x*5.3+a.y*5.9+a.z*6.1)*i;let l=s.material;l&&!Array.isArray(l)&&(t+=(l.opacity*11+l.version*13+(l.map?l.map.version*17+l.map.id*.01:0))*i);let c=s.geometry;c&&Number.isFinite(c.instanceCount)&&(t+=c.instanceCount*19*i)}),t}function JS(){if(!zn.compileAsync)return;let n=new zs;n.setPositions([0,0,0,1,1,1]);let e=new Os;of.forEach(s=>e.add(new Sa(n,s)));let t=()=>{if(St){n.dispose();return}let s=new Sn;[...kd.children,...e.children].forEach(r=>{let o=r.clone();o.frustumCulled=!1,s.add(o)}),Rn.add(s);try{zn.render(Rn,hn)}catch{}Rn.remove(s);try{zn.render(Rn,hn)}catch{}n.dispose()},i=()=>Promise.all([kd,e,Rn].map(s=>zn.compileAsync(s,hn,Rn).catch(()=>{}))).then(()=>(window.requestIdleCallback||(s=>setTimeout(s,50)))(t,{timeout:800}));(window.requestIdleCallback||(s=>setTimeout(s,200)))(i,{timeout:1500})}var Rd=0;function my(n){let e=Math.min(.25,Math.max(0,(n-Jg)/1e3));if(Jg=n,ps+=e,Go=e*o0,!St&&ki&&!ms.classList.contains("hc-late")&&GS(e),y&&!Ln.hidden&&LS(n),Ms&&(St||n<ef)){rw(),Dw(),Uw(),kw(),Pe&&Pe.update(),oS(),Ye.step(),zw();let t=Ti.length||n<nf||n<ef||qi||Jn||ni||n-Qg>2e3,i=ZS();(t||i!==Kg)&&(zn.render(Rn,hn),n-Rd<100&&St&&!document.hidden&&lw(n,n-Rd),Rd=n,Qg=n,Kg=i)}requestAnimationFrame(my)}function Ld(n){console.error(n),Jc(!0);let e=document.getElementById("load-error");e.textContent=xe("loadError")+(n&&n.message?n.message:n),e.hidden=!1}async function KS(){wt||!/[?&]preview\b/.test(location.search)||window.parent===window||(wt=await new Promise(n=>{let e=setTimeout(()=>n(null),2500);window.addEventListener("message",t=>{let i=t.data;if(t.source!==window.parent||!i||i.type!=="hc-preview"||!i.data)return;clearTimeout(e);let s=i.data;s.files=Object.assign({},s.files),Object.entries(i.blobs||{}).forEach(([r,o])=>{try{s.files[r]=URL.createObjectURL(o)}catch{}}),n(s)});try{window.parent.postMessage({type:"hc-preview-ready",version:a0},"*")}catch{}}))}var gy=()=>{let n=he((ve.settings.home||{}).sub||{}).trim();if(/\n/.test(n))return n.split(/\n+/).map(i=>i.trim()).filter(Boolean);let e=[],t="";return n.split(/(?<=,)\s+/).forEach(i=>{t&&(t+" "+i).length>62?(e.push(t),t=i):t=t?t+" "+i:i}),t&&e.push(t),e};function QS(){let n=document.getElementById("hc-intro");if(!n)return;let e=n.querySelector(".ln"),t=gy();if(!t.length){n.remove();return}e.querySelectorAll(".l").forEach(r=>r.getAnimations().forEach(o=>o.cancel())),e.innerHTML="",t.forEach(r=>{let o=document.createElement("span");o.className="l",o.textContent=r,e.appendChild(o)});let i=0,s=0;[...e.children].forEach((r,o)=>{r.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:i,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),o===t.length-1&&(s=i),i+=Math.max(650,Math.min(1700,120+16*t[o].length))}),window.HC_INTRO={t0:performance.now(),video:s,depart:i+150}}var Ra=null;function yy(){if(Ra){Pd(Ra,!0);return}let n=gy();if(!n.length)return;let e=!St,t=document.createElement("div");t.id="hc-say",t.className=e?"home":"world",t.setAttribute("role","status");let i=document.createElement("div");i.className="ln",t.appendChild(i);let s=document.querySelector("#home-band .sl span, #slogan span");if(s){let a=getComputedStyle(s);i.style.fontFamily=a.fontFamily,i.style.fontWeight=a.fontWeight,i.style.fontStyle=a.fontStyle}n.forEach(a=>{let l=document.createElement("span");l.className="l",l.textContent=a,i.appendChild(l)}),(e?document.getElementById("home"):document.body).appendChild(t),Ra=t;let r=0;[...i.children].forEach((a,l)=>{a.animate([{opacity:0,transform:"translateX(-36px)",filter:"blur(6px)"},{opacity:1,transform:"none",filter:"blur(0)"}],{duration:1e3,delay:r,easing:"cubic-bezier(.22,.61,.36,1)",fill:"both"}),r+=Math.max(650,Math.min(1700,120+16*n[l].length))}),t.animate([{opacity:0},{opacity:1}],{duration:500,fill:"both"}),t._t=setTimeout(()=>Pd(t),r+900);let o=a=>{a.target.closest&&a.target.closest("#home-about, #about-btn")||Pd(t,!0)};setTimeout(()=>{Ra===t&&(t._away=o,window.addEventListener("pointerdown",o,!0),window.addEventListener("keydown",o,!0))},50)}function Pd(n,e=!1){if(n._gone)return;n._gone=!0,clearTimeout(n._t),Ra===n&&(Ra=null),n._away&&(window.removeEventListener("pointerdown",n._away,!0),window.removeEventListener("keydown",n._away,!0));let t=[...n.querySelectorAll(".l")],i=e?80:vy,s=e?450:750,r=(t.length-1)*i;t.forEach((o,a)=>o.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:s,delay:a*i,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),n.animate([{opacity:0}],{duration:600,delay:r+s*.4,fill:"forwards"}),setTimeout(()=>n.remove(),r+s+50)}var zo=!1,Ho=!1,Cr=!1,jc=!1,Id=0,e0=0,t0=!1,vy=240;function Zc(){if(Cr)return;Cr=!0;let n=document.getElementById("hc-intro");n&&n.classList.remove("hold"),eE()}function Jc(n=!1,e=!1){let t=document.getElementById("hc-intro");if(!t||zo)return;if(zo=!0,window.HC_NOINTRO=!0,n||!t.animate){t.remove(),Zc(),s0(!0);return}e&&(Zc(),ms.classList.remove("hc-stage"));let i=[...t.querySelectorAll(".l")],s=e?80:vy,r=e?450:750,o=(i.length-1)*s;i.forEach((a,l)=>a.animate([{opacity:0,transform:"translateX(36px)",filter:"blur(5px)"}],{duration:r,delay:l*s,easing:"cubic-bezier(.45,0,.75,.3)",fill:"forwards"})),setTimeout(Zc,o),setTimeout(()=>s0(),o+r+(e?0:500)),setTimeout(()=>t.remove(),o+r+1300)}function eE(){if(!(!y||St)){if(y.reelOn&&y.rp&&!y.userReel)Ho||(Ho=!0,y.rp.seek(0),y.rp.play());else if(!y.reelOn&&!y.userReel&&!y.cam&&il()&&Dr()&&!Va.matches&&!(wt&&wt.start)){let n=setInterval(()=>{if(St||y.reelOn||y.cam){clearInterval(n);return}Nr&&(clearInterval(n),sl(!0),nl(),n0())},150);return}n0()}}function n0(){let n=document.getElementById("home-snd");n&&!n.hidden&&!y.sound&&(n.classList.remove("blink"),n.offsetWidth,n.classList.add("blink"),setTimeout(()=>n.classList.remove("blink"),1400))}var ms=document.documentElement,i0="cubic-bezier(.22,.61,.36,1)";function tE(){if(!ms.classList.contains("hc-stage"))return;let n=()=>{if(!ms.classList.contains("hc-stage"))return;let t=document.querySelector("#home-slogan .wm"),i=[...document.querySelectorAll("#home-slogan > span")],s=[...document.querySelectorAll("#home-ctl > *")];ms.classList.remove("hc-stage");let r=(l,c,h=-24,u=900)=>l&&l.animate([{opacity:0,transform:`translateX(${h}px)`,filter:"blur(6px)"},{opacity:getComputedStyle(l).opacity,transform:"none",filter:"blur(0)"}],{duration:u,delay:c,easing:i0,fill:"backwards"});r(t,0,-30,1100),i.forEach((l,c)=>r(l,380+c*130,-18,800)),s.forEach((l,c)=>l.animate([{opacity:0,transform:"scale(.6)"},{opacity:getComputedStyle(l).opacity,transform:"none"}],{duration:520,delay:760+c*90,easing:"cubic-bezier(.34,1.4,.64,1)",fill:"backwards"}));let o=document.getElementById("enter");o&&o.animate([{opacity:0,transform:"translate(-50%, 10px)"},{opacity:1,transform:"translateX(-50%)"}],{duration:700,delay:900,easing:i0,fill:"backwards"}),setTimeout(()=>{jc=!0},1150+s.length*60);let a=Math.max(1100,380+Math.max(0,i.length-1)*130+800,760+Math.max(0,s.length-1)*90+520)+120;setTimeout(()=>{let l=document.getElementById("hc-intro");l&&!Cr&&l.classList.add("beat-on")},a)};(document.fonts&&document.fonts.ready?Promise.race([document.fonts.ready,new Promise(t=>setTimeout(t,1200))]):Promise.resolve()).then(()=>requestAnimationFrame(n))}function s0(n=!1){ms.classList.contains("hc-late")&&(ms.classList.remove("hc-stage","hc-late"),Ws=0,Do=0,$s&&($s.shown=-1),!n&&["#ticker","#home-dock"].forEach((e,t)=>{let i=document.querySelector(e);i&&i.animate([{opacity:0},{opacity:getComputedStyle(i).opacity}],{duration:1200,delay:t*220,easing:"ease",fill:"backwards"})}))}function nE(){if(!document.getElementById("hc-intro"))return;let e=!!y&&il()&&Dr()&&!Va.matches&&!(wt&&wt.start),t=!1,i=!e,s=0,r=()=>Jc(!1,!0);["pointerdown","keydown","wheel","touchmove"].forEach(a=>window.addEventListener(a,r,{once:!0,passive:!0,capture:!0}));let o=setInterval(()=>{if(zo&&Cr){clearInterval(o);return}if(St){clearInterval(o),Jc(!0);return}e&&Nr&&!t&&!y.reelOn&&!y.cam&&(t=sl(!0)),t&&!i&&y.rp&&y.rp.t>.05&&(y.rp.pause(),y.rp.seek(0),i=!0),t&&!y.reelOn&&(i=!0);let a=performance.now(),l=!y||!y.rp?0:y.rp.kind==="youtube"?2900:y.rp.kind==="vimeo"?500:0;!jc&&!ms.classList.contains("hc-stage")&&!ms.classList.contains("hc-late")&&(jc=!0),!Cr&&jc&&(Id||(Id=a),l&&i&&y.reelOn&&!Ho&&(Ho=!0,s=a,y.rp.seek(0),y.rp.play()),((e?!y.reelOn||i&&(!l||Ho&&a>=s+l):Nr)||a-Id>7e3)&&(Zc(),e0=a+1e3)),Cr&&!t0&&!zo&&a>=e0&&(t0=!0,window.HC_GO&&window.HC_GO());let c=window.HC_INTRO;c&&!zo&&Cr&&a>=c.t0+c.depart+600&&Jc()},60)}(async function(){try{await KS(),wt?ve=Hs(structuredClone(wt.content)):(ve=await Gc.load(),Gc.prepare&&await Gc.prepare(ve))}catch(a){Ld(a);return}Vn=fh(),w0();{let a=cf();a!==null&&(Vn=a)}hf();let e=null;try{e=localStorage.getItem("hc-lang")}catch{}let t=ve.settings.langs&&ve.settings.langs.length?ve.settings.langs:oi,i=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]).map(a=>String(a).toLowerCase().slice(0,2)).find(a=>t.includes(a)),s="";try{s=(new URLSearchParams(location.search).get("lang")||"").toLowerCase()}catch{}let r=((window.HC_ROUTE||{}).lang||"").toLowerCase();if(fn=t.includes(s)?s:t.includes(r)?r:t.includes(e)?e:i||ve.settings.defaultLang||t[0],Dt=ve.sections.filter(a=>a.visible).map(a=>({def:a})),!Dt.length){Ld(new Error("aucune section visible"));return}if(!wt)try{let a={"nouveau-contenu":"immersive","nouveau-contenu-4":"la-traversee-du-temps","nouveau-contenu-5":"valentin-ducros","nouveau-contenu-7":"laurent-delforge","fat-site-2008":"les-debuts","nokia-navigator":"les-debuts",lexus:"les-debuts","pubs-interactives":"les-debuts"},l=new URLSearchParams(location.search).get("p")||(window.HC_ROUTE||{}).p,c=l&&!ve.posts.some(u=>u.id===l)&&a[l]?a[l]:l,h=c&&ve.posts.find(u=>u.id===c&&u.published!==!1&&Dt.some(d=>d.def.id===u.section));h&&(Yc=h.id,history.replaceState(null,"",location.pathname+location.search+"#"+h.section))}catch{}qw(),window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches&&l0(!1),H0(),Eh(),Hw(),dS(),wt&&QS(),nE(),tE(),I0(),wh(),dy(),requestAnimationFrame(my),Sr=Dt.map((a,l)=>new Fd(a.def,l)),Dt.forEach((a,l)=>{a.object=Sr[l]}),Dt.forEach(a=>{a.container=a.object.container,a.p=a.object.p});let o=new Rc(m0);try{(await Promise.allSettled(Sr.map(l=>l.load(o)))).forEach((l,c)=>{l.status==="rejected"&&console.warn("Mod\xE8le 3D illisible pour la section \xAB "+Sr[c].def.id+" \xBB :",l.reason)}),Sr.forEach((l,c)=>l.place(c)),await Promise.race([Promise.all(M0).then(tr),new Promise(l=>setTimeout(l,3e3))]),Nr=!0,JS();{let l=document.getElementById("seo-page");l&&l.remove()}if((rl||!Dr()||wt&&wt.start)&&If(),Yc){let l=Yc,c=performance.now(),h=setInterval(()=>{(bn||performance.now()-c>8e3)&&(clearInterval(h),bn&&el(l))},120)}}catch(a){Ld(a)}})();window.__hc={P:H,STYLE:oe,cam:yt,camera:hn,renderer:zn,get hv(){return y&&{cell:y.cell,floor:y.floor,fps:Math.round(1e3/y.interval),cost:+y.cost.toFixed(1),tainted:y.tainted}},get input(){return bn},get homeGone(){return St},get content(){return ve},get postsView(){return Pe},getToSectionView:Qo,openThatPost:Yo,closePost:xs,goToPost:el,setLang:yf,enter:()=>er.click()};})();
