/* ==========================================
   Kob_asan
   home.js
========================================== */


/**
 * Home Page
 */

const KobHome = {


    /**
     * Initialize
     */

    init() {


        this.hero();


        this.cards();


    },



    /**
     * Hero
     */

    hero() {


        const hero =
            document.querySelector(
                ".p-home-hero"
            );


        if(!hero){

            return;

        }



        hero.classList.add(
            "is-ready"
        );


    },



    /**
     * Cards
     */

    cards() {


        const cards =
            document.querySelectorAll(
                ".c-card"
            );


        cards.forEach(
            (card,index)=>{


                card.style
                    .setProperty(
                        "--card-index",
                        index
                    );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {


        KobHome.init();


    }
);



/* Global */

window.KobHome = KobHome;