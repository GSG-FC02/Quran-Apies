// let muqre1 = document.getElementById("muqre1")
// let muqre2 = document.getElementById("muqre2")
// let muqre3 = document.getElementById("muqre3")
// let chooseBtn = document.getElementsByClassName("dropDown_btn")
// let audioControl = document.getElementById("audioControl")




// muqre1.addEventListener("click", onClick)

// function onClick () {

//   fetch("https://api.quran.com/api/v4/quran/recitations/9")
//     .then(function(res){
//         return res.json()  
//     })
//     .then(function(data){
// console.log(data)

// // let i;
// // for (i=0; i < data.length; i++){
// // if (verseNumber.value === data.verse_key.value)

// // document.querySelector(".audio_Source").src = data.url.value
// // }
//   })
//   document.querySelector(".dropDown_btn").innerText = "محمد المنشاوي"
  
// }
  // onClick()


  let verseNumber = document.getElementById("verseNumber")
  let Player = document.getElementById("audio_Source")

  
  async function getSurah(surah){
    const muqreResponse = await fetch (`https://api.quran.sutanlab.id/surah/${surah}`)
    const ayat = muqreResponse.json()
    return{
      ayat
    }
  }

  verseNumber.addEventListener("keyup", (e) =>{
    const userIput= e.target.value
    if (userIput !== "") {
      getSurah(userIput)
      .then(data =>{
        console.log(data)
        if(data.ayat.status === "Not Found."){
          //show alert
        }else {
          // show ayah
          playAyah(data.ayat)
        }
      })
    }else {
    //clear
    }
  })
  function playAyah(aya){
    console.log(aya)
    
    let source = document.getElementById("audio_Source")
    
    source.src = "${aya.veraes[audio]}"
  }