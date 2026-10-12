# Project: DevStack

It is a simple React project with javaScript. You can stack your technologies here.

# Technologies that I used.
- React.js
- TailwindCSS
- DaisyUI
- React-Toastify



# Features
- Technology management.
- Simple UI.
- Add and remove items management.


# Q. & A.

i. What is JSX, and why is it used in React?
- JSX is JavaScript XML. We can write HTML in javascript. It is more easy to create UI. So, it used in React.

ii. What is the difference between props and state?
- Props is data transfering system from parent component to child. And state can data store and change.

iii. What does the useState hook do, and where did you use it in this project?
- useState can re-render our UI. It used in our projects´s component.

iv. What does the useEffect hook do, and why did you need it to load the JSON data?
- The useEffect hook handles outside actions that shouldn't block the UI rendering. We need it to load JSON data for Stop Infinite Loops and Handle Waiting Time.

v. Why does every item in a .map() list need a unique key prop?
- Every item in a .map() list needs a unique key prop for identify every items.

vi. What is conditional rendering? Show one place you used it.
- Conditional rendering means showing different UI elements based on a condition.
for example: ```
{tasks.length === 0 ? (
  The stack is empty!
) : (
  TaskList data={tasks};
)} ```


vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- We can pass the data from a parent to child component by using props. React is uni-direcional. So, only can parent pass the data to child, but a child component can't send something to the parent.
