<?php
$ans1="";
$ans2="";
if(isset($_POST['save_audio']) && $_POST['save_audio']=="Upload Audio")
{
// Appending the count to the starting of the filename so that incoming file gets stored at the end
  $dir='uploads/'."new";
  $audio_path=$dir.".wav";
  // Storing the file in the desired path
  if(move_uploaded_file($_FILES['audioFile']['tmp_name'],$audio_path)){
    // Running the python file using the shell command on terminal
    $command = escapeshellcmd('python def.py &');
      $output = shell_exec($command);
    // Splitting the output in 2 variables ans1 and ans2
        $s="";
        for($i=0;$i<strlen($output);$i++)
        {
          if($output[$i]==" ")
          {
            $ans1=$s;
            $s="";
          }
          else {
            $s=$s.$output[$i];
          }
        }
        $ans2=$s;
  }
}

 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="logo.jpg" type = "image/x-icon">
   <title>Speech To Emotion Recognition</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  </head>
  <body>
    <div class="text">
      <h2>
        <i class="fas fa-language"></i> Speech To Em<i class="far fa-laugh-beam bounce1"></i>ti<i class="fas fa-angry bounce2"></i>n Recognition
        <p class="mono">Note : The soundfile must be a monotone. Monotone refers to a sound, for example music or speech, that has a single unvaried tone.</p>
      </h2>
    </div>
    <!-- Displaying the output -->
    <div class=" box1">
      <div class="box2">
        <div class="image">
          <i class="fas fa-poll"></i>
        </div>
        <div class="new-file">
        <div>The Person might be <?php  echo $ans1;?></div>
        <div>The accuracy of the model is  <?php  echo $ans2;?> </div>
          </div>
      </div>
    </div>

  <!-- Footer -->
    <div class="footer-dark">
          <footer>
            <div class="container-fluid" style="font-size: 20px;">
        <i class="social-icon fab fa-facebook-f"></i>
        <i class="social-icon fab fa-twitter"></i>
        <i class="social-icon fab fa-instagram"></i><br>
      </div>
              <div class="container">
                  <pre class="copyright">Adwet Ojha     Rishika Patel     Sachin Gupta     Yashaswa Jain</pre>
              </div>
          </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
