import React, { useState, } from 'react'

const State = (props) => {
  const [count, setCount] = useState(0)

  const goBack = () => props.history.goBack()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => goBack()}>Go Back</button>
        <div style={{ height: '100px', width: '300px', }}>
        <p>You have clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Press to Count</button>
        <button onClick={() => setCount(count - 1)}>Press to Uncount</button>
        </div>
      </header>
    </div>
  )
}

export default State