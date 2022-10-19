// Copyright (c) 2020 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const hight = parseInt(document.getElementById("hight-of-triangle").value)
  const base = parseInt(document.getElementById("base-of-triangle").value)

  // process
  const hight_times_base = hight * base
  const area = hight_times_base / 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
