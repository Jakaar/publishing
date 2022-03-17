class DOM {
    header = document.querySelector(".header");
    navBtn = document.querySelector(".navigation__burger");
    hexNav = document.querySelectorAll(".hex__nav__item");
    hexPic = document.querySelector("#hexpic");
    hexLink = document.querySelector("#biz");
    slideTextContainer = document.querySelector('.hex__slider__layer');
    mobileNav = document.querySelector('.mobile-navigation');
    mobileNavItems = document.querySelectorAll('.navItem__item');
    categorySelectItems = document.querySelectorAll('.portfolio__category .select');
    filterSelectBtn = document.querySelector('.portfolio__select');
    options = document.querySelector('#options');
    optionItems = document.querySelectorAll('#options .options__item');
    portfolioContainer = document.querySelector('.portfolio__items');


    // ------- нүүр хуудсанд рендерлэх дамми дата ---------
    hexPics = [
        {
            url: "./start-up.html",
            title: "창업 지원 사업",
            path: './assets/images/office0.jfif',
            description: "창업 지원을 위한 교육 및 멘토링, 액셀러레이팅,크라우드펀딩, 마케팅 지원, 직/간접투자 등",
        },
        {
            url: "./video-content.html",
            title: "마케팅 사업",
            path: './assets/images/office1.jfif',
            description: "실질적인 성과를 위한 퍼포먼스 마케팅, 콘텐츠 제작, 뉴미디어 마케팅, 서포터즈, 공모전 국내외 셀링 등",
        },
        {
            url: "./mice.html",
            title: "MICE 사업",
            path: './assets/images/office3.jfif',
            description: "고객 맞춤형 포럼, 세미나, 전시, 축제, 온라인 행사, 설명회 및 상담회 등",
        },
        {
            url: "./marketing.html",
            title: "영상콘텐츠 사업",
            path: './assets/images/office2.jfif',
            description: "바이럴 및 광고 영상, 예능 콘텐츠, 인플루언서 콜라보, 라이브커머스, 비대면 송출 등",
        }
    ];


    // ------- portfolio хуудсанд рендерлэх дамми дата ---------
    portdatas = [
        {
            type: '창업지원',
            thumbnail_url: 'https://images.unsplash.com/photo-1604328702728-d26d2062c20b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: '영등포구청 청년창업생태계 조성사업',
            enemy: '영등포 관내 청년 창업가 발굴 및 활성화를 위한 생태계 조성',
            date: '2020.06 ~2020.12',
            contents: '사업화 지원금 1천만원 10개팀 지원 및 액셀러레이팅,  크라우드펀딩, 시제품제작 지원 등',
            performance: '후속 투자 유치 60억, 크라우드펀딩 1억 달성, 기업 매출 14억 이상 증대',
            award: '청년창업기업 30개사 및 예비창업자 500명'
        },
        {
            type: '마케팅지원',
            thumbnail_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: '영등포구청 청년창업생태계 조성사업',
            enemy: '영등포 관내 청년 창업가 발굴 및 활성화를 위한 생태계 조성',
            date: '2020.06 ~2020.12',
            contents: '사업화 지원금 1천만원 10개팀 지원 및 액셀러레이팅,  크라우드펀딩, 시제품제작 지원 등',
            performance: '후속 투자 유치 60억, 크라우드펀딩 1억 달성, 기업 매출 14억 이상 증대',
            award: '청년창업기업 30개사 및 예비창업자 500명'
        },
        {
            type: '영상콘텐츠',
            thumbnail_url: 'https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80',
            title: '영등포구청 청년창업생태계 조성사업',
            enemy: '영등포 관내 청년 창업가 발굴 및 활성화를 위한 생태계 조성',
            date: '2020.06 ~2020.12',
            contents: '사업화 지원금 1천만원 10개팀 지원 및 액셀러레이팅,  크라우드펀딩, 시제품제작 지원 등',
            performance: '후속 투자 유치 60억, 크라우드펀딩 1억 달성, 기업 매출 14억 이상 증대',
            award: '청년창업기업 30개사 및 예비창업자 500명'
        },
        {
            type: 'MICE',
            thumbnail_url: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: '영등포구청 청년창업생태계 조성사업',
            enemy: '영등포 관내 청년 창업가 발굴 및 활성화를 위한 생태계 조성',
            date: '2020.06 ~2020.12',
            contents: '사업화 지원금 1천만원 10개팀 지원 및 액셀러레이팅,  크라우드펀딩, 시제품제작 지원 등',
            performance: '후속 투자 유치 60억, 크라우드펀딩 1억 달성, 기업 매출 14억 이상 증대',
            award: '청년창업기업 30개사 및 예비창업자 500명'
        },
        {
            type: '창업지원',
            thumbnail_url: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: '영등포구청 청년창업생태계 조성사업',
            enemy: '영등포 관내 청년 창업가 발굴 및 활성화를 위한 생태계 조성',
            date: '2020.06 ~2020.12',
            contents: '사업화 지원금 1천만원 10개팀 지원 및 액셀러레이팅,  크라우드펀딩, 시제품제작 지원 등',
            performance: '후속 투자 유치 60억, 크라우드펀딩 1억 달성, 기업 매출 14억 이상 증대',
            award: '청년창업기업 30개사 및 예비창업자 500명'
        }
    ]
    constructor() {
        this.listenEvents();
        this.renderPortfolioItems(this.portdatas);
    }

    
    
    // ------- скролдох үед header арын өнгийг солих ---------
    changeHeader() {
        if (pageYOffset > 300) {
            this.header.classList.add("header--bg");
        } else {
            this.header.classList.remove("header--bg");
        }
    }



    // ------- гар утасны меню нээх ---------
    openNavigation() {
        this.navBtn.children[0].classList.toggle("active");
        this.mobileNav.classList.toggle('mobile-navigation--open');
    }



    // ------- hexagon актив класс солих ---------
    toggleHexSlider() {
        this.hexNav.forEach((el) => {
            el.classList.remove("hex__nav__item--active");
        });
    }



    // ------- гар утасны меню доторх саб листүүдийг нээх ---------
    mobileNavToggle() {
        this.mobileNavItems.forEach(el => {
            el.classList.remove('active');
            el.children[1].classList.remove('sublist--active');
        })
    }


    // ------- portfolio хуудасны контент шүүж харах сонголт ---------
    categoryActiveToggler(){
        this.categorySelectItems?.forEach((el) => {
            el.classList.remove('select--active')
        })
    }



    // ------- portfolio хуудасны dropdown сонголт ---------
    selectFilterOption(){
        this.filterSelectBtn.classList.toggle('angle');
        this.filterSelectBtn.children[1].classList.toggle('rotate');
        this.options.classList.toggle('extend')
    }


    // ------- portfolio хуудсанд дамми дата рендерлэх функц ---------
    renderPortfolioItems(datas){
        if(this.portfolioContainer){
            this.portfolioContainer.innerHTML = '';
            datas.forEach((item , index) => {
                this.portfolioContainer?.insertAdjacentHTML('beforeend' , `
                    <div style="border-color: ${item.type === '창업지원' ? '#35AF8B' : item.type === '마케팅지원' ? '#357CAF' : item.type === '영상콘텐츠' ? '#815C9D' : item.type === 'MICE' ? '#F1B853' : '#35AF8B'}" class="item">
                        <div style="background-color: ${item.type === '창업지원' ? '#35AF8B' : item.type === '마케팅지원' ? '#357CAF' : item.type === '영상콘텐츠' ? '#815C9D' : item.type === 'MICE' ? '#F1B853' : '#35AF8B'}" class="mark ${item.type === 'MICE' && 'eng'}">
                            ${item.type}
                        </div>
                        <div class="item__thumbnail">
                            <img src="${item.thumbnail_url} alt="">
                        </div>
                        <div class="itms">
                            <div class="item__title-section">
                                <img src="./assets/images/hd_logo.png" alt="">
                                <h1 class="title">${item.title}</h1>
                                <div class="button-group">
                                    <button class="btn">
                                        <p>#영등포구청</p>
                                    </button>
                                    <button class="btn">
                                        <p>#청년창업생태계</p>
                                    </button>
                                    <button class="btn">
                                        <p>#조성사업</p>
                                    </button>
                                </div>
                            </div>
                            <div class="item__details">
                                <div class="name">
                                    <p>목</p>
                                    <p>적</p>
                                </div>
                                <div class="description">
                                    ${item.enemy}
                                </div>
                                <div class="name date">
                                    <p>기</p>
                                    <p>간</p>
                                </div>
                                <div class="description date">
                                    ${item.date}
                                </div>
                                <div class="name support">
                                    <p>지원내용</p>
                                </div>
                                <div class="description support">
                                    ${item.contents}
                                </div>
                                <div class="name performance">
                                    <p>사업성과</p>
                                </div>
                                <div class="description performance">
                                    ${item.performance}
                                </div>
                                <div class="name award">
                                    <p>대</p>
                                    <p>상</p>
                                </div>
                                <div class="description award">
                                    ${item.award}
                                </div>
                            </div>
                        </div>
                    </div>
                `)
            })
        }
    }


    // ------- эвент хэндлер---------
    listenEvents() {
        this.navBtn.addEventListener("click", this.openNavigation.bind(this)); // open mobile nav
        document.addEventListener("scroll", this.changeHeader.bind(this)); // change header bg color on scroll 
        this.hexNav?.forEach((el, index) => { // change picture and set link after clicking the hexagon
            el.style.backgroundImage = `url(${this.hexPics[index].path})`;
            el.addEventListener("click", () => {
                const {url , path , title , description} = this.hexPics[index];
                this.toggleHexSlider();
                el.classList.add("hex__nav__item--active");
                this.hexPic.src = path;
                this.slideTextContainer.innerHTML = `
                    <div class="hex__slider__caption">
                        <h2>
                            <a href=${url}>${title}</a>
                        </h2>
                        <p>${description}</p>
                    </div>
                `;
                this.hexLink.href = url;
            });
        });

        this.mobileNavItems.forEach((el , index) => { // mobile navigation handler
            el.addEventListener('click' , () => {
                this.mobileNavToggle();
                el.classList.add('active');
                el.children[1].classList.add('sublist--active')
            })
        });

        this.categorySelectItems.forEach((el , index) => { // filtering items in portfolio page
            el.addEventListener('click' , () => {
                this.categoryActiveToggler();
                el.classList.add('select--active');
                if(index == 0){
                    this.renderPortfolioItems(this.portdatas)
                } else {
                    this.renderPortfolioItems(this.portdatas.filter(item => item.type.toLowerCase() == el.innerText.trim().toLowerCase()));
                }
            })
        })

        this.filterSelectBtn?.addEventListener('click' , this.selectFilterOption.bind(this)); // dropdown button handler in portfolio page

        
        this.optionItems?.forEach((el , index) => { // select option , portfolio page...
            el.addEventListener('click' , () => {
                this.filterSelectBtn.children[0].innerText = el.innerText.trim()
            })
        })
    }
}

const app = new DOM();
