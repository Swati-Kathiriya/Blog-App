
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
      try{
         const {post,user} = req.body;
         const like = new Like({
           post,user
         });
  
         const savedLike = await like.save();
         const udpatePost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new: true} )
                            .populate("likes").exec();
          res.json({
              post: udpatePost,
          });                          
      }
      catch(error)  {
          return res.status(400).json({
              error: "Error While liking post",
          });
      }
  }

  exports.unlikePost = async (req, res) => {
      try{
         const {post,like} = req.body;
        
  
         const deletedLike = await Like.findByIdAndDelete({post:post,_id:like});
         const udpatePost = await Post.findByIdAndUpdate(post, 
                                                         {$push: {likes: deletedLike._id} },
                                                         {new: true});
            
            res.json({
                  post:udpatePost, 
            });                                             
      }
      catch(error)  {
          return res.status(400).json({
              error: "Error While unliking post",
          });
      }
  } 


exports.dummyLink = (req,res) =>{
      res.send("This is your Dummy Page");
};