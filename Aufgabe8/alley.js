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
        drawSkier();
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
        crc2.fillStyle = "orange";
        crc2.fillRect(250, 370, 100, 80);
    }
    function drawhouse2(_position, _min, _max, _colorLow, _colorHigh) {
        crc2.save();
        crc2.fillStyle = "orange";
        crc2.fillRect(630, 140, 40, 40);
    }
    function drawroof(_position, _min, _max, _colorLow, _colorHigh) {
        crc2.save();
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.moveTo(300, 320);
        crc2.lineTo(250, 370);
        crc2.lineTo(350, 370);
        crc2.fill();
    }
    function drawroof2() {
        crc2.save();
        crc2.fillStyle = "brown";
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
        crc2.fillStyle = "green";
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
        crc2.strokeStyle = "black";
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(640, 150);
        crc2.lineTo(320, 340);
        crc2.lineTo(340, 360);
        crc2.lineTo(660, 150);
        crc2.closePath();
        crc2.stroke();
    }
    function drawSkier() {
        let skier = 20;
        console.log("ski1");
        for (let drawn = 0; drawn < skier; drawn++) {
            let x = Math.random() * (800 - 300) + 300;
            let y = Math.random() * (500 - 200) + 200;
            drawSki(x, y);
            crc2.fill();
        }
    }
    function drawSki(x, y) {
        console.log("hey");
        crc2.save();
        let colors = ["red", "darkblue", "lightgreen", "darkviolet", "blue", "yellow"];
        let random = colors[Math.floor(Math.random() * colors.length)];
        crc2.fillStyle = random;
        crc2.strokeStyle = crc2.fillStyle;
        console.log(random);
        let radius2 = 5;
        console.log("xy" + x + " " + y);
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x - 5, y + 25);
        crc2.lineTo(x + 15, y + 25);
        crc2.lineTo(x + 5, y);
        crc2.arc(x + 5, y, radius2, 0, 2 * Math.PI);
        crc2.lineTo(x - 5, y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x, y + 25);
        crc2.lineTo(x - 25, y + 40);
        crc2.lineTo(x - 20, y + 40);
        crc2.lineTo(x + 5, y + 25);
        crc2.lineTo(x - 5, y + 25);
        crc2.lineTo(x + 10, y + 25);
        crc2.lineTo(x - 15, y + 40);
        crc2.lineTo(x - 10, y + 40);
        crc2.lineTo(x + 15, y + 25);
        crc2.lineTo(x, y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=alley.js.map