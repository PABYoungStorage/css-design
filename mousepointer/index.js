
function move(event) {
    var pointer = document.getElementById("pointer")
    pointer.style.top = event.clientY+"px"
    pointer.style.left = event.clientX+"px"
}