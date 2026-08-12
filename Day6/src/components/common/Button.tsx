interface ButtonProps{
    text:string;
    color:string;
    size?:"small" | "medium" | "large"
}

function Button({text, color, size="medium"}:ButtonProps){
    return(
        <button>{text} and size is {size} and color is {color}</button>
    )
}

export default Button;