# git_basics
A repo for the all the basics of git!

## VCS
- In computer software engineering, revision control is any kind of practice that tracks and provides control over changes to source code. 
- Software developers sometimes use revision control software to maintain documentation and configuration files as well as source code. 
- As teams design, develop and deploy software, it is common for multiple versions of the same software to be deployed in different sites and for the software's developers to be working simultaneously on updates. 
- Bugs or features of the software are often only present in certain versions (because of the fixing of some problems and the introduction of others as the program develops). Therefore, for the purposes of locating and fixing bugs, it is vitally important to be able to retrieve and run different versions of the software to determine in which version(s) the problem occurs. 
- It may also be necessary to develop two versions of the software concurrently: for instance, where one version has bugs fixed, but no new features (branch), while the other version is where new features are worked on (trunk).
 - [Types of VCS](https://blog.eduonix.com/software-development/learn-three-types-version-control-systems/)
   - DJ workshop .pdf has a nice diagram
   - Local VCS
      - Local version control system maintains track of files within the local system. This approach is very common and simple. This type is also error prone which means the chances of accidentally writing to the wrong file is higher.
   - Centralized VCS
      - In this approach, all the changes in the files are tracked under the centralized server. The centralized server includes all the information of versioned files, and list of clients that check out files from that central place.
			- Example: Tortoise SVN
   - Distributed VCS
      - Distributed version control systems come into picture to overcome the drawback of centralized version control system. 
			- The clients completely clone the repository including its full history. If any server dies, any of the client repositories can be copied on to the server which help restore the server. Every clone is considered as a full backup of all the data.
			- Example: Git

## Git
- Git is the distributed version control system and has an emphasis on speed and performance. It is supported by all operating systems. Git is open source software distributed under the terms of the GNU (General Public License).
- The official website is https://git-scm.com/

## Git-Bash
- It is a shell, ie, a CLI to use git
- git jargon: Repo
- It can be described as the heart of any version control system. Repository is the central defined place where all the developers or programmers work and store their code. Apart from storing files, repositories also maintain the history. In version control systems, repositories are accessed over a network which acts like a server and version control tool as a client. On establishing successful connection, clients store or retrieve their changes.
- Repos (Part 1)
   - Git stores information in a data structure called a repository.
   - The Git repository is stored in the same directory as the project itself, in a subdirectory called .git.
   - Apart from storing files, repositories also maintain the history.
   - Local repo
      - xyz
   - Remote repo
      - xyz
      - `git remote`

## Basic git commands
- `git config`
   - `git config --global user.name '<name>'` (write your name in `''`)
   - `git config --global user.email '<e-mail_id>'`
   - `git config --list`

- `git init`
   - To initialize a local git repo in the location where the bash is pointing.
   - A hidden folder '.git' is created.

- `git pull`
   - xyz

- `git fetch`
   - xyz

- `git clone`
   - xyz

- `git add`
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
   - xyz
   - **(TRY THIS)** Always pull before committing.
   - Commit _related_ changes.
   - Commit changes frequently.
   - _Don't_ commit half-done work.
   - Naming of commits
      - Use the imperative, present tense ('change', not 'changed' or 'changes') to be consistent with generated messages from commands like `git merge`.
   - .gitignore
      - xyz

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
- GitHub is not git.
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
