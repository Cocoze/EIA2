namespace Ski {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        console.log("hi");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "blue";

        createPaths();

        let ski: Ski = new Ski(1);
        console.log("ski draw");
        ski.draw();
    }

}
}