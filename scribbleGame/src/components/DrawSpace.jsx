import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function DrawSpace({ color, size}){
    const refCanvas = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false)

    let demension = 500;

    useEffect(() => {
        const canvas = refCanvas.current;
        canvas.width = demension;
        canvas.height = demension;
        canvas.style.width = '${demension}px';
        canvas.style.height = '${demension}px';

        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;

    }, [])

    useEffect(() =>{
        const canvas = refCanvas.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
    }, [isDrawing])

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        ctxRef.current.beginPath()
        ctxRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        ctxRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing){
            return
        }
        
        const {offsetX, offsetY} = nativeEvent;
        ctxRef.current.lineTo(offsetX, offsetY)
        ctxRef.current.stroke()
    }

    return(
        <>
        <canvas
        ref={refCanvas}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        style={{border: "solid 2px black", margin: "30px"}}
        ></canvas>
        </>
    )
}

export default DrawSpace;