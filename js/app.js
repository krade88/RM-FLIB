/* ==========================================================================
   RM-FLIB — application logic
   Rendering, progress persistence, topic accordions, pace and navigation.
   Expects STAGES and GROUPS from js/data.js.
   ========================================================================== */

const STORAGE_KEY = "flib-roadmap-v1";
const TOTAL_HOURS = STAGES.reduce((sum, s) => sum + s.hours, 0);
const TOTAL_STAGES = STAGES.length;
const TOTAL_TOPICS = STAGES.reduce((sum, s) => sum + s.learn.length, 0);

let state = { checked: {}, pace: 15 };
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  if (saved && typeof saved === "object") {
    state.checked = saved.checked && typeof saved.checked === "object" ? saved.checked : {};
    state.pace = [10, 15, 20, 25].includes(Number(saved.pace)) ? Number(saved.pace) : 15;
  }
} catch (e) { /* localStorage может быть недоступен */ }

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* noop */ }
}

function checkIcon() {
  return '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function stageTemplate(s) {
  const topics = s.learn.map((item, i) => {
    const topicRes = item.resources.map(r => `<a href="${esc(r[1])}" target="_blank" rel="noopener noreferrer">${esc(r[0])} <i>↗</i></a>`).join("");
    const mistakes = Array.isArray(item.mistakes) && item.mistakes.length
      ? `<div class="mini-block mistakes"><h5>Частые ошибки</h5><ul>${item.mistakes.map(m => `<li>${esc(m)}</li>`).join("")}</ul></div>`
      : "";
    return `
    <li class="topic">
      <div class="topic-head">
        <label class="check">
          <input type="checkbox" data-key="${s.key}-${i}">
          <span class="box">${checkIcon()}</span>
          <span class="check-text"><b>${esc(item.title)}</b><span>${esc(item.desc)}</span></span>
        </label>
        <button class="topic-toggle" type="button" aria-expanded="false" aria-controls="topic-${s.key}-${i}" title="Практика, чекпоинт и ресурсы темы">
          <span class="plus" aria-hidden="true">+</span><span class="tt-label">Практика</span>
        </button>
      </div>
      <div class="topic-body${mistakes ? " has-mistakes" : ""}" id="topic-${s.key}-${i}" hidden>
        <div class="mini-block practice"><h5>Практика</h5><p>${esc(item.practice)}</p></div>
        <div class="mini-block checkpoint"><h5>Чекпоинт</h5><p>${esc(item.checkpoint)}</p></div>
        <div class="mini-block res"><h5>Ресурсы</h5>${topicRes}</div>
        ${mistakes}
      </div>
    </li>`;
  }).join("");

  const practice = s.practice.map(p => `<li>${esc(p)}</li>`).join("");
  const checkpoint = s.checkpoint.map(p => `<li>${esc(p)}</li>`).join("");
  const resources = s.resources.map(r => `<a href="${esc(r[1])}" target="_blank" rel="noopener noreferrer">${esc(r[0])} <i>↗</i></a>`).join("");
  const tech = s.tech.map(t => `<span>${esc(t)}</span>`).join("");
  const num = String(s.n).padStart(2, "0");

  return `
  <section class="stage" id="stage-${s.n}" data-stage="${s.n}">
    <div class="node" aria-hidden="true">${num}</div>
    <article class="card">
      <div class="card-head">
        <div style="min-width:0">
          <div class="kicker">Этап ${num} · ${esc(s.group)}<span class="now">сейчас</span></div>
          <h2 class="card-title">${esc(s.title)}</h2>
          <p class="lead">${esc(s.lead)}</p>
        </div>
        <div class="ring" style="--p:0" aria-hidden="true"><b>0%</b></div>
      </div>
      <div class="meta">
        <span class="pill">${s.hours} ч</span>
        <span class="pill dur weeks" data-hours="${s.hours}">≈ ${Math.max(1, Math.ceil(s.hours / state.pace))} нед</span>
        <span class="pill">${s.learn.length} тем</span>
      </div>
      <div class="tech">${tech}</div>
      <details ${s.n === 0 ? "open" : ""}>
        <summary>
          <span class="sum-left">Подробный план <span class="hint">теория · практика · чекпоинт</span></span>
          <span class="chev" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </summary>
        <div class="details-body">
          <div class="plan-grid">
            <div>
              <div class="plan-title-row">
                <h4 class="plan-title">Что изучить</h4>
                <button class="expand-topics" type="button">Развернуть разборы</button>
              </div>
              <ul class="checklist">${topics}</ul>
            </div>
            <aside class="side">
              <div class="sidebox practice"><h4>Практика этапа</h4><ul>${practice}</ul></div>
              <div class="sidebox checkpoint"><h4>Чекпоинт этапа</h4><ul>${checkpoint}</ul></div>
              <div class="sidebox res"><h4>Ресурсы этапа</h4>${resources}</div>
            </aside>
          </div>
        </div>
      </details>
      <div class="stage-foot">
        <span class="stage-progress">0 / ${s.learn.length} тем</span>
        <button class="mark-all" type="button">Отметить всё</button>
      </div>
    </article>
  </section>`;
}

