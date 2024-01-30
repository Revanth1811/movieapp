
let api='https://www.omdbapi.com/?apikey=67e2fe4b&t='
let notFound=document.getElementById('notFound');
let found=document.getElementById('found');
let morecontainer=document.getElementById('morecontainer')
function search(){
    let movieName = document.getElementById('movieName');
    let query=api+movieName.value;
    // console.log(query)
    fetch(query).then((data)=>{
        // console.log(data);
        return data.json();
    }).then((data)=>{
        console.log(data)
        if(data.Error){
            notFound.classList.remove('d-none')
            found.classList.add('d-none')
            document.getElementById('notfoundname').innerText=movieName.value
        }
        else{
            notFound.classList.add('d-none');
            found.classList.remove('d-none');
            document.getElementById('title').innerText=data.Title;
            desc.innerText=data.Plot;
            document.getElementById('genre').innerText=data.Genre;
            awards.innerText=data.Awards;
            BoxOffice.innerText=data.BoxOffice;
            actors.innerText=data.Actors;
            director.innerText=data.Director;
            writers.innerText=data.Writer
            rating.innerText=data.Ratings;
            date.innerText=data.Released;
            poster.src=data.Poster;
            poster1.src=data.Poster;
            type.innerText=data.Type;
            runtime.innerText=data.Runtime;
            dvd.innerText=data.DVD;
            country.innerText=data.Country;

        }
    })
}

// let body=document.querySelector('body')
let light=document.getElementById('theme')
let container=document.querySelector('.container')
let foundtheme=document.querySelector('#found')
let notFoundtheme=document.querySelector('#notFound')
let title=document.getElementById('title')

// localStorage.setItem('theme','light')

function rendertoggleTheme(){
    let theme=localStorage.getItem('theme');
    if(theme =='light'){
        document.getElementById('theme').innerHTML='<i class="bi bi-moon-stars"></i>'
        container.style.backgroundColor='rgba(255, 255, 255, 0.692)'
        light.style.backgroundColor='black'
        light.style.color='white'
        foundtheme.style.color='black'
        notFoundtheme.style.color='black'
        title.style.color='black'
        
    }
    else{
        document.getElementById('theme').innerHTML='<i class="bi bi-brightness-high"></i>'
        container.style.backgroundColor='rgba(20, 19, 19, 0.907)'
        light.style.backgroundColor='white'
        light.style.color='black'
        foundtheme.style.color='white'
        notFoundtheme.style.color='white'
        title.style.color='white'
    }
}

rendertoggleTheme();

function updateTheme(){
    let theme=localStorage.getItem('theme');
    if(theme =='light'){
        localStorage.setItem('theme','dark')
        rendertoggleTheme();
    }
    else{
        localStorage.setItem('theme','light')
        rendertoggleTheme();
    }
}

function show(){
    morecontainer.classList.remove('d-none')
}
function cancel(){
    morecontainer.classList.add('d-none')
}