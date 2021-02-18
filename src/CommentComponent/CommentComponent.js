import React from 'react';
import { 
    Typography,
    Box,
    Grid,
    Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useStyles from '../Styles';

const Comment = (props) => {
    const classes = useStyles();

    return(
        <div>
          <Box p={2}>

            <Grid container justify='space-between'>

              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
              >
                {props.author}
              </Typography>
              
              <Grid className={classes.statsItem} item>
                <AccessTimeIcon color='disabled' />
                <Typography variant='body2' color='textSecondary'>
                {props.date + ' ' + props.time}
                </Typography>
              </Grid>

            </Grid>

            <Typography  color="textSecondary" variant="body1">
              {props.text}
            </Typography>
          </Box>
          <Divider />
        </div>
    )
}

export default Comment;