function isLandscape (height, width) {
  if (height == width) return 'Square';
  return (height > width) ? 'Landscape' : 'Portrait';
}

let width = 800;
let height = 800;
console.log("This display geometry is" isLandscape(height, width));
