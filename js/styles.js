/* Remove hash on page load */
window.onload = function() {
    /* Check if there's a hash in the URL */
    if (window.location.hash) {
        /* If there is, replace the hash with an empty string */
        window.history.replaceState({}, document.title, window.location.href.split('#')[0]);
    }
};

/* Remove hash from URL on button click */
function removeHash(){
    setTimeout(function(){
        history.replaceState("", document.title, window.location.pathname);
    }, 1);
}