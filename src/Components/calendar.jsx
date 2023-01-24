import React from 'react'
import GitHubCalendar from "react-github-calendar";
const calendar = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
        <GitHubCalendar
          username="ayush1013"
          transformData={selectLastHalfYear}
          width="90vw"
        />
    </div>
  )
}

export default calendar