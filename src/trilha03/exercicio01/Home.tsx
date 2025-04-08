import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Página Inicial</h1>
			{/* Exercício 03 */}
			<button onClick={() => navigate('/about')}>Ir para Sobre Nós</button>
		</div>
	);
}
