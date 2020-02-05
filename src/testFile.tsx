import React, {useState} from 'react';


const TestFile = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>TEST FEATURE</h1>
            <p>Click Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
            <p>(please delete once viewed)</p>
        </div>
    )
}

export default TestFile;