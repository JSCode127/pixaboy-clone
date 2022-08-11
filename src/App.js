import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData,setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
  
    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=28889404-4bed2ece8420a2027e6401f69&q=${ref.current.value}&image_type=photo`;
    //APIをたたくデータフェッチング
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      });

  }
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
