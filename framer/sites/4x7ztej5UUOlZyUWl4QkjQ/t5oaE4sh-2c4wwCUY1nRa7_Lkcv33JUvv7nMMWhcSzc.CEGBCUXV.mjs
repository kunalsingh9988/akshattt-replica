import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{A as t,C as n,L as r,_ as i,b as a,c as o,j as s,m as c,s as l,u,w as d,y as f,z as p}from"./react.DUaydndg.mjs";import{C as m,o as h,r as g,t as _}from"./motion.Be6IuVTg.mjs";import{C as v,E as y,H as b,P as x,_t as S,ct as C,dt as ee,n as w,ot as te,r as T,rt as ne,st as re,t as E,u as D,ut as O,w as k,wt as A}from"./framer.CpFnJGAS.mjs";import{i as j,r as M}from"./toplevel-deps.CFEDyqvs.mjs";import{n as ie,t as N}from"./Lenis.BQdwEpAt.mjs";import{a as ae,c as oe,d as se,f as ce,i as le,l as ue,n as de,o as fe,r as pe,s as me,t as he,u as ge}from"./EPImages6.BrAoltDp.mjs";import{n as _e,r as P}from"./A0nbjhEyA.DMRJ4lKy.mjs";function F(e){let{backUrl:t,backLabel:n,siteCursor:r,background:o,topOffset:c,style:u}=e,d=a(null),m=a(!1),[h,g]=i(900),_=A.current()===A.canvas,v=s(()=>{if(p===void 0||typeof Blob>`u`)return``;let e=R.replace(/%%EPIMG:([0-9a-f]+)%%/g,(e,t)=>L[t]||``);return URL.createObjectURL(new Blob([e],{type:`text/html`}))},[]);return f(()=>()=>{v&&URL.revokeObjectURL(v)},[v]),f(()=>{let e=d.current;if(!e||!v)return;m.current=!1;let i=t=>{try{e.contentWindow&&e.contentWindow.postMessage({ep:1,...t},`*`)}catch{}},a=()=>i({t:`hello`,cursor:!!r&&!_,bg:o,back:t||``,label:n||``}),s=NaN,l=NaN,u=0,f=()=>{if(u=requestAnimationFrame(f),!m.current)return;let t=e.getBoundingClientRect(),n=Math.round(-t.top),r=p.innerHeight;(n!==s||r!==l)&&(s=n,l=r,i({t:`view`,top:n,h:r}))};u=requestAnimationFrame(f);let h=(t,n)=>{let r=e.getBoundingClientRect(),i=Math.max(0,p.scrollY+r.top+t-(c||0)),a=p.lenis;a&&typeof a.scrollTo==`function`?a.scrollTo(i,{immediate:!n}):p.scrollTo({top:i,behavior:n?`smooth`:`auto`})},y={pointermove:`mousemove`,pointerdown:`mousedown`,pointerup:`mouseup`},b=t=>{let n=e.getBoundingClientRect(),r=n.left+t.x,i=n.top+t.y,a={bubbles:!0,cancelable:!0,clientX:r,clientY:i,screenX:r,screenY:i,buttons:t.b||0,view:p};try{document.dispatchEvent(new PointerEvent(t.k,{...a,pointerType:`mouse`,isPrimary:!0}))}catch{}try{document.dispatchEvent(new MouseEvent(y[t.k],a))}catch{}},x=t=>{if(t.source!==e.contentWindow)return;let n=t.data;if(n&&n.ep===1){if(n.t===`ready`)m.current=!0,s=NaN;else if(n.t===`height`&&n.h>0)g(Math.ceil(n.h));else if(n.t===`scroll`&&typeof n.y==`number`)h(n.y,n.smooth);else if(n.t===`go`&&typeof n.url==`string`){let e=n.url;try{e=new URL(n.url,p.location.href).href}catch{}/^https?:/i.test(e)&&(p.location.href=e)}else n.t===`ptr`&&y[n.k]&&b(n)}};p.addEventListener(`message`,x),e.addEventListener(`load`,a),a();let S=setInterval(()=>{m.current?clearInterval(S):a()},400);return()=>{p.removeEventListener(`message`,x),e.removeEventListener(`load`,a),clearInterval(S),cancelAnimationFrame(u)}},[v,r,o,t,n,c,_]),/*#__PURE__*/ l(`div`,{style:{...u,width:`100%`,height:h+I,position:`relative`},children:v?/*#__PURE__*/ l(`iframe`,{ref:d,src:v,title:`Enterprise Platform — iBE.net case study`,scrolling:`no`,allow:`fullscreen; clipboard-write`,style:{position:`absolute`,left:0,right:0,top:I,width:`100%`,height:h,border:0,display:`block`,background:`transparent`,colorScheme:`normal`}}):null})}var I,L,R;function z(){return(z=e((()=>{r(),o(),d(),b(),ce(),ge(),oe(),fe(),le(),de(),I=70,L=Object.assign({},se,ue,me,ae,pe,he),F.defaultProps={backUrl:`/`,backLabel:`Back to the canvas`,siteCursor:!0,topOffset:80,background:`framer`},k(F,{backUrl:{type:T.Link,title:`Back link`,defaultValue:`/`},backLabel:{type:T.String,title:`Back label`,defaultValue:`Back to the canvas`},siteCursor:{type:T.Boolean,title:`Site cursor`,defaultValue:!0,enabledTitle:`Use mine`,disabledTitle:`Normal`},topOffset:{type:T.Number,title:`Top offset`,defaultValue:80,min:0,max:300,step:1,unit:`px`,displayStepper:!0},background:{type:T.Enum,title:`Background`,options:[`framer`,`own`],optionTitles:[`Framer page`,`Built-in grid`],defaultValue:`framer`}}),R=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Enterprise Platform — Redesigning iBE.net during a rebrand · Srishti</title>
<meta name="description" content="Redesigning an enterprise platform during its rebrand: a progress indicator, auto-save that says so, and screens grouped the way people think. Web and mobile, 12 months.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Kalam:wght@400;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
/* ============================================================
   TOKENS — inherited verbatim from index.html. No new tokens.
   ============================================================ */
:root{
  --paper:#FFFFFF;
  --ink:#111111;
  --ink-2:#3A3A3A;
  --muted:#8E8E8E;
  --line:rgba(17,17,17,.038);
  --line-major:transparent;
  --line-2:rgba(17,17,17,.14);

  --blue:#0D99FF;
  --sky:#5FC9F3;
  --purple:#6C4CF1;
  --yellow:#2460C0;      /* the accent is the redesign's product blue, sampled from the new screens */
  --yellow-ink:#ffffff;
  --green:#0FA958;
  --coral:#F0553D;
  --accent:#F0553D;

  /* support tint — the product blue of the redesigned web and mobile UI */
  --product:#2460C0;

  --font-display:'Syne','Archivo Black',Impact,sans-serif;
  --font-sans:'Bricolage Grotesque','Inter',system-ui,-apple-system,sans-serif;
  --font-sub:'Bricolage Grotesque','Inter',system-ui,sans-serif;
  --font-hand:'Kalam','Bradley Hand','Segoe Print',cursive;
  --font-note:'Kalam','Bradley Hand','Segoe Print',cursive;
  --font-mono:'JetBrains Mono',ui-monospace,monospace;

  --grid:80px;          /* matches the Framer page background tile */
  --nav-h:64px;
  --pad:clamp(20px,5vw,72px);
  --maxw:1400px;
  --hard:4px 4px 0 var(--ink);
  --hard-sm:3px 3px 0 var(--ink);
}

*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
html:not(.no-smooth){scroll-behavior:smooth}
body{
  margin:0;background:var(--paper);color:var(--ink);
  font-family:var(--font-sans);font-size:16.5px;
  font-variation-settings:'opsz' 14;
  line-height:1.56;letter-spacing:-.003em;
  overflow-x:hidden;-webkit-font-smoothing:antialiased;
}
h1,h2,h3,h4,p,figure{margin:0}
a{color:inherit}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
img,svg{display:block;max-width:100%}
::selection{background:var(--blue);color:#fff}
:focus-visible{outline:2.5px solid var(--blue);outline-offset:3px;border-radius:3px}

.grid-bg{
  position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:
    linear-gradient(to right,var(--line-major) 1px,transparent 1px),
    linear-gradient(to bottom,var(--line-major) 1px,transparent 1px),
    linear-gradient(to right,var(--line) 1px,transparent 1px),
    linear-gradient(to bottom,var(--line) 1px,transparent 1px);
  background-size:calc(var(--grid)*4) calc(var(--grid)*4),calc(var(--grid)*4) calc(var(--grid)*4),var(--grid) var(--grid),var(--grid) var(--grid);
  transition:opacity .3s ease;
}
body.grid-off .grid-bg{opacity:0}

.wrap{width:100%;max-width:var(--maxw);margin:0 auto;padding-inline:var(--pad);position:relative;z-index:2}
@media(min-width:1760px){:root{--maxw:1620px}}
@media(min-width:2200px){:root{--maxw:1840px}}
section{position:relative;z-index:2;scroll-margin-top:calc(var(--nav-h) + 18px)}

.mega,.sec-title,.nav-brand,.mobile-menu a,.proj-h{font-weight:800;font-family:var(--font-display)}
.eyebrow{font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}

/* ---------- section headings: one rule, as specified ---------- */
.sec-title{
  font-family:var(--font-sub);font-weight:800;
  font-size:clamp(1.9rem,4.2vw,3rem);line-height:1.06;letter-spacing:-.04em;
  font-variation-settings:'opsz' 72;max-width:17ch;
}
.lede{font-family:var(--font-sub);font-weight:700;font-size:clamp(1rem,1.35vw,1.18rem);line-height:1.24;letter-spacing:-.025em;max-width:26ch;margin-top:12px}
.body{font-size:clamp(.88rem,1.15vw,.98rem);line-height:1.55;max-width:42ch;color:var(--ink-2)}
.hand{font-family:var(--font-hand);font-size:clamp(1.15rem,2.1vw,1.5rem);line-height:1.5;color:var(--ink-2)}
.hand-inline{font-family:var(--font-hand);font-size:20px;line-height:1.55;color:var(--ink-2);transform:none;display:inline-block}
.lab{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}


/* ============================================================
   INHERITED COMPONENTS — sticker, tag, note, peek, frag, panel,
   frame badge, buttons, toast, reveal
   ============================================================ */
.sticker{border:2px solid var(--ink);border-radius:9px;padding:10px 18px;font-weight:700;font-size:15px;letter-spacing:-.01em;box-shadow:var(--hard);transform:rotate(var(--r,0deg));transition:transform .16s cubic-bezier(.34,1.4,.64,1),box-shadow .16s ease;background:#fff}
.sticker:hover{transform:rotate(var(--r,0deg)) translate(-2px,-3px);box-shadow:6px 7px 0 var(--ink)}
.sticker:active,.sticker.on{transform:rotate(var(--r,0deg)) translate(3px,3px);box-shadow:1px 1px 0 var(--ink)}
.s-yellow{background:var(--yellow);color:var(--yellow-ink);border-color:var(--yellow)} .s-white{background:#fff}
.tag{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;border:1.2px solid currentColor;border-radius:4px;padding:5px 8px;opacity:.8;display:inline-block}
.note{position:relative;width:var(--w,190px);background:#fff;padding:12px 13px 15px;border-radius:2px;transform:rotate(var(--rot,0deg)) translate(var(--dx,0px),var(--dy,0px));box-shadow:0 4px 16px rgba(17,17,17,.11),0 0 0 1px rgba(17,17,17,.05);cursor:grab;touch-action:none;transition:box-shadow .2s ease}
.note:active{cursor:grabbing}
.note.lift{box-shadow:0 16px 40px rgba(17,17,17,.2),0 0 0 1px rgba(17,17,17,.08);z-index:20!important}
.note:hover{box-shadow:0 12px 30px rgba(17,17,17,.16),0 0 0 1px rgba(17,17,17,.07)}
.note .n-label{font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);display:block;margin:0 0 5px}
.note p{font-family:var(--font-note);font-size:16px;line-height:1.5;color:#26262A}
.note.n-blue{background:#DCEBFF} .note.n-cream{background:#FFF8D9}
.peek{position:absolute;left:8px;top:calc(100% + 6px);white-space:nowrap;font-family:var(--font-hand);font-size:16.5px;color:var(--accent);opacity:0;transform:translateY(-4px);transition:all .22s ease;pointer-events:none}
.note:hover .peek,.frag:hover .peek{opacity:1;transform:translateY(0)}
.frag{width:206px;background:#fff;border:1.4px solid var(--line-2);border-radius:8px;box-shadow:0 5px 18px rgba(17,17,17,.08);transform:rotate(1deg);transition:transform .25s cubic-bezier(.34,1.4,.64,1),box-shadow .25s ease;position:relative}
.frag:hover{transform:rotate(0) translateY(-4px);box-shadow:0 16px 34px rgba(17,17,17,.14)}
.frag-bar{display:flex;align-items:center;gap:4px;padding:7px 9px;border-bottom:1.2px solid var(--line-2);font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.frag-bar i{width:6px;height:6px;border-radius:50%;background:var(--line-2)}
.frag-bar span{margin-left:auto}
.frame-badge{display:inline-flex;align-items:center;gap:6px;background:#101014;color:#fff;border-radius:4px;padding:4px 9px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.06em}
.frame-badge .fi{width:9px;height:9px;background:var(--blue);border-radius:1px}
.panel{border:1.7px solid var(--ink);border-radius:16px;background:#fff;box-shadow:var(--hard);overflow:hidden;display:flex;flex-direction:column}
.panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;border-bottom:1.4px solid var(--ink);font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase}
.panel-head b{font-weight:500}
.panel-head span{color:var(--blue)}
.prow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border-bottom:1.1px solid var(--line-2);font-size:13px}
.prow:last-child{border-bottom:0}
.prow .k{font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.prow .v{font-size:13px;text-align:right;color:var(--ink-2)}
.panel-foot{margin-top:auto;display:flex;flex-wrap:wrap;gap:8px;padding:12px 14px;border-top:1.4px solid var(--ink)}
.mini{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;border:1.5px solid var(--ink);border-radius:7px;padding:9px 10px;background:#fff;white-space:nowrap;transition:background .16s ease,color .16s ease,transform .16s ease}
.mini:hover{background:var(--ink);color:#fff;transform:translateY(-2px)}
.mini:active{transform:translateY(0)}
.mini.on{background:var(--ink);color:#fff}
.panel-foot .mini{flex:1 1 88px;min-width:0;text-align:center;padding:9px 6px;letter-spacing:.06em;white-space:normal}
.btn{display:inline-flex;align-items:center;gap:10px;border:2px solid var(--ink);border-radius:8px;padding:13px 20px;font-weight:700;font-size:15px;box-shadow:var(--hard);text-decoration:none;background:#fff;transition:transform .16s cubic-bezier(.34,1.4,.64,1),box-shadow .16s ease}
.btn:hover{transform:translate(-2px,-3px);box-shadow:6px 7px 0 var(--ink)}
.btn:active{transform:translate(3px,3px);box-shadow:1px 1px 0 var(--ink)}
.dim{display:inline-flex;align-items:center;gap:5px;background:var(--blue);color:#fff;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.1em;padding:3px 7px;border-radius:4px}

.toast{position:fixed;left:50%;bottom:26px;transform:translate(-50%,20px);z-index:150;background:var(--ink);color:#fff;border-radius:999px;padding:11px 20px;font-size:13px;font-weight:600;opacity:0;pointer-events:none;transition:all .3s cubic-bezier(.34,1.4,.64,1);max-width:min(420px,88vw);text-align:center}
.toast.show{opacity:1;transform:translate(-50%,0)}
.reveal{opacity:0;transform:translateY(22px);transition:opacity .7s cubic-bezier(.2,.7,.3,1),transform .7s cubic-bezier(.2,.7,.3,1)}
.reveal.seen{opacity:1;transform:none}
.draw{stroke-dasharray:var(--len,400);stroke-dashoffset:var(--len,400);transition:stroke-dashoffset 1.1s cubic-bezier(.5,0,.2,1)}
.seen .draw{stroke-dashoffset:0}


/* ---------- the lightbox (inherited) ---------- */
/* ---------- the lightbox ---------- */
[data-zoom]{cursor:zoom-in}
.lb{position:fixed;inset:0;z-index:200;background:rgba(12,12,12,.9);display:none;place-items:center;padding:clamp(16px,4vw,52px)}
.lb.on{display:grid}
.lb img{max-width:100%;max-height:86vh;width:auto;border-radius:10px;background:#fff;box-shadow:0 30px 90px rgba(0,0,0,.55)}
.lb figcaption{color:#fff;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;
  text-align:center;margin-top:16px;opacity:.75}
.lb-close{position:absolute;top:16px;right:18px;width:40px;height:40px;border-radius:50%;background:#fff;
  display:grid;place-items:center;font-size:19px;line-height:1;box-shadow:var(--hard-sm)}
.lb-hint{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.55);
  font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase}


/* ============================================================
   PAGE-SPECIFIC — the file surface for this page is the PRODUCT
   ITSELF: a timesheet that finally says where you are and whether
   your work is safe. Composition only. No new tokens beyond the
   accent slot above.
   ============================================================ */

.stage,.ow,.app,.jmap,.fcan,.cmp,.phone,.grp-stage,.race,.waffle,.tix,.cb-stage,.anat,.pop-frame,
.ic-grid,.rail,.note,.seg,.film,.chips,.fx-card{user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
.app input,.app textarea,.app select{user-select:text;-webkit-user-select:text}

.sec{padding:clamp(40px,6vw,86px) 0}
.sec-head{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);gap:clamp(20px,4vw,64px);align-items:end}
.sec-head .sec-title{max-width:17ch;margin-top:12px}
.sec-head .lede{max-width:34ch}
.sec-head .body{max-width:50ch}
.sec-title{max-width:24ch}
.lede{max-width:42ch}

/* the standard working stage */
.stage{position:relative;border:1.7px solid var(--ink);border-radius:16px;background:#fff;box-shadow:var(--hard);overflow:hidden}
.stage-bar{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:10px 14px;border-bottom:1.4px solid var(--ink);background:#fff;position:relative;z-index:3}
.stage-bar .lab b{font-weight:500;color:var(--ink)}
.stage-cap{padding:12px 16px;border-top:1.2px solid var(--line-2);font-family:var(--font-hand);font-size:19px;line-height:1.45;color:var(--ink-2);min-height:56px;background:#fff;position:relative;z-index:3}

/* segmented toggle — same construction as the circle toggle */
.seg{display:inline-flex;border:1.5px solid var(--ink);border-radius:999px;overflow:hidden;background:#fff;flex:0 0 auto}
.seg button{font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;padding:7px 12px;transition:background .16s ease,color .16s ease;white-space:nowrap}
.seg button.on{background:var(--ink);color:#fff}
.seg button:not(.on):hover{background:#F1F1EE}
.seg.blue button.on{background:var(--yellow)}

.chips{display:flex;flex-wrap:wrap;gap:8px}
.chipx{font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;border:1.4px solid var(--line-2);border-radius:99px;padding:8px 12px;background:#fff;color:var(--ink-2);transition:all .2s cubic-bezier(.34,1.4,.64,1);white-space:nowrap}
.chipx:hover{border-color:var(--ink);transform:translateY(-2px)}
.chipx.on{background:var(--yellow);border-color:var(--yellow);color:#fff}
.chipx s{text-decoration:none;opacity:.55;margin-left:6px}

.frame-badge .fi.pb{background:var(--yellow)}
.frame-badge .fi.co{background:var(--coral)}

/* ============================================================
   ASSET SLOTS — every image on the page renders through one of
   these. Empty = an honest placeholder that names what goes there.
   ============================================================ */
.slot{position:relative;display:grid;place-items:center;overflow:hidden;background:#F3F3EF;border:1.4px dashed rgba(17,17,17,.22);border-radius:8px;aspect-ratio:var(--ar,16/10);width:100%;transition:border-color .2s ease,background .2s ease}
.slot::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(45deg,rgba(17,17,17,.035) 0 8px,transparent 8px 16px)}
.slot.t-new{background:#EEF3FC;border-color:rgba(36,96,192,.35)}
.slot.t-new::before{background:repeating-linear-gradient(45deg,rgba(36,96,192,.06) 0 8px,transparent 8px 16px)}
.slot.t-dark{background:#2A2A2E;border-color:rgba(255,255,255,.18)}
.slot.t-dark::before{background:repeating-linear-gradient(45deg,rgba(255,255,255,.04) 0 8px,transparent 8px 16px)}
.slot.t-dark .sl-in,.slot.t-dark .sl-in b{color:rgba(255,255,255,.7)}
.sl-in{position:relative;z-index:1;text-align:center;padding:10px;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);line-height:1.6;pointer-events:none}
.sl-in b{display:block;font-family:var(--font-sub);font-weight:800;font-size:clamp(12px,1.2vw,14px);letter-spacing:-.02em;text-transform:none;color:var(--ink-2);margin-bottom:3px}
.sl-in i{font-style:normal;display:block}
.slot.sm .sl-in{font-size:7px;padding:4px;letter-spacing:.08em}
.slot.sm .sl-in b{font-size:10px}
.slot.sm .sl-in i{display:none}
.slot.drop{border-color:var(--yellow);border-style:solid;background:#E4EDFC}
.slot.filled{border:0;background:#fff}
.slot.filled::before{display:none}
.slot img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;display:block}
.slot.fit img{object-fit:contain;object-position:center}

/* ============================================================
   THE PROGRESS RAIL — the page runs on the pattern it's about:
   completed sections, the current one, and what remains
   ============================================================ */
.rail{position:fixed;right:10px;top:50%;transform:translateY(-50%);z-index:94;display:flex;flex-direction:column;gap:2px;padding:8px 4px;background:rgba(255,255,255,.94);border:1.4px solid var(--ink);border-radius:99px;box-shadow:var(--hard-sm)}
.rt{position:relative;width:16px;height:15px;display:grid;place-items:center;padding:0}
.rt i{width:4px;height:9px;border-radius:2px;background:var(--line-2);transition:background .25s ease,height .25s ease,width .25s ease}
.rt.done i{background:var(--ink)}
.rt.now i{background:var(--yellow);height:14px;width:6px}
.rt-lab{position:absolute;right:calc(100% + 12px);top:50%;transform:translateY(-50%) translateX(6px);white-space:nowrap;background:var(--ink);color:#fff;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;padding:5px 8px;border-radius:5px;opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease}
.rt-lab em{font-style:normal;opacity:.6;margin-right:6px}
.rt.chap{margin-top:7px;padding-top:7px;border-top:1px solid var(--line-2)}
.rt.chap i{width:9px;height:3px;border-radius:2px}
.rt.chap.done i{background:var(--product)}
.rt.chap .rt-lab{background:var(--product)}
.rt.now .rt-lab{background:var(--yellow)}
.rt:hover .rt-lab,.rt:focus-visible .rt-lab,.rail.flash .rt.now .rt-lab{opacity:1;transform:translateY(-50%)}

/* ============ 01 ENTER ============ */
.enter{padding:clamp(38px,6vw,72px) 0 clamp(30px,4vw,54px)}
.enter-grid{display:grid;grid-template-columns:minmax(0,1.22fr) minmax(0,.78fr);gap:clamp(20px,4vw,54px);align-items:end}
.crumb{display:inline-flex;align-items:center;gap:9px;font-family:var(--font-mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);text-decoration:none;margin-bottom:22px}
.crumb:hover{color:var(--ink)}
.crumb svg{transition:transform .2s cubic-bezier(.34,1.5,.64,1)}
.crumb:hover svg{transform:translateX(-3px)}
.ptitle{font-family:var(--font-sub);font-weight:800;font-variation-settings:'opsz' 96,'wdth' 92;font-size:clamp(2.9rem,9vw,7.2rem);line-height:.9;letter-spacing:-.055em;text-transform:uppercase}
.ptitle .l2{display:block;color:var(--product)}
.psub{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;margin-top:16px}
.psub .city{font-family:var(--font-mono);font-size:clamp(11px,1.3vw,14px);letter-spacing:.24em;text-transform:uppercase}
.spec-bar{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1.6px solid var(--ink);background:var(--paper);margin-top:26px;max-width:min(100%,780px)}
.spec-bar>div{min-width:0;padding:13px 17px 15px;border-left:1.2px solid var(--line-2)}
.spec-bar>div:first-child{border-left:0}
.spec-k{display:block;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.spec-v{display:block;font-family:var(--font-sub);font-weight:700;font-size:clamp(.8rem,1.02vw,.94rem);line-height:1.22;letter-spacing:-.02em;color:var(--ink)}
.spec-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px;max-width:min(100%,780px)}
.spec-tags span{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);border:1.2px solid var(--line-2);border-radius:5px;padding:7px 11px;transition:color .18s ease,border-color .18s ease,transform .18s ease}
.spec-tags span:hover{color:var(--ink);border-color:var(--ink);transform:translateY(-2px)}
.spec-credit{font-family:var(--font-mono);font-size:9.5px;letter-spacing:.14em;line-height:1.9;text-transform:uppercase;color:var(--muted);margin-top:14px;max-width:min(100%,780px)}
.spec-credit b{font-weight:500;color:var(--ink-2)}
.enter-r{position:relative;display:flex;flex-direction:column;align-items:flex-end;gap:14px}
.enter-note{position:absolute;left:-54px;bottom:-84px;width:196px;z-index:4}
.scrollcue{display:flex;align-items:center;gap:12px;margin-top:clamp(30px,5vw,54px);font-family:var(--font-mono);font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.scrollcue svg{animation:nudgedown 2.4s ease-in-out infinite}
@keyframes nudgedown{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}

/* the hero card: one timesheet row, one status line */
.mini-ts{width:min(370px,100%);transform:rotate(-1deg)}
.mini-ts .app-body{padding:16px}
.mini-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0;border-top:1px solid #E8ECF3}
.mini-row:first-child{border-top:0;padding-top:4px}
.mini-row .lbl{font-size:12.5px;color:#4A5568}
.mini-row .lbl b{display:block;font-size:13.5px;color:#1A202C;font-weight:600}
.stepper{display:inline-flex;align-items:center;border:1.2px solid #CBD5E1;border-radius:8px;overflow:hidden;background:#fff}
.stepper button{width:30px;height:32px;display:grid;place-items:center;font-size:16px;color:#334155;transition:background .15s ease}
.stepper button:hover{background:#EEF3FC}
.stepper output{min-width:44px;text-align:center;font-size:14px;font-weight:600;color:#1A202C;font-variant-numeric:tabular-nums}
.mini-read{font-family:var(--font-mono);font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);text-align:right}
.mini-read b{font-weight:500;color:var(--ink)}

/* ============================================================
   THE PRODUCT UI — used by the hero card and the working demo.
   A neutral system face, so it reads as software, not as the page.
   ============================================================ */
.app{font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background:#fff;border:1.7px solid var(--ink);border-radius:14px;overflow:hidden;box-shadow:var(--hard);position:relative;color:#1A202C;letter-spacing:0}
.app-top{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1px solid #E2E8F0;background:#fff}
.app-mark{width:22px;height:22px;border-radius:6px;background:var(--product);display:grid;place-items:center;color:#fff;font-size:11px;font-weight:700;flex:0 0 22px}
.app-title{font-weight:650;font-size:14px;letter-spacing:-.01em}
.app-title small{display:block;font-size:11px;font-weight:400;color:#64748B;margin-top:1px}
.save{margin-left:auto;display:inline-flex;align-items:center;gap:7px;font-size:12px;color:#475569;white-space:nowrap;min-height:22px}
.save .sdot{width:8px;height:8px;border-radius:50%;background:#16A34A;flex:0 0 8px;transition:background .2s ease}
.save.saving .sdot{background:#F59E0B;animation:pulse .8s ease-in-out infinite}
.save.idle .sdot{background:#CBD5E1}
.save b{font-weight:600;color:#1E293B;font-variant-numeric:tabular-nums}
.save em{font-style:normal;color:#94A3B8;font-variant-numeric:tabular-nums}
@keyframes pulse{50%{opacity:.35}}
.app-toast{position:absolute;right:14px;bottom:62px;z-index:8;background:#1E293B;color:#fff;font-size:12px;padding:7px 12px;border-radius:7px;opacity:0;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease;pointer-events:none}
.app-toast.show{opacity:1;transform:none}

/* the progress indicator — completed, current, remaining */
.pi{display:flex;align-items:flex-start;padding:16px 18px 14px;border-bottom:1px solid #E2E8F0;background:#FAFBFD;gap:0}
.pi-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:7px;position:relative;text-align:center;cursor:pointer;background:none;padding:0 2px}
.pi-step:not(:last-child)::after{content:"";position:absolute;top:12px;left:calc(50% + 16px);right:calc(-50% + 16px);height:2px;background:#E2E8F0;border-radius:2px}
.pi-step.done:not(:last-child)::after{background:var(--product)}
.pi-dot{width:26px;height:26px;border-radius:50%;border:2px solid #CBD5E1;background:#fff;display:grid;place-items:center;font-size:11.5px;font-weight:650;color:#94A3B8;transition:all .25s cubic-bezier(.34,1.4,.64,1);position:relative;z-index:1}
.pi-step.done .pi-dot{background:var(--product);border-color:var(--product);color:#fff}
.pi-step.now .pi-dot{border-color:var(--product);color:var(--product);box-shadow:0 0 0 4px rgba(36,96,192,.16)}
.pi-lab{font-size:11.5px;line-height:1.2;color:#94A3B8;font-weight:500}
.pi-step.done .pi-lab{color:#334155}
.pi-step.now .pi-lab{color:#0F172A;font-weight:650}
.pi-state{font-size:10px;color:#94A3B8;line-height:1}
.pi-step.now .pi-state{color:var(--product)}
.app-body{padding:18px}
.app-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;border-top:1px solid #E2E8F0;background:#fff}
.abtn{font-size:13px;font-weight:600;border-radius:8px;padding:9px 15px;border:1.2px solid #CBD5E1;background:#fff;color:#1E293B;transition:background .15s ease,border-color .15s ease,transform .15s ease}
.abtn:hover{background:#F8FAFC;border-color:#94A3B8}
.abtn.pri{background:var(--product);border-color:var(--product);color:#fff}
.abtn.pri:hover{background:#1D52A8}
.abtn:disabled{opacity:.4;cursor:not-allowed}
.fld{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}
.fld:last-child{margin-bottom:0}
.fld label{font-size:12px;font-weight:600;color:#334155}
.fld input,.fld select,.fld textarea{font:inherit;font-size:13.5px;border:1.2px solid #CBD5E1;border-radius:8px;padding:9px 11px;background:#fff;color:#0F172A;width:100%}
.fld textarea{min-height:92px;resize:vertical;line-height:1.45}
.fld input:focus,.fld select:focus,.fld textarea:focus{outline:2px solid rgba(36,96,192,.45);outline-offset:1px;border-color:var(--product)}
.fld .hint{font-size:11.5px;color:#64748B}
.carry{display:inline-flex;align-items:center;gap:7px;font-size:12px;color:#1E3A6E;background:#EEF3FC;border:1px solid #CFDDF6;border-radius:99px;padding:5px 10px;margin-bottom:14px}
.carry svg{width:12px;height:12px}
.sec-h{font-size:15px;font-weight:650;letter-spacing:-.01em;margin:0 0 3px}
.sec-sub{font-size:12.5px;color:#64748B;margin:0 0 14px}
.week{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.day{border:1.2px solid #E2E8F0;border-radius:9px;padding:8px 6px 9px;text-align:center}
.day span{display:block;font-size:11px;color:#64748B;margin-bottom:6px}
.day input{width:100%;text-align:center;border:0;background:#F1F5F9;border-radius:6px;padding:7px 2px;font:inherit;font-size:14px;font-weight:600;color:#0F172A}
.day input:focus{outline:2px solid rgba(36,96,192,.45)}
.total{display:flex;justify-content:space-between;align-items:baseline;margin-top:12px;font-size:12.5px;color:#475569}
.total b{font-size:16px;color:#0F172A;font-variant-numeric:tabular-nums}
.summary{border:1.2px solid #E2E8F0;border-radius:10px;overflow:hidden;margin-bottom:14px}
.summary div{display:flex;justify-content:space-between;gap:12px;padding:8px 12px;font-size:12.5px;border-bottom:1px solid #EEF2F7}
.summary div:last-child{border-bottom:0}
.summary span{color:#64748B}
.summary b{font-weight:600;text-align:right;max-width:60%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sent{display:grid;place-items:center;text-align:center;gap:8px;padding:26px 10px}
.sent .ok{width:48px;height:48px;border-radius:50%;background:#DCFCE7;color:#15803D;display:grid;place-items:center}
.sent h4{font-size:17px;font-weight:650}
.sent p{font-size:13px;color:#64748B;max-width:36ch}
.restored{display:none;align-items:center;gap:9px;font-size:12.5px;color:#14532D;background:#F0FDF4;border-bottom:1px solid #BBF7D0;padding:8px 16px}
.restored.on{display:flex}
.closed{position:absolute;inset:0;z-index:9;background:#F1F5F9;display:none;place-items:center;text-align:center;font-size:13px;color:#64748B}
.closed.on{display:grid}
.closed b{display:block;font-size:15px;color:#1E293B;margin-bottom:4px}

/* ============ 02 THE OLD WAY ============ */
.prob-split{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:clamp(20px,4vw,58px);align-items:start;margin-top:clamp(20px,3vw,36px)}
.prob-l{position:sticky;top:34px}
.counters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1.6px solid var(--ink);margin-top:24px;background:#fff}
.counters>div{padding:12px 13px 14px;border-left:1.2px solid var(--line-2);min-width:0}
.counters>div:first-child{border-left:0}
.counters b{display:block;font-family:var(--font-sub);font-weight:800;font-size:clamp(1.8rem,3.6vw,2.6rem);line-height:1;letter-spacing:-.05em;font-variation-settings:'opsz' 72;transition:color .3s ease}
.counters b.hot{color:var(--coral)}
.counters span{display:block;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-top:8px;line-height:1.45}
.ow-wrap{position:relative;padding:34px 0 20px}
.ow{position:relative;width:min(470px,100%);margin:0 auto;background:#F4F4F1;border:1.7px solid var(--ink);border-radius:10px;box-shadow:var(--hard);overflow:hidden;font-family:Tahoma,Verdana,'Segoe UI',sans-serif;color:#444}
.ow-bar{display:flex;align-items:center;gap:10px;padding:8px 11px;background:#E3E3DF;border-bottom:1px solid #C9C9C3;font-size:12px}
.ow-dots{display:flex;gap:4px}
.ow-dots i{width:8px;height:8px;border-radius:50%;background:#C4C4BD}
.ow-bar b{font-weight:700;color:#555}
.ow-sess{margin-left:auto;font-size:11px;color:#777;font-variant-numeric:tabular-nums}
.ow-sess b{color:#444}
.ow-sess.low b{color:#C0392B}
.ow-crumb{padding:8px 14px;font-size:11px;color:#888;border-bottom:1px solid #DEDED9;background:#F9F9F7}
.ow-crumb b{color:#555}
.ow-body{padding:18px 16px 16px;min-height:212px}
.ow-h{font-size:14px;font-weight:700;color:#555;margin:0 0 3px}
.ow-sub{font-size:11px;color:#999;margin:0 0 14px}
.ow-f{display:flex;flex-direction:column;gap:5px;margin-bottom:12px}
.ow-f label{font-size:11px;color:#666}
.ow-f label em{font-style:normal;color:#C0392B;margin-left:6px;font-size:10px}
.ow-in{height:32px;border:1px solid #BDBDB6;background:#fff;border-radius:2px;display:flex;align-items:center;padding:0 9px;font-size:12.5px;color:#333;cursor:text;text-align:left;width:100%;transition:border-color .15s ease,background .15s ease}
.ow-in:hover{border-color:#8E8E86}
.ow-in.empty{color:#AAA}
.ow-in.typing::after{content:"";width:1px;height:14px;background:#333;margin-left:2px;animation:blink .7s steps(1) infinite}
.ow-in.dup{background:#FFF6F4;border-color:#E8A597}
@keyframes blink{50%{opacity:0}}
.ow-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 14px;border-top:1px solid #DEDED9;background:#EFEFEC}
.ow-btn{font-family:inherit;font-size:12px;border:1px solid #A9A9A2;background:linear-gradient(#FAFAF8,#E4E4E0);border-radius:3px;padding:6px 14px;color:#444}
.ow-btn:hover{background:linear-gradient(#fff,#EAEAE6)}
.ow-btn:disabled{opacity:.45;cursor:not-allowed}
.ow-save{font-size:10.5px;color:#999}
.ow-over{position:absolute;inset:0;z-index:5;background:rgba(244,244,241,.97);display:none;place-items:center;text-align:center;padding:22px}
.ow-over.on{display:grid}
.ow-over h4{font-size:15px;font-weight:700;color:#444;margin-bottom:6px}
.ow-over p{font-size:12px;color:#777;max-width:32ch;margin:0 auto 14px;line-height:1.5}
.ow-over .row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.ow-stats{display:flex;gap:16px;justify-content:center;margin:0 0 14px}
.ow-stats div{font-size:11px;color:#888}
.ow-stats b{display:block;font-size:22px;color:#333;font-family:var(--font-sub);font-weight:800;letter-spacing:-.04em}
.ow-start{position:absolute;inset:0;z-index:6;display:grid;place-items:center;background:rgba(244,244,241,.9);text-align:center;padding:20px}
.ow-start.gone{display:none}
.ow-start p{font-family:var(--font-hand);font-size:19px;color:var(--ink-2);margin-bottom:12px;max-width:26ch}
.ow-notes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:26px;align-items:start}
.ow-notes .note{--w:100%;opacity:.42;filter:grayscale(1);transition:opacity .4s ease,filter .4s ease,box-shadow .2s ease}
.ow-notes .note.on{opacity:1;filter:none}
.ow-notes .note .lock{font-family:var(--font-mono);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);display:block;margin-top:8px}
.ow-notes .note.on .lock{display:none}
.recon{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;margin-top:12px}

/* ============ 03 THE JOURNEY ============ */
.jgrid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,.65fr);gap:clamp(20px,3.4vw,44px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.jmap{position:relative;height:min(40vh,360px);min-height:290px;background:#FAFAF7;overflow:hidden}
.jmap::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,rgba(17,17,17,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(17,17,17,.045) 1px,transparent 1px);background-size:32px 32px}
.jm-line{position:absolute;left:8%;right:8%;top:50%;height:0;border-top:2.4px solid var(--product);transform:scaleX(0);transform-origin:left;transition:transform .7s cubic-bezier(.5,0,.2,1);z-index:1}
.jmap.flow .jm-line{transform:scaleX(1)}
.jm-card{position:absolute;width:clamp(120px,19%,168px);background:#fff;border:1.6px solid var(--ink);border-radius:10px;box-shadow:var(--hard-sm);overflow:hidden;z-index:2;
  left:var(--bx);top:var(--by);transform:translate(-50%,-50%) rotate(var(--br));transition:left .7s cubic-bezier(.34,1.2,.64,1),top .7s cubic-bezier(.34,1.2,.64,1),transform .7s cubic-bezier(.34,1.2,.64,1)}
.jmap.flow .jm-card{left:var(--fx);top:50%;transform:translate(-50%,-50%) rotate(0)}
.jm-nav{height:14px;display:flex;gap:3px;align-items:center;padding:0 6px;background:#EDEDE9;border-bottom:1.2px solid var(--line-2);transition:all .5s ease}
.jm-nav i{height:4px;width:14px;border-radius:2px;background:#C9C9C3}
.jm-body{position:relative;display:flex;gap:6px;padding:9px 9px 10px;min-height:74px}
.jm-rail{width:0;background:#EDEDE9;border-radius:3px;transition:width .5s ease}
.jm-main{flex:1;display:flex;flex-direction:column;gap:5px}
.jm-main h5{font-family:var(--font-sub);font-weight:800;font-size:13.5px;letter-spacing:-.03em;line-height:1.1}
.jm-main i{display:block;height:4px;border-radius:2px;background:#E4E4DF}
.jm-main i:nth-of-type(2){width:70%}
.jm-foot{height:0;background:#EDEDE9;transition:height .5s ease}
/* the four inconsistent navigations, as built */
.jmap.built .jm-card[data-nav="rail"] .jm-nav{height:0;border-bottom:0;overflow:hidden}
.jmap.built .jm-card[data-nav="rail"] .jm-rail{width:14px}
.jmap.built .jm-card[data-nav="bottom"] .jm-nav{height:0;border-bottom:0;overflow:hidden}
.jmap.built .jm-card[data-nav="bottom"] .jm-foot{height:12px}
.jmap.built .jm-card[data-nav="crumb"] .jm-nav{background:#fff}
.jmap.built .jm-card[data-nav="crumb"] .jm-nav i{width:8px;background:#DADAD4}
.jmap.flow .jm-nav{background:var(--product)}
.jmap.flow .jm-nav i{background:rgba(255,255,255,.6)}
.jm-dup{position:absolute;right:-1px;top:-1px;background:var(--coral);color:#fff;font-family:var(--font-mono);font-size:7.5px;letter-spacing:.1em;text-transform:uppercase;padding:3px 6px;border-radius:0 9px 0 6px;transition:opacity .3s ease,transform .3s ease}
.jmap.flow .jm-dup{opacity:0;transform:translateY(-6px)}
.jm-token{position:absolute;top:calc(50% - 86px);left:8%;z-index:3;background:var(--product);color:#fff;font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;text-transform:uppercase;padding:5px 8px;border-radius:99px;opacity:0;transform:translateX(-50%);transition:opacity .3s ease;white-space:nowrap;box-shadow:2px 2px 0 var(--ink)}
.jmap.flow .jm-token{opacity:1;animation:travel 5.5s cubic-bezier(.45,0,.55,1) .6s infinite}
@keyframes travel{0%{left:8%}45%,55%{left:92%}100%{left:8%}}
.jm-lab{position:absolute;left:14px;bottom:12px;z-index:4;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted)}
.task{margin-top:16px;padding:14px 16px 16px;border-top:1.4px solid var(--ink);background:#fff}
.task-k{display:flex;justify-content:space-between;gap:10px;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-bottom:11px}
.task-row{position:relative;height:40px}
.task-seg{position:absolute;top:0;height:40px;display:grid;place-items:center;font-size:12px;font-weight:600;letter-spacing:-.01em;color:var(--ink);border:1.5px solid var(--ink);background:#fff;
  left:var(--cx);width:var(--cw);transform:translateY(var(--cy)) rotate(var(--cr));transition:left .6s cubic-bezier(.34,1.2,.64,1),width .6s cubic-bezier(.34,1.2,.64,1),transform .6s cubic-bezier(.34,1.2,.64,1),border-radius .6s ease,background .4s ease,color .4s ease;border-radius:7px;white-space:nowrap;overflow:hidden}
.jmap-wrap.flow .task-seg{left:var(--fx);width:var(--fw);transform:none;border-radius:0;background:var(--product);color:#fff;border-color:var(--ink)}
.jmap-wrap.flow .task-seg:first-child{border-radius:7px 0 0 7px}
.jmap-wrap.flow .task-seg:last-child{border-radius:0 7px 7px 0}
.jside{display:flex;flex-direction:column;gap:16px}
.jside .readbox{border-left:2.4px solid var(--ink);padding-left:14px;min-height:118px}
.jside .readbox h5{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:7px}
.jside .readbox p{font-size:13.5px;line-height:1.55;color:var(--ink-2);max-width:40ch}

/* ============ 04 CONSTRAINTS ============ */
.cons-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(22px,3vw,38px)}
.con{position:relative;border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);min-height:250px;perspective:1200px;text-align:left;padding:0;display:block;width:100%;transition:transform .2s cubic-bezier(.34,1.4,.64,1),box-shadow .2s ease}
.con:hover{transform:translate(-2px,-3px);box-shadow:6px 7px 0 var(--ink)}
.con-in{display:grid;min-height:250px;height:100%}
.con-f,.con-b{grid-area:1/1;min-width:0;padding:18px 18px 16px;display:flex;flex-direction:column;transition:opacity .35s ease,transform .45s cubic-bezier(.34,1.3,.64,1);backface-visibility:hidden}
.con h4,.con p,.con .t,.con ul{display:block}
.con-b{opacity:0;transform:rotateY(-12deg) translateX(12px);background:#F4F7FF;border-radius:13px}
.con.on .con-f{opacity:0;transform:rotateY(12deg) translateX(-12px)}
.con.on .con-b{opacity:1;transform:none}
.con .t{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:12px}
.con h4{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.15rem,1.9vw,1.4rem);letter-spacing:-.035em;line-height:1.08;max-width:14ch}
.con p{font-size:13px;line-height:1.55;color:var(--ink-2);margin-top:10px}
.con .flip{margin-top:auto;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);display:flex;align-items:center;gap:8px}
.con .flip i{width:18px;height:18px;border:1.4px solid currentColor;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:11px}
.con-b .t{color:var(--product)}
.con-b ul{margin:10px 0 0;padding:0;list-style:none}
.con-b li{font-size:12.5px;line-height:1.5;color:var(--ink-2);padding:6px 0 6px 18px;border-bottom:1px dashed var(--line-2);position:relative}
.con-b li:last-child{border-bottom:0}
.con-b li::before{content:"";position:absolute;left:2px;top:12px;width:8px;height:2px;background:var(--product)}
.cons-foot{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-top:24px}

/* ============ 05 THREE FIXES ============ */
.fx-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(22px,3vw,38px)}
.fx-card{border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);overflow:hidden;display:flex;flex-direction:column}
.fx-top{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:11px 14px;border-bottom:1.4px solid var(--ink)}
.fx-state{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;border-radius:4px;padding:4px 8px;background:var(--coral);color:#fff;transition:background .3s ease}
.fx-card.on .fx-state{background:var(--yellow)}
.fx-n{font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;color:var(--muted)}
.fx-vis{position:relative;height:150px;background:#FAFAF7;border-bottom:1.2px solid var(--line-2);display:grid;place-items:center;overflow:hidden}
.fx-txt{padding:14px 15px 12px;flex:1}
.fx-txt h4{font-family:var(--font-sub);font-weight:800;font-size:17px;letter-spacing:-.03em;line-height:1.12}
.fx-txt p{font-size:12.5px;line-height:1.55;color:var(--ink-2);margin-top:8px}
.fx-txt .fix{display:none}
.fx-card.on .fx-txt .prob{display:none}
.fx-card.on .fx-txt .fix{display:block}
.fx-card .mini{margin:0 14px 14px;align-self:flex-start}
/* vis 1: progress, lost then found */
.v-pi{display:flex;align-items:center;gap:0;width:78%}
.v-pi i{width:18px;height:18px;border-radius:50%;border:2px solid #CFCFC8;background:#fff;flex:0 0 18px;transition:all .35s ease}
.v-pi s{flex:1;height:2px;background:#DDDDD6;text-decoration:none;transition:background .35s ease}
.v-q{position:absolute;font-family:var(--font-hand);font-size:34px;color:var(--coral);transition:opacity .3s ease}
.fx-card.on .v-q{opacity:0}
.fx-card:not(.on) .v-pi{opacity:.35;filter:blur(1.2px)}
.fx-card.on .v-pi i.d{background:var(--product);border-color:var(--product)}
.fx-card.on .v-pi i.c{border-color:var(--product);box-shadow:0 0 0 4px rgba(36,96,192,.16)}
.fx-card.on .v-pi s.d{background:var(--product)}
/* vis 2: the safety net */
.v-save{font-family:system-ui,-apple-system,'Segoe UI',sans-serif;background:#fff;border:1.2px solid #D5DBE5;border-radius:10px;padding:12px 14px;width:76%;font-size:12px;color:#475569;box-shadow:0 4px 14px rgba(17,17,17,.06)}
.v-save .ln{height:6px;border-radius:3px;background:#E8ECF2;margin-bottom:7px}
.v-save .ln.s{width:62%}
.v-save .st{display:flex;align-items:center;gap:6px;margin-top:10px;font-size:11.5px;min-height:16px}
.v-save .st i{width:7px;height:7px;border-radius:50%;background:#16A34A}
.fx-card:not(.on) .v-save .st{color:var(--coral)}
.fx-card:not(.on) .v-save .st i{background:var(--coral)}
.fx-card:not(.on) .v-save .ln{animation:vanish 2.6s ease-in-out infinite}
@keyframes vanish{0%,40%{opacity:1}55%,85%{opacity:0}100%{opacity:1}}
/* vis 3: screens by the data model, then by the task */
.v-ia{position:relative;width:82%;height:104px}
.v-ia b{position:absolute;height:40px;width:22%;border:1.5px solid var(--ink);border-radius:6px;background:#fff;display:grid;place-items:center;font-family:var(--font-mono);font-size:7.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:500;color:var(--muted);transition:all .55s cubic-bezier(.34,1.2,.64,1)}
.v-ia b:nth-child(1){left:0;top:0;transform:rotate(-4deg)}
.v-ia b:nth-child(2){left:26%;top:56px;transform:rotate(3deg)}
.v-ia b:nth-child(3){left:52%;top:6px;transform:rotate(-2deg)}
.v-ia b:nth-child(4){left:78%;top:52px;transform:rotate(5deg)}
.fx-card.on .v-ia b{transform:none;background:#EEF3FC;border-color:var(--product);color:var(--product)}
.fx-card.on .v-ia b:nth-child(1){left:0;top:10px;width:48%}
.fx-card.on .v-ia b:nth-child(2){left:0;top:54px;width:48%}
.fx-card.on .v-ia b:nth-child(3){left:52%;top:10px;width:48%}
.fx-card.on .v-ia b:nth-child(4){left:52%;top:54px;width:48%}
.turn{margin-top:clamp(40px,6vw,76px);text-align:center;position:relative}
.turn h3{font-family:var(--font-sub);font-weight:800;font-size:clamp(2rem,6vw,4.2rem);line-height:.98;letter-spacing:-.05em;font-variation-settings:'opsz' 96;max-width:16ch;margin:0 auto}
.turn .hand{margin-top:14px}

/* ============ 06 TRY IT ============ */
.try-grid{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:clamp(20px,3.4vw,44px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.try-app{min-height:470px;display:flex;flex-direction:column}
.try-app .app-body{flex:1;min-height:250px;padding:16px 18px}
.try-app .pi{padding:13px 16px 11px}
.try-side{display:flex;flex-direction:column;gap:16px}
.try-side .panel .prow .v b{font-weight:600;color:var(--ink)}
.ctl{border:1.5px solid var(--line-2);border-radius:12px;padding:14px 15px 16px;background:#fff}
.ctl>span{display:block;font-family:var(--font-mono);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.ctl p{font-size:12.5px;line-height:1.5;color:var(--ink-2);margin-top:10px}
.runs{display:grid;grid-template-columns:1fr 1fr;border-top:1.4px solid var(--ink)}
.runs>div{padding:12px 14px;border-left:1.2px solid var(--line-2)}
.runs>div:first-child{border-left:0}
.runs .k{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:6px}
.runs b{font-family:var(--font-sub);font-weight:800;font-size:22px;letter-spacing:-.04em;line-height:1;display:block}
.runs em{font-style:normal;font-size:11.5px;color:var(--ink-2);display:block;margin-top:5px;line-height:1.4}
.runs .new b{color:var(--product)}
.runs-foot{padding:9px 14px;border-top:1.2px solid var(--line-2);font-family:var(--font-mono);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}

/* ============ 07 TESTING ============ */
.test-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(20px,3.4vw,52px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.tl{position:relative;padding-left:30px}
.tl::before{content:"";position:absolute;left:9px;top:6px;bottom:6px;width:1.6px;background:var(--line-2)}
.tl-i{position:relative;padding:0 0 18px;cursor:pointer}
.tl-i::before{content:attr(data-n);position:absolute;left:-30px;top:0;width:20px;height:20px;border-radius:50%;background:#fff;border:1.6px solid var(--ink);display:grid;place-items:center;font-family:var(--font-mono);font-size:9px;transition:background .2s ease,color .2s ease}
.tl-i:hover::before,.tl-i.on::before{background:var(--yellow);border-color:var(--yellow);color:#fff}
.tl-i b{font-family:var(--font-sub);font-weight:800;font-size:15px;letter-spacing:-.02em;display:block;line-height:1.25}
.tl-i p{font-size:12.5px;line-height:1.5;color:var(--ink-2);max-width:40ch;margin-top:3px}
.tl-i em{font-style:normal;font-family:var(--font-hand);font-size:17px;line-height:1.4;color:var(--coral);display:block;margin-top:3px}
.grp-stage{position:relative;height:min(42vh,350px);min-height:300px;background:#FAFAF7;overflow:hidden}
.grp-stage::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(to right,rgba(17,17,17,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(17,17,17,.045) 1px,transparent 1px);background-size:32px 32px}
.grp-box{position:absolute;left:50%;top:44%;width:min(360px,74%);height:150px;transform:translate(-50%,-50%);border:1.6px dashed var(--ink);border-radius:14px;transition:opacity .4s ease,transform .5s cubic-bezier(.34,1.2,.64,1)}
.grp-box span{position:absolute;left:12px;top:-10px;background:#FAFAF7;padding:0 6px;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted)}
.grp-stage.after .grp-box{opacity:0;transform:translate(-50%,-50%) scale(1.08)}
.grp-axis{position:absolute;left:8%;right:8%;top:70%;height:0;border-top:2px solid var(--ink);opacity:0;transform:scaleX(.2);transform-origin:left;transition:opacity .3s ease,transform .6s cubic-bezier(.5,0,.2,1)}
.grp-stage.after .grp-axis{opacity:1;transform:none}
.grp-axis::after{content:"";position:absolute;right:-2px;top:-6px;border:5px solid transparent;border-left:8px solid var(--ink);border-right:0}
.grp-ax-l{position:absolute;top:calc(70% + 12px);font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);opacity:0;transition:opacity .4s ease .3s}
.grp-stage.after .grp-ax-l{opacity:1}
.gcard{position:absolute;width:clamp(128px,30%,168px);background:#fff;border:1.6px solid var(--ink);border-radius:10px;box-shadow:var(--hard-sm);padding:11px 12px;transform:translate(-50%,-50%);transition:left .6s cubic-bezier(.34,1.2,.64,1),top .6s cubic-bezier(.34,1.2,.64,1)}
.gcard h5{font-family:var(--font-sub);font-weight:800;font-size:14px;letter-spacing:-.03em}
.gcard p{font-size:11.5px;color:var(--ink-2);margin-top:4px;line-height:1.35}
.gcard.a{left:34%;top:44%}
.gcard.b{left:66%;top:44%}
.grp-stage.after .gcard.a{left:20%;top:30%}
.grp-stage.after .gcard.b{left:64%;top:30%}
/* leader lines: each card points at the moment it actually happens */
.gl,.gbr{opacity:0;transition:opacity .35s ease .22s;pointer-events:none}
.grp-stage.after .gl,.grp-stage.after .gbr{opacity:1}
.gl{position:absolute;width:0;border-left:1.8px dashed rgba(17,17,17,.5)}
.gl.ga{left:20%;top:42%;height:28%}
.gl.gb{left:64%;top:42%;height:14%}
.gbr{position:absolute;left:42%;right:12%;top:56%;height:14%;border:1.8px dashed rgba(17,17,17,.5);border-bottom:0;border-radius:9px 9px 0 0}
.gbr em{position:absolute;right:6px;top:-9px;background:#FAFAF7;padding:0 6px;font-style:normal;font-family:var(--font-mono);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.gtick{position:absolute;top:70%;width:2px;height:14px;background:var(--product);transform:translate(-50%,-50%) scaleY(0);transition:transform .3s cubic-bezier(.34,1.4,.64,1)}
.grp-stage.after .gtick{transform:translate(-50%,-50%) scaleY(1)}
.gtick.a{background:var(--ink);width:10px;height:10px;border-radius:50%}
.save-evo{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;margin-top:18px}
.save-evo .ev{border:1.5px solid var(--line-2);border-radius:12px;padding:12px 14px;background:#fff}
.save-evo .ev .k{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:6px}
.save-evo .ev b{font-family:var(--font-sub);font-weight:800;font-size:15px;letter-spacing:-.02em;line-height:1.2;display:block}
.save-evo .ev p{font-size:12px;line-height:1.45;color:var(--ink-2);margin-top:5px}
.save-evo .ev.v2{border-color:var(--ink);box-shadow:var(--hard-sm)}
.save-evo .ev.v2 .k{color:var(--product)}
.save-evo .ar{font-family:var(--font-hand);font-size:26px;color:var(--ink-2)}

/* ============ 08 RESULTS ============ */
.res-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:clamp(22px,3vw,38px)}
.res{border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);overflow:hidden;display:flex;flex-direction:column}
.res-h{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;padding:11px 14px;border-bottom:1.4px solid var(--ink)}
.res-h .lab{font-size:9px}
.res-b{padding:18px 16px 16px;flex:1;display:flex;flex-direction:column;gap:14px}
.res-big{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.res-big b{font-family:var(--font-sub);font-weight:800;font-size:clamp(2.4rem,5vw,3.6rem);line-height:.9;letter-spacing:-.055em;font-variation-settings:'opsz' 96;font-variant-numeric:tabular-nums}
.res-big span{font-size:13px;line-height:1.4;color:var(--ink-2);max-width:26ch}
.race{position:relative;padding:4px 0 0}
.race-row{display:grid;grid-template-columns:44px 1fr;align-items:center;gap:10px;margin-bottom:12px}
.race-row .k{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.race-track{position:relative;height:26px;background:#F3F3EF;border:1.4px solid var(--ink);border-radius:5px;overflow:hidden}
.race-band{position:absolute;top:0;bottom:0;left:var(--a);width:var(--w);opacity:.18;transition:opacity .3s ease}
.race-row.old .race-band{background:repeating-linear-gradient(45deg,var(--coral) 0 5px,transparent 5px 10px);opacity:.55}
.race-row.new .race-band{background:var(--product);opacity:.3}
.race-fill{position:absolute;left:0;top:0;bottom:0;width:0;background:var(--ink)}
.race-row.new .race-fill{background:var(--product)}
.race-done{position:absolute;left:9px;top:50%;transform:translateY(-50%);font-family:var(--font-mono);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:#fff;opacity:0;transition:opacity .2s ease}
.race-row.fin .race-done{opacity:1}
.race-axis{display:flex;justify-content:space-between;margin-left:54px;font-family:var(--font-mono);font-size:8px;letter-spacing:.08em;color:var(--muted)}
.race-clock{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;color:var(--ink);font-variant-numeric:tabular-nums}
.tix{display:grid;grid-template-columns:repeat(20,minmax(0,1fr));gap:4px;max-width:440px}
.tix i{aspect-ratio:1;border-radius:2px;background:var(--coral);transition:opacity .4s ease,transform .4s ease;transition-delay:calc(var(--d,0) * 6ms)}
.tix.after i.gone{opacity:.12;transform:scale(.6);background:var(--line-2)}
.waffle{display:grid;grid-template-columns:repeat(20,minmax(0,1fr));gap:4px;max-width:440px}
.waffle i{aspect-ratio:1;border-radius:50%;background:var(--line-2);transition:background .3s ease;transition-delay:calc(var(--d,0) * 9ms)}
.waffle.seen i.y{background:var(--product)}
.waffle i.hl{outline:1.6px solid var(--ink);outline-offset:1px}
.zero-b{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.zero{font-family:var(--font-display);font-weight:800;font-size:clamp(4rem,9vw,6.4rem);line-height:.8;letter-spacing:-.04em;display:inline-block}
.zero.nope{animation:zshake .45s ease}
@keyframes zshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px) rotate(-3deg)}55%{transform:translateX(7px) rotate(2deg)}80%{transform:translateX(-3px)}}
.quotes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px;align-items:start}
.quotes .note{--w:100%}
.src{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}

/* ============ 09 THE FILE ============ */
.file-grid{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.55fr);gap:clamp(18px,3vw,40px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.fcan{position:relative;height:min(60vh,540px);min-height:360px;background:#1E1E1E;border:1.7px solid var(--ink);border-radius:16px;box-shadow:var(--hard);overflow:hidden;cursor:grab;touch-action:none}
.fcan.drag{cursor:grabbing}
.fworld{position:absolute;left:0;top:0;width:1800px;height:1200px;transform-origin:0 0;will-change:transform}
.fworld.tween{transition:transform .6s cubic-bezier(.3,.8,.3,1)}
.flab{position:absolute;background:#3A3A3E;color:#fff;border-radius:10px;padding:7px 12px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:19px;font-weight:600;letter-spacing:.01em;white-space:nowrap;cursor:pointer;transition:background .2s ease}
.flab:hover,.flab.on{background:#0D99FF}
.fframe{position:absolute;background:#0A0A0A;cursor:pointer;outline:0 solid #0D99FF;transition:outline-width .15s ease}
.fframe:hover,.fframe.on{outline-width:3px}
.fframe .th{position:absolute;background:#fff;border-radius:2px}
.fframe .th.g{background:#DADADA}
.fframe .th.p{background:#EEE9FB}
.fframe .th.y{background:#F0CC48}
.fframe .th.r{background:#fff;box-shadow:inset 0 0 0 3px #CC4824}
.fframe .rowlab{position:absolute;background:#3A3A3E;color:#fff;border-radius:8px;padding:6px 11px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:20px;font-weight:600;white-space:nowrap}
.fframe .col{position:absolute;background:#fff;color:#111;border-radius:6px;padding:2px 20px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:15px;font-weight:600}
.fcan-ui{position:absolute;right:12px;bottom:12px;z-index:5;display:flex;align-items:center;gap:4px;background:#2C2C2C;border:1px solid #444;border-radius:10px;padding:4px}
.fcan-ui button{min-width:30px;height:30px;border-radius:7px;color:#E6E6E6;font-family:var(--font-mono);font-size:11px;padding:0 8px}
.fcan-ui button:hover{background:#3D3D3D}
.fcan-ui output{font-family:var(--font-mono);font-size:10px;color:#BDBDBD;min-width:44px;text-align:center}
.fcan-tip{position:absolute;right:12px;top:12px;z-index:5;font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#9A9A9A;background:rgba(30,30,30,.85);padding:6px 9px;border-radius:6px;pointer-events:none}
.fcan-bl{position:absolute;left:12px;bottom:12px;z-index:5;display:flex;align-items:center;gap:8px;flex-wrap:wrap;max-width:calc(100% - 190px)}
.fcan-go{display:none;align-items:center;gap:8px;background:#0D99FF;color:#fff;border-radius:8px;padding:9px 13px;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase}
.fcan-go.on{display:inline-flex}
.fcan-fig{display:inline-flex;align-items:center;gap:8px;background:#2C2C2C;border:1px solid #4A4A4A;color:#E6E6E6;border-radius:8px;padding:9px 12px;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;transition:background .16s ease,border-color .16s ease}
.fcan-fig:hover{background:#3D3D3D;border-color:#6A6A6A}
.flist{display:flex;flex-direction:column;gap:1px;background:var(--line-2);border:1.5px solid var(--ink);border-radius:14px;overflow:hidden}
.flist button{background:#fff;padding:11px 14px;display:flex;justify-content:space-between;align-items:center;gap:12px;text-align:left;transition:background .18s ease}
.flist button:hover{background:#F4F7FF}
.flist button.on{background:#EEF3FC}
.flist b{font-weight:600;font-size:13.5px;letter-spacing:-.01em;display:flex;align-items:center;gap:9px}
.flist b i{width:9px;height:9px;border-radius:2px;background:var(--line-2);flex:0 0 9px}
.flist button.on b i{background:#0D99FF}
.flist em{font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;color:var(--muted)}

/* ============ 10 WEB APP ============ */
.browser{border:1.7px solid var(--ink);border-radius:14px;overflow:hidden;background:#fff;box-shadow:var(--hard)}
.br-bar{display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1.4px solid var(--ink);background:#F6F6F3}
.br-bar .dots{display:flex;gap:5px}
.br-bar .dots i{width:9px;height:9px;border-radius:50%;border:1.3px solid var(--ink);background:#fff}
.br-url{flex:1;min-width:0;background:#fff;border:1.2px solid var(--line-2);border-radius:6px;padding:4px 10px;font-family:var(--font-mono);font-size:9.5px;letter-spacing:.04em;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cmp{position:relative;touch-action:pan-y;cursor:ew-resize}
.browser.cmpb{max-width:min(100%,calc(min(62vh,620px) * 1.6 + 4px));margin-inline:auto}
.cmp #cmpOld .slot{justify-items:start}
.cmp #cmpOld .sl-in{margin-left:8%}
.cmp #cmpNew .slot{justify-items:end}
.cmp #cmpNew .sl-in{margin-right:8%}
.cmp .sl-in{max-width:42%}
.cmp .slot{border-radius:0;border:0}
.cmp-new{position:absolute;inset:0;clip-path:inset(0 0 0 var(--x,50%));transition:clip-path .0s}
.cmp.anim .cmp-new{transition:clip-path .5s cubic-bezier(.3,.8,.3,1)}
.cmp-h{position:absolute;top:0;bottom:0;left:var(--x,50%);width:0;border-left:2px solid var(--ink);z-index:4;pointer-events:none}
.cmp.anim .cmp-h{transition:left .5s cubic-bezier(.3,.8,.3,1)}
.cmp-k{position:absolute;top:50%;left:0;width:40px;height:40px;border-radius:50%;background:#fff;border:1.8px solid var(--ink);box-shadow:var(--hard-sm);transform:translate(-50%,-50%);display:grid;place-items:center;pointer-events:auto;cursor:ew-resize}
.cmp-tag{position:absolute;top:12px;z-index:5;font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;padding:5px 9px;border-radius:4px;pointer-events:none}
.cmp-tag.o{left:12px;background:#fff;border:1.3px solid var(--ink)}
.cmp-tag.n{right:12px;background:var(--yellow);color:#fff}
.web-ctl{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px}
.web-more{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:18px}
.web-more figure{border:1.5px solid var(--ink);border-radius:10px;overflow:hidden;background:#fff;box-shadow:var(--hard-sm);transform:rotate(var(--r,0deg));transition:transform .25s cubic-bezier(.34,1.4,.64,1),box-shadow .25s ease;cursor:zoom-in}
.web-more figure:hover{transform:rotate(0) translateY(-4px);box-shadow:6px 7px 0 var(--ink)}
.web-more .slot{border-radius:0;border:0}
.web-more figcaption,.cap-strip{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);padding:8px 10px;border-top:1.2px solid var(--line-2)}

/* ============ 11 MOBILE ============ */
.mob-grid{display:grid;grid-template-columns:minmax(0,.62fr) minmax(0,1fr);gap:clamp(20px,4vw,60px);align-items:center;margin-top:clamp(22px,3vw,38px)}
.phone-wrap{display:flex;flex-direction:column;align-items:center;gap:14px}
.phone{position:relative;height:min(64vh,620px);width:auto;max-width:78vw;aspect-ratio:390/844;border:2.4px solid var(--ink);border-radius:40px;background:var(--ink);padding:9px;box-shadow:0 18px 44px rgba(17,17,17,.22),0 3px 10px rgba(17,17,17,.12)}
.phone-sc{position:relative;width:100%;height:100%;border-radius:32px;overflow:hidden;background:#fff}
.phone-sc .slot{position:absolute;inset:0;border-radius:0;border:0;aspect-ratio:auto;height:100%;transition:transform .38s cubic-bezier(.3,.8,.3,1),opacity .3s ease}
.phone-sc .slot.out-l{transform:translateX(-30%);opacity:0}
.phone-sc .slot.out-r{transform:translateX(30%);opacity:0}
.phone-notch{position:absolute;top:9px;left:50%;transform:translateX(-50%);width:34%;height:22px;background:var(--ink);border-radius:0 0 14px 14px;z-index:4}
.phone-nav{display:flex;align-items:center;gap:10px}
.rnd{width:40px;height:40px;border-radius:50%;border:1.7px solid var(--ink);background:#fff;box-shadow:var(--hard-sm);display:grid;place-items:center;transition:transform .16s cubic-bezier(.34,1.5,.64,1)}
.rnd:hover{transform:scale(1.08)}
.rnd:active{transform:scale(.96)}
.rnd:disabled{opacity:.35;cursor:not-allowed;transform:none}
.phone-count{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);min-width:14ch;text-align:center}
.phone-count b{font-weight:500;color:var(--ink)}
.mods{display:flex;flex-direction:column;gap:8px}
.mod{display:flex;align-items:center;justify-content:space-between;gap:12px;border:1.5px solid var(--line-2);border-radius:12px;padding:13px 16px;background:#fff;text-align:left;width:100%;transition:border-color .2s ease,transform .2s cubic-bezier(.34,1.4,.64,1),background .2s ease}
.mod:hover{border-color:var(--ink);transform:translateX(3px)}
.mod.on{border-color:var(--ink);background:#F4F7FF;box-shadow:var(--hard-sm)}
.mod b{font-family:var(--font-sub);font-weight:800;font-size:17px;letter-spacing:-.03em}
.mod em{font-style:normal;font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.mod.on em{color:var(--product)}
.film{position:relative;display:flex;gap:11px;overflow-x:auto;padding:8px 2px 14px;margin-top:16px;scrollbar-width:thin}
.film button{position:relative;flex:0 0 66px;border-radius:12px;padding:3px;background:var(--ink);border:0;
  box-shadow:0 3px 9px rgba(17,17,17,.16);transition:transform .2s cubic-bezier(.34,1.4,.64,1),box-shadow .2s ease}
.film button::after{content:"";position:absolute;top:3px;left:50%;transform:translateX(-50%);width:32%;height:4px;
  background:var(--ink);border-radius:0 0 3px 3px;z-index:2;pointer-events:none}
.film button:hover{transform:translateY(-3px)}
.film button.on{transform:translateY(-5px);box-shadow:0 0 0 2.5px var(--yellow),0 8px 18px rgba(17,17,17,.2)}
.film .slot{border-radius:9px;overflow:hidden;--ar:390/844}
.mod-note{margin-top:14px;border-left:2.4px solid var(--ink);padding-left:14px;font-size:13px;line-height:1.55;color:var(--ink-2);max-width:48ch}
.mod-note:empty{display:none}

/* ============ 12 DETAILS ============ */
.ic-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:clamp(22px,3vw,38px)}
.ic-wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.36fr);gap:16px;margin-top:14px;align-items:start}
.ic-grid{display:grid;grid-template-columns:repeat(var(--iccols,10),minmax(0,1fr));gap:12px;padding:18px;justify-items:stretch;border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm)}
/* the size control changes how large the glyph is drawn inside its artboard,
   not how many sit across — the row of ten stays the row of ten. */
.ic-grid[data-size="s"]{--icpad:24%}
.ic-grid[data-size="m"]{--icpad:14%}
.ic-grid[data-size="l"]{--icpad:4%}
.ic{position:relative;aspect-ratio:1;border:1.3px solid var(--line-2);border-radius:12px;background:#FCFCFB;padding:16%;display:grid;place-items:center;transition:border-color .18s ease,background .18s ease,transform .18s cubic-bezier(.34,1.4,.64,1),box-shadow .18s ease}
.ic:hover{border-color:var(--ink);background:#fff;transform:translateY(-3px);box-shadow:0 6px 16px rgba(17,17,17,.1)}
.ic.on{border-color:var(--yellow);background:#fff;box-shadow:0 0 0 2px var(--yellow),0 6px 16px rgba(36,96,192,.16)}
.ic .slot{width:100%}
.ic .slot{--ar:1/1;border-radius:6px}
.icv{display:block;width:100%;color:inherit}
.icv svg{width:100%;height:auto;aspect-ratio:1/1;display:block}
.ic-grid{color:var(--ink)}
/* the artboard every glyph is drawn on, made visible */
.art{position:relative;display:block;width:100%;aspect-ratio:1/1;border:1px solid var(--line-2);border-radius:5px;background:#fff;padding:var(--icpad,14%);transition:padding .2s ease}
.ic.on .art{border-color:rgba(36,96,192,.45)}
.art .ov{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .2s ease;border-radius:4px;
  background-image:linear-gradient(to right,rgba(13,153,255,.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(13,153,255,.4) 1px,transparent 1px);
  background-size:calc(100% / 12) calc(100% / 12)}
.art .ov::after{content:"";position:absolute;inset:8%;border:1px solid rgba(240,85,61,.55);border-radius:50%}
.ic-grid.keys .ic .ov{opacity:1}
.ic-insp{border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);overflow:hidden;position:sticky;top:20px}
.ic-insp .big .art{padding:10%}
.ic-insp .big .ov{background-size:calc(100% / 24) calc(100% / 24)}
.ic-insp:not(.keys) .big .ov{opacity:0}
.ic-insp.keys .big .ov{opacity:1}
.ic-insp .big{padding:20px;background:#FAFAF7;border-bottom:1.4px solid var(--ink);position:relative;display:grid;place-items:center}
.ic-insp .big>div{width:min(190px,100%)}
.ic-insp .big .slot{--ar:1/1}
.det-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(18px,3vw,36px);margin-top:clamp(30px,4vw,54px);align-items:start}
.pop-frame{position:relative}
.pop-scrim{position:absolute;inset:0;z-index:4;background:rgba(15,23,42,.45);opacity:0;pointer-events:none;transition:opacity .25s ease;display:grid;place-items:center;padding:8%}
.pop-frame.open .pop-scrim{opacity:1;pointer-events:auto}
.pop-modal{width:min(62%,420px);transform:scale(.92) translateY(10px);transition:transform .3s cubic-bezier(.34,1.4,.64,1);border-radius:10px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.35)}
.pop-frame.open .pop-modal{transform:none}
.pop-modal .slot{border-radius:0;border:0;background:#fff}
.pop-ctl{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;padding:11px 14px;border-top:1.4px solid var(--ink);background:#fff}

/* ============ 13 CHATBOT ============ */
.cb-stage{position:relative;display:flex;justify-content:center;align-items:center;gap:clamp(10px,2vw,22px);padding:clamp(22px,4vw,44px) clamp(14px,3vw,34px);background:#111;border:1.7px solid var(--ink);border-radius:16px;box-shadow:var(--hard);min-height:min(56vh,480px);overflow:hidden}
.cb{flex:0 0 clamp(150px,24%,250px);border-radius:14px;overflow:hidden;transition:transform .45s cubic-bezier(.34,1.3,.64,1),opacity .35s ease,filter .35s ease;cursor:pointer;background:none;padding:0;position:relative}
.cb .slot{--ar:3/4;border-radius:14px}
.cb-stage.focus .cb{opacity:.35;transform:scale(.88);filter:saturate(.4)}
.cb-stage.focus .cb.on{opacity:1;transform:scale(1.12);filter:none;z-index:3}
.cb-lab{position:absolute;left:10px;top:10px;z-index:3;font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;background:#fff;color:var(--ink);padding:4px 8px;border-radius:4px}
.cb-stage.focus .cb.on .cb-lab{background:var(--yellow);color:#fff}
.cb-ctl{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px}

/* ============ 14 CREATIVES ============ */
.cr-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;margin-top:clamp(22px,3vw,38px)}
.cr-grid figure,.li-grid figure{border:1.5px solid var(--ink);border-radius:12px;overflow:hidden;background:#fff;box-shadow:var(--hard-sm);transform:rotate(var(--r,0deg));transition:transform .28s cubic-bezier(.34,1.4,.64,1),box-shadow .28s ease;cursor:zoom-in}
.cr-grid figure:hover,.li-grid figure:hover{transform:rotate(0) translateY(-5px);box-shadow:8px 9px 0 var(--ink)}
.cr-grid .slot,.li-grid .slot{border-radius:0;border:0}
.cr-grid figcaption,.li-grid figcaption{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);padding:9px 11px;border-top:1.2px solid var(--line-2)}
.li-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
[data-kind][hidden]{display:none}

/* ============ 15 LOOKING BACK ============ */
.back-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(20px,3.4vw,48px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.dos{display:flex;flex-direction:column;gap:12px}
.dos>div{border:1.5px solid var(--ink);border-radius:14px;overflow:hidden;background:#fff}
.dos h6{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;padding:10px 14px;border-bottom:1.4px solid var(--ink);margin:0;font-weight:500}
.dos .do h6{background:var(--yellow);color:#fff}
.dos p{font-size:13px;line-height:1.55;color:var(--ink-2);padding:12px 14px 14px;margin:0}
.lessons{display:flex;flex-direction:column;gap:10px}
.lesson{border:1.5px solid var(--line-2);border-radius:12px;background:#fff;padding:15px 17px;text-align:left;width:100%;transition:border-color .2s ease,transform .2s cubic-bezier(.34,1.4,.64,1),background .2s ease}
.lesson:hover{border-color:var(--ink);transform:translateX(3px)}
.lesson.on{border-color:var(--product);background:#F4F7FF}
.lesson h5{font-family:var(--font-sub);font-weight:800;font-size:16.5px;letter-spacing:-.03em;line-height:1.2;margin:0}
.lesson p{font-size:12.5px;line-height:1.55;color:var(--ink-2);margin:0;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease,opacity .3s ease,margin .3s ease}
.lesson.on p{max-height:220px;opacity:1;margin-top:8px}
.lesson .go{display:none;margin-top:10px;font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--product)}
.lesson.on .go{display:inline-flex}

/* ============ 16 END ============ */
.end{padding:clamp(46px,7vw,100px) 0 clamp(30px,4vw,50px);text-align:center;position:relative}
.end-pi{width:min(520px,90%);margin:0 auto}
.end-pi .pi{background:none;border:0;padding:0}
.end-pi .pi-lab{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase}
.end-pi .pi-dot{width:30px;height:30px;font-size:12px}
.end-pi .pi-step:not(:last-child)::after{top:14px}
.end-h{font-family:var(--font-sub);font-weight:800;font-variation-settings:'opsz' 96;font-size:clamp(2rem,6.6vw,4.6rem);line-height:.94;letter-spacing:-.05em;text-transform:uppercase;margin-top:clamp(24px,3vw,38px)}
.end-h span{display:block;color:var(--product);text-transform:none}
.end-p{margin:20px auto 0;max-width:46ch;font-size:clamp(.95rem,1.4vw,1.06rem);line-height:1.6;color:var(--ink-2)}
.credits{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:26px}
.projnav{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:clamp(34px,5vw,62px);text-align:left}
.pnav{border:1.7px solid var(--ink);border-radius:16px;padding:18px 20px;text-decoration:none;box-shadow:var(--hard);background:#fff;transition:transform .2s cubic-bezier(.34,1.4,.64,1),box-shadow .2s ease;display:block}
.pnav:hover{transform:translate(-2px,-3px);box-shadow:7px 8px 0 var(--ink)}
.pnav.next{text-align:right}
.pnav .k{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:8px}
.pnav .t{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.3rem,3vw,2rem);letter-spacing:-.04em;line-height:1.02}
.pnav .c{display:inline-block;width:12px;height:12px;border:1.6px solid var(--ink);border-radius:3px;margin-top:10px}
.home-row{display:flex;justify-content:center;margin-top:clamp(28px,4vw,48px)}
.foot{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;margin-top:clamp(30px,4vw,54px);padding-top:20px;border-top:1.4px solid var(--line-2);font-family:var(--font-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-align:left}

/* ============ FIT THE FOLD ============ */
@media(min-width:900px){
  .sec{padding-block:clamp(34px,4.4vw,70px)}
  .sec-title{font-size:clamp(1.8rem,3.4vw,2.5rem)}
}

/* ============ RESPONSIVE ============ */
@media(max-width:1200px){.flist em{display:none}}
@media(max-width:1080px){
  .ic-grid{--iccols:6!important;gap:12px}
  .cr-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .web-more{grid-template-columns:repeat(2,minmax(0,1fr))}
  .ic-wrap{grid-template-columns:1fr}
  .ic-insp{position:static;display:grid;grid-template-columns:160px 1fr}
  .ic-insp .big{border-bottom:0;border-right:1.4px solid var(--ink)}
}
@media(max-width:980px){
  .enter-grid,.prob-split,.jgrid,.try-grid,.test-grid,.file-grid,.mob-grid,.det-grid,.back-grid{grid-template-columns:1fr}
  .prob-l{position:static}
  .enter-r{align-items:flex-start;margin-top:26px}
  .enter-note{position:static;width:100%;max-width:260px;margin-top:6px}
  .mini-ts{transform:none}
  .cons-grid,.fx-grid{grid-template-columns:1fr}
  .res-grid{grid-template-columns:1fr}
  .flist{flex-direction:row;flex-wrap:wrap;background:none;border:0;gap:8px}
  .flist button{border:1.4px solid var(--line-2);border-radius:99px;padding:8px 12px}
  .flist em{display:none}
}
@media(max-width:900px){
  .sec-head{grid-template-columns:1fr;align-items:start}
  .rail,.rail-hint{display:none}
  .fcan{touch-action:pan-y}
  .fcan-tip{display:none}
  .ow-notes,.quotes{grid-template-columns:1fr}
  .projnav{grid-template-columns:1fr}
  .pnav.next{text-align:left}
  .cr-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .li-grid{grid-template-columns:1fr}
  .note{--w:100%!important;max-width:100%}
  .peek{display:none}
  .save-evo{grid-template-columns:1fr}
  .save-evo .ar{transform:rotate(90deg);justify-self:center}
}
@media(max-width:700px){
  .ic-grid{--iccols:4!important;gap:10px;padding:14px}
  .spec-bar{grid-template-columns:1fr 1fr}
  .spec-bar>div:nth-child(odd){border-left:0}
  .spec-bar>div:nth-child(-n+2){border-bottom:1.2px solid var(--line-2)}
  .counters{grid-template-columns:1fr 1fr 1fr}
  .counters>div{padding:10px 9px 12px}
  .week{grid-template-columns:repeat(5,minmax(0,1fr));gap:5px}
  .day{padding:6px 3px 7px}
  .pi-lab{font-size:10px}
  .pi-state{display:none}
  .cb-stage{flex-direction:column}
  .cb{flex:0 0 auto;width:min(260px,80%)}
  .cb-stage.focus .cb.on{transform:scale(1.03)}
  .ic-insp{grid-template-columns:1fr}
  .ic-insp .big{border-right:0;border-bottom:1.4px solid var(--ink)}
  .web-more{grid-template-columns:1fr 1fr}
  .jm-card{width:clamp(96px,22%,130px)}
  .jm-main h5{font-size:11.5px}
  .task-seg{font-size:10.5px}
}
@media(max-width:520px){
  .cr-grid{grid-template-columns:1fr}
  .runs{grid-template-columns:1fr}
  .runs>div{border-left:0;border-top:1.2px solid var(--line-2)}
  .runs>div:first-child{border-top:0}
  .foot{flex-direction:column;align-items:flex-start;gap:8px}
}
html{overflow-x:clip}
@media(prefers-reduced-motion:reduce){
  *{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.05s!important}
  html{scroll-behavior:auto}
}

/* ============================================================
   ROUND 2 — more to press: a command palette, a ticket sort,
   a decision, a live component kit, an arithmetic panel,
   a scripted assistant, screen annotations and a receipt.
   Still no new tokens.
   ============================================================ */
.tools,.pal-box,.tkt,.tk-b,.callc,.kit,.cbot,.receipt{user-select:none;-webkit-user-select:none}
.pal-in input{user-select:text;-webkit-user-select:text}

/* ---------- the toolbar ---------- */
.tools{position:fixed;right:14px;bottom:14px;z-index:95;display:flex;align-items:center;gap:2px;background:#fff;border:1.6px solid var(--ink);border-radius:999px;padding:4px;box-shadow:var(--hard-sm)}
.tool{height:32px;min-width:32px;padding:0 11px;display:grid;place-items:center;border-radius:999px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-2);position:relative;transition:background .15s ease,color .15s ease}
.tool:hover{background:#F1F1EE;color:var(--ink)}
.tool.on{background:var(--ink);color:#fff}
.tool[data-tip]::after{content:attr(data-tip);position:absolute;bottom:calc(100% + 9px);right:0;background:var(--ink);color:#fff;font-family:var(--font-sans);font-size:11px;letter-spacing:0;text-transform:none;padding:5px 9px;border-radius:5px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .16s ease}
.tool:hover::after{opacity:1}

/* ---------- the command palette ---------- */
.pal{position:fixed;inset:0;z-index:210;background:rgba(12,12,12,.55);display:none;justify-content:center;align-items:flex-start;padding:11vh 16px 16px}
.pal.on{display:flex}
.pal-box{width:min(560px,100%);background:#fff;border:1.8px solid var(--ink);border-radius:14px;box-shadow:0 30px 80px rgba(0,0,0,.45);overflow:hidden}
.pal-in{display:flex;align-items:center;gap:11px;padding:13px 16px;border-bottom:1.5px solid var(--ink)}
.pal-in input{flex:1;min-width:0;font:inherit;font-size:16px;border:0;outline:0;background:none;letter-spacing:-.01em}
.pal-list{position:relative;max-height:min(46vh,360px);overflow:auto;padding:6px}
.pal-list button{display:flex;align-items:center;gap:11px;width:100%;text-align:left;padding:9px 10px;border-radius:8px;font-size:14px;color:var(--ink-2)}
.pal-list button .n{font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;color:var(--muted);width:20px;flex:0 0 20px}
.pal-list button .k{margin-left:auto;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.pal-list button.sel,.pal-list button:hover{background:#F1F1EE;color:var(--ink)}
.pal-list button.sel{box-shadow:inset 3px 0 0 var(--yellow)}
.pal-empty{padding:18px 12px;text-align:center;font-size:13px;color:var(--muted)}
.pal-foot{padding:9px 14px;border-top:1.2px solid var(--line-2);font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);display:flex;gap:16px;flex-wrap:wrap}

/* ============ THE EVIDENCE — sort the tickets ============ */
.tk-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr)}
.tk-deck{padding:16px;display:flex;flex-direction:column;gap:10px;max-height:min(50vh,440px);overflow:auto;border-right:1.4px solid var(--ink);background:#FAFAF7}
.tkt{position:relative;border:1.5px solid var(--ink);border-radius:10px;background:#fff;box-shadow:var(--hard-sm);padding:12px 13px;cursor:grab;touch-action:none;transition:transform .2s cubic-bezier(.34,1.4,.64,1),box-shadow .2s ease,opacity .3s ease;text-align:left;width:100%}
.tkt:hover{transform:translate(-2px,-3px);box-shadow:5px 6px 0 var(--ink)}
.tkt.sel{border-color:var(--yellow);box-shadow:4px 5px 0 var(--yellow)}
.tkt.drag{position:fixed;z-index:160;margin:0;pointer-events:none;cursor:grabbing;box-shadow:10px 12px 0 rgba(17,17,17,.2);transform:rotate(-2deg)}
.tkt.gone{opacity:0;transform:scale(.92);pointer-events:none}
.tkt .id{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:6px}
.tkt p{font-size:13px;line-height:1.45;color:var(--ink-2);margin:0}
.tkt .go{display:block;font-family:var(--font-mono);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-top:9px}
.tkt.sel .go{color:var(--yellow)}
.tk-buckets{display:flex;flex-direction:column;gap:10px;padding:16px;justify-content:center}
.tk-b{border:1.5px dashed var(--line-2);border-radius:12px;padding:13px 15px;display:flex;align-items:center;gap:14px;background:#fff;transition:border-color .2s ease,background .2s ease,transform .2s cubic-bezier(.34,1.4,.64,1);width:100%;text-align:left}
.tk-b.hot{border-color:var(--yellow);border-style:solid;background:#EEF3FC;transform:translateY(-2px)}
.tk-b.hit{animation:tkhit .45s cubic-bezier(.34,1.4,.64,1)}
@keyframes tkhit{0%,100%{transform:none}45%{transform:scale(1.035)}}
.tk-b .k{font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:5px}
.tk-b h5{font-family:var(--font-sub);font-weight:800;font-size:15px;letter-spacing:-.03em;line-height:1.14;margin:0}
.tk-b .c{margin-left:auto;font-family:var(--font-sub);font-weight:800;font-size:24px;letter-spacing:-.05em;line-height:1;min-width:30px;text-align:right;color:var(--line-2);transition:color .3s ease}
.tk-b.has .c{color:var(--product)}
.tk-b.has{border-style:solid;border-color:var(--ink)}
.tk-foot{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:12px 16px;border-top:1.4px solid var(--ink)}
.tk-foot .msg{font-family:var(--font-hand);font-size:19px;line-height:1.4;color:var(--ink-2);flex:1;min-width:200px}
.tk-foot .msg.no{color:var(--coral)}

/* ============ THE CALL — what would you ship? ============ */
.call-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:clamp(22px,3vw,38px)}
.callc{position:relative;border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);padding:18px 18px 16px;text-align:left;display:flex;flex-direction:column;gap:9px;transition:transform .2s cubic-bezier(.34,1.4,.64,1),box-shadow .2s ease,background .25s ease}
.callc:hover{transform:translate(-2px,-3px);box-shadow:6px 7px 0 var(--ink)}
.callc.on{background:#F4F7FF}
.callc .t{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.callc h4{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.05rem,1.7vw,1.3rem);letter-spacing:-.035em;line-height:1.1;margin:0}
.callc>p{font-size:12.5px;line-height:1.5;color:var(--ink-2);margin:0}
.callc .verdict{display:none;flex-direction:column;gap:7px;margin-top:6px;padding-top:12px;border-top:1.2px solid var(--line-2)}
.callc.on .verdict{display:flex}
.vrow{display:flex;align-items:flex-start;gap:9px;font-size:12px;line-height:1.4;color:var(--ink-2)}
.vrow i{width:16px;height:16px;flex:0 0 16px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:10px;color:#fff;background:var(--green);margin-top:1px}
.vrow.no i{background:var(--coral)}
.vrow.mid i{background:var(--muted)}
.callc .pick{position:absolute;top:-11px;right:12px;background:var(--yellow);color:#fff;font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;padding:5px 9px;border-radius:5px;opacity:0;transform:translateY(5px);transition:all .3s cubic-bezier(.34,1.4,.64,1)}
.callc.shipped .pick{opacity:1;transform:none}
.call-out{margin-top:20px;border-left:2.6px solid var(--product);padding-left:16px;min-height:64px}
.call-out h5{font-family:var(--font-mono);font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:7px}
.call-out p{font-size:13.5px;line-height:1.55;color:var(--ink-2);max-width:56ch}

/* ============ THE KIT — the components, running ============ */
.kit-ctl{display:flex;gap:12px;flex-wrap:wrap;justify-content:space-between;align-items:center;margin-top:clamp(22px,3vw,38px)}
.kit{display:grid;align-items:start;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:16px;margin-top:16px}
.kc{border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);overflow:hidden;display:flex;flex-direction:column}
.kc-h{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 13px;border-bottom:1.4px solid var(--ink);font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase}
.kc-h b{font-weight:500}
.kc-h span{color:var(--muted)}
.kc-b{padding:20px 16px;background:#FAFBFD;display:grid;place-items:center;min-height:132px;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#1A202C}
.kc-b>*{max-width:100%}
.kc-f{padding:10px 13px;border-top:1.2px solid var(--line-2);font-size:12px;line-height:1.45;color:var(--ink-2);display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto}
.kc-f .jump{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--product);white-space:nowrap}
.kit .fld{width:100%;margin:0}
.kit .err{display:none;font-size:11.5px;color:#B42318}
.kit.s-error .err{display:block}
.kit.s-error .fld input,.kit.s-error .fld select{border-color:#F04438;background:#FFFBFA}
.kit.s-hover .abtn{background:#F8FAFC;border-color:#94A3B8}
.kit.s-hover .abtn.pri{background:#1D52A8}
.kit.s-focus .abtn,.kit.s-focus .fld input,.kit.s-focus .fld select{outline:2px solid rgba(36,96,192,.45);outline-offset:1px;border-color:var(--product)}
.kit.s-disabled .abtn,.kit.s-disabled .fld input,.kit.s-disabled .fld select,.kit.s-disabled .stepper{opacity:.45;pointer-events:none}
.kit.compact .abtn{padding:6px 12px;font-size:12px}
.kit.compact .fld input,.kit.compact .fld select{padding:6px 9px;font-size:12.5px}
.kit.compact .kc-b{padding:14px 13px;min-height:112px}
.kit.compact .pi{padding:10px 12px}
.kit.compact .pi-dot{width:22px;height:22px;font-size:10px}
.kit .pi{width:100%;border:0;background:none;padding:0}
.kit .pi-step:not(:last-child)::after{top:12px}
.kit .v-save{width:100%;box-shadow:none}
.kit-note{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap;margin-top:16px}

/* ============ THE ARITHMETIC ============ */
.math-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(20px,3.4vw,44px);align-items:start;margin-top:clamp(22px,3vw,38px)}
.math-ctl{border:1.6px solid var(--ink);border-radius:14px;background:#fff;box-shadow:var(--hard-sm);padding:18px 18px 20px;display:flex;flex-direction:column;gap:20px}
.mrow label{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.mrow label b{font-family:var(--font-sub);font-weight:800;font-size:19px;letter-spacing:-.03em;color:var(--ink);text-transform:none}
.mrow input[type=range]{width:100%;accent-color:var(--product)}
.mrow .ticks{display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:8px;letter-spacing:.1em;color:var(--muted);margin-top:7px}
.math-out{border:1.7px solid var(--ink);border-radius:16px;background:#fff;box-shadow:var(--hard);overflow:hidden}
.math-bars{padding:20px 18px 6px}
.mbar{margin-bottom:16px}
.mbar .k{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-family:var(--font-mono);font-size:9px;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-bottom:7px}
.mbar .k b{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.1rem,2vw,1.5rem);letter-spacing:-.04em;color:var(--ink);text-transform:none}
.mbar .track{height:26px;border:1.5px solid var(--ink);border-radius:6px;background:#F3F3EF;overflow:hidden}
.mbar .fill{display:block;height:100%;width:0;background:repeating-linear-gradient(45deg,rgba(240,85,61,.65) 0 6px,rgba(240,85,61,.35) 6px 12px);transition:width .5s cubic-bezier(.3,.8,.3,1)}
.mbar.new .fill{background:var(--product)}
.math-saved{border-top:1.4px solid var(--ink);padding:16px 18px 18px;background:#FAFAF7;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.math-saved div .k{display:block;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px}
.math-saved b{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.3rem,2.6vw,1.9rem);letter-spacing:-.045em;line-height:1;display:block;color:var(--product)}
.math-saved em{font-style:normal;font-size:11.5px;color:var(--ink-2);display:block;margin-top:5px}
.math-foot{padding:11px 18px;border-top:1.2px solid var(--line-2);font-family:var(--font-mono);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}

/* ============ THE ASSISTANT — a scripted prototype ============ */
.cbot{margin-top:18px;border:1.7px solid var(--ink);border-radius:16px;overflow:hidden;background:#fff;box-shadow:var(--hard);max-width:660px;margin-inline:auto}
.cbot-h{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:1.4px solid var(--ink);font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:13.5px;font-weight:650}
.cbot-h .dot{width:8px;height:8px;border-radius:50%;background:var(--green)}
.cbot-h .lab{margin-left:auto}
.cbot-log{padding:16px;display:flex;flex-direction:column;gap:10px;min-height:210px;max-height:min(40vh,320px);overflow:auto;background:#FAFBFD;font-family:system-ui,-apple-system,'Segoe UI',sans-serif}
.msg{max-width:78%;padding:9px 12px;border-radius:13px;font-size:13.5px;line-height:1.45;animation:msgin .3s cubic-bezier(.34,1.4,.64,1)}
@keyframes msgin{from{opacity:0;transform:translateY(8px)}}
.msg.u{align-self:flex-end;background:var(--product);color:#fff;border-bottom-right-radius:4px}
.msg.a{align-self:flex-start;background:#fff;border:1px solid #E2E8F0;border-bottom-left-radius:4px;color:#1A202C}
.msg.typing{display:flex;gap:4px;align-items:center;padding:12px}
.msg.typing i{width:6px;height:6px;border-radius:50%;background:#CBD5E1;animation:tdot 1.1s infinite}
.msg.typing i:nth-child(2){animation-delay:.15s}.msg.typing i:nth-child(3){animation-delay:.3s}
@keyframes tdot{0%,60%,100%{opacity:.35;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
.cbot-f{display:flex;gap:8px;flex-wrap:wrap;padding:12px 14px;border-top:1.4px solid var(--ink)}
.cbot-f .mini{flex:0 1 auto;text-transform:none;letter-spacing:.02em;font-size:11.5px;font-family:var(--font-sans);white-space:normal;text-align:left}

/* ============ SCREEN ANNOTATIONS ============ */
.pinwrap{position:absolute;inset:0;z-index:6;pointer-events:none}
.pinwrap.off{display:none}
.pn{position:absolute;left:var(--px);top:var(--py);transform:translate(-50%,-50%);pointer-events:auto}
.pn>button{width:26px;height:26px;border-radius:50%;background:var(--yellow);color:#fff;border:1.6px solid var(--ink);box-shadow:var(--hard-sm);font-family:var(--font-mono);font-size:10px;display:grid;place-items:center;transition:transform .16s cubic-bezier(.34,1.5,.64,1)}
.pn>button:hover{transform:scale(1.12)}
.pn .tip{position:absolute;left:calc(100% + 10px);top:50%;transform:translateY(-50%) translateX(-6px);background:var(--ink);color:#fff;font-size:11.5px;line-height:1.4;padding:9px 11px;border-radius:7px;width:min(200px,42vw);opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease;z-index:2}
.pn.right .tip{left:auto;right:calc(100% + 10px);transform:translateY(-50%) translateX(6px)}
.pn.on .tip,.pn:hover .tip{opacity:1;transform:translateY(-50%)}
.pn.on>button{background:var(--ink)}

/* ---------- the link to the working file ---------- */
.figma-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;margin-top:14px;font-size:14.5px;padding:12px 16px}
.figma-btn svg{flex:0 0 auto}
.figma-note{display:block;text-align:center;margin-top:9px}

/* ---------- dialog anatomy: two dialogs, one set of rules ---------- */
.anat{position:relative;background:#F7F7F4;overflow:hidden;padding:clamp(26px,4vw,44px) 0 clamp(30px,4vw,48px)}
.anat::before{content:"";position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(to right,rgba(17,17,17,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(17,17,17,.05) 1px,transparent 1px);background-size:32px 32px}
.anat-fit{position:relative;width:100%;display:flex;justify-content:center}
.anat-scale{transform-origin:top center;position:relative;width:640px}
.dlg[hidden]{display:none}

/* the shared shell: the rules both dialogs obey */
.dlg{width:640px;background:#fff;border-radius:14px;overflow:hidden;position:relative;
  box-shadow:0 24px 60px rgba(15,23,42,.22),0 2px 8px rgba(15,23,42,.08);
  font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#0F172A}
.dlg-h{height:68px;padding:0 28px;background:var(--product);color:#fff;display:flex;align-items:center;justify-content:space-between}
.dlg-h b{font-size:21px;font-weight:700;letter-spacing:-.01em}
.dlg-h span{font-size:20px;opacity:.9;line-height:1}
.dlg-b{padding:28px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start}
.dlg-col{display:flex;flex-direction:column;gap:20px}
.dlg-f{display:flex;flex-direction:column;gap:8px}
.dlg-f i{font-style:normal;font-size:11px;font-weight:650;letter-spacing:.06em;text-transform:uppercase;color:#64748B}
.dlg-in{height:46px;border:1px solid #E2E8F0;border-radius:10px;padding:0 14px;display:flex;align-items:center;font-size:14px;color:#94A3B8;background:#fff}
.dlg-drop{border:1.5px dashed #CBD5E1;border-radius:10px;background:#F8FAFC;height:212px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center}
.dlg-drop em{width:56px;height:56px;border-radius:50%;background:#E8EDF3;display:grid;place-items:center;font-style:normal;font-size:24px;color:#64748B;margin-bottom:4px}
.dlg-drop b{font-size:15px;font-weight:650}
.dlg-drop s{text-decoration:none;font-size:12.5px;color:#64748B}
.dlg-div{height:1px;background:#EEF2F7;margin:0 28px}
.dlg-ft{padding:20px 28px;display:flex;justify-content:flex-end;gap:12px}
.dlg-btn{height:41px;padding:0 22px;border-radius:8px;font-size:14px;font-weight:600;display:grid;place-items:center;border:1px solid #CBD5E1;background:#fff;color:#1E293B}
.dlg-btn.pri{background:var(--product);border-color:var(--product);color:#fff}
/* the loading dialog: no header, no footer, no buttons — same rules */
.dlg-load{padding:28px;display:flex;flex-direction:column;gap:8px;text-align:center}
.dlg-load b{font-size:34px;font-weight:700;letter-spacing:-.02em;line-height:1.1}
.dlg-load s{text-decoration:none;font-size:17px;color:#94A3B8}
.dlg-bar{display:flex;align-items:center;gap:20px;margin-top:20px}
.dlg-bar u{text-decoration:none;flex:1;height:14px;border-radius:7px;background:#E8EDF3;overflow:hidden}
.dlg-bar u em{display:block;width:50%;height:100%;border-radius:7px;background:var(--product);font-style:normal}
.dlg-bar s{text-decoration:none;font-size:26px;font-weight:650;min-width:2.6ch}

.sp{position:relative;transition:box-shadow .16s ease}
.anat.live .sp:hover{box-shadow:0 0 0 2px var(--coral);border-radius:4px;cursor:crosshair}
.anat.live .sp.pin{box-shadow:0 0 0 2px var(--coral)}

.anat-grid,.anat-space,.anat-type{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .25s ease}
.anat-grid{background-image:linear-gradient(to right,rgba(36,96,192,.16) 1px,transparent 1px),linear-gradient(to bottom,rgba(36,96,192,.16) 1px,transparent 1px);background-size:8px 8px;border-radius:14px}
.anat[data-l="grid"] .anat-grid,.anat[data-l="space"] .anat-space,.anat[data-l="type"] .anat-type{opacity:1}
.anat-space u{position:absolute;background:rgba(240,85,61,.17);box-shadow:inset 0 0 0 1px rgba(240,85,61,.45);text-decoration:none;display:grid;place-items:center;font-family:var(--font-mono);font-size:9px;color:var(--coral)}
.anat-type u{position:absolute;text-decoration:none;font-family:var(--font-mono);font-size:9px;letter-spacing:.06em;background:var(--ink);color:#fff;padding:2px 5px;border-radius:3px;white-space:nowrap}

.anat-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:11px 15px;border-top:1.2px solid var(--line-2);background:#fff}
.anat-read{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:11px 15px;border-top:1.4px solid var(--ink);
  font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);background:#fff;min-height:40px}
.anat-read b{font-weight:500;color:var(--ink)}
.anat-read .val{color:var(--coral)}

/* the point of the whole panel: what holds, and what doesn't */
.rules{display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1.4px solid var(--ink);background:#fff}
.rules>div{padding:14px 16px 16px}
.rules>div:first-child{border-right:1.2px solid var(--line-2)}
.rules h6{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 9px;font-weight:500}
.rules li{list-style:none;font-size:12.5px;line-height:1.5;color:var(--ink-2);padding:3px 0 3px 17px;position:relative}
.rules ul{margin:0;padding:0}
.rules .same li::before{content:"";position:absolute;left:1px;top:11px;width:8px;height:2px;background:var(--product)}
.rules .diff li::before{content:"";position:absolute;left:1px;top:8px;width:8px;height:8px;border:1.4px dashed var(--muted);border-radius:50%}
@media(max-width:700px){.rules{grid-template-columns:1fr}.rules>div:first-child{border-right:0;border-bottom:1.2px solid var(--line-2)}}


/* ============================================================
   THE STORY LAYER — five stages, and the decisions inside them
   ============================================================ */

/* ---------- the stage badge that sits on every section inside a stage ---------- */
.stg{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:9px;
  letter-spacing:.16em;text-transform:uppercase;color:var(--muted);
  margin-left:14px;padding-left:14px;border-left:1px solid var(--line-2)}
.stg b{font-weight:500;color:var(--product)}
.stg s{text-decoration:none;opacity:.45}

/* ---------- the decision block: what was tried, what shipped, why ---------- */
.dec{border:1.7px solid var(--ink);border-radius:16px;background:#fff;box-shadow:var(--hard);overflow:hidden;margin-top:clamp(22px,3vw,38px)}
.dec-q{padding:16px 18px;border-bottom:1.4px solid var(--ink);background:#FAFAF7}
.dec-q .k{display:block;font-family:var(--font-mono);font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.dec-q h4{font-family:var(--font-sub);font-weight:800;font-size:clamp(1.1rem,2vw,1.45rem);letter-spacing:-.035em;line-height:1.14;max-width:40ch;margin:0}
.dec-opts{display:grid;grid-template-columns:repeat(var(--decn,3),minmax(0,1fr))}
.dec-opt{border-left:1.2px solid var(--line-2);padding:16px;display:flex;flex-direction:column;gap:12px;transition:background .25s ease}
.dec-opt:first-child{border-left:0}
.dec-opt.win{background:#F4F7FF}
.dec-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.dec-lab{font-family:var(--font-mono);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.dec-call{font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;padding:4px 8px;border-radius:4px;white-space:nowrap}
.dec-call.no{background:#F1F1EE;color:var(--muted)}
.dec-call.yes{background:var(--product);color:#fff}
.dec-opt h5{font-family:var(--font-sub);font-weight:800;font-size:16px;letter-spacing:-.03em;line-height:1.16;margin:0}
.dec-opt p{font-size:12.5px;line-height:1.55;color:var(--ink-2);margin:0}
.dec-opt .why{border-left:2.4px solid var(--line-2);padding-left:11px;margin-top:auto}
.dec-opt.win .why{border-left-color:var(--product)}
.dec-opt .why span{display:block;font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:5px}
.dec-foot{padding:13px 18px;border-top:1.4px solid var(--ink);font-family:var(--font-hand);font-size:18px;line-height:1.45;color:var(--ink-2)}

/* a slot that is honest about being empty */
.todo{color:var(--muted);font-style:italic}
.dec-opt .todo::before{content:"⌁ ";font-style:normal;color:var(--coral)}

/* the device frame each variation sits in */
.dvc{position:relative;border-radius:10px;overflow:hidden;background:#F3F3EF;border:1.4px dashed rgba(17,17,17,.22)}
.dvc.has{border-style:solid;border-color:var(--line-2);background:#fff}
.dvc .slot{border:0;border-radius:0}
.dvc.phone{border-radius:16px}
.dec-opt.win .dvc.has{border-color:var(--product)}

@media(max-width:900px){
  .chap-grid{grid-template-columns:1fr;align-items:start}
  .dec-opts{grid-template-columns:1fr}
  .dec-opt{border-left:0;border-top:1.2px solid var(--line-2)}
  .dec-opt:first-child{border-top:0}
}

/* ============ THE RECEIPT ============ */
.receipt{max-width:430px;margin:clamp(30px,4vw,52px) auto 0;border:1.6px solid var(--ink);border-radius:10px;background:#fff;box-shadow:var(--hard-sm);padding:18px 22px 20px;text-align:left;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-2)}
.receipt h5{font-family:var(--font-sub);font-weight:800;font-size:16px;letter-spacing:-.02em;text-align:center;text-transform:uppercase;margin:0 0 4px}
.receipt .sub{display:block;text-align:center;font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:15px}
.receipt .r{display:flex;justify-content:space-between;gap:14px;padding:5px 0;border-bottom:1px dashed var(--line-2)}
.receipt .r b{font-weight:500;color:var(--ink);text-align:right}
.receipt .tot{display:flex;justify-content:space-between;gap:14px;margin-top:11px;border-top:1.6px solid var(--ink);padding-top:10px;font-size:12px;color:var(--ink)}
.receipt .cut{display:block;margin-top:14px;text-align:center;font-size:8px;letter-spacing:.22em;color:var(--muted)}

/* ============ RESPONSIVE (round 2) ============ */
@media(max-width:980px){
  .tk-grid,.math-grid{grid-template-columns:1fr}
  .tk-deck{border-right:0;border-bottom:1.4px solid var(--ink);max-height:min(46vh,380px)}
  .call-grid{grid-template-columns:1fr}
  .callc .pick{top:12px;right:12px}
}
@media(max-width:980px){
  .figma-btn{width:auto;display:inline-flex;margin-top:12px}
  .figma-note{text-align:left}
}
@media(max-width:700px){
  .math-saved{grid-template-columns:1fr}
  .pn .tip{left:auto;right:calc(100% + 10px);transform:translateY(-50%) translateX(6px)}
  .tools{right:10px;bottom:10px}
  .tool span.txt{display:none}
}

/* ---- auto-save: two versions you can tell apart at a glance ---- */
.save.gone{color:#CBD5E1;font-style:italic;font-size:11.5px}
.save.gone span{border:1.2px dashed #E2E8F0;border-radius:6px;padding:2px 8px}
.save.flash{animation:svflash 1.4s ease}
@keyframes svflash{0%,30%{box-shadow:0 0 0 3px rgba(36,96,192,.35);background:#EEF3FC}100%{box-shadow:0 0 0 0 rgba(36,96,192,0);background:transparent}}
.save{border-radius:7px;padding:2px 8px}
.app-toast.demo{box-shadow:0 0 0 3px var(--coral)}
.sv-cmp{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}
.sv-c{border:1.4px solid var(--line-2);border-radius:10px;padding:10px;background:#fff;display:flex;flex-direction:column;gap:7px;opacity:.55;transition:opacity .25s ease,border-color .25s ease}
.sv-c.on{opacity:1;border-color:var(--ink)}
.sv-c .k{font-family:var(--font-mono);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.sv-c i{font-style:normal;font-size:11px;align-self:flex-start;display:inline-flex;align-items:center;gap:6px}
.sv-toast{background:#1E293B;color:#fff;padding:5px 9px;border-radius:6px}
.sv-line{color:#475569;border:1px solid #E2E8F0;border-radius:6px;padding:4px 8px}
.sv-line s{width:7px;height:7px;border-radius:50%;background:#16A34A}
.sv-c em{font-style:normal;font-size:10.5px;color:var(--ink-2);line-height:1.35}

/* ---- the "before" race bar reads as the bad one ---- */
.race-row.old .race-fill{background:var(--coral)}
.race-row.old .race-band{background:var(--coral);opacity:.28}

/* ---- live Figma embed ---- */
.fembed{position:relative;height:min(68vh,600px);min-height:380px;background:#1E1E1E;border:1.7px solid var(--ink);border-radius:16px;box-shadow:var(--hard);overflow:hidden}
.fembed iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
.fembed-load{position:absolute;inset:0;display:grid;place-items:center;font-family:var(--font-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#9A9A9A;pointer-events:none}
.flist button.whole b i{background:var(--ink)}
.fjump{display:none;margin-top:10px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--product);text-decoration:none}
.fjump.on{display:inline-flex}

/* ---- feedback notes: always readable ---- */
.ow-notes .note,.ow-notes .note.on{opacity:1;filter:none}
.ow-notes .note.on{animation:qpop .5s cubic-bezier(.34,1.5,.64,1)}
@keyframes qpop{0%{transform:rotate(var(--rot,0)) scale(1)}40%{transform:rotate(var(--rot,0)) scale(1.04)}100%{transform:rotate(var(--rot,0)) scale(1)}}

/* ---- no progress rail ---- */
.rail{display:none!important}

/* ---- decision wireframes ---- */
.wf{position:relative;aspect-ratio:16/10;background:#fff;border-radius:9px;overflow:hidden;display:flex;flex-direction:column;font-family:var(--font-body,inherit);border:1.2px solid var(--line-2)}
.dec-opt.win .wf{border-color:var(--product)}
.wf-top{display:flex;align-items:center;gap:6px;height:16%;padding:0 8%;border-bottom:1px solid #EEF0F3;flex:0 0 auto}
.wf-top b{font-size:9px;font-weight:700;color:#1E293B;letter-spacing:-.01em}
.wf-top .r{margin-left:auto;display:flex;align-items:center;gap:5px}
.wf-body{flex:1;padding:5% 8%;display:flex;flex-direction:column;gap:6%;min-height:0}
.wf-foot{height:15%;display:flex;align-items:center;justify-content:space-between;padding:0 8%;border-top:1px solid #EEF0F3;flex:0 0 auto}
.wf-ln{display:block;height:6px;border-radius:3px;background:#E8EBEF}
.wf-fld{display:flex;flex-direction:column;gap:4px}
.wf-fld u{display:block;height:15px;border:1px solid #DDE1E6;border-radius:4px;text-decoration:none}
.wf-btn{font-size:8px;font-weight:600;padding:3px 8px;border-radius:4px;border:1px solid #CBD5E1;color:#475569;background:#fff}
.wf-btn.p{background:#2460C0;border-color:#2460C0;color:#fff}
.wf-hl{outline:1.6px solid var(--coral);outline-offset:2px;border-radius:4px}
.dec-opt.win .wf-hl{outline-color:var(--product)}
.wf-pct{display:flex;align-items:center;gap:6px}
.wf-pct span{flex:1;height:6px;border-radius:3px;background:#E8EBEF;overflow:hidden}
.wf-pct span i{display:block;height:100%;width:62%;background:#94A3B8}
.wf-pct em{font-style:normal;font-size:8px;color:#475569;font-variant-numeric:tabular-nums}
.wf-cnt{font-size:8px;color:#94A3B8}
.wf-step{display:flex;gap:4px}
.wf-step span{flex:1;display:flex;align-items:center;gap:3px;font-size:7px;color:#94A3B8;padding:3px;border-radius:4px;border:1px solid #EEF0F3;white-space:nowrap;overflow:hidden}
.wf-step span i{width:10px;height:10px;border-radius:50%;flex:0 0 10px;display:grid;place-items:center;font-style:normal;font-size:6px;background:#EEF0F3;color:#64748B}
.wf-step span.d i{background:#16A34A;color:#fff}
.wf-step span.n{border-color:#2460C0;color:#1E293B}
.wf-step span.n i{background:#2460C0;color:#fff}
.wf-toast{position:absolute;right:7%;bottom:20%;background:#1E293B;color:#fff;font-size:8px;padding:4px 8px;border-radius:5px}
.wf-saved{display:inline-flex;align-items:center;gap:4px;font-size:7.5px;color:#475569}
.wf-saved s{width:6px;height:6px;border-radius:50%;background:#16A34A}
.wf-warn{font-size:7.5px;color:#B45309;background:#FEF3C7;border-radius:4px;padding:2px 6px}
.wf-tabs{display:flex;gap:3px}
.wf-tabs span{font-size:7px;color:#64748B;border:1px solid #EEF0F3;border-radius:4px;padding:3px 5px;white-space:nowrap}
.wf-tabs span.n{border-color:#1E293B;color:#1E293B}
.wf-cols{display:grid;grid-template-columns:1fr 1fr;gap:8%;flex:1;min-height:0}
.wf-cols>div{display:flex;flex-direction:column;gap:7%;border:1px dashed #E2E8F0;border-radius:5px;padding:7%}
.wf-cols h6,.wf-body h6{font-size:7.5px;font-weight:700;color:#1E293B;margin:0}
.wf-cap{font-size:7px;color:#94A3B8;font-family:var(--font-mono);letter-spacing:.06em;text-transform:uppercase}

/* chatbot windows: real frames, same height */
.cb{flex-basis:calc(clamp(150px,24%,250px) * var(--k,1))}
.cb .slot.filled{background:transparent}
.cb .slot img{object-fit:contain}
.cb{overflow:visible;display:flex;flex-direction:column;gap:10px;border-radius:0}
.cb-lab{position:static;align-self:flex-start}
.cb .slot{box-shadow:0 10px 30px rgba(0,0,0,.35)}

/* creatives: six 4:5 posts, three to a row; one full-width banner */
.cr-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
.li-grid{grid-template-columns:1fr;margin-top:22px}
@media(max-width:700px){.cr-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}}

/* ============ RESPONSIVE (round 3: tablet + phone) ============ */
/* one-column layouts must never be widened by a scrolling child */
@media(max-width:980px){
  .enter-grid,.prob-split,.jgrid,.try-grid,.test-grid,.file-grid,.mob-grid,.det-grid,.back-grid{grid-template-columns:minmax(0,1fr)}
}
/* tablet: the three directions stay side by side, so they read as a comparison */
@media(max-width:900px) and (min-width:701px){
  .dec-opts{grid-template-columns:repeat(var(--decn,3),minmax(0,1fr))}
  .dec-opt{border-left:1.2px solid var(--line-2);border-top:0;padding:13px;gap:10px}
  .dec-opt:first-child{border-left:0}
  .dec-opt h5{font-size:14px}
  .dec-opt p{font-size:12px}
  .dec-top{flex-wrap:wrap;gap:6px}
}
/* tablet: three chat windows in one row */
@media(max-width:1080px) and (min-width:701px){
  .cb{flex-basis:calc(29% * var(--k,1))}
}
/* phone: chat windows become a swipeable row */
@media(max-width:700px){
  .cb-stage{flex-direction:row;justify-content:flex-start;align-items:flex-start;overflow-x:auto;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;padding:20px 16px 22px;gap:14px;scrollbar-width:none}
  .cb-stage::-webkit-scrollbar{display:none}
  .cb{flex:0 0 auto;width:calc(76% * var(--k,1));scroll-snap-align:center}
  .cb-stage.focus .cb,.cb-stage.focus .cb.on{transform:none;opacity:1;filter:none}
  .cb-stage.focus .cb.on .slot{box-shadow:0 0 0 2px var(--yellow),0 10px 30px rgba(0,0,0,.35)}
}
/* phone: stage tag sits under the section number instead of beside it */
@media(max-width:700px){
  .stg{display:flex;margin:7px 0 0;padding:0;border:0}
}
/* phone: the grouping diagram's two cards never overlap */
@media(max-width:700px){
  .grp-box{width:92%}
  .gcard{width:37%;padding:9px 10px}
  .gcard h5{font-size:12.5px}
  .gcard p{font-size:10.5px}
  .gcard.a{left:28%}
  .gcard.b{left:72%}
  .grp-stage.after .gcard.a{left:21%}
}
/* phone: the one-timesheet strip keeps every label visible */
@media(max-width:700px){
  .task-seg{white-space:normal;text-align:center;line-height:1.1;padding:0 3px;font-size:9.5px;letter-spacing:0}
}
/* tablet: a little more air around the decision wireframes and the embed */
@media(max-width:1080px) and (min-width:701px){
  .fembed{height:min(60vh,520px)}
}
@media(max-width:700px){
  .fembed{height:min(62vh,460px);min-height:340px}
  .sv-cmp{grid-template-columns:1fr 1fr}
}

/* ============ HOSTED IN FRAMER ============ */
/* pop-ups and toasts sit on the visitor's screen, not at the top of a very tall page */
html.hosted .lb,html.hosted .pal{position:absolute;inset:auto;left:0;right:0;top:var(--vt,0px);height:var(--vh,100vh)}
html.hosted .lb img{max-height:calc(var(--vh,100vh) * .8)}
html.hosted .pal{padding-top:calc(var(--vh,100vh) * .11)}
html.hosted .toast{position:absolute;bottom:auto;top:min(calc(var(--vt,0px) + var(--vh,100vh) - 76px),calc(var(--dh,100vh) - 76px))}
html.hosted .rail,html.hosted .progress{display:none!important}
html.hosted .prob-l{position:static}
/* let the Framer page's own background show through, so the grids line up */
html.host-bg,html.host-bg body{background:transparent!important}
html.host-bg .grid-bg{display:none}
/* your site's custom cursor is drawn by Framer; hide the arrow in here so there aren't two */
html.host-cursor,html.host-cursor *{cursor:none!important}
</style>
</head>
<body>
<div class="grid-bg"></div>
<div class="progress" id="progress"></div>

<!-- ============ PROGRESS RAIL — completed / current / remaining ============ -->
<nav class="rail" id="rail" aria-label="Your progress through this case study"></nav>

<!-- ============ 01 — THE BRIEF ============ -->
<section id="enter" class="enter" data-hud="The brief">
  <div class="wrap">

    <div class="enter-grid">
      <div class="reveal">
        <h1 class="ptitle">Enterprise<span class="l2">Platform</span></h1>
        <div class="psub">
          <span class="city">iBE.net</span>
          <span class="tag" style="color:var(--muted)">Jun 2025</span>
        </div>
        <p class="lede" style="margin-top:22px">Led the redesign of an enterprise platform during its rebranding, modernising the desktop and mobile experience while preserving familiar workflows.</p>
        <p class="body" style="margin-top:14px">Timesheets, expenses, dashboards and Kanban boards had each been built on their own. People lost their place, lost their work, and typed the same project name in three different places. The answer was three focused changes, not a rebuild.</p>

        <div class="spec-bar">
          <div><span class="spec-k">Role</span><span class="spec-v">Product Designer</span></div>
          <div><span class="spec-k">Timeline</span><span class="spec-v">12 months</span></div>
          <div><span class="spec-k">Team</span><span class="spec-v">1 designer</span></div>
          <div><span class="spec-k">Platform</span><span class="spec-v">Web and mobile app</span></div>
        </div>

        <div class="spec-tags">
          <span>SaaS</span>
          <span>Transformation</span>
          <span>Web app</span>
          <span>Mobile app</span>
          <span>Icons</span>
          <span>AI chatbot</span>
          <span>Creatives</span>
        </div>

        <p class="spec-credit"><b>Shipped</b> a progress indicator &nbsp;·&nbsp; auto-save with a live status &nbsp;·&nbsp; screens grouped the way people think</p>

        <div class="scrollcue">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v15M2 12l5 5 5-5"/></svg>
          Scroll to start.
        </div>
      </div>

      <div class="enter-r reveal">
        <span class="frame-badge"><i class="fi pb"></i>Frame 01 — the line that did the most work</span>
        <span class="mini-read">Change the hours. <b>Watch the top-right corner.</b></span>
        <div class="app mini-ts" id="heroApp">
          <div class="app-top">
            <span class="app-mark" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="1.6"><circle cx="6" cy="6" r="4.6"/><path d="M6 3.4V6l1.8 1.2" stroke-linecap="round"/></svg></span>
            <span class="app-title">Timesheet<small>This week</small></span>
            <span class="save idle" id="heroSave" aria-live="polite"><i class="sdot"></i><span>No changes yet</span></span>
          </div>
          <div class="pi" aria-label="Progress">
            <div class="pi-step done"><span class="pi-dot">✓</span><span class="pi-lab">Project</span></div>
            <div class="pi-step now"><span class="pi-dot">2</span><span class="pi-lab">Hours</span></div>
            <div class="pi-step"><span class="pi-dot">3</span><span class="pi-lab">Notes</span></div>
            <div class="pi-step"><span class="pi-dot">4</span><span class="pi-lab">Approval</span></div>
          </div>
          <div class="app-body">
            <div class="mini-row">
              <span class="lbl"><b>Hours today</b>Client portal · design</span>
              <span class="stepper" role="group" aria-label="Hours today">
                <button id="hMinus" aria-label="Remove half an hour">−</button>
                <output id="hVal" aria-live="polite">7.5</output>
                <button id="hPlus" aria-label="Add half an hour">+</button>
              </span>
            </div>
          </div>
        </div>
        <div class="note n-cream enter-note" style="--rot:2deg">
          <span class="n-label">Invisible design</span>
          <p>the system was auto-saving either way. nobody could see it.</p>
          <span class="peek">so: make it visible.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ STAGE 01 — EMPATHISE ============ -->

<section id="problem" data-stage="01|Empathise" class="sec" data-hud="The old way">
  <div class="wrap">
    <span class="eyebrow">02 — The problem</span>
    <div class="prob-split">
      <div class="prob-l">
        <h2 class="sec-title" style="margin-top:12px">Is this the last screen? It never was.</h2>
        <p class="body" style="margin-top:16px">People at iBE.net were handling dozens of tasks, timesheets and expense entries every day. Each one meant clicking through disconnected screens, re-entering the same information, and hoping the session didn't time out first. Nothing told you where you stood in a workflow, and auto-save couldn't be trusted.</p>
        <p class="lede">Log one timesheet the old way. The session clock is real.</p>
        <div class="counters" aria-live="polite">
          <div><b id="cScreens">0</b><span>Screens so far</span></div>
          <div><b id="cTyped">0</b><span>Project name typed</span></div>
          <div><b id="cLost">0</b><span>Entries lost</span></div>
        </div>
      </div>

      <div>
        <div class="ow-wrap">
          <div class="ow" id="ow">
            <div class="ow-bar"><span class="ow-dots"><i></i><i></i><i></i></span><b>Timesheet</b><span class="ow-sess" id="owSess">Session <b id="owClock">1:15</b></span></div>
            <div class="ow-crumb">Screen <b id="owN">1</b> of ?</div>
            <div class="ow-body" id="owBody"></div>
            <div class="ow-foot">
              <button class="ow-btn" id="owBack">Back</button>
              <span class="ow-save">Draft status unknown</span>
              <button class="ow-btn" id="owNext">Next</button>
            </div>
            <div class="ow-over" id="owOver" role="alertdialog" aria-live="assertive"></div>
            <div class="ow-start" id="owStart">
              <div><p>Log one day's hours. It should take a minute.</p><button class="btn" id="owGo">Start the old flow</button></div>
            </div>
          </div>
          <p class="recon">Reconstructed from support tickets and user feedback — not the original screens</p>
        </div>

        <div class="ow-notes">
          <div class="note n-cream" id="q1" style="--rot:-2deg">
            <span class="n-label">User feedback</span>
            <p>"I can never tell if I've actually finished entering my hours or if there's another screen coming."</p>
          </div>
          <div class="note n-blue" id="q2" style="--rot:1.5deg">
            <span class="n-label">User feedback</span>
            <p>"Why do I have to enter the project name in three different places?"</p>
          </div>
          <div class="note n-cream" id="q3" style="--rot:-1deg">
            <span class="n-label">User feedback</span>
            <p>"I've had to redo the same expense report more than once this month."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="evidence" data-stage="01|Empathise" class="sec" data-hud="The evidence">
  <div class="wrap">
    <span class="eyebrow">04 — The evidence</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Nine tickets. Three piles.</h2>
        <p class="lede">Drag a ticket onto a pile, or tap the ticket and then the pile.</p>
      </div>
      <p class="body">No direct access to end users meant the evidence arrived second-hand: surveys, interviews with stakeholders and account managers, and months of support tickets. Sort a handful yourself and watch three piles fill up.</p>
    </div>

    <div class="stage reveal">
      <div class="stage-bar">
        <span class="frame-badge"><i class="fi co"></i>Illustrative tickets, written from the feedback patterns</span>
        <span class="lab"><b id="tkDone">0</b> of 9 filed</span>
      </div>
      <div class="tk-grid">
        <div class="tk-deck" id="tkDeck"></div>
        <div class="tk-buckets" id="tkBuckets">
          <button class="tk-b" data-b="progress"><span><span class="k">Pile 01</span><h5>No sense of progress</h5></span><span class="c">0</span></button>
          <button class="tk-b" data-b="safety"><span><span class="k">Pile 02</span><h5>No safety net</h5></span><span class="c">0</span></button>
          <button class="tk-b" data-b="structure"><span><span class="k">Pile 03</span><h5>Clunky information architecture</h5></span><span class="c">0</span></button>
        </div>
      </div>
      <div class="tk-foot">
        <span class="msg" id="tkMsg">Pick a ticket, then pick the pile it belongs in.</span>
        <span style="display:flex;gap:8px"><button class="mini" id="tkAuto">File them for me</button><button class="mini" id="tkReset">Start over</button></span>
      </div>
    </div>
  </div>
</section>

<!-- ============ STAGE 02 — DEFINE ============ -->

<section id="journey" data-stage="02|Define" class="sec" data-hud="The whole journey">
  <div class="wrap">
    <span class="eyebrow">03 — The real problem</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Four modules, built one at a time. Never stitched together.</h2>
        <p class="lede">Flip the map and watch what changes when you look at it end to end.</p>
      </div>
      <p class="body">The underlying issue wasn't the visuals. Dashboards, timesheets, expenses and Kanban boards had each been built independently over the company's history, and no one had ever looked at the full journey from one end to the other.</p>
    </div>

    <div class="jgrid">
      <div class="stage jmap-wrap built reveal" id="jWrap">
        <div class="stage-bar">
          <span class="frame-badge"><i class="fi"></i>Illustration — not the original IA</span>
          <div class="seg" role="group" aria-label="View">
            <button class="on" data-j="built" aria-pressed="true">As built</button>
            <button data-j="flow" aria-pressed="false">End to end</button>
          </div>
        </div>
        <div class="jmap built" id="jMap">
          <span class="jm-line"></span>
          <span class="jm-token">Project · entered once</span>
          <div class="jm-card" data-nav="top" style="--bx:20%;--by:30%;--br:-4deg;--fx:14%">
            <div class="jm-nav"><i></i><i></i><i></i></div>
            <div class="jm-body"><span class="jm-rail"></span><div class="jm-main"><h5>Dashboards</h5><i></i><i></i></div></div>
            <div class="jm-foot"></div>
          </div>
          <div class="jm-card" data-nav="rail" style="--bx:44%;--by:70%;--br:3deg;--fx:38%">
            <span class="jm-dup">Project name</span>
            <div class="jm-nav"><i></i><i></i><i></i></div>
            <div class="jm-body"><span class="jm-rail"></span><div class="jm-main"><h5>Timesheets</h5><i></i><i></i></div></div>
            <div class="jm-foot"></div>
          </div>
          <div class="jm-card" data-nav="bottom" style="--bx:68%;--by:27%;--br:-2deg;--fx:62%">
            <span class="jm-dup">Project name</span>
            <div class="jm-nav"><i></i><i></i><i></i></div>
            <div class="jm-body"><span class="jm-rail"></span><div class="jm-main"><h5>Expenses</h5><i></i><i></i></div></div>
            <div class="jm-foot"></div>
          </div>
          <div class="jm-card" data-nav="crumb" style="--bx:84%;--by:69%;--br:5deg;--fx:86%">
            <span class="jm-dup">Project name</span>
            <div class="jm-nav"><i></i><i></i><i></i></div>
            <div class="jm-body"><span class="jm-rail"></span><div class="jm-main"><h5>Kanban boards</h5><i></i><i></i></div></div>
            <div class="jm-foot"></div>
          </div>
          <span class="jm-lab" id="jLab">Four navigations, four sets of habits</span>
        </div>
        <div class="task">
          <div class="task-k"><span>One timesheet, as team leads describe it</span><span id="taskState">Chopped into fragments</span></div>
          <div class="task-row">
            <span class="task-seg" style="--cx:54%;--cw:21%;--cy:-3px;--cr:-2deg;--fx:0%;--fw:25%">Hours worked</span>
            <span class="task-seg" style="--cx:1%;--cw:24%;--cy:5px;--cr:1.5deg;--fx:25%;--fw:25%">Project context</span>
            <span class="task-seg" style="--cx:78%;--cw:21%;--cy:-1px;--cr:-1deg;--fx:50%;--fw:25%">Notes</span>
            <span class="task-seg" style="--cx:28%;--cw:22%;--cy:4px;--cr:2deg;--fx:75%;--fw:25%">Approvals</span>
          </div>
        </div>
      </div>

      <div class="jside">
        <div class="readbox" aria-live="polite">
          <h5 id="jH">As built</h5>
          <p id="jP">Each module was built on its own. What worked one way on the dashboard behaved differently on the Kanban board, and the same details had to be typed again in each place.</p>
        </div>
        <p class="hand" style="max-width:24ch">the screens were grouped the way the database was. people grouped their work differently.</p>
        <p class="body" style="font-size:12.5px;max-width:34ch">Team leads described a timesheet or expense report as one continuous task. The interface chopped it into arbitrary pieces spread across disconnected screens.</p>
      </div>
    </div>
  </div>
</section>

<section id="constraints" data-stage="02|Define" class="sec" data-hud="The constraints">
  <div class="wrap">
    <span class="eyebrow">04 — What I had to work with</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">No users to watch, an unfinished design system, and a deadline.</h2>
        <p class="lede">Tap a card to see what it meant in practice.</p>
      </div>
      <p class="body">These three shaped everything that came after. They are why the answer is three targeted changes rather than a reimagined platform.</p>
    </div>

    <div class="cons-grid">
      <button class="con reveal" aria-pressed="false">
        <span class="con-in">
          <span class="con-f">
            <span class="t">Research</span>
            <h4>No direct access to end users</h4>
            <p>Enterprise data privacy agreements ruled out shadowing client teams or running live usability tests with them.</p>
            <span class="flip"><i>↻</i>What I had instead</span>
          </span>
          <span class="con-b">
            <span class="t">What I had instead</span>
            <ul><li>User surveys</li><li>Interviews with internal stakeholders and account managers</li><li>Months of support tickets</li></ul>
            <p>Not ideal, but enough to identify patterns.</p>
          </span>
        </span>
      </button>
      <button class="con reveal" aria-pressed="false">
        <span class="con-in">
          <span class="con-f">
            <span class="t">Design system</span>
            <h4>A rigid system that wasn't finished yet</h4>
            <p>The ongoing brand refresh meant designing inside an evolving component library that wasn't fully finalised.</p>
            <span class="flip"><i>↻</i>What it meant</span>
          </span>
          <span class="con-b">
            <span class="t">What it meant</span>
            <ul><li>Custom one-off solutions weren't an option</li><li>Every change had to fit existing and emerging patterns</li></ul>
          </span>
        </span>
      </button>
      <button class="con reveal" aria-pressed="false">
        <span class="con-in">
          <span class="con-f">
            <span class="t">Time</span>
            <h4>A tight deadline</h4>
            <p>Leadership wanted improvements shipped fast, alongside the broader brand rollout.</p>
            <span class="flip"><i>↻</i>What it meant</span>
          </span>
          <span class="con-b">
            <span class="t">What it meant</span>
            <ul><li>A complete rebuild wasn't realistic</li><li>Pick the changes with the biggest impact and the least structural upheaval</li></ul>
          </span>
        </span>
      </button>
    </div>
    <div class="cons-foot">
      <p class="hand" style="max-width:30ch">instead of reimagining the whole system, find the few changes that carry the most weight.</p>
      <button class="mini" id="conAll">Flip all three</button>
    </div>
  </div>
</section>

<section id="fixes" data-stage="02|Define" class="sec" data-hud="Three fixes">
  <div class="wrap">
    <span class="eyebrow">05 — Finding the fix</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Three problems stood out. Each one got one fix.</h2>
        <p class="lede">Flip each card from what I found to what shipped.</p>
      </div>
      <p class="body">I mapped the entire multi-screen flow: not just the UI, but how data moved between modules, where it was duplicated, and where people got stuck. Then I went through the support tickets and user feedback.</p>
    </div>

    <div class="fx-grid">
      <div class="fx-card reveal">
        <div class="fx-top"><span class="fx-state" data-p="Problem" data-f="Fix">Problem</span><span class="fx-n">Progress</span></div>
        <div class="fx-vis" aria-hidden="true">
          <div class="v-pi"><i class="d"></i><s class="d"></s><i class="d"></i><s></s><i class="c"></i><s></s><i></i></div>
          <span class="v-q">?</span>
        </div>
        <div class="fx-txt">
          <div class="prob"><h4>No sense of progress</h4><p>People couldn't tell where they were in a workflow, or what was left to complete.</p></div>
          <div class="fix"><h4>A progress indicator</h4><p>Completed sections, the current section, and what remains. Always visible, always clear.</p></div>
        </div>
        <button class="mini fx-btn" aria-pressed="false">Show the fix</button>
      </div>
      <div class="fx-card reveal">
        <div class="fx-top"><span class="fx-state">Problem</span><span class="fx-n">Safety</span></div>
        <div class="fx-vis" aria-hidden="true">
          <div class="v-save"><div class="ln"></div><div class="ln s"></div><div class="ln"></div><div class="st"><i></i><span class="vs-t">Did that save?</span></div></div>
        </div>
        <div class="fx-txt">
          <div class="prob"><h4>No safety net</h4><p>One wrong click, and careful work vanished.</p></div>
          <div class="fix"><h4>Auto-save with real feedback</h4><p>Not just saving in the background, but showing people exactly when their work was protected.</p></div>
        </div>
        <button class="mini fx-btn" aria-pressed="false">Show the fix</button>
      </div>
      <div class="fx-card reveal">
        <div class="fx-top"><span class="fx-state">Problem</span><span class="fx-n">Structure</span></div>
        <div class="fx-vis" aria-hidden="true">
          <div class="v-ia"><b>Hours</b><b>Project</b><b>Notes</b><b>Approval</b></div>
        </div>
        <div class="fx-txt">
          <div class="prob"><h4>Clunky information architecture</h4><p>Screens were organised by how the database was structured, not by how people thought about their work.</p></div>
          <div class="fix"><h4>Consolidated screens</h4><p>Related information grouped the way people actually think about it, rather than the way the data model happened to be.</p></div>
        </div>
        <button class="mini fx-btn" aria-pressed="false">Show the fix</button>
      </div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-top:14px"><button class="mini" id="fxAll">Flip all three</button></div>

    <div class="turn reveal">
      <h3>All achievable within our constraints. No backend overhaul required.</h3>
      <p class="hand">the whole strategy, in two sentences.</p>
    </div>
  </div>
</section>

<!-- ============ STAGE 03 — IDEATE ============ -->

<section id="call" data-stage="03|Ideate" class="sec" data-hud="The call">
  <div class="wrap">
    <span class="eyebrow">06 — The call</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Twelve months, no users to watch, a system still moving. What do you ship?</h2>
        <p class="lede">Pick one. The constraints will tell you how it went.</p>
      </div>
      <p class="body">This was the actual fork in the road. Two of these were tempting, and one of them is what I wanted to do when I started.</p>
    </div>

    <div class="call-grid" id="callGrid">
      <button class="callc" data-c="rebuild">
        <span class="pick">What I wanted</span>
        <span class="t">Option A</span>
        <h4>Rebuild the platform into one unified experience</h4>
        <p>Redraw the whole thing: one navigation, one data model in the interface, every module rethought together.</p>
        <span class="verdict">
          <span class="vrow no"><i>✕</i>Deadline — a complete rebuild wasn't realistic alongside the brand rollout.</span>
          <span class="vrow no"><i>✕</i>Design system — a rebuild needs patterns that didn't exist yet.</span>
          <span class="vrow mid"><i>~</i>Research — the bigger the change, the more user validation it needs. I couldn't get it directly.</span>
        </span>
      </button>
      <button class="callc" data-c="focus">
        <span class="pick">What I shipped</span>
        <span class="t">Option B</span>
        <h4>Three focused changes inside the existing structure</h4>
        <p>Progress visibility, auto-save with real feedback, and screens regrouped around the task.</p>
        <span class="verdict">
          <span class="vrow"><i>✓</i>Deadline — no backend overhaul required.</span>
          <span class="vrow"><i>✓</i>Design system — built from existing and emerging patterns.</span>
          <span class="vrow"><i>✓</i>Research — every change traces back to a pattern in the tickets.</span>
        </span>
      </button>
      <button class="callc" data-c="paint">
        <span class="pick">Tempting</span>
        <span class="t">Option C</span>
        <h4>A visual refresh to match the new brand</h4>
        <p>New colours, new type, new components. Same flows underneath.</p>
        <span class="verdict">
          <span class="vrow"><i>✓</i>Deadline — fast, and it ships with the rebrand.</span>
          <span class="vrow"><i>✓</i>Design system — it is the design system.</span>
          <span class="vrow no"><i>✕</i>Research — all three problems in the tickets survive it untouched.</span>
        </span>
      </button>
    </div>

    <div class="call-out" id="callOut" aria-live="polite">
      <h5>Make a call</h5>
      <p>Pick an option above. Each one gets checked against the three constraints from the last section.</p>
    </div>
  </div>
</section>

<!-- ============ IDEATE — THE VARIATIONS ============ -->
<section id="explore" data-stage="03|Ideate" class="sec" data-hud="What got killed">
  <div class="wrap">
    <span class="eyebrow">00 — The variations</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Three fixes. Nine directions. Six of them died.</h2>
        <p class="lede">Every card below is something I drew. Only the blue one shipped.</p>
      </div>
      <p class="body">The strategic call above decided <em>how much</em> to change. These decided what each
      change actually looked like — and two of the three only resolved after someone else looked at them.</p>
    </div>
    <div id="decs"></div>
  </div>
</section>

<section id="chatbot" data-stage="03|Ideate" class="sec" data-hud="AI chatbot">
  <div class="wrap">
    <span class="eyebrow">13 — AI chatbot</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Three directions for an in-product assistant.</h2>
        <p class="lede">Click one to bring it forward. Click it again to compare all three.</p>
      </div>
      <p class="body">Explored in the same file: three variations of the assistant's chat window, side by side.</p>
    </div>
    <div class="cb-stage reveal" id="cbStage" style="margin-top:clamp(22px,3vw,38px)"></div>
    <div class="cb-ctl"><div class="chips" id="cbChips"></div><span class="lab" id="cbRead">Comparing all three</span></div>

    <div class="cbot reveal">
      <div class="cbot-h"><span class="dot"></span>Assistant<span class="lab">Scripted prototype</span></div>
      <div class="cbot-log" id="cbotLog"></div>
      <div class="cbot-f" id="cbotAsk"></div>
    </div>

  </div>
</section>

<!-- ============ STAGE 04 — PROTOTYPE ============ -->

<section id="kit" data-stage="04|Prototype" class="sec" data-hud="The kit">
  <div class="wrap">
    <span class="eyebrow">09 — The kit</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Everything above is built from six pieces.</h2>
        <p class="lede">Put them into any state. Nothing custom.</p>
      </div>
      <p class="body">Custom one-off solutions weren't an option, so each fix had to be assembled from components the system already had, or ones it was about to get. These are rebuilt in code for this page so you can poke at every state.</p>
    </div>

    <div class="kit-ctl">
      <div class="seg" role="group" aria-label="Component state">
        <button data-st="s-hover" aria-pressed="false">Hover</button>
        <button data-st="s-focus" aria-pressed="false">Focus</button>
        <button data-st="s-error" aria-pressed="false">Error</button>
        <button data-st="s-disabled" aria-pressed="false">Disabled</button>
      </div>
    </div>

    <div class="kit" id="kitBox">
      <div class="kc">
        <div class="kc-h"><b>Buttons</b><span id="kSt1">Default</span></div>
        <div class="kc-b" style="gap:10px;grid-auto-flow:column">
          <button class="abtn pri" type="button">Continue</button>
          <button class="abtn" type="button">Back</button>
        </div>
        <div class="kc-f"><span>One primary per screen. The secondary never competes with it.</span></div>
      </div>

      <div class="kc">
        <div class="kc-h"><b>Text field</b><span id="kSt2">Default</span></div>
        <div class="kc-b">
          <div class="fld" style="width:100%">
            <label for="kIn">Project</label>
            <input id="kIn" value="Client portal">
            <span class="hint">Set once, carried through the flow.</span>
            <span class="err">Choose a project to continue.</span>
          </div>
        </div>
        <div class="kc-f"><span>Label, hint, error. Same three parts everywhere.</span></div>
      </div>

      <div class="kc">
        <div class="kc-h"><b>Progress indicator</b><span>Fix 01</span></div>
        <div class="kc-b">
          <div class="pi" style="width:100%">
            <div class="pi-step done"><span class="pi-dot">✓</span><span class="pi-lab">Done</span></div>
            <div class="pi-step now"><span class="pi-dot">2</span><span class="pi-lab">Here</span></div>
            <div class="pi-step"><span class="pi-dot">3</span><span class="pi-lab">Left</span></div>
          </div>
        </div>
        <div class="kc-f"><span>Completed, current, remaining.</span><button class="jump" data-to="#try">See it running</button></div>
      </div>

      <div class="kc">
        <div class="kc-h"><b>Save status</b><span>Fix 02</span></div>
        <div class="kc-b">
          <span class="save" id="kSave" style="margin:0"><i class="sdot"></i><span>Last saved <b>2:54 PM</b></span><em>· just now</em></span>
        </div>
        <div class="kc-f"><span>The line that changed how the whole thing felt.</span><button class="jump" data-to="#try">Switch versions</button></div>
      </div>

      <div class="kc">
        <div class="kc-h"><b>Stepper</b><span>Hours</span></div>
        <div class="kc-b">
          <span class="stepper" role="group" aria-label="Hours">
            <button id="kMinus" type="button">−</button><output id="kVal">7.5</output><button id="kPlus" type="button">+</button>
          </span>
        </div>
        <div class="kc-f"><span>Half-hour increments, because that's how people log time.</span></div>
      </div>

      <div class="kc">
        <div class="kc-h"><b>Dialog</b><span>Popup</span></div>
        <div class="kc-b" style="padding:14px">
          <div style="width:100%;border:1px solid #E2E8F0;border-radius:10px;background:#fff;box-shadow:0 8px 24px rgba(15,23,42,.1);overflow:hidden">
            <div style="padding:12px 14px 4px;font-size:13.5px;font-weight:650">Submit this timesheet?</div>
            <div style="padding:0 14px 12px;font-size:12.5px;color:#64748B">It goes to your approver. You can still edit it until they open it.</div>
            <div style="display:flex;gap:8px;justify-content:flex-end;padding:10px 14px;border-top:1px solid #EEF2F7"><button class="abtn" type="button">Cancel</button><button class="abtn pri" type="button">Submit</button></div>
          </div>
        </div>
        <div class="kc-f"><span>Same dialog shell for every confirmation in the product.</span><button class="jump" data-to="#details">See the real ones</button></div>
      </div>
    </div>

    <div class="kit-note">
      <p class="hand" style="max-width:34ch">every fix above is these six pieces, rearranged.</p>
      <p class="body" style="font-size:12.5px;max-width:40ch">Rebuilt in code for this page. The shipped components live in the product's own library.</p>
    </div>
  </div>
</section>

<section id="try" data-stage="04|Prototype" class="sec" data-hud="Try the fix">
  <div class="wrap">
    <span class="eyebrow">06 — The fix, running</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Same timesheet. Now it tells you where you are.</h2>
        <p class="lede">Fill it in. Switch the auto-save version. Close the tab on purpose.</p>
      </div>
      <p class="body">A working model of the three fixes together: the progress indicator, auto-save that says so, and one set of screens grouped around the task. It's simplified, because the point is how it behaves rather than every field in production.</p>
    </div>

    <div class="try-grid">
      <div class="app try-app reveal" id="tryApp">
        <div class="app-top">
          <span class="app-mark" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="1.6"><circle cx="6" cy="6" r="4.6"/><path d="M6 3.4V6l1.8 1.2" stroke-linecap="round"/></svg></span>
          <span class="app-title">Timesheet<small>This week</small></span>
          <span class="save idle" id="trySave" aria-live="polite"><i class="sdot"></i><span>No changes yet</span></span>
        </div>
        <div class="restored" id="tryRestored" role="status">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#15803D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.4 5.8 10 11 4"/></svg>
          <span id="tryRestoredT">Restored. Everything is here.</span>
        </div>
        <div class="pi" id="tryPi" role="list" aria-label="Timesheet progress"></div>
        <div class="app-body" id="tryBody"></div>
        <div class="app-foot">
          <button class="abtn" id="tryBack">Back</button>
          <span style="font-size:12px;color:#64748B" id="tryStepLab">Section 1 of 4</span>
          <button class="abtn pri" id="tryNext">Continue</button>
        </div>
        <div class="app-toast" id="tryToast">Saved</div>
        <div class="closed" id="tryClosed"><div><b>Tab closed</b>Reopening the timesheet…</div></div>
      </div>

      <div class="try-side">
        <div class="ctl">
          <span>Auto-save feedback</span>
          <div class="seg blue" role="group" aria-label="Auto-save version">
            <button data-sv="v1" aria-pressed="false">First version</button>
            <button data-sv="v2" class="on" aria-pressed="true">What shipped</button>
          </div>
          <p id="svNote">A persistent "Last saved [time]" that updates live. Small tweak, massive difference in confidence.</p>
          <div class="sv-cmp" aria-hidden="true">
            <div class="sv-c v1"><span class="k">First version</span><i class="sv-toast">Saved</i><em>Bottom corner · gone in a second</em></div>
            <div class="sv-c v2"><span class="k">What shipped</span><i class="sv-line"><s></s>Last saved 10:42</i><em>Header · stays on screen</em></div>
          </div>
        </div>
        <div class="ctl">
          <span>The misclick</span>
          <button class="mini" id="tryKill">Close the tab by accident</button>
          <p id="killNote">In the old flow, this was where careful work vanished.</p>
        </div>
        <div class="panel">
          <div class="panel-head"><b>Your two runs</b><span id="runState">Waiting</span></div>
          <div class="runs" style="border-top:0">
            <div class="old"><span class="k">Old flow</span><b id="rOldT">—</b><em id="rOldM">Try section 02 first</em></div>
            <div class="new"><span class="k">New flow</span><b id="rNewT">—</b><em id="rNewM">Send this one for approval</em></div>
          </div>
          <div class="runs-foot">Your clicks and seconds on this page, not the study data. That's in section <span data-ref="results">08</span>.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="file" data-stage="04|Prototype" class="sec" data-hud="The file">
  <div class="wrap">
    <span class="eyebrow">09 — The file</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Twelve months of work, laid out the way it lives in Figma.</h2>
        <p class="lede">The real file, live. Pick a frame on the right and the file flies to it.</p>
      </div>
      <p class="body">The web app redesign, the mobile app, the icon set, popups, handoff specs, chatbot explorations and creatives. Every frame below opens as its own section.</p>
    </div>
    <div class="file-grid">
      <div class="fembed reveal" id="fcan">
        <span class="fembed-load">Loading the live file…</span>
        <iframe id="figFrame" title="Enterprise Platform — live Figma file" loading="lazy" allowfullscreen></iframe>
      </div>
      <div>
        <div class="flist" id="flist"></div>
        <a class="fjump" id="fjump" href="#">Read this section →</a>
        <a class="btn figma-btn" id="figmaLink" href="#" target="_blank" rel="noopener noreferrer">
          <svg width="13" height="19" viewBox="0 0 38 57" aria-hidden="true"><path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/><path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>
          Open the file in Figma
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2h6v6M10 2 3 9"/></svg>
        </a>
        <span class="figma-note lab" id="figmaNote">Opens the working file in a new tab</span>
      </div>
    </div>
  </div>
</section>

<section id="web" data-stage="04|Prototype" class="sec" data-hud="Web app">
  <div class="wrap">
    <span class="eyebrow">10 — Web app</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Old on the left, new on the right. Drag the line.</h2>
        <p class="lede">Pick a screen, then pull the handle across it.</p>
      </div>
      <p class="body">The desktop app, modernised during the rebrand while keeping the workflows people already knew by heart.</p>
    </div>
    <div class="web-ctl" style="margin-top:clamp(22px,3vw,38px)">
      <div class="chips" id="webChips" role="group" aria-label="Screen"></div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <button class="mini" id="pinBtn" aria-pressed="false">Show annotations</button>
      <div class="seg" role="group" aria-label="View">
        <button data-w="old" aria-pressed="false">Old</button>
        <button data-w="split" class="on" aria-pressed="true">Split</button>
        <button data-w="new" aria-pressed="false">New</button>
      </div></div>
    </div>
    <div class="browser cmpb reveal">
      <div class="br-bar"><span class="dots"><i></i><i></i><i></i></span><span class="br-url" id="webUrl">Web app / Screen 01</span></div>
      <div class="cmp" id="cmp" style="--x:50%">
        <div id="cmpOld"></div>
        <div class="cmp-new" id="cmpNew"><div id="cmpNewImg"></div><div class="pinwrap off" id="pinwrap"></div></div>
        <span class="cmp-tag o">Old</span><span class="cmp-tag n">New</span>
        <div class="cmp-h"><button class="cmp-k" id="cmpK" role="slider" aria-label="Compare old and new" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="#111" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2 1 6l4 4M13 2l4 4-4 4"/></svg></button></div>
      </div>
    </div>
    <span class="lab" style="display:block;margin-top:28px">More of the new web app</span>
    <div class="web-more" id="webMore"></div>
  </div>
</section>

<section id="mobile" data-stage="04|Prototype" class="sec" data-hud="Mobile app">
  <div class="wrap">
    <span class="eyebrow">11 — Mobile app</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">The mobile app, one module at a time.</h2>
        <p class="lede">Pick a module, then flick through its screens.</p>
      </div>
      <p class="body">Home, timesheet, expenses, absences and approvals, redesigned for the phone alongside the web app.</p>
    </div>
    <div class="mob-grid">
      <div class="phone-wrap reveal">
        <div class="phone" id="phone" tabindex="0" aria-label="Phone preview. Use the arrow keys to change screens.">
          <div class="phone-notch"></div>
          <div class="phone-sc" id="phoneSc"></div>
        </div>
        <div class="phone-nav">
          <button class="rnd" id="phPrev" aria-label="Previous screen"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#111" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2 4 7l5 5"/></svg></button>
          <span class="phone-count" id="phCount" aria-live="polite"><b>Home Page</b> · 1 of 1</span>
          <button class="mini" id="phPlay" style="margin-left:4px">Play</button>
          <button class="rnd" id="phNext" aria-label="Next screen"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#111" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m5 2 5 5-5 5"/></svg></button>
        </div>
      </div>
      <div>
        <div class="mods" id="mods" role="tablist" aria-label="Modules"></div>
        <div class="film" id="film" aria-label="Screens in this module"></div>
        <p class="mod-note" id="modNote"></p>
      </div>
    </div>
  </div>
</section>

<section id="details" data-stage="04|Prototype" class="sec" data-hud="The small parts">
  <div class="wrap">
    <span class="eyebrow">12 — The small parts</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">The design system was still being built. Nothing could be a one-off.</h2>
        <p class="lede">Switch between two dialogs that share almost no content. Watch what stays put.</p>
      </div>
      <p class="body">This is where that constraint from section 05 actually bites. With the component library unfinished, a dialog couldn't be a layout to copy — it had to be a set of rules loose enough to hold a six-field form and a progress bar without either one looking foreign. Both are rebuilt in code below, so every measurement is the real thing rather than a number typed onto a screenshot.</p>
    </div>

    <div class="ic-head">
      <span class="lab">Icon set</span>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <div class="seg" role="group" aria-label="Keyline grid"><button data-k="on" class="on" aria-pressed="true">Grid on</button><button data-k="off" aria-pressed="false">Grid off</button></div>
        <div class="seg" role="group" aria-label="Icon size"><button data-s="s" aria-pressed="false">Small</button><button data-s="m" class="on" aria-pressed="true">Medium</button><button data-s="l" aria-pressed="false">Large</button></div>
      </div>
    </div>
    <div class="ic-wrap">
      <div class="ic-grid" id="icGrid"></div>
      <div class="ic-insp" id="icInsp">
        <div class="big"><div id="icBig"></div><span class="ov"></span></div>
        <div>
          <div class="prow"><span class="k">Icon</span><span class="v" id="icName">—</span></div>
          <div class="prow"><span class="k">Position</span><span class="v" id="icPos">—</span></div>
          <div class="prow"><span class="k">Format</span><span class="v" id="icFmt">SVG · 24 × 24 artboard</span></div>
          <div class="prow"><span class="k">Overlay</span><span class="v">Reference grid, not the source keylines</span></div>
        </div>
      </div>
    </div>

    <div class="det-grid">
      <div class="stage reveal">
        <div class="stage-bar"><span class="frame-badge"><i class="fi"></i>Popups</span><div class="chips" id="popChips"></div></div>
        <div class="pop-frame" id="popFrame">
          <div id="popBase"></div>
          <div class="pop-scrim" id="popScrim"><div class="pop-modal" id="popModal"></div></div>
        </div>
        <div class="pop-ctl"><span class="lab" id="popLab">Popup 1 · closed</span><button class="mini" id="popBtn">Open the popup</button></div>
      </div>
      <div class="stage reveal">
        <div class="stage-bar">
          <span class="frame-badge"><i class="fi co"></i>Two dialogs, one set of rules</span>
          <div class="chips" id="anatPick" role="group" aria-label="Dialog">
            <button class="chipx on" data-d="form">Person Quick Create</button>
            <button class="chipx" data-d="load">Loading document</button>
          </div>
        </div>

        <div class="anat live" id="anat" data-l="none">
          <div class="anat-fit"><div class="anat-scale" id="anatScale">

            <div class="dlg" id="dlg-form">
              <div class="dlg-h sp" data-pad data-n="Header band" data-x="68 tall, 28 inset">
                <b class="sp" data-n="Dialog title" data-t="21 / 700">Person Quick Create</b>
                <span class="sp" data-n="Close">&times;</span>
              </div>
              <div class="dlg-b sp" data-pad data-gap data-n="Body" data-x="28 padding, 28 column gap">
                <div class="dlg-col" data-gap>
                  <label class="dlg-f sp" data-gap data-n="Field"><i data-t="11 / 650 · caps">Name</i><span class="dlg-in sp" data-n="Text input" data-x="46 tall, radius 10" data-t="14 / 400">e.g. Sakshi Ranjan</span></label>
                  <label class="dlg-f sp" data-gap data-n="Field"><i>Work email</i><span class="dlg-in sp" data-n="Text input" data-x="46 tall, radius 10">name@company.com</span></label>
                  <label class="dlg-f sp" data-gap data-n="Field"><i>Mobile</i><span class="dlg-in sp" data-n="Text input" data-x="46 tall, radius 10">+1 (555) 000-0000</span></label>
                </div>
                <div class="dlg-col" data-gap>
                  <div class="dlg-drop sp" data-n="Upload dropzone" data-x="dashed 1.5px, radius 10" data-t="15 / 650"><em>+</em><b>Upload photo</b><s data-t="12.5 / 400">PNG, JPG up to 5MB</s></div>
                  <label class="dlg-f sp" data-gap data-n="Field"><i>Job title</i><span class="dlg-in sp" data-n="Text input" data-x="46 tall, radius 10">Software Engineer</span></label>
                </div>
              </div>
              <div class="dlg-div sp" data-n="Divider" data-x="1px, inset 28"></div>
              <div class="dlg-ft sp" data-pad data-gap data-n="Footer" data-x="20 / 28 padding, gap 12">
                <span class="dlg-btn sp" data-n="Secondary button" data-x="41 tall, radius 8" data-t="14 / 600">Cancel</span>
                <span class="dlg-btn pri sp" data-n="Primary button" data-x="41 tall, radius 8">Save Person</span>
              </div>
            </div>

            <div class="dlg" id="dlg-load" hidden>
              <div class="dlg-load sp" data-pad data-gap data-n="Body" data-x="28 padding — the same inset">
                <b class="sp" data-n="Status headline" data-t="34 / 700">Loading Document</b>
                <s class="sp" data-n="Sub status" data-t="17 / 400">Preparing your document…</s>
                <div class="dlg-bar sp" data-gap data-n="Progress row" data-x="gap 20">
                  <u class="sp" data-n="Progress track" data-x="14 tall, radius 7"><em></em></u>
                  <s class="sp" data-n="Percentage" data-t="26 / 650">50%</s>
                </div>
              </div>
            </div>

            <div class="anat-grid"></div>
            <div class="anat-space" id="anatSpace"></div>
            <div class="anat-type" id="anatType"></div>
          </div></div>
        </div>

        <div class="anat-bar">
          <div class="chips" id="anatLayers" role="group" aria-label="Overlay">
            <button class="chipx on" data-l="none">Plain</button>
            <button class="chipx" data-l="space">Spacing</button>
            <button class="chipx" data-l="grid">8px grid</button>
          </div>
          <span class="lab">Both built in code · spec width <b style="color:var(--ink);font-weight:500">640</b></span>
        </div>

        <div class="rules">
          <div class="same">
            <h6>Holds for both</h6>
            <ul><li>Radius 14, one shadow, 640 wide</li><li>28 inset on every edge</li><li>The same 8px grid underneath</li><li>One blue, used once per dialog</li></ul>
          </div>
          <div class="diff">
            <h6>Free to differ</h6>
            <ul><li>Header band — the form has one, the loader doesn't</li><li>Footer and buttons — only where there's a decision</li><li>Type scale — 21 for a title, 34 for a status</li><li>Columns — two for a form, one for a message</li></ul>
          </div>
        </div>

        <div class="anat-read">
          <span id="anatRead">Hover any part of either dialog</span>
          <span id="anatWhich">Person Quick Create</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="creatives" data-stage="04|Prototype" class="sec" data-hud="Creatives">
  <div class="wrap">
    <span class="eyebrow">14 — Creatives</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Creatives and a LinkedIn banner, from the same file.</h2>
        <p class="lede">Filter, then click any piece to open it full size.</p>
      </div>
      <div class="chips" id="crChips" role="group" aria-label="Filter">
        <button class="chipx on" data-f="all">All</button>
        <button class="chipx" data-f="cr">Creatives</button>
        <button class="chipx" data-f="li">LinkedIn</button>
      </div>
    </div>
    <div class="cr-grid" id="crGrid"></div>
    <div class="li-grid" id="liGrid"></div>
  </div>
</section>

<!-- ============ STAGE 05 — TEST ============ -->

<section id="testing" data-stage="05|Test" class="sec" data-hud="Testing">
  <div class="wrap">
    <span class="eyebrow">07 — What actually happened</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">The people who talk to users every day caught my mistakes.</h2>
        <p class="lede">Click through the steps, then look at the grouping I got wrong.</p>
      </div>
      <p class="body">I wireframed the new flow and tested it with our internal product expert and the customer success team, the people who talked to users daily. That's where the mistakes surfaced.</p>
    </div>

    <div class="test-grid">
      <div class="tl" id="tl">
        <div class="tl-i" data-n="1" tabindex="0"><b>Mapped the whole flow</b><p>Every screen, and how data moved between the modules.</p></div>
        <div class="tl-i" data-n="2" tabindex="0"><b>Went through tickets and feedback</b><p>Three problems stood out.</p></div>
        <div class="tl-i" data-n="3" tabindex="0" data-grp="first"><b>Wireframed the new flow</b><p>Including a grouping that seemed obvious at the time.</p></div>
        <div class="tl-i" data-n="4" tabindex="0" data-grp="after"><b>Tested with product and customer success</b><em>this is where I caught my mistakes.</em></div>
        <div class="tl-i" data-n="5" tabindex="0"><b>Shipped to a small beta group</b><em>they noticed the progress indicator and auto-save within minutes.</em></div>
        <div class="tl-i" data-n="6" tabindex="0"><b>Adjusted some section labels</b><p>Based on what the beta group said.</p></div>
        <div class="tl-i" data-n="7" tabindex="0" style="padding-bottom:0"><b>Rolled out across the platform</b></div>
      </div>

      <div>
        <div class="stage reveal">
          <div class="stage-bar">
            <span class="frame-badge"><i class="fi co"></i>The grouping I got wrong</span>
            <div class="seg" role="group" aria-label="Grouping">
              <button class="on" data-g="first" aria-pressed="true">My first wireframe</button>
              <button data-g="after" aria-pressed="false">After testing</button>
            </div>
          </div>
          <div class="grp-stage" id="grp">
            <div class="grp-box"><span>Grouped: they seem related</span></div>
            <div class="grp-axis"></div>
            <span class="grp-ax-l" style="left:8%">Before work begins</span>
            <span class="grp-ax-l" style="right:8%">Throughout the work</span>
            <i class="gl ga"></i><i class="gl gb"></i>
            <i class="gbr"><em>again, and again</em></i>
            <i class="gtick a" style="left:20%"></i>
            <i class="gtick" style="left:44%"></i><i class="gtick" style="left:55%"></i><i class="gtick" style="left:65%"></i><i class="gtick" style="left:75%"></i><i class="gtick" style="left:85%"></i>
            <div class="gcard a"><h5>Project details</h5><p>Set up before the work begins</p></div>
            <div class="gcard b"><h5>Task assignments</h5><p>Adjusted throughout</p></div>
          </div>
          <div class="stage-cap" id="grpCap" aria-live="polite">I grouped these together because they seemed related.</div>
        </div>

        <div class="save-evo reveal">
          <div class="ev"><span class="k">Auto-save, first version</span><b>A brief "Saved" notification</b><p>It disappeared quickly. Beta testers didn't notice it, and still felt anxious about losing their work.</p></div>
          <span class="ar" aria-hidden="true">→</span>
          <div class="ev v2"><span class="k">After beta feedback</span><b>A persistent "Last saved [time]"</b><p>It updated live.</p><button class="mini" id="tryBoth" style="margin-top:10px">Try both in section <span data-ref="try">06</span></button></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="results" data-stage="05|Test" class="sec" data-hud="What changed">
  <div class="wrap">
    <span class="eyebrow">08 — What changed</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Half the time. Nobody asked for the old one back.</h2>
        <p class="lede">Run the clock, flip the month, and go ahead and ask.</p>
      </div>
      <p class="body">After the platform-wide rollout: how long documentation took, how many support tickets were about lost work in the first month, and what people said in a follow-up survey.</p>
    </div>

    <div class="res-grid">
      <div class="res reveal">
        <div class="res-h"><span class="lab">Documentation time</span><span style="display:flex;gap:10px;align-items:center"><span class="race-clock" id="raceClock">0.0 min</span><button class="mini" id="raceGo">Run the clock</button></span></div>
        <div class="res-b">
          <div class="res-big"><b>7–10</b><span>minutes, down from 15–20</span></div>
          <div class="race" id="race">
            <div class="race-row old" style="--a:75%;--w:25%"><span class="k">Before</span><div class="race-track"><span class="race-band"></span><span class="race-fill"></span><span class="race-done">15–20 min</span></div></div>
            <div class="race-row new" style="--a:35%;--w:15%"><span class="k">After</span><div class="race-track"><span class="race-band"></span><span class="race-fill"></span><span class="race-done">7–10 min</span></div></div>
            <div class="race-axis"><span>0</span><span>5</span><span>10</span><span>15</span><span>20 min</span></div>
          </div>
        </div>
      </div>

      <div class="res reveal">
        <div class="res-h"><span class="lab">Support tickets about lost work</span>
          <div class="seg" role="group" aria-label="Period"><button class="on" data-t="before" aria-pressed="true">Before</button><button data-t="after" aria-pressed="false">First month after</button></div></div>
        <div class="res-b">
          <div class="res-big"><b id="tixBig">78%</b><span>fewer in the first month after the update</span></div>
          <div class="tix" id="tix" aria-hidden="true"></div>
          <span class="src">Indexed to 100 — the shape of the drop, not ticket counts</span>
        </div>
      </div>

      <div class="res reveal">
        <div class="res-h"><span class="lab">Follow-up survey</span><span class="src" id="wafRead">Hover the grid</span></div>
        <div class="res-b">
          <div class="res-big"><b>89%</b><span>said the new system was easier or much easier to use than before</span></div>
          <div class="waffle" id="waffle" aria-hidden="true"></div>
          <span class="src">One dot per percent of respondents</span>
        </div>
      </div>

      <div class="res reveal">
        <div class="res-h"><span class="lab">Requests to go back</span><span class="src">The real success metric</span></div>
        <div class="res-b" style="justify-content:center">
          <div class="zero-b">
            <span class="zero" id="zero">0</span>
            <div>
              <p class="body" style="font-size:13.5px;max-width:30ch">Zero people requested to go back to the old version.</p>
              <button class="btn" id="zeroBtn" style="margin-top:14px;padding:10px 16px;font-size:14px">Ask for the old version back</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quotes">
      <div class="note n-blue" style="--rot:-2deg"><span class="n-label">After the update</span><p>"This is exactly what I needed. I can finally see where I am."</p><span class="peek">the progress indicator</span></div>
      <div class="note n-cream" style="--rot:1.5deg"><span class="n-label">After the update</span><p>"I haven't lost a task since the update. Game changer."</p><span class="peek">auto-save, visible</span></div>
      <div class="note" style="--rot:-1deg"><span class="n-label">After the update</span><p>"It actually feels like someone asked us what we needed."</p><span class="peek">the whole process</span></div>
    </div>
  </div>
</section>

<section id="maths" data-stage="05|Test" class="sec" data-hud="The arithmetic">
  <div class="wrap">
    <span class="eyebrow">12 — The arithmetic</span>
    <div class="sec-head">
      <div>
        <h2 class="sec-title">Seven minutes doesn't sound like much. Move the sliders.</h2>
        <p class="lede">Entries a day, people doing it. The rest is multiplication.</p>
      </div>
      <p class="body">People were managing dozens of entries a day, and each one took 15–20 minutes to document before, 7–10 after. This panel just multiplies those published ranges — it isn't a second measurement.</p>
    </div>

    <div class="math-grid">
      <div class="math-ctl reveal">
        <div class="mrow">
          <label for="mEntries">Entries a day, per person <b id="mEntriesV">12</b></label>
          <input type="range" id="mEntries" min="1" max="30" value="12">
          <div class="ticks"><span>1</span><span>10</span><span>20</span><span>30</span></div>
        </div>
        <div class="mrow">
          <label for="mPeople">People doing it <b id="mPeopleV">1</b></label>
          <input type="range" id="mPeople" min="1" max="100" value="1">
          <div class="ticks"><span>1</span><span>25</span><span>50</span><span>100</span></div>
        </div>
        <div class="mrow">
          <label for="mDays">Working days a week <b id="mDaysV">5</b></label>
          <input type="range" id="mDays" min="1" max="7" value="5">
          <div class="ticks"><span>1</span><span>3</span><span>5</span><span>7</span></div>
        </div>
      </div>

      <div class="math-out reveal">
        <div class="math-bars">
          <div class="mbar old">
            <span class="k"><span>Before · 15–20 min each</span><b id="mOld">3–4 h</b></span>
            <div class="track"><span class="fill" id="mOldF"></span></div>
          </div>
          <div class="mbar new">
            <span class="k"><span>After · 7–10 min each</span><b id="mNew">1.4–2 h</b></span>
            <div class="track"><span class="fill" id="mNewF"></span></div>
          </div>
        </div>
        <div class="math-saved">
          <div><span class="k">Saved a day</span><b id="mDay">—</b><em id="mDayE">per person</em></div>
          <div><span class="k">Saved a week</span><b id="mWeek">—</b><em id="mWeekE">at 5 days</em></div>
          <div><span class="k">Saved a year</span><b id="mYear">—</b><em>at 48 weeks</em></div>
        </div>
        <div class="math-foot" id="mFoot">Arithmetic on the published ranges, not a measured result</div>
      </div>
    </div>
  </div>
</section>

<section id="back" class="sec" data-hud="Looking back">
  <div class="wrap">
    <span class="eyebrow">15 — Looking back</span>
    <h2 class="sec-title" style="margin-top:12px">What I'd push for next time, and what stuck.</h2>
    <div class="back-grid">
      <div>
        <span class="lab" style="display:block;margin-bottom:12px">What I'd do differently</span>
        <div class="dos">
          <div class="reveal"><h6>Get to real users earlier</h6><p>Working through intermediaries gave me valuable insight, but I missed nuances that only come from watching someone actually struggle with an interface. Even one direct observation session would have sped up my understanding.</p></div>
          <div class="reveal"><h6>Document the problems systematically</h6><p>I leaned on anecdotal feedback and support tickets. It worked, but a proper heuristic evaluation would have given me clearer evidence when advocating for changes.</p></div>
        </div>
      </div>
      <div>
        <span class="lab" style="display:block;margin-bottom:12px">What I learned — tap one</span>
        <div class="lessons" id="lessons">
          <button class="lesson on" aria-expanded="true"><h5>Strategic improvements beat perfect overhauls</h5><p>I wanted to rebuild everything into one sleek, unified experience. Given the constraints, that wasn't realistic. The focused changes (progress visibility, auto-save, better information architecture) delivered serious value without a ground-up rebuild.</p><span class="go" data-to="#fixes">See the three fixes</span></button>
          <button class="lesson" aria-expanded="false"><h5>Mental models beat logic</h5><p>What made sense to me, grouping related data, didn't always match how people thought about their work. Validating assumptions with the people who do the work daily kept me from shipping something technically correct but functionally wrong.</p><span class="go" data-to="#testing">See the grouping I got wrong</span></button>
          <button class="lesson" aria-expanded="false"><h5>Invisible design builds trust</h5><p>The "Last saved" indicator wasn't technically necessary; the system was auto-saving either way. But it transformed how people felt about the experience. Sometimes the most important design work is making invisible processes visible.</p><span class="go" data-to="#try">Switch between both versions</span></button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="end" class="end" data-hud="Done">
  <div class="wrap">
    <div class="end-pi" id="endPi">
      <div class="pi">
        <div class="pi-step"><span class="pi-dot">1</span><span class="pi-lab">Mapped</span></div>
        <div class="pi-step"><span class="pi-dot">2</span><span class="pi-lab">Fixed</span></div>
        <div class="pi-step"><span class="pi-dot">3</span><span class="pi-lab">Tested</span></div>
        <div class="pi-step"><span class="pi-dot">4</span><span class="pi-lab">Shipped</span></div>
      </div>
    </div>
    <h2 class="end-h">Enterprise Platform<span>iBE.net</span></h2>
    <p class="end-p">A redesign carried out during a rebrand: a progress indicator that always shows where you are, auto-save that tells you when your work is safe, and screens grouped the way people think. Shipped across web and mobile without a backend overhaul.</p>
    <div class="credits">
      <span class="tag" style="color:var(--muted)">Product designer</span>
      <span class="tag" style="color:var(--muted)">1 designer</span>
      <span class="tag" style="color:var(--muted)">12 months</span>
      <span class="tag" style="color:var(--muted)">Web and mobile</span>
    </div>

    <div class="receipt reveal" id="receipt">
      <h5>Your visit</h5>
      <span class="sub">Enterprise Platform · iBE.net</span>
      <div id="receiptRows"></div>
      <div class="tot"><span>Time on this page</span><b id="rcTime">—</b></div>
      <span class="cut">· · · · · · · · · · · · · · · ·</span>
    </div>

    <div class="home-row">
      <a class="btn" id="homeBtn" href="https://www.akshatportfolio.online/project">
        <svg width="16" height="16" viewBox="0 0 100 130" fill="#fff" stroke="#111" stroke-width="8" stroke-linejoin="round"><path d="M50 6 92 54H68v70H32V54H8Z"/></svg>
        Back to the canvas
      </a>
    </div>
    <div class="foot">
      <span>Enterprise Platform — iBE.net</span>
      <span>Section 16 of 16 · all sections complete</span>
    </div>
  </div>
</section>

<!-- ============ TOOLBAR + COMMAND PALETTE ============ -->

<div class="pal" id="pal" role="dialog" aria-modal="true" aria-label="Command palette">
  <div class="pal-box">
    <div class="pal-in">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="#8E8E8E" stroke-width="1.7"><circle cx="6.6" cy="6.6" r="4.6"/><path d="m10.2 10.2 3 3" stroke-linecap="round"/></svg>
      <input id="palIn" placeholder="Jump to a section, or run something…" autocomplete="off" spellcheck="false">
    </div>
    <div class="pal-list" id="palList"></div>
    <div class="pal-foot"><span>↑↓ to move</span><span>↵ to run</span><span>esc to close</span></div>
  </div>
</div>

<figure class="lb" id="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged image">
  <button class="lb-close" id="lbClose" aria-label="Close">&times;</button>
  <div style="max-width:100%"><img id="lbImg" src="" alt=""><figcaption id="lbCap"></figcaption></div>
  <span class="lb-hint">Click anywhere or press Esc to close</span>
</figure>

<div class="toast" id="toast" role="status"></div>
<script>
/* ============================================================
   FRAMER BRIDGE — only switches on when the EnterpriseCaseStudy
   Framer component says hello. Opened on its own, nothing changes.
   The component sizes this page to its full height, so the page
   never scrolls itself: Framer scrolls it, and tells us where the
   visitor's screen is so pop-ups and toasts land in view.
   ============================================================ */
window.EP_HOST=(function(){
  const H={on:false,vt:0,vh:innerHeight,cursor:false,back:''};
  if(window.parent===window)return H;
  let parentOrigin='*';
  const send=m=>{try{window.parent.postMessage(Object.assign({ep:1},m),parentOrigin);}catch(e){}};
  H.send=send;
  let lastH=0;
  /* measure the content itself; scrollHeight never drops below the frame's own height, so it could only grow */
  let endEl=null;
  const measure=()=>{const d=document.documentElement;if(!document.body)return;
    if(!endEl||endEl.parentNode!==document.body){endEl=document.createElement('div');endEl.id='ep-end';endEl.style.cssText='height:0;margin:0;padding:0;clear:both';document.body.appendChild(endEl);}
    const bs=getComputedStyle(document.body);
    const hh=Math.ceil(endEl.getBoundingClientRect().top+window.scrollY+parseFloat(bs.paddingBottom||0)+parseFloat(bs.marginBottom||0));
    if(Math.abs(hh-lastH)>1){lastH=hh;send({t:'height',h:hh});}
    d.style.setProperty('--dh',hh+'px');};
  function on(cfg){
    if(H.on){apply(cfg);return;}
    H.on=true;const d=document.documentElement;d.classList.add('hosted');
    apply(cfg);
    /* the page no longer scrolls itself, so ask Framer to scroll instead */
    const native=Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView=function(o){
      if(!H.on)return native.call(this,o);
      const r=this.getBoundingClientRect();
      const block=(o&&o.block)||'start';
      let y=r.top;if(block==='center')y=r.top+r.height/2-H.vh/2;else if(block==='nearest'){if(r.top>=H.vt&&r.bottom<=H.vt+H.vh)return;}
      send({t:'scroll',y:Math.max(0,y-(block==='start'?24:0)),smooth:!(o&&o.behavior==='auto')});
    };
    new ResizeObserver(measure).observe(d);if(document.body)new ResizeObserver(measure).observe(document.body);
    addEventListener('load',measure);setTimeout(measure,400);setTimeout(measure,1500);
    /* your site cursor keeps following the mouse over the case study */
    ['pointermove','pointerdown','pointerup'].forEach(t=>addEventListener(t,e=>{if(H.cursor)send({t:'ptr',k:t,x:e.clientX,y:e.clientY,b:e.buttons});},{passive:true,capture:true}));
    document.documentElement.addEventListener('pointerleave',()=>{if(H.cursor)send({t:'ptr',k:'leave'});});
    /* leaving the page goes through Framer, so it opens in the same tab like any other link */
    document.addEventListener('click',e=>{
      const a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
      const href=a.getAttribute('href');if(!href||href[0]==='#')return;
      if(a.target==='_blank')return;
      e.preventDefault();send({t:'go',url:a.href});
    },true);
    measure();
  }
  function apply(cfg){
    cfg=cfg||{};
    H.cursor=!!cfg.cursor;document.documentElement.classList.toggle('host-cursor',H.cursor);
    document.documentElement.classList.toggle('host-bg',cfg.bg!=='own');
    if(cfg.back){H.back=cfg.back;const b=document.getElementById('homeBtn');if(b)b.href=cfg.back;}
    if(cfg.label){const b=document.getElementById('homeBtn');if(b&&b.lastChild)b.lastChild.textContent='\\n        '+cfg.label+'\\n      ';}
  }
  function view(vt,vh){
    H.vt=vt;H.vh=vh;const d=document.documentElement.style;
    d.setProperty('--vt',vt+'px');d.setProperty('--vh',vh+'px');
    window.dispatchEvent(new Event('ep-view'));
  }
  addEventListener('message',e=>{
    if(e.source!==window.parent)return;const m=e.data;if(!m||m.ep!==1)return;
    if(m.t==='hello'){parentOrigin=e.origin&&e.origin!=='null'?e.origin:'*';on(m);send({t:'ready'});measure();}
    else if(m.t==='view')view(m.top,m.h);
  });
  return H;
})();
<\/script>
<script>
/* ============================================================
   ASSETS — the only thing you need to edit.
   Paste an image URL (Framer CDN, Netlify path like "img/web-old-1.png",
   or a data: URI) into any empty string. Empty = placeholder frame.
   Add or remove entries in any list and the page adapts.
   Tip: drag an image file onto any placeholder to preview it locally
   (preview only — it isn't saved until you put the URL here).
   ============================================================ */
const ASSETS = {
  web: {
    /* pins: annotations drawn over the NEW screen. x/y are percentages of the frame. */
    pairs: [
      { label: 'Screen 01', old: '%%EPIMG:f300a7227c%%', new: '%%EPIMG:10f5d13e0e%%', pins: [
          { x: 2, y: 36, t: 'Sidebar nav — one consistent way to move across every module. The old layout had four different navigation patterns.' },
          { x: 48, y: 22, t: 'Trend indicators + "Updated X ago" on every stat card — direction and freshness visible without drilling down.' },
          { x: 24, y: 72, right: true, t: 'Chart widgets now carry summary stats (Best month, Average, Lowest) — the same insight that used to need a separate screen.' }
      ] },
      { label: 'Screen 02', old: '', new: '', pins: [] },
      { label: 'Screen 03', old: '', new: '', pins: [] },
      { label: 'Screen 04', old: '', new: '', pins: [] },
      { label: 'Screen 05', old: '', new: '', pins: [] }
    ],
    more: [
      { label: 'Ticket analytics', src: '%%EPIMG:a93c80f93e%%' },
      { label: 'Project key info', src: '%%EPIMG:cfeafde773%%' },
      { label: 'My Support', src: '%%EPIMG:3b1c5d1052%%' },
      { label: 'Support tickets list', src: '%%EPIMG:e299bf3714%%' }
    ]
  },
  app: {
    'Home Page': {
      note: 'The entry point: sign in, then four tasks on one screen instead of four places to look for them.',
      names: ["Login", "Dashboard", "Settings", "My Profile", "Colour Blind Friendly", "Support"],
      screens: [
        '%%EPIMG:4ff559f205%%',
        '%%EPIMG:9227099e02%%',
        '%%EPIMG:8868d45b76%%',
        '%%EPIMG:594622b8b0%%',
        '%%EPIMG:93c80b907e%%',
        '%%EPIMG:efdb0e9daa%%'
      ]
    },
    'Timesheet': {
      note: 'The module the whole case study turns on: list, then one editor with everything about an entry \\u2014 hours, files, comments and the full history \\u2014 behind four tabs instead of four screens.',
      names: ["Timesheet list", "Edit — General", "Edit — Files", "Edit — Comment", "Edit — History", "Filters", "Sort by", "New entry"],
      screens: [
        '%%EPIMG:9adf47bc2e%%',
        '%%EPIMG:04775c325f%%',
        '%%EPIMG:1e5e33aa05%%',
        '%%EPIMG:4eb025d2ad%%',
        '%%EPIMG:befbdd937a%%',
        '%%EPIMG:dd031dd3cd%%',
        '%%EPIMG:f5bd53fd43%%',
        '%%EPIMG:8531ab8703%%'
      ]
    },
    'Expenses': {
      note: 'Same five-tab editor as the timesheet, same list, same filter and sort sheets \\u2014 learn one module and you already know this one.',
      names: ["Expenses list", "View — Key Info", "View — Items", "Files", "Filters", "New item — Details", "New item — Classification", "View — History"],
      screens: [
        '%%EPIMG:3324cb9e0e%%',
        '%%EPIMG:358e3509f1%%',
        '%%EPIMG:5409fddded%%',
        '%%EPIMG:5555db4123%%',
        '%%EPIMG:79c0ebc630%%',
        '%%EPIMG:900864b0df%%',
        '%%EPIMG:b976b8beaa%%',
        '%%EPIMG:bcc6e551be%%'
      ]
    },
    'Absences': {
      note: 'Leave balance before and after the request, shown on the same screen you make it on \\u2014 no second place to go and check.',
      names: ["Absences list", "Edit — General", "Create absence", "Edit — History"],
      screens: [
        '%%EPIMG:a3d84cbb97%%',
        '%%EPIMG:2ba9111ac0%%',
        '%%EPIMG:9f09276ce6%%',
        '%%EPIMG:852a890fbc%%'
      ]
    },
    'Approvals': {
      note: 'What you can do changes with what you are looking at: unread items offer Approve and Reject, read ones offer Complete and Redo. Three screens, not four \\u2014 the fourth was the same list again.',
      names: ["Read", "Unread", "Filters"],
      screens: [
        '%%EPIMG:b74ef4bcb6%%',
        '%%EPIMG:fa36f72291%%',
        '%%EPIMG:561faa1466%%'
      ]
    }
  },
  /* Each one is trimmed and centred on the same 96px keyline box, so the set
     reads as one family rather than twenty separate exports. */
  /* Vectors on one 24x24 artboard, filled with currentColor so the set takes its
     colour from whatever it sits in. All 24 are vectors on the same artboard. */
  icons: [
    { name: 'Ticket', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(-0.536 -0.708)" d="M12.5363 17.4304C12.8039 17.4304 13.0282 17.3398 13.2093 17.1588C13.3903 16.9777 13.4808 16.7534 13.4808 16.4858C13.4808 16.2183 13.3903 15.994 13.2093 15.8129C13.0282 15.6319 12.8039 15.5413 12.5363 15.5413C12.2686 15.5413 12.0443 15.6319 11.8633 15.8129C11.6823 15.994 11.5918 16.2183 11.5918 16.4858C11.5918 16.7534 11.6823 16.9777 11.8633 17.1588C12.0443 17.3398 12.2686 17.4304 12.5363 17.4304ZM12.5363 13.6524C12.8039 13.6524 13.0282 13.5619 13.2093 13.3809C13.3903 13.1998 13.4808 12.9755 13.4808 12.7078C13.4808 12.4402 13.3903 12.2159 13.2093 12.0349C13.0282 11.8539 12.8039 11.7634 12.5363 11.7634C12.2686 11.7634 12.0443 11.8539 11.8633 12.0349C11.6823 12.2159 11.5918 12.4402 11.5918 12.7078C11.5918 12.9755 11.6823 13.1998 11.8633 13.3809C12.0443 13.5619 12.2686 13.6524 12.5363 13.6524ZM12.5363 9.87435C12.8039 9.87435 13.0282 9.78384 13.2093 9.60281C13.3903 9.42178 13.4808 9.19746 13.4808 8.92986C13.4808 8.66224 13.3903 8.43793 13.2093 8.2569C13.0282 8.07587 12.8039 7.98535 12.5363 7.98535C12.2686 7.98535 12.0443 8.07587 11.8633 8.2569C11.6823 8.43793 11.5918 8.66224 11.5918 8.92986C11.5918 9.19746 11.6823 9.42178 11.8633 9.60281C12.0443 9.78384 12.2686 9.87435 12.5363 9.87435ZM20.0923 20.2639H4.9803C4.46084 20.2639 4.01613 20.0789 3.6462 19.7089C3.27627 19.339 3.09131 18.8943 3.09131 18.3748V14.5969C3.61079 14.5969 4.05548 14.4119 4.42541 14.0419C4.79534 13.672 4.9803 13.2273 4.9803 12.7078C4.9803 12.1884 4.79534 11.7437 4.42541 11.3737C4.05548 11.0038 3.61079 10.8189 3.09131 10.8189V7.04085C3.09131 6.52138 3.27627 6.07668 3.6462 5.70675C4.01613 5.33682 4.46084 5.15186 4.9803 5.15186H20.0923C20.6118 5.15186 21.0565 5.33682 21.4264 5.70675C21.7963 6.07668 21.9813 6.52138 21.9813 7.04085V10.8189C21.4619 10.8189 21.0172 11.0038 20.6471 11.3737C20.2772 11.7437 20.0923 12.1884 20.0923 12.7078C20.0923 13.2273 20.2772 13.672 20.6471 14.0419C21.0172 14.4119 21.4619 14.5969 21.9813 14.5969V18.3748C21.9813 18.8943 21.7963 19.339 21.4264 19.7089C21.0565 20.0789 20.6118 20.2639 20.0923 20.2639ZM20.0923 18.3748V15.9663C19.5098 15.62 19.0494 15.1596 18.711 14.585C18.3725 14.0105 18.2033 13.3848 18.2033 12.7078C18.2033 12.031 18.3725 11.4052 18.711 10.8307C19.0494 10.2561 19.5098 9.79564 20.0923 9.44932V7.04085H4.9803V9.44932C5.56275 9.79564 6.0232 10.2561 6.36164 10.8307C6.70008 11.4052 6.86931 12.031 6.86931 12.7078C6.86931 13.3848 6.70008 14.0105 6.36164 14.585C6.0232 15.1596 5.56275 15.62 4.9803 15.9663V18.3748H20.0923Z" fill="currentColor"/></svg>' },
    { name: 'Reports', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(-0.622 -0.622)" d="M7.89958 17.3445H9.78858V10.7331H7.89958V17.3445ZM11.6775 17.3445H13.5666V7.89958H11.6775V17.3445ZM15.4556 17.3445H17.3445V13.5666H15.4556V17.3445ZM6.01058 21.1226C5.49111 21.1226 5.0464 20.9376 4.67647 20.5677C4.30654 20.1977 4.12158 19.753 4.12158 19.2336V6.01058C4.12158 5.49111 4.30654 5.0464 4.67647 4.67647C5.0464 4.30654 5.49111 4.12158 6.01058 4.12158H19.2336C19.753 4.12158 20.1977 4.30654 20.5677 4.67647C20.9376 5.0464 21.1226 5.49111 21.1226 6.01058V19.2336C21.1226 19.753 20.9376 20.1977 20.5677 20.5677C20.1977 20.9376 19.753 21.1226 19.2336 21.1226H6.01058ZM6.01058 19.2336H19.2336V6.01058H6.01058V19.2336Z" fill="currentColor"/></svg>' },
    { name: 'Calendar', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(-0.880 0.414)" d="M6.86913 20.1727C6.39687 20.1727 5.9926 20.0045 5.6563 19.6682C5.32 19.332 5.15186 18.9277 5.15186 18.4555V6.43454C5.15186 5.96229 5.32 5.55802 5.6563 5.22172C5.9926 4.88542 6.39687 4.71727 6.86913 4.71727H7.72776V3H9.44504V4.71727H16.3141V3H18.0314V4.71727H18.89C19.3623 4.71727 19.7665 4.88542 20.1028 5.22172C20.4391 5.55802 20.6073 5.96229 20.6073 6.43454V18.4555C20.6073 18.9277 20.4391 19.332 20.1028 19.6682C19.7665 20.0045 19.3623 20.1727 18.89 20.1727H6.86913ZM6.86913 18.4555H18.89V9.86906H6.86913V18.4555ZM6.86913 8.15182H18.89V6.43454H6.86913V8.15182ZM8.5864 13.3037V11.5864H17.1728V13.3037H8.5864ZM8.5864 16.7382V15.0209H14.5969V16.7382H8.5864Z" fill="currentColor"/></svg>' },
    { name: 'Projects', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.414 3.843)" d="M1.71728 16.314C1.24502 16.314 0.840746 16.1459 0.504445 15.8097C0.168145 15.4734 0 15.0691 0 14.5968V5.15182C0 4.67957 0.168145 4.2753 0.504445 3.939C0.840746 3.6027 1.24502 3.43454 1.71728 3.43454H5.15182V1.71728C5.15182 1.24502 5.31996 0.840746 5.65626 0.504445C5.99256 0.168145 6.3968 0 6.86912 0H10.3036C10.7758 0 11.1802 0.168145 11.5165 0.504445C11.8528 0.840746 12.0209 1.24502 12.0209 1.71728V3.43454H15.4554C15.9277 3.43454 16.332 3.6027 16.6683 3.939C17.0046 4.2753 17.1728 4.67957 17.1728 5.15182V14.5968C17.1728 15.0691 17.0046 15.4734 16.6683 15.8097C16.332 16.1459 15.9277 16.314 15.4554 16.314H1.71728ZM6.86912 3.43454H10.3036V1.71728H6.86912V3.43454ZM15.4554 11.1622H11.1622V12.8795H6.01045V11.1622H1.71728V14.5968H15.4554V11.1622ZM7.72772 11.1622H9.44503V9.44503H7.72772V11.1622ZM1.71728 9.44503H6.01045V7.72772H11.1622V9.44503H15.4554V5.15182H1.71728V9.44503Z" fill="currentColor"/></svg>' },
    { name: 'Approved', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 3.414)" d="M6.82615 14.0387L3.778 10.9906L5.02302 9.74548L6.82615 11.5486L10.4324 7.94235L11.6774 9.18744L6.82615 14.0387ZM1.71727 17.1728C1.24502 17.1728 0.840745 17.0046 0.504445 16.6683C0.168145 16.332 0 15.9277 0 15.4554V3.43454C0 2.96229 0.168145 2.55802 0.504445 2.22172C0.840745 1.88542 1.24502 1.71728 1.71727 1.71728H2.57591V0H4.29318V1.71728H11.1622V0H12.8795V1.71728H13.7381C14.2105 1.71728 14.6147 1.88542 14.951 2.22172C15.2873 2.55802 15.4554 2.96229 15.4554 3.43454V15.4554C15.4554 15.9277 15.2873 16.332 14.951 16.6683C14.6147 17.0046 14.2105 17.1728 13.7381 17.1728H1.71727ZM1.71727 15.4554H13.7381V6.86912H1.71727V15.4554ZM1.71727 5.15182H13.7381V3.43454H1.71727V5.15182Z" fill="currentColor"/></svg>' },
    { name: 'Expand', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(5.131 5.131)" d="M6.01042 13.7381V7.21254L1.71728 2.91936V5.15182H0V0H5.15182V1.71728H2.91936L7.72772 6.5256V13.7381H6.01042ZM9.31623 5.667L8.07114 4.42198L10.8188 1.71728H8.58632V0H13.7381V5.15182H12.0209V2.91936L9.31623 5.667Z" fill="currentColor"/></svg>' },
    { name: 'Billing', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(2.555 5.131)" d="M11.1622 7.72772C10.4467 7.72772 9.83852 7.47724 9.33766 6.97638C8.8368 6.47552 8.58632 5.8673 8.58632 5.15182C8.58632 4.43629 8.8368 3.82809 9.33766 3.32722C9.83852 2.82635 10.4467 2.57591 11.1622 2.57591C11.8778 2.57591 12.486 2.82635 12.9869 3.32722C13.4878 3.82809 13.7381 4.43629 13.7381 5.15182C13.7381 5.8673 13.4878 6.47552 12.9869 6.97638C12.486 7.47724 11.8778 7.72772 11.1622 7.72772ZM5.15181 10.3036C4.67957 10.3036 4.2753 10.1355 3.939 9.79916C3.60269 9.46285 3.43454 9.05864 3.43454 8.58632V1.71728C3.43454 1.24502 3.60269 0.840746 3.939 0.504445C4.2753 0.168145 4.67957 0 5.15181 0H17.1728C17.645 0 18.0493 0.168145 18.3856 0.504445C18.7218 0.840746 18.89 1.24502 18.89 1.71728V8.58632C18.89 9.05864 18.7218 9.46285 18.3856 9.79916C18.0493 10.1355 17.645 10.3036 17.1728 10.3036H5.15181ZM6.86909 8.58632H15.4554C15.4554 8.11411 15.6236 7.7098 15.9599 7.37348C16.2962 7.03728 16.7004 6.86912 17.1728 6.86912V3.43454C16.7004 3.43454 16.2962 3.2664 15.9599 2.9301C15.6236 2.59379 15.4554 2.18952 15.4554 1.71728H6.86909C6.86909 2.18952 6.70093 2.59379 6.36463 2.9301C6.02833 3.2664 5.62406 3.43454 5.15181 3.43454V6.86912C5.62406 6.86912 6.02833 7.03728 6.36463 7.37348C6.70093 7.7098 6.86909 8.11411 6.86909 8.58632ZM16.314 13.7381H1.71727C1.24502 13.7381 0.840745 13.57 0.504445 13.2338C0.168145 12.8975 0 12.4932 0 12.0209V2.57591H1.71727V12.0209H16.314V13.7381Z" fill="currentColor"/></svg>' },
    { name: 'Find people', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.199 3.628)" d="M6.86909 6.86912C5.92459 6.86912 5.11604 6.53281 4.44344 5.86019C3.77084 5.18759 3.43454 4.37904 3.43454 3.43454C3.43454 2.49005 3.77084 1.68149 4.44344 1.0089C5.11604 0.3363 5.92459 0 6.86909 0C7.81355 0 8.62218 0.3363 9.2947 1.0089C9.96732 1.68149 10.3036 2.49005 10.3036 3.43454C10.3036 4.37904 9.96732 5.18759 9.2947 5.86019C8.62218 6.53281 7.81355 6.86912 6.86909 6.86912ZM6.86909 5.15181C7.34134 5.15181 7.74565 4.98367 8.08196 4.64737C8.41817 4.31107 8.58632 3.9068 8.58632 3.43454C8.58632 2.96229 8.41817 2.55802 8.08196 2.22172C7.74565 1.88542 7.34134 1.71727 6.86909 1.71727C6.39683 1.71727 5.99256 1.88542 5.65626 2.22172C5.31996 2.55802 5.15182 2.96229 5.15182 3.43454C5.15182 3.9068 5.31996 4.31107 5.65626 4.64737C5.99256 4.98367 6.39683 5.15181 6.86909 5.15181ZM16.4 16.7434L13.6523 13.9957C13.3518 14.1675 13.0298 14.3106 12.6863 14.4251C12.3429 14.5396 11.978 14.5968 11.5916 14.5968C10.5183 14.5968 9.60597 14.2212 8.85473 13.4698C8.10339 12.7186 7.72772 11.8062 7.72772 10.733C7.72772 9.65965 8.10339 8.74737 8.85473 7.99603C9.60597 7.24469 10.5183 6.86912 11.5916 6.86912C12.6649 6.86912 13.5772 7.24469 14.3284 7.99603C15.0798 8.74737 15.4554 9.65965 15.4554 10.733C15.4554 11.1194 15.3982 11.4842 15.2837 11.8277C15.1692 12.1712 15.0261 12.4932 14.8544 12.7937L17.602 15.5413L16.4 16.7434ZM11.5916 12.8795C12.1926 12.8795 12.7007 12.672 13.1157 12.257C13.5306 11.8421 13.7381 11.334 13.7381 10.733C13.7381 10.1319 13.5306 9.6239 13.1157 9.20887C12.7007 8.79384 12.1926 8.58632 11.5916 8.58632C10.9906 8.58632 10.4825 8.79384 10.0675 9.20887C9.65254 9.6239 9.44503 10.1319 9.44503 10.733C9.44503 11.334 9.65254 11.8421 10.0675 12.257C10.4825 12.672 10.9906 12.8795 11.5916 12.8795ZM0 13.7381V11.3554C0 10.8689 0.121645 10.4181 0.364924 10.0031C0.608203 9.58815 0.944503 9.27327 1.37381 9.05864C2.10366 8.68658 2.92652 8.3717 3.8424 8.11411C4.75828 7.85652 5.77433 7.72772 6.89055 7.72772C6.71882 7.98531 6.57214 8.26083 6.45051 8.55418C6.32886 8.84752 6.23226 9.15158 6.16072 9.46646C5.30207 9.53797 4.53646 9.68469 3.86386 9.90653C3.19126 10.1284 2.62599 10.3609 2.16806 10.6042C2.02495 10.6757 1.91404 10.7795 1.83533 10.9155C1.75662 11.0514 1.71728 11.1981 1.71728 11.3554V12.0209H6.16072C6.23226 12.3357 6.32886 12.6363 6.45051 12.9225C6.57214 13.2086 6.71882 13.4805 6.89055 13.7381H0Z" fill="currentColor"/></svg>' },
    { name: 'Workflow', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.392 3.843)" d="M2.51151 16.3141L2.38271 15.2193C2.32547 15.1907 2.26823 15.162 2.21098 15.1335C2.15375 15.1049 2.07504 15.0548 1.97487 14.9832L0.944503 15.4125L0 13.7811L0.880105 13.1156C0.880105 13.0441 0.880105 12.969 0.880105 12.8903C0.880105 12.8116 0.880105 12.7365 0.880105 12.6649L0 11.978L0.944503 10.3465L1.97487 10.7759C2.04641 10.7329 2.11439 10.6901 2.17879 10.6471C2.24318 10.6041 2.31117 10.5684 2.38271 10.5397L2.51151 9.44497H4.40051L4.5293 10.5397C4.55792 10.554 4.58655 10.5684 4.61517 10.5827C4.64378 10.597 4.67241 10.6113 4.70103 10.6257C4.72966 10.6399 4.76543 10.6614 4.80836 10.6901C4.85129 10.7186 4.89422 10.7472 4.93716 10.7759L5.96752 10.3465L6.91198 11.978L6.03192 12.6434C6.03192 12.6864 6.03192 12.7257 6.03192 12.7615C6.03192 12.7973 6.03192 12.8366 6.03192 12.8796C6.03192 12.9224 6.03192 12.9618 6.03192 12.9976C6.03192 13.0334 6.03192 13.0728 6.03192 13.1156L10.733 10.3895L9.76702 12.0853L10.0246 12.2785L6.63296 14.2534L5.96752 15.4125L4.93716 14.9832C4.8656 15.0261 4.79763 15.0691 4.73323 15.112C4.66883 15.1549 4.60086 15.1907 4.5293 15.2193L4.40051 16.3141H2.51151ZM3.45601 11.5916C3.09824 11.5916 2.79415 11.7168 2.54371 11.9672C2.29327 12.2177 2.16806 12.5217 2.16806 12.8796C2.16806 13.2373 2.29327 13.5414 2.54371 13.7919C2.79415 14.0422 3.09824 14.1675 3.45601 14.1675C3.81378 14.1675 4.11788 14.0422 4.36831 13.7919C4.61875 13.5414 4.74397 13.2373 4.74397 12.8796C4.74397 12.5217 4.61875 12.2177 4.36831 11.9672C4.11788 11.7168 3.81378 11.5916 3.45601 11.5916ZM6.80472 6.86906L6.67593 5.77432C6.64728 5.74571 6.61153 5.72423 6.56856 5.70992C6.5256 5.69561 6.48984 5.67415 6.4612 5.64552V10.3681L6.13924 9.80992L5.17328 10.2177V5.83872L4.31465 4.33611L5.17328 3.67067C5.17328 3.59911 5.17328 3.52399 5.17328 3.44528C5.17328 3.36657 5.17328 3.29143 5.17328 3.21988L4.29318 2.53297L5.23768 0.901567L6.26801 1.33088C6.33962 1.28795 6.40762 1.24502 6.47192 1.20208C6.53642 1.15916 6.60432 1.12337 6.67593 1.09476L6.80472 0H8.69369L8.82248 1.09476C8.87977 1.12337 8.93696 1.152 8.99425 1.18062C9.05143 1.20924 9.13015 1.25933 9.2303 1.33088L10.2607 0.901567L11.2052 2.53297L10.3251 3.19841C10.3251 3.26997 10.3251 3.34509 10.3251 3.4238C10.3251 3.50251 10.3251 3.57765 10.3251 3.6492L11.2052 4.33611L10.2607 5.96751L9.2303 5.5382C9.15879 5.58113 9.09079 5.62406 9.02639 5.667C8.96199 5.70992 8.89399 5.74571 8.82248 5.77432L8.69369 6.86906H6.80472ZM7.74915 2.14659C7.39141 2.14659 7.08735 2.27181 6.83687 2.52224C6.58649 2.77268 6.4612 3.07678 6.4612 3.43454C6.4612 3.7923 6.58649 4.0964 6.83687 4.34684C7.08735 4.59727 7.39141 4.72249 7.74915 4.72249C8.107 4.72249 8.41106 4.59727 8.66144 4.34684C8.91192 4.0964 9.03711 3.7923 9.03711 3.43454C9.03711 3.07678 8.91192 2.77268 8.66144 2.52224C8.41106 2.27181 8.107 2.14659 7.74915 2.14659ZM12.8151 16.3141L12.6863 15.2193C12.6291 15.1907 12.5719 15.162 12.5146 15.1335C12.4574 15.1049 12.3787 15.0548 12.2785 14.9832L11.2482 15.4125L10.3036 13.7811L11.1838 13.1156C11.1838 13.0441 11.1838 12.969 11.1838 12.8903C11.1838 12.8116 11.1838 12.7365 11.1838 12.6649L10.3036 11.9994L11.2482 10.3465L12.2785 10.7759C12.3214 10.7472 12.35 10.7294 12.3644 10.7222C12.3787 10.7151 12.486 10.6614 12.6863 10.5613L8.04971 7.29841H9.08007L9.1659 6.52564L13.3518 9.44497H14.7041L14.8329 10.5397C14.8615 10.554 14.8902 10.5684 14.9188 10.5827C14.9474 10.597 14.976 10.6113 15.0047 10.6257C15.0333 10.6399 15.0691 10.6614 15.112 10.6901C15.1549 10.7186 15.1979 10.7472 15.2408 10.7759L16.2712 10.3465L17.2156 11.978L16.3356 12.6434C16.3356 12.7149 16.3356 12.7901 16.3356 12.8688C16.3356 12.9475 16.3356 13.0226 16.3356 13.0942L17.2156 13.7811L16.2712 15.4125L15.2408 14.9832C15.1692 15.0261 15.1012 15.0691 15.0369 15.112C14.9724 15.1549 14.9045 15.1907 14.8329 15.2193L14.7041 16.3141H12.8151ZM13.7597 11.5916C13.4018 11.5916 13.0978 11.7168 12.8474 11.9672C12.5969 12.2177 12.4717 12.5217 12.4717 12.8796C12.4717 13.2373 12.5969 13.5414 12.8474 13.7919C13.0978 14.0422 13.4018 14.1675 13.7597 14.1675C14.1174 14.1675 14.4215 14.0422 14.672 13.7919C14.9223 13.5414 15.0476 13.2373 15.0476 12.8796C15.0476 12.5217 14.9223 12.2177 14.672 11.9672C14.4215 11.7168 14.1174 11.5916 13.7597 11.5916Z" fill="currentColor"/></svg>' },
    { name: 'Database', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 4.272)" d="M7.72772 15.4554C5.56685 15.4554 3.73864 15.1227 2.24318 14.4572C0.747724 13.7918 0 12.9797 0 12.0209V3.43454C0 2.49005 0.754885 1.68149 2.26466 1.0089C3.77442 0.3363 5.59549 0 7.72772 0C9.85996 0 11.681 0.3363 13.1908 1.0089C14.7006 1.68149 15.4554 2.49005 15.4554 3.43454V12.0209C15.4554 12.9797 14.7077 13.7918 13.2122 14.4572C11.7168 15.1227 9.8886 15.4554 7.72772 15.4554ZM7.72772 5.17325C9.00135 5.17325 10.2822 4.99082 11.5702 4.6259C12.8581 4.26098 13.5808 3.87101 13.7381 3.45601C13.5808 3.041 12.8616 2.64746 11.5809 2.27538C10.3 1.90331 9.01568 1.71727 7.72772 1.71727C6.42545 1.71727 5.14824 1.89973 3.89606 2.26466C2.64388 2.62957 1.91762 3.02669 1.71727 3.45601C1.91762 3.88532 2.64388 4.27887 3.89606 4.63663C5.14824 4.9944 6.42545 5.17325 7.72772 5.17325ZM7.72772 9.44503C8.32873 9.44503 8.90831 9.41638 9.46646 9.3591C10.0246 9.30191 10.5576 9.21958 11.0657 9.11232C11.5737 9.00496 12.0531 8.87256 12.5039 8.71512C12.9547 8.55778 13.3661 8.37881 13.7381 8.17851V5.6026C13.3661 5.8029 12.9547 5.98187 12.5039 6.13921C12.0531 6.29665 11.5737 6.42905 11.0657 6.53642C10.5576 6.64368 10.0246 6.726 9.46646 6.78319C8.90831 6.84048 8.32873 6.86912 7.72772 6.86912C7.12671 6.86912 6.53992 6.84048 5.96755 6.78319C5.39508 6.726 4.85487 6.64368 4.34684 6.53642C3.83881 6.42905 3.36299 6.29665 2.91936 6.13921C2.47574 5.98187 2.07504 5.8029 1.71727 5.6026V8.17851C2.07504 8.37881 2.47574 8.55778 2.91936 8.71512C3.36299 8.87256 3.83881 9.00496 4.34684 9.11232C4.85487 9.21958 5.39508 9.30191 5.96755 9.3591C6.53992 9.41638 7.12671 9.44503 7.72772 9.44503ZM7.72772 13.7381C8.38602 13.7381 9.05504 13.6881 9.73477 13.5879C10.4145 13.4878 11.0406 13.3554 11.613 13.1908C12.1855 13.0263 12.6649 12.8402 13.0513 12.6327C13.4377 12.4251 13.6666 12.2141 13.7381 11.9994V9.89581C13.3661 10.0961 12.9547 10.275 12.5039 10.4324C12.0531 10.5899 11.5737 10.7222 11.0657 10.8295C10.5576 10.9369 10.0246 11.0191 9.46646 11.0764C8.90831 11.1337 8.32873 11.1622 7.72772 11.1622C7.12671 11.1622 6.53992 11.1337 5.96755 11.0764C5.39508 11.0191 4.85487 10.9369 4.34684 10.8295C3.83881 10.7222 3.36299 10.5899 2.91936 10.4324C2.47574 10.275 2.07504 10.0961 1.71727 9.89581V12.0209C1.78882 12.2356 2.01422 12.4431 2.39345 12.6434C2.77268 12.8438 3.24851 13.0263 3.82093 13.1908C4.39335 13.3554 5.02302 13.4878 5.70996 13.5879C6.3968 13.6881 7.06942 13.7381 7.72772 13.7381Z" fill="currentColor"/></svg>' },
    { name: 'Permissions', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 3.414)" d="M11.1622 12.8795C11.5201 12.8795 11.8241 12.7544 12.0746 12.5039C12.325 12.2535 12.4502 11.9493 12.4502 11.5916C12.4502 11.2338 12.325 10.9297 12.0746 10.6793C11.8241 10.4288 11.5201 10.3036 11.1622 10.3036C10.8045 10.3036 10.5004 10.4288 10.2499 10.6793C9.99957 10.9297 9.87428 11.2338 9.87428 11.5916C9.87428 11.9493 9.99957 12.2535 10.2499 12.5039C10.5004 12.7544 10.8045 12.8795 11.1622 12.8795ZM11.1622 15.4554C11.6059 15.4554 12.0137 15.3517 12.3858 15.1442C12.7579 14.9367 13.0584 14.6612 13.2874 14.3177C12.9726 14.1317 12.6363 13.9886 12.2785 13.8885C11.9207 13.7882 11.5486 13.7381 11.1622 13.7381C10.7758 13.7381 10.4038 13.7882 10.046 13.8885C9.6883 13.9886 9.35199 14.1317 9.03711 14.3177C9.26616 14.6612 9.56661 14.9367 9.93867 15.1442C10.3107 15.3517 10.7187 15.4554 11.1622 15.4554ZM6.86912 17.1728C4.87991 16.6719 3.23777 15.5306 1.94267 13.749C0.647552 11.9673 0 9.98875 0 7.81355V2.57591L6.86912 0L13.7381 2.57591V7.4487C13.4662 7.33423 13.1872 7.23047 12.901 7.13743C12.6148 7.04439 12.3214 6.97638 12.0209 6.93352V3.778L6.86912 1.84607L1.71727 3.778V7.81355C1.71727 8.48617 1.80671 9.15879 1.98559 9.83142C2.16447 10.5039 2.41491 11.1444 2.7369 11.7525C3.05889 12.3608 3.44885 12.9225 3.9068 13.4377C4.36473 13.9529 4.87276 14.3821 5.43084 14.7256C5.58828 15.1835 5.79579 15.62 6.05338 16.035C6.31097 16.4501 6.60432 16.8221 6.93352 17.1512C6.9192 17.1512 6.90848 17.1548 6.90127 17.1619C6.89416 17.1691 6.88344 17.1728 6.86912 17.1728ZM11.1622 17.1728C9.97453 17.1728 8.96199 16.7541 8.12482 15.9169C7.28765 15.0798 6.86912 14.0673 6.86912 12.8795C6.86912 11.6917 7.28765 10.6793 8.12482 9.84213C8.96199 9.00496 9.97453 8.58632 11.1622 8.58632C12.35 8.58632 13.3626 9.00496 14.1996 9.84213C15.0369 10.6793 15.4554 11.6917 15.4554 12.8795C15.4554 14.0673 15.0369 15.0798 14.1996 15.9169C13.3626 16.7541 12.35 17.1728 11.1622 17.1728Z" fill="currentColor"/></svg>' },
    { name: 'Issue', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(5.131 4.272)" d="M6.86912 13.7381C7.81355 13.7381 8.62218 13.4018 9.2947 12.7293C9.96732 12.0567 10.3036 11.2482 10.3036 10.3036V6.86912C10.3036 5.92459 9.96732 5.11604 9.2947 4.44344C8.62218 3.77084 7.81355 3.43454 6.86912 3.43454C5.92459 3.43454 5.11604 3.77084 4.44344 4.44344C3.77084 5.11604 3.43454 5.92459 3.43454 6.86912V10.3036C3.43454 11.2482 3.77084 12.0567 4.44344 12.7293C5.11604 13.4018 5.92459 13.7381 6.86912 13.7381ZM5.15182 11.1622H8.58632V9.44503H5.15182V11.1622ZM5.15182 7.72772H8.58632V6.01042H5.15182V7.72772ZM6.86912 15.4554C5.93891 15.4554 5.07668 15.2265 4.28245 14.7685C3.48821 14.3106 2.86212 13.681 2.40418 12.8795H0V11.1622H1.80314C1.7602 10.8761 1.73516 10.5899 1.728 10.3036C1.72085 10.0174 1.71728 9.73116 1.71728 9.44503H0V7.72772H1.71728C1.71728 7.44149 1.72085 7.15525 1.728 6.86912C1.73516 6.58289 1.7602 6.29665 1.80314 6.01042H0V4.29318H2.40418C2.60453 3.96403 2.82992 3.65636 3.08035 3.37014C3.33079 3.08394 3.62058 2.8335 3.94972 2.61884L2.57591 1.20209L3.778 0L5.62403 1.84607C6.02474 1.71727 6.43266 1.65288 6.84759 1.65288C7.26262 1.65288 7.67043 1.71727 8.07114 1.84607L9.96021 0L11.1622 1.20209L9.74548 2.61884C10.0747 2.8335 10.3716 3.08035 10.6363 3.35942C10.9011 3.63847 11.1337 3.94972 11.334 4.29318H13.7381V6.01042H11.935C11.978 6.29665 12.003 6.58289 12.0101 6.86912C12.0173 7.15525 12.0209 7.44149 12.0209 7.72772H13.7381V9.44503H12.0209C12.0209 9.73116 12.0173 10.0174 12.0101 10.3036C12.003 10.5899 11.978 10.8761 11.935 11.1622H13.7381V12.8795H11.334C10.8761 13.681 10.2499 14.3106 9.45575 14.7685C8.66144 15.2265 7.79923 15.4554 6.86912 15.4554Z" fill="currentColor"/></svg>' },
    { name: 'Files', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(2.770 5.131)" d="M1.71728 13.7381C1.24502 13.7381 0.840745 13.57 0.504445 13.2338C0.168145 12.8975 0 12.4932 0 12.0209V1.71728C0 1.24502 0.168145 0.840746 0.504445 0.504445C0.840745 0.168145 1.24502 0 1.71728 0H6.86909L8.58632 1.71728H15.4554C15.9277 1.71728 16.332 1.88542 16.6683 2.22172C17.0046 2.55802 17.1728 2.96229 17.1728 3.43454H7.87795L6.16072 1.71728H1.71728V12.0209L3.778 5.15182H18.4607L16.2496 12.5146C16.1352 12.8866 15.9242 13.1836 15.6164 13.4054C15.3087 13.6273 14.9689 13.7381 14.5968 13.7381H1.71728ZM3.52041 12.0209H14.5968L16.1424 6.86912H5.06596L3.52041 12.0209Z" fill="currentColor"/></svg>' },
    { name: 'Console', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.414 5.131)" d="M1.71728 13.7381C1.24502 13.7381 0.840746 13.57 0.504445 13.2338C0.168145 12.8975 0 12.4932 0 12.0209V1.71728C0 1.24502 0.168145 0.840746 0.504445 0.504445C0.840746 0.168145 1.24502 0 1.71728 0H15.4554C15.9277 0 16.332 0.168145 16.6683 0.504445C17.0046 0.840746 17.1728 1.24502 17.1728 1.71728V12.0209C17.1728 12.4932 17.0046 12.8975 16.6683 13.2338C16.332 13.57 15.9277 13.7381 15.4554 13.7381H1.71728ZM1.71728 12.0209H15.4554V3.43454H1.71728V12.0209ZM4.72249 11.1622L3.52041 9.96021L5.73139 7.72772L3.49894 5.49524L4.72249 4.29318L8.15708 7.72772L4.72249 11.1622ZM8.58632 11.1622V9.44503H13.7381V11.1622H8.58632Z" fill="currentColor"/></svg>' },
    { name: 'Status', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.414 3.414)" d="M5.15182 12.0209C5.62406 12.0209 6.02834 11.8528 6.36464 11.5165C6.70097 11.1802 6.86912 10.7758 6.86912 10.3036C6.86912 9.83142 6.70097 9.4271 6.36464 9.09079C6.02834 8.75448 5.62406 8.58632 5.15182 8.58632C4.67957 8.58632 4.2753 8.75448 3.939 9.09079C3.6027 9.4271 3.43454 9.83142 3.43454 10.3036C3.43454 10.7758 3.6027 11.1802 3.939 11.5165C4.2753 11.8528 4.67957 12.0209 5.15182 12.0209ZM12.0209 12.0209C12.4932 12.0209 12.8975 11.8528 13.2338 11.5165C13.57 11.1802 13.7381 10.7758 13.7381 10.3036C13.7381 9.83142 13.57 9.4271 13.2338 9.09079C12.8975 8.75448 12.4932 8.58632 12.0209 8.58632C11.5486 8.58632 11.1444 8.75448 10.8081 9.09079C10.4718 9.4271 10.3036 9.83142 10.3036 10.3036C10.3036 10.7758 10.4718 11.1802 10.8081 11.5165C11.1444 11.8528 11.5486 12.0209 12.0209 12.0209ZM8.58632 6.86912C9.05864 6.86912 9.46285 6.70097 9.79916 6.36466C10.1355 6.02834 10.3036 5.62406 10.3036 5.15182C10.3036 4.67957 10.1355 4.2753 9.79916 3.939C9.46285 3.6027 9.05864 3.43454 8.58632 3.43454C8.11411 3.43454 7.7098 3.6027 7.37348 3.939C7.03728 4.2753 6.86912 4.67957 6.86912 5.15182C6.86912 5.62406 7.03728 6.02834 7.37348 6.36466C7.7098 6.70097 8.11411 6.86912 8.58632 6.86912ZM8.58632 17.1728C7.39862 17.1728 6.28235 16.9473 5.23768 16.4965C4.193 16.0457 3.28428 15.434 2.51151 14.6612C1.73874 13.8885 1.12696 12.9797 0.676176 11.935C0.225392 10.8903 0 9.77413 0 8.58632C0 7.39862 0.225392 6.28233 0.676176 5.23768C1.12696 4.193 1.73874 3.28428 2.51151 2.51151C3.28428 1.73874 4.193 1.12696 5.23768 0.676176C6.28235 0.225392 7.39862 0 8.58632 0C9.77413 0 10.8903 0.225392 11.935 0.676176C12.9797 1.12696 13.8885 1.73874 14.6612 2.51151C15.434 3.28428 16.0457 4.193 16.4965 5.23768C16.9473 6.28233 17.1728 7.39862 17.1728 8.58632C17.1728 9.77413 16.9473 10.8903 16.4965 11.935C16.0457 12.9797 15.434 13.8885 14.6612 14.6612C13.8885 15.434 12.9797 16.0457 11.935 16.4965C10.8903 16.9473 9.77413 17.1728 8.58632 17.1728ZM8.58632 15.4554C10.5039 15.4554 12.1282 14.79 13.4591 13.4591C14.79 12.1282 15.4554 10.5039 15.4554 8.58632C15.4554 6.66872 14.79 5.04448 13.4591 3.7136C12.1282 2.38271 10.5039 1.71728 8.58632 1.71728C6.66874 1.71728 5.04448 2.38271 3.7136 3.7136C2.38271 5.04448 1.71728 6.66872 1.71728 8.58632C1.71728 10.5039 2.38271 12.1282 3.7136 13.4591C5.04448 14.79 6.66874 15.4554 8.58632 15.4554Z" fill="currentColor"/></svg>' },
    { name: 'Add widget', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 4.272)" d="M0 0H6.86912V6.86912H0V0ZM8.58632 0H15.4554V6.86912H8.58632V0ZM0 8.58632H6.86912V15.4554H0V8.58632ZM11.1622 8.58632H12.8795V11.1622H15.4554V12.8795H12.8795V15.4554H11.1622V12.8795H8.58632V11.1622H11.1622V8.58632ZM10.3036 1.71727V5.15181H13.7381V1.71727H10.3036ZM1.71727 1.71727V5.15181H5.15181V1.71727H1.71727ZM1.71727 10.3036V13.7381H5.15181V10.3036H1.71727Z" fill="currentColor"/></svg>' },
    { name: 'Layers', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 3.821)" d="M7.72772 16.357L0 10.3466L1.41675 9.27327L7.72772 14.1675L14.0387 9.27327L15.4554 10.3466L7.72772 16.357ZM7.72772 12.0209L0 6.01045L7.72772 0L15.4554 6.01045L7.72772 12.0209ZM7.72772 9.83142L12.6649 6.01045L7.72772 2.18952L2.79056 6.01045L7.72772 9.83142Z" fill="currentColor"/></svg>' },
    { name: 'Employee', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.414 3.414)" d="M1.71728 17.1728C1.24502 17.1728 0.840746 17.0046 0.504445 16.6683C0.168145 16.332 0 15.9277 0 15.4554V6.01045C0 5.5382 0.168145 5.13393 0.504445 4.79763C0.840746 4.46133 1.24502 4.29318 1.71728 4.29318H6.01045V1.71728C6.01045 1.24502 6.1786 0.840746 6.51488 0.504445C6.85119 0.168145 7.25551 0 7.72772 0H9.44503C9.91725 0 10.3216 0.168145 10.6579 0.504445C10.9941 0.840746 11.1622 1.24502 11.1622 1.71728V4.29318H15.4554C15.9277 4.29318 16.332 4.46133 16.6683 4.79763C17.0046 5.13393 17.1728 5.5382 17.1728 6.01045V15.4554C17.1728 15.9277 17.0046 16.332 16.6683 16.6683C16.332 17.0046 15.9277 17.1728 15.4554 17.1728H1.71728ZM1.71728 15.4554H15.4554V6.01045H11.1622C11.1622 6.48274 10.9941 6.88695 10.6579 7.22326C10.3216 7.55957 9.91725 7.72772 9.44503 7.72772H7.72772C7.25551 7.72772 6.85119 7.55957 6.51488 7.22326C6.1786 6.88695 6.01045 6.48274 6.01045 6.01045H1.71728V15.4554ZM3.43454 13.7381H8.58632V13.3518C8.58632 13.1085 8.51842 12.8831 8.38242 12.6756C8.24651 12.4681 8.05682 12.3071 7.81355 12.1926C7.52742 12.0638 7.23758 11.9673 6.94424 11.9029C6.65089 11.8385 6.33962 11.8062 6.01045 11.8062C5.68131 11.8062 5.37006 11.8385 5.07668 11.9029C4.78332 11.9673 4.49353 12.0638 4.20731 12.1926C3.96403 12.3071 3.77442 12.4681 3.63847 12.6756C3.50252 12.8831 3.43454 13.1085 3.43454 13.3518V13.7381ZM10.3036 12.4502H13.7381V11.1622H10.3036V12.4502ZM6.01045 11.1622C6.36826 11.1622 6.67232 11.037 6.9228 10.7867C7.17318 10.5362 7.29837 10.2321 7.29837 9.87428C7.29837 9.51654 7.17318 9.21248 6.9228 8.96199C6.67232 8.71162 6.36826 8.58632 6.01045 8.58632C5.65269 8.58632 5.34858 8.71162 5.09815 8.96199C4.84771 9.21248 4.72249 9.51654 4.72249 9.87428C4.72249 10.2321 4.84771 10.5362 5.09815 10.7867C5.34858 11.037 5.65269 11.1622 6.01045 11.1622ZM10.3036 9.87428H13.7381V8.58632H10.3036V9.87428ZM7.72772 6.01045H9.44503V1.71728H7.72772V6.01045Z" fill="currentColor"/></svg>' },
    { name: 'Filters', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(2.555 2.555)" d="M1.71727 18.89V15.2837C1.21641 15.112 0.804971 14.8079 0.482983 14.3714C0.160994 13.9349 0 13.4377 0 12.8795V4.29318H1.71727V0.858632C1.71727 0.615353 1.79956 0.411434 1.96413 0.246854C2.1287 0.0822847 2.33263 0 2.57591 0C2.81919 0 3.02312 0.0822847 3.18769 0.246854C3.35225 0.411434 3.43454 0.615353 3.43454 0.858632V4.29318H5.15181V12.8795C5.15181 13.4377 4.99082 13.9349 4.66883 14.3714C4.34684 14.8079 3.93541 15.112 3.43454 15.2837V18.89H1.71727ZM8.58632 18.89V15.2837C8.08546 15.112 7.67404 14.8079 7.35205 14.3714C7.03008 13.9349 6.86909 13.4377 6.86909 12.8795V4.29318H8.58632V0.858632C8.58632 0.615353 8.66865 0.411434 8.8332 0.246854C8.99775 0.0822847 9.20176 0 9.44503 0C9.6883 0 9.89221 0.0822847 10.0568 0.246854C10.2213 0.411434 10.3036 0.615353 10.3036 0.858632V4.29318H12.0209V12.8795C12.0209 13.4377 11.8599 13.9349 11.5379 14.3714C11.2159 14.8079 10.8045 15.112 10.3036 15.2837V18.89H8.58632ZM15.4554 18.89V15.2837C14.9546 15.112 14.5432 14.8079 14.2212 14.3714C13.8992 13.9349 13.7381 13.4377 13.7381 12.8795V4.29318H15.4554V0.858632C15.4554 0.615353 15.5378 0.411434 15.7023 0.246854C15.8669 0.0822847 16.0708 0 16.314 0C16.5573 0 16.7613 0.0822847 16.9259 0.246854C17.0904 0.411434 17.1728 0.615353 17.1728 0.858632V4.29318H18.89V12.8795C18.89 13.4377 18.729 13.9349 18.407 14.3714C18.085 14.8079 17.6736 15.112 17.1728 15.2837V18.89H15.4554ZM1.71727 6.01045V9.44503H3.43454V6.01045H1.71727ZM8.58632 6.01045V9.44503H10.3036V6.01045H8.58632ZM15.4554 6.01045V9.44503H17.1728V6.01045H15.4554ZM2.57591 13.7381C2.81919 13.7381 3.02312 13.6559 3.18769 13.4914C3.35225 13.3267 3.43454 13.1228 3.43454 12.8795V11.1622H1.71727V12.8795C1.71727 13.1228 1.79956 13.3267 1.96413 13.4914C2.1287 13.6559 2.33263 13.7381 2.57591 13.7381ZM9.44503 13.7381C9.6883 13.7381 9.89221 13.6559 10.0568 13.4914C10.2213 13.3267 10.3036 13.1228 10.3036 12.8795V11.1622H8.58632V12.8795C8.58632 13.1228 8.66865 13.3267 8.8332 13.4914C8.99775 13.6559 9.20176 13.7381 9.44503 13.7381ZM16.314 13.7381C16.5573 13.7381 16.7613 13.6559 16.9259 13.4914C17.0904 13.3267 17.1728 13.1228 17.1728 12.8795V11.1622H15.4554V12.8795C15.4554 13.1228 15.5378 13.3267 15.7023 13.4914C15.8669 13.6559 16.0708 13.7381 16.314 13.7381Z" fill="currentColor"/></svg>' },
    { name: 'History', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 4.272)" d="M7.72772 15.4554C5.75283 15.4554 4.03201 14.8008 2.56517 13.4914C1.09834 12.1819 0.257591 10.5469 0.0429351 8.58632H1.80314C2.00348 10.0747 2.66535 11.3053 3.78873 12.2785C4.91211 13.2516 6.22514 13.7381 7.72772 13.7381C9.40206 13.7381 10.8224 13.1551 11.9887 11.9887C13.1551 10.8224 13.7381 9.40206 13.7381 7.72772C13.7381 6.05338 13.1551 4.63306 11.9887 3.46674C10.8224 2.30043 9.40206 1.71727 7.72772 1.71727C6.74033 1.71727 5.81722 1.94624 4.95862 2.40418C4.09999 2.86212 3.3773 3.49179 2.79056 4.29318H5.15181V6.01042H0V0.858633H1.71727V2.87643C2.44711 1.96055 3.33794 1.25218 4.38978 0.75131C5.44155 0.25044 6.55424 0 7.72772 0C8.80105 0 9.80638 0.203929 10.7437 0.611778C11.681 1.01963 12.4968 1.57059 13.1908 2.26466C13.8849 2.95872 14.4358 3.77442 14.8436 4.71177C15.2515 5.64907 15.4554 6.65439 15.4554 7.72772C15.4554 8.80105 15.2515 9.80638 14.8436 10.7437C14.4358 11.681 13.8849 12.4968 13.1908 13.1908C12.4968 13.8849 11.681 14.4358 10.7437 14.8436C9.80638 15.2515 8.80105 15.4554 7.72772 15.4554ZM10.1319 11.334L6.86912 8.07114V3.43454H8.58632V7.3843L11.334 10.1319L10.1319 11.334Z" fill="currentColor"/></svg>' },
    { name: 'Export', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.628 5.131)" d="M5.58114 13.7381C5.10888 13.7381 4.70461 13.57 4.36831 13.2338C4.03201 12.8975 3.86386 12.4932 3.86386 12.0209V9.44503H6.43977V7.5131C5.9389 7.48445 5.46307 7.37348 5.01228 7.18039C4.5615 6.9871 4.15008 6.69736 3.778 6.31097V5.36644H2.79056L0 2.57591C0.515181 1.91762 1.15201 1.45252 1.91047 1.18062C2.66893 0.908719 3.43454 0.772772 4.20731 0.772772C4.5937 0.772772 4.96936 0.801396 5.33427 0.858633C5.6992 0.91588 6.06769 1.02321 6.43977 1.18062V0H16.7434V11.1622C16.7434 11.8778 16.4929 12.486 15.9921 12.9869C15.4912 13.4878 14.883 13.7381 14.1675 13.7381H5.58114ZM8.15707 9.44503H13.3089V11.1622C13.3089 11.4055 13.3911 11.6095 13.5557 11.7741C13.7203 11.9386 13.9242 12.0209 14.1675 12.0209C14.4108 12.0209 14.6147 11.9386 14.7793 11.7741C14.9439 11.6095 15.0261 11.4055 15.0261 11.1622V1.71728H8.15707V2.23246L13.3089 7.3843V8.58632H12.1068L9.65965 6.13921L9.48789 6.31097C9.28759 6.51128 9.07647 6.69025 8.85473 6.84759C8.6329 7.00503 8.40034 7.12671 8.15707 7.21254V9.44503ZM3.52041 3.64921H5.49527V5.49524C5.667 5.60971 5.84588 5.68843 6.03192 5.73139C6.21793 5.77436 6.41112 5.79579 6.61153 5.79579C6.94063 5.79579 7.23758 5.74572 7.50228 5.64557C7.76708 5.54531 8.02828 5.36644 8.28587 5.10888L8.45753 4.93716L7.25551 3.73507C6.84048 3.32006 6.37537 3.0088 5.86019 2.8013C5.34501 2.59379 4.79405 2.49005 4.20731 2.49005C3.92111 2.49005 3.64921 2.51151 3.39161 2.55445C3.13402 2.59737 2.87643 2.66177 2.61884 2.74764L3.52041 3.64921ZM11.5916 11.1622H5.58114V12.0209H11.7204C11.6774 11.8921 11.6453 11.7561 11.6237 11.613C11.6023 11.4699 11.5916 11.3197 11.5916 11.1622ZM5.58114 12.0209C5.58114 11.8921 5.58114 11.7561 5.58114 11.613C5.58114 11.4699 5.58114 11.3197 5.58114 11.1622C5.58114 11.3053 5.58114 11.4485 5.58114 11.5916C5.58114 11.7347 5.58114 11.8778 5.58114 12.0209Z" fill="currentColor"/></svg>' },
    { name: 'Account settings', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.478 4.702)" d="M6.86912 6.86912C5.92459 6.86912 5.11604 6.53281 4.44344 5.86019C3.77084 5.18757 3.43454 4.37904 3.43454 3.43454C3.43454 2.49005 3.77084 1.68149 4.44344 1.0089C5.11604 0.3363 5.92459 0 6.86912 0C7.81355 0 8.62218 0.3363 9.2947 1.0089C9.96732 1.68149 10.3036 2.49005 10.3036 3.43454C10.3036 4.37904 9.96732 5.18757 9.2947 5.86019C8.62218 6.53281 7.81355 6.86912 6.86912 6.86912ZM0 13.7381V11.334C0 10.8618 0.121645 10.4181 0.364924 10.0031C0.608203 9.58815 0.944503 9.27327 1.37381 9.05864C2.10366 8.68658 2.92652 8.3717 3.8424 8.11411C4.75828 7.85652 5.76717 7.72772 6.86912 7.72772C6.9836 7.72772 7.08375 7.72772 7.16958 7.72772C7.25551 7.72772 7.34134 7.74205 7.42717 7.77069C7.31269 8.02828 7.21615 8.29659 7.13743 8.57561C7.05871 8.85473 6.99792 9.14447 6.95495 9.44503H6.86912C5.85304 9.44503 4.94074 9.57383 4.13219 9.83142C3.32363 10.089 2.66177 10.3466 2.14659 10.6042C2.01779 10.6757 1.91404 10.7758 1.83533 10.9046C1.75662 11.0334 1.71728 11.1766 1.71728 11.334V12.0209H7.12671C7.21254 12.3214 7.32701 12.6183 7.47013 12.9117C7.61325 13.2051 7.77069 13.4805 7.94235 13.7381H0ZM12.0209 14.5968L11.7633 13.3089C11.5916 13.2373 11.4306 13.1622 11.2803 13.0834C11.1301 13.0047 10.9763 12.9082 10.8188 12.7937L9.57383 13.1801L8.71512 11.7204L9.70262 10.8618C9.67398 10.6614 9.65965 10.4754 9.65965 10.3036C9.65965 10.1319 9.67398 9.94589 9.70262 9.74548L8.71512 8.88688L9.57383 7.42717L10.8188 7.81355C10.9763 7.69908 11.1301 7.60253 11.2803 7.52381C11.4306 7.44509 11.5916 7.36998 11.7633 7.29837L12.0209 6.01042H13.7381L13.9957 7.29837C14.1675 7.36998 14.3284 7.4487 14.4788 7.53453C14.629 7.62036 14.7828 7.72772 14.9403 7.85652L16.1853 7.42717L17.044 8.92985L16.0565 9.78845C16.0851 9.96021 16.0994 10.1391 16.0994 10.3251C16.0994 10.5111 16.0851 10.69 16.0565 10.8618L17.044 11.7204L16.1853 13.1801L14.9403 12.7937C14.7828 12.9082 14.629 13.0047 14.4788 13.0834C14.3284 13.1622 14.1675 13.2373 13.9957 13.3089L13.7381 14.5968H12.0209ZM12.8795 12.0209C13.3518 12.0209 13.7561 11.8528 14.0924 11.5165C14.4287 11.1802 14.5968 10.7758 14.5968 10.3036C14.5968 9.83142 14.4287 9.4271 14.0924 9.09079C13.7561 8.75448 13.3518 8.58632 12.8795 8.58632C12.4073 8.58632 12.003 8.75448 11.6667 9.09079C11.3304 9.4271 11.1622 9.83142 11.1622 10.3036C11.1622 10.7758 11.3304 11.1802 11.6667 11.5165C12.003 11.8528 12.4073 12.0209 12.8795 12.0209ZM6.86912 5.15182C7.34134 5.15182 7.74565 4.98367 8.08196 4.64737C8.41817 4.31107 8.58632 3.9068 8.58632 3.43454C8.58632 2.96229 8.41817 2.55802 8.08196 2.22172C7.74565 1.88542 7.34134 1.71728 6.86912 1.71728C6.3968 1.71728 5.99256 1.88542 5.65626 2.22172C5.31996 2.55802 5.15182 2.96229 5.15182 3.43454C5.15182 3.9068 5.31996 4.31107 5.65626 4.64737C5.99256 4.98367 6.3968 5.15182 6.86912 5.15182Z" fill="currentColor"/></svg>' },
    { name: 'Hierarchy', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(3.414 4.272)" d="M11.1622 15.4554V12.8795H7.72772V4.29318H6.01045V6.86912H0V0H6.01045V2.57591H11.1622V0H17.1728V6.86912H11.1622V4.29318H9.44503V11.1622H11.1622V8.58632H17.1728V15.4554H11.1622ZM12.8795 5.15181H15.4554V1.71727H12.8795V5.15181ZM12.8795 13.7381H15.4554V10.3036H12.8795V13.7381ZM1.71728 5.15181H4.29318V1.71727H1.71728V5.15181Z" fill="currentColor"/></svg>' },
    { name: 'Bulk edit', svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path transform="translate(4.272 5.131)" d="M1.71727 13.7381C1.24502 13.7381 0.840745 13.57 0.504445 13.2338C0.168145 12.8975 0 12.4932 0 12.0209C0 11.5486 0.168145 11.1444 0.504445 10.8081C0.840745 10.4718 1.24502 10.3036 1.71727 10.3036C2.18952 10.3036 2.59379 10.4718 2.93009 10.8081C3.26639 11.1444 3.43454 11.5486 3.43454 12.0209C3.43454 12.4932 3.26639 12.8975 2.93009 13.2338C2.59379 13.57 2.18952 13.7381 1.71727 13.7381ZM1.71727 8.58632C1.24502 8.58632 0.840745 8.41817 0.504445 8.08196C0.168145 7.74565 0 7.34134 0 6.86912C0 6.3968 0.168145 5.99259 0.504445 5.65628C0.840745 5.31997 1.24502 5.15182 1.71727 5.15182C2.18952 5.15182 2.59379 5.31997 2.93009 5.65628C3.26639 5.99259 3.43454 6.3968 3.43454 6.86912C3.43454 7.34134 3.26639 7.74565 2.93009 8.08196C2.59379 8.41817 2.18952 8.58632 1.71727 8.58632ZM1.71727 3.43454C1.24502 3.43454 0.840745 3.2664 0.504445 2.9301C0.168145 2.59379 0 2.18952 0 1.71728C0 1.24502 0.168145 0.840746 0.504445 0.504445C0.840745 0.168145 1.24502 0 1.71727 0C2.18952 0 2.59379 0.168145 2.93009 0.504445C3.26639 0.840746 3.43454 1.24502 3.43454 1.71728C3.43454 2.18952 3.26639 2.59379 2.93009 2.9301C2.59379 3.2664 2.18952 3.43454 1.71727 3.43454ZM6.86912 3.43454C6.3968 3.43454 5.99259 3.2664 5.65628 2.9301C5.31997 2.59379 5.15181 2.18952 5.15181 1.71728C5.15181 1.24502 5.31997 0.840746 5.65628 0.504445C5.99259 0.168145 6.3968 0 6.86912 0C7.34134 0 7.74565 0.168145 8.08196 0.504445C8.41817 0.840746 8.58632 1.24502 8.58632 1.71728C8.58632 2.18952 8.41817 2.59379 8.08196 2.9301C7.74565 3.2664 7.34134 3.43454 6.86912 3.43454ZM12.0209 3.43454C11.5486 3.43454 11.1444 3.2664 10.8081 2.9301C10.4718 2.59379 10.3036 2.18952 10.3036 1.71728C10.3036 1.24502 10.4718 0.840746 10.8081 0.504445C11.1444 0.168145 11.5486 0 12.0209 0C12.4932 0 12.8975 0.168145 13.2338 0.504445C13.57 0.840746 13.7381 1.24502 13.7381 1.71728C13.7381 2.18952 13.57 2.59379 13.2338 2.9301C12.8975 3.2664 12.4932 3.43454 12.0209 3.43454ZM6.86912 8.58632C6.3968 8.58632 5.99259 8.41817 5.65628 8.08196C5.31997 7.74565 5.15181 7.34134 5.15181 6.86912C5.15181 6.3968 5.31997 5.99259 5.65628 5.65628C5.99259 5.31997 6.3968 5.15182 6.86912 5.15182C7.34134 5.15182 7.74565 5.31997 8.08196 5.65628C8.41817 5.99259 8.58632 6.3968 8.58632 6.86912C8.58632 7.34134 8.41817 7.74565 8.08196 8.08196C7.74565 8.41817 7.34134 8.58632 6.86912 8.58632ZM7.72772 13.7381V11.0978L12.4717 6.37537C12.6005 6.24658 12.7436 6.15353 12.901 6.09635C13.0584 6.03906 13.2158 6.01042 13.3733 6.01042C13.5449 6.01042 13.7096 6.04267 13.8669 6.10707C14.0244 6.17146 14.1675 6.26801 14.2963 6.3968L15.0905 7.19111C15.205 7.31991 15.2945 7.46302 15.3588 7.62036C15.4233 7.7778 15.4554 7.93524 15.4554 8.09268C15.4554 8.25001 15.4268 8.41106 15.3696 8.57561C15.3123 8.74016 15.2193 8.88688 15.0905 9.01568L10.368 13.7381H7.72772ZM9.01568 12.4502H9.83141L12.4288 9.83142L12.0424 9.42349L11.6345 9.03711L9.01568 11.6346V12.4502ZM12.0424 9.42349L11.6345 9.03711L12.4288 9.83142L12.0424 9.42349Z" fill="currentColor"/></svg>' }
  ],
  /* base = the screen behind, modal = the dialog on its own.
     ar = the dialog's own aspect ratio, w = how wide it sits on that screen. */
  popups: [
    { label: 'Person Quick Create', ar: '1000/749', w: '52%',
      base: '%%EPIMG:622b14abba%%',
      modal: '%%EPIMG:38279e7cd5%%' },
    { label: 'Loading document', ar: '1120/404', w: '46%',
      base: '%%EPIMG:622b14abba%%',
      modal: '%%EPIMG:2251c2a7d7%%' }
  ],
  chatbot: [
    { label: 'Variation A', ar: '720/1056', src: '%%EPIMG:4db8e378e8%%' },
    { label: 'Variation B', ar: '720/975',  src: '%%EPIMG:c0b6b0af73%%' },
    { label: 'Variation C', ar: '720/975',  src: '%%EPIMG:fa9934eeef%%' }
  ],
  creatives: [
    { label: 'Meet Sarah', src: '%%EPIMG:abb7c26a02%%' },
    { label: 'No clarity. Just chaos.', src: '%%EPIMG:e72e5a7ed2%%' },
    { label: 'The evolution of AI', src: '%%EPIMG:b0db38f913%%' },
    { label: 'Desktop and mobile', src: '%%EPIMG:6710202fe3%%' },
    { label: 'PSA vs ERP', src: '%%EPIMG:164497965f%%' },
    { label: 'Welcome to the team', src: '%%EPIMG:9821be7981%%' }
  ],
  linkedin: [
    { label: 'AI-Driven Operations Intelligence', src: '%%EPIMG:946982df80%%' }
  ]
};

/* The working file. Empty string hides the button in section 13. */
const FIGMA_FILE = 'https://www.figma.com/design/PDpZ5gERLQqnE8lPsiPfTZ/Untitled?node-id=0-1&t=zqTCRsGvYWHLYmZr-1';

/* ============================================================
   DECISIONS — what was tried, what shipped, and why.
   \`ui\` takes an image URL (blank = an empty device frame).
   \`todo: true\` marks a slot you still need to write.
   ============================================================ */
const DECISIONS = [
  {
    q: 'How do you tell someone where they are in a four-part form?',
    tag: 'Fix 01 \\u00b7 Progress',
    note: 'the one people noticed within minutes of the beta going out.',
    opts: [
      { name: 'Direction A \\u00b7 Percentage bar', ui: '', mock: 'pct',
        what: 'A single bar under the header filling up as you go, with a percentage beside it.',
        why:  'It says how far, not where. 62% does not tell you which section you are in or what is still left.' },
      { name: 'Direction B \\u00b7 Step count', ui: '', mock: 'count',
        what: 'A plain \\u201cSection 2 of 4\\u201d line in the footer, next to the buttons.',
        why:  'Easy to miss, and it names nothing. People still could not tell what the next screen would ask for.' },
      { name: 'Stepped indicator', ui: '', win: true, mock: 'step',
        what: 'Completed sections, the section you are on, and what is still left \\u2014 on screen the whole time.',
        why:  'It answers the exact question people kept asking: is there another screen coming?' }
    ]
  },
  {
    q: 'How do you prove to someone that their work is safe?',
    tag: 'Fix 02 \\u00b7 Auto-save',
    note: 'the system was already saving. nobody could see it.',
    opts: [
      { name: 'A brief \\u201cSaved\\u201d toast', ui: '', mock: 'toast',
        what: 'A notification confirming the save, then fading out.',
        why:  'It disappeared too quickly. Beta testers did not notice it, and still felt anxious about losing their work.' },
      { name: 'Persistent \\u201cLast saved\\u201d', ui: '', win: true, mock: 'saved',
        what: 'A line in the header carrying the last save time, updating live as you type.',
        why:  'Technically unnecessary \\u2014 the save happened either way. It changed how the whole thing felt.' },
      { name: 'Direction C \\u00b7 Manual save button', ui: '', mock: 'button',
        what: 'A Save button in the header, with an \\u201cunsaved changes\\u201d warning until you press it.',
        why:  'It hands the job back to the person. Forget once, and the work is gone \\u2014 the exact fear we were fixing.' }
    ]
  },
  {
    q: 'What should a screen be grouped around?',
    tag: 'Fix 03 \\u00b7 Structure',
    note: 'this is the one I got wrong, and customer success caught it.',
    opts: [
      { name: 'By the data model', ui: '', mock: 'model',
        what: 'The structure as built: screens follow how the records are stored.',
        why:  'It is how the database was organised, not how anyone describes their own work.' },
      { name: 'Details + assignments together', ui: '', mock: 'together',
        what: 'My first wireframe. Project details and task assignments on one screen, because they read as related.',
        why:  'Testing killed it. People touch them at completely different moments \\u2014 one before the work starts, one all the way through.' },
      { name: 'By when it happens', ui: '', win: true, mock: 'when',
        what: 'Set-up kept separate from everything that gets adjusted while the work is running.',
        why:  'It matches the order people actually describe the task in, so nothing needs re-explaining.' }
    ]
  }
];

/* Project navigation at the bottom of the page */
const PROJECTS = {
  prev: { title: 'CP Signage', href: 'https://www.akshatportfolio.online/project' },
  next: { title: 'Parkin',     href: 'https://www.akshatportfolio.online/project' },
  all:  'https://www.akshatportfolio.online/project',
  canvas: '/'
};

(function(){
"use strict";
const $=(s,c)=>(c||document).querySelector(s);
const $$=(s,c)=>Array.from((c||document).querySelectorAll(s));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- what the visitor actually did, for the receipt at the end ---------- */
const STATS={t0:Date.now(),reached:1,tickets:0,call:null,frames:new Set(),variations:new Set(),race:0,screens:new Set(),palette:0};

/* ---------- sections number themselves, so new ones can be slotted in ---------- */
const SECTIONS=$$('section[data-hud]');
/* chapters are stage breaks, not numbered steps — the content sections number straight through */
let _n=0;
SECTIONS.forEach(s=>{
  if(s.dataset.chapter)return;
  const e=$('.eyebrow',s);_n++;
  if(e&&/^\\d\\d/.test(e.textContent))e.textContent=String(_n).padStart(2,'0')+e.textContent.slice(2);
});
/* every content section says which stage it belongs to */
(function(){
  SECTIONS.forEach(s=>{
    if(!s.dataset.stage)return;
    const [n,name]=s.dataset.stage.split('|'),cur={n,name};
    const e=$('.eyebrow',s);if(!e)return;
    e.insertAdjacentHTML('afterend','<span class="stg">Stage <b>'+cur.n+'</b> <s>\\u00b7</s> '+esc(cur.name)+'</span>');
  });
})();

/* ---------- the decision blocks ---------- */
/* a quick wireframe for each direction, until a real frame goes in \`ui\` */
function wfHTML(k){
  const L=w=>'<span class="wf-ln" style="width:'+w+'%"></span>';
  const fld=w=>'<div class="wf-fld">'+L(w)+'<u></u></div>';
  const top=(t,r)=>'<div class="wf-top"><b>'+t+'</b><span class="r">'+(r||'')+'</span></div>';
  const foot=(mid,cls)=>'<div class="wf-foot"><span class="wf-btn">Back</span>'+(mid?'<span class="'+(cls||'')+'">'+mid+'</span>':'')+'<span class="wf-btn p">Continue</span></div>';
  const form=fld(26)+fld(34)+L(70)+L(48);
  const W={
    pct:   top('Timesheet')+'<div class="wf-body"><div class="wf-pct wf-hl"><span><i></i></span><em>62%</em></div>'+form+'</div>'+foot(),
    count: top('Timesheet')+'<div class="wf-body">'+form+L(58)+'</div>'+foot('Section 2 of 4','wf-cnt wf-hl'),
    step:  top('Timesheet')+'<div class="wf-body"><div class="wf-step wf-hl"><span class="d"><i>\\u2713</i>Project</span><span class="n"><i>2</i>Hours</span><span><i>3</i>Notes</span><span><i>4</i>Approval</span></div>'+form+'</div>'+foot(),
    toast: top('Expenses')+'<div class="wf-body">'+form+L(62)+'</div>'+foot()+'<i class="wf-toast wf-hl">Saved</i>',
    saved: top('Expenses','<span class="wf-saved wf-hl"><s></s>Last saved 10:42</span>')+'<div class="wf-body">'+form+L(62)+'</div>'+foot(),
    button:top('Expenses','<span class="wf-warn">Unsaved changes</span><span class="wf-btn p wf-hl">Save</span>')+'<div class="wf-body">'+form+L(62)+'</div>'+foot(),
    model: top('Project','<span class="wf-tabs wf-hl"><span class="n">Records</span><span>Entries</span><span>Rates</span><span>Links</span></span>')+'<div class="wf-body">'+fld(30)+fld(22)+fld(40)+L(54)+'</div>'+foot(),
    together: top('Project')+'<div class="wf-body"><div class="wf-cols wf-hl"><div><h6>Project details</h6>'+L(80)+L(60)+L(70)+'</div><div><h6>Assignments</h6>'+L(70)+L(85)+L(50)+'</div></div></div>'+foot(),
    when:  top('Project','<span class="wf-tabs wf-hl"><span class="n">Set up</span><span>While it runs</span></span>')+'<div class="wf-body"><span class="wf-cap">Before work starts</span>'+fld(30)+fld(38)+L(52)+'</div>'+foot()
  };
  return W[k]?'<div class="wf" aria-hidden="true">'+W[k]+'</div>':'';
}
(function(){
  const box=$('#decs');if(!box||typeof DECISIONS==='undefined')return;
  box.innerHTML=DECISIONS.map(d=>
    '<div class="dec reveal">'+
      '<div class="dec-q"><span class="k">'+esc(d.tag)+'</span><h4>'+esc(d.q)+'</h4></div>'+
      '<div class="dec-opts" style="--decn:'+d.opts.length+'">'+
        d.opts.map(o=>
          '<div class="dec-opt'+(o.win?' win':'')+'">'+
            '<div class="dec-top"><span class="dec-lab">'+(o.win?'Shipped':'Not this one')+'</span>'+
              '<span class="dec-call '+(o.win?'yes':'no')+'">'+(o.win?'Selected':'Rejected')+'</span></div>'+
            (!o.ui&&o.mock?wfHTML(o.mock):'<div class="dvc'+(o.ui?' has':'')+'">'+slotHTML(o.ui,{label:'',dim:'',hint:'Drop a frame here',ar:d.ar||'16/10'})+'</div>')+
            '<h5>'+esc(o.name)+'</h5>'+
            '<p'+(o.todo?' class="todo"':'')+'>'+esc(o.what)+'</p>'+
            '<div class="why"><span>'+(o.win?'Why it shipped':'Why it did not')+'</span>'+
              '<p'+(o.todo?' class="todo"':'')+'>'+esc(o.why)+'</p></div>'+
          '</div>').join('')+
      '</div>'+
      (d.note?'<div class="dec-foot">'+esc(d.note)+'</div>':'')+
    '</div>').join('');
})();
$$('[data-ref]').forEach(r=>{
  const i=SECTIONS.findIndex(s=>s.id===r.dataset.ref);
  if(i>-1)r.textContent=String(i+1).padStart(2,'0');
});
$$('.foot span').forEach(s=>{if(/Section \\d+ of \\d+/.test(s.textContent))s.textContent='Section '+SECTIONS.length+' of '+SECTIONS.length+' · all sections complete';});

/* ---------- toast ---------- */
const toastEl=$('#toast');let toastT;
function toast(m){toastEl.textContent=m;toastEl.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toastEl.classList.remove('show'),2400);}

/* ---------- reveal ---------- */
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('seen');io.unobserve(e.target);}});},{threshold:.18});
$$('.reveal').forEach(e=>io.observe(e));

/* ---------- top progress line ---------- */
const prog=$('#progress');
function onScrollProg(){const h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(h>0?scrollY/h*100:0)+'%';}
addEventListener('scroll',onScrollProg,{passive:true});

/* ---------- project links ---------- */
$('#homeBtn').href=PROJECTS.canvas;

/* ---------- the Figma file ---------- */
if(FIGMA_FILE){$('#figmaLink').href=FIGMA_FILE;}
else{['#figmaLink','#figmaNote'].forEach(s=>$(s).style.display='none');}

/* ---------- time helpers ---------- */
const clock=d=>d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
const ago=ms=>{const s=Math.round(ms/1000);if(s<5)return'just now';if(s<60)return s+'s ago';const m=Math.floor(s/60);return m+' min ago';};
const secs=ms=>{const s=Math.round(ms/1000);return s<60?s+'s':Math.floor(s/60)+'m '+String(s%60).padStart(2,'0')+'s';};

/* ============================================================
   SLOTS — placeholder or image, from ASSETS
   ============================================================ */
function slotHTML(src,o){
  o=o||{};
  const cls=['slot',o.tint||'',o.sm?'sm':'',o.fit?'fit':'',src?'filled':''].join(' ').trim();
  const inner=src
    ? '<img src="'+esc(src)+'" alt="'+esc(o.alt||o.label||'')+'" loading="lazy"'+(o.zoom?' data-zoom data-cap="'+esc(o.label||'')+'"':'')+'>'
    : '<div class="sl-in"><b>'+esc(o.label||'Image')+'</b><i>'+esc(o.dim||'')+'</i><i>'+esc(o.hint||'Drop an image to preview')+'</i></div>';
  return '<div class="'+cls+'" style="--ar:'+(o.ar||'16/10')+'" data-label="'+esc(o.label||'')+'"'+(o.zoom?' data-zoomable':'')+'>'+inner+'</div>';
}
/* local preview: drop an image file on any empty slot */
document.addEventListener('dragover',e=>{const s=e.target.closest&&e.target.closest('.slot:not(.filled)');if(s){e.preventDefault();s.classList.add('drop');}});
document.addEventListener('dragleave',e=>{const s=e.target.closest&&e.target.closest('.slot');if(s)s.classList.remove('drop');});
document.addEventListener('drop',e=>{
  const s=e.target.closest&&e.target.closest('.slot');if(!s)return;
  e.preventDefault();s.classList.remove('drop');
  const f=e.dataTransfer.files&&e.dataTransfer.files[0];if(!f||!/^image\\//.test(f.type))return;
  const r=new FileReader();
  r.onload=()=>{const lab=s.dataset.label||'';s.classList.add('filled');
    s.innerHTML='<img src="'+r.result+'" alt="'+esc(lab)+'"'+(s.hasAttribute('data-zoomable')?' data-zoom data-cap="'+esc(lab)+'"':'')+'>';
    s.dispatchEvent(new CustomEvent('slotfill',{bubbles:true}));
    toast('Preview only. Add the URL to ASSETS to keep it.');};
  r.readAsDataURL(f);
});

/* ============================================================
   PROGRESS RAIL — completed, current, remaining
   ============================================================ */
const SECS=$$('section[data-hud]');
const rail=$('#rail');
rail.innerHTML=SECS.map((s,i)=>'<button class="rt'+(s.dataset.chapter?' chap':'')+'" data-i="'+i+'" aria-label="'+esc(s.dataset.hud)+'"><i></i><span class="rt-lab">'+
  (s.dataset.chapter?'<em>Stage '+s.dataset.chapter+'</em>':'<em>'+String(i+1).padStart(2,'0')+'</em>')+esc(s.dataset.hud)+'</span></button>').join('');
const ticks=$$('.rt',rail);let curSec=-1,flashT;
function railUpdate(){
  const HO=window.EP_HOST&&EP_HOST.on;
  const y=HO?EP_HOST.vt+EP_HOST.vh*.42:innerHeight*.42;let idx=0;
  SECS.forEach((s,i)=>{if(s.getBoundingClientRect().top<=y)idx=i;});
  const h=document.documentElement.scrollHeight-(HO?EP_HOST.vh:innerHeight);
  const atEnd=h>0&&(HO?EP_HOST.vt:scrollY)>=h-4;if(atEnd)idx=SECS.length;
  if(idx===curSec)return;curSec=idx;STATS.reached=Math.max(STATS.reached,Math.min(idx+1,SECS.length));
  ticks.forEach((t,i)=>{t.className='rt'+(i<idx?' done':i===idx?' now':'');t.setAttribute('aria-current',i===idx?'step':'false');});
  rail.classList.add('flash');clearTimeout(flashT);flashT=setTimeout(()=>rail.classList.remove('flash'),1600);
}
/* embedded in a tall, non-scrolling iframe, a fixed rail would float mid-page: drop it */
if(innerHeight>(screen.availHeight||900)*1.25){rail.style.display='none';prog.style.display='none';}
addEventListener('scroll',railUpdate,{passive:true});addEventListener('resize',railUpdate);addEventListener('ep-view',railUpdate);railUpdate();
rail.addEventListener('click',e=>{const b=e.target.closest('.rt');if(b)SECS[+b.dataset.i].scrollIntoView({behavior:reduced?'auto':'smooth'});});

/* ============================================================
   SAVE STATUS — one component, two behaviours
   ============================================================ */
const savers=[];
function makeSaver(el){
  const s={el,last:0,t:null,mode:'v2'};
  s.touch=function(){
    if(s.mode==='v1'){s.el.className='save idle';s.el.innerHTML='';return;}
    clearTimeout(s.t);s.el.className='save saving';s.el.innerHTML='<i class="sdot"></i><span>Saving…</span>';
    s.t=setTimeout(()=>{s.last=Date.now();s.paint();},reduced?60:520);
  };
  s.paint=function(){
    if(s.mode==='v1'||!s.last)return;
    s.el.className='save';s.el.innerHTML='<i class="sdot"></i><span>Last saved <b>'+clock(new Date(s.last))+'</b></span><em>· '+ago(Date.now()-s.last)+'</em>';
  };
  savers.push(s);return s;
}
setInterval(()=>savers.forEach(s=>{if(s.last&&s.mode==='v2'&&!s.el.classList.contains('saving'))s.paint();}),1000);

/* ---------- 01 hero card ---------- */
(function(){
  const sv=makeSaver($('#heroSave'));let v=7.5;const out=$('#hVal');
  const set=d=>{v=Math.max(0,Math.min(24,v+d));out.textContent=v%1?v.toFixed(1):v.toFixed(0);sv.touch();};
  $('#hMinus').addEventListener('click',()=>set(-.5));
  $('#hPlus').addEventListener('click',()=>set(.5));
})();

/* ============================================================
   02 — THE OLD WAY
   ============================================================ */
const RUNS={old:null,neu:null};let OLDFLOW={},ANAT={},POP={};
(function(){
  const SCREENS=[
    {t:'Project',sub:'Select the project for this entry.',f:[{k:'p1',l:'Project name',v:'Client portal',proj:1}]},
    {t:'Hours',sub:'Enter hours for the day.',f:[{k:'h',l:'Hours worked',v:'7.5'}]},
    {t:'Task',sub:'Task details.',f:[{k:'p2',l:'Project name',v:'Client portal',proj:1},{k:'task',l:'Task',v:'Design review'}]},
    {t:'Notes',sub:'Add any notes, then continue.',f:[{k:'n',l:'Notes',v:'Reviewed the dashboard flows'}]},
    {t:'Reference',sub:'Confirm the reference for billing.',f:[{k:'p3',l:'Project name',v:'Client portal',proj:1}]},
    {t:'Approval',sub:'Choose who approves this entry.',f:[{k:'a',l:'Approver',v:'Team lead'}],last:1}
  ];
  const SESSION=75;
  let idx=0,vals={},typed=0,lost=0,reached=0,clicks=0,t0=0,left=SESSION,tick=null,live=false,typing=false;
  const body=$('#owBody'),over=$('#owOver'),next=$('#owNext'),back=$('#owBack'),ow=$('#ow');
  const cS=$('#cScreens'),cT=$('#cTyped'),cL=$('#cLost');
  function counters(){cS.textContent=reached;cT.textContent=typed;cL.textContent=lost;cT.classList.toggle('hot',typed>=3);cL.classList.toggle('hot',lost>0);}
  function render(){
    const s=SCREENS[idx];
    $('#owN').textContent=idx+1;
    body.innerHTML='<h4 class="ow-h">'+s.t+'</h4><p class="ow-sub">'+s.sub+'</p>'+s.f.map(f=>{
      const has=vals[f.k];
      return '<div class="ow-f"><label for="ow-'+f.k+'">'+f.l+(f.proj&&f.k!=='p1'?'<em>again</em>':'')+'</label>'+
        '<button class="ow-in'+(has?'':' empty')+(f.proj&&f.k!=='p1'?' dup':'')+'" id="ow-'+f.k+'" data-k="'+f.k+'">'+(has?esc(vals[f.k]):'Click to type')+'</button></div>';}).join('');
    next.textContent=s.last?'Submit':(s.t==='Notes'?'Continue':'Next');
    back.disabled=idx===0;
    reached=Math.max(reached,idx+1);counters();
    if(idx===4)$('#q1').classList.add('on');
  }
  function clockPaint(){const m=Math.floor(left/60),s=left%60;$('#owClock').textContent=m+':'+String(s).padStart(2,'0');$('#owSess').classList.toggle('low',left<=15);}
  function start(){
    idx=0;vals={};typed=0;reached=0;clicks=0;left=SESSION;live=true;t0=Date.now();
    $('#owStart').classList.add('gone');over.classList.remove('on');render();clockPaint();
    clearInterval(tick);tick=setInterval(()=>{if(!live)return;left--;clockPaint();if(left<=0)timeout();},1000);
  }
  function timeout(){
    live=false;clearInterval(tick);
    const n=Object.keys(vals).length;lost+=n;counters();
    $('#q3').classList.add('on');
    over.innerHTML='<div><h4>Your session timed out</h4><p>Nothing was saved. '+(n?n+' '+(n===1?'entry':'entries')+' gone.':'')+'</p><div class="row"><button class="ow-btn" data-a="restart">Start over</button></div></div>';
    over.classList.add('on');
  }
  function done(){
    live=false;clearInterval(tick);
    const ms=Date.now()-t0;RUNS.old={ms,clicks,typed};paintRuns();
    over.innerHTML='<div><h4>Submitted. Finally.</h4><div class="ow-stats"><div><b>'+secs(ms)+'</b>time</div><div><b>'+clicks+'</b>clicks</div><div><b>'+typed+'×</b>project name</div></div>'+
      '<p>And at no point did it tell you how many screens were left.</p><div class="row"><button class="ow-btn" data-a="restart">Run it again</button><button class="ow-btn" data-a="new" style="font-weight:700">Try the new version</button></div></div>';
    over.classList.add('on');
  }
  function typeInto(btn){
    if(typing||!live)return;
    const k=btn.dataset.k;if(vals[k])return;
    const f=SCREENS[idx].f.find(x=>x.k===k);
    typing=true;btn.classList.remove('empty');btn.classList.add('typing');btn.textContent='';
    let i=0;const step=()=>{i++;btn.textContent=f.v.slice(0,i);if(i<f.v.length&&!reduced)setTimeout(step,26);else{
      btn.textContent=f.v;btn.classList.remove('typing');vals[k]=f.v;typing=false;
      if(f.proj){typed++;counters();if(typed===3){$('#q2').classList.add('on');toast('Three times. Same project.');}}
    }};step();
  }
  ow.addEventListener('click',e=>{
    if(live)clicks++;
    const b=e.target.closest('.ow-in');if(b){typeInto(b);return;}
    const a=e.target.closest('[data-a]');
    if(a){if(a.dataset.a==='restart')start();else document.getElementById('try').scrollIntoView({behavior:reduced?'auto':'smooth'});}
  });
  next.addEventListener('click',()=>{
    if(!live||typing)return;
    const s=SCREENS[idx];const miss=s.f.filter(f=>!vals[f.k]);
    if(miss.length){miss.forEach(f=>{const l=$('label[for="ow-'+f.k+'"]');if(l&&!l.querySelector('.req')){l.insertAdjacentHTML('beforeend','<em class="req">required</em>');}});return;}
    if(s.last){done();return;}
    idx++;render();
  });
  back.addEventListener('click',()=>{
    if(!live||typing||idx===0)return;
    idx--;const s=SCREENS[idx];let n=0;
    s.f.forEach(f=>{if(vals[f.k]){delete vals[f.k];n++;}});
    lost+=n;render();counters();
    if(n){toast('Going back cleared that screen.');$('#q3').classList.add('on');}
  });
  $('#owGo').addEventListener('click',start);
  render();reached=0;counters();
  OLDFLOW={reset:()=>{live=false;clearInterval(tick);idx=0;vals={};typed=0;lost=0;reached=0;clicks=0;left=SESSION;
    over.classList.remove('on');$('#owStart').classList.remove('gone');render();reached=0;counters();clockPaint();
    RUNS.old=null;$('#rOldT').textContent='—';$('#rOldM').textContent='Try the old flow first';paintRuns();
    ['#q1','#q2','#q3'].forEach(q=>$(q).classList.remove('on'));}};
})();

function paintRuns(){
  const o=RUNS.old,n=RUNS.neu;
  if(o){$('#rOldT').textContent=secs(o.ms);$('#rOldM').textContent=o.clicks+' clicks · project typed '+o.typed+'×';}
  if(n){$('#rNewT').textContent=secs(n.ms);$('#rNewM').textContent=n.clicks+' clicks · project chosen once';}
  $('#runState').textContent=o&&n?'Compared':o||n?'One of two':'Waiting';
}

/* ============================================================
   03 — THE JOURNEY
   ============================================================ */
(function(){
  const wrap=$('#jWrap'),map=$('#jMap');
  const TXT={
    built:['As built','Each module was built on its own. What worked one way on the dashboard behaved differently on the Kanban board, and the same details had to be typed again in each place.','Four navigations, four sets of habits','Chopped into fragments'],
    flow:['End to end','Mapped as one journey: how data moved between modules, where it was duplicated, and where people got stuck. One way to move around. Context entered once and carried through.','One way to move, one line through it','One continuous task']
  };
  $$('[data-j]').forEach(b=>b.addEventListener('click',()=>{
    const m=b.dataset.j;
    $$('[data-j]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});
    wrap.classList.toggle('flow',m==='flow');wrap.classList.toggle('built',m==='built');
    map.classList.toggle('flow',m==='flow');map.classList.toggle('built',m==='built');
    $('#jH').textContent=TXT[m][0];$('#jP').textContent=TXT[m][1];$('#jLab').textContent=TXT[m][2];$('#taskState').textContent=TXT[m][3];
  }));
})();

/* ---------- 04 constraints ---------- */
$$('.con').forEach(c=>c.addEventListener('click',()=>{const o=c.classList.toggle('on');c.setAttribute('aria-pressed',o);}));
$('#conAll').addEventListener('click',()=>{const any=$$('.con').some(c=>!c.classList.contains('on'));$$('.con').forEach(c=>{c.classList.toggle('on',any);c.setAttribute('aria-pressed',any);});$('#conAll').textContent=any?'Flip them back':'Flip all three';});

/* ---------- 05 fixes ---------- */
function setFix(card,on){
  card.classList.toggle('on',on);
  $('.fx-state',card).textContent=on?'Fix':'Problem';
  const b=$('.fx-btn',card);b.textContent=on?'Show the problem':'Show the fix';b.setAttribute('aria-pressed',on);
  const vs=$('.vs-t',card);if(vs)vs.textContent=on?'Last saved '+clock(new Date()):'Did that save?';
}
$$('.fx-card').forEach(c=>$('.fx-btn',c).addEventListener('click',()=>setFix(c,!c.classList.contains('on'))));
$('#fxAll').addEventListener('click',()=>{const any=$$('.fx-card').some(c=>!c.classList.contains('on'));$$('.fx-card').forEach(c=>setFix(c,any));$('#fxAll').textContent=any?'Flip them back':'Flip all three';});

/* ============================================================
   06 — THE FIX, RUNNING
   ============================================================ */
const TRY=(function(){
  const STEPS=['Project context','Hours worked','Notes','Approval'];
  const DAYS=['Mon','Tue','Wed','Thu','Fri'];
  let st,step,sent,t0,clicks;
  const sv=makeSaver($('#trySave'));
  const app=$('#tryApp'),bodyEl=$('#tryBody'),piEl=$('#tryPi'),toastEl2=$('#tryToast');
  function reset(){st={project:'',type:'',hours:['','','','',''],notes:'',approver:''};step=0;sent=false;t0=0;clicks=0;}
  reset();
  const total=()=>st.hours.reduce((a,h)=>a+(parseFloat(h)||0),0);
  const doneTo=()=>{let d=0;if(st.project)d=1;if(d===1&&total()>0)d=2;if(d===2&&step>2)d=3;return d;};
  function paintPi(){
    piEl.innerHTML=STEPS.map((s,i)=>{
      const cls=sent||i<step?'done':i===step?'now':'';
      const state=cls==='done'?'Done':cls==='now'?'You are here':'To do';
      return '<button class="pi-step '+cls+'" role="listitem" data-i="'+i+'" aria-current="'+(cls==='now'?'step':'false')+'"><span class="pi-dot">'+(cls==='done'?'✓':i+1)+'</span><span class="pi-lab">'+s+'</span><span class="pi-state">'+state+'</span></button>';
    }).join('');
  }
  const carry=()=>st.project?'<span class="carry"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 6h8M7 3l3 3-3 3"/></svg>Project: <b>'+esc(st.project)+'</b> — carried from section 1</span>':'';
  function paintBody(){
    if(sent){
      bodyEl.innerHTML='<div class="sent"><span class="ok"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 11.5 9.2 15.5 17 7"/></svg></span><h4>Sent for approval</h4><p>'+esc(st.project)+', '+total()+' hours, now with '+esc(st.approver)+'. Nothing was lost on the way.</p><button class="abtn" id="tryAgain">Start another</button></div>';
      $('#tryAgain').addEventListener('click',()=>{reset();$('#tryRestored').classList.remove('on');sv.last=0;$('#trySave').className='save idle';$('#trySave').innerHTML=sv.mode==='v2'?'<i class="sdot"></i><span>No changes yet</span>':'';paint();});
      return;
    }
    let h='';
    if(step===0){
      h='<p class="sec-h">Project context</p><p class="sec-sub">Set once. Every section after this carries it.</p>'+
        '<div class="fld"><label for="tProj">Project</label><select id="tProj" data-f="project"><option value="">Choose a project</option>'+['Client portal','Mobile app','Internal tools'].map(p=>'<option'+(st.project===p?' selected':'')+'>'+p+'</option>').join('')+'</select></div>'+
        '<div class="fld"><label for="tType">Type of work</label><select id="tType" data-f="type"><option value="">Optional</option>'+['Design','Development','Meetings'].map(p=>'<option'+(st.type===p?' selected':'')+'>'+p+'</option>').join('')+'</select></div>';
    }else if(step===1){
      h=carry()+'<p class="sec-h">Hours worked</p><p class="sec-sub">The whole week on one screen.</p><div class="week">'+
        DAYS.map((d,i)=>'<label class="day"><span>'+d+'</span><input inputmode="decimal" data-h="'+i+'" value="'+esc(st.hours[i])+'" placeholder="0" aria-label="'+d+' hours"></label>').join('')+
        '</div><div class="total"><span>Total this week</span><b id="tTot">'+total()+' h</b></div>'+
        '<p class="hint" style="font-size:11.5px;color:#64748B;margin-top:10px">Tip: try 8, then go back and forward. It stays.</p>';
    }else if(step===2){
      h=carry()+'<p class="sec-h">Notes</p><p class="sec-sub">Anything your approver should know.</p><div class="fld"><label for="tNotes">Notes</label><textarea id="tNotes" data-f="notes" placeholder="What you worked on">'+esc(st.notes)+'</textarea></div>';
    }else{
      h=carry()+'<p class="sec-h">Approval</p><p class="sec-sub">Check it once, then send.</p><div class="summary">'+
        '<div><span>Project</span><b>'+esc(st.project||'—')+'</b></div><div><span>Type of work</span><b>'+esc(st.type||'—')+'</b></div>'+
        '<div><span>Hours</span><b>'+total()+' h</b></div><div><span>Notes</span><b>'+esc(st.notes||'—')+'</b></div></div>'+
        '<div class="fld"><label for="tAppr">Approver</label><select id="tAppr" data-f="approver"><option value="">Choose an approver</option>'+['Team lead','Project manager'].map(p=>'<option'+(st.approver===p?' selected':'')+'>'+p+'</option>').join('')+'</select></div>';
    }
    bodyEl.innerHTML=h;
  }
  function paintFoot(){
    $('#tryBack').disabled=step===0||sent;
    $('#tryNext').style.visibility=sent?'hidden':'visible';
    $('#tryNext').textContent=step===3?'Send for approval':'Continue';
    $('#tryStepLab').textContent=sent?'All 4 sections done':'Section '+(step+1)+' of 4';
  }
  function paint(){paintPi();paintBody();paintFoot();}
  function changed(){
    if(!t0)t0=Date.now();
    if(sv.mode==='v2')sv.touch();
    else{sv.touch();toastEl2.classList.add('show');clearTimeout(toastEl2._t);toastEl2._t=setTimeout(()=>toastEl2.classList.remove('show'),1100);sv.last=Date.now();}
  }
  bodyEl.addEventListener('input',e=>{
    const t=e.target;
    if(t.dataset.f){st[t.dataset.f]=t.value;}
    if(t.dataset.h!==undefined){st.hours[+t.dataset.h]=t.value.replace(/[^0-9.]/g,'');const tt=$('#tTot');if(tt)tt.textContent=total()+' h';}
    changed();
  });
  bodyEl.addEventListener('change',e=>{if(e.target.tagName==='SELECT'){st[e.target.dataset.f]=e.target.value;changed();}});
  function need(){
    if(step===0&&!st.project)return['tProj','Choose a project to continue.'];
    if(step===1&&total()<=0)return[null,'Add at least one day of hours.'];
    if(step===3&&!st.approver)return['tAppr','Choose an approver to send this.'];
    return null;
  }
  $('#tryNext').addEventListener('click',()=>{
    if(!t0)t0=Date.now();
    const n=need();if(n){toast(n[1]);if(n[0]){const el=document.getElementById(n[0]);if(el)el.focus();}return;}
    if(step===3){sent=true;RUNS.neu={ms:Date.now()-t0,clicks};paintRuns();paint();toast('Sent for approval.');return;}
    step++;paint();
  });
  $('#tryBack').addEventListener('click',()=>{if(step>0){step--;paint();}});
  piEl.addEventListener('click',e=>{const b=e.target.closest('.pi-step');if(!b||sent)return;const i=+b.dataset.i;if(i<=step){step=i;paint();}else toast('Finish "'+STEPS[step]+'" first. The indicator shows what\\u2019s left.');});
  app.addEventListener('click',()=>{clicks++;});
  /* auto-save version */
  const NOTES={v1:'A brief "Saved" toast in the corner that disappears in a second. Watch the timesheet: it just played, and the header is empty again. Beta testers didn\\u2019t notice it.',
               v2:'A persistent "Last saved [time]" pinned in the header, updating live. Small tweak, massive difference in confidence.'};
  function setMode(m){
    sv.mode=m;
    $$('[data-sv]').forEach(x=>{x.classList.toggle('on',x.dataset.sv===m);x.setAttribute('aria-pressed',x.dataset.sv===m);});
    $('#svNote').textContent=NOTES[m];$$('.sv-c').forEach(c=>c.classList.toggle('on',c.classList.contains(m)));
    $('#tryRestored').classList.remove('on');$('#killNote').textContent='In the old flow, this was where careful work vanished.';
    app.classList.toggle('v1',m==='v1');app.classList.toggle('v2',m==='v2');
    if(m==='v1'){
      $('#trySave').className='save gone';$('#trySave').innerHTML='<span>Nothing here</span>';
      /* replay what the first version did: a toast, then nothing */
      toastEl2.classList.add('show','demo');clearTimeout(toastEl2._t);
      toastEl2._t=setTimeout(()=>toastEl2.classList.remove('show','demo'),reduced?900:1600);
    }else{
      if(!sv.last)sv.last=Date.now();sv.paint();
      const s=$('#trySave');s.classList.remove('flash');void s.offsetWidth;s.classList.add('flash');
    }
  }
  $$('[data-sv]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.sv)));
  /* the misclick */
  $('#tryKill').addEventListener('click',()=>{
    const c=$('#tryClosed');c.classList.add('on');$('#tryRestored').classList.remove('on');
    setTimeout(()=>{
      c.classList.remove('on');paint();
      const any=st.project||total()>0||st.notes;
      if(sv.mode==='v2'){
        $('#tryRestoredT').textContent=any?'Restored. Everything up to '+clock(new Date(sv.last||Date.now()))+' is here.':'Restored. There was nothing to lose yet.';
        $('#tryRestored').classList.add('on');
        $('#killNote').textContent='Everything came back, and the status line told you it would.';
      }else{
        $('#killNote').textContent='It came back too. It was saving the whole time; nothing on screen said so. That was the problem.';
        toast('Your work is back. Did you know it would be?');
      }
    },reduced?200:1100);
  });
  paint();
  return {setMode,reset:()=>{reset();$('#tryRestored').classList.remove('on');sv.last=0;
    $('#trySave').className='save idle';$('#trySave').innerHTML=sv.mode==='v2'?'<i class="sdot"></i><span>No changes yet</span>':'';
    RUNS.neu=null;$('#rNewT').textContent='—';$('#rNewM').textContent='Send this one for approval';paintRuns();paint();}};
})();

/* ============================================================
   07 — TESTING
   ============================================================ */
function setGrp(m){
  $('#grp').classList.toggle('after',m==='after');
  $$('[data-g]').forEach(x=>{x.classList.toggle('on',x.dataset.g===m);x.setAttribute('aria-pressed',x.dataset.g===m);});
  $('#grpCap').textContent=m==='after'
    ?'People think about them at completely different points. Project details get set up before work begins; task assignments get adjusted throughout. So they stayed separate.'
    :'I grouped these together because they seemed related.';
}
$$('[data-g]').forEach(b=>b.addEventListener('click',()=>setGrp(b.dataset.g)));
$$('.tl-i').forEach(t=>{
  const act=()=>{$$('.tl-i').forEach(x=>x.classList.toggle('on',x===t));if(t.dataset.grp)setGrp(t.dataset.grp);};
  t.addEventListener('click',act);t.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
});
$('#tryBoth').addEventListener('click',()=>{TRY.setMode('v1');document.getElementById('try').scrollIntoView({behavior:reduced?'auto':'smooth'});setTimeout(()=>toast('Set to the first version. Type something, then switch.'),500);});

/* ============================================================
   08 — RESULTS
   ============================================================ */
let RES={};
(function(){
  /* the clock */
  const rows=$$('#race .race-row'),fills=rows.map(r=>$('.race-fill',r));
  const END=[17.5,8.5];let raf=null;
  function run(){
    cancelAnimationFrame(raf);rows.forEach(r=>r.classList.remove('fin'));
    const D=reduced?1:4200,t0=performance.now();
    const f=now=>{
      const p=Math.min(1,(now-t0)/D),m=p*20;
      $('#raceClock').textContent=m.toFixed(1)+' min';
      fills.forEach((el,i)=>{const v=Math.min(m,END[i]);el.style.width=(v/20*100)+'%';if(m>=END[i])rows[i].classList.add('fin');});
      if(p<1)raf=requestAnimationFrame(f);else $('#raceGo').textContent='Run it again';
    };raf=requestAnimationFrame(f);
  }
  $('#raceGo').addEventListener('click',()=>{STATS.race++;run();});
  RES={race:run,tix:m=>{const b=$('[data-t="'+m+'"]');if(b)b.click();},reset:()=>{$('[data-t="before"]').click();rows.forEach((r,i2)=>{r.classList.remove('fin');fills[i2].style.width='0';});$('#raceClock').textContent='0.0 min';$('#raceGo').textContent='Run the clock';}};

  /* tickets — 100 squares, 78 of them go */
  const tix=$('#tix');let seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
  const order=Array.from({length:100},(_,i)=>i).sort(()=>rnd()-.5);const gone=new Set(order.slice(0,78));
  tix.innerHTML=Array.from({length:100},(_,i)=>'<i class="'+(gone.has(i)?'gone':'')+'" style="--d:'+order.indexOf(i)+'"></i>').join('');
  $$('[data-t]').forEach(b=>b.addEventListener('click',()=>{
    const a=b.dataset.t==='after';tix.classList.toggle('after',a);
    $$('[data-t]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});
  }));

  /* survey waffle */
  const w=$('#waffle');
  w.innerHTML=Array.from({length:100},(_,i)=>'<i class="'+(i<89?'y':'')+'" style="--d:'+i+'" data-i="'+i+'"></i>').join('');
  const wio=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){w.classList.add('seen');wio.disconnect();}});},{threshold:.4});wio.observe(w);
  w.addEventListener('pointerover',e=>{const d=e.target.closest('i');if(!d)return;const i=+d.dataset.i;
    $('#wafRead').textContent=i<89?'Easier or much easier — '+(i+1)+' of 89':'Everyone else — '+(i-88)+' of 11';
    $$('i',w).forEach(x=>x.classList.toggle('hl',x===d));});
  w.addEventListener('pointerleave',()=>{$('#wafRead').textContent='Hover the grid';$$('i',w).forEach(x=>x.classList.remove('hl'));});

  /* the zero */
  const MSG=['Still zero. Nobody asked to go back.','Zero requests. That was the real success metric.','You\\u2019d be the first. Nobody else asked.'];let mi=0;
  $('#zeroBtn').addEventListener('click',()=>{const z=$('#zero');z.classList.remove('nope');void z.offsetWidth;z.classList.add('nope');toast(MSG[mi++%MSG.length]);});
})();

/* ============================================================
   09 — THE FILE: the live Figma file, embedded
   ============================================================ */
(function(){
  const key=(FIGMA_FILE.match(/\\/(?:design|file)\\/([A-Za-z0-9]+)/)||[])[1];
  const fr=$('#figFrame');if(!key||!fr)return;
  /* node ids are the top-level sections of the file */
  const F=[
    {id:'all', node:'0-1',    name:'The whole file',        to:null},
    {id:'web', node:'1-5721', name:'Web app — old and new', to:'#web'},
    {id:'app', node:'1-278',  name:'Mobile app',            to:'#mobile'},
    {id:'ico', node:'1-3875', name:'Icons',                 to:'#details'},
    {id:'pop', node:'1-3810', name:'Popups',                to:'#details'},
    {id:'dim', node:'1-4221', name:'Dimensions — handoff',  to:'#details'},
    {id:'chat',node:'1-4694', name:'AI chatbot variations', to:'#chatbot'},
    {id:'cre', node:'1-5206', name:'Creatives',             to:'#creatives'},
    {id:'li',  node:'1-4979', name:'LinkedIn banner',       to:'#creatives'}
  ];
  const src=n=>'https://embed.figma.com/design/'+key+'/Enterprise-Platform?node-id='+n+'&embed-host=share&footer=false&theme=dark';
  const sec=t=>{const s=t&&$(t);const e=s&&s.querySelector('.eyebrow');return e?'Section '+e.textContent.slice(0,2):'';};
  $('#flist').innerHTML=F.map(f=>'<button data-id="'+f.id+'"'+(f.to?'':' class="whole"')+'><b><i></i>'+f.name+'</b><em>'+sec(f.to)+'</em></button>').join('');
  const jump=$('#fjump');
  function pick(id,load){
    const f=F.find(x=>x.id===id);if(!f)return;STATS.frames.add(id);
    $$('#flist button').forEach(b=>b.classList.toggle('on',b.dataset.id===id));
    if(load)fr.src=src(f.node);
    if(f.to){jump.classList.add('on');jump.textContent='Read '+sec(f.to).toLowerCase()+' →';jump.dataset.to=f.to;}else jump.classList.remove('on');
  }
  $('#flist').addEventListener('click',e=>{const b=e.target.closest('button');if(b)pick(b.dataset.id,true);});
  jump.addEventListener('click',e=>{e.preventDefault();const t=jump.dataset.to&&$(jump.dataset.to);if(t)t.scrollIntoView({behavior:reduced?'auto':'smooth'});});
  /* load only once the section is near, so the page stays quick */
  const lio=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){pick('all',true);lio.disconnect();}},{rootMargin:'600px'});
  lio.observe(fr);
})();

/* ============================================================
   10 — WEB APP: old / new
   ============================================================ */
let WEB={};
(function(){
  const P=ASSETS.web.pairs;let cur=0;const cmp=$('#cmp');
  $('#webChips').innerHTML=P.map((p,i)=>'<button class="chipx'+(i===0?' on':'')+'" data-i="'+i+'">'+esc(p.label)+'</button>').join('');
  function show(i){
    cur=i;const p=P[i];
    $('#cmpOld').innerHTML=slotHTML(p.old,{label:'Old — '+p.label,dim:'1440 × 900',ar:'16/10'});
    $('#cmpNewImg').innerHTML=slotHTML(p.new,{label:'New — '+p.label,dim:'1440 × 900',ar:'16/10',tint:'t-new'});
    const pins=p.pins||[];
    $('#pinwrap').innerHTML=pins.map((q,n)=>'<span class="pn'+(q.x>62?' right':'')+'" style="--px:'+q.x+'%;--py:'+q.y+'%"><button aria-label="Annotation '+(n+1)+'">'+(n+1)+'</button><span class="tip">'+esc(q.t)+'</span></span>').join('');
    $('#pinBtn').textContent=(pinsOn?'Hide':'Show')+' annotations ('+pins.length+')';
    $('#webUrl').textContent='Web app / '+p.label;
    $$('#webChips .chipx').forEach((b,j)=>b.classList.toggle('on',j===i));
  }
  $('#webChips').addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(+b.dataset.i);});
  let pinsOn=false;
  $('#pinBtn').addEventListener('click',()=>{
    const pins=P[cur].pins||[];
    if(!pins.length){toast('No annotations on this screen yet — add them in the ASSETS list.');return;}
    pinsOn=!pinsOn;$('#pinwrap').classList.toggle('off',!pinsOn);$('#pinBtn').setAttribute('aria-pressed',pinsOn);
    $('#pinBtn').textContent=(pinsOn?'Hide':'Show')+' annotations ('+pins.length+')';
    if(pinsOn&&x>20)setX(0,true);
  });
  $('#pinwrap').addEventListener('click',e=>{const b=e.target.closest('.pn');if(!b)return;
    $$('.pn',$('#pinwrap')).forEach(p=>p.classList.toggle('on',p===b&&!b.classList.contains('on')));});
  WEB={show:s=>show(s),pins:()=>$('#pinBtn').click(),reset:()=>{pinsOn=false;$('#pinwrap').classList.add('off');show(0);setX(50,true);}};
  let x=50;
  function setX(v,anim){x=Math.max(0,Math.min(100,v));cmp.classList.toggle('anim',!!anim&&!reduced);cmp.style.setProperty('--x',x+'%');$('#cmpK').setAttribute('aria-valuenow',Math.round(x));
    $$('[data-w]').forEach(b=>{const m=b.dataset.w;const on=(m==='old'&&x>=99.5)||(m==='new'&&x<=.5)||(m==='split'&&x>.5&&x<99.5);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});}
  let drag=false;
  const fromEvt=e=>{const r=cmp.getBoundingClientRect();return(e.clientX-r.left)/r.width*100;};
  cmp.addEventListener('pointerdown',e=>{drag=true;cmp.setPointerCapture(e.pointerId);setX(fromEvt(e));});
  cmp.addEventListener('pointermove',e=>{if(drag)setX(fromEvt(e));});
  ['pointerup','pointercancel'].forEach(t=>cmp.addEventListener(t,()=>drag=false));
  $('#cmpK').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){setX(x-5);e.preventDefault();}if(e.key==='ArrowRight'){setX(x+5);e.preventDefault();}if(e.key==='Home'){setX(0,1);e.preventDefault();}if(e.key==='End'){setX(100,1);e.preventDefault();}});
  $$('[data-w]').forEach(b=>b.addEventListener('click',()=>setX(b.dataset.w==='old'?100:b.dataset.w==='new'?0:50,true)));
  show(0);setX(50);
  $('#webMore').innerHTML=ASSETS.web.more.map((m,i)=>'<figure style="--r:'+[-1.2,.8,-.6,1.1][i%4]+'deg">'+slotHTML(m.src,{label:m.label,dim:'1440 × 900',ar:'16/10',tint:'t-new',zoom:1})+'<figcaption>'+esc(m.label)+'</figcaption></figure>').join('');
})();

/* ============================================================
   11 — MOBILE APP
   ============================================================ */
let MOB={};
(function(){
  const MODS=Object.keys(ASSETS.app);let mod=MODS[0],i=0;
  const sc=$('#phoneSc');
  $('#mods').innerHTML=MODS.map((m,j)=>'<button class="mod'+(j===0?' on':'')+'" role="tab" aria-selected="'+(j===0)+'" data-m="'+esc(m)+'"><b>'+esc(m)+'</b><em>'+ASSETS.app[m].screens.length+' screens</em></button>').join('');
  const lab=(m,j)=>{const n=ASSETS.app[m].names;return (n&&n[j])?n[j]:m+' '+String(j+1).padStart(2,'0');};
  function film(){
    const S=ASSETS.app[mod].screens;
    $('#film').innerHTML=S.map((s,j)=>'<button class="'+(j===i?'on':'')+'" data-j="'+j+'" aria-label="'+esc(lab(mod,j))+'">'+slotHTML(s,{label:String(j+1).padStart(2,'0'),ar:'390/844',sm:1,tint:'t-new',alt:lab(mod,j)})+'</button>').join('');
    $('#modNote').textContent=ASSETS.app[mod].note||'';
  }
  function screen(dir){
    const S=ASSETS.app[mod].screens;
    const html=slotHTML(S[i],{label:lab(mod,i),dim:'390 × 844',ar:'390/844',tint:'t-new'});
    const old=sc.querySelector('.slot');
    const tmp=document.createElement('div');tmp.innerHTML=html;const nu=tmp.firstChild;
    if(old&&dir&&!reduced){nu.classList.add(dir>0?'out-r':'out-l');sc.appendChild(nu);void nu.offsetWidth;old.classList.add(dir>0?'out-l':'out-r');nu.classList.remove('out-r','out-l');setTimeout(()=>old.remove(),380);}
    else{sc.innerHTML='';sc.appendChild(nu);}
    $('#phCount').innerHTML='<b>'+esc(lab(mod,i))+'</b> · '+(i+1)+' of '+S.length;
    $('#phPrev').disabled=i===0;$('#phNext').disabled=i===S.length-1;
    $$('#film button').forEach((b,j)=>b.classList.toggle('on',j===i));
    const on=$('#film button.on');if(on){const fl=$('#film');const L=on.offsetLeft,R=L+on.offsetWidth;
      if(L<fl.scrollLeft||R>fl.scrollLeft+fl.clientWidth)fl.scrollTo({left:L-(fl.clientWidth-on.offsetWidth)/2,behavior:reduced?'auto':'smooth'});}
  }
  function go(n){const S=ASSETS.app[mod].screens;if(n<0||n>=S.length||n===i)return;const d=n>i?1:-1;i=n;screen(d);STATS.screens.add(mod+i);}
  let play=null;
  function stop(){clearInterval(play);play=null;$('#phPlay').textContent='Play';$('#phPlay').classList.remove('on');}
  function start(){
    if(play)return stop();
    $('#phPlay').textContent='Pause';$('#phPlay').classList.add('on');
    play=setInterval(()=>{const S=ASSETS.app[mod].screens;const n=(i+1)%S.length;const d=n>i?1:-1;i=n;screen(d);STATS.screens.add(mod+i);},1500);
  }
  $('#phPlay').addEventListener('click',start);
  MOB={play:start,stop:stop,mod:m=>{const b=$('.mod[data-m="'+m+'"]');if(b)b.click();},reset:()=>{stop();mod=MODS[0];i=0;$$('.mod').forEach((x,k)=>{x.classList.toggle('on',k===0);x.setAttribute('aria-selected',k===0);});film();screen(0);}};
  $('#mods').addEventListener('click',e=>{const b=e.target.closest('.mod');if(!b)return;mod=b.dataset.m;i=0;
    $$('.mod').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});film();screen(0);});
  $('#film').addEventListener('click',e=>{const b=e.target.closest('button');if(b)go(+b.dataset.j);});
  $('#phPrev').addEventListener('click',()=>{stop();go(i-1);});$('#phNext').addEventListener('click',()=>{stop();go(i+1);});
  $('#phone').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){go(i-1);e.preventDefault();}if(e.key==='ArrowRight'){go(i+1);e.preventDefault();}});
  let sx=null;sc.addEventListener('pointerdown',e=>{sx=e.clientX;});sc.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));sx=null;});
  film();screen(0);
})();

/* ============================================================
   12 — ICONS, POPUPS, HANDOFF
   ============================================================ */
(function(){
  const I=ASSETS.icons,grid=$('#icGrid');let cur=0;
  const nm=(ic,j)=>ic.name||'Icon '+String(j+1).padStart(2,'0');
  /* a vector draws inline so it inherits colour; the few still awaiting an SVG fall back to the raster */
  const glyph=(ic,j,o)=>ic.svg?'<span class="icv">'+ic.svg+'</span>'
      :slotHTML(ic.src,Object.assign({label:String(j+1).padStart(2,'0'),ar:'1/1',sm:1,fit:1},o||{}));
  grid.innerHTML=I.map((ic,j)=>'<button class="ic'+(j===0?' on':'')+'" data-j="'+j+'" aria-label="'+esc(nm(ic,j))+'"><span class="art">'+glyph(ic,j)+'<span class="ov"></span></span></button>').join('');
  function pick(j){cur=j;$$('.ic',grid).forEach((b,k)=>b.classList.toggle('on',k===j));
    const ic=I[j];
    $('#icBig').innerHTML='<span class="art">'+(ic.svg?'<span class="icv">'+ic.svg+'</span>'
      :slotHTML(ic.src,{label:nm(ic,j),ar:'1/1',fit:1}))+'<span class="ov"></span></span>';
    $('#icName').textContent=nm(ic,j);$('#icPos').textContent=(j+1)+' of '+I.length;
    $('#icFmt').textContent=ic.svg?'SVG · 24 × 24 artboard':'PNG — awaiting vector';}
  grid.addEventListener('click',e=>{const b=e.target.closest('.ic');if(b)pick(+b.dataset.j);});
  grid.classList.add('keys');$('#icInsp').classList.add('keys');
  $$('[data-k]').forEach(b=>b.addEventListener('click',()=>{const on=b.dataset.k==='on';grid.classList.toggle('keys',on);$('#icInsp').classList.toggle('keys',on);
    $$('[data-k]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});}));
  grid.dataset.size='m';
  $$('[data-s]').forEach(b=>b.addEventListener('click',()=>{grid.dataset.size=b.dataset.s;$$('[data-s]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});}));

  pick(0);

  /* popups */
  const PP=ASSETS.popups;let pi=0,open=false;const fr=$('#popFrame');
  $('#popChips').innerHTML=PP.map((p,j)=>'<button class="chipx'+(j===0?' on':'')+'" data-j="'+j+'">'+esc(p.label)+'</button>').join('');
  function paintPop(){
    const p=PP[pi];
    $('#popBase').innerHTML=slotHTML(p.base,{label:p.label+' — screen behind',dim:'1440 × 900',ar:'16/10',tint:'t-new'});
    $('#popModal').style.width=p.w||'min(62%,420px)';
    $('#popModal').innerHTML=slotHTML(p.modal,{label:p.label+' — dialog',dim:'Dialog only, no background',ar:p.ar||'4/3'});
    fr.classList.toggle('open',open);
    $('#popLab').textContent=p.label+' · '+(open?'open':'closed');$('#popBtn').textContent=open?'Close it':'Open the popup';
    $$('#popChips .chipx').forEach((b,j)=>b.classList.toggle('on',j===pi));
  }
  $('#popChips').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
    pi=+b.dataset.j;open=true;paintPop();if(ANAT.pick)ANAT.pick(pi===0?'form':'load');});
  POP={show:j=>{pi=j;paintPop();}};
  $('#popBtn').addEventListener('click',()=>{open=!open;paintPop();});
  $('#popScrim').addEventListener('click',e=>{if(e.target.id==='popScrim'){open=false;paintPop();}});
  paintPop();

  /* dialog anatomy — both dialogs are real DOM at their true 640px spec width,
     so every number in the readout is measured from the thing on screen. */
  (function(){
    const A=$('#anat'),S=$('#anatScale'),R=$('#anatRead'),W=$('#anatWhich');
    const DLG={form:$('#dlg-form'),load:$('#dlg-load')};
    const NAME={form:'Person Quick Create',load:'Loading document'};
    const BASE='Hover any part of either dialog';
    let cur='form';
    const D=()=>DLG[cur];

    function fit(){
      const avail=A.clientWidth-(matchMedia('(max-width:700px)').matches?28:72);
      const k=Math.min(1,avail/640);
      S.style.transform='scale('+k+')';
      S.style.height=(D().offsetHeight*k)+'px';
    }
    const rel=el=>{const r=el.getBoundingClientRect(),d=D().getBoundingClientRect(),
      k=r.width?el.offsetWidth/r.width:1;
      return {x:(r.left-d.left)*k,y:(r.top-d.top)*k,w:el.offsetWidth,h:el.offsetHeight};};

    /* spacing: read the real padding and gaps off the live elements */
    function paintSpace(){
      const out=[];
      $$('[data-pad]',D()).forEach(el=>{
        const c=getComputedStyle(el),b=rel(el);
        const t=parseFloat(c.paddingTop),r=parseFloat(c.paddingRight),
              bo=parseFloat(c.paddingBottom),l=parseFloat(c.paddingLeft);
        if(t) out.push([b.x,b.y,b.w,t,t]);
        if(bo)out.push([b.x,b.y+b.h-bo,b.w,bo,bo]);
        if(l) out.push([b.x,b.y+t,l,b.h-t-bo,l]);
        if(r) out.push([b.x+b.w-r,b.y+t,r,b.h-t-bo,r]);
      });
      $$('[data-gap]',D()).forEach(el=>{
        const g=parseFloat(getComputedStyle(el).gap)||0; if(!g)return;
        const kids=Array.from(el.children).filter(k=>k.offsetWidth||k.offsetHeight);
        for(let i=0;i<kids.length-1;i++){
          const a=rel(kids[i]),b2=rel(kids[i+1]);
          if(b2.y>=a.y+a.h-1) out.push([a.x,a.y+a.h,a.w,g,g]);          /* stacked */
          else if(b2.x>=a.x+a.w-1) out.push([a.x+a.w,a.y,g,a.h,g]);     /* side by side */
        }
      });
      $('#anatSpace').innerHTML=out.map(([x,y,w,h,v])=>
        '<u style="left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px">'+Math.round(v)+'</u>').join('');
    }
    /* type: label every text size actually in use, anchored off the element's corner */
    function paintType(){
      $('#anatType').innerHTML=$$('[data-t]',D()).map(el=>{
        const b=rel(el);
        return '<u style="left:'+(b.x+b.w+7)+'px;top:'+b.y+'px">'+esc(el.dataset.t)+'</u>';
      }).join('');
    }
    function repaint(){
      if(A.dataset.l==='space')paintSpace();
      if(A.dataset.l==='type')paintType();
    }
    function read(el){
      if(!el){R.innerHTML=BASE;return;}
      R.innerHTML='<b>'+esc(el.dataset.n)+'</b> &nbsp;<span class="val">'+
        Math.round(el.offsetWidth)+' × '+Math.round(el.offsetHeight)+'</span>'+
        (el.dataset.x?' &nbsp;· '+esc(el.dataset.x):'');
    }
    A.addEventListener('pointerover',e=>{const s=e.target.closest('.sp');if(s)read(s);});
    A.addEventListener('pointerleave',()=>{if(!$('.sp.pin',A))read(null);});
    A.addEventListener('click',e=>{
      const s=e.target.closest('.sp');if(!s)return;
      const was=s.classList.contains('pin');
      $$('.sp.pin',A).forEach(x=>x.classList.remove('pin'));
      if(!was){s.classList.add('pin');read(s);}else read(null);
    });
    /* picking a dialog here, or in the popup demo next door, moves both */
    function pick(d){
      cur=d;
      Object.keys(DLG).forEach(k=>DLG[k].hidden=(k!==d));
      $$('#anatPick .chipx').forEach(b=>b.classList.toggle('on',b.dataset.d===d));
      W.textContent=NAME[d];read(null);fit();repaint();
    }
    $$('#anatPick .chipx').forEach(b=>b.addEventListener('click',()=>{pick(b.dataset.d);POP.show(b.dataset.d==='form'?0:1);}));
    $$('#anatLayers .chipx').forEach(b=>b.addEventListener('click',()=>{
      $$('#anatLayers .chipx').forEach(x=>x.classList.toggle('on',x===b));
      A.dataset.l=b.dataset.l;repaint();
    }));
    ANAT={pick:pick};
    addEventListener('resize',()=>{fit();repaint();});
    fit();setTimeout(fit,400);
  })();
})();


/* ============================================================
   13 — CHATBOT
   ============================================================ */
(function(){
  const C=ASSETS.chatbot,st=$('#cbStage');let on=-1;
  /* each window keeps its own proportions; widths scale so all three stand the same height */
  const arv=a=>{const p=String(a||'3/4').split('/');return p[0]/(p[1]||1);};
  st.innerHTML=C.map((c,j)=>'<button class="cb" data-j="'+j+'" aria-pressed="false" style="--k:'+(arv(c.ar)/.75).toFixed(4)+'"><span class="cb-lab">'+esc(c.label)+'</span>'+slotHTML(c.src,{label:c.label,alt:'AI assistant chat window, '+c.label,dim:'Chat window',ar:c.ar||'3/4',tint:'t-dark'})+'</button>').join('');
  $('#cbChips').innerHTML='<button class="chipx on" data-j="-1">All three</button>'+C.map((c,j)=>'<button class="chipx" data-j="'+j+'">'+esc(c.label)+'</button>').join('');
  function set(j){on=j;if(j>-1)STATS.variations.add(j);st.classList.toggle('focus',j>-1);
    $$('.cb',st).forEach((b,k)=>{b.classList.toggle('on',k===j);b.setAttribute('aria-pressed',k===j);});
    $$('#cbChips .chipx').forEach(b=>b.classList.toggle('on',+b.dataset.j===j));
    $('#cbRead').textContent=j>-1?C[j].label+' in focus':(matchMedia('(max-width:700px)').matches?'Swipe to compare all three':'Comparing all three');
    if(j>-1&&matchMedia('(max-width:700px)').matches){const c=$$('.cb',st)[j];st.scrollTo({left:c.offsetLeft-(st.clientWidth-c.offsetWidth)/2,behavior:reduced?'auto':'smooth'});}}
  if(matchMedia('(max-width:700px)').matches)$('#cbRead').textContent='Swipe to compare all three';
  st.addEventListener('click',e=>{const b=e.target.closest('.cb');if(!b)return;const j=+b.dataset.j;set(on===j?-1:j);});
  $('#cbChips').addEventListener('click',e=>{const b=e.target.closest('button');if(b)set(+b.dataset.j);});
  st.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){set(Math.min(C.length-1,on+1));e.preventDefault();}if(e.key==='ArrowLeft'){set(Math.max(-1,on-1));e.preventDefault();}});
})();

/* ============================================================
   14 — CREATIVES
   ============================================================ */
(function(){
  const R=[-1.4,.9,-.5,1.2,-1,.6];
  $('#crGrid').innerHTML=ASSETS.creatives.map((c,j)=>'<figure data-kind="cr" style="--r:'+R[j%6]+'deg">'+slotHTML(c.src,{label:c.label,alt:'Social creative: '+c.label,dim:'1080 × 1350',ar:'1080/1350',zoom:1})+'<figcaption>'+esc(c.label)+'</figcaption></figure>').join('');
  $('#liGrid').innerHTML=ASSETS.linkedin.map((c,j)=>'<figure data-kind="li" style="--r:'+(-.4)+'deg">'+slotHTML(c.src,{label:c.label,alt:'LinkedIn banner: '+c.label,dim:'1584 × 396',ar:'1584/396',zoom:1})+'<figcaption>'+esc(c.label)+'</figcaption></figure>').join('');
  $$('#crChips .chipx').forEach(b=>b.addEventListener('click',()=>{const f=b.dataset.f;
    $$('#crChips .chipx').forEach(x=>x.classList.toggle('on',x===b));
    $$('[data-kind]').forEach(el=>el.hidden=!(f==='all'||el.dataset.kind===f));
    $('#crGrid').hidden=f==='li';$('#liGrid').hidden=f==='cr';}));
})();

/* ---------- 15 lessons ---------- */
$$('.lesson').forEach(l=>l.addEventListener('click',e=>{
  const go=e.target.closest('.go');
  if(go&&l.classList.contains('on')){document.querySelector(go.dataset.to).scrollIntoView({behavior:reduced?'auto':'smooth'});return;}
  $$('.lesson').forEach(x=>{x.classList.toggle('on',x===l);x.setAttribute('aria-expanded',x===l);});
}));

/* ---------- 16 the last progress indicator fills in ---------- */
(function(){
  const steps=$$('#endPi .pi-step');let doneOnce=false;
  const eio=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!doneOnce){doneOnce=true;
    steps.forEach((s,i)=>setTimeout(()=>{s.classList.add('done');$('.pi-dot',s).textContent='✓';},reduced?0:260+i*280));}});},{threshold:.5});
  eio.observe($('#endPi'));
})();

/* ---------- empty slots say what to do when clicked ---------- */
document.addEventListener('click',e=>{
  const s=e.target.closest('.slot[data-zoomable]:not(.filled)');
  if(s)toast('Placeholder: add this image in ASSETS, or drop a file on it to preview.');
});

/* ---------- lightbox ---------- */
(function(){
  const lb=$('#lightbox'),img=$('#lbImg'),cap=$('#lbCap');
  function open(src,c,alt){img.src=src;img.alt=alt||c||'';cap.textContent=c||'';lb.classList.add('on');document.body.style.overflow='hidden';$('#lbClose').focus({preventScroll:true});}
  function close(){lb.classList.remove('on');document.body.style.overflow='';img.src='';}
  document.addEventListener('click',e=>{
    const i=e.target.closest('img[data-zoom]');
    if(i&&!lb.contains(i)){open(i.currentSrc||i.src,i.dataset.cap,i.alt);return;}
    if(e.target.closest('#lightbox'))close();
  });
  addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('on'))close();});
})();


let MATH={},BOT={};
/* ============================================================
   THE EVIDENCE — nine tickets, three piles
   ============================================================ */
const EVID=(function(){
  const T=[
    {id:'#4187',b:'progress',t:'Filled in half a form, then couldn\\u2019t tell whether there was more to do or I was finished.'},
    {id:'#4203',b:'safety',t:'Lost a whole expense report when I clicked the wrong thing. Had to start again.'},
    {id:'#4219',b:'structure',t:'Had to type the project name again on the task screen. And once more after that.'},
    {id:'#4244',b:'safety',t:'Session ended while I was typing. Everything I had entered was gone.'},
    {id:'#4260',b:'progress',t:'No idea how many steps are left when I submit hours for the week.'},
    {id:'#4291',b:'structure',t:'The details for one job are spread across three different screens.'},
    {id:'#4305',b:'safety',t:'Not sure whether my entry saved, so I did it again to be safe.'},
    {id:'#4312',b:'structure',t:'The dashboard and the board behave differently. I keep clicking the wrong thing.'},
    {id:'#4330',b:'progress',t:'I thought I had finished, and then another screen appeared.'}
  ];
  const NAMES={progress:'No sense of progress',safety:'No safety net',structure:'Clunky information architecture'};
  const WHY={progress:'that one is about not knowing where you are.',safety:'that one is about work disappearing.',structure:'that one is about the same thing living in too many places.'};
  const deck=$('#tkDeck'),msg=$('#tkMsg');let sel=null,filed=0,counts={progress:0,safety:0,structure:0};
  function render(){
    deck.innerHTML=T.map((t,i)=>'<button class="tkt" data-i="'+i+'"><span class="id">Ticket '+t.id+'</span><p>'+esc(t.t)+'</p><span class="go">Drag me, or tap then tap a pile</span></button>').join('');
  }
  function paint(){
    $('#tkDone').textContent=filed;
    $$('.tk-b').forEach(b=>{const k=b.dataset.b;$('.c',b).textContent=counts[k];b.classList.toggle('has',counts[k]>0);});
    if(filed===T.length){
      msg.className='msg';msg.textContent='Nine tickets, three piles. Every one of them lands in one of the three.';
      $('#tkAuto').textContent='Filed';$('#tkAuto').disabled=true;
    }
  }
  function file(i,pick){
    const t=T[i],card=$('.tkt[data-i="'+i+'"]',deck);
    if(!card||card.classList.contains('gone'))return;
    const right=t.b===pick;
    const bucket=$('.tk-b[data-b="'+t.b+'"]');
    counts[t.b]++;filed++;STATS.tickets=filed;
    card.classList.add('gone');card.classList.remove('sel');sel=null;
    bucket.classList.add('hit');setTimeout(()=>bucket.classList.remove('hit'),450);
    msg.className='msg'+(right?'':' no');
    msg.textContent=right?'Filed under \\u201c'+NAMES[t.b]+'\\u201d. Same as me.'
      :'I filed that one under \\u201c'+NAMES[t.b]+'\\u201d \\u2014 '+WHY[t.b];
    setTimeout(()=>{card.remove();},320);
    paint();
  }
  /* tap a ticket, then tap a pile */
  deck.addEventListener('click',e=>{
    const c=e.target.closest('.tkt');if(!c||c.classList.contains('drag'))return;
    const on=!c.classList.contains('sel');
    $$('.tkt',deck).forEach(x=>x.classList.remove('sel'));
    if(on){c.classList.add('sel');sel=+c.dataset.i;msg.className='msg';msg.textContent='Now pick the pile it belongs in.';}
    else sel=null;
  });
  $('#tkBuckets').addEventListener('click',e=>{
    const b=e.target.closest('.tk-b');if(!b)return;
    if(sel===null){msg.className='msg';msg.textContent='Pick a ticket first.';return;}
    file(sel,b.dataset.b);
  });
  /* or drag it there */
  deck.addEventListener('pointerdown',e=>{
    const c=e.target.closest('.tkt');if(!c||reduced)return;
    const r=c.getBoundingClientRect();let moved=0,dragging=false;
    const off={x:e.clientX-r.left,y:e.clientY-r.top,w:r.width};
    c.setPointerCapture(e.pointerId);
    const move=ev=>{
      moved=Math.max(moved,Math.abs(ev.clientX-e.clientX)+Math.abs(ev.clientY-e.clientY));
      if(moved<6)return;
      if(!dragging){dragging=true;c.classList.add('drag');c.style.width=off.w+'px';}
      c.style.left=(ev.clientX-off.x)+'px';c.style.top=(ev.clientY-off.y)+'px';
      const el=document.elementFromPoint(ev.clientX,ev.clientY);
      const over=el&&el.closest?el.closest('.tk-b'):null;
      $$('.tk-b').forEach(b=>b.classList.toggle('hot',b===over));
    };
    const up=ev=>{
      c.removeEventListener('pointermove',move);c.removeEventListener('pointerup',up);
      if(!dragging)return;
      c.classList.remove('drag');c.style.cssText='';
      const el=document.elementFromPoint(ev.clientX,ev.clientY);
      const over=el&&el.closest?el.closest('.tk-b'):null;
      $$('.tk-b').forEach(b=>b.classList.remove('hot'));
      if(over)file(+c.dataset.i,over.dataset.b);
    };
    c.addEventListener('pointermove',move);c.addEventListener('pointerup',up);
  });
  function auto(){
    const left=T.map((t,i)=>i).filter(i=>{const c=$('.tkt[data-i="'+i+'"]',deck);return c&&!c.classList.contains('gone');});
    left.forEach((i,n)=>setTimeout(()=>file(i,T[i].b),n*180));
  }
  function reset(){filed=0;counts={progress:0,safety:0,structure:0};sel=null;render();paint();
    msg.className='msg';msg.textContent='Pick a ticket, then pick the pile it belongs in.';
    $('#tkAuto').textContent='File them for me';$('#tkAuto').disabled=false;STATS.tickets=0;}
  $('#tkAuto').addEventListener('click',auto);
  $('#tkReset').addEventListener('click',reset);
  render();paint();
  return {auto,reset};
})();

/* ============================================================
   THE CALL — what would you ship?
   ============================================================ */
const CALL=(function(){
  const OUT={
    rebuild:['Option A — the rebuild','That is exactly what I wanted to do when I started. Given a tight deadline and a design system that was still being built, it wasn\\u2019t realistic — and everything else would have waited for it.'],
    focus:['Option B — the three changes','That\\u2019s what shipped. All achievable within the constraints, no backend overhaul required, and every change traceable to a pattern in the tickets.'],
    paint:['Option C — the visual refresh','The rebrand needed this anyway, and it happened. On its own though, it leaves all three problems exactly where they were: no progress, no safety net, same structure.']
  };
  function pick(k){
    STATS.call=k;
    $$('.callc').forEach(c=>{const on=c.dataset.c===k;c.classList.toggle('on',on);if(on)c.classList.add('shipped');});
    $('#callOut').innerHTML='<h5>'+OUT[k][0]+'</h5><p>'+OUT[k][1]+'</p>'+
      (k==='focus'?'':'<p style="margin-top:10px"><button class="mini" data-call="focus">See what shipped</button></p>');
  }
  $('#callGrid').addEventListener('click',e=>{const c=e.target.closest('.callc');if(c)pick(c.dataset.c);});
  $('#callOut').addEventListener('click',e=>{const b=e.target.closest('[data-call]');if(b)pick(b.dataset.call);});
  return {pick,all:()=>{$$('.callc').forEach(c=>{c.classList.add('on','shipped');});},
    reset:()=>{$$('.callc').forEach(c=>c.classList.remove('on','shipped'));STATS.call=null;
      $('#callOut').innerHTML='<h5>Make a call</h5><p>Pick an option above. Each one gets checked against the three constraints from the last section.</p>';}};
})();

/* ============================================================
   THE KIT — every component, every state
   ============================================================ */
(function(){
  const kit=$('#kitBox');const LAB={'':'Default','s-hover':'Hover','s-focus':'Focus','s-error':'Error','s-disabled':'Disabled'};
  function setState(v){
    kit.className='kit'+(kit.classList.contains('compact')?' compact':'')+(v?' '+v:'');
    $$('[data-st]').forEach(b=>{b.classList.toggle('on',b.dataset.st===v);b.setAttribute('aria-pressed',b.dataset.st===v);});
    $('#kSt1').textContent=LAB[v];$('#kSt2').textContent=LAB[v];
  }
  $$('[data-st]').forEach(b=>b.addEventListener('click',()=>setState(b.classList.contains('on')?'':b.dataset.st)));
  $$('[data-dn]').forEach(b=>b.addEventListener('click',()=>{
    kit.classList.toggle('compact',!!b.dataset.dn);
    $$('[data-dn]').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});
  }));
  let v=7.5;
  const set=d=>{v=Math.max(0,Math.min(24,v+d));$('#kVal').textContent=v%1?v.toFixed(1):v.toFixed(0);
    $('#kSave').innerHTML='<i class="sdot"></i><span>Last saved <b>'+clock(new Date())+'</b></span><em>· just now</em>';};
  $('#kMinus').addEventListener('click',()=>set(-.5));$('#kPlus').addEventListener('click',()=>set(.5));
  $$('.kc-f .jump').forEach(b=>b.addEventListener('click',()=>document.querySelector(b.dataset.to).scrollIntoView({behavior:reduced?'auto':'smooth'})));
})();

/* ============================================================
   THE ARITHMETIC — multiply the published ranges
   ============================================================ */
(function(){
  const E=$('#mEntries'),P=$('#mPeople'),D=$('#mDays');
  const fmt=(lo,hi)=>{
    const h=v=>{const x=v/60;return x>=10?Math.round(x):Math.round(x*10)/10;};
    if(hi>=1000)return Math.round(lo/60)+'\\u2013'+Math.round(hi/60)+' h';
    if(hi>=90)return h(lo)+'\\u2013'+h(hi)+' h';
    return Math.round(lo)+'\\u2013'+Math.round(hi)+' min';
  };
  function paint(){
    const e=+E.value,p=+P.value,d=+D.value;
    $('#mEntriesV').textContent=e;$('#mPeopleV').textContent=p;$('#mDaysV').textContent=d;
    const oldLo=e*15*p,oldHi=e*20*p,newLo=e*7*p,newHi=e*10*p;
    $('#mOld').textContent=fmt(oldLo,oldHi);$('#mNew').textContent=fmt(newLo,newHi);
    $('#mOldF').style.width='100%';$('#mNewF').style.width=(newHi/oldHi*100)+'%';
    const sLo=e*(15-7)*p,sHi=e*(20-10)*p;
    $('#mDay').textContent=fmt(sLo,sHi);
    $('#mWeek').textContent=fmt(sLo*d,sHi*d);
    $('#mYear').textContent=fmt(sLo*d*48,sHi*d*48);
    $('#mDayE').textContent=p===1?'per person':'across '+p+' people';
    $('#mWeekE').textContent='at '+d+' day'+(d===1?'':'s')+' a week';
    $('#mFoot').textContent=e+' entr'+(e===1?'y':'ies')+' × '+(p===1?'1 person':p+' people')+' × '+d+' day'+(d===1?'':'s')+' a week — arithmetic on the published ranges, not a second measurement';
  }
  [E,P,D].forEach(i=>i.addEventListener('input',paint));
  paint();
  MATH={set:(e,p)=>{E.value=e;P.value=p;paint();},reset:()=>{E.value=12;P.value=1;D.value=5;paint();}};
})();

/* ============================================================
   THE ASSISTANT — a scripted prototype conversation
   ============================================================ */
(function(){
  const LOG=$('#cbotLog'),ASK=$('#cbotAsk');
  const Q=[
    {q:'Log 8 hours on Client portal',a:['8 h logged against Client portal for today.','Your timesheet is 3 of 4 sections done \\u2014 notes left. Saved just now.']},
    {q:'What\\u2019s left on my timesheet?',a:['Notes, then approval. Project context and hours are both complete.']},
    {q:'Did my expense report save?',a:['Yes. Last saved a minute ago, and nothing is sitting unsent.']},
    {q:'Who approves this?',a:['Your team lead. Send it and it lands in their queue straight away.']}
  ];
  let used=[];
  function add(cls,text){const d=document.createElement('div');d.className='msg '+cls;d.textContent=text;LOG.appendChild(d);LOG.scrollTop=LOG.scrollHeight;return d;}
  function typing(){const d=document.createElement('div');d.className='msg a typing';d.innerHTML='<i></i><i></i><i></i>';LOG.appendChild(d);LOG.scrollTop=LOG.scrollHeight;return d;}
  function asks(){
    ASK.innerHTML=Q.map((x,i)=>used.indexOf(i)>-1?'':'<button class="mini" data-q="'+i+'">'+esc(x.q)+'</button>').join('')
      +(used.length===Q.length?'<button class="mini" data-q="reset">Start the conversation again</button>':'');
  }
  function say(i){
    used.push(i);asks();add('u',Q[i].q);
    let delay=reduced?60:520;
    const t=typing();
    Q[i].a.forEach((line,n)=>{
      setTimeout(()=>{if(n===0)t.remove();add('a',line);},delay+n*(reduced?60:700));
    });
  }
  ASK.addEventListener('click',e=>{const b=e.target.closest('[data-q]');if(!b)return;
    if(b.dataset.q==='reset'){used=[];LOG.innerHTML='';start();return;}
    say(+b.dataset.q);});
  function start(){add('a','Hi. I can log time, tell you what\\u2019s left, and confirm what\\u2019s saved.');asks();}
  start();
  BOT={ask:()=>{const next=Q.map((x,i)=>i).find(i=>used.indexOf(i)<0);if(next!==undefined)say(next);},
       reset:()=>{used=[];LOG.innerHTML='';start();}};
})();

/* ============================================================
   THE RECEIPT — what you actually did here
   ============================================================ */
(function(){
  const box=$('#receipt');let done=false;
  function row(k,v){return '<div class="r"><span>'+k+'</span><b>'+v+'</b></div>';}
  function build(){
    let h=row('Sections reached',STATS.reached+' of '+SECS.length);
    if(RUNS.old)h+=row('Old flow','6 screens · '+secs(RUNS.old.ms)+' · '+RUNS.old.clicks+' clicks');
    if(RUNS.neu)h+=row('New flow','4 sections · '+secs(RUNS.neu.ms)+' · '+RUNS.neu.clicks+' clicks');
    if(RUNS.old&&RUNS.neu)h+=row('Project name typed',RUNS.old.typed+'× old, 1× new');
    if(STATS.tickets)h+=row('Tickets filed',STATS.tickets+' of 9');
    if(STATS.call)h+=row('Your call',{rebuild:'Option A — rebuild',focus:'Option B — three fixes',paint:'Option C — refresh'}[STATS.call]);
    if(STATS.frames.size)h+=row('Frames opened',STATS.frames.size+' of 8');
    if(STATS.variations.size)h+=row('Chatbot variations',STATS.variations.size+' of 3');
    if(STATS.screens.size)h+=row('App screens flicked through',STATS.screens.size);
    if(STATS.race)h+=row('Clock runs',STATS.race);
    if(STATS.palette)h+=row('Palette commands',STATS.palette);
    h+=row('Work lost on this page','0');
    $('#receiptRows').innerHTML=h;
    $('#rcTime').textContent=secs(Date.now()-STATS.t0);
  }
  const rio=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){build();if(!done){done=true;setInterval(()=>{if(box.getBoundingClientRect().top<innerHeight)build();},4000);}}});},{threshold:.35});
  rio.observe(box);
})();

/* ============================================================
   TOOLBAR + COMMAND PALETTE
   ============================================================ */
(function(){
  const pal=$('#pal'),input=$('#palIn'),list=$('#palList');
  const go=id=>()=>document.getElementById(id).scrollIntoView({behavior:reduced?'auto':'smooth'});
  const CMDS=SECS.map((s,i)=>({t:String(i+1).padStart(2,'0')+' · '+s.dataset.hud,k:'Section',run:go(s.id)}))
  .concat([
    {t:'Run the old timesheet flow',k:'Demo',run:()=>{go('problem')();setTimeout(()=>{const b=$('#owGo');if(b&&!$('#owStart').classList.contains('gone'))b.click();},420);}},
    {t:'Reset the working timesheet',k:'Demo',run:()=>{TRY.reset();go('try')();}},
    {t:'Auto-save: the first version',k:'Demo',run:()=>{TRY.setMode('v1');go('try')();}},
    {t:'Auto-save: what shipped',k:'Demo',run:()=>{TRY.setMode('v2');go('try')();}},
    {t:'Close the tab by accident',k:'Demo',run:()=>{go('try')();setTimeout(()=>$('#tryKill').click(),420);}},
    {t:'File the support tickets for me',k:'Demo',run:()=>{go('evidence')();setTimeout(()=>EVID.auto(),420);}},
    {t:'Compare all three options',k:'Demo',run:()=>{go('call')();CALL.all();}},
    {t:'Flip the three fix cards',k:'Demo',run:()=>{$('#fxAll').click();go('fixes')();}},
    {t:'Flip the constraint cards',k:'Demo',run:()=>{$('#conAll').click();go('constraints')();}},
    {t:'Map the journey end to end',k:'Demo',run:()=>{$('[data-j="flow"]').click();go('journey')();}},
    {t:'Run the documentation clock',k:'Demo',run:()=>{go('results')();setTimeout(()=>RES.race(),420);}},
    {t:'Show the tickets after the update',k:'Demo',run:()=>{go('results')();RES.tix('after');}},
    {t:'Do the arithmetic for a team of 25',k:'Demo',run:()=>{MATH.set(12,25);go('maths')();}},
    {t:'Show the screen annotations',k:'Demo',run:()=>{go('web')();setTimeout(()=>WEB.pins(),420);}},
    {t:'Play the mobile screens',k:'Demo',run:()=>{go('mobile')();setTimeout(()=>MOB.play(),420);}},
    {t:'Ask the assistant something',k:'Demo',run:()=>{go('chatbot')();setTimeout(()=>BOT.ask(),420);}},
    {t:'Open the working file in Figma',k:'Link',run:()=>{if(FIGMA_FILE)window.open(FIGMA_FILE,'_blank','noopener');else toast('No Figma link set yet.');}},
    {t:'Reset everything on this page',k:'Page',run:()=>resetAll()}
  ]);
  let items=CMDS,sel=0;
  function paint(){
    list.innerHTML=items.length?items.map((c,i)=>'<button class="'+(i===sel?'sel':'')+'" data-i="'+i+'">'+esc(c.t)+'<span class="k">'+c.k+'</span></button>').join('')
      :'<div class="pal-empty">Nothing matches that.</div>';
    const s=$('.sel',list);if(s){if(s.offsetTop<list.scrollTop)list.scrollTop=s.offsetTop;else if(s.offsetTop+s.offsetHeight>list.scrollTop+list.clientHeight)list.scrollTop=s.offsetTop+s.offsetHeight-list.clientHeight;}
  }
  function filter(){
    const q=input.value.trim().toLowerCase();
    items=q?CMDS.filter(c=>(c.t+' '+c.k).toLowerCase().includes(q)):CMDS;sel=0;paint();
  }
  function open(){pal.classList.add('on');input.value='';filter();setTimeout(()=>input.focus({preventScroll:true}),30);}
  function close(){pal.classList.remove('on');}
  function run(i){const c=items[i];if(!c)return;close();STATS.palette++;c.run();}
  input.addEventListener('input',filter);
  input.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){sel=Math.min(items.length-1,sel+1);paint();e.preventDefault();}
    else if(e.key==='ArrowUp'){sel=Math.max(0,sel-1);paint();e.preventDefault();}
    else if(e.key==='Enter'){run(sel);e.preventDefault();}
    else if(e.key==='Escape'){close();}
  });
  list.addEventListener('click',e=>{const b=e.target.closest('button');if(b)run(+b.dataset.i);});
  pal.addEventListener('click',e=>{if(e.target===pal)close();});
  function resetAll(){
    TRY.reset();TRY.setMode('v2');EVID.reset();CALL.reset();RES.reset();WEB.reset();MOB.reset();BOT.reset();MATH.reset();
    $$('.con.on').forEach(c=>c.click());$$('.fx-card.on').forEach(c=>$('.fx-btn',c).click());
    $('[data-j="built"]').click();$('[data-g="first"]').click();$('#crChips [data-f="all"]').click();
    $$('.cb.on').forEach(c=>c.click());
    OLDFLOW.reset();
    toast('Everything on the page is back to where it started.');
  }
  addEventListener('keydown',e=>{
    if(e.target.matches('input,textarea,select'))return;
    const k=e.key.toLowerCase();
    if((e.metaKey||e.ctrlKey)&&k==='k'){open();e.preventDefault();return;}
    if(e.metaKey||e.ctrlKey||e.altKey)return;
    if(k==='k'||k==='/'){open();e.preventDefault();}
  });
})();

/* ---------- notes are draggable, as everywhere else ---------- */
$$('.note').forEach(n=>{
  let d=null;
  n.addEventListener('pointerdown',e=>{
    if(matchMedia('(max-width:900px)').matches)return;
    d={x:e.clientX,y:e.clientY,dx:parseFloat(n.style.getPropertyValue('--dx'))||0,dy:parseFloat(n.style.getPropertyValue('--dy'))||0};
    n.classList.add('lift');n.setPointerCapture(e.pointerId);
  });
  n.addEventListener('pointermove',e=>{if(!d)return;
    n.style.setProperty('--dx',(d.dx+e.clientX-d.x)+'px');n.style.setProperty('--dy',(d.dy+e.clientY-d.y)+'px');});
  ['pointerup','pointercancel'].forEach(t=>n.addEventListener(t,()=>{d=null;n.classList.remove('lift');}));
});
})();
<\/script>
</body>
</html>
`})))()}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{o(),b(),_(),d(),ie(),j(),z(),_e(),B=x(F),V=x(N),H=x(M),U={g6jJvuZq8:`(min-width: 810px) and (max-width: 1439.98px)`,GBMUT0mHI:`(max-width: 809.98px)`,sa7u61oEm:`(min-width: 1440px)`},W=[],G=`framer-mKD99`,K={g6jJvuZq8:`framer-v-106syfr`,GBMUT0mHI:`framer-v-1dutu9a`,sa7u61oEm:`framer-v-1m9wihx`},q=(e,t,n)=>e&&t?`position`:n,J={Desktop:`sa7u61oEm`,Phone:`GBMUT0mHI`,Tablet:`g6jJvuZq8`},Y=({value:e})=>C()?null:/*#__PURE__*/ l(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),X=({height:e,id:t,width:n,...r})=>({...r,variant:J[r.variant]??r.variant??`sa7u61oEm`}),Z=S(/* @__PURE__ */ c(function(e,r){let i=a(null),o=r??i;n();let{activeLocale:c,setLocale:d}=O();ne();let{style:f,className:p,layoutId:_,variant:v,...b}=X(e),x=s(()=>P({},c),[c]);ee(x);let[S,C]=re(v,U,!1),T=y(G),k=t(D)?.isLayoutTemplate,A=!!t(h)?.transition?.layout,j=q(k,A);return te({}),/*#__PURE__*/ l(D.Provider,{value:{activeVariantId:S,humanReadableVariantMap:J,primaryVariantId:`sa7u61oEm`,variantClassNames:K},children:/*#__PURE__*/ u(g,{id:_??`A0nbjhEyA`,children:[/*#__PURE__*/ l(Y,{value:`html body { background: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, rgb(255, 255, 255)); }`}),/*#__PURE__*/ u(m.div,{...b,className:y(T,`framer-1m9wihx`,p),ref:o,style:{...f},children:[/*#__PURE__*/ l(m.div,{className:`framer-s1d1w7`,"data-framer-name":`All Content`,layout:j}),/*#__PURE__*/ l(E,{children:/*#__PURE__*/ l(w,{className:`framer-x58cm9-container`,isAuthoredByUser:!0,layout:j,nodeId:`EjstSCMgO`,scopeId:`A0nbjhEyA`,children:/*#__PURE__*/ l(F,{background:`framer`,backLabel:`Back to the canvas`,backUrl:`/`,height:`100%`,id:`EjstSCMgO`,layoutId:`EjstSCMgO`,siteCursor:!0,style:{width:`100%`},topOffset:180,width:`100%`})})}),/*#__PURE__*/ l(E,{children:/*#__PURE__*/ l(w,{className:`framer-gkereh-container`,"data-framer-name":`Smooth Scroll`,isAuthoredByUser:!0,isModuleExternal:!0,layout:j,layoutScroll:!0,name:`Smooth Scroll`,nodeId:`jOmHwRCo3`,scopeId:`A0nbjhEyA`,children:/*#__PURE__*/ l(N,{height:`100%`,id:`jOmHwRCo3`,infinite:!1,intensity:5,layoutId:`jOmHwRCo3`,name:`Smooth Scroll`,orientation:`vertical`,smooth:!0,width:`100%`})})}),/*#__PURE__*/ l(m.div,{className:`framer-aqnnbf`,"data-framer-name":`All Content`,layout:j,children:/*#__PURE__*/ l(E,{children:/*#__PURE__*/ l(w,{className:`framer-v7cf2b-container`,isAuthoredByUser:!0,nodeId:`RgsPoKzKp`,scopeId:`A0nbjhEyA`,children:/*#__PURE__*/ l(M,{color:`var(--token-8d85ac4c-48a8-4cd1-a641-810c723e95b1, rgb(170, 171, 171))`,height:`100%`,id:`RgsPoKzKp`,layoutId:`RgsPoKzKp`,majorStep:100,speed:.2,style:{width:`100%`},subdivisions:2,width:`100%`})})})})]}),/*#__PURE__*/ l(`div`,{id:`overlay`})]})})}),[`.framer-mKD99.framer-1vz30k7, .framer-mKD99 .framer-1vz30k7 { display: block; }`,`.framer-mKD99.framer-1m9wihx { align-content: center; align-items: center; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,`.framer-mKD99 .framer-s1d1w7 { align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; left: 0px; min-height: 88px; overflow: visible; padding: 48px 0px 0px 0px; position: fixed; right: 0px; top: 0px; z-index: 3; }`,`.framer-mKD99 .framer-x58cm9-container, .framer-mKD99 .framer-v7cf2b-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-mKD99 .framer-gkereh-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,`.framer-mKD99 .framer-aqnnbf { align-content: flex-start; align-items: flex-start; background-color: var(--token-341b58e0-d728-43ce-a1dc-e77a522cab4f, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 48px 0px 0px 0px; position: fixed; right: 0px; top: 0px; z-index: 3; }`,`@media (max-width: 809.98px) { .framer-mKD99.framer-1m9wihx { height: 1050px; width: 390px; }}`,`@media (min-width: 810px) and (max-width: 1439.98px) { .framer-mKD99.framer-1m9wihx { width: 810px; }}`],`framer-mKD99`),Z.displayName=`Cpsignage`,Z.defaultProps={height:24481,width:1440},v(Z,[{explicitInter:!0,fonts:[]},...B,...V,...H],{supportsExplicitInterCodegen:!0}),Q={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerA0nbjhEyA`,slots:[],annotations:{framerIntrinsicWidth:`1440`,framerAcceptsLayoutTemplate:`true`,framerLayoutTemplateFlowEffect:`true`,framerColorSyntax:`true`,framerScrollSections:`false`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"GBMUT0mHI":{"layout":["fixed","fixed"]},"g6jJvuZq8":{"layout":["fixed","auto"]}}}`,framerContractVersion:`1`,framerIntrinsicHeight:`24481`,framerAutoSizeImages:`true`,framerResponsiveScreen:`true`,framerComponentViewportWidth:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}})))()}$();export{Q as __FramerMetadata__,Z as default,W as queryParamNames};
//# sourceMappingURL=t5oaE4sh-2c4wwCUY1nRa7_Lkcv33JUvv7nMMWhcSzc.CEGBCUXV.mjs.map