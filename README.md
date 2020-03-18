# git_basics
A repo for the the basics of Git and GitHub!

This repo will always be a work in progress, so do make PRs to add your knowledge to it and correct any mistakes that might've been made!
(TBC = To be continued)

**Disclaimer:** I have used a lot of resources from the internet to learn and then compile this repo and have tried linking all the resources used (either as hyperlinks and at the bottom of the file). Do let me know if I've missed linking any resource that I have used and I will gladly add it! Contact me at `harshgkapadia@gmail.com` or on Twitter `@harshgkapadia`. You can also make an issue!

## Version Control System (VCS)
- In computer software engineering, revision control is any kind of practice that tracks and provides control over changes to source code. 
- Software developers use revision control software to maintain documentation and configuration files as well as source code. 
- As teams design, develop and deploy software, it is common for multiple versions of the same software to be deployed in different sites and for the software's developers to be working simultaneously on updates. 
- Bugs or features of the software are often only present in certain versions (because of the fixing of some problems and the introduction of others as the program develops). Therefore, for the purposes of locating and fixing bugs, it is vitally important to be able to retrieve and run different versions of the software to determine in which version(s) the problem occurs. 
- It may also be necessary to develop two versions of the software concurrently: for instance, where one version has bugs fixed, but no new features (branch), while the other version is where new features are worked on (trunk).
 - [Types of VCS](https://blog.eduonix.com/software-development/learn-three-types-version-control-systems/)
   - Local VCS (LVCS)
      - Local version control system maintains track of files within the local system. This approach is very common and simple. This type is also error prone which means the chances of accidentally writing to the wrong file is higher.
      ![LVCS pic](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.slidesharecdn.com%2Fopendesigndefinitionokfest-120924044126-phpapp01%2F95%2Fopen-design-definition-workshop-open-knowledge-festival-2012-31-728.jpg%3Fcb%3D1349086478&f=1&nofb=1)
   - Centralized VCS (CVCS)
      - In this approach, all the changes in the files are tracked under the centralized server. The centralized server includes all the information of versioned files, and list of clients that check out files from that central place.
      - Eg: Tortoise SVN
      ![CVCS pic](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Finvistruct.com%2Fwp-content%2Fuploads%2F2012%2F08%2Fcentralized-vc.png&f=1&nofb=1)
   - Distributed VCS (DVCS)
      - Distributed version control systems come into picture to overcome the drawback of centralized version control system. 
      - Clients completely clone the repository including its full history. If any server dies, any of the client repositories can be copied on to the server which help restore the server. Every clone is considered as a full backup of all the data.
      - Eg: Git
      ![DVCS pic](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FtRfgX.png&f=1&nofb=1)

## Git
- Git is a distributed version control system (DVCS) and has an emphasis on speed and performance. 
- It is supported by all operating systems. 
- Git is open source software distributed under the terms of the GNU (General Public License).
- The official website is https://git-scm.com/

## Git-Bash
- It is a shell, ie, a CLI to use git.
- The official website is https://git-scm.com/
- Repos (Part 1)
   - Git stores information in a data structure called a repository.
   - The Git repository is stored in the same directory as the project itself, in a subdirectory called '.git'. (Enable hidden folders to see the '.git' folder.)
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
         - `git remote -v`
            - It gives the shortname and corresponding url of the "remote" (aka the remote repo)
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
   - The `git pull` command is used to fetch and download content from a remote repository and immediately update the local repository to match the content (ie, `git fetch` followed by a `git merge`).
   - `git pull origin <branch_name>`
   - Eg: `git pull origin master`
   - [Difference between `git pull` and `git fetch`](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull)
      - In simple terms, `git pull` does a `git fetch` followed by a `git merge`.
      - `git pull` automatically merges commits without letting you review them first. If you don’t closely manage your branches, you may run into frequent conflicts.

- `git fetch`
   - `git fetch <remote_name> <branch_name>`
   - Eg: `git fetch origin master`
   - When you `git fetch`, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repository. However, it does not merge them with your current branch. 
   - This is particularly useful if you need to keep your repository up to date, but are working on something that might break if you update your files. 
   - To integrate the commits into your master branch, you use `git merge`.

- `git clone`
   - Clone/copy an entire remote repo into the current folder (to which the git CLI is pointing).
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

- [`git merge`](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
   - The `git merge` command's primary responsibility is to combine separate branches and resolve any conflicting edits.
   - Merging is Git's way of putting a forked history back together again. 
   - The `git merge` command lets you take the independent lines of development created by `git branch` and integrate them into a single branch.
   - Preparing to merge
      - You have to be in the branch (`git checkout <receiving_ranch>`) you want to merge another branch into.
      - Make sure the receiving branch and the merging branch are up-to-date with the latest remote changes.
      - Merge using `git merge <merging_branch>`
      - Eg: If you want to merge the 'feature' branch into the 'master' branch, run `git checkout master` (if you aren't in the master branch, ie, if your HEAD points to another branch) and then run `git merge feature`.
   - Merges are of mainly two types
      - Fast forward merges (usually for small and short develop-duration features)
      - Three way merges (usually for long ranging tasks and features)
      ![Pic illustrating the two types of merges](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mattluedke.com%2Fwp-content%2Fuploads%2F2015%2F10%2Ffast-forward-merge.jpg&f=1&nofb=1)
   - Managing merge conflicts (using both CLIs and GUIs) is covered later.
   - `git merge --abort`
      - Executing `git merge` with the `--abort` option/flag will exit from the merge process and return the branch to the state before the merge began.

- `git push`
   - This command is used to transfer files from the local repo to the remote repo.
   - To set up a remote repo, refer to the 'remote repo' section above.
   - `git push -u <remote_alias> <remote_branch_to_be_pushed_to>`
   ![Picture for above command](https://miro.medium.com/max/689/1*XqgTOmW3uT2_YO-z8NnRhA.jpeg)
   ![What `git push` does diagram](https://miro.medium.com/max/770/1*HJx_4MCxp0ghLWtTIjH9RQ.jpeg)
   - From the above picture, one can make out that Git will allow pushing only if the push results in a **fast-forward merge**.
   ![Fast fwd merge pic](https://confluence.atlassian.com/bitbucket/files/329977726/330172160/6/1379375305773/fastforward.png)

- `git reset`
   - TBC
   - **Just `git reset` cmd fn**
   - Option 1: (hard)
      - TBC
   - Option 2: (soft)
      - TBC
   - Option 3: (mixed)
      - TBC

- `git revert`
   - TBC

- `git remote`
   - TBC

- `git rebase`
   - TBC
   - Difference between merge and rebase
      - TBC
      
- `git help`
   - Alternative `git help <command>`

## Branches
- TBC
- `git checkout`
   - TBC
- `git merge --no-ff <branch_name>` **CHECK THIS**
   - If one wants to do a fast forward merge, but even then create a new merge commit for the symbolic merging.
   - This is useful for documenting all merges that occur in a repository.

## Common mistakes and how to correct them
- TBC
- Temp resources
   - https://ohshitgit.com/
   - https://www.youtube.com/watch?v=FdZecVxzJbk

## Conflict handling ([CLI Version](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts))
- Conflicts only affect the developer conducting the merge, the rest of the team is unaware of the conflict. Git will mark the file as being conflicted and halt the merging process. It is then the developers' responsibility to resolve the conflict.
- Git can automatically merge commits unless there are changes that conflict in both commit sequences.
- Eg: If in the [two branches that are trying to be merged](https://www.atlassian.com/git/tutorials/using-branches/git-merge), both have changes in the same part of the same file, Git won't be able to figure out which version to use.
- [There are different types of merge conflicts.](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
   - Git fails to start the merge (due to unsaved local changes, so use `git stash`, `git commit`, `git reset`, `git checkout` etc to stabilize local.)
   - Git fails the ongoing merge (Git will do its best to merge the files but will leave things for the developer to resolve manually in the conflicted files.)
- To represent the differences, visual markers used by are: `<<<<<<<`, `=======` and `>>>>>>>`.
- Generally the content before the `=======` marker is the receiving branch and the part after is the merging branch.
- Resolving a merge conflict
   - Use `git status` to identify the merge issues.
   - The most direct way to resolve a merge conflict is to edit the conflicted file. Open the file in a text editor and make the necessary changes to resolve the conflict. (Eg: Add the missing lines, delete the extra lines, etc...)
   - When the developer is ready to finish the merge, all they have to do is run `git add <file_name>` on the conflicted file(s) to tell Git that they're resolved. 
   - Then, one has to run a normal `git commit -m "<commit_msg>"` to generate the merge commit.
   - Git will see that the conflict has been resolved and creates a new merge commit to finalize the merge.
- **Note:** Merge conflicts will only occur in the event of a 3-way merge. It’s not possible to have conflicting changes in a fast-forward merge. 
- Conflicts can occur for single files as well. They have to be handled in the same way as above.
- `git diff`
   - `git diff` helps find differences between states of a repository/files.
   - This is useful in predicting and preventing merge conflicts.
   - This command shows the code differences between a file in the Staging Area and the edits made to that file that currently exist in the Working Tree.
   - Use `git diff <file_name.ext>` to view the differences of just one file.
   - To see the changes in the Staging Area use `git diff --staged`
   - `git status` and `git diff` should be used frequently as they give information about the current working state and what git is aware of. They allow one to see what changes have occurred since their last checkpoint and are what one can use to guide themselves to atomic commits.

## Git CLIs vs GUIs
- CLI pros
   - TBC
- CLI cons
   - TBC

- GUI pros
   - TBC
- GUI cons
   - TBC

- Temp resource
   - https://www.danclarke.com/git-gui-vs-cli

## GitHub basics
- [Repos](https://www.sbf5.com/~cduan/technical/git/git-1.shtml) (Part 2)
   - In version control systems, repositories are accessed over a network which acts like a server and version control tool as a   client. On establishing successful connection, clients store or retrieve their changes.
   - Private and public repos
   - [Licenses](https://choosealicense.com/)
   - README.md
      - TBC
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
   - Save a repo for future reference.
- Conflict Handling ([GUI Version](https://www.git-tower.com/learn/git/ebook/en/desktop-gui/advanced-topics/merge-conflicts))
   - xyz
- GitHub Desktop
   - GUI (like Atlassian BitBucket, SourceTree, etc.)
   - Used for collaboration among developers and during competitions like hackathons.
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

## Misc
### Misc resources for Git
- [Getting started with Git and GitHub](https://www.youtube.com/watch?v=SWYqp7iY_Tc&feature=youtu.be)
- [Structure of Git](https://www.youtube.com/watch?v=yI0BtEzdGtw)
- https://www.git-tower.com/learn
- http://rogerdudler.github.io/git-guide/
- http://git-school.github.io/visualizing-git/
- https://www.atlassian.com/git

### Misc resources used in this repo (that weren't linkable above in hyperlinks)
- https://medium.com/@lucasmaurer/git-gud-the-working-tree-staging-area-and-local-repo-a1f0f4822018

# BYE BYE! ( : 
**Star this repo if you liked it and don't forget to share it with your friends/coworkers!**

![](https://miro.medium.com/max/1238/1*_UUaozFPd2qHfCFjlhIgGA.png)
