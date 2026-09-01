const { test, expect } = require('@playwright/test');

test('Ejercicio 1 - Agregar dos productos, eliminar uno y verificar contador', async ({ page }) => {
    // 1. Iniciar sesión
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 2. Agregar dos productos distintos al carrito
    const botonesAgregar = page.locator('.btn_inventory');
    await botonesAgregar.nth(0).click(); // Agrega el primer producto
    await botonesAgregar.nth(1).click(); // Agrega el segundo producto

    // 3. Ir a la página del carrito
    await page.click('.shopping_cart_link');

    // 4. Eliminar un producto desde la página del carrito
    const botonesEliminar = page.locator('.cart_button');
    await botonesEliminar.nth(0).click();

    // 5. Verificar que el contador (.shopping_cart_badge) indique 1
    const contador = page.locator('.shopping_cart_badge');
    await expect(contador).toHaveText('1');
});