import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name='Khulna' speciality='Bibhag'></District>
      <District name='Dhaka' speciality='Bibhag'></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div className='py-5'>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  );
}

function Post(props) {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      margin: '20px', padding: '20px',
      borderRadius: '20px', border: '4px solid red'
    }}>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  )
}





const districtStyle = {
  backgroundColor: 'skyblue',
  padding: '20px',
  margin: '20px',
  borderRadius: '20px'
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.speciality}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower} className='btn btn-outline-primary my-2'>Boost</button>
    </div>
  );
}

export default App;
