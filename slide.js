function hide_all() {
    var sections = document.getElementsByClassName("section");
    for (let index = 0; index < sections.length; index++) {
        const element = sections.item(index);
        element.style.display = "none";
    }
}
function switch_to(slide_id) {
    location.href=slide_id+".html";
}