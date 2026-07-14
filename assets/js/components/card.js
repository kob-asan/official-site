/* ==========================================
   Kob_asan
   card.js
========================================== */


/**
 * Card Component
 */

const KobCard = {


    /**
     * Create Card
     */

    create(data) {


        const article =
            document.createElement(
                "article"
            );


        article.className =
            "c-card";



        article.innerHTML = `

            <div class="c-card__header">

                <h3 class="c-card__title">

                    ${data.title}

                </h3>

            </div>


            <div class="c-card__body">

                <p class="c-card__description">

                    ${data.description}

                </p>

            </div>


            <div class="c-card__footer">

                <a
                    class="c-button c-button--primary"
                    href="${data.link}">

                    開く

                </a>

            </div>

        `;



        return article;


    },



    /**
     * Render Cards
     */

    render(
        selector,
        items
    ){


        const container =
            document.querySelector(
                selector
            );


        if(!container){

            return;

        }



        items.forEach(
            item => {


                container.appendChild(
                    this.create(item)
                );


            }
        );


    }



};



/* Global */

window.KobCard = KobCard;