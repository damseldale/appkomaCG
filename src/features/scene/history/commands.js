import { useSceneStore } from '../sceneStore';

export class UpdatePropertiesCommand {
  constructor(id, next, previous) {
    this.id = id;
    this.next = next;
    this.previous = previous;
  }

  apply(values) {
    useSceneStore.setState((state) => {
      const object = state.objects[this.id];
      if (!object || object.locked) return state;
      return {
        objects: {
          ...state.objects,
          [this.id]: { ...object, ...values },
        },
      };
    });
  }

  execute() {
    this.apply(this.next);
  }

  undo() {
    this.apply(this.previous);
  }

  redo() {
    this.apply(this.next);
  }
}
