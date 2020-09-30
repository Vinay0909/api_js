let newsaccordion = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&apiKey=aafd966e99aa4ecf9d7fba57af2e451c', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsarticles = "";
        articles.forEach(function (element, index) {
            //console.log(articles[news]);
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                    aria-expanded="false" aria-controls="collapse${index}">
                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
            </div>
        </div>`;

            // let news = `<div class="accordion" id="newsaccordion">
            //               <div class="card">
            //               <div class="card-header" id="heading${index}">
            //               <h5 class="mb-0">
            //              <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
            //              aria-expanded="true" aria-controls="collapse${index}">
            //              <b>Breaking News:${index+1}</b>${element["title"]}
            //              </button>
            //              </h5>
            //             </div>

            //             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
            //              <div class="card-body">${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a></div>
            //             </div>
            //             </div>
            //             </div>`;
            newsarticles += news;
        });
        newsaccordion.innerHTML = newsarticles;
    }
    else {
        console.log("some error occurred")
    }
}
xhr.send()

