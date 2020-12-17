"use strict";
var Ski;
(function (Ski) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("ski");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ski.crc2 = canvas.getContext("2d");
        Ski.crc2.fillStyle = "black";
        Ski.crc2.strokeStyle = "white";
        createPaths();
        console.log("ski paths: ", skipaths);
    }
})(Ski || (Ski = {}));
//# sourceMappingURL=ski.js.map