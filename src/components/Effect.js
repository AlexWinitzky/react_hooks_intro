import React, { useEffect, useState } from 'react'

const Effect = (props) => {
  const [mounted, setMounted] = useState(true)

  const toggle = () => setMounted(!mounted)
  const goBack = () => props.history.goBack()


  useEffect(() => {
    console.log("rendering, mounted is", mounted)

  }, [mounted])

  const isItMounted = () => {
    if (mounted) {
      return "Mounted"
    } else {
      return "unMounted"
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <button onClick={() => goBack()}>Go Back</button>
          <br />
          {isItMounted()}
          <br />
          <br />
          <button onClick={toggle}>Show/Hide Effect</button>
          <h6>Open your DevTools and check the Console.</h6>
        </header>
      </div>
    </>
  )
}

export default Effect