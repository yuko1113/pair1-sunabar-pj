# pair1-sunabar-pj

This application allows users to experience some of the features of internet banking.

# DEMO

<img width="1411" alt="スクリーンショット 2022-10-17 17 51 53" src="https://user-images.githubusercontent.com/94224160/196133738-5828d932-833b-47f4-b7c0-514773430798.png">

# Features

* Balance Confirmation
* deposit and withdrawal Confirmation
* payment made via bank deposit transfer
* account transfer

# Requirement

* docker
* docker-compose
* node.js
* Next.js
* TypeScript

# Project structure

```
├── next
│   ├── pages
│   └── ...
├── node_modules
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md
```

# Usage

```bash
git clone https://github.com/yuko1113/pair1-sunabar-pj.git
```
```bash
docker-compose run -w /usr/src/app/next --rm app npm install
```
```bash
docker-compose up -d
```

After the application start, navigate to http://localhost:3000 in your browser.

# Note

in preparation

# Author

* team pair1
