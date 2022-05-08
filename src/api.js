import axios from "axios"

export const getBooksByName = async (query)=>{
   
    try {
        if (query && query.length>0) {
        const data = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&langRestrict=ru&maxResults=40&orderBy=relevance') 
       return data.data.items
    } else return []
    
    } catch (error) {
        return []
    }
       
}

export const getSingleBook = async (id)=>{
    try {
        if(id){
        const data = await axios.get('https://www.googleapis.com/books/v1/volumes/'+id)
        return data.data
        } else return null
    } catch (error) {
        return null
    }
}