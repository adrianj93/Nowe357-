// ==UserScript==
// @name         Nowe357+
// @namespace    http://tampermonkey.net/
// @version      0.3.4
// @description  Nowe357+
// @author       adrianj
// @match        https://radio357.pl/*
// @updateURL    https://github.com/adrianj93/Nowe357-/raw/main/Nowe357%2B.user.js
// @downloadURL  https://github.com/adrianj93/Nowe357-/raw/main/Nowe357%2B.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=radio357.pl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var buttonDesc_clicked = false

    var buttonDesc = document.createElement("Button");
    buttonDesc.innerHTML = "Rozwiń";
    buttonDesc.style = "width: 70px; margin: 0 10px 0 0; border-radius: 12px; font-size: 12px; border: 1px solid #FF650F; color: #FF650F; background-color: #fff;";

    function ButtonClickAction (zEvent) {
        if (buttonDesc_clicked==false) {
			var divs = document.querySelectorAll('.plusSign');
			var i;

			for (i = 0; i < divs.length; ++i) {
				divs[i].click();
			};
            buttonDesc_clicked = true;
            buttonDesc.innerHTML = "Zwiń";
		} else {
			divs = document.querySelectorAll('.minusSign');

            var j;

			for (j = 0; j < divs.length; ++j) {
				divs[j].click();
			};

            buttonDesc_clicked = false;
            buttonDesc.innerHTML = "Rozwiń";
		}
    }

	document.body.appendChild(buttonDesc);

    buttonDesc.addEventListener (
        "click", ButtonClickAction, false
    );

 var menuItemDesc = document.getElementById('menu-item-53');
 menuItemDesc.parentNode.insertBefore(buttonDesc, menuItemDesc);


})();