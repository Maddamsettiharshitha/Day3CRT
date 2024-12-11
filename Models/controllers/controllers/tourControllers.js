// let url=require("url");
// exports.getTour=(req,res)=>{
//     res.status(200);
//     res.json({
//         result:"success",
//         data:{
//             params:req.params,
//             urlinfo:req.url,
//             urlextract:url.parse(req.url,true),
//         },
//     });
// };                                 







// let url = require("url");
// let Tourfile = require("../models/tourModels");

// exports.postTour = (req, res) => {
// 	let obj = req.body;
// 	console.log(obj);
// 	Tourfile.TourModel.create(obj)
// 		.then((full, rej) => {
// 			console.log("post is sucess");
// 			res.json({ status: "sucess", data: obj });
// 		})
// 		.catch((err) => {
// 			console.log(err.message, "contnue giving proper");
// 			res.json({
// 				status: "fail",
// 				reason: err.message,
// 			});
// 		});
// };
// exports.getTour = (req, res) => {
// 	// fetch some thing fromn the DB
// 	// console.log(req);
// 	res.status(200);
// 	res.json({
// 		result: "sucess",
// 		data: {
// 			params: req.params,
// 			urlinfo: req.url,
// 			urlextract: url.parse(req.url, true),
// 		},
// 	});
// };

