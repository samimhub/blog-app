import User from "@/app/model/User";

const { dbConnect } = require("@/app/lib/dbConnect")

const signup =async(request)=>{
    await dbConnect();
    try{
        const body =await request.json();
        const {
            username,email,password
        }=body;

        if(!username || !email || !password || username===''|| email ==='' || password===''){
            return Response.json({massage:'Fields are required'})
        }
        const user =await User.findOne({username})
        if(user){
            return Response.json({massage:'User already exist'})
        }
        
        const hashPassword=await bcryptjs.hashsync(password,10)

        const newUser =await User.create({
            username,email,password:hashPassword,
        })

        return Response.json({
            massage:'User Register Successfully',
            user:newUser
        })
    }catch(error){
        console.error(error);
        return Response.json({massage:'Internal Server Error'})
    }
}
export {
    signup as POST,
    signup as GET
}