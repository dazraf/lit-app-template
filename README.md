# Lit App Template

A web application template using [Typescript](https://www.typescriptlang.org/) and [Lit](https://lit.dev). Nothing fancy.

# Project Setup

Set a variable with your project name.

```bash
PROJECT_NAME="your-project-name"
```

Run this script:

```bash
git clone https://github.com/dazraf/lit-app-template "${PROJECT_NAME}"
cd "${PROJECT_NAME}"
rm -rf .git && git init && git add . && git commit -m "project initialization"
npm i
```

# Project Scripts

* `npm run build` - build the application 
* `npm start` - start the app with a webserver. Rebuilds when there is a change in the source.
