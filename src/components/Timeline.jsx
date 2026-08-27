import { useEffect } from 'react';
import './Timeline.css';
import { useTimelineStore } from '../features/timeline';

const Timeline = () => {
  const currentTime = useTimelineStore((state) => state.currentTime);
  const duration = useTimelineStore((state) => state.duration);
  const playing = useTimelineStore((state) => state.playing);
  const setCurrentTime = useTimelineStore((state) => state.setCurrentTime);
  const togglePlaying = useTimelineStore((state) => state.togglePlaying);
  const setPlaying = useTimelineStore((state) => state.setPlaying);

  useEffect(() => {
    if (!playing) return undefined;
    const interval = window.setInterval(() => {
      const state = useTimelineStore.getState();
      const next = state.currentTime + 1 / 30;
      if (next >= state.duration) {
        state.setCurrentTime(0);
        state.setPlaying(false);
      } else {
        state.setCurrentTime(next);
      }
    }, 1000 / 30);
    return () => window.clearInterval(interval);
  }, [playing]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  const seek = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    setCurrentTime(ratio * duration);
  };

  return (
    <footer className="timeline">
      <div className="timeline-controls">
        <button className="timeline-btn" onClick={togglePlaying} type="button">
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
        <span className="time-indicator">{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>
      <div
        className="timeline-track"
        onClick={seek}
        role="slider"
        aria-label="Timeline position"
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={currentTime}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') setCurrentTime(currentTime - 1 / 30);
          if (event.key === 'ArrowRight') setCurrentTime(currentTime + 1 / 30);
          if (event.key === ' ') {
            event.preventDefault();
            setPlaying(!playing);
          }
        }}
      >
        <div className="scrubber-line" style={{ left: `${progress}%` }} />
      </div>
    </footer>
  );
};

export default Timeline;
