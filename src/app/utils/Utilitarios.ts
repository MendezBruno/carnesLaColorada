import { Utils } from "./utils";



export class Utilitarios {
    
    static newDateToBackend() {
        return this.convertDateTobackend(new Date())
    }

    static newDateWithHourToBackend() {
        let date: Date = new Date()
        return this.convertDateTobackend(date) + date.getHours() + '.' + date.getMinutes() + '.' + date.getSeconds()
    }

    /**
     * Retorna un string con formato YYYY-MM-DD para enviar a Backend
     * @param date Objeto de tipo Date
     */
    static convertDateTobackend(date: Date): string {
        if(date) {
            return date.getFullYear() +"-"+ Utils.leftPadNumber(date.getMonth() + 1,2)+"-"+ Utils.leftPadNumber(date.getDate(),2);
        } else {
            return ''
        }
    }

    static soloCeros(numero: number): string {
        let n: string = ''
        for(let i = 0; i < numero; i++) n = n.concat('0')
        return n
    }



    static rellenarConCeros(numero: string, cantidad: number) {
        for(let i = 0; i < cantidad; i++) {
            numero = '0' + numero
        }
        return numero
    }

    static rellenarCerosDelante(numero: string, cantidadEntera: number): string {
        let longitud = numero.length
        while(longitud < cantidadEntera) {
            numero = '0' + numero
            longitud++
        }
        return numero
    }

    static rellenarCerosAtras(numero: string, cantidadDecimal: number): string {
        let longitud = numero.length
        while(longitud < cantidadDecimal) {
            numero = numero + '0'
            longitud++
        }
        return numero
    }

 

    /**
     * Retorna un objeto Date para ser asignado a un calendario
     * @param date Fecha con formato YYYY-MM-DD que recibo de Backend
     */
    static convertDateFromBackend(date: string): Date {
        if(date.trim() == '' || date.trim() == '0001-01-01') {
            console.log("DATE", date)
            return null
        } else {
            let fecha: Date = new Date();
            let year: string = date.substring(0, 4);
            let month: string = date.substring(5, 7);
            let day: string = date.substring(8);       
            fecha.setDate(this.stringToNumber(day));
            fecha.setMonth(this.stringToNumber(month) - 1);
            fecha.setFullYear(this.stringToNumber(year));
            return fecha
        }
    }

    /**
     * Retorna true si la primer fecha es menor que la segunda
     * @param date1 
     * @param date2 
     */
    static compararFechas(date1: Date, date2: Date): boolean {
        if(date1.getFullYear() < date2.getFullYear()) { return true }
        else {
            if(date1.getFullYear() == date2.getFullYear()) {
                if(date1.getMonth() < date2.getMonth()) { return true }
                else {
                    if(date1.getMonth() == date2.getMonth()) {
                        if(date1.getDay() < date2.getDay()) { return true }
                        else {
                            return false
                        }
                    }
                    return false
                }
            }
            return false
        }
    }


      /*
        * Toma un numero con o sin coma y elimina los ceros redundantes
        * 
        * 0120   -> 120
        * 012,30 -> 12,3
        * 0,0    -> 0,0
        * 0      -> 0
        * */
      
       static sinCeros(num: string): string {
        let trimed = num.trim();
        let posicionComa = trimed.indexOf(".");
        if (posicionComa == -1) {
            return this.sacarCerosAdelante(trimed);
        } else {
            let antesComa = trimed.substring(0,posicionComa);
            let despuesComa = trimed.substring(posicionComa + 1).replace(/0+$/, '');
            if (despuesComa == "") {
                    despuesComa = "0";
            }
            return this.sacarCerosAdelante(antesComa) + "." + despuesComa;
        }
    }
  
    static sacarCerosAdelante(num: string): string {
        let res = num.trim().replace(/^0+/, '');
        if (res == "")
            return "0";
        else
            return res;
    }

    static sacarCerosAdelanteParaExcel(num: string): string {
        if(num) {
            let res = num.replace(/^0+/, '');
            if (res == "")
                return "0";
            else
                return res;
    
        } else {
            return ''
        }
    }

    static sinCerosExcel(numero: string): string {
        if(numero) {
            let trimed = numero.trim();
            let posicionComa = trimed.indexOf(",");
            if (posicionComa == -1) {
                return this.sacarCerosAdelanteParaExcel(trimed);
            } else {
                let antesComa = trimed.substring(0,posicionComa);
                let despuesComa = trimed.substring(posicionComa + 1).replace(/0+$/, '');
                if (despuesComa == "") {
                        despuesComa = "0";
                }
                return this.sacarCerosAdelanteParaExcel(antesComa) + "." + despuesComa;
            }    
        } else {
            return ''
        }
    }


    /**
     * Convierte un String en un Number
     * @param value Parametro de tipo String
     */
    static stringToNumber(value: string): number {
        return Number(value)
    }

     /**
     * Convierte un Number en un String
     * @param value Parametro de tipo number
     */
    static numberToString(value: number): string {
        return String(value)
    }

    static quitarLetraCodigoPaises(codigo: string) {
        if(codigo == null) return ''
        return codigo.replace('E', '')
    }
    
    static filterComillas(frase: string): string {
        if(frase == null) return ''
        return frase.trim().replace(/"+/g, '\'')
    }
    
    static quitarGuiones(cuit: string) {
        if(cuit == null) return ''
        else
            {   
                return cuit.replace(/-+/g, '');
            }
    }
    /**
     * Filtra comillas y convierte el string a mayusculas
     * @param palabra 
     */
    static toUpperCase(palabra: string): string {    
        return this.filterComillas(palabra).toUpperCase()
    }

  

}