// Rendering portfolio content

function loadPortfolio() {

    // XHR object
    let portfolio = new XMLHttpRequest();
    
    // Open json file
    portfolio.open('get', 'portfolio.json', true);
    
    
    portfolio.onload = function() {
        let portfolioContent = JSON.parse(portfolio.responseText);
        console.log(portfolioContent);

        let output = '';

        for(let i = 0; i<3; i++){
            output += 
            `   <div class="curr">
                     <a href="${portfolioContent[i].link}">
                         <img id="p1-img" src="${portfolioContent[i].image}">
                         <div id="visible">${portfolioContent[i].visible}</div>
                     </a>
                </div>
            `
        }
        document.getElementById('portfolio').innerHTML = output;
        
    }
    
    portfolio.send();
}

document.getElementById('btn1').addEventListener('click', loadmoreprojects);
    
var morecontent = new XMLHttpRequest();

function loadmoreprojects() {
    
    console.log("button clicked");
    morecontent.open('get', 'portfolio.json', true);

    morecontent.onload = function() {
        if(morecontent.status == 200){

            var morecont = JSON.parse(morecontent.responseText);

            console.log(morecont);
            var output1 = '';

            for(let i=3; i<morecont.length; i++){
                output1 +=  
                `   <div class="curr">
                    <a href="${morecont[i].link}">
                    <img id="p1-img" src="${morecont[i].image}">
                    <div id="visible">${morecont[i].visible}</div>
                </a>
           </div>
       `
            }
            document.getElementById('portfolio1').innerHTML = output1;
            document.getElementById('btn1').style.visibility = "hidden";
        }
    }
    morecontent.send();
}