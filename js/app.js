const bar = document.querySelector('.bar');
const bar__left = document.querySelector('.bar__left');
const bar__menu = document.querySelector('.bar__menu');
const bar__overlay = document.querySelector('.overlay');
const arrowLeft = document.querySelector('.fa-arrow-left');
const listitems = document.querySelectorAll('.list_items');

bar.addEventListener('click', (e)=> {
    bar__left.classList.remove('transformLeft');
    bar__left.classList.add('transformRight');
    bar__overlay.style.display =  'flex'
})
arrowLeft.addEventListener('click', ()=> {
    bar__left.classList.add('transformLeft');
    bar__left.classList.remove('transformRight');
    bar__overlay.style.display =  'none'
})
bar__overlay.addEventListener('click', (e)=> {
    bar__left.classList.add('transformLeft');
    bar__left.classList.remove('transformRight');
    bar__overlay.style.display =  'none'
})
listitems.forEach((item)=> {
    item.addEventListener('click', ()=> {
        bar__left.classList.add('transformLeft');
        bar__left.classList.remove('transformRight');
        bar__overlay.style.display =  'none'
        console.log('asliddin')
    })
})


const download = document.getElementById('download_CV');

download.addEventListener('click', () => {
  const fileUrl = "../images/CV/Asliddin_Resume.pdf";
  const fileName = "Asliddin_Resume";

  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a)
})