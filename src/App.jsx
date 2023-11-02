
import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import SearchImage from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setimages] = useState([])
  const HandleSubmit = async (term) =>{
    const result = await SearchImage(term);
    setimages(result)
  }
  return (
    <div className="App">
      <SearchHeader search={HandleSubmit}/>
      <ImageList imagesPlaceHolder={images}/>
    </div>
  );
}

export default App;
