console.log("script initialized");


const translations = {

    en: {
        categories: "Categories",
        shop_by_category: "Shop By Category",
        colors: "Colors",
        color_label: "Color:",
        real_life: "See It in Motion",
        video_section_title: "In Your Hands",
        story_promo_badge: "Instagram Story Promotion",
        story_promo_title: "Share Your SUNLEON",
        story_promo_text_before:
            "Take a photo or video with your SUNLEON bag, share it on your Instagram Story, tag us, and receive",
        story_promo_discount:
            "20% OFF",
        story_promo_text_after:
            "on any bag with your next order.",
        name_asc: "Name (A-Z)",
        name_desc: "Name (Z-A)",
        price_asc: "Price (Low to High)",
        price_desc: "Price (High to Low)",
        made_in_georgia: "Made in Georgia",
        stock_label: "Stock:",
        buy_instagram: "Buy on Instagram",
        description: "Product Description",
        care: "Care Instructions",
        shipping: "Shipping Information",
        returns: "Returns & Exchanges",
        payments: "Payment Methods",
        bestsellers: "Bestsellers",
        follow_us: "Follow Us",
        faq_information: "FAQ & Information",
        related_products: "Similar Products",
        faq_title: "FAQ & Information",

        faq_subtitle:
            "Everything you need to know about ordering, delivery, payments and product care.",

        faq_order_title:
            "How can I place an order?",

        faq_order_text:
            "Orders can be placed through Instagram or Facebook chat. Send us the desired model, color, and your contact information, or simply share the product link. Our team will contact you to confirm the order.",

        faq_material_title:
            "What materials are used?",

        faq_material_text:
            "SUNLEON bags are made from delicate eco-leather, selected for its durability and elegant appearance.",

        faq_origin_title:
            "Where are the products made?",

        faq_origin_text:
            "The products are manufactured to order in a factory located in Turkey. Therefore, all bags are of Turkish production.",

        faq_warranty_title:
            "Do the bags come with a warranty?",

        faq_warranty_text:
            "Our bags do not require a warranty. By following the recommended care instructions, they will maintain their quality and appearance for a long time.",

        faq_stock_title:
            "What if a product is out of stock?",

        faq_stock_text:
            "Each model arrives in Georgia in limited quantities. If your desired bag is currently unavailable, you may contact us and place a pre-order.",

        faq_colors_title:
            "Colors & Product Photos",

        faq_colors_text:
            "We strive to display product colors as accurately as possible. However, actual colors may vary slightly depending on your screen settings.",

        faq_delivery_title:
            "Delivery Information",

        faq_payment_title:
            "Payment Methods",

        faq_returns_title:
            "Returns & Exchanges",

        faq_care_title:
            "Product Care",

        faq_sizes_title:
            "Bag Dimensions",

        faq_sizes_text:
            "Each product page includes detailed bag dimensions. We recommend comparing them with a bag you already own to better understand its capacity and proportions.",

        faq_about_title:
            "About SUNLEON",

        faq_about_text:
            "SUNLEON offers modern, practical and elegant bags designed for everyday use. Our goal is to provide quality products, diverse designs and a comfortable shopping experience.",

        faq_why_title:
            "Why SUNLEON?",
        why_1: "Modern Designs",
        why_2: "Wide Variety of Colors",
        why_3: "Limited Collections",
        why_4: "Quality Control Before Shipping",
        why_5: "Nationwide Delivery",

        care_text: `
        <p>The bag is made from eco-leather. To preserve its appearance and durability, please follow these care instructions:</p>
        <p>• Do not use chemical solutions or cleaning products containing harsh chemicals;</p>
        <p>• Do not wash the bag in a washing machine;</p>
        <p>• Clean only with a dry or slightly damp soft cloth;</p>
        <p>• The bag has a recommended load capacity — please do not exceed the maximum weight specified in the product description, as this may affect its shape and structure;</p>
        <p>• After use, it is recommended to store the bag in its protective Dust Bag.</p>
        <p>With proper care and use, your bag will maintain its original appearance for many seasons and remain a valuable part of your wardrobe.</p>`,
        shipping_text: `
            <p>We provide delivery throughout Georgia.</p>
            <p><strong>Tbilisi</strong></p>
            <p>• Orders placed before 00:00 are typically delivered on the next business day;</p>
            <p>• Exceptions may apply during public holidays, officially declared non-working days, or other unforeseen circumstances. In such cases, customers will be informed in advance.</p>
            <p><strong>Regions</strong></p>
            <p>• Delivery times to regions depend on the specific location;</p>
            <p>• For accurate delivery information, please contact us via direct message and provide your desired address;</p>
            <p>• Our team will provide detailed information regarding delivery times and conditions.</p>
            <p>We are committed to ensuring that your order is delivered safely and as quickly as possible.</p>`,
        payment_text: `
            <p>We offer flexible and convenient payment methods.</p>
            <p>Payment can be made either by bank transfer or directly to the courier upon delivery.</p>
            <p>If you choose to pay the courier, the order amount is paid upon receipt of the package, while the courier service fee must be transferred to our bank account in advance.</p>
            <p>For additional information, please contact us through our social media channels.</p>`,
        returns_text: `
            <p>Your satisfaction is our priority.</p>
            <p>A return request may be submitted no later than the end of the second day following delivery. After this period, the product may only be exchanged for another available model, subject to stock availability.</p>
            <p>Returns and exchanges do not apply to:</p>
            <ul>
                <li>Products that have been used;</li>
                <li>Products damaged by the customer;</li>
                <li>Products damaged as a result of failure to follow the care instructions.</li>
            </ul>
            <p>In the event of a return or exchange, the cost of courier services is the responsibility of the customer.</p>
            <p>Refunds will be processed after the product has been received and its condition has been inspected.</p>
            <p>We carefully inspect every product before shipment. All models undergo quality control and are dispatched only after a thorough inspection.</p>          
            <p>The company is not responsible for any damage resulting from improper use of the product or failure to follow the provided care instructions.</p>`

    },

    ka: {
        categories: "კატეგორიები",
        shop_by_category: "კატეგორიების მიხედვით",
        sort: "დალაგება",
        colors: "ფერი",
        color_label: "ფერი:",
        stock_label: "მარაგი:",
        video_section_title: "შენს ხელში",
        real_life: "რეალურ ცხოვრებაში",
        story_promo_badge: "Instagram Story აქცია",
        story_promo_title: "გაუზიარე ემოცია მეგობრებს",
        story_promo_text_before:
            "გადაიღე ფოტო ან ვიდეო SUNLEON-ის ჩანთით, გამოაქვეყნე Instagram Story-ზე, მოგვნიშნე და შემდეგ შეკვეთაზე მიიღე",
        story_promo_discount:
            "20% ფასდაკლება",
        story_promo_text_after:
            "ნებისმიერ ჩანთაზე.",
        name_asc: "სახელი (ა-ჰ)",
        name_desc: "სახელი (ჰ-ა)",
        price_asc: "ფასი (დაბლიდან მაღლისკენ)",
        price_desc: "ფასი (მაღლიდან დაბლისკენ)",
        made_in_georgia: "დამზადებულია საქართველოში",
        buy_instagram: "შეძენა ინსტაგრამზე",
        description: "პროდუქტის აღწერა",
        care: "მოვლის წესები",
        shipping: "მიწოდების ინფორმაცია",
        returns: "დაბრუნება და გადაცვლა",
        payments: "გადახდის ვარიანტები",
        bestsellers: "ბესთსელერები",
        follow_us: "გამოგვყევით",
        faq_information: "კითხვები და ინფორმაცია",
        related_products: "მსგავსი პროდუქტები",
        faq_title: "FAQ & Information",

        faq_subtitle:

            "ყველაფერი რაც უნდა იცოდეთ შეკვეთის, მიწოდების, გადახდისა და პროდუქტის მოვლის შესახებ.",

        faq_order_title:

            "როგორ შევუკვეთო?",

        faq_order_text:

            "შეკვეთის გაფორმება შეგიძლიათ Instagram-ისა და Facebook-ის ჩათების მეშვეობით. მოგვწერეთ სასურველი მოდელი, ფერი და თქვენი საკონტაქტო ინფორმაცია ან გაგვიზიარეთ პროდუქტის ლინკი. ჩვენი გუნდი დაგიკავშირდებათ შეკვეთის დასადასტურებლად.",

        faq_material_title:

            "რა მასალისგანაა დამზადებული?",

        faq_material_text:

            "SUNLEON-ის ჩანთები დამზადებულია დელიკატური ეკო-ტყავისგან, რომელიც გამოირჩევა გამძლეობითა და დახვეწილი ვიზუალით.",

        faq_origin_title:

            "სად იწარმოება პროდუქტი?",

        faq_origin_text:

            "პროდუქტი მზადდება შეკვეთით თურქეთის საწარმოში. შესაბამისად, ჩანთები თურქული წარმოებისაა.",

        faq_warranty_title:

            "აქვს თუ არა ჩანთებს გარანტია?",

        faq_warranty_text:

            "ჩვენი ჩანთები არ საჭიროებს გარანტიას. მოვლის რეკომენდაციების სრულად დაცვის შემთხვევაში ისინი დიდხანს შეინარჩუნებენ ხარისხსა და პირვანდელ იერსახეს.",

        faq_stock_title:

            "თუ პროდუქტი მარაგში არ არის?",

        faq_stock_text:

            "თითოეული მოდელი საქართველოში ჩამოდის შეზღუდული რაოდენობით. თუ სასურველი ჩანთა ამჟამად მარაგში არ არის, შეგიძლიათ დაგვიკავშირდეთ და წინასწარ გააფორმოთ შეკვეთა.",

        faq_colors_title:

            "ფერები და ფოტოები",

        faq_colors_text:

            "ვცდილობთ პროდუქტის ფერები მაქსიმალურად ზუსტად წარმოვაჩინოთ. სხვადასხვა ეკრანის პარამეტრების გამო რეალური ფერი შესაძლოა მცირედით განსხვავდებოდეს ფოტოზე ნაჩვენებისგან.",

        faq_delivery_title:

            "მიწოდების ინფორმაცია",

        faq_payment_title:

            "გადახდის მეთოდები",

        faq_returns_title:

            "დაბრუნება და გადაცვლა",

        faq_care_title:

            "პროდუქტის მოვლა",

        faq_sizes_title:

            "ჩანთის ზომები",

        faq_sizes_text:

            "თითოეული პროდუქტის გვერდზე მითითებულია ჩანთის ზომები. გირჩევთ შეადაროთ აღნიშნული მონაცემები თქვენს არსებულ ჩანთას, რათა უკეთ შეაფასოთ მისი მოცულობა და პრაქტიკულობა.",

        faq_about_title:

            "SUNLEON-ის შესახებ",

        faq_about_text:

            "SUNLEON გთავაზობთ თანამედროვე, პრაქტიკულ და დახვეწილ ჩანთებს ყოველდღიური გამოყენებისთვის. ჩვენი მიზანია მომხმარებელს შევთავაზოთ ხარისხიანი პროდუქცია, მრავალფეროვანი დიზაინი და კომფორტული მომსახურება.",

        faq_why_title:

            "რატომ SUNLEON?",

        why_1: "თანამედროვე დიზაინი",
        why_2: "მრავალფეროვანი ფერები",
        why_3: "შეზღუდული რაოდენობის კოლექციები",
        why_4: "ხარისხის კონტროლი გაგზავნამდე",
        why_5: "მიწოდება მთელი საქართველოს მასშტაბით",
        care_text: `
            <p>ჩანთა დამზადებულია ეკო ტყავისგან, ამიტომ მისი სილამაზისა და გამძლეობის შესანარჩუნებლად რეკომენდებულია შემდეგი წესების დაცვა:</p>
            <p>• არ გამოიყენოთ ქიმიური ხსნარები ან ქიმიური ნივთიერებების შემცველი საწმენდი საშუალებები;</p>
            <p>• დაუშვებელია სარეცხ მანქანაში გარეცხვა;</p>
            <p>• გასაწმენდად გამოიყენეთ მხოლოდ მშრალი ან ოდნავ ნესტიანი, რბილი ქსოვილი;</p>
            <p>• ჩანთას გააჩნია რეკომენდებული დატვირთვის რესურსი — გთხოვთ, არ გადააჭარბოთ პროდუქტის აღწერაში მითითებულ მაქსიმალურ წონას, რათა შეინარჩუნოს ფორმა და სტრუქტურა;</p>
            <p>• გამოყენების შემდეგ რეკომენდებულია ჩანთის შენახვა სპეციალურ მტვრის ჩანთაში (Dust Bag).</p>
            <p>სწორი მოვლისა და გამოყენების შემთხვევაში, თქვენი ჩანთა მრავალი სეზონის განმავლობაში შეინარჩუნებს თავდაპირველ იერსახეს და ღირსეულ ადგილს დაიკავებს თქვენს გარდერობში.</p>
            `,
        shipping_text:
            `   <p>ჩვენ ვახორციელებთ მიწოდებას მთელი საქართველოს მასშტაბით.</p>
            <p><strong>თბილისი</strong></p>
            <p>• 00:00 საათამდე გაფორმებული შეკვეთების მიწოდება, როგორც წესი, ხდება მომდევნო სამუშაო დღეს;</p>
            <p>• გამონაკლისს წარმოადგენს სადღესასწაულო დღეები, ოფიციალურად გამოცხადებული უქმეები და სხვა გაუთვალისწინებელი გარემოებები, რის შესახებაც მომხმარებელი წინასწარ იქნება ინფორმირებული.</p>
            <p><strong>რეგიონები</strong></p>
            <p>• რეგიონებში მიწოდების ვადა დამოკიდებულია კონკრეტულ ლოკაციაზე;</p>
            <p>• ზუსტი ინფორმაციის მისაღებად გთხოვთ, დაგვიკავშირდეთ პირად შეტყობინებაში და მოგვწეროთ სასურველი მისამართი;</p>
            <p>• ჩვენი გუნდი მოგაწვდით დეტალურ ინფორმაციას მიწოდების ვადებისა და პირობების შესახებ.</p>
            <p>ჩვენთვის მნიშვნელოვანია, რომ თქვენი შეკვეთა უსაფრთხოდ და მაქსიმალურად სწრაფად მოგეწოდოთ.</p>`,

        payment_text: `
            <p>ჩვენ გთავაზობთ გადახდის მოქნილ და კომფორტულ მეთოდებს.</p>
            <p>თანხის გადახდა შესაძლებელია როგორც საბანკო ანგარიშზე ჩარიცხვით, ასევე კურიერთან ადგილზე გადახდით.</p>
            <p>კურიერთან გადახდის არჩევის შემთხვევაში, შეკვეთის ღირებულებას იხდით მიღებისას, ხოლო საკურიერო მომსახურების საფასური წინასწარ ირიცხება საბანკო ანგარიშზე.</p>
            <p>დამატებითი ინფორმაციისთვის დაგვიკავშირდით სოციალური ქსელების საშუალებით.</p>
            `,
        returns_text: `
            <p>თქვენი კმაყოფილება ჩვენთვის პრიორიტეტულია.</p>
            <p>პროდუქტის დაბრუნების მოთხოვნის დაფიქსირება შესაძლებელია მიღებიდან მეორე დღის ბოლომდე. აღნიშნული ვადის გასვლის შემდეგ შესაძლებელია მხოლოდ პროდუქტის გადაცვლა სხვა სასურველ მოდელში, შესაბამისი მარაგის არსებობის შემთხვევაში.</p>
            <p>დაბრუნება ან გადაცვლა არ ვრცელდება:</p>
            <ul>
                <li>გამოყენებულ პროდუქტზე;</li>
                <li>მომხმარებლის მიერ დაზიანებულ პროდუქტზე;</li>
                <li>პროდუქციაზე, რომლის დაზიანებაც გამოწვეულია მოვლის წესების დარღვევით.</li>
            </ul>
            <p>დაბრუნების ან გადაცვლის შემთხვევაში საკურიერო მომსახურების საფასურის უზრუნველყოფა ეკისრება მომხმარებელს.</p>
            <p>დaბრუნების შემთხვევაში თანხის ანაზღაურება განხორციელდება პროდუქტის მიღებისა და მისი მდგომარეობის შემოწმების შემდეგ.</p>
            <p>ჩვენ ვუზრუნველყოფთ თითოეული პროდუქტის სრულ შემოწმებას გაგზავნამდე — ყველა მოდელი იგზავნება ხარისხის კონტროლის გავლით და სათანადოდ შემოწმებულ მდგომარეობაში.</p>
            <p>კომპანია პასუხისმგებლობას არ იღებს იმ დაზიანებებზე, რომლებიც გამოწვეულია პროდუქტის არასწორი გამოყენებით ან მოვლის ინსტრუქციის უგულებელყოფით.</p>`
    }

};

