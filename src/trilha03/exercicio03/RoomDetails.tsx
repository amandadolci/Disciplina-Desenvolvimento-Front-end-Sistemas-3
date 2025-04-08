import { useParams, useNavigate } from 'react-router-dom';

export default function RoomDetails() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const handleBooking = () => {
		navigate('/booking-success');
	};

	return (
		<div>
			<h1>Detalhes do Quarto {id}</h1>
			<button onClick={handleBooking}>Reservar Agora</button>
		</div>
	);
}
