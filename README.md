# AFRICAN CURRENCY CONVERTER APP

This is a single page application that converts currencies of African nations. Other currencies included include Euro, CAD, USD and GBP. The app allows users to convert currencies and get real time data. 

**Technologies Used**
1. HTML
2. CSS
3. JAVASCRIPT

**Public API**
- [Exchange-Rates API](https://www.exchangerate-api.com/)

**Sample Code**
- JS
```
{
   function calculate(){
    const currency_1 = currency1.value;
    const currency_2 = currency2.value; 
      fetch(`https://v6.exchangerate-api.com/v6/c50c0dd18c871c23de59c4e4/latest/${currency_1}`)
      .then(response => response.json())
      .then((data) => {
              const rate = data.conversion_rates[currency_2];
      Convrate.innerText = `1 ${currency_1} = ${rate} ${currency_2}`;
      amount2.value = (amount1.value * rate).toFixed(2);

  });
}

}

```
- CSS
```
{
    @media only screen and (max-width: 600px){
    .logo{
        margin: 30px auto;
    }
    .left-col, .right-col{
        flex-basis: 100%;
    }
    .content{
        padding: 4rem 2rem;
    
    }
    .content h1{
        font-size: 34px;
        line-height: 38px;
    }
    .slider{
        height: auto;

    }
    .slider-content{
        height: auto;
    }
    .currency input{
        width: 200px
    }
}

}
```

**IMAGE DEMO**
![](images/Screenshot%20from%202022-09-02%2003-16-11.png)
![](images/Screenshot%20from%202022-09-02%2003-16-54.png)

**LINK**

**Future Implementation**
- Turn this practice into a react native application with more features such as Forex Market analysis and Binary Optioons Trading Signals. 


## Developer
- [Timothy Mureihti](https://github.com/timothymureithi/)