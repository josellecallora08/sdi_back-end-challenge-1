const carSpecifications = [
    {
        size: "S", capacity: 5, cost: 5000
    },
    {
        size: 'M', capacity: 10, cost: 8000
    },
    {
        size: 'L', capacity: 15, cost: 12000
    }
]


function calculateCost(seat) {
    if (isNaN(seat))
        return console.log('Invalid input')

    let cheapestCombination = [];

    for (car of carSpecifications) {
        if (seat % car.capacity === 0) {
            let total = seat / car.capacity
            cheapestCombination.push({
                car: car.size,
                cost: car.cost * total,
                multiplier: total
            })
        } else {
            let total = seat / car.capacity
            cheapestCombination.push({
                car: car.size,
                cost: car.cost * total,
                multiplier: total
            })
        }
    }

    const cheap = cheapestCombination.sort((a, b) => a.cost - b.cost).shift()
    console.log(`${cheap.car} x ${cheap.multiplier}`)
    console.log(`Total = PHP ${cheap.cost}`)
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Please input number (seat): ', (num) => {
    const input = parseInt(num)
    calculateCost(input)
    readline.close()
})
