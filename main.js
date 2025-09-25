const inputParameters = document.querySelectorAll('.input');

inputParameters.forEach(function(input) {
    input.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
    });
});

