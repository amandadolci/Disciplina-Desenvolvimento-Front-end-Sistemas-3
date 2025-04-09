import { useState } from 'react';
import axios from 'axios';

interface Usuario {
	id: number;
	name: string;
	email: string;
}

export default function BuscarUsuario() {
	const [id, setId] = useState('');
	const [usuario, setUsuario] = useState<Usuario | null>(null);
	const [erro, setErro] = useState('');

	const buscarUsuario = async () => {
		try {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
			setUsuario(response.data);
			setErro('');
		} catch (error) {
			setUsuario(null);
			setErro(`Usuário não encontrado: "${error}"`);
		}
	};

	return (
		<div>
			<h2>Buscar Usuário</h2>
			<input
				type='text'
				value={id}
				onChange={e => setId(e.target.value)}
				placeholder='Digite o ID do usuário'
			/>
			<button onClick={buscarUsuario}>Buscar</button>

			{usuario && (
				<div>
					<h3>Dados do Usuário</h3>
					<p>Nome: {usuario.name}</p>
					<p>Email: {usuario.email}</p>
				</div>
			)}

			{erro && <p style={{ color: 'red' }}>{erro}</p>}
		</div>
	);
}
