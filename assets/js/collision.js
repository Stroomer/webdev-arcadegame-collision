const rectangles_collide = (rect1, rect2) => {
  const deltaX = Math.abs(rect1.x - rect2.x);
  const deltaY = Math.abs(rect1.y - rect2.y);
  if (
    deltaX <= rect1.width / 2 + rect2.width / 2 &&
    deltaY <= rect1.height / 2 + rect2.height / 2
  ) {
    return true;
  }
  return false;
};

const circles_collide = (circle1, circle2) => {
  const dx = circle1.x - circle2.x;
  const dy = circle1.y - circle2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < circle1.radius + circle2.radius) {
    return true;
  }
  return false;
};

const point_inside_circle = (point, circle) => {
  const dx = point.x - circle.x;
  const dy = point.y - circle.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  if (distance < circle.radius) {
    return true;
  }
  return false;
};

const point_inside_rectangle = (point, rectangle) => {
  if (
    point.x > rectangle.x &&
    point.x < rectangle.x + rectangle.width &&
    point.y > rectangle.y &&
    point.y < rectangle.y + rectangle.height
  ) {
    return true;
  }
  return false;
};
