import React, {useState,useEffect} from 'react';
import {FormControl, Input,IconButton} from '@material-ui/core';
import './App.css';
import Message from './components/Message'
import db from './firebase' 
import firebase from 'firebase'
import FlipMove from 'react-flip-move'; 
import SendIcon from '@material-ui/icons/Send';

const App = () => {
  const [input , setInput] = useState("") 
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("")

  useEffect(()=>{
    setUsername(prompt("Enter your username"))
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc => ({ id:doc.id,message:doc.data()})))
    })
  },[])

  const sendMessages = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages,{username:username,message:input}])
    setInput("")
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt="facebook"></img>
      <h1>Hello</h1>

      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter your message" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessages}>
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>

      <FlipMove typeName={null}>
      {
        messages.map(({message,id})=>
            <Message key={id} message={message} username={username}/>
        )
      }
      </FlipMove> 
    </div>
  );
}

export default App;
