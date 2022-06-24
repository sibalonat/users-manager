# users-manager

Atëherë ketë herë, README do të jetë në shqip.

Janë të instaluara paketat e mëposhtme, për validation dhe GOOGLE Places API. 
E lashë Key për ta përdorur sepse mendoj se duke i vënë limit kjo do të shërbejë vetëm për të testuar. 


Fillimisht: 
[PAKETAT]
* - axios
* - Validators
* - Bootstrap 5 / @popperjs/core
* - Bootstrap-Icons
* - Vue Google Maps

**["atëhëerë kam përdurur një paketë për mockup data, paketa është JSON_SERVER. Dhe është një file ne root që quhet users.json. Aty struktura e të dhënave lejon të shtojmë, të referojmë secilën individualisht, të azhornojmë një element ekzistues dhe ta heqim atë(delete)."]**

Kur ne shtojmë një element të ri, fushat e përdorura kanë të lidhura specifikimet kufizuese nëse për ndonjë arsye ato nuk plotësojnë ndonjë kusht për të lejuar që të klikojmë butonin SAVE. Në këtë projekt janë 8 fusha që janë të nevojshmë për tu plotësuar që të aktivizohet butoni save, duke i hequr attributin Disabled që ka të vendosur me true, duke qënë se ka akoma errore që mund të jenë të pranishme nga paketat që është përdorur. Kur nuk plotësohet një kusht atëherë një tekst përshkrues vendoset poshtë fushës. 

Përmes paketët Axios ne bëjmë request në CRUD të file-it users.json. Ama ndryshe nga sesi mund të implementohet zakonisht, këtë herë zgjidhja është është bërë për të pasur një metodë të vetëm që quhet submit, e cila gjendet tek metodat tek component.js. Aty behët thirrja me axios për post/update/delete. Duke qënë se jo të gjitha kanë të dhëna dhe duheshin rregulluar routes që të kishin një response specifike dhe rreguluar nëse ka të dhëna që na kthehen pas secilës reques, mënyra e shkrimit të këtij kodi është bërë më if statements, ama metodat ndryshojnë krejt në mënyrë dinamike. 



Tek forma në pjesën ku duket forma, ka një @submit.prevent=[emri_metodës];

Kemi një button, checkbox sipër adresës. Forma pa klikuar këtë button na lejon të shkruajmë të gjithë të dhenat e adresës vetë. Ama nëse duam disi ta automatizojmë si veprim, atëherë =farë mund të bëjmë është të klikojmë këtë checkbox, dhe aty ndodh dicka. E para përmes v-shoë ne shfaqim komponentin që na lejon të kemi fushën që do na japë mundësinë të lidhemi me Google Places dhe tjetra, është se na tregon dy fusha të tjera që më parë nuk dukeshin dhe ato janë latitude dhe longitude. Në momentin që kërkojmë një adresë, ta zëmë atë që unë testova vazhdimisht për shkak se isha dhe përtac, Rr 5 maji, në momentin që e zgjedhim atëherë ajo bën disa veprime njëpasnjëshme. Plotëson fushat, longitude dhe latitude me të dhënat që merr nga google dhe mandej dhe cytetin. Zip Code duhet ta shtoni vetë. 

Kemi gjithashtu një ëatcher, e cila jep mundësinë që të lidhet Vue Google Maps, sa herë ne kemi nevojë për të kërkuar për vendin. Kur gjejmë vendin dhe ajo ka një metodë që ndizet në klik, por duke qënë se ne duhet ti themi aplikacionit tonë të shohë ndryshimet në një grup të dhënash, kemi lidhur ëatcherin me formën dhe kemi shtuar mundësinë që të kërkojë në grupet e të dhënave që janë të varësi të saj. Në fakt Forma e specifikuar tek DATA, është objekt me të gjithat fushat. Njëra prej tyre është dhe adresa. Mund të kishim gjetur një mënyrë tjetër, por besoj se kjo merr parasysh efektet anësore, të cilat ndodhin nga event handler që shohim shpesh në faqe të ndërtuara me JQUERY për pjesën e front-end-it. 
ëatcheri pra sheh ndryshimet dhe sa herë ne ndryshojmë fushën nga njëra tek tjetra kjo nuk ka efekte anësore, si të mos gjejë përshembull objektin që shfaq rekomandimet që marrim nga Google Places.





## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
