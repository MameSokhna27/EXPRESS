const express = require ('express');
const app = express()
const port = 3000 ;


app.set('view engine', 'pug') ;
app.set('views','./views') ;

function checkWorkingHours(req, res, next) {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); 
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send("L'application est disponible uniquement pendant les heures de travail (du lundi au vendredi, 9h-17h).");
    }
}
app.use(checkWorkingHours);

app.get('/', function(req, res){
    res.render('Home') ;
 });
app.get('/Home', function(req, res){
    res.render('Home') ;
 });
 app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/Contact', (req, res) => {
    res.render('Contact');
});




app.listen(port, ()=> {
    console.log('server started')
})
