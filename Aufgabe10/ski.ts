namespace Ski {
    export class Ski {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            console.log("ski");
            this.position = new Vector(0, 0);
            this.velocity = new Vector(0, 0);
           // this.velocity.random(100, 200);

        }
        move(_timeslice: number): void {
            console.log("ski move");
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