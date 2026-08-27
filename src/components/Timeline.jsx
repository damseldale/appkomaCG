import { useEffect } from 'react';
import './Timeline.css';
import { useTimelineStore, TRACK_PROPERTIES, createKeyframe } from '../features/timeline';
import { useSceneStore } from '../features/scene';
import { applyTimelineToScene } from '../features/timeline/applyKeyframes';

const Timeline = () => {
  const currentTime = useTimelineStore((state) => state.currentTime);
  const duration = useTimelineStore((state) => state.duration);
  const playing = useTimelineStore((state) => state.playing);
  const keyframes = useTimelineStore((state) => state.keyframes);
  const setCurrentTime = useTimelineStore((state) => state.setCurrentTime);
  const togglePlaying = useTimelineStore((state) => state.togglePlaying);
  const setPlaying = useTimelineStore((state) => state.setPlaying);
  const addKeyframe = useTimelineStore((state) => state.addKeyframe);
  const selectedIds = useSceneStore((state) => state.selectedIds);
  const objects = useSceneStore((state) => state.objects);

  useEffect(() => {
    applyTimelineToScene(keyframes, currentTime);
  }, [keyframes, currentTime]);

  useEffect(() => {
    if (!playing) return undefined;
    const interval = window.setInterval(() => {
      const state = useTimelineStore.getState();
      const next = state.currentTime + 1 / 30;
      if (next >= state.duration) {
        state.setCurrentTime(0);
        state.setPlaying(false);
      } else state.setCurrentTime(next);
    }, 1000 / 30);
    return () => window.clearInterval(interval);
  }, [playing]);

  const formatTime = (seconds) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  const seek = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCurrentTime(Math.max(0, Math.min(duration, ((event.clientX - rect.left) / rect.width) * duration)));
  };

  const addSelectedKeyframes = () => {
    const id = selectedIds[0];
    const object = id ? objects[id] : null;
    if (!object || object.locked) return;
    TRACK_PROPERTIES.forEach((property) => {
      addKeyframe(id, property, createKeyframe(currentTime, object.transform[property]));
    });
  };

  return (
    <footer className="timeline">
      <div className="timeline-controls">
        <button className="timeline-btn" onClick={togglePlaying} type="button">{playing ? '⏸ Pause' : '▶ Play'}</button>
        <button className="timeline-btn" onClick={addSelectedKeyframes} type="button" disabled={!selectedIds.length}>◆ Keyframe</button>
        <span className="time-indicator">{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>
      <div className="timeline-track" onClick={seek} role="slider" aria-label="Timeline position" aria-valuemin={0} aria-valuemax={duration} aria-valuenow={currentTime} tabIndex={0}>
        {selectedIds[0] && TRACK_PROPERTIES.map((property) => (keyframes[selectedIds[0]]?.[property] || []).map((frame) => (
          <span key={`${property}-${frame.id}`} className="timeline-keyframe" style={{ left: `${duration ? (frame.time / duration) * 100 : 0}%` }} title={`${property} @ ${formatTime(frame.time)}`} />
        )))}
        <div className="scrubber-line" style={{ left: `${progress}%` }} />
      </div>
    </footer>
  );
};

export default Timeline;
