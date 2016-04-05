/**
 * Created by lduer on 20.08.15.
 */

// detect if the current browser is IE or "MS Edge"
function isIE(userAgent) {
    userAgent = userAgent || navigator.userAgent;

    var html = document.getElementsByTagName('html')[0];

    var state = document.readyState
    if (['interactive', 'complete'].indexOf(document.readyState) > -1 && (typeof html.classList !== 'undefined') && (html.classList.contains('is-ie') || html.classList.contains('not-ie'))) {
        return html.classList.contains('is-ie');
    } else {
        if (html.className.indexOf("is-ie") > -1) {
            return true;
        }
        var isIE = userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
        if (isIE) {
            html.className += ' is-ie';
        } else {
            html.classList.add('not-ie');
        }
        return isIE;
    }
}

// add the stylesheet
function loadIEfallbackStyle(stylesheetUrl){
    var stylesheetUrl = stylesheetUrl||document.getElementById('js-fallback-script').src.replace('.js', '.css');
    var linkElem = document.createElement('link');

    linkElem.type = 'text/css';
    linkElem.rel = 'stylesheet';
    linkElem.href = stylesheetUrl;

    //document.head.appendChild(linkElem);
    document.head.insertBefore(linkElem, document.head.firstChild);
}

// call this after DOM is ready or just before the </body>-Tag
function modifySvgImage(className) {
    var className = className||'svg';

    var svgs = document.querySelectorAll('img[src*=".svg"]'), i;
    var replaceExtension = ((typeof Modernizr !== 'undefined') && !Modernizr.svg);

    if (svgs.length === 0 || (false === isIE() && false === replaceExtension)) {
        // break, if no svg image found
        return;
    }

    for (i = 0; i < svgs.length; ++i) {
        if (isIE()) {
            svgs[i].className += ' ' + className;
        }
        if (replaceExtension) {
            // browser is no capable with svg-images: replace them with .png images.
            svgs[i].src = svgs[i].src.replace('.svg', '.png');
        }
    }
}


if (isIE() && window.jQuery) {
    $(function(){
        // call function after dom is ready
        modifySvgImage('svg');
        loadIEfallbackStyle()
    });
} else if (isIE()) {
    //call addClassName() right before </body>
    var node = document.createTextNode('modifySvgImage("svg")');
    var scriptElem = document.createElement('script');
    scriptElem.type = 'text/javascript';
    scriptElem.appendChild(node);
    document.body.appendChild(scriptElem);

    loadIEfallbackStyle();
}