const instagramBtn = document.createElement("a");

instagramBtn.href = "https://www.instagram.com/sunleon_store/";
instagramBtn.target = "_blank";
instagramBtn.rel = "noopener noreferrer";
instagramBtn.className = "instagram-float-btn";

instagramBtn.innerHTML = `
<svg viewBox="0 0 24 24" fill="none">
    <path d="M17 3H7C4.79 3 4 3.79 3 7V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V7C21 4.79 19.21 3 17 3Z"
        stroke="currentColor"
        stroke-width="2"/>
    <circle cx="12" cy="12" r="4"
        stroke="currentColor"
        stroke-width="2"/>
    <circle cx="17.5" cy="6.5" r="1.2"
        fill="currentColor"/>
</svg>
`;

document.body.appendChild(instagramBtn);

instagramBtn.draggable = false;

let isDragging = false;
let startY = 0;
let startTop = 0;
let moved = false;

const MIN_TOP = () => window.innerHeight * 0.15;
const MAX_TOP = () => window.innerHeight * 0.85;

instagramBtn.addEventListener("pointerdown", (e) => {
    isDragging = true;
    moved = false;

    startY = e.clientY;
    startTop = instagramBtn.offsetTop;

    instagramBtn.setPointerCapture(e.pointerId);

    e.preventDefault();
});

