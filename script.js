/* =====================================================
   PINDAH HALAMAN
===================================================== */

function sembunyikanSemua() {

    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });

}


function bukaHalaman(id) {

    sembunyikanSemua();

    document
        .getElementById(id)
        .classList
        .add("active");

    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;

}


/* =====================================================
   HALAMAN 2
===================================================== */

function halaman2() {

    bukaHalaman("page2");

}


/* =====================================================
   KODE RAHASIA
===================================================== */

function cekKode() {

    var kode =
        document
        .getElementById("kode")
        .value;

    var benar = "121010";

    if (kode === benar) {

        bukaHalaman("page3");

    }

    else {

        document
            .getElementById("pesanError")
            .innerHTML =
            "Kode salah 😭 Coba lagi.";

    }

}


/* =====================================================
   BUKA KADO
===================================================== */

var jumlahApiMati = 0;


function bukaKado() {

    var gift =
        document.getElementById("giftBox");

    var teks =
        document.getElementById("teksKado");

    var judul =
        document.getElementById("judulKado");


    gift.style.display = "none";


    teks.innerHTML =
        "SURPRISEEEE! 🎉💕";


    judul.innerHTML =
        "ADA KEJUTAN UNTUK SAYANG ✨";


    ledakkanPetasan();


    setTimeout(function() {

        document
            .getElementById("cakeArea")
            .classList
            .add("show");


        document
            .getElementById("instruksiLilin")
            .style
            .display = "block";


        teks.innerHTML =
            "Sekarang matikan semua apinya dulu ya 🥺🔥";


    }, 1800);

}


/* =====================================================
   PETASAN
===================================================== */

function ledakkanPetasan() {

    var container =
        document.createElement("div");

    container.className =
        "fireworks";

    document.body.appendChild(container);


    var warna = [

        "#ff4f9a",
        "#ffcc33",
        "#66e3ff",
        "#ffffff",
        "#ff6b6b",
        "#b86cff",
        "#7cff6b"

    ];


    for (
        var ledakan = 0;
        ledakan < 5;
        ledakan++
    ) {

        var pusatX =
            15 + Math.random() * 70;

        var pusatY =
            15 + Math.random() * 45;


        for (
            var i = 0;
            i < 35;
            i++
        ) {

            var partikel =
                document.createElement("div");


            partikel.className =
                "firework";


            partikel.style.left =
                pusatX + "vw";


            partikel.style.top =
                pusatY + "vh";


            partikel.style.background =
                warna[
                    Math.floor(
                        Math.random()
                        * warna.length
                    )
                ];


            var sudut =
                Math.random()
                * Math.PI
                * 2;


            var jarak =
                50 +
                Math.random() * 180;


            partikel.style.setProperty(
                "--x",
                Math.cos(sudut) * jarak
            );


            partikel.style.setProperty(
                "--y",
                Math.sin(sudut) * jarak
            );


            partikel.style.animationDelay =
                (
                    Math.random() * 0.3
                ) + "s";


            container.appendChild(partikel);

        }

    }


    setTimeout(function() {

        container.remove();

    }, 2200);

}


/* =====================================================
   MATIKAN API
===================================================== */

function matikanApi(candle) {

    if (
        candle.classList.contains("off")
    ) {

        return;

    }


    candle.classList.add("off");


    jumlahApiMati++;


    var asap =
        document.createElement("div");


    asap.className =
        "smoke";


    asap.innerHTML =
        "💨";


    candle.appendChild(asap);


    setTimeout(function() {

        asap.remove();

    }, 1500);


    if (jumlahApiMati >= 3) {

        var instruksi =
            document.getElementById(
                "instruksiLilin"
            );


        instruksi.innerHTML =
            "Yeayyy! Semua lilinnya sudah mati 🥹💕";


        instruksi.style.animation =
            "none";


        document
            .getElementById("teksKado")
            .innerHTML =
            "Permintaannya sudah boleh disampaikan... 💕";


        setTimeout(function() {

            document
                .getElementById(
                    "tombolLanjutKue"
                )
                .style
                .display =
                "inline-block";

        }, 800);

    }

}


/* =====================================================
   LANJUT DARI KUE
===================================================== */

function lanjutDariKue() {

    bukaHalaman("page4");

}


/* =====================================================
   HALAMAN 5
===================================================== */

function halaman5() {

    bukaHalaman("page5");

}


/* =====================================================
   HALAMAN 6
===================================================== */

function halaman6() {

    bukaHalaman("page6");

}


/* =====================================================
   HALAMAN 7
===================================================== */

function halaman7() {

    bukaHalaman("page7");

}


/* =====================================================
   HALAMAN 8
===================================================== */

function halaman8() {

    bukaHalaman("page8");

}


/* =====================================================
   ULANGI
===================================================== */

function awal() {

    jumlahApiMati = 0;


    var gift =
        document.getElementById("giftBox");


    gift.style.display =
        "inline-block";


    document
        .getElementById("judulKado")
        .innerHTML =
        "ADA SESUATU UNTUK SAYANG";


    document
        .getElementById("teksKado")
        .innerHTML =
        "Tekan hadiahnya 💕";


    document
        .getElementById("cakeArea")
        .classList
        .remove("show");


    document
        .querySelectorAll(".candle")
        .forEach(function(candle) {

            candle
                .classList
                .remove("off");


            var asap =
                candle.querySelector(".smoke");


            if (asap) {

                asap.remove();

            }

        });


    document
        .getElementById("instruksiLilin")
        .style
        .display =
        "none";


    document
        .getElementById("tombolLanjutKue")
        .style
        .display =
        "none";


    bukaHalaman("page1");

}


/* =====================================================
   HATI BERTERBANGAN
===================================================== */

function buatHati() {

    var hati =
        document.createElement("div");


    hati.className =
        "heart";


    hati.innerHTML =
        "❤️";


    hati.style.left =
        Math.random() * 100 + "vw";


    hati.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) + "px";


    document.body.appendChild(hati);


    setTimeout(function() {

        hati.remove();

    }, 5000);

}


setInterval(
    buatHati,
    600
);