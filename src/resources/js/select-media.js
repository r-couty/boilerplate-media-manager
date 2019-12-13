/** global: selectMediaLocales */
$(function () {
    $(document).on('click', '.btn-select-image, .btn-select-file', function (e) {
        $('body').css('overflow', 'hidden').append(
            '<div id="select-media-bg">' +
            '<div id="select-media-wrapper">' +
            '<div id="select-media-close">File manager<span class="fa fa-times text-muted"></span></div>' +
            '<iframe src="' + $(this).data('src') + '&selected=' + $('input[data-id=' + $(this).data('field') + ']').val() + '"></iframe>' +
            '</div>' +
            '</div>');
    });

    $(document).on('click', '#select-media-close span', function () {
        $('#select-media-bg').remove();
    });

    $(document).on('click', '.select-image-view', function (e) {
        e.preventDefault();
        window.open($(this).closest('.select-image-wrapper').find('input').val());
    });

    $(document).on('click', '.select-image-edit', function (e) {
        e.preventDefault();
        $(this).closest('.select-image-wrapper').find('.btn-select-image').trigger('click');
    });

    $(document).on('click', '.select-image-delete', function (e) {
        e.preventDefault();
        var wrapper = $(this).closest('.select-image-wrapper');
        bootbox.confirm(selectMediaLocales.confirm, function(r) {
            if(r === false) {
                return;
            }

            wrapper.removeClass('editable');
            wrapper.find('input').val('');
            wrapper.find('.btn-select-image').html('<span class="fa fa-image fa-3x"></span>');
        })
    });

    window.onmessage = function (e) {
        if (e.data.action === 'insertMedia') {
            $('input[data-id=' + e.data.field + ']').val(e.data.url);

            if (e.data.type === 'image') {
                $('button[data-field=' + e.data.field + ']').html('<img src="' + e.data.url + '" />');
                $('button[data-field=' + e.data.field + ']').parent().addClass('editable');
            }

            $('#select-media-bg').remove();
            $('body').css('overflow', 'auto');
        }
    };
});
