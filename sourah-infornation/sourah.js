//Selectors
let inputValue = document.getElementById('sourah-name-input') 
let searchBtn= document.getElementById('search')
// spans that will the result show in it 
let sourahName=document.getElementById('sourah-name')
let sourahNumberInQuran=document.getElementById('sourah-number-inQuran')
let sourahAyasNumber=document.getElementById('sourah-ayas-number')
let sourahPlace=document.getElementById('sourah-place')

let url = "https://api.quran.sutanlab.id/surah" // This is the api for the Holy Qura'an Sour

//This is the search button which will onclick , 
// bring the speicefied data from the api of the list of the holy Qura'an Soura
searchBtn.onclick = (e)=>{
    e.preventDefault();
     // set sourah information empty 
     sourahName.innerText=''
     sourahNumberInQuran.innerText=''
     sourahAyasNumber.innerText=''
     sourahPlace.innerText=''

    fetch(url)

    .then(response=>{
        return response.json()  
    })


    .then(printData=>{

        for ( i = 0; i < printData.data.length; i++) {
            if(inputValue.value === printData.data[i].name.short){
                sourahName.innerText= printData.data[i].name.short
                sourahNumberInQuran.innerText=printData.data[i].number
                sourahAyasNumber.innerText=printData.data[i].numberOfVerses
                sourahPlace.innerText=printData.data[i].revelation.arab

            }
         
     
   }
}
 )

}