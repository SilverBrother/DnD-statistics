import fetch from 'node-fetch';
import * as cheerio from "cheerio";

const URL = "https://www.dndbeyond.com/";

//Function to get raw data
const getRawData = (URL) => {
    return fetch(URL)
        .then((res) => res.text())
        .then((data) => {
            return data;
        });
};

//Start of the program
const getTitle = async() => {
    const titleData = await getRawData(URL);
    //console.log(titleData);  <---- this will display a shit ton of data!

    //Parsing the data
    const parsedTitle = cheerio.load(titleData);

    //Extracting the data
    const title  = parsedTitle(".mm-nav-item__label mm-nav-item__label--link");
    //console.log(title.text());
    console.log(parsedTitle(".mm-nav-item__label mm-nav-item__label--link").text());
};

getTitle();

/*const parsedTitle = cheerio.load(
    `<span class="ddbc-campaign-summary__name"> Under the Surface </span>`
);
console.log(parsedTitle(".ddbc-campaign-summary__name").text());*/