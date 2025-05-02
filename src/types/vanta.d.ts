declare module 'vanta/dist/vanta.cells.min' {

    interface VantaOptions {
        el: HTMLElement | null;
        THREE: typeof import('three'),
        mouseControls: boolean;
        touchControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        backgroundColor: number;
        color1: number;
        color2: number;
    }

    const effect: (options: VantaOptions) => {
        destroy: () => void;
    };
    export default effect;
}
