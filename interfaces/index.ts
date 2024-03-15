interface Game {
    name: string,
    category: string,
    price?: number,
    isMobile: boolean
}

let mine: Game = {
    category: "RPG",
    isMobile: true,
    name: "Minecraft",
    price: 180.01
}

let poke: Game = {
    category: "RPG",
    isMobile: true,
    name: "pokemon go",
}