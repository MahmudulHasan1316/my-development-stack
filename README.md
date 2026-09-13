1. Name of My project==> my-react-dataloding-app
2. Description ==> This project is a Technology Stack Builder built with React, TypeScript, Tailwind CSS, DaisyUI, and React-Toastify.

The user can:

🔹 See different technologies in technology cards.
🔹 View information such as name, category, description, difficulty, rating, and icon.
🔹 Click “Add to Stack” to select a technology.
🔹 See selected technologies inside “Your Stack”.
🔹 Prevent duplicate technologies from being added.
🔹 Remove individual technologies.
🔹 Use “Remove All” to clear the entire stack.
🔹 Receive toast notifications when adding, removing, or attempting duplicate actions.
🔹 Use the responsive layout on mobile, tablet, and desktop.

3. Tachnology that I used ===> Tailwind CSS, DaisyUI, TypeScript, React, Toastify etc.
4. Three feature ===> React, JavaScript, TypeScript.
=======>
Ans. 1--> JSX is a syntax that lets us write HTML-like code inside JavaScript.
It is used in React to describe what the UI should look like.

Ans. 2--> Main difference between Props and State is Props => received data & State =>component’s own changing data.

Ans. 3--> useState lets us store and update changing data in a React component.
In this project, we used it in Technologies.tsx to store the selected technologies in “Your Stack.”

Ans. 4--> useEffect is used to run side effects, such as fetching data from an API or JSON file.

In this project, we didn’t need useEffect because we used React’s use() to load the JSON data.

Ans. 5--> A unique key helps React identify each item in a list and efficiently update, add, or remove items when the list changes.
In our project, we used technology.id as the unique key for each technology card.

Ans. 6--> Conditional rendering means showing different UI depending on a condition.
In our project, we used it to show “No technology selected yet” when the stack is empty.

Ans. 7--> Parent -→ Child: Pass data through props.
Child -→ Parent: Pass a function as a prop, then the child calls that function to send data/action back to the parent.
In our project, Technologies passed technology data and onAddToStack to TechnologyCard.