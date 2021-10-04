/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Belfast",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

unitedKingdom[1].touristAttractions = ['Buckingham Palace', 'Big Ben', 'Old Trafford'];

console.log(unitedKingdom[1]);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2];

unitedKingdom[2].capital = "Cardiff"

console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

if(unitedKingdom[1].population > unitedKingdom[0].population ||
   unitedKingdom[1].population > unitedKingdom[2].population ||
   unitedKingdom[1].population > unitedKingdom[3].population ){
    console.log('Scotland is the biggest')
} else if(unitedKingdom[1].population < unitedKingdom[0].population ||
    unitedKingdom[1].population < unitedKingdom[2].population ||
    unitedKingdom[1].population < unitedKingdom[3].population){
        console.log('Scotland is the smallest')
} else {
    console.log('Scotland is in the middle')
}