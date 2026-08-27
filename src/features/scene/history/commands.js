import { useSceneStore } from '../sceneStore';

const setObject = (id, patch) => {
  useSceneStore.setState((state) => {
    const object = state.objects[id];
    if (!object || object.locked) return state;
    return { objects: { ...state.objects, [id]: { ...object, ...patch } } };
  });
};

const setTransform = (id, transform) => {
  useSceneStore.setState((state) => {
    const object = state.objects[id];
    if (!object || object.locked) return state;
    return {
      objects: {
        ...state.objects,
        [id]: { ...object, transform: { ...object.transform, ...transform } },
      },
    };
  });
};

export class UpdatePropertiesCommand {
  constructor(id, next, previous) { this.id = id; this.next = next; this.previous = previous; }
  execute() { setObject(this.id, this.next); }
  undo() { setObject(this.id, this.previous); }
  redo() { setObject(this.id, this.next); }
}

export class UpdateTransformCommand {
  constructor(id, next, previous) { this.id = id; this.next = next; this.previous = previous; }
  execute() { setTransform(this.id, this.next); }
  undo() { setTransform(this.id, this.previous); }
  redo() { setTransform(this.id, this.next); }
}
