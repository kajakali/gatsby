import React from 'react';
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    margin: 10
  },
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
  }
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const imageArray = [

        //<img style={{width: 380}} src= alt='AmeriCorps NCCC' />
          
        {name: 'AmeriCorps', src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/americorps-nccc-logo.png', alt:'AmeriCorps NCCC', text: 'I spent two years in AmeriCorps NCCC, working in teams of ten on various community service projects.'},
        {name: 'Navy', src: 'https://www.navy.mil/management/photodb/webphoto/web_170511-N-SA173-199.jpg', alt: 'CVN 72 does high speed turns', text: 'I spent 6 years in the navy as a Nuclear Machinists Mate'},
        {name: 'Chemistry', src: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=260', alt: 'Chemistry Degree', text: 'I received a Bachelors Degree in Chemistry from Metropolitan State University' },
        {name: 'Prime', src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80', text: 'I received a full stack web development certification, and built a few websites for clients and for myself'},
        {name: 'Space', src: 'https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg', alt: 'Andromeda galaxy', text: 'I fins outer space to be fascinating. I would love to move to Mars!'},
        {name: 'Baseball', src: 'https://images.unsplash.com/photo-1516731415730-0c607149933a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80', alt: 'major league baseballs', text: `I didn't see my first major league baseball game until I moved to Seattle in 2000, but I've loved it ever since. I had attended St Paul Saints games before 2000, so I was puzzled to discover that most minot league teams are associated with a major league team.` },
        {name: 'Rain', src: 'https://images.unsplash.com/photo-1572883781464-e76e5597e432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80', alt: 'walking in the rain in the city', text: `I understand that most people aren't as excited about inclement weather as I am, but I LOVE rain.`},
    ]
    const currentObject = imageArray.filter(item => item.name === props.name);
    return (
        <>
        {currentObject.map( object => (
            <Card className={`${classes.root} ${classes.card}`} key={object.name}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={object.alt}
            height="140"
            image={object.src}
            title={object.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {object.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
{/*           <Button size="small" color="primary">
            Share
          </Button> */}
          <Button variant="contained" size="small" color="primary" onClick={props.click}>
          <Link className={classes.link} to={`/${object.name}/`}>Learn More</Link>
          </Button>

        </CardActions>
      </Card>


        ))}
        </>

      
    );
  }