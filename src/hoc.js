import React from 'react'
const HOC = (props) => {
  return (
    <div>
        <props.comp />
    </div>
  )
}

export default HOC