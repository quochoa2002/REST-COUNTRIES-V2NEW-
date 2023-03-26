import { RiMoonFill } from 'react-icons/ri'
import styled from './SwitchStype.module.scss';

function SwitchMode() {
    return(
        <>
            <div className={styled.toggerButton}>
                <input type="checkbox" className={styled.Input}/>
                <div className={styled.Icon}>
                    <RiMoonFill/>   
                </div>
                <div className={styled.Circle}></div>
            </div>
        </>
    )
}

export default SwitchMode;



