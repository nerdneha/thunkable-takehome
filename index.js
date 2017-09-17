import React from 'react'
import ReactDOM from 'react-dom'

function Project ({ text }) {
  return (
    <div>
    Text here
    </div>
  )
}

function Page () {
  return (
    <div>
      <div className='testing'>Hello world!!</div>
      <Project />
    </div>
  )
}

ReactDOM.render(<Page />, window.root)
