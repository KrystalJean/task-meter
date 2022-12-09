const meterEmpty = document.getElementById('meter-empty');
const meterFill = document.getElementById('meter-fill');
const emoCon = document.getElementById('emotions');
const calCon = document.getElementById('calendar');

const choiceCon = document.getElementById('choices');
const tasks = document.querySelectorAll('.tasks');





// const tasksPerDay = 4;
const todaysTasks = [];

let fillAmount = meterEmpty.offsetHeight / todaysTasks.length;


meterFill.style.height = fillAmount + 'px';

tasks.forEach(task => {
    task.addEventListener('click', () => {

        const bigTasks = task.cloneNode(true);
        bigTasks.classList.add('big-tasks');
        meterEmpty.append(bigTasks);

        const miniFourText = document.createElement("p");
        miniFourText.classList.add('big-task-text');
        miniFourText.innerText = "put away";
        bigTasks.appendChild(miniFourText);

        const miniThreeText = document.createElement("p");
        miniThreeText.classList.add('big-task-text');
        miniThreeText.innerText = "dry";
        bigTasks.appendChild(miniThreeText);

        const miniTwoText = document.createElement("p");
        miniTwoText.classList.add('big-task-text');
        miniTwoText.innerText = "wash";
        bigTasks.appendChild(miniTwoText);

        const miniOneText = document.createElement("p");
        miniOneText.classList.add('big-task-text');
        miniOneText.classList.add('mini-task-one');
        miniOneText.innerText = "gather & sort";
        bigTasks.appendChild(miniOneText);



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

        const miniTasks = document.querySelectorAll('.mini-tasks');
        console.log(miniTasks);

        const texts = document.querySelectorAll('.big-task-text');
        
        texts.forEach(text => {
            text.addEventListener('click', () => {
                console.log('heyyyo')
                text.style.backgroundColor = 'transparent';
                text.classList.add('strike');
                // console.log(text.clientTop);
                // console.log(text.clientLeft);
                // console.log(text.screenX);
                

                for(let i = 0; i < miniTasks.length; i++) {

                    const textX = window.scrollX + text.getBoundingClientRect().top;
                    const iconX = window.scrollX + miniTasks[i].getBoundingClientRect().top
                    // console.log(textX)
                    // console.log(Math.floor(textX))
                    // console.log(iconX);
                    // console.log(Math.floor(iconX)-1);

                    if(Math.floor(textX) === Math.floor(iconX) -1) {
                        miniTasks[i].style.background = 'transparent';
                       
                        miniTasks[i].style.filter = 'sepia(0%)';
                        miniTasks[i].innerHTML = '+💕'
                    }
                }


                
    
            })
        });


    }) //end of choices click event
}); // end of choices for each
// 






// function checkOff() {
    
//     miniTasks.forEach(miniTask => {
//         miniTask.addEventListener('click', () => {
//             miniTask.classList.add('.checkmark')



//         })
//     });
// }  //end of check off function

// checkOff();
// // setTimeout(checkOff(), 3000);

