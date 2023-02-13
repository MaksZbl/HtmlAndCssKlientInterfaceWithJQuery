$(function () {

    //Fixed header




    var headerH = $(`#header`).innerHeight();
    var introH = $(`#intro`).innerHeight();
    var scrollOffset = $(window).scrollTop();

    sprawdzenieScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();
        sprawdzenieScroll(scrollOffset);

    });

    function sprawdzenieScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            $(`#header`).addClass("fixed");
        }
        else {
            $(`#header`).removeClass("fixed");
        }
    }



    //Scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();//usuń niestandardowe zachowanie linków

        var blockId = $(this).data('scroll');// id of the element

        var scrollTmp = $(blockId).offset().top;

        $(".nav a").removeClass("active");
        $(".slider_item").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: scrollTmp
        }, 600);



    });

    //Otworz content

    $("[data-otworz]").on("click", function (event) {
        event.preventDefault();//usuń niestandardowe zachowanie linków

        var blockId = $(this).data('otworz');// id of the element

        $(this).toggleClass('active');
    });


    $(".subscribe_button").click(function () {
        var value = $(".subscribe_input").val();
        if (value.includes('@')) {
            localStorage.setItem(`${value}`, value);
        }
    });

    let text = '{ "employees" : [' +
        '{ "firstName":"John" , "lastName":"Doe" , "number":"+48501501505" , "email":"johndoe@gmail.com", "post":"Programista baz danych" },' +
        '{ "firstName":"Anna" , "lastName":"Smith" , "number":"+48501501506" , "email":"annasmith@gmail.com", "post":"Programista" },' +
        '{ "firstName":"Peter" , "lastName":"Jones" , "number":"+48501501507" , "email":"peterjones@gmail.com", "post":"Programista AI" } ]}';



    const obj = JSON.parse(text);


    $(".btnS").click(function () {
        var id = Math.floor(Math.random() * 1000000);
        var imie = $("#imie").val();
        var nazwisko = $("#nazwisko").val();
        var stanowisko = $("#stanowisko").val();
        var numer = $("#numer").val();
        var email = $("#email").val();
        $("#imie").val("");
        $("#nazwisko").val("");
        $("#stanowisko").val("");
        $("#numer").val("");
        $("#email").val("");
        if (imie !== "" && nazwisko !== "" && stanowisko !== "", numer !== "", email !== "") {
            $(".table").append($(`<tr class="${nazwisko + id}"><td>${stanowisko}</td></tr>`));
            $(`.${nazwisko + id}`).append($(`<td>${imie}</td>`));
            $(`.${nazwisko + id}`).append($(`<td>${nazwisko}</td>`));
            $(`.${nazwisko + id}`).append($(`<td>${numer}</td>`));
            $(`.${nazwisko + id}`).append($(`<td>${email}</td>`));
        }
        else {
            $('.btnS').parent().append($('<div style=color:red>Wypełnij wszystkie pola</div>'));
        }
    });




    $(".btnI").click(function () {
        var id = Math.floor(Math.random() * 1000000);
        for (let i = 0; i < obj.employees.length; i++) {
            var imie = obj.employees[i].firstName;
            var nazwisko = obj.employees[i].lastName;
            var stanowisko = obj.employees[i].post;
            var numer = obj.employees[i].number;
            var email = obj.employees[i].email;
            if (imie !== "" && nazwisko !== "" && stanowisko !== "", numer !== "", email !== "") {
                $(".table").append($(`<tr class="${nazwisko + id}"><td>${stanowisko}</td></tr>`));
                $(`.${nazwisko + id}`).append($(`<td>${imie}</td>`));
                $(`.${nazwisko + id}`).append($(`<td>${nazwisko}</td>`));
                $(`.${nazwisko + id}`).append($(`<td>${numer}</td>`));
                $(`.${nazwisko + id}`).append($(`<td>${email}</td>`));
            }
        }
    });

    $(".btnD").click(function () {
        $('.table tr:last').remove();
    });









    /*
    fetch('https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json')
        .then(
            response => {
                if (response.status !== 200) {
                    console.log("Problem");
                    return;
                }
                response.json().then(data => {
                    console.log(data);
                });
            }
        )
        .catch(err => {
            console.error(err);
        });
    */
});