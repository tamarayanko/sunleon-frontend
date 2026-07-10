// =======================
// PRODUCTS
// =======================

const productsSection =
    document.querySelector(
        ".products_section"
    );

const params =
    new URLSearchParams(
        window.location.search
    );

const currentCategory =
    params.get("category");


const categoryTitle =
    document.querySelector(
        ".category_title"
    );

const productsCount =
    document.querySelector(
        ".products_count"
    );

const sortSelect =
    document.getElementById(
        "sort-select"
    );

const currentSale =
    new URLSearchParams(
        window.location.search
    ).get("sale");

const searchInput = document.getElementById("product-search");
const clearSearchBtn = document.querySelector(".search_clear");
const emptyState = document.querySelector(".search_empty_state");

// =======================
// LOAD PRODUCTS
// =======================

async function loadProducts() {

    if (!productsSection) return;

    try {

        // FETCH PRODUCTS

        const response =
            await fetch(

                `${BASE_URL}/items/bag_collection?fields=*,categories.categories_id.*,bag_variants.*,bag_variants.cover_img.*,bag_variants.color.*`

            );

        const result =
            await response.json();

        let products =
            result.data;

        // CATEGORY FILTER

        if (currentCategory) {

            products = products.filter(

                (product) => {

                    return (

                        product.categories?.some(

                            item =>

                                item.categories_id?.slug ===
                                currentCategory

                        )

                    );

                }

            );

        }

        if (currentCategory && categoryTitle) {

            const category = products[0]?.categories?.find(
                item =>
                    item.categories_id?.slug ===
                    currentCategory
            );

            if (category) {

                categoryTitle.textContent =

                    currentLang === "ka"

                        ? category.categories_id.name_ka

                        : category.categories_id.name_en;

            }

        }

        if (currentSale) {

            const saleResponse =
                await fetch(

                    `${BASE_URL}/items/sales/${currentSale}?fields=bags.*`

                );

            const saleResult =
                await saleResponse.json();

            const saleBagIds =
                saleResult.data.bags.map(
                    item =>
                        item.bag_collection_id
                );

            products =
                products.filter(
                    product =>
                        saleBagIds.includes(
                            product.id
                        )
                );

        }

        // SEARCH

        const searchValue =
            searchInput?.value
                .trim()
                .toLowerCase();

        if (searchValue) {

            products =
                products.filter(product => {

                    const productName =

                        currentLang === "ka"

                            ? product.name_ka

                            : product.name_en;

                    return productName
                        .toLowerCase()
                        .includes(searchValue);

                });

        }

        // SORTING

        const sortValue =
            sortSelect?.value;

        function getActualPrice(
            product
        ) {

            const variant =
                getPrimaryVariant(product);

            if (!variant) {
                return 0;
            }

            return (
                variant.discount_price
                ||
                variant.price
            );

        }

        if (
            sortValue ===
            "name-asc"
        ) {

            products.sort(
                (a, b) => {

                    const nameA =

                        currentLang ===
                            "ka"

                            ? a.name_ka

                            : a.name_en;

                    const nameB =

                        currentLang ===
                            "ka"

                            ? b.name_ka

                            : b.name_en;

                    return nameA.localeCompare(
                        nameB
                    );

                }
            );

        }

        if (
            sortValue ===
            "name-desc"
        ) {

            products.sort(
                (a, b) => {

                    const nameA =

                        currentLang ===
                            "ka"

                            ? a.name_ka

                            : a.name_en;

                    const nameB =

                        currentLang ===
                            "ka"

                            ? b.name_ka

                            : b.name_en;

                    return nameB.localeCompare(
                        nameA
                    );

                }
            );

        }

        if (
            sortValue ===
            "price-asc"
        ) {

            products.sort(
                (a, b) =>

                    getActualPrice(a)
                    -
                    getActualPrice(b)
            );

        }

        if (
            sortValue ===
            "price-desc"
        ) {

            products.sort(
                (a, b) =>

                    getActualPrice(b)
                    -
                    getActualPrice(a)
            );

        }

        // PRODUCTS COUNT

        if (
            productsCount
        ) {

            productsCount.textContent =

                currentLang === "ka"

                    ? `${products.length} პროდუქტი`

                    : products.length === 1

                        ? "1 Product"

                        : `${products.length} Products`;

        }

        // MOVE OUT OF STOCK PRODUCTS TO THE END

        products.sort((a, b) => {

            const aHasStock =
                a.bag_variants.some(
                    variant => variant.stock > 0
                );

            const bHasStock =
                b.bag_variants.some(
                    variant => variant.stock > 0
                );

            if (aHasStock === bHasStock) {
                return 0;
            }

            return aHasStock ? -1 : 1;

        });

        // SEARCH UI

        if (searchInput.value.trim()) {

            clearSearchBtn.style.display = "flex";

        } else {

            clearSearchBtn.style.display = "none";

        }

        if (products.length === 0) {

            productsSection.style.display = "none";

            emptyState.style.display = "flex";

        } else {

            productsSection.style.display = "grid";

            emptyState.style.display = "none";

        }

        // CLEAR SECTION

        productsSection.innerHTML = "";

        // LOOP PRODUCTS

        // });

        let cardsHTML = "";

        products.forEach(product => {

            cardsHTML +=
                createProductCard(product);

        });

        productsSection.innerHTML =
            cardsHTML;

    }

    catch (error) {

        console.error(error);

    }

}

function renderSkeletonCards() {

    productsSection.innerHTML = "";

    for (let i = 0; i < 10; i++) {

        productsSection.innerHTML += `
            <div class="product_card skeleton_card">
                <div class="skeleton_image"></div>
                <div class="skeleton_title"></div>
                <div class="skeleton_price"></div>
            </div>
        `;

    }

}

renderSkeletonCards();

loadProducts();

if (
    sortSelect
) {

    sortSelect.addEventListener(
        "change",
        () => {

            loadProducts();

        }
    );

}

searchInput?.addEventListener(
    "input",
    () => {

        loadProducts();

    }
);

clearSearchBtn?.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        loadProducts();

        searchInput.focus();

    }
);