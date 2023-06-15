import React from "react";

const Pagi = ({prev, next, onAnt, onSig}) => {

    const handlePrevious = () => {
        onAnt();
    }

    const handleNext = () => {
        onSig();
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                {
                    prev ?(
                    <li className="page-item">
                    <button className="page-link" onClick={onAnt} >Anterior</button>
                    </li>  
                    ): null   }               
                {next ?(
                    <li className="page-item">
                    <button className="page-link" onClick={onSig} >Siguiente</button>
                    </li>
                    ): null}
            </ul>
        </nav>
    )
}

export default Pagi