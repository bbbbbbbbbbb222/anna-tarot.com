const translations = {
  uk: {
    // MODAL
    modalTitle: "Виберіть мову",
    modalSubtitle: "Оберіть мову для отримання кращого досвіду",
    modalUkrainian: "Українська",
    modalPolish: "Polski",
    modalNote: "Ви можете змінити мову пізніше",

    // HEADER
    headerTitle: "Досвідчений таролог.",
    headerSubtitle: "Анна",
    headerServices: "Послуги",
    headerDay: "Денно",
    headerNight: "Ночам",

    // HERO SECTION
    heroTitle: "Ласкаво просимо на шлях змін",
    heroIntro: "Я допомагаю людям знаходити відповіді, відновлювати внутрішній баланс і відкривати нові можливості у житті. Якщо ви відчуваєте, що зайшли в глухий кут, втратили напрямок або потребуєте підтримки — ви вже зробили перший крок, опинившись тут.",

    // ABOUT SECTION
    aboutTitle: "Про мене",
    aboutP1: "Мене звати Анна.",
    aboutP2: "Я практикую духовні та енергетичні практики, спрямовані на гармонізацію життя, зняття внутрішніх блоків і розкриття потенціалу людини.",
    aboutP3: "Мій шлях почався з особистого пошуку відповідей і трансформації власного життя. З часом знання та досвід стали інструментом допомоги іншим людям.",
    aboutP4: "Я працюю делікатно, без осуду та тиску. Для мене важливо не просто провести обряд, а допомогти вам відчути впевненість, ясність і внутрішню опору.",

    // SERVICES SECTION
    servicesTitle: "Послуги",
    servicesIntro: "Я працюю індивідуально з кожним запитом:",
    
    // Service cards
    service1Title: "💖Допомога в коханні💖",
    service1Text: "відновлення емоційного балансу у стосунках<br><br>зняття негативного впливу, ревнощів і внутрішніх страхів<br>допомога після розривів, зрад та складних періодів<br><br>молитовна підтримка для гармонії та взаєморозуміння<br><br>пошук причин труднощів у особистому житті",
    
    service2Title: "💵Магія багатства💵",
    service2Text: "усунення внутрішніх бар'єрів, що заважають достатку<br><br>очищення від негативних установок щодо грошей<br><br>налаштування на фінансовий розвиток і стабільність<br><br>молитви та практики для залучення можливостей<br><br>підтримка у досягненні матеріального балансу",
    
    service3Title: "🛡️Очищення та захист🛡️",
    service3Text: "очищення від накопиченого негативу та напруги<br><br>відновлення енергії після складних життєвих подій<br><br>зміцнення внутрішнього та духовного захисту<br><br>молитви за здоров'я та душевний спокій<br><br>допомога у налагодженні стосунків у родині",
    
    service4Title: "🪬Діагностика на таро🪬",
    service4Text: "глибокий аналіз ситуації та прихованих причин труднощів<br><br>визначення енергетичних блоків і їх джерел<br><br>пошук напрямків для змін і покращення життя<br><br>підказки щодо правильних рішень<br><br>оцінка перспектив і можливостей",
    
    service5Title: "🧑‍🤝‍🧑Сімейні обряди🧑‍🤝‍🧑",
    service5Text: "відновлення гармонії у сімейних стосунках<br><br>усунення образ, непорозумінь і напруги<br><br>молитви за мир і взаємопідтримку в родині<br><br>допомога у відновленні зв'язку між близькими<br><br>підтримка для створення міцних і щасливих стосунків",
    
    service6Title: "🕯️Виливання воском🕯️",
    service6Text: "очищення від страхів, тривожності та внутрішнього напруження<br><br>зняття емоційного та енергетичного перевантаження<br><br>відновлення після складних періодів і виснаження<br><br>гармонізація стану душі та тіла<br><br>покращення загального самопочуття",
    
    service7Title: "🎴Ворожіння та передбачення🎴",
    service7Text: "аналіз життєвих подій і можливих сценаріїв<br><br>визначення перспектив розвитку ситуації<br><br>прогнозування майбутніх змін<br><br>рекомендації для прийняття рішень<br><br>допомога у виборі правильного шляху",
    
    service8Title: "🥚Викатка яйцем🥚",
    service8Text: "індивідуальний підхід до кожної ситуації<br><br>очищення від негативних впливів і переживань<br><br>відновлення внутрішньої рівноваги<br><br>поради для подальших дій<br><br>підтримка у складних життєвих моментах",
    
    service9Title: "🧲Чистка свинцем🧲",
    service9Text: "діагностика загального енергетичного стану<br><br>виявлення джерел внутрішнього дискомфорту<br><br>очищення та відновлення енергетичного балансу<br><br>гармонізація внутрішнього стану<br><br>захисні практики від негативного впливу",
    
    service10Title: "🧂Сіль для очищення🧂",
    service10Text: "❗на замовлення❗<br><br>Очищувальна сіль, виготовлена індивідуально під замовлення.<br><br>зняття внутрішньої напруги, тривоги та емоційного виснаження<br><br>гармонізація енергетичного стану та відновлення балансу<br><br>покращення самопочуття та внутрішнього спокою<br><br>захист від подальшого негативного впливу",
    
    servicesDisclaimer: "*Результат залежить від особистих обставин. Також він не замінює медичне лікування, якщо його рекомендував ваш лікар.",

    // MAGIC HELP SECTION
    magicTitle: "МАГІЧНІ ОБРЯДИ<br>БУДЬ-ЯКОЇ СКЛАДНОСТІ",
    magicSubtitle: "Я працюю з різними ситуаціями — від простих життєвих труднощів до складних випадків, де потрібен глибокий енергетичний вплив.",
    magicP1: "Я не розглядаю звернення з негативним або розважальним підтекстом, на кшталт: «що на мене чекає завтра» чи подібні питання без реальної потреби. Я працюю лише з людьми, які дійсно потребують допомоги та стикаються з життєвими труднощами, а не шукають розваги.",
    magicP2: "Моя діяльність є безпечною — вона не шкодить ні вам, ні оточуючим. Я надаю підтримку у складних та заплутаних життєвих ситуаціях, де справді потрібна допомога.",
    magicRestrictionsTitle: "Я НЕ ДОПОМАГАЮ",
    magicRestriction1: "🔴 азартними іграми;",
    magicRestriction2: "💔 лотереями та «легкими виграшами»;",
    magicRestriction3: "🚫 питаннями, пов'язаними з лікуванням або медичними втручаннями;",
    magicRestriction4: "⚖️ кримінальними справами та судовими рішеннями;",
    magicRestriction5: "🔮 політичними прогнозами;",
    magicRestriction6: "⚽ спортивними прогнозами;",
    magicRestriction7: "🎯 пошуком коштовностей чи «скарбів».",
    magicAttention: "Зверніть увагу:",
    magicP3: "я не відповідаю на запити, які не мають серйозного підґрунтя або задані з цікавості чи заради розваги. Моя робота спрямована на реальну допомогу людям у складних обставинах.",
    magicWarningTitle: "‼️ДІТЬМИ НЕ ПРАЦЮЮ‼️",
    magicWarningAge: "18+",

    // WARNINGS SECTION
    warningsTitle: "Не відкладайте звернення, якщо:",
    warningsItem1: "ви опинилися у складній життєвій ситуації та не бачите виходу",
    warningsItem2: "відчуваєте, що все йде не так, як потрібно, і сил боротися майже не залишилось",
    warningsItem3: "здається, що на вас чиниться негативний вплив або тиск ззовні",
    warningsItem4: "тривалий час немає змін на краще, попри всі ваші зусилля",
    warningsItem5: "відчуваєте внутрішню тривогу, страх або незрозумілий емоційний тягар",
    warningsItem6: "не можете відпустити людину з минулого або хочете відновити стосунки",
    warningsItem7: "вже зверталися по допомогу, але результату так і не отримали",
    warningsSupportTitle: "У таких ситуаціях я не засуджую — я поруч, щоб підтримати.",
    warningsSupportText: "Я уважно вислухаю, розберуся в суті вашої ситуації, за потреби проведу обряд або молитву, допоможу з очищенням, підкажу та направлю.<br>Навіть коли здається, що вже запізно — вихід завжди є. Адже з вірою, внутрішньою силою та Божою допомогою можливо подолати будь-які труднощі.",

    // CONTACTS SECTION
    contactsTitle: "Контакти",
    contactsFormQuote: "🔮 Напишіть свій запит — і я з радістю дам відповідь або допоможу!",
    contactsInputName: "Ваше ім'я",
    contactsInputPhone: "Напишіть номер",
    contactsSelect: "Спосіб зв'язку",
    contactsSelectInstagram: "Instagram",
    contactsSelectWhatsapp: "WhatsApp",
    contactsSelectTelegram: "Telegram",
    contactsSelectCall: "Телефонний дзвінок",
    contactsTextarea: "Ваш запит",
    contactsButton: "надіслати",

    // FOOTER
    footerText: "&copy; 2026 Анна - Таролог. Всі права захищені.",
  },

  pl: {
    // MODAL
    modalTitle: "Wybierz język",
    modalSubtitle: "Wybierz język, aby uzyskać lepsze doświadczenie",
    modalUkrainian: "Українська",
    modalPolish: "Polski",
    modalNote: "Możesz zmienić język później",

    // HEADER
    headerTitle: "Doświadczony tarot.",
    headerSubtitle: "Anna",
    headerServices: "Usługi",
    headerDay: "Dzień",
    headerNight: "Noc",

    // HERO SECTION
    heroTitle: "Witaj na ścieżce zmian",
    heroIntro: "Pomagam ludziom znaleźć odpowiedzi, przywrócić wewnętrzną równowagę i odkrywać nowe możliwości w życiu. Jeśli czujesz, że zaszedłeś w ślepą uliczkę, straciłeś kierunek lub potrzebujesz wsparcia — już poczyniłeś pierwszy krok, pojawiając się tutaj.",

    // ABOUT SECTION
    aboutTitle: "O mnie",
    aboutP1: "Mam na imię Anna.",
    aboutP2: "Praktykuję praktyki duchowe i energetyczne mające na celu harmonizację życia, usuwanie wewnętrznych bloków i odkrywanie potencjału człowieka.",
    aboutP3: "Moja ścieżka rozpoczęła się od osobistych poszukiwań odpowiedzi i transformacji własnego życia. Z czasem wiedza i doświadczenie stały się narzędziem pomagającym innym.",
    aboutP4: "Pracuję delikatnie, bez osądu i presji. Dla mnie ważne jest nie tylko przeprowadzenie rytuału, ale pomoc w poczuciu pewności siebie, jasności i wewnętrznego wsparcia.",

    // SERVICES SECTION
    servicesTitle: "Usługi",
    servicesIntro: "Pracuję indywidualnie z każdym zapytaniem:",
    
    // Service cards
    service1Title: "💖Pomoc w miłości💖",
    service1Text: "przywrócenie równowagi emocjonalnej w związkach<br><br>usunięcie negatywnego wpływu, zazdrości i wewnętrznych strachu<br>pomoc po zerwaniu, zdradach i trudnych okresach<br><br>wsparcie modlitwy dla harmonii i wzajemnego zrozumienia<br><br>szukanie przyczyn trudności w życiu osobistym",
    
    service2Title: "💵Magia bogactwa💵",
    service2Text: "usunięcie wewnętrznych barier uniemożliwiających dostatek<br><br>oczyszczenie od negatywnych przekonań dotyczących pieniędzy<br><br>nastawienie na rozwój finansowy i stabilność<br><br>modlitwy i praktyki przyciągania możliwości<br><br>wsparcie w osiągnięciu równowagi materialnej",
    
    service3Title: "🛡️Oczyszczenie i ochrona🛡️",
    service3Text: "oczyszczenie od nagromadzonego negatywu i stresu<br><br>przywrócenie energii po trudnych wydarzeniach życiowych<br><br>wzmocnienie wewnętrznej i duchowej ochrony<br><br>modlitwy za zdrowie i spokój ducha<br><br>pomoc w rozwiązaniu konfliktów rodzinnych",
    
    service4Title: "🪬Diagnostyka tarot🪬",
    service4Text: "głębokie zbadanie sytuacji i ukrytych przyczyn trudności<br><br>określenie bloków energetycznych i ich źródeł<br><br>szukanie kierunków zmian i poprawy życia<br><br>porady dotyczące właściwych decyzji<br><br>ocena perspektyw i możliwości",
    
    service5Title: "🧑‍🤝‍🧑Rytuały rodzinne🧑‍🤝‍🧑",
    service5Text: "przywrócenie harmonii w relacjach rodzinnych<br><br>usunięcie urazy, nieporozumień i napięć<br><br>modlitwy o pokój i wzajemne wsparcie w rodzinie<br><br>pomoc w przywróceniu więzi między bliskimi<br><br>wsparcie w budowaniu mocnych i szczęśliwych relacji",
    
    service6Title: "🕯️Woskowanie🕯️",
    service6Text: "oczyszczenie ze strachu, niepokoju i wewnętrznego napięcia<br><br>usunięcie emocjonalnego i energetycznego przeciążenia<br><br>przywrócenie po trudnych okresach i wyczerpaniu<br><br>harmonizacja stanu duszy i ciała<br><br>poprawa ogólnego samopoczucia",
    
    service7Title: "🎴Wróżbienie i przepowiadanie🎴",
    service7Text: "analiza zdarzeń życiowych i możliwych scenariuszy<br><br>określenie perspektyw rozwoju sytuacji<br><br>prognozowanie przyszłych zmian<br><br>rekomendacje do podejmowania decyzji<br><br>pomoc w wyborze właściwej ścieżki",
    
    service8Title: "🥚Toczenie jajkiem🥚",
    service8Text: "indywidualny podход do każdej sytuacji<br><br>oczyszczenie od negatywnych wpływów i przeżyć<br><br>przywrócenie wewnętrznej równowagi<br><br>porady na następne działania<br><br>wsparcie w trudnych chwilach życia",
    
    service9Title: "🧲Czyszczenie ołowiem🧲",
    service9Text: "diagnostyka ogólnego stanu energetycznego<br><br>odkrycie źródeł wewnętrznego dyskomfortu<br><br>oczyszczenie i przywrócenie równowagi energetycznej<br><br>harmonizacja stanu wewnętrznego<br><br>praktyki ochronne przed negatywnym wpływem",
    
    service10Title: "🧂Sól do oczyszczenia🧂",
    service10Text: "❗na zamówienie❗<br><br>Sól oczyszczająca wytwarzana indywidualnie na zamówienie.<br><br>usunięcie wewnętrznego napięcia, niepokoju i emocjonalnego wyczerpania<br><br>harmonizacja stanu energetycznego i przywrócenie równowagi<br><br>poprawa samopoczucia i wewnętrznego spokoju<br><br>ochrona przed dalszym negatywnym wpływem",
    
    servicesDisclaimer: "*Wynik zależy od konkretnych okoliczności. Również nie zastępuje leczenia medycznego, jeśli został rekomendowany przez lekarza.",

    // MAGIC HELP SECTION
    magicTitle: "RYTUAŁY MAGICZNE<br>DOWOLNEJ ZŁOŻONOŚCI",
    magicSubtitle: "Pracuję z różnymi sytuacjami — od prostych trudności życiowych do złożonych przypadków, w których potrzebny jest głęboki wpływ energetyczny.",
    magicP1: "Nie rozpatruję zapytań z negatywnym lub rozrywkowym podtekstem, takich jak: 'co czeka mnie jutro' lub podobne pytania bez rzeczywistej potrzeby. Pracuję tylko z ludźmi, którzy naprawdę potrzebują pomocy i stają w obliczu trudności życiowych, a nie szukają rozrywki.",
    magicP2: "Moja działalność jest bezpieczna — nie powoduje szkód ani tobie, ani otoczeniu. Zapewniamem wsparcie w złożonych i zawiłych sytuacjach życiowych, gdzie rzeczywiście potrzebna jest pomoc.",
    magicRestrictionsTitle: "NIE POMAGAM",
    magicRestriction1: "🔴 grach hazardowych;",
    magicRestriction2: "💔 loteriach i 'łatwych wygranych';",
    magicRestriction3: "🚫 pytaniach związanych z leczeniem lub interwencjami medycznymi;",
    magicRestriction4: "⚖️ sprawach karnych i wyroków sądowych;",
    magicRestriction5: "🔮 prognozach politycznych;",
    magicRestriction6: "⚽ prognozach sportowych;",
    magicRestriction7: "🎯 poszukiwaniu skarbów lub 'skarków'.",
    magicAttention: "Zwróć uwagę:",
    magicP3: "nie odpowiadam na zapytania, które nie mają poważnych podstaw lub zostały zadane z ciekawości lub dla zabawy. Moja praca ma na celu rzeczywistą pomoc ludziom w trudnych okolicznościach.",
    magicWarningTitle: "‼️NIE PRACUJĘ Z DZIEĆMI‼️",
    magicWarningAge: "18+",

    // WARNINGS SECTION
    warningsTitle: "Nie odkładaj zgłoszenia, jeśli:",
    warningsItem1: "znalazłeś się w trudnej sytuacji życiowej i nie widzisz wyjścia",
    warningsItem2: "czujesz, że wszystko idzie nie tak, jak powinno, i nie masz już sił walczyć",
    warningsItem3: "wydaje ci się, że doświadczasz negatywnego wpływu lub presji z zewnątrz",
    warningsItem4: "przez długi czas nie ma poprawy, pomimo wszystkich twoich wysiłków",
    warningsItem5: "czujesz wewnętrzny niepokój, strach lub niezrozumiały ciężar emocjonalny",
    warningsItem6: "nie potrafisz puścić osoby z przeszłości lub chcesz przywrócić relacje",
    warningsItem7: "już szukałeś pomocy, ale nie otrzymałeś rezultatów",
    warningsSupportTitle: "W takich sytuacjach nie osądzam — jestem tutaj, aby cię wesprzeć.",
    warningsSupportText: "Słuchać cię uważnie, zrozumiem esencję twojej sytuacji, w razie potrzeby przeprowadzę rytuał lub modlitwę, pomogę w oczyszczeniu, poradzę i pokieruję cię.<br>Nawet gdy wydaje się, że już za późno — zawsze jest wyjście. Ponieważ z wiarą, wewnętrzną siłą i pomocą Bożą możemy przezwyciężyć każdy trudność.",

    // CONTACTS SECTION
    contactsTitle: "Kontakty",
    contactsFormQuote: "🔮 Napisz swoją prośbę — a ja chętnie odpowiem lub pomogę!",
    contactsInputName: "Twoje imię",
    contactsInputPhone: "Wpisz numer",
    contactsSelect: "Sposób komunikacji",
    contactsSelectInstagram: "Instagram",
    contactsSelectWhatsapp: "WhatsApp",
    contactsSelectTelegram: "Telegram",
    contactsSelectCall: "Rozmowa telefoniczna",
    contactsTextarea: "Twoje zapytanie",
    contactsButton: "wysłać",

    // FOOTER
    footerText: "&copy; 2026 Anna - Tarolożka. Wszystkie prawa zastrzeżone.",
  }
};

