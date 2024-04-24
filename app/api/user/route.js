const allUsers=async(request)=>{
    try{
        return Response.json({massage:'Api is running using next.js'})
    }catch(error){
        console.error(error);
        return Response.json({massage:"hello its getting error"})
    }
}

export{
    allUsers as POST,
    allUsers as GET
 }