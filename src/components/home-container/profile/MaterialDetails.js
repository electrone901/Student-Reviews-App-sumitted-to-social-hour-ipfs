import React from 'react'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

function MaterialDetails({ materialSelected }) {
  materialSelected = {
    image:
      'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png',
    title: 'Introduction to Programming',
    description:
      'Here are my notes for the mid term on the last two labs. I hope it helps you =)',
    creator: '0xjhfs2435',
  }
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <img src={materialSelected.image} alt="" />
        </Grid>
        <Grid item xs={4}>
          <p> by {materialSelected.creator}</p>
          <p> Title: {materialSelected.title}</p>
          <p> Description {materialSelected.description}</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default MaterialDetails
