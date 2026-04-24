/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */

import { FormView } from "./formview.js";
import { ImportView } from "./inportexport.js";
import { AuthorManager } from "./manager.js";
import { NavigationBar } from "./navigationbar.js"
import { TableView } from "./table.js";

const formFields = [{//letrehozunk egy formfield listat ami alapjan peldanyositja a form
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom']//cimsor tomb
const manager= new AuthorManager();//peldany manager

const navbar= new NavigationBar();//peldany navbar
navbar.appendTo(document.body)//hozzafutzzuk a bodyhoz

const tableView= new TableView("table",headerArray, manager);//peldany tabla
tableView.appendTo(document.body)//hozzafuzzuk a bodyhoz
navbar.addViewElement("Táblázat", tableView)//hozzaadjuk a tabl a navbarhpz

const formView= new FormView("tableForm",formFields,manager)//peldany form
formView.appendTo(document.body)//hozzafzzuk a bodyhoz
navbar.addViewElement("Form", formView)//hozzaadjuk a form a navbarhoz

const importexport = new ImportView('Importexport',manager)//peldany inport export
importexport.appendTo(document.body)//hozza a bodyhoz
navbar.addViewElement("Import/Export", importexport)//hozzaadjuk a navbarhoz
navbar.activate("table")// meghivjuk a navbar tablat