export interface RegistroRequest{ //

    tipoDocumento: number;
    documento: number;
    nombres: string;
    apellidos: string;
    correoElectronico: string;
    contrasena: string;
    confirmarContrasena: string;
    
}

export interface RegistroResponse{

    registrado: boolean;
    mensaje: string;
}

export interface TipoDocumento{

    id: number;
    nombre: string;
}