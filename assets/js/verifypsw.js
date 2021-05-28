$('document').ready(function () {
    $("#submit").click(function (e) {
        e.preventDefault();

        scren = document.getElementById("mensagem")

        var data = $('#form_um').serialize();
        $.ajax({
            type: 'POST',
            url: './assets/loginphp/verifypsw.php',
            data: data,
            dataType: 'json',
            beforeSend: function () {
                document.getElementById("load").style.display = "block";
                document.getElementById("submit").style.display = "none";
                document.getElementById("mensagem").style.display = "none";

            },
            success: function (response) {

                if (response.codigo == "1") {

                    document.getElementById("submit").style.display = "block";
                    document.getElementById("load").style.display = "none";
                    document.getElementById("mensagem").style.display = "inline";
                    x.innerHTML = '<h5 id="error">' + response.msg + '</h5>';

                } else if (response.codigo == "2") {

                    document.getElementById("load").style.display = "none";
                    document.getElementById("submit").style.display = "none";
                    document.getElementById("mensagem").style.display = "inline";

                    scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';

                } else if (response.codigo == "3") {

                    document.getElementById("submit").style.display = "block";
                    document.getElementById("load").style.display = "none";
                    document.getElementById("mensagem").style.display = "inline";
                    scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';
                    
                }
            },
            error: function (response) {

                document.getElementById("load").style.display = "none";
                document.getElementById("submit").style.display = "block";
                alert("fui n");

            }

        });
    });

});