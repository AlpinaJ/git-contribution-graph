import './Cell.css';
import {useState} from "react";

export const Cell = (cell) => {
    const date = cell.params[0];
    const contributions = cell.params[1];
    const [isSelected, setIsSelected] = useState(false);
    const [popupStyle, setPopupStyle] =useState(null);
    const handleOnClick = (event) => {
        setIsSelected(!isSelected);
        setPopupStyle({top:event.clientY, left:event.clientX})
    }

    let style = {};
    if(contributions === 0){
        style = {
            backgroundColor: '#EDEDED'
        }
    }
    if(contributions === 0){
        style = {
            backgroundColor: '#EDEDED'
        }
    }
    if(contributions === 0){
        style = {
            backgroundColor: '#EDEDED'
        }
    }
    if(contributions >=1 && contributions<=9){
        style = {
            backgroundColor: '#ACD5F2'
        }
    }
    if(contributions >=10 && contributions<=19){
        style = {
            backgroundColor: '#7FA8C9'
        }
    }
    if(contributions >=20 && contributions<=29){
        style = {
            backgroundColor: '#527BA0'
        }
    }
    if(contributions >=30){
        style = {
            backgroundColor: '#254E77'
        }
    }
    return (
        <div>
            <div className='cell'  style={style} onClick={(event)=>handleOnClick(event)}></div>
            {
                isSelected && <div className="popup" style={popupStyle}>
                    {date}, {contributions}
                </div>

            }
        </div>
    )
}
