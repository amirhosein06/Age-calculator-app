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

let dayinputnullvalue = dayinput.value === "",
monthinputnullvalue = monthinput.value === "",
yearinputnullvalue = yearinput.value === "",
inputgruop = [dayinput,monthinput,yearinput];

//creat event for button
changbtn.addEventListener('click',()=>{

        inputgruop.forEach(item=>{
            let itemparagraf = $.getElementById(item.dataset.paragraf);
            itemparagraf.innerHTML = ""
            item.style.borderColor = "hsl(0, 0%, 86%)";

            //eror handel for field is required
            if (item.value === "") {
                itemparagraf.innerHTML = "This field is required";
                item.style.borderColor = "hsl(0, 100%, 67%)";
            }

        })
})