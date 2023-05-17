/* Create a function that calculates the chance of being an imposter.
Make sure to round the value to the nearest integer and return the
value as a percentage. */

function likelyImposter(imposterCount, playerCount){
    var imposter = 100 * (imposterCount/playerCount)
    return Math.round(imposter) + "%"
}

console.log(likelyImposter(1, 2))


