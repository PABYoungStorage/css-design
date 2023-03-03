function formdata() {
    var username = document.getElementById("username")
    var passwd = document.getElementById("password")
    var submit = document.getElementById("submit")
    var disallow = ["`","!","@","#","%"]

    let uname = (username.value.replace( /[^a-zA-Z0-9 ]/gm, ''))
    let pwd = (passwd.value.replace( /[^a-zA-Z0-9 ]/gm, ''))

    if (uname.length >= 8 && pwd.length >= 8) {
        if (uname === pwd) {
            console.log("username and passwd equal")
        } else {
            console.log("username and passwd verify")
        }
    } else {
        console.log("username or passwd not verify")
    }
}

function eventcheck(event){
    console.log(event)
}