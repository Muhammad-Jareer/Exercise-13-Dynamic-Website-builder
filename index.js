// console.log("This is JavaScript");


// function card_generator(title, cName, views, monthsOld, duration, thumbnail) {

//     let viewStr
//     if (views < 100000) {
//         viewStr = views/1000 + "K";
//     }
//     else if (views > 1000000) {
//         viewStr = views/1000000 + "M";
//     }
//     else {
//         viewStr = views;
//     }
//     let html = ` <div class="card">
//     <div class="iamge">
//         <img src="${thumbnail}" alt="">
//         <div class="time">${duration}</div>
//     </div>
//     <div class="text">
//         <h2 class="title">${title}</h2>
//         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
//     </div>
// </div>`
// document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
// }

// // card_generator()
// // let details = card_generator ( prompt("Enter comma-separated values for the array:"));

// let details = card_generator("PLAY ALLSigma Web Development Course - Web Development Tutorials", "CodewithHarry", 65000, 7, "31:32", "images/thumbnail.webp");

function card_generator(details) {
    // let [title, cName, views, monthsOld, duration, thumbnail] = details;

    let title = prompt("Enter the title:");
    let cName = prompt("Enter the channel name:");
    let views = Number(prompt("Enter the number of views:"));
    let monthsOld = Number(prompt("Enter how many months old:"));
    let duration = prompt("Enter the duration:");
    let thumbnail = prompt("Enter the thumbnail URL:");

    let viewStr;
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

let details = ["PLAY ALLSigma Web Development Course - Web Development Tutorials", "CodewithHarry", 65000, 7, "31:32", "images/thumbnail.webp"];
card_generator(details);
card_generator(details)





