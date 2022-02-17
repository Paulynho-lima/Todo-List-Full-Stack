const CODE_ERR = 400;

const nameValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(CODE_ERR).json({ message: 'O campo "name" é obrigatório' });
    } if (name.length < 3) {
   return res.status(CODE_ERR)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' }); 
  }
    next();
   };

   const statusValidation = (req, res, next) => {
    const { status } = req.body;
    if (!status) {
      return res.status(CODE_ERR).json({ message: 'O campo "name" é obrigatório' });
    } if (status.length < 6) {
   return res.status(CODE_ERR)
      .json({ message: 'O "status" deve ter pelo menos 6 caracteres' }); 
  }
    next();
   };

   // Ref.Regex: https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
 const dateValidation = (req, res, next) => {
    const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    // const rateRegex = /^[1-5]*$/;
    const { creationDate } = req.body;
  
    if (!reg.test(creationDate)) {
      return res.status(CODE_ERR)
      .json({ message: 'O campo "creationDate" deve ter o formato "dd/mm/aaaa"' });
    } 
    next();
   };
    module.exports = {
       nameValidation,
       statusValidation,
       dateValidation,
   };