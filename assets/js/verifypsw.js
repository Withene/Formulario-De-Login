$('document').ready(function () {
    $("#submit").click(function (e) {
     
        
       var ok = true;
        e.preventDefault(ok);
        if ($("#form_um")[0].checkValidity()) {
            var data = $('#form_um').serialize();
            $.ajax({
                type: 'POST',
                url: './assets/loginphp/verifypsw.php',
                data: data,
                dataType: 'json',
                beforeSend: function () {
                    //mostra o loading svg

                    load.style.display = "block";
                    //retira o botão

                    submit.style.display = "none";

                    // retira a mensagem se for a segunda tentativa.
                    mensagem.style.display = "none";
                },
                success: function (response) {
                    scren = document.getElementById("mensagem");
                   
                    const stylesByCode = {
                        1: {
                        submitDisplay: "block",
                        loadDisplay: "none",
                        messageDisplay: "inline"
                        },
                        2: {
                            submitDisplay: "none",
                            loadDisplay: "none",
                            messageDisplay: "inline"
                        },
                        3:{
                            submitDisplay: "block",
                            loadDisplay: "none",
                            messageDisplay: "inline"
                        }
                    };
                    const currentStyle = stylesByCode[response.codigo];
                    document.getElementById("submit").style.display = currentStyle.submitDisplay;
                    document.getElementById("load").style.display = currentStyle.loadDisplay;
                    document.getElementById("mensagem").style.display = currentStyle.messageDisplay;
                    scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';
                    ok=true;
                    
                
                






































                 /*    //primeiro caso de error
                    if (response.codigo == "1") {


                        //adiciona o botão de login novamente a tela
                        submit.style.display = "block";

                        //retira o loading .svg
                        load.style.display = "none";

                        //adiciona a mensgame a tela
                        mensagem.style.display = "inline";

                        //exibe a mensagem de error 
                        scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';

                    } else if (response.codigo == "2") {
                        //segundo caso de error

                        load.style.display = "none";

                        submit.style.display = "none";

                        mensagem.style.display = "inline";

                        scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';
                    } else if (response.codigo == "3") {

                        submit.style.display = "block";

                        load.style.display = "none";

                        mensagem.style.display = "inline";

                        scren.innerHTML = '<h5 id="error">' + response.msg + '</h5>';

                    } */
                },
                error: function () {

                    load.style.display = "none";

                    submit.style.display = "block";

                    alert("fui n");
                }
            });
        } else {
            
            mensagem.style.display = "inline";

            scren.innerHTML = '<h5 id="error">Preencha todos os campos do Fumulario!</h5>';

        };




    });

});