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
// Function to set up color change and info display for a product
function setupProductInteraction(product, modelArray) {
    var counter = 0;
    var buttons = document.querySelectorAll('.card[data-product="' + product + '"] .change-colour');
    var model = document.querySelector('.card[data-product="' + product + '"] .model');
    var infoElement = document.getElementById(product + '-info');

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log('Change color button clicked for ' + product);
            counter++;
            if (counter === modelArray.length) {
                counter = 0;
            }
            model.src = modelArray[counter];
        });
    });

    function toggleProductInfo() {
        console.log('Info button clicked for ' + product);
        infoElement.classList.toggle('visible');
    }

    var infoButton = document.querySelector('.card[data-product="' + product + '"] .model-info');
    infoButton.addEventListener("click", toggleProductInfo);
}

// Product 1: Rustic Pine Desk
var deskModels = ["./models/desk.glb", "./models/DeskRedOak.glb"];
setupProductInteraction("desk", deskModels);

// Product 2: Elegant Chair
var chairModels = ["./models/Chair.glb", "./models/ChairGreyLeather.glb", "./models/ChairLightBeigeLeather.glb"];
setupProductInteraction("chair", chairModels);


// Product 3: Beanbag Chair
var beanbagModels = ["./models/BeanBagChair.glb", "./models/ChairBeanBagNaturalBuffaloLeather.glb"];
setupProductInteraction("beanBag", beanbagModels);
