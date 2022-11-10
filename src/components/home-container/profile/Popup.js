import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import download from '../../../images/download.png'
import './Popup.css'
export const Popup = ({ text, closePopup, selectedMaterial }) => {
  console.log(
    '🚀 ~ file: Popup.js ~ line 4 ~ Popup ~ selectedMaterial',
    selectedMaterial,
  )
  return (
    <div className="popup-container">
      <div className="popup-body">
        <Grid container spacing={3} style={{ paddingTop: '2rem' }}>
          <Grid item xs={8}>
            <p
              className="title"
              style={{
                textAlign: 'start',
                paddingLeft: '1.6rem',
                paddingBottom: '.8rem',
              }}
            >
              {' '}
              Title: {selectedMaterial.title}
            </p>
            <img
              src={selectedMaterial.image}
              alt="file"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={4} style={{ padding: '1rem', paddingRight: '2rem' }}>
            <button onClick={closePopup} style={{ float: 'right' }}>
              Close X
            </button>
            <br />
            <br />
            <br />
            <img src={download} alt="" style={{ width: '120px' }} />
            <p className="gallery-name"> by {selectedMaterial.creator}</p>
            <p className="position" style={{ textAlign: 'justify' }}>
              {' '}
              {selectedMaterial.description}
            </p>
            <br />
            <Button
              style={{
                width: '80%',
                background: 'linear-gradient(180deg,#ffde9e 50%,#fcb957)',
                color: 'black',
              }}
              component={Link}
              to="/donate"
            >
              Tip Now
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
