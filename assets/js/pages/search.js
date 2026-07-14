/* ==========================================
   Kob_asan
   search.js
========================================== */


/**
 * Search Page
 */

const KobSearchPage = {


    keyword: "",



    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-search"
            );


        if(!page){

            return;

        }


        this.keyword =
            this.getKeyword();


        this.display();


    },



    /**
     * Get Query
     */

    getKeyword() {


        const params =
            new URLSearchParams(
                location.search
            );


        return (
            params.get("q")
            || ""
        );


    },



    /**
     * Display Keyword
     */

    display() {


        const target =
            document.querySelector(
                ".p-search__keyword"
            );


        if(target){


            target.textContent =
                this.keyword;


        }


    }



};



/* Register */

KobLoader.register(
    () => {

        KobSearchPage.init();

    }
);



/* Global */

window.KobSearchPage = KobSearchPage;