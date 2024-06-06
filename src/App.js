import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [postsActiveUser, setPostsActiveUser] = useState();
  const [activeId, setActiveId] = useState();

  console.log(users, posts);

  const gettingUsers = () => {
    const users = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  };

  const gettingPosts = () => {
    const posts = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  };

  const showPosts = (id) => {
    setActiveId(id);
    const filteredPosts = posts.filter((post) => post.id == id);
    console.log(filteredPosts);
    setPostsActiveUser(filteredPosts);
  };

  useEffect(() => {
    gettingUsers();
    gettingPosts();
  }, []);
  return (
    <div className="App">
      {users?.map((user, key) => (
        <div>
          {user.name}
          <button onClick={() => showPosts(user.id)}>Afficher posts</button>
          {activeId == user.id &&
            postsActiveUser.map((post, key) => (
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={() => setActiveId(null)}>Hide</button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
