import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import BecomeVolunteer from '../BecomeVolunteer/BecomeVolunteer';
import EventPage from '../EventPage/EventPage';
import EventSinglePage from '../EventSinglePage/EventSinglePage';
import CausesPage from '../CausesPage/CausesPage';
import CausesSinglePage from '../CausesSinglePage/CausesSinglePage';

import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import VolunteerPageS2 from '../VolunteerPageS2/VolunteerPageS2';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import DonatePage from '../DonatePage/DonatePage';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'

import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="become-volunteer" element={<BecomeVolunteer />} />
          <Route path="event" element={<EventPage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="service" element={<ServicePages />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="causes" element={<CausesPage />} />
          <Route path="causes-single/:slug" element={<CausesSinglePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          {/* <Route path="volunteer-1" element={<VolunteerPage />} />
          <Route path="volunteer-single/:slug" element={<TeamSinglePage />} />
          <Route path="donate" element={<DonatePage />} /> */}

          <Route path='*' element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
