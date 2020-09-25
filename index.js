const express = require('express')
const app = express()
const bodyParser=require('body-parser')
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
const dataMenu = require('./dataMenu.json')
const menu = require('./menu.json')


//Option 1 : Ohne package
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))


//Option 2 : mit package
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


app.set('view engine', 'ejs')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(3002, () => {
    console.log('server listening at https://localhost3002')
})
app.use(express.static('public'))

app.get('/', (req, res) => {
       
    res.render('index', {title: 'Home',menu:dataMenu})
})
app.get('/about', (req, res) => {
    res.render('about',{ title: 'About',menu:dataMenu})
})
app.get('/team', (req, res) => {
    res.render('team',{ title: 'Team',menu:dataMenu})
})
app.get('/booking', (req, res) => {
    res.render('booking',{ title: 'Booking',menu:dataMenu})
})
app.get('/menu', (req, res) => {
    res.render('menu',{ title: 'Menu',menu:dataMenu,dishes:menu})
})
app.get('/gallerie', (req, res) => {
    res.render('gallerie',{ title: 'Gallerie',menu:dataMenu})
})
app.get('/events', (req, res) => {
    res.render('events',{ title: 'Events',menu:dataMenu})
})
app.get('/contact', (req, res) => {
    res.render('contact',{ title: 'Contact',menu:dataMenu})
})
app.post('/contactForm', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.redirect('/contact')
})
app.use((req, res) => {
    res.render('404',{ title: '404',menu:dataMenu})
})
 
 
    
  
   
