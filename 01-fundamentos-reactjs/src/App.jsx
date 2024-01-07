import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
function App() {
  return (
    <div>
      <Header/>
      <Post 
      author="Lucas"
      content="Post"
      />
        <Post 
      author="Teste"
      content="Post"
      />
    </div>
  );
}

export default App;
