const content = document.querySelector(".content");
const yes_bttn = document.querySelector(".yes-button");
const no_bttn = document.querySelector(".no-button");
const question = document.querySelector(".question");

const content_rect = content.getBoundingClientRect();
const bttn_rect = no_bttn.getBoundingClientRect();

yes_bttn.addEventListener('click', () => {
    question.innerHTML = '&#x1F95A; I am so egg-cited! &#129370;'
});

no_bttn.addEventListener('mouseover', () => {
    const posX = Math.floor(Math.random() * (content_rect.width - bttn_rect.width));
    const posY = Math.floor(Math.random() * (content_rect.height - bttn_rect.height));

    no_bttn.style.left = posX + 'px';
    no_bttn.style.top = posY + 'px';
});
