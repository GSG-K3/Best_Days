


const search = document.getElementById("date_form")
search.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("hii");
const Cdate = document.getElementById('form_date');

let val = Cdate.value;

    window.open(`/${val}`, '_blank');


});