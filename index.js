// woo JS 🥳
var saveBtn = document.getElementById("save")
var resetBtn = document.getElementById("reset")

var mondayTab = document.getElementById("Monday")
var tuesdayTab = document.getElementById("Tuesday")
var wednesdayTab = document.getElementById("Wednesday")
var thursdayTab = document.getElementById("Thursday")
var fridayTab = document.getElementById("Friday")
var saturdayTab = document.getElementById("Saturday")
var sundayTab = document.getElementById("Sunday")

function renderMeter() {
    
    var inputEl = document.getElementById("input")
    var meterEl = document.getElementById("energy")
    var messageEl = document.getElementById("message")
    
    inputEl.addEventListener('click', function() {
        var currInput = inputEl.value
        meterEl.value = currInput
        
        if (meterEl.value <= 4){
            messageEl.textContent = "There will be better days!"
        } else if (meterEl.value <= 6){
            messageEl.textContent = "A pleasant nice day!"
        } else {
            messageEl.textContent = "AWESOME DAYYY 🥳"
        }        
    })
}

renderMeter()
  
saveBtn.addEventListener("click", function(){
    
    var dayToday = document.getElementById("date").value
    var inputEl = document.getElementById("input")
    
    switch (dayToday){
        
        case "Monday":
        mondayTab.innerHTML = inputEl.value
        setColor(mondayTab, inputEl.value);
        break;
        
        case "Tuesday":
        tuesdayTab.innerHTML = inputEl.value
        setColor(tuesdayTab, inputEl.value);
        break;
        
        case "Wednesday":
        wednesdayTab.innerHTML = inputEl.value
        setColor(wednesdayTab, inputEl.value);
        break;
        
        case "Thursday":
        thursdayTab.innerHTML = inputEl.value
        setColor(thursdayTab, inputEl.value);
        break;
        
        case "Friday":
        fridayTab.innerHTML = inputEl.value
        setColor(fridayTab, inputEl.value);
        break;
        
        case "Saturday":
        saturdayTab.innerHTML = inputEl.value
        setColor(saturdayTab, inputEl.value);
        break;
        
        case "Sunday":
        sundayTab.innerHTML = inputEl.value
        setColor(sundayTab, inputEl.value);
        break;
         
    }
    
})

function setColor(tab, value){
    if (value >= 7){
        tab.style.color = '#73b978'
    } else if (value >= 5){
        tab.style.color = "#ecc059"
    } else {
        tab.style.color = "#e95f45"
    }
}

resetBtn.addEventListener("click", function(){
    mondayTab.innerHTML = ""
    tuesdayTab.innerHTML = ""
    wednesdayTab.innerHTML = ""
    thursdayTab.innerHTML = ""
    fridayTab.innerHTML = ""
    saturdayTab.innerHTML = ""
    sundayTab.innerHTML = ""
    
})