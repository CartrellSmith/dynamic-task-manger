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
    const newTask = input.value.trim(); // 1. Capture the text

    if (newTask !== "") {
        myTasks.push(newTask);          // 2. Store it in the array
        input.value = "";              // Clear the input field
        renderTasks();                // 3. Update the display
    }
}

function deleteTask() {
    const targetTask = input.value.trim(); // 1. Capture the text
    let collector = [];                    // New Temporary array

    for (const task of myTasks) {
        if (task !== targetTask) {
            collector.push(task);   // 2. Store non-matching tasks in
        }
    }

    myTasks = collector;    // 3. Replace the original array
    input.value = "";    // Clear the input field
    renderTasks();      // 4. Update the display
}

function clearTasks() {
    myTasks = [];       // 1. Clear the array
    taskList.innerHTML = ""; // Clear the displayed list
    console.clear();    // 2. Clear the console
    console.log("All tasks have been cleared!");
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
}
