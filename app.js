let cheese = 0;
let clickBonus = 1;
let autoBonus = 0;

let clickUpgrades = {
  pickaxes: {
    price: 20,
    quantity: 0,
    multiplier: 1,
    type: "click"
  },
  megaaxes: {
    price: 100,
    quantity: 0,
    multiplier: 5,
    type: "click"
  },
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20,
    type: "auto"
  },
  minors: {
    price: 150,
    quantity: 0,
    multiplier: 4,
    type: "auto"
  }
};



function mine() {
  cheese+= clickBonus
  document.getElementById("cheese").innerText = cheese.toString()

}

function clickUpgrade(item) {
  let elm = clickUpgrades[item];

  if (cheese < elm.price) { 
    return 
  }
    cheese -= elm.price 
    elm.quantity++
    elm.price *= 2

    document.getElementById(item).innerText =  item + " for " + (elm.price).toString()
    document.getElementById(item + "-count").innerText = (elm.quantity).toString()
    document.getElementById(item + "-bonus").innerText = "(+" + (elm.quantity * elm.multiplier).toString() + ")"
    document.getElementById("cheese").innerText = cheese.toString()

    if (elm.type == "click") {
      clickBonus += elm.multiplier
    } else {
      autoBonus +=elm.multiplier
    }
  
}

function collectAutoUpgrades() {
  cheese += autoBonus
  document.getElementById("cheese").innerText = cheese.toString()
 
}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

startInterval()