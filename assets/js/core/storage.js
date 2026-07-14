/* ==========================================
   Kob_asan
   storage.js
========================================== */


/**
 * Local Storage Manager
 */

const KobStorage = {


    /**
     * Save Data
     */

    set(key, value) {

        try {

            const data =
                JSON.stringify(value);


            localStorage.setItem(
                key,
                data
            );


            return true;


        } catch(error) {

            console.error(
                "Storage Save Error:",
                error
            );


            return false;

        }

    },



    /**
     * Get Data
     */

    get(key) {

        try {

            const data =
                localStorage.getItem(key);


            if(data === null){

                return null;

            }


            return JSON.parse(data);


        } catch(error) {


            console.error(
                "Storage Load Error:",
                error
            );


            return null;

        }

    },



    /**
     * Remove Data
     */

    remove(key) {


        localStorage.removeItem(
            key
        );


    },



    /**
     * Clear All
     */

    clear() {


        localStorage.clear();


    }



};



/* Global */

window.KobStorage = KobStorage;