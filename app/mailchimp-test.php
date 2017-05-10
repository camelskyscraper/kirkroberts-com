<?php

// 007bd93f02fda30704abdaddf1eb1569-us14

// https://us14.api.mailchimp.com/3.0/campaigns

include('./mailchimp-api-master/src/MailChimp.php');

use \DrewM\MailChimp\MailChimp;

$MailChimp = new MailChimp('007bd93f02fda30704abdaddf1eb1569-us14');

$result = $MailChimp->get('campaigns/7cbf83e0e5/content');

echo '<pre>';
print_r($result['archive_html']);
echo '</pre>';

?>
