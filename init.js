disable_rightclick(["background", "category"], ["switcher", "content"], ["li", "button", "body", "h2", "h3", "h4"]);
var url = location.href;
var hash_pos = url.indexOf("#");
var id = "";
if (hash_pos >= 0) {
    var temp_id = url.substring(url.indexOf("#") + 1);
    if (temp_id.length > 0) {
        id = temp_id;
    }
}
if(id==""){
    location.replace("home.html");
}
if(id == "home") {
    document.getElementById("switcher").style.display = "none";
}
hide_all();
document.getElementById(id).style.display = "block";