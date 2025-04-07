import { useState } from 'react';

interface ContadorProps {
	inicial: number;
}

export default function Contador({ inicial }: ContadorProps) {
	const [valor, setValor] = useState(inicial);

	return (
		<div>
			<p>Valor atual: {valor}</p>
			<button onClick={() => setValor(valor + 1)}>+</button>
			<button onClick={() => setValor(valor - 1)}>-</button>
		</div>
	);
}
