import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import CircularStatic from '../../commons/CircularProgressWithLabel'

function ClassNotes({
  account,
  contractData,
  setSelectedMaterial,
  data,
  setOpen,
  notes,
  allNotes,
}) {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const details = (note) => {
    setSelectedMaterial(note)
    setOpen(true)
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={24}>
            {allNotes.length ? (
              allNotes.map((note, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  spacing={1}
                  className="swap-card"
                  key={index}
                >
                  <Card sx={{ maxWidth: 200 }} onClick={() => details(note)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={note.image}
                      alt="Profile"
                    />
                    <CardContent style={{ padding: '10px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingBottom: '5px',
                        }}
                      >
                        {/* <p className="gallery-name"> {note.className}</p> */}
                      </div>

                      {/* <p className="gallery-professor">{note.instructorName}</p> */}
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Materials Yet...</h2>
            )}
          </Grid>
        </div>
      )}

      {/* Similar Notes */}
      <br />
      <br />
      <h3>Similar Notes to this class </h3>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid container spacing={24}>
            {notes.length ? (
              notes.map((note, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  spacing={1}
                  className="swap-card"
                  key={index}
                >
                  <Card sx={{ maxWidth: 200 }} onClick={() => details(note)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={note.image}
                      alt="Profile"
                    />
                    <CardContent style={{ padding: '10px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingBottom: '5px',
                        }}
                      >
                        <p className="gallery-name"> {note.className}</p>
                      </div>

                      <p className="gallery-professor">{note.instructorName}</p>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Materials Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default ClassNotes
