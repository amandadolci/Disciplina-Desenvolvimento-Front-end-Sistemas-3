import { useState } from 'react';

interface SaudacaoProps {
	nomeInicial: string;
}

export default function Saudacao({ nomeInicial }: SaudacaoProps) {
	const [nome, setNome] = useState(nomeInicial);
	const [novoNome, setNovoNome] = useState('');

	return (
		<div>
			<h1>Olá, {nome}!</h1>
			<input
				type='text'
				value={novoNome}
				onChange={e => setNovoNome(e.target.value)}
				placeholder='Digite um novo nome'
			/>
			<button onClick={() => setNome(novoNome)}>Atualizar</button>
		</div>
	);
}
