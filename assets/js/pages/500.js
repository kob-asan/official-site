/* ==========================================
   Kob_asan
   500.js
========================================== */


/**
 * System Error Page
 */

const KobSystemError = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-system-error"
            );


        if(!page){

            return;

        }


        this.recoveryAnimation();


    },



    /**
     * Recovery Animation
     */

    recoveryAnimation() {


        const elements =
            document.querySelectorAll(
                ".p-system-error__container > *"
            );



        elements.forEach(
            (
                element,
                index
            ) => {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(20px)";



                setTimeout(
                    () => {


                        element.style.transition =
                            "all .5s ease";


                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";


                    },
                    index * 160
                );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobSystemError.init();

    }
);



/* Global */

window.KobSystemError = KobSystemError;