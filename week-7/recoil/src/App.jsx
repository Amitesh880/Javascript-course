import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countatom,evenSelector } from './store/atoms/count';

function App() {

  return (
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}
function Count() {
  return <div>
    <CountRender ></CountRender>
    <Buttons ></Buttons>
  </div>

} 

function CountRender() {
  const count = useRecoilValue(countatom);
  return <div>
    {count}
    <EvenSelector></EvenSelector>
  </div>
}
function Buttons() {
  const setCount = useSetRecoilState(countatom);

  return <div>
    <button onClick={() => {
      setCount(count =>count + 1)
    }} >Increase</button>
    <button onClick={() => {
      setCount(count =>count - 1)
    }} >Decrease</button>
  </div>

}
function EvenSelector () {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven?null:"It is even"}
  </div>
}

export default App
