import React from 'react';
import Card from '../../component/Card/Card'
import './Projects.css';

function Projects() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const onClick = () => {
        handleOpenModal();
    }
    const onClickCard = () => {
        handleOpenModal();
    }
    const cards = [
        {
            image: 'https://via.placeholder.com/300',
            description: 'This is a short description for the first card.',
        },
        {
            image: 'https://via.placeholder.com/300',
            description: 'This is a short description for the second card.',
        },
        {
            image: 'https://via.placeholder.com/300',
            description: 'This is a short description for the third card.',
        },
    ];

    return (
        <div className="Projects">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} description={card.description} onClick={onClickCard} />
            ))}
        </div>
    );
}

export default Projects;
