import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import HomeCleaning from './pages/services/HomeCleaning';
import CommercialCleaning from './pages/services/CommercialCleaning';
import PestControl from './pages/services/PestControl';
import GarbageRemoval from './pages/services/GarbageRemoval';
import LawnGarden from './pages/services/LawnGarden';
import CarValet from './pages/services/CarValet';
import { ModalProvider } from './hooks/useModal';
import './styles/App.css';

function App() {
    return (
        <ModalProvider>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/home-cleaning" element={<HomeCleaning />} />
                        <Route path="/services/commercial-cleaning" element={<CommercialCleaning />} />
                        <Route path="/services/pest-control" element={<PestControl />} />
                        <Route path="/services/garbage-removal" element={<GarbageRemoval />} />
                        <Route path="/services/lawn-garden" element={<LawnGarden />} />
                        <Route path="/services/car-valet" element={<CarValet />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ModalProvider>
    );
}

export default App;