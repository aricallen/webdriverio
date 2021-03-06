/**
 *
 * Query the server's current status. The server should respond with a general
 * "HTTP 200 OK" response if it is alive and accepting commands. The response
 * body should be a JSON object describing the state of the server. All server
 * implementations should return two basic objects describing the server's
 * current platform and when the server was built. All fields are optional;
 * if omitted, the client should assume the value is uknown. Furthermore,
 * server implementations may include additional fields not listed here.
 *
 * | Key            | Type   | Description |
 * | -------------- | ------ | ----------- |
 * | build.version  | string | A generic release label (i.e. "2.0rc3") |
 * | build.revision | string | The revision of the local source control client from which the server was built |
 * | build.time     | string | A timestamp from when the server was built |
 * | os.arch        | string | The current system architecture |
 * | os.name        | string | The name of the operating system the server is currently running on: "windows", "linux", etc. |
 * | os.version     | string | The operating system version |
 *
 * @returns {Object} An object describing the general status of the server
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#GET_/status
 * @type protocol
 *
 */

let status = function () {
    return this.requestHandler.create({
        path: '/status',
        method: 'GET',
        requiresSession: false
    })
}

export default status
