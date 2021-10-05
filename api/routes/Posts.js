const router = require('express').Router();
const Post = require('../models/Post');


router.post('/', async (req,res)=> {
try {
    const savePost = await new Post(req.body);
    const savedPost = await savePost.save()
    res.status(200).json(savedPost);

} catch (error) {
    res.status(500).json(error);
}

})
//update post
router.put('/:id', async (req,res)=> {
 try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId) {
      await Post.updateOne({$set:req.body});
      res.status(200).json('it has been updated');

    } else {
        res.status(403).json('you can only update your post');
    }
 } catch (error) {
     res.status(500).json(error)
 }

})


//delete post 
router.delete('/:id', async (req, res)=> {
  try {
   const post =  await Post.findById(req.params.id);
   if (post.userId === req.body.userId) {
      await Post.deleteOne()
      res.status(200).json('the post is deleted')
   } else {
       res.status(403).json("you can only delete your post")
   }
  } catch (error) {
    res.status(500).json(error)  
  }

})





module.exports = router;