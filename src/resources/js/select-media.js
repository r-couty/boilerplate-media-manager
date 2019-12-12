$(function () {
    $(document).on('click', '.btn-select-image, .btn-select-file', function () {
        $('body').css('overflow', 'hidden').append(
            '<div id="select-media-bg">' +
            '<div id="select-media-wrapper">' +
            '<div id="select-media-close"><span class="fa fa-times fa-2x mrm text-muted"></span></div>' +
            '<iframe src="' + $(this).data('src') + '"></iframe>' +
            '</div>' +
            '</div>');
    });

    $(document).on('click', '#select-media-close span', function () {
        $('#select-media-bg').remove();
    });

    window.onmessage = function (e) {
        if (e.data.action === 'insertMedia') {
            $('input[data-id=' + e.data.field + ']').val(e.data.url);

            if (e.data.type === 'image') {
                $('button[data-field=' + e.data.field + ']').html('<img src="'+e.data.url+'" />');
            }

            $('#select-media-bg').remove();
            $('body').css('overflow', 'auto');
        }
    };
});
