const tape = require("tape");
const { dbBuild } = require("../server/database/config/build");
const { getData } = require("../server/database/queries/getData");
const { postData } = require("../server/database/queries/postData");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("get data method", t => {
  const ex1 = [
    {  event_name:"Christmas", event_date:"2000-1-01" },
    {event_name:"Neda BD", event_date:"2000-01-01"},
   {event_name:"'International Day of Commemoration in Memory of the Victims of the Holocaus", event_date:"2000-01-027"},  
     {event_name:"World Cancer Day", event_date:"2000-02-04"} , 
     {event_name:"International Day of Women and Girls in Science", event_date:"2000-02-11"},
  {event_name:"Bayan Juba BD", event_date:"2000-02-03"},
  {event_name:"World Health Day", event_date:"2000-04-07"},
    {event_name:"World Press Freedom Day", event_date:"2000-05-03"},
     {event_name:"World Employee Appreiation Day", event_date:"2000-05-01"},
    {event_name:"Sustainable Gastronomy Day", event_date:"2000-06-18"},
    {event_name:"World Day Against Child Labour", event_date:"2000-06-12"},
    {event_name:"Nelson Mandela International Day", event_date:"2000-07-18"},
     {event_name:"International Day against Nuclear Tests", event_date:"2000-08-29"},
   {event_name:"World Tourism Day", event_date:"2000-09-27"},
     {event_name:"International Translation Day", event_date:"2000-09-30"},
    {event_name:"World Teachers Day", event_date:"2000-10-05"},
     {event_name:"Global Handwashing Day", event_date:"2000-10-15"},
     {event_name:"World Television Day", event_date:"2000-11-21" },
    {event_name:"International Day of Solidarity with the Palestinian People", event_date:"2000-11-29"},
    {event_name:"International Day of Persons with Disabilities", event_date:"2000-12-03"} 
  ]; 

   const ex2 = [
       {  event_name:"Christmas", event_date:"2000-1-01" }
   ];
   const ex3 = [
    {event_name:"Christmas"}
   ];

  dbBuild();
  const rx1 = getData().then(res => {
    t.deepEqual(ex1, res.rows, "ex should be equal result");
    t.end();
  });

 
 const rx2 =getData().then (result =>{
    t.deepEqual(ex2,result, "ex2 should be equal result");
    t.end();
 });
 const rx3 =getData().then (result =>{
  t.deepEqual(ex3,result, "ex2 should be equal result");
  t.end();
});
});

  tape.onFinish(() => process.exit(0));
