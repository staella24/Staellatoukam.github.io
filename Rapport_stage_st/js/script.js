const header = document.querySelector('header');

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 150) { 
      if(!header.classList.contains("small")) {
        header.classList.add("small");
      }
    }
    else {
        if(header.classList.contains("small")) {
            header.classList.remove("small");
          }
    }
  }


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