const timeline = document.getElementById("timeline");
timeline.innerHTML = STAGES.map(stageTemplate).join("");

// route overview
const routeBar = document.getElementById("route-bar");
const routeLegend = document.getElementById("route-legend");
routeBar.innerHTML = GROUPS.map(g => {
  const hours = STAGES.filter(s => s.group === g.name).reduce((sum, s) => sum + s.hours, 0);
  return `<span class="seg" style="flex:${hours};background:${g.color}" title="${esc(g.name)}: ${hours} ч"></span>`;
}).join("");
routeLegend.innerHTML = GROUPS.map(g => {
  const items = STAGES.filter(s => s.group === g.name);
  const hours = items.reduce((sum, s) => sum + s.hours, 0);
  const range = items.length === 1 ? `этап ${items[0].n}` : `этапы ${items[0].n}–${items[items.length - 1].n}`;
  return `<div class="leg"><span class="dot" style="color:${g.color};background:${g.color}"></span><div><b>${esc(g.name)}</b><span>${range} · ${hours} ч</span></div></div>`;
}).join("");

// restore checks
document.querySelectorAll("#timeline input[type=checkbox]").forEach(input => {
  if (state.checked[input.dataset.key]) input.checked = true;
});

const statStages = document.getElementById("stat-stages");
const statHours = document.getElementById("stat-hours");
const statMonths = document.getElementById("stat-months");
const statPace = document.getElementById("stat-pace");
const statTopics = document.getElementById("stat-topics");
const tpLabel = document.getElementById("tp-label");
const tpPct = document.getElementById("tp-pct");
const tpBar = document.getElementById("tp-bar");
const tpMini = document.getElementById("tp-mini");

statStages.textContent = TOTAL_STAGES;
statHours.textContent = "≈ " + TOTAL_HOURS;

function updateWeeks() {
  document.querySelectorAll(".weeks").forEach(el => {
    const hours = Number(el.dataset.hours);
    el.textContent = "≈ " + Math.max(1, Math.ceil(hours / state.pace)) + " нед";
  });
  const months = Math.round(TOTAL_HOURS / state.pace / 4.345);
  statMonths.textContent = "≈ " + months;
  statPace.textContent = state.pace;
  document.querySelectorAll(".pace button").forEach(btn => {
    const active = Number(btn.dataset.pace) === state.pace;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

function updateAll() {
  let checkedTotal = 0;
  const stats = STAGES.map(s => {
    const el = document.getElementById("stage-" + s.n);
    const inputs = Array.from(el.querySelectorAll("input[type=checkbox]"));
    const done = inputs.filter(i => i.checked).length;
    const total = inputs.length;
    checkedTotal += done;
    const pct = total ? Math.round((done / total) * 100) : 0;

    el.classList.toggle("done", done === total);
    el.querySelector(".ring").style.setProperty("--p", pct);
    el.querySelector(".ring b").textContent = pct + "%";
    const progress = el.querySelector(".stage-progress");
    progress.textContent = done + " / " + total + " тем";
    progress.classList.toggle("done", done === total);
    el.querySelector(".mark-all").textContent = done === total ? "Снять отметки" : "Отметить всё";
    return { n: s.n, done, total };
  });

  const current = stats.find(x => x.done < x.total);
  document.querySelectorAll(".stage").forEach(el => el.classList.remove("current"));
  if (current) {
    const el = document.getElementById("stage-" + current.n);
    if (el) el.classList.add("current");
  }

  const pct = TOTAL_TOPICS ? Math.round((checkedTotal / TOTAL_TOPICS) * 100) : 0;
  tpLabel.textContent = checkedTotal + " / " + TOTAL_TOPICS + " тем";
  tpPct.textContent = pct + "%";
  tpBar.style.width = pct + "%";
  tpMini.style.width = pct + "%";
  statTopics.textContent = checkedTotal + " / " + TOTAL_TOPICS;

  document.querySelectorAll(".dotnav button").forEach((btn, i) => {
    btn.classList.toggle("done", stats[i].done === stats[i].total);
    btn.classList.toggle("current", current ? current.n === stats[i].n : false);
  });

  save();
}

// dot nav
const dotnav = document.getElementById("dotnav");
dotnav.innerHTML = STAGES.map(s => `
  <button type="button" data-target="stage-${s.n}" aria-label="Этап ${s.n}: ${esc(s.title)}">
    ${String(s.n).padStart(2, "0")}<span class="tip">${esc(s.title)}</span>
  </button>`).join("");

dotnav.addEventListener("click", e => {
  const btn = e.target.closest("button[data-target]");
  if (!btn) return;
  const el = document.getElementById(btn.dataset.target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
});

let activeDot = null;
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (activeDot) activeDot.classList.remove("active");
    const btn = dotnav.querySelector(`[data-target="${entry.target.id}"]`);
    if (btn) { btn.classList.add("active"); activeDot = btn; }
  });
}, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });
document.querySelectorAll(".stage").forEach(el => observer.observe(el));

