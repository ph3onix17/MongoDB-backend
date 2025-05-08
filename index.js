import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app = express();
app.use(bodyParser.json());


let connectionString = 'mongodb+srv://chathura101:chathura101@cluster-0.yltf4rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-0';
mongoose.connect(connectionString).then(() => {
        console.log('database connected!');
    }
).catch((err) => {
        console.log('database connection failed!');
        //console.log(err);
    }
)
app.post('/', 
    (req, res) => {
        console.log(req.body.name);
        res.json(
            {
                name: 'tung tung tung tung sahur',
            }
        )
        console.log("this is a GET request!");
        //res.send('this is a GET request!');  // < cannot send after res.json 
    }
)


app.listen(8000, 
    ()=> {  
        console.log(' tung tung tung tung sahur');
    }
);