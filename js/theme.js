var light = document.getElementById("light")
var dark = document.getElementById("dark")

function Theme() {
    var body = document.body.getAttribute("theme")
    if (body === "light") {
        dark.style.display = "block"
        light.style.display = "none"
        document.body.setAttribute("theme","dark")
    }
    else if (body === "dark") {
        dark.style.display = "none"
        light.style.display = "block"
        document.body.setAttribute("theme","light")
    }
}

Theme() 