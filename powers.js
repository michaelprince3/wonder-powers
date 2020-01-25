const activateFlight = document.getElementById("flight");
const flightHandlerFunction = (param1, param2) => {
  activateFlight.classList.replace(param1, param2);
};

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("disabled", "enabled");
  });

const activateMind = document.getElementById("mindreading");
const mindHandlerFunction = (param1, param2) => {
  activateMind.classList.replace(param1, param2);
};

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindHandlerFunction("disabled", "enabled");
  });

const activateXray = document.getElementById("xray");
const xrayHandlerFunction = (param1, param2) => {
  activateXray.classList.replace(param1, param2);
};

document.querySelector("#activate-xray").addEventListener("click", function() {
  xrayHandlerFunction("disabled", "enabled");
});

document.querySelector("#activate-all").addEventListener("click", function() {
  flightHandlerFunction("disabled", "enabled");
  mindHandlerFunction("disabled", "enabled");
  xrayHandlerFunction("disabled", "enabled");
});

document.querySelector("#deactivate-all").addEventListener("click", function() {
  flightHandlerFunction("enabled", "disabled");
  mindHandlerFunction("enabled", "disabled");
  xrayHandlerFunction("enabled", "disabled");
});
