<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<style>
td{
    width:100px;
    height: 36px;

}

</style> 
<body id="body1">
  <div class="button-items">
      <input type="button" id="night" value="night">

 
  </div>
  <div class="contents">
   <h1>What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been the industry's
     standard dummy text ever since the 1500s, when an unknown printer 
     took a galley of type and scrambled it to make a type specimen book. 
     It has survived not only five centuries, but also the leap into electronic 
     typesetting, remaining essentially unchanged. It was popularised in the 1960s 
     with the release of Letraset sheets containing Lorem Ipsum passages, and more 
     recently with desktop publishing software like Aldus PageMaker including versions 
     of Lorem Ipsum.
        hello world</h1>
  </div>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
 $(document)
 .on('click','#night',function(){
     if($('#night').val()=='night'){
         $('body').css('background-color','black');
         $('body').css('color','white');
         $('#night').val('day');
     }else{
        $('body').css('background-color','white');
        $('body').css('color','black');
        $('#night').val('night');   
     }

 });
     
     






</script>  