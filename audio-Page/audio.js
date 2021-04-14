let verseNumber = document.getElementById("verseNumber")
let audioControl = document.getElementById("audioControl")
let searchBtn = document.getElementById("searchBtn")
let surahName;
let i;
let audio;

searchBtn.addEventListener("click", search)

function search(){
  surahName = verseNumber.value;
  verseNumber.value = "";
  let url = ("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
  fetch(url)
  .then(response=>{
    findData = response.json()
    console.log(findData)
    return findData
  })
  .then (findData=>{
    console.log(surahName)
    for(i = 0; i < findData.length; i++){
      if (surahName == findData[i].asma){
        console.log(surahName)
        audioControl.src= findData[i].audio
      
      
      }
    }
  })
}
