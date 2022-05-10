

function new_bookmark(links){
    console.log(links)
    var tag = document.createElement("a");
    var element = document.getElementById("b-container")
    var bookmark_name = window.prompt("Title for bookmark: ");
    var text = document.createTextNode(bookmark_name)
    tag.appendChild(text)
    tag.href = links;
    element.appendChild(tag)


}
function new_bookmark2(links, title){
    console.log(links)
    var tag = document.createElement("a");
    var element = document.getElementById("b-container")
    //var bookmark_name = window.prompt("Title for bookmark: ");
    var text = document.createTextNode(title.textContent);
    tag.appendChild(text)
    tag.href = title.href;
    console.log("Title: ", title)
    console.log(title.href)
    element.appendChild(tag)


}

function buttonClickListener(event){
    console.log("The bookmark Page Button was clicked")
    console.log("Saving page... ")
    var links = document.URL;
    console.log(links)

    new_bookmark(links)
}
var buttonClickListener2 = function buttonClickListener2(bookmark_buttonx){
    console.log("The bookmark Page Button was clicked")
    console.log("Saving page... ")
    var links = document.URL;
    console.log(links)

    new_bookmark2(links, bookmark_buttonx)
}

var bookmark_button = document.getElementById('bookmark')
var bookmark_button1 = document.getElementById('bookmark1')
var bookmark_button2 = document.getElementById('bookmark2')
var bookmark_button3 = document.getElementById('bookmark3')
var bookmark_button4 = document.getElementById('bookmark4')
var bookmark_button5 = document.getElementById('bookmark5')
bookmark_button.addEventListener('click', buttonClickListener)
bookmark_button1.addEventListener('click', function(){
    buttonClickListener2(bookmark_button1)
}, false);
bookmark_button2.addEventListener('click', function(){
    buttonClickListener2(bookmark_button2)
}, false);
bookmark_button3.addEventListener('click', function(){
    buttonClickListener2(bookmark_button3)
}, false);
bookmark_button4.addEventListener('click', function(){
    buttonClickListener2(bookmark_button4)
}, false);
bookmark_button5.addEventListener('click', function(){
    buttonClickListener2(bookmark_button5)
}, false);