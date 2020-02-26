let today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
window.addEventListener('load',() =>{
     
        let today_date = document.getElementById('today_date');
        today_date.innerHTML= date

    apiCall('get',"/date",res => {
        let GetSec = document.getElementById('today_event');
        

        
        res.forEach(element => {
            let todayEvent = document.createElement('h2');
            let li = document.createElement('li');
            
            todayEvent.innerHTML = element.event_name;
            li.appendChild(todayEvent);
            let note = document.createElement ('p');
            li.appendChild(note)
            if (element.note !== null){
                note.innerHTML = element.note;
            
            }
            GetSec.appendChild(li).classList.add('con')
        });
       
        });
    
})

// const addBtn = document.getElementById("add_button");
// addBtn.addEventListener('click',()=>{

// })


