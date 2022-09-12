$(document).ready(function() {
    $('.loading-popup').on('click', function() {
        event.preventDefault();
        $('#loadingModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modal-dialog').removeClass('resized');
        $('#progress-bar').show();
        $('.progress-text-main').show();
        $('#brand-logo').show();
        $('#progress-done').hide();
        $('#progress-text-done').hide();
        $('.modal-backdrop').fadeIn();
        let redirectUrl = $(this).attr('href');
        let progressBar = $('.progress-bar');
        let percentVal = 0;
        let isPaused = false;
        let interval = window.setInterval(function() {
            if (!isPaused) {
                percentVal += 1;
            }
            progressBar.css("width", percentVal + '%').attr("aria-valuenow", percentVal + '%').text(percentVal + '%');
            switch (percentVal) {
                case 1:
                    $('.progress-text-main').html('Checking If Discount Is Still Available');
                    break;
                case 35:
                    isPaused = true;
                    setTimeout(function() {
                        $('.progress-text-main').text('Congratulations, Discount Has Been Applied!');
                        isPaused = false
                    }, 500);
                    break;
                case 55:
                    isPaused = true;
                    setTimeout(function() {
                        $('.progress-text-main').html('Checking For Available Stock');
                        isPaused = false
                    }, 500);
                    break;
                case 80:
                    isPaused = true;
                    setTimeout(function() {
                        $('.progress-text-main').text('Limited Stock is Available! Reserving It For You');
                        isPaused = false
                    }, 500);
                    break;
            }
            if (percentVal == 101) {
                clearInterval(interval);
                $('#progress-bar').hide();
                $('.progress-text-main').hide();
                $('#brand-logo').hide();
                $('#modal-dialog').addClass('resized');
                $('#progress-done').show();
                $('#progress-text-done').show();
                window.setInterval(function() {
                    window.location.href = redirectUrl;
                }, 2000);
            }
        }, 100);
    });
});