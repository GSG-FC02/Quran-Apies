# Quran-Apies
### With Al-Qura'an Al-Kareem (مع القرآن الكريم)
It is simple app for providing electronic services related to the Holy Quara'an.
### The live Dem   (مع القرآن الكريم)
You are more than welcome to visit our app here ( for github pages)
### The problem this app solve
Many times, muslims user needs to access quickly general information about Sour Al-Qura'an Al-Kareem, listening to recitation of Soura of Al-Qura'an Al-Kareem, or reading one surah from Al-Qura'an Al-Kareem. Thus, we were inspired to build a simple to use app for Al-Qura'an Al-Kareem. 
### The Solution
This app provides three user services: 
    1- General information about Soura (chapters) of Al-Qura'an Al-Kareem.
    2- Playing audio for specific reciter for certain Soura of Al-Qura'an Al-Kareem.
    3- reading Surah from Al-Qura'an Al-Karee.


### App wireframe
The design of the app were done through figma. It is based to simplfy user experience and make it as peaceful and smooth as possible.
<img src="/Assets/wireframe.png" >

### User journey
The muslim user is welcomed by a home page. Home page shows the user three button choices: 
- Detailed informatin of Soura (تفاصيل عن سور).
- Listening to Soura (الاستماع لسورة).
- Reading Surah from Al-Qura'an Al-Karee(اقرأ سورة من القرآن الكريم).
When the user click on one of these button, it will land to specific page fullfilling the descriped function of the button. 
### User story
As a muslim user, I am welcomed to this app at home page. I can
- see three buttons which are 
      * Detailed informatin of Soura (تفاصيل عن سور).
      * Listening to Soura (الاستماع لسورة)
      * reading Surah from Al-Qura'an Al-Karee(اقرأ سورة من القرآن الكريم)
As a muslim user, I can:
- press on "Detailed informatin of Soura (تفاصيل عن سورة)" button which leads me to Soura information page containing a search form. 
- type Soura name and press (استخرج) button in the search form. 
- read listed general information of the Soura which are:
    - the squence number of the Soura.
    - the verses count. 
    - the place of revelation.
- press on Listening to Soura (الاستماع لسورة) button which will leads me to listening page.
    - write the name of Surah
    - press (ابحث) button 
    - listen to audio reciting the Soura I've choosen by the reciter ( مشاري راشد العفاسي).
    - stop the audio or make it continue when I press arrow button.  
- can press on read Surah from Al-Qura'an Al-Kareem (اقرأ سورة من القرآن الكريم) button which leads me to read Surah page. 
  - enter the number of Surah of Al-Quara'an Al-kareem. 
  - see the whole verses of Surah and read it.

### How was the App built?
API Fethcing were used to create this app by useing javascript. These APIes are:
https://api.quran.sutanlab.id/surah
https://unpkg.com/quran-json@1.0.1/json/quran/en.json
https://al-quran-8d642.firebaseio.com/data.json?print=pretty
### App installation to run it locally.
You should have in your local machine gitBash  to download this app  and Visual Studio Code to view it.

```
    git clone ( past the copied link of repository clone).
    cd Quran-Apies 
    code .
    go live
```
### Tech stack
The technolegies used are : 
* HTML.
* CSS.
* JavaScript.
### Our Team
- Aya
- Reem
- Ola
