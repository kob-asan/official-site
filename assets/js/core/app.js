/* ==========================================
   Kob_asan
   app.js
========================================== */


/**
 * Kob_asan Application
 */

const KobApp = {


    /**
     * Initialize
     */

    init() {


        this.setupLoader();


        console.log(
            `${KobConfig.site.name} initialized`
        );


    },



    /**
     * Register Modules
     */

    setupLoader() {


        KobLoader.register(
            () => {

                this.ready();

            }
        );


    },



    /**
     * Ready
     */

    ready() {


        document.documentElement
            .classList
            .add(
                "is-loaded"
            );


    }



};



/**
 * Start Application
 */

KobApp.init();



/* Global */

window.KobApp = KobApp;