import React, { useReducer, } from 'react'
import head from '../head.png'
import styled from 'styled-components'

const Reducer = (props) => {
  const [logos, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return [
          ...state, <img style={{ height: '50px', width: '50px' }} src={head} className="App-logo" alt="logo" />
        ]
      case 'subtract':
        return state.filter((_, i) => i !== state.length - 1)
      default:
        return state
    }
  }, [])

  const goBack = () => props.history.goBack()

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => goBack()}>Go Back</button>
        <div style={{ height: '100px', width: '300px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button onClick={() => dispatch('add')}>More Cage Heads</Button>
            <Button onClick={() => dispatch('subtract')}>Less Cage Heads</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {logos.map((logo, i) => (
              <div key={i}>{logo}</div>
            ))}
          </div>
        </div>
      </header>
    </div>
  )
}

const Button = styled.button`
  font-size: 1.5em;
  border-radius: 5%;
  height: 5em;
  outline: none;
  margin-left: 5em;
  margin-right: 5em;
  margin-top: -2em;
  &:hover {
    box-shadow: 5px 10px 18px #888888;
  }
`

export default Reducer
