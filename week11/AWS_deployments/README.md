# What is AWS? 

`AWS` is Amazon's cloud service.
it lets you:
1. Rent servers.
2. Manage domains. 
3. Upload objects (mp4 files, jpegs, mp3s ...).
4. Autoscale servers.
5. Create Kubernetes clusters. 

---

# EC2 servers:

VMs on AWS are called `EC2 servers`
EC2 stands for Elastic compute Version 2. 
1. `Elastic` - Can increase/decrease the size of the machines.
2. `compute` - it is a machine
you can spin up a new EC2 instance from the AWS dashboard.

Simple Explanation: It allows you to rent server on AWS Datacenter.

> Note- We cannot host on our local machine since we need a public IP which are limited.

## SSH: Secure Shell
 
It is a protocol used to connect to AWS.
It is used to securely connect to the shell of the AWS VM.
For this we need: 
- A certificate 
- SSH command


> Ports by default:- 

- HTTP --> 80 
- HTTPS --> 443

for HTTP if we don't specify the port, for example 3.5.10.11: then the port is assumed to be 80

---

## Connecting to SSH:
To connect to the instance on AWS we need the temp key assigned locally in a temp file downloaded in aws. 

```bash 
ssh -i temp_key_file ubuntu@public_ip_on-AWS_instanc
```
if we run this command first we will get an error: `unprotected private key`. To fix it we have to first run: 

```bash
chmod 700 temp_key_file
```

Example of a tempkey: test-key.pem

---

## Install Node.js on the VM.

here we use nvm on the bash to install Node.js

```bash
$curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```