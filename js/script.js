$(document).ready(function(){
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
        $('.chat').append(clone);
        $('.message:last-of-type')[0].scrollIntoView();
        setTimeout(function(){
            var clone = $('.template .message').clone();
            var time = new Date();
            time = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
            clone.addClass('contact');
            clone.find('#text-content').text('Ciao');
            clone.find('#text-time').text(time);
            $('.chat').append(clone);
            $('.message:last-of-type')[0].scrollIntoView();
        },1000);
    }
}
