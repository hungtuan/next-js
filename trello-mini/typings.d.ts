interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = string;

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  content: string;
  $updatedAt: string;
  column: string;
}
