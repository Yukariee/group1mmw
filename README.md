# Digital Device Use and Students' Face-to-Face Learning Experience

A static, single-page data presentation for the **Mathematics in the Modern World (MMW) Performance Task**. It organizes and presents survey data collected from **24 student respondents** about digital device use and face-to-face learning.

## Before you publish this — 2 things to finish

1. **Add the survey questionnaire link.** Open `data.js`, find the line:
   ```js
   "questionnaire_url": "",
   ```
   and paste the actual Microsoft Forms link between the quotes. Until this is filled in, the site shows a visible red placeholder in the Overview section instead of guessing a URL.
2. **Do not commit or publish the raw Excel/CSV export.** That file contains names and school email addresses and should only go to your instructor, exactly as your assignment requires. This repository is built to contain *no* names or emails — see "Privacy" below.

## What's in this project

```
index.html    — page structure and content
style.css     — visual design (all styling lives here)
script.js     — reads data.js and renders every chart/table with Chart.js
data.js       — the actual survey data and pre-computed statistics (no names/emails)
chart.min.js  — Chart.js library, bundled locally (no internet/CDN required)
README.md     — this file
```

`data.js` is generated from the raw dataset with every frequency, percentage, mean, median, min, max, histogram bin, and the Q4–Q5 correlation coefficient computed directly from the 24 responses — nothing in it is invented or rounded off from the source values beyond ordinary display rounding (1 decimal place for percentages).

## Privacy

The original survey export includes respondent names and `@students.nu-fairview.edu.ph` email addresses. **None of that appears anywhere in this website.** Every respondent is identified only as `Respondent 01` through `Respondent 24`, matching the order they appear in the raw export. The raw spreadsheet itself is not part of this project — submit that separately to your instructor as your assignment requires.

## Run it locally

No build step, server, or install is required.

- **Easiest:** double-click `index.html` to open it in your browser. Because the data lives in `data.js` as a plain script tag (not fetched over `fetch()`/AJAX), this works even when opened directly from disk — there's no CORS issue to worry about.
- **Optional (if you prefer a local server):**
  ```bash
  cd path/to/this/folder
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

## Deploy to GitHub Pages

1. Create a new GitHub repository (public, so Pages can serve it — or private with GitHub Pro/Team/Enterprise).
2. Add these five files (`index.html`, `style.css`, `script.js`, `data.js`, `README.md`) to the repository root and commit/push them.
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch".
5. Choose your default branch (e.g. `main`) and the `/ (root)` folder, then **Save**.
6. Wait a minute or two, then GitHub will show your live URL, typically:
   `https://<your-username>.github.io/<repository-name>/`

No backend, database, login, or API key is used anywhere in this project.

## A note on the data as collected

A few things worth knowing when you present this, so you're not caught off guard by questions:

- **All 24 respondents in this sample reported the same year level (1st Year)** and an age of either 18 or 19. This is what was actually submitted — the site does not force variety that isn't in the data, and the Year Level chart/table say so explicitly.
- **One Q6 response was recorded as a combined answer:** *"Completing school activities/Accessing learning materials."* It's kept as its own category in the charts and tables rather than merged into either option, since that's what the respondent actually submitted.
- **Age** was collected as an exact number (18 or 19) rather than one of the original age-bracket choices, so it's presented and classified here as ratio-level numeric data reflecting how it was actually gathered, per the assignment's instruction not to force a classification that doesn't match the collected values.
- **Likert responses (Q9–Q13) are treated as ordinal**, not interval, in the Data Types section — this is stated explicitly on the page.
- The **Q4 vs. Q5 correlation coefficient** is computed and shown with an explicit note that correlation describes this sample only and does not imply causation, per the assignment's requirement to avoid causal claims.

## Tech stack

Plain HTML, CSS, and JavaScript, plus [Chart.js](https://www.chartjs.org/) v4.4.4 for all bar, histogram, and scatter charts. Chart.js is bundled locally as `chart.min.js` rather than loaded from a CDN, so the site works fully offline and never depends on an external script host being reachable. The Likert (Q9–Q13) visuals are hand-built 100%-stacked bars in HTML/CSS for precise control over labeling.
