import type { KonvaEventObject } from "konva/lib/Node";
import type { WheelEvent } from "react";

export interface StageController {
  onWheel(
    event: KonvaEventObject<WheelEvent>,
  ): void;
}

export function createStageController(): StageController {
  return {
    onWheel(event) {
      event.evt.preventDefault();

      // Zoom Engine akan dipanggil di Batch berikutnya.
    },
  };
}
