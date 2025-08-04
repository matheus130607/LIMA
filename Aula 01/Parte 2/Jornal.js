function sobre(sesao) {
    document.getElementById('msg1').classList.add("hidden");
    document.getElementById('msg2').classList.add("hidden");
    document.getElementById('msg3').classList.add("hidden");
    document.getElementById('msg4').classList.add("hidden");

    document.getElementById(sesao).classList.remove("hidden");
}

