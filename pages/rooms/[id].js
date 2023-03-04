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
      <h1 style={{ color: '#a06881', margin: '10px 20px' }}><b>Designing</b>: {roomData.name}</h1>
      <h3 style={{ color: '#361d18', margin: '10px 20px' }}><b>Purpose of my room</b>: {roomData.purpose}</h3>
      <h5 style={{ color: '#361d18', margin: ' 10px 20px' }}><b>Theme</b> I&#39;m going for:</h5>
      <h6 style={{ margin: '10px 20px' }}>
        {roomData.theme}
      </h6>
      <h6 style={{ margin: '10px 20px' }}>
        The <b>ambience</b> I&#39;m trying to achieve for this room: {roomData.mood}
      </h6>
      <h6 style={{ margin: '10px 20px' }}>
        Expected Completion Date for Room: {roomData.deadline}
      </h6>
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
