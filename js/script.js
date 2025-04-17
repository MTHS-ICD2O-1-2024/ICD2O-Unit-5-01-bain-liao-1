// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

// eslint-disable-next-line no-unused-vars
function checkNumber() {
  const userNumber = parseInt(document.getElementById('user-number').value)

  if (userNumber === randomNumber) {
    document.getElementById('result').innerHTML =
      '<p>Correct! The number was: ' + randomNumber + '.</p>'
  }
  
    if (userNumber !== randomNumber) {
    document.getElementById('result').innerHTML =
      '<p>Wrong! The number was: ' + randomNumber + '.</p>'
  }
}
