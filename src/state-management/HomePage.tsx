import useAuthStore from "./auth/store";
import TaskList from "./tasks/TaskList";

const HomePage = () => {
  const { user } = useAuthStore();

  return (
    <>
      {user ? <p>User: {user}</p> : null}
      <TaskList />
    </>
  );
};

export default HomePage;
