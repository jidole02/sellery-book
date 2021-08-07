export function getRandomColor(_isAlpha) {
    let r = getRand(0, 255),
    g = getRand(0, 255),
    b = getRand(0, 255),
    a = getRand(0, 10) / 10;
  
    let rgb = _isAlpha ? 'rgba' : 'rgb';
    rgb += '(' + r + ',' + g + ',' + b;
    rgb += _isAlpha ? ',' + a + ')' : ')';
  
    return rgb;
  
    // Return random number from in to max
    function getRand(min, max) {
      if (min >= max) return false;
      return ~~(Math.random() * (max - min + 1)) + min;
    };
  };