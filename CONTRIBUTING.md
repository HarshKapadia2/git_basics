# Welcome, contributors! :smiley:

- - Please be mindful of the [Code of Conduct](https://github.com/HarshKapadia2/git_basics/blob/master/CODE_OF_CONDUCT.md) while interacting or contributing!
- First time contributors can solve [`good first issues`](https://github.com/HarshKapadia2/git_basics/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
- Any contributor with some Git and GitHub knowledge can consider adding some of the requirememnts listed in the [issues](https://github.com/HarshKapadia2/git_basics/issues).
> NOTE:
> - If you want to tackle an issue or a part of it, please leave a comment on the issue (mentioning the part you want to tackle), so that I can assign you to that part of the issue and multiple people do not handle the same part of the issue.
> - If you make a contribution, please do not forget to add your details to the [CONTRIBUTORS.md](https://github.com/HarshKapadia2/git_basics/blob/master/CONTRIBUTORS.md) file!

## Local setup

- Fork this repo (top right corner)
- Clone your forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
- [Install Asciidoctor](https://asciidoctor.org/#installation)
- [Asciidoctor syntax](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/) 
- **Please be particular of the format followed in all files and of your grammar.**
- Tools to help you provide syntax highlighting and view the rendered files locally
   - VS Code extension - [AsciiDoc by asciidoctor](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode)
   - Browser extension for Chrome or Edge - [Asciidoctor.js Live Preview](https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia)
- Make contribution(s)!
- Generate `index.html` from `index.adoc` in the root directory by running the command `asciidoctor ./src/index.adoc -o ./index.html` in the root directory.
- **Commit your code using the [correct commit message structure](https://harshkapadia2.github.io/git_basics/#_git_commit).** Eg: ':bug: fix: Correct typo in git.adoc (#0)' which is typed as `:bug: fix: Correct typo in git.adoc (#0)`.
- Make a Pull Request! ([Learn how to make a PR](https://github.com/firstcontributions/first-contributions))

## File structure

eg:

```
 ./src/index.adoc

      |

      v

 ./src/refs/commands.adoc

      |

      v

 ./src/content/commands/git_add.adoc
 ```

---

### Further help

If any further help is needed, do not hesitate to contact me via [Twitter (@harshgkapadia)](https://twitter.com/harshgkapadia), [LinkedIn (@harshgkapadia)](https://www.linkedin.com/in/harshgkapadia/) or e-mail (harshgkapadia@gmail.com). You can raise an [issue](https://github.com/HarshKapadia2/git_basics/issues) as well.
