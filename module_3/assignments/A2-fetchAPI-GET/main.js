const search_results = document.querySelector("#search-results")
const search = document.querySelector(".searchButton")
const inputField = document.querySelector(".inputField")
const inputForm = document.querySelector(".inputForm")
const pasteToInputField = document.querySelectorAll(".pasteToInputField")
const base_url = "https://swapi.dev/api/"

let user_msg = document.querySelector("#user-msg")

//fetch API practice

let currentUserInput = ""
search.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".card-infobox").innerHTML = ""
    if(inputField.value == "") {
        inputField.focus();
        inputField.classList.add("highlight");
        fetchAPI("people", "https://swapi.dev/api/people")
    } else {
        user_msg.innerHTML = "Retrieving..."
        inputField.classList.remove("highlight");
        currentUserInput = inputField.value
        getRootResource(inputField.value);
        inputForm.reset();
        // inputField.focus();
        search_results.innerHTML = ""
    }
})

function getRootResource(userInput) {
    fetch(base_url)
    .then((response) => response.json())
    .then((data) => wholeSearchAPI(data, userInput))
    .catch((error) => printError(error))
}
function wholeSearchAPI(x, userInput) {
    user_msg.innerHTML = ""
    const searchStr = "?search=" + userInput
    let arr = Object.entries(x)

    console.log(Object.entries(x))
    console.log(Object.entries(x).length)
    
    arr.forEach((obj, ind) => {
        console.log(obj[1])
        let rootResource = obj[0]
        let str = obj[1] + searchStr
        fetchAPI(rootResource, str)
    })
}
function fetchAPI(rootResource, string) {
    fetch(string)
    .then((response) => response.json())
    .then((data) => displaySearchResultInfo(rootResource, data))
    .catch((error) => printError(error)) 
}

function displaySearchResultInfo(r, d) {
    if(d.count == 0) {
        search_results.innerHTML += `<li> ${d.count} results found in <span class="root-words">${r}</span> for "${currentUserInput}"`

    } else {
        search_results.innerHTML += `<li><b> ${d.count} results found in <span class="root-words">${r}</span> for "${currentUserInput}" </b>`

        console.log(r, d.count)
        const results_card_ctnr = document.querySelector(".results-card-ctnr")
        const results_cards = results_card_ctnr.querySelector(".results-card")
        const card_infobox = results_cards.querySelector(".card-infobox") 
    
        let resultsPerRoot = d.count
        let ww = d.results
        let array = []
        let resultHeader = ""
        let resultBody = ""
        let result = card_infobox.innerHTML
    
        ww.forEach((obj, ind) => {
            console.log(obj)
            array.push(Object.entries(obj))
        })
    
        for(i=0; i < resultsPerRoot; i++) {
            resultBody = ""
            resultHeader = `
            <tr> <th colspan="3"> Result ${i+1} of ${resultsPerRoot} found in <span class="root-words">${r}</span></th> </tr>
            <tr> <th>#</th> <th>Description</th> <th>Info</th> </tr>
            `
            array[i].forEach((obj, ind) => {
                obj[0] = obj[0].replace(/_/g, " ")  //replace underscores with space
                if(typeof obj[1] == "object") {     //if obj[1] is another array, spread them with coma
                    s = obj[1].toString()
                    obj[1] = s.replace(/,/g, ", ")
                }
                resultBody +=  `<tr> <td>${ind+1}</td> <td>${obj[0]}</td> <td>${obj[1]}</td> </tr>`
            })
            result += `<table class="card-table"> ${resultHeader + resultBody} </table>`
        }
        card_infobox.innerHTML = result 
    }
}

pasteToInputField.forEach(n => n.addEventListener("click", () => {
    console.log(n, "**",n.textContent);
    console.log(pasteToInputField)
    inputField.value = n.textContent;
}))

function printError(error) {
    user_msg.innerHTML = `
    Challenging network traffic <br>
    -Try again- <br>
    ${error}
    `
}






