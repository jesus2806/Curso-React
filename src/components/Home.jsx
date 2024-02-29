import React from 'react'
import NavigateBar from './NavigationBar'
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import data from '../data/employees 2.json'
import Grid from '@mui/material/Grid';


function stringToColor(string) {
    let hash = 0;
    let i;
   
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
   
    let color = '#';
   
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
   
    return color;
  }
   
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 150,
        height: 150,
        fontSize: 80,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }



const Home = () => {
  return (
    <div>
    <NavigateBar></NavigateBar>
     <Grid container spacing={2} sx={{width:'98%', p:2}}>
    {
        data.Employees.map((employee, index) => (   
       <Grid key={index} item xl={2} lg={3}  md={4} sm={6} xs={12}>
        <Card sx={{ maxWidth: 300 }}>
      <Stack direction="row" spacing={2} sx={{display: 'flex', justifyContent:'center', pt:2}}>
      <Avatar { ...stringAvatar(employee.Name)} />
    </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.Name}
        </Typography>
        {
            employee.Skills.map(skill =>(
                <Typography gutterBottom variant="h6" component="div">
                    Skills: {skill}
                </Typography>
            ))
        }

        <Typography variant="body2" color="text.secondary">
          Spot: {employee.Spot}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Contract: {employee.Contract.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            employee.Documents.map(document =>(
                <Typography variant="body2" color="text.secondary">
                    {document.Name}, Expiration: {document.Expiration}
                </Typography>
            ))
          }
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>

        ))
    }
    </Grid>
    </div>
    
  )
}

export default Home