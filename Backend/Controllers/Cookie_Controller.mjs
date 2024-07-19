const GetAuthCookie=(
    async(req,res)=>{
        try {
            //res?.clearCookie("jwt");
            res.status(200).json(req.cookies);
        } catch (error) {
            res.status(404).json({message:error.message});
        }
    }
);

export {GetAuthCookie};