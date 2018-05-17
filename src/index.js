
const container = document.createElement('div'),
mainArea = document.createElement('div'),
postCreateArea = document.createElement('div'),
postArea = document.createElement('div'),
postCommentArea = document.createElement('div');
distinctPost = document.createElement('div');

container.className = 'container';
mainArea.className = 'main-block';
postCreateArea.className = 'post-create-area text-center p-5';
postCommentArea.className = 'post-comment-area';
postArea.className = "post-block";
distinctPost.className = "single-post-block";
h2 = document.createElement('h2');
h2.innerHTML = 'Single Page Application';
document.querySelector('#root').appendChild(container);
container.appendChild(mainArea);
mainArea.appendChild(postCreateArea);
mainArea.appendChild(postArea);
mainArea.appendChild(postCommentArea);
postCreateArea.appendChild(h2);

//profile settings
let profileObj = {
    profilePhoto: '3.jpg',
    profileName:  "Noman Abdulla"
}
postCreateArea.innerHTML = `
    <div class="top-bar-block">
        <div class="top-left-block top-content-block text-left">
            <form action="#" method="get" class="search-form">
                <div class="input-box">
                    <input type="text" value="" required="" name="s" placeholder="Search...">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
        </div>
        <div class="top-right-block top-content-block text-right">
            <div class="profile-block">
                <div class="profile-photo">
                    <a href="#">
                        <img src="assets/images/3.jpg" alt="img" class="img-responsive profile-img">
                    </a>
                </div>
                <h4><a href="#">${profileObj.profileName}</a></h4>
                <div class="settings-block">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-cog"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">
                                <div class="custom-file" id="customFile" lang="es">
                                    <input type="file" class="custom-file-input" id="imageInput" aria-describedby="fileHelp">
                                    <label class="custom-file-label" for="exampleInputFile">
                                    
                                    </label>
                                </div>
                            </a>
                            <a class="dropdown-item" href="#">
                               <span class="name-change-feild"> Change Name </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="post-create-block">
        <div class="p-main">
            <div class="profile-block">
                <div class="profile-photo">
                    <img src="assets/images/3.jpg" alt="img" class="img-responsive profile-img">
                </div>
            </div>
            <textarea class="form-control" id="postInput" rows="7" placeholder="Whats on your mind..?"></textarea>
        </div>
        <ul class="post-create-option-block color-option-block">
            <li class="color color-one active-bg-color" data-color="#7cffcb"></li>
            <li class="color color-two" data-color="#0cbaba"></li>  
            <li class="color color-three" data-color="#9e8fb2"></li>
            <li class="color color-four" data-color="#fce043"></li>
            <li class="color color-five" data-color="#045de9"></li>
        </ul>
        <ul class="post-create-option-block post-create-additional-option-block">
            <li>
                <div class="form-group font-family-select-block">
                    <select class="form-control" id="fontFamily">
                        <option disabled="disabled" selected="selected">Font Family</option>
                        <option data-font-family="serif">Serif</option>
                        <option data-font-family="sans-serif">Sans-Serif</option>
                        <option data-font-family="monospace">Monospace</option>
                        <option data-font-family="cursive">Cursive</option>
                        <option data-font-family="fantasy">Fantasy</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="form-group font-size-select-block">
                    <select class="form-control" id="fontSize">
                        <option disabled="disabled" selected="selected">Font Size</option>
                        <option data-font-size="14">14</option>
                        <option data-font-size="12">12</option>
                        <option data-font-size="18">18</option>
                        <option data-font-size="22">22</option>
                        <option data-font-size="26">26</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="form-group font-color-select-block">
                    <select class="form-control" id="fontColor">
                        <option disabled="disabled" selected="selected">Font Color</option>
                        <option data-font-color="#111">Lime Black</option>
                        <option data-font-color="#fff">White</option>
                        <option data-font-color="#505050">Gray</option>
                        <option data-font-color="#0978ff">Blue</option>
                        <option data-font-color="#00c162">Green</option>
                    </select>
                </div>
            </li>
            <li>
                <button type="button" id="postButton" class="btn custom-btn">Post</button>
            </li>
        </ul>
    </div>
`;


// post creation module

//background color settings
let bgColor = "#fff";
const ColorOption1 = document.querySelector('.color');
ColorOption1.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption1.classList.toggle('active-bg-color');
    bgColor = ColorOption1.getAttribute("data-color");
}
const ColorOption2 = document.querySelector('.color-two');
ColorOption2.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption2.classList.toggle('active-bg-color');
    bgColor = ColorOption2.getAttribute("data-color");
}
const ColorOption3 = document.querySelector('.color-three');
ColorOption3.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption3.classList.toggle('active-bg-color');
    bgColor = ColorOption3.getAttribute("data-color");
}
const ColorOption4 = document.querySelector('.color-four');
ColorOption4.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption4.classList.toggle('active-bg-color');
    bgColor = ColorOption4.getAttribute("data-color");
}
const ColorOption5 = document.querySelector('.color-five');
ColorOption5.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption5.classList.toggle('active-bg-color');
    bgColor = ColorOption5.getAttribute("data-color");
}

//font-family block
let fontFamily = 'serif';
document.getElementById("fontFamily").onchange = function () {
    fontFamily= this.options[this.selectedIndex].getAttribute("data-font-family");
};

//font-size block
let fontSize = '14';
document.getElementById("fontSize").onchange = function () {
    fontSize= this.options[this.selectedIndex].getAttribute("data-font-size");
    fontSize = fontSize+'px';
};

//font-size block
let fontColor = '#111';
document.getElementById("fontColor").onchange = function () {
    fontColor= this.options[this.selectedIndex].getAttribute("data-font-color");
};

//profile settings block
document.getElementById("imageInput").onchange = function () {
    var elems = document.querySelectorAll(".profile-img");
    var resultImg = (this.files[0]);
    var reader  = new FileReader();
    reader.onloadend = function () {
        [].forEach.call(elems, function(el) {
            el.src = reader.result;
        });
    }
    if (resultImg) {
        reader.readAsDataURL(resultImg);
    } else {
        [].forEach.call(elems, function(el) {
            el.src = "";
        });
    }
};

let postButton = document.getElementById("postButton");
postButton.onclick = function(){
    let postContent = document.getElementById("postInput").value;
    distinctPost.innerHTML = `
        <div class="post-inner-block">
            <div class="profile-block">
                <div class="profile-photo">
                    <img src="assets/images/3.jpg" alt="img" class="img-responsive profile-img">
                </div>
                <h4><a href="#">${profileObj.profileName}</a></h4>
            </div>
            <div class="post-body" style="background:${bgColor}">
                <p style="color:${fontColor};font-family:${fontFamily};font-size:${fontSize};">
                    ${postContent}
                </p>
            </div>
            <div class="post-bottom-block">
                <div class="like-block">
                    <a href="#">
                        <i class="far fa-thumbs-up"></i>
                        <span>4 likes</span>
                    </a>
                </div>
                <div class="comment-block">
                    <a href="#">
                        <i class="far fa-comment"></i>
                        <span>2 Comments</span>
                    </a>
                </div>
            </div>
        </div>
    `;
    postArea.appendChild(distinctPost);
}

