import React from 'react';
import ButtonBack from '../Common/ButtonBack';
import Container from '@material-ui/core/Container';
import error from '../../assets/img/error.jpeg';

const styles = {
  paperContainer: {
      height: 1000,
      backgroundImage: `url(${error})`
  }
};

const NotFound = () => {
  return(
    <Container maxWidth={false}>
      <div style={styles.paperContainer}/>
     <ButtonBack/>
     </Container>
)};

NotFound.displayName = 'NotFound';
export default NotFound;