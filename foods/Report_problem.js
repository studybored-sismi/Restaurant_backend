const db = require("../config/connection")
module.exports={
 
    addproblem:(addprob,callback)=>{
        console.log(addprob);
     
        // db.restaurant.update({_id: ObjectId("5ff9806b6ba5463634ed7b5d")},{$push:{"food_items":{"item":"test","price":"250"}}})
        db.get().collection('Report_problem').insertOne(addprob).then((result)=>{
            callback(result.ops)
            
         
        }).catch((err)=>{
            console.log(err)
        })
    },
    Report_problem:(problem,callback)=>{
        db.get().collection('Report_problem').find().toArray()
        .then(function(data){
            if(data){
                console.log(data)
                // var response={status:200,message:"record found"}
                // callback(response)
                callback(data)
            }else{
                // var response={status:404,message:"record not found"}
                // callback(response)
                callback(data)
            }
        })
    }
}