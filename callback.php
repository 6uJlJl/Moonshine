<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);

if (isset($_POST['section'])) {
   $section = $_POST['section'];
   $section = htmlspecialchars($section);
   $section = urldecode($section);
   $section = trim($section);
   $section = "\nВвел данные в секции: ".$section;
} else {
  $section = " ";
}

if (isset($_POST['item'])) {
  $item = $_POST['item'];
  $item = htmlspecialchars($item);
  $item = urldecode($item);
  $item = trim($item);
  $item = "\nЗаявка отправлена с товара: ".$item;
} else {
 $item = " ";
}



if (mail("mailtomerkulov@gmail.com", "Заказан обратный звонок!", "Клиент просит перезвонить ему! ".$section.$item."\nИмя: ".$name.". \nТелефон: ".$phone ,"From: info@agmerkulov.ru \r\n"))
{ echo "<html><head><meta charset='UTF-8'><meta http-equiv='Refresh' content='3; URL=/'></head><body><p class='callback__title'>Сообщение успешно отправлено!</p><p>Вы будете перемещены через 3 сек. Если не хотите ждать, то <a href='index.html'>нажмите сюда.</a></p></body></html>";
} else {
  echo "<html><head><meta charset='UTF-8'><meta http-equiv='Refresh' content='3; URL=/'></head><body><p class='callback__title'>При отправке сообщения возникли ошибки!</p><p>Вы будете перемещены через 3 сек. Если не хотите ждать, то <a href='index.html'>нажмите сюда.</a></p></body></html>";
}

?>
