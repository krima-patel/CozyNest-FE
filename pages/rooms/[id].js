import { useRouter } from 'next/router';
import { useEffect, useCallback, useState } from 'react';
import PieceCard from '../../components/PieceCard';
import { viewRoomDetails } from '../../utils/data/roomData';

export default function ViewRoom() {
  const [roomData, setRoomData] = useState({});
  const [piecesData, setPiecesData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getRoomDetails = useCallback(() => viewRoomDetails(id).then((data) => {
    setRoomData(data.roomData);
    setPiecesData(data.pieceData);
    console.log(data);
  }), [id]);

  // const getRoomDetails = () => {
  //   viewRoomDetails(id).then((data) => {
  //     setRoomData(data?.roomData || {});
  //     setPiecesData(data?.pieceData || []);
  //   });
  // };

  useEffect(() => {
    getRoomDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <h2 style={{ color: '#DC6434', margin: '20px' }}>{roomData.name}</h2>
      <h5 style={{ color: '#344729', margin: '20px' }}>Purpose of my room: {roomData.purpose}</h5>
      <h3 style={{ color: '#344729', margin: '20px' }}>Theme I&#39;m going for:</h3>
      <p>
        {roomData.theme}
      </p>
      <p>
        The ambience I&#39;m trying to achieve for this room: {roomData.mood}
      </p>
      <p>
        I want to complete this room by: {roomData.deadline}
      </p>
      <div className="piecesContainer">
        {piecesData?.map((piece) => (
          <PieceCard
            key={piece.id}
            id={piece.id}
            pieceType={piece.piece_type}
            imageUrl={piece.image_url}
            user={piece.user}
          />
        ))}
      </div>
    </div>
  );
}
