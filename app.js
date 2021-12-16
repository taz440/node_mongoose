require("./db/connection");
const yargs = require("yargs");

const { addMovie, listMovies } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addMovie({ title: args.title, actor: args.actor });
            break;
        case "list":
            listMovies();
            break;
        default:
            console.log("Incorrect Command");
            break;
    }
};

app(yargs.argv);