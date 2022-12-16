# About
### This boilerplate uses webpack to pack your Css and Javascript into one file, and deploy on github pages as a static page. 

# Getting started:
- `gh repo clone https://github.com/RdzYogi/static.git YOUR_PROJECT_NAME`
- `cd YOUR_PROJECT_NAME`
- `rm -rf .git`
- `git init`
- `gh repo create --public --source=.` # Here you can change public to private
- In the package.json file change 
line 2 to `"name": "your_repository_name",`
line 7 to `"url": "git+https://github.com/GITHUB_USERNAME/REPOSITORY_NAME.git",`
- `git add .`
- `git commit -m "Your commit here"`
- `git push origin master`


#
Run in the terminal
`npm run deploy`
to generate a branch called gh-pages.
### !!Do not modify the gh-pages branch. It is generated automaticaly!!
#
- Switch to gh-pages branch on Github and on the right you will see Enviroments (it usually takes a few minutes to update)
- Click on the github-pages under Enviroments
- On the new page clicking view deployment will take you to the url of your page

# Using it
- Add your own html by editing the `index.html` in the `dist/` folder
- For Css and JavaScript you can edit the files in the `src/` folder 
- In development you can use `npn run serve` to start a local server at http://localhost:9000/
- Once you are done with your changes run `npm run deploy` to update the gh-pages branch <strong>(can take up to 10 minutes!)</strong>
### Updating gh-pages will do so from your <ins>local repository</ins> and not Github. 
### Remember to push your changes to Github!!
# Known issues
- On some machines `gh-pages` command cannot find the correct location of git and will throw a error<br /> 
Solution: working on it
