document.addEventListener('DOMContentLoaded', () => {
    // Exemplo simples de animação para os títulos das postagens
    const posts = document.querySelectorAll('.post-title');
    
    posts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.color = '#ff7f50'; // Muda a cor ao passar o mouse
        });
        
        post.addEventListener('mouseleave', () => {
            post.style.color = ''; // Restaura a cor original
        });
    });

    // Exemplo de "Leia mais" interativo
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Você clicou para ler mais!");
            // Você poderia substituir por um redirecionamento para outra página ou carregamento dinâmico
        });
    });
});
