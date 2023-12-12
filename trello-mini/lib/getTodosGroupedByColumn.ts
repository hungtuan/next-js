import ApiClient from "@/services/api";

export const getTodosGroupedByColumn = async () => {
  const apiClient = new ApiClient();
  try {
    const data = await apiClient.getTasks();

    const columnsData = data.data.columns;
    const tasksData = data.data.tasks;
    console.log(data);

    const columns = columnsData.reduce((acc, column) => {
      acc.set(column.columnName, {
        id: column.columnName,
        todos: [],
      });
      return acc;
    }, new Map<TypedColumn, Column>());

    tasksData.forEach((task) => {
      const columnId = task.column;
      if (columns.has(columnId)) {
        columns.get(columnId)!.todos.push({
          $id: task._id,
          $createdAt: task.createdAt,
          content: task.content,
          $updatedAt: task.updatedAt,
          column: columnId,
        });
      }
    });

    const columnTypes: TypedColumn[] = Array.from(columns.keys());

    const sortedColumns = new Map<TypedColumn, Column>(
      [...columns.entries()].sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );

    const board: Board = {
      columns: sortedColumns,
    };

    console.log(board);

    return board;
  } catch (error) {
    // localStorage.removeItem("apiKey");
    // window.location.reload();
  }
};
