import { create } from "zustand";

import type {
    SceneObject,
    Transform,
} from "../objects";

export type ObjectId = string;

export interface SceneState {

    objects: Record<
        ObjectId,
        SceneObject
    >;

    rootIds: ObjectId[];

    selectedIds: ObjectId[];

    addObject(
        object: SceneObject,
    ): void;

    updateTransform(
        id: ObjectId,
        transform: Partial<Transform>,
    ): void;

    selectObject(
        id: ObjectId,
    ): void;

    toggleObjectSelection(
        id: ObjectId,
    ): void;

    clearSelection(): void;

}

export const useSceneStore =
    create<SceneState>(
        (
            set,
        ) => ({

            objects: {},

            rootIds: [],

            selectedIds: [],

            addObject(
                object,
            ) {

                set(
                    state => ({

                        objects: {

                            ...state.objects,

                            [object.id]:
                                object,

                        },

                        rootIds: [

                            ...state.rootIds,

                            object.id,

                        ],

                    }),
                );

            },

            updateTransform(
                id,
                transform,
            ) {

                set(
                    state => {

                        const object =
                            state.objects[id];

                        if (!object) {
                            return state;
                        }

                        return {

                            objects: {

                                ...state.objects,

                                [id]: {

                                    ...object,

                                    transform: {

                                        ...object.transform,

                                        ...transform,

                                    },

                                },

                            },

                        };

                    },
                );

            },

            selectObject(
                id,
            ) {

                set({

                    selectedIds: [
                        id,
                    ],

                });

            },

            toggleObjectSelection(
                id,
            ) {

                set(
                    state => {

                        const exists =
                            state.selectedIds.includes(
                                id,
                            );

                        return {

                            selectedIds:
                                exists
                                    ? state.selectedIds.filter(
                                          item =>
                                              item !==
                                              id,
                                      )
                                    : [
                                          ...state.selectedIds,
                                          id,
                                      ],

                        };

                    },
                );

            },

            clearSelection() {

                set({

                    selectedIds:
                        [],

                });

            },

        }),
    );
