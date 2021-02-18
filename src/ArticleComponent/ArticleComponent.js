import React from 'react';
import { 
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
    Divider,
    Button
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useStyles from '../Styles';

const Article = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardContent>

          <Typography variant="h5" component="h2" align='center' gutterBottom={true} >
            {props.author}
          </Typography>

          <Typography align="center" color="textPrimary" variant="body1" gutterBottom={true} >
            {props.text}
          </Typography>

        </CardContent>
        <Divider />

        <Box p={2}>

          <Grid container justify='space-between'>

            <Grid className={classes.statsItem} item>
              <AccessTimeIcon color='action' />
              <Typography variant='body2' color='textSecondary'>
               {props.date + ' ' + props.time}
              </Typography>
            </Grid>

              <Button onClick={()=> props.onMoreComments()} 
                      variant={props.moreComments.length !== 0 || props.comments.length === 0 ? 'disabled' : 'contained'} 
                      color="primary">
                {
                props.moreComments.length === 0 && props.clicked 
                ?
                <img src='loading.gif' alt='loading...' className={classes.loadingButton} />
                : ' More comments'
                }
              </Button>

          </Grid>

        </Box>

      </Card>
    )
}

export default Article;