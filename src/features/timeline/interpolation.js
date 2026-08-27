const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export const interpolateKeyframes = (frames = [], time) => {
  if (!frames.length) return undefined;
  if (time <= frames[0].time) return frames[0].value;
  if (time >= frames[frames.length - 1].time) return frames[frames.length - 1].value;

  for (let i = 0; i < frames.length - 1; i += 1) {
    const from = frames[i];
    const to = frames[i + 1];
    if (time >= from.time && time <= to.time) {
      const span = to.time - from.time;
      const progress = span === 0 ? 1 : clamp((time - from.time) / span, 0, 1);
      return from.value + (to.value - from.value) * progress;
    }
  }

  return frames[frames.length - 1].value;
};
