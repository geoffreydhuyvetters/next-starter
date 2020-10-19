# Next.js starter

Just another personal starter repo.

Includes

- Prettier
- ESLint setup with Standard
- TypeScript support
- zustand
- react-query

## alias

```bash

# use it like this
# np experiment101

alias np="new_project"

function new_project {
  git clone https://github.com/geoffreydhuyvetters/next-starter "$@"
  cd "$@"
  npx json -I -f package.json -e 'this.description=""'
  npx json -I -f package.json -e 'this.name=""' # find a way to use "$@" here
  npx json -I -f package.json -e 'this.private="true"'
  npx json -I -f package.json -e 'this.license=""'
  rm -rf .git
  git init
  git add .
  git commit -m "Initial commit"
  init
  c .
  yarn
  yarn dev
}

```
