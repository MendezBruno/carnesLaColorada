export class LogsCustom {

    constructor () {}

    /**
     * mensaje que sera emitido por la consola en color por defecto
     * 
     * @param message mensaje que sera emitido por la consola
     */
    static log( message ) {
        console.log(message); 
    }

    /**
     * Mensaje que sera emitido por la consola de color rojo
     * 
     * @param message mensaje que sera emitido por la consola
     */
    static error(message) {
        console.log('%c' + message , "color: red; font-style: italic;" );
    }

    /**
     * Mensaje que sera emitido por la consola de color azul
     * 
     * @param message mensaje que sera emitido por la consola
     */
    static info(message) {
        console.log('%c' + message , "color: blue; font-style: italic;" );
    }

    /**
     * 
     * @param message Mensaja que sera emitido por la consola
     * @param color Color del mensaje
     */
    static customColorLog(message, color) {
        console.log('%c' + message , "color: "+ color +"; font-style: italic;" )
    }

}