instagramBtn.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY;

    if (Math.abs(deltaY) > 5) {
        moved = true;
    }

    let newTop = startTop + deltaY;

    newTop = Math.max(
        MIN_TOP(),
        Math.min(MAX_TOP(), newTop)
    );

    instagramBtn.style.top = `${newTop}px`;
});

function stopDragging() {
    isDragging = false;
}

instagramBtn.addEventListener("pointerup", stopDragging);
instagramBtn.addEventListener("pointercancel", stopDragging);

instagramBtn.addEventListener("click", (e) => {
    if (moved) {
        e.preventDefault();
        moved = false;
    }
});

instagramBtn.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

// header

function initHeader() {

    const menuBtn =
        document.getElementById(
            "menu-btn"
        );

    const menu =
        document.querySelector(
            ".menu_container"
        );

    const nightBtn =
        document.getElementById(
            "night-mode-btn"
        );

    const langButtons =
        document.querySelectorAll(
            ".lang-btn"
        );

    // MENU

    menuBtn?.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "active"
            );

            menuBtn.classList.toggle(
                "active"
            );

        }
    );

    // DARK MODE

    if (
        localStorage.getItem(
            "theme"
        ) === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }

    nightBtn?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );

            localStorage.setItem(
                "theme",
                document.body.classList.contains(
                    "dark-mode"
                )
                    ? "dark"
                    : "light"
            );

        }


    );

    langButtons.forEach(btn => {

        btn.addEventListener(
            "click",
            () => {

                changeLanguage(
                    btn.dataset.lang
                );

                updateLanguageButton();

                loadCategories();

                if (typeof loadProducts === "function") {
                    loadProducts();
                }

                if (typeof loadProduct === "function") {
                    loadProduct();
                }
                if (typeof loadHeroCategory === "function") {
                    loadHeroCategory();
                }

                if (typeof loadShopByCategory === "function") {
                    loadShopByCategory();
                }

                if (typeof loadVideoReviews === "function") {
                    loadVideoReviews();
                }

                if (typeof loadBestSellers === "function") {
                    loadBestSellers();
                }

            }
        );

    });

    updateLanguageButton();

}

