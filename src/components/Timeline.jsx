import './Timeline.css';

const Timeline = () => {
  return (
    <footer className="timeline">
      <div className="timeline-controls">
        <button className="timeline-btn">▶ Play</button>
        <span className="time-indicator">00:00 / 05:00</span>
      </div>
      <div className="timeline-track">
        <div className="scrubber-line"></div>
      </div>
    </footer>
  );
};

export default Timeline;
