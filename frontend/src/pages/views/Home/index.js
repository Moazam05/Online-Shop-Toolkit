// React Imports
import React, { useEffect } from 'react';
// React Redux
import { useDispatch, useSelector } from 'react-redux';
// Custom Imports
import Layout from '../../../components/Layout';
import Cards from './Components/Cards';
// Store Imports
import { productsFetch } from './Store';

const Home = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state?.products);
  const { items, loader } = store;

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  return (
    <Layout>
      <div className='container'>
        {loader && <h3>Loading...</h3>}
        <div className='row mt-5'>
          {items.map((item, index) => (
            <div className='col-md-6 col-lg-4 mb-5' key={index}>
              {<Cards product={item} />}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
