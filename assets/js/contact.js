$(document).on('click', '.a', function(e) {
        var $this = $('.panel-heading a');
        if (!$this.hasClass('panel-collapse')) {
            $this.parents('.panel').find('.panel-body').slideUp();
            $this.addClass('panel-collapse');
            $(document.body).addClass('body-scroll-disappear');
            $('.scroll-down_navigation').hide();
            $('.box-position').addClass('overflow-y');

        } else {
            $this.parents('.panel').find('.panel-body').slideDown();
            $this.removeClass('panel-collapse');
            $(document.body).removeClass('body-scroll-disappear');
            $('.scroll-down_navigation').show();
            $('.box-position').removeClass('overflow-y');
        }
    });