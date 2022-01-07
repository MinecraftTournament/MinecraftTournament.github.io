<?php
    $dbhost = 'localhost';
    $dbname='minecraft_tournament';
    $dbuser = 'postgres';
    $dbpass = '------';

    $dbconn = pg_connect("host=$dbhost dbname=$dbname user=$dbuser password=$dbpass")
        or die('Could not connect: ' . pg_last_error());

    $query = 'SELECT * FROM schedule';
    $result = pg_query($query) or die('Error message: ' . pg_last_error());

    while ($row = pg_fetch_row($result)) {
        var_dump($row);
    }

    pg_free_result($result);
    pg_close($dbconn);
?>