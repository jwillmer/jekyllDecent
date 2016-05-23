(function ($, undefined) {
    var $document = $(document);

    $document.ready(function () {

        $("header").hover(
        function () {
            $(this).parent().children(".dropdown").show();
        }, function () {
            $(this).parent().children(".dropdown").hide();
        }
        );

    });
})(jQuery);