import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="h-screen w-screen bg-neutral-900">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>

      {/* Main content */}
      <div className="relative z-10">
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
