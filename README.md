# 📘 The Dynamic Task Manager

A clean, modern, and responsive task management application built with
**HTML**, **Tailwind CSS**, and **JavaScript**. Designed with a professional, masculine UI featuring a purple-to-gray gradient header, glassmorphism card layout, and smooth interactive elements.

## ✨ Features

- Add new tasks
- Delete selected tasks
- Clear all tasks
- Smooth fade-in animations
- Hover transitions
- Glassmorphism task container
- Custom purple → gray → purple gradient header
- Ionicons for clean, modern icons
- Fully responsive layout
- Tasks are saved automatically using localStorage, so the list stays after refresh.
- Prevents empty tasks from being added using input validation.
- Includes a dropdown menu that lists all current tasks for easy deletion.

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS (CDN)  
- JavaScript (ES6)  
- Ionicons  

---

## 🚀 How to Run the Project

1. Download or clone the repository  
2. Open `index.html` in your browser  
3. Start adding tasks  

_No build tools required — everything runs in the browser._

---

## 📂 Project Structure

/project-folder  
│── index.html  
│── script.js  
│── README.md  

---

## 🎨 UI Design Notes

This project uses a custom masculine color palette:

- Purple: `#4B2E83`
- Gray: `#2F2F2F`
- White: `#FFFFFF`

Header gradient:

`from-[#4B2E83] via-gray-300 to-[#4B2E83]`

Glassmorphism container:

- bg-white/70  
- backdrop-blur-xl  
- shadow-xl  
- rounded-xl  

---

## 📌 Future Enhancements

- LocalStorage saving  
- Editable tasks  
- Completed task checkmarks  

---

## 🔧 Additional Logic Implemented

### 1. LocalStorage Persistence
The app saves all tasks using `localStorage`.  
When the page loads, tasks are restored using:

```js
myTasks = JSON.parse(localStorage.getItem("tasks")) || [];

---

## 👤 Author

**C. Smith**  
Mississippi Coding Academy  
Dynamic Task Manager Project