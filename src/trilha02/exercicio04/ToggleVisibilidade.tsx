import { useState } from 'react';

interface ToggleVisibilidadeProps {
	texto: string;
}

export default function ToggleVisibilidade({ texto }: ToggleVisibilidadeProps) {
	const [visivel, setVisivel] = useState(false);

	return (
		<div>
			{visivel && <p>{texto}</p>}
			<button onClick={() => setVisivel(!visivel)}>{visivel ? 'Ocultar' : 'Mostrar'}</button>
		</div>
	);
}
