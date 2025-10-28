import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Admin } from "@repo/ui/admin";
import { Button } from "@repo/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Admin />
      <Button appName='Reat-app' >Hi there from react app</Button>
    </>
  )
}

export default App
