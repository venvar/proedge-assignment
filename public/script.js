document.getElementById("form").addEventListener("submit", disable);

function disable() {
    document.getElementById('msg').innerHTML = "Please wait.. this might take a while(depends on the time taken by external API)."
    document.getElementById('submit').style.cursor = "not-allowed";
    document.getElementById('submit').value = "Please Wait...";
    document.getElementById('submit').disabled = true;
    document.getElementById("form").submit();


}