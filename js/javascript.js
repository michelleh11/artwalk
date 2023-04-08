// show pop-up once per session
$(document).ready(function () {

        var shown = sessionStorage.getItem('shown');
        if (shown != 'alrdyshown'){
            // show pop-up
            sessionStorage.setItem('shown','alrdyshown');
            document.getElementById('instructionOverlay').classList.remove('hidden');

        } else {
            // hide pop-up
            document.getElementById('instructionOverlay').classList.add('hidden');

        }

});

function instructionClose () {

    document.getElementById('instructionOverlay').classList.remove('show');
    document.getElementById('instructionOverlay').classList.add('hidden');
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


