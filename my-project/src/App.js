import { useState } from "react";
import Accordion from "./components/accordion";

function App() {
  const [list, setList] = useState([
    {
      question: 'Whats your name?',
      answer: 'My name is Gui Developer',
      active: 1
    },
    {
      question: 'What do you do?',
      answer: 'Full-stack Developer, Go Brasil'
    }
  ]);

  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <div className="list">
        {/* begin item */}
        {list.map((item, key) => (
          <Accordion key={key} datas={item} />
        ))}
        {/* end item */}
      </div>
    </div>
  );
}

export default App;
