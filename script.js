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
}

