import { useSceneStore } from "../store";

import type { SceneActions } from "./types";

export class DefaultSceneActions
  implements SceneActions {

  addObject(object) {
    useSceneStore
      .getState()
      .addObject(object);
  }

  removeObject(id) {
    useSceneStore
      .getState()
      .removeObject(id);
  }

  duplicateObject(id) {
    useSceneStore
      .getState()
      .duplicateObject(id);
  }

  updateObject(
    id,
    patch,
  ) {
    useSceneStore
      .getState()
      .updateObject(
        id,
        patch,
      );
  }

  updateTransform(
    id,
    transform,
  ) {
    useSceneStore
      .getState()
      .updateTransform(
        id,
        transform,
      );
  }

  moveObject(
    id,
    x,
    y,
  ) {
    this.updateTransform(id, {
      x,
      y,
    });
  }

  selectObject(id) {
    useSceneStore
      .getState()
      .selectObject(id);
  }

  clearSelection() {
    useSceneStore
      .getState()
      .clearSelection();
  }

  lockObject(id) {
    this.updateObject(id, {
      locked: true,
    });
  }

  unlockObject(id) {
    this.updateObject(id, {
      locked: false,
    });
  }

  hideObject(id) {
    this.updateObject(id, {
      visible: false,
    });
  }

  showObject(id) {
    this.updateObject(id, {
      visible: true,
    });
  }
}
