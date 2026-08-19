import './Inspector.css';

const Inspector = () => {
  return (
    <aside className="inspector">
      <h3>Inspector</h3>
      <div className="property-group">
        <label>Posisi X</label>
        <input type="number" defaultValue={50} />
      </div>
      <div className="property-group">
        <label>Posisi Y</label>
        <input type="number" defaultValue={50} />
      </div>
      <div className="property-group">
        <label>Ukuran</label>
        <input type="number" defaultValue={50} />
      </div>
      <div className="property-group">
        <label>Warna</label>
        <input type="color" defaultValue="#3b82f6" />
      </div>
    </aside>
  );
};

export default Inspector;
