import { useState } from "react";

export default function ShowHide()
{
    const [visible, setVisible]=useState(true);
    return(
        <div>
            <button onClick={()=>setVisible(!visible)}>Show/Hide</button>
            {visible && <p>Hello Students</p>}

        </div>
    );

}