/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { Image } from 'react-bootstrap';
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
        <img src={pieceDetails.image_url} alt={pieceDetails.piece_type} className="piece-image" />
      </div>
      <div>
        <h3 style={{ color: '#565264', textAlign: 'left' }}><b>The Piece</b>: {pieceDetails.piece_type}</h3>
        <h4 style={{ color: '#565264', textAlign: 'left' }}><b>Where I Found It</b>: {pieceDetails.source}</h4>
        <h4 style={{ color: '#565264', textAlign: 'left' }}><b>Condition I Want It In</b>: {pieceDetails.condition}</h4>
      </div>
    </div>
  );
}
