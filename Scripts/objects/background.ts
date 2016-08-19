module objects {
    export class Background extends createjs.Bitmap {
        /**
         * Creates an instance of Background.
         * 
         * @param {boolean} isCentered
         */
        constructor(imagePath: string) {
            super(imagePath);
        }

        public Hide() {
            this.visible = false;
        }

        public Show() {
            this.visible = true;
        }
    }
}

