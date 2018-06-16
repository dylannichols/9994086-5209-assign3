(function() {
    if (screen.width > 1024) {
        var addFamily = document.querySelector(".add-family")
        var findWhanau = document.querySelector(".find-whanau")
        var messageWhanau = document.querySelector(".message-whanau")
        var dashGrid = document.querySelector(".dashboard-grid")
        var secondGrid = document.querySelector(".dash-second-grid")
        var img1 = document.querySelector(".dash-img1")
        var img2 = document.querySelector(".dash-img2")
        var form = document.querySelector(".dash-form")
        var addFamilyLink = document.querySelector(".add-family-link")

        addFamilyLink.addEventListener("click", function(e) {
            e.preventDefault()
        })

        addFamily.addEventListener("click", function(e) {
            addFamily.remove()
            secondGrid.style.gridTemplateColumns = "1fr"
            img1.style.display = "none"
            img2.style.display = "none"
            findWhanau.style.gridColumn = "1"
            secondGrid.style.gridColumn = "3"
            form.style.display = "block"
            form.style.gridColumn = "2"
            form.style.gridRow = "1/3"
        })

    }
})()