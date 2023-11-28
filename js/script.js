
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
        infoElement.style.display = "block";
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
