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
function addTask() {
    const newTask = input.value.trim();

    if (newTask === "") {
        alert("Please enter a task before adding.");
        return;
    }

    myTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(myTasks));
    input.value = "";
    renderTasks();
}

function deleteTask() {
    const selectedTask = document.getElementById("taskDropdown").value;

    if (selectedTask === "") {
        alert("Please select a task to delete.");
        return;
    }

    const updatedList = [];

    for (const task of myTasks) {
        if (task !== selectedTask) {
            updatedList.push(task);
        }
    }

    myTasks = updatedList;
    localStorage.setItem("tasks", JSON.stringify(myTasks));
    renderTasks();
}

function clearTasks() {
    myTasks = [];       // 1. Clear the array
    taskList.innerHTML = ""; // Clear the displayed list
    console.clear();    // 2. Clear the console
    console.log("All tasks have been cleared!");
    localStorage.setItem("tasks", JSON.stringify(myTasks)); // 3. Save to local storage
}

function renderTasks() {
    console.clear();
    taskList.innerHTML = ""; // Clear the displayed list

    let counter = 1;

    for (const task of myTasks) {
        console.log(counter + ". " + task);
        
        // Create a list item for the page
        const li = document.createElement("li");
        li.textContent = counter + ". " + task;
       
        //Tailwind styling
        li.className = 
            "bg-gray-50 border-l-4 borderder-purple-800 p-3 rounded-lg text-gray-900 font-medium shadow-sm";
        
        taskList.appendChild(li); 

        //Animate in
        setTimeout(() => {
            li.classList.remove("opacity-0", "translate-y-2");
        }, 10);

        counter++;
    }
    const dropdown = document.getElementById("taskDropdown");
    dropdown.innerHTML = '<option value="">Select a task to delete...</option>';

    for (const task of myTasks) {
        const option = document.createElement("option");
        option.value = task;
        option.textContent = task;
        dropdown.appendChild(option);
    }
}
