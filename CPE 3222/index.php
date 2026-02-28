<?php
// Given floating number 
$number = 6.7;

// Round to nearest whole number
$rounded = round($number);

// Round up to nearest whole number
$roundedUp = ceil($number);

// Round down to nearest whole number
$roundedDown = floor($number);

// Display results
echo "Original number: " . $number . "<br>";
echo "Rounded (nearest whole number): " . $rounded . "<br>";
echo "Rounded Up (ceil): " . $roundedUp . "<br>";
echo "Rounded Down (floor): " . $roundedDown . "<br>";
?>