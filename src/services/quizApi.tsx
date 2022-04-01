import baseurl from  "./baseurl";

// Quiz api Resource
class QuizApi {
     getAll() {
         return baseurl.get('/api.php?amount=10&difficulty=hard&type=boolean');
     }
     
}


export default  new QuizApi;