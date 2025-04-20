const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function(){
//     body.style.backgroundColor = '#c0392b';
// });

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function(){
//     body.style.backgroundColor = '#009432';
// });

// const blueColor = document.querySelector('.blue');
//     blueColor.addEventListener('click', function(){
//     body.style.backgroundColor =  '#0652DD';
// });

// const pinkColor = document.querySelector('.pink');
// pinkColor.addEventListener('click', function(){
//     body.style.backgroundColor = '#FC427B';
// });

// button.forEach(function(value){
// value.addEventListener('click', function(){
//     let className = this.classList.value;
//     body.style.backgroundColor = className;
//     console.log(className);
// });
// });

button.forEach(function(value){
    value.addEventListener('click', function(){
        let className = this.classList[0];
        let color = '';
        if(className ==='red'){
           color = '#c0392b';
        }
        if(className ==='green'){
            color = '#009432';
         }
         if(className ==='blue'){
            color =  '#0652DD';
         }
         if(className === 'pink'){
            color = '#FC427B';
         }
         if(className ==='purple'){
            color = '#6F1E51';
         }
        body.style.backgroundColor = color;
        // console.log(className);
        // console.log(color);
    });
    });