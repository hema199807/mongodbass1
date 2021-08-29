const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:aN496e26aPPw0GYw@cluster0.29oaz.mongodb.net/ErestaurantDb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async err => {
  
  // perform actions on the collection object
  if(err){
      console.log("Error in collection",err);
  }else{
      console.log("connection success");
      const collection = client.db("ErestaurantDb").collection("Erestaurant");
    //1) Write a MongoDB query to display the fields restaurant_id, name, and zip code but exclude the field _id 
    //for all the documents in the collection restaurant
        
        const result1=await collection.aggregate([{$project:{_id:0,restaurant_id:1,name:1,"address.zipcode":1}}]);
        while (await result1.hasNext()) {
          console.log(await result1.next());
        }
        // output:-{
        //     address: { zipcode: '10462' },
        //     name: 'Morris Bake Shop',     
        //     restaurant_id: '30075445'     
        //   }
        //   {
        //     address: { zipcode: '10463' },
        //     name: 'Musorrie Bake Shop',   
        //     restaurant_id: '30075446'     
        //   }
        //   {
        //     address: { zipcode: '10464' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     address: { zipcode: '10465' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     address: { zipcode: '10466' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     address: { zipcode: '10467' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     address: { zipcode: '10468' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     address: { zipcode: '10469' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     address: { zipcode: '10470' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     address: { zipcode: '10471' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     address: { zipcode: '10463' },
        //     name: 'Bake Shop',
        //     restaurant_id: '30075446'
        //   }
        //   {
        //     address: { zipcode: '10464' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     address: { zipcode: '10465' },
        //     name: 'Morris Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     address: { zipcode: '10466' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     address: { zipcode: '10467' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     address: { zipcode: '10468' },
        //     name: ' Cafeteria Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     address: { zipcode: '10469' },
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     address: { zipcode: '10470' },
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     address: { zipcode: '10471' },
        //     name: 'alpha Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     address: { zipcode: '10471' },
        //     name: 'gogo Bake Shop',
        //     restaurant_id: '30075454'
        //   }


    // 2) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
        const result2=await collection.find({}).sort({name:1});
        await result2.forEach(console.dir);

        //output:-
        // {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 175
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Alpha Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 167
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -74.856077, 41.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10463'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 8 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 59 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Bake Shop',
        //     restaurant_id: '30075446'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 101
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -75.856077, 42.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10464'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 104
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 106
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 98 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 168
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -75.856077, 42.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10464'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 40 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 171
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 173
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 8 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 172
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -79.856077, 46.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10468'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 176
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 85 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Gogo Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  41, 195,  9,
        //           7, 251, 237, 248, 87,
        //         179, 126
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -73.856077, 40.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10462'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075445'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 102
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -76.856077, 43.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10465'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 100 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 103
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -77.856077, 44.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10466'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 80 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 84 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 105
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -79.856077, 46.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10468'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 91 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 107
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 108
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 170
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -77.856077, 44.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10466'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 174
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 102 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 169
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -76.856077, 43.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10465'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 20 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 100
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -74.856077, 41.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10463'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 80 },
        //       { date: [Object], grade: 'A', score: 86 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 59 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Musorrie Bake Shop',
        //     restaurant_id: '30075446'
        //   }
    //3) Write a MongoDB query to display the first 5 restaurant in ascending order of name field.
        const result3=await collection.find().sort({name:1}).limit(5);
        await result3.forEach(console.dir);

        //output:-
        // {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 175
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],      
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Alpha Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 167
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -74.856077, 41.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10463'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 8 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 59 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Bake Shop',
        //     restaurant_id: '30075446'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 168
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -75.856077, 42.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10464'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 40 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 106
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 98 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 104
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
    //4) Write a MongoDB query to display the next 5 restaurants after skipping first 5.
        const result4=await collection.find().skip(5).limit(5);
        await result4.forEach(console.dir);

        //output:-
        // {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 104
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 105
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -79.856077, 46.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10468'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 91 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 106
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 98 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 107
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 108
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075454'
        //   }
    //5) Write a MongoDB query to find the restaurants who achieved a score more than 90.
        const result5=await collection.aggregate([{$match:{"grades.score":{$gt:90}}}]);
        await result5.forEach(console.dir);

        //output:-
        // {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 101
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -75.856077, 42.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10464'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 102
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -76.856077, 43.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10465'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 100 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 103
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -77.856077, 44.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10466'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 80 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 84 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 104
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 105
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -79.856077, 46.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10468'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 91 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 106
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 98 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 107
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 174
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 102 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
    //6) Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
        const result6=await collection.aggregate([{$match:{"grades.score":{$gt:80,$lt:100}}}]);
        await result6.forEach(console.dir);
        
        //output:-
        // {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 100
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -74.856077, 41.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10463'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 80 },
        //       { date: [Object], grade: 'A', score: 86 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 59 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Musorrie Bake Shop',
        //     restaurant_id: '30075446'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 101
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -75.856077, 42.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10464'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075447'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 102
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -76.856077, 43.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10465'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 100 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075448'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 103
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -77.856077, 44.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10466'
        //     },
        //     cuisine: 'Brakefast',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 80 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 84 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075449'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 104
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 105
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -79.856077, 46.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10468'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 91 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 99 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075451'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 106
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 96 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 98 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 107
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 92 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43, 53,  65, 247,
        //         170, 101, 70, 172, 136,
        //         142, 108
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 90 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 171
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -78.856077, 45.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10467'
        //     },
        //     cuisine: 'Dinner',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075450'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 173
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -80.856077, 47.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10469'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 10 },
        //       { date: [Object], grade: 'A', score: 8 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Cafeteria',
        //     restaurant_id: '30075452'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 174
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -81.856077, 48.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10470'
        //     },
        //     cuisine: 'Bakery',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 102 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 82 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Morris Bake Shop',
        //     restaurant_id: '30075453'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 175
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 88 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Alpha Bake Shop',
        //     restaurant_id: '30075454'
        //   }
        //   {
        //     _id: ObjectId {
        //       [Symbol(id)]: Buffer(12) [Uint8Array] [
        //          97,  43,  89, 56, 81,
        //         194,  26, 243, 85, 26,
        //         213, 176
        //       ]
        //     },
        //     address: {
        //       building: '1007',
        //       coord: [ -82.856077, 49.848447 ],
        //       street: 'Mall Road Mussorrie',
        //       zipcode: '10471'
        //     },
        //     cuisine: 'Lunch',
        //     grades: [
        //       { date: [Object], grade: 'A', score: 2 },
        //       { date: [Object], grade: 'A', score: 6 },
        //       { date: [Object], grade: 'A', score: 85 },
        //       { date: [Object], grade: 'A', score: 9 },
        //       { date: [Object], grade: 'A', score: 14 }
        //     ],
        //     name: 'Gogo Bake Shop',
        //     restaurant_id: '30075454'
        //   }
    //7) Write a MongoDB query to find the restaurant name, longitude and latitude and cuisine for those restaurants 
    //which contain 'Caf' as first three letters of its name.
        const result7=await collection.find({name:{$regex:/^Caf/}}).project({_id:0,name:1,cuisine:1,"address.coord":1});
        await result7.forEach(console.dir);

        //output:-
        // {
        //     address: { coord: [ -75.856077, 42.848447 ] },
        //     cuisine: 'Brakefast',
        //     name: 'Cafeteria'
        //   }
        //   {
        //     address: { coord: [ -78.856077, 45.848447 ] },
        //     cuisine: 'Dinner',
        //     name: 'Cafeteria'
        //   }
        //   {
        //     address: { coord: [ -80.856077, 47.848447 ] },
        //     cuisine: 'Bakery',
        //     name: 'Cafeteria'
        //   }
        //   {
        //     address: { coord: [ -75.856077, 42.848447 ] },
        //     cuisine: 'Brakefast',
        //     name: 'Cafeteria'
        //   }
        //   {
        //     address: { coord: [ -78.856077, 45.848447 ] },
        //     cuisine: 'Dinner',
        //     name: 'Cafeteria'
        //   }
        //   {
        //     address: { coord: [ -79.856077, 46.848447 ] },
        //     cuisine: 'Dinner',
        //     name: 'Cafeteria Bake Shop'
        //   }
        //   {
        //     address: { coord: [ -80.856077, 47.848447 ] },
        //     cuisine: 'Bakery',
        //     name: 'Cafeteria'
        //   }
    //8) Write a MongoDb query to update grade B to A in all documents.    
        const result8=await collection.updateMany({"grades.grade":"B"},{$set:{"grades.$[].grade":"A"}});
     
  }
  client.close();
});