"use client";

import { Rect } from "react-konva";

import { useSceneStore } from "../store";

export function SelectionOverlay() {
    const {
        objects,
        selectedIds,
    } = useSceneStore();

    return (
        <>
            {selectedIds.map((id) => {
                const object = objects[id];

                if (!object) {
                    return null;
                }

                return (
                    <Rect
                        key={id}
                        x={object.transform.x}
                        y={object.transform.y}
                        width={object.width}
                        height={object.height}
                        stroke="#2563EB"
                        strokeWidth={2}
                        dash={[6, 4]}
                        listening={false}
                    />
                );
            })}
        </>
    );
}
