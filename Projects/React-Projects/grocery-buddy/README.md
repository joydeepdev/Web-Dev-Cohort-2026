# Grocery Buddy 🛒

A simple grocery list application built with React that allows users to add, delete, and mark grocery items as completed. The list is persisted using the browser's Local Storage, so your items remain even after refreshing the page.

## ✨ Features

- ➕ Add grocery items
- ✅ Mark items as completed
- ❌ Delete items
- 💾 Persistent storage using Local Storage
- 🔔 Toast notifications for user actions
- 📱 Responsive and clean UI with Tailwind CSS

## 🛠️ Built With

- React
- Tailwind CSS
- React Toastify
- Nano ID


## 📂 Project Structure

```
src/
├── App.jsx
├── Form.jsx
├── Items.jsx
├── SingleItem.jsx
├── main.jsx
└── index.css
```

## 🚀 How It Works

- Enter a grocery item and click **Add Item**.
- The item is added to the list and saved to Local Storage.
- Click the checkbox to mark an item as completed or incomplete.
- Click **Delete** to remove an item from the list.
- Toast notifications provide feedback for successful actions.

## 💾 Local Storage

The application stores all grocery items in the browser's Local Storage under the key:

```text
list
```

This ensures the data persists across page refreshes.

## 📸 Features Demonstrated

- React Hooks (`useState`)
- Controlled Components
- Conditional Rendering
- List Rendering with `map()`
- Event Handling
- Local Storage API
- Component-Based Architecture
- Tailwind CSS Styling
- Toast Notifications