// =======================
// LANGUAGE
// =======================

let currentLang =

    localStorage.getItem(
        "language"
    )

    || "en";

const langButtons =
    document.querySelectorAll(
        ".lang-btn"
    );



function changeLanguage(lang) {

    currentLang = lang;

    localStorage.setItem(
        "language",
        lang
    );

    document
        .querySelectorAll(
            "[data-key]"
        )

        .forEach(element => {

            const key =
                element.dataset.key;

            if (
                translations[lang][key]
            ) {

                element.textContent =

                    translations[lang][key];

            }

        });

    const careContent =

        document.querySelector(
            ".static_care"
        );

    if (careContent) {
        careContent.innerHTML =
            translations[lang].care_text;

    }

    const shippingContent =
        document.querySelector(
            ".static_shipping"
        );

    if (shippingContent) {

        shippingContent.innerHTML =
            translations[lang].shipping_text;

    }

    const returnsContent =
        document.querySelector(
            ".static_returns"
        );

    if (returnsContent) {

        returnsContent.innerHTML =
            translations[lang].returns_text;

    }

    const paymentContent =
        document.querySelector(
            ".static_payment"
        );

    if (paymentContent) {

        paymentContent.innerHTML =
            translations[lang].payment_text;
    }

    const faqWhyContent =
        document.querySelector(
            ".faq_why_content"
        );

    if (faqWhyContent) {

        faqWhyContent.innerHTML =
            translations[lang]
                .faq_why_text;

    }

    updateSortOptions();

}

