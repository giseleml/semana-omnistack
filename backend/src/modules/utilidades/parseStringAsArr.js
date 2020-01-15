module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim())
}

// Isolamos essa função para não repeti-la no código, apenas chama-la quando necessário