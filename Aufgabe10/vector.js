"use strict";
var Ski;
(function (Ski) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_added) {
            this.x *= _added.x;
            this.y *= _added.y;
        }
    }
    Ski.Vector = Vector;
})(Ski || (Ski = {}));
//# sourceMappingURL=vector.js.map