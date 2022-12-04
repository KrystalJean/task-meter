const meterEmpty = document.getElementById('meter-empty');
const meterFill = document.getElementById('meter-fill');
const emoCon = document.getElementById('emotions');
const calCon = document.getElementById('calendar');

const choiceCon = document.getElementById('choices');
const tasks = document.querySelectorAll('.tasks');




// const tasksPerDay = 4;
const todaysTasks = [];

let fillAmount = meterEmpty.offsetHeight/todaysTasks.length;


meterFill.style.height = fillAmount +'px';

tasks.forEach(task => {
    task.addEventListener('click', () => {
       
        const bigTasks = task.cloneNode(true);
        bigTasks.classList.add('big-tasks');
        meterEmpty.append(bigTasks);

        const miniTask1 = task.cloneNode(true);
        const miniTask2 = task.cloneNode(true);
        const miniTask3 = task.cloneNode(true);
        const miniTask4 = task.cloneNode(true);
        miniTask1.classList.add('mini-tasks');
        miniTask2.classList.add('mini-tasks');
        miniTask3.classList.add('mini-tasks');
        miniTask4.classList.add('mini-tasks');
        emoCon.append(miniTask1);
        emoCon.append(miniTask2);
        emoCon.append(miniTask3);
        emoCon.append(miniTask4);

        // setTimeout(removeClass, 3000);
        // function removeClass() {
        //     bigTasks.classList.remove('tasks');
        // }
        
        

        
        
    })
});









