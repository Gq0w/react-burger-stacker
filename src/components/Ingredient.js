const Ingredient = (props) => {
 
    const {name, color} = props.ingredient
    return (
        <p 
            style={{backgroundColor: color}}
            onClick={(e) => props.clickFunc(e)}
            id={props.itemKey}
        >
            {name}  
        </p>
    )
}

export default Ingredient