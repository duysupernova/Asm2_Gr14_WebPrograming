<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Khang Tran s3855823">
    <title>BOX | HOME</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/headerandfooter.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/headerandfooter.css" />
    <script src="https://kit.fontawesome.com/13954ad90d.js" crossorigin="anonymous"></script>
</head>

<?php


function get_new_arrivals($arr, $arr_size)
{
    global $new_arrivals;
    $i =0;
    $first = 0;
    $second = 0;
    $third = 0;
    $fourth = 0;
    $counter = 0;

    for ($i = 0; $i < $arr_size ; $i ++)
    {
        $current_data = $arr[$i];
        $new_arrivals_data = explode(",", $arr[$i]);
        $new_arrivals_created_time = $new_arrivals_data[3];
        $new_arrivals_data_timestamp = strtotime($new_arrivals_created_time);
        $current_timestamp = intval($new_arrivals_data_timestamp);

        if ($current_timestamp > $first){
            $fourth = $third;
            $new_arrivals[3] = $new_arrivals[2];
            $third = $second;
            $new_arrivals[2] = $new_arrivals[1];
            $second = $first;
            $new_arrivals[1] = $new_arrivals[0];
            $first = $current_timestamp;
            $new_arrivals[0] = $current_data;
        } else if ($current_timestamp > $second){
            $fourth = $third;
            $new_arrivals[3] = $new_arrivals[2];
            $third = $second;
            $new_arrivals[2] = $new_arrivals[1];
            $second = $current_timestamp;
            $new_arrivals[1] = $current_data;
        } else if ($current_timestamp > $third){
            $fourth = $third;
            $new_arrivals[3] = $new_arrivals[2];
            $third = $current_timestamp;
            $new_arrivals[2] = $current_data;
        } else if ($current_timestamp > $fourth){
            $fourth = $current_timestamp;
            $new_arrivals[3] = $current_data;
        }
        $counter++;
    }
}



$path = "../products.csv";
$file = fopen($path,"r");
$counter = 1;

$featured_store_products = [];
$new_arrivals = ["", "", "", ""];
$all_products = [];

while(! feof($file)){

    $raw_data = fgets($file);

    if($counter != 1){
        if(trim($raw_data) != ""){

            $data = explode(",", $raw_data);
            $store_id = $data[4];
            $featured_in_store = $data[6];

            if($store_id == 10){
                array_push($all_products, $raw_data);

                if(trim($featured_in_store) == "TRUE"){
                    if(count($featured_store_products) != 3){
                        array_push($featured_store_products, $raw_data);
                    }
                }
            }
        }
    }
    $counter++;
}
fclose($file);


$number_of_products = count($all_products);
get_new_arrivals($all_products, $number_of_products);



?>

<body>
    <div class="header">
        <!-- Header -->
        <header>
            <div class="bar-content">
                <div class="bar-content center">
                    <img  src="img/logo.png">
                    <label class="bar__nav-toggle" for="inpNavToggle">
                        <i class="fas fa-bars"></i>
                        
                    </label>
                    <input type="checkbox" id="inpNavToggle" />
                    <nav class="nav">
                        <a class="link" href="index.php">Home</a>
                        <a class="link" href="aboutus.html">About us</a>
                        <a class="link" href="product.php">Product</a>
                        <a class="link" href="contact.html">Contact</a>
                        <a class="link cart-number" href="cart.php">
								

                                </a>
                    </nav>
                </div>
            </div>
        </header>

        <!-----Explore----->
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Release Your Inner Beast</h1>
                    <p>“To uncover your true potential you must first find your own limits and then you have to have the
                        courage to blow past them.” – Picabo Street</p>
                    <a href="" class="button">EXPLODE NOW!</a>
                </div>
                <div class="col">
                    <div class = "homeimg">
                        <img src="img/home.png" width="500px">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-----Feature----->
    <div class="feature">
        <h2>Featured Items</h2>
            <div class="container-product">
                <div class="row">

                <?php
                    for ($i=0; $i < count($featured_store_products); $i++) {
                        $raw_data = $featured_store_products[$i];
                        $data = explode(",", $raw_data);
                        $name = $data[1];
                        $price = $data[2];
                        $img_tmp = explode(" ", $name);
                        $img = implode("", $img_tmp);
                        $img = strtolower($img).".png";
                ?>
                    <div class="col-product-3">
                        <img src="img/product/<?php echo $img; ?>" alt="<?php echo $name; ?>">
                        <h3><?php echo $name; ?></h3>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>

                            </div>
                            <p>$<?php echo $price; ?></p>
                    </div>
                <?php
                    }
                ?>
                </div>
            </div>
    </div>

   <!-----NewArrival----->
   <div class="newArrival">
    <h2>New Arrival</h2>
        <div class="container-product">
            <div class="row">

            <?php

                for ($i=0; $i < count($new_arrivals); $i++) {
                    $raw_data = $new_arrivals[$i];
                    $data = explode(",", $raw_data);
                    $name = $data[1];
                    $price = $data[2];
                    $img_tmp = explode(" ", $name);
                    $img = implode("", $img_tmp);
                    $img = strtolower($img).".png";
            ?>
                <div class="col-product-4">
                    <img src="img/product/<?php echo $img; ?>" alt="<?php echo $name; ?>">
                    <h3><?php echo $name; ?></h3>
                    <p>$<?php echo $price ?></p>
                </div>
            <?php
                }
            ?>
            </div>
        </div>
</div>
<footer>
    <a class="footer-link" href="footerContents/copyright.html">
        <i class="far fa-copy"></i>
        <span class="des">Copy Right</span>
    </a>
    <a class="footer-link" href="footerContents/tos.html">
        <i class="fas fa-concierge-bell"></i>
        <span class="des">ToS</span>
    </a>
    <a class="footer-link" href="footerContents/privacypolicy.html">
        <i class="fas fa-user-secret"></i>
        <span class="des">Privacy policy</span>
    </a>
</footer>
<script src ="./js/product.js" ></script>

</body>
</html>