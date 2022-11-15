import React from 'react'
import { Logo } from '../components/nav/Logo'
import { Grid, Typography, Button, Box } from '@mui/material'

const Login = ({ history }) => {
  return (
    <Grid
      sx={{ height: '100vh', width: '100vw', backgroundColor: '#fff' }}
      className='home-container'
      alignContent='center'
      justifyContent='center'>
      <Box
        sx={{ height: '100vh', width: '100vw', p: 3 }}
        className='flex column'>
        <Box className='flex'>
          <Logo />
          <Typography variant='h1' component='h1'>
            Organizer
          </Typography>
        </Box>
        <Box className='flex column'>
          <Typography component='h2' variant='h6' align='center'>
            Easy <em>way</em> to <em>organize</em>.
          </Typography>
          <Typography
            component='p'
            align='center'
            className='title-thin padding-bottom'>
             An easier way to  keep your life organized.
          </Typography>
          <Button
            onClick={() => history.push('/projects')}
            variant='contained'
            size='large'
            className='btn-login'
            color='primary'>
            Login
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default Login
