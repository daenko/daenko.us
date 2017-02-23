var my_image = document.getElementById("main_image");

var my_images = ["img/1_1.jpg", "img/4_1.jpg","img/2.jpg", "img/1_1.jpg"];
var image_index = 0;
function slideshow() {
    my_image.setAttribute("src", my_images[image_index]);
    image_name.innerHTML = "This is image " + image_index;
    image_index++;
    if (image_index >= my_images.length) {
        image_index = 0;
    }

}
var stopImage = setInterval(slideshow, 3000); 
my_image.onclick = function () {
    clearInterval(stopImage);  
}

/**function show() {
    document.getElementById("comments").innerHTML = "Very nice!-2";
    }

**/

//function say_hi() {
 //   alert("hi! welcome to my site!");
//}
//setTimeout(say_hi, 3000);

