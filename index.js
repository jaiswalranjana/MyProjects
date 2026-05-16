let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".buttons");
let Input = "";
buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let value = this.innerText;

        if (value === "AC") {
            Input = "";
            display.value = "";
        }

        else if (value === "=") {
            try {
                Input = eval(Input);
                display.value = Input;
            } catch {
                display.value = "Error";
            }
        }

        else {
            Input += value;
            display.value = Input;
        }

    });
});