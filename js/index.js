//functionality for back and next button in the image slider

const slidebtn = document.getElementById("slide");
const backbtn = document.getElementById("backBtn");
const nextbtn = document.getElementById("nextBtn");

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//Array that will grab the list of images to place in the gallery
const sliderImg = new Array(
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",

);

//Array images order 0-1, therefore i = 0
let i = 0;

//function for next button. Starts from 0 the increments by 1 (i++)
nextbtn.onclick = function() {
   if (i < 3){
    slide.src = sliderImg[i+1];
    
    i++;

   } 
}

//function for back button. Inverse of the next button i--
backbtn.onclick = function() {
    if (i > 0){
     slide.src = sliderImg[i+1];
     
     i--;
 
    } 
 }

 /*Currency COnverter*/
 /*Declaring variables*/

 const currency1 = document.getElementById("currency-1")
 const currency2 = document.getElementById("currency-2")
 const amount1 = document.getElementById('amount-one')
 const amount2 = document.getElementById('amount-two')
 const Convrate = document.getElementById('rate')
 const swapbutton = document.getElementById('swap')

 /*Define an change event listeners. */
 currency1.addEventListener('change', calculate);
 currency2.addEventListener('change', calculate);
 amount1.addEventListener('input', calculate );
 amount2.addEventListener('input', calculate)

  //fetch currency rates from exchangerate-api
  function calculate(){
    const currency_1 = currency1.value;
    const currency_2 = currency2.value; 
      //Extract rates for the currency therefore I will add ${cuurency_1}, which will allow to fetch currency depending on whichever value I select
      fetch(`https://v6.exchangerate-api.com/v6/c50c0dd18c871c23de59c4e4/latest/${currency_1}`)
      .then(response => response.json())
      .then((data) => {
            //  console.log(data);
        
      //Conversion rate is triggered when the user clicks the swap button
      const rate = data.conversion_rates[currency_2];
      Convrate.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;
      amount2.value = (amount1.value * rate).toFixed(2);

  });
}

 //An event listener button that will allow the functionality of swapping currencies. Eg. GBP to USD --> USD to GBP
 swap.addEventListener('click', () => {
    const tempVar = currency1.value;
    currency1.value = currency2.value;
    currency2.value = tempVar;
    calculate();

 })
