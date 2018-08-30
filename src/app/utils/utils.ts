export class Utils {

  // Quizas se pueda definir en main.ts y evitar el import

  static log(a: any, b?: any) {
    console.log(a,b);
  }

  // https://stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript

  static isBlank(str: string): boolean {
    return (!str || /^\s*$/.test(str));
  }

  static isNotBlank(str: string): boolean {
    return !Utils.isBlank(str);
  }

  static isNotUndefined(object: any): boolean {
    return (object != undefined && object != null);
  }

  /**
   * Agrega digitos para llegar a la longitud deseada. Nunca saca digitos
   */
  static leftPadNumber (n: number, numDigits: number): string {
    let res: string = "" + n;
    while (res.length < numDigits) {
        res = "0" + res;
    }
    return res;
  }

  static getDateDDMMAAAA(): string {
    const date: Date = new Date();
    return Utils.leftPadNumber(date.getDate(),2) + Utils.leftPadNumber(date.getMonth() + 1,2) + date.getFullYear();
  }

  static getDateOfToday(): string {
    const date: Date = new Date();
    return date.getFullYear() + "-" + Utils.leftPadNumber(date.getMonth() + 1,2) + "-" + Utils.leftPadNumber(date.getDate(),2);
  }
  static getDateOfTodayAnotherFormat(): string {
    const date: Date = new Date();
    return Utils.leftPadNumber(date.getDate(),2) + "/" + Utils.leftPadNumber(date.getMonth() + 1,2) + "/" + date.getFullYear() ;
  }

  
  /**
   * Retona la fecha de hoy para asignarla a un datepicker
   */
  static getFechaParaDatePicker() {
    const date = new Date();
    return {year: date.getFullYear(), month: date.getMonth(), day: date.getDate()};
  }

  static getTimeError(): string {
    const date: Date = new Date();
    return Utils.leftPadNumber(date.getHours(),2) + ":" + 
           Utils.leftPadNumber(date.getMinutes(),2) + ":" + 
           Utils.leftPadNumber(date.getSeconds(),2) + " " + 
           Utils.leftPadNumber(date.getDate(),2) + "/" +
           Utils.leftPadNumber(date.getMonth() + 1,2);
  }

  static construirObjetoArray(lista: string[]) {
    let obj = {};
    for (let p of lista) {
        obj[p.replace("-","_")] = true;
    }
    return obj;
  }

  static formatearFecha(fecha: any): string {
    return fecha.year + '-' + Utils.leftPadNumber(fecha.month,2) + '-' + Utils.leftPadNumber(fecha.day,2);
  }


  static formatearFechaConsulta(fecha):string{
    if(fecha || fecha != '0001-01-01'){
      let año = fecha.substring(0,4);
      let mes = fecha.substring(5,7);
      let dia = fecha.substring(8,10);
      return dia+"/"+mes+"/"+año;
    }
    return "";
  }

  static formatearFechaAlta(fecha: string):string{
    if(fecha){
      let dia = fecha.substring(0,2);
      let mes = fecha.substring(3,5);
      let año = fecha.substring(6,10);
      return año+"-"+mes+"-"+dia;
    }
    return "";
  }



  

  // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

  static base64_to_blob(base64: string, tipo: string): Blob {

    let byteCharacters: string = atob(base64);

    // console.log("byteCharacters");
    // console.log(byteCharacters);

    let byteNumbers: any[] = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    // console.log("byteNumbers :");
    // console.log(byteNumbers);

    let byteArray: Uint8Array = new Uint8Array(byteNumbers);

    return new Blob([byteArray], {type: tipo});
  }

  static stringToNumber(numero: string) {
    return Number(numero);
  }

  static numberToString(numero: number) {
    return String(numero);
  }
  
  //Getters que retornan los permisos si es que los tienen
 

  static formCheckConversor(checkValue : boolean ): string{
    if(checkValue) { return 'S' }
    else { return 'N' }
  }


   /**
   * Cambia el estado de todos los botones, si state true entonces deshabilita todos los botones
   * @param rowset 
   */
  static changeButtonSate(rowset: any[], data: any, state: boolean) {
    rowset.forEach(e => { if(e != data) e.buttonDisabled = state})
  }
  // ordenar de menor a mayor
  static sortmaM(a: any , b: any) {
    if ( a < b ) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }  
  }
 
}


