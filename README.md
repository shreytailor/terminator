<p align="center">
    <img src="./images/icon.png" width="80">
</p>

<h1>Terminator</h1>

<details>
    <summary>Table of Contents</summary>
    <ul>
        <li>
            <a href="#about-the-project">About The Project</a>
            <ul>
                <li>
                    <a href="#built-with">Built With</a>
                </li>
                <li>
                    <a href="#architecture">Architecture</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#getting-started">Getting Started</a>
        </li>
        <li>
            <a href="#development-setup">Development Setup</a>
        </li>
    </ul>
</details>

## About The Project

Terminator is an application that let's you remotely shutdown / restart / hibernate your computer from any device on your local network, using an intuitive web-interface as shown below.

<p align="center">
    <img src="./images/hero.png" width="500"/>
</p>

### Built With

Terminator is a full-stack application, so it consists of a frontend that was built using React and a backend using Express. The entire codebase is written using TypeScript for the type-safety and ease of development.

[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

### Architecture

For the sake of explanation, let's consider the _host device_ as the one we want to terminate, and a _local network device_ as any other device on the same local network as the host.

<p align="center">
    <img src="./images/architecture.png" width="500"/>
</p>

When Terminator is started on the host computer, it will host the frontend and backend on the network its connected on.

## Getting Started

To run the system, follow the instructions below.

1. Open your terminal and change the working directory to the project root (i.e., same level as the `packages` folder).
2. Make the script to run the system executable by running the following command.

```sh
chmod +x scripts/execute.sh
```

3. Finally, execute the system by running the following command.

```sh
scripts/execute.sh
```

Terminator will then locally start on Port `5556` on your computer, and will be accessible to any device on your network.

## Development Setup