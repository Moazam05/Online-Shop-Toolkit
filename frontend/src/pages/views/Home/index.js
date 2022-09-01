import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../../../components/Layout';
import Cards from './Components/Cards';
import { productsFetch } from './Store';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state?.products);

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  return (
    <Layout>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 col-lg-4'>
            {loading ? <h3>Loading...</h3> : <Cards />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
