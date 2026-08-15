# Deploying this to your GitHub Pages repo

1. Open your `tryhackme-hacker-holidays` repo folder locally.
2. Delete the old `index.html` and the old `images/` folder.
3. Copy everything from this zip into the repo root, so you end up with:
   ```
   tryhackme-hacker-holidays/
     index.html
     styles.css
     script.js
     images/        (100 screenshots)
     days/          (14 write-up pages: day-0.html ... day-14.html)
   ```
4. Commit and push:
   ```
   git add -A
   git commit -m "Redesign write-up site"
   git push
   ```
5. GitHub Pages will rebuild automatically — give it a minute, then reload
   https://hal-imaxabdi.github.io/tryhackme-hacker-holidays/

## Editing the intro text
Open `index.html` and edit the paragraph inside the `<div class="intro-card">`
section (search for "How this went") to make it sound more like you.

## Editing a write-up
Each day is its own plain HTML file in `days/`, e.g. `days/day-7.html`.
Open it in any text editor and edit the text between the `<div class="content">`
tags — headings are `<h2>`, paragraphs are `<p>`, screenshots are the
`<figure class="shot">` blocks.
