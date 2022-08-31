import React from 'react';
import Layout from '../../../components/Layout';
import Cards from './Components/Cards';

const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 col-lg-4'>
            <Cards />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
