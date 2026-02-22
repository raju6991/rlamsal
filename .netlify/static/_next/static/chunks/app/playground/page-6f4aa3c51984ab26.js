(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3882],{17894:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>y});var i=t(95155),s=t(95689),l=t(47962),r=t(12115),n=t(73763),o=t(73685),d=t.n(o),c=t(51114),p=t(97686);t(63921),t(7837),t(71243),t(99142),t(26584);var u="jps8sib",m="jps8sim",h="jps8sid",g="jps8sik",v=t(97667),x=t(53538),k=t(52474);let f=({label:e,value:a,min:t,max:s,step:l=1,unit:r="",onChange:n})=>{let{playSound:o}=(0,x.f)();return(0,i.jsxs)("div",{className:u,children:[(0,i.jsxs)("div",{className:"jps8sic",children:[(0,i.jsx)("label",{className:h,children:e}),(0,i.jsxs)("span",{className:"jps8sie",children:[a,r]})]}),(0,i.jsx)("input",{type:"range",className:"jps8sif",min:t,max:s,step:l,value:a,onChange:e=>{n(e.target.value),o("pop")}})]})},j=({label:e,options:a,value:t,onChange:s})=>{let{playSound:l}=(0,x.f)();return(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)("label",{className:h,children:e}),(0,i.jsx)("div",{className:"jps8sig",children:a.map(e=>(0,i.jsx)("button",{className:`jps8sih ${t===e.value?"jps8sii":""}`,onClick:()=>{s(e.value),l("pop")},children:e.label},e.value))})]})};function y(){let{playSound:e}=(0,x.f)(),[a,t]=(0,r.useState)("flex"),[o,y]=(0,r.useState)({}),[b,S]=(0,r.useState)(!1),C=(0,r.useRef)(null),w=(0,r.useRef)(!1);(0,r.useEffect)(()=>{S(!0)},[]);let[N,$]=(0,r.useState)("circle"),[I,P]=(0,r.useState)("row"),[A,D]=(0,r.useState)("center"),[E,W]=(0,r.useState)("center"),[F,L]=(0,r.useState)("nowrap"),[R,G]=(0,r.useState)(16),[T,_]=(0,r.useState)(3),[B,O]=(0,r.useState)(16),[V,M]=(0,r.useState)("pulse"),[z,J]=(0,r.useState)(2),[q,X]=(0,r.useState)("#DC143C"),[Y,H]=(0,r.useState)("#4169E1"),[K,U]=(0,r.useState)(45),[Q,Z]=(0,r.useState)(8),[ee,ea]=(0,r.useState)("#DC143C"),[et,ei]=(0,r.useState)(2),[es,el]=(0,r.useState)(""),er=(0,r.useCallback)(()=>{if("flex"===a)return`.container {
  display: flex;
  flex-direction: ${I};
  justify-content: ${A};
  align-items: ${E};
  flex-wrap: ${F};
  gap: ${R}px;
}`;if("grid"===a)return`.container {
  display: grid;
  grid-template-columns: repeat(${T}, 1fr);
  gap: ${B}px;
}`;if("animation"===a){let e="pulse"===V?`{
  scale: [1, 1.1, 1],
  transition: { duration: ${z}, repeat: Infinity }
}`:`{
  rotate: 360,
  transition: { duration: ${z}, repeat: Infinity, ease: "linear" }
}`;return`/* Framer Motion Props */
<motion.div
  animate=${e}
/>

/* CSS Alternative */
.element {
  animation: ${V} ${z}s infinite ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`}return"gradient"===a?`.gradient-box {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  background: linear-gradient(
    ${K}deg,
    ${q},
    ${Y}
  );
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}`:"svg"===a?"circle"===N?`/* SVG Drawing (Circle) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.circle
    cx="100" cy="100" r="80"
    stroke="${ee}" strokeWidth="${Q}" fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: ${et}, repeat: Infinity }}
  />
</motion.svg>`:"rect"===N?`/* SVG Drawing (Rect) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.rect
    x="20" y="20" width="160" height="160" rx="20"
    stroke="${ee}" strokeWidth="${Q}" fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: ${et}, repeat: Infinity }}
  />
</motion.svg>`:"recursion"===N?`/* SVG Drawing (Fractal/Recursion) */
<motion.svg width="240" height="240" viewBox="0 0 200 200">
  <motion.g stroke="${ee}" strokeWidth="${Q}" fill="transparent">
    {[0, 1, 2, 3].map((i) => (
      <motion.circle
        key={i}
        cx="100" cy="100" r={20 + i * 20}
        initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1 - i * 0.2,
          rotate: 360
        }}
        transition={{
          duration: ${et} + i,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </motion.g>
</motion.svg>`:"/* SVG Drawing (Complex) */":"/* SVG Drawing */"},[a,I,A,E,F,R,T,B,V,z,K,q,Y,Q,ee,et,N]);(0,r.useEffect)(()=>{w.current||el(er())},[er]);let en=(0,n.Ay)({host:k.env.NEXT_PUBLIC_PARTYKIT_HOST||"127.0.0.1:1999",room:"css-playground",onMessage(e){try{let a=JSON.parse(e.data);if("sync"===a.type){let e=a.state;e.category&&t(e.category),e.flexDirection&&P(e.flexDirection),e.justifyContent&&D(e.justifyContent),e.alignItems&&W(e.alignItems),e.flexWrap&&L(e.flexWrap),void 0!==e.gap&&G(e.gap),void 0!==e.gridColumns&&_(e.gridColumns),void 0!==e.gridGap&&O(e.gridGap),e.animationType&&M(e.animationType),void 0!==e.duration&&J(e.duration),e.gradientStart&&X(e.gradientStart),e.gradientEnd&&H(e.gradientEnd),void 0!==e.gradientAngle&&U(e.gradientAngle),void 0!==e.strokeWidth&&Z(e.strokeWidth),e.strokeColor&&ea(e.strokeColor),void 0!==e.svgDuration&&ei(e.svgDuration),e.svgShape&&$(e.svgShape),e.code&&el(e.code)}else"presence"===a.type?y(e=>({...e,[a.id]:a})):"presence-remove"===a.type&&y(e=>{let t={...e};return delete t[a.id],t})}catch(e){}}}),eo=e=>{en.send(JSON.stringify({type:"sync",state:e}))};return(0,i.jsxs)("div",{className:"jps8si0",children:[(0,i.jsxs)("header",{className:"jps8si1",children:[(0,i.jsx)(s.P.h1,{className:"jps8si2",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:"CSS Playground"}),(0,i.jsx)(s.P.p,{className:"jps8si3",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"A premium interactive sandbox for modern CSS layouts and animations."})]}),(0,i.jsx)("div",{className:"jps8si4",children:[{id:"flex",label:"Flexbox"},{id:"grid",label:"Grid"},{id:"animation",label:"Animations"},{id:"gradient",label:"Gradients"},{id:"svg",label:"SVG"}].map((e,l)=>(0,i.jsx)(s.P.button,{className:`jps8si5 ${a===e.id?"jps8si6":""}`,onClick:()=>{t(e.id),eo({category:e.id})},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05*l},children:e.label},e.id))}),(0,i.jsxs)("div",{className:"jps8si7",children:[(0,i.jsxs)("aside",{className:"jps8si8",children:[(0,i.jsxs)("div",{className:"jps8sia jps8si9",children:["flex"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{label:"Direction",value:I,options:[{label:"Row",value:"row"},{label:"Column",value:"column"},{label:"Row Rev",value:"row-reverse"}],onChange:e=>{P(e),eo({flexDirection:e})}}),(0,i.jsx)(j,{label:"Justify",value:A,options:[{label:"Start",value:"flex-start"},{label:"Center",value:"center"},{label:"End",value:"flex-end"},{label:"Between",value:"space-between"}],onChange:e=>{D(e),eo({justifyContent:e})}}),(0,i.jsx)(f,{label:"Gap",value:R,min:0,max:100,unit:"px",onChange:e=>{let a=parseInt(e);G(a),eo({gap:a})}})]}),"grid"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{label:"Columns",value:T,min:1,max:12,onChange:e=>{let a=parseInt(e);_(a),eo({gridColumns:a})}}),(0,i.jsx)(f,{label:"Gap",value:B,min:0,max:64,unit:"px",onChange:e=>{let a=parseInt(e);O(a),eo({gridGap:a})}})]}),"animation"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{label:"Type",value:V,options:[{label:"Pulse",value:"pulse"},{label:"Spin",value:"spin"}],onChange:e=>{M(e),eo({animationType:e})}}),(0,i.jsx)(f,{label:"Duration",value:z,min:.1,max:10,step:.1,unit:"s",onChange:e=>{let a=parseFloat(e);J(a),eo({duration:a})}})]}),"gradient"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{label:"Angle",value:K,min:0,max:360,unit:"deg",onChange:e=>{let a=parseInt(e);U(a),eo({gradientAngle:a})}}),(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)("label",{className:h,children:"Colors"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,i.jsx)("input",{type:"color",value:q,onChange:e=>{X(e.target.value),eo({gradientStart:e.target.value})},style:{flex:1,height:"40px",border:"none",borderRadius:"4px"}}),(0,i.jsx)("input",{type:"color",value:Y,onChange:e=>{H(e.target.value),eo({gradientEnd:e.target.value})},style:{flex:1,height:"40px",border:"none",borderRadius:"4px"}})]})]})]}),"svg"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j,{label:"Shape",value:N,options:[{label:"Circle",value:"circle"},{label:"Rect",value:"rect"},{label:"Fractal",value:"recursion"}],onChange:a=>{$(a),eo({svgShape:a}),e("pop")}}),(0,i.jsx)(f,{label:"Stroke Width",value:Q,min:1,max:20,unit:"px",onChange:e=>{let a=parseInt(e);Z(a),eo({strokeWidth:a})}}),(0,i.jsx)(f,{label:"Animation Duration",value:et,min:.5,max:5,step:.1,unit:"s",onChange:e=>{let a=parseFloat(e);ei(a),eo({svgDuration:a})}}),(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)("label",{className:h,children:"Stroke Color"}),(0,i.jsx)("input",{type:"color",value:ee,onChange:e=>{ea(e.target.value),eo({strokeColor:e.target.value})},style:{width:"100%",height:"40px",border:"none",borderRadius:"4px"}})]})]})]}),(0,i.jsxs)("div",{className:"jps8sip jps8si9",children:[(0,i.jsxs)("div",{className:"jps8siq",children:[(0,i.jsx)("span",{className:"jps8sir",children:"Sandbox Editor"}),(0,i.jsx)("button",{className:"jps8sis",onClick:()=>{navigator.clipboard.writeText(es),c.oR.success("CSS copied to clipboard!")},children:"Copy"})]}),(0,i.jsx)("div",{className:"jps8sit",children:b&&(0,i.jsx)(d(),{value:es,onValueChange:e=>{el(e),(e=>{w.current=!0;try{if("flex"===a){let a=e.match(/flex-direction:\s*([^;]+)/)?.[1]?.trim(),t=e.match(/justify-content:\s*([^;]+)/)?.[1]?.trim(),i=e.match(/align-items:\s*([^;]+)/)?.[1]?.trim(),s=e.match(/flex-wrap:\s*([^;]+)/)?.[1]?.trim(),l=e.match(/gap:\s*(\d+)px/)?.[1]?.trim();a&&P(a),t&&D(t),i&&W(i),s&&L(s),l&&G(parseInt(l))}else if("grid"===a){let a=e.match(/repeat\((\d+),/)?.[1]?.trim(),t=e.match(/gap:\s*(\d+)px/)?.[1]?.trim();a&&_(parseInt(a)),t&&O(parseInt(t))}else if("gradient"===a){let a=e.match(/(\d+)deg/)?.[1]?.trim(),t=e.match(/(#[0-9a-fA-F]{3,6})/g);a&&U(parseInt(a)),t&&t.length>=2&&(X(t[0]),H(t[1]))}else if("svg"===a){let a=e.match(/stroke="([^"]+)"/)?.[1],t=e.match(/strokeWidth="(\d+)"/)?.[1],i=e.match(/duration:\s*(\d+)/)?.[1];a&&ea(a),t&&Z(parseInt(t)),i&&ei(parseInt(i))}}catch(e){console.error("Failed to parse code:",e)}w.current=!1})(e),eo({code:e})},highlight:e=>(0,p.highlight)(e,p.languages.css,"css"),padding:20,className:"jps8siu",style:{fontFamily:'"Fira Code", monospace',fontSize:13}})})]})]}),(0,i.jsxs)("main",{className:"jps8sij jps8si9",ref:C,onMouseMove:e=>{if(!C.current)return;let a=C.current.getBoundingClientRect(),t=(e.clientX-a.left)/a.width,i=(e.clientY-a.top)/a.height;en.send(JSON.stringify({type:"presence",x:t,y:i,name:"Designer",color:v.f.color.primary.default}))},children:[(0,i.jsx)(l.N,{children:Object.values(o).map(e=>(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"jps8siv",style:{left:`${100*e.x}%`,top:`${100*e.y}%`},children:[(0,i.jsx)("svg",{className:"jps8siw",viewBox:"0 0 16 16",fill:e.color,children:(0,i.jsx)("path",{d:"M0 0l16 5.3-9.4 1.3-1.3 9.4z"})}),(0,i.jsx)("div",{className:"jps8six",style:{backgroundColor:e.color},children:e.name})]},e.id))}),(0,i.jsxs)("div",{className:g,children:["flex"===a&&(0,i.jsx)("div",{className:"jps8sil",style:{display:"flex",flexDirection:I,justifyContent:A,alignItems:E,flexWrap:F,gap:`${R}px`},children:[1,2,3].map(e=>(0,i.jsx)(s.P.div,{className:m,layout:!0,children:e},e))}),"grid"===a&&(0,i.jsx)("div",{className:"jps8sin",style:{display:"grid",gridTemplateColumns:`repeat(${T}, 1fr)`,gap:`${B}px`},children:Array.from({length:6}).map((e,a)=>(0,i.jsx)(s.P.div,{className:"jps8sio",layout:!0,children:a+1},a))}),"animation"===a&&(0,i.jsx)(s.P.div,{className:m,animate:"pulse"===V?{scale:[1,1.1,1]}:{rotate:360},transition:{duration:z,repeat:1/0,ease:"easeInOut"},style:{width:"120px",height:"120px"}}),"gradient"===a&&(0,i.jsx)("div",{className:g,style:{width:"100%",height:"400px",borderRadius:v.f.radius.md,background:`linear-gradient(${K}deg, ${q}, ${Y})`,boxShadow:v.f.shadow.xl}}),"svg"===a&&(0,i.jsxs)(s.P.svg,{width:"240",height:"240",viewBox:"0 0 200 200",initial:"hidden",animate:"visible",children:["circle"===N&&(0,i.jsx)(s.P.circle,{cx:"100",cy:"100",r:"80",stroke:ee,strokeWidth:Q,fill:"transparent",variants:{hidden:{pathLength:0,opacity:0},visible:{pathLength:1,opacity:1,transition:{duration:et,repeat:1/0}}}}),"rect"===N&&(0,i.jsx)(s.P.rect,{x:"20",y:"20",width:"160",height:"160",rx:"20",stroke:ee,strokeWidth:Q,fill:"transparent",variants:{hidden:{pathLength:0,opacity:0},visible:{pathLength:1,opacity:1,transition:{duration:et,repeat:1/0}}}}),"recursion"===N&&(0,i.jsx)(s.P.g,{stroke:ee,strokeWidth:Q,fill:"transparent",children:[0,1,2,3].map(e=>(0,i.jsx)(s.P.circle,{cx:"100",cy:"100",r:20+20*e,variants:{hidden:{pathLength:0,opacity:0,rotate:0},visible:{pathLength:1,opacity:1-.2*e,rotate:360,transition:{duration:et+e,repeat:1/0,ease:"linear"}}}},e))})]},`${N}-${ee}-${Q}-${et}`)]})]})]})]})}},53538:(e,a,t)=>{"use strict";t.d(a,{d:()=>n,f:()=>o});var i=t(95155),s=t(12115),l=t(67419);let r=(0,s.createContext)(void 0),n=({children:e})=>{let[a,t]=(0,s.useState)(!0),[n,o]=(0,s.useState)(!1),[d]=(0,l.A)("/sounds/click.mp3",{volume:.4}),[c]=(0,l.A)("/sounds/touch.mp3",{volume:.4}),[p]=(0,l.A)("/sounds/success.mp3",{volume:.4}),[u]=(0,l.A)("/sounds/pop.mp3",{volume:.4}),[m,{stop:h}]=(0,l.A)("/sounds/lofi.mp3",{volume:.2,loop:!0});(0,s.useEffect)(()=>{let e=localStorage.getItem("sound-enabled");null!==e&&t("true"===e),"true"===localStorage.getItem("music-enabled")&&(o(!0),m())},[m]);let g=(0,s.useCallback)(e=>{if(a)switch(e){case"click":d();break;case"touch":c();break;case"success":p();break;case"pop":u()}},[a,d,c,p,u]),v=(0,s.useCallback)(()=>{t(e=>{let a=!e;return localStorage.setItem("sound-enabled",String(a)),a?u():c(),a})},[u,c]),x=(0,s.useCallback)(()=>{o(e=>{let a=!e;return localStorage.setItem("music-enabled",String(a)),a?m():h(),a})},[m,h]);return(0,s.useEffect)(()=>{let e=e=>{if(!a)return;let t=e.target.closest("a, button");if(t){if(t.hasAttribute("data-no-click-sound"))return;g("click")}};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)},[a,g]),(0,i.jsx)(r.Provider,{value:{isSoundEnabled:a,toggleSound:v,isMusicPlaying:n,toggleMusic:x,playSound:g},children:e})},o=()=>{let e=(0,s.useContext)(r);if(void 0===e)throw Error("useSound must be used within a SoundProvider");return e}},75393:(e,a,t)=>{Promise.resolve().then(t.bind(t,17894))},97667:(e,a,t)=>{"use strict";t.d(a,{f:()=>i}),t(99142);var i={color:{primary:{default:"var(--kdlk960)",dark:"var(--kdlk961)",light:"var(--kdlk962)"},secondary:{default:"var(--kdlk963)",dark:"var(--kdlk964)",light:"var(--kdlk965)"},background:{default:"var(--kdlk966)",alt:"var(--kdlk967)"},text:{primary:"var(--kdlk968)",secondary:"var(--kdlk969)"},accent:"var(--kdlk96a)",border:"var(--kdlk96b)",red:"var(--kdlk96c)"},font:{body:"var(--kdlk96d)",heading:"var(--kdlk96e)",mono:"var(--kdlk96f)"},fontSize:{xs:"var(--kdlk96g)",sm:"var(--kdlk96h)",base:"var(--kdlk96i)",lg:"var(--kdlk96j)",xl:"var(--kdlk96k)","2xl":"var(--kdlk96l)","3xl":"var(--kdlk96m)","4xl":"var(--kdlk96n)"},fontWeight:{normal:"var(--kdlk96o)",medium:"var(--kdlk96p)",semibold:"var(--kdlk96q)",bold:"var(--kdlk96r)"},spacing:{xs:"var(--kdlk96s)",sm:"var(--kdlk96t)",md:"var(--kdlk96u)",lg:"var(--kdlk96v)",xl:"var(--kdlk96w)","2xl":"var(--kdlk96x)","3xl":"var(--kdlk96y)"},radius:{sm:"var(--kdlk96z)",md:"var(--kdlk9610)",lg:"var(--kdlk9611)",full:"var(--kdlk9612)"},shadow:{sm:"var(--kdlk9613)",md:"var(--kdlk9614)",lg:"var(--kdlk9615)",xl:"var(--kdlk9616)"},transition:{fast:"var(--kdlk9617)",normal:"var(--kdlk9618)",slow:"var(--kdlk9619)"},maxWidth:{content:"var(--kdlk961a)"}}}},e=>{e.O(0,[1647,7274,824,1114,6518,2656,3122,8441,8732,7358],()=>e(e.s=75393)),_N_E=e.O()}]);