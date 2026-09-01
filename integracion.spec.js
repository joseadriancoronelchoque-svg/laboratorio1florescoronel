const { test, expect } = require('@playwright/test');

test('Prueba de integración: verificar comentarios del post 1', async ({ request }) => {
    // 1. Obtener el post con id 1
    const responsePost = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(responsePost.ok()).toBeTruthy();
    const post = await responsePost.json();
    expect(post.id).toBe(1);

    // 2. Obtener los comentarios asociados a ese post
    const responseComments = await request.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    expect(responseComments.ok()).toBeTruthy();
    const comments = await responseComments.json();

    // 3. Verificar que TODOS los comentarios pertenezcan al post 1 usando .every()
    const todosDelPost1 = comments.every(comment => comment.postId === 1);
    expect(todosDelPost1).toBeTruthy();

    // Opcional: Asegurarse de que el array no esté vacío para una prueba real sólida
    expect(comments.length).toBeGreaterThan(0);
});