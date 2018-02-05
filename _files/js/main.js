$(document).ready(function(){
    $(document).on('click', '.payment_methods', function(){
        var id = $(this).attr('data-id');

        $('.payment_methods').find('.arrow-right').removeClass('active');
        $(this).find('.arrow-right').addClass('active');

        $('.payment_method_div').removeClass('active');
        $('#ui_rhs').find('#'+id).addClass('active');
    });


    $(document).on('click', '.payment_methods_xs', function(){
        var id = $(this).attr('data-id');

        $('.payment_methods_xs').find('.arrow-down').removeClass('active');
        $(this).find('.arrow-down').addClass('active');

        $('.payment_method_div').removeClass('active');
        $('#ui_rhs').find('#'+id).addClass('active');
    });
});