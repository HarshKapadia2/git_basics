# Welcome, Contributors! 😃

-   Please be mindful of the [Code of Conduct](https://github.com/HarshKapadia2/git_basics/blob/master/CODE_OF_CONDUCT.md) while interacting or contributing!
-   First time contributors can solve [`good first issues`](https://github.com/HarshKapadia2/git_basics/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
-   Any contributor with some Git and GitHub knowledge can consider adding some of the requirements listed in the [issues](https://github.com/HarshKapadia2/git_basics/issues).
-   If any contributor wants to tackle an issue or a part of it, please leave a comment on the issue (mentioning the part they want to tackle), so that they can be assigned to that part of the issue and multiple people do not handle the same part of the issue.

NOTE:

-   This project uses a Static Site Generator called [Asciidoctor](https://asciidoctor.org/).
-   This project is a [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) and a [TWA](https://developer.chrome.com/docs/android/trusted-web-activity/overview/). ([Asset links file](https://github.com/HarshKapadia2/harshkapadia2.github.io/blob/main/.well-known/assetlinks.json))
-   CI/CD: GitHub Actions has been set up on this repo, so a built web site does not have to be committed.

## Local Setup

-   Fork this repo. (Top right corner.)
-   Clone the forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
-   [Install Asciidoctor](https://asciidoctor.org/#installation).
-   **Please adhere to the [file structure](#file-structure) and [language, code and syntax rules](#language-code-and-syntax) followed in this project.**
-   Testing
    -   Generate the web site in a directory called 'build' in the root directory by running the command `sh build.sh` from the root directory.
        -   Please **do not** commit this 'build' directory, as the CI process will build the site on merge.
-   Make contribution(s)

    -   Write meaningful commit messages and include the number (`#`) of the issue being resolved (if any) at the end of the commit message.

        Example: `:bug: fix: Resolve 'isCorrect' function error (#0)`

-   Open a Pull Request (PR).
    -   [Learn how to open a PR](https://github.com/firstcontributions/first-contributions).
    -   Solve one issue per PR, **without any extra changes**.
    -   **Include extra changes in a separate PR.**

## File Structure

### Parsing

Asciidoctor parses files starting from `index.adoc` and follows `include::` to the **relative location** of the next file, to finally get to the file with the content.

**Example**:
This is how the content of `git_add.adoc` is displayed:

-   In `index.adoc`:

```
== Commands
include::./refs/commands.adoc[]
```

👇

-   In `./refs/commands.adoc`:

```
include::../content/commands/git_add.adoc[]
```

👇

-   In `../content/commands/git_add.adoc`:

```
=== git add
<actual content that is displayed>
```

### Static Files

-   CSS, JS and images are located in the `./src/static` directory. Add the appropriate static files to the appropriate static directory.

#### Caching

-   If any static file is added, please make sure to
    -   Include it in the `cacheAssets` array in `./src/service_worker.js` as a relative path.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Add it to `./src/docinfo.html` with the correct syntax if the static file needs to be linked to the final site.
-   If any static file is modified, please make sure to
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
-   If any static file is deleted, please make sure to
    -   Remove it from the `cacheAssets` array in `./src/service_worker.js`.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Remove it from `./src/docinfo.html` if present.
-   If any static file is renamed, please make sure to
    -   Rename it in the `cacheAssets` array in `./src/service_worker.js`.
    -   Increment the value of the `cacheName` variable. (Example: From `v2` to `v3`.)
    -   Rename it in `./src/docinfo.html` if present.
-   **The `cacheName` should be updated just once per commit.**

#### Images

Images should have

-   A solid colour background. (No transparent images.)
-   A width and height of 600px, unless that distorts the picture or makes it illegible, in which case suitable dimensions can be used.
-   An `alt` attribute describing the image in a few words.

Example:

```
image::file_name.ext[alt="image description", 600, 600, ...]
```

## Language, Code and Syntax

-   Pronouns are either omitted (preferred) or third person pronouns ('they', 'their', 'one', etc.) are used.

    **Example**:

    -   `Code should be committed frequently.` ✔️ (Preferred)
    -   `One should commit code frequently.` ✔️ (Accepted)
    -   `You should commit code frequently.` ❌ (Not accepted)

-   [Prettier](https://prettier.io/) should be used to format code.

    -   The [`.prettierrc`](.prettierrc) config file can be found in the root directory.
    -   Please use the Prettier's [VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) or [CLI](https://prettier.io/docs/en/cli.html) to format code before committing.

-   The [AsciiDoc](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode) extension can be used, for syntax highlighting in `.adoc` files in VS Code.

-   [Asciidoctor syntax](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/) (Quick reference.)
-   Use the same syntax as used in the other files to maintain uniformity. Avoid using variations in syntax.
-   Writing in bullet points is preferable.
-   Bold, underline and italics should be used sparingly.
-   Surround single line commands or file names with a single 'back tick' (`).
-   Surround code snippets with three 'back ticks' (`\``).
-   External links should include a caret (`^`) at the end of the link text to open them in a new tab.

    **Example**:

    -   `link:https://github.com[This is a link to another site^]` (Caret at the end for external links.)
    -   `link:#_issues[This is a link to the same site]` (No caret at the end for internal links.)

-   If external links are pasted as normal links, use `[role=external,window=_blank]` following the link to open it in a new tab

    **Example**: `link:https://github.com/HarshKapadia2/git_basics[role=external, window=_blank]`

-   Links should have meaningful text.

    **Example**:

    -   `It can be found in the link:https://docs.github.com[official documentation].` ✔️ (Accepted)
    -   `It can be found link:https://docs.github.com[here].` ❌ (Not accepted)

## Further Help

If any further help is needed, do not hesitate to contact the owner (Harsh Kapadia) via [OTC](https://ourtech.community), [Twitter](https://twitter.com/harshgkapadia), [LinkedIn](https://www.linkedin.com/in/harshgkapadia/) or e-mail (harshgkapadia@gmail.com). An [issue](https://github.com/HarshKapadia2/git_basics/issues) can be raised as well.
