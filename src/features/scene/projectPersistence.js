const STORAGE_KEY = 'appkoma-cg-project-v1';

export const saveSceneProject = (state) => {
  const payload = { version: 1, savedAt: new Date().toISOString(), objects: state.objects, rootIds: state.rootIds };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  return payload;
};

export const loadSceneProject = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const project = JSON.parse(raw);
    if (!project || project.version !== 1 || !project.objects || !Array.isArray(project.rootIds)) return null;
    return project;
  } catch { return null; }
};

export const clearSceneProject = () => localStorage.removeItem(STORAGE_KEY);
