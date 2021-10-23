
                <Modal isOpen={modalEditar}>
                    <ModalHeader>
                    <div>
                        <h3>Editar Usuario</h3>
                    </div>
                    </ModalHeader>
                    <ModalBody>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                        className="form-control"
                        readOnly
                        type="text"
                        name="id"
                        value={usuarioSeleccionado && usuarioSeleccionado.id}
                        />
                        <br />

                        <label>Nombre</label>
                        <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Teléfono</label>
                        <input
                        className="form-control"
                        type="tel"
                        name="telefono"
                        value={usuarioSeleccionado && usuarioSeleccionado.telefono}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Email</label>
                        <input
                        className="form-control"
                        type="email"
                        name="minutos"
                        value={usuarioSeleccionado && usuarioSeleccionado.email}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Rol</label>
                        <input
                        className="form-control"
                        type="text"
                        name="rol"
                        value={usuarioSeleccionado && usuarioSeleccionado.rol}
                        onChange={handleChange}
                        />
                        <br />

                        <label>Estado</label>
                        <input
                        className="form-control"
                        type="text"
                        name="estado"
                        value={usuarioSeleccionado && usuarioSeleccionado.estado}
                        onChange={handleChange}
                        />
                        <br />
                    </div>
                    </ModalBody>
                    <ModalFooter>
                    <button className="btn btn-primary" onClick={()=>editar()}>
                        Actualizar
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={()=>setModalEditar(false)}
                    >
                        Cancelar
                    </button>
                    </ModalFooter>
                </Modal>
