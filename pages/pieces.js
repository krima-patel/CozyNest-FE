import React, { useEffect, useState } from 'react';
import PieceCard from '../components/PieceCard';
import { getAllPieces } from '../utils/data/pieceData';

export default function Pieces() {
  const [pieces, setPieces] = useState([]);
  const getAllThePieces = () => {
    getAllPieces().then(setPieces);
    console.warn(pieces);
  };

  useEffect(() => {
    getAllThePieces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <h1 className="pieces">Browse through Pieces</h1>
        <h5 className="pieces">Here, you can view pieces and items users are sharing when designing their rooms. Share your pieces below with Cozy Nest users!</h5>
      </>
      <div className="d-flex flex-wrap">
        {pieces?.map((piece) => (
          <section key={`piece--${piece.id}`} className="piece">
            <PieceCard id={piece.id} pieceType={piece.piece_type} imageUrl={piece.image_url} source={piece.source} condition={piece.condition} user={piece.user} onUpdate={getAllThePieces} />
          </section>
        ))}
      </div>
    </>
  );
}
