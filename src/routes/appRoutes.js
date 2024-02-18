import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import Queries from '../pages/AboutPage/Queries';
import ContactUsPage from '../pages/ContactUsPage/ContactUsPage';
import HocDemoPage from '../pages/HocDemoPage/HocDemoPage';
import HomePage from '../pages/HomePage/HomePage';
import StyledComponentDemo from '../pages/HomePage/StyleComponent/StyleComponent';
import HooksDemoPage from '../pages/HooksDemoPage/HooksDemoPage';
import InstaFeedPage from '../pages/InstaFeedPage/InstaFeedPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';
// import PageNotFound from '../pages/PageNotFound/PageNotFound';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import UnitTestingDemo from '../pages/UnitTesting Demo/UnitTestingDemo';
// rafce
export const appRoutes = (
   <Routes>
    {/* URL configuration */}
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
      {/*<Route path="/contact-us" element={<ContactUsPage />} />*/}
      <Route path="/queries" element={<Queries />} />
    <Route path="/contact-us" element={<ContactUsPage />} />
    <Route path="/styled-comp-demo" element={<StyledComponentDemo />} />
    <Route path="/hoc-demo" element={<HocDemoPage />} />
    <Route path="/insta-feed" element={<InstaFeedPage />} />
    <Route path="/hooks-demo" element={<HooksDemoPage />} />
    <Route path="/products-demo" element={<ProductsPage />} />
    <Route path="/unit-testing-demo" element={<UnitTestingDemo />} />
    <Route path="/page-not-found" element={<PageNotFound />} />
    <Route path="*" element={<Navigate to="page-not-found"/>} />
   </Routes>
 );
