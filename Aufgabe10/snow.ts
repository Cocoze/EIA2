namespace Ski {
    export class Ski extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            console.log("ski");

            super(_position);
            
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.size = _size;

        }

        draw(): void {
            console.log("ski draw");
            crc2.save();
            crc2.translate(this.position.y, this.position.y);
            crc2.scale(this.size, this.size);
            //crc2.stroke(paths[this.type]);
            crc2.restore();
        }
    }
}