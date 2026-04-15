// =============================
// 1. HOOKS (Grab HTML Elements)
// =============================
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// =============================
// 2. STORAGE (Task List)
// =============================
let myTasks = [];
myTasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// =============================
// 3. TRIGGERS (Button Clicks)
// =============================
addBtn.addEventListener("click", addTask);
deleteBtn.addEventListener("click", deleteTask);
clearBtn.addEventListener("click", clearTasks);

// =============================
// 4. FUNCTIONS (Empty for now)
// =============================
function showMessage(text, type) {
    const box = document.getElementById("messageBox");

    box.textContent = text;

    if (type === "success") {
        box.className = "text-green-700 font-semibold";
    } else if (type === "error") {
        box.className = "text-red-700 font-semibold";
    }

    setTimeout(() => {
        box.textContent = "";
    }, 2000);
}

function addTask() {
    const newTask = input.value.trim();

    if (newTask === "") {
        showMessage("Task added!", "success");
        return;
    }

    myTasks.push({
        id: Date.now(),
        name: newTask,
        completed: false
    });
    localStorage.setItem("tasks", JSON.stringify(myTasks));
    input.value = "";
    renderTasks();
}

function deleteTask() {
    const selectedID = taskDropdown.value;

    if (selectedID === "") {
        showMessage("Please select a task to delete.", "error");
        return;
    }

    const updatedList = [];

    for (const task of myTasks) {
        if (task.id != selectedID) {
            updatedList.push(task);
        }
    }

    myTasks = updatedList;
    localStorage.setItem("tasks", JSON.stringify(myTasks));
    renderTasks();
    showMessage("Task deleted!", "success");
}

function clearTasks() {
    myTasks = [];       // 1. Clear the array
    taskList.innerHTML = ""; // Clear the displayed list
    console.clear();    // 2. Clear the console
    console.log("All tasks have been cleared!");
    localStorage.setItem("tasks", JSON.stringify(myTasks)); // 3. Save to local storage
}

function renderTasks() {
    taskList.innerHTML = "";
    taskDropdown.innerHTML = '<option value="">Select a task to delete...</option>';

    for (let i = 0; i < myTasks.length; i++) {
        const li = document.createElement("li");
        li.className = "flex items-center gap-3 p-2 bg-white/70 rounded-lg shadow";

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = myTasks[i].completed;

        checkbox.addEventListener("change", () => {
            myTasks[i].completed = checkbox.checked;
            localStorage.setItem("tasks", JSON.stringify(myTasks));

            li.classList.toggle("line-through", checkbox.checked);
            li.classList.toggle("text-gray-500", checkbox.checked);
        });

        // Apply strikethrough if completed
        if (myTasks[i].completed) {
            li.classList.add("line-through", "text-gray-500");
        }

        // Task Text
        const text = document.createElement("span");
        text.textContent = `${i + 1}. ${myTasks[i].name}`;

        li.appendChild(checkbox);
        li.appendChild(text);
        taskList.appendChild(li);

        // Dropdown
        const option = document.createElement("option");
        option.value = myTasks[i].id;
        option.textContent = myTasks[i].name;
        taskDropdown.appendChild(option);
    }
}

