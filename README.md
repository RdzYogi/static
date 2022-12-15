# Boilerplate for a static page with webpack with that can be deployed on gh-pages

# How to Use
- gh repo clone https://github.com/RdzYogi/static.git YOUR_PROJECT_NAME
- cd YOUR_PROJECT_NAME
- rm -rf .git
- git init
- gh repo create --public --source=.
- In the package.json file change line 7 to 
` "url": "git+YOUR_REPOSITORY.git"`
- git add .
- git commit -m "Your commit here"
- git push origin master


#
Run in the terminal
`npm run deploy`
To generate a branch called gh-pages
#
- Switch to it and you will see on the right Enviroments(it usually takes a few minutes)
- Click on the github-pages
- On the new page clicking view deployment will take you to the url of your page
