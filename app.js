 
     let btn =document.getElementById('btn');
     let output=document.getElementById('output');

     let quote=[
        ' “The purpose of our lives is to be happy.” — Dalai Lama',
        '“Life is what happens when you’re busy making other plans.” — John Lennon',
        ' “Get busy living or get busy dying.” — Stephen King'
        
     ];
     //console.log(quote);
     btn.addEventListener('click',function(){
         var randomquote=quote[Math.floor(Math.random()* quote.length)];
         output.innerHTML=randomquote ;
     })