

document.addEventListener("DOMContentLoaded", function () {
    // Date countdown
    const weddingDate = new Date("2024-07-27T10:00:00").getTime();

    const countdownElement = document.getElementById("countdown");

    setInterval(function () {
        const now = new Date().getTime();
        const timeleft = weddingDate - now;


        const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
    }, 1000);

    !function () { 
        "use strict"; 
        
        function t(t, e) { let n; return (...o) => { clearTimeout(n), n = setTimeout((() => { t(...o) }), e) } }
         class e { constructor() { this.callbacks = [], window.addEventListener("DOMContentLoaded", (() => this.onDOMContentLoaded())) }
          onDOMContentLoaded()
           { this.callbacks.sort(((t, e) => t.priority - e.priority)).forEach((({ callback: t }) => t())) }
            runOnLoad(t) { "loading" === document.readyState ? this.callbacks.push(t) : t.callback() } } function n(t, n = Number.MAX_VALUE) { var o; (window.canva_scriptExecutor = null !== (o = window.canva_scriptExecutor) && void 0 !== o ? o : new e).runOnLoad({ callback: t, priority: n }) } class o { constructor(t) { this.items = [], this.previousWidth = document.documentElement.clientWidth, this.previousHeight = window.innerHeight; const e = t((() => this.onWindowResize()), 100); window.addEventListener("resize", e) } onWindowResize() { const t = document.documentElement.clientWidth, e = window.innerHeight, n = this.previousWidth !== t, o = this.previousHeight !== e; this.items.forEach((t => { const e = () => { t.callback(), t.executed = !0 }; (!t.executed || n && t.options.runOnWidthChange || o && t.options.runOnHeightChange) && e() })), this.previousWidth = t, this.previousHeight = e } runOnResize(t, e) { this.items.push({ callback: t, options: e, executed: e.runOnLoad }), this.items.sort(((t, e) => t.options.priority - e.options.priority)), e.runOnLoad && n(t, e.priority) } } function i(e, n, i = t) { var r; (window.canva_debounceResize = null !== (r = window.canva_debounceResize) && void 0 !== r ? r : new o(i)).runOnResize(e, { runOnLoad: !1, runOnWidthChange: !0, runOnHeightChange: !1, priority: Number.MAX_VALUE, ...n }) } const r = "--minfs", c = "--rzf", a = "--rfso", s = "--bfso"; function u(t, e, n = .001) { return Math.abs(t - e) < n } function d(t, e) { return window.getComputedStyle(t).getPropertyValue(e) } function l(t, e, n) { t.style.setProperty(e, n) } function m(t, e) { const n = document.createElement("div"); n.style.setProperty(t, e), document.body.append(n); const o = d(n, t); return n.remove(), o } function f() { const t = function () { const t = parseFloat(m("font-size", "0.1px")); return t > 1 ? t : 0 }(), e = function (t) { const e = 2 * Math.max(t, 1); return e / parseFloat(m("font-size", `${e}px`)) }(t); if (function (t) { if (0 === t) return; l(document.documentElement, r, `${t}px`), i((() => { const e = 100 * t, { clientWidth: n } = document.documentElement; l(document.documentElement, c, e > n ? (n / e).toPrecision(4) : null) }), { runOnLoad: !0 }) }(t * Math.max(1, e)), u(e, 1)) return; const n = u(parseFloat(d(document.documentElement, "font-size")), parseFloat(m("grid-template-columns", "1rem"))); l(document.documentElement, n ? a : s, e.toPrecision(4)) } function h() { document.querySelectorAll("img, image, video, svg").forEach((t => t.addEventListener("contextmenu", (t => t.preventDefault())))) } const p = t => { const e = { type: "CLICKED_LINK", link: t.currentTarget.getAttribute("href") }; fetch("_api/analytics/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }) }; function g() { [...document.querySelectorAll("a[href][data-interstitial-link]")].forEach((t => { t.addEventListener("click", p) })) } const y = "--sbw", v = "--inner1Vh"; function w(t, e, n) { t.style.setProperty(e, n) } function E() { w(document.documentElement, v, window.innerHeight / 100 + "px"), function () { const t = window.innerWidth - document.documentElement.clientWidth; w(document.documentElement, y, t >= 0 ? `${t}px` : null) }() } var b; const O = "undefined" != typeof window ? null === (b = window.navigator) || void 0 === b ? void 0 : b.userAgent : void 0; const L = !(!O || (A = O, !A.match(/AppleWebKit\//) || A.match(/Chrome\//) || A.match(/Chromium\//))); var A; function C() { document.querySelectorAll("svg").forEach((t => t.style.background = "url('data:image/png;base64,')")) } let x; function W() { x || (x = Array.from(document.querySelectorAll("foreignObject")).filter((t => 0 === t.getBoundingClientRect().width))); const t = function () { const t = document.createElement("div"); t.style.fontSize = "100vw", document.body.append(t); const e = parseFloat(window.getComputedStyle(t).fontSize); return t.remove(), e / window.innerWidth }(); Array.from(x).forEach((e => function (t) { return new Promise(((e, n) => { const o = t.querySelector("img"); o && !o.complete ? (o.addEventListener("load", (() => e())), o.addEventListener("error", (() => n()))) : e() })) }(e).finally((() => function (t, e) { const n = Array.from(t.children); n.forEach(((t, e) => { if (t.hasAttribute("data-foreign-object-container")) t.style.transformOrigin = "", t.style.transform = ""; else { const o = document.createElement("div"); o.setAttribute("data-foreign-object-container", ""), t.insertAdjacentElement("beforebegin", o), t.remove(), o.append(t), n[e] = o } })); const o = t.getScreenCTM(); if (!o) return; const { a: i, b: r, c: c, d: a } = o.scale(e); n.forEach((t => { if (!t.hasAttribute("data-foreign-object-container")) return; const { style: e } = t; e.transformOrigin = "0px 0px", e.transform = `matrix(${i}, ${r}, ${c}, ${a}, 0, 0)` })) }(e, t))))) } [function () { n(f) }, function () { i(E, { runOnLoad: !0, runOnHeightChange: !0, priority: 1 }) }, function () { L && i(W, { runOnLoad: !0 }) }, function () { L && n(C) }, function () { n(h) }, function () { n(g) }].forEach((t => t())) }();

});


