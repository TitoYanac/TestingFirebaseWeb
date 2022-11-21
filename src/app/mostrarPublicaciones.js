const postList = document.querySelector('.posts');

export const setupPosts = (data) => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            console.log(post);
            const li = `
            <li class="list-group-item list-group-item-action">
            <h5>${post.titulo}</h5>
            <p>${post.titulo}</p>
            </li>
            `;
            html += li;
        });
        postList.innerHTML = html;
    }else{
        postList.innerHTML = '<h1>Inicia sesión para ver las publicaciones.</h1>'
    }
}