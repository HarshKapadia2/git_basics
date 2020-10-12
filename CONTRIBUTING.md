# Welcome, contributors! :smiley:

- Please be mindful of the [Code of Conduct](https://github.com/HarshKapadia2/git_basics/blob/master/CODE_OF_CONDUCT.md) while interacting or contributing!
- First time contributors can solve [`good first issues`](https://github.com/HarshKapadia2/git_basics/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
- Any contributor with some Git and GitHub knowledge can consider adding some of the requirements listed in the [issues](https://github.com/HarshKapadia2/git_basics/issues).
- If you want to tackle an issue or a part of it, please leave a comment on the issue (mentioning the part you want to tackle), so that I can assign you to that part of the issue and multiple people do not handle the same part of the issue.

**NOTE**:
- This project uses [Asciidoctor](https://asciidoctor.org/) to generate an `index.html` file from `.adoc` files.
- CI/CD: GitHub Actions has been set up on this repo, so an `index.html` file does not have to be committed.

## Local setup

- Fork this repo. (Top right corner.)
- Clone your forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
- [Install Asciidoctor](https://asciidoctor.org/#installation).
- **Adhere to the [file structure](#file-structure) and [language and syntax rules](#language-and-syntax) followed in this project.**
- Testing
	- Tools to help you provide syntax highlighting and view the rendered files locally
		- VS Code extension - [AsciiDoc by Asciidoctor](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode)
		- Browser extension for Chrome or Edge - [Asciidoctor.js Live Preview](https://chrome.google.com/webstore/detail/asciidoctorjs-live-previe/iaalpfgpbocpdfblpnhhgllgbdbchmia)
	- Generate `index.html` in the root directory by running the command `asciidoctor ./src/index.adoc -o ./index.html` from the root directory. (This `index.html`file is only for testing purposes. **Do not** commit it.)
- Make your contribution(s)!
	- Write meaningful commit messages and include the number (`#`) of the issue you're resolving (if any) at the end of the commit message. Eg: `:bug: fix: Resolve 'isCorrect' function error (#0)`
- Open a Pull Request (PR).
	- [Learn how to open a PR](https://github.com/firstcontributions/first-contributions).
	- Solve one issue per PR, **without any extra changes**.
	- **Include extra changes in a separate PR.**

## File structure

Asciidoctor parses files starting from `index.adoc` and follows `include::` to the **relative location** of the next file, to finally get to the file with the content.

**Example**:
This is how the content of `git_add.adoc` is displayed:

- In `index.adoc`:

 ```
== Commands
include::./refs/commands.adoc[]
```

:point_down:

- In `./refs/commands.adoc`:

 ```
include::../content/commands/git_add.adoc[]
```

:point_down:

- In `../content/commands/git_add.adoc`:

 ```
=== git add
<actual content that is displayed>
```

## Language and syntax

- Pronouns are either omitted (prefered) or third person pronouns (eg: 'they', 'their', 'one', etc.) are used.
 **Example**:
 
	- `Code should be committed frequently.` :heavy_check_mark: (preferable)
	- `One should commit code frequently.` :heavy_check_mark:
	- `You should commit code frequently.` :x:

- [Asciidoctor syntax](https://asciidoctor.org/docs/asciidoc-syntax-quick-reference/) 
- Use the same syntax as used in the other files to maintain uniformity. Avoid using variations in syntax.
- Writing in bullet points is preferable.
- Bold, underline and italics should be used sparingly.
- Surround single line commands or file names with a single 'back tick' (`).
- Surround code snippets with three 'back ticks' (```).

## Further help

If any further help is needed, do not hesitate to contact the owner (Harsh Kapadia) via [OTC](https://otc.zulipchat.com), [Twitter](https://twitter.com/harshgkapadia), [LinkedIn](https://www.linkedin.com/in/harshgkapadia/) or e-mail (harshgkapadia@gmail.com). You can [raise an issue](https://github.com/HarshKapadia2/git_basics/issues) as well.
