import React, { memo  } from 'react'

const Todos = ({ Counter }) => {


    console.log("hello world",Counter);
    return (
        // <div>{Counter}</div>
        <div>{Counter.length}</div>
    )
}

export default memo(Todos);