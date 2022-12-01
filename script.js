const meterEmpty = document.getElementById('meter-empty');
const meterFill = document.getElementById('meter-fill');
const emoCon = document.getElementById('emotions');
const calCon = document.getElementById('calendar');
const choiCon = document.getElementById('choices');
const choice1 = document.getElementById('choice1');

const tasksPerDay = 4;
const todaysTasks = [0,1,2,3,4,5,6];

let fillAmount = meterEmpty.offsetHeight/todaysTasks.length;


meterFill.style.height = fillAmount +'px';







