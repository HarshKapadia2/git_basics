# Welcome, contributors! :smiley:

- - Please be mindful of the [code of conduct](https://github.com/HarshKapadia2/git_basics/blob/master/CODE_OF_CONDUCT.md) while interacting or contributing!
- Feel free to add or correct any information to/on this repo!
- If you make a contribution, please do not forget to add your personal details to the [CONTRIBUTORS.md](https://github.com/HarshKapadia2/git_basics/blob/master/CONTRIBUTORS.md) file!

## Local setup

- Fork this repo (top right corner)
- Clone your forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
- [Install Asciidoctor](https://asciidoctor.org/#installation) (I followed the Chocolatey method, but you can follow the method of your choice.)
- [Asciidoctor syntax](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/) 
- **Please be particular of the format followed in all files and of your grammar.**
- Tools to help you view the files locally
   - VS Code extension (AsciiDoc by João Pinto)
   - Browser entention for [Chrome or Edge - Asciidoctor.js Live Preview](https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia)
- Generate `index.html` from `index.adoc` in the root directory by running the command `asciidoctor ./src/index.adoc -o ./index.html` in the root directory.
- **Commit your code using the [correct commit message structure](https://harshkapadia2.github.io/git_basics/#_git_commit).** Eg: ':bug: fix: Correct typo in git.adoc (#0)' which is typed as `:bug: fix: Correct typo in git.adoc (#0)`.
- Push the code to your forked repo.
- Make a PR!

## File structure

eg:

```
 ./src/index.adoc

      |

      v

 ./src/commands.adoc

      |

      v

 ./src/commands/git_add.adoc
 ```

---

### Further help
If any further help is needed, do contact me on [Twitter (@harshgkapadia)](https://twitter.com/harshgkapadia) or via e-mail `harshgkapadia@gmail.com`.
