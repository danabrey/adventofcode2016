const updateBearing = require("./update-bearing");

function followInstructions(input) {
    const instructions = input.split(", ");
    let point = {
        x: 0,
        y: 0,
        bearing: 0
    };
    for (let instruction of instructions) {
        let direction = instruction.substr(0,1);
        let distance = parseInt(instruction.substr(1), 10);
        point.bearing = updateBearing(point.bearing, direction);
        switch (point.bearing) {
            case 0:
                point.y = point.y + distance;
                break;
            case 90:
                point.x = point.x + distance;
                break;
            case 180:
                point.y = point.y - distance;
                break;
            case 270:
                point.x = point.x - distance;
                break;
        }
    }
    return Math.abs(point.x) + Math.abs(point.y);
}

module.exports = followInstructions;