export class SceneActionError
  extends Error {}

export class ObjectNotFoundError
  extends SceneActionError {}

export class DuplicateObjectError
  extends SceneActionError {}
