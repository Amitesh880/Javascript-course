
function App() {
 return <div>
  <Cardwrapper>
    <Cardwrapper>
    <Textwrapper></Textwrapper>
  </Cardwrapper>
  </Cardwrapper>
  <Cardwrapper >
    <div>hi there</div>
  </Cardwrapper>
  <Cardwrapper >
    <div>hello there</div>
  </Cardwrapper>
 </div>
 
}

function Cardwrapper({children}) {
  return <div style={{border:'2px solid black', padding:'10px'}}>
    {children}
  </div>
}

function Textwrapper({}) {
  return <div>
    hi there2
  </div>
}

export default App
