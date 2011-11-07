<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt ie 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if ie 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if ie 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- consider adding an manifest.appcache: h5bp.com/d/offline -->
<!--[if gt ie 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- use the .htaccess and remove these lines to avoid edge case issues.
       more info: h5bp.com/b/378 -->
  <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">

  <title></title>

  <meta name="description" content="">
  <meta name="author" content="">

  <!-- mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <link rel='stylesheet' href='css/b001af49c4f5b840b445cf8a0ce88fae3f31c85d.css'>

  <!-- more ideas for your <head> here: h5bp.com/d/head-tips -->

  <!-- all javascript at the bottom, except for modernizr / respond.
       modernizr enables html5 elements & feature detects; respond is a polyfill for min/max-width css3 media queries
       for optimal performance, use a custom modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body>
  <div id="wrapper">
    <header>
        <div id="cont-header" class="clearfix">
          <div id="logo" ><img src="img/logo.png"/></div>
          <nav id="principal" >
            <ul>
            <li <?php if($pagina==1){echo 'class="activo"';}?>><a href="index.php">Nosotros</a></li> 
             <li <?php if($pagina==2){echo 'class="activo"';}?>><a href="adeportivas.php">Actividades Deportivas</a></li> 
             <li <?php if($pagina==3){echo 'class="activo"';}?>><a href="aescolares.php">Actividades Escolares</a></li> 
             <li <?php if($pagina==4){echo 'class="activo"';}?>><a href="clientes.php">Clientes</a></li> 
             <li <?php if($pagina==5){echo 'class="activo"';}?>><a href="contacta.php">Contacta</a></li> 
            </ul>
          </nav>
        </div>
    </header>
    <div id="main">
      <div id="callout" class="clearfix">
        <h1>SportEduca destaca por la
profesionalidad de su equipo
de trabajo satisfaciendo los
requisitos y expectativas del
cliente bajo un principio de
calidad e innovación</h1>
        <div>
          <div id="flechaIzq"></div>
          <div id="flechaDer"></div>
          <ul id="carrusel">
            <li><img src="img/clase1.jpg"></li>
            <li><img src="img/clase2.jpg" class="hidden"></li>
            <li><img src="img/clase3.jpg" class="hidden"></li>
            <li><img src="img/clase4.jpg" class="hidden"></li>
          </ul>
        </div>
      </div><!--end of callout -->
