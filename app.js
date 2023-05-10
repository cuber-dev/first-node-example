 
// npm - global command, comes with node
const lodash = require('lodash')

 // give me the git commands to puch changes
 // git push - push to remote repository
 // git pull - pull from remote repository
 // git status - shows the status of the repository
 // git add - add file to the staging area
 // git commit - commit the files in the staging area
 // git branch - create a new branch
 // git checkout - checkout the branch
 // git merge - merges the branch into the current branch
 // git remote - add remote repository
 // git branch -d - delete the branch
 // git log - shows the commit history
 // git reset - resets the commit to the specified version
 // git checkout -b - create a new branch and switch to it
 // git checkout master - switch to master branch
 // git checkout -b feature/new-feature - create a new branch and switch to it
 // git checkout -b bugfix/new-bug - create a new branch and switch to it
 // git checkout -b hotfix/new-hotfix - create a new branch and switch to it
 // git checkout -b release/new-release - create a new branch and switch to it
 // git checkout -b support/new-support - create a new branch and switch to it
const items = [1,[2,[3,[4]]]]
const newItems = lodash.flattenDeep(items)
console.log(newItems)
console.log("Hello world! ") 