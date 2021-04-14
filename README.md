# Administracion de proyectos de software - [lista de clase](https://docs.google.com/spreadsheets/d/1YNW7OGA0Tlg5OZIzGApcs5kpw6OqHBJ-dGrphITIaFE/edit#gid=0), [syllabus](https://docs.google.com/document/d/1IgpdZBVJzwDjh2xaYJEgKxX7Jbx3TZR3/edit#)
# Semana 1 - Conectividad a servidor, repaso de Linux y editor vi

1. Instalar [github](https://git-scm.com/downloads)
2. Clonar repositorio de clase

- $ git clone https://github.com/adsoftsito/apis.git
- $ cd apis
- $ cd ssh

3. Probar conectividad con SSH a servidor

$  ssh -i user user@35.225.196.111

4. Repaso de comandos linux

-	[linux-commands](https://github.com/adsoftsito/apis/blob/master/w2/linuxcommands.pdf)
-	[vi-editor](https://github.com/adsoftsito/apis/blob/master/w2/vi-editor.pdf)

5. Instalar [docker](https://docs.docker.com/engine/install/centos/)
6. Lectura [introduccion a docker](https://github.com/adsoftsito/apis/blob/master/w2/docker_intro.pdf)
7. Realizar [DockerLab](https://github.com/adsoftsito/apis/blob/master/w2/dockerlab.pdf)
8. Registrarse en [Docker Hub](https://hub.docker.com/)
9. Subir imagen de nodejs a Docker Hub (Punto 5 dockerlab)

# Semana 1, Tareas (Fecha entrega: 15/feb/2021)
1. Crear repositorio personal para tareas de la clase (apis-nombre-apellido), crear carpeta t1, crear ejemplos de programas en diferentes lenguajes de programacion
2. En repositorio crear carpeta t2, en t2.txt subir url de imagen nodejs (Punto 5) en docker hub
3. Crear una pagina simple index.html y publicarla en un Contenedor Docker con Apache en el servidor Centos, montar docker en puerto asignado en excel, crear carpeta T3 y subir SS de la pagina

# Semana 2 - Docker con Angular

1. Realizar Lab de Angular [Maps](https://github.com/adsoftsito/apis/blob/master/w3/dockerfront.pdf)


# Semana 3,  Git Branching Model
1. Analizar diagrama [Git Branching Model](https://github.com/adsoftsito/apis/blob/master/w4/gitBranchingModel.pdf)
2. Realizar [Git Branching Model Lab](https://github.com/adsoftsito/apis/blob/master/w4/gitbranching.pdf)

# Semana 4,  Git Branching Model, React, CI 
1. Terminar laboratorio [Git Branching Model Lab](https://github.com/adsoftsito/apis/blob/master/w4/gitbranching.pdf)
2. Crear cuenta en [Google Cloud Platform](https://console.cloud.google.com/) para proyecto final
3. Realizar practica con framework [react](https://www.udemy.com/course/react-the-beginners-course/)
4. Realizar lab de [Integracion continua](https://github.com/adsoftsito/apis/blob/master/w5/tdd_ci.pdf)

# Semana 4, Tareas (Fecha entrega: 10/mar/2021)
1. Publicar el proyecto To do (react) en un Contenedor Docker con Apache en el servidor Centos, montar docker en puerto asignado en excel, crear carpeta T4 y subir SS de la pagina

# Semana 9, API 
1. Instalar [Java 8](https://www.oracle.com/mx/java/technologies/javase/javase-jdk8-downloads.html)
2. En Windows, instalar [mvn](https://mkyong.com/maven/how-to-install-maven-in-windows/) y [sdkman](https://medium.com/ejemplos-de-programacion/instalar-sdkman-en-windows-524ed9ede7b) 
3. En Linux/Mac, instalar [sdkman](https://sdkman.io)
4. Usando sdkman instalar [spring](https://docs.spring.io/spring-boot/docs/2.0.0.M5/reference/html/getting-started-installing-spring-boot.html) 
5. Realizar	[Java SpringBoot Lab](https://www.callicoder.com/spring-boot-jpa-hibernate-postgresql-restful-crud-api-example/)
6. Instalar y probar API  con [Postman](https://www.postman.com/downloads/)	
7. Correr API como Docker usando [Dockerfile](https://github.com/adsoftsito/ng5-api/blob/master/Dockerfile)

# Semana 10, Tareas (Fecha entrega: 10/mar/2021)
1. Publicar SS de postman con las llamadas a la API corriendo docker del proyecto Answer/questions
2. Publicas SS de postman del proyecto [Contacts](https://docs.google.com/document/d/14dR8REdc-qQ_6_3ZraRO7BJ-i5_6chEGnXv2iKkWdjI/edit?usp=sharing)

# Semana 10, Tokens

1. Clone spring template with Security dependency: git clone https://github.com/adsoftsito/springboot-jwt.git

2. Add Estados: [model](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/model/Estado.java), 
    [controller](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/controller/EstadoController.java),
    [repository](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/repository/EstadoRepository.java) 
    
3. Add municipios: [model](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/model/Municipio.java), 
    [controller](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/controller/MunicipioController.java), 
    [repository](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/repository/MunicipioRepository.java)

4. Add Categorias:  [model](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/model/Categoria.java), 
    [controller](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/controller/CategoriaController.java),
    [repositry](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/repository/CategoriaRepository.java)

5. Add Empresas:  [model](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/model/Empresa.java), 
    [controller](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/controller/EmpresaController.java),
    [repository](https://github.com/adsoftsito/maps-api-jwt/blob/master/src/main/java/com/grokonez/jwtauthentication/repository/EmpresaRepository.java)

6. Populate database from [csv](https://github.com/adsoftsito/data-science-course/tree/master/day1/dataset) using [pgadmin](https://www.pgadmin.org/download/)
7. Test api with [postman](https://www.postman.com/downloads/).	
8. Run as Docker with [Dockerfile](https://github.com/adsoftsito/ng5-api/blob/master/Dockerfile)

# Rubricas

1. [Parcial 1](https://github.com/adsoftsito/apis/blob/master/parcial1/rubrica_parcial1.txt) [Ejemplo Documentacion](https://github.com/IvanMtze/spotify_data_docs)
2. [Parcial 2](https://github.com/adsoftsito/apis/blob/master/w12/rubricaparcial2.txt)
3. [Final](https://github.com/adsoftsito/apis/blob/master/w15/rubrica-proyecto-final.txt)

