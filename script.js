const timeMS = 600
let side = 1
let spinning = false

async function spin() {
    if (spinning) return
    spinning = true

    const tokenNode = document.getElementsByClassName("token")[0]
    if (!tokenNode) {
        spinning = false
        return
    }

    tokenNode.style.animation = `spin linear normal ${timeMS}ms`
    await sleep(timeMS / 2)

    if (side === 0) {
        side = 1
        tokenNode.children[0].classList.remove("hidden")
        tokenNode.children[1].classList.add("hidden")
        console.log("Displaying helmet!")
    } else {
        side = 0
        tokenNode.children[0].classList.add("hidden")
        tokenNode.children[1].classList.remove("hidden")
        console.log("Displaying sword!")
    }

    await sleep(timeMS / 2)
    tokenNode.style.animation = ""
    spinning = false
}

async function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms))
}