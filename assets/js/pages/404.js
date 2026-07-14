/* ==========================================
   Kob_asan
   404.js
========================================== */


/**
 * 404 Page
 */

const KobError = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-error"
            );


        if(!page){

            return;

        }


        this.animate();


    },



    /**
     * Animation
     */

    animate() {


        const elements =
            document.querySelectorAll(
                ".p-error__content > *"
            );


        elements.forEach(
            (element,index)=>{


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
                    index * 120
                );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobError.init();

    }
);



/* Global */

window.KobError = KobError;