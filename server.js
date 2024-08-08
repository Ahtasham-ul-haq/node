import http from "http"

const PORT = 5000

const server = http.createServer((req, res) => {
    res.end("Hello World!")
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})