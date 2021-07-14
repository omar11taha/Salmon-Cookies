'use strict'

let houres=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
function random(max,min) {
    return Math.floor(Math.random()*(max-min+1))+min;
    
}

// function Cookies(houres) {
// this.houres=houres;
// Cookies.push(this)
    
// }
let allStores=[]
function Stores(name,min,max,avg) {
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.costmersNumber=[];
    this.avgcookiesperhoure=[];
    this.name=name;
    this.total=0;
    allStores.push(this);
}
Stores.prototype.randomcastmores=function () {
   
    for (let i = 0;i< houres.length; i++){  
        // random(this.min,this.max); 
        let randomNom=random(this.min,this.max)
        this.costmersNumber.push(randomNom)
        // this.total+=randomNom
        
        // for (let j = 0; j < this.costmersNumber.length; j++) {
        //     this.avgcookiesperhoure= this.costmersNumber[i]*this.avg
            
        // }
    }
    console.log(this.costmersNumber);
}


Stores.prototype.avgcookiesperhoure1=function(){
    for (let j = 0; j < houres.length; j++) {
        let randomcookie=Math.floor (this.costmersNumber[j]*this.avg)
        this.avgcookiesperhoure.push(randomcookie)
        this.total+=randomcookie
        
    }
    console.log(this.avgcookiesperhoure);
}



let Seattle= new Stores('Seattle', 23,65,6.3)
let tokyo= new Stores('tokyo', 3,24,1.2)
let dubai= new Stores('dubai', 3,24,3.7)
let paris= new Stores('paris' ,3,24,2.3)
let lima= new Stores('lima' ,3,24,4.6)

Seattle.randomcastmores();
tokyo.randomcastmores();
dubai.randomcastmores();
paris.randomcastmores();
lima.randomcastmores();
Seattle.avgcookiesperhoure1();
tokyo.avgcookiesperhoure1();
paris.avgcookiesperhoure1();
dubai.avgcookiesperhoure1();
lima.avgcookiesperhoure1();


let parent=document.getElementById('parent');
let tableElemantes=document.createElement('table');
parent.appendChild(tableElemantes);
let hidingElemant=document.createElement('tr');
parent.appendChild(hidingElemant);
let th1=document.createElement('th');
    hidingElemant.appendChild(th1);
    th1.textContent='houres'
let firstrow=houres;
for (let k = 0; k < houres.length; k++) {
    let th1=document.createElement('th');
    hidingElemant.appendChild(th1);
    th1.textContent=houres[k]
}
// let rowData=document.createElement('td');
// parent.appendChild(rowData);
// for (let index = 0; index < 5; index++) {
//     let shopes = array[index];
    

// for (let l = 0; l < houres.length; l++) {
//     let td=document.createElement('td');
//     hidingElemant.appendChild(td);
//     td.textContent=this.avgcookiesperhoure[l]
// }
// }

Stores.prototype.render=function(){
    let hidingElemant=document.createElement('tr');
    let th2=document.createElement('th');
parent.appendChild(hidingElemant);
hidingElemant.appendChild(th2);
th2.textContent=this.name
// let restorants=['Seattle','tokyo','dubai','paris','lima']
// for (let index = 0; index < restorants.length; index++) {
    // const element = array[index];
    

   
for (let l = 0; l < houres.length; l++) {
    let td=document.createElement('td');
    hidingElemant.appendChild(td);
    td.textContent=this.avgcookiesperhoure[l]
}
let td2=document.createElement('td');
    hidingElemant.appendChild(td2);
    td2.textContent=this.total
}
// }
Seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
let form=document.getElementById('form')
form.addEventListener('submit',formSubmitter)
function formSubmitter(event){
    event.preventDefault();
    let shopName=event.target.shopName.value;
    let min= Number(event.target.min.value);
    let max=Number (event.target.max.value);
    let avg=Number (event.target.avg.value);
    let newLocashon= new Stores(shopName, min,max,avg);
    newLocashon.randomcastmores();
    newLocashon.avgcookiesperhoure1();
    newLocashon.render();
    console.log(newLocashon);

}



Stores.prototype.total1=function(){
    for (let g = 0; g < houres.length; g++) {
      let totelStores=sum(this.avgcookiesperhoure[g])
    //     for (let index = 0; index < this.name.length; index++) {
            
    //         this.name
    //     }
    }
}