import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home'
import BottomPopup from './components/BottomPopup'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  //state which is responsible for storing an array of images which is fetched from unsplash API 
  const [imageList, setImageList] = useState([]);

  //state which is responsible for setting the data inside the popup 
  const [modalData, setModalData] = useState({});

  // state which is responsible for setting the display of the popup 
  // if its false, it means popup is hidden 
  // if its true, it means popup shows up over your main website 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageList(response.data));
  }, [])

  const openModal = id => {
    const selected_image = imageList.find(single_elem => single_elem.id === id);
    setModalData(selected_image);
    setShowModal(true); 
  }

  const closeModal = () => setShowModal(false);

  return (
    <>
       <NavigationBar/>
       <Home images={imageList} cardClick={openModal}/>
       <BottomPopup showModal={showModal} closeModal={closeModal} modalData={modalData} />

    </>
  );
}

export default App;