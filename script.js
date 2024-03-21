let pokerman_card = document.querySelector("#pokemon_id_contaainer");


let color ={
    grass :'#9bcc50',
    normal : 'grey',
    poision : '#fdb9e9',
    ground : 'green',
    rock : '#fdb9e9',
    bug : 'red',
    ghost : 'white',
    fire :'orange',
    water:'#4592c4',
    electric :'yellow',
    psychic:'pink',
    ice:'purple',
    dragon:'brown',
    fairy:"pink"

}
function createcard(element){
    let card = document.createElement("div");
    card.classList.add("card");//add the class name 
    card.innerHTML =`
    <div class='class-inner' > 
        <div class='front' >

            <div class="id" > ${element.id}</div>
            <img src="${element.sprites.front_default}" >
            <div class="name" >${element.name}</div>
            <div class="type" >${element.types[0].type.name}</div>


        </div>
        
        <div class='back'> 
            <img src="${element.sprites.back_default}" >
            <div class"ablity" > ${element.abilities[0].ability.name}</div>
            <div class="name" > ${element.name} </div>
        </div>
    </div>

    `

    card.querySelector('.class-inner').style.backgroundColor = color[element.types[0].type.name];

    return card;
}



let type_val = document.querySelector("#type");
// console.log(type_val);
let search_input = document.querySelector("#search");
let btn = document.querySelector("#filter");
search_input.addEventListener('input',()=>{
    let allcards = document.querySelectorAll(".card")
    // console.log(allcards);
    let pokArr = Array.from(allcards);
    pokArr.forEach((ele)=>{
        // console.log(ele);
        let pokName = ele.children[0].children[0].children[2].innerHTML;
         console.log(pokName);
         console.log(search_input.value);
        if(pokName.startsWith(search_input.value)){
            ele.style.display="block";
        }
        else{
            ele.style.display ="none";
        }
    })
})

btn.addEventListener('click',()=>{
    let allcards = document.querySelectorAll(".card")
    // console.log(allcards);
    let pokArr = Array.from(allcards);
    pokArr.forEach((ele)=>{
        // console.log(ele);
        let type = ele.children[0].children[0].children[3].innerHTML;
        console.log(type, type_val.value);

        if(type === type_val.value){
             console.log(type === type_val.value);
            ele.style.display="block"
        }
        else{
            console.log(type === type_val.value);
            ele.style.display="none";
        }
    })
})

async function fetchPokemom(i){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    let result = await response.json();
    return result;
}



async function fetchmainpage(){
    for(let i=1;i<151;i++){
        let pokemon = await fetchPokemom(i);
        //  console.log(pokemon);
        let cards = createcard(pokemon);
        pokerman_card.appendChild(cards);
    }
}

fetchmainpage();



