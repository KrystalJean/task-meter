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
       
        const bigTask = task.cloneNode(true);
        bigTask.classList.add('big-tasks');
        meterEmpty.append(bigTask);
        // setTimeout(removeClass, 3000);
        // function removeClass() {
        //     bigTask.classList.remove('tasks');
        // }
        
        

        // const littleTask = task.cloneNode(true);
        
    })
});









