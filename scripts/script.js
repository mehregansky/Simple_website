$(window.document).ready(function() {
 $('.tab-links-item').click(function() {
  if( !$(this).hasClass('active') ) {
   // update tabs
   $(this).siblings().removeClass('active');
   $(this).addClass('active');
// update panes
   var $targetPane = $($(this).attr('href'));
$targetPane.siblings().hide();
   $targetPane.show();
  }
 });
});