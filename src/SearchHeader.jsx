import { useState } from "react";


function SearchHeader({search}) {

    const [valueInput, setvalue] = useState('')
    const HandleForSubmit = (event) =>{
        event.preventDefault();
        debugger;
        search(valueInput);

    };
    const changeValue = (event) =>{
        setvalue(event.target.value)
    }
 
    return ( <div>
        <form className="formContent" onSubmit={HandleForSubmit}>
            <label>Ne Axtarirsan ?</label>
            <input type="text" placeholder="Enter text ..." value={valueInput} onChange={changeValue}/>
        </form>
    </div> );
    }


export default SearchHeader;
