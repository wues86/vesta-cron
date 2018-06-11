$(function() {
  console.log('executed!');
  $(function () {
    //var minute = Math.floor(Math.random() * 59);
    //var hour = Math.floor((Math.random() * 6)+1);
    //var minute = '*/3';
    
    var minute = Math.floor(Math.random() * 39);
    var hour = 4;
    var other ='*';

    //fill fields
    $("input[name='v_min']").each(function () {
        this.value = minute;
    });
    $("input[name='v_hour']").each(function () {
        this.value = hour;
    });
    $("input[name='v_day']").each(function () {
        this.value = other;
    });
    $("input[name='v_month']").each(function () {
        this.value = other;
    });
    $("input[name='v_wday']").each(function () {
        this.value = other;
    });
    
    //cron details
    var cron = prompt("Fill cron details", "");
    //cron='wget /dev/null "http://wp/wp-cron.php?import_key=key&import_id='+ cron +'&action=trigger"';
    if (cron != null) {
    $("input[name='v_cmd']").each(function () {
          this.value = cron;
        });
    }

    //click submit
    $("input[name='ok']").each(function () {
        $(this).trigger('click');
    });
  });
});