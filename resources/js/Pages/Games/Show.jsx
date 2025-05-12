export default function Show({ game, image_url }) {
    return (
        <>
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-3xl font-bold text-gray-800 mb-2">{game.name}</h1>
  <h1 className="text-xl font-semibold text-blue-600 mb-2">{game.classification}</h1>
  <p className="text-gray-600 mb-4">{game.description}</p>
  
  <div className="flex items-center mb-4">
    <span className="text-2xl font-bold text-green-600">${game.price}</span>
  </div>
  
  <img 
    src={image_url} 
    alt="Imagen del juego" 
    className="w-full h-64 object-cover rounded-lg mb-4"
  />
  
  <textarea 
    name="coment" 
    id="coment" 
    placeholder="Escribe tu comentario"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
    rows="4"
  />
  
  <button className="w-full bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
    Enviar
  </button>
</div>
        </>
    );
}
