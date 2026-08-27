import { create } from 'zustand';

export const useTimelineStore = create((set) => ({
  currentTime: 0,
  duration: 10,
  playing: false,
  keyframes: {},
  selectedKeyframeId: null,

  setCurrentTime: (currentTime) => set((state) => ({ currentTime: Math.max(0, Math.min(state.duration, currentTime)) })),
  setDuration: (duration) => set((state) => ({ duration: Math.max(1, duration), currentTime: Math.min(state.currentTime, Math.max(1, duration)) })),
  togglePlaying: () => set((state) => ({ playing: !state.playing })),
  setPlaying: (playing) => set({ playing }),
  selectKeyframe: (selectedKeyframeId) => set({ selectedKeyframeId }),

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
      selectedKeyframeId: state.selectedKeyframeId === keyframeId ? null : state.selectedKeyframeId,
      keyframes: {
        ...state.keyframes,
        [objectId]: {
          ...objectFrames,
          [property]: (objectFrames[property] || []).filter((frame) => frame.id !== keyframeId),
        },
      },
    };
  }),

  moveKeyframe: (objectId, property, keyframeId, time) => set((state) => {
    const frames = state.keyframes[objectId]?.[property];
    if (!frames) return state;
    const nextTime = Math.max(0, Math.min(state.duration, time));
    if (frames.some((frame) => frame.id !== keyframeId && frame.time === nextTime)) return state;
    return {
      keyframes: {
        ...state.keyframes,
        [objectId]: {
          ...state.keyframes[objectId],
          [property]: frames.map((frame) => frame.id === keyframeId ? { ...frame, time: nextTime } : frame).sort((a, b) => a.time - b.time),
        },
      },
    };
  }),
}));
