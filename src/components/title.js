import React from 'react'
import { capitalizeWord } from '../utils/index'

const Title = props => (
  <h1 className="text-xl font-sans font-bold mb-2">{ capitalizeWord(props.text) }</h1>
)

export default Title