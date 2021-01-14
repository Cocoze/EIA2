"use strict";
var Ski;
(function (Ski_1) {
    class Ski extends Ski_1.Moveable {
        constructor(_size) {
            console.log("ski");
            super(_position);
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Ski_1.Vector(0, 0);
            this.velocity = new Ski_1.Vector(0, 0);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        draw() {
            console.log("ski draw");
            Ski_1.crc2.save();
            Ski_1.crc2.translate(this.position.y, this.position.y);
            Ski_1.crc2.scale(this.size, this.size);
            //crc2.stroke(paths[this.type]);
            Ski_1.crc2.restore();
        }
    }
    Ski_1.Ski = Ski;
})(Ski || (Ski = {}));
//# sourceMappingURL=snow.js.map