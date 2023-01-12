import React from 'react';

import Layout from '../Layout/Layout';
import Games from '../components/Game/Games';

const Home = () => {
    return (
        <div>
            <Layout>
               <Games />
           </Layout>
        </div>
    );
};

export default Home;