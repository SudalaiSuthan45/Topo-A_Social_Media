const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

//register
router.post("/register", async (req,res) => {

    try{
        //generate new hashed pwd
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        //create new user
        const newUser = new User ({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword,
        });

        // Check if the user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        //save user and respond
        const user = await newUser.save();
        res.status(201).json(user);

    }catch(err){
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req,res) => {

    try{

        const user = await User.findOne({email:req.body.email});
         if( !user ){
            return res.status(404).json({ message : "User Not Found" });
         }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if ( !validPassword ) {
            return res.status(401).json("Wrong Password");
        }

        return res.status(200).json(user)

    }catch(err){
        return res.status(500).json(err)
    }
})

module.exports = router;