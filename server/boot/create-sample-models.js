// module.exports = function(app) {
//   app.dataSources.mysqlDs.automigrate('movies', function(err) {
//     if (err) throw err;

//     app.models.movies.create([{
//       name: "Terminator",
//       year: "1999",
//       cast: [{
//         name: "a"
//       }, {
//         name: "b"
//       }, {
//         name: "c"
//       }],
//       director: "x"
//     }, {
//       name: "Star Wars",
//       year: "1999",
//       cast: [{
//         name: "d"
//       }, {
//         name: "e"
//       }, {
//         name: "f"
//       }],
//       director: "y"
//     }, ], function(err, movies) {
//       if (err) throw err;

//       console.log('Models created: \n', movies);
//     });
//   });
// };

