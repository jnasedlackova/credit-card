import { useRef, useState, useEffect } from "react";
import './style.css';

const CreditCard = () => {

    const [ready, setReady] = useState(false);
    const fieldRef = useRef([]);

    const handleChange = (idx) => {
        if (fieldRef.current[idx].value.length == 4 ) {
            if (idx < 3) {fieldRef.current[idx+1].focus();}
            else {
                fieldRef.current[idx].blur();
                setReady(true);
            }
        } 
    }

    useEffect(() => {       
          fieldRef.current[0].focus();       
      }, [])
    
    return (
        <>
            {[...Array(4)].map((e, i) => (
            <input className="field" type="number" key={i} ref={(el) => (fieldRef.current[i] = el)}
            onChange={() => handleChange(i)}         
            />
            ))}
            {ready && <p>Hotovo</p>}
       
        </>
    )
}

export default CreditCard;