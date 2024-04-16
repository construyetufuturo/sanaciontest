"use strict"
export class UI{
    constructor(){
    
    }
    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText=text;
        console.log(questionTitle)
    }
    /**
     * 
     * @param {string[]} choices the choices of that question
     */ 
    showChoices(choices,callback){
        const choicesContainer = document.getElementById("choices")
        // console.log(choicesContainer)
        choicesContainer.innerHTML = '';
        for(let i=0; i<choices.length; i++){
            const button = document.createElement('button');
            button.innerText= choices[i];
            button.className = 'button';
            button.addEventListener('click',()=> callback(choices[i]))
            choicesContainer.append(button)
        }
    }
    showLoading() {
        const loading = `<h3>Cargando ...</h3>`
        const element = document.getElementById('quiz')
        element.innerHTML=loading;
        
    }
    
    /**
     * 
     * @param {number} score 
     */
    showScore(score){
        const quizendHTML1 = `
        <h3> Resultado</h3>
        <h2> Puntaje: ${score} /120 </h2>
        <h3> ¡FELICIDADES! </h3>
        <h2> Gozas de una vida plena y estas en un buen camino. </h2>
        `
        const quizendHTML2 = `
        <h3> Resultado</h3>
        <h2> Puntaje: ${score}/120 </h2>
        <h3> ¡FELICIDAES! </h3>
        <h2> Tienes buenos principios, te conoces y estas en evolución </h2>
        `
        const quizendHTML3 = `
        <h3> Resultado</h3>
        <h2> Puntaje: ${score}/120 </h2>
        <h3> Necesitas ver este video </h3>
        <div class="button-box-oferta">
        <a href="sanacion.html" class="button-call"><p>Ver Video</p></a>
        
        </div>
        `
        const element = document.getElementById('quiz')
        if(score==120){
            element.innerHTML = quizendHTML1;
        }
        if(96<score<120){
            element.innerHTML = quizendHTML2;
        }
        if(score<96){
            element.innerHTML = quizendHTML3;
        }
    }
    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total total questions 
     */
    showProgress(currentIndex,total){
        const element = document.getElementById('progress')
        element.innerHTML= ` ${currentIndex} de ${total}`
    }
}