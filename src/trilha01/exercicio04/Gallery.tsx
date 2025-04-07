import './gallery.css';

const images = [
	'https://i.pravatar.cc/300',
	'https://i.pravatar.cc/300',
	'https://i.pravatar.cc/300',
	'https://i.pravatar.cc/300',
	'https://i.pravatar.cc/300',
	'https://i.pravatar.cc/300',
];

export default function Gallery() {
	return (
		<div className='gallery'>
			{images.map((image, i) => (
				<img key={i} src={image} alt={`Avatar ${i}`} />
			))}
		</div>
	);
}
