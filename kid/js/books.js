function book(image, title, author, jenre, pages_num) {
this.image = image;
this.title = title;
this.author = author;
this.jenre = jenre;
this.pages_num = pages_num;
} 
function showBook() {
            document.write("<table id = 'books_all'<tr><td rowspan = '8'><img src= '" + this.image + "'></td></tr>");
            document.write("<tr><td><b>" + this.title + "</b></td></tr>");
            document.write("<tr><td>by: <i>" + this.author + "</i><td></tr>");
            document.write("<tr><td>Jenre: <span style='color:green'>" + this.jenre + "</span></td><tr>");
            document.write("<tr><td><span style='color:red'>" + this.pages_num + "</span> pages.</td></tr></table>");
        }
var Book1 = new book("img/book1.jpg", "Charlotte's Web", "E. B. White", "adventure", 192);
Book1.getBook = showBook;
var Book2 = new book("img/book2.jpg", "A Wrinkle in Time", "Madeleine L'Engle", "mystery", 228);
Book2.getBook = showBook;
var Book3 = new book("img/book3.png", "Wonder", "R. J. Palacio", "mystery", 320);
Book3.getBook = showBook;
var Book4 = new book("img/book4.jpg", "Tales of a Fourth Grade Nothing", "Judy Blume", "humor", 144);
Book4.getBook = showBook;
var Book5 = new book("img/book5.jpg", "Hooples on the Highway", "Stephen Manes", "humor", 127);
Book5.getBook = showBook;
var Book6 = new book("img/book6.jpg", "The Phantom Tollbooth", "Norton Juster ", "humor", 272);
Book6.getBook = showBook;
var Book7 = new book("img/book7.jpg", "Mrs. Frisby and the Rats of NIMH", "Robert C. O'Brien", "adventure", 240);
Book7.getBook = showBook;
var Book8 = new book("img/book8.jpg", "The Magician's Nephew", "C. S. Lewis", "adventure", 208);
Book8.getBook = showBook;
var Book9 = new book("img/book9.jpg", "The Lightning Thief", "Rick Riordan", "mystery", 416);
Book9.getBook = showBook;
