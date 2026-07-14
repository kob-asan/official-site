/* ==========================================
   Kob_asan
   header.js
========================================== */


/**
 * Header Manager
 */

const KobHeader = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".l-header"
            );


        if(!this.element) {

            return;

        }


        this.setCurrentPage();


        this.bindScroll();


    },



    /**
     * Current Page
     */

    setCurrentPage() {


        const links =
            document.querySelectorAll(
                ".c-navbar__link"
            );


        const current =
            location.pathname;


        links.forEach(
            link => {


                const href =
                    link.getAttribute(
                        "href"
                    );


                if(
                    href &&
                    current.includes(href)
                ){

                    link.classList.add(
                        "is-active"
                    );

                }


            }
        );


    },



    /**
     * Scroll Event
     */

    bindScroll() {


        window.addEventListener(
            "scroll",
            () => {


                if(
                    window.scrollY > 20
                ){

                    this.element
                        .classList
                        .add(
                            "is-scrolled"
                        );


                } else {


                    this.element
                        .classList
                        .remove(
                            "is-scrolled"
                        );


                }


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobHeader.init();

    }
);



/* Global */

window.KobHeader = KobHeader;