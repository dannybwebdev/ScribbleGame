import { useEffect, useRef } from "react";

const useCanvas = () => {

    const refCanvas = useRef(null);
    const ctxRef = useRef(null);

    useEffect(() => {
        const canvas = refCanvas.current;
        const demension = 500;
        canvas.width = demension;
        canvas.height = demension;
        canvas.style.width = '${demension}px';
        canvas.style.height = '${demension}px';

        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;

    }, [])
    return {refCanvas, ctxRef}
}
export default useCanvas;