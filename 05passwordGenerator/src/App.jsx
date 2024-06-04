import { useCallback, useState, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$*^~&"

    for (let i = 1; i <= length; i++) {
     
        let char = Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },([password]))

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-black'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}

           />
           <button 
           onClick={copyPasswordToClipboard}
           
           className='bg-blue-600 px-2 text-white outline-none shrink-0 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1 text-white'>
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1 text-white'>
          <input
           type="checkbox"
           defaultChecked = {numberAllowed}
           id='numberInput'
           onChange={() => {
            setnumberAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1 text-white'>
          <input
           type="checkbox"
           defaultChecked = {charAllowed}
           id='characterInput'
           onChange={() => {
            setcharAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="characterInput">Characters</label>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
