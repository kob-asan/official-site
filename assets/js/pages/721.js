/* ==========================================
   Kob_asan
   721.js
========================================== */


/**
 * Knowledge Shift Page
 */

const KobKnowledgeShift = {


    /**
     * Initialize
     */

    init() {


        const page =
            document.querySelector(
                ".p-knowledge"
            );


        if(!page){

            return;

        }


        this.start();


    },



    /**
     * Start Learning Core Animation
     */

    start() {


        const elements =
            document.querySelectorAll(
                ".p-knowledge__container > *"
            );



        elements.forEach(
            (
                element,
                index
            ) => {


                element.style.opacity =
                    "0";


                element.style.transform =
                    "translateY(20px)";



                setTimeout(
                    () => {


                        element.style.transition =
                            "all .5s ease";


                        element.style.opacity =
                            "1";


                        element.style.transform =
                            "translateY(0)";


                    },
                    index * 160
                );


            }
        );


        this.learningStatus();


    },



    /**
     * Learning Status
     */

    learningStatus() {


        const status =
            document.querySelector(
                ".p-knowledge__status span"
            );


        if(!status){

            return;

        }


        const messages = [

            "LEARNING MODE ACTIVE",

            "ANALYZING KNOWLEDGE",

            "ORGANIZING DATA",

            "READY"

        ];



        let index = 0;



        setInterval(
            () => {


                status.textContent =
                    messages[index];


                index++;


                if(index >= messages.length){

                    index = 0;

                }


            },
            2500
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobKnowledgeShift.init();

    }
);



/* Global */

window.KobKnowledgeShift = KobKnowledgeShift;