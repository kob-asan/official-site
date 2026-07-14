/* ==========================================
   Kob_asan
   color.js
========================================== */


/**
 * Color Utility
 */

const KobColor = {


    /**
     * Set CSS Variable
     */

    setVariable(
        name,
        value
    ){


        document.documentElement
            .style
            .setProperty(
                name,
                value
            );


    },



    /**
     * Get CSS Variable
     */

    getVariable(
        name
    ){


        return getComputedStyle(
            document.documentElement
        )
        .getPropertyValue(
            name
        )
        .trim();


    },



    /**
     * Hex To RGB
     */

    hexToRgb(
        hex
    ){


        const value =
            hex.replace(
                "#",
                ""
            );



        if(
            value.length !== 6
        ){

            return null;

        }



        return {

            r:
            parseInt(
                value.substring(0,2),
                16
            ),

            g:
            parseInt(
                value.substring(2,4),
                16
            ),

            b:
            parseInt(
                value.substring(4,6),
                16
            )

        };


    },



    /**
     * RGB To Hex
     */

    rgbToHex(
        r,
        g,
        b
    ){


        return (
            "#"
            +
            [r,g,b]
            .map(
                value =>
                    value
                    .toString(16)
                    .padStart(
                        2,
                        "0"
                    )
            )
            .join("")
        );


    }



};



/* Global */

window.KobColor = KobColor;