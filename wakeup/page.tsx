import React from 'react';
import DateSelector from '../components/DateSelector';
import TimeSelector from '../components/TimeSelector';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 text-center text-gray-600">
        &copy; 2023 기상 챌린지. All rights reserved.
      </div>
    </footer>
  );
};


interface RemainingTimeProps {
  text: string;
}

const RemainingTime: React.FC<RemainingTimeProps> = ({ text }) => {
  return (
    <div className="flex gap-3 self-start mt-6 text-base leading-snug text-center text-zinc-400">
      <div className="flex shrink-0 self-start w-3 h-3 rounded-full" />
      <div className="flex-auto">{text}</div>
    </div>
  );
};

export {Footer, RemainingTime}




const ChallengeSetup: React.FC = () => {
  return (
    <main className="flex flex-col pt-6 mt-7 w-full bg-white rounded-[30px_30px_0px_0px]">
      <section className="flex flex-col items-center mr-2.5">
        <div className="flex flex-col items-center max-w-full rounded-none w-[328px]">
          <h2 className="text-base font-semibold tracking-wide text-black">
            챌린지 할 기간을 선택해주세요
          </h2>
          <div className="flex flex-col self-stretch py-3 mt-2.5 bg-white rounded-xl shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            <div className="self-center text-xs font-bold tracking-tighter text-black">
              20th March, 2024
            </div>
            <DateSelector
              date="2024-03-20"
              label="From"
              onDateChange={() => {}}
            />
            <div className="flex gap-5 justify-between mt-2 w-40 max-w-full text-xs font-medium tracking-tighter whitespace-nowrap text-slate-400">
              <div>To</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11845c02abd590d6043386d3676d332fa9f7194b160d880ab3cd8401ff2634ac?apiKey=164dcb8ef1b04a5fa6307c706951832a&&apiKey=164dcb8ef1b04a5fa6307c706951832a" className="object-contain shrink-0 aspect-[0.95] w-[18px]" alt="" />
            </div>
            <DateSelector
              date="2024-03-27"
              label="To"
              onDateChange={() => {}}
            />
          </div>
          <h2 className="mt-4 text-base font-semibold tracking-wide text-black">
            기상할 시간을 선택해주세요.
          </h2>
        </div>
        <TimeSelector
          startTime="07.00"
          endTime="08.00"
          onTimeChange={() => {}}
        />
      </section>
      <button className="px-16 py-3 mx-8 mt-4 w-full text-base font-medium leading-snug text-center text-white bg-green-400 rounded-2xl max-w-[311px]">
        생성하기
      </button>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bdeb42885923733b2f2a2cdd4d015ad23969ba56474e40b92ff631d4dd3d2c?apiKey=164dcb8ef1b04a5fa6307c706951832a&&apiKey=164dcb8ef1b04a5fa6307c706951832a" className="object-contain z-10 mt-2.5 -mb-2.5 w-full aspect-[3.51]" alt="" />
    </main>
  );
};

export default ChallengeSetup;


interface PeriodButtonProps {
  period: string;
}

export const PeriodButton: React.FC<PeriodButtonProps> = ({ period }) => {
  return (
    <button className="period-button" tabIndex={0}>
      {period}
    </button>
  );
};
