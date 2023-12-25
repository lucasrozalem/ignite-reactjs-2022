import { Post } from "./Post";

function App() {
  return (
    <div>
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
