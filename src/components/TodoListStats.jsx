import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsStateSelector } from "../recoil/atom/todoListAtom";

const TodoListStats = () => {
  const { totalNumber, totalCompleted, totalUncompleted, percentComplete } =
    useRecoilValue(todoListStatsStateSelector);

  const percentCom = Math.round(percentComplete * 100);
  return (
    <ul>
      <li>Total: {totalNumber}</li>
      <li>com: {totalCompleted}</li>
      <li>uncom: {totalUncompleted}</li>
      <li>percent: {percentCom}%</li>
    </ul>
  );
};

export default TodoListStats;
