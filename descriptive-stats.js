/* ---------------------------------------------------------
   Descriptive Statistics (Central Tendency, Dispersion,
   Relative Location) for Q4 and Q5.
   Computed directly from SURVEY_DATA.respondents (data.js) —
   no separate dataset, nothing hardcoded.
   Kept in its own file so it cannot affect the existing charts.
   --------------------------------------------------------- */

(function () {
  "use strict";

  if (typeof SURVEY_DATA === "undefined") return;
  const rows = SURVEY_DATA.respondents;

  /* ----- calculations ----- */

  function quantile(sorted, p) {
    // Inclusive / linear method: position = (n - 1) * p  (Excel QUARTILE.INC)
    const pos = (sorted.length - 1) * p;
    const lo = Math.floor(pos);
    const hi = Math.ceil(pos);
    return sorted[lo] + (pos - lo) * (sorted[hi] - sorted[lo]);
  }

  function describe(values) {
    const n = values.length;
    const sorted = values.slice().sort((a, b) => a - b);
    const sum = values.reduce((s, v) => s + v, 0);
    const mean = sum / n;

    const counts = new Map();
    values.forEach((v) => counts.set(v, (counts.get(v) || 0) + 1));
    const topCount = Math.max.apply(null, Array.from(counts.values()));
    const modes = Array.from(counts.keys())
      .filter((v) => counts.get(v) === topCount)
      .sort((a, b) => a - b);

    const ss = values.reduce((s, v) => s + (v - mean) * (v - mean), 0);
    const variance = ss / (n - 1); // sample variance
    const min = sorted[0];
    const max = sorted[n - 1];

    return {
      n, sum, mean,
      median: quantile(sorted, 0.5),
      modes, modeCount: topCount,
      min, max,
      range: max - min,
      variance,
      sd: Math.sqrt(variance),
      q1: quantile(sorted, 0.25),
      q2: quantile(sorted, 0.5),
      q3: quantile(sorted, 0.75),
    };
  }

  const q4 = describe(rows.map((r) => r.q4));
  const q5 = describe(rows.map((r) => r.q5));

  /* ----- formatting ----- */

  const fix2 = (v) => v.toFixed(2);
  // plain number, up to 3 decimals, no trailing zeros (2, 1.2, 10.8)
  const plain = (v) => String(parseFloat(v.toFixed(3)));
  // at least 2 decimals, up to 3 (2.875, 4.25, 6.00)
  const quart = (v) => {
    const t = parseFloat(v.toFixed(3));
    return t.toFixed(Math.max(2, (String(t).split(".")[1] || "").length));
  };
  const modeText = (d) => d.modes.map(plain).join(", ");

  function fill(tableId, spec) {
    const tbody = document.querySelector("#" + tableId + " tbody");
    if (!tbody) return;
    tbody.innerHTML = spec
      .map(([label, a, b]) => `<tr><td>${label}</td><td class="num">${a}</td><td class="num">${b}</td></tr>`)
      .join("");
  }

  fill("tableCentral", [
    ["Mean", fix2(q4.mean), fix2(q5.mean)],
    ["Median", fix2(q4.median), fix2(q5.median)],
    ["Mode", modeText(q4), modeText(q5)],
    ["Times the mode appears", q4.modeCount, q5.modeCount],
  ]);

  fill("tableDispersion", [
    ["Minimum", plain(q4.min), plain(q5.min)],
    ["Maximum", plain(q4.max), plain(q5.max)],
    ["Range", plain(q4.range), plain(q5.range)],
    ["Variance (sample)", fix2(q4.variance), fix2(q5.variance)],
    ["Standard deviation (sample)", fix2(q4.sd), fix2(q5.sd)],
  ]);

  fill("tableLocation", [
    ["Q1 (25th percentile)", quart(q4.q1), quart(q5.q1)],
    ["Q2 (50th percentile / median)", quart(q4.q2), quart(q5.q2)],
    ["Q3 (75th percentile)", quart(q4.q3), quart(q5.q3)],
  ]);

  const s4 = document.getElementById("dsSumQ4");
  const s5 = document.getElementById("dsSumQ5");
  if (s4) s4.textContent = plain(q4.sum);
  if (s5) s5.textContent = plain(q5.sum);
  /* ----- box plot (Chart.js floating bars, no plugin needed) ----- */

  const boxCanvas = document.getElementById("chartBoxPlot");
  if (boxCanvas && typeof Chart !== "undefined") {
    const TEAL = "#2C6E5E", GOLD = "#B9812E", INK = "#17221D", LINE = "#D6DCD6";
    const TEAL_SOFT = "#8FB6A8", GOLD_SOFT = "#D3A868";
    const sets = [q4, q5];
    const MONO = "'IBM Plex Mono', monospace";

    new Chart(boxCanvas, {
      type: "bar",
      data: {
        labels: ["Q4: School-related", "Q5: Non-school"],
        datasets: [
          {
            label: "Minimum to maximum",
            data: sets.map((d) => [d.min, d.max]),
            backgroundColor: [TEAL, GOLD],
            barThickness: 3,
            grouped: false,
            order: 3,
          },
          {
            label: "Q1 to Q3",
            data: sets.map((d) => [d.q1, d.q3]),
            backgroundColor: [TEAL_SOFT, GOLD_SOFT],
            borderColor: [TEAL, GOLD],
            borderWidth: 2,
            barThickness: 46,
            grouped: false,
            order: 2,
          },
          {
            label: "Median (Q2)",
            data: sets.map((d) => [d.median - 0.05, d.median + 0.05]),
            backgroundColor: INK,
            barThickness: 46,
            grouped: false,
            order: 1,
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
            backgroundColor: INK,
            titleFont: { family: MONO, size: 11 },
            bodyFont: { family: MONO, size: 11 },
            padding: 10,
            callbacks: {
              label: (ctx) => {
                const d = sets[ctx.dataIndex];
                if (ctx.datasetIndex === 0) return `Min ${plain(d.min)}  \u2013  Max ${plain(d.max)}`;
                if (ctx.datasetIndex === 1) return `Q1 ${quart(d.q1)}  \u2013  Q3 ${quart(d.q3)}`;
                return `Median (Q2) ${quart(d.median)}`;
              },
            },
          },
        },
        scales: {
          x: {
            min: 0,
            max: 13,
            grid: { color: LINE },
            title: { display: true, text: "Hours per day" },
            ticks: { stepSize: 1, font: { family: MONO, size: 11 } },
          },
          y: { grid: { display: false }, ticks: { font: { size: 11.5 } } },
        },
      },
    });
  }
})();