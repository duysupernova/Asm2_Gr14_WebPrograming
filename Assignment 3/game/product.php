<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="author" content="Khang Tran s3855823">
    <title>BOX | PRODUCT</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">    
    <link rel="stylesheet" href="css/headerandfooter.css" />
    <script src="https://kit.fontawesome.com/13954ad90d.js" crossorigin="anonymous"></script>
</head>

<?php

function sortCSVFile($file, $columnToSortByIndex = 0, $asc = true ){
    //1- prepare data
    $csvArray = array_map('str_getcsv', file($file));
    if(!$csvArray) return [];
    // 2- save the header
    $header = $csvArray[0];
    // 3- sort
    array_shift($csvArray);
    $temp_csv_array = array();
    for ($i=0; $i < count($csvArray); $i++) { 
        if($csvArray[$i][4] == "10"){
            $temp_csv_array[] = $csvArray[$i];
        }
    }

    $csvArray = $temp_csv_array;

    $cTiteles = [];
    foreach ($csvArray as $row){
        $cTiteles[] = $row[$columnToSortByIndex];
    }
    //the sorting has been taken from here
    if($asc){
        array_multisort($cTiteles, SORT_ASC, $csvArray);
    }else{
        array_multisort($cTiteles, SORT_DESC, $csvArray);
    }
    // 3- prepend the header again
     array_unshift($csvArray,$header);
     return $csvArray;
}

$path = "../products.csv";
$file = fopen($path,"r");
$counter = 1;

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
            }
        }
    }
    $counter++;
}
fclose($file);


$number_of_products = count($all_products);


$limit = 4;
$page = (isset($_GET['page']) && is_numeric($_GET['page']) ) ? $_GET['page'] : 1;
$paginationStart = ($page - 1) * $limit;
$no_of_lines = $number_of_products;

$allRecrods = $no_of_lines;

// Calculate total pages
$totalPages = ceil($allRecrods / $limit);

// Prev + Next
$prev = $page - 1;
$next = $page + 1;

$last_product = $paginationStart + $limit;


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

    <?php
        $sort_value = 1;
        if(isset($_GET['sort'])){
            $sort_value = $_GET['sort'];
        }

    ?>
    <div class="container-product">
        <div class="row rowProduct">
            <h1>All products</h1>
            <select onchange="sort_products()" id="sort_select">
                <option value="1" <?php echo ($sort_value == 1) ? "selected" : ""; ?>>Sort by default</option>
                <option value="2" <?php echo ($sort_value == 2) ? "selected" : ""; ?>>Sort A-Z</option>
                <option value="3" <?php echo ($sort_value == 3) ? "selected" : ""; ?>>Sort by Price</option>
                <option value="4" <?php echo ($sort_value == 4) ? "selected" : ""; ?>>Sort by Newest</option>
            </select>
        </div>
        <div class="row">
            
            <?php
                $sort_products = $all_products;
                $path = "../products.csv";
                if(isset($_GET['sort'])){
                    $sort_value = $_GET['sort'];

                    if($sort_value == 1){
                        $sort_products = sortCSVFile($path);
                    } else if($sort_value == 2){
                        $sort_products = sortCSVFile($path, 1);
                    } else if($sort_value == 3){
                        $sort_products = sortCSVFile($path, 2);
                    } else if($sort_value == 4){
                        $sort_products = sortCSVFile($path, 3, false);
                    } else{
                        $sort_products = sortCSVFile($path);
                    }
                } else{
                    $sort_products = sortCSVFile($path);
                }
                for ($i=0; $i < count($sort_products); $i++) {
                   if($i != 0){
                        if(($i > $paginationStart) && ($i < $last_product + 1)){
                            $data = $sort_products[$i];
                            $name = $data[1];
                            $price = $data[2];
                            $img_tmp = explode(" ", $name);
                            $img = implode("", $img_tmp);
                            $img = strtolower($img).".png";
            ?>
            
            <div class="col-product-4">
                <a href="1.html">
                    <img src="img/product/<?php echo $img; ?>" alt="<?php echo $name; ?>">
                </a>
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
                   }
                }
            ?>
            
            

        </div>
        <div class = "page-btn">
            
            <?php 
                if($page == 1){ 
            ?>
                    <span class="active_pagination"><i class="fa fa-arrow-left"></i></span>
            <?php
                } else{
            ?>
                    <span class="pagination_span" onclick="window.location.href='<?php echo "product.php?sort=".$sort_value."&page=". $prev; ?>'"><i class="fa fa-arrow-left"></i></span>
            <?php
                }
            ?>
            
            <?php for($i = 1; $i <= $totalPages; $i++ ): 

                if($page == $i){
                    ?>
                        <span class="active_pagination" onclick="window.location.href='#'"><?php echo $i; ?></span>
                    <?php
                } else{
                    ?>
                        <span class="pagination_span" onclick="window.location.href='product.php?sort=<?php echo $sort_value ?>&page=<?php echo $i; ?>'"><?php echo $i; ?></span>
                    <?php
                }
            ?>
                
            <?php endfor; ?>

            <?php 
                if($page >= $totalPages){ 
            ?>
                    <span class="active_pagination"><i class="fa fa-arrow-right"></i></span>
            <?php
                } else{
            ?>
                    <span class="pagination_span" onclick="window.location.href='<?php echo "product.php?sort=".$sort_value."&page=". $next; ?>'"><i class="fa fa-arrow-right"></i></span>
            <?php
                }
            ?>
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

    <script src="js/main.js"></script>
    <script src ="./js/product.js" ></script>

</body>
</html>