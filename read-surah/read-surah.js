 // the names of html-id and javascript variables were named for search functionality
 // I did not change the names for read functionality because it will require me 
 //to change all html and css and javascript files.

//Selectors
let inputValue = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let searchResult = document.getElementById("search-result");

let searchNumber;
let verse;
let verseNumber;
let i;

searchButton.addEventListener("click", search );


function search(){
    searchResult.innerHTML = "";
    searchNumber = inputValue.value;
    inputValue.value = "";

    let url = "https://unpkg.com/quran-json@1.0.1/json/quran/en.json";
    fetch(url)

    .then(response=>{
        findConsole = response.json();
        console.log(findConsole)
        return findConsole  ;
    })
    
    .then(findConsole =>{
        console.log(searchNumber);
         for (  i = 0; i < findConsole.length; i++ ){ 
            if (searchNumber == findConsole[i].surah_number) {
                verse = findConsole[i].text
                verseNumber = findConsole[i].verse_number 
                console.log("verse")

                let writeVerse = document.createElement("li");
                let writeVerseNumber = document.createElement("span")

                writeVerse.setAttribute("class", "verse")
                writeVerseNumber.setAttribute("class", "verse-number")
     
                 searchResult.appendChild(writeVerse)
                 searchResult.appendChild(writeVerseNumber)
     
                 writeVerse.textContent= verse
                 writeVerseNumber.textContent = ` (${verseNumber}) `
            
            }
        } 
    })
    // .catch(console.error("something went wrong"))
}
