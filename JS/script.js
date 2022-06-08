{
    const tasks = [
        {
            content: "odrobić pracę domową",
            done: false,
        },
        {
            content: "zjeść obiad",
            done: true,
        },
        {
            content: "zjeść",
            done: true,
        },
    ];
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

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
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="tasks_done">
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

        bindEvents();
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
