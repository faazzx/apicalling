import logo from './logo.svg';
import './App.css';
import {getposts, getRandomUser} from "./api/index";
import  {useEffect, useState} from 'react';
import PostCard from "./components/PostCard";
import UserCard from './components/UserCard';


function App() {
      

  const [data , setData]= useState(null);

  const [userData, setuserData]= useState(null);
    useEffect(()=>{
       getposts().then(posts=> setData(posts));
    },[])

    useEffect(()=>{
      getRandomUser().then((user)=> setuserData(user.results[0]))
    }, []);

    console.log(userData);

    const refresh =()=>{
      getRandomUser().then((user) => setuserData(user.results[0]))

    };

  return (

    
    <div className="App">
      {userData && <UserCard data={userData}/>}
      <button onClick={refresh}>refresh user</button>
      
      {
        data ?  data.map((e) => <PostCard  title = {e.title} body= {e.body}/>) : <p> No data </p>
      }
    </div>
  );
}

export default App;
