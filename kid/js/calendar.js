 function update_time() {
    var rightnow = new Date();
    var hours = rightnow.getHours();
    if (hours < 10) {
        var hourstring = "0" + hours.toString();
    } else {
        var hourstring = hours.toString();
    }
    var minutes = rightnow.getMinutes();
    if (minutes < 10) {
        var minutestring = "0" + minutes.toString();
    } else {
        var minutestring = minutes.toString();
    }
    var seconds = rightnow.getSeconds();
        if (seconds < 10) {
        var secondstring = "0" + seconds.toString();
    } else {
        var secondstring = seconds.toString();
    }
    var timestring = hourstring + ":" + minutestring +":" + secondstring;
    var timeplace = document.getElementById("time");
    timeplace.childNodes[0].nodeValue = timestring;
    setTimeout('update_time()', 1000);
}
function changeAlert() {
var new_color = document.getElementById("main");
var rightnow = new Date();
    var hours = rightnow.getHours();
    if (hours >0 && hours<=6) {
        //alert("What are you doing so early?");
        new_color.style.backgroundColor = "#f4efec";
    }
    else if (hours >6 && hours<=12) {
        //alert("Good morning!");
        new_color.style.backgroundColor = "#e9f187";
    }
    else if (hours >12 && hours<=18) {
        //alert("Good aftrenoon!");
        new_color.style.backgroundColor = "#f7d96c";
    }
    else  {
        //alert("Good evening!");
        new_color.style.backgroundColor = "#e6b0aa ";
    }
// Random quote
    var quote1 = new quote("Imagination is more important than knowledge.", "Albert Einstein German American physicist");
    var quote2 = new quote("The true test of intelligence is not how much we know how to do, but how we behave when we don't know what to do.", "John Holt U.S. teacher");
    var quote3 = new quote("It’s not what happens to you, but how you react to it that matters.", "Epictetus");
    var quote4 = new quote("When you know better you do better.", "Maya Angelou");  
    var my_quotes = new Array(quote1, quote2, quote3, quote4);
    var thequote = my_quotes[Math.floor(Math.random()*my_quotes.length)];
    var q = document.getElementById("quote");
    var q_author = document.getElementById("quote_author");
    q.innerHTML = "\""+thequote.text+"\"";
    q_author.innerHTML = ""+thequote.author+"";
}
function quote(text, author) {
    this.text = text;
    this.author = author;
} 
//Calendar
function fill(today) {
var year = today.getFullYear();
    var month = today.getMonth();
    var thedate = today.getDate();
    var MonthDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var TMonth = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December');
if ((month==1) && ((year % 4)==0) && ((year % 100)!=0) || ((year % 400)==0)) 
    { TMonth[1]= 29; }
var theday = 0;
// Start building the table
document.write("<table border=1 align=center>");
document.write("<caption><b>");
// Place a caption with the month name and year
document.write(TMonth[month]);
document.write(" "+year);
document.write("</b></caption>");
// Write the table header row
document.write("<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>");
document.write("<th>Thu</th><th>Fri </th><th>Sat</th></tr><tr>");
// Figure out which day of the week the 1st of the 
// current month belongs to
first_day = new Date(year,month,1)
// Write the first row in the calendar with dates
// Check which date of the month is the first to
// fill it into the appropriate day of the week
for (counter = 0; counter < 7; counter++) { 
// Check the counter against the first day of the month value (0 - 6)
    if (counter >= first_day.getDay() )
    { 
// Start counter for the calendar days
theday=theday+1;

// Check if the current day is in the first week if so, place style text
if (theday == thedate) 
{document.write("<td style='background:purple'>" + theday + "</td>");}
else 
{document.write("<td>" + theday + "</td>");}
} 
else 
// if there is no day yet output an empty cell
{document.write("<td></td>"); }
}
// End row for the first week of the month
document.write("</tr>");
// Loop for the rest fo the weeks in the month 
for (weeks = 0; weeks < 5; weeks++)
{ 
document.write("<tr>"); 
// loop for the days with the remaining weeks
for (week = 0; week < 7; week++)
{
// counter for the day of the month
theday=theday+1
// if the couter = the current date display in style 
if (theday == thedate) 
{document.write("<td style='background:purple; color:white;'>" + theday + "</td>");}
else 
{
// if the counter is higher then than the number of days
// in the month then display a blank cell
if (theday > MonthDays[month]) 
{document.write("<td></td>");}
else
// If it's not the cureent day display the date 
{document.write("<td>" + theday + "</td>"); }
}
}
document.write("</tr>");
}
document.write("</table>");
}


