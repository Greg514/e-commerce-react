function celciusToFarenheit(celcius){
    let farenheith = (9 * celcius / 5 ) +32;
    return farenheith;
}

let celcius1 = parseFloat(document.getElementById('celsius_1').innerHTML);
document.getElementById('fahr_1').innerHTML= celciusToFarenheit(celcius1)

let celcius2 = parseFloat(document.getElementById('celsius_2').innerHTML);
document.getElementById('fahr_2').innerHTML = celciusToFarenheit(celcius2)

let celcius3 = parseFloat(document.getElementById('celsius_3').innerHTML);
document.getElementById('fahr_3').innerHTML = celciusToFarenheit(celcius3)

// exercise number 2 

let classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];

document.getElementById('best_students').innerHTML = classification.slice(-3)

// exercise 3

let course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4,
    'total_reviews': function(){
        let total = this['5 star_reviews'] + this['4 star_reviews']  + this['3 star_reviews'] + this['2 star_reviews'] + this['1 star_reviews'];
        return total;
    }
}

document.getElementById('course_title').innerHTML =  course.title;

document.getElementById('main_category').innerHTML= course.categories[0];

let percentage = (course['5_stars_reviews'] / course.total_reviews() *100);

document.getElementById('reviews_5_stars').innerHTML = percentage

