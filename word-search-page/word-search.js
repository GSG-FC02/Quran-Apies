//Selectors
function get(id1) {
    return document.getElementById(id1);
}
let inputValue = get("search-input");
let searchButton = get("search-button");
let searchResult = get("search-result");
let addResult = document.createElement('li');
let word = inputValue.value;
var verse;
searchButton.addEventListener("click", search );


function search(){
    let url = "https://unpkg.com/quran-json@1.0.1/json/quran/en.json";
    fetch(url)

    .then(response=>{
        findConsole = response.json();
        console.log(findConsole);
        return findConsole  ;
    })
    
    .then(findConsole =>{
            for ( let i = 0; i< findConsole.length; i++ ){ 
                console.log(word);
                console.log(findConsole[i].text)
            if ( word ===  findConsole[i].text.includes(word)) {
                var sorahNumber = findConsole[i].surah_number;
                var verseNumber = findConsole[i].verse_number;
                 verse = findConsole[i].text;
            }
        }
        return verse; 
    })
}
