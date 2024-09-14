import{g as w,b as oo,s as y,_ as r,c as eo,d as _,e as R,f as ro,h as no,i as to,k as so,l as g,m,n as ao,o as h,p as io}from"./index-BV6xRstu.js";import{r as u}from"./react-Bz49nljE.js";function lo(e){return oo("MuiLink",e)}const co=w("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]),I=co,uo=["color","textColor","variant"],po=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],vo=e=>{const{level:o,color:t,variant:n,underline:s,focusVisible:a,disabled:i}=e,l={root:["root",t&&`color${h(t)}`,i&&"disabled",a&&"focusVisible",o,s&&`underline${h(s)}`,n&&`variant${h(n)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return io(l,lo,{})},mo=y("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(e,o)=>o.startDecorator})(({ownerState:e})=>{var o;return r({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((o=e.sx)==null?void 0:o.alignItems)==="flex-start")&&{marginTop:"2px"})}),fo=y("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(e,o)=>o.endDecorator})(({ownerState:e})=>{var o;return r({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},typeof e.startDecorator!="string"&&(e.alignItems==="flex-start"||((o=e.sx)==null?void 0:o.alignItems)==="flex-start")&&{marginTop:"2px"})}),xo=y("a",{name:"JoyLink",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var t,n,s,a,i,l,c;return[r({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},o.level&&o.level!=="inherit"&&e.typography[o.level],o.level==="inherit"&&{font:"inherit"},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{"@media (hover: hover)":{textDecorationLine:"underline"}}},o.underline==="always"&&{textDecoration:"underline"},o.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:e.vars.radius.xs,padding:0,cursor:"pointer",textDecorationColor:`var(--variant-outlinedBorder, rgba(${(t=e.vars.palette[o.color])==null?void 0:t.mainChannel} / var(--Link-underlineOpacity, 0.72)))`},o.variant?r({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!o.nesting&&{marginInline:"-0.25em"}):{color:`var(--variant-plainColor, rgba(${(n=e.vars.palette[o.color])==null?void 0:n.mainChannel} / 1))`,[`&.${I.disabled}`]:{pointerEvents:"none",color:`var(--variant-plainDisabledColor, rgba(${(s=e.vars.palette[o.color])==null?void 0:s.mainChannel} / 0.6))`}},{userSelect:o.component==="button"?"none":void 0,MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},o.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${e.focus.selector}`]:{"&::after":e.focus.default}}:{position:"relative",[e.focus.selector]:e.focus.default}),o.variant&&r({},(a=e.variants[o.variant])==null?void 0:a[o.color],{"&:hover":{"@media (hover: hover)":(i=e.variants[`${o.variant}Hover`])==null?void 0:i[o.color]},"&:active":(l=e.variants[`${o.variant}Active`])==null?void 0:l[o.color],[`&.${I.disabled}`]:(c=e.variants[`${o.variant}Disabled`])==null?void 0:c[o.color]})]}),bo=u.forwardRef(function(o,t){const n=eo({props:o,name:"JoyLink"}),{color:s="primary",textColor:a,variant:i}=n,l=_(n,uo),c=u.useContext(R),F=u.useContext(ro),f=no(r({},l,{color:a})),{children:p,disabled:T=!1,onBlur:D,onFocus:$,level:V="body-md",overlay:B=!1,underline:E="hover",endDecorator:k,startDecorator:C,component:j,slots:N={},slotProps:z={}}=f,A=_(f,po),M=c||F?o.level||"inherit":V,{isFocusVisibleRef:L,onBlur:U,onFocus:J,ref:W}=to(),[H,P]=u.useState(!1),O=so(t,W),q=d=>{U(d),L.current===!1&&P(!1),D&&D(d)},G=d=>{J(d),L.current===!0&&P(!0),$&&$(d)},v=r({},f,{color:s,disabled:T,focusVisible:H,underline:E,variant:i,level:M,overlay:B,nesting:c}),x=vo(v),b=r({},A,{component:j,slots:N,slotProps:z}),[K,Q]=g("root",{additionalProps:{onBlur:q,onFocus:G},ref:O,className:x.root,elementType:xo,externalForwardedProps:b,ownerState:v}),[X,Y]=g("startDecorator",{className:x.startDecorator,elementType:mo,externalForwardedProps:b,ownerState:v}),[Z,S]=g("endDecorator",{className:x.endDecorator,elementType:fo,externalForwardedProps:b,ownerState:v});return m.jsx(R.Provider,{value:!0,children:m.jsxs(K,r({},Q,{children:[C&&m.jsx(X,r({},Y,{children:C})),ao(p,["Skeleton"])?u.cloneElement(p,{variant:p.props.variant||"inline"}):p,k&&m.jsx(Z,r({},S,{children:k}))]}))})}),yo=bo;export{yo as L};