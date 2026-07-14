/* ==========================================
   Kob_asan
   toc.js
========================================== */


/**
 * Table Of Contents
 */

const KobToc = {


    container: null,



    /**
     * Initialize
     */

    init() {


        this.container =
            document.querySelector(
                ".c-toc"
            );


        if(!this.container){

            return;

        }


        this.generate();


    },



    /**
     * Generate TOC
     */

    generate() {


        const headings =
            document.querySelectorAll(
                "article h2, article h3"
            );


        if(
            headings.length === 0
        ){

            return;

        }



        const list =
            document.createElement(
                "ul"
            );



        headings.forEach(
            (heading,index)=>{


                const id =
                    `section-${index+1}`;


                heading.id =
                    id;



                const item =
                    document.createElement(
                        "li"
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    `#${id}`;


                link.textContent =
                    heading.textContent;



                item.appendChild(
                    link
                );


                list.appendChild(
                    item
                );


            }
        );



        this.container.appendChild(
            list
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobToc.init();

    }
);



/* Global */

window.KobToc = KobToc;