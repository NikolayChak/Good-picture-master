

const filter = () => {

    const menu = document.querySelector('.portfolio-menu');
    const item = document.querySelectorAll('li');
    const btnAll = document.querySelector('.all');
    const btnLovers = document.querySelector('.lovers');
    const btnChef = document.querySelector('.chef');
    const btnGirl = document.querySelector('.girl');
    const btnGuy = document.querySelector('.guy');
    const btnGrandmother = document.querySelector('.grandmother');
    const btnGranddad = document.querySelector('.granddad');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = document.querySelectorAll('.all');
    const markGirl = document.querySelectorAll('.girl');
    const markLovers = document.querySelectorAll('.lovers');
    const markChef = document.querySelectorAll('.chef');
    const markGuy = document.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) =>{
        markAll.forEach(mark =>{
            mark.style.display = 'none',
                mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType){
            markType.forEach(mark => {
                mark.style.display = "block";
                mark.classList.remove('animated', 'fadeIn');
            });
        }else {
            no.style.display = "block";
            no.classList.remove('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', ()=>{
        typeFilter(markAll);
    });
    btnLovers.addEventListener('click', ()=>{
        typeFilter(markLovers);
    });
    btnChef.addEventListener('click', ()=>{
        typeFilter(markChef);
    });
    btnGuy.addEventListener('click', ()=>{
        typeFilter(markGuy);
    });
    btnGirl.addEventListener('click', ()=>{
        typeFilter(markGirl);
    });
    btnGrandmother.addEventListener('click', ()=>{
        typeFilter();
    });
    btnGranddad.addEventListener('click', ()=>{
        typeFilter();
    });

    menu.addEventListener('click', (e) =>{
        let target = e.target;

        if (target && target.tagName == "LI"){
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    })
};

export default filter;