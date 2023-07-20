import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterAtom } from "../recoil/atom/todoListAtom";

const TodoFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterAtom);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoFilters;
