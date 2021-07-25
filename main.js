ml_array = ["Chesse Pizza", 
"Veg Supreme Pizza", 
"Paneer Tikka Pizza", 
"Sliced Chicken Pizza", 
"Pepperoni Pizza"];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>"
    ml_array.sort();
    for(var i=0;i<ml_array.length;i++) {
        htmldata=htmldata + '<li>' + ml_array[i] + '<li>'
    }
    htmldata=htmldata + '</ol>'
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    ml_array.push(item);
    ml_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0;i<ml_array.length;i++) {
        htmldata = htmldata + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + ml_array[i] + '</div>'
    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addmenu").innerHTML = htmldata;
}