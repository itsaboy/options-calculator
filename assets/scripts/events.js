//////// Event Listeners ////////

const clearForm = () => {
    sectionTwo.style.animationName = "slideLeft";
    inputForm.reset();
    resultOutput.innerText = "";
    percentOutput.innerText = "";
    setTimeout(resetAnimation, 500);
}

const resetAnimation = () => {
    sectionTwo.style.animationName = "none";
}

calculateButton.addEventListener("click", calculateBreakeven);
clearButton.addEventListener("click", clearForm);