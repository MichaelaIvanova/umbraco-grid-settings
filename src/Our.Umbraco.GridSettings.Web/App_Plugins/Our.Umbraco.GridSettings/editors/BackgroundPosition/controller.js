(function () {
    'use strict';

    var viewCssPath = "/App_Plugins/Our.Umbraco.GridSettings/editors/BackgroundPosition/view.css";

    var controller = function ($scope, assetsService) {
        var xPositions = ["left", "center", "right"];
        var yPositions = ["top", "center", "bottom"];

        $scope.positions = [];

        assetsService.loadCss(viewCssPath);

        for (var yIndex = 0; yIndex < yPositions.length; yIndex++) {
            var currentYPosition = yPositions[yIndex];
            var row = { "cssClass": currentYPosition, "items": [] };

            for (var xIndex = 0; xIndex < xPositions.length; xIndex++) {
                var currentXPosition = xPositions[xIndex];
                var value = currentXPosition + " " + currentYPosition;

                row.items.push({
                    "cssClass": currentYPosition,
                    "value": value
                });
            }

            $scope.positions.push(row);
        };

        $scope.setValue = function (value) {
            $scope.model.value = value;
        }

        $scope.isValue = function (value) {
            return value === $scope.model.value;
        }
    };

    angular.module("umbraco").controller("Our.Umbraco.GridSettings.BackgroundPositionController", controller);
})();