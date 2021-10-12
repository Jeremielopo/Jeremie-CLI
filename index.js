#!/usr/bin/env node

import { getCode } from 'country-list';
import axios from 'axios';
import ora from 'ora';

const arg = process.argv[2]; 
const pays = getCode(`${arg}`);
console.log(process.argv)
const year =  process.argv[3] || new Date().getFullYear();
const url = `https://date.nager.at/api/v3/publicholidays/${year}/${pays}`;
const spinner = ora('Loading unicorns').start();



setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);



(() => {
async function fetchHoliday () {
    try {
        const get = await axios.get(url); 
        return get.data 
   
    
    }
   catch (e) {
       console.log(e)
   }
    
}

 async function DisplayHoliday() {
    const data = await fetchHoliday() ;
    data.forEach(element => {
        let localName = element.localName ; 
        let Name = element.name;
        let date = element.date;
        console.log(`${date} : ${Name} - aka - ${localName}`)
    });
 }
 DisplayHoliday() 
}




)()






