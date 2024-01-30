
const useCanvas = () => {
    useEffect(() => {
        const canvas = refCanvas.current;
        canvas.width = demension;
        canvas.height = demension;
        canvas.style.width = '${demension}px';
        canvas.style.height = '${demension}px';

        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;

    }, [])
}