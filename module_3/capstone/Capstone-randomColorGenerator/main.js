//https://www.colr.org/api.html
const endpoint = "https://www.colr.org/json/schemes/random/30?scheme_size_limit=>4"

$("#alert-success").hide()
$("#alert-failed").hide()

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const mainContainer = $("#main-container")
        console.log(data)
        if(data.success) {
            data.schemes.map(obj => {
                mainContainer.append(createCard(obj.colors))
                console.log(obj.colors)
            })
            $("#alert-failed").show()
            setTimeout(() => {
                $("#alert-failed").fadeOut()
            }, 1500)
        }
    })
    .catch(error => {
        $("#alert-failed").show()
    })
    

function createCard(colorArr) {
    return `
    <div class="card-container">
        <div class="color-1" style="background: #${colorArr[0]}">
            <p class="hex">#${colorArr[0]}</p>
        </div>
        <div class="color-2" style="background: #${colorArr[1]}">
            <p class="hex">#${colorArr[1]}</p>
        </div>
        <div class="color-3" style="background: #${colorArr[2]}">
            <p class="hex">#${colorArr[2]}</p>
        </div>
        <div class="color-4" style="background: #${colorArr[3]}">
            <p class="hex">#${colorArr[3]}</p>
        </div>
    </div>
    `
}