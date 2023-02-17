import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PieceForm from '../../../components/forms/PieceForm';
import { getSinglePiece } from '../../../utils/data/pieceData';

export default function EditPiece() {
  const [editPiece, setEditPiece] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSinglePiece(id).then(setEditPiece);
  }, [id]);

  return (
    <PieceForm pieceObj={editPiece} />
  );
}
