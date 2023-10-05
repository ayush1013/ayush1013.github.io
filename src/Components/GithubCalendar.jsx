import { Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalendar = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box
      // boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
      // shadow={"lg"}
      border="1px solid #E4E2E2"
      borderRadius={"7px"}
      w="fit-content"
      p="10px"
      pr="20px"
    >
      <GitHubCalendar
        username="ayush1013"
        transformData={selectLastHalfYear}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </Box>
  );
};

export default GithubCalendar;
