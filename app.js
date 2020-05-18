console.log('This is a notes making app');
let addbtn=document.getElementById('addbtn');
shownotes();
//console.log(addbtn);
addbtn.addEventListener('click',function(e){
    let addtext = document.getElementById('addtext');
    //console.log(addtext)
    let notes = localStorage.getItem('notes');
    //console.log(notes);
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);

    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtext.value="";
    shownotes();
})

function shownotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);

    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="card mx-2 my-2" style="width:21rem;">
        <div class="card-body">
         <h5 class="card-title">Note${index+1}</h5>
         <p class="card-text">${element}</p>
         <button class="deletenote">Delete Note</button>
        </div>
       </div>`;
    });
    let notesEle = document.getElementById('notes');
    if(notesObj.length!=0){
        notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML=`Write something in notes`;
    }
}