// checkbox changes
timeline.addEventListener("change", e => {
  const input = e.target.closest("input[type=checkbox]");
  if (!input) return;
  state.checked[input.dataset.key] = input.checked;
  if (!input.checked) delete state.checked[input.dataset.key];
  updateAll();
});

// topic accordions, expand all, mark stage complete
timeline.addEventListener("click", e => {
  const topicToggle = e.target.closest(".topic-toggle");
  if (topicToggle) {
    const body = document.getElementById(topicToggle.getAttribute("aria-controls"));
    if (!body) return;
    const isOpen = topicToggle.getAttribute("aria-expanded") === "true";
    topicToggle.setAttribute("aria-expanded", String(!isOpen));
    body.hidden = isOpen;
    const label = topicToggle.querySelector(".tt-label");
    if (label) label.textContent = isOpen ? "Практика" : "Свернуть";
    const stageEl = topicToggle.closest(".stage");
    const bodies = Array.from(stageEl.querySelectorAll(".topic-body"));
    const allOpen = bodies.every(item => !item.hidden);
    const expandBtn = stageEl.querySelector(".expand-topics");
    if (expandBtn) expandBtn.textContent = allOpen ? "Свернуть разборы" : "Развернуть разборы";
    return;
  }

  const expandTopics = e.target.closest(".expand-topics");
  if (expandTopics) {
    const stageEl = expandTopics.closest(".stage");
    const bodies = Array.from(stageEl.querySelectorAll(".topic-body"));
    const openAll = bodies.some(body => body.hidden);
    bodies.forEach(body => { body.hidden = !openAll; });
    stageEl.querySelectorAll(".topic-toggle").forEach(toggle => {
      toggle.setAttribute("aria-expanded", String(openAll));
      const label = toggle.querySelector(".tt-label");
      if (label) label.textContent = openAll ? "Свернуть" : "Практика";
    });
    expandTopics.textContent = openAll ? "Свернуть разборы" : "Развернуть разборы";
    return;
  }

  const btn = e.target.closest(".mark-all");
  if (!btn) return;
  const stageEl = btn.closest(".stage");
  const inputs = Array.from(stageEl.querySelectorAll("input[type=checkbox]"));
  const allChecked = inputs.every(i => i.checked);
  inputs.forEach(input => {
    input.checked = !allChecked;
    if (input.checked) state.checked[input.dataset.key] = true;
    else delete state.checked[input.dataset.key];
  });
  updateAll();
});

// pace
document.querySelectorAll(".pace button").forEach(btn => {
  btn.addEventListener("click", () => {
    state.pace = Number(btn.dataset.pace);
    updateWeeks();
    save();
  });
});

// reset
document.getElementById("reset").addEventListener("click", () => {
  if (!window.confirm("Сбросить весь прогресс? Отметки тем будут удалены.")) return;
  state.checked = {};
  document.querySelectorAll("#timeline input[type=checkbox]").forEach(i => { i.checked = false; });
  updateAll();
});

updateWeeks();
updateAll();
