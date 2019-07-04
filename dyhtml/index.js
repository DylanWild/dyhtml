
document.getElementById("myBtn").addEventListener("click", function () {
    
    let times = document.getElementById("nobox").value
   
    
    for (i = 0; i < times; i++) {
        let wrapper = document.getElementById("wrapper");
        let box = document.createElement("div");
        box.id = "box";
        let randomNum = Math.floor(Math.random() * 602) + 1;
        let pic = document.getElementById("picbox").value
        // let text = document.createTextNode("JS");
        let img = document.createElement("img");
        img.src = "https://source.unsplash.com/random/500x500/?"+pic+ "?sig=" +randomNum
        img.style.height = "100%";
        img.style.width = "108.1%"
        
        box.appendChild(img);

        wrapper.appendChild(box);
    }
    
})
document.getElementById("reset").addEventListener("click", function () {
location.reload(true)
})