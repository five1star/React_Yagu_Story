import React,{useState} from 'react';
import LeftBlock from './components/LeftBlock';
import TalkingSpace from './components/TalkingSpace';
import Nav from './components/Nav';


const App= ()=>{
  const [name, setName]=useState('HB');
  const [tempName,setTempName]=useState('');

  const handleClick=()=>{
    setName(tempName);
    setTempName('')
    // console.log('this is from name:',name)
  }

  const handleOnchange =(e)=>{
    setTempName(e.target.value);
    // console.log('this is temp name:',tempName)
  }

  return (<>
    <header className="header">
      <Nav name={name} change={handleOnchange} click={handleClick} />
    </header>
    <main className="main">
      <TalkingSpace />
      <LeftBlock />
    </main>
    </>
  );
}

export default App;