function updateSortOptions() {

    document
        .querySelectorAll(
            "#sort-select option"
        )

        .forEach(option => {

            const key =
                option.dataset.sort;

            option.textContent =

                translations[
                currentLang
                ][key];

        });

}

function updateLanguageButton() {

    const langButtons =
        document.querySelectorAll(
            ".lang-btn"
        );

    langButtons.forEach(btn => {

        btn.classList.remove(
            "show"
        );

        if (
            currentLang === "en"
            &&
            btn.dataset.lang === "ka"
        ) {

            btn.classList.add(
                "show"
            );

        }

        if (
            currentLang === "ka"
            &&
            btn.dataset.lang === "en"
        ) {

            btn.classList.add(
                "show"
            );

        }

    });

}

changeLanguage(currentLang);

updateSortOptions();

updateLanguageButton();

// =======================
// DIRECTUS
// =======================

const BASE_URL =
    "https://sunleon-cms-production.up.railway.app";


// =======================
// LOAD CATEGORIES
// =======================

async function loadCategories() {

    try {

        const response =
            await fetch(

                `${BASE_URL}/items/categories`

            );

        const result =
            await response.json();

        const categories =
            result.data;

        const categoriesList =
            document.getElementById(
                "categories-list"
            );

        if (!categoriesList) return;

        categoriesList.innerHTML = "";

        categories.forEach(category => {

            const li =
                document.createElement(
                    "li"
                );

            const a =
                document.createElement(
                    "a"
                );

            a.href =
                `products.html?category=${category.slug}`;

            a.textContent =

                currentLang === "ka"

                    ? category.name_ka

                    : category.name_en;

            li.appendChild(a);

            categoriesList.appendChild(li);

        });

    }

    catch (error) {

        console.log(error);

    }

}

