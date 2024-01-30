function ClearButton(){

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")
        context.fillStyle = "white"
        context.fillRect(0, 0, canvas.width, canvas.height)
      }

    return(
        <button onClick={clearCanvas}>Clear</button>
    );
}

export default ClearButton;