# html

- html:5 = boiler template

# JavaScript

To inject child
-to add child inside element use appendChild {refer line 16, index.html}

Everything in JS happens inside execution context

- execution context = big container where all js code is executed

- Js is a synchronous single thread language.

-when a js code runs execution context is created

# React

-create element = React.createElement("tag",{},"innerHTML") {refer line 28}

create root = ReactDOM.createRoot(element) { refer line 33 }

-render = root.render(element) { refer line 34}

-DOM manipulation is most expensive operation so we try to avoid as much as possible using react, JS and keeping html plain.

-React.createElement = react element = normal Javascript object != tag, it will become tag after it render in

- To create a nested structure using React.createElement we need to pass react.createElement again as a third argument { refer line 18 app.js }

- To create a nested structure with multiple tags in same hierarchy using React.createElement use array like this [element1, element2] {refer line 21}

-if there is something in html as a element inside root it will be replaced(not appended) with react render, but HTML outside the root will not be replaced.

- its better to write "react component didn't rendered" in HTML if react is used.

- npm = manages packages, all package, utilities are hosted on npm

- use command npm init to install npm in project

- package.json = configuration for npm, it keeps the track of what package is installed in your system

- parcel,webpack, , vite = bundlers

- we will use parcel

- install parcel = npm install -D parcel (D is used for dev dependency, not for production )

