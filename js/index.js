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
    bar__menu.style.display = 'flex'
})
arrowLeft.addEventListener('click', ()=> {
    bar__left.classList.add('transformLeft');
    bar__left.classList.remove('transformRight');
    bar__overlay.style.display =  'none'
    bar__menu.style.display = 'flex'
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


const download = document.querySelectorAll('.download_CV');

download.forEach((item) => {
    item.addEventListener('click', () => {
        const fileUrl = "../images/CV/Asliddin_Resume.pdf";
        const fileName = "Asliddin_Resume";
      
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = fileName;
      
        document.body.appendChild(a);
        a.click();
      
        document.body.removeChild(a)
    })
})



document.querySelectorAll(".icon").forEach((icon) => {
    icon.addEventListener("mousemove", (e) => {
      const rect = icon.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 10; 
      const y = (e.clientY - rect.top - rect.height / 2) / 10; 

      const img = icon.querySelector("i");
      img.style.transform = `translate(${x * 5}px, ${y * 5}px)`; 
      icon.style.transform = `translate(${x * 5}px, ${y * 5}px)`; 
  });
  
  icon.addEventListener("mouseleave", () => {
      const img = icon.querySelector("i");
      img.style.transform = "translate(0, 0)"; 
      icon.style.transform = `translate(0, 0)`; 
    });
  });