export class ArrayUtils {
    
    constructor() {
        console.log('cree el array utils');
    }
    

    /**
     * Remueve el elemento con ese indice del array si lo encuentra y lo devuelve
     * @param array array target
     * @param index elemento a remover
     * @returns el elemento removido o undefined si el indice esta fuera de rango
     */
    static removeAt<T>(array: Array<T>, index: number ): T {
        return index >= array.length ? undefined: array.splice(index,1)[0];
    }
    
    /**
     * Remueve el elemento del array si lo encuentra y lo devuelve 
     * @param array array target
     * @param item elemento a remover
     * @returns el elemento removido o undefined si no le encuentra
     */
    static remove<T>(array: Array<T>, item: T ): T {
        let index = array.indexOf(item);
        if ( index >= 0  ) { return this.removeAt(array, index) }
        else  { return undefined } 
    }

    /**
     * inserta un item en una posicion deteminada del array
     * @param array array target
     * @param item elemento a insertar
     * @param index posicion donde va a ser insertado el item
     * @return arraycon el item insertado
     */
    insertAt<T>(array: Array<T>,  item: T, index: number ):  Array<T> {
        return array.splice(index,0,item);
    }

    /**
     * @param array array target
     * @returns El ultimo elemento del array
     */
    static last<T>(array: Array<T>): T {
        return array.pop(); 
    } 
    
    /**
     * @param array array target
     * @returns El primer elemento del array
     */
    static first<T>(array: Array<T>): T {
        return array.shift();
    }
    
    /**
     * Funcion que verifica que todos los elementos del array cumpla con la condicion
     * @param array array target
     * @param condicion una funcion que se ejecuta por cada elemento de la lista y debe evaluarle una condicion 
     * @returns Booleano
     */
    static allSatisfy<T>(array: Array<T>, condicion: Function): boolean {
        return array.filter( (e) => { return condicion(e) } ).length == array.length;
    }
    
     /**
     * Funcion que  verifica que todos los elementos del array cumpla con la expresion
     * @param array array target
     * @param condicion una expresion que se ejecuta por cada elemento de la lista por ejemplo:  "==0" , " =='' " , ">= 100" 
     * @returns Booleano
     */
    static allSatisfyByExpression<T>(array: Array<T>, cuerpo: string, variable1?: string, variable2?: string, variable3?: string): boolean {
        let auxCuerpo = 'return ';
        let fun;
        auxCuerpo = auxCuerpo + cuerpo;
        if ( variable1 && variable2 && variable3 ) { fun = new Function ( variable1, variable2, variable3 , auxCuerpo ); }
        if ( variable1 && variable2 ) { fun = new Function ( variable1, variable2, auxCuerpo ); }
        if ( variable1 ) { fun = new Function ( variable1 , auxCuerpo ); }
        return array.filter( (e) => {return fun(e)} ).length == array.length;
    }


    /**
     * Funcion que verifica que al menos uno los elementos del array cumpla con la expresion
     * @param array array target
     * @param condicion una expresion que se ejecuta por cada elemento de la lista por ejemplo:  "==0" , " =='' " , ">= 100" 
     * @returns Booleano
     */
    static anySatisfyByExpression<T>(array: Array<T>, cuerpo: string, variable1?: string, variable2?: string, variable3?: string): boolean {
        const aReturn = 'return ';
        const aElement = 'e ';
        let fun;
        let auxCuerpo = aReturn + cuerpo;
        if ( variable1 && variable2 && variable3 ) { fun = new Function ( variable1, variable2, variable3 , auxCuerpo ); }
        if ( variable1 && variable2 ) { fun = new Function ( variable1, variable2, auxCuerpo ); }
        if ( variable1 ) { fun = new Function ( variable1 , auxCuerpo ); }
        if ( !(variable1 || variable2 || variable3) ) { fun = new Function ( 'e', aReturn + aElement + cuerpo  ); }
        return array.filter( (e) => {return fun(e)} ).length > 0;
    }

    /**
     * Funcion que verifica que al menos uno de los elementos del array cumpla con la condicion
     * @param array array target
     * @param condicion una funcion que se ejecuta por cada elemento de la lista y debe evaluarle una condicion 
     * @returns Booleano
     */
    static anySatisfy<T>(array: Array<T>, condicion: Function): boolean {
        return array.filter( (e) => { return condicion(e) } ).length > 0;
    }

    /**
     * devuelve un array con los elementos que no se encuetran en la interseccion
     * @param arraySurce array fuente 
     * @param arrayTarget array target
     * @return un array de tipo T
     */
    static difference<T>(arraySurce: Array<T>, arrayTarget: Array<T>): Array<T> {
        return  arraySurce.filter( (e) =>  {return !arrayTarget.includes(e) })
                .concat( arrayTarget.filter( (e) =>  {return !arraySurce.includes(e) }));
    }

    /**
     * devuelve un array con elementos que le falta al surce para ser como el target
     * @param arraySurce array fuente
     * @param arrayTarget array target
     * @return array de tipo T
     */
    static complement<T>(arraySurce: Array<T>, arrayTarget: Array<T>): Array<T> {
        return   arrayTarget.filter( (e) =>  { return !arraySurce.includes(e) });
    }

    /**
     * convierte los atributos de un objeto en un array de tipo any
     * @param object objecto target
     * @returns Array relleno con las propiedades del objeto target
     */
    static beArray( object: Object ): Array<any> {
        const res: Array<any> = [];
        Object.keys(object).forEach( attr => { 
            res.push(attr);
        });
        return res;
    }

    
    


    
    
}

