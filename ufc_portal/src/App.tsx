import React from 'react';
import { Grid, Row, Col } from './components';
import { EventCard } from './components/Event';
import EventTable from './components/Event/EventTable';
import { FighterCard } from './components/Fighters/FighterCard';

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col></Col>
          <Col><EventTable /></Col>
          <Col><EventCard /></Col>
        </Row>
        <Row>
          <Col><FighterCard /></Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
