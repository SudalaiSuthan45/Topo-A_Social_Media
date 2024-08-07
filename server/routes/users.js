const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

//update user
router.put("/:id", async (req,res) => {
    if ( req.body.userId === req.params.id || req.body.isAdmin){
        if ( req.body.password ){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }
            catch(err){
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            });
            res.status(200).json("Account has been Updated...")
        }
        catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("U can Update only ur account")
    }
})
//delete user
router.delete("/:id", async (req,res) => {
    if ( req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been deleted !!...")
        }
        catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("U can Delete only ur account")
    }
})
//get a user
router.get("/", async (req,res) => {

    const userId = req.query.userId;
    const username = req.query.username;
    
        try {
            const user = userId ? await User.findById(userId) : await User.findOne({username : username})
            const {password,updatedAt, ...other} = user._doc
            res.status(200).json(other)
        }
        catch(err){
            return res.status(500).json(err);
        }

})
//follow a user
router.put("/:id/follow", async (req,res) => {

    if ( req.body.userId !== req.params.id){
        try {

            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if ( !user.followers.includes(req.body.userId) ){
                await user.updateOne({$push:{followers: req.body.userId}});
                await currentUser.updateOne({$push:{following: req.params.id}});
                res.status(200).json("User has been Followed")
            }else{
                res.status(403).json("U Already Follow this user")
            }

        }
        catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("U Cant Follow Urself")
    }
})

//unfollow a user
router.put("/:id/unfollow", async (req,res) => {

    if ( req.body.userId !== req.params.id){
        try {

            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if ( user.followers.includes(req.body.userId) ){
                await user.updateOne({$pull:{followers: req.body.userId}});
                await currentUser.updateOne({$pull:{following: req.params.id}});
                res.status(200).json("User has been UnFollowed")
            }else{
                res.status(403).json("U dont Follow this user")
            }

        }
        catch(err){
            return res.status(500).json(err);
        }
    }
    else{
        res.status(403).json("U Cant UnFollow Urself")
    }
})

//get friends
router.get("/friends/:userId", async (req,res) => {

        try {
            const user = await User.findById(req.params.userId);
            const friends = await Promise.all(
                user.following.map(friendId => {
                    return User.findById(friendId)
                })
            )
            let friendList = [];
            friends.map(friend => {
                const { _id, username, profilePicture } = friend;
                friendList.push({ _id, username, profilePicture });
            });
            res.status(200).json(friendList);
        }
        catch(err){
            return res.status(500).json(err);
        }

})


module.exports = router;