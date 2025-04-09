import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import Home from './trilha03/exercicio01/Home';
import About from './trilha03/exercicio01/About';
import Contact from './trilha03/exercicio01/Contact';
import Animal from './trilha03/exercicio02/Animal';
import Rooms from './trilha03/exercicio03/Rooms';
import RoomDetails from './trilha03/exercicio03/RoomDetails';
import BookingSuccess from './trilha03/exercicio03/BookingSuccess';
import BuscarUsuario from './trilha04/exercicio01/BuscarUsuario';
import CriarUsuario from './trilha04/exercicio02/CriarUsuario';

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

		<section>
			<h1>Trilha 03</h1>
			<section>
				<Router>
					<nav>
						<h2>Exercício 01 e 03</h2>
						<Link to='/'>Home</Link>|<Link to='/about'>Sobre nós</Link>|
						<Link to='/contact'>Contato</Link>
					</nav>

					<section>
						<h2>Exercício 02</h2>
						<Link to={`/animal/elefante`}>Animal</Link>
					</section>

					<section>
						<h2>Exercício 04</h2>
						<Link to={`/rooms`}>Página Inicial - Reservas</Link>
					</section>

					<h2>Visualização dos exercícios da Trilha 03:</h2>
					<Routes>
						{/* Exercício 01 e 03 */}
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						{/* Exercício 02 */}
						<Route path='/animal/:name' element={<Animal />} />
						{/* Exercício 04 */}
						<Route path='/rooms' element={<Rooms />} />
						<Route path='/room/:id' element={<RoomDetails />} />
						<Route path='/booking-success' element={<BookingSuccess />} />
					</Routes>
				</Router>
			</section>
		</section>

		<section>
			<h1>Trilha 04</h1>
			<section>
				<h2>Exercício 01: Buscar Usuário</h2>
				<BuscarUsuario />
			</section>

			<section>
				<h2>Exercício 02: Criar Usuário</h2>
				<CriarUsuario />
			</section>
		</section>
	</div>
);

export default App;
