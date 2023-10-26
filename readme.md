html

- html:5 = boiler template

JS

To inject child
-to add child inside element use appendChild {refer line 16, index.html}

React

-create element = React.createElement("tag",{},"innerHTML") {refer line 28}

create root = ReactDOM.createRoot(element) { refer line 33 }

-render = root.render(element) { refer line 34}

-DOM manipulation is most expensive operation so we try to avoid as much as possible using react, JS and keeping html plain.

-React.createElement = react element = normal Javascript object != tag, it will become tag after it render in

- To create a nested structure using React.createElement we need to pass react.createElement again as a third argument { refer line 18 app.js }

- To create a nested structure with multiple tags in same hierarchy using React.createElement use array like this [element1, element2] {refer line 21}

-if there is something in html as a element inside root it will be replaced(not appended) with react render, but HTML outside the root will not be replaced.

-

GIt

- create a remote repo through github site

- initialize git repository with git init command

- change git branch to main from master = git branch -M main

-
