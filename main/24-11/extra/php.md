PHP FILE PATH:
http://localhost:8081/

where its stored on the pc
C:\xampp\htdocs


❌fix this error
Port 80 in use by "Unable to open process" with PID 4!
16:28:34  [Apache] 	Apache WILL NOT start without the configured ports free!
16:28:34  [Apache] 	You need to uninstall/disable/reconfigure the blocking application
16:28:34  [Apache] 	or reconfigure Apache and the Control Panel to listen on a different port


services.src
disable
world wide web publishing service

configure xampp port -> config
(first two files)

httpd.config file:
changed 80 to 8081

https-ssl-config file:
change 443 to 44333

Apache/2.4.43 (Win64) OpenSSL/1.1.1g PHP/7.4.7 Server at localhost Port 8081


NORMAL FILE PATH:
http://127.0.0.1:5500/
