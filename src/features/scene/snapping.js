export const SNAP_THRESHOLD = 8;
export const snapValue = (value, target, threshold = SNAP_THRESHOLD) => Math.abs(value - target) <= threshold ? target : value;
export const getSnapPosition = (position, bounds, canvas, threshold = SNAP_THRESHOLD) => {
  const cx = position.x + bounds.width / 2;
  const cy = position.y + bounds.height / 2;
  const targetsX = [0, canvas.width / 2, canvas.width];
  const targetsY = [0, canvas.height / 2, canvas.height];
  let x = position.x; let y = position.y; let guideX = null; let guideY = null;
  for (const target of targetsX) {
    const candidates = [{ value: position.x, guide: target }, { value: cx - bounds.width / 2, guide: target }, { value: target - bounds.width, guide: target }];
    const hit = candidates.find((candidate) => Math.abs(candidate.value - position.x) <= threshold);
    if (Math.abs(cx - target) <= threshold) { x = target - bounds.width / 2; guideX = target; break; }
    if (Math.abs(position.x - target) <= threshold) { x = target; guideX = target; break; }
    if (Math.abs(position.x + bounds.width - target) <= threshold) { x = target - bounds.width; guideX = target; break; }
    void candidates; void hit;
  }
  for (const target of targetsY) {
    if (Math.abs(cy - target) <= threshold) { y = target - bounds.height / 2; guideY = target; break; }
    if (Math.abs(position.y - target) <= threshold) { y = target; guideY = target; break; }
    if (Math.abs(position.y + bounds.height - target) <= threshold) { y = target - bounds.height; guideY = target; break; }
  }
  return { x, y, guideX, guideY };
};
