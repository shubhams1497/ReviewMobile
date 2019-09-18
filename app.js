const SVG_STAR = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve">
<path xmlns="http://www.w3.org/2000/svg" d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558  s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024  l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506  c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017  l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"/>
</svg>`

const SVG_RUPEE = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve">
<path xmlns="http://www.w3.org/2000/svg" d="M326.62,91.076c-1.711-1.713-3.901-2.568-6.563-2.568h-48.82c-3.238-15.793-9.329-29.502-18.274-41.112h66.52   c2.669,0,4.853-0.856,6.57-2.565c1.704-1.712,2.56-3.903,2.56-6.567V9.136c0-2.666-0.855-4.853-2.56-6.567   C324.334,0.859,322.15,0,319.481,0H81.941c-2.666,0-4.853,0.859-6.567,2.568c-1.709,1.714-2.568,3.901-2.568,6.567v37.972   c0,2.474,0.904,4.615,2.712,6.423s3.949,2.712,6.423,2.712h41.399c40.159,0,65.665,10.751,76.513,32.261H81.941   c-2.666,0-4.856,0.855-6.567,2.568c-1.709,1.715-2.568,3.901-2.568,6.567v29.124c0,2.664,0.855,4.854,2.568,6.563   c1.714,1.715,3.905,2.568,6.567,2.568h121.915c-4.188,15.612-13.944,27.506-29.268,35.691   c-15.325,8.186-35.544,12.279-60.67,12.279H81.941c-2.474,0-4.615,0.905-6.423,2.712c-1.809,1.809-2.712,3.951-2.712,6.423v36.263   c0,2.478,0.855,4.571,2.568,6.282c36.543,38.828,83.939,93.165,142.182,163.025c1.715,2.286,4.093,3.426,7.139,3.426h55.672   c4.001,0,6.763-1.708,8.281-5.141c1.903-3.426,1.53-6.662-1.143-9.708c-55.572-68.143-99.258-119.153-131.045-153.032   c32.358-3.806,58.625-14.277,78.802-31.404c20.174-17.129,32.449-39.403,36.83-66.811h47.965c2.662,0,4.853-0.854,6.563-2.568   c1.715-1.709,2.573-3.899,2.573-6.563V97.646C329.193,94.977,328.335,92.79,326.62,91.076z"/>
</svg>`

let selectedLi = null;
//review details for current product
let reviewDetail = {rating:0};

renderPage();

function renderPage() {
    const ulList = document.getElementById('product-list');

    fetch("https://demo9468179.mockable.io/products")
    .then( (response) => (response.json()) )
    .then( function(productList) {

        for(let product of productList) {
            ulList.appendChild( createLi(product) );
        }
        document.body.removeChild(document.getElementById('loading-display'));
        document.getElementById('container').style.display = "block";
        renderReviewsSection(1);
    });


    
    ulList.addEventListener('click',function(e) {
        
        let clickedLi = e.target;

        while(clickedLi.nodeName != 'LI') {
            clickedLi = clickedLi.parentNode;
        }
        //console.dir(clickedLi.id);  
        selectedLi.classList.remove('selected');
        clickedLi.classList.add('selected');
        selectedLi = clickedLi;
        renderReviewsSection(clickedLi.id);
    })

    

}


