# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static portfolio website for Meral Karagül, served via Nginx in Docker. No build step — files are served directly. Includes a Canvas-based space shooter game (`spaceboi-game/game.html`).

## Local Development

Run the site locally with Docker:

```powershell
docker-compose up --build
```

Access at `http://localhost:80`. The container name is `portfolio-meral`.

To rebuild after changes:
```powershell
docker-compose down && docker-compose up --build
```

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`). A self-hosted runner pulls the latest code, tears down the existing container, and rebuilds it.

## CSS / Styling

Stylesheets live in `assets/sass/` (SCSS source) and compile to `assets/css/main.css`. The SCSS is pre-compiled — there is no automated build step, so edit `assets/css/main.css` directly if you need CSS changes, OR recompile manually with a Sass compiler if you edit the SCSS sources.

Responsive breakpoints are defined in `assets/sass/libs/_breakpoints.scss`: xsmall (480px), small (736px), medium (980px), large (1280px), xlarge (1680px), xxlarge (1920px).

## Multilingual Support

All translatable content is managed in `assets/js/main.js` in the `translations` object (top of file), with keys for `de`, `en`, and `tr`. The `switchLanguage(lang)` function updates the DOM. To add or change copy in any language, edit only the `translations` object — do not hardcode text in `index.html` for translatable elements.

## Architecture Notes

- **`index.html`** — single-page layout with anchor-based navigation (`#intro`, `#one`, `#two`, `#work`, `#spaceboi`, `#contact`, `#footer`).
- **`assets/js/main.js`** — two responsibilities: (1) the translation system, (2) the Big Picture template framework (scroll animations, gallery lightbox via poptrox, responsive breakpoint detection).
- **`spaceboi-game/game.html`** — self-contained Canvas game (1280×720). All game logic is inline JavaScript in that file. Assets are in `spaceboi-game/{images,fonts,music,sounds}/`.
- **Contact form** — handled by Formspree (no backend required).
- **No tests** exist in this project.

## Git Commits

Never add `Co-Authored-By` lines or any mention of Claude/AI in commit messages. All commits must appear as the user's own work.
