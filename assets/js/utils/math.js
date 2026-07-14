/* ==========================================
   Kob_asan
   math.js
========================================== */


/**
 * Math Utility
 */

const KobMath = {


    /**
     * Average
     */

    average(
        numbers
    ){


        if(
            !Array.isArray(numbers)
            ||
            numbers.length === 0
        ){

            return 0;

        }


        const sum =
            numbers.reduce(
                (
                    total,
                    value
                ) => {

                    return total + value;

                },
                0
            );


        return (
            sum /
            numbers.length
        );


    },



    /**
     * Max
     */

    max(
        numbers
    ){


        return Math.max(
            ...numbers
        );


    },



    /**
     * Min
     */

    min(
        numbers
    ){


        return Math.min(
            ...numbers
        );


    },



    /**
     * Round
     */

    round(
        value,
        digits = 0
    ){


        const power =
            Math.pow(
                10,
                digits
            );


        return (
            Math.round(
                value * power
            )
            /
            power
        );


    },



    /**
     * Percentage
     */

    percentage(
        value,
        total
    ){


        if(total === 0){

            return 0;

        }


        return (
            value /
            total *
            100
        );


    }



};



/* Global */

window.KobMath = KobMath;