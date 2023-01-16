    $(document).ready(function() {
            $(".btn").on('click', function() {
                $(".cover").fadeIn('slow');
                $(".popup").fadeIn('slow');
            });
            $(".popup").on('click', function() {
                if ($(event.target).is("#close")) {
                    $(".cover").fadeOut('slow');
                    $(".popup").fadeOut('slow');
                }
            });
        });