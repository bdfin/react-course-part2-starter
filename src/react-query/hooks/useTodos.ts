import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../contants";
import todoService, { Todo } from "../services/todoService";

export default function useTodos() {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10000,
  });
}
