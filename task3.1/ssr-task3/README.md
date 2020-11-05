# Test assignment for frontend developer position

## Installation  

####First of all you need clone this [repository](https://bitbucket.org/Trainee_abz/test2020_viktor_p.abz.dev_t1)

`git clone https://abz_Viktor@bitbucket.org/Trainee_abz/test2020_viktor_p.abz.dev_t1.git`

###Local environment

####Install all dependencies
For that go to the root of project folder and run

`npm install`

####Run this project on your local machine 
With command

`npm run dev`

###Deployment

####There is no production or development server as this project is just test task
#####If you want to deploy an imitation of production server, follow next steps

* Clone cookbooks repository

`git clone https://abz_Viktor@bitbucket.org/Trainee_abz/test2020_viktor_p.abz.dev_cookbooks.git`

* Install [deployer](https://deployer.org/docs/installation.html)

* From root folder run 

`dep deploy dev`

*It can take some time to be executed*

**After that you can reach the site with [this link](https://task3-test2020viktor-p.abzdev2.com/)**

#####If you want to change some server setting than change config than you need and run
* Install [ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#) 
#####and run `ansible-playbook --verbose --inventory-file=dev_hosts.ini playbook.yaml` 
##### from root folder to apply settings you made. 