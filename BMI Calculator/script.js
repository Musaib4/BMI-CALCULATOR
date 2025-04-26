const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmi = weight/((height*height)/10000).toFixed(2);
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =`please give a valid height ${height}`;
    }
    else if(weight === '' || height < 0 || isNaN(weight)){
        results.innerHTML =`please give a valid weight ${weight}`;
    }
    else if (bmi < 18.6){
        results.innerHTML = `you are under weight ,your bmi is${bmi}`
    //results.innerHTML = `<span>${bmi}</span>`;
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        results.innerHTML = `you weight is normal, your bmi is ${bmi}`
    }
    else if( bmi >= 24.9){
        results.innerHTML = `you are over weight, your bmi is ${bmi}`
    }
   
});
