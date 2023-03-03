window.addEventListener("scroll", () => {
  var st = document.getElementById("sti");
  var ser = document.getElementById("serv");
  var hm = document.getElementById("hm");
  let pg = parseInt(window.pageYOffset);
  st.innerHTML = pg;
  trans(ser,pg,250)
  trans(hm,pg,150)
});

function trans(s,pg,value){
    if(pg > value) {
        s.style.transform=`translate(50px)`
        s.style.opacity=`1`
      }else{
        s.style.transform=`translate(0px)`
        s.style.opacity=`0`
      }
}