{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent }
        ];
        
        render();
    };

    const removeTask = (taskIndex) => {
tasks = [
    ...tasks.slice(0, taskIndex),
    ...tasks.slice(taskIndex +1),
];
        // tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),

        {
            ...tasks[taskIndex],
            done: !tasks[taskIndex].done,

        },
        ...tasks.slice(taskIndex + 1),
        ];
        // tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const markAllTasksDone = () => {
tasks = tasks.map((task) => ({
    ...task,
    done: true,
}));
        render();
    }

const toggleHideDoneTasks = () => {
    hideDoneTasks = !hideDoneTasks;
    render();
}

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });
        
    const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
 
        });
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="tasks__item">
               
                <button class="js-done  tasks__button tasks__button--toggleDone">
                ${task.done ? "✔" : ""}                
                </button>
                <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
                ${task.content}
                </span>
                <button class="js-remove tasks__button tasks__button--remove">🗑</button>
                </li>
                `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

       
    };

    const renderButtons = () => {
        // ta funkcja zrobi html na podstawie task i hideDoneTasks którego wrzucimy do elementu w ktorym te przysiski maja sie znalezc. potem odpala sie render 
    };
    const bindButtonsEvents = () => {
        // IFjesli jest button to przypisujemy even listener a jak nie to nie 
    };

    const render = () => {
        renderTasks();
        renderButtons();

        bindEvents();
        // bindRemoveEvents();
        // bindToggleEvents();
        bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        }

        newTaskElement.focus();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();

}
