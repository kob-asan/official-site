/* ==========================================
   Kob_asan
   loader.js
========================================== */


/**
 * Application Loader
 */

const KobLoader = {


    tasks: [],



    /**
     * Register Task
     */

    register(task) {


        if(typeof task === "function") {

            this.tasks.push(task);

        }


    },



    /**
     * Execute Tasks
     */

    async run() {


        for(const task of this.tasks) {


            try {


                await task();


            } catch(error) {


                console.error(
                    "Loader Error:",
                    error
                );


            }


        }


    }



};



/**
 * DOM Ready
 */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        KobLoader.run();


    }
);



/* Global */

window.KobLoader = KobLoader;