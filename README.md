# Script compiler

Simple Webpack driven project that enables ES6 features when creating many separate scripts.

## How to use

Create new folder for each script inside `scripts` folder. Add your logic in that folder. Use file name `script.js`.

Add new entry to `package.json`'s `scripts` section with folder name in project environmental variable. You can also name the npm script with the same name.

`"{foldername}": "webpack --env.project={foldername}`

Compile your script with `npm run {foldername}` and compiled and uglified script can be found inside `build` folder.

See `script1` and `script2` as an example.
