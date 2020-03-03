# git_basics
A repo for the the basics of Git and GitHub!

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
      - Example: Tortoise SVN
   - Distributed VCS (DVCS)
      - Distributed version control systems come into picture to overcome the drawback of centralized version control system. 
      - The clients completely clone the repository including its full history. If any server dies, any of the client repositories can be copied on to the server which help restore the server. Every clone is considered as a full backup of all the data.
      - Example: Git

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
      - xyz
   - Remote repo
      - xyz
      - `git remote`
         - Lists the remote repo when you are in a local git repo in the CLI
	 - To add a remote repo to a local repo
	    - Go to GitHub and create a repo without a license, README.md or .gitignore.
	    - In the bash, use cmd `git remote add origin <link_to_repo>.git`
	    - Eg: `git remote add origin https://github.com/HarshKapadia2/git_basics.git`
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

- `git pull`
   - Pull the latest code from the remote repo.
   - `git pull origin <branch_name>`
   - Eg: `git pull origin master`
   - In simple terms, `git pull` does a `git fetch` followed by a `git merge`.
   - `git pull` automatically merges commits without letting you review them first. If you don’t closely manage your branches, you may run into frequent conflicts.

- `git fetch`
   - **SYNTAX?**
   - When you `git fetch`, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repository. However, it does not merge them with your current branch. 
   - This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files. 
   - To integrate the commits into your master branch, you use `git merge`.

- `git clone`
   - Clone a remote repo into the current folder (to which the git CLI is pointing).
   - A new folder will be created with the name of the repo.
   - `git clone <link_to_repo>.git`
   - Eg: `git clone https://github.com/HarshKapadia2/git_basics.git`
   
![](https://greenido.files.wordpress.com/2013/07/git-local-remote.png?w=696&h=570)

- `git add`
   - xyz
   - .gitignore
      - xyz
   - untracked
      - xyz
   - added
      - xyz
   - modified
      - xyz
- Staging
   - xyz
   - Need of staging
      - xyz

- `git status`
   - xyz

- `git commit`
   - **(TRY THIS)** Always pull before committing.
   - Commit _related_ changes.
   - Commit changes frequently.
   - _Don't_ commit half-done work.
   - `git commit -m "<commit_msg>"`
   - Commit message
      - Use the imperative, present tense ('change', not 'changed' or 'changes') to be consistent with generated messages from commands like `git merge`. 
      - Eg: `git commit -m "Update README.md"`

- `git log`
   - xyz

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

## Branches
- xyz
- `git checkout`
   - xyz

## Common mistakes and how to correct them
- xyz

## Conflict handling (CLI)
- xyz
- `git diff`
   - xyz

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
   - Making a Repo
   - Demo
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
- Conflict Handling (GUI)
   - xyz
- GitHub Desktop
   - GUI (like Atlassian Bitbucket, Sourcetree, etc.)
   - 

## Open Source
- 
- [GSoC](https://summerofcode.withgoogle.com/) & [GSSoC](https://www.gssoc.tech/)
- [Hacktoberfest](https://hacktoberfest.digitalocean.com/)

## Communities & meetups
- 
- [Meetup app](https://www.meetup.com/apps/)
