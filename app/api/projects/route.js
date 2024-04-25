const signup =async(request)=>{
    try{
        return Response.json({massage:'hello i'})
    }catch(error){
        console.error(error);
    }
}
export {
    signup as POST,
    signup as GET
}