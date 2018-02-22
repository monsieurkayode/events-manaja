# Events-Manaja
An online events manager app

## Hosted Application
https://events-manaja.herokuapp.com/

## API Documentation


## Installation 
1. Install [`node`](https://nodejs.org/en/download/), version 5 or greater

2. Install [`postgres`](https://www.postgresql.org/download/)

3. Clone the repo and cd into it

    ```
    git clone https://github.com/larrystone/events-manaja.git
    cd events-manaja
    ```

4. Install all dependencies

    ```
    npm install
    ```

5. Configure Postgres

    ```
    configure your database settings for development and test in
    `./server/config/config.json` using .env.example file template
    ```

6.  Run database migrations

    ```
    $ sequelize db:migrate
    ```

7. Start the app

    ```
    npm run start:dev
    ```

8. Run the application on browser

    ```
    http://localhost:3001/
    ```    

## Features
...

## Testing
...

## Limitations
...

## Built With
* [NodeJS](https://nodejs.org/en/) - A Javascript runtime built on chrome V8 engine that uses an event-driven non-blocking I/O model that makes it lightweight and efficient.
* [ExpressJs](https://expressjs.com/) - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Sequelize](http://docs.sequelizejs.com/) - An ORM for Node.js that supports the dialects of PostgreSQL and features solid transaction support an relations.
* [Postgres](https://www.postgresql.org/) - A powerful, open source object-relational database system.
* [React](https://www.reactjs.org/) - A JavaScript library for building user interfaces by Facebook.
* [Redux](http://redux.js.org/) - A predictable state container for JavaScript apps.

## Contributing
If you are interested in contributing to development of this project, follow the instructions below to contribute.

* Fork the repository

* Make your change

* Commit your change to your forked repository

* Provide a detailed commit description

* Raise a pull request against the develop branch

* Please see [Project wiki](https://github.com/larrystone/eventsmanager/wiki) for project conventions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## FAQ

#### Who can contribute?

    Anyone can! Just follow the contribution guidelines above
    
#### Is there a set standard for PRs to this repository?

    Yes please check the project wiki for project conventions.
    
#### Can I clone this application for personal use?

    Yes!. This application is licensed under MIT, and is open for
    everybody

## Author

* #dreamweave team