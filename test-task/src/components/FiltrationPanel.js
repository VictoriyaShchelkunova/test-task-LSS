import "./FiltrationPanel.css";

export const FiltrationPanel = (props) => {
    return (
        <div className="filtration-panel">
            <input type="text" placeholder="String or Number" onChange={props.inputHandler}></input>            
            <label><input type="checkbox" onClick={props.checkboxHandler}></input>Aa</label><br></br> 
            <button 
                className="string-length-filter-button" 
                onClick={props.stringLengthFilterButtonHandler}>String Length Filter</button> 
            <button 
                className="substring-filter-button" 
                onClick={props.substringFilterButtonHandler}>Substring Filter</button> 
        </div>

    )
}