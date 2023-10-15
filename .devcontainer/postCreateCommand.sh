#!/bin/bash
set -eux

# aws cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm ./aws -rf
rm awscliv2.zip

# amplify cli
npm install -g @aws-amplify/cli@12.0.3

# front
npm install