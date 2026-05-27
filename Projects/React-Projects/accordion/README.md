# FAQ Accordion React App

A simple and interactive FAQ Accordion application built with React.  
Users can expand one question at a time to view its answer using a clean accordion UI.

---

## Features

- Built with React functional components
- Uses `useState` hook for state management
- Accordion-style question toggle
- Only one question stays open at a time
- Dynamic rendering using `.map()`
- Uses React Icons for plus/minus buttons
- Clean and reusable component structure

---

## Project Structure

```bash
src/
│
├── components/
│   ├── Questions.jsx
│   └── SingleQuestions.jsx
│
├── data.js
├── App.jsx
└── main.jsx
```

---

# Components Explanation

## App.jsx

- Stores all questions in state
- Maintains currently active question ID
- Handles accordion toggle logic

### Main Logic

```js
const [activeId, setActiveId] = useState(null);

const toggleQuestion = (id) => {
  const newActiveId = id === activeId ? null : id;
  setActiveId(newActiveId);
};
```

### Functionality

- If the clicked question is already open → close it
- Otherwise → open the clicked question and close others

---

## Questions.jsx

- Receives all questions via props
- Loops through questions using `.map()`
- Renders `SingleQuestions` component for each item

### Example

```js
{questions.map((question) => {
  return (
    <SingleQuestions
      key={question.id}
      {...question}
      activeId={activeId}
      toggleQuestion={toggleQuestion}
    />
  );
})}
```

---

## SingleQuestions.jsx

- Displays individual question
- Shows plus/minus icon
- Conditionally renders answer text

### Accordion Logic

```js
const isActive = id === activeId;
```

### Conditional Rendering

```js
{isActive && <p>{info}</p>}
```

---

# Dependencies

Install React Icons:

```bash
npm install react-icons
```

---

# Technologies Used

- React
- JavaScript (ES6+)
- JSX
- CSS
- React Icons

---

# Concepts Covered

- React Components
- Props
- useState Hook
- Conditional Rendering
- Event Handling
- Array Mapping
- Component Reusability

---

# Example UI Behavior

| Action | Result |
|---|---|
| Click closed question | Opens answer |
| Click open question | Closes answer |
| Open another question | Previous closes automatically |

---

