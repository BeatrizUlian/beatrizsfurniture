// // simple change model
// document.getElementById("change-colour").addEventListener("click", function() {
//     document.getElementById("model").src = "./models/DeskRedOak.glb";
// });

// example with showing content
// document.getElementById("change-colour-desk").addEventListener("click", function() {
//     document.getElementById("model-info").style.display = "block";
// });

//example with multiple models
// var myModels = ["./models/desk.glb", "./models/DeskRedOak.glb"]
// var counter = 0;
// document.getElementById("change-colour-desk").addEventListener("click", function() {
//     counter++;
//     if (counter==3) { 
//         counter = 0;
//     }
//     document.getElementById("model-desk").src = myModels[counter];
// });




// //example with multiple models
// var myModels = ["./models/Chair.glb", "./models/ChairGreyLeather.glb", "./models/ChairLightBeigeLeather.glb"]
// var counter = 0;

// document.getElementById("change-colour-chair").addEventListener("click", function() {
//     counter++;
//     if (counter==3) { 
//         counter = 0;
//     }
//     document.getElementById("model-chair").src = myModels[counter];
// });


function modelChange(product, modelArray) {
    var counter = 0;
    var buttons = document.querySelectorAll('.change-colour[data-product="' + product + '"]');
    var model = document.querySelector('.model[data-product="' + product + '"]');

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            counter++;
            if (counter === modelArray.length) {
                counter = 0;
            }
            model.src = modelArray[counter];
        });
    });
}

// Product 1: Rustic Pine Desk
var deskModels = ["./models/desk.glb", "./models/DeskRedOak.glb"];
modelChange("desk", deskModels);

// Product 2: Elegant Chair
var chairModels = ["./models/Chair.glb", "./models/ChairGreyLeather.glb", "./models/ChairLightBeigeLeather.glb"];
modelChange("chair", chairModels);