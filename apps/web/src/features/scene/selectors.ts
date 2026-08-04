import { useSceneStore } from "./store";

export function useSceneObjects() {
  return useSceneStore((state) =>
    state.rootIds.map(
      (id) => state.objects[id],
    ),
  );
}

export function useSelectedObjects() {
  return useSceneStore((state) =>
    state.selectedIds.map(
      (id) => state.objects[id],
    ),
  );
}
