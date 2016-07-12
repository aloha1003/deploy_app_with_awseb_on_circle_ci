#!/bin/sh
set -x
set -e
if [ ! -d "/home/ubuntu/.aws" ]; then
    mkdir /home/ubuntu/.aws
fi
if [ ! -f "/home/ubuntu/.aws/config" ]; then
    touch chmod 600 /home/ubuntu/.aws/config    
fi
echo "[profile eb-cli]" > /home/ubuntu/.aws/config
echo "aws_access_key_id=$AWS_ACCESS_KEY_ID" >> /home/ubuntu/.aws/config
echo "aws_secret_access_key=$AWS_SECRET_ACCESS_KEY" >> /home/ubuntu/.aws/config

mv .elasticbeanstalk/config.global.yml .elasticbeanstalk/config.yml

 

