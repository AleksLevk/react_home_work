import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const handleMouseEnter = (e) => {
  e.target.style.background = '#550000'
}
const handleMouseLeave = (e) => {
  e.target.style.background = '#E50914'
}
export default function SingleCard({id, name, time, image, onClickHandler}) {
  return (
    <Card sx={{ width: '395px', height: '222px', position: 'relative', margin: '35px'}}>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt={name}
        />
        <div style={{position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     background:'linear-gradient(90deg,rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)',
                     display: 'flex',
                     flexDirection: 'column',
                     padding: '10px'
                    }}
                     >
                      <Typography variant='h6' style={{color: '#fff', textAlign: 'left', marginTop: '60px'}}>
                        {name}
                      </Typography>
                      <Typography variant='body2' style={{color: '#fff', textAlign: 'left', }}>
                        {time}
                      </Typography> 
        </div>
        
        <Button style={{border: '1px solid #E50914',
                        borderRadius: '0', 
                        background: '#E50914', 
                        width: '100px',
                        height: '30px',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        position: 'absolute',
                        bottom: '50px',
                        left: '10px',
                        transition: 'background 0.2s, color 0.2s',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() =>onClickHandler(id)}
                        >
                            Show More
                        </Button>
    </Card>
  );
}