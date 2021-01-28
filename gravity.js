this.hitBot() = function () {
    let bottom = game.wallCanvas.height - this.height;
    if (this.y > bottom) {
        this.y = bottom;
    }
}
