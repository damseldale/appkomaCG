export const createGuideState = () => ({ x: null, y: null });
export const updateGuideState = (guides, next) => ({ x: next.guideX ?? null, y: next.guideY ?? null });
export const clearGuideState = () => ({ x: null, y: null });
