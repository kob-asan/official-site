/* ==========================================
   Kob_asan
   about.js
========================================== */


/**
 * About Page
 */

const KobAbout = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".p-about"
            );


        if(!this.element){

            return;

        }


        this.setSiteName();


    },



    /**
     * Set Site Name
     */

    setSiteName() {


        const name =
            this.element.querySelector(
                ".p-about__site-name"
            );


        if(name){


            name.textContent =
                KobConfig.site.name;


        }


    }



};



/* Register */

KobLoader.register(
    () => {

        KobAbout.init();

    }
);



/* Global */

window.KobAbout = KobAbout;