/* ==========================================
   Kob_asan
   QR Generator
========================================== */

"use strict";



/* ==========================================
   Elements
========================================== */

const input =
    document.getElementById(
        "qrText"
    );

const qrArea =
    document.getElementById(
        "qrcode"
    );

const message =
    document.getElementById(
        "message"
    );

const generateButton =
    document.getElementById(
        "generateButton"
    );

const clearButton =
    document.getElementById(
        "clearButton"
    );



let qr = null;



/* ==========================================
   Message
========================================== */

function showMessage(

    text,

    isError = false

){

    message.textContent = text;

    message.style.color =

        isError

        ? "#ff8a8a"

        : "rgba(255,255,255,.75)";

}



/* ==========================================
   Reset QR
========================================== */

function clearQRCode(){

    qrArea.innerHTML = "";

    qr = null;

}



/* ==========================================
   Generate
========================================== */

function generateQRCode(){


    const value =
        input.value.trim();



    if(

        value === ""

    ){

        clearQRCode();

        showMessage(

            "テキストまたはURLを入力してください。",

            true

        );

        return;

    }



    clearQRCode();



    qr = new QRCode(

        qrArea,

        {

            text:value,

            width:256,

            height:256,

            colorDark:"#000000",

            colorLight:"#ffffff",

            correctLevel:

                QRCode.CorrectLevel.H

        }

    );



    showMessage(

        "QRコードを生成しました。"

    );

}



/* ==========================================
   Clear
========================================== */

function clearAll(){

    input.value = "";

    clearQRCode();

    showMessage("");

}



/* ==========================================
   Events
========================================== */

generateButton.addEventListener(

    "click",

    generateQRCode

);



clearButton.addEventListener(

    "click",

    clearAll

);



input.addEventListener(

    "keydown",

    event=>{

        if(

            event.key === "Enter"

        ){

            generateQRCode();

        }

    }

);



/* ==========================================
   Initial
========================================== */

showMessage(

    "URLやテキストを入力してください。"

);

/* ==========================================
   Download
========================================== */

const downloadButton =
    document.getElementById(
        "downloadButton"
    );



function downloadQRCode(){


    const canvas =
        qrArea.querySelector(
            "canvas"
        );



    const image =
        qrArea.querySelector(
            "img"
        );



    if(

        !canvas &&

        !image

    ){

        showMessage(

            "ダウンロードするQRコードがありません。",

            true

        );

        return;

    }



    const link =
        document.createElement(
            "a"
        );



    link.download =
        "qrcode.png";



    /* ---------- Canvas ---------- */

    if(canvas){

        link.href =
            canvas.toDataURL(
                "image/png"
            );

        link.click();

        showMessage(
            "PNGをダウンロードしました。"
        );

        return;

    }



    /* ---------- Image ---------- */

    if(image){

        fetch(image.src)

        .then(

            response=>

                response.blob()

        )

        .then(

            blob=>{

                link.href =
                    URL.createObjectURL(
                        blob
                    );

                link.click();



                setTimeout(

                    ()=>{

                        URL.revokeObjectURL(
                            link.href
                        );

                    },

                    100

                );



                showMessage(
                    "PNGをダウンロードしました。"
                );

            }

        )

        .catch(

            ()=>{

                showMessage(

                    "ダウンロードに失敗しました。",

                    true

                );

            }

        );

    }

}





/* ==========================================
   Download Event
========================================== */

downloadButton.addEventListener(

    "click",

    downloadQRCode

);