var btns = document.querySelectorAll(".btn"),
    rows = document.querySelectorAll(".row");
    
    rows.forEach(function(row){
        var x = row.childNodes[3];

        x.addEventListener("click", function(){
            row.classList.toggle("show-row")
        })
    })

    /*
    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            var row = e.currentTarget.parentElement;

            row.classList.toggle("show-row")
        })
    })
    */