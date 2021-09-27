Run command: 'npm run build' to create a dist folder.
Then run command: 'npm run start' to start server at port 8080.

This project also uses babel to transpile all .ts files to .js into folder named 'out'.
For this run command: 'npm run bbl'

Notes on how to setup typescript environment

# 1)Open terminal in the root folder of project

# 2)npm init -y (this creates package.json)

# 3)npm install -D webpack webpack-cli webpack-dev-server typescript ts-loader

# 4)create a webpack.config.js file (look at the file in root directory)

# 5)create a tsconfig.json file(lood at the respective file in root)

# 6)Inside package.json - under scripts add

scripts:{
"start": "webpack-dev-server --mode development",
"build": "webpack --mode development",
}

# 7)Also install HTMLWebpackPlugin and CleanWebpackPlugin as :npm install html-webpack-plugin clean-webpack-plugin --save-dev

# 8)Make changes to webpack.config.js file to include these plugins

# 9)run cmd: npm run build ( this create build folder dist)

# 10) run cmd: npm run start ( to start server on port 8080)

Set up babel to transpile

# 1) npm install -D @babel/core @babel/cli @babel/preset-env @babel/preset-typescript

# 2) In package.json write under scripts as follows

"bbl": "babel src --out-dir dist --extensions .ts,.tsx"
(this transpiles all ts files under src folder to js files and put them in dist folder)
