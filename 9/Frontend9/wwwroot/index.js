"use strict"

window.NEWS_TEXT_SHORT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas ipsum id\
    libero consequat feugiat. Donec rutrum dictum orci vitae scelerisque. Quisque eget\
    ligula tempus nisi consequat vehicula. Curabitur imperdiet ex quis nisi pharetra\
    porta. Nulla et viverra felis. Suspendisse in nulla at magna auctor dignissim. Proin\
    placerat dignissim sem.";
window.NEWS_TEXT_LONG =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas ipsum id\
    libero consequat feugiat. Donec rutrum dictum orci vitae scelerisque. Quisque eget\
    ligula tempus nisi consequat vehicula. Curabitur imperdiet ex quis nisi pharetra\
    porta. Nulla et viverra felis. Suspendisse in nulla at magna auctor dignissim. Proin\
    placerat dignissim sem. Maecenas varius porta ullamcorper. Etiam quis sollicitudin\
    elit.Aenean a elit id turpis mollis elementum. Nullam sagittis consectetur semper.\
    Phasellus at urna ullamcorper, euismod nulla sit amet, suscipit lectus.Vivamus\
    blandit augue eu sem laoreet, mattis vulputate mauris lacinia. Phasellus eget semper\
    libero. Maecenas vitae quam auctor, gravida ipsum quis, sollicitudin neque.\
    Suspendisse nec mi turpis. Cras volutpat lacus in nulla ultricies dictum. Sed ante\
    magna, dignissim sed venenatis et, sollicitudin efficitur erat. Praesent ultrices,\
    lacus eu ornare feugiat, sem quam facilisis ante, ac convallis ex augue non augue.\
    Phasellus consequat, odio et egestas ultrices, est justo facilisis ipsum, ut.Nullam suscipit\
    convallis urna, in posuere ante luctus id. Sed congue dolor quis velit elementum, vel vulputate\
    massa semper. Phasellus sit amet quam vestibulum, mollis nisl vitae, consectetur ligula.\
    Integer eget nunc ante. Proin sit amet vestibulum enim. Mauris interdum malesuada urna eu\
    tempor. Suspendisse vel orci nec tortor auctor varius. Fusce sit amet leo venenatis,\
    scelerisque mi vitae, tristique dui. Curabitur ac nulla vel risus hendrerit dapibus.";
window.OPEN_POPUP_BUTTON_TEXT =
    "Open popup window";
window.AMOUNT_OF_ARTICLES =
    10;


document.addEventListener("DOMContentLoaded", function () {
    let pageElements = {
        newsContainer: document.querySelector("div.news-container"),
        popup: document.querySelector("div.popup"),
        popupBackground: document.querySelector("div.popup-background"),
        popupItem: document.querySelector("div.popup-item")
    };

    CreateNewsItems(pageElements.newsContainer);
    SetButtonsListeners(pageElements);

    window.addEventListener("load", function () {
        HandleWindowResizing(pageElements);
    });
    window.addEventListener("resize", function () {
        HandleWindowResizing(pageElements);
    });

    pageElements.popupBackground.addEventListener("click", function () {
        ClosePopup(pageElements);
    });
});


// filling the page with identical news articles
let CreateNewsItems = function (newsContainer) {
    for (let currentItem = 0; currentItem < window.AMOUNT_OF_ARTICLES; currentItem++) {
        let newsItem = document.createElement("div");
        newsItem.className = "news-item";
        CreateNewsItemContent(newsItem, currentItem);
        newsContainer.appendChild(newsItem);
    }
}

// child elements of a news article
let CreateNewsItemContent = function (newsItem, currentItem) {
    let newsTitle = document.createElement("h2");
    newsTitle.className = "news-title";
    newsTitle.innerHTML = `Article ${currentItem + 1}`;
    newsItem.appendChild(newsTitle);

    let newsTextShort = document.createElement("div");
    newsTextShort.className = "news-text-short";
    newsTextShort.innerHTML = window.NEWS_TEXT_SHORT;
    newsItem.appendChild(newsTextShort);

    let newsTextLong = document.createElement("div");
    newsTextLong.className = "news-text-long";
    newsTextLong.innerHTML = window.NEWS_TEXT_LONG;
    newsItem.appendChild(newsTextLong);

    let openPopupButton = document.createElement("div");
    openPopupButton.className = "open-popup-button";
    openPopupButton.innerHTML = window.OPEN_POPUP_BUTTON_TEXT;
    newsItem.appendChild(openPopupButton);
}

// changing gradient
let SetButtonsListeners = function (pageElements) {
    let buttons = document.querySelectorAll(
        "div.news-container > div.news-item > div.open-popup-button");

    buttons.forEach(function (element) {
        element.addEventListener("mousedown", function () {
            element.style.background = "linear-gradient(to top, #76D77E, #4A9E4C)";
        });

        element.addEventListener("mouseup", function () {
            element.style.background = "linear-gradient(to bottom, #76D77E, #4A9E4C)";
        });

        element.addEventListener("click", function () {
            OpenPopup(pageElements);
        });
    });
}

// showing an article's long text in a popup window
let OpenPopup = function (pageElements) {
    document.querySelector("body").style.overflow = "hidden";

    pageElements.popup.style.display = "block";
    setTimeout(function () {
        pageElements.popup.classList.toggle("popup-visible");
    }, 0);

    pageElements.popupItem.lastElementChild.innerHTML =
        event.target.previousElementSibling.innerHTML;

    HandleWindowResizing(pageElements);
}

// removing the popup window and shaded background
let ClosePopup = function (pageElements) {
    document.querySelector("body").style.overflow = "auto";

    pageElements.popup.classList.toggle("popup-visible");
    setTimeout(function () {
        pageElements.popup.style.display = "none";
    }, 500);
}

// control ability to scroll the popup when window size changes
let HandleWindowResizing = function (pageElements) {
    if (document.documentElement.clientHeight <
        pageElements.popupItem.clientHeight + 100)
    {
        pageElements.popup.classList.add("popup-scrollable");
        pageElements.popupBackground.classList.add("popup-background-scrollable");
        pageElements.popupBackground.style.height =
            `${pageElements.popupItem.clientHeight + 100}px`;
        pageElements.popupItem.classList.add("popup-item-scrollable");
        pageElements.popupItem.style.marginTop = "0px";
    }
    else {
        pageElements.popup.classList.remove("popup-scrollable");
        pageElements.popupBackground.classList.remove("popup-background-scrollable");
        pageElements.popupBackground.style.removeProperty("height");
        pageElements.popupItem.classList.remove("popup-item-scrollable");
        pageElements.popupItem.style.marginTop =
            `${-pageElements.popup.lastElementChild.clientHeight / 2}px`;
    }

    pageElements.newsContainer.style.minHeight = `${document.documentElement.clientHeight}px`;
}