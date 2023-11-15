import React, { useEffect, useState } from 'react';
import * as M from './MapStyle';

export default function MapWrapper() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamIndex((prevIndex) => (prevIndex + 1) % 11);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <M.MapContainer>
      <M.Title>WISCOM MAP</M.Title>
      <M.Floorplan>
        <M.RoomR
          style={{
            top: '10px',
            left: '100px',
            backgroundColor: activeTeamIndex === 0 ? '#7ce06b' : undefined,
          }}>
          01
        </M.RoomR>
        <M.Room style={{ top: '100px', left: '10px', backgroundColor: activeTeamIndex === 1 ? '#7ce06b' : undefined }}>
          02
        </M.Room>
        <M.Room style={{ top: '100px', left: '90px', backgroundColor: activeTeamIndex === 2 ? '#7ce06b' : undefined }}>
          03
        </M.Room>
        <M.Room style={{ top: '100px', left: '150px', backgroundColor: activeTeamIndex === 3 ? '#7ce06b' : undefined }}>
          04
        </M.Room>
        <M.Room style={{ top: '190px', left: '150px', backgroundColor: activeTeamIndex === 4 ? '#7ce06b' : undefined }}>
          05
        </M.Room>
        <M.Room style={{ top: '190px', left: '90px', backgroundColor: activeTeamIndex === 5 ? '#7ce06b' : undefined }}>
          06
        </M.Room>
        <M.Room style={{ top: '280px', left: '10px', backgroundColor: activeTeamIndex === 6 ? '#7ce06b' : undefined }}>
          07
        </M.Room>
        <M.Room style={{ top: '280px', left: '90px', backgroundColor: activeTeamIndex === 7 ? '#7ce06b' : undefined }}>
          08
        </M.Room>
        <M.RoomR
          style={{ top: '280px', left: '150px', backgroundColor: activeTeamIndex === 9 ? '#7ce06b' : undefined }}>
          10
        </M.RoomR>
        <M.RoomR
          style={{ bottom: '10px', left: '30px', backgroundColor: activeTeamIndex === 8 ? '#7ce06b' : undefined }}>
          09
        </M.RoomR>
        <M.RoomR
          style={{ bottom: '10px', left: '125px', backgroundColor: activeTeamIndex === 10 ? '#7ce06b' : undefined }}>
          11
        </M.RoomR>

        <M.Door />

        <M.LineContainer>
          <M.Line />
          <M.Line />
        </M.LineContainer>

        <M.Info>Info</M.Info>
      </M.Floorplan>
    </M.MapContainer>
  );
}
