$(document).ready(function() {
jQuery("time.timeago").timeago();

  $('#tweet-submit').css('display','none');
  $('#char-count').css('display','none');

  $('.tweet-compose').on('click', function (){
    $('#tweet-submit').css('display','initial');
    $('#char-count').css('display','initial');
    $(this).css('height','5em');
  });


$('.tweet-compose').on('keyup', function () {
  var count = $(".tweet-compose").val().length;
  $('#char-count').text(140 - count);
  if (count >= 130){
    $('#char-count').css('color','red');
  }
  if (count < 130){
    $('#char-count').css('color','black');
  }
   if ((count > 140)) {
    $('#tweet-submit').prop('disabled', true);
  }
  if ((count <= 140)) {
   $('#tweet-submit').prop('disabled', false);
 }
 $('#tweet-submit').on('click', function () {
   $('#char-count').text('140');
 });
  });
$('#tweet-submit').on('click', function () {
var tweetText = $('.tweet-compose').val();
var name = $(".tweeterName").text();
var time = $.timeago(new Date());
$('.tweet-compose').css('height','2.5em');
$('.tweet-compose').val('');
$('#stream').prepend(
  '<div class="tweet">' +
    '<div class="content">' +
      '<img class="avatar" src="img/alagoon.jpg" />' +
    '  <strong class="fullname">'+  name +'</strong>' +
      '<span class="username"> @'+  name +'</span>' +
      '<p class="tweet-text">' + tweetText + '</p>' +
      '<div class="tweet-actions">' +
        '<ul>' +
          '<li><span class="icon action-reply"></span> Reply</li>' +
        '  <li><span class="icon action-retweet"></span> Retweet</li>' +
        '  <li><span class="icon action-favorite"></span> Favorite</li>' +
        '  <li><span class="icon action-more"></span> More</li>' +
      '  </ul>' +
    '  </div>' +
    '  <div class="stats">' +
      '  <div class="retweets">' +
      '    <p class="num-retweets">30</p>' +
      '    <p>RETWEETS</p>' +
      '  </div>' +
      '  <div class="favorites">' +
      '    <p class="num-favorites">6</p>' +
      '    <p>FAVORITES</p>' +
      '  </div>' +
      '  <div class="users-interact">' +
        '  <div>' +
        '    <img src="img/alagoon.jpg" />' +
        '    <img src="img/vklimenko.jpg" />' +
        '  </div>' +
      '  </div>' +
        '<div class="time">' +
          '<time class="timeago" datetime="'+ time +'">' + time + '</time>' +
        '</div>' +
      '</div>' +
      '<div class="reply">' +
        '<img class="avatar" src="img/alagoon.jpg" />' +
        '<textarea class="tweet-compose" placeholder="Reply to @'+ name +'"/></textarea>' +
      '</div>' +
    '</div>' +
  '</div>'
);
$('.tweet-actions').hide();

$('.tweet').on('mouseenter', function () {
$(this).find('.tweet-actions').show();
});
$('.tweet').on('mouseleave', function () {

  $('.tweet-actions').hide();

});
$('.stats').hide();

$('.tweet').on('mouseleave', function () {

  $('.stats').hide();
});

$('.tweet').on('click', function () {
$(this).find('.stats').show();
});
});
$('.tweet-actions').hide();

$('.tweet').on('mouseenter', function () {
$(this).find('.tweet-actions').show();
});
$('.tweet').on('mouseleave', function () {

  $('.tweet-actions').hide();

});
$('.stats').hide();

$('.tweet').on('mouseleave', function () {

  $('.stats').hide();
});

$('.tweet').on('click', function () {
$(this).find('.stats').show();
});


});
