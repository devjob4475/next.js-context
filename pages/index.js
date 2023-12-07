import { MyContext } from '@/context';
import React from 'react'

function index() {
  const [state, setstate] = React.useContext(MyContext);
  console.log("🚀 ~ file: index.js:6 ~ index ~ state:", state)
  return (
    <div>index</div>
  )
}

export default index