- caret (^) for minor upgrade like 1.2.1 to 1.2.2(its safe) and tilde (~) major upgrade like 1.2.3 to 2.1(it's not safe a lot of things may break)

- transitive dependency = we need parcel, parcel need other packages which are available in node modules, like babel, and many this is called transistive dependency between parcel and babel

- Every package in npm has it own package.json and it has its normal dependency and dev dependency.

- node modules = database of packages needed which we have installed to work.

- package.lock.json has integrity property which has hash so that whatever is there on my local same is on production.

- dont push node_modules on git

- but do push package.json and package-lock.json since if you have these two you can regenerate node_modules by command npm install in other machine.

- build app using parcel by using command = npx parcel index.html to run our app on server.

- npx is for executing the package

- cdn link is not the preferred way to bring React and ReactDOM into our project since it is hard coded value which we have to manually change later when version change and also we have to make a api call to server to get the React and ReactDOm code on that link better is to have it in npm and manage version in our own code internally.

- install react package = npm install react or npm i react ( install = i)

- install reactDOM = npm install react-DOM

- now remove cdn link of React and react-dom and import React from "react" and ReactDOM from "react-dom" in our app.js.

- add type= "module" in <script type="module" src="./app.js"></script> since its not normal javascript file so don't understand import.

- use ReactDOM from "react-dom/client" not from "react-dom" as it is updated.

- remove "main": "app.js", from package.json as parcel usese entry point as index.html

- build command = npx parcel build index.html

- when build all the file will go to dist folder

- to allow your site to work in maximum use package "browserslist", use this in package.json

"browserslist": [
"Last 2 version"
]

last 2 version can be changed by using this site depending on your requirement , https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

- use package.json to give shortform to this command in script tag

start = npx parcel index.html
build = npx parcel build index.html

add below

"scripts": {
"start":"parcel index.html",
"build":"parcel build index.html",
},

use new command

start = npm run start = npm start
build= npm run build != npm build

- component

  - Class Based Component (it uses JS classes to build component ) - Old
  - Functional component ( It uses JS function to build component) - New

- React functional component

  -Its just a Javascript function which return some react element .

  const Heading = () =>{
  return ( <div className ="heading">Functional Component </div>)
  }

-Both functions are same

1. const fn = () => { return true}

2. const fn2 = () => true;

3. if want to to wrap in multiple lines then use brackets
   const fun3 = () => (
   true;
   )

- To render functional component use root.render(<HeadingComponent />);
- To render element use

- Component composition below means composing component inside one another.
<div>Hello</div>
<HeadingComponent />

- we can also use normal function in place of arrow function

const Header = function(){
return (

<div></div>
)
}

- if I have to use react element inside a another component then use {} brackets like {heading}

- if code is like this

const data = api.getData();
{data} if you use this in jsx the attacker might run the JS code in your browser stelaing cookies, local data, etc

but this is not the case with jsx it will take care of this.Jsx will sanitize the day, prevent cross side scripting attack

- <Title /> = <Title></Title>

- we can even use below way to call a component instead <HeadingComponent />

{
HeadingComponent();
}

- whenever repeat features build separate react component.

Inline style
-style takes the javascript object

- inline style in jsx is given as as object separately like

  step 1
  const styleCard = {
  backgroundColor: "#f0f0f0",
  };

  step2
  give this on tag => style={styleCard}

-props

props = properties

-props are just arguments to a function.

-passing a prop to a component is just like passing a argument to a function.

example = gi

        <RestaurantCard resName="MacDonald" resRating="4.5" />
        <RestaurantCard resName="KFC" resRating="4.3" />


      we will not directly give like this every individual value rather as a JSON file.

- react will take all props and make it an object props and pass it to the component as a prop.

- destructuring on fly/ destructuring of object =

its normal JS function => const{value1,value2} = props;
const Component = (props) => {props.value}

or

const Component = ({value1, value2}) => { {value1}, {value2}}

- to get the data from external api go to site, click on network, reload the page, fetch api, go to preview, search required data, open in new tab

- download the json viewer from your extension to see json data in readable format.

- config driven UI = controlling UI based on backend data

- when you fetch value from json which is an array of string but you need space and comma between them then use join like below
  resData.card.card.info.cuisines.join(", ")

- destructure our code = below two are same

{resData.card.card.info.avgRating} = avgRating

or

const { avgRating } = resData?.card?.card?.info;

- Optional chaining =

resData?.card?.card?.info;

-functional programming = map, filter, reduce

- whenever looping is done on a component then key need to give. like above we use map so give key.

- not using key (not acceptable ) >>>>>>>>>>>> using index as a key (if backend didn't provide unique key) >>>>>>>>>>>> using id(best practice)

@ Export = two type of export,
1.default export = only export one => export default resList; => import resList from "../utils/mockData";
2.named export = when multiple export needed. =>export const CDN_URL ="" => import { CDN_URL } from "../utils/constant";

@React Hooks

- normal javaScript utility function
- pre-build functions given by react
- -useState() - super powerful state variable
  -useEffect()

- whenever state variable changes react rerender the component.

- rerendering = re updating the page

- React keeps the data layer in sync with the UI layer

-

- react is fast because its good at DOM operation.

- component name can be Component.js or Component.jsx or Component.tsx

- when import use we can give file name with or without extension, below both are same

import Header from "./component/Header" or import Header from "./component/Header.js"

- Never ever use any hard coded data in component folder, keep separate

- path in the same folder hierarchy use ./Component.js

- path in different folder hierarchy use ../Component.js

# mindset before creating an web app

-first step is to plan
-build wire frame

-

# parcel

- Dev build
- local server
- hot module replacement(HMR)
- do HMR with file watching algorithm written in C++
- caching - faster builds
- image optimization (most expensive task )
- minification
- bundling
- compressed files
- consistent hashing
- code slitting
- differential bundling - support to older browser
- diagnostics
- error handling
- https
- tree shaking - removed unused code
-

# GIt

- create a remote repo through github site

- initialize git repository with git init command

- change git branch to main from master = git branch -M main
-

# JSX

- we are replacing react.createElement to jsx that makes our code readable.
- jsx is html like syntax but its seperate.

- JSX = javascript syntax extension
- jsx is not html written inside javascript its different.
- JSX is html and xml like syntax
- we can write component without JSX also using create react app.
- JSX transpiled before it reaches the JS -- Parcel-- Babel
- JSX => react.createElement => react.element(JS object) => HTML element(render)
- attributes is written in camel case.
- class == className
- tabindex == tabIndex -<div className ="xyz">Hello world</div>
-use parenthesis if in multiple lines in JSX
(<div className ="xyz">
Hello world
</div>)
-

# Babel

- it will transpile the JSX before it reaches the JS
