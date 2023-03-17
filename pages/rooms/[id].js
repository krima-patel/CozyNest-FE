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
      <h5 style={{ color: '#565264', textAlign: 'left' }}><b>Room I am Designing</b>: {roomData.name}</h5>
      <h5 style={{ color: '#565264', textAlign: 'left' }}><b>Purpose of the Room</b>: {roomData.purpose}</h5>
      <h5 style={{ color: '#565264', textAlign: 'left' }}><b>Theme of the Room</b>: {roomData.theme}</h5>
      <h5 style={{ color: '#565264', textAlign: 'left' }}><b>The Room&#39;s Ambience</b>: {roomData.mood}</h5>
      <h5 style={{ color: '#565264', textAlign: 'left' }}><b>Expected Completion Date for Room</b>: {roomData.deadline}</h5>
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
