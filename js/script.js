$(document).ready(function(){
    $('.chat:first').addClass('active');
    $('.user:first').addClass('active');
    var img = $('.user:first').find('img').attr('src');
    $('.chat-info .left img').attr('src',img);
    var name = $('.user:first').find('.users-list-name').text();
    $('#name').text(name);

    $('.user').on('click', function(){
        $('.user.active').removeClass('active');
        $(this).addClass('active');
        var index = $(this).index();
        $('.chat.active').removeClass('active');
        $('.chat').eq(index).addClass('active');
        var name = $(this).find('.users-list-name').text();
        $('#name').text(name);
        var img = $(this).find('img').attr('src');
        $('.chat-info .left img').attr('src',img);
        var infoTime = $('.chat.active .message.contact:last-of-type').find('#text-time').text();
        if (infoTime == '') {
            $('#time').text('17:53');
        } else {
            $('#time').text(infoTime);
        }
    });





    $('.message:last-of-type')[0].scrollIntoView();
    $('#send').click(sendText);
    $('.create input').keydown(function(event){
        if (event.which == 13 || event.keyCode == 13 ) {
            sendText();
        }
    });

});

function sendText(){
    if ($('.create input').val() != ''){
        var clone = $('.template .message').clone();
        var text = $('.create input').val();
        var time = new Date();
        time = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
        $('.create input').val('');
        clone.addClass('user');
        clone.find('#text-content').text(text);
        clone.find('#text-time').text(time);
        $('.chat.active').append(clone);
        $('.message:last-of-type')[0].scrollIntoView();
        $('.user.active').find('.users-list-time').text(time);
        $('.user.active').find('.users-list-text').text(text);
        setTimeout(function(){
            var clone = $('.template .message').clone();
            var text = 'Ciao';
            var time = new Date();
            time = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
            clone.addClass('contact');
            clone.find('#text-content').text(text);
            clone.find('#text-time').text(time);
            $('.chat.active').append(clone);
            $('.message:last-of-type')[0].scrollIntoView();
            $('.user.active').find('.users-list-time').text(time);
            $('.user.active').find('.users-list-text').text(text);
            $('#time').text(time);
        },1000);

    }
}
