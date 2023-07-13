import './styles.css'
import template from './template.hbs'
import data from './data.js'

const render=(template, data) =>{
    const app = document.getElementById('app');
    app.innerHTML=template(data);
}
render(template, data)