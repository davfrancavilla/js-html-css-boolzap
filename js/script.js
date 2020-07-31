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
            $('#time').text('10:10');
        } else {
            $('#time').text(infoTime);
        }
        $('.message:last-of-type')[0].scrollIntoView();
    });

    $('.message:last-of-type')[0].scrollIntoView();
    $('#send').click(sendText);
    $('.create input').keydown(function(event){
        if (event.which == 13 || event.keyCode == 13 ) {
            sendText();
        }
    });


    $('.search input').keyup(function(){
        var searchVal = $('.search input').val().toLowerCase();

        $('.user').each(function(){
                var name = $(this).find('.users-list-name').text().toLowerCase();
                if (contains(name,searchVal)) {
                    $(this).removeClass('hide');
                } else {
                    $(this).addClass('hide');
                }
        });
    });
});

function sendText(){
    if ($('.create input').val() != ''){
        var text = $('.create input').val();
        createText(text,'user');
        $('.create input').val('');
        setTimeout(function(){
            createText('Ciao','contact');
            var time = getTime();
            $('#time').text(time);
        },1000);

    }
}

function createText(text, className){
    var clone = $('.template .message').clone();
    var text = text;
    var time = getTime();
    clone.addClass(className);
    clone.find('#text-content').text(text);
    clone.find('#text-time').text(time);
    $('.chat.active').append(clone);
    $('.message:last-of-type')[0].scrollIntoView();
    $('.user.active').find('.users-list-time').text(time);
    $('.user.active').find('.users-list-text').text(text);
}

function getTime(){
    var time = new Date();
    time = time.getHours() + ':' + time.getMinutes().toString().padStart(2, '0');
    return time;
}

function contains(array, element){
    for (var i=0; i<array.length; i++) {
        if (array.indexOf(element) != -1){
            return true;
        }
    }
    return false;
}
