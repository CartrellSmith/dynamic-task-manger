# 📘 The Dynamic Task Manager

A clean, modern, and responsive task management application built with
**HTML**, **Tailwind CSS**, and **JavaScript**. Designed with a professional, masculine UI featuring a purple-to-gray gradient header, glassmorphism card layout, and smooth interactive elements.

✨ Features

Add new tasks
Delete selected tasks using a dropdown
Clear all tasks
Tasks are saved automatically using localStorage
Completed tasks stay completed after refresh
Prevents empty tasks from being added
Each task has a unique ID for safe deletion
Dropdown menu updates dynamically with all tasks
Smooth fade‑in animations and hover transitions
Glassmorphism task container
Custom purple → gray → purple gradient header
Ionicons for clean, modern icons
Fully responsive layout

🔧 Additional Logic Implemented
1. LocalStorage Persistence
The app saves all tasks using localStorage.
When the page loads, tasks are restored using:

- js
myTasks = JSON.parse(localStorage.getItem("tasks")) || [];

Every time tasks are added, deleted, completed, or cleared, the updated list is saved back to storage.

2. Persistent Completed Tasks
Each task now includes a completed property:

- js
{ id: 12345, name: "Buy Milk", completed: true }

When a checkbox is clicked:
    The UI updates (strike‑through + gray text)
    The completed state is saved to localStorage
    The strike‑through remains after refresh

3. Input Validation
Before adding a task, the app checks:

- js
if (newTask.trim() === "") return;

This prevents blank or whitespace‑only tasks.

4. Unique ID System for Duplicate‑Safe Deletion
Each task is created with a unique ID:

- js
id: Date.now()

The delete dropdown uses this ID, ensuring only the selected task is removed — even if multiple tasks have the same name.

5. Dropdown for Deleting Specific Tasks
A <select> dropdown is automatically updated with all current tasks.
Users can delete a task without typing its name.

The dropdown is refreshed inside renderTasks() so it always matches the current array.

6. User Feedback Message System
A message box displays clean UI feedback such as:
    “Task added!”
    “Task deleted!”
    “Please enter a task.”

Messages fade automatically after a short delay.

📌 Future Enhancements
    Add checkboxes to filter completed vs. active tasks
    Add edit functionality for existing tasks
    
---

## 👤 Author

**C. Smith**  
Mississippi Coding Academy  
Dynamic Task Manager Project