module.exports = (req, res, next) => {
    if (req.session.aluno) return next();
  
    return res.redirect('/login')
  }