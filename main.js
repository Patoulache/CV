CV = {
    
    init: function() {
        var btnNav = document.querySelectorAll("a");
        btnNav.forEach((el) => el.addEventListener("click", CV.switchy));
    },

    switchy: function(e) {
        var sectionSel = document.querySelector("section");
        sectionSel.id = e.target.className;
        CV.ajax(e.target.className);
    },

    ajax: function(smth) {
        var sectionSel = document.querySelector("section");
        var req = new XMLHttpRequest;
        req.onload = function() {
        var retour = req.responseText;
        console.log(retour);
        sectionSel.innerHTML = retour;
        }
    req.open('POST', smth.concat(".php"), true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send();
    }
};

window.onload = CV.init;