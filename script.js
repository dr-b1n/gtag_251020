// 상품검색이벤트
const handleSearch = () => {
    const input = document.getElementById("searchInput").value.trim();
    if (input != "") {
        gtag("event", "search_button_clicked", {
            event_category: "engagement",
            event_label: "search_keyword",
            search_term: input
        });

        alert(`검색어 ${input}에 대한 검색을 실행하였습니다.`)
    } else {
        alert("검색어를 입력하세요");
    }
};

// 상품상세보기 이벤트 함수
const viewItem = () => {
    gtag("event", "view_item", {
        category : "IT",
        labels : "Promotion_Item",
        items: [{
            item_id: "EP1001",
            item_name: "무선이어폰",
            currency: "KRW",
            value: 358800,
            quantity: 1,
            price: 358800
        }]
    });

    alert("view_item 이벤트 발생!");
};
// 상품 장바구니 이벤트 함수
const addToCart = () => {
    gtag("event", "addToCart", {
        category : "IT",
        labels : "Promotion_Item",
        items: [{
            item_id: "EP1001",
            item_name: "무선이어폰",
            currency: "KRW",
            value: 358800,
            quantity: 1,
            price: 358800
        }]
    });
    alert("add_to_Cart 이벤트 발생!");
};
// 상품 구매하기 이벤트 함수
const purchase = () => {
    gtag("event", "purchase", {
        transaction_id: "T1234",
        affiliation: "온라인몰",
        category : "IT",
        labels : "Promotion_Item",
        currency : "KRW",
        value : 129000,
        tax : 129000,
        shipping: 3000,
        items: [{
            item_id: "EP1001",
            item_name: "무선이어폰",
            currency: "KRW",
            value: 358800,
            quantity: 1,
            price: 358800
        }]
    });
    alert("purchase 이벤트 발생!");
};

