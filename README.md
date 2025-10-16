# Photon-B-UI

> scp -i /Users/cmabdullah/.ssh/ec4.pem -r build/* ec2-user@54.206.80.190:/tmp/medident-build/ 

> ssh -i /Users/cmabdullah/.ssh/ec4.pem ec2-user@54.206.80.190 "sudo cp -r /tmp/medident-build/* /var/www/html/ && sudo chown -R apache:apache /var/www/html && sudo chmod -R 755"

> ssh -i /Users/cmabdullah/.ssh/ec4.pem ec2-user@54.206.80.190 "sudo systemctl start httpd && sudo systemctl enable httpd && sudo systemctl status httpd"