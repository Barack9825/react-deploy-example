import Tasklist from "./components/tasklist"
import TaskForm from  "./components/TaskForm"



function App(){

 return <main className="bg-zinc-900 h-screen">
  <div className="container mx-auto">
    <TaskForm/>
    <Tasklist/>
    </div>
  </main>  
}
export default App