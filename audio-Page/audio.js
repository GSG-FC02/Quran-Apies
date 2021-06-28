let verseNumber = document.getElementById("verseNumber")
let audioControl = document.getElementById("audioControl")
let searchBtn = document.getElementById("searchBtn")
let out9 = document.querySelector('.out9')
let out10 = document.querySelector('.out10')
let numberSurah;
let i;
let audio;
let theQaraa;

searchBtn.addEventListener("click", search)

function search(){
  surahName = verseNumber.value;
  // verseNumber.value = "";
  let url = "https://mp3quran.net/api/_english.php"
  let url2 = "https://api.quran.sutanlab.id/surah" // This is the api for the Holy Qura'an Sour to get the sourah number by searching name
  fetch (url2)
      .then(response=>{
          return  response.json();   
      })  
      .then(printData=>{
          for (let i = 0; i < printData.data.length; i++ ){ 
           if(surahName==printData.data[i].name.short) {
            numberSurah=printData.data[i].number //return sourah number   
            console.log(numberSurah)}
            
          }
      } )
  
  .then (() =>{return fetch(url)}) // to get verses 
  

  fetch(url)
  .then(response=>{
    findData = response.json()
    return findData
  })
  .then (findData=>{
     theQaraa=findData.reciters[42].Server
  //add number surah for server value
  if(numberSurah <10){
    theQaraa = `${theQaraa}/00${numberSurah}.mp3`
  }else if(numberSurah <100){
    theQaraa = `${theQaraa}/0${numberSurah}.mp3`
  }else if(numberSurah <115){
    theQaraa = `${theQaraa}/${numberSurah}.mp3`
  }
  out9.src = theQaraa
  out10.href = theQaraa   
    
  })
}
