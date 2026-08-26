const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
button.addEventListener("click", function() {
    if (this.innerHTML.trim() === "Add") {
        this.innerHTML = "Added \u2713";
        this.classList.add("active");
    } else {
        this.innerHTML ="Add"; 
    this.classList.remove("active");
    }
});
});