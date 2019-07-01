var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const jsdom = require("jsdom");
const { JSDOM } = jsdom; // https://github.com/jsdom/jsdom

async function getHTMLContent() {
    return new Promise( (resolve, reject) => {
        var XMLRequest = new XMLHttpRequest();
        XMLRequest.open('GET', "https://www.borderlineups.com/wait-times/", true);
        XMLRequest.send();
        XMLRequest.onload = () => {
            if (XMLRequest.readyState == 4 && XMLRequest.status == 200) {
                return resolve(XMLRequest.responseText);
            } else {
                return reject('There was an error retrieving the data');
            }
        }
    });

}

async function convertToHTML() {

    let response = await getHTMLContent();

    console.log(response);

   // const { document } = (new JSDOM(response)).window;

   // console.log(document.getElementsByClassName("wTime")[0].innerHTML);
}

convertToHTML();
