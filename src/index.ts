import server from './server';

server.listen(server.get('port'), '0.0.0.0', () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), server.get('port'), server.get("env"))
    console.log("  Press CTRL-C to stop\n");
})
