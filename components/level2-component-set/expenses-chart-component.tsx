import { useEffect, useState } from "react";
import jsonFile from "../../public/lvl2-expenses-chart/data.json"

const Level2ExpensesChartComponent = () => {
  const [currentBar, setCurrentBar] = useState<number>(0);
  const [maxNum, setMaxNum] = useState<number>(0);

  useEffect(() => {
    const amountJson : number[] = jsonFile.data.map(values => values.amount); 
    setMaxNum(Math.max(...amountJson));
  }, []);

  return (
    <div className="text-[#382314] bg-white flex flex-col w-full p-4 rounded-2xl">
      <h4 className="text-lg font-[700]">Spending - last 7 days</h4>
      <div className="p-4 grid grid-flow-col auto-cols-fr w-full h-[40vh]">
        {jsonFile.data.map((d, index) => {
          return (
            <div className="flex flex-col h-full" key={d.day}>
              <div className="px-1 flex-grow grid grid-flow-row items-end">
                <div className={`${(d.amount == maxNum)? "bg-[#76b5bc] hover:bg-[#76b5bc]/80" : "bg-[#ec775f] hover:bg-[#ec775f]/80"} rounded-lg relative flex justify-center`} onMouseOver={() => setCurrentBar(index + 1)} onMouseLeave={() => setCurrentBar(0)} style={{height: d.amount + '%'}} >
                  {(currentBar == index + 1) && <div className="absolute bg-[#382314] p-2 text-white text-xs top-[-40px] ">${d.amount}</div>}
                </div>
              </div>
              <p className="text-center mt-1">{d.day}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h5 className="text-xs text-[#93867b]">Total this month</h5>
          <p className="text-2xl font-[700]">$478.33</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-base font-[700]">+2.4%</p>
          <p className="text-xs text-[#93867b]">from last month</p>
        </div>
      </div>
    </div>
  )
}

export default Level2ExpensesChartComponent
