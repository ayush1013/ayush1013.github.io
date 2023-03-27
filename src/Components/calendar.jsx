import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";
// import Calendar from 'react-github-contribution-calendar';


const GithubCalender = () => {

//   var values = {
//   '2022-06-23': 1,
//   '2022-06-26': 2,
//   '2022-06-27': 3,
//   '2022-06-28': 4,
//   '2022-06-29': 4
// }
// var until = '2023-01-30';

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };


  return (
    <div
    className=" items-center p-8 pr-5 hover:scale-105 duration-300 pl-10 w-full bg-gradient-to-b
     from-gray-800
      to-gray-800 text-white"
      >
       
       
       <GitHubCalendar style={{alignItems: "center"}} 
       username="Adii1707" 
       fontSize={18}
       blockSize={18}
      //  transformData={selectLastHalfYear}
       >  
        <ReactTooltip delayShow={20} html />

      </GitHubCalendar>
      {/* <Calendar values={values} until={until} username="Adii1707" /> */}

    </div>
  )
}

export default GithubCalender