function nameFun(){
    var nameBox = document.querySelector(".main");
    var addName = document.querySelector("#add-name");
    var addList = document.querySelector(".add-main");
    

}

function listFun(){
    var ipVal = document.querySelector("#add-text").value
    if( ipVal==""){
        alert("List Input cannot be blank")
    }
    else{

    var colors = [
        '#FF4B4B',
        '#FF4B7C',
        '#D34BFF',
        '#944BFF',
        '#4B6CFF',
        '#4BCAFF',
        '#4BFFA4',
        '#5DFF4B',
        '#FFFF4B',
        '#FFBA4B',
         ];
    
    var random_color = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector("#list").innerHTML +=
    `<div class="list-main" style="color:red;display:inline-block;margin-left:5px;">
    <button style="text-align:center;background-color:${random_color};color:white;height:auto;text-align:center;
    border-radius:15px;padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:5px;border:none;outline:none;" id="list-name">
    ${document.querySelector("#add-text").value}
    </button></div>`

    document.querySelector("#add-text").value ="";

  }
}







