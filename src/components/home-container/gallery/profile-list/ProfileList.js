import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ProfileList.css'
import HouseIcon from '@mui/icons-material/House'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import EventIcon from '@mui/icons-material/Event'
import AssessmentIcon from '@mui/icons-material/Assessment'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

import CircularStatic from '../../../commons/CircularProgressWithLabel'

function ProfileList({ account, contract, setSelectedProfile }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(false)
  console.log('** data', data)
  const history = useHistory()
  const [profiles, setProfiles] = useState([
    {
      image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd1003938.jpg',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },
    {
      image:
        'https://www.nps.gov/npgallery/GetAsset/a930d297-bb2c-4b55-b021-1e543e2f720c/proxy/hires',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },
    {
      image:
        'https://npgallery.nps.gov/GetAsset/F7CCAE73-155D-4519-3EBC331967FA0595/original.jpg',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },

    {
      image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/fseprd1003938.jpg',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },
    {
      image:
        'https://www.nps.gov/npgallery/GetAsset/a930d297-bb2c-4b55-b021-1e543e2f720c/proxy/hires',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },
    {
      image:
        'https://npgallery.nps.gov/GetAsset/F7CCAE73-155D-4519-3EBC331967FA0595/original.jpg',
      organization: 'National Park Service',
      title: 'Cleanup at Fort Washington Park',
      place: 'National Capital Parks-East, Maryland',
      type: 'Event',
      date: '12/10/2022',
      difficulty: 'Average',
      physical_address:
        'National Capital Parks-East 13551 Fort Washington Rd Fort Washington, Maryland 20744',
      contact: 'rebecca_george@partner.nps.gov',
      phone: '889 909-88-88',
      description:
        'Join us to put in some hard work and beautify Fort Washington Parks landscape by cleaning up the shoreline. Meet us at the lighthouse parking area. Gloves, trash pickers, and bags will be provided. Contact Barbara Wadding for further details: barbara_wadding@nps.gov .',
      skills: 'General Assistance',
      background: 'No',
      virtualOrSite: 'On-Site',
    },
  ])

  useEffect(() => {
    if (contract) {
      getAllClasses()
    }
  }, [contract])

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  const getAllClasses = async () => {
    const temp = []
    const res = await contract.getAllGroups()
    console.log(
      '🚀 ~ file: ProfileList.js ~ line 124 ~ getAllClasses ~ res',
      res,
    )

    for (let i = 0; i < res.length; i++) {
      let obj = {}
      const organizer = res[i][4]
      const reviews = res[i].reviews
      const totalDonations = res[i]['totalDonations'].toString()
      const fundraiserId = res[i].id.toString()
      const nftStorageURL = res[i][1]

      const ipfs_cid = nftStorageURL.substring(33, 92)
      let getNFTStorageData = await fetch(nftStorageURL)
      console.log(
        '🚀 ~ file: ProfileList.js ~ line 139 ~ getAllClasses ~ getNFTStorageData',
        getNFTStorageData,
      )
      let post = await getNFTStorageData.json()
      const data = JSON.parse(post.description)
      obj.fundraiserId = fundraiserId
      obj.organizer = organizer
      obj.totalDonations = totalDonations
      obj.classDificulty = data.classDificulty
      obj.className = data.className
      obj.image = data.image
      obj.created = data.created
      obj.department = data.department
      obj.instructorName = data.instructorName
      obj.position = data.position
      obj.cid = ipfs_cid
      obj.rating = [
        { label: 'Awesome 5', rate: 95 },
        { label: 'Great 4', rate: 10 },
        { label: 'Good 3', rate: 5 },
        { label: 'Ok 2', rate: 0 },
        { label: 'Awful 1', rate: 0 },
      ]
      obj.reviews = reviews
      obj.quality = data.quality
      obj.targetAmmount = data.targetAmmount
      temp.push(obj)
    }

    setData(temp)
  }

  const details = (profile) => {
    console.log('click details', profile)
    localStorage.removeItem('selectedProfile')
    localStorage.setItem('selectedProfile', profile)
    setSelectedProfile(profile)
    history.push(`/profile/details/${profile.cid}`)
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      <p>The Best Volunteer Opportunities in New York | VolunteerMatch</p>

      <Grid container spacing={24}>
        {profiles.length ? (
          profiles.map((profile, index) => (
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
              <Card sx={{ maxWidth: 200 }} onClick={() => details(profile)}>
                <CardMedia
                  component="img"
                  height="194"
                  image={profile.image}
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
                    <p className="gallery-name"> {profile.organization}</p>
                  </div>
                  <p className="gallery-professor">{profile.title}</p>
                  <br />
                  <hr style={{ border: '1px solid #ccc' }} />
                  <br />

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <HouseIcon className="icons-list" />
                    <p className="gallery-professor">{profile.title}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <PersonPinIcon className="icons-list" />
                    <p className="gallery-professor">{profile.type}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <EventIcon className="icons-list" />
                    <p className="gallery-professor">{profile.date}</p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <AssessmentIcon className="icons-list" />
                    <p className="gallery-professor">
                      Difficulty: {profile.difficulty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <h2>No Professors Yet...</h2>
        )}
      </Grid>

      {/* Volunteer matching */}

      {contract ? (
        ''
      ) : (
        <center>
          {' '}
          <h2>Please log in to continue...</h2>
        </center>
      )}

      {contract && !loading ? (
        <div>
          <Grid container spacing={24}>
            {data.length ? (
              data.map((profile, index) => (
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
                  <Card sx={{ maxWidth: 200 }} onClick={() => details(profile)}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={profile.image}
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
                        <p className="gallery-name"> {profile.className}</p>
                      </div>

                      <p className="gallery-professor">
                        {profile.instructorName}
                      </p>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Professors Yet...</h2>
            )}
          </Grid>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default ProfileList
