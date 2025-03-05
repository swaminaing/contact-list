const url = "https://randomuser.me/api/?results=20";

export async function getUsers(){
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("Something's wrong");
        }

        return response.json();
    }catch(err){
        throw new err;
    }
}