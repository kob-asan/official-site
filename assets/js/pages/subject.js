/* ==========================================
   Kob_asan
   subject.js
========================================== */


/**
 * Subject Page
 */

const KobSubject = {


    element: null,



    /**
     * Initialize
     */

    init() {


        this.element =
            document.querySelector(
                ".p-subject"
            );


        if(!this.element){

            return;

        }


        this.load();


    },



    /**
     * Load Subject Data
     */

    load() {


        const subject =
            this.element.dataset.subject;



        if(!subject){

            return;

        }



        console.log(
            `Subject: ${subject}`
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobSubject.init();

    }
);



/* Global */

window.KobSubject = KobSubject;