


app.get('/morningside.html', (request, response) => {
    response.sendFile(__dirname + '/displayOfHomes/morningside.html')
})