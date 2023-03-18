function setCenterPosition() {
    this.center = {
        x: this.position.x + this.width * 0.5,
        y: this.position.y + this.height * 0.5,
    }
}
function setBottomPosition() {
    this.bottom = this.position.y + this.height
}
function setRightPosition() {
    this.right = this.position.x + this.width
}
function setLeftPosition() {
    this.left = this.position.x
}
function setTopPosition() {
    this.top = this.position.y
}
function setPositions(){
    setTopPosition.call(this)
    setLeftPosition.call(this)
    setRightPosition.call(this)
    setBottomPosition.call(this)
    setCenterPosition.call(this)
}
export {
    setBottomPosition,
    setCenterPosition,
    setLeftPosition,
    setPositions,
    setRightPosition,
    setTopPosition,
}