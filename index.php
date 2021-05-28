<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Survey</title>
  <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
  <script src="assets/js/verifypsw.js"></script>
  <meta http-equiv="Cache-control" content="no-cache">
</head>
<body>
  
  <div class="Form-control">
    <form enctype="multipart/form-data" id="form_um">
      <img id="img-login" src="assets/img/263.jpg" alt="">
      <h2 id="welcome">Bem-vindo!</h2>
      <p id="uptext">Login:</p>
      <input type="text" id="login" name="login" placeholder="Login">
      <p id="uptext">Password:</p>
      <input type="password" name="senha" id="senha" placeholder="Password">
      <button id="submit">Login</button>
      <div id="mensagem">
      </div>
      <div id="load">
        <?php
       echo file_get_contents("assets/img/load.svg")
        ?>
      </div>
    </form>
  </div>
</body>

</html>