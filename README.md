# Evaluacion y Administracion de proyectos - [lista de clase](https://docs.google.com/spreadsheets/d/1AMwmCJRbTaQ0ma5hkXJqAaaLmkHOR4i8nJbtwZoY6qk/edit?usp=sharing), [syllabus](https://docs.google.com/document/d/1QOCoiO44SPtLgI6f3sVHGgyyO4Mn2sy6/edit?usp=sharing&ouid=103318994033956699072&rtpof=true&sd=true)
# Semana 1 - Conectividad a servidor, repaso de Linux y editor vi

1. Instalar [github](https://git-scm.com/downloads)
2. Clonar repositorio de clase

- $ git clone https://github.com/adsoftsito/apis.git
- $ cd apis
- $ cd ssh

3. Probar conectividad con SSH a servidor

$  ssh -i user user@34.125.173.24

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
0. Crear base de datos en postgres
 - ssh -i user user@35.223.20.167
 - sudo -u postgres createdb youruser-tokens
 - sudo -u postgres psql
 - postgres > \list
 - postgres > \connect youruser-tokens
 - postgres > \dt

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
7. Test api with [postman](https://www.postman.com/downloads/) basado en [Lab tokens](https://grokonez.com/spring-framework/spring-boot/spring-security-jwt-authentication-postgresql-restapis-springboot-spring-mvc-spring-jpa/)	
8. Run as Docker with [Dockerfile](https://github.com/adsoftsito/ng5-api/blob/master/Dockerfile)
9. Clone [react-spring basic demo](https://github.com/adsoftsito/react-springboot-demo)

# Semana 12, Redis (Remote Dictionary Server)

1. Instalar [Redis](https://redis.io/topics/quickstart)
2. Redis - [Comandos basicos](https://codeburst.io/redis-what-and-why-d52b6829813)
3. Redis - [Tipos de datos](https://redis.io/topics/data-types-intro)
4. Laboratorio [Redis como Cache con Node](https://livecodestream.dev/post/beginners-guide-to-redis-and-caching-with-nodejs/)
5. Correr como Docker usando [Dockerfile](https://github.com/adsoftsito/node-redis/blob/master/Dockerfile)

# Semana 13, GraphQL
## Opcional: Repaso de python
	
1. [helloworld](https://github.com/adsoftsito/python/blob/master/w2/helloworld.py)
2. [variables](https://github.com/adsoftsito/python/blob/master/w2/variables.py)
3. [operators](https://github.com/adsoftsito/python/blob/master/w2/operators.py)
4. [placeholders](https://github.com/adsoftsito/python/blob/master/w2/placeholders.py)
5. [lists](https://github.com/adsoftsito/python/blob/master/w3/lists.py)
6. [dictionaries](https://github.com/adsoftsito/python/blob/master/w3/dictionaries.py)
7. [tuples](https://github.com/adsoftsito/python/blob/master/w3/tuples.py)
8. [conditionals](https://github.com/adsoftsito/python/blob/master/w3/conditionals.py)
9. [for-helloworld](https://github.com/adsoftsito/python/blob/master/w4/for-helloworld.py)
10. [for-mathematics](https://github.com/adsoftsito/python/blob/master/w4/for-math.py)
11. [for-data](https://github.com/adsoftsito/python/blob/master/w4/for-data.py)
12. [while-helloworld](https://github.com/adsoftsito/python/blob/master/w4/while-helloworld.py)
13. [while-if](https://github.com/adsoftsito/python/blob/master/w4/while-conditional.py)
14. [files](https://github.com/adsoftsito/python/blob/master/w5/files.py)
	
 ## GraphQL
 
1. Que es [GraphQL](https://www.howtographql.com/basics/0-introduction/)
2. Realizar paso a paso [Graphene Lab](https://www.howtographql.com/graphql-python/0-introduction/), crear archivo [requirements.txt](https://github.com/adsoftsito/adsoft_hackernews/blob/master/requirements.txt)
4. Crear archivo [.env](https://github.com/adsoftsito/adsoft_hackernews/blob/master/.env)
5. Desplegar en docker usando [Dockerfile](https://github.com/adsoftsito/graphql-api/blob/master/Dockerfile) y [docker-Compose.yml](https://github.com/adsoftsito/graphql-api/blob/master/docker-compose.yml)

# Rubricas

1. [Parcial 1](https://github.com/adsoftsito/apis/blob/master/parcial1/rubrica_parcial1.txt) [Ejemplo Documentacion](https://github.com/IvanMtze/spotify_data_docs)
2. [Parcial 2](https://github.com/adsoftsito/apis/blob/master/w12/rubricaparcial2.txt)
3. [Final](https://github.com/adsoftsito/apis/blob/master/w15/rubrica-proyecto-final.txt)

