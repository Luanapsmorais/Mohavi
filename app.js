var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

var methodOverride = require('method-override');
var session = require('express-session');


var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var areaAlunoRouter = require('./src/routes/areaAluno');
var loginRouter = require('./src/routes/login');
var cadastroAlunoRouter = require('./src/routes/cadastroAluno');
var aulasRouter = require('./src/routes/aulas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:"projetoIntgMohave",
  resave:true,
  saveUninitialized:true
}))

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/area-aluno', areaAlunoRouter);
app.use('/login', loginRouter);
app.use('/cadastroAluno', cadastroAlunoRouter);
app.use('/aulas', aulasRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

