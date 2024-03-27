import React, { useEffect, useState } from 'react';
import 'assets/styles/index.css';
import { Link } from 'react-router-dom';
import { clearStorage } from '../../utils/storage';
import { reqUser } from 'api/user';
import { useSelector } from 'react-redux';
import Success from './Success';

function Header() {
  const [user, setUser] = useState('');
  const [image, setImage] = useState('');
  const isDeleteModalVisible = useSelector((state) => state.delete.showModal);

  const handleLogOut = () => {
    clearStorage();
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const json = await reqUser();
        setUser(json.data.first_name);
        setImage(json.data.image);
      } catch (error) {
        console.error('Err:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <header>
      <Success />

      <div className={isDeleteModalVisible ? 'blackout' : ''}></div>
      <div className="container header-container">
        <Link className="link" to={'/posts?page=1'}>
          Posts
        </Link>
        <div className="pic">
          <img src={image} alt="" />
          <p>{user}</p>
          <Link className="logout" to="/logIn" onClick={handleLogOut}>
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
