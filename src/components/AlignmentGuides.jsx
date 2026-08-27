export default function AlignmentGuides({ guides = {} }) {
  const { x, y } = guides;
  return <>{x !== null && x !== undefined && <div className="alignment-guide alignment-guide-x" style={{ left: x }} />} {y !== null && y !== undefined && <div className="alignment-guide alignment-guide-y" style={{ top: y }} />}</>;
}
