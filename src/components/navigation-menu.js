import React from 'react'
import { Link } from 'react-router-dom'

const styleNav = {
  position: `fixed`,
  bottom: 0,
  left: 0,
  width: `100%`,
  height: `4rem`,
  background: `white`,
  borderTop: `1px solid #ccc`
}

const NavigationMenu = () => {
  return (
    <div style={styleNav}>
      <div className="navigation-menu flex flex-wrap justify-center" style={{ height: `4rem` }}>
        <div className="w-1/2 text-center" style={{ lineHeight: `4rem`, borderRight: `1px solid #ccc` }}>
          <Link to="/" className="font-bold">
            Browse Monster
          </Link>
        </div>
        <div className="w-1/2 text-center" style={{ lineHeight: `4rem` }}>
          <Link to="/my-pokemon" className="font-bold">
            My Pokemon
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu