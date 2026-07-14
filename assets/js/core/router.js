/* ==========================================
   Kob_asan
   router.js
========================================== */


/**
 * Page Router
 */

const KobRouter = {


    /**
     * Existing Pages
     */

    pages: [

        "/",
        "/index.html",

        "/about.html",
        "/search.html",

        "/403.html",
        "/404.html",
        "/418.html",
        "/429.html",
        "/500.html",
        "/721.html"

    ],



    /**
     * Initialize
     */

    init(){


        this.checkPage();


    },



    /**
     * Check Current Page
     */

    checkPage(){


        const path =
            window.location.pathname;



        const file =
            path.split("/").pop();



        if(
            file === ""
        ){

            return;

        }



        const exists =
            this.pages.some(
                page =>
                    path.endsWith(page)
            );



        if(!exists){


            this.notFound();


        }


    },



    /**
     * Not Found Handler
     */

    notFound(){


        console.warn(
            "Kob_asan Router : Page Not Found"
        );


        location.href =
            "/404.html";


    }


};



/* Start */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        KobRouter.init();

    }
);



/* Global */

window.KobRouter = KobRouter;