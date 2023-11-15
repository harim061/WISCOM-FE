import React from 'react';

import ProjectList from '../components/Map/ProjectList';
import MapWrapper from '../components/Map/MapWrapper';

export default function Map() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <MapWrapper />
      <ProjectList />
    </div>
  );
}
