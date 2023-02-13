# NodeJS, Typescript, Webpack Coding Environment for VS Code
Frontend and backend debugging, all in one. This setup handles it all for you.

## Install NodeJS and NPM
* I will assume you can scour the internet and install these packages yourself
* Webpack can be tricky though. Even though I have a local installation of it in my project, it appears you may need a global installation of *webpack* and *webpack-cli* as well. After you install npm, here's how:
* `npm i -g webpack`
* `npm i -g webpack-cli`

## Now install your Npm Dependencies
* In VS Code terminal, make sure you are in your root folder.
* My project root was `G:\Code\nodejs_barebones`
* Because package.json is a part of your project, just type `npm i` and all dependencies should automatically install, including webpack.

## Set up your webpack location
1. Head to `.vscode/tasks.json`
2. For Windows, where it says `"command": "Set-Location \"G:\\Code\\nodejs_barebones\\public\"; webpack --config webpack.config.js"` replace with your projects location
3. Or for Mac
Just use this format `"cd /Users/username/Documents/GitHub/nodejs_barebones/public && webpack --config webpack.config.js"`

## Debugging
Make sure you select `Run All`. This command will run webpack, chrome debugger and node debugger. Now you can debug frontend and backend typescript in the same environment.

### Typescript transpiled source
After you run your application, a folder called `src_typescript_compiled` is created. These files are what run your project, and this folder can be deleted since it is auto generated.

## Backend - NodeJS
* Backend typescript files are located under src_backend

## Frontend
* Frontend typescript files are located under src_frontend
* The `public` folder contains your static files, such as *html, css and javascript*
* The `webpack.config.js` config file handles the conversion of your typescript files to frontend javascript. It looks for your entry file `run.ts` which is located in `src_frontend`