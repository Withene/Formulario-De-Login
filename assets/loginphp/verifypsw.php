<?php
header('Cache-Control: no-cache, must-revalidate'); 

header('Content-Type: application/json; charset=utf-8');

//apenas para demonstrar a classe login
sleep(1);


 
function Verificar_exist(){
  if (empty($_POST['login']) || empty($_POST['senha'])) {
    $resposta = array('codigo' => '1', 'msg' => 'Credencias Incorretas.');
    echo json_encode($resposta);
  }
  if(isset($resposta)){
    return false;
  }else{
    return true;
  }
}
function Verificar_Http(){
  if ($_SERVER['HTTP_REFERER'] != "http://localhost/login/"){
    $resposta = array('codigo' => '2', 'msg' =>'Local de Acesso inadequado.');
    echo json_encode($resposta);
    }
    if(isset($resposta)){
      return false;
    }else{
      return true;
    }
  

}

if( Verificar_exist() == true && Verificar_Http() == true){

  
  $login_user=$_POST['login'];
  $senha_user=$_POST['senha'];
    //senha fixa, pois não esta hospedado o site e não despõem de um bd

  $senha_res ='$2y$10$kdspoJIqVlwmBbIE23sR5.VjpnRO9YTZUOyZqmTdve46Bek2YK2Iu';
  if($login_user =='admin'){
    if(password_verify($senha_user, $senha_res)){
    $resposta = array('codigo' => '3', 'msg' => 'Logado Com Sucesso.');
    echo json_encode($resposta);
    }else{
      $resposta = array('codigo' => '1', 'msg' => 'Credenciais Incorretas.');
      echo json_encode($resposta);
    }
}else{
  $resposta = array('codigo' => '1', 'msg' => 'Credenciais Incorretas.');
  echo json_encode($resposta);
}
}
?>
