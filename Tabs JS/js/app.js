const revealTabs = ()=> {
    const tabLinks = document.querySelectorAll('.tab-li');
    const tabContent = document.querySelectorAll('.tab-content');

    for(let i=0; i<tabLinks.length; i++){
        tabLinks[i].addEventListener('click', (e)=> {
            for(let i=0; i<tabLinks.length; i++){
                tabLinks[i].classList.remove('active');
            };

            for(let i=0; i<tabContent.length; i++){
                tabContent[i].classList.remove('active');
            };

            let tabClicked = e.currentTarget;
            tabClicked.classList.add('active');

            let activeTab = e.currentTarget.getAttribute('data-home');
            document.getElementById(activeTab).classList.add('active');
        });
    }
};

revealTabs();

