
const quotes = [
  {
    //img:'./images/Puppet Master.jpg',
    img:'https://vignette.wikia.nocookie.net/ghostintheshell/images/2/2d/2501HostBody.jpg/revision/latest?cb=20100625045016&path-prefix=en',
    name:'Puppet Master',
    quote: '“Man is an individual only because of his intangible memory. But memory cannot be defined, yet it defines mankind.”'
  },
  {
    img:"https://vignette.wikia.nocookie.net/ghostintheshell/images/2/2d/2501HostBody.jpg/revision/latest?cb=20100625045016&path-prefix=en",
    name:'Puppet Master',
    quote: '“All things change in a dynamic environment. Your effort to remain what you are is what limits you.”'
  },
  {
    img:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/motoko-kusanagi-ghost-in-the-shell-stand-alone-complex-2nd-gig-individual-eleven-5.86.jpg",
    name:'Major Motoko Kusanagi',
    quote: '“If we all reacted the same way, we d be predictable, and theres always more than one way to view a situation...Its simple: overspecialize, and you breed in weakness. Its slow death.”'
  },
  {
    //img:"./images/Major.jpg",
    img:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/motoko-kusanagi-ghost-in-the-shell-stand-alone-complex-2nd-gig-individual-eleven-5.86.jpg",
    name:'Major Motoko Kusanagi',
    quote: '“I feel confined, only free to expand myself within boundaries.”'
  },
  {
    //img:"./images/Batou.jpg",
    img:"https://i.pinimg.com/originals/fe/aa/fb/feaafb5d8c5039eee20a229c0deb3d00.jpg",
    name:'Batou',
    quote: '“I guess once you start doubting, theres no end to it.”'
  },
  {
    img:"https://i.pinimg.com/originals/fe/aa/fb/feaafb5d8c5039eee20a229c0deb3d00.jpg",
    name:'Batou',
    quote: '“Any way you look at it, all the information that a person accumulates in a lifetime is just a drop in the bucket.”'
  },
  {
    //img:"./images/Daisuke.jpg",
    img:"https://pbs.twimg.com/media/DVIF9GlXkAMYI_Q.jpg",
    name:'Daisuke Aramaki',
    quote: '"There has never been a report about a stomach ache or any other related medical trauma from swallowing your pride."'
  },
];


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const authorImage = document.querySelector('#authorImage');
//const authorImage = document.getElementById('authorImage');
//console.log(document.getElementById('authorImage'));

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
  let number = Math.floor(Math.random()*quotes.length);
  //console.log(number);
  //authorImage.innerHTML = quotes[number].img;
  authorImage.src = quotes[number].img;
  console.log(authorImage.src);
  quoteAuthor.innerHTML = quotes[number].name;
  console.log(quoteAuthor.innerHTML);
  quote.innerHTML = quotes[number].quote;
}
