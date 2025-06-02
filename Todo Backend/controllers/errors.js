exports.error404=(req,res,next)=>{
  res.status(404).json({message:"page not found"})
//res.render("404",{pagetitle: "page not found", isLoggedIn:req.isLoggedIn});
}
