import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OptionsBar from './components/OptionsBar';
import Cards from './components/Cards';
import Temp from './components/Temp';
import RightAddress from './components/RightAddress';
import MobileDiv from './components/MobileDiv';
import Modal2 from './components/Modal2';
import { useAuth0 } from '@auth0/auth0-react';
// import Modal from './components/Modal';
import { useState } from 'react';
import ImgBase from './components/ImgBase';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [groupModal, setGroupModal] = useState(false);
  function toggleGroupModal() {
    setGroupModal((prevGroupModal) => !prevGroupModal);
  }

  const [showModal, setShowModal] = useState('none');
  function toggleModal(value) {
    setShowModal(value);
  }
  function escaping() {
    setShowModal('none');
  }

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Navbar showModal={showModal} setShowModal={toggleModal} />
      {!isAuthenticated && <Hero />}
      <OptionsBar groupModal={groupModal} setGroupModal={toggleGroupModal} />
      <MobileDiv />
      <Temp
        showModal={showModal}
        setShowModal={setShowModal}
        groupModal={groupModal}
      />
      <Signup
        showModal={showModal}
        setShowModal={toggleModal}
        escaping={escaping}
      />
      <Login
        showModal={showModal}
        setShowModal={toggleModal}
        escaping={escaping}
      />
    </>
  );
}

export default App;
