// Pequenas conveniências do painel (sem dependências).
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-copiar]");
  if (!b) return;
  const el = document.getElementById(b.dataset.copiar);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    const t = b.textContent;
    b.textContent = "Copiado ✓";
    setTimeout(() => (b.textContent = t), 1800);
  });
});
document.addEventListener("submit", (e) => {
  const f = e.target;
  const btn = e.submitter;
  const msg = (btn && btn.dataset.confirmar) || f.dataset.confirmar;
  if (msg && !confirm(msg)) { e.preventDefault(); return; }
  if (btn) setTimeout(() => { btn.disabled = true; btn.textContent = "Aguarde…"; }, 0);
});
