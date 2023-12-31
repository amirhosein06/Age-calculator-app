// getElement width id
const $ = document,
dayinput = $.getElementById("dayinput"),
monthinput = $.getElementById("monthinput"),
yearinput = $.getElementById("yearinput"),
changbtn = $.getElementById("changbtn");

// getElement width querySelector
const yearsboxtext = $.querySelector("#yearsboxtext"),
monthsboxtext = $.querySelector("#monthsboxtext"),
daysboxtext = $.querySelector("#daysboxtext");

//creat Date
let date = new Date(),
newday = date.getDate(),
newmonth = 1+ date.getMonth(),
newyear = date.getFullYear();

let inputgruop = [yearinput,monthinput,dayinput],
dategruop = [newyear,newmonth,newday];

//creat event for button
changbtn.addEventListener('click',()=>{

        let number = 0;

        inputgruop.forEach(item=>{
            let itemparagraf = $.getElementById(item.dataset.paragraf);
            itemparagraf.innerHTML = ""
            item.style.borderColor = "hsl(0, 0%, 86%)";

            //eror handel for field is required
            if (item.value == "") {
                itemparagraf.innerHTML = "This field is required";
                item.style.borderColor = "hsl(0, 100%, 67%)";
            }else{
                number++
            };
        });
        if (number >= 3 ) {
            number = 0;
            handlevaluefunc();
        };
});

function handlevaluefunc(){
    let number = 0;
    inputgruop.forEach((target,index)=>{

        let targetparagraf = $.getElementById(target.dataset.paragraf);
        targetparagraf.innerHTML = "";
        target.style.borderColor = "hsl(0, 0%, 86%)";
        //handel error
        // year error
        if(index == 0 && target.value > dategruop[index]){
            targetparagraf.innerHTML = "Must be in the past";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        }
        
        // month error
        if(target.value > 12 && index == 1){
            targetparagraf.innerHTML = "Must be a valid month";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        }
        if(yearinput.value > newyear){
            if(index == 1 && target.value > dategruop[index]){
        targetparagraf.innerHTML = "Must be a valid month";
        target.style.borderColor = "hsl(0, 100%, 67%)";
            };
        };
        
        //day error
        if(target.value > 31 && index == 2){
            targetparagraf.innerHTML = "Must be a valid day";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        };
        if(yearinput.value > newyear){
            if(index == 2 && target.value > dategruop[index]){
        targetparagraf.innerHTML = "Must be a valid day";
        target.style.borderColor = "hsl(0, 100%, 67%)";
            };
        };
        if(monthinput.value == 2 && index == 2 && target.value > 28){
            targetparagraf.innerHTML = "Must be a valid day";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        };
        if((monthinput.value == 4 ||monthinput.value == 6
             ||monthinput.value == 9 ||monthinput.value == 11)
         && index == 2 && target.value > 30){
            targetparagraf.innerHTML = "Must be a valid day";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        };
        
        //no error
        if(targetparagraf.innerHTML == ""){
            if (number == 3) {
                number = 1;
            }else{
                number++;
            };
        };
    });
    if (number >= 3) {
        number = 0;
        let monthdaylist = [31,28,31,30,31,30,31,31,30,31,30,31];

        if (dayinput.value > newday) {
            console.log(newday);
            newday = newday + monthdaylist[newmonth - 1];
            newmonth = newmonth -1;
            console.log(newday);
        };
        if (monthinput.value > newmonth) {
            newmonth = newmonth + 12;
            newyear = newyear - 1;
        };

        //Math
        let finallday = newday - dayinput.value,
        finallmonth = newmonth - monthinput.value,
        finallyear = newyear - yearinput.value;
        
        //show day prview
        daysboxtext.innerHTML = -1;
        const dayintervall =  setInterval(() => {
            daysboxtext.innerHTML++;
            if (daysboxtext.innerHTML >= finallday) {
                clearInterval(dayintervall);
            };
        }, 15);
        
        //show month prview
        monthsboxtext.innerHTML = -1;
        const monthintervall =  setInterval(() => {
            monthsboxtext.innerHTML++;
            if (monthsboxtext.innerHTML >= finallmonth) {
                clearInterval(monthintervall);
            };
        }, 15);
        
        //show year prview
        yearsboxtext.innerHTML = -1;
        const yearintervall =  setInterval(() => {
            yearsboxtext.innerHTML++;
            if (yearsboxtext.innerHTML >= finallyear) {
                clearInterval(yearintervall);
            };
        }, 15);
    };
};