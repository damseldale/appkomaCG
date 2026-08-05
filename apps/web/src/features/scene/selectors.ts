import { useSceneStore } from "./store";

export function useSceneObjects() {
  return useSceneStore((state) =>
    state.rootIds.map(
      (id) => state.objects[id],
    ),
  );
}
export const useSelectedIds = () =>
  useSceneStore(
    (state) => state.selectedIds,
  );

export const useIsSelected = (
  id: string,
) =>
  useSceneStore(
    (state) =>
      state.selectedIds.includes(id),
  );
export function useSelectedObjects() {
  return useSceneStore((state) =>
    state.selectedIds.map(
      (id) => state.objects[id],
    ),
  );
}
