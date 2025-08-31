import { useState } from "react"

function App() {

  return (
    <>
      <HeaderwithButtons />
      <Header title="Amitesh2"></Header>
      <Header title="Amitesh3"></Header>
      <Header title="Amitesh3"></Header>
      <Header title="Amitesh3"></Header>
    </>
  )
}

function HeaderwithButtons() {
  const [title, settitle] = useState("My name is Amitesh")
  function updatetitle() {
    settitle("My name is" + Math.random());
  }

  return <div>
    <button onClick={updatetitle}>Click to change the title</button>
    <Header title={title}></Header>
  </div>
}

function Header({ title }) {
  return <div>
    {title}
  </div>
}

export default App
