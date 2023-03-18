function handleInput(inputType, inputValue) {
    for (const fighter of this.fighters) {
        fighter.handleInput(inputType, inputValue)
    }
}
export { handleInput }