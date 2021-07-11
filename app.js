'use stict'

let lest=document.getElementById('Seattle');

let Seattle={
    min:23,
    max:65,
    avg:6.3,
    costmersNumber:[],
    avgCookiesPerHour:[],
    houres:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNumber:function(){
        let h1= document.createElement('h1')
        h1.textContent=`seattle`
        lest.appendChild(h1)
     let ulelemetns= document.createElement('ul')
    lest.appendChild(ulelemetns)
        for (let i = 0; i < 14; i++) {
            this.costmersNumber.push(randomCostmers(this.min,this.max))
        let lielement= document.createElement('li')
        lielement.textContent=`${this.houres[i]}:${this.costmersNumber[i]}  cookies  `
        ulelemetns.appendChild(lielement)
    }
    console.log(this.costmersNumber);
    console.log(this.houres);
},

    number:function(){
    for (let j = 0; j < 14; j++) {
        
        this.avgCookiesPerHour.push(cookeis(this.avg,this.costmersNumber[j]))
    }
    console.log(this.avgCookiesPerHour);
},

}




let lest2=document.getElementById('Tokyo');

let Tokyo={
    min:3,
    max:24,
    avg:1.2,
    costmersNumber:[],
    avgCookiesPerHour:[],
    houres:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNumber:function(){
        let h1= document.createElement('h1')
        h1.textContent=`Tokyo`
        lest.appendChild(h1)
     let ulelemetns= document.createElement('ul')
    lest.appendChild(ulelemetns)
        for (let i = 0; i < 14; i++) {
            this.costmersNumber.push(randomCostmers(this.min,this.max))
        let lielement= document.createElement('li')
        lielement.textContent=`${this.houres[i]}:${this.costmersNumber[i]}  cookies  `
        ulelemetns.appendChild(lielement)
    }
    console.log(this.costmersNumber);
    console.log(this.houres);
},

    number:function(){
    for (let j = 0; j < 14; j++) {
        
        this.avgCookiesPerHour.push(cookeis(this.avg,this.costmersNumber[j]))
    }
    console.log(this.avgCookiesPerHour);
},

}
let lest3=document.getElementById('Dubai');

let Dubai={
    min:11,
    max:38,
    avg:3.7,
    costmersNumber:[],
    avgCookiesPerHour:[],
    houres:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNumber:function(){
        let h1= document.createElement('h1')
        h1.textContent=`Dubai`
        lest.appendChild(h1)
     let ulelemetns= document.createElement('ul')
    lest.appendChild(ulelemetns)
        for (let i = 0; i < 14; i++) {
            this.costmersNumber.push(randomCostmers(this.min,this.max))
        let lielement= document.createElement('li')
        lielement.textContent=`${this.houres[i]}:${this.costmersNumber[i]}  cookies  `
        ulelemetns.appendChild(lielement)
    }
    console.log(this.costmersNumber);
    console.log(this.houres);
},

    number:function(){
    for (let j = 0; j < 14; j++) {
        
        this.avgCookiesPerHour.push(cookeis(this.avg,this.costmersNumber[j]))
    }
    console.log(this.avgCookiesPerHour);
},

}


let lest4=document.getElementById('Paris');

let Paris={
    min:20,
    max:38,
    avg:2.3,
    costmersNumber:[],
    avgCookiesPerHour:[],
    houres:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNumber:function(){
        let h1= document.createElement('h1')
        h1.textContent=`Paris`
        lest.appendChild(h1)
     let ulelemetns= document.createElement('ul')
    lest.appendChild(ulelemetns)
        for (let i = 0; i < 14; i++) {
            this.costmersNumber.push(randomCostmers(this.min,this.max))
        let lielement= document.createElement('li')
        lielement.textContent=`${this.houres[i]}:${this.costmersNumber[i]}  cookies  `
        ulelemetns.appendChild(lielement)
    }
    console.log(this.costmersNumber);
    console.log(this.houres);
},

    number:function(){
    for (let j = 0; j < 14; j++) {
        
        this.avgCookiesPerHour.push(cookeis(this.avg,this.costmersNumber[j]))
    }
    console.log(this.avgCookiesPerHour);
},

}



let lest5=document.getElementById('Lima');

let Lima={
    min:2,
    max:16,
    avg:4.6,
    costmersNumber:[],
    avgCookiesPerHour:[],
    houres:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    
    randomNumber:function(){
        let h1= document.createElement('h1')
        h1.textContent=`Lima`
        lest.appendChild(h1)
     let ulelemetns= document.createElement('ul')
    lest.appendChild(ulelemetns)
        for (let i = 0; i < 14; i++) {
            this.costmersNumber.push(randomCostmers(this.min,this.max))
        let lielement= document.createElement('li')
        lielement.textContent=`${this.houres[i]}:${this.costmersNumber[i]}  cookies  `
        ulelemetns.appendChild(lielement)
    }
    console.log(this.costmersNumber);
    console.log(this.houres);
},

    number:function(){
    for (let j = 0; j < 14; j++) {
        
        this.avgCookiesPerHour.push(cookeis(this.avg,this.costmersNumber[j]))
    }
    console.log(this.avgCookiesPerHour);
},

}








    
    


function randomCostmers(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  Seattle.randomNumber();
  Tokyo.randomNumber();
  Dubai.randomNumber();
  Paris.randomNumber();
  Lima.randomNumber();

function cookeis(x,y) {
    let value=x*y;
    value=Math.floor(value);
    return value

  }

  Seattle.number();
  Tokyo.number();
  Dubai.number();
  Paris.number();
  Lima.number();

//  lest=document.getElementById('Seattle');