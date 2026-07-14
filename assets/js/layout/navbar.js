/* ==========================================
   Kob_asan
   navbar.js
========================================== */


/**
 * Navbar Manager
 */

const KobNavbar = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".c-navbar"
            );


        if(!this.element) {

            return;

        }


        this.setup();


    },



    /**
     * Setup
     */

    setup() {


        const links =
            this.element.querySelectorAll(
                ".c-navbar__link"
            );


        links.forEach(
            link => {


                link.addEventListener(
                    "click",
                    () => {


                        this.close();


                    }
                );


            }
        );


    },



    /**
     * Close Menu
     */

    close() {


        if(this.element){

            this.element
                .classList
                .remove(
                    "is-open"
                );

        }


    },



    /**
     * Toggle Menu
     */

    toggle() {


        if(this.element){

            this.element
                .classList
                .toggle(
                    "is-open"
                );

        }


    }



};



/* Register */

KobLoader.register(
    () => {

        KobNavbar.init();

    }
);



/* Global */

window.KobNavbar = KobNavbar;