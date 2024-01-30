function BrushSize(props){

    return(
        <div>
            <label htmlFor="brush">Brush Size</label>
            <input 
                type= "range" 
                name="brush" 
                min= "1"
                max= "10"
                // TODO: figure out the default value
                onInput={(event) => props.changeBrushSize(event.target.value)}
            />
         
        </div>
    );
}

export default BrushSize;