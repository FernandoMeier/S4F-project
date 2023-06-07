/*
    const newWord = document.getElementById("addNewWord")
    const wordDiv = document.getElementById("listingDiv")
    const elems = document.getElementById("elems")
    const deletBtn = document.getElementsByClassName("delete")

    let val = 2;

    let words = JSON.parse(sessionStorage.getItem("words"))

    if (words) {
        for (let i = 0; i < words.length; i++) {
            const newDiv = document.createElement("div")
            newDiv.classList.add("qdiv")

            const newHead = document.createElement("div")
            newHead.classList.add("cardNum")
            newHead.innerHTML = `<p id="id">${i + 1}</p> <button class="delete"><img src="../imgs/icons8-löschen-24.png"></button>`

            const newContent = document.createElement("div")
            newContent.classList.add("cardCont")
            newContent.innerHTML = `<input type="text" name="word" id="textinput" placeholder="Word" value="${Object.keys(words[i])}">
            <input type="text" name="def" id="textinput" placeholder="Definition" value="${Object.values(words[i])}">`

            newDiv.appendChild(newHead)
            newDiv.appendChild(newContent)
            wordDiv.appendChild(newDiv)
            elems.innerHTML = `${i + 1} Elements`
            updateButtons(i)
            val++;
        }
    }

    updateButtons(0)

    newWord.addEventListener("click", () => {
        const newDiv = document.createElement("div")
        newDiv.classList.add("qdiv")

        const newHead = document.createElement("div")
        newHead.classList.add("cardNum")
        newHead.innerHTML = `<p id="id">${val}</p> <button class="delete"><img src="../imgs/icons8-löschen-24.png"></button>`

        const newContent = document.createElement("div")
        newContent.classList.add("cardCont")
        newContent.innerHTML = `<input type="text" name="word" id="textinput" placeholder="Word">
            <input type="text" name="def" id="textinput" placeholder="Definition">`

        newDiv.appendChild(newHead)
        newDiv.appendChild(newContent)
        wordDiv.appendChild(newDiv)
        elems.innerHTML = `${val} Elements`
        updateButtons(val - 1)
        val++;
    })

    function updateButtons(x) {
        deletBtn[x].addEventListener("click", () => {
            console.log(deletBtn[x].parentElement.children[0].textContent + " deleted")
            deleteCard(parseInt(deletBtn[x].parentElement.children[0].textContent) - 1)
        })
    }

    function deleteCard(n) {
        wordDiv.removeChild(deletBtn[n].parentElement.parentElement)
        for (let i = n; i < wordDiv.children.length; i++) {
            wordDiv.children[i].children[0].children[0].textContent = i + 1
        }
    }
    */