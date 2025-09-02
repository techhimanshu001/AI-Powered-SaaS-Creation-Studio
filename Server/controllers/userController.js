import sql from "../configs/db.js"

export const getUserCreations = async(req,res)=>{

    try{
        const {userId} = req.auth()

        const  creations   = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;
         res.json({success: true , creations});
    }catch (error){
        res.json({success: false , message:error.message});
    }


}



export const getPublishedCreations = async(req,res)=>{

    try{
         const  creations   = await sql`SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;
         res.json({success: true , creations});
    }catch (error){
        res.json({success: false , message:error.message});
    }


}

export const toggleLikereations = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;

    const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`;

    if (!creation) {
      return res.json({ success: false, message: "creation not found" });
    }

    const creationLikes = Array.isArray(creation.likes) ? creation.likes : [];

    const userIdStr = userId.toString();
    let updatedLikes;
    let message;

    if (creationLikes.includes(userIdStr)) {
      updatedLikes = creationLikes.filter(user => user !== userIdStr);
      message = 'creation unliked';
    } else {
      updatedLikes = [...creationLikes, userIdStr];
      message = 'creation liked';
    }

    const formattedArray = `{${updatedLikes.join(',')}}`; // PostgreSQL text array

    await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

    res.json({ success: true, message });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
