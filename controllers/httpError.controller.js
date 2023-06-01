export const error404 = (req, res)=>{
    // Mostrando productos en memoria
    res.render('not-found', { 
      docTitle:"ERROR 404"
    });
  }