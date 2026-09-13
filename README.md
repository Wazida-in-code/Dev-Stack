Project Name

# Dev-Stack


A little description

## Dev-Stack is a React-based application for exploring technologies and building a personalized tech stack.It allows users to track the technologies they have learned and keep an eye on their learning progress. 


Technology & Tools used-
### React.js
### Tailwind CSS
### TypeScript 
### React-Toastify (NPM Package)
### JSON (for technology data)
### Vite (build tool)


3 features about the project-

#### Keep an eye on the technologies you are interested in.

#### Track your progress with the technologies you have already learned.

#### Discover what new technologies have been added.



i. What is JSX, and why is it used in React?

JSX stand for JavaScript XML.
JSX is a syntax extension which look like HTML, but we can write Javascript here.


ii. What is the difference between props and state?

Props means a function arguments, which passed in the components.
State is used for manage data, rendering the items & tracking the values.


iii. What does the useState hook do, and where did you use it in this project?

UseState is a react function, which behaves like memory, in simple word useState used for track the user update and compare the old value and new value.
In this project, useState used in the main file of the project 'TechAllCard.tsx'


iv. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook manages 'side effects' in React functional components, allowing your application to interact with systems outside of React's direct control.
JSON data comes from outside of the project, so we have to use useEffect to load JSON data from API.


v. Why does every item in a .map() list need a unique key prop?

Every time when every item in .map(), we have to provide a key props, because keys provide a unique identity for every element, which helps react to track every item & re-render which item have changed, added or removed.


vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering is a technique that allows us to display the user interface based on specific data.
In this projects I used conditional redering in many place-
example: The "Add to Stack" button.

<button onClick={() => handleAddToStack(technology)} disabled={stack.some(item => item.id === technology.id)} className={`py-2 rounded-md px-17.5 disabled:cursor-not-allowed hover:cursor-pointer ${stack.some(item => item.id === technology.id) ? 'text-pink-700 bg-pink-200 px-[60px]' : 'bg-[#0A0F1D] text-white'}`}>{stack.some(item => item.id === technology.id) ? "Added to Stack" : "Add to Stack" }</button>


vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from a parent component to a child component by props,
To send data from a child to a parent, the parent passes a function to the child through props. The child can call this function when an event occurs. The function then updates the parent's state.
