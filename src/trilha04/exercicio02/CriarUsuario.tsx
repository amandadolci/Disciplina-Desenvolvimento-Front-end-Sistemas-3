import { useState } from 'react';
import axios from 'axios';

export default function CriarUsuario() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [mensagem, setMensagem] = useState('');
	const [erro, setErro] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
				name: nome,
				email: email,
			});

			setMensagem(`Usuário criado com ID: ${response.data.id}`);
			setErro('');
			setNome('');
			setEmail('');
		} catch (error) {
			setMensagem('');
			setErro(`Erro ao criar usuário: ${error}`);
		}
	};

	return (
		<div>
			<h2>Criar Novo Usuário</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nome:</label>
					<input type='text' value={nome} onChange={e => setNome(e.target.value)} required />
				</div>
				<div>
					<label>Email:</label>
					<input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
				</div>
				<button type='submit'>Cadastrar</button>
			</form>

			{mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}
			{erro && <p style={{ color: 'red' }}>{erro}</p>}
		</div>
	);
}
