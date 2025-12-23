import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';


// Import your page components here
// import Home from './Home';
// import About from './About';
// import NotFound from './NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
           
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;