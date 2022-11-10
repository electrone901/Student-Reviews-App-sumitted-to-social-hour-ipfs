import React, { useEffect, useState } from 'react'
import logoTest from '../../images/llogo.png'
import { Link } from 'react-router-dom'

import {
  Grid,
  StylesProvider,
  Container,
  Card,
  TextField,
  MenuItem,
  Button,
} from '@material-ui/core'
import './LandingPage.css'
import img1 from '../../images/animate 1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img4.png'

function LandingPage(props) {
  return (
    <StylesProvider injectFirst>
      <div className="container">
        <div className="decorationNav"></div>

        <section className="landingBanner">
          <img src={logoTest} className="logoTest" alt="" />
          <p className="banner-title">
            Find a class to rate or check its ratings before registering.
          </p>
          <Button
            variant="contained"
            component={Link}
            to="/classes"
            className="banner-btn"
          >
            Get Started
          </Button>{' '}
          <br />
          <p className="banner-lookup">I'd like to look up a class by name</p>
        </section>

        <section className="howItWorks">
          <p className="banner-title2">Join the Student Reviews App Family</p>
          <p className="">The way it works is simple, fast and free. </p>

          <div className="parent-flex">
            <div className="flex-item">
              <img src={img1} alt="" style={{ height: '250px' }} />
              <p className="item-text">Manage and edit your ratings</p>
            </div>

            <div className="flex-item">
              <img src={img2} alt="" style={{ height: '300px' }} />
              <p className="item-text">Your ratings are always anonymous</p>
            </div>

            <div className="flex-item">
              <img src={img3} alt="" style={{ height: '250px' }} />
              <p className="item-text">Like or dislike ratings</p>
            </div>
          </div>
        </section>
      </div>
    </StylesProvider>
  )
}

export default LandingPage
