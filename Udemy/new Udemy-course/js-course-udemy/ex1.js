let firstName = 'gregory';
let lastName = 'jean-louis';

let yearOfBirth = 1991;
let currentYear = 2022;

let age = currentYear-yearOfBirth;
let message = 'hi my name is  '+   firstName  +  lastName + ' and im ' + age.toString() +" years old  and im learning javascript";
console.log(message)  


document.getElementById('student_message').innerHTML= message;

let num1 = parseInt(document.getElementById("num_1").innerHTML);

let num2 = parseInt(document.getElementById("num_2").innerHTML) ;


let average = (num1 + num2) / 2;
average.toFixed(2);
let results = document.getElementById('result').innerHTML= average;


let phone1 = "988866552";
let phone2 = "99087612366";
let phone3 = 876543123;
phone3.toString()

let allphones = [ phone1,phone2,phone3.toString()];


if( allphones.length = 9){
    console.log('this is fine')
}



console.log(32 ** 6)



let url1 = "https://"+ document.getElementById('url_1').innerHTML
document.getElementById('url_2').innerHTML= url1;

let url2 = ( document.getElementById('url_3').innerHTML).replace('https:://')
document.getElementById('url_4').innerHTML= url2;
