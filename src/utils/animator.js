// Fungsi Linear Interpolation (Lerp) untuk transisi antar nilai
export const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

// Fungsi Easing Sederhana (Quad In-Out)
export const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
