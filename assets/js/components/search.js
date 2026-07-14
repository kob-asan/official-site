/* ==========================================
   Kob_asan
   search.js
========================================== */


/**
 * Search Component
 */

const KobSearch = {


    forms: [],



    /**
     * Initialize
     */

    init() {


        this.forms =
            document.querySelectorAll(
                "form.p-home-search"
            );


        if(
            this.forms.length === 0
        ){

            return;

        }


        this.bind();


    },



    /**
     * Event Binding
     */

    bind() {


        this.forms.forEach(
            form => {


                form.addEventListener(
                    "submit",
                    event => {


                        this.handle(
                            event,
                            form
                        );


                    }
                );


            }
        );


    },



    /**
     * Submit Handler
     */

    handle(
        event,
        form
    ){


        const input =
            form.querySelector(
                "input[type='search']"
            );


        if(!input){

            return;

        }


        const keyword =
            input.value.trim();



        if(keyword === ""){


            event.preventDefault();


            input.focus();


            return;


        }



        /*
            現在はsearch.htmlへ渡すだけ
            後で検索エンジンを追加
        */


        input.value =
            keyword;



    }



};



/* Register */

KobLoader.register(
    () => {

        KobSearch.init();

    }
);



/* Global */

window.KobSearch = KobSearch;