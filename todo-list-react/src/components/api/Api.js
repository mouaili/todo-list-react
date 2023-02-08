import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Api = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Api</h1>
      <button type='button' onClick={() => navigate('/')}>
        Go back
      </button>
    </div>
  );
};

export default Api;
