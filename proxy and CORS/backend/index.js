import express from "express"

const app = express()

app.get('/' , (req,res) => {
    res.send("Server is running")
})

app.get("/api/data" , (req,res) => {
    const data = [
        {
            id:1,
            name:"yatik",
            rollNo : 42
        },
        {
            id:2,
            name:"aman",
            rollNo : 2
        },
        {
            id:3,
            name:"mayank",
            rollNo : 31
        }
    ]
    res.send(data)
})

const port = 5000

app.listen(port , ()=> {
    console.log(`http://localhost:${port}`);
})