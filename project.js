
// =======нахажу через айди и сразу с классами

let oneBlock = document.querySelectorAll('#one .click')
let twoBlock = document.querySelectorAll('#two .click')

// находим инпуты и их присваеваем на переменую 

let oneValue = document.querySelector('.oneValue')
let twoValue = document.querySelector('.twoValue')

// ======находим (p)

let strOne = document.querySelector('.str1')//блок для актального курса пример..1 руб = 75 долларов
let strTwo = document.querySelector('.str2')


// ======вещаю событие на DIV

let a = "RUB";//создаю переменую пустую
let b = "USD";//создаю перем пусую 



// цикл для первого блока вашаю клик
 
 for(let i = 0; i < oneBlock.length; i++ ){
    oneBlock[i].addEventListener('click',() =>{
        for(let j = 0; j < oneBlock.length; j++ )  {
            oneBlock[j].style.background = "white"
            oneBlock[j].style.color = ""
        }      

        oneBlock[i].style.background = "#833AE0"
        oneBlock[i].style.color = "white"
        a = oneBlock[i].innerHTML 
        
        if(oneBlock[i].classList.contains('selection')){//проверка что элемент которые мы нажали что это селект . чтобы попросить значение
            a = oneBlock[i].value 
        }

 // ======запрос на сервер

    fetch(`https://api.exchangerate.host/convert?from=${a}&to=${b}&amount=${oneValue.value}`)
    .then((response) => {
      
      return response.json(); 
      
    })
    .then((data) => {
      
      twoValue.value = data.result
      

      let currensNov = data.info.rate
      
      strOne.innerHTML = `1 ${a} = ${currensNov } ${b}`
      strTwo.innerHTML = `1 ${b} = ${oneValue.value / currensNov } ${a}`
      
    }) 
     })

 }

// цикл для второго блока вешаю клик


for(let i = 0; i < twoBlock.length; i++ ){
  twoBlock[i].addEventListener('click',() =>{
    for(let j = 0; j < twoBlock.length; j++ )  {
      twoBlock[j].style.background = "white"
      twoBlock[j].style.color = ""
    }      

    twoBlock[i].style.background = "#833AE0"
    twoBlock[i].style.color = "white"
    b = twoBlock[i].innerHTML 
    
    
    if(twoBlock[i].classList.contains('selection')){//проверка что элемент которые мы нажали что это селект . чтобы попросить значение
      b = twoBlock[i].value 
      }
  
    // ======запрос на сервер

    fetch(`https://api.exchangerate.host/convert?from=${a}&to=${b}&amount=${oneValue.value}`)
        .then((response) => {
        
          return response.json(); 
        })
        .then((data) => {
            twoValue.value = data.result
            c
            let currensNov = data.info.rate//тут присваеваю актуальные курс
            
            strOne.innerHTML = `1 ${a} = ${currensNov } ${b}`
            strTwo.innerHTML = `1 ${b} = ${oneValue.value / currensNov } ${a}`
            
        })
  })

}



// ======= ПОВЕСИТЬ СОБЫТИЕ КЕЙАПП=====//

      oneValue.addEventListener('keyup', logKey);

      function logKey() {
       
        fetch(`https://api.exchangerate.host/convert?from=${a}&to=${b}&amount=${oneValue.value}`)

        .then((response) => {
          return response.json(); 
        })
        .then((data) => {
          twoValue.value = data.result
          
            // console.log(twoValue.value)

            let currensNov = data.info.rate//тут присваеваю актуальные курс
            
            strOne.innerHTML = `1 ${a} = ${currensNov } ${b}`
            strTwo.innerHTML = `1 ${b} = ${oneValue.value / currensNov } ${a}`
        })
        
      }
      logKey()

      

      



      // ========Кнопка для обмена данных 
          
  let arrow = document.querySelector('.arrow')
  arrow.addEventListener('click',()=>{

      let c  = oneValue.value
      
      oneValue.value = twoValue.value

      twoValue.value = c


      let d = oneBlock.value
      

      oneBlock.value = twoBlock.value

      twoBlock.value = d
      console.log(d)

      


  })
      

// fetch(`https://api.exchangerate.host/latest?base=RUB`)
//       .then((res)=>{
//         console.log(res)
//       })
//       .then((data)=>{
//         console.log(data)
//       })


// ======test


// let arr = ['EUR',
//     'CHF',
//     'NOK',
//     'CAD',
//     'RUB',
//     'GBP',
//     'MXN',
//     'CNY',
//     'ISK',
//     'KRW',
//     'HKD',
//     'CZK',
//     'BGN',
//     'BRL',
//     'USD',
//    'IDR',
//     'SGD',
//     'PHP',
//     'RON',
//     'HUF',
//     'ILS',
//     'THB',
//     'SEK',
//     'NZD',
//     'AUD',
//     'DKK',
//     'HRK',
//     'PLN',
//     'TRY',
//     'INR',
//     'MYR',
//     'ZAR',
//     'JPY'
    
    
    
//     ]


// let test = document.querySelector(".testing")
// let testone = document.createElement('option')
// test.append(testone)



// arr.forEach(element => {
   
    
//     let testone = document.createElement('option')
//     testone.innerText = element
//     test.append(testone)
    
// });

let mama = document.querySelector('.mama')
mama.addEventListener('click',()=>{
  mama.style.background = 'green'
  mama.style.border = '2px solid  yellow'
  mama.innerText = 'ты лучшая '
  mama.style.color = 'white'
})