console.log("This is JavaScript");

function card_generator(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 100000) {
        viewStr = views/1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views/1000000 + "M";
    }
    else {
        viewStr = views;
    }
    let html = ` <div class="card">
    <div class="iamge">
        <img src="${thumbnail}" alt="">
        <div class="time">${duration}</div>
    </div>
    <div class="text">
        <h2 class="title">${title}</h2>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

card_generator("PLAY ALLSigma Web Development Course - Web Development Tutorials", "CodewithHarry", 65000, 7, "31:32", "images/thumbnail.webp");


