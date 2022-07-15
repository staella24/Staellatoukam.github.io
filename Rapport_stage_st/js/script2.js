let btnFilters = document.querySelectorAll('#filters li a');
let projetElts = document.querySelectorAll('.gallery .imageGallery');

console.log(btnFilters);

for( let btn of btnFilters ){
    btn.addEventListener('click', function(event){
        event.preventDefault();
        /* Supprime la classe active sur tous les boutons */
        for( let btn of btnFilters){
            btn.classList.remove('active');
        }
        /* Ajouter la class active sur le bouton cliqué */
        this.classList.add('active');

        let filter = btn.getAttribute('data-filter');
        console.log(filter);

        for( let projet of projetElts){
            projet.classList.remove('hide');

            if(filter == '*'){
                projet.classList.remove('hide');
            }else if(!projet.classList.contains(filter)){
                projet.classList.add('hide');
            }
        }

    });
}


// Gestion d'affichage de la modale
let modal = document.querySelector('#modal');
let spanX = document.querySelector('#modal .imageModal span');

for(let projet of projetElts){

    projet.addEventListener('click', function(){
        modal.classList.remove('hide');
        // console.log(this);
        console.log(this.childNodes);
        // console.log(this.childNodes[1]);
        // console.log(this.childNodes[1].src);
        let imageModal = document.querySelector('#modal .imageModal img');
        imageModal.src = this.childNodes[1].src;
        imageModal.alt = this.childNodes[1].alt;
    });
}
// Gestion du clic sur la croix pour fermer la modal
spanX.addEventListener('click', function(){
    modal.classList.add('hide');
});
// Gestion du clic sur la modal en general pour la ferme
modal.addEventListener('click', function(){
    modal.classList.add('hide');
});