# Administracion de proyectos de software - [lista de clase](https://docs.google.com/spreadsheets/d/1YNW7OGA0Tlg5OZIzGApcs5kpw6OqHBJ-dGrphITIaFE/edit#gid=0), [syllabus](https://docs.google.com/document/d/1IgpdZBVJzwDjh2xaYJEgKxX7Jbx3TZR3/edit#)
# Semana 1 - Conectividad a servidor, repaso de Linux y editor vi

1. Instalar [github](https://git-scm.com/downloads)
2. Clonar repositorio de clase

$ git clone https://github.com/adsoftsito/apis.git
$ cd apis
$ cd ssh

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
1. Crear repositorio personal para tareas de la clase (web-nombre-apellido), crear carpeta t1, crear ejemplos de programas en diferentes lenguajes de programacion
2. En repositorio crear carpeta t2, en t2.txt subir url de imagen nodejs (Punto 5) en docker hub
3. Crear una pagina simple index.html y publicarla en un Contenedor Docker con Apache en el servidor Centos, montar docker en puerto asignado en excel, crear carpeta T3 y subir SS de la pagina
