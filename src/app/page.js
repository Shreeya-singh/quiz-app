"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProgressBar from "./components/ProgressBar";
import { timerFormated } from "./utils";
import quizData from "./utils/quizData"
export default function Home() {

  const [timer, setTimer] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(0)
  const totalItems = 30;
  const filledItems = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filledWidth = totalItems > 0 ? (activeQuiz+1 / quizData.length) * 100 : 0;

  const isLastQuiz = () => {
    return activeQuiz + 1 === quizData.length
  }

  const handleClick = (quiz) => {
    if (isLastQuiz()) return
    setActiveQuiz(activeQuiz + 1)
  }

  return (
    <div className="max-w-[414px]  bg-white shadow-lg p-3 rounded-lg overflow-hidden">
      <div className="max-w flex items-center justify-center mb-5">
        <Image src="/appLogo.png" width={173} height={36} priority />
      </div>

      <div>
        <ProgressBar width={filledWidth} />
      </div>
      <div className="flex items-center justify-between mb-8 mt-5">
        <div className="invisible pl-4">
          {activeQuiz!==0 && <Image src="/img/rightArrow.png" width={10} height={10} priority />}
        </div>
        <div className="flex items-center gap-[2px]">
          <Image src="/img/time.png" width={14} height={14} priority />
          <h3 className="text-[16px] font-[600] font-poppins ml-1 ">{timerFormated(timer)}</h3>
        </div>
        <div className="pr-4" onClick={handleClick}>
          {!isLastQuiz() && <Image src="/img/rightArrow.png" width={6} height={10} priority />}
        </div>
      </div>

      <div className="min-w-[320px] px-4 items-center  mb-5">
        <div className="w-full max-w-4xl mx-auto">
          <div className="col-span-10 sm:col-span-12 lg:col-span-6">
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <Image src={quizData[activeQuiz].mainImage} layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-10">
        <p className="text-[16px] font-[600] font-poppins text-center mb-5">Choose your answer:</p>
        <div className="grid grid-cols-3 gap-4 ">
          {quizData[activeQuiz].options.map((option, index) => (
            <button key={option.url}
              onClick={handleClick}
              className={`flex items-center justify-between relative focus:outline-none focus:ring focus:ring-[#0070F3] hover:outline-none hover:ring-1 hover:ring-[#0070F3] text-white font-bold  px-4 rounded px-1 mt-4`}>
              <div className="text-[34px] font-[600] font-poppins text-[#0070F3]">
                <span>{option.label}</span>
              </div>
              <div className="relative w-16 h-10">
                <Image src={option.url} layout="fill" objectFit="contain" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
