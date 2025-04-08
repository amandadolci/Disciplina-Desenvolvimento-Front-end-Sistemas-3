import { useParams } from 'react-router-dom';

export default function Animal() {
	const { name } = useParams<{ name: string }>();

	return (
		<div>
			<h1>Detalhes do Animal</h1>
			<p>Nome: {name}</p>
		</div>
	);
}
