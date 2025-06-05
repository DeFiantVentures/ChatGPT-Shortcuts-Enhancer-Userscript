// ==UserScript==
// @name         ChatGPT Shortcuts Enhancer
// @namespace    https://defiantventures.io/
// @version      1.0.0
// @description  Adds custom keyboard shortcuts to ChatGPT for speed and efficiency
// @author       DeFiantDeveloper
// @match        https://chat.openai.com/*
// @grant        none
// @updateURL    https://defiantventures.github.io/ChatGPT-Shortcuts-Enhancer-Userscript/chatgpt-enhancer.user.js
// @downloadURL  https://defiantventures.github.io/ChatGPT-Shortcuts-Enhancer-Userscript/chatgpt-enhancer.user.js
// ==/UserScript==

(function () {
    'use strict';

    // Example: Shift + / focuses the chat input
    document.addEventListener('keydown', function (e) {
        if (e.shiftKey && e.key === '/') {
            const input = document.querySelector('textarea');
            if (input) input.focus();
        }
    });

    console.log("✅ ChatGPT Shortcuts Enhancer loaded.");
})();
