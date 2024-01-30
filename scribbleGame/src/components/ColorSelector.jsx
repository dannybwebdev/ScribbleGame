

function ColorSelector(props) {


    const colorButtons = [
        "red",
        "OrangeRed",
        "Orange",
        "Yellow",
        "YellowGreen",
        "Green",
        "SkyBlue",
        "Blue",
        "RebeccaPurple",
        "Black",
        "Brown",
        "Sienna",
        "white",
    ];

    

    return (
        <div>
            {colorButtons.map((colors, index) => (
            <button
                key={index}
                style={{ backgroundColor: colors, height: "30px", width: "30px" }}
                onClick={()=> props.changeColor(colors)}>
            </button>))}
        </div>
    );
};

export default ColorSelector;