function getSVGStar(id) 
{
    const SVG_STAR = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve">
<path id="star${id}"  xmlns="http://www.w3.org/2000/svg" d="M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558  s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024  l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506  c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017  l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"/>
</svg>`

return SVG_STAR;

}

function creatingRatingInpWidget(productId)
{
    let ratingDiv = document.createElement('div');
    
    for(let i=1;i<=5;i++) {
        ratingDiv.innerHTML += getSVGStar(i);
    }

    ratingDiv.addEventListener('click',function(e){
        //console.log(e.target.id);
        markStars(e.target.id);
    })

    return ratingDiv;

}

function markStars(id)
{
    let el = parseInt(id.substr(4,5));
    
    for(let i=1;i<=el;i++) {
        let ht = document.getElementById('star'+i);
        ht.className.baseVal = "fillYellow";
        
    }

    reviewDetail.rating = el;

    for(let i=el+1;i<=5;i++) {
        let ht = document.getElementById('star'+i);
        ht.className.baseVal = "fillGray";
    }

    //console.log(id);
}


function createRatingTextBox() {
    let ratingTextDiv = document.createElement('div');
    ratingTextDiv.textContent = "Review This Product";

    let inputBox = document.createElement('textarea');
    inputBox.setAttribute('rows','6');
    inputBox.setAttribute('cols','80');
    inputBox.setAttribute('id','revDesc');
    inputBox.placeholder="Description";

    let titleBox = document.createElement('textarea');
    titleBox.setAttribute('rows',"2");
    titleBox.setAttribute('cols','80');
    titleBox.setAttribute('id','revTitle');
    titleBox.placeholder="Title (Optional)";


    ratingTextDiv.appendChild(inputBox);
    ratingTextDiv.appendChild(titleBox);

    return ratingTextDiv;
}

function createSubmitButton(productId){
    let sbutton = document.createElement('button');
    sbutton.textContent = "Submit";

    sbutton.addEventListener('click',function(e) {

        reviewDetail.text = document.getElementById('revDesc').value;
        reviewDetail.title = document.getElementById('revTitle').value;
        reviewDetail.userName = "shubham";
        reviewDetail.created = Date();

        if(reviewDetail.rating == 0) {
            alert('Please Provide the rating before Submitting!!!');
            return;
        }

        if(reviewDetail.text == "" || reviewDetail.text == null) {
            alert('Please Type Description of review!!!');
            return;
        }   

        

        if(!localStorage[productId])
        {
            localStorage[productId] = JSON.stringify([]);
        }
        var locallyStoredReviews = JSON.parse(localStorage[productId]);

        locallyStoredReviews.unshift(reviewDetail);

        localStorage[productId] = JSON.stringify(locallyStoredReviews);
        //console.log(JSON.stringify(locallyStoredReviews));

        appendReview(reviewDetail);

        document.getElementById('revDesc').value = "";
        document.getElementById('revTitle').value = "";
        markStars('star0');
        
    });


    return sbutton;
}


function appendReview(reviewDetail) {
    let el = document.getElementById('list-reviews');
    el.insertBefore(createReviewLi(reviewDetail),el.childNodes[0]);
}

function renderReviewsSection(productId) {

    const ratingInput = document.getElementById('rating-input-section');

    ratingInput.textContent = "Rate this Product";
    ratingInput.appendChild( creatingRatingInpWidget(productId) );
    ratingInput.appendChild( createRatingTextBox(productId) );
    ratingInput.appendChild( createSubmitButton(productId) );

    fetch(`https://demo9468179.mockable.io/reviews/${productId}`)
    .then( (response) => (response.json()))
    .then( function (reviews) {
        
        const reviewlist = document.getElementById('review-list');
        reviewlist.textContent = "All Reviews";
        let reviewul = document.createElement('ul');
        reviewul.setAttribute('id','list-reviews');
        reviewlist.appendChild(reviewul);
        
        if(localStorage[productId]) {
            let locallyStored = JSON.parse(localStorage[productId]);
            reviews = locallyStored.concat(reviews);
        }

        for(let review of reviews) {
            reviewul.appendChild( createReviewLi(review) )
        }        
    })


    // if(localStorage[productId]) {
    //     //console.log("yes");
    //     let storedrev = JSON.parse(localStorage[productId]);
    //     markStars('star'+storedrev.rating);
    //     document.getElementById('revDesc').value = storedrev.text;
    //     document.getElementById('revTitle').value = storedrev.title;
        
    // }


}


function createReviewLi(review) {

    let li = document.createElement('li');

    let ratingTitle = document.createElement('p');
    ratingTitle.appendChild(averageRatingWidget(review.rating));
    ratingTitle . innerHTML += review.title;

    let ratingText = document.createElement('p');
    ratingText.textContent = review.text;

    let ratingDateUser = document.createElement('p');
    ratingDateUser.setAttribute('class','gray-text');
    ratingDateUser.textContent = `${review.userName}  ${ changeDateFormat(review.created) }`;

    li.appendChild(ratingTitle);
    li.appendChild(ratingText);
    li.appendChild(ratingDateUser);

    return li;
}

function changeDateFormat(date) {

    let d = new Date(date);
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let rt = `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`
    return rt;
}

function averageRatingWidget(averageRating) 
{
    let avgRating = document.createElement('span');
    avgRating.classList.add('average-rating');

    if(averageRating < 3) {
        avgRating.classList.add('Average');
    }
    else if(averageRating >=3 && averageRating < 4) {
        avgRating.classList.add('Good');
    }
    else if(averageRating >= 4) {
        avgRating.classList.add('Excellent');
    }

    avgRating.textContent = averageRating;
    avgRating.innerHTML += SVG_STAR;
    return avgRating;
}


function createLi(product) {
    let li = document.createElement('li');
    li.setAttribute('id',product.id);
    if(product.id == 1) {
        li.classList.add("selected");
        selectedLi = li;
    }

    let img = document.createElement('img');
    img.setAttribute('src',product.productImage);
    img.setAttribute('class','product-image');
    
    let title = document.createElement('p');
    title.textContent = product.title;

    let ratingData = document.createElement('p');

    let avgRating = averageRatingWidget(product.rating.average);

    let no_rating_reviews = document.createElement('span');
    no_rating_reviews.setAttribute('class','no-rating-reviews');
    no_rating_reviews.textContent = `${product.rating.ratingCount} ratings and ${product.rating.reviewCount} reviews`;

    ratingData.appendChild(avgRating);
    ratingData.appendChild(no_rating_reviews);

    let productPrice = document.createElement('p');
    productPrice.setAttribute('class','product-price');
    
    let rupeeImg = document.createElement('img');
    rupeeImg.setAttribute('src','assets/rupee-indian.png');
    rupeeImg.setAttribute('width','12px');

    let pricetext =  document.createElement('span');
    pricetext.textContent = product.pricing.value;

    productPrice.appendChild(rupeeImg);
    productPrice.appendChild(pricetext);

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(ratingData);
    li.appendChild(productPrice);

    return li;

}