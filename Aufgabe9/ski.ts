namespace Ski {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;


    function handleLoad(_event: Event): void {
        console.log("ski");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";


        createPaths();
        console.log("ski paths: ", skipaths);
    }
}