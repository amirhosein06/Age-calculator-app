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
const date = new Date(),
newday = date.getDate().toString(),
newmonth = date.getMonth().toString(),
newyear = date.getFullYear().toString();

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
            if (item.value === "") {
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
        if(index === 0 && target.value > dategruop[index]){
            targetparagraf.innerHTML = "Must be in the past";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        }
        
        // month error
        if(target.value > 11 && index === 1){
            targetparagraf.innerHTML = "Must be a valid month";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        }
        if(yearinput.value > newyear){
            if(index === 1 && target.value > dategruop[index]){
        targetparagraf.innerHTML = "Must be a valid month";
        target.style.borderColor = "hsl(0, 100%, 67%)";
            };
        };
        
        //day error
        if(target.value > 31 && index === 2){
            targetparagraf.innerHTML = "Must be a valid day";
            target.style.borderColor = "hsl(0, 100%, 67%)";
        }
        if(yearinput.value > newyear){
            if(index === 2 && target.value > dategruop[index]){
        targetparagraf.innerHTML = "Must be a valid day";
        target.style.borderColor = "hsl(0, 100%, 67%)";
            };
        };
        
        //no error
        if(targetparagraf.innerHTML === ""){
            if (number === 3) {
                number = 1;
            }else{
                number++;
            };
        };
    });
    if (number >= 3) {
        number = 0;
        // daysboxtext.innerHTML = (newday - dayinput.value) < 0 ? ((newday - dayinput.value)- 30) : (newday - dayinput.value);
        // monthsboxtext.innerHTML = (monthinput.value - newmonth) < 0 ? ((newmonth - monthinput.value) - 11) : (newmonth - monthinput.value);
        // yearsboxtext.innerHTML = newyear - yearinput.value;
    }
};