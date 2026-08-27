import type { ObjectId, SceneObject, Transform } from '../types';
import { useSceneStore } from '../sceneStore';
import type { Command } from './CommandManager';

export class UpdateTransformCommand implements Command {
  constructor(
    private readonly id: ObjectId,
    private readonly next: Partial<Transform>,
  ) {}

  private previous: Partial<Transform> | null = null;

  execute(): void {
    const object = useSceneStore.getState().objects[this.id];
    if (!object || object.locked) return;

    if (!this.previous) {
      this.previous = {};
      for (const key of Object.keys(this.next) as (keyof Transform)[]) {
        this.previous[key] = object.transform[key];
      }
    }

    useSceneStore.getState().updateTransform(this.id, this.next);
  }

  undo(): void {
    if (this.previous) {
      useSceneStore.getState().updateTransform(this.id, this.previous);
    }
  }

  redo(): void {
    useSceneStore.getState().updateTransform(this.id, this.next);
  }
}

export class AddObjectCommand implements Command {
  constructor(private readonly object: SceneObject) {}

  execute(): void {
    useSceneStore.getState().addObject(this.object);
  }

  undo(): void {
    useSceneStore.getState().removeObject(this.object.id);
  }

  redo(): void {
    useSceneStore.getState().addObject(this.object);
  }
}

export class RemoveObjectCommand implements Command {
  private removed: SceneObject | null = null;

  constructor(private readonly id: ObjectId) {}

  execute(): void {
    const object = useSceneStore.getState().objects[this.id];
    if (!object) return;
    this.removed = object;
    useSceneStore.getState().removeObject(this.id);
  }

  undo(): void {
    if (this.removed) useSceneStore.getState().addObject(this.removed);
  }

  redo(): void {
    useSceneStore.getState().removeObject(this.id);
  }
}
