const LogOut=(
    (req,res)=>{
        try {
            res.cookie('jwt','',{maxAge:1});
            res.status(200).json({ auth: false, id: "" });
        } catch (error) {
            res.status(404).json({message:error?.message});
        }
    }
);

export default LogOut;
