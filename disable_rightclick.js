function disable_rightclick(classes,ids,elements){
    ids.forEach(element_id => {
        const element=document.getElementById(element_id);
        element.addEventListener("contextmenu",(ev)=>{ev.preventDefault();});
        element.style.userSelect="none";
    });
    classes.forEach(class_ => {
        const class_elements=document.getElementsByClassName(class_);
        for (let index = 0; index < class_elements.length; index++) {
            const element = class_elements[index];
            element.style.userSelect="none";
            element.addEventListener("contextmenu",(ev)=>{ev.preventDefault();});
        }
    });
    elements.forEach(element_category => {
        const element_set=document.querySelectorAll(element_category);
        for (let index = 0; index < element_set.length; index++) {
            const element = element_set[index];
            element.style.userSelect="none";
            element.addEventListener("contextmenu",(ev)=>{ev.preventDefault();});
        }
    });
}