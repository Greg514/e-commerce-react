$(document).ready(function(){


    // store some elements with variables

    const $page = $('.page');
   const $start = $('.start');

// hiding the elements before the user click the start button
   $page.hide();

// click on the start button to start/show the quiz with  a good luck message from the alert box

   $start.on('click',function(){
       alert('Good luck')
       $page.show()
   });



//    buttons that show if the answer is correct

 const $right = $('.right');
$right.on('click',function(){

    const $answer1 =$('.answer1')
$answer1.text('swish,one point');
})

const $right2 = $('.right2');
$right2.on('click',function(){

    const $answer2 =$('.answer2')
$answer2.text('swish,one point');
})

const $right3 = $('.right3');
$right3.on('click',function(){

    const $answer3 =$('.answer3')
$answer3.text('swish, one point');
})

//  buttons  that show if the answer is wrong

const $wrong = $('.wrong');
$wrong.on('click',function(){

    const $answer1 =$('.answer1')
$answer1.text('wrong ,please check again');
})

const $wrong2 = $('.wrong2');
$wrong2.on('click',function(){

    const $answer2 =$('.answer2')
$answer2.text('wrong , please check again');
})

const $wrong3 = $('.wrong3');
$wrong3.on('click',function(){

    const $answer3 =$('.answer3')
$answer3.text('wrong , please try again');
})






















})














