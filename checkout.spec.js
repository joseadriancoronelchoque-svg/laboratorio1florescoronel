const { test, expect } = require('@playwright/test');

test('Prueba de aceptación: completar compra de un producto', async ({ page }) => {
  // 1. Iniciar sesión
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 2. Agregar un producto al carrito
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // 3. Ir al carrito
  await page.click('.shopping_cart_link');

  // 4. Hacer clic en Checkout
  await page.click('#checkout');

  // 5. Completar datos de envío
  await page.fill('#first-name', 'Juan');
  await page.fill('#last-name', 'Pérez');
  await page.fill('#postal-code', '00000');

  // 6. Continuar al resumen de compra
  await page.click('#continue');

  // 7. Finalizar la compra
  await page.click('#finish');

  // 8. Verificar el mensaje de éxito
  const mensajeExito = page.locator('.complete-header');
  await expect(mensajeExito).toHaveText('Thank you for your order!');
});