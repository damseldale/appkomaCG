export const ASSET_TYPES = ['character', 'image', 'shape', 'audio'];

export const createAsset = ({ id = crypto.randomUUID(), type, name, thumbnail = '', data = {} }) => ({
  id,
  type,
  name,
  thumbnail,
  data,
});

export const createCharacterAsset = ({ id = crypto.randomUUID(), name, thumbnail = '', poses = [], expressions = [], data = {} }) => createAsset({
  id,
  type: 'character',
  name,
  thumbnail,
  data: { poses, expressions, ...data },
});
