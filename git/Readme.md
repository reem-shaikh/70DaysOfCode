## use case of Git :
- Maintaining history of the project
- for contributing to OS projects, alot of people pool into via VCS like GITHUB. It helps to keep track of which person made which change in the project 

> Github is a platform which alows us to host our git repositories. Git is a version control system. 

## Git is a Platform that allow us to host projects online to git repositories
Just like these Platforms (gmail / outlook/ yahoo mail) providing email services, git version control service is provided by platforms like gitbucker, gitlab, github 

> Terminal allows us to manipulate the file structure using commands, we can do this directyly using the GUI. 

### Terminal commands 
> CRUD OPERATIONS 
![](r3.png)
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
#pro tip: to exit from the terminal enter esc then :wq
```
used to make changes in this file 
- cat names.txt 
displays all content in the text file 
- rm -rf names.txt
removing this file 

## GIT COMMANDS
![](r1.png)

### `git init`
> We need to maintain history of project using git 
history is stored in git repository called `.git`. To acheive the history we'll need to initialize a repository using `git init` 
![](3.PNG)

> to add files to staging use `git add .` -> to save it to the git history use `git commit -m 'added'`
```bash
guests photo not taken -> go to stage -> take pic -> save in photos
unstaging -> staging  -> snapshot -> save in git history 
#untracked files are in the unstaging phase 
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
we didnt add the surname.txt file to the staging area using `git add .` instead we left the file as it is after creating it, so when we did run the git status to check its current status, it shows surname.txt is an untracked file (i.e unstaged file). So using `git stash` we pushed this unstaged file to the unstaging phase. 
![](88.PNG)
```bash
guests photo not taken -> go to stage -> take pic -> save in photos
unstaging -> staging  -> snapshot -> save in git history 
#in unstaging phase files wont be tracked
#untracked files are in the unstaged files, which are not in unstaging phase by default, to put a file in unstaging phase and to tell git to not push it to the staging area, we use git stash 

#Note: untracked files are detected and told to be added to the staging phase by default, if you dont add using git add . it will throw an error, so if you want to keep the untracked files in the unstaging phase and tell git not to track it use git stash
```

### `git stash pop`
> put all the unstaged files to the staging phase 
![](9.PNG)

### `git stash clear`
> to delete the unstaged files we added to the unstaging phase 

### Why do we need branches?
everytime we commit, its linked in a branch structure. Everytime a new feature is added commit in a new branch, never commit to the main branch, since, your working on an OS project which has alot of contributers to the code and alot of users.
![](987.PNG)
```bash
1st commit - added 4 files 
2nd commit - added rollno.txt 
3rd commit - modified rollno.txt 
```
### Creating a new project and pushing to git 
Attach the git URL to the remote project 
1. create a new repo on git and create a new repo on local and navigate to the local repo path through gitbash and type `git init`
2. link repository url to the remote folder - `git remote add origin https://d2uidhio23.git`
3. show all urls attached to the origin - `git remote -v `
4. push changes to the url (origin) and the branch (master) - `git push origin master `
![](12.PNG)
![](122.PNG)

## Creating Branches
![](r2.png)

### How to switch branches and commit into it?
![](2.PNG)
> `git branch feature` 
create a branch named feature 

>` git checkout feature `
Head is on feature branch now, all the new commits you make from now will be ppointed from the feature branch.

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
![](r4.png)
In case, you want to make changes to somebody's code you can fork it then clone the forked repo from your github.`git clone https://urlofyourforkedrepofromyourgitaccount`

> From where you forked the project from is known as **upstream url**. Here's how you add the upstream url `git remote add upstream https://giturlyouforkeditfrom`
![](543.PNG)

> were pushing all the cloned code to the branch `reem`
![](211.PNG)
![](212.PNG)
![](1234.PNG)

### Pull Request 
> Request for the change you made on an OS contribution, to be merged to the main branch
- To acheive this we can fork their repo, make changes and click on pull request 
![](789.PNG)

> Note: For every new feature, create a new pull request for which you need to create a new branch everytime. Also only one branch can be associated with one pull request. 

#### Why do we need to open new pull requests for every feature?
> its for better management of the code, if we have one pull request for one feature, as compared to if we had many pull requests for many features.

### What does this branch is 1 commit behind mean?
So "behind" means the other branch we created has commits the main branch doesn't, so its implying that the branch your currently on (i.e the main branch) is behind, and "ahead" means main branch has commits the other branch doesn't. To fix this we'll need to sync the main branch with the created branch, which can be acheived by clicking on `fetch upstream`

### Merge all your branches to main branch
Fetch all the commits from upstream to our local and merge the upstream main branch with our forked branch
> Third Approach
In your forked repo, go to the main branch, you'll see that your main branch is behind, click on `sync fork` option. This will merge all the branches to the main branch.
![](34.PNG)

### Merge alot of commits in one 
squash / merge commit in single commit using `rebase` command

### Note: Were going through all the basics covered until now 
1. Create a remote repo and upload the content on the git repository
![](s1.PNG)
2. We created a clone and within the clone we linked the upstream URL
![](s2.PNG)
![](s3.PNG)
3. We edited the changes in the Readme.md and we hosted it in the reem branch 
![](s4.PNG)
4. We created a branch temp and we added a bunch of files (1,2,3,4) with seperate committed message 
![](s5.PNG)
![](s6.PNG)
5. Merge the 3 and 4 files into the 2nd file 
![](s7.PNG)
```bash
s means squash 
pick means you dont want to commit this one, you want to commit all the s commits into the pick 

#you can add a committed message by entering esc + : + x and enter the command
```
### Merge conflicts 
git gets confused which commit to take, when the same line in the same file is changed. This conflict can get resolved manually. 



















