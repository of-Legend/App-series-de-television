class Serie {
    imagen: string;
    nombre: string;
    categorias: string[];
    directores: Director[];
    actores: Actor[];
    episodios: Episodio[];
  
    constructor(imagen: string, nombre: string, categorias: string[]) {
      this.imagen = imagen;
      this.nombre = nombre;
      this.categorias = categorias;
      this.directores = [];
      this.actores = [];
      this.episodios = [];
    }
  
    mostrarDetalle(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Imagen: ${this.imagen}`);
      console.log(`Categorías: ${this.categorias.join(", ")}`);
  
      console.log("Directores:");
      for (const director of this.directores) {
        director.mostrarDetalle();
      }
  
      console.log("Actores:");
      for (const actor of this.actores) {
        actor.mostrarDetalle();
      }
  
      console.log("Episodios:");
      for (const episodio of this.episodios) {
        episodio.mostrarDetalle();
      }
    }
  
    agregarDirector(director: Director): void {
      this.directores.push(director);
    }
  
    agregarActor(actor: Actor): void {
      this.actores.push(actor);
    }
  
    agregarEpisodio(episodio: Episodio): void {
      this.episodios.push(episodio);
    }
  }
  
  class Director {
    nombre: string;
    fotografia: string;
    descripcion: string;
    seriesDirigidas: Serie[];
  
    constructor(nombre: string, fotografia: string, descripcion: string) {
      this.nombre = nombre;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.seriesDirigidas = [];
    }
  
    mostrarDetalle(): void {
      console.log(`Nombre del director: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Series dirigidas:");
      for (const serie of this.seriesDirigidas) {
        console.log(`- ${serie.nombre}`);
      }
    }
  }
  
  class Actor {
    nombre: string;
    fotografia: string;
    descripcion: string;
    seriesActuadas: Serie[];
  
    constructor(nombre: string, fotografia: string, descripcion: string) {
      this.nombre = nombre;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.seriesActuadas = [];
    }
  
    mostrarDetalle(): void {
      console.log(`Nombre del actor: ${this.nombre}`);
      console.log(`Fotografía: ${this.fotografia}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log("Series actuadas:");
      for (const serie of this.seriesActuadas) {
        console.log(`- ${serie.nombre}`);
      }
    }
  }
  
  class Episodio {
    nombre: string;
    resumen: string;
    duracion: string;
  
    constructor(nombre: string, resumen: string, duracion: string) {
      this.nombre = nombre;
      this.resumen = resumen;
      this.duracion = duracion;
    }
  
    mostrarDetalle(): void {
      console.log(`Nombre del episodio: ${this.nombre}`);
      console.log(`Resumen: ${this.resumen}`);
      console.log(`Duración: ${this.duracion}`);
    }
  }
  
  class Plataforma {
    nombre: string;
    sitioWeb: string;
    planesPrecios: string[];
  
    constructor(nombre: string, sitioWeb: string, planesPrecios: string[]) {
      this.nombre = nombre;
      this.sitioWeb = sitioWeb;
      this.planesPrecios = planesPrecios;
    }
  
    mostrarDetalle(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Sitio web: ${this.sitioWeb}`);
      console.log(`Planes y precios: ${this.planesPrecios.join(", ")}`);
    }
  }
  
  // Implementación de los métodos
  
  // Mostrar el listado de todas las series
  function mostrarListadoSeries(series: Serie[]): void {
    console.log("Listado de series:");
    for (const serie of series) {
      console.log(`- ${serie.nombre}`);
    }
  }
  
  // Mostrar el detalle de una serie en particular
  function mostrarDetalleSerie(serie: Serie): void {
    serie.mostrarDetalle();
  }
  
  // Mostrar el listado de categorías
  function mostrarListadoCategorias(series: Serie[]): void {
    const categorias: string[] = [];
  
    for (const serie of series) {
      for (const categoria of serie.categorias) {
        if (!categorias.includes(categoria)) {
          categorias.push(categoria);
        }
      }
    }
  
    console.log("Listado de categorías:");
    for (const categoria of categorias) {
      console.log(`- ${categoria}`);
    }
  }
  
  // Mostrar el listado de directores y actores de una serie
  function mostrarListadoDirectoresActores(serie: Serie): void {
    console.log(`Directores de la serie "${serie.nombre}":`);
    for (const director of serie.directores) {
      console.log(`- ${director.nombre}`);
    }
  
    console.log(`Actores de la serie "${serie.nombre}":`);
    for (const actor of serie.actores) {
      console.log(`- ${actor.nombre}`);
    }
  }
  
  // Mostrar el detalle de un director y de un actor
  function mostrarDetalleDirector(director: Director): void {
    director.mostrarDetalle();
  }
  
  function mostrarDetalleActor(actor: Actor): void {
    actor.mostrarDetalle();
  }
  
  // Mostrar el listado de las plataformas
  function mostrarListadoPlataformas(plataformas: Plataforma[]): void {
    console.log("Listado de plataformas:");
    for (const plataforma of plataformas) {
      console.log(`- ${plataforma.nombre}`);
    }
  }
  
  // Mostrar detalle de una plataforma
  function mostrarDetallePlataforma(plataforma: Plataforma): void {
    plataforma.mostrarDetalle();
  }
  
  // Crear una nueva serie
  function crearNuevaSerie(imagen: string, nombre: string, categorias: string[]): Serie {
    return new Serie(imagen, nombre, categorias);
  }
  
  // Crear una nueva categoría
  function crearNuevaCategoria(nombre: string): string {
    return nombre;
  }
  
  // Crear un nuevo actor
  function crearNuevoActor(nombre: string, fotografia: string, descripcion: string): Actor {
    return new Actor(nombre, fotografia, descripcion);
  }
  
  // Crear un nuevo director
  function crearNuevoDirector(nombre: string, fotografia: string, descripcion: string): Director {
    return new Director(nombre, fotografia, descripcion);
  }
  
  // Agregar una categoría a una serie
  function agregarCategoriaASerie(serie: Serie, categoria: string): void {
    serie.categorias.push(categoria);
  }
  
  // Creación de instancias y asignación de valores
  
  // Crear nuevos directores
  const director1 = new Director("John Smith", "foto_director1.jpg", " John Smith es un talentoso director de cine reconocido por su estilo visual único y su habilidad para contar historias cautivadoras. Con una carrera de más de dos décadas en la industria cinematográfica, ha dejado una huella imborrable con su enfoque innovador y su pasión por el arte del cine.");
  const director2 = new Director("Laura Montenegro", "LauraMontenegro.jpg", "  Laura Montenegro es una directora de cine talentosa y apasionada que ha dejado una marca significativa en la industria cinematográfica. Con un enfoque único y una visión artística distintiva, ha cautivado a audiencias de todo el mundo con sus películas innovadoras y emocionalmente impactantes.");
  
  // Crear nuevos actores
  const actor1 = new Actor("Lucas Anderson", "_lucas_anderson.jpg", "Lucas Anderson es un talentoso actor de cine con una presencia magnética en la pantalla. Su versatilidad y habilidad para sumergirse en diversos personajes lo han convertido en uno de los actores más solicitados de la industria.");
  const actor2 = new Actor("Isabella Santiago", "foto_actor2.jpg", "Isabella Santiago es una talentosa actriz de cine con una presencia cautivadora en la pantalla. Su belleza natural y su carisma magnético han capturado la atención de audiencias de todo el mundo.");
  
  // Crear nuevos episodios
  const episodio1 = new Episodio("Episodio 1: El Enigma de la Oscuridad", "En este emocionante episodio de la serie, nuestros protagonistas se enfrentan a un misterio envuelto en sombras. La ciudad se encuentra sumida en una oscuridad inusual y perturbadora, sin ninguna explicación aparente. A medida que investigan, descubren que un grupo de villanos ha desatado un poderoso artefacto capaz de sumergir a la ciudad en una eterna noche. Nuestros héroes deben desentrañar el enigma detrás de este artefacto y encontrar una manera de restaurar la luz y la esperanza en la ciudad.", " 45 minutos");
  const episodio2 = new Episodio("Episodio 2 El Despertar del Destino", "En este emocionante episodio de la serie, nuestros protagonistas se enfrentan a un giro inesperado en su viaje. Después de una larga búsqueda, finalmente descubren la ubicación del antiguo artefacto perdido que podría cambiar el curso de la historia. Sin embargo, su camino hacia el artefacto está lleno de peligros y desafíos mortales.", "44 minutos");
  
  // Crear una nueva serie
  const serie1 = new Serie("imagen_serie1.jpg", "Almas en la Ciudad", ["Acción", "Drama"]);
  
  // Asignar directores y actores a la serie
  serie1.agregarDirector(director1);
  serie1.agregarDirector(director2);
  serie1.agregarActor(actor1);
  serie1.agregarActor(actor2);
  
  // Asignar episodios a la serie
  serie1.agregarEpisodio(episodio1);
  serie1.agregarEpisodio(episodio2);
  
  // Crear una nueva plataforma
  const plataforma1 = new Plataforma("Memetflix", "www.memetflix.com", ["Plan 1", "Plan 2"]);
  
  // Mostrar el listado de todas las series
  mostrarListadoSeries([serie1]);
  
  // Mostrar el detalle de una serie en particular
  mostrarDetalleSerie(serie1);
  
  // Mostrar el listado de categorías
  mostrarListadoCategorias([serie1]);
  
  // Mostrar el listado de directores y actores de una serie
  mostrarListadoDirectoresActores(serie1);
  
  // Mostrar el detalle de un director y de un actor
  mostrarDetalleDirector(director1);
  mostrarDetalleActor(actor1);
  
  // Mostrar el listado de las plataformas
  mostrarListadoPlataformas([plataforma1]);
  
  // Mostrar detalle de una plataforma
  mostrarDetallePlataforma(plataforma1);
