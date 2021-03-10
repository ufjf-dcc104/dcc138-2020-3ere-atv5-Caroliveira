export default class Sprite {
  // Responsável por modelar algo que se move na tela
  constructor({ x = 100, y = 100, w = 20, h = 20, color = "white" } = {}) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}