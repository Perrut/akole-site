// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

(() => {
  const footerFix = document.getElementById("footerFix");
  const footer = document.getElementById("pageFooter");
  const footerFixHeight = footer.offsetHeight + 24;
  footerFix.style.minHeight = footerFixHeight + "px";
})();
