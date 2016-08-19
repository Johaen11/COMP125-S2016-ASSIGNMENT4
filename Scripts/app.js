/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author Johaen Gnanakumar
 * @date August 19, 2016
 *
 * StudentID: 300880309
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var CANVAS_WIDTH = 250;
    var CANVAS_HEIGHT = 250;
    var stage;
    var diegoLabel;
    var yDirection = 1;
    var xDirection = 1;
    var dy = 1;
    var dx = 1;
    var bg1;
    var bg2;
    var frameCounter = 0;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        canvas.setAttribute("width", CANVAS_WIDTH.toString());
        canvas.setAttribute("height", CANVAS_HEIGHT.toString());
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    function mutateLabel() {
        // diegoLabel.skewX = Math.floor(Math.random() * 50) - 50;
        // diegoLabel.skewY = Math.floor(Math.random() * 30) - 30;
        diegoLabel.rotation += 5;
    }
    function changeBGImage() {
        if (bg1.isVisible()) {
            bg1.Hide();
            bg2.Show();
            diegoLabel.color = "yellow";
        }
        else {
            bg2.Hide();
            bg1.Show();
            diegoLabel.color = "blue";
        }
    }
    function gameLoop() {
        frameCounter++;
        if (frameCounter == 60) {
            frameCounter = 0;
            changeBGImage();
        }
        mutateLabel();
        //helloLabel.rotation += 5;
        // checkbounds for x and y
        diegoLabel.x = checkBounds(diegoLabel.x, CANVAS_WIDTH);
        diegoLabel.y = checkBounds(diegoLabel.y, CANVAS_HEIGHT);
        // change direction and speed for x and y
        if ((diegoLabel.y == CANVAS_HEIGHT) || (diegoLabel.y == 0)) {
            dy = Math.floor(Math.random() * 5) + 1;
            yDirection *= -1;
        }
        if ((diegoLabel.x == CANVAS_WIDTH) || (diegoLabel.x == 0)) {
            dx = Math.floor(Math.random() * 5) + 1;
            xDirection *= -1;
        }
        diegoLabel.y += (yDirection * dy);
        diegoLabel.x += (xDirection * dx);
        stage.update(); // refresh the stage container
    }
    function checkBounds(axis, boundary) {
        if (axis >= boundary) {
            axis = boundary;
        }
        if (axis <= 0) {
            axis = 0;
        }
        return axis;
    }
    function main() {
        bg1 = new objects.Background("Assets/images/background1.png");
        bg2 = new objects.Background("Assets/images/background2.png");
        stage.addChild(bg1);
        stage.addChild(bg2);
        diegoLabel = new objects.Label("Diego", "40px Consolas", "#0000FF", 0, 0, true);
        diegoLabel.x = 0.5 * (diegoLabel.getMeasuredWidth());
        diegoLabel.y = 0.5 * (diegoLabel.getMeasuredHeight());
        stage.addChild(diegoLabel);
        stage.on("click", changePage);
    }
    function changePage() {
        window.location.href = "http://johaenprofilewebsite.azurewebsites.net";
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map