loadCategories();

// =======================
// HEADER
// =======================

const header =
    document.getElementById(
        "header"
    );

if (header) {

    header.innerHTML = `

        <div class="menu_container">

            <nav class="menu">

                <h3
                    class="menu-title"
                    data-key="categories"
                >
                    Categories
                </h3>

                <div class="menu-divider"></div>

                <ul id="categories-list"></ul>

            </nav>

            <div class="language-switcher">

                <button
                    class="lang-btn"
                    data-lang="en"
                >
                    <img
                        src="assets/Flag_of_the_United_Kingdom_(3-5).svg.png"
                        alt="English"
                        class="lang-icon"
                    />
                </button>

                <button
                    class="lang-btn"
                    data-lang="ka"
                >
                    <img
                        src="assets/Flag_of_Georgia.svg.png"
                        alt="Georgian"
                        class="lang-icon"
                    />
                </button>

            </div>

        </div>

        <header>

            <button id="menu-btn">

                <i class="fa-solid fa-bars open-icon"></i>

                <i class="fa-solid fa-xmark close-icon"></i>

            </button>

            <a
                href="index.html"
                class="logo_link"
            >

                <img
                    src="assets/namelogo.jpg"
                    alt=""
                    class="namelogo"
                />

                <img
                    src="assets/dark_logo.jpg"
                    alt=""
                    class="dark_logo"
                />

            </a>

            <button id="night-mode-btn">

                <i class="fa-solid fa-moon moon-icon"></i>

                <i class="fa-regular fa-sun sun-icon"></i>

            </button>

        </header>

    `;

}

