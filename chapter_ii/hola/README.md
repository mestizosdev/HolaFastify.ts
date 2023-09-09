# Prisma ORM

## Create user and database in PostgreSQL.
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
# "local" is for Unix domain socket connections only
local   all             postgres                                peer
local   all             hola                                    trust
# "local" is for Unix domain socket connections only
# IPv4 local connections:
host    all             all             127.0.0.1/32            scram-sha-256
# IPv6 local connections:
host    all             all             ::1/128                 scram-sha-256
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
## Install Prisma as global.
```
pnpm add -g prisma
```
## Install the Prisma CLI as a development dependency in the project.
```
pnpm add -D prisma
```
## Set up a new Prisma project with PostgreSQL (default).
```
prisma init
```
### Show option
```
prisma --help
```
## Create migrations from your Prisma schema, apply them to the database.
```
prisma migrate dev
```
### Show option.
```
prisma migrate --help
```
## Install and generate Prisma Client.
```
pnpm add @prisma/client
```
## Install plugin helper for Fastify.
``` 
pnpm add fastify-plugin
```
## Create prisma plugin 
- In plugins/prisma.ts and register in index.ts
## Start prisma studio
```
prisma studio
```
## Start
```
pnpm run dev
```
