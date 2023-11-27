import React, { useState } from "react";
const Accordion = (props) => {
  const [item, setItem] = useState(props.datas)
  const handleToggleActive = () => {
       let newActive = item.active === 1 ? 0 : 1
       setItem({ ...item, active: newActive })
  }   
    return (
    <div className={`bg-[#e9e9e9] p-5 border border-[#99F6E4] 
      rounded-md w-[280px] duration -500 group ${item.active === 1 ? 'is-active bg-white' : ''}`}>
        <div className="flex items-center">
        <div className="w-full group-[.is-active]:font-bold">
          {item.question}
        </div>
        <div className="text-xl rotate-90 duration-500 cursor-pointer
          group-[.is-active]:rotate-[270deg]"
          onClick={handleToggleActive}>{'>'}</div>
      </div>
      <div className="overflow-hidden max-h-0 duration-500
         group-[.is-active]:max-h-[100px]">
        {item.answer}
      </div>
    </div>
  );
};

export default Accordion;
