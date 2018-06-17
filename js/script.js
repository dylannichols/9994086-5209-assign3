(function() {

    var submitBtn = document.querySelector(".submit-btn")
    submitBtn.addEventListener("click", function() {
        alert("Message Sent!")
        window.location.href = "dashboard.html"
    })

    if (screen.width > 1024) {
        var addFamily = document.querySelector(".add-family")
        var findWhanau = document.querySelector(".find-whanau")
        var messageWhanau = document.querySelector(".message-whanau")
        var dashGrid = document.querySelector(".dashboard-grid")
        var secondGrid = document.querySelector(".dash-second-grid")
        var img1 = document.querySelector(".dash-img1")
        var img2 = document.querySelector(".dash-img2")
        var form = document.querySelector(".dash-form")
        var messageGrid = document.querySelector(".message-grid2")
        var map = document.querySelector(".map")
        var addFamilyLink = document.querySelectorAll(".link")

        for (var i = 0; i < addFamilyLink.length; i++) {
            addFamilyLink[i].addEventListener("click", function(e) {
                e.preventDefault()
            })
        }

        addFamily.addEventListener("click", function(e) {
            map.style.display = "none"
            findWhanau.style.display = "block"
            messageGrid.style.display = "none"
            messageWhanau.style.display = "block"
            addFamily.style.display = "none"
            img1.style.display = "none"
            img2.style.display = "none"
            findWhanau.style.gridColumn = "1"
            secondGrid.style.gridColumn = "3"
            form.style.display = "block"
            form.style.gridColumn = "2"
            form.style.gridRow = "1/3"
        })

        messageWhanau.addEventListener("click", function(e) {
            map.style.display = "none"
            findWhanau.style.display = "block"
            form.style.display = "none"
            addFamily.style.display = "block"
            messageWhanau.style.display = "none"
            img1.style.display = "none"
            img2.style.display = "none"
            findWhanau.style.gridColumn = "1"
            secondGrid.style.gridColumn = "2"
            messageGrid.style.display = "grid"
            messageGrid.style.gridColumn = "3"
            messageGrid.style.gridRow = "1/3"
        })

        findWhanau.addEventListener("click", function(e) {
            messageGrid.style.display = "none"
            messageWhanau.style.display = "block"
            form.style.display = "none"
            addFamily.style.display = "block"
            findWhanau.style.display = "none"
            map.style.display = "block"
            img1.style.display = "none"
            img2.style.display = "none"
        })

    }
})();