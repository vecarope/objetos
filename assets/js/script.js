function Estudiante(nombre,carrera,nota){
    let _nombre = nombre;
    let _carrera = carrera || "sin carrera"; 
    let _nota = nota || 0;
    
    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre;
        }
    })

    Object.defineProperty(this,"_setNombre",{
        set:function(new_name){
            return _nombre = new_name;
        }
    })

    Object.defineProperty(this,"_getCarrera",{
        get:function(){
            return _carrera;
        }
    })

    Object.defineProperty(this,"_setCarrera",{
        set:function(new_carrera){
            return _carrera = new_carrera;
        }
    })

    Object.defineProperty(this,"_getNota",{
        get:function(){
            return _nota;
        }
    })

    Object.defineProperty(this,"_setNota",{
        set:function(new_nota){
            return _nota = new_nota;
        }
    })
    
}

Estudiante.prototype.getNombre = function(){
    return this._getNombre;
}

Estudiante.prototype.setNombre = function(new_name){
    return this._setNombre = new_name;
}

Estudiante.prototype.getCarrera = function(){
    return this._getCarrera;
}

Estudiante.prototype.setCarrera = function(new_carrera){
    return this._setCarrera = new_carrera;
}

Estudiante.prototype.getNota = function(){
    return this._getNota;
}

Estudiante.prototype.setNota = function(new_nota){
    return this._setNota = new_nota;
}


var estudiante1 = new Estudiante("Pedro","pedagogia en Matematicas",5);
var estudiante2 = new Estudiante("Juan","ing en informatica",5);

var estudiante3 = new Estudiante("Sandra","ing en construcción",6);
console.log(estudiante1.getNombre());
console.log(estudiante2.getNombre());
estudiante1.setNombre("Pedro Fuentes");
// estudiante1._nombre ="Alejandro bonilla"
console.log(estudiante1.getCarrera());
estudiante2.setCarrera("Ing en informática");
console.log(estudiante2.getCarrera());
console.log(estudiante2.getNota());


//objeto Universidad

function Universidad(nombre,estudiantes){
    var _nombre = nombre;
    var _estudiantes = estudiantes || [];

    Object.defineProperty(this,"_getNombre",{
        get:function(){
            return _nombre;
        }
    })

    Object.defineProperty(this,"_setNombre",{
        set:function(new_name){
            return _nombre = new_name;
        }
    })

    Object.defineProperty(this,"_getEstudiantes",{
        get: function(){
            return _estudiantes;
        }
    })

    Object.defineProperty(this, "_addEstudiante",{
        set:function(estudiante){
            return _estudiantes.push(estudiante);
        }
    })

    Object.defineProperty(this,"_addEstudiantes",{
        set:function(estudiantes){
            estudiantes.forEach(element => {
                return _estudiantes.push(element);
            });
        }
    })

    Object.defineProperty(this,"_setEstudiantes",{
        set: function(new_estudiantes){
            return _estudiantes = new_estudiantes
        }
    })
}

Universidad.prototype.getNombre = function(){
    return this._getNombre;
}

Universidad.prototype.setNombre = function(nombre){
    return this._setNombre = nombre;
}

Universidad.prototype.addEstudiante = function(estudiante){
    return this._addEstudiante = estudiante;
}

Universidad.prototype.addEstudiantes = function(estudiantes){
    return this._addEstudiantes = estudiantes;
}

Universidad.prototype.getEstudiantes = function(){
    return this._getEstudiantes;
}

Universidad.prototype.promedioEstudiantes = function(){
    var sumatoria = 0;
    var promedio = 0;
    this._getEstudiantes.forEach(estudiante=>{
        sumatoria += estudiante.getNota();
    })

    promedio = sumatoria / this._getEstudiantes.length;

    return promedio.toFixed(2);
}


var mi_universidad = new Universidad("U Serena");
console.log(mi_universidad);
console.log(mi_universidad.getNombre());
mi_universidad.addEstudiante(estudiante1)
mi_universidad.addEstudiante(estudiante2)
mi_universidad.addEstudiante(estudiante3);
console.log(mi_universidad.getEstudiantes());

console.log(mi_universidad.promedioEstudiantes());