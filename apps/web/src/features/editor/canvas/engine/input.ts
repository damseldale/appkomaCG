export interface WheelInput {
    deltaY: number;

    pointerX: number;

    pointerY: number;
}

export function isZoomIn(
    deltaY: number,
) {
    return deltaY < 0;
}
