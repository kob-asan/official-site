/* ==========================================
   Kob_asan
   article.js
========================================== */


/**
 * Article Page
 */

const KobArticle = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".p-article"
            );


        if(!this.element){

            return;

        }


        this.setup();


    },



    /**
     * Setup
     */

    setup() {


        this.markViewed();


    },



    /**
     * Save Viewed Article
     */

    markViewed() {


        const id =
            this.element.dataset.articleId;



        if(!id){

            return;

        }



        let history =
            KobStorage.get(
                "viewedArticles"
            );



        if(!Array.isArray(history)){

            history = [];

        }



        if(
            !history.includes(id)
        ){

            history.push(id);

        }



        KobStorage.set(
            "viewedArticles",
            history
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobArticle.init();

    }
);



/* Global */

window.KobArticle = KobArticle;