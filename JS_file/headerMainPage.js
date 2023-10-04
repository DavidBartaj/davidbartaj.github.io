function header(contacts, advantages, location, tv, documents) {
    if (document.documentElement.clientWidth < 420) {
        document.write(
            `<header class="headerMainTab">
    <a href="index.html"><img class="phoneHeaderLogo" src="img/logo_hd.jpg" alt=""></a>
    <div class="phoneHeaderNavBarFullScreen">
        <div class="phoneHeaderNavBarWrap">
            <img class="phoneMenuButt" src="icons/menu.png" alt="">
          <div class="callButt">
                <img src="icons/smartphone.png" alt="">
               <a href="tel:+380674250254">Зателефонувати</a>
           </div>
        </div>
    </div>
    <div class="navListPhoneHeader">
        <nav>
            <ul class="navWrap">
                <li class="nawLi"><a href="` + contacts + `">Контакти</a></li>
                <li class="nawLi"><a href="` + advantages + `">Наші переваги</a></li>
                <li class="nawLi"><a href="` + location + `">Тарифи</a></li>
                <li class="nawLi"><a href="` + tv + `">Пакети телеканалів</a></li>
                <li><a href="https://stat.microteam.com.ua/stat/index.cgi?language=ukraine">особистий кабінет</a></li>
                <li class="nawLi"><a href="` + documents + `">Документи</a></li>
            </ul>
        </nav>
        <div class="socialLinkHeaderPhone">
            <a target="_blank" href="https://www.instagram.com/_microteam_/"><img src="icons/instagram.png" alt=""></a>
            <a target="_blank" href="https://www.facebook.com/groups/microteamrakhiv"><img src="icons/facebook.png" alt=""></a>
            <a target="_blank"
               href="https://invite.viber.com/?g2=AQBZg8s5gqWa0Erar6qF%2B3hixasZzpnpPx2O5XSKe4LSLex1gpn9eoFusCduAUBJ">
                <img src="icons/viber.png" alt=""></a>
        </div>
    </div>
    <div id="top">
        <img src="icons/scroll.png" alt="">
    </div>
</header>`
        )
    } else {
        document.write(
            `<header id="header">
    <div class="headerInfoFullScreen">
        <div class="headerInfoContentWrapper">
            <a href="index.html"><img src="img/logo.png" alt=""></a>
            <div class="headerInfoWrap">

                <div class="socialLinkHeader">
                    <a target="_blank" href="https://www.instagram.com/_microteam_/"><img src="icons/instagram.png" alt=""></a>
                    <a target="_blank" href="https://www.facebook.com/groups/microteamrakhiv"><img src="icons/facebook.png" alt=""></a>
                    <a target="_blank" href="https://invite.viber.com/?g2=AQBZg8s5gqWa0Erar6qF%2B3hixasZzpnpPx2O5XSKe4LSLex1gpn9eoFusCduAUBJ">
                        <img src="icons/viber.png" alt=""></a>
                </div>

                <div class="workSchedule">
                   <img src="icons/calendar.png" alt="">
                    <p>пн-сб 09:00-18:00, нд-вихідний</p>
                </div>

                <div class="telNum">
                    <a href="tel:+380679884216"><img src="icons/telephone-symbol-button.png" alt="">+380679884216</a>
                    <a href="tel:+380674250254"><img src="icons/telephone-symbol-button.png" alt="">+380674250254</a>
                </div>

            </div>
        </div>
    </div>
    <nav>
        <ul class="navWrap">
            <li class="nawLi"><a href="` + contacts + `">Контакти</a></li>
            <li class="nawLi"><a href="` + advantages + `">Наші переваги</a></li>
            <li class="nawLi"><a href="` + location + `">Тарифи</a></li>
            <li class="nawLi"><a href="` + tv + `">Пакети телеканалів</a></li>
            <li><a href="https://stat.microteam.com.ua/stat/index.cgi?language=ukraine">особистий кабінет</a></li>
            <li class="nawLi"><a href="` + documents + `">Документи</a></li>
        </ul>
    </nav>

  
                    <div id="top">
                    <img src="icons/scroll.png" alt="">
                    </div>
                    </header>`
        )


    }
}

header(`#contacts`, `#advantages`, `#location`, `Terminal_EasyPay_HTML/index_tv.html`, `#documents`);






