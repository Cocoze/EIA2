"use strict";
var Ski;
(function (Ski) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("hi");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ski.crc2 = canvas.getContext("2d");
        Ski.crc2.fillStyle = "blue";
        Ski.crc2.strokeStyle = "blue";
        Ski.createPaths();
        let ski = new Ski.Ski(1);
        console.log("ski draw");
        ski.draw();
    }
})(Ski || (Ski = {}));
//# sourceMappingURL=main.js.map