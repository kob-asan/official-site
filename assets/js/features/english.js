/* ==========================================
   Kob_asan
   blog.js
========================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        const blogList =
            document.querySelector(
                "#blog-list"
            );



        if(!blogList){

            return;

        }

        const pagination =
    document.querySelector(
        "#blog-pagination"
    );


const postsPerPage = 10;


let currentPage = 1;


let posts = [];




        fetch(
            "pages/english/index.json"
        )


        .then(
            response => response.json()
        )


        .then(
            posts => {



                posts.forEach(
                    post => {



                        const article =
                            document.createElement(
                                "article"
                            );


                        article.className =
                            "c-card";





                        article.innerHTML = `

                            <h3>
                                ${post.title}
                            </h3>


                            <p>
                                ${post.description}
                            </p>


                            <span class="p-blog__date">
                                ${post.date}
                            </span>


                            <a
                            href="${post.url}"
                            class="p-blog__link">

                                Read More →

                            </a>

                        `;



                        blogList.appendChild(
                            article
                        );


                    }
                );


            }

        )


        .catch(
            error => {


                console.error(
                    "Blog loading error:",
                    error
                );


            }
        );


    }
);