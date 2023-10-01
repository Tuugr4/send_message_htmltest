document.getElementById("ayar-icon").addEventListener("click", function() {
    var menu = document.getElementById("ayar-menu");
    var text = document.getElementById("text");
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        text.classList.add("hidden");
    } else {
        menu.style.display = "block";
        text.classList.remove("hidden");
    }
});
document.getElementById("text-color").addEventListener("input", function() {
    var textColor = this.value;
    document.getElementById("asdd").style.color = textColor;
});     
document.getElementById("text-size").addEventListener("input", function() {
    var textSize = this.value + "px";
    document.getElementById("asdd").style.fontSize = textSize;
});
document.getElementById("text-color").addEventListener("input", function() {
    var textColor = this.value;
    document.getElementById("text").style.color = textColor;
});     
document.getElementById("text-size").addEventListener("input", function() {
    var textSize = this.value + "px";
    document.getElementById("text").style.fontSize = textSize;
});






function mesj() {
    var mesaj = document.getElementById("asd1").value;
    if (mesaj.trim() === "") {
        alert("Lütfen bir mesaj girin!");
        return;
    }
    var d = new Date();
    var saat = d.getHours();
    var dakika = d.getMinutes();
    document.getElementById("asdd").innerHTML +=
        "<div class='gidenMesaj'><img src='a1.jpg'>" + mesaj + "<span id='tarih'>" + saat + ":" + dakika + "</span></div>";
    document.getElementById("asd1").value = "";
  }
  