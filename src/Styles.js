import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minHeight: 200,
      maxHeight: 300,
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '0.4em'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
      }
    },
    statsItem: {
      alignItems: 'center',
      display: 'flex'
    },
    commentsSection: {
      marginTop: 30,
    },
    loadingButton: {
      width: '100px',
      height: '25px',
      objectFit: 'cover',
    }
  });

  export default useStyles;