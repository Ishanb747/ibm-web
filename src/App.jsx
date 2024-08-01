import React from 'react';
import Logo from './components/Logo';
import AboutUs from './components/AboutUs';
import QuoteSection from './components/QuoteSection';
import AIModelDescription from './components/AIModelDescription';
import MLModelLink from './components/MLModelLink';
import Footer from './components/Footer';
import './App.css';

function App() {
  const appStyle = {
    backgroundImage: `url(les.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="App" style={appStyle}>
      <header>
        <Logo />
      </header>
      <main>
        <QuoteSection />
        <AIModelDescription />
        <MLModelLink />
      </main>
      <Footer />
    </div>
  );
}

export default App;