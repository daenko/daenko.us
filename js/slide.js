var my_image = document.getElementById("main_image");
var my_link = document.getElementById("link");
var image_name = document.getElementById("class_name");
var image_text = document.getElementById("text");
var my_images = ["img/web_d.png", "img/web-design.png","img/web_photoshop.png", "img/web_dev1.png"];
var my_links = ["posts.html", "web-design.html","photoshop.html", "iOs.html"];
var images_name = ["Web Development", "Web Design", "Photoshop", "iOS Development"];
var images_text = ["It was online class interested by its discussions. We had to participate in class discussions, write comments to others posts, sharing interesting facts. I'll show you 12 topics, each for 1 week.", "Each week we had to write a text on the given topic: grid, color, shape, image, etc.", "This class was very interesting and useful. We were practicing different image editing tools.", "This was the most complicated class. The useful thing I knew was team project. It was very interesting experience, how to cooperate with your team mates to develop the project. I'll show your he screenshots of our game. "];

var image_index = 0;
image_name.innerHTML = images_name[image_index];
image_text.innerHTML = images_text[image_index]; 
var last_index = my_images.length - 1;
function slider_next() {
    image_index++;
 if (image_index > last_index) {
        image_index = 0;
}
    my_image.setAttribute("src", my_images[image_index]);
    my_link.setAttribute("href", my_links[image_index]);
    image_name.innerHTML = images_name[image_index];
    image_text.innerHTML = images_text[image_index];    
}
function slider_previous() {
 image_index--;
   if (image_index < 0) {
        image_index = last_index
    }  
    my_image.setAttribute("src", my_images[image_index]);
    my_link.setAttribute("href", my_links[image_index]);
    image_name.innerHTML = images_name[image_index]; 
    image_text.innerHTML = images_text[image_index];       
}
//slider

