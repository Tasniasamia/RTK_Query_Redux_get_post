
import './App.css'
import Card from './Components/Card/Card'
import Specefic from './Components/Card/Specefic'
import { useSetPostDataMutation } from './Redux/Api'

function App() {
  const [updatePost,{data:postData}]=useSetPostDataMutation()
  const handleUpdatePost = () => {
    updatePost({ title: "name", name: "Tasnia sharin", roll: 181798 });
  };

  console.log(postData);

  return (
    <>
      RTK Query
      <Card />
      <Specefic />
      <button onClick={handleUpdatePost}>Update Post</button>
    </>
  );
}

export default App
