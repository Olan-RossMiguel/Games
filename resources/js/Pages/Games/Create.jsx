import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Components/Navbar';
import TextInput from '@/Components/TextInput';
import axios from 'axios'; // Importar Axios
import { useState } from 'react';

export default function Create() {
    const [name, setName] = useState('');
    const [classification, setClassification] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    const submit = (e) => {
        e.preventDefault();

        // Validación de campos
        if (
            name === '' ||
            classification === '' ||
            price === '' ||
            description === ''
        ) {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Datos que se enviarán al servidor
        const gameData = {
            name: name,
            classification: classification,
            price: price,
            description: description,
        };

        // Enviar la solicitud POST usando Axios
        axios
            .post('/games', gameData)
            .then((response) => {
                console.log('Juego guardado:', response.data);
                setError('');
                setShowModal(true); // Mostrar el modal cuando el juego se guarda correctamente

                // Resetear el formulario
                setName('');
                setClassification('');
                setPrice('');
                setDescription('');
            })
            .catch((error) => {
                console.error('Error al guardar el juego:', error);
                setError('Hubo un error al guardar el juego');
            });
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar />
            <div>Crear nuevo Juego</div>
            <form onSubmit={submit}>
                <InputLabel htmlFor="name" value="Nombre" />
                <TextInput
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <InputLabel htmlFor="classification" value="Clasificación" />
                <TextInput
                    name="classification"
                    value={classification}
                    onChange={(e) => setClassification(e.target.value)}
                />

                <InputLabel htmlFor="price" value="Precio" />
                <TextInput
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <InputLabel htmlFor="description" value="Descripción" />
                <TextInput
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {error && <p className="text-red-500">{error}</p>}

                <button
                    className="rounded-lg bg-black p-4 text-white"
                    type="submit"
                >
                    Guardar
                </button>
            </form>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="rounded-lg bg-white p-6 shadow-lg">
                        <p className="font-bold text-black">
                            Juego guardado correctamente
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
                                onClick={closeModal}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
