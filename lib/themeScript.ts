// Runs inline before the page paints, so a light-mode visitor never sees a
// dark flash. Mirrors the logic in lib/theme.ts: a stored choice wins, then
// the system preference, then dark.
export const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="dark";}})();`;
