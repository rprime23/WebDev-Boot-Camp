    var lis = document.getElementsByClassName("list");
    var child = lis[2];
    child.innerHTML = "Random";

    document.querySelector(".list a").style.color = "green";

    document.querySelector("button").style.backgroundColor = "yellow";

    document.querySelector("button").onclick = hugeToggle;

    function hugeToggle()
    {
        document.querySelector("h1").classList.toggle("huge");
    }