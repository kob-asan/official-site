/* ==========================================
   Kob_asan
   429.js
========================================== */


/**
 * Rate Limit Page
 */

const KobRateLimit = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-rate-limit"
            );


        if(!page){

            return;

        }


        this.waitAnimation();


    },



    /**
     * Waiting Animation
     */

    waitAnimation() {


        const elements =
            document.querySelectorAll(
                ".p-rate-limit__container > *"
            );



        elements.forEach(
            (
                element,
                index
            ) => {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(18px)";



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

        KobRateLimit.init();

    }
);



/* Global */

window.KobRateLimit = KobRateLimit;