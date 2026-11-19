# how-i-like-to-write-vue-code

A Nuxt app that shows how I like to write Vue code

This file is for coding agents. `CLAUDE.md` imports it.

## Commands

Node.js and pnpm, at the version `packageManager` names in `package.json`. Run `pnpm install` first.

- `pnpm lint`: oxlint, then ESLint, then stylelint. It fixes what it can, so commit what it changes.
- `pnpm format`: formats everything with oxfmt. `pnpm format:check` only checks.
- `pnpm type-check`: type-checks everything.
- `pnpm test`: the unit tests, with Vitest.
- `pnpm build`: builds the app.

## Layout

- `app/`: the source, Nuxt's app directory
- `public/`: the files served as they are, the favicon among them

## House rules

- Never use the em dash. Use a plain dash (-) instead.
- Never edit a generated file by hand: `.copier-answers.yml`, `pnpm-lock.yaml` and anything else a tool writes. Change its source and run the tool instead.
- The shared files come from the template, [whatsaaaa/template](https://github.com/whatsaaaa/template), and `copier update` brings its changes. A change that every project should have goes to the template.
- Commits are signed. No commit or pull request carries an AI or agent attribution line.

## This project

What an agent should know about this project that the code does not say.
