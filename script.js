/* ---------------------------------------------------------
   Renders every chart and table from SURVEY_DATA (data.js).
   No data is invented here — everything comes from data.js,
   which was computed directly from the 24 collected responses.
   --------------------------------------------------------- */

(function () {
  "use strict";

  const D = SURVEY_DATA;

  const COLOR = {
    teal: "#2C6E5E",
    tealSoft: "#5C9587",
    gold: "#B9812E",
    goldSoft: "#D3A868",
    rose: "#AD4E44",
    ink: "#17221D",
    inkSoft: "#4B564F",
    line: "#D6DCD6",
  };

  const LIKERT_COLORS = ["#AD4E44", "#CB8E7C", "#C9C6B8", "#8FB6A8", "#2C6E5E"];
  const EFF_COLORS = ["#AD4E44", "#CB8E7C", "#C9C6B8", "#8FB6A8", "#2C6E5E"];
  const DIST_COLORS = ["#2C6E5E", "#8FB6A8", "#C9C6B8", "#CB8E7C", "#AD4E44"];

  Chart.defaults.font.family = "'IBM Plex Sans', sans-serif";
  Chart.defaults.color = COLOR.inkSoft;
  Chart.defaults.borderColor = COLOR.line;

  function baseBarOptions(extra) {
    return Object.assign(
      {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: COLOR.ink,
            titleFont: { family: "'IBM Plex Mono', monospace", size: 11 },
            bodyFont: { family: "'IBM Plex Mono', monospace", size: 11 },
            padding: 10,
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11 } } },
          y: {
            beginAtZero: true,
            grid: { color: COLOR.line },
            ticks: { precision: 0, font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
        },
      },
      extra || {}
    );
  }

  function barChart(canvasId, labels, data, opts) {
    opts = opts || {};
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: opts.colors || COLOR.teal,
            borderRadius: 2,
            maxBarThickness: opts.maxBarThickness || 56,
          },
        ],
      },
      options: baseBarOptions(opts.optionsExtra),
    });
  }

  function horizontalBarChart(canvasId, labels, data, opts) {
    opts = opts || {};
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: opts.colors || COLOR.teal,
            borderRadius: 2,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: COLOR.ink,
            callbacks: opts.tooltipCallback,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: COLOR.line },
            ticks: { precision: 0, font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 11.5 }, autoSkip: false },
          },
        },
      },
    });
  }

  /* ---------- Overview ---------- */

  const qLink = document.getElementById("questionnaireLink");
  if (D.questionnaire_url) {
    qLink.href = D.questionnaire_url;
  } else {
    qLink.textContent = "Survey questionnaire link — add before publishing";
    qLink.style.color = COLOR.rose;
    qLink.removeAttribute("target");
  }

  /* ---------- Respondent profile ---------- */

  barChart(
    "chartAge",
    D.age.freq.map((r) => String(r.category)),
    D.age.freq.map((r) => r.frequency),
    { colors: COLOR.teal }
  );

  barChart(
    "chartYear",
    D.year.map((r) => r.category),
    D.year.map((r) => r.frequency),
    { colors: COLOR.gold, maxBarThickness: 90 }
  );
  document.getElementById("yearNote").textContent =
    D.year.length === 1
      ? "All 24 respondents in this sample reported the same year level (" + D.year[0].category + ")."
      : "";

  barChart(
    "chartDevice",
    D.device.map((r) => r.category),
    D.device.map((r) => r.frequency),
    { colors: [COLOR.teal, COLOR.gold, COLOR.tealSoft, COLOR.goldSoft] }
  );

  /* ---------- Device use ---------- */

  function fillStatStrip(elId, stats, unit) {
    const el = document.getElementById(elId);
    const rows = [
      ["Mean", stats.mean + (unit || "")],
      ["Median", stats.median + (unit || "")],
      ["Min", stats.min + (unit || "")],
      ["Max", stats.max + (unit || "")],
    ];
    el.innerHTML = rows
      .map(([label, val]) => `<div><dt>${label}</dt><dd>${val}</dd></div>`)
      .join("");
  }

  barChart(
    "chartQ4",
    D.q4_bins.map((b) => b.label),
    D.q4_bins.map((b) => b.count),
    { colors: COLOR.teal }
  );
  fillStatStrip("statsQ4", D.q4, "h");

  barChart(
    "chartQ5",
    D.q5_bins.map((b) => b.label),
    D.q5_bins.map((b) => b.count),
    { colors: COLOR.gold }
  );
  fillStatStrip("statsQ5", D.q5, "h");

  horizontalBarChart(
    "chartQ6",
    D.q6.map((r) => r.category),
    D.q6.map((r) => r.frequency),
    { colors: COLOR.teal }
  );

  horizontalBarChart(
    "chartQ7",
    D.q7.map((r) => r.category),
    D.q7.map((r) => r.frequency),
    {
      colors: EFF_COLORS,
      tooltipCallback: {
        label: (ctx) => {
          const row = D.q7[ctx.dataIndex];
          return `${row.frequency} respondents (${row.percentage}%)`;
        },
      },
    }
  );

  horizontalBarChart(
    "chartQ8",
    D.q8.map((r) => r.category),
    D.q8.map((r) => r.frequency),
    {
      colors: DIST_COLORS,
      tooltipCallback: {
        label: (ctx) => {
          const row = D.q8[ctx.dataIndex];
          return `${row.frequency} respondents (${row.percentage}%)`;
        },
      },
    }
  );

  /* ---------- Face-to-face Likert list ---------- */

  const likertList = document.getElementById("likertList");
  const likertQs = ["q9", "q10", "q11", "q12", "q13"];

  likertQs.forEach((key, i) => {
    const rows = D[key];
    const item = document.createElement("article");
    item.className = "likert-item";

    const segs = rows
      .map((r, idx) => {
        const width = r.percentage;
        if (width <= 0) return "";
        const label = width >= 8 ? `${r.frequency}` : "";
        return `<div class="likert-seg" style="width:${width}%; background:${LIKERT_COLORS[idx]}" title="${r.category}: ${r.frequency} (${r.percentage}%)">${label}</div>`;
      })
      .join("");

    const legend = rows
      .map(
        (r, idx) =>
          `<span><i style="background:${LIKERT_COLORS[idx]}"></i>${r.category} — ${r.frequency} (${r.percentage}%)</span>`
      )
      .join("");

    item.innerHTML = `
      <span class="likert-item__code">${key.toUpperCase()}</span>
      <h3>${D.questions[key]}</h3>
      <div class="likert-bar">${segs}</div>
      <div class="likert-legend">${legend}</div>
    `;
    likertList.appendChild(item);
  });

  /* ---------- Numerical comparison: scatter ---------- */

  const scatterCtx = document.getElementById("chartScatter");
  if (scatterCtx) {
    new Chart(scatterCtx, {
      type: "scatter",
      data: {
        datasets: [
          {
            label: "Respondents",
            data: D.scatter.map((p) => ({ x: p.x, y: p.y, id: p.id })),
            backgroundColor: "rgba(44,110,94,0.75)",
            borderColor: COLOR.teal,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: COLOR.ink,
            callbacks: {
              label: (ctx) => {
                const p = ctx.raw;
                return `${p.id}: Q4 = ${p.x}h, Q5 = ${p.y}h`;
              },
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: "Q4 — School-related hours per day" },
            grid: { color: COLOR.line },
          },
          y: {
            title: { display: true, text: "Q5 — Non-school hours per day" },
            grid: { color: COLOR.line },
            beginAtZero: true,
          },
        },
      },
    });
  }

  const r = D.correlation_q4_q5;
  const strength =
    Math.abs(r) < 0.1 ? "negligible" : Math.abs(r) < 0.3 ? "weak" : Math.abs(r) < 0.5 ? "moderate" : "strong";
  document.getElementById("correlationNote").innerHTML =
    `Pearson correlation coefficient (r) between Q4 and Q5 in this sample: <span class="stat-mono">${r}</span> — a ${strength} ${r >= 0 ? "positive" : "negative"} relationship. ` +
    `This describes the pattern within these 24 responses only. It does not establish that one variable causes the other, and does not generalize beyond this sample.`;

  /* ---------- Q4/Q5 summary table ---------- */

  const q4q5Body = document.querySelector("#tableQ4Q5Summary tbody");
  const measures = [
    ["Count", D.q4.count, D.q5.count],
    ["Mean (hours)", D.q4.mean, D.q5.mean],
    ["Median (hours)", D.q4.median, D.q5.median],
    ["Minimum (hours)", D.q4.min, D.q5.min],
    ["Maximum (hours)", D.q4.max, D.q5.max],
  ];
  q4q5Body.innerHTML = measures
    .map(([label, a, b]) => `<tr><td>${label}</td><td class="num">${a}</td><td class="num">${b}</td></tr>`)
    .join("");

  /* ---------- Full frequency / stats tables ---------- */

  const tablesContainer = document.getElementById("tablesContainer");

  function freqTableHTML(title, sub, rows) {
    const total = rows.reduce((s, r) => s + r.frequency, 0);
    return `
      <div class="table-wrap">
        <table class="data-table">
          <caption>${title}${sub ? `<br><span style="font-family:var(--mono); font-size:0.72rem; color:var(--ink-soft);">${sub}</span>` : ""}</caption>
          <thead><tr><th>Category</th><th class="num">Frequency</th><th class="num">Percentage</th></tr></thead>
          <tbody>
            ${rows
              .map(
                (r) =>
                  `<tr><td>${r.category}</td><td class="num">${r.frequency}</td><td class="num">${r.percentage}%</td></tr>`
              )
              .join("")}
            <tr class="total"><td>Total</td><td class="num">${total}</td><td class="num">100%</td></tr>
          </tbody>
        </table>
      </div>`;
  }

  function statsTableHTML(title, sub, stats, unit) {
    return `
      <div class="table-wrap">
        <table class="data-table">
          <caption>${title}${sub ? `<br><span style="font-family:var(--mono); font-size:0.72rem; color:var(--ink-soft);">${sub}</span>` : ""}</caption>
          <thead><tr><th>Statistic</th><th class="num">Value</th></tr></thead>
          <tbody>
            <tr><td>Count</td><td class="num">${stats.count}</td></tr>
            <tr><td>Mean</td><td class="num">${stats.mean}${unit}</td></tr>
            <tr><td>Median</td><td class="num">${stats.median}${unit}</td></tr>
            <tr><td>Minimum</td><td class="num">${stats.min}${unit}</td></tr>
            <tr><td>Maximum</td><td class="num">${stats.max}${unit}</td></tr>
          </tbody>
        </table>
      </div>`;
  }

  const tableBlocks = [
    freqTableHTML("Age", "Q1 · n = 24", D.age.freq),
    freqTableHTML("Year level", "Q2 · n = 24", D.year),
    freqTableHTML("Main digital device", "Q3 · n = 24", D.device),
    freqTableHTML("Main classroom activity", "Q6 · n = 24", D.q6),
    freqTableHTML("Device effectiveness", "Q7 · n = 24", D.q7),
    freqTableHTML("Device distraction frequency", "Q8 · n = 24", D.q8),
    statsTableHTML("School-related device hours", "Q4 · n = 24", D.q4, " h"),
    statsTableHTML("Non-school device hours", "Q5 · n = 24", D.q5, " h"),
    freqTableHTML("Q9 — Stay focused during class", "n = 24", D.q9),
    freqTableHTML("Q10 — Device helps complete tasks", "n = 24", D.q10),
    freqTableHTML("Q11 — Understand lesson better", "n = 24", D.q11),
    freqTableHTML("Q12 — Actively participate", "n = 24", D.q12),
    freqTableHTML("Q13 — Easily distracted", "n = 24", D.q13),
  ];

  tablesContainer.innerHTML = tableBlocks.join("");

  /* ---------- Mobile nav toggle ---------- */

  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".topbar__nav");
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
})();
