# Spring 2023 Intro to Internet Programming — Assignment 2

☞ **Plagiarism in any form will result in failing the entire course. You’ve been duly warned.** ☜

* **Do not start this project until you have read these instructions carefully.**
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**

---

## ❖・Before You Begin・❖

1. Log in to GitHub.
2. Fork this repo(sitory). See [this video](http://code-warrior.github.io/tutorials/git/github/forking-and-cloning-at-the-github-web-site/) on how to carry out this step and step `3`.
3. Clone your fork, using either the web site or the GitHub Desktop client.
4. Checkout your personalized branch, the one with your name and GitHub user handle.

---

## ❖・Introduction・❖

Your task is to create a *single* web page consisting of HTML, CSS, and JavaScript that creates a carousel of images whose data are sourced via JSONP from a local file system, much like how a full-stack app might read data from a database. A 26-second video of what the final implemented project looks like is available from [http://vanegas.cs.hartford.edu/uploads/videos/cs-275/working-with-jsonp.mp4](http://vanegas.cs.hartford.edu/uploads/videos/cs-275/working-with-jsonp.mp4).

**Note**: *You may **only** work from within the confines of the included scaffold; no external files need to be added to this repo.*

---

## ❖・Rules・❖

Before you begin, **update Node, NPM, ESLint, and Stylelint** via `npm` from your CLI.

### General

* Do not alter the scaffold of this project, especially the `.gitignore` files. Should you need to defeat this rule, explain so in a comment in the code and in a commit message.
* The user interface of your project should approximate as close as possible the rendering in the video. Visual rules are defined under the **CSS** section below.
* Do not resize, add, or delete any images in the `img` folder.
* The final rendering of this project should not yield any scroll bars on the page, either horizontal or vertical.
* Author your code according to the included `.editorconfig` rules. (**Do not alter**.)
* Validate/lint JavaScript according to the included `.eslintrc` rules. (**Do not alter**.)
* Validate/lint CSS according to the included `.stylelintrc.json` rules. (**Do not alter**.)

### HTML

* The included `index.html` contains all the HTML required for this project. **Do not** edit it.
* Any DOM manipulations *must* take place via JavaScript.

### CSS

* No CSS libraries may be used.
* Use *only* the Open Sans typeface, which is included in the `head` element of `index.html`, and the weights of `300` and `600`.
* Keep the default font size to 16 pixels.
* Set the content leading to `1.4`.
* Set the font size of `h1` to 32 pixels.
* Set the leading of the `h1` element to `38px`.
* Set the width of each slide in your carousel to `640` pixels, with left/right padding of `20` pixels.
* Place *all* your styles in `main.css`.

## ❖・Due・❖

Saturday, 25 March 2023, at 9:00 AM.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.

---

## ❖・Grading・❖

| Item                                                      | Points |
| --------------------------------------------------------- | :----: |
| *Assignment fully implemented according to directions*    | `25`   |
| *Overall code quality across Gulp, JavaScript, and CSS*   | `25`   |
| *User interface matches assignment video rendering*       | `25`   |
| *Full Gulp development and production scaffolds in place* | `25`   |

---

## ❖・Submission・❖

You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
