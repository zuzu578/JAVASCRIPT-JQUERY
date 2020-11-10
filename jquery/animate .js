<div id="clickme">
    Click here
  </div>
  <img id="book" src="C:\Users\Public\Pictures\Sample Pictures\\peng.jpg" alt="" width="100" height="123"
    style="position: relative; left: 10px;">


</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    $( "#clickme" ).click(function() {
  $( "#book" ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});