// ============ SAFE STORAGE FUNCTIONS ============
function safeGetItem(key, defaultValue) {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (e) {
    console.warn('⚠️ localStorage не доступен:', e);
    return defaultValue;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('⚠️ localStorage не доступен:', e);
  }
}

// ============ TRANSLATION FUNCTION ============
function t(key) {
  const lang = getCurrentLanguage();
  
  if (!translations[lang]) {
    console.warn(`⚠️ Язык "${lang}" не найден, используется украинский`);
    return translations.uk?.[key] || key;
  }
  
  return translations[lang]?.[key] || key;
}

// ============ LANGUAGE MANAGEMENT ============
function setLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`⚠️ Язык "${lang}" не поддерживается, используется украинский`);
    lang = 'uk';
  }
  
  safeSetItem('lang', lang);
  safeSetItem('languageSelected', 'true');
  document.documentElement.lang = lang;
}

function selectLanguage(lang) {
  setLanguage(lang);
  const modal = document.getElementById('languageModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function getCurrentLanguage() {
  return safeGetItem('lang', 'uk');
}

function checkLanguageSelection() {
  const isLanguageSelected = safeGetItem('languageSelected', 'false') === 'true';
  const modal = document.getElementById('languageModal');
  
  if (!isLanguageSelected && modal) {
    modal.style.display = 'flex';
  } else if (modal) {
    modal.style.display = 'none';
  }
}