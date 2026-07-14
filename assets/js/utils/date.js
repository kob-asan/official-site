/* ==========================================
   Kob_asan
   date.js
========================================== */


/**
 * Date Utility
 */

const KobDate = {


    /**
     * Format Date
     */

    format(
        date,
        separator = "/"
    ){


        const d =
            new Date(
                date
            );


        const year =
            d.getFullYear();


        const month =
            String(
                d.getMonth() + 1
            )
            .padStart(
                2,
                "0"
            );


        const day =
            String(
                d.getDate()
            )
            .padStart(
                2,
                "0"
            );


        return (
            `${year}${separator}${month}${separator}${day}`
        );


    },



    /**
     * Current Year
     */

    year(){


        return new Date()
            .getFullYear();


    },



    /**
     * Difference Days
     */

    diffDays(
        first,
        second
    ){


        const a =
            new Date(
                first
            );


        const b =
            new Date(
                second
            );


        const diff =
            Math.abs(
                a - b
            );


        return Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    }



};



/* Global */

window.KobDate = KobDate;