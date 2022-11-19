class APIFeatures{
    constructor(query, queryStr){
    this.query=query;
    this.queryStr=queryStr
}

search(){
    const keyword= this.queryStr.keyword ? {
        nombre:{
            $regex:this.queryStr.keyword,  //regex la interpretacion de la palabra que queremos buscar mayusculas  minusulas 
            $options:'i' //  sencibilidad de reges semsuble o muy sencible dependiendo de la palabra que 
                            //sea exacta a la que esta en la base de datos 'i' = insensitive
        }
    }:{}

    this.query= this.query.find({...keyword});
    return this
}


pagination(resPerPage){
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage-1);

    this.query= this.query.limit(resPerPage).skip(skip)
    return this
}

}

module.exports = APIFeatures