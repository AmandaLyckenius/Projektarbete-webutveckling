
//KOD FÖR FILTERFUNKTION PÅ TEKNIKSIDAN

const dropDown = document.getElementById('tech-skills');        //Lagrar dropdown listan i en variabel

dropDown.addEventListener("change", function () {

    const selectedSkill = dropDown.value;                           //Lagrar valt värde i en variabel

    const articles = document.querySelectorAll(".tech-box")     //Hämtar alla artiklar med klassen tech-box i en variabel

    for (let i = 0; i < articles.length; i++) {          //loopar igenom artiklarna

        const article = articles [i];
        const headline = article.querySelector(".tech-headline").textContent.toLowerCase();  //Hämtar texten i headline i lower case
        const description = article.querySelector(".description").textContent.toLowerCase(); //hämtar texten i beskrivningen i lower case

        if (headline.includes(selectedSkill) || description.includes(selectedSkill)) {        //Om selectedSkill matchar texten i headline eller description visas den
            article.style.display = "block";
        } else {
            article.style.display = "none";                     //Om innehållet inte matchar ska det inte visas någon artikel
        }


    };
});