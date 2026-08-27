import { useSceneStore } from '../sceneStore';

const setObject = (id, patch) => {
  useSceneStore.setState((state) => {
    const object = state.objects[id];
    if (!object || object.locked) return state;
    return { objects: { ...state.objects, [id]: { ...object, ...patch } } };
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
  apply(values) {
    const object = useSceneStore.getState().objects[this.id];
    if (!object || object.locked) return;
    useSceneStore.getState().updateTransform(this.id, values);
  }
  execute() { this.apply(this.next); }
  undo() { this.apply(this.previous); }
  redo() { this.apply(this.next); }
}
