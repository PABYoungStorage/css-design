function bd(e) {
    let im = document.getElementById("body-image")
    let axis = document.getElementById("axis")
    let content = document.getElementById("content")
    let x = e.clientX
    let y = e.clientY
    let wid = document.body.clientWidth
    axis.innerHTML = `X:${x}<br />Y:${y}`;
    im.style.transform = `translate(${x*0.03}px,${y*0.03}px)`;
    let prex = 0
    // if (prex < x) {
    //     prex = x
    //     content.style.transform = `translate(${-x * 0.03}px,${-y * 0.03}px)`;
    // } else {
    //     prex = x
    //     content.style.transform = `translate(${x * 0.03}px,${y * 0.03}px)`;
    // }
}