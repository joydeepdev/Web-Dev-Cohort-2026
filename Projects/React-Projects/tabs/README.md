# React Tabs Project

A simple and responsive React application that displays job experience information using a tab-based interface. Users can switch between different companies and view the corresponding role, dates, and responsibilities.

## Features

* Fetches job data from an external API
* Dynamic tab navigation
* Responsive layout for mobile and desktop
* Loading spinner while fetching data
* Smooth hover and active tab transitions
* Clean UI built with Tailwind CSS
* Reusable React components

## Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* React Icons
* Fetch API

## Project Structure

```bash
src/
├── App.jsx
├── BtnContainer.jsx
├── JobInfo.jsx
├── Duties.jsx
└── ...
```

## Components

### App

* Fetches job data from the API.
* Manages application state.
* Displays a loading spinner during data retrieval.

### BtnContainer

* Renders company tabs.
* Updates the currently selected job when a tab is clicked.

### JobInfo

* Displays:

  * Job Title
  * Company Name
  * Employment Dates
  * Job Duties

### Duties

* Maps through the duties array.
* Displays each responsibility with an icon.

## API Endpoint

```javascript
https://www.course-api.com/react-tabs-project
```


## Learning Outcomes

This project helped practice:

* React Hooks (`useState`, `useEffect`)
* API data fetching
* Conditional rendering
* Component composition
* State management
* Dynamic UI rendering
* Tailwind CSS responsive design



Built as part of a React learning journey to practice working with APIs, state management, and responsive UI development.
