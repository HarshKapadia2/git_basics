# git_basics
A repo for the the basics of Git and GitHub!

This repo will always be a work in progress, so do make PRs to add your knowledge to it and correct any mistakes that might've been made!

**Disclaimer:** I have used a lot of resources from the internet to learn and then compile this repo and have tried linking all the resources used (either as hyperlinks and at the bottom of the file). Do let me know if I've missed linking any resource that I have used and I will gladly add it! Contact me at `harshgkapadia@gmail.com` or on Twitter `@harshgkapadia`. You can also make an issue!

## VCS
- In computer software engineering, revision control is any kind of practice that tracks and provides control over changes to source code. 
- Software developers use revision control software to maintain documentation and configuration files as well as source code. 
- As teams design, develop and deploy software, it is common for multiple versions of the same software to be deployed in different sites and for the software's developers to be working simultaneously on updates. 
- Bugs or features of the software are often only present in certain versions (because of the fixing of some problems and the introduction of others as the program develops). Therefore, for the purposes of locating and fixing bugs, it is vitally important to be able to retrieve and run different versions of the software to determine in which version(s) the problem occurs. 
- It may also be necessary to develop two versions of the software concurrently: for instance, where one version has bugs fixed, but no new features (branch), while the other version is where new features are worked on (trunk).
 - [Types of VCS](https://blog.eduonix.com/software-development/learn-three-types-version-control-systems/)
   - DJ workshop .pdf has a nice diagram
   - Local VCS (LVCS)
      - Local version control system maintains track of files within the local system. This approach is very common and simple. This type is also error prone which means the chances of accidentally writing to the wrong file is higher.
   - Centralized VCS (CVCS)
      - In this approach, all the changes in the files are tracked under the centralized server. The centralized server includes all the information of versioned files, and list of clients that check out files from that central place.
      - Eg: Tortoise SVN
   - Distributed VCS (DVCS)
      - Distributed version control systems come into picture to overcome the drawback of centralized version control system. 
      - Clients completely clone the repository including its full history. If any server dies, any of the client repositories can be copied on to the server which help restore the server. Every clone is considered as a full backup of all the data.
      - Eg: Git

## Git
- Git is a distributed version control system (DVCS) and has an emphasis on speed and performance. 
- It is supported by all operating systems. 
- Git is open source software distributed under the terms of the GNU (General Public License).
- The official website is https://git-scm.com/

## Git-Bash
- It is a shell, ie, a CLI to use git
- The official website is https://git-scm.com/
- Repos (Part 1)
   - Git stores information in a data structure called a repository.
   - The Git repository is stored in the same directory as the project itself, in a subdirectory called .git.
   - Apart from storing files, repositories also maintain the history.
   - Local repo
      - What makes git so awesome is that it is a DVCS. Your local repository has exactly the same features and functionality as any other git repository. 
      - So a git repo on a local machine (eg: your laptop) is the same as a git repo on GitHub (granted GitHub adds additional features, but at its core you're dealing with git repos) which is the same as your coworker's local repo.
      - The Local Repository is everything in your '.git' directory. Mainly what you will see in your Local Repository are all of your checkpoints or commits. It is the area that saves everything (so don’t delete it).
      - A local repo does NOT need to have a remote repo.
      - `touch`
         - To create a file in the directory to which the bash is pointing.
         - `touch <file_name.ext>`
         - Eg: `touch README.md`
   - Remote repo
      - Remote repository is the repo on the server.
      - So while most people treat a particular repo as the central repo (the one on GitHub), that's a process choice, not a git requirement.
      - `git remote`
         - Lists the remote repo when you are in a local git repo in the CLI
         - To add a remote repo to a local repo
            - Go to GitHub and create a repo without a license, README.md or .gitignore.
            - In the bash, type `git remote add origin <link_to_repo>.git`
            - Eg: `git remote add origin https://github.com/HarshKapadia2/git_basics.git`
            - Do add a license, README.md and .gitignore (more on all 3 later).
         - To remove origin (remote repo)
            - `git remote rm origin`

## Basic git commands
- `git config`
   - `git config --global user.name '<name>'`
   - `git config --global user.email '<e-mail_id>'`
   - `git config --list`

- `git init`
   - To initialize a local git repo in the location to which the bash is pointing.
   - A hidden folder '.git' is created.
   
![Picture from: https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c](https://miro.medium.com/max/1273/1*E4povWZ5H-K3OaguFQJ0IQ.png)

- `git pull`
   - Pulls the latest code from the remote repo.
   - `git pull origin <branch_name>`
   - Eg: `git pull origin master`
   - [Difference between `git pull` and `git fetch`](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull)
      - In simple terms, `git pull` does a `git fetch` followed by a `git merge`.
      - `git pull` automatically merges commits without letting you review them first. If you don’t closely manage your branches, you may run into frequent conflicts.

- `git fetch`
   - `git fetch origin`
   - When you `git fetch`, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repository. However, it does not merge them with your current branch. 
   - This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files. 
   - To integrate the commits into your master branch, you use `git merge`.

- `git clone`
   - Clone a remote repo into the current folder (to which the git CLI is pointing).
   - A new folder will be created with the name of the repo.
   - `git clone <link_to_repo>.git`
   - Eg: `git clone https://github.com/HarshKapadia2/git_basics.git`
   
![Picture depicting git add and git commit concepts with staging area + local and remote repo](https://greenido.files.wordpress.com/2013/07/git-local-remote.png?w=696&h=570)

- `git add`
   - `git add <file_name.ext>`
      - Adds <file_name.ext> to the staging area.
   - `git add *.ext`
      - All files with '.ext' extension will be added to the staging area (except files in .gitignore).
   - `git add .`
      - All untracked and modified files will be sent to staging area (except files in .gitignore).
   - `git add -u`
      - Stages modified and deleted files, without including new files.
   - `git rm --cached <file_name.ext>` (use `""` if file name has spaces in between)
      - To unstage file (ie, remove file from staging area)
   - .gitignore
      - .gitignore is a file which tells git which files (or patterns) in the directory it should ignore. 
      - It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.
   - untracked
      - All files not in .gitignore and that have never been added to the repo.
   - added
      - All files not in .gitignore and that have been added to the repo.
      - The files are in their latest version (ie, they have not been modified since they were last added).
   - modified
      - All files not in .gitignore, that have been added to the repo and have been modified since.
      - The files are NOT in their latest version (ie, they have been modified since they were last added).
   - [Staging (Staging Area / Index)](https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c)
      - It notes the added files in the working directory.
      - To stage a file is simply to prepare it finely for a commit. 
      - Git, with its index allows you to commit only certain parts of the changes you've done since the last commit.
      - If you modified a staged file by mistake, you can revert to the staged version of the file using `git checkout <file_name.ext>`
   - [Working tree](https://medium.com/mindorks/what-is-git-commit-push-pull-log-aliases-fetch-config-clone-56bc52a3601c)
      - It notes the untracked files in the working directory.
      - Any changes to files will be marked and seen in the Working Tree.
      - Here if you make changes and do not explicitly save them to git, you will lose the changes made to your files.
      - If you make changes to files in your working tree git will recognize that are modified, but until you tell git “Hey pay attention to these files,” it won’t save anything that goes on in them.

- `git status`
   - Used to display the current status of the working directory.
   - This command will show you two things: 
      - The files in your Working Tree (untracked and modified files)
      - The files in your Staging Area (added files)

![Picture showing working of git commit](https://miro.medium.com/max/803/1*EeAyiw_zUGDWZjTCe9z6ag.jpeg)

- `git commit`
   - A commit is simply a checkpoint telling git to track all changes that have occurred up to this point using our last commit as a comparison.
   - **Always pull before committing/pushing.**
   - Commit _related_ changes.
   - Commit changes frequently.
   - _Don't_ commit half-done work.
   - `git commit` will launch a text editor prompting you for a commit message. After you’ve entered a message, save the file and close the editor using `:wq` or just save and exit the editor to create the actual commit.
   - To avoid this, you can directly give the commit message using`git commit -m "<commit_msg>"`
   - Commit message
      - Use the imperative, present tense ('change', not 'changed' or 'changes') to be consistent with generated messages from commands like `git merge`. 
      - Eg: `git commit -m "Update README.md"`
   - Partially commiting staged changes
      - `git commit -m "Add only_this_file.ext from all staged files" only_this_file.ext`
   - `git ls-tree --full-tree -r HEAD`
      - This command shows all files within your git repo that it’s tracking.
   - To see more information about a specific commit use `git show <commit_SHA1>`
      - Eg: `git show d8ca511a`
      - SHA = Secure Hashing Algo. A 40 digit hexadecimal number.
      - Git gives a unique SHA1 to every commit.
      - Use `git log` to get the SHA1 of the required commit.
      - All 40 characters are NOT needed for this command. The first 7 to 8 characters of the SHA1 will do.
   - To view the contents of committed or staged files, use `git show :<file_name.ext>`
   - Amending a commit
      - Refer to the 'Common mistakes and how to correct them' section below.

- `git stash`
   - Saving changes temporarily.
   - [Commands and explanation](https://www.git-tower.com/learn/git/ebook/en/command-line/branching-merging/stashing)

- `git log`
   - A `git log` is a running record of commits.
   - Implicitly means `git log HEAD`
   - It shows all the commits reachable from the current HEAD (where the next commit will attach).
   - `git log --oneline` displays the first 7 characters of the SHA1 and the commit msg.
   - `git log --stat` displays the files and no. of lines added or removed, in each commit.
   - `git log --patch` or `git log -p -<no_of_commits_to_be_displayed>` gives details of files changed, specific changes and location of changes in the file.
   - `git log <commit_SHA1>` will display the details of that commit. (The first 7 to 8 characters of the SHA1 will do.)
   - `git log --graph` will display commits as a graph. To make it look better, use the `--oneline` or/and `--decorate` flags.
      - Eg: `git log --graph --oneline --decorate`
   - `git log <branch_name>` will display the commit log of that branch.

- `git push`
   - xyz

- `git merge`
   - xyz

- `git revert`
   - xyz

- `git reset`
   - xyz
   - Option 1: 
      - xyz
   - Option 2: 
      - xyz
   - Option 3:
      - xyz

- `git revert`
   - xyz

- `git remote`
   - xyz

- `git rebase`
   - xyz
   - Difference between merge and rebase
      - xyz
      
- `git help`
   - Alternative `git help <command>`

## Branches
- xyz
- `git checkout`
   - xyz

## Common mistakes and how to correct them
- xyz

## Conflict handling ([CLI Version](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts))
- xyz
- `git diff`
   - This command shows the code differences between a file in the Staging Area and the edits made to that file that currently exist in the Working Tree.
   - Use `git diff <file_name.ext>` to view the differences of just one file.
   - To see the changes in the Staging Area use `git diff --staged`
   - `git status` and `git diff` should be used frequently as they give information about the current working state and what git is aware of. They allow one to see what changes have occurred since their last checkpoint and are what one can use to guide themselves to atomic commits.

## Git CLIs vs GUIs
- CLI pros
   - xyz
- CLI cons
   - xyz

- GUI pros
   - xyz
- GUI cons
   - xyz

## GitHub basics
- [Repos](https://www.sbf5.com/~cduan/technical/git/git-1.shtml) (Part 2)
   - In version control systems, repositories are accessed over a network which acts like a server and version control tool as a   client. On establishing successful connection, clients store or retrieve their changes.
   - Private and public repos
   - [Licenses](https://choosealicense.com/)
   - README.md
      - xyz
      - md = [Markdown](https://www.youtube.com/watch?v=HUBNt18RFbo)
- **GitHub is not git.**
   - Git is a revision control system, a tool to manage your source code history.
   - GitHub is a hosting service for Git repositories.
   - So they are not the same thing: Git is the tool, GitHub is the service for projects that use Git.
- [Forking repos](https://www.toolsqa.com/git/git-fork/)
   - A fork is a copy of a repository. Forking a repository allows to freely experiment with changes without affecting the original project.
   - When a user forks a repository, all the files in the repository are automatically copied to the user’s account on GitHub and it feels like the user’s own repository. The user is then free to use this repository either for their purpose or experiment with changes in the code. Through git forking, the users can develop their own modifications to the code that belongs to someone else.
   - To make changes to the original project, make a PR.
- PRs
   - A pull request is a method of submitting contributions to an open development project.
   - A pull request occurs when a developer asks for changes committed to an external repository to be considered for inclusion in a project’s main repository.
   - It is important to note that 'pull requests' are a workflow method, and are not a feature of the version control system itself.
- [Issues](https://guides.github.com/features/issues/)
   - Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
   - Most software projects have a bug tracker of some kind. GitHub’s tracker is called Issues, and has its own section in every repository.
   - Anyone can raise issues.
- Starring repos
- Conflict Handling ([GUI Version](https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/merge-conflicts))
   - xyz
- GitHub Desktop
   - GUI (like Atlassian Bitbucket, Sourcetree, etc.)
   - 
- [GitHub Student Developer's Pack](https://education.github.com/pack)
   - Free and gives TONS for features.
   - Upload valid college ID and e-mail (personal e-mail if you don't have a college-provided e-mail ID)
   - Will have to be renewed.

## Open Source 
- OSS - Open Source Software
- [Why and how to contribute to Open Source](https://rubygarage.org/blog/how-contribute-to-open-source-projects)
- [GSoC](https://summerofcode.withgoogle.com/) & [GSSoC](https://www.gssoc.tech/)
- [Hacktoberfest](https://hacktoberfest.digitalocean.com/)

## Communities & meetups
- [Reasons why you should attend tech meetups](https://interpropeople.com/7-reasons-go-tech-meetups/)
- [Meetup app](https://www.meetup.com/apps/)

### Misc resources for Git
- [Getting started with Git and GitHub](https://www.youtube.com/watch?v=SWYqp7iY_Tc&feature=youtu.be)
- [Structure of Git](https://www.youtube.com/watch?v=yI0BtEzdGtw)
- https://www.git-tower.com/learn
- http://rogerdudler.github.io/git-guide/
- http://git-school.github.io/visualizing-git/

### Misc resources used in this repo (that weren't linkable above)
- https://medium.com/@lucasmaurer/git-gud-the-working-tree-staging-area-and-local-repo-a1f0f4822018

# BYE BYE! ( : 
**Star this repo if you liked it and don't forget to share it with your friends/coworkers!**

![](https://miro.medium.com/max/1238/1*_UUaozFPd2qHfCFjlhIgGA.png)
