import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { getSinglePiece } from '../../utils/data/pieceData';

export default function ViewPiece() {
  const [pieceDetails, setPieceDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePiece(id).then(setPieceDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Image src={pieceDetails.image_url} alt={pieceDetails.piece_type} style={{ width: '300px', margin: '20px 0' }} />
      </div>
      <div style={{ margin: '20px' }}>
        <h4 style={{ color: '#344729' }}>This is a {pieceDetails.piece_type}</h4>
        <h4 style={{ color: '#DC6434' }}>Where I found this: {pieceDetails.source}</h4>
        <h4 style={{ color: '#344729' }}>Condition: {pieceDetails.condition}</h4>
      </div>
    </div>
  );
}
