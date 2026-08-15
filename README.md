# TryHackMe Hacker Holidays - Write-ups

My write-ups for TryHackMe's Hacker Holidays event (Jul 27 - Aug 9). 14 rooms across OSINT, AI/prompt injection, web exploitation, cloud, forensics, and a couple of boot2root boxes.

Live site: https://hal-imaxabdi.github.io/tryhackme-hacker-holidays/

## Structure

```
tryhackme-hacker-holidays/
  index.html
  styles.css
  script.js
  images/        screenshots used in the write-ups
  days/          day-0.html ... day-14.html, one file per room
```

## Editing

- Intro text lives in `index.html`, inside `<div class="intro-card">`.
- Each write-up is a plain HTML file in `days/`. Headings are `<h2>`, paragraphs are `<p>`, screenshots are `<figure class="shot">` blocks.

## Deploying changes

```
git add -A
git commit -m "your message"
git push
```

GitHub Pages rebuilds automatically after a push to `main`, usually within a minute.
