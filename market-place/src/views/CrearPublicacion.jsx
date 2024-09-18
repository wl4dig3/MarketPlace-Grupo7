import React from 'react';

const CrearPublicacion = () => {
  return (
    <div className="crear-publicacion-container">
      <h1>Crear Nueva Publicación</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" name="description" />
        </div>
        <div className="form-group">
          <label htmlFor="image-url">URL de Imagen</label>
          <input type="text" id="image-url" name="image-url" />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
