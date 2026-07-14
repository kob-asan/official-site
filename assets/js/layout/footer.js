/* ==========================================
   Kob_asan
   footer.js
========================================== */


/**
 * Footer Manager
 */

const KobFooter = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".l-footer"
            );


        if(!this.element) {

            return;

        }


        this.updateYear();


    },



    /**
     * Update Copyright Year
     */

    updateYear() {


        const year =
            this.element.querySelector(
                ".l-footer__year"
            );


        if(year) {


            year.textContent =
                new Date()
                .getFullYear();


        }


    }



};



/* Register */

KobLoader.register(
    () => {

        KobFooter.init();

    }
);



/* Global */

window.KobFooter = KobFooter;