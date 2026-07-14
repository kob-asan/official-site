/* ==========================================
   Kob_asan
   accordion.js
========================================== */


/**
 * Accordion Component
 */

const KobAccordion = {


    /**
     * Initialize
     */

    init() {


        const items =
            document.querySelectorAll(
                ".c-accordion"
            );


        items.forEach(
            item => {


                this.setup(
                    item
                );


            }
        );


    },



    /**
     * Setup
     */

    setup(item) {


        const button =
            item.querySelector(
                "[data-accordion-button]"
            );


        const content =
            item.querySelector(
                "[data-accordion-content]"
            );


        if(
            !button ||
            !content
        ){

            return;

        }



        button.addEventListener(
            "click",
            () => {


                const open =
                    item.classList.contains(
                        "is-open"
                    );



                if(open){


                    this.close(
                        item
                    );


                }else{


                    this.open(
                        item
                    );


                }


            }
        );


    },



    /**
     * Open
     */

    open(item) {


        item.classList.add(
            "is-open"
        );


    },



    /**
     * Close
     */

    close(item) {


        item.classList.remove(
            "is-open"
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobAccordion.init();

    }
);



/* Global */

window.KobAccordion = KobAccordion;