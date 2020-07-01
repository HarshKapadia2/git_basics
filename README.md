<p align=center>
   <img src="https://github.com/HarshKapadia2/git_basics/blob/master/git_basics_logo.png" alt="git_basics">
   <br>
   <b>A web site for the basics of</b>
   <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt="Git" width=80>
   <b>&</b>
   <img src="http://pngimg.com/uploads/github/github_PNG20.png" alt="GitHub" width=50>
   <b>!</b>
   <br>
   <br>
   <i>Hosted at https://harshkapadia2.github.io/git_basics/</i>
   <br>
   <br>
   <br>
   <a href="https://github.com/HarshKapadia2/git_basics/blob/master/CONTRIBUTING.md"><img alt="Contributions Welcome" src="https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat"></a>
   <a href="#"><img alt="Version" src="https://img.shields.io/badge/version-2-brightgreen?style=flat"></a>
   <br>
   <br>
</p>

---

*`git_basics - A Git & GitHub Crash Course` by the author, Harsh Kapadia, can be found at https://www.youtube.com/watch?v=HF12-91iazM*

## ***Contributions***

- All contributors are most welcome!
- Do view the [`CONTRIBUTING.md`](https://github.com/HarshKapadia2/git_basics/blob/master/CONTRIBUTING.md) file for further instructions, requirements/dependencies & local project setup instructions!
- All the amazing contributors to this repo can be found in the [`CONTRIBUTORS.md`](https://github.com/HarshKapadia2/git_basics/blob/master/CONTRIBUTORS.md) file!

## ***Code of conduct***

- Please view the [`CODE_OF_CONDUCT.md`](https://github.com/HarshKapadia2/git_basics/blob/master/CODE_OF_CONDUCT.md) file for details.

---
---

***NOTE: The initial part of this repo is on the [hosted site](https://harshkapadia2.github.io/git_basics/). The parts below are in the process of being migrated to the hosted version.***

This repo will always be a work in progress, so do make PRs to add your knowledge to it and correct any mistakes that might've been made!
(TBC = To be continued)

## Common mistakes and how to correct them

- TBC
- Modificaions are made to files and the user wants to revert the files to the current commit state (The files are not staged)
   - [`git checkout HEAD .`](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting) 
      - To revert all modified files to current commit state
   - `git checkout HEAD <file_name.ext>`
      - To revert a particular modified file to current commit state
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

### Misc resources & articles for Git

NOTE: This section has been moved to the hosted version at https://harshkapadia2.github.io/git_basics/#_resources 

# BYE BYE! ( : 

**Star this repo if you liked it and don't forget to share it with your friends/coworkers!**

![](https://miro.medium.com/max/1238/1*_UUaozFPd2qHfCFjlhIgGA.png)
