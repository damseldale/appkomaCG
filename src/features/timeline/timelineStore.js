import { create } from 'zustand';

export const useTimelineStore = create((set) => ({
  currentTime: 0,
  duration: 10,
  playing: false,
  keyframes: {},

  setCurrentTime: (currentTime) => set((state) => ({ currentTime: Math.max(0, Math.min(state.duration, currentTime)) })),
  setDuration: (duration) => set((state) => ({ duration: Math.max(1, duration), currentTime: Math.min(state.currentTime, Math.max(1, duration)) })),
  togglePlaying: () => set((state) => ({ playing: !state.playing })),
  setPlaying: (playing) => set({ playing }),

  addKeyframe: (objectId, property, keyframe) => set((state) => ({
    keyframes: {
      ...state.keyframes,
      [objectId]: {
        ...(state.keyframes[objectId] || {}),
        [property]: [
          ...((state.keyframes[objectId] || {})[property] || []).filter((item) => item.time !== keyframe.time),
          keyframe,
        ].sort((a, b) => a.time - b.time),
      },
    },
  })),

  removeKeyframe: (objectId, property, keyframeId) => set((state) => {
    const objectFrames = state.keyframes[objectId];
    if (!objectFrames) return state;
    return {
      keyframes: {
        ...state.keyframes,
        [objectId]: {
          ...objectFrames,
          [property]: (objectFrames[property] || []).filter((frame) => frame.id !== keyframeId),
        },
      },
    };
  }),
}));
