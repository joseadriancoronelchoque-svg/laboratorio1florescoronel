const validarPassword = require('./validarPassword');

describe('Pruebas unitarias para validarPassword', () => {
    test('Debe retornar true para una contraseña válida', () => {
        expect(validarPassword('Password123')).toBe(true);
    });

    test('Debe retornar false para una contraseña muy corta', () => {
        expect(validarPassword('Pass1')).toBe(false);
    });

    test('Debe retornar false para una contraseña sin letra mayúscula', () => {
        expect(validarPassword('password123')).toBe(false);
    });

    test('Debe retornar false para una contraseña sin números', () => {
        expect(validarPassword('PasswordSinNumero')).toBe(false);
    });

    test('Debe retornar false para un texto vacío', () => {
        expect(validarPassword('')).toBe(false);
    });
});