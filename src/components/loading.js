import React from 'react'
import '../styles/loading.css'

const Loading = () => (
  <div style={{ position: `absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
)

export default Loading