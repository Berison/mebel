// Header
const countriesButton = document.querySelectorAll('.header-inner__countries, .header-inner__lang'),
  menuMob = document.querySelector('.header-inner__menu button'),
  menuList = document.querySelector('.header-inner');

countriesButton.forEach(button => {
  button.addEventListener('click', e => {
    button.classList.toggle('active')
    if (e.target.closest('p')) {
      button.querySelector('span.title').innerHTML = e.target.closest('p').textContent;
    }
  })
})

menuMob.addEventListener('click', () => {
  menuList.classList.toggle('active')
});


// Remove all 
document.addEventListener('click', e => {
  const target = e.target,
    classes = ['.header-inner__countries', '.header-inner__lang'];

  !target.closest(classes) ? document.querySelectorAll(classes).forEach(button => button.classList.remove('active')) : null;
})

// Slider
const swiper = new Swiper('.swiper-home-panner', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiperBestseller = new Swiper('.swiper-home-bestseller', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-home-bestseller .swiper-button-next',
    prevEl: '.swiper-home-bestseller .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperProductBestseller = new Swiper('.swiper-product-bestseller', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-product-bestseller .swiper-button-next',
    prevEl: '.swiper-product-bestseller .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperProductInteresting = new Swiper('.swiper-product-interesting', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-product-interesting .swiper-button-next',
    prevEl: '.swiper-product-interesting .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});


const swiperProductReview = new Swiper('.swiper-product-review', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-product-review .swiper-button-next',
    prevEl: '.swiper-product-review .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperAction = new Swiper('.swiper-home-action', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-home-action .swiper-button-next',
    prevEl: '.swiper-home-action .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperViewed = new Swiper('.swiper-home-viewed', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-home-viewed .swiper-button-next',
    prevEl: '.swiper-home-viewed .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperNews = new Swiper('.swiper-home-news', {
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-home-news .swiper-button-next',
    prevEl: '.swiper-home-news .swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }
});

const swiperProductImages = new Swiper(".product-images", {
  slidesPerView: 3,
  spaceBetween: 30
});

// Check image in the product page
// Get the product page element
const productPage = document.querySelector('.product-page');

// Check if the product page exists
if (productPage) {
  // Get the main product image
  const mainImage = productPage.querySelector('.product-page-offer-left-image > img');

  // Get all the selectable product images
  const selectImages = productPage.querySelectorAll('.product-images .swiper-slide');

  // Add event handlers for selecting a product image
  selectImages.forEach(select => {
    select.onclick = () => {
      // Remove active class from all selectable images
      selectImages.forEach(e => e.classList.remove('swiper-slide-active-click'));

      // Add active class to the clicked selectable image
      select.classList.add('swiper-slide-active-click');

      // Change the source of the main image to the selected image's source
      mainImage.src = select.querySelector('img').src;
    };
  });
}

// Tabs in the product page (features)
const tabsProductPage = document.querySelector('.tabs');

if (tabsProductPage) {
  const tabsButtons = Array.from(tabsProductPage.querySelectorAll('.tabs-head-item'));
  const tabsLists = Array.from(tabsProductPage.querySelectorAll('.tabs-inner-list'));

  tabsProductPage.addEventListener('click', (event) => {
    const clickedTab = event.target.closest('.tabs-head-item');
    if (!clickedTab) return;

    const tabName = clickedTab.dataset.tab;

    tabsButtons.forEach((button) => button.classList.remove('active'));
    tabsLists.forEach((list) => list.classList.remove('active'));

    clickedTab.classList.add('active');
    tabsLists.find((list) => list.dataset.tab === tabName).classList.add('active');
  });
}

// Set current year
const yearSpan = document.getElementById('year'),
  currentYear = new Date();

yearSpan.innerHTML = currentYear.getFullYear();


//Catalog-page
const catalogPage = document.querySelector('.catalog');

if (catalogPage) {
  const catalogSortBtn = document.querySelector('.catalog__sort-dropdown')
  const catalogMainOption = document.querySelector('.catalog__sort-option')
  const catalogSortList = document.querySelector('.catalog__sort-list')
  const formattedNums = document.querySelectorAll('.catalog .formatted')
  const cards = document.querySelectorAll('.catalog__card-grid')
  const viewTypeBtns = document.querySelectorAll('.catalog__btn')

  //Dropdown "Сортувати"
  catalogSortBtn.addEventListener('click', (e) => {
    catalogSortBtn.classList.toggle('active')
    if (e.target.closest('.catalog__sort-item')) {
      catalogMainOption.innerHTML = e.target.innerHTML
      catalogSortList.querySelectorAll('.catalog__sort-item').forEach(item => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
    }
  })

  //Formating price from 10758 to 10 758
  formattedNums.forEach(num => {
    num.textContent = parseInt(num.textContent).toLocaleString('ru-RU');
  })

  //Для того, чтобы при наведении на карточку выезжающий список был всегда поверх соседних карточек, но на уровень ниже своей родительской карточки добавляется отдельный класс, чтобы родительской карточке дать наивысший z-index
  cards.forEach(card => {
    card.addEventListener('mouseover', (e) => {
      if (e.target.closest('.catalog__card-grid') === card) {
        cards.forEach(item => item.classList.remove('active'))
        card.classList.add('active')
      }
    })
  })

  //Switch grid/list view
  viewTypeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.target
      const gridBtn = target.closest('.catalog__viewtype').querySelector('.catalog__btn--grid')
      const listBtn = target.closest('.catalog__viewtype').querySelector('.catalog__btn--list')
      const cards = document.querySelectorAll('.catalog__card-wrapper')

      if (target.closest('.catalog__btn--grid')) {
        gridBtn.classList.add('active')
        listBtn.classList.remove('active')
        cards.forEach(card => {
          card.classList.remove('list')
        })
      } else if (target.closest('.catalog__btn--list')) {
        listBtn.classList.add('active')
        gridBtn.classList.remove('active')
        cards.forEach(card => {
          card.classList.add('list')
        })
      }
    })
  })


}