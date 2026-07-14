/* ==========================================
   Kob_asan
   418.js
========================================== */


/**
 * Teapot Page
 */

const KobTeapot = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-teapot"
            );


        if(!page){

            return;

        }


        this.start();


    },



    /**
     * Start Animation
     */

    start() {


        const elements =
            document.querySelectorAll(
                ".p-teapot__container > *"
            );


        elements.forEach(
            (
                element,
                index
            ) => {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(15px)";


                setTimeout(
                    () => {


                        element.style.transition =
                            "all .5s ease";


                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";


                    },
                    index * 150
                );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobTeapot.init();

    }
);



/* Global */

window.KobTeapot = KobTeapot;