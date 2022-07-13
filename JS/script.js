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

    const removeTask = (TaskIndex) => {

        tasks.splice(TaskIndex, 1);
        render();
    }

    const toggleTaskDone = (TaskIndex) => {
        tasks[TaskIndex].done = !tasks[TaskIndex].done;
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

    const renderButtons = () => {};
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
