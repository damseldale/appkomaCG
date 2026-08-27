import { Group, Circle, Line, Text } from 'react-konva';

const POSE_LIBRARY = {
  idle: { arms: 'down', legs: 'neutral' },
  walk: { arms: 'swing', legs: 'stride' },
  run: { arms: 'swing', legs: 'stride' },
  wave: { arms: 'wave', legs: 'neutral' },
};

const drawArm = (side, mode) => {
  const x = side * 18;
  if (mode === 'wave' && side < 0) return [x, -20, x - 18, -48, x - 8, -68];
  if (mode === 'swing') return [x, -20, x + side * 20, -2, x + side * 10, 18];
  return [x, -20, x + side * 5, 8, x, 32];
};

const CharacterRenderer = ({ object, onPointerDown }) => {
  const pose = POSE_LIBRARY[object.pose] || POSE_LIBRARY.idle;
  const expression = object.expression || 'neutral';
  const face = expression === 'happy' ? '☺' : expression === 'sad' ? '☹' : expression === 'angry' ? '😠' : '• •';
  const leftLeg = pose.legs === 'stride' ? [-8, 28, -24, 58] : [-8, 28, -12, 58];
  const rightLeg = pose.legs === 'stride' ? [8, 28, 24, 58] : [8, 28, 12, 58];

  return (
    <Group x={object.transform.x} y={object.transform.y} rotation={object.transform.rotation} scaleX={object.transform.scaleX} scaleY={object.transform.scaleY} visible={object.visible} onPointerDown={onPointerDown}>
      <Circle x={0} y={-50} radius={18} fill="#f2c9a5" stroke="#202228" strokeWidth={2} />
      <Text x={-15} y={-57} width={30} align="center" text={face} fontSize={9} fill="#202228" />
      <Line points={[0, -32, 0, 28]} stroke="#4b5563" strokeWidth={6} lineCap="round" />
      <Line points={drawArm(-1, pose.arms)} stroke="#4b5563" strokeWidth={5} lineCap="round" />
      <Line points={drawArm(1, pose.arms)} stroke="#4b5563" strokeWidth={5} lineCap="round" />
      <Line points={leftLeg} stroke="#4b5563" strokeWidth={6} lineCap="round" />
      <Line points={rightLeg} stroke="#4b5563" strokeWidth={6} lineCap="round" />
    </Group>
  );
};

export default CharacterRenderer;
