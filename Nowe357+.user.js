// ==UserScript==
// @name         Nowe357+
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Nowe357+
// @author       adrianj
// @match        https://www2.radio357.pl/*
// @updateURL    https://github.com/adrianj93/Nowe357-/raw/main/Nowe357%2B.user.js
// @downloadURL  https://github.com/adrianj93/Nowe357-/raw/main/Nowe357%2B.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=radio357.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var clicked = false

    var button = document.createElement("Button");
    button.innerHTML = "Rozwiń";
    button.style = "width: 70px; margin: 0 10px 0 0; border-radius: 12px; font-size: 12px; border: 1px solid #FF650F; color: #FF650F; background-color: #fff;";

    function ButtonClickAction (zEvent) {
        if (clicked==false) {
			var divs = document.querySelectorAll('.plusSign');
			var i;

			for (i = 0; i < divs.length; ++i) {
				divs[i].click();
			};
            clicked = true;
            button.innerHTML = "Zwiń";
		} else {
			divs = document.querySelectorAll('.minusSign');

            var j;

			for (j = 0; j < divs.length; ++j) {
				divs[j].click();
			};

            clicked = false;
            button.innerHTML = "Rozwiń";
		}
    }

	document.body.appendChild(button);

    button.addEventListener (
        "click", ButtonClickAction, false
    );

 var elmFoo = document.getElementById('menu-item-53');
 elmFoo.parentNode.insertBefore(button, elmFoo);


})();