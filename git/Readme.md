## use case of Git :
- Maintaining history of the project
- for contributing to OS projects, alot of people pool into via VCS like GIT/ GITHUB. It helps to keep track of which person made which change in the project 

## Git is a Platform that allow us to host projects online to git repositories
Just like these Platforms (gmail / outlook/ yahoo mail) providing email services, git service is provided by platforms like gitbucker, gitlab, github 

> Terminal allows us to manipulate the file structure using commands, we can do this directyly using the GUI. 

### Terminal commands 
- ls 
list all the repositories/ folders 
- mkdir project 
create folder 
- cd project 
get inside the project 
- touch name.txt
create this file within the project folder 
- vi names.txt 
```bash
reem shaikh
kunal kushwaha
#pro tip: to exit from the terminal enter :wq
```
used to make changes in this file 
- cat names.txt 
displays all content in the text file 
- rm -rf names.txt
removing this file 

### `git init`
> We need to maintain history of project using git 
history is stored in git repository called `.git`. To acheive the history we'll need to initialize a repository using `git init` 
![](3.PNG)

> to add files to staging use `git add .` -> to save it to the git history use `git commit -m 'added'`
```bash
guests photo not taken -> go to stage -> take pic -> save in photos
untracked files        -> staging     -> snapshot -> save in git history 
```
![](4.PNG)

### `git status `
To see all the changes that were made in the folder 

### `git add names.txt` or `git add .`
> Place the untracked files to git 
add everything in current project directory to staging area 

### `git commit -m 'names.txt file added'`
> Add a message to keep a log of the added commit 

### `git restore --staged names.txt`
> remove a file from the staging area 
Note that: First we added the names.txt file to the staging area by using `git add .` and then we removed it from the staging area using `git restore --staged names.txt`
![](5.PNG)

### `git log`
> see all the history of the project 
![](6.PNG)

### `git reset commit ID`
> to go back in the commit history, we can unstage the commits, by copying the commit ID to which you want to go to. and it will unstage all the commits after it. 
![](7.PNG)
![](8.PNG)

### `git stash`
> we put these unstaged files in the unstaging phase 

### `git stash pop`
> put all the unstaged files to the staging phase 

### `git stash clear`
> to delete the unstaged files we added to the unstaging phase 

### Why do we need branches?
everytime we commit, its linked in a branch structure. Everytime a new feature is added commit in a new branch, never commit to the main branch, since, your working on an OS project which has alot of contributers to the code and alot of users.

### Creating a new project and pushing to git 
1. create a new repo on git 
2. link repository url to the remote folder - `git remote add origin https://d2uidhio23.git`
3. show all urls attached to the origin - `git remote -v `
4. push changes to the url (origin) and the branch (master) - `git push origin master `

### How to switch branches and commit into it?
![](2.PNG)
> `git branch feature` 
create a branch named feature 

>` git checkout feature `
commit to the feature branch. Head is on feature branch.

> `git checkout main`
seperate both these branches feature and main. head is on main branch.

> `git merge feature `
merge the feature to the main code (master branch)

> `git push origin master `
push changes to the url (origin) and the branch (master) 
```bash
#In order to force push 
`git push -f origin master `
```
### Clone somebody's project 
In case, you want to make changes to somebody's code you can clone it.`git clone https://feiofeioefoeojo`
or you can fork it

> From where you forked the project from is know an **upstream url**. Here's how you can fork a project via terminal `git remote add upstream https://fehhfweiooe`

### Pull Request 
> Request for the change you made on an OS contribution, to be merged to the main branch
- To acheive this we can fork their repo, make changes and click on pull request 

> Note: For every new feature, create a new pull request which creates a new branch. Also only one branch can be associated with one pull request. 

#### Why do we need to open new pull requests for every feature?
> its for better management of the code, if we have one pull request for one feature, as compared to if we had many pull requests for many features.

### How to merge soemone else's pull requests with our main branch 
> Pull the forked code from the branch to the main branch
`git pull upstream main `
> update changes on git 
`git push origin main`

### Merge alot of commits in one 
`git branch temp`
`git checkout temp`

> squash / merge commit in single commit using `rebase` command
`git rebase -i copy`

### Merge conflicts 
git gets confused which commit to take, when the same line in the same file is changed. This conflict can get resolved manually. 



















