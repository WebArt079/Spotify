console.log("welcome to the spotify");

// inisilize the variable
let songIndex=0;
let audioElement =new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressBar= document.getElementById('myprogressBar');

let nowPlaying = document.getElementById('nowPlaying');



let songs=[
    {songName:"barshat kai mausam mai",filePath:"song/0.mp3",coverPath:"cover/0.jpeg"},
    {songName:"Dil hai Deewana",filePath:"song/1.mp3",coverPath:"cover1.jpeg"},
    {songName:"Hamnawa-hamari adhuri kahani",filePath:"song/2.mp3",coverPath:"cover/2.jpeg"},
        {songName:"Jab tum aa jate ho samne",filePath:"song/3.mp3",coverPath:"cover/3.jpeg"},
        {songName:"Pyar aa gaya re",filePath:"song/4.mp3",coverPath:"cover/4.jpeg"},
        {songName:"Proper patola",filePath:"song/5.mp3",coverPath:"cover/5.jpeg"},
        {songName:"Samjawan ",filePath:"song/6.mp3",coverPath:"cover/6.jpeg"},
        {songName:"Teri Meri Kahani",filePath:"song/7.mp3",coverPath:"cover/7.jpeg"},
        {songName:"Tum Ko Dekha Toh",filePath:"song/8.mp3",coverPath:"cover/8.jpeg"},
        {songName:"Tu Har Lamhaa",filePath:"song/9.mp3",coverPath:"cover/9.jpeg"},
    ]

    // Giving Images to each Element
let songItems= Array.from(document.getElementsByClassName('songCover'));
songItems.forEach((element,i)=>{element.src = songs[i].coverPath;})


    // Giving Song Names to each Element
let songName= Array.from(document.getElementsByClassName('songName'));
songName.forEach((element,i)=>{element.innerText = songs[i].songName;})
    

masterPlay.addEventListener('click',()=>{
    console.log("Clicked");
    if( audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log(audioElement)
        document.getElementById("masterPlay").classList.add("fa-circle-pause")
        document.getElementById("masterPlay").classList.remove("fa-circle-play")
        

    }
    else{
        audioElement.pause()
      
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
    }
})
// listener to events
audioElement.addEventListener('timeupdate',()=>{
   
//    update seekbar
 progress= parseInt((audioElement.currentTime/audioElement.duration)*100);

 myprogressBar.value=progress;

})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
        

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        
        // audioElement.pause()
        audioElement.src =`song/${songIndex}.mp3`;
   
        console.log(audioElement)

        nowPlaying.innerText = "Now Playing: " + songs[songIndex].songName;
        console.log("lll")
        audioElement.currentTime = 0;
        audioElement.play();
        
        console.log("PLAYED")
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    
    console.log("Increased")
    audioElement.src = `song/${songIndex}.mp3`;
    nowPlaying.innerText = "Now Playing: " + songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   

})

document.getElementById('previous').addEventListener('click', ()=>{
    console.log("hereeeee")
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        console.log("Decrease")
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    
    nowPlaying.innerText = "Now Playing: " + songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

})