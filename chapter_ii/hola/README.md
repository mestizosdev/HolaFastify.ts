# Prisma ORM

## Install Prisma as global
```
pnpm add -g prisma
```
## Install the Prisma CLI as a development dependency in the project.
```
pnpm add -D prisma
```
## Set up a new Prisma project with PostgreSQL (default)
```
prisma init
```
## Create user and database in PostgreSQL
```
sudo su - postgres
```
```
psql
```
```
CREATE ROLE hola WITH LOGIN NOSUPERUSER CREATEDB NOCREATEROLE INHERIT NOREPLICATION CONNECTION LIMIT -1 PASSWORD 'h';
```
```
show hba_file;
```
```
vim /var/lib/pgsql/data/pg_hba.conf
```
```
host    all             all             127.0.0.1/32            trust
```
```
sudo systemctl restart postgresql.service
```
```
pgcli -u hola -w h -d postgres
```
```
create database hola
```
```
pgcli -u hola -w h -d hola
```
## Install and generate Prisma Client
```
pnpm add @prisma/client
```