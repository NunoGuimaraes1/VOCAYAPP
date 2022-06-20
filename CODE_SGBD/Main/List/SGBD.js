import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoYqgDasoFO-kl0RTaW9qZjN1ntWInHbI",
  authDomain: "interdisciplinar-73cf1.firebaseapp.com",
  projectId: "interdisciplinar-73cf1",
  storageBucket: "interdisciplinar-73cf1.appspot.com",
  messagingSenderId: "901342934320",
  appId: "1:901342934320:web:5edf533e725437112bc4f5",
  measurementId: "G-5Y4J8Z5KNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
//Get Langs
const LangsEnglish = doc(db, 'Langs', "English");
const LangsPortuguese = doc(db, 'Langs', "Portuguese");
const LangsSpanish = doc(db, 'Langs', "Spanish");
const LangsFrench = doc(db, 'Langs', "French");
const LangsFinnish = doc(db, 'Langs', "Finnish");

const QuestionsEnglish = doc(db, 'Questions', "English")
const QuestionsPortuguese = doc(db, 'Questions', "Portuguese")
const QuestionsSpanish = doc(db, 'Questions', "Spanish")
const QuestionsFrench = doc(db, 'Questions', "French")
const QuestionsFinnish = doc(db, 'Questions', "Finnish")

//-----------------------------------------------------------

function getWords(language, inner) {

  let Adjectives = getDoc(language).then(array => {
    let adjectives = array.data().Adjectives;
    let adjectivesId = Object.keys(array.data().Adjectives).sort();


    for (let i = 0; i < adjectivesId.length; i++) {
      const adjetivoId = adjectivesId[i];
      const adjetivo = adjectives[adjetivoId];

      let text = document.createElement('p');
      text.innerHTML = adjetivo;
      document.getElementById(inner).appendChild(text);

    }
  })
}
getWords(LangsPortuguese, "wordsNative")
getWords(LangsEnglish, "wordsLearning")

//-----------------------------------------------------------

function getQuestion(language, question) {
getDoc(language).then(question => {

    console.log(question.data().question);

    /* let text = document.createElement('p');
    text.innerHTML = adjetivo;
    document.getElementById("'" + inner + "'").appendChild(text); */

});
}

getQuestion(QuestionsPortuguese, "Q1") //Q1 nao dá read
getQuestion(QuestionsEnglish, "Q1")

















/* let AdjectivesPortuguese = getDoc(LangsPortuguese).then(array => {
  let adjectives = array.data().Adjectives;
  let adjectivesId = Object.keys(array.data().Adjectives).sort();


  for (let i = 0; i < adjectivesId.length; i++) {
    const adjetivoId = adjectivesId[i];
    const adjetivo = adjectives[adjetivoId];

    let text = document.createElement('p');
    text.innerHTML = adjetivo;
    document.getElementById('wordsNative').appendChild(text);

  }
})

let AdjectivesEnglish = getDoc(LangsEnglish).then(array => {
  let adjectives = array.data().Adjectives;
  let adjectivesId = Object.keys(array.data().Adjectives).sort();


  for (let i = 0; i < adjectivesId.length; i++) {
    const adjetivoId = adjectivesId[i];
    const adjetivo = adjectives[adjetivoId];

    let text = document.createElement('p');
    text.innerHTML = adjetivo;
    document.getElementById('wordsLearning').appendChild(text);

  }
}) */






