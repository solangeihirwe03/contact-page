import React from 'react';
import Location from '../components/Location';
import Form from '../components/FormContact';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-6">
      <Location />
      <Form />
    </div>
  );
}

export default Home
