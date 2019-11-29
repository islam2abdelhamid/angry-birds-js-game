function importJsFile(path) {
    let imported = document.createElement('script');
    imported.src = path;
    document.head.appendChild(imported);
}

importJsFile("assets/js/Bird.js")


document.addEventListener('DOMContentLoaded',  () => {
   let b1 = new Bird();
   b1.createBird();

})
