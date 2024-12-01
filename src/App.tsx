import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import globalStore from './Store/store'
import { urlData } from './apiUrl'
import Header from './Components/Header';
import Banner from './Components/Banner';
import ChooseUs from './Components/ChooseUs';
import SpaceOverview from './Components/SpaceOverview';
import DownloadApp from './Components/DownloadApp';
import Footer from './Components/Footer';

const App = observer(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(urlData?.spaceOverview);
      const data = await response.json();
      await globalStore.setData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleResize = () => {
    globalStore.setIsMobile(window.innerWidth <= 768); 
  };


  useEffect(() => {
    fetchData();
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="App">
      <Header />
      <Banner />
      <main className='content container'>
        <ChooseUs />
        <SpaceOverview />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
})

export default App;
