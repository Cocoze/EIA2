"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let schnitt = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        //let horizon: number = crc2.canvas.height * schnitt;
        drawBackground();
        drawSun({ x: 100, y: 90 });
        drawCloud1({ x: 180, y: 150 }, { x: 150, y: 60 });
        drawCloud2({ x: 350, y: 60 }, { x: 225, y: 110 });
        drawMountain({ x: 500, y: 350 }, 400, 400, "white", "lightgrey");
        drawhouse({ x: 400, y: 400 }, 80, 80, "brown", "brown");
        drawhouse2({ x: 650, y: 150 }, 80, 80, "grey", "brown");
        drawroof({ x: 400, y: 400 }, 80, 80, "", "");
        drawroof2();
        drawtrees();
        drawlines();
        drawsnow({ x: 400, y: 0 }, { x: 800, y: 500 });
        drawSki();
        drawSkier({ x: 500, y: 300 }, { x: 10, y: 10 });
    }
    function drawsnow(_position, _size) {
        let nParticles = 700;
        let raduisParticel = 1.5;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, raduisParticel);
        particle.arc(0, 0, raduisParticel, 0, 2 * Math.PI);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightgrey");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(schnitt, "lightblue");
        gradient.addColorStop(1, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let radius1 = 35;
        let radius2 = 120;
        let gradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradient.addColorStop(0, "orange");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud1(_position, _size) {
        console.log("Cloud1", _position, _size);
        let nParticles1 = 20;
        let raduisParticel1 = 60;
        let particle1 = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, raduisParticel1);
        particle1.arc(0, 0, raduisParticel1, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles1; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle1);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCloud2(_position, _size) {
        console.log("Cloud2", _position, _size);
        let nParticles2 = 20;
        let raduisParticel2 = 60;
        let particle2 = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, raduisParticel2);
        particle2.arc(0, 0, raduisParticel2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles2; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle2);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawhouse(_position, _min, _max, _colorLow, _colorHigh) {
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(250, 370, 100, 80);
    }
    function drawhouse2(_position, _min, _max, _colorLow, _colorHigh) {
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "orange");
        crc2.fillStyle = gradient;
        crc2.fillRect(630, 140, 40, 40);
    }
    function drawroof(_position, _min, _max, _colorLow, _colorHigh) {
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "brown");
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.moveTo(300, 320);
        crc2.lineTo(250, 370);
        crc2.lineTo(350, 370);
        crc2.fill();
    }
    function drawroof2() {
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "brown");
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.moveTo(650, 120);
        crc2.lineTo(630, 140);
        crc2.lineTo(670, 140);
        crc2.fill();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("ski");
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(700, 50);
        crc2.quadraticCurveTo(-300, 500, 0, 500);
        crc2.lineTo(0, 500);
        crc2.lineTo(800, 500);
        crc2.lineTo(800, 100);
        crc2.closePath();
        crc2.fill();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.7, "lightgrey");
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawtrees() {
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(505, 400, 10, 40);
        crc2.beginPath();
        crc2.moveTo(510, 350);
        crc2.lineTo(490, 380);
        crc2.lineTo(500, 380);
        crc2.lineTo(480, 410);
        crc2.lineTo(520, 410);
        crc2.lineTo(540, 410);
        crc2.lineTo(520, 380);
        crc2.lineTo(530, 380);
        crc2.closePath();
        crc2.fill();
        console.log("Tree");
    }
    function drawlines() {
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.save();
        let gradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(1, "black");
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.moveTo(640, 150);
        crc2.lineTo(320, 340);
        crc2.lineTo(340, 360);
        crc2.lineTo(660, 150);
        crc2.closePath();
        crc2.stroke();
    }
    function drawSki() {
        let colors = ["red", "darkblue", "darkgreen", "violet", "orange"];
        let random = colors[Math.random() * colors.length];
        crc2.fillStyle = random;
        crc2.strokeStyle = crc2.fillStyle;
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        let radius2 = 5;
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(695, 200);
        crc2.lineTo(690, 225);
        crc2.lineTo(710, 225);
        crc2.lineTo(700, 200);
        crc2.arc(700, 200, radius2, 0, 2 * Math.PI);
        crc2.lineTo(690, 225);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(695, 225);
        crc2.lineTo(670, 240);
        crc2.lineTo(675, 240);
        crc2.lineTo(700, 225);
        crc2.lineTo(690, 225);
        crc2.lineTo(705, 225);
        crc2.lineTo(680, 240);
        crc2.lineTo(685, 240);
        crc2.lineTo(710, 225);
        crc2.lineTo(695, 225);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawSkier(_position, _size) {
        let skier = 20;
        drawSki();
        console.log("ski1");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        for (let drawn = 0; drawn < skier; drawn++) {
            crc2.save();
            console.log("hallo");
            let x = (Math.random() - 0.5) * _position.x;
            let y = (Math.random() * _position.y);
            crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
        }
        crc2.restore();
    }
    // for schleife mit 10 durchgängen
    // jedes mal function aufrufen  oder drin Bauen 
    // mit mathrandom random position
    // randomcolor
    // string array mit mathrandom bestimmte zahl aus array
})(Canvas || (Canvas = {}));
// for schleife mit 10 durchgängen
// jedes mal function aufrufen  oder drin Bauen 
// mit mathrandom random position
// randomcolor
// string array mit mathrandom bestimmte zahl aus array
//# sourceMappingURL=alley.js.map