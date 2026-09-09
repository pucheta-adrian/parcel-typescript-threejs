# vite-typescript-threejs
Example App using Three.js and Typescript bundled with Vite 🚀🔥.

### Highlights
- ⚡️  Super fast start
- 🔥  Hot module replacement.
- 📝  Typescript.

### Quick start
**Node version ^20.19 || >= 22.12 (recommended 22 LTS) and NPM >= 10**

```bash
# clone the repo.
# --depth 1 removes all but one .git commit history (Optional).
git clone --depth 1 https://github.com/pucheta-adrian/vite-typescript-threejs.git

# go to the repo
cd vite-typescript-threejs

# install the dependencies via npm
npm install

# start the server in dev mode with HMR
npm run start
```
go to [http://localhost:1234](http://localhost:1234) in your browser. Done.

### npm scripts

* `npm run start` - runs the compiler and a server at the same time in dev mode with HMR (Hot Module Replacement) 🔥.
* `npm run build` - runs the compiler once and generates a production build in `dist/`.
* `npm run preview` - serves the production build locally to check it before deploying.
* `npm run typecheck` - runs the TypeScript type checker without emitting files.