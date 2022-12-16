# !!NOT WORKING!!
# About
### This boilerplate uses webpack to pack your code into simple files, and then deploy them on github pages as a static page. 

# Getting started:
- gh repo clone https://github.com/RdzYogi/static.git YOUR_PROJECT_NAME
- cd YOUR_PROJECT_NAME
- rm -rf .git
- git init
- gh repo create --public --source=.
- In the package.json file change 
 line 7 to `"url": "git+YOUR_REPOSITORY.git",`
 and line 2 to `"name": "your_repository_name",`
- git add .
- git commit -m "Your commit here"
- git push origin master


#
Run in the terminal
`npm run deploy`
to generate a branch called gh-pages.
### !!Do not modify the gh-pages branch. It is generated automaticaly!!
#
- Switch to it and you will see on the right Enviroments(it usually takes a few minutes)
- Click on the github-pages
- On the new page clicking view deployment will take you to the url of your page

# Using it
- In development you can use `webpack serve` to start a local server at http://localhost:9000/
- Once you are done with your changes run `npm run deploy` to update the gh-pages branch
### Updating gh-pages will do so from your <ins>local repository</ins> and not Github. 
#### Remember to push your changes to Github!!
