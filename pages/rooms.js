import React, { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import { getAllRooms } from '../utils/data/roomData';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const getAllTheRooms = () => {
    getAllRooms().then(setRooms);
    console.warn(rooms);
  };

  useEffect(() => {
    getAllTheRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <h1 className="rooms">Browse through Rooms</h1>
        <h5 className="rooms">View the rooms users are designing here on Cozy Nest or share your own room! Get inspired or inspire others with your creativity.</h5>
      </>
      <div className="d-flex flex-wrap">
        {rooms?.map((room) => (
          <section key={`room--${room.id}`} className="room">
            <RoomCard id={room.id} name={room.name} purpose={room.purpose} theme={room.theme} mood={room.mood} deadline={room.deadline} user={room.user} onUpdate={getAllTheRooms} />
          </section>
        ))}
      </div>
    </>
  );
}
