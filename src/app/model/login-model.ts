export interface UsuarioRequest{ // debe ser igual al UsuarioRequest del backend

    correoElectronico: string;
    contrasena: string;
}

export interface UsuarioResponse{

    auntenticado: boolean;
    correoEletronico: string;
    nombre: string;
    apellido: string;
}