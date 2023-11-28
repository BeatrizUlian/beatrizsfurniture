// // simple change model
// document.getElementById("change-colour").addEventListener("click", function() {
//     document.getElementById("model").src = "./models/DeskRedOak.glb";
// });

// example with showing content
document.getElementById("change-colour-desk").addEventListener("click", function() {
    document.getElementById("model-info").style.display = "block";
});

//example with multiple models
var myModels = ["./models/desk.glb", "./models/DeskRedOak.glb"]
var counter = 0;
document.getElementById("change-colour-desk").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model-desk").src = myModels[counter];
});




//example with multiple models
var myModels = ["./models/Chair.glb", "./models/ChairGreyLeather.glb", "./models/ChairLightBeigeLeather.glb"]
var counter = 0;
document.getElementById("change-colour-chair").addEventListener("click", function() {
    counter++;
    if (counter==3) { 
        counter = 0;
    }
    document.getElementById("model-chair").src = myModels[counter];
});
