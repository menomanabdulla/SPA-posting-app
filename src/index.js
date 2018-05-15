
const container = document.createElement('div'),
mainArea = document.createElement('div'),
postCreateArea = document.createElement('div'),
postArea = document.createElement('div'),
postCommentArea = document.createElement('div');

container.className = 'container';
mainArea.className = 'main-block';
postCreateArea.className = 'post-create-area text-center p-5';
postCommentArea.className = 'post-comment-area';
h2 = document.createElement('h2');
h2.innerHTML = 'Single Page Application';
document.querySelector('#root').appendChild(container);
container.appendChild(mainArea);
mainArea.appendChild(postCreateArea);
mainArea.appendChild(postArea);
mainArea.appendChild(postCommentArea);
postCreateArea.appendChild(h2);
postCreateArea.innerHTML = `
    <div class="post-create-block">
        <div class="p-main">
            <div class="profile-block">
                <div class="profile-photo">
                    <img src="assets/images/profile.jpg" alt="img" class="img-responsive">
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

const ColorOption1 = document.querySelector('.color');
ColorOption1.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption1.classList.toggle('active-bg-color');

}
const ColorOption2 = document.querySelector('.color-two');
ColorOption2.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption2.classList.toggle('active-bg-color');
}
const ColorOption3 = document.querySelector('.color-three');
ColorOption3.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption3.classList.toggle('active-bg-color');
}
const ColorOption4 = document.querySelector('.color-four');
ColorOption4.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption4.classList.toggle('active-bg-color');
}
const ColorOption5 = document.querySelector('.color-five');
ColorOption5.onclick = function(){
    var elems = document.querySelectorAll(".active-bg-color");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active-bg-color");
    });
    ColorOption5.classList.toggle('active-bg-color');
}

//font-family block
let fontFamily = 'serif';
document.getElementById("fontFamily").onchange = function () {
    fontFamily= this.options[this.selectedIndex].getAttribute("data-font-family");
    console.log(fontFamily);
};

//font-size block
let fontSize = '14';
document.getElementById("fontSize").onchange = function () {
    fontSize= this.options[this.selectedIndex].getAttribute("data-font-size");
    console.log(fontSize);
};

//font-size block
let fontColor = '#111';
document.getElementById("fontColor").onchange = function () {
    fontSize= this.options[this.selectedIndex].getAttribute("data-font-color");
    console.log(fontSize);
};
