import { TestBed, async } from '@angular/core/testing';
import { ArrayUtils } from './arrayUtils';


describe('ArrayUtils', () => {



  beforeEach(async(() => {
    this.arrayTest = ['1','2','3'];
    this.arrayUtils = new ArrayUtils();
  }));

  it('should create arrayUtils', async(() => {
    let arrayU = new ArrayUtils();
    expect(arrayU).toBeTruthy();
  }));

  it('should create arrayTest in beforeEach', async(() => {
    expect(this.arrayTest).toBeTruthy();
  }));

  it('should have arrayTest 3 items', async(() => {
    expect(this.arrayTest.length).toBe(3);
  }));

  it('arrayTest debe contener el elemento 1 y 3 al borrarle el 2', async(() => {
    let removed = ArrayUtils.remove(this.arrayTest,'2')
    expect( removed ).toBe('2');
    expect( this.arrayTest.length ).toBe(2);
    console.log(this.arrayTest);
    console.log(removed);
  }));

  it('arrayTest debe contener el elemento 1 , 2 y 3 porque quise borrar el 4 y ademas el elemento removido debe ser undefinded', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let removed = ArrayUtils.remove(arrayTest,'4')
    expect( removed ).toBe(undefined);
    expect( arrayTest.length ).toBe(3);
    console.log(arrayTest);
    console.log(removed);
  }));

  it('arrayTest debe contener el elemento 1 , 2 y 3 porque quise borrar el indice 3 y ademas el elemento removido debe ser undefinded', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let removed = ArrayUtils.removeAt(arrayTest,3);
    expect( removed ).toBe(undefined);
    expect( arrayTest.length ).toBe(3);
    console.log(arrayTest);
    console.log(removed);
  }));

  it('debe remover el ultimo y devolverlo', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let last = ArrayUtils.last(arrayTest);
    expect(last).toBe('3');
    expect(arrayTest.length).toBe(2);
  }));

  it('debe remover el primero y devolverlo', async(() => {
    let arrayTest: Array<any> = ['1','2','3'];
    let last = ArrayUtils.first(arrayTest);
    expect(last).toBe('1');
    expect(arrayTest.length).toBe(2);
  }));

  it('debe devolver true si todos los elementos de la lista cumple la condicion de la funcion', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let circulo3 = new Circulo();
    let arrayTest: Array<Shape> = [circulo, circulo2, circulo3];
    expect(ArrayUtils.allSatisfy(arrayTest, (shape) => {return shape.tipo == 'Circulo'})).toBeTruthy();
  }));


  it('debe devolver false porque uno de los elementos de la lista NO cumple la condicion de la funcion', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let cuadrado = new Cuadrado();
    let arrayTest: Array<Shape> = [circulo, circulo2, cuadrado];
    expect(ArrayUtils.allSatisfy(arrayTest, (shape) => {return shape.tipo == 'Circulo'} )).toBeFalsy();
  }));

  it('debe devolver true si todos los elementos de la lista cumple la condicion de la expresion', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let circulo3 = new Circulo();
    let arrayTest: Array<Shape> = [circulo, circulo2, circulo3];
    expect(ArrayUtils.allSatisfyByExpression(arrayTest, 'shape.tipo === "Circulo"', 'shape')).toBeTruthy();
  }));


  it('debe devolver false porque uno de los elementos de la lista NO cumple la condicion de la expresion', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let cuadrado = new Cuadrado();
    let arrayTest: Array<Shape> = [circulo, circulo2, cuadrado];
    expect(ArrayUtils.allSatisfyByExpression(arrayTest, 'shape.tipo === "Circulo"', 'shape' )).toBeFalsy();
  }));


  it('debe devolver true si alguno de los elementos de la lista cumple la condicion de la funcion', async(() => {
    let circulo = new Circulo();
    let cuadrado = new Cuadrado();
    let cuadrado1 = new Cuadrado();
    let arrayTest: Array<Shape> = [circulo, cuadrado, cuadrado1];
    expect(ArrayUtils.anySatisfy(arrayTest, (shape) => {return shape.tipo == 'Circulo'})).toBeTruthy();
  }));

  it('debe devolver false porque ninguno de los elementos de la lista NO cumple la condicion de la funcion', async(() => {
    let cuadrado = new Cuadrado();
    let cuadrado1 = new Cuadrado();
    let arrayTest: Array<Shape> = [cuadrado, cuadrado, cuadrado1];
    expect(ArrayUtils.anySatisfy(arrayTest, (shape) => {return shape.tipo == 'Circulo'} )).toBeFalsy();
  }));

  it('debe devolver true si alguno los elementos de la lista cumple la condicion de la expresion', async(() => {
    let circulo = new Circulo();
    let cuadrado = new Cuadrado();
    let arrayTest: Array<Shape> = [circulo, cuadrado, cuadrado];
    expect(ArrayUtils.anySatisfyByExpression(arrayTest, 'shape.tipo === "Circulo"', 'shape')).toBeTruthy();
  }));


  it('debe devolver false porque ninguno de los elementos de la lista cumple la condicion de la expresion', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let circulo3 = new Circulo();
    let arrayTest: Array<Shape> = [circulo, circulo2, circulo3];
    expect(ArrayUtils.anySatisfyByExpression(arrayTest, 'shape.tipo === "cuadrado"', 'shape' )).toBeFalsy();
  }));

  it('debe devolver false porque ninguno de los elementos de la lista cumple la condicion de la expresion: == "Cuadrado"', async(() => {
    let circulo = new Circulo();
    let circulo2 = new Circulo();
    let circulo3 = new Circulo();
    let arrayTest: Array<Shape> = [circulo, circulo2, circulo3];
    expect(ArrayUtils.anySatisfyByExpression(arrayTest, '== typeof Shape')).toBeFalsy();
  }));

  it('Debe devolver 2 elementos de diferencia y debe ser un Circulo y un Cuadrado' , async(() => {
    let circulo = new Circulo();
    let cuadrado = new Cuadrado();
    let arrayTestSurce: Array<Shape> = [circulo];
    let arrayTestTarget: Array<Shape> = [cuadrado];
    let res = ArrayUtils.difference(arrayTestSurce, arrayTestTarget);
    console.log('la diferencia entre los array es: ',res)
    expect(res.length).toBe(2);
    expect(res).toContain(circulo);
    expect(res).toContain(cuadrado);
  }));

  it('Debe devolver 2 elementos de complemento y debe ser un Circulo y un Cuadrado' , async(() => {
    let circulo = new Circulo();
    let cuadrado = new Cuadrado();
    let triangulo = new Trinangulo();
    let arrayTestSurce: Array<Shape> = [triangulo];
    let arrayTestTarget: Array<Shape> = [circulo, cuadrado];
    let res = ArrayUtils.complement(arrayTestSurce, arrayTestTarget);
    console.log('el complemento entre los array es: ',res)
    expect(res.length).toBe(2);
    expect(res).toContain(circulo);
    expect(res).toContain(cuadrado);
  }));



});



/**
 * Clase figura para probar los arrayUtils
 */
class Shape {

  tipo: string;
  longitud: number;
  constructor () {}

}

/**
 * Clase figura para probar los arrayUtils
 */
class Circulo extends Shape {

  constructor () {
    super();
    this.tipo = 'Circulo';
  }
}

/**
 * Clase figura para probar los arrayUtils
 */
class Cuadrado extends Shape {

  constructor () {
    super();
    this.tipo = 'Cuadrado';
  }
}

class Trinangulo extends Shape {
  constructor () {
    super();
    this.tipo = 'Triangulo';
  }
}