/* ==========================================
   Kob_asan
   403.js
========================================== */


/**
 * Forbidden Page
 */

const KobForbidden = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-forbidden"
            );


        if(!page){

            return;

        }


        this.lockAnimation();


    },



    /**
     * Lock Screen Animation
     */

    lockAnimation() {


        const elements =
            document.querySelectorAll(
                ".p-forbidden__container > *"
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
                            "all .45s ease";


                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";


                    },
                    index * 130
                );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobForbidden.init();

    }
);



/* Global */

window.KobForbidden = KobForbidden;