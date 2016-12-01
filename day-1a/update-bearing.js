function updateBearing(bearing, turn) {
    switch (turn) {
        case "L":
            return Math.abs((((bearing-90) % 360) + 360) % 360);
        case "R":
            return Math.abs((((bearing+90) % 360) + 360) % 360);
    }
}

module.exports = updateBearing;