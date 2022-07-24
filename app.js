const form = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");
let les_taches = [];

form.addEventListener('submit', event => {
    event.preventDefault();

    const texte = input.value.trim();
    if(texte !== "") {
        ajouterTache(texte);
        input.value = "";
    }
})

function ajouterTache(texte) {
    const todo = {
        texte, 
        // affiche le nbre de millisecondes de l'annee depuis le 1 janvier 1970
        id: Date.now()
    }

    afficherListe(todo)
}

function afficherListe(todo) {
    const item = document.createElement("li");
    item.setAttribute("data-key", todo.id);

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.addEventListener("click", tacheFaite);
    item.appendChild(input);

    const txt = document.createElement("span");
    txt.innerText = todo.texte;
    item.appendChild(txt);

    const btn = document.createElement("button");
    btn.addEventListener('click', supprimerTache);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/fermer.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    liste.appendChild(item);
    les_taches.push(item);
}

function tacheFaite(e) {
    e.target.parentNode.classList.toggle("fin_tache")
}

function supprimerTache(e) {
    les_taches.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')) {
            el.remove();
            les_taches = les_taches.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}