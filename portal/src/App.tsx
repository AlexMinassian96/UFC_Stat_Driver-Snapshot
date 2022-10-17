import React from 'react';
import {Helmet} from "react-helmet";
import {Grid, Row, Col} from './components/layout';
import styled from 'styled-components';

const EventStyles = styled(Row)`
  font-size: 18px;
  margin: 1rem;
  padding: 0.5rem;
`
const FighterBookmark = styled(Row)`
  font-size: 18px;
  margin: 0.5rem;
  padding: 0.25rem;
`

const BottomNav = styled(Row)`
  font-size: 18px;
  margin: 0.5rem;
  padding: 0.25rem;
`

function App() {
  return (
  <div>
    <Helmet>
        <title>UFC App</title>
    </Helmet>
    <Grid>
      <Row style={{textAlign: 'center'}}>
        <Col><h1>UFC Stat Driver</h1></Col>
      </Row>
      <EventStyles className='event-row'> 
          <Col size={1}>ID</Col>
          <Col size={3}>Event</Col>
          <Col size={3}>Fighters</Col>
          <Col size={2}>Date</Col>
      </EventStyles>
      <FighterBookmark className='figher-bookmark'>
          <Col size={3}>fighter bookmark</Col>
      </FighterBookmark>
      <BottomNav className='bottom-navbar'>
          <Col>Random Link</Col>
          <Col>Random Link</Col>
      </BottomNav>
    </Grid>
  </div>
  )
};

export default App;
