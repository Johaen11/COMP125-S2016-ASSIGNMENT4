var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Background = (function (_super) {
        __extends(Background, _super);
        /**
         * Creates an instance of Background.
         *
         * @param {boolean} isCentered
         */
        function Background(imagePath) {
            _super.call(this, imagePath);
        }
        Background.prototype.Hide = function () {
            this.visible = false;
        };
        Background.prototype.Show = function () {
            this.visible = true;
        };
        return Background;
    })(createjs.Bitmap);
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map