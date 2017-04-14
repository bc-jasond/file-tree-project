# Exercise: DOM Tree as a File System

This exercise is to build a web app that allows a user to upload a DOM tree
and then renders a graphical representation of it as a file and folder explorer.

Your implementation will be evaluated technically, but also by a designer, so CSS fidelity is important.

You can use any language, tools or libraries you'd like.

## Requirements

### Application
* Your application should allow a user to upload an `.html` file, then render the DOM tree graphically as described below.
* `index.html` is included as a test sample.
* Refer to `mockup.png`. When a user clicks the `Upload` link, the user should be prompted to select a file to upload.
* When the user clicks `Done`, the file should be sent to your server. Your server should process the HTML and respond.
* Then your UI should update to reflect the new tree. `label` should be filename that was uploaded.
* You can assume the user will not upload an invalid file type, an invalid DOM tree, or an extremely large file.

### Rendering the graphical explorer UI
* Represent all the nodes in a DOM tree starting with `head` and `body` at the top level.
* Do not include comment tags in the output, only text nodes and elements

#### Appearance
* What you build should look like a modal (Doesn't need to function like one. eg: open/close and dragging it around are not necessary)
* Visually has the same colors, alignment, sizing, and shading as `mockup.png`

#### Interaction
* Implement some sort of basic selection appearance, but complex single-select or multi-select rules aren't required.
* Both files and folders should be selectable.

#### Folders
* DOM element nodes should be represented as "folders"
* Display the DOM element tag name next to folders
* Folders can be expanded and collapsed by clicking

#### Files
* Text nodes should be represented as "files"
* Display a single line of text content next to "files"
* Text truncates with ellipsis if too wide

## Example

For clarity, here's an example DOM section:

```html
<body>
  <p>
    Some Text
    <!-- A Comment -->
    More Text
  </p>
</body>
```

This section of the DOM should be represented in the tree like this:

* body
  * p
    * Some Text
    * More Text

The two text nodes are represented as files, comments are not shown, and containing elements are represented as folders.

## Submission
* Your submission should include a `README.md` that provides basic instructions to the
evaluator on how to install and run your application.
* You can assume your evaluator is technically competent.

For example, here's a sample set of instructions for a NodeJS app:
* Install latest Node & npm.
* Run `npm install`
* Run `npm start`
* Navigate to `localhost:8000`

## Evaluation Criteria (most important to least important)
1. Functional requirements met
2. DRY, reusable, well-thought-out code
3. CSS rendering of `mockup.png` in Chrome

## If you have extra time
If you have extra time, here are some ideas for additional
features you could add. They are in no specific order. You can also implement any
ideas you have. Please note anything you implement in `README.md`.

These are **NOT REQUIRED**. You should only attempt these if you believe you have
achieved perfect marks on the above evaluation criteria.

* Error handling. Some examples may be if the user uploads an invalid file type, an invalid HTML tree, or a huge file.
* When a user hits the back button, render the previous tree.
* Re-organizing the tree on the client (re-order, insert, delete, rename), then letting the user download into an `.html` file.
* In addition to uploading a file, allow the user to enter a URL.
* If you implement the URL feature, caching to improve user experience.
