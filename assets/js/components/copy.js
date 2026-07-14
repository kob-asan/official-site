/* ==========================================
   Kob_asan
   copy.js
========================================== */


/**
 * Copy Component
 */

const KobCopy = {


    /**
     * Initialize
     */

    init() {


        const buttons =
            document.querySelectorAll(
                "[data-copy]"
            );


        buttons.forEach(
            button => {


                this.setup(
                    button
                );


            }
        );


    },



    /**
     * Setup
     */

    setup(button) {


        button.addEventListener(
            "click",
            async () => {


                const target =
                    document.querySelector(
                        button.dataset.copy
                    );



                if(!target){

                    return;

                }



                try {


                    await navigator.clipboard.writeText(
                        target.textContent
                    );



                    this.success(
                        button
                    );



                } catch(error) {


                    console.error(
                        "Copy Error:",
                        error
                    );


                }


            }
        );


    },



    /**
     * Success Message
     */

    success(button) {


        const original =
            button.textContent;



        button.textContent =
            "Copied!";



        setTimeout(
            () => {


                button.textContent =
                    original;


            },
            1500
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobCopy.init();

    }
);



/* Global */

window.KobCopy = KobCopy;