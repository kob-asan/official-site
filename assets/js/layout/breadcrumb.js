/* ==========================================
   Kob_asan
   breadcrumb.js
========================================== */


/**
 * Breadcrumb Manager
 */

const KobBreadcrumb = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".c-breadcrumb"
            );


        if(!this.element) {

            return;

        }


        this.setCurrent();


    },



    /**
     * Set Current Page
     */

    setCurrent() {


        const current =
            this.element.querySelector(
                ".c-breadcrumb__current"
            );


        if(!current){

            return;

        }


        current.textContent =
            document.title;


    }



};



/* Register */

KobLoader.register(
    () => {

        KobBreadcrumb.init();

    }
);



/* Global */

window.KobBreadcrumb = KobBreadcrumb;