export default class APIService{
    static UpdateArticle(id,body){
        return  fetch(`http://127.0.0.1:8000/update/${id}/`,{
            //easy to write as update/id and the importance of "`"
            'method':'PUT',
            headers:{
              'Content-Type':'application/json'
              //easy to write as applications
            },
            body:JSON.stringify(body)
          
        }).then(resp=>resp.json())
         
    }
    static InsertArticle(body){
        return  fetch('http://127.0.0.1:8000/add',{
            //easy to write as update/id and the importance of "`"
            'method':'POST',
            headers:{
              'Content-Type':'application/json'
              //easy to write as applications
            },
            body:JSON.stringify(body)
          
        }).then(resp=>resp.json())
         
    }
    static DeleteArticle(id){
        return  fetch(`http://127.0.0.1:8000/delete/${id}/`,{
            //easy to write as update/id and the importance of "`"
            'method':'DELETE',
            headers:{
              'Content-Type':'application/json'
              //easy to write as applications
            },
          
          
        })
         
    }
}