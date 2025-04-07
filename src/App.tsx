import React from 'react';
import Button from './trilha01/exercicio01/Button';
import ProfileCard from './trilha01/exercicio02/ProfileCard';
import Card from './trilha01/exercicio03/Card';
import Gallery from './trilha01/exercicio04/Gallery';
import Navbar from './trilha01/exercicio05/Navbar';
import Form from './trilha01/exercicio06/Form';
import Contador from './trilha02/exercicio01/Contador';
import Saudacao from './trilha02/exercicio02/Saudacao';
import ListaTarefas from './trilha02/exercicio03/ListaTarefas';
import ToggleVisibilidade from './trilha02/exercicio04/ToggleVisibilidade';

const App = () => (
	<div>
		<section>
			<h1>Trilha 1</h1>
			<section>
				<h2>Exercício 1</h2>
				<Button />
			</section>

			<section>
				<h2>Exercício 2</h2>
				<ProfileCard />
			</section>

			<section>
				<h2>Exercício 3</h2>
				<Card />
			</section>

			<section>
				<h2>Exercício 4</h2>
				<Gallery />
			</section>

			<section>
				<h2>Exercício 5</h2>
				<Navbar />
			</section>

			<section>
				<h2>Exercício 6</h2>
				<Form />
			</section>
		</section>

		<section>
			<h1>Trilha 02</h1>
			<section>
				<h2>Exercício 01</h2>
				<Contador inicial={10} />
			</section>

			<section>
				<h2>Exercício 02</h2>
				<Saudacao nomeInicial='Amanda' />
			</section>

			<section>
				<h2>Exercício 03</h2>
				<ListaTarefas
					tarefasIniciais={['Fazer trilha 3', 'Estudar para a prova', 'Terminar projeto']}
				/>
			</section>

			<section>
				<h2>Exercício 04</h2>
				<ToggleVisibilidade texto='Toggle' />
			</section>
		</section>
	</div>
);

export default App;