initHeader();

// =======================
// FOOTER
// =======================

const footer =
    document.getElementById(
        "footer"
    );

if (footer) {

    footer.innerHTML = `

        <div class="footer_container">

            <a
                href="index.html"
                class="footer_logo"
            >
                <img
                    src="./assets/logo.png"
                    alt="Logo"
                >
            </a>

            <div class="footer_socials">

                <h3 data-key="follow_us">
                    Follow Us
                </h3>

                <div class="social_links">

                    <a
                        href="https://www.instagram.com/sunleon_store/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a
                        href="https://www.tiktok.com/@sunleon_store"
                        target="_blank"
                        aria-label="TikTok"
                    >
                        <i class="fa-brands fa-tiktok"></i>
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61563288005085"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                </div>

            </div>

            <div class="footer_links">

                <a
                    href="faq.html"
                    data-key="faq_information"
                >    
                    FAQ & Information
                </a>

            </div>

            <p class="footer_copy">
                © 2026 SUNLEON.
            </p>

        </div>

    `;

    changeLanguage(currentLang);

}

function createProductCard(product) {
    const firstVariant =

        product.bag_variants?.[0];

    if (!firstVariant) return;

    // IMAGE URL

    const imageUrl =

        `${BASE_URL}/assets/${firstVariant.cover_img.id}?width=600&format=webp&quality=82`;

    // PRODUCT NAME

    const productName =

        currentLang === "ka"

            ? product.name_ka

            : product.name_en;

    // COLORS COUNT

    const colorsCount =

        product.bag_variants.length;

    const colorDots = product.bag_variants
        .slice(0, 3)
        .map(
            variant => `
            <span
                class="color_dot"
                style="background-color: ${variant.color.hex}"
            ></span>
        `
        )
        .join("");

    const remainingColors =
        product.bag_variants.length - 3;

    const colorsHTML = `

    ${colorDots}

    ${remainingColors > 0
            ? `<span class="color_more">+${remainingColors}</span>`
            : ""
        }

`;

    // DISCOUNT CHECK

    const hasDiscount =

        firstVariant.discount_price;

    // MADE IN GEORGIA BADGE

    const madeInGeorgiaBadge =
        product.made_in_georgia
            ? `
        <div class="made_in_georgia_badge">
            <img
                src="./assets/Flag_of_Georgia.svg.png"
                alt="Georgia Flag"
            />
        </div>
        `
            : "";


    // DISCOUNT PERCENT

    let discountPercent = "";

    if (hasDiscount) {

        discountPercent = Math.round(

            (
                (
                    firstVariant.price
                    -
                    firstVariant.discount_price
                )

                /

                firstVariant.price
            )

            * 100

        );

    }

    // PRICE HTML

    const priceHTML =

        hasDiscount

            ? `

                    <div class="product_prices">

                        <span class="old_price">
                            ${firstVariant.price}₾
                        </span>

                        <span class="discount_price">
                            ${firstVariant.discount_price}₾
                        </span>

                    </div>

                    `

            : `

                    <div class="product_prices">

                        <span class="price">
                            ${firstVariant.price}₾
                        </span>

                    </div>

                    `;

    // CARD

    const card = `

                <a
                    href="product.html?slug=${product.slug}"
                    class="product_card"
                >

                    <div class="product_image_wrapper">
                        ${hasDiscount ? `

                        <div class="discount_badge">

                            -${discountPercent}%

                        </div>

                        ` : ""}
                        ${madeInGeorgiaBadge}
                        <img
                            src="${imageUrl}"
                            alt="${productName}"
                            loading="lazy"
                            class="product_image"
                        />
                        <div class="product_colors_preview">

                            ${colorsHTML}

                        </div>

                    </div>
                    
                    <div class="product_bottom">

                        <h3 class="product_title">
                        ${productName}
                        </h3>

                        ${priceHTML}

                    </div>

                </a>

            `;

    return card;

};

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document
    .querySelectorAll(".fade-in")
    .forEach(element => {

        observer.observe(element);

    });