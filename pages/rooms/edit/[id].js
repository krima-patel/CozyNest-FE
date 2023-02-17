import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RoomForm from '../../../components/forms/RoomForm';
import { getSingleRoom } from '../../../utils/data/roomData';

export default function EditRoom() {
  const [editRoom, setEditRoom] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleRoom(id).then(setEditRoom);
  }, [id]);

  return (
    <RoomForm roomObj={editRoom} />
  );
}
