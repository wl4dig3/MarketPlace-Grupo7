

const MisPublicaciones = () => {
    const dataMock = [
        {
            id: 1,
            title: "Publicacion 1",
            content: "Contenido de la publicacion 1",
            imagen: "imagen1.jpg",
        },
        {
            id: 2,
            title: "Publicacion 2",
            content: "Contenido de la publicacion 2",
            imagen: "imagen1.jpg",
        },
        {
            id: 3,
            title: "Publicacion 3",
            content: "Contenido de la publicacion 3",
            imagen: "imagen1.jpg",
        },
        {
            id: 4,
            title: "Publicacion 3",
            content: "Contenido de la publicacion 4",
            imagen: "imagen1.jpg",
        },
        {
            id: 5,
            title: "Publicacion 4",
            content: "Contenido de la publicacion 5",
            imagen: "imagen1.jpg",
        }
    ]
    return (
        dataMock.map((publicacion) => (
            <div key={publicacion.id} className="card">
                <h1 className="text-lg md:text-sm">{publicacion.title}</h1>
                <p className="text-sm md:text-xs">{publicacion.content}</p>
                <img src={publicacion.imagen} alt={publicacion.imagen} className="w-full h-full object-cover" />
            </div>
        ))
    );
    
    
};
export default MisPublicaciones;