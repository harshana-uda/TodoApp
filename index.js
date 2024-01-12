const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('list')
const alertElement = document.getElementById('alert');

const date = new Date().toLocaleDateString(undefined, {month: 'long', day: '2-digit'})

document.getElementById('heading').innerText = "Today's " + date

function insertTask(content) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task'
    taskContainer.insertAdjacentHTML(`afterbegin`, `
        <p>${document.createTextNode(content)}</p>
    `)
    
    taskList.appendChild(taskContainer)
}


document.getElementById('btn-add-task').addEventListener('click', ()=> {
    if (alertElement) {
        alertElement.remove();
    }


    insertTask(taskInput.value)
    // Clear the input's value 
    taskInput.value = "";
})