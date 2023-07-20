import { atom, selector } from "recoil";

export const todoListAtom = atom({
  key: "todoListAtom",
  default: [],
});

export const todoListFilterAtom = atom({
  key: "todoListFilterAtom",
  default: "show All",
});

export const filterdTodoListStateSelector = selector({
  key: "filterdTodoListStateSelector",
  get: ({ get }) => {
    const list = get(todoListAtom);
    const filter = get(todoListFilterAtom);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsStateSelector = selector({
  key: "todoListStatsStateSelector",
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const totalNumber = todoList.length;
    const totalCompleted = todoList.filter((item) => item.isComplete).length;
    const totalUncompleted = totalNumber - totalCompleted;
    const percentComplete =
      totalNumber === 0 ? 0 : totalCompleted / totalNumber;

    return {
      totalNumber,
      totalCompleted,
      totalUncompleted,
      percentComplete,
    